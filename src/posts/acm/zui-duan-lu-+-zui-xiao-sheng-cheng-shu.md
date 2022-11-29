---
title: 最短路+最小生成树

category:
  - algorithm

tag:
  - 图
---


## 畅通工程之最低成本建设问题

<p>某地区经过对城镇交通状况的调查，得到现有城镇间快速道路的统计数据，并提出“畅通工程”的目标：使整个地区任何两个城镇间都可以实现快速交通（但不一定有直接的快速道路相连，只要互相间接通过快速路可达即可）。现得到城镇道路统计表，表中列出了有可能建设成快速路的若干条道路的成本，求畅通工程需要的最低成本。</p>

<h3 id="输入格式">输入格式:</h3>

<p>输入的第一行给出城镇数目N (1&lt;N≤1000)和候选道路数目M≤3N；随后的M行，每行给出3个正整数，分别是该条道路直接连通的两个城镇的编号（从1编号到N）以及该道路改建的预算成本。</p>

<h3 id="输出格式">输出格式:</h3>

<p>输出畅通工程需要的最低成本。如果输入数据不足以保证畅通，则输出“Impossible”。</p>

<h3 id="输入样例1">输入样例1:</h3>


```cpp
6 15
1 2 5
1 3 3
1 4 7
1 5 4
1 6 2
2 3 4
2 4 6
2 5 2
2 6 6
3 4 6
3 5 1
3 6 1
4 5 10
4 6 8
5 6 3

```


<h3 id="输出样例1">输出样例1:</h3>


```cpp
12

```


<h3 id="输入样例2">输入样例2:</h3>


```cpp
5 4
1 2 1
2 3 2
3 1 3
4 5 4

```


<h3 id="输出样例2">输出样例2:</h3>


```cpp
Impossible
```


<p>典型的最小生成树问题，直接套模板就可，模板传送：<a data-link-desc="适用条件：稠密图#include&amp;lt;iostream&amp;gt;#include&amp;lt;algorithm&amp;gt;#include&amp;lt;cstring&amp;gt;using namespace std;const int N=1005;int g[N][N];int dist[N];int n,m;bool st[N];int pime(){memset(dist,0x3f,sizeof dist);int res=0;for(int i=0;i&amp;lt;n;i++){." data-link-icon="https://g.csdnimg.cn/static/logo/favicon32.ico" data-link-title="prim求最小生成树_Demo.o的博客-CSDN博客" href="https://blog.csdn.net/qq_61903556/article/details/124045670" title="prim求最小生成树_Demo.o的博客-CSDN博客">prim求最小生成树_Demo.o的博客-CSDN博客</a> </p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=1005;
int g[N][N];
int dist[N];
int n,m;
bool st[N];
int pime(){
	memset(dist,0x3f,sizeof dist);
	int res=0;
	for(int i=0;i<n;i++){
		int t=-1;
		for(int j=1;j<=n;j++){
			if(!st[j]&&(t==-1||dist[j]<dist[t])){
				t=j;
			}
		}
		if(i&&dist[t]==0x3f3f3f3f)return dist[t];
		if(i)res+=dist[t];
		for(int j=1;j<=n;j++){
			dist[j]=min(dist[j],g[t][j]);
		}
		st[t]=true;
	}
	
	return res;
}
int main(){
	memset(g,0x3f,sizeof g);
	scanf("%d%d",&n,&m);
	while(m--){
		int a,b,c;
		scanf("%d%d%d",&a,&b,&c);
		g[a][b]=g[b][a]=min(g[a][b],c);
	}
	int t=pime();
	if(t==0x3f3f3f3f){
		printf("Impossible");
	}else printf("%d",t);
	return 0;
}
```


<p> </p>

## 城市间紧急救援

<p>作为一个城市的应急救援队伍的负责人，你有一张特殊的全国地图。在地图上显示有多个分散的城市和一些连接城市的快速道路。每个城市的救援队数量和每一条连接两个城市的快速道路长度都标在地图上。当其他城市有紧急求助电话给你的时候，你的任务是带领你的救援队尽快赶往事发地，同时，一路上召集尽可能多的救援队。</p>

<h3 id="输入格式">输入格式:</h3>

<p>输入第一行给出4个正整数N、M、S、D，其中N（2≤N≤500）是城市的个数，顺便假设城市的编号为0 ~ (N−1)；M是快速道路的条数；S是出发地的城市编号；D是目的地的城市编号。</p>

<p>第二行给出N个正整数，其中第i个数是第i个城市的救援队的数目，数字间以空格分隔。随后的M行中，每行给出一条快速道路的信息，分别是：城市1、城市2、快速道路的长度，中间用空格分开，数字均为整数且不超过500。输入保证救援可行且最优解唯一。</p>

<h3 id="输出格式">输出格式:</h3>

<p>第一行输出最短路径的条数和能够召集的最多的救援队数量。第二行输出从S到D的路径中经过的城市编号。数字间以空格分隔，输出结尾不能有多余空格。</p>

<h3 id="输入样例">输入样例:</h3>


```cpp
4 5 0 3
20 30 40 10
0 1 1
1 3 2
0 3 3
0 2 2
2 3 2

