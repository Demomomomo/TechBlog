---
title:  区间dp
---

## 状态定义  
f[i][j]表示区间[i,j]的最优解  

## 目标状态
f[1][n]：区间1~n的最优解  

## 阶段的划分
区间长度。  
因为我们需要求这个区间的最优解，那么我们要用他的子区间的最优解递推出来，那么他的子区间的长度是小于他的长度的，所有我们需要先将长度小的区间求出来。  

## 框架
```cpp
for(int len=2;len<=n;len++)//先枚举长度小的
{
	for(int l=1;l+len-1<=n;l++){//再按起点从左到右进行状态的计算
		int r=l+len-1;
		
	}
}
```

## 例题
### 石子合并  
原题链接：https://www.acwing.com/problem/content/284/  
题意：  
有n堆石子，每堆石子有一个体积，我们需要把这n堆石子合并成一堆，并且每次合并的时候只能合并两个相邻堆的石子，合并两堆石子的代价是两堆石子的体积和，合并完之后新的堆的体积是这两堆的总体积。  
求把这n堆合并成一堆所需要的最小代价。  
思路：  

f[i][j]表示区间[i,j]这段的石子合并的最小代价。  
我们每次合并只能合并两堆，假设分界点是k，那么由[i,j]区间组成的这一堆是由[i,k]区间组成的这一堆和[k+1,j]区间组成的这一堆合并而成的。  

那么合并的代价就是合并[i,k]这一堆的最小值加上合并[k+1,j]这一堆的最小值再加上[i,j]这个区间的石子体积的总和。  

状态转移方程就是：f[i][j]=min(f[i][j],f[i][k]+f[k+1][j]+s[j]-s[i-1])  

由于分界点k不确定，所以我们需要将k枚举。  

初始化的时候由于求最小值，f数组设为最大，对于每一堆，即f[i][i],不需要合并，那么代价就是0.  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=305;
int f[N][N];
int n,m;
int a[N],s[N];
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		s[i]=s[i-1]+a[i];
	}
	memset(f,0x3f,sizeof f);
	for(int i=1;i<=n;i++) f[i][i]=0;
	for(int len=2;len<=n;len++){
		for(int l=1;l+len-1<=n;l++){
			int r=l+len-1;
			for(int k=l;k<r;k++){
				f[l][r]=min(f[l][r],f[l][k]+f[k+1][r]+s[r]-s[l-1]);
			}
		}
	}
	cout<<f[1][n];
	return 0;
}
```
### 环形石子合并
原题链接：https://www.acwing.com/problem/content/1070/  
题意：  
有n堆石子围成一个圆摆放，将石子有序的合并成一堆。每堆石子有一个体积。 
每次合并只能从相邻的两堆合并，合并的代价是两堆的体积和，合并之后形成的新堆的体积是原来两堆的总体积。  
求合并需要的最小代价和最大代价。  
思路：  
围成一个环形的话，就可能会出现头部一些部分和尾部一些部分相连的情况，那么我们可以在这n堆后面再接上n堆，枚举每个起点，那么所有合并的情况都会被包括在内。  
例如：1 2 3 4  
将他接上4个变成：1 2 3 4 1 2 3 4
那么我们合并的话，4和1可以合并，4~2也可以合并，所有情况都被包含在内。  
最后由于我们要求的是区间长度为n的所有区间的最值，因为不知道区间起点，那么我们就列举所有区间长度为n的所有状态取最值就可以了。  

```cpp
#include<bits/stdc++.h>
#include<vector>
#include<set>
using namespace std;
const int N=800;
int f[N][N];//最小值
int ff[N][N];//最大值
int a[N];
int s[N];
int n;
void sove(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		a[i+n]=a[i];
	}
	for(int i=1;i<=n*2;i++) s[i]=s[i-1]+a[i];
	memset(f,0x3f,sizeof f);
	for(int i=1;i<=2*n;i++) f[i][i]=0;
	for(int len=2;len<=2*n;len++){
		for(int i=1;i+len-1<=2*n;i++){
			int j=i+len-1;
			for(int k=i;k<j;k++){
				f[i][j]=min(f[i][j],f[i][k]+f[k+1][j]+s[j]-s[i-1]);
			}
		}
	}
	int ans=0x3f3f3f3f;
	for(int i=1;i<=n;i++){
		ans=min(ans,f[i][i+n-1]);
	}
	cout<<ans<<endl;
	for(int len=2;len<=2*n;len++){
		for(int i=1;i+len-1<=2*n;i++){
			int j=i+len-1;
			for(int k=i;k<j;k++){
				ff[i][j]=max(ff[i][j],ff[i][k]+ff[k+1][j]+s[j]-s[i-1]);
			}
		}
	}
	int ans1=0;
	for(int i=1;i<=n;i++){
		ans1=max(ans1,ff[i][i+n-1]);
	}
	cout<<ans1<<endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	int t=1;
	//cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```
















