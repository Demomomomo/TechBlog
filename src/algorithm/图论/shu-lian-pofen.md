---
title: 树链剖分
---

作用：  
对树上的两点路径或者是对一个子树进行操作，转换为线段树的区间操作  

轻重链剖分
将树剖分成一条条不相交的从祖先到子孙的链  

设size[x]表示以x为根节点的子树的大小（点的个数）  
size[x]=1+sum(size[y]),其中y是x的儿子  

对于每个点x，将儿子中size最大的那个儿子作为它的重儿子，剩下的作为轻儿子，如果有很多个最大重量的儿子，那么任选一个做重儿子  

重边：连接x和x重儿子的边  
轻边：连接x和x轻儿子的边  
重链：重边连起来形成的链，每个点恰好属于一条重链  

例如下图：  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230408185708.png" alt="Pulpit rock" width="504" height="228">  
 

1->3->6->10
对于1来说，以3为根节点的子树的结点个数多，所以1->3是一条重边，对3来说以6为根节点的子树的结点个数多，所以3->6是重边，对6来说只有一个儿子结点10，6->10也是重边  

2->5->9同理  

对于4和7和8这三个叶节点，他们没有子节点且不属于已经选出来的重链，他们本身也是重链  

任何一个轻边下去，链接的就是一个新的重链  

## 步骤

预处理出d[x]表示x的深度  
预处理出f[x]表示x的父亲  
预处理出size[x]表示以x为根节点的子树的大小  
预出理出son[x]表示x的重儿子  
预处理出top[x]表示x所在重链的顶端  
预处理可以通过两边dfs在O(n)的时间完成  
第一遍dfs算出size[x],d[x],f[x]，son[x]  
第二遍dfs算出top[x],x和x的重儿子的top相同  

```cpp
void dfs1(int u,int fa){
	si[u]=1;
	f[u]=fa;
	son[u]=0;
	d[u]=d[fa]+1;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j==fa)continue;
		dfs1(j,u);
		si[u]+=si[j];
		if(si[j]>si[son[u]]) son[u]=j;
	}
}
void dfs2(int u,int topu){
	t[u]=topu;
	if(son[u]) dfs2(son[u],topu);
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j!=f[u]&&j!=son[u]) dfs2(j,j);
	}
}

```

## 求lca
其实也是求两点间的路径的信息的步骤  
求x和y的lca：  
如果x和y在一条重链上，那么他们两个的lca就是深度较小的那个点  
如果不在同一条重链上，将两个点中所在top的深度较大的点直接改为top的父亲，这样跳过了一条轻边...一直重复这个步骤直到两个点在同一条链上  
如下图  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/41AD5C0FB71E966F76A194B969DFF0DD.png" alt="Pulpit rock" width="304" height="328">  

```cpp
int lca(int x,int y){
	while(t[x]!=t[y]){
		if(d[t[x]]<d[t[y]]) swap(x,y);
		x=f[t[x]];
	}
	if(d[x]<d[y]) return x;
	else return y;
}
```

## 树上操作

### 例题1：树链剖分
例题： 
https://www.acwing.com/problem/content/2570/  

题意：  

给定一个n结点的数，根节点为1，每个点有点权  
m次操作，每次操作有一下四种：  
1 x y z：将x到y上路径上每个点点权都加上z  
2 x z：将x子树内每个点点权都加上z  
3 x y：查询x到y路径上每个点的点权之和  
4 x：查询x子树内每个点的点权之和  

分析：  
在第二次dfs过程中，先dfsx的重儿子再dfsx的轻儿子，每条重链都是一条连续的区间，每个点的子树也是一个连续的区间  

所以在第二次dfs的时候需要将每个结点的dfs序给记录下来  


对于子树操作，转换为区间操作，可以用线段树维护  

对于任意路径操作，要么在同一条重链，要么可以分解成最多log条重链+轻边，同样可以转换为区间操作  

如下图：  


<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230408221004.png" alt="Pulpit rock" width="354" height="328">  

以3为根的子树的点的dfs序是一段连续的区间，以2为根的子树的点的dfs序也是一段连续的区间  

那么如果需要将x的子树上所有点点权加上一个数的话，实际上就是将[dfn[x],dfsn[x+si[x]-1]]这段区间里的所有数都加上一个数。

那么新的dfs2如下：  

```cpp
int dfn,nid[N],oid[N];//dfn记录目前走到的点的dfs序，nid[x]=dfn表示编号是x的点的dfs序是dfn，oid[dfn]=x表示dfs序是dfn的点编号是x
void dfs2(int u,int topu){
	t[u]=topu;
	nid[x]=++dfn;
	oid[dfn]=x;
	if(son[u]) dfs2(son[u],topu);
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j!=f[u]&&j!=son[u])dfs2(j,j);
	}
}
//如果对以x为根的子树进行操作，那么区间就是[nid[x],nid[x]+si[x]-1]
```

