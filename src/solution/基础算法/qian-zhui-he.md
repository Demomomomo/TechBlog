---
title: 前缀和
---

## D. Running Miles
原题链接：  
https://codeforces.com/contest/1826/problem/D  

题意：  
有一个长度为n的数组，区间[l,r]的值（区间长度大于等于3）为最大三个数的和减去区间长度+1，即：对于[l,r]，ans=a[x]+a[y]+a[z]-(r-l)(l<=x,y,z<=r)  
求这个数组的所有区间的最大值  

思路：  
要想让值尽可能大，那么三个值就尽可能大，区间就尽可能小，贪心的来想，如果我们要选三个最大的数让他们区间尽可能小，那么其中两个最大值肯定在两端  
我们要求的是a[x]+a[y]+a[z]-(r-l)就进一步转换为a[l]+a[r]+a[z]-(r-l)  
变化一下就是a[l]+l+a[z]+a[r]-r  
那么我们对于每个中间的值a[z]，最大值就是他左边的a[i]+i的最大值+他右边的a[i]-i的最大值，对于每个a[z]取最大值即可  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int n;
const int N=1e5+10;
int a[N];
int pre[N],nex[N];
void sove(){
	scanf("%lld",&n);
	for(int i=1;i<=n;i++){
		scanf("%lld",&a[i]);
	}
	pre[0]=nex[n+1]=-1e16;
	for(int i=1;i<=n;i++){
		pre[i]=max(pre[i-1],a[i]+i);
	}
	for(int i=n;i>=1;i--){
		nex[i]=max(nex[i+1],a[i]-i);
	}
	int ans=0;
	for(int i=2;i<n;i++){
		ans=max(ans,pre[i-1]+a[i]+nex[i+1]);
	}
	printf("%lld\n",ans);
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

nbnbnb