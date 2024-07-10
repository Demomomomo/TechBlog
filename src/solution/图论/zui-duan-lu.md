---
title: 最短路
---

## 阿宁前往沙城
原题链接：https://ac.nowcoder.com/acm/contest/46814/I  

题意：有编号为1~n的n个城堡，要从1号城市到n号城市，可以在任何时候选择两条道路，一条道路时间变为1，并且毁灭另一条道路。被毁灭的道路无法通行，并且无法被技能选中。  
求从1号城市到n号城市所需要的最短时间。  


思路：贪心的想，当我们走到i的时候，可以将他上一条走过的路毁灭，将下一个他要走的路径长度改为1，但是从第一个点开始走的时候，因为他之前没有要走的路，那么我们这个路径的长度先保留，剩下的要走的路径的长度都设为1，先算剩下的道路要走的条数  
那么我们就先按边权为1，从n号点bfs一下，再遍历与1号点相连的边所连的点，如果这个点到n的路径条数加上1到这个点的路径< m的话，说明还有其他的不是这条路上的路径可以销毁，那么就把1到这个点的路径的边权改为1。  

（因为我们是从n点开始bfs再找与1号点相连的点，所以会漏掉当n=1的情况，特判一下=0就好了）  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=4e5+10,M=5e5+10;
typedef long long ll;
int n,m,idx;
int h[N],ne[N],e[N];
ll w[M];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
ll d[N];
bool st[N];
void bfs(){
	memset(d,0x3f,sizeof d);
	d[n]=0;
	queue<int> q;
	q.push(n);
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		if(st[t])continue;
		st[t]=true;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(!st[j]&&d[j]>d[t]+1){
				d[j]=d[t]+1;
				q.push(j); 
			}
		}
	} 
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
		add(b,a,c);
	}
	bfs();
	ll ans=0x3f3f3f3f;
	for(int i=h[1];i!=-1;i=ne[i]){
		int j=e[i];
		ll ww=w[i];
		if(m>d[j]+1){
			ww=1;
		}
		ans=min(ans,ww+d[j]);
	}
	if(n==1){
		ans=0;
	}
	cout<<ans<<endl;
	return 0;
}
```

## H - 提瓦特之旅

原题链接：  

https://vjudge.net/contest/532518#problem/H  

题意：  
一个有n个点，m条边的无向图，从u点到v点花费的时间和从v到u花费的时间都是C（u，v），并且当经过路上的第i个点的时候再加上额外花费的时间wi。给出q个询问，每个询问给出t，w1,w2,w3...wn-1：询问从1到t，走到第i个点额外花费的时间是wi的时候花费的最短时间  

思路：  

求从第1个点走到第t个点经过i条边的最短距离，那么经过了i条边额外的时间花费就是w1~wi  

那么我们分别枚举从1到t这个点在经过i条边的条件下的最短路取最小  

用bellman-Ford算法来预处理从1出发，经过i条边到j的最短距离，用d[i][j]表示  

那么当进行每次操作的时候枚举i，对d[i][t]+w1+...wi取最小就可以了  

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
int d[505][505],ba[505][505];
const int INF=1e16;
struct name{
	int a,b,w;
}q[100005];
int t,n,m;
int a[505],s[505];
void bellman(){
	for(int i=0;i<=n;i++){
		for(int j=0;j<=n;j++){
			d[i][j]=INF;
		}
	}
	d[0][1]=0;
	for(int i=1;i<=n-1;i++){
		memcpy(ba,d,sizeof d);
		for(int j=1;j<=m;j++){
			int a=q[j].a ,b=q[j].b ,w=q[j].w;
			d[i][a]=min(d[i][a],d[i-1][b]+w);
			d[i][b]=min(d[i][b],d[i-1][a]+w);
		}
	}
}
signed main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	cin>>n>>m;
	for(int i=1;i<=m;i++){
		cin>>q[i].a >>q[i].b >>q[i].w;
	}
	bellman();
	cin>>t;
	while(t--){
		int x;
		cin>>x;
		for(int i=1;i<=n-1;i++){
			cin>>a[i];
			s[i]=s[i-1]+a[i];
		}
		int ans=INF;
		for(int i=0;i<=n-1;i++){
			ans=min(ans,d[i][x]+s[i]);
		}
		cout<<ans<<endl;
	}
	return 0;
}
```
