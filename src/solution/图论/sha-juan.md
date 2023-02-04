---
title: 阿宁前往沙城
---
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