### 能量项链
原题链接：https://www.acwing.com/problem/content/322/  
题意：  
有条能量项链，上面有n个珠子。  
一个珠子的头部有能量尾部也有能量  
对于两颗相邻的珠子，前一个珠子的尾标记等于后一个珠子的头标记。  
在合并的时候，只能相邻的两个珠子合并，假设前一个珠子的头部能量为m，尾部能量为n，那么后一个珠子的头部能量也为n，尾部能量是r，那么合并这两个珠子释放的能量就是m * n * r  
求将这个项链合并成一个珠子所能释放的最大能量。  

思路：  
项链就是环形，先在后面接n个珠子。  
然后对于区间[i,j]，设分界点为k，那么这两段聚合的能量就是a[i] * a[k+1] * a[j]  
最后再枚举每个长度为n的状态取最大值即可。  

```cpp
#include<bits/stdc++.h>
#include<vector>
#include<set>
using namespace std;
const int N=800;
int f[N][N];//最小值
int a[N];
int s[N];
int n;
void sove(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		a[i+n]=a[i];
	}
	for(int i=1;i<=n*2;i++)s[i]=s[i-1]+a[i];
	for(int len=2;len<=2*n;len++){
		for(int i=1;i+len-1<=2*n;i++){
			int j=i+len-1;
			for(int k=i;k<j;k++){
				f[i][j]=max(f[i][j],f[i][k]+f[k+1][j]+a[i]*a[k+1]*a[j+1]);
			}
		}
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		ans=max(ans,f[i][i+n-1]);
	}
	cout<<ans<<endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	int t=1;
	//cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```

### 凸多边形的划分
原题链接：https://www.acwing.com/problem/content/1071/  
题意：  
有n个顶点的凸多边形，将顶点从1~n编号，每个点的权值是一个整数。  
将这一个凸多边形划分成n-2个不想交的三角形，对于每个三角形，三个顶点的权值相乘都可以得到一个权值的乘积，求所有三角形的顶点权值乘积之和最少是多少。  
思路：  
f[i][j]表示顶点i到顶点j划分的三角形的方案中，值最小的方案。  
因为三个点才能构成一个三角形，那么最小区间长度是3.  
并且初始化的时候，因为一个点和两个点都构不成一个三角形，所以我们将区间长度为1和2的状态都设为0.  

那么对于[i,j]这个区间，要把他划分成三角形，那么我们就列举i~j之间的分界点k，ijk划分成一个三角形，那么乘积就是a[i] * a[k] * a[j],又因为三角形不相交，那么我们再加上[i,k]这个区间划分三角形的最小值和[k,j]这个区间划分得到的最小值就可以了。  

但是由于这题数据范围比较大，用个__int 128存吧  

```cpp
#include<bits/stdc++.h>
#include<vector>
#include<set>
using namespace std;
const int N=800;
inline __int128 read(){
    __int128 x = 0, f = 1;
    char ch = getchar();
    while(ch < '0' || ch > '9'){
        if(ch == '-')
            f = -1;
        ch = getchar();
    }
    while(ch >= '0' && ch <= '9'){
        x = x * 10 + ch - '0';
        ch = getchar();
    }
    return x * f;
}
//输出函数
inline void print(__int128 x){
    if(x < 0){
        putchar('-');
        x = -x;
    }
    if(x > 9)
        print(x / 10);
    putchar(x % 10 + '0');
}
__int128 f[N][N];//最小值
__int128 a[N];
__int128 n;
void sove(){
	n=read();
	for(int i=1;i<=n;i++)a[i]=read();
	memset(f,0x3f,sizeof f);
	for(int i=1;i<=n;i++){
		f[i][i+1]=0;
		f[i][i]=0;
	}
	for(int len=3;len<=n;len++){
		for(int i=1;i+len-1<=n;i++){
			int j=i+len-1;
			for(int k=i;k<j;k++){
				f[i][j]=min(f[i][j],f[i][k]+f[k][j]+a[i]*a[k]*a[j]);
			}
		}
	}
	print(f[1][n]);
}
int main(){
	int t=1;
	//cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```