那么对于在x到y路径上的点的操作，实际上和求lca的过程差不多  

当他们在一条重链上时，就修改x的dfs序到y的dfs序这段区间就可以了  
当不在一条重链上时，将重链头深度较大的点x的变化，变化之前处理x到t[x]这段区间，然后x变成f[t[x]]就可以了  

对于下图：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/41AD5C0FB71E966F76A194B969DFF0DD.png" alt="Pulpit rock" width="304" height="328">  

topx2较低，那么我们就将x到topx2这段区间上的点加上z，然后将x2变成f[topx2]，那么x1和x2已经在同一条重链上了，那么我们就对x2的dfs序到x1的dfs序的这段区间上的点加上z  
 

代码：  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+20;
int n,m;
typedef long long ll;
int e[N],ne[N],h[N],idx;
int f[N],son[N],si[N],d[N],t[N];
int dfn,nid[N],oid[N];
int a[N];
struct name{
	int l,r;
	ll sum,add;
}tr[N*4];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
void dfs1(int u,int fa){
	si[u]=1;
	f[u]=fa;
	son[u]=0;
	d[u]=d[fa]+1;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j==fa)continue;
		dfs1(j,u);
		si[u]+=si[j];
		if(si[j]>si[son[u]])son[u]=j;
	}
}
void dfs2(int u,int topu){
	t[u]=topu;
	nid[u]=++dfn;
	oid[dfn]=u;
	if(son[u]) dfs2(son[u],topu);
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j!=f[u]&&j!=son[u]) dfs2(j,j);
	}
}
void pushdown(int u){
	if(tr[u].add ){
		tr[u<<1].add+=tr[u].add ;
		tr[u<<1|1].add +=tr[u].add ;
		tr[u<<1].sum +=(ll)(tr[u<<1].r -tr[u<<1].l +1)*tr[u].add ;
		tr[u<<1|1].sum +=(tr[u<<1|1].r -tr[u<<1|1].l +1)*tr[u].add;
		tr[u].add =0;
	}
}
void pushup(int u){
	tr[u].sum =tr[u<<1].sum +tr[u<<1|1].sum ;
}
void modify(int u,int l,int r,int v){
	if(l<=tr[u].l &&r>=tr[u].r ){
		tr[u].add +=v;
		tr[u].sum +=(ll)(tr[u].r -tr[u].l +1)*v;
		return ;
	}
	pushdown(u);
	int mid=tr[u].l +tr[u].r >>1;
	if(l<=mid) modify(u<<1,l,r,v);
	if(r>mid) modify(u<<1|1,l,r,v);
	pushup(u);
}

ll sum(int u,int l,int r){
	if(l<=tr[u].l &&r>=tr[u].r )return tr[u].sum ;
	else {
		pushdown(u);
		ll res=0;
		int mid=tr[u].l +tr[u].r >>1;
		if(l<=mid) res+=sum(u<<1,l,r);
		if(r>mid) res+=sum(u<<1|1,l,r);
		return res;
	}
}


void change1(int x,int y,int z){
	while(t[x]!=t[y]){
		if(d[t[x]]<d[t[y]])swap(x,y);
		modify(1,nid[t[x]],nid[x],z);
		x=f[t[x]];
	}
	if(nid[x]<nid[y]) modify(1,nid[x],nid[y],z);
	else modify(1,nid[y],nid[x],z);
}

void change2(int x,int z){
	modify(1,nid[x],nid[x]+si[x]-1,z);
}

ll sum1(int x,int y){
	ll res=0;
	while(t[x]!=t[y]){
		if(d[t[x]]<d[t[y]])swap(x,y);
		res+=sum(1,nid[t[x]],nid[x]);
		x=f[t[x]];
	}
	if(nid[x]<nid[y]) res+=sum(1,nid[x],nid[y]);
	else res+=sum(1,nid[y],nid[x]);
	return res;
}

ll sum2(int x){
	return sum(1,nid[x],nid[x]+si[x]-1);
}

