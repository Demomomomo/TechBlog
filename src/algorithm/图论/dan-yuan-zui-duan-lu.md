---
title: 最短路
---
## 单源最短路

## 所有边权都是正数

### 朴素版dijkstra算法（稠密图

时间复杂度O（n*n）  
g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小  
然后进行dijk算法：  
d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0  
进行n次循环，每次找到一个没有被确定的最短距离d[t]  
再用d[t]来更新每个点到1的最小距离（d[j]=min(d[j],d[t]+g[t][j]))  
如果求n到1的最短距离，如果最后算出的d[n]>=0x3f3f3f3f,那么说明没有路能从1到达n，否则的话输出d[n]就可以了


```cpp
#include<bits/stdc++.h>
const int N=500+10;
int n,m;
int g[N][N];
int d[N];
bool st[N];

int dijk(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	for(int i=0;i<n;i++){
		int t=-1;
		for(int j=1;j<=n;j++){
			if(!st[j]&&(t==-1||d[t]>d[j]))t=j;
		}
		st[t]=true;
		for(int j=1;j<=n;j++){
			d[j]=min(d[j],d[t]+g[t][j]);
		}
	}
	if(d[n]>=0x3f3f3f3f)return -1;
	return d[n];
}
void sove(){
	cin>>n>>m;
	memset(g,0x3f,sizeof g);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		g[a][b]=min(g[a][b],c);
	}
	int t=dijk();
	cout<<t<<endl;
}

```


