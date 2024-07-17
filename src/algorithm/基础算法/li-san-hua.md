---
title: 离散化
---

离散化就是将值域较大的数升序映射到值域较小的数上，即把数组中所有不重复的数升序映射到他的下标上  

比如将1 700 1000 1000000 100000000分别映射到1，2，3，4上  

离散化步骤：  

1.a中可能会有重复元素，先去重  

2.用二分找a里每个值离散化之后的数是多少  



## 一维离散化

比如将大小为n的vector类型的a数组中的数离散化：  
```cpp
	vector<int> a;//所有待离散化的值
	sort(a.begin() ,a.end() );//先排序
	a.erase(unique(a.begin() ,a.end() ),a.end() ); //unique函数作用：将升序数组a去重，将a中重复的数放在数组的后面，返回重复的数的第一个位置。erase函数作用：删除首地址和末地址中的数
```

找出x离散化后的数：  

```cpp
int find(int x){
	return lower_bound(a.begin(),a.end(),x)-a.begin+1;//返回以1开头的离散化后的数
}

```



## 二维离散化

对于n*m的图：  

先将所有横坐标加入x数组，排序去重  
然后再扫一遍x数组，与一维离散化不同的是，如果当前坐标不是前一个坐标+1（即两个坐标不相邻），那么当前坐标离散化的数值就得是前一个离散化之后的数值+1，即两个坐标在新图中相隔了一列  

比如(3,300) (200,800) (201,600)这三个点
x:3 4 200
3->1,200和3不相邻，所以200->3,201和200相邻，201->4  
y:300 600 800  
300->1,600->3,800->5  
所以上面三个点离散化之后是：(1,1),(3,5),(4,3)  

如果想看新图中每个块在老图中占多少个块，那么我们就用nx[i]来记录新图中横坐标为i的点在老图中占几行，ny[i]来记录新图中纵坐标为i的点在老图中占几列，那么对于新图的一个点(i,j)，他在老图中占的块数就是nx[i]*ny[j]  

详细步骤如下：  

对于横坐标：  
横坐标用x数组来进行离散化  
将旧图映射为下标都从0开始的新图  
先将0和n加入x数组  
再将所有的点的横坐标都加入x数组  
将x数组排序去重  
nx数组来存新图每个点对应的老图的间隔（算联通块用）  
mpx数组来存旧图中每个点对应的新图的坐标  
从第二个元素，即i=1来扫描x数组：  
当x[i]!=x[i-1]+1时，说明i和i-1在新图中相隔了一行，并且这一行在老图中的间隔是x[i]-x[i-1]-1，那么nx中就加一个元素x[i]-x[i-1]，然后再加上x[i]占的间隔1，那么mpx[x[i]]就是当前nx数组的大小-1（因为映射从下标为0开始）  
```cpp
//dfs遍历每个连通块求在老图中的大小
void dfs(int i,int j,int &con){
	vis[i][j]=true;
	con+=nx[i]*ny[j];
	for(int kk=0;kk<4;kk++){
		int xx=i+dx[kk];
		int yy=j+dy[kk];
		if(xx<0||xx>=nx.size() ||yy<0||yy>=ny.size() )continue;
		if(vis[xx][yy])continue;
		dfs(xx,yy,con);
	}
}

	//先往x和y中分别加入(0,n)和(0,m)
	x.push_back(0);
	x.push_back(n);
	y.push_back(0);
	y.push_back(m);   
	//将所有点的横纵坐标都加入相应的x和y数组中
	for(int i=1;i<=k;i++){
		x.push_back(q[i].x);
		y.push_back(q[i].y );  
	}
	//离散化x和y
	sort(x.begin() ,x.end() );
	sort(y.begin() ,y.end() );
	x.erase(unique(x.begin() ,x.end() ),x.end() );
	y.erase(unique(y.begin() ,y.end() ),y.end() );
	//分别遍历x和y，算出nx和mpx
	int numx=x.size() ;
	int numy=y.size() ;
	for(int i=1;i<numx;i++){
		if(x[i]!=x[i-1]+1) nx.push_back(x[i]-x[i-1]-1);
		nx.push_back(1);
		mpx[x[i]]=nx.size() -1;
	}
	for(int i=1;i<numy;i++){
		if(y[i]!=y[i-1]+1) ny.push_back(y[i]-y[i-1]-1);
		ny.push_back(1);
		mpy[y[i]]=ny.size() -1;
	}		
	//将原图中被占用的点在新图中标记
	for(int i=1;i<=k;i++){
		int xx=q[i].x ;
		int yy=q[i].y ;
		vis[mpx[xx]][mpy[yy]]=true;
	}
	//在新图中求联通块的个数和每个联通块的大小，ans存每个联通块在老图中的格子个数
	for(int i=0;i<nx.size() ;i++){
		for(int j=0;j<ny.size() ;j++){
			int sum=0;
			if(!vis[i][j]){
				dfs(i,j,sum);
				if(sum>0){
					ans.push_back(sum); 
				}
			}
		}
	}
```



