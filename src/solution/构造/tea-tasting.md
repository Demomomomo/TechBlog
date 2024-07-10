---
title: C. Tea Tasting
---
原题链接：https://codeforces.com/contest/1795/problem/C  
题意：  
给定n杯茶，每杯中有a[i]个单位的茶，n个人，每个人每次可以喝b[i]个单位的茶。刚开始的时候先第一个人喝第1杯，第二个人喝第2杯...第n个人喝第n杯。到第二轮开始的时候，第一个人被去除，第二个人喝第一杯，第三个人喝第二杯...第n个人喝第n-1杯，这样经过n轮之后所有的人都被去除，那么求每个人最后一共喝了多少。  

思路：  
第i杯是第i~n个人依次喝的，我们算出b数组的前缀和，找到第一个满足s[j]-s[i-1]>a[i]的j，那么从i~j-1就是每个人可以在第i杯里完整喝一次，那么我们用一个cnt数组来记录每个人完整的喝了几次的差分数组，cnt[i]+1,cnt[j]-1,最后算出这个数组的前缀和就能知道对于每个人完整喝b[i]的次数。那么对于不能完整喝的部分j，设num是a[i]-能完整喝的部分，如果num>0的话，那么第j个人就喝的是num，那么我们再用一个ex数组来存每个人不能完整喝的部分就可以了。最后是每个人能完整喝的次数*每个人能喝的量+多余部分就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=2e5+10;
int a[N];
int b[N];
int s[N];
int n;
int cnt[N];
int ex[N];
bool cheek(int i,int j){
	return s[j]-s[i-1]<=a[i];
}
void sove(){
	scanf("%lld",&n);
	for(int i=1;i<=n;i++){
		cnt[i]=ex[i]=0;
	}
	for(int i=1;i<=n;i++)scanf("%lld",&a[i]);
	for(int i=1;i<=n;i++)scanf("%lld",&b[i]);
	for(int i=1;i<=n;i++)s[i]=s[i-1]+b[i];
	for(int i=1;i<=n;i++){
		int l=i,r=n+1;
		while(l<r){
			int mid=l+r>>1;
			if(s[mid]-s[i-1]>a[i]) r=mid;
			else l=mid+1;
		}
		cnt[i]++;
		if(l<=n){
			cnt[l]--;
			if(a[i]-(s[l-1]-s[i-1])>0)ex[l]+=a[i]-(s[l-1]-s[i-1]);
		}
	}
	for(int i=1;i<=n;i++){
		cnt[i]+=cnt[i-1];
	}
	for(int i=1;i<=n;i++)printf("%lld ",cnt[i]*b[i]+ex[i]);
	cout<<endl;
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


