---
title: BFS
---

一般求最小距离  
数组d记录第一次到达这个点的最短距离。  
初始状态加入队列，将初始状态的距离设为0  
当队列不空的时候一直循环：取出队头，拓展队头，如果拓展的点没有出现过，那么我们就将他的距离用队头的距离更新之后加入队列。  


## 联通块模型
可以在线性时间内找到某个点所在的连通块  
作用：找联通块（几片池塘，几块房间）  
每次遍历，把没有遍历过的点进行一次bfs：  
加入队中  
当队列不空的时候，取队头  
拓展队头，如果拓展的点满足更新条件被更新，那么就加入队列中。所有加入队列中的点需要记录已经被遍历过。  

## 最短路模型

求从一个点走到另一个点的最短路。  

设起点坐标为(se,sy)，终点坐标为(ex,ey)  

用数组d[i][j]来记录(i,j)到起点最短的距离，st[i][j]来记录这个点是否被走过  

那么我们用一个小根堆来存  

将起点的距离和坐标加进去，每次取距离起点最短距离的点，用这个点更新他附近的值，那么可以保证每个值在第一次更新的时候都是由最短的路走过来的。  

当第一次搜到终点的时候，就是到终点的最短距离，直接return就可以了  

```cpp
void bfs(){
	d[sx][sy]=0;
	priority_queue<ip,vector<ip>,greater<ip> > q;
	q.push({0,{sx,sy}});
	while(q.size() ){
		ip t=q.top() ;
		q.pop() ;
		int dist=t.first ;
		int x=t.second .first;
		int y=t.second .second;
		for(int i=0;i<4;i++){
			int xx=x+dx[i];
			int yy=y+dy[i];
			if(xx<1||xx>n||yy<1||yy>n) continue;
			if(st[xx][yy]) continue;
			d[xx][yy]=dist+1;
			if(xx==ex&&yy==ey) return;
			st[xx][yy]=true;
			q.push({d[xx][yy],{xx,yy}}); 
		}
	} 
}


```

### 例题：PUBG
原题链接：  
https://ac.nowcoder.com/acm/contest/118/A  
题意：  
有一个n*n的矩阵，每个格子里都有一个值，从值是-1的点开始走，到值为-2的格子结束。每走到一个格子拿走格子里的数。求从起点格子到终点格子的路径上收集的值的最小值。  

思路：  
实际上就是在走到某个格子的时候距离加上了格子里的数，那么我们按照求最短路的方法，在每次更新的时候把权值设为a[i][j]即可。  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
int n;
const int N=100+10;
int sx,sy,ex,ey;
int a[N][N];
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int d[N][N];
bool st[N][N];
typedef pair<int,pair<int,int> > ip;
void bfs(){
	d[sx][sy]=0;
	priority_queue<ip,vector<ip>,greater<ip> > q;
	q.push({0,{sx,sy}});
	while(q.size() ){
		ip t=q.top() ;
		q.pop() ;
		int dist=t.first ;
		int x=t.second .first;
		int y=t.second .second;
		for(int i=0;i<4;i++){
			int xx=x+dx[i];
			int yy=y+dy[i];
			if(xx<1||xx>n||yy<1||yy>n) continue;
			if(st[xx][yy]) continue;
			d[xx][yy]=dist+a[xx][yy];
			if(xx==ex&&yy==ey) return;
			st[xx][yy]=true;
			q.push({d[xx][yy],{xx,yy}}); 
		}
	} 
}
void sove(){
	memset(d,0x3f,sizeof d);
	memset(st,0,sizeof st);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cin>>a[i][j];
			if(a[i][j]==-1){
				sx=i;
				sy=j;
				a[i][j]=0;
			}else if(a[i][j]==-2){
				ex=i;
				ey=j;
				a[i][j]=0;
			}
		}
	}
	bfs();
	cout<<d[ex][ey]<<endl;
}
int main(){
	while(scanf("%d",&n)!=EOF){
		sove();
	}

	return 0;
}
```





## 最小步数模型

有一个字符串，每次有几种操作，问最少需要多少步达到目标字符串  

将初始状态加入队中，没次按照步骤拓展队头，并更新字符的最小步数  







