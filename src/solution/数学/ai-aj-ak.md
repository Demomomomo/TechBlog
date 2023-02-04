---
title: Tokitsukaze and Three Integers
---
原题链接：https://ac.nowcoder.com/acm/contest/46810/L
题意：  
有一个长度为n的数组，想知道三元组[i,j,k]的数量，满足：  
·i!=j&&i!=k&&j!=k  
·（a[i]*a[j]+a[k])%p=x%p  
思路：  
化成a[i]*a[j]%p=（x-a[k])%p
先算出所有i！=j时，a[i]*a[j]的值的个数  
然后对于每个x和k，用ans[x]数组来存放x-a[k]的值的个数
但是会有k==i和k==j的情况，减去这两种情况就好了
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,p;
const int N=5010;
ll a[N];
ll ans[N];
int main(){
	scanf("%d%d",&n,&p);
	for(int i=1;i<=n;i++)scanf("%lld",&a[i]);
	unordered_map<ll,ll> mp;//用map会超时
	for(int i=1;i<=n;i++){
		for(int j=i+1;j<=n;j++){
			ll op=(ll)a[i]*a[j]%p;
			mp[op]++;
		}
	}
	for(int x=0;x<p;x++){
		for(int k=1;k<=n;k++){
			ll op=(ll)((x-a[k])%p+p)%p;
			ans[x]+=mp[op];//记录每个x的个数
		}
	}
	for(int i=1;i<=n;i++){
		for(int k=1;k<=n;k++){
			if(i==k)continue;
			int xx=(a[i]*a[k]%p+a[k])%p;//减去k==i和k==j的情况的个数
			ans[xx]--;
		}
	}
	for(int i=0;i<p;i++){
		printf("%lld ",ans[i]*2);
	}
	return 0;
}
```