---
title: DFS
---
## 普通dfs
### 求全排列
原题链接：  
https://www.acwing.com/problem/content/844/  
题意：  
给定一个数字n，按照字典序求出他的全排列  
思路：  
因为变化是对于整个数组来说的，一个位置我们可以填许多数，但是每个数只能填一次，那么我们就得用一个数组额外记录一个数是否被用过。在每次dfs的时候从1~n遍历，如果i没有被遍历过，那么我们就将它标记，放入答案序列，再搜下个位置。直到搜完最后一个位置，我们将答案序列输出即可。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=400;
#define int long long
int n;
int path[20];
bool st[20];
void dfs(int u){
	if(u==n){
		for(int i=0;i<n;i++){
			cout<<path[i]<<" ";
		}
		cout<<endl;
		return ;
	}
	for(int i=1;i<=n;i++){
		if(!st[i]){
			st[i]=true;
			path[u]=i;
			dfs(u+1);
			st[i]=false;
		}
	}
}
signed main(){
	cin>>n;
	dfs(0);
	return 0;
}
```

### 爆搜
分成互质组  
原题链接：  
https://www.acwing.com/problem/content/description/1120/  
题意：  
给定n个正整数，将他们分组，使得每组中任意两个数互质，问至少分成多少组  
思路：  
能放进已经存在的组尽量放已经存在的组，不能放了再开新组，这样保证最优  
那么我们就先对于每个组来说，遍历所有的数，先将能放进去的都放进去，如果没有能放进去的那么就新开，有的话就不用新开  
那么每次dfs需要记录当前组的组编号，组内的元素个数，已经放进组里了几个数和从那个下标开始搜  
那么就先从开始搜的下标开始，如果有一个数没被用过且与组内的所有数都互质，那么我们就将他放进当前组之后进行dfs，dfs之后恢复现场。如果没有一个数能被放，那么我们就新开一个组  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=20;
int a[N];
bool st[N];
int group[N][N];
int n;
int ans;
int gcd(int a,int b){
	return b?gcd(b,a%b):a;
}
bool cheek(int b[],int cnt,int x){
	for(int i=0;i<cnt;i++){
		if(gcd(b[i],x)!=1) return false;
	}
	return true;
}
void dfs(int g,int gc,int tc,int start){
	if(g>=ans) return ;
	if(tc==n){
		ans=g;
		return ;
	}
	bool f=true;
	for(int i=start;i<n;i++){
		if(!st[i]&&cheek(group[g],gc,a[i])){
			st[i]=true;
			group[g][gc]=a[i];
			dfs(g,gc+1,tc+1,i+1);
			st[i]=false;
			f=false;
		}
	}
	if(f) dfs(g+1,0,tc,0);
}
int main(){
	cin>>n;
	for(int i=0;i<n;i++)cin>>a[i];
	ans=n;
	dfs(1,0,0,0);
	cout<<ans;
	return 0;
}

```

### 剪枝
1.优化搜索顺序，选择分支较少的顺序进行搜索  
例题：小猫下山  
原题链接：  
https://www.acwing.com/problem/content/167/  
题意：  
有n只小猫，第i只小猫的重量是a[i]，每个缆车的最大承重是w，问将所有小猫都送走最少需要多少缆车  
思路：  
枚举当前小猫放到哪个车上，对于每个小猫，有两种情况：可以放到之前已经有的小车上或者新建一辆小车放上  
如果一个车上放上一个体重较轻的小猫，那么我们再放的小猫的方案数肯定比放上一个体重较重的小猫的方案数多。所以我们先枚举体重较重的小猫放置的位置。即先将小猫从大到小排序。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=60;
bool st[N];
int sum[N];
int n,w;
int a[N];
int ans;
bool cmp(int a,int b){
	return a>b;
}
void dfs(int u,int g){
	if(g>=ans)return ;
	if(u==n){
		ans=g;
		return ;
	}
	for(int i=0;i<g;i++){
		if(sum[i]+a[u]<=w){
			sum[i]+=a[u];
			dfs(u+1,g);
			sum[i]-=a[u];
		}
	}
	sum[g]=a[u];//将他放到新建的车里
	dfs(u+1,g+1);
}
int main(){
	cin>>n>>w;
	for(int i=0;i<n;i++)cin>>a[i];
	sort(a,a+n,cmp);
	ans=n;
	dfs(0,0);
	cout<<ans;
	return 0;
}
```

2.排除等效冗余
3.可行性剪枝  
如果不符合要求就剪枝  
4.最优性剪枝  
如果当前搜到的方案数已经大于我们找到的最小方案数，那么我们就剪枝  

## 记忆化dfs

要点：  
确保每个点都只能遍历一次  
从一个起点往下走的时候，需要有一个限制使得前面的路不会被重复走  
没有确定的结束点  



例子：斐波那契数列的求解方法  
f[1]=1  
f[2]=1  
f[n]=f[n-1]+f[n-2]  

用普通dfs来写：  
dfs(u)返回的是f[u]的值
```cpp
int dfs(int u){
    if(u==1||u==2) return 1;
    else return dfs(u-1)+dfs(u-2);
}
```
但是会递归很多次，那么我们想优化成每个f值只计算一次的话，我们需要用记忆化dfs  

用f数组来记录值,先初始化为-1  
当搜到的f不等于-1，我们就返回被算过的值  
否则的话把f值赋值为dfs(u-1)+dfs(u-2)，返回f值  
注意：确保我们算到的状态都是没有算过的点，不能重复走之前走过的点  
```cpp
int dfs(int u){
    if(u==1||u==2){
        f[u]=1;
        return f[u];
    }
    if(f[u]!=-1) return f[u];
    else {
        f[u]=dfs(u-1)+dfs(u-2);
        return f[u];
    }
}