```


<h3 id="输出样例">输出样例:</h3>


```cpp
2 60
0 1 3
```


<p>更新最短路长度：经过n次循环，每次找到距离起点最近的点，然后拿他更新最短路</p>

<p>更新最短路径条数：用一个co数组来储存每个点到起点的最短路径条数，当更新最短路（dist[t]+ma[t][j]&lt;dist[j]）时，co[j]=co[t]，如果（dist[t]+ma[t][j]==dist[j]）与最短路长度相等的话，条数就增加：co[j]+=co[t];</p>

<p>更新最多拉多少人：当更新最短路时，就是之前的拉的人的数量加上遍历到的城市救援队的数量，如果等于最短路的长度，那么比较一下上一个城市加上这个城市的人数与自己本身哪个拉的人多，如果前者多的话就让自己本身等于他。</p>

<p>初始化：先把所有路和最短路都初始化为极大值，存路径的数组初始化为-1（判断是否存路）刚开始要把起点的最短路距离初始化成1，把起始点的最短路径条数初始化为1，把在起点能召集的最多人数初始化为在起点的人数。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=505;
int ma[N][N];//记录编号为i和编号为j的城市的路的长度
int path[N];//记录路径
int peo[N];//表示到城市i最多拉的人数
int co[N];//到城市i最短路的条数
int dist[N];//表示城市i到起点最短距离
int ph[N];//每个城市救援队的人数
int vis[N];//标记每个城市走过没有
int n,m,s,d;
void ath(int d){
	if(path[d]!=-1){
		ath(path[d]);
		cout<<path[d]<<' ';
	}
}
int main(){
	cin>>n>>m>>s>>d;
	memset(ma,0x3f,sizeof ma);//初始化每个路最大长度
	memset(dist,0x3f,sizeof dist);//初始化最短距离最大长度
	memset(co,1,sizeof co);//初始化最短的道路数都是1
	memset(path,-1,sizeof path);//初始化路径
	for(int i=0;i<n;i++){
		scanf("%d",&ph[i]);
	}
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		ma[a][b]=ma[b][a]=c;
	}
	dist[s]=0;//把起始点的最短距离设为0
	co[s]=1;//把起始点的道路数设为1
	peo[s]=ph[s];//把在起始点的人数赋给在起始点能召集最多的人数
	for(int i=0;i<n;i++){//循环n次
		int t=-1;
		for(int j=0;j<n;j++){
			if(!vis[j]&&(t==-1||dist[j]<dist[t])){
				t=j;
			}
		}
		if(t==-1)break;
		vis[t]=1;
		for(int j=0;j<n;j++){//用t更新每个与他相连的点的最短路
			if(dist[t]+ma[t][j]<dist[j]){//如果路更短
				dist[j]=dist[t]+ma[t][j];
				path[j]=t;//存路径
				co[j]=co[t];//因为更新完还是那个最短距离，j和t的点是同一条路
				peo[j]=ph[j]+peo[t];//更新最多能拉多少人
			}else if(dist[t]+ma[t][j]==dist[j]){
				co[j]+=co[t];//
				if(peo[t]+ph[j]>peo[j]){//如果人数更多
					peo[j]=peo[t]+ph[j];
					path[j]=t;
				}
			}
		}
	}
	printf("%d %d\n",co[d],peo[d]);
	ath(d);
	cout<<d;
	return 0;
}
```


<p></p>

<p></p>

<p></p>

## 路径（蓝桥杯+Dijkstra）

<div><span style="color:#000000;">小蓝学习了最短路径之后特别高兴，他定义了一个特别的图，希望找到图 </span></div>

<div><span style="color:#000000;">中的最短路径。 </span></div>