void build(int u,int l,int r){
	tr[u]={l,r};
	if(l==r){
		 tr[u].sum =a[oid[l]];
		 tr[u].add =0;
		 return ;
	}
	int mid=l+r>>1;
	build(u<<1,l,mid);
	build(u<<1|1,mid+1,r);
	pushup(u);
}
int main(){
	cin>>n;
	memset(h,-1,sizeof h);
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	for(int i=1;i<n;i++){
		int a,b;
		cin>>a>>b;
		add(a,b);
		add(b,a);
	}
	dfs1(1,0);
	dfs2(1,1);
	build(1,1,dfn);
	cin>>m;
	for(int i=1;i<=m;i++){
		int op;
		cin>>op;
		if(op==1){
			int a,b,c;
			cin>>a>>b>>c;
			change1(a,b,c);
		}else if(op==2){
			int a,b;
			cin>>a>>b;
			change2(a,b);
		}else if(op==3){
			int a,b;
			cin>>a>>b;
			cout<<sum1(a,b)<<endl;
		}else {
			int x;
			cin>>x;
			cout<<sum2(x)<<endl;
		}
	}
	return 0;
}

```



对于边权进行操作：  

对于每条边，把他安置在深度更深的一端点上，那么实际上就是除了根节点的每个结点上面都有一条边，对边操作可以转换为对点进行操作  

对于下图：  
我们队6和9进行操作  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230410152926.png" alt="Pulpit rock" width="354" height="328">  

9的t更深，所以先对[nid[2],nikd[9]]这段区间进行操作  
然后9走到1,1和6在同一条重链上，所以对[nid[son[1]],nid[6]]进行操作  

代码：  

```cpp
void change(int x,int y,int z){
	while(t[x]!=t[y]){
		if(t[x]<t[y])swap(x,y);
		modify(1,nid[t[x]],nid[x],z);
		x=f[t[x]];
	}
	
	if(nid[x]<nid[y]){
		modify(1,nid[son[x]],nid[y],z);
	}else{
		modify(1,nid[son[y]],nid[x],z);
	}
}
```
### 例题2：软件包管理器
原题链接：  
https://www.acwing.com/problem/content/description/920/  

题意：  
n个软件包之间的关系呈一颗树状  
给出n个包所依赖的包的编号，下标从0开始，0号包是根  
对于两个包a和b，a依赖b  
如果想安装a的话，我们需要先安装b  
如果想卸载b的话，我们需要先卸载a  
那么有m个以下两种操作：  
1. install x:把x安装上  
2. uninstall x:卸载x  

对于每个安装和卸载，找出改变状态的包的个数  
如果a已经被安装，那么再安装a的改变状态的包的个数为0  


思路：  

对于安装a改变状态的包个数，实际上是a到根节点的路径上的点的总数减去已经安装的点的个数  
找出这个个数之后将这条路径上的所有点的状态都改成安装  

对于卸载a改变状态的包个数，实际上是以a为根的子树中有几个安装的包的个数  
找出这个个数之后将这条路径上的所有点的状态都改成卸载  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
int e[N],ne[N],h[N],idx;
int si[N],d[N],f[N],son[N],t[N];
int a[N];
int nid[N],oid[N],dfn;
int n,m;
struct name{
	int l,r;
	int sum,lazy;
}tr[N*4];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
void dfs1(int u,int fa){
	si[u]=1;
	son[u]=0;
	f[u]=fa;
	d[u]=d[fa]+1;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j==fa)continue;
		dfs1(j,u);
		si[u]+=si[j];
		if(si[j]>si[son[u]])son[u]=j;
	}
}
void dfs2(int u,int topu){
	t[u]=topu;
	nid[u]=++dfn;
	oid[dfn]=u;
	if(son[u])dfs2(son[u],topu);
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j!=f[u]&&j!=son[u]) dfs2(j,j);
	}
}
void pushup(int u){
	tr[u].sum =tr[u<<1].sum +tr[u<<1|1].sum ;
}
void build(int u,int l,int r){
	tr[u]={l,r};
	if(l==r){
		tr[u].lazy =-1;
		tr[u].sum =0;
		return ;
	}
	int mid=l+r>>1;
	build(u<<1,l,mid);
	build(u<<1|1,mid+1,r);
}

void pushdown(int u){
	if(tr[u].lazy ==-1) return ;
	tr[u<<1].lazy =tr[u].lazy ;
	tr[u<<1|1].lazy =tr[u].lazy ;
	tr[u<<1].sum =tr[u].lazy *(tr[u<<1].r -tr[u<<1].l +1);
	tr[u<<1|1].sum =tr[u].lazy *(tr[u<<1|1].r -tr[u<<1|1].l +1);
	tr[u].lazy =-1;
}

int query(int u,int l,int r){//询问这个区间有多少个机器被安装                    
	if(l<=tr[u].l &&r>=tr[u].r ){
		return tr[u].sum ;
	}
	int res=0;
	pushdown(u);
	int mid=tr[u].l +tr[u].r >>1;
	if(l<=mid) res+=query(u<<1,l,r);
	if(r>mid) res+=query(u<<1|1,l,r);
	return res;
}


void modify(int u,int l,int r,int d){//将这个区间全部修改为d
	if(l<=tr[u].l&&r>=tr[u].r ){
		tr[u].sum =d*(tr[u].r -tr[u].l +1);
		tr[u].lazy=d;
		return ;
	}
	pushdown(u);
	int mid=tr[u].l +tr[u].r >>1;
	if(l<=mid) modify(u<<1,l,r,d);
	if(r>mid) modify(u<<1|1,l,r,d);
	pushup(u);
} 

int sumd(int x,int y){//记录这条路径上一共有几个点
	int res=0;
	while(t[x]!=t[y]){
		if(t[x]<t[y])swap(x,y);
		res+=nid[x]-nid[t[x]]+1;
		x=f[t[x]];
	}
	if(nid[x]<nid[y]) res+=nid[y]-nid[x]+1;
	else res+=nid[x]-nid[y]+1;
	return res;
}

int sum(int x,int y){//这条路径上有几个被安装的点
	int res=0;
	while(t[x]!=t[y]){
		if(t[x]<t[y]) swap(x,y);
		res+=query(1,nid[t[x]],nid[x]);
		x=f[t[x]];
	}
	if(nid[x]<nid[y]) res+=query(1,nid[x],nid[y]);
	else res+=query(1,nid[y],nid[x]);
	return res;
}


void mo(int x,int y,int z){//将这条路径上的所有点都改为安装
	while(t[x]!=t[y]){
		if(t[x]<t[y])swap(x,y);
		modify(1,nid[t[x]],nid[x],z);
		x=f[t[x]];
	}
	if(nid[x]<nid[y]) modify(1,nid[x],nid[y],z);
	else modify(1,nid[y],nid[x],z);
}
int main(){
	cin>>n;
	memset(h,-1,sizeof h);
	for(int i=2;i<=n;i++){
		int x;
		cin>>x;
		x++;
		add(x,i);
		add(i,x);
	}
	dfs1(1,0);
	dfs2(1,1);
	build(1,1,n);
	cin>>m;
	for(int i=1;i<=m;i++){
		string op;
		int x;
		cin>>op>>x;
		x++;
		if(op=="install"){
			if(query(1,nid[x],nid[x])==1) cout<<0<<endl;
			else {
				cout<<sumd(1,x)-sum(1,x)<<endl;
				mo(1,x,1);
			}
		}else{
			if(query(1,nid[x],nid[x])==0) cout<<0<<endl;
			else{
				cout<<query(1,nid[x],nid[x]+si[x]-1)<<endl;
				modify(1,nid[x],nid[x]+si[x]-1,0);
			}
		}
	}
	return 0;
}
```





