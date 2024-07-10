---
title: LCA
---
## 概念
两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先  
预处理时间复杂度O（nlogn）  
查询的时间复杂度O(logn)  

## st表

f[i][j]表示下标从i开始，长度为2^j 的区间的最大/最小值  

### 初始化：  
所有的f[i][0]都是a[i]  
将f[i][j]平均分成两段：$[i,i+2^{j-1}-1]和[i+2^{j-1},i+2^{j}-1]$ (长度都是 $2^{j-1}$)，然后取最大/最小就可以了  

以最大值为例  

```cpp
void init(){
	for(int j=0;j<=19;j++){
		for(int i=1;i+(1<<j)-1<=n;i++){
			if(j==0)f[i][j]=a[i];
			else f[i][j]=max(f[i][j-1],f[i+(1<<j-1)][j-1]);
		}
	}
}
```

### 询问：  
[l,r]区间最大值  

区间长度为len，那么求出len是2的几次幂（下取整），即  
k=log(len)/log(2);  

对于这段区间，以l开头长度为 $2^{k}$ 的区间和以r结尾长度为 $2^{k}$ 的区间肯定覆盖了[l,r]，那么就取这两段的最大值，即  

```cpp
int query(int l,int r){
	int len=r-l+1;
	int k=log(len)/log(2);
	int ans=max(f[l][k],f[r-(1<<k)+1][k]);
	return ans;
}
```


## 倍增算法求最近共同祖先

### 预处理：  

时间复杂度O(nlogn)  
预处理p[i][j]，表示结点i的第 $2^{j}$ 个祖先  
转移方程为：  
p[i][0]=f[i];  
p[i][j]=p[p[i][j-1]][j-1]  

```cpp
void pro(){
	for(int i=1;i<=n;i++){
		for(int j=0;1<<j<=n;j++){
			p[i][j]=-1;
		}
	}
	for(int j=0;1<<j<=n;j++){
		for(int i=1;i<=n;i++){
			if(j==0) p[i][j]=f[i];
			else if(p[i][j-1]!=-1) p[i][j]=p[p[i][j-1]][j-1];
		}
	}
}
```


### 找x和y的lca  

步骤：  

1.将x和y中深度较大的一个点往上跳到和另一个点相同深度  
如果x=y，那么lca(x,y)=x，算法结束，否则进行下一步  
2.x和y同时向上枚举一个2的幂的步长：$2^{j-1}$ ，如果x向上走 $2^{i}$ 步和y向上走 $2^{i}$ 步不是同一个点的话，则继续向上走 $2^{i}$ 步（逐步缩小i）,如果是同一个点就停止    
3.最后lca(x,y)=f[x]=f[y]  

```cpp
int lca(int x,int y){
	int log;//记录不超过x的深度的2的最大幂
	if(d[x]<d[y])swap(x,y);
	for(log=1;1<<log<=d[x];log++);
	log--;
	for(int i=log;i>=0;i--){//从大到小枚举
		if(d[x]-(1<<i)>=d[y]) x=p[x][i];//如果x走了2^i步之后还是在v的下面，那么x就跳上去
	}
	if(x==y) return x;
	for(int i=log;i>=0;i--){
		if(p[x][i]!=-1&&p[x][i]!=p[y][i]){//如果x没有走到头并且两个点走i步的祖先不一样，那么说明还在分支上，继续往上走
			x=p[x][i];
			y=p[y][i];
		}
	}
	return f[x];//到最后返回他俩的父亲结点
}
```




预处理depth和f：
```cpp
void bfs(int root){
	memset(depth,0x3f,sizeof depth);
	depth[0]=0;
	depth[root]=1;
	queue<int> q;
	q.push(root);
	while(q.size()){
		int t=q.front();
		q.pop();
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(depth[j]>depth[t]+1){
				depth[j]=depth[t]+1;
				q.push(j);
				fa[j][0]=t;
				for(int k=1;k<=15;k++){
					fa[j][k]=fa[fa[j][k-1]][k-1];
				}
			}
		}
	}
}
```
倍增法求最近共同祖先：
```cpp
int lca(int a,int b){
	if(depth[a]<depth[b])swap(a,b);
	for(int i=15;i>=0;i--){
		if(depth[fa[a][i]]>=depth[b]){
			a=fa[a][i];
		}
	}
	if(a==b)return a;
	for(int i=15;i>=0;i--){
		if(fa[a][i]!=fa[b][i]){
			a=fa[a][i];
			b=fa[b][i];
		}
	}
	return fa[a][0];
}
```



## 例题1：祖孙询问
给定一棵包含 n 个节点的有根无向树，节点编号互不相同，但不一定是 1∼n。  

有 m 个询问，每个询问给出了一对节点的编号 x 和 y，询问 x 与 y 的祖孙关系。  

输入格式  
输入第一行包括一个整数 表示节点个数；  

接下来 n 行每行一对整数 a 和 b，表示 a 和 b 之间有一条无向边。如果 b 是 −1，那么 a 就是树的根；  