### 堆优化版dijkstra算法（稀疏图
时间复杂度O(mlogn）  
堆优化版实际上就是用一个小根堆来存已经确定距离的点的距离和编号  
最开始将1加入堆  
当堆不空的时候每次取已经确定距离的最小的点，将与它相连的点的距离更新，如果能够更新的话那么更新的点的距离就已经是最短的了，那么把他加入堆中  
如果最后的值>=0x3f3f3f3f说明没有路能从1到这个点，否则输出d值
```cpp
#include<bits/stdc++.h>
const int N=150000+10;
int n,m;
int d[N];
bool st[N];
int e[N],ne[N],idx,h[N],w[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
int dijk(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	priority_queue<pii,vector<pii>,greater<pii> > q;
	q.push({0,1});
	while(q.size() ){
		pii t=q.top() ;
		q.pop() ;
		int ver=t.second ;
		int dis=t.first ;
		if(st[ver])continue;
		st[ver]=true;
		for(int i=h[ver];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>dis+w[i]){
				d[j]=dis+w[i];
				q.push({d[j],j}); 
			}
		}
	} 
	if(d[n]>=0x3f3f3f3f)return -1;
	return d[n];
}
void sove(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
	}
	int t=dijk();
	cout<<t<<endl;
}
```

### 例题：昂贵的聘礼
原题链接：https://www.acwing.com/problem/content/description/905/

题意：每个点有一个直接购买的价格，也有相应的替代品id，对于每个id拿到之后，那么拿到他的价格就会降低到一个数cost，每个物品还有等级，如果我们选的物品的等级最大等级差超过m就不能交易，而且每次交易只能与他等级低的人交易，等级差小于等于m，求买到1花费的最小价格  

思路：因为每个物品都可以直接买，那么我们可以加一个虚拟原点直接连到每个点上，边权是对应物品的价格，表示可以直接买这件物品，那么从虚拟原点出发找到1的最短路就行了。  
对于等级的问题，我们可以枚举每个包含1的等级的区间，然后对这个区间进行dijk算法，每次判断更新的物品在不在这个区间就行了。  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=110;
typedef long long ll;
typedef pair<long,long> pii;
int n,m;
ll w[N][N];
bool st[N];
ll ans;
ll d[N];
ll v;
int p[N];
void dijk(int down,int up){
	memset(d,0x3f,sizeof d);
	memset(st,false,sizeof st);
	d[0]=0;
	for(int i=0;i<=n;i++){//因为加了一个虚拟原点，所以要循环n+1次
		int t=-1;
		for(int j=0;j<=n;j++){
			if(!st[j]&&(t==-1||d[j]<d[t])){
				t=j;
			}
		}
		st[t]=1;
		for(int j=1;j<=n;j++){
			if(p[j]>=down&&p[j]<=up){//如果在这个区间
				d[j]=min(d[t]+w[t][j],d[j]);//那么可以更新
			}
		}
	}
	ans=min(ans,d[1]);
}
int main(){
	cin>>m>>n;
	memset(w,0x3f,sizeof w);
	for(int i=0;i<=n;i++)w[i][i]=0;
	for(int i=1;i<=n;i++){
		int con;
		cin>>v>>p[i]>>con;
		w[0][i]=v;
		for(int j=1;j<=con;j++){
			ll c;
			int b;
			cin>>b>>c;
			w[b][i]=min(w[b][i],c);
		
		}
	}
	ans=0x3f3f3f3f;
	for(int i=p[1]-m;i<=p[1];i++) dijk(i,i+m);
	cout<<ans<<endl;
	return 0;
}
```


## 存在负权边

### bellman-ford算法（有边数限制可用
时间复杂度O（nm）  
存在负权回路的时候不一定存在最短路  
用结构体存m条边，分别存起点，终点和权值  
先循环n次，每次遍历所有边（遍历结构体）(循环第k次的意思是，从1号点经过不超过k条边走到每个点的最短距离)    
注意每次遍历的时候，因为每次d数组在跟着变化，所以我们额外用一个ba数组来存d原来的值，每次用ba数组的值更新d数组就不会使d受影响
如果有第n次迭代有更新的话就说明有n条边，不重复走的走了n+1个点，但是我们只有n个点，所以可以判断出有负环  
（这个算法限制了次数，所以最后不会正无穷，那么最后和正无穷的一半进行比较，如果大于这个值就返回负无穷（因为有负权边），否则的话返回值）  


求从1开始走向n的不超过k条边的最短路（如果没有边数限制那么k=n-1）  
```cpp
#include<bits/stdc++.h>
const int N=10000+10;
int n,m,k;
struct name{
	int a,b,w;
}q[N];
int d[N],ba[N];
int bellman(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	for(int i=0;i<k;i++){
		memcpy(ba,d,sizeof d);
		for(int j=0;j<m;j++){
			int a=q[j].a ,b=q[j].b ,w=q[j].w ;
			d[b]=min(d[b],ba[a]+w);
		}
	}
	if(d[n]>0x3f3f3f3f)return -0x3f3f3f3f;
	else return d[n];
}
void sove(){
	cin>>n>>m>>k;
	for(int i=0;i<m;i++){
		int a,b,w;
		cin>>a>>b>>w;
		q[i]={a,b,w};
	}
	int t=bellman();

	if(t==-0x3f3f3f3f)cout<<"impossible"<<endl;
	else cout<<t<<endl;
}
```

#### 判断负环

本来是循环n-1次遍历所有边,那么我们再遍历一遍左右边，如果还能更新d数组的话，说明有负环存在

```cpp
bool bellman(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	for(int i=0;i<n-1;i++){
		memcpy(ba,d,sizeof d);
		for(int j=0;j<m;j++){
			int a=q[j].a ,b=q[j].b ,w=q[j].w ;
			d[b]=min(d[b],ba[a]+w);
		}
	}
	bool f=false;
	memcpy(ba,d,sizeof d);
	for(int i=0;i<m;i++){
		int a=q[i].a,b=q[i].b,w=q[i].w;
		if(d[b]>ba[a]+w){
			f=true;
			break;
		}
	}
	return f;
}
```




### spfa算法(可判断负环)
时间复杂度：一般O（m），最坏O（nm）  
spfa是对bellman的优化，先把

#### 求最短路
spfa是对bell的优化，先把1放入队列里，只要一个点被更新变小了就加入队里，当队列不空的时候取队头，用队头来更新每条出边  
用st数组来记录是否在队列里，然后先将1入队，将1的状态改为true，然后当队列不空，取队头，pop出队头之后把队头的状态改为false，然后拿队头来更新出边  
每次更新判断一下是否能更新，如果能更新的话我们更新之后再判断一下这个出边是否在队列里，如果不在的话加入队列并且把这个出边的状态改变  
（注意st数组标记是优化，如果不加的话会t，这个不限制次数的话一般都取最大，所以能到最大值正无穷，最后和正无穷比）  
(卡spfa一般都是网格形状的）  

```cpp
#include<bits/stdc++.h>
const int N=100000+10;
int n,m;
int e[N],ne[N],idx,w[N],h[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool st[N];
int d[N];
int spfa(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	queue<int> q;
	q.push(1);
	st[1]=true;//st记录的是在队列中的元素
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		st[t]=false;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>d[t]+w[i]){
				d[j]=d[t]+w[i];
				if(!st[j]){
					q.push(j);
					st[j]=true;
				}
				
			}
		}
	}
	if(d[n]>=0x3f3f3f3f/2)return -0x3f3f3f3f;
	return d[n];
}
void sove(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
	}
	int t=spfa();
	if(t==-0x3f3f3f3f)cout<<"impossible"<<endl;
	else cout<<t<<endl;
}
```


#### 判断负环

d【x】记录1->x的最短距离，cnt【x】来记录这条最短距离的边数，更新：d[x]=d[t]+w[i];cnt[x]=cnt[t]+1;  
当某个cnt[x]>=n的时候，就说明存在了负环  
判断负环的话我们要把所有的点都加入队列，不能只把1加入，因为只把1加入只能保证从1出发的点的路径上有没有负环  
所有点都放入的话枚举所有点加入然后改变状态  


```cpp
#include<bits/stdc++.h>
const int N=100000+10;
int n,m;
int e[N],ne[N],idx,w[N],h[N],cnt[N];
bool st[N];
int d[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool spfa(){
	memset(d,0x3f,sizeof d);
	d[1]=0;
	queue<int> q;
	for(int i=1;i<=n;i++){
		q.push(i);
		st[i]=true; 
	}
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		st[t]=false;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>d[t]+w[i]){
				d[j]=d[t]+w[i];
				cnt[j]=cnt[t]+1;
				if(cnt[j]>=n)return true;
				if(!st[j]){
					q.push(j);
					st[j]=true; 
				}
			}
		}
	}
	return false;
}
void sove(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
	}
	if(spfa())cout<<"Yes"<<endl;
	else cout<<"No"<<endl;
}
```


## 多源最短路
起点和终点都不确定的最短路  
时间复杂度O（n* n *n）  
思路：
用邻接矩阵来存储边d[i][j]存i到j的边的长度  
三重循环：  
第一重循环循环中间点，第二第三重循环循环两边点  
```cpp
//初始化：

