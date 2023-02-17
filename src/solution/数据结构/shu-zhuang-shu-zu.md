---
title: 树状数组
---

## 回转寿司
原题链接：https://www.luogu.com.cn/problem/P5459  
题意：有n个盘子，每个盘子里放a[i]个寿司，可以连续吃掉一段区间寿司，求连续吃掉的寿司总数在L~R之间的区间数。  

思路：设s数组是a的前缀和数组，那么有这样一组关系：  
L<=s[r]-s[l-1]<=R  
变化一下就是：  
s[r]-R<=s[l-1]<=s[r]-L  
那么就是对每个前缀和数，求在他之前的数大小在s[r]-R和s[r]-L之间的s[l-1]有几个  
（注意对于每个r：1<=l<=r，那么0<=l-1<=r-1，所以我们应该从s[0]开始遍历）  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#include<vector>
int n,l,r,m;
const int N=1e5+10;
int tr[N*4];
int a[N],s[N];
vector<int> yy;
int lowbit(int x){
	return x&(-x);
}
int sum(int x){
	int ans=0;
	for(int i=x;i;i-=lowbit(i)) ans+=tr[i];
	return ans;
}
void add(int x,int c){
	for(int i=x;i<=m;i+=lowbit(i)){
		tr[i]+=c;
	}
}
signed main(){
	cin>>n>>l>>r;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		s[i]=s[i-1]+a[i];
	}
	for(int i=0;i<=n;i++){
		yy.push_back(s[i]);
		yy.push_back(s[i]-l);
		yy.push_back(s[i]-r);   
	}
	int ans=0;
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() );
	m=yy.size() ;
	for(int i=0;i<=n;i++){
		int id=lower_bound(yy.begin() ,yy.end() ,s[i] )-yy.begin() +1;
		int rr=lower_bound(yy.begin() ,yy.end() ,s[i]-l)-yy.begin() +1;
		int ll=lower_bound(yy.begin() ,yy.end() ,s[i]-r)-yy.begin() +1;
		ans+=(sum(rr)-sum(ll-1));
		add(id,1);
	}
	cout<<ans<<endl;
	return 0;
}
```


