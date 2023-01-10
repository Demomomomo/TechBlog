---
title: 二分图
---
## 概念
将一个图的点分成两部分，当这两部分里的所有点所连的边都是在两部分的点之间连（没有一条边所连的点属于同一个部分），那么这个图就是二分图

一个图是二分图的话当且仅当这个图里没有奇数环

## 染色法判断二分图

遍历n个点，如果他没有被染色的话，我们就递归把他染上1
递归函数：先把这个点染色，然后把与他相连的没有染色的染成另外一种颜色，如果染完之后不满足题意返回false，如果与他相连的点已经被染色并且和他颜色相同，那么不合题意返回false。

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
int n,m;
int ne[N],e[N],idx,h[N],w[N];
int col[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool dfs(int u,int c){
	col[u]=c;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!col[j]){
			if(!dfs(j,3-c))return false;
		}else{
			if(col[j]==c)return false;
		}
	}
	return true;
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b,c;
		cin>>a>>b;
		add(a,b);
		add(b,a);
	}
	bool f=true;
	for(int i=1;i<=n;i++){
		if(!col[i]){
			if(!dfs(i,1)){
				f=false;
				break;
			}
		}
	}
	if(f)cout<<"Yes"<<endl;
	else cout<<"No"<<endl;
	return 0;
}
```
## 例题1：关押罪犯
n个罪犯，每个罪犯之间有一个怨气值，m对罪犯之间有怨气，现在把他们分到两个房间，怎样分配能让同一个房间里的罪犯相互之间的最大的怨气值最小，求出这个最小值

我们可以用二分来做这道题，设同一个房间里的罪犯相互之间的最大怨气值是mid，那我们就把严格>mid的一对罪犯分别关押到两个不同的房间，看看有没有解，其实就是保留边权>mid的边，判断他是不是一个二分图。
设最优解是x的话，大于x的数都能分成二分图，因为大于x的数相当于在x组成的二分图上删边，是可以组成的。

```cpp
const int N=20000+10,M=100000+10;
int e[2*M],ne[2*M],idx,h[2*M];
int n,m;
struct name{
	int a,b,c;
}q[M];
int co[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool dfs(int u,int con){
	co[u]=con;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(co[j]==0){
			if(!dfs(j,3-con)) return false;
		}else{
			if(co[j]==con) return false;
		}
	}
	return true;
}
bool cheek(int mid){
	idx=0;
	memset(h,-1,sizeof h);
	memset(co,0,sizeof co);
	for(int i=1;i<=m;i++){
		if(q[i].c >mid){
			add(q[i].a ,q[i].b );
			add(q[i].b ,q[i].a );
		}
	}
	bool f=true;
	for(int i=1;i<=n;i++){
		if(co[i]==0){
			if(!dfs(i,1)){
				f=false;
				break;
			}
		}
	}
	return f;
}
int main(){
	cin>>n>>m;
	int mx=0;
	for(int i=1;i<=m;i++){
		cin>>q[i].a >>q[i].b >>q[i].c ;
		mx=max(mx,q[i].c );
	}
	int l=0,r=mx;
	while(l<r){
		int mid=l+r>>1;
		if(cheek(mid)) r=mid;
		else l=mid+1;
	}
	cout<<l<<endl;
	return 0;
}
```

## 匈牙利算法找二分图最大匹配数
时间复杂度：最坏nm，实际运行时间远小于nm
匹配数：在一个二分图里，设第一个集合为a，第二个集合为b，那么一条边的一端是集合a中的点，另一端是集合b集合中的点，那么这个边就算一个匹配

二分图的匹配是说，有一条边在两个部分之间连接两个点，那么这对点就算一个匹配数
每次遍历第一部分的点
当这个点能匹配了个数就++
能匹配：遍历这个点他所连的第二部分的边，如果这个边没有匹配，那么就匹配成功
如果被匹配了，再判断这个点匹配的点能不能与其他点匹配成功，如果能成功说明这个点也能成功和他匹配
```cpp
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N=250010;
int ne[N],idx,e[N],h[N];
int n1,n2,m;
bool st[N];
int match[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool find(int u){
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!st[j]){
			st[j]=true;
			if(match[j]==0||find(match[j])){
				match[j]=u;
				return true;
			}
		}
	}
	return false;
}

int main(){
	cin>>n1>>n2>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b;
		cin>>a>>b;
		add(a,b);
	}
	int res=0;
	for(int i=1;i<=n1;i++){
		for(int j=1;j<=n2;j++)st[j]=false;
		if(find(i)){
			res++;
		}
	}
	cout<<res<<endl;
	return 0;
}


