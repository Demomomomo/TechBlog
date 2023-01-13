---
title: 最小生成树
---
## 概念
最小生成树是由n个点，n-1条边组成的权值最小的树的结构（边权正负都可以）
## Prim求最小生成树
时间复杂度O（n*n）（稠密图）
循环n次，每次找到不在联通块内距离集合最近的点，（距离就是我们保留的树的边权），然后把他加到集合里  
然后用这个点更新其他点到集合的距离  
```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
typedef pair<int,int> pii;
const int N=510;
int n,m,k;
int dist[N];
int g[N][N];
bool  st[N];
int prim(){
	memset(dist,0x3f,sizeof dist);
	int res=0;
	for(int i=0;i<n;i++){
		int t=-1;
		for(int j=1;j<=n;j++){
			if(!st[j]&&(t==-1||dist[j]<dist[t])) t=j;
		}
		if(i&&dist[t]==0x3f3f3f3f)return -0x3f3f3f3f;//如果不是第一个点而且距离很大说明不联通，构不成最小生成树
		st[t]=true;
		if(i)res+=dist[t];
		for(int j=1;j<=n;j++){
			dist[j]=min(dist[j],g[t][j]);
		}
	}
	return res;
}
int main(){
	cin>>n>>m;
	memset(g,0x3f,sizeof g);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		g[a][b]=g[b][a]=min(g[a][b],c);
	}
	int t=prim();
	if(t==-0x3f3f3f3f)cout<<"impossible"<<endl;
	else cout<<t<<endl;
	return 0;
}
```

## Kruskal求最小生成树
时间复杂度O（mlogm）（稀疏图）
先对每个边权按从小到大的顺序排序  
然后列举每个边，如果链接这条边的两个点没在一个集合里，那么就把这个边加入集合  
两个点的集合合并，点数++  
如果点数 < n-1的话说明不联通  
否则输出边的和  
```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
typedef pair<int,int> pii;
const int N=2e5+10;
int n,m;
struct name{
	int a,b,c;
}q[N];
bool cmp(name a,name b){
	return a.c <b.c ;
}
int p[N];
int find(int x){
	if(p[x]!=x) p[x]=find(p[x]);
	return p[x];
}
int main(){
	cin>>n>>m;
	for(int i=1;i<=m;i++){
		int a,b,c;
		cin>>a>>b>>c;
		q[i]={a,b,c};
	}
	sort(q+1,q+1+m,cmp);
	int res=0,cnt=0;
	for(int i=1;i<=n;i++)p[i]=i;
	for(int i=1;i<=m;i++){
		int a=q[i].a ,b=q[i].b ,c=q[i].c ;
		a=find(a),b=find(b);
		if(a!=b){
			cnt++;
			res+=c;
			p[a]=b;
		}
	}
	if(cnt<n-1){
		cout<<"impossible"<<endl;
	}else cout<<res<<endl;
	return 0;
}

```
## 次小生成树
对于一张无向图，如果存在最小生成树和次小生成树，那么对于任何一颗最小生成树，都有一颗次小生成树，使得这两颗树只有一条边不同