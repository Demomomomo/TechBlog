---
title: D. Buying gifts
---
原题链接：https://codeforces.com/contest/1802/problem/D  
题意：  
有n个ai和bi，对于每个i，要么选择ai，要么选择bi，要求选择的ai和bi的最大值的差值最小，输出最大值。  
思路：  
我们先枚举选择的ai的最大值。  
按ai的数值从小到大排序，枚举ai是我们选择的最大值，bi必不选，那么[i+1，n] 这段区间就只能选b，如果选a的话最大值会变。对于[1,i-1]这段区间可以选择a也可以选择b，最终的目标是想让b的最大值和a的最大值最接近。  
对于[i+1,n]这段区间的b的最大值是个定值，假如为mx。  
如果mx>ai，那么我们就不用再从[1,i-1]找bi了，因为如果找的bi< mx,那么不会影响b的最大值，最后还是mx和ai做运算。如果找到的bi>mx，那么最大值与ai的差值就增大了。  
如果mx< ai的话，我们可以在[1,i-1]中找一个大于mx的最接近ai的b值。  
分别用两个set来维护b[1~i-1]和b[i+1,n]，每次找的时候直接用lower_bound找到最接近ai的数即可。  

注意，我们在使用set的erase函数时，尽量删除迭代器而不是删除元素，因为在multiset中，如果我们erase(x)的话，就是将所有的x都删除，而q.erase(q.lower_bound(x))是只将一个删除。  


```cpp
#include<bits/stdc++.h>
#include<vector>
#include<set>
#define int long long
using namespace std;
const int N=5e5+10;
int n;
typedef pair<int,int> pii;
pii a[N];
void sove(){
	multiset<int> pre,ne;
	cin>>n;
	for(int i=1;i<=n;i++)cin>>a[i].first >>a[i].second ;
	sort(a+1,a+1+n);
	for(int i=1;i<=n;i++) ne.insert(a[i].second );
	int ans=1e18;
	for(int i=1;i<=n;i++){
		ne.erase(ne.lower_bound(a[i].second ));
		if(ne.size() ){
			auto mx=ne.end() ;
			mx--;
			ans=min(ans,abs(*mx-a[i].first ));
			if(*mx<a[i].first &&pre.size() ){
				auto id=pre.lower_bound(a[i].first );
				if(id!=pre.end() ){
					ans=min(ans,*id-a[i].first );
				}
				if(id!=pre.begin() ){
					id--;
					ans=min(ans,abs(*id-a[i].first ));
				} 
			}
		}else{
			auto id=pre.lower_bound(a[i].first ); 
			if(id!=pre.end() ){
				ans=min(ans,*id-a[i].first );
			}
			if(id!=pre.begin() ){
				id--;
				ans=min(ans,abs(a[i].first -*id));
			}			
		}
		pre.insert(a[i].second );  
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