memset(d,0x3f,sizeof d);
for(int i=1;i<=n;i++)d[i][i]=0;

//求最短路

	for(int k=1;k<=n;k++) 
		for(int i=1;i<=n;i++)
			for(int j=1;j<=n;j++)
				d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
```




## 单源最短路的综合应用

### 与dfs结合
例题：新年好  
原题链接：https://www.acwing.com/problem/content/1137/  
题意：一个人从车站1出发要去abcde五个人家拜年（顺序随意），有n个车站，m条双向道路，每条路有花费的时间，请问选择怎样的一条路径使他在路上花费的时间最少？  

思路：我们可以先确定拜访五个亲戚的顺序，那么有5！种顺序  
那么对于一种顺序，比如：1 2 3 4 5  
那么结果实际上就是从1到2的最短路+2到3的最短路+3到4的最短路+4到5的最短路（对每个车站做一遍dijk  
但这样做的话时间复杂度是5！* 5 *m，很容易超时  
那么我们可以换一下顺序，预处理一下以1和五个点为起点的最短路，再深搜一下所有路径的最短路  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=50005,M=2e5+10;
int n,m;
int h[N],e[M],ne[M],w[M],idx;
int d[6][N];
int a[N];
bool v[N];
typedef pair<int,int> pii;
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
void dijk(int st,int d[]){
	memset(d,0x3f,N*4);//因为传入的是d[i]，所以是从原二维数组的第i行开始做的运算，这里不能sizeof
	d[st]=0;
	priority_queue<pii,vector<pii>,greater<pii> > q;
	q.push({d[st],st});
	while(q.size() ){
		pii t=q.top() ;
		q.pop() ;
		int id=t.second ;
		int dist=t.first ;
		for(int i=h[id];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>dist+w[i]){
				d[j]=dist+w[i];
				q.push({d[j],j}); 
			}
		}
	} 
}
int dfs(int u,int st,int dist){//该拜访哪个位置的亲戚，起点亲戚的下标，到这的距离
	if(u==6) return dist;
	int ans=0x3f3f3f3f;//以st为起点找到最短的路径
	for(int i=1;i<=5;i++){
		if(!v[i]){
			v[i]=true;
			ans=min(ans,dfs(u+1,i,dist+d[st][a[i]]));
			v[i]=false;
		}
	}
	return ans;
}
int main(){
	cin>>n>>m;
	a[0]=1;
	memset(h,-1,sizeof h);
	for(int i=1;i<=5;i++){
		cin>>a[i];
	}
	for(int i=1;i<=m;i++){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
		add(b,a,c);
	}
	for(int i=0;i<=5;i++) dijk(a[i],d[i]);
	printf("%d",dfs(1,0,0));
}

```
### 与二分结合