<div><span style="color:#000000;">小蓝的图由 </span><span style="color:#000000;">2021 </span><span style="color:#000000;">个结点组成，依次编号 </span><span style="color:#000000;">1 </span><span style="color:#000000;">至 </span><span style="color:#000000;">2021</span><span style="color:#000000;">。 </span></div>

<div><span style="color:#000000;">对于两个不同的结点 </span><span style="color:#000000;"><em>a</em></span><span style="color:#000000;">, </span><span style="color:#000000;"><em>b</em></span><span style="color:#000000;">，如果 </span><span style="color:#000000;"><em>a </em></span><span style="color:#000000;">和 </span><span style="color:#000000;"><em>b </em></span><span style="color:#000000;">的差的绝对值大于 </span><span style="color:#000000;">21</span><span style="color:#000000;">，则两个结点 </span></div>

<div><span style="color:#000000;">之间没有边相连；如果 </span><span style="color:#000000;"><em>a </em></span><span style="color:#000000;">和 </span><span style="color:#000000;"><em>b </em></span><span style="color:#000000;">的差的绝对值小于等于 </span><span style="color:#000000;">21</span><span style="color:#000000;">，则两个点之间有一条 </span></div>

<div><span style="color:#000000;">长度为 </span><span style="color:#000000;"><em>a </em></span><span style="color:#000000;">和 </span><span style="color:#000000;"><em>b </em></span><span style="color:#000000;">的最小公倍数的无向边相连。 </span></div>

<div><span style="color:#000000;">例如：结点 </span><span style="color:#000000;">1 </span><span style="color:#000000;">和结点 </span><span style="color:#000000;">23 </span><span style="color:#000000;">之间没有边相连；结点 </span><span style="color:#000000;">3 </span><span style="color:#000000;">和结点 </span><span style="color:#000000;">24 </span><span style="color:#000000;">之间有一条无 </span></div>

<div><span style="color:#000000;">向边，长度为 </span><span style="color:#000000;">24</span><span style="color:#000000;">；结点 </span><span style="color:#000000;">15 </span><span style="color:#000000;">和结点 </span><span style="color:#000000;">25 </span><span style="color:#000000;">之间有一条无向边，长度为 </span><span style="color:#000000;">75</span><span style="color:#000000;">。 </span></div>

<div><span style="color:#000000;">请计算，结点 </span><span style="color:#000000;">1 </span><span style="color:#000000;">和结点 </span><span style="color:#000000;">2021 </span><span style="color:#000000;">之间的最短路径长度是多少</span></div>

<div></div>

<div><span style="color:#000000;">思路：最短路模板（稀疏图）套上，按题意处理储存路径就行了。</span></div>

<div></div>

<div><span style="color:#000000;">附赠最短路模板：</span><a data-link-desc="思想：#include&amp;lt;iostream&amp;gt;#include&amp;lt;algorithm&amp;gt;#include&amp;lt;cstring&amp;gt;using namespace std;int n,m;bool st[510];int g[510][510];//用来记录a-&amp;gt;b的权重int dist[510];int dijk(){memset(dist,0x3f,sizeof dist);//初始化各个点到1的距离dist[1]=0;//初始化1的点为0for" data-link-icon="https://g.csdnimg.cn/static/logo/favicon32.ico" data-link-title="disk求最短路_Demo.o的博客-CSDN博客" href="https://blog.csdn.net/qq_61903556/article/details/124000045" title="disk求最短路_Demo.o的博客-CSDN博客">disk求最短路_Demo.o的博客-CSDN博客</a></div>

<div></div>

<div>

```cpp
#include<iostream>//稀疏图 
#include<algorithm>
#include<cstring>
#include<queue>
#include<vector>
using namespace std;
const int N=150010;
int n=2021;
int e[N],ne[N],h[N],w[N],idx;
bool st[N];
int dist[N];
typedef pair<int,int> pii;

void add(int a,int b,int c){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx;
	w[idx]=c;
	idx++;
}
int gcd(int a,int b){
	if(a<b)swap(a,b);
	if(b==0)return a;
	else{
		return gcd(b,a%b);
	}
}
int dikj(){
	memset(dist,0x3f,sizeof dist);
	dist[1]=0;
	priority_queue<pii,vector<pii>,greater<pii> > heap;
	heap.push({0,1});
	while(heap.size()){
		pii t=heap.top();
		heap.pop();
		int d=t.first ,num=t.second ;
		if(st[num])continue;//判断状态
		st[num]=true;
		for(int i=h[num];i!=-1;i=ne[i]){//i=ne[i]
			int j=e[i];
			if(dist[j]>d+w[i]){//+的是w[i]
				dist[j]=d+w[i];
				heap.push({dist[j],j});
			}
		}
	}
	if(dist[n]==0x3f3f3f3f)return -1;
	else return dist[n];
}
int main(){
	memset(h,-1,sizeof h);
	for(int i=1;i<=n;i++){
		for(int j=i;j<=n;j++){
			if(abs(i-j)<=21){
				int c=gcd(i,j);
				int p=i/c*j;
				add(i,j,p);
			}
			
		}
	}
	printf("%d",dikj());
	return 0;
}


```


