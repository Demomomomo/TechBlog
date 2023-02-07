---
title: I love exam
---
原题链接：https://vjudge.net/contest/541856#problem/H  

题意：  
小z有n场考试，t天开学。  
有m本复习资料。
对于第i套复习资料，名称是s[i]，研究的时间是y[i]，可以在这门学科上加x[i]的分。（每科的上限是100），每套资料用一次。  
小z的每门课都是0分水平，需要选择一些科目来复习，最多可以不及格p科课程（分数低于60），否则他会被叫家长。  

想知道在不叫家长的情况下，能拿到的最高分。如果被叫了家长输出-1.  

数据范围：n<=50,m<=15000,s[i]长度不超过15,x[i]和y[i]数据范围是1~10，天数t:1~500，允许不及格科目p:0<=3

思路：  
f[i][j]表示第i门课花了j天能得到的分最多是多少。  
状态转移和01背包一样。
dp[i][k][kk]表示前i门课，花费时间k，在挂kk课的情况下，最大得分是多少。  
当f[i][j]>=60:  
dp[i][k][kk]=max(dp[i][k][kk],dp[i-1][k-j][kk]);  
当f[i][j]<60：  
dp[i][k][kk]=max(dp[i][k][kk],dp[i-1][k-j][kk-1]);  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
typedef pair<int,int> pii;
int n,m;
int f[55][550];
int dp[55][550][4];
map<string,int> mp;
vector<pii> yy[55];
void sove(){
	int t,p;
	scanf("%d",&n);
	mp.clear();
	for(int i=1;i<=n;i++){
		string s;
		cin>>s;
		mp[s]=i;
		yy[i].clear();
	}
	scanf("%d",&m);
	for(int i=1;i<=m;i++){
		string s;
		cin>>s;
		int v,w;
		scanf("%d%d",&w,&v);
		int op=mp[s];
		yy[op].push_back({v,w});
	}
	scanf("%d%d",&t,&p);
	memset(dp,-0x3f,sizeof dp);
	memset(f,0,sizeof f);
	for(int i=1;i<=n;i++){
	for(auto v:yy[i]){
		for(int j=t;j>=v.first;j--){
			f[i][j]=max(f[i][j],f[i][j-v.first]+v.second);
			f[i][j]=min(100,f[i][j]);
		}
	}
	}
	dp[0][0][0]=0;
	for(int i=1;i<=n;i++){
		for(int k=0;k<=t;k++){
			for(int j=0;j<=k;j++){
				for(int kk=0;kk<=3;kk++){
					if(f[i][j]>=60) dp[i][k][kk]=max(dp[i-1][k-j][kk]+f[i][j],dp[i][k][kk]);
					else if(kk>0) dp[i][k][kk]=max(dp[i][k][kk],dp[i-1][k-j][kk-1]+f[i][j]);
				}
			}
		}
	}
	int ans=-1;
	for(int i=0;i<=p;i++){
		ans=max(dp[n][t][i],ans);
	}
	cout<<ans<<endl;
}
int main(){
	int t;
	scanf("%d",&t);
	while(t--){
		sove();
	}
	return 0;
}


```