例题：通信线路  
原题链接：https://www.acwing.com/problem/content/342/  

题意：有n个点，m条双向边，找一条从1到n的路径，使这条路上的第k+1大的边权最小  

思路：最大最小问题可以用二分来解决，可以设每次第k+1大的值是mid，对于每个边，大于mid的边权设为1，小于等于mid的边权设为0，再从1做一遍最短路，如果到n的值<=k符合题意，否则不符合题意。  
（当一个图边权全为0或1的时候，我们也可以用双端队列来做  
注意一个处理：边权大小在1~1e6之间，结果可能是0，也可能到不了n点，那么二分的左边界设为0，右边界设为1e6+1，当最后二分出来的答案是1e6+1时说明不能到达输出-1

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef pair<int,int> pii;
const int N=1010,M=20010;
int n,m,k;
int d[N];
int h[N],e[M],ne[M],idx,w[M];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool cheek(int x){
//	cout<<"mid=="<<x<<endl;
	memset(d,0x3f,sizeof d);
	d[1]=0;
	priority_queue<pii,vector<pii>,greater<pii> > q;
	q.push({d[1],1});
	while(q.size() ) {
		pii t=q.top() ;
		q.pop() ;
		int id=t.second ;
		int dist=t.first ;
		for(int i=h[id];i!=-1;i=ne[i]){
			int j=e[i];
			int ww;
			if(w[i]<=x)ww=0;
			else ww=1;
			if(d[j]>dist+ww){
				d[j]=dist+ww;
				
				q.push({d[j],j}); 
			}
		}
	}
//	cout<<"d=="<<d[n]<<endl;
	return d[n]<=k;
}
int main(){
	cin>>n>>m>>k;
	memset(h,-1,sizeof h);
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
		add(b,a,c);
	}
	int l=0,r=1000001;
	while(l<r){
		int mid=l+r>>1;
		if(cheek(mid)) r=mid;
		else l=mid+1;
	}
	if(l==1000001) cout<<-1<<endl;
	else cout<<l<<endl;
	return 0;
}


