---
title: LCA
---
## 概念
两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先  
预处理时间复杂度O（nlogn）  
查询的时间复杂度O(logn)  
## 倍增算法求最近共同祖先
预处理每个点向上走2^k步到达的父节点的编号  
f[i][j]表示从i开始向上走2^j步所能走到的点（0<=j<=log(n))  
当j==0，f[i][j]==i的父节点  
当j>0，f[i][j]=f[f[i][j-1],j-1]//先跳2^(j-1)步到f[i][j-1]，再跳2^(j-1)步就到了f[i][j]  
depth[x]表示x所在的深度（规定根节点是1，所有点的深度是到根节点的距离+1）  
步骤：  
（1）将两个点x，y跳到同一层（将较深的点跳到和较浅的点的同一层）  
先看x和y差多少层：depth(x)-depth[y]  
然后利用二进制拼凑，从二进制的最高位开始往下枚举，当跳了2^k步时的depth[f[x,k]]>=depth[y],说明跳k步的深度还在y下面，可以继续跳.如果从i开始跳2^k步会跳过跟结点，那么fa[i][j]=0,depth[0]=0  
（2）让两个点同时往上跳，一直跳到他们的最近公共祖先的下一层  

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
}
```


