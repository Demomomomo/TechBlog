---
title: 背包
---

## 本质
从一堆物品中选择一些物品，满足某些条件，求选择的最大值/最小值/方法数  

## 质数拆分
原题链接：https://www.lanqiao.cn/problems/809/learning/?page=1&first_category_id=1&sort=students_count&tags=2019&status=2  

题意：  
将2019拆分成若干个不同的质数，一共有多少种不同的方法？  
思路：  
就是在1~2019范围内的质数中选，满足和为2019的方案数。  
那么就先处理出所有质数，然后再把每个数看做一个背包，做一遍01背包求方案数就可以了。  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=1e6+10;
typedef long long ll;
int n;
int v[N];
ll f[N];
int cnt;
int ispr(int num ){
    int i;
    //从2开始循环，一直到i的平方小于等于给定的数。
    for (i = 2; i*i<=num; i++) {
        if ( ( num % i ) == 0 ) {
            return 0;
        }
    }
    return 1;
}
int main(){
    cnt=0;
    n=2019;
    for(int i=2;i<=2019;i++){
        if(ispr(i)){
            v[++cnt]=i;
        }
    }
//    for(int i=1;i<=n ;i++)cout<<v[i]<<" ";
    f[0]=1;
    for(int i=1;i<=cnt;i++){
        for(int j=2019;j>=v[i];j--){
            f[j]+=f[j-v[i]];
        }
    }
    cout<<f[2019];
    return 0;
}
```

## 倍数问题
原题链接：https://www.lanqiao.cn/problems/168/learning/?page=1&first_category_id=1&sort=students_count&name=%E5%80%8D%E6%95%B0%E9%97%AE%E9%A2%98  

题意：  
有n个数，从中选三个数，使得三个数的和是m的倍数，求满足条件的和的最大值。  
思路：  
f[i][j][k]表示从前i个数中选，已经选了j个数，总和膜m之后余数是k的和的最大值。  
不选i：f[i-1][j][k]  
选i:f[i-1][j-1][(k-a[i]%m+m)%m]  
但是时间复杂度是3nk，会超时，所以我们考虑优化  
(a+b+c)%d==a%d+b%d+c%d  
那么和是不是m的倍数就只和所有数%m之后的余数有关  
那么%m之后余数相等的数我们可以分为一类  
要求和最大，那么我们贪心的取最大，对于每类余数来说，最多就是取3个，就是取余数为0的一类的三个最大。那么我们就对于每一类余数从大到小排序，只用看取不取前三大就可以了。  
那么我们就将他优化成了K*Klogn（对每一类里的数进行排序）  
f[j][k]表示已经选了j个数，且选的数的和%m之后的余数是k的和的最大值。  

那么我们先循环每个余数是0~k-1的类，每个类只看前三大的数就可以了。  
然后我们再对于每个数看他选或者不选。  
设看的数是x，选的话是f[j][k]=max(f[j][k],f[j-1][k-x%m+m]+x)  
```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int N=1005;
typedef long long ll;
int n,m;
int f[5][N];
vector<int> v[N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		int x;
		cin>>x;
		v[x%m].push_back(x); 
	}
	memset(f,-0x3f,sizeof f);
	f[0][0]=0;
	for(int i=0;i<m;i++){//枚举每个余数类的组
		sort(v[i].begin() ,v[i].end() );
		reverse(v[i].begin() ,v[i].end() );
		for(int u=0;u<3&&u<v[i].size() ;u++){//选前三大的数
			int x=v[i][u];
			for(int j=3;j>=1;j--){//只能选3个数，那么我们需要从大到小来枚举j，防止被重复选择更新过后的数据
				for(int k=0;k<m;k++){
					f[j][k]=max(f[j][k],f[j-1][(k-x%m+m)%m]+x);
				}
			}
		}
	}
	cout<<f[3][0];
	return 0;
}

```



## 清楚姐姐学01背包(Hard Version)（必选蝴蝶结
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

## 
