```


### 与拓扑排序结合

例题：道路与航线  
原题链接：https://www.acwing.com/problem/content/344/  
题意：n个城市，两种路线，一种是路线：双向边，全是正权边，一种是航线：单向边，有负权边，无环。并且道路和航线能到达的地点肯定不同，现在想求出其中一个城市S到其他所有城市的距离的最小值  

思路：存在负权边，那么bellman时间复杂度O（nm）肯定不行，spfa会被卡，那么我们继续分析。  
对于双向全是正权边的道路，我们可以把他们看成是一个连通块，里面全是正权边，那么我们可以做dijk算法。  
对于全是单项边有负权的航线，我们可以把他看做上面连通块的单向边，并且无环，我们可以找到一个关于上面的连通块的拓扑序，按照连通块的拓扑序依次算每个连通块的最短路就可以了。  

处理连通块：  
用dfs来找联通块。
对路线中的每个点需要用一个id数组来记录他的连通块的编号，还需要用一个vector数组来存一下每个联通块中的点。  
处理拓扑序：  
对于每条航线，记录每个点的入度  
将入度为0的连通块的编号加入拓扑队列中  
每次取队列的队头的连通块编号bid  
将bid里的所有点加入堆中，然后对堆做dijk：  
每次取堆中距离最小的点ver  
遍历与id相连的所有邻点j：  
如果id[j]==id[ver],说明是一个连通块里的，可以更新他的最短路然后加入堆中。  
如果id[j]!=id[ver]，说明这个是拓扑图中的航线，是连向下一个连通块的，那么就需要把j所在的连通块的编号的入度--，如果入度=0就加入队列中  

```cpp
#include<bits/stdc++.h>
#include<vector>
#include<queue>
using namespace std;
typedef pair<int,int> pii;
const int N=25000+10,M=150000+10,INF=0x3f3f3f3f;//单向边+双向边
int n,m1,m2,s;
int h[N],e[M],ne[M],w[M],idx;
bool st[N];
int dist[N];
int con;
int id[N];
int d[N];
bool v[N];
vector<int> block[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
void dfs(int u,int x){
	id[u]=x;
	block[x].push_back(u); 
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!id[j]) dfs(j,x);
	}
}
queue<int> tp;

void dijk(int bid){
	priority_queue<pii,vector<pii>,greater<pii> > q;
	for(int i=0;i<block[bid].size() ;i++){
		int j=block[bid][i];
		q.push({dist[j],j});  
	}
	while(q.size() ){
		pii t=q.top() ;
		q.pop() ;
		int idt=t.second ;
		int dis=t.first ;
		if(st[idt])continue;
		st[idt]=true;
		for(int i=h[idt];i!=-1;i=ne[i]){
			int j=e[i];
			if(id[j]!=id[idt]){
				d[id[j]]--;
				if(d[id[j]]==0) tp.push(id[j]); 
			}
			if(dist[j]>dis+w[i]){
				dist[j]=dis+w[i];
				if(id[j]==id[idt])q.push({dist[j],j});
			}
		}
	}
}
void torp(){
	memset(dist,0x3f,sizeof dist);//dist是全局变量，要在做拓扑排序的时候初始化好，不能每次dijk一遍初始化一遍
	dist[s]=0;
	for(int i=1;i<=con;i++){
		if(d[i]==0) tp.push(i); 
	}
	while(tp.size() ){
		int bid=tp.front() ; 
		tp.pop() ;		
		dijk(bid);
	}
}
int main(){
	cin>>n>>m1>>m2>>s;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m1;i++){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
		add(b,a,c);
	}
	con=0;
	for(int i=1;i<=n;i++){
		if(id[i]==0) dfs(i,++con);
	}
	for(int i=1;i<=m2;i++){
		int a,b,c;
		cin>>a>>b>>c;
		d[id[b]]++;
		add(a,b,c);
	}	
	torp();
	for(int i=1;i<=n;i++){
		if(dist[i]>=INF/2){
			cout<<"NO PATH"<<endl;
		}else cout<<dist[i]<<endl;
	}
	
	
	return 0;
}





```