## 例题

### HDU 5925 Coconuts
题意：  
有一个横纵坐标范围是[1,1e9]的网格图，但是图上只有k个点(k<=200),求没有被点覆盖的网格能组成几个连通块，输出联通块的个数，并且按照连通块的个数从小到大的顺序输出每个连通块的个数  

思路：  
建成新图之后对于每个没有走过的点dfs一遍求块数就好了  

```cpp
#include<bits/stdc++.h>
#include<vector>
#include<map>
#define int long long
using namespace std;
const int N=500+10;
int n,m;
int k;
struct name{
	int x,y;
}q[N];
vector<int> x,y;
vector<int> nx,ny,ans;
map<int,int>mpx,mpy;
bool vis[N][N];
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
void dfs(int i,int j,int &con){
	vis[i][j]=true;
	con+=nx[i]*ny[j];
	for(int kk=0;kk<4;kk++){
		int xx=i+dx[kk];
		int yy=j+dy[kk];
		if(xx<0||xx>=nx.size() ||yy<0||yy>=ny.size() )continue;
		if(vis[xx][yy])continue;
		dfs(xx,yy,con);
	}
}
void sove(){
	cin>>n>>m;
	cin>>k;
	memset(vis,false,sizeof vis);
	x.clear();
	y.clear() ;
	mpx.clear();
	mpy.clear();
	ans.clear() ; 
	nx.clear() ;
	ny.clear() ;
	x.push_back(0);
	x.push_back(n);
	y.push_back(0);
	y.push_back(m);    
	for(int i=1;i<=k;i++){
		cin>>q[i].x >>q[i].y ;
		x.push_back(q[i].x);
		y.push_back(q[i].y );  
	}
	sort(x.begin() ,x.end() );
	sort(y.begin() ,y.end() );
	x.erase(unique(x.begin() ,x.end() ),x.end() );
	y.erase(unique(y.begin() ,y.end() ),y.end() );
	int numx=x.size() ;
	int numy=y.size() ;
	for(int i=1;i<numx;i++){
		if(x[i]!=x[i-1]+1) nx.push_back(x[i]-x[i-1]-1);
		nx.push_back(1);
		mpx[x[i]]=nx.size() -1;
	}
	for(int i=1;i<numy;i++){
		if(y[i]!=y[i-1]+1) ny.push_back(y[i]-y[i-1]-1);
		ny.push_back(1);
		mpy[y[i]]=ny.size() -1;
	}	
	for(int i=1;i<=k;i++){
		int xx=q[i].x ;
		int yy=q[i].y ;
		vis[mpx[xx]][mpy[yy]]=true;
	}
	for(int i=0;i<nx.size() ;i++){
		for(int j=0;j<ny.size() ;j++){
			int sum=0;
			if(!vis[i][j]){
				dfs(i,j,sum);
				if(sum>0){
					ans.push_back(sum); 
				}
			}
		}
	}
	sort(ans.begin() ,ans.end() );
	cout<<ans.size() <<endl;
	for(int i=0;i<ans.size() ;i++){
		if(i==0)cout<<ans[i];
		else cout<<" "<<ans[i];
	}
	cout<<endl;
}
signed main(){
	int tt;
	cin>>tt;
	for(int ca=1;ca<=tt;ca++){
		printf("Case #%lld:\n",ca);
		sove();
	}
	return 0;
}

```











