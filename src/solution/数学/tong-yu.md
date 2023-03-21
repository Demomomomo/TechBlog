---
title: 同余
---

## k倍区间
原题链接：https://www.lanqiao.cn/problems/97/learning/?page=1&first_category_id=1&sort=students_count&name=k  
题意：  
有n个数，如果一段连续的区间的和是k的倍数，那么这个区间就称之为k倍区间，求k倍区间的个数。  
思路：  
转换一下题意就是有多少对l,r满足(s[r]-s[l-1])%k==0  
其实就是看%k之后结果相等的前缀和有几对  
那么就将%k相等的前缀和存在一个数组add里，设%k之后结果是id，那么我们就将这个前缀和存在add[id]里。那么就是算对于每个id，add[id]有几对不同的前缀和，设add[id]里存的前缀和个数为m，那么答案就是C（2，m）。  
那么最后还需要加上add[0]里前缀和的个数，因为他的本身也是k的倍数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=1e5+10;
int n,k;
int a[N],s[N];
int add[N];
signed main(){
	cin>>n>>k;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		s[i]=s[i-1]+a[i];
	}
	for(int i=1;i<=n;i++){
		int op=s[i]%k;
		add[op]++;
	}
	for(int i=0;i<k;i++){
		if(add[i]>=2){
			int op=add[i]*(add[i]-1);
			ans+=op/2;
		}
	}
	ans+=add[0];
	cout<<ans<<endl;
	return 0;
}
```





