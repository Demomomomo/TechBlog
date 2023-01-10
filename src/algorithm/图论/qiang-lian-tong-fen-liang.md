---
title: 强联通分量
---
## 概念
在有向图中选取一个点集S，对于点集S中的任意两个点u，v，u可以到达v，v也可以到达u，则称这个点集S是强连通的

如果一个强连通点集S中不能再加入任何点使他仍然强联通，则S是强连通分量

强连通分量其实就是两两点之间能相互可达的最大点集

## 对无向图求强连通分量
只要相互联通的点都属于一个强连通分量

方法：那么我们就从1~n遍历没有走过的点，从一个点出发进行一遍dfs，走到的点进行标记，那么标记的点实际上就是一个强连通分量，对于一个没有访问过的点，说明我们找到了一个新的联通分量，再从这个点做一遍dfs即可找到新的强连通分量

所以无向图的强连通分量数相当于对图做了几遍dfs


## Kosaraju求有向图的强联通分量

思想：按照1~n的顺序去按后序遍历dfs原图求出栈序列yy，然后再按q的逆序倒序dfs遍历反图，依次得到每个强联通分量

为了方便构图，我们可以用二维邻接表来存原图和反图，对于每个数组都开二维，h[0][u]表示原图中以编号为u为起点的头结点，h[1][u]表示反图中以编号u为起点的头结点，ne，e数组都这样来表示
f[x]表示x属于哪个强连通分量(用于缩点)
按后序遍历dfs原图：
```cpp
void dfs1(int x){
	vis[x]=true;
	for(int i=h[0][x];i!=-1;i=ne[0][i]){
		int j=e[0][i];
		if(!vis[j])dfs1(j);
	}
	yy.push_back(x);
}
```
dfs反图：
```cpp
void dfs2(int x,int y){
	vis[x]=false;
	f[x]=y;
	v[y]=max(v[y],v[x]);
	for(int i=h[1][x];i!=-1;i=ne[1][i]){
		int j=e[1][i];
		if(vis[j]) dfs2(j,y);
	}
}
```
完整代码：
```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=2e4+10,M=1e5+10;
int n,m;
int e[3][M],ne[3][M],h[3][M],idx1,idx2,idx3;
int o[M],p[M];
bool vis[N];
int f[N];
vector<int> yy;
int d[N];
void add1(int a,int b){
	e[0][idx1]=b;
	ne[0][idx1]=h[0][a];
	h[0][a]=idx1++;
}
void add2(int a,int b){
	e[1][idx2]=b;
	ne[1][idx2]=h[1][a];
	h[1][a]=idx2++;
}
void dfs1(int x){
	vis[x]=true;
	for(int i=h[0][x];i!=-1;i=ne[0][i]){
		int j=e[0][i];
		if(!vis[j])dfs1(j);
	}
	yy.push_back(x);
}
void dfs2(int x,int y){
	vis[x]=false;
	f[x]=y;
	for(int i=h[1][x];i!=-1;i=ne[1][i]){
		int j=e[1][i];
		if(vis[j])dfs2(j,y);
	}
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		cin>>o[i]>>p[i];
		add1(o[i],p[i]);
		add2(p[i],o[i]);
	}
	for(int i=1;i<=n;i++){
		if(!vis[i])dfs1(i);
	}
	for(int i=n-1;i>=0;i--){
		if(vis[yy[i]])dfs2(yy[i],yy[i]);
	}
	return 0;
}
```

缩点：一个强联通分量缩点之后变成了一个点，那么原来的图就变成了有向无环图

实现：按照原图经过缩点操作建一个新图，这个新图就是有向无环图
我们对原图遍历每条边，如果有一条x->y的边，那么在新图中添加f[x]->f[y]这条边
如果f[x]==f[y]，那么就不用建（过滤掉自环）
那么缩点建新图的操作就是：
```cpp
void add3(int a,int b){
	e[2][idx2]=b;
	ne[2][idx2]=h[2][a];
	h[2][a]=idx2++;
}
void build(){
	for(int i=1;i<=m;i++){
		if(f[o[i]]!=f[p[i]]) d[f[o[i]]]++;
	}	
}
```
## 例题1：求从每个点开始，能到达的所有点中的最大点权


在一个有向图中，每个点i都有一个点权v[i]，那么求从每个点开始，能到达的所有点中的最大点权

