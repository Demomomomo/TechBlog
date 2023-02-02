---
title: 小沙の抱团 hard
---
原题链接：https://ac.nowcoder.com/acm/contest/46813/L  

题意：有n个人，m条指令，对第i条指令可以花费bi的代价,要求xi个人抱团，剩下的人淘汰，m条指令可以重复选，那么最少花费多少代价使剩余的人数最少？  

思路：f[i]表示剩下i个人时花费的最小代价，初始化f[n]=0，对于第j条指令，如果当前有i个人，那么行使完指令之后还剩i-i%x[i]个人，代价是f[i]+b[i]，那么状态转移方程就是：  
```cpp
f[i-i%x[i]]=min(f[i-i%x[i]],f[i]+b[i]);
```
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

const int N=1e5+10,M=600;
int n,m;
int b[M],x[M];
int f[N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=m;i++)cin>>b[i]>>x[i];
	memset(f,0x3f,sizeof f);
	f[n]=0;
	for(int i=n;i>=0;i--){
		for(int j=1;j<=m;j++){
			if(x[j]<=i){
				f[i-i%x[j]]=min(f[i-i%x[j]],f[i]+b[j]);
			}
		}
	}
	for(int i=0;i<=n;i++){
		if(f[i]>=0x3f3f3f3f){
			continue;
		}else{
			cout<<f[i];
			break;
		}
	}
	return 0;
}
```