```


### 返回以某个点为起点的所有路程的最大长度（无确定终点



例题：老鼠和奶酪  
原题链接：  
http://acm.hdu.edu.cn/showproblem.php?pid=1078  
题意：  
有一个n*n的矩阵，每个格子里有一个数，一个老鼠从左上角走，每次走可以选择上下左右四个方向，并且每次最多只能走k步，走到的格子必须比他走到的前一个格子的数大。求他能收集的数的最大值。  
思路：  
dfs(x,y)返回的是以(x,y)为起点，走过的所有路径的最大值。  
那么对于(x,y)来说，可以向上下左右四个方向分别走0,1...k步  
但是他走到的格子里数的大小必须大于(x,y)格子里的数  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=200;
int a[N][N];
int f[N][N];
int n,k;
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int dfs(int x,int y){
//	cout<<"x=="<<x<<" y=="<<y<<endl;
	if(f[x][y]！=-1)return f[x][y];//如果被遍历过就返回
	f[x][y]=a[x][y];
	for(int i=0;i<4;i++){
		for(int j=0;j<=k;j++){
			int xx=x+dx[i]*j;
			int yy=y+dy[i]*j;
			if(xx<1||xx>n||yy<1||yy>n)continue;
			if(a[xx][yy]>a[x][y]){//这个保证了以后走的每个点都不会在前面被走过
				f[x][y]=max(f[x][y],dfs(xx,yy)+a[x][y]);
			}
		}
	}
	return f[x][y];
}

int main(){
	while(cin>>n>>k){
		if(n==-1&&k==-1)break;
		memset(f,-1,sizeof f);
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				cin>>a[i][j];
			}
		}
		cout<<dfs(1,1)<<endl;		
	}

	return 0;
}
```
### 返回的是以某个点为起点走向终点的方案数
例题:how mant ways  
原题链接：  
http://acm.hdu.edu.cn/showproblem.php?pid=1978  
题意：  
一个机器人从起点(1,1)走到终点(n,m)。规则如下：  
1.机器人一开始在起点并有起点标有的能量  
2.机器人只能向右或者向下行走，每走一步消耗一单位能量  
3.机器人不能在原地停留  
4.当机器人选择一条路径时，当他走到终点的格子时，只有终点格子的能量  
求从(1,1)走到(n,m)的方案数  

思路：  
dfs(x,y)表示以(x,y)为起点，走到终点的方案数  
那么设向下走i步，向右走j步(xx=x+i,yy=y+j,i+j<=a[i][j])  
以(x,y)为起点的方案数就是他能走到的所有格子(xx,yy)的方案数相加  
注意：有些点走不到终点，方案数为0，那么我们就需要额外初始化f数组为-1，每次判断f等不等于-1，如果等于的话说明没有搜过，那么我们就将他的f值变成0,再加上他能走到的所有格子的方案数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=106;
int a[N][N];
int n,m;
int f[N][N];
const int mod=10000;
int dfs(int x,int y){
	if(f[x][y]!=-1)return f[x][y];
	f[x][y]=0;
	for(int i=0;i<=a[x][y];i++){
		for(int j=0;j<=a[x][y]-i;j++){
			int xx=x+i;
			int yy=y+j;
			if(xx<1||xx>n||yy<1||yy>m)continue;
			f[x][y]=(f[x][y]+dfs(xx,yy))%mod;
		}
	}
	return f[x][y];
}
void sove(){
	cin>>n>>m;
	memset(f,-1,sizeof f);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			cin>>a[i][j];
		}
	}
	f[n][m]=1;
	
	dfs(1,1);
	
	cout<<f[1][1]<<endl;
	
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