思路：
设dp[i]是从i开始能到达的所有点中的最大点权
那么我们每次对于i需要列举i能到达哪些点j，然后dp[i]=max(dp[i],dp[j])就行了
但是由于图中可能有环，而dp的特点是无后效性，所以当前的图可能不满足题意
我们可以把原图中的强联通分量缩点，缩点之后的新图就是一个有向无环图
那么问题就简化成了对一个有向无环图求从每个点出发能到达的所有点的最大点权
那么我们就可以用dp，先将新图拓扑排序之后，倒序算出每个点当起点能到达的点权最大值，那么dp就得以实现

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=2e5+10;
int e[3][N],ne[3][N],h[3][N],idx;
int n,m;
int o[N],p[N];
bool vis[N];
int v[N];
int f[N];
int dp[N];
int d[N];
vector<int> yy,zz;
void add1(int a,int b){
	e[0][idx]=b;
	ne[0][idx]=h[0][a];
	h[0][a]=idx++;
}
void add2(int a,int b){
	e[1][idx]=b;
	ne[1][idx]=h[1][a];
	h[1][a]=idx++;
}
void add3(int a,int b){
	e[2][idx]=b;
	ne[2][idx]=h[2][a];
	h[2][a]=idx++;
}
void dfs1(int u){
	vis[u]=true;
	for(int i=h[0][u];i!=-1;i=ne[0][i]){
		int j=e[0][i];
		if(!vis[j])dfs1(j);
	}
	yy.push_back(u); 
}
void dfs2(int x,int y){
	vis[x]=false;
	f[x]=y;
	v[y]=max(v[y],v[x]);
	for(int i=h[1][x];i!=-1;i=ne[1][i]){
		int j=e[1][i];
		if(vis[j]) dfs2(j,y);
	}
}
void torp(){
	queue<int> q;
	map<int,int> mp;//记录每种f[i]加入过没，每种联通分量只能加一次
	for(int i=1;i<=n;i++){
		if(d[f[i]]==0&&mp[f[i]]==0){
			mp[f[i]]=1;
			q.push(f[i]);
		}
		 
	}
	while(q.size()){
		int t=q.front();
		q.pop();
		zz.push_back(t);
		for(int i=h[2][t];i!=-1;i=ne[2][i]){
			int j=e[2][i];
			d[j]--;
			if(d[j]==0)q.push(j);
		} 
	}
}
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>v[i];
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		cin>>o[i]>>p[i];
		add1(o[i],p[i]);
		add2(p[i],o[i]);
	}
	for(int i=1;i<=n;i++){
		if(!vis[i]) dfs1(i);
	}
	for(int i=yy.size()-1 ;i>=0;i--){
		if(vis[yy[i]])dfs2(yy[i],yy[i]);
	}
	for(int i=1;i<=m;i++){
		if(f[o[i]]!=f[p[i]]) {
			add3(f[o[i]],f[p[i]]),d[f[p[i]]]++;
		}
		
	}
	torp();
	for(int i=zz.size() -1;i>=0;i--){
		int id=zz[i];
		dp[id]=v[id];
		for(int k=h[2][id];k!=-1;k=ne[2][k]){
			int j=e[2][k];
			dp[id]=max(dp[id],dp[j]);
		}
	}
	for(int i=1;i<=n;i++){
		cout<<dp[f[i]]<<" ";
	}
	return 0;
}
```

## 例题2：受欢迎的牛
题目链接：https://www.acwing.com/problem/content/1176/

每一头牛的愿望就是变成一头最受欢迎的牛。

现在有 N 头牛，编号从 1 到 N，给你 M 对整数 (A,B)，表示牛 A 认为牛 B 受欢迎。

这种关系是具有传递性的，如果 A 认为 B 受欢迎，B 认为 C 受欢迎，那么牛 A 也认为牛 C 受欢迎。

你的任务是求出有多少头牛被除自己之外的所有牛认为是受欢迎的。

输入格式
第一行两个数 N,M；

接下来 M 行，每行两个数 A,B，意思是 A 认为 B 是受欢迎的（给出的信息有可能重复，即有可能出现多个 A,B）。

输出格式
输出被除自己之外的所有牛认为是受欢迎的牛的数量。

数据范围
1≤N≤1e4
1≤M≤5e4
输入样例：
```cpp
3 3
1 2
2 1
2 3

```
输出样例：
```cpp
1
```
思路：对于一个有向无环图来说，要受所有的牛的欢迎，那么他是最后一个遍历的点，出度为0，而且如果有两个及以上的点的出度为0的话就不能保证所有的点都最后到这个点（因为会有一个分支走向其他出度为0的点）。
所以我们要先缩点把这个图变成有向无环图，对缩点之后的新图判断有几个点的出度是0：
如果>=2那么没有点能让所有点都走到他
如果==1，我们就看这个缩之后的点的强连通分量的编号，找到所有跟这个编号相等的点的个数

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=2e4+10,M=1e5+10;
int n,m;
int e[3][M],ne[3][M],h[3][M],idx1,idx2,idx3;
int o[M],p[M];
bool vis[N];
int f[N];
vector<int> yy;
int d[N];
void add1(int a,int b){
	e[0][idx1]=b;
	ne[0][idx1]=h[0][a];
	h[0][a]=idx1++;
}
void add2(int a,int b){
	e[1][idx2]=b;
	ne[1][idx2]=h[1][a];
	h[1][a]=idx2++;
}
void add3(int a,int b){
	e[2][idx2]=b;
	ne[2][idx2]=h[2][a];
	h[2][a]=idx2++;
}
void build(){
	for(int i=1;i<=m;i++){
		if(f[o[i]]!=f[p[i]]) d[f[o[i]]]++;
	}	
}
void dfs1(int x){
	vis[x]=true;
	for(int i=h[0][x];i!=-1;i=ne[0][i]){
		int j=e[0][i];
		if(!vis[j])dfs1(j);
	}
	yy.push_back(x);
}
void dfs2(int x,int y){
	vis[x]=false;
	f[x]=y;
	for(int i=h[1][x];i!=-1;i=ne[1][i]){
		int j=e[1][i];
		if(vis[j])dfs2(j,y);
	}
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		cin>>o[i]>>p[i];
		add1(o[i],p[i]);
		add2(p[i],o[i]);
	}
	for(int i=1;i<=n;i++){
		if(!vis[i])dfs1(i);
	}
	for(int i=n-1;i>=0;i--){
		if(vis[yy[i]])dfs2(yy[i],yy[i]);
	}
	build();
	map<int,int> mp;
	int con=0,id;
	for(int i=1;i<=n;i++){
		if(mp[f[i]])continue;
		mp[f[i]]=1;
		if(d[f[i]]==0)con++,id=f[i];
	}
	if(con>=2){
		cout<<0<<endl;
	}else{
		int ans=0;
		for(int i=1;i<=n;i++){
			if(f[i]==id)ans++;
		}
		cout<<ans<<endl;
	}
	return 0;
}
```



