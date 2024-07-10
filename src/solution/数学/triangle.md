---
title: D. Triangle Coloring
---
原题链接：https://codeforces.com/contest/1795/problem/D  
题意：  
有n个点（n能被6整除），每三个点是一个三元组，每个三元组的每个点之间有一条正权边，不在同一个三元组的点之间没有边。现在把这n个点涂色，要求只能涂两种颜色红和蓝，而且一半点涂红，一半点涂蓝。当一条边的两个端点是不同的两个颜色的时候，这条边算一个有效边，求当有效边之和最大时一共的方案数。

思路：如果想让边权尽可能大，那么对于一个三元组中，选择两个较长的边的两端涂不同的颜色。那么对于三条边都不同长度的情况，只有一种方法；对于三条边都相等的情况，有三种方法；对于较短的边有两个的情况，有两种方法。那么我们就可以算出来满足边权尽可能大的涂色有几种方法。但是我们还需要将他们涂色。一共n/3组三元组，我们要选出来其中n/6组涂一红二蓝，剩下的都是是一蓝二红。那么我们再乘上 $C_{\frac{n}{3} }^{\frac{n}{6} }$ 就可以了。  


```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int n;
const int N=3e5+10;
const int mod=998244353;
int f[N],fi[N];
int ksm(int a,int b){
	int res=1%mod;
	while(b){
		if(b&1)res=res*a%mod;
		a=a*a%mod;
		b>>=1;
	}
	return res;
}
void init(){
	f[0]=fi[0]=1;
	for(int i=1;i<N;i++){
		f[i]=(f[i-1]*i)%mod;
		fi[i]=(fi[i-1]*ksm(i,mod-2))%mod;
	}
}
void sove(){
	scanf("%lld",&n);
	int ans=1;
	for(int i=1;i<=n/3;i++){
		int a,b,c;
		scanf("%lld%lld%lld",&a,&b,&c);
		if(a<b)swap(a,b);
		if(a<c)swap(a,c);
		if(b<c)swap(b,c);
		if(a==b&&b==c) ans=3*ans%mod;
		else if(b==c) ans=2*ans%mod;
	}
	ans%=mod;
	int num=(f[n/3]*fi[n/6]%mod*fi[n/6])%mod;
	ans=ans*num%mod;
	printf("%lld\n",ans);
}
signed main(){
	init();
	int t=1;
	while(t--){
		sove();
	}
	return 0;
}

```