```

## 增广路径
对于二分图的匹配，匹配成功的点之间的边叫做匹配边，点叫匹配点
增广路径就是从一个左非匹配点开始走，先走非匹配边再走匹配边，再走非匹配边再走匹配边...最后走到一个右非匹配点的路径
最大匹配=不存在增广路径

## 二分图的最小顶点覆盖
等于二分图的最大匹配
意思就是用最少的点覆盖所有边
其实就是二分图的最大匹配，因为每一次匹配成功，那么就说明与这两个点相连的其他的点不会再与他们两个匹配，那么与他们两个点相连的所有边相当于被删掉了，因为每次都保证ab点一定会匹配，那么在b点之前连的边匹不了的情况下，其实就是把匹配不了但是我们算上了的边删掉，他们两个匹配成功了相当于是把所有与ab相关的边都给删掉，匹配数也就是能覆盖所有边的最小点数。

## 有向无环图的最小路径覆盖
等于顶点数-最大匹配
实质是用最少的不相交的路经数覆盖所有的点（路径是包括很多分支）
做法：拆点，把一条路的起始点和终点分别放在ab两个集合里，在之间连一条边


## 最大独立集独立集
等于顶点数-最大匹配数
二分图的独立集是在这个集合里，所有的点之间没有边
最大独立集是在二分图中，选出的点之间没有边的最大的点数。

## 有向图的最小路径重复点覆盖
用最少的路径数覆盖所有点（路径之间可以相交）
第一步：求传递闭包之后的新图G
第二步：求新图的最小路径点覆盖
传递闭包是指，若图中两点uu和vv有一条路径，则直接在uu和vv之间建一条边，可以用类似floyd的方法计算。下面摘自《算法竞赛进阶指南》：在最小路径可重复点覆盖中，若两条路径 …-> u -> p -> v -> … 和 …-> x -> p -> y -> … 在点pp相交，则我们在原图中添加一条边 (x, y)，让第二条路径直接走 x -> y，就可以避免重复覆盖点p。进一步地，如果我们把原图中所有间接连通的点对 x, y 直接连上有向边，那么任何“有路径相交的点覆盖”一定都能转化成“没有路径相交的点覆盖”。
做传递闭包用Floyd算法，如果i->k,k->j之间有一条边，那么直接把i->j这条边连上

应用：一个有向无环图，求找出最多的点，使其中任意的两个点都不在一条路径上

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=210;
bool g[N][N];
bool st[N];
int match[N];
int n,m;
bool dfs(int u){
	for(int i=1;i<=n;i++){
		if(!g[u][i])continue;
		if(st[i])continue;
		st[i]=true;
		if(match[i]==0||dfs(match[i])){
			match[i]=u;
			return true;
		}
	}
	return false;
}
vector<int> yy;
int main(){
	cin>>n>>m;
	while(m--){
		int x,y;
		cin>>x>>y;
		g[x][y]=true;
	}
	for(int k=1;k<=n;k++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				g[i][j]|=g[i][k]&g[k][j];//做传递闭包
			}
		}
	}
	int ans=0;
	for(int i=1;i<=n;i++){ 
	memset(st,false,sizeof st);
		if(dfs(i)) ans++;
	}
	cout<<n-ans<<endl;
	return 0;
}

```