## 树上差分

### 作用1：将一条路径上的所有点的点权加上一个数

实际上也是利用差分的性质

先用dfs将树中的点都进行编号，用nid来记录每个点的dfs序  
用v[i]来记录dfs序为i的结点的点权  
然后对于一段[x,y]的路径，要求把这段路径上的点权都加上某个数z，那么实际上就是将和nid[x]和nid[y]的v都加上z，再将设x和y的lca编号为k，那么再将nid[k]的v和nid[f[k]]的v都减去z  
```cpp
v[nid[x]]+=z;
v[nid[y]]+=z;
v[nid[lca(x,y)]]-=z;
v[nid[f[lca(x,y)]]]-=z;
```
那么最后再进行一遍dfs，结点i的点权就是以i为子树的所有点的点权总和  

```cpp
void dfs(int u){
	if(son[u])dfs(son[u]);
	v[nid[u]]+=v[nid[son[u]]];
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(j!=f[u]&&j!=son[u]){
			dfs(j);
			v[nid[u]]+=v[nid[j];
		}
	}
}
//最后算出的v[nid[x]]就是x的点权
```

如下图：  

![68298D381BC0DC206F6E5F9D53416499](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/68298D381BC0DC206F6E5F9D53416499.png)

设刚开始的点权都是0，我们对于[3,4]这条路径上的点的点权进行+3操作，那么最终的答案是图1，那么我们对3和4处的点权+3，对1和2处的点权-3，那么以1为根的子树点权总和是0，以2为根的子树的点权总和是3，以3为根的子树的点权总和是3...可以发现以i为根的子树的点权的总和就是i实际的点权  

### 作用2：将这条路径上的所有祖先点权都加上一个数

如果以i为根的子树如果包含了给出的一条路径[x,y]中至少一个节点，那么i这个点的点权就需要加上z  

实际上就是x和y处的v加上z，lca(x,y)处的v减去z，最后进行一遍dfs求以i为根的子树的点权总和，就是要求的点的点权  





