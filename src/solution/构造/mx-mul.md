---
title: I love max and multiply
---
原题链接：https://vjudge.net/contest/541856#problem/K  

题意：有两个数组a，b，每个数组都有n个数，我们需要构造一个c数组，使得c[k]=max(a[i]b[j])(i&j>=k),求这个c数组的和模上998244353的值。  

思路：  
c[k]找的是两个数相乘的最大值，然而数有正有负，两个很大的正数相乘可以很大，两个很大的负数相乘也可以很大，所以我们需要找一下满足条件的最大值和最小值。  
需要满足的条件：  
因为i&j>=k，假设k=1001的话，i和j必须得是形如1XX1的数  
如何找：  
满足i&j>=k-1的i，j会被包含在满足i&j>=k的i，j里  
所以我们可以按坐标从大到小的顺序，当遍历到k=i的时候，将他的所有二进制表示为0的数位变成1之后的坐标里取最大最小值。  
比如：k的二进制表示为1001  
那么满足条件的i和j就是：1101,1011  
为什么不用枚举1111的情况：  
因为是从大到小枚举，在枚举1110的时候已经和1111取了最大最小值，那么就不用再列举。  

找到满足k的所有a和b的最大值最小值之后，因为满足i&j>=k-1的i，j会被包含在满足i&j>=k的i，j里，所以我们将坐标i从后往前枚举，每次取出来a的最大值和b的最大值，a的最小值和b的最小值，a的最大值和b的最小值，a的最小值和b的最大值取最大之后，再与i+1处的最大值取最大值，就是满足k=i的情况下c[i]的值。

（注意取模，取模之后没有负数，那么我们就对结果额外处理一下）





```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define int long long
const int mod=998244353;//
const int N=1e6+10;
int n;
ll a[N];
ll b[N];
ll mxa[N];
ll mia[N];
ll mxb[N];
ll mib[N];
void sove(){
	scanf("%lld",&n);
	for(int i=0;i<n;i++){
		scanf("%lld",&a[i]);
		mxa[i]=mia[i]=a[i];
	}
	for(int i=0;i<n;i++){
		scanf("%lld",&b[i]);
		mxb[i]=mib[i]=b[i];
	}
	for(int i=n-1;i>=0;i--){
		for(int j=0;(1ll<<j)<n;j++){
			int temp=1ll<<j;
			temp=temp|i;
			if(temp<n){
				mxa[i]=max(mxa[i],mxa[temp]);
				mia[i]=min(mia[i],mia[temp]);
				mxb[i]=max(mxb[i],mxb[temp]);
				mib[i]=min(mib[i],mib[temp]);
			}
		}
	}
//	for(int i=0;i<n;i++)cout<<mxa[i]<<" "<<mia[i]<<endl;
	ll ans=0;
	ll op=-2e18;//记录最大值，因为数据范围是-1e9~1e9，那么取极小值就取-2e18
	for(int i=n-1;i>=0;i--){
		ll num1=max(mxa[i]*mxb[i],mia[i]*mib[i]);
		ll num2=max(mxa[i]*mib[i],mxb[i]*mia[i]);
		ll num=max(num1,num2);
		op=max(op,num);
		ans=(ans+op%mod)%mod;
	}
	printf("%lld\n",(ans%mod+mod)%mod);
}
signed main(){
	int t;
	scanf("%lld",&t);
	while(t--){
		sove();
	}
	return 0;
}


```
