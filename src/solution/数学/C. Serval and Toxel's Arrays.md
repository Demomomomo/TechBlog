---
title: C. Serval and Toxel's Arrays
---
原题链接：https://codeforces.com/contest/1789/problem/C  
题意：  
有一个长度为n的数组，满足两两不同。  
有m个操作，第i个操作是将第p个元素改为v，那么就形成了一个新的数组。  
定义两个数组的值是两个数组中不同数的种类，那么求这m+1个数组中，两两数组的总值是多少。  
思路：对于每个数来说，在一个数组中只能出现一次，我们算出他在m+1个数组中出现的次数cnt，那么cnt就表示含有这个数的数组的个数。两两数组中，一个数要么出现两次，要么出现一次，那么他的贡献就是：出现两次时的情况 $C_{cnt}^{2} $+ 出现一次的情况 $C_{cnt}^{1}*C_{m+1-cnt}^{1}  $.  

统计出现次数的方法：  
可以用map来存一个数出现的次数，假设所有的m+1个数组都有他的话，初始时是m+1。那么对于第i次操作将a[p]变成v，那么a[p]次数就减少了m+1-i次（因为后面的数组中都没有a[p]），相应的v的次数就加了m+1-i次  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
#define int long long
const int N=2e5+10;
int n,m;
int a[N];
vector<int> yy;
void sove(){
	cin>>n>>m;
	yy.clear() ;
	map<int,int> mp;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		yy.push_back(a[i]);
		mp[a[i]]=m+1;
	}
	for(int i=1;i<=m;i++){
		int p,v;
		cin>>p>>v;
		mp[a[p]]-=m+1-i;
		yy.push_back(v); 
		mp[v]+=m+1-i;
		a[p]=v;
	}
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() ); 
	int ans=0;
	for(int i=0;i<yy.size() ;i++){
		int cnt=mp[yy[i]];
		ans+=cnt*(cnt-1)/2+cnt*(m+1-cnt);
	}
	cout<<ans<<endl;
}
signed main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}

```



