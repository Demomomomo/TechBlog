---
title: 思维
---

## 2263: neighbor
原题链接：  
http://acm.zzuli.edu.cn/problem.php?id=2263  
题意：  
有一个n*m的矩阵，给出主视图和左视图的高度，求这个矩阵的总高度的最大值和最小值。  

思路：  
最大值：对于每个格子来说，取左视图和主视图的最小值，那么就保证了每个格子都被填上并且符合主视图和左视图。  
最小值：先将主视图填上，因为对于行列高度相等的数可以放在一个格子上就能满足，那么我们就遍历左视图，如果这个格子在主视图没有出现过或者在左视图中出现的次数大于在主视图中出现的次数，那么我们就将他加上。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1000+10;
int a[N][N];
int ans[N];
int n,m;
int ii[N];
int jj[N];
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>ii[i];
	}
	for(int i=1;i<=m;i++){
		cin>>jj[i];
	}
	int mx=0,mi=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			mx+=min(ii[i],jj[j]);
		}
	}
	map<int,int> mp;
	for(int i=1;i<=m;i++){
		mi+=jj[i];
		mp[jj[i]]++;
	}
	for(int i=1;i<=n;i++){
		if(mp[ii[i]]==0){
			mi+=ii[i];
		}else{
			mp[ii[i]]--;
		}
	}
	cout<<mi<<" "<<mx;
	
	return 0;
	
}
```


