<p></p>
</div>

## prim求最小生成树

<p>适用条件：稠密图</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=1005;
int g[N][N];
int dist[N];
int n,m;
bool st[N];
int pime(){
	memset(dist,0x3f,sizeof dist);
	int res=0;
	for(int i=0;i<n;i++){
		int t=-1;
		for(int j=1;j<=n;j++){
			if(!st[j]&&(t==-1||dist[j]<dist[t])){
				t=j;
			}
		}
		if(i&&dist[t]==0x3f3f3f3f)return dist[t];
		if(i)res+=dist[t];
		for(int j=1;j<=n;j++){
			dist[j]=min(dist[j],g[t][j]);
		}
		st[t]=true;
	}
	
	return res;
}
int main(){
	memset(g,0x3f,sizeof g);
	scanf("%d%d",&n,&m);
	while(m--){
		int a,b,c;
		scanf("%d%d%d",&a,&b,&c);
		g[a][b]=g[b][a]=min(g[a][b],c);
	}
	int t=pime();
	if(t==0x3f3f3f3f){
		printf("impossible");
	}else printf("%d",t);
	return 0;
}
```


<p></p>

## disk求最短路

<p>稠密图用邻接矩阵存</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,m;
bool st[510];
int g[510][510];//用来记录a->b的权重
int dist[510];
int dijk(){
	memset(dist,0x3f,sizeof dist);//初始化各个点到1的距离
	dist[1]=0;//初始化1的点为0
	for(int i=0;i<n;i++){
		int t=-1;
		for(int j=1;j<=n;j++)//从没确定的点找出最短距离的点
			if(!st[j]&&(t==-1||dist[t]>dist[j]))
				t=j;
			
		st[t]=true;//修改这个最短距离点
		for(int j=1;j<=n;j++)//更新他到其他点的距离（所有点
			dist[j]=min(dist[j],dist[t]+g[t][j]);
	}
	if(dist[n]==0x3f3f3f3f)return -1;
	return dist[n];
}
int main(){
	scanf("%d%d",&n,&m);
	memset(g,0x3f,sizeof(g));//初始化权重，当读入的时候选最小因为可能有权重不同的重边
	while(m--){
		int a,b,w;
		scanf("%d%d%d",&a,&b,&w);
		g[a][b]=min(g[a][b],w);
	}
	int t=dijk();
	printf("%d",t);
	return 0;
}
```


<p>稀疏图用邻接表存</p>


```cpp
#include<iostream>//稀疏图 
#include<algorithm>
#include<cstring>
#include<queue>
#include<vector>
using namespace std;
const int N=150010;
int n,m;
int e[N],ne[N],h[N],w[N],idx;
bool st[N];
int dist[N];
typedef pair<int,int> pii;

void add(int a,int b,int c){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx;
	w[idx]=c;
	idx++;
}
int dikj(){
	memset(dist,0x3f,sizeof dist);
	dist[1]=0;
	priority_queue<pii,vector<pii>,greater<pii> > heap;
	heap.push({0,1});
	while(heap.size()){
		pii t=heap.top();
		heap.pop();
		int d=t.first ,num=t.second ;
		if(st[num])continue;
		st[num]=true;
		for(int i=h[num];i!=-1;i=ne[i]){
			int j=e[i];
			if(dist[j]>d+w[i]){
				dist[j]=d+w[i];
				heap.push({dist[j],j});
			}
		}
	}
	if(dist[n]==0x3f3f3f3f)return -1;
	else return dist[n];
}
int main(){
	memset(h,-1,sizeof h);
	scanf("%d%d",&n,&m);
	while(m--){
		int a,b,c;
		scanf("%d%d%d",&a,&b,&c);
		add(a,b,c);
	}
	printf("%d",dikj());
	return 0;
}
```


<p></p>

