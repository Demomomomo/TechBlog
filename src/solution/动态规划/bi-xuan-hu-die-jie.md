---
title: 清楚姐姐学01背包(Hard Version)（必选蝴蝶结
---
原题链接：https://ac.nowcoder.com/acm/contest/46812/D  

题意：有n个蝴蝶结，每个蝴蝶结的体积是vi，好看程度为wi，有一个容量大小是m的背包，将这n个蝴蝶结放入背包中且总体积不能超过背包容量，想让好看程度最大化。  
定义上面的问题的好看程度最大值为mmax1。  
定义这n个蝴蝶结中去掉第i个蝴蝶结之后，从剩余n-1个蝴蝶结中选蝴蝶结放入背包，好看程度最大值为mmax2。  
如果mmax2< mmax1，那么称第i个背包为必选背包。  
想知道对于第i个蝴蝶结（i：1~n），在他初始的好看程度基础上，再加多少好看程度，该蝴蝶结就能成为一个必选蝴蝶结？  

数据范围：1<=N,M<=5000.  1<=vi<=M. wi<=1e9 

思路：  
我们要判断是不是必选蝴蝶结就要知道不选第i个蝴蝶结的情况下，最大体积不超过m的最大好看程度  
那么需要加的好感度最小等于=mmax1+1（i为必选要达到的最小的好感度）-必选i得到的最大好感度-w[i]    
那么我们必须要求的就是：  
不选第i个蝴蝶结，体积不超过m的最大好看程度  
必选第i个蝴蝶结，体积不超过m的最大好看程度  

f1[i][j]表示从前i个物品中选，体积不超过j的最大好看程度  
转移方程:f1[i][j]=max(f1[i-1][j],f1[i-1][j-v[i]]+w[i])  
f2[i][j]表示从第i个到第n个物品中选，体积不超过j的最大好看程度  
转移方程:f2[i][j]=max(f2[i+1][j],f2[i+1][j-v[i]]+w[i])  
z[i]表示不选第i个蝴蝶结，最大体积不超过m的最大好看程度  
状态转移：  
```cpp
for(int i=1;i<=n;i++){
    for(int j=0;j<=m;j++){//列举f1所占的体积
        z[i]=max(f1[i-1][j]+f[i+1][m-j],z[i]);
    }
}
```
g[i]表示必选第i个蝴蝶结，最大体积不超过m的最大好看程度  
状态转移：
```cpp
for(int i=1;i<=n;i++){
    for(int j=0;j<=m-v[i];j++){
        g[i]=max(g[i],f1[i-1][j]+f2[i+1][m-v[i]-j]);
    }
}

```

AC代码：  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

const int N=5005,M=600;
int n,m;
int v[N],w[N];
int f1[N][N],f2[N][N],z[N],g[N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>v[i]>>w[i];
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			f1[i][j]=f1[i-1][j];
			if(j>=v[i]) f1[i][j]=max(f1[i-1][j],f1[i-1][j-v[i]]+w[i]);
		}
	}
	int mx=f1[n][m];
	for(int i=n;i>=1;i--){
		for(int j=0;j<=m;j++){
			f2[i][j]=f2[i+1][j];
			if(j>=v[i]) f2[i][j]=max(f2[i+1][j],f2[i+1][j-v[i]]+w[i]);
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			z[i]=max(z[i],f1[i-1][j]+f2[i+1][m-j]);
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m-v[i];j++){
			g[i]=max(g[i],f1[i-1][j]+f2[i+1][m-j-v[i]]);
		}
	}
	for(int i=1;i<=n;i++){
		if(z[i]<mx){
			cout<<0<<endl;
		}else{
			cout<<mx+1-g[i]-w[i]<<endl;
		}
	}
	return 0;
}
```






