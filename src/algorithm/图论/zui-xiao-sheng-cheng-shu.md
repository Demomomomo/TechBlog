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
两个点的集合合并，边数++  
如果边数 < n-1的话说明不联通  
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

## 例题1：新的开始
有 n 口矿井，考虑矿井供电问题。为了保证电力的供应有两种方法：  
1.在矿井 i 上建立一个发电站，费用为 vi（发电站的输出功率可以供给任意多个矿井）。  
2.将这口矿井 i 与另外的已经有电力供应的矿井 j 之间建立电网，费用为 pi,j。  
小 FF 希望你帮他想出一个保证所有矿井电力供应的最小花费方案。  

思路：  
求若干个连通块发电所需要的最小电力，联通块所用的最小电力可以用Kruskal解决。  
还有一个问题就是让每个连通块发电，那么我们可以建立一个虚拟原点，让一个井发电就相当于向虚拟原点连一条长为vi的边，那么让多个连通块都发点的意思实际上就是求n个点与虚拟原点组成的最小生成树。  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=310,M=1e5+10;
int n,m;
int a[N];
int g[N][N];
struct name{
	int a,b,c;
}q[M];
bool f[N],st[N];

int p[N];
int find(int x){
	if(p[x]!=x) p[x]=find(p[x]);
	return p[x];
	
}
bool cmp(name a,name b){
	return a.c <b.c ;
}
signed main(){
	cin>>n;
	int con=0;
	for(int i=1;i<=n;i++){
		con++;
		cin>>a[i];
		q[con]={0,i,a[i]};
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cin>>g[i][j];
			if(i!=j){
				con++;
				q[con]={i,j,g[i][j]};
			}
		}
	}
	
	for(int i=1;i<=n;i++)p[i]=i;
	sort(q+1,q+1+con,cmp);
	int ans=0;
	for(int i=1;i<=con;i++){
		int a=q[i].a ,b=q[i].b ,c=q[i].c ;
		a=find(a),b=find(b);
		if(a!=b){
			ans+=c;
			p[a]=b;
		}
	}
	cout<<ans<<endl;
	return 0;
}
```
## 例题2：北极通讯网络
原题链接：https://www.acwing.com/problem/content/1147/
有n个村庄，每个村庄的坐标用（x，y）表示。
为了加强联系，决定在村庄之间建立通讯网络，使每两座村庄之间都可以直接或间接通讯。  

通讯工具可以是无线电收发机，也可以是卫星设备。  

无线电收发机有多种不同型号，不同型号的无线电收发机有一个不同的参数 d，两座村庄之间的距离如果不超过 d，就可以用该型号的无线电收发机直接通讯，d 值越大的型号价格越贵。现在要先选择某一种型号的无线电收发机，然后统一给所有村庄配备，数量不限，但型号都是 相同的。  

配备卫星设备的两座村庄无论相距多远都可以直接通讯，但卫星设备是 有限的，只能给一部分村庄配备。  

现在有 k 台卫星设备，请你编一个程序，计算出应该如何分配这 k 台卫星设备，才能使所配备的无线电收发机的 d 值最小。  

思路：先建立一个最小生成树，然后按照边权从大到小开始删边，如果删k-1条边的话，一个树就被分成了k个连通块，然后每个连通块上放一个卫星设备就能将这k个联通块联通。  
实质就是求最小生成树第k大的边权
```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
typedef pair<int,int> pii;
const int N=500+10,M=3e5+10;
int n,k;
struct name{
	int a,b;
	double c;
}q[M];
int x[M],y[M];
double dist(int x1,int y1,int x2,int y2){
	return sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
bool cmp(name a,name b){
	return a.c <b.c ;
}
bool st[M];
int p[M];
vector<pii> yy;
int find(int x){
	if(p[x]!=x)p[x]=find(p[x]);
	return p[x];
}
vector<double> d;
signed main(){
	cin>>n>>k;
	int con=0;
	for(int i=1;i<=n;i++)cin>>x[i]>>y[i];
	for(int i=1;i<=n;i++){
		for(int j=i+1;j<=n;j++){
			double op=dist(x[i],y[i],x[j],y[j]);
			con++;
			q[con]={i,j,op};
		}
	}
	sort(q+1,1+q+con,cmp);
	for(int i=1;i<=n;i++)p[i]=i;
	for(int i=1;i<=con;i++){
		int a=q[i].a ,b=q[i].b ;
		double c=q[i].c ;
		if(find(a)!=find(b)){
			pii op={a,b};
			p[find(a)]=find(b);
			yy.push_back(op);
			d.push_back(c);  
		}
	}
	int rr=yy.size() -1;
	if(k==0){
	    double op=d[rr];
	    printf("%.2f",op);
	    return 0;
	}
	if(rr-(k-1)<0){
		printf("%.2f",0);
		return 0;
	}
	double op=d[rr-(k-1)];
	printf("%.2f",op);
	return 0;
}
```
## 例题3：泼水节
给定一棵 N 个节点的树，要求增加若干条边，把这棵树扩充为完全图，并满足图的唯一最小生成树仍然是这棵树。  

求增加的边的权值总和最小是多少。  

注意： 树中的所有边权均为整数，且新加的所有边权也必须为整数。  

思路：按照从小到大的顺序给边权排序，然后模拟生成最小生成树的步骤，每次连边相当于将两个连通块a，b合并成一个连通块，合并之后，将这个联通块补成完全图。因为要求最小生成树还是原来的数，那么我们就要将这个联通块中其他的边的长度都设为这条边权值+1，而且因为是完全图，设连通块中a的点数为x，b的点数为y，那么要补成完全图总共的边数就是x*y-1（减掉已经有的最小生成树的边）。
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=6000+10,M=6000+10;
int n,m;
int p[N];
struct name{
	int a,b,c;
}q[M];
int si[N];
bool cmp(name a,name b){
	return a.c <b.c ;
}
int find(int x){
	if(p[x]!=x)p[x]=find(p[x]);
	return p[x];
}
void sove(){
	int n;
	cin>>n;
	for(int i=1;i<n;i++){
		cin>>q[i].a >>q[i].b >>q[i].c ;
	}
	sort(q+1,q+n,cmp);
	int ans=0;
	for(int i=1;i<=n;i++)p[i]=i,si[i]=1;
	for(int i=1;i<n;i++){
		int a=q[i].a ,b=q[i].b ,c=q[i].c ;
		//cout<<"c=="<<c<<endl;
		if(find(a)!=find(b)){
			int op=si[find(a)]*si[find(b)];
			op--;
		//	cout<<"op=="<<op<<endl;
			ans+=op*(c+1);
	//		cout<<"ans=="<<ans<<endl;
			
			si[find(b)]+=si[find(a)];
			p[find(a)]=find(b);
		}
	}
	cout<<ans<<endl;
}
int main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```

<!-- ## 次小生成树
时间复杂度：优化后 O（nlogn）
对于一张无向图，如果存在最小生成树和次小生成树，那么对于任何一颗最小生成树，都有一颗次小生成树，使得这两颗树只有一条边不同  

思路：
枚举每条不在最小是生成树里的边x，把他加入到树中去，那么会在树中形成一个环，然后我们在这个环里，找到除了我们加的这条边以外的其他边的最大值y，如果和我们加的这条边相等的话就找次大值，假设最小生成树的的总长度是sum，那么变化后的大小就是sum-y+x   -->