## 例一：任务安排
https://www.acwing.com/problem/content/378/
有ab两台机器人，n个任务，每个任务既可以在a机器上以ai的模式执行，在b机器上bi的模式执行，但是对于每次模式的转换都会重启一次机器比较浪费时间，a机器和b机器刚开始时候的模式都是x，那么求在完成n个任务的情况下转换次数最小是多少
n个任务就看成是n条边，a机器上的模式看成是一个集合，b机器上的模式看成是一个集合，每个任务就相当于在a的ai模式和b的bi模式上建边（可以在a上以ai模式做也可以在b上以bi的模式做），那么对于一个图来说，其实就是把模式看成点，任务看成边，找最少的模式完成所有任务实际就是求最少的顶点覆盖所有边
而且注意，因为刚开始的时候ab是模式x，那么与他们相连的任务不用重启也能完成，所以我们就把所有端点包括x的边全都删去。

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=110;
int n,m,k;
int match[N];
int g[N][N];
bool st[N];
bool dfs(int u){
	for(int i=0;i<m;i++){
		if(!st[i]&&g[u][i]){
			st[i]=1;
			if(match[i]==-1||dfs(match[i])){
				match[i]=u;
				return true;
			}
		}
	}
	return false;
}
int main(){
	while(cin>>n>>m>>k){
		int ans=0;
		memset(match,-1,sizeof match);
		memset(g,0,sizeof g);
		while(k--){
			int id,x,y;
			cin>>id>>x>>y;
			if(x==0||y==0){
				continue;
			}
			g[x][y]=1;
		}
		for(int i=0;i<n;i++){
			for(int j=0;j<m;j++)st[j]=false;
			if(dfs(i))ans++;
		}
		cout<<ans<<endl;
	}
	return 0;
}
```


## 例二：棋盘覆盖
https://www.acwing.com/problem/content/374/
有一个n*n的棋盘，有长为2宽为1的纸牌，有些格子不能覆盖，求覆盖这个棋盘且纸牌不重叠的纸牌的最大数量
把这个纸牌看成一条连接两个点的边，求不覆盖的最大数其实就是求最大匹配数，但是我们还要满足这两条边在不同的集合里，即这些边组成的图是二分图，n*n的棋盘上的所有格子是可以分成二分图的，就是下标和为奇数的属于a集合，偶数为b集合，那么也满足二分图的性质，那么我们只需要建立a到b的边，求最大匹配数就可以了。
对于棋盘，棋盘可以按照i+j是奇数还是偶数来分配是到a集合还是b集合，当然在做匹配之前要判断一下一个点连的所有边是不是满足与他的集合不同，如果是的话我们可以用二分图的方法来做
因为每次匹配是对两个点做匹配，点是二维，所以我们的match数组也要开二维，并且类型是pii：match[xx][yy]={x,y}表示b集合中坐标为（xx，yy）的点与a集合中坐标是（x，y）的点匹配，然后判重数组也是二维：bool st[N][N]，用邻接矩阵来存的话，对于每个是a集合的点（i+j是奇数），遍历与他相连的所有边，看看能不能匹配成功

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=20000+10,M=100000+10;
int g[100][100];
int e[2*N],ne[2*N],idx,h[2*N];
int n,m;
int match[N];
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
bool st[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
vector<int> yy1,yy2;
bool dfs(int u){
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!st[j]){
			st[j]=true;
			if(match[j]==0||dfs(match[j])){
				match[j]=u;
				return true;
			}
		}
	}
	return false;
}
int main(){
	cin>>n>>m;
	map<int,int> mp;
	memset(h,-1,sizeof h);
	while(m--){
		int x,y;
		cin>>x>>y;
		g[x][y]=1;
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if((i+j)%2&&g[i][j]==0){
				yy1.push_back(i*n+j);
				for(int p=0;p<4;p++){
					int xx=i+dx[p];
					int yy=j+dy[p];
					if(xx<1||xx>n||yy<1||yy>n)continue;
					if(g[xx][yy]==1)continue;
					add(i*n+j,xx*n+yy);
					if(mp[xx*n+yy]==0){
						yy2.push_back(xx*n+yy);
						mp[xx*n+yy]=1;
					}
				}
			}
		}
	}
	int ans=0;
	for(int i=0;i<yy1.size();i++){
		for(int j=0;j<yy2.size();j++) st[yy2[j]]=false;
		int id=yy1[i];
		if(dfs(id)) ans++;
	}
	cout<<ans<<endl;
	return 0;
}

```


## 例三：骑士放置
给定一个 N×M 的棋盘，有一些格子禁止放棋子。

问棋盘上最多能放多少个不能互相攻击的骑士（国际象棋的“骑士”，类似于中国象棋的“马”，按照“日”字攻击，但没有中国象棋“别马腿”的规则）。

输入格式
第一行包含三个整数 N,M,T，其中 T 表示禁止放置的格子的数量。

接下来 T 行每行包含两个整数 x 和 y，表示位于第 x 行第 y 列的格子禁止放置，行列数从 1 开始。

输出格式
输出一个整数表示结果。

数据范围
1≤N,M≤100

思路：就是求最大独立集个数，将不能放置的相连构成一个二分图，那么能放的最大的就是最大独立集的大小。

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=110;
int n,m,k;
bool st[N][N];
bool g[N][N];
pair<int,int> match[N][N];
int dx[8]={-1,1,-2,2,-2,2,-1,1};
int dy[8]={-2,-2,-1,-1,1,1,2,2};
bool dfs(int x,int y){
	for(int i=0;i<8;i++){
		int xx=x+dx[i];
		int yy=y+dy[i];
		if(xx<1||xx>n||yy<1||yy>m)continue;
		if(g[xx][yy])continue;
		if(st[xx][yy])continue;
		st[xx][yy]=true;
		pair<int,int> op=match[xx][yy];
		if(op.first==0||dfs(op.first,op.second)){
			match[xx][yy]={x,y};
			return true;
		}
	}
	return false;
}
int main(){
	cin>>n>>m>>k;
	for(int i=0;i<k;i++){
		int a,b;
		cin>>a>>b;
		g[a][b]=true;
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			if((i+j)%2)continue;
			if(g[i][j])continue;
			memset(st,false,sizeof st);
			if(dfs(i,j)) ans++;
		}
	}
	cout<<n*m-k-ans<<endl;
	return 0;
}
```