第 n+2 行是一个整数 m 表示询问个数；  

接下来 m 行，每行两个不同的正整数 x 和 y，表示一个询问。  

输出格式  
对于每一个询问，若 x 是 y 的祖先则输出 1，若 y 是 x 的祖先则输出 2，否则输出 0。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=4e4+10,M=2e5+10;

int n,m,depth[N],fa[N][18];
int e[M],ne[M],idx,h[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
void bfs(int root){
	memset(depth,0x3f,sizeof depth);
	depth[0]=0;
	depth[root]=1;
	queue<int> q;
	q.push(root);
	while(q.size()){
		int t=q.front();
		q.pop();
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(depth[j]>depth[t]+1){
				depth[j]=depth[t]+1;
				q.push(j);
				fa[j][0]=t;
				for(int k=1;k<=15;k++){
					fa[j][k]=fa[fa[j][k-1]][k-1];
				}
			}
		}
	}
}
int lca(int a,int b){
	if(depth[a]<depth[b])swap(a,b);
	for(int i=15;i>=0;i--){
		if(depth[fa[a][i]]>=depth[b]){
			a=fa[a][i];
		}
	}
	if(a==b)return a;
	for(int i=15;i>=0;i--){
		if(fa[a][i]!=fa[b][i]){
			a=fa[a][i];
			b=fa[b][i];
		}
	}
	return fa[a][0];
}
int main(){
	cin>>n;
	memset(h,-1,sizeof h);
	int root=0;
	for(int i=1;i<=n;i++){
		int a,b;
		cin>>a>>b;
		if(b==-1){
			root=a;
		}else{
			add(a,b);
			add(b,a);
		}
	}
	bfs(root);
	cin>>m;
	while(m--){
		int a,b;
		cin>>a>>b;
		int op=lca(a,b);
		if(op==a)cout<<1<<endl;
		else if(op==b)cout<<2<<endl;
		else cout<<0<<endl;
	}
	return 0;
}
```
## tarjan-离线求lca
时间复杂度：O(n+m)  
把所有点分成三大类：  
1.已经搜索完并且回溯完的点，标记为2  
2.正在搜索的分支，标记为1  
3.还没有搜索到的点，标记为0  
思路：  
设我们要求x和y的最近公共祖先，正在搜索的点是x，那么如果y已经被搜索过并且回溯过的话，y和x的最近公共祖先就是他们在x的分支上相交的点z，那么我们提前可以把y合并到z代表的集合中，当询问的时候直接输出y所在的集合  
合并操作：当每个点遍历完之后把他合并到父节点所在的集合  
对于正在搜索的点，找到所有与这个点相关的询问  
核心就是在搜索到一个点u的时候，标记他为正在搜索的点，先把与u相连的j点都搜一下，然后再把j合并到u的集合里，这个时候把与u有关的提问遍历一下，如果提问里的点已经回溯完，那么这个点所在的集合就是他们的最近共同祖先，回溯完之后u标记为2。  


## 求两点间距离
在树中，两点之间只有一条路径  
d[x]表示x到根节点的距离  
如果我们想求x和y之间的距离，设z为他们的最近公共祖先，可以发现他们的距离=d[x]+d[y]-2*d[z]  


## 例题2：在树中求两点间距离
n个点n-1条边，m个询问，每次问两个点的距离
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef pair<int,int> pii;
const int N=1e4+10,M=1e5;
int n,m;
int e[M],ne[M],h[N],idx,w[M];
int p[N];
int st[N];
vector<pii> q[N];
int res[M];
int d[N];
int find(int x){
	if(p[x]!=x) p[x]=find(p[x]);
	return p[x];
}
void bfs(){
	memset(d,-1,sizeof d);
	d[1]=0;
	queue<int> qq;
	qq.push(1);
	while(qq.size()){
		int t=qq.front();
		qq.pop();
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]==-1){
				d[j]=d[t]+w[i];
				qq.push(j);
			}
		}
	}
}
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
void tarjan(int u){
	st[u]=1;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(st[j]==0){
			tarjan(j);
			p[j]=u;
		}
	}
	for(auto v:q[u]){
		int id=v.second;
		int y=v.first;
		if(st[y]==2){
			int z=find(y);
			res[id]=d[u]+d[y]-2*d[z];
		}
	}
	st[u]=2;
}

int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<n;i++){
		int a,b,c;
		cin>>a>>b>>c;
		if(a==b)continue;
		add(a,b,c);
		add(b,a,c);
	}
	for(int i=1;i<=m;i++){
		int a,b;
		cin>>a>>b;
		if(a==b)continue;
		q[a].push_back({b,i});
		q[b].push_back({a,i});
	}
	for(int i=1;i<=n;i++)p[i]=i;
	bfs();
	tarjan(1);
	for(int i=1;i<=m;i++){
		cout<<res[i]<<endl;
	}
	return 0;
};
```


