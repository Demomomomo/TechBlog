---
title: 数字三角形模型
---

## Problem E. 矩阵游戏
原题链接：  
https://codeforces.com/gym/104354/attachments/download/20061/statements_2.pdf  

题意：  

有一个n*m的矩阵，只有三种字符：0,1和?。从[1,1]走到[n,m],每次只能向下走或者向下走。当走到1的时候得一分，走到0的时候不得分，走到?的时候可以将他变为1从而得到一分，或者不变，求所有从[1,1]走到[n,m]的路径的得分的最大值  

思路：  

f[i][j][k]表示走到[i,j]恰好有k个?变成1的方案数的最大得分  
状态转移：  
a[i][j]=='0':f[i][j][k]=max(f[i-1][j][k],f[i][j-1][k])  
a[i][j]=='1':f[i][j][k]=max(f[i-1][j][k]+1,f[i][j-1][k]+1)  
a[i][j]=='?':  
改:f[i][j][k]=max(f[i-1][j][k-1]+1,f[i][j-1][k-1]+1)  
不改：f[i][j][k]=max(f[i-1][j][k],f[i][j-1][k])  

那么这样的空间复杂度是n* m * x，会mle  

于是考虑将数组优化到二维：f[j][k]  


1.将k从大到小枚举  
在转移的时候，如果按正常枚举，就会出现重复的情况，这时候只需要将k从大到小进行枚举，就避免了重复  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,x;
int f[505][1005];
char a[505][505];
bool  cheek(int x,int y){
	if(x>=1&&x<=n&&y>=1&&y<=m) return true;
	else return false;
}
void sove(){
	scanf("%d%d%d",&n,&m,&x);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			cin>>a[i][j];
		}
	}
	for(int j=0;j<=m;j++){
		for(int k=0;k<=x;k++){
			f[j][k]=-0x3f3f3f3f;
		}
	}
	if(a[1][1]=='1'){
		f[1][0]=1;
	}else if(a[1][1]=='0'){
		f[1][0]=0;
	}else{
		f[1][1]=1;
		f[1][0]=0;
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			for(int k=x;k>=0;k--){
			if(a[i][j]=='1'){
				if(cheek(i-1,j)){
					f[j][k]=max(f[j][k],f[j][k]+1);
				}
				if(cheek(i,j-1)){
					f[j][k]=max(f[j][k],f[j-1][k]+1);
				}
			}else if(a[i][j]=='0'){
				if(cheek(i,j-1)){
					f[j][k]=max(f[j][k],f[j-1][k]);
				}				
			}else{
				if(cheek(i-1,j)){
					if(k-1>=0) f[j][k]=max(f[j][k],f[j][k-1]+1);
				}
				if(cheek(i,j-1)){
					f[j][k]=max(f[j-1][k],f[j][k]);
					if(k-1>=0)f[j][k]=max(f[j][k],f[j-1][k-1]+1);
				}		
			}
		}
		}
	}
	int ans=0;
	for(int i=0;i<=x;i++){
		ans=max(ans,f[m][i]);
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
2.滚动数组  
在转移的时候只用到了i和i-1层，那么我们就将i这一维开两个，在转移的时候在两维之间相互转移就可以了  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,x;
int f[3][505][1005];
char a[505][505];
bool  cheek(int x,int y){
	if(x>=1&&x<=n&&y>=1&&y<=m) return true;
	else return false;
}
void sove(){
	scanf("%d%d%d",&n,&m,&x);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			cin>>a[i][j];
		}
	}
	for(int i=0;i<3;i++){
	for(int j=0;j<=m;j++){
		for(int k=0;k<=x;k++){
			f[i][j][k]=-0x3f3f3f3f;
		}
	}
}
	if(a[1][1]=='1'){
		f[1][1][0]=1;
	}else if(a[1][1]=='0'){
		f[1][1][0]=0;
	}else{
		f[1][1][1]=1;
		f[1][1][0]=0;
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			for(int k=0;k<=x;k++){
			if(a[i][j]=='1'){
				if(cheek(i-1,j)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i-1&1][j][k]+1);
				}
				if(cheek(i,j-1)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i&1][j-1][k]+1);
				}
			}else if(a[i][j]=='0'){
				if(cheek(i-1,j)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i-1&1][j][k]);
				}
				if(cheek(i,j-1)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i&1][j-1][k]);
				}				
			}else{
				if(cheek(i-1,j)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i-1&1][j][k]);
					if(k-1>=0)f[i&1][j][k]=max(f[i&1][j][k],f[i-1&1][j][k-1]+1);
				}
				if(cheek(i,j-1)){
					f[i&1][j][k]=max(f[i&1][j][k],f[i&1][j-1][k]);
					if(k-1>=0)f[i&1][j][k]=max(f[i&1][j][k],f[i&1][j-1][k-1]+1);
				}	
			}
		}
		}
	}
	int ans=0;
	for(int i=0;i<=x;i++){
		ans=max(ans,f[n&1][m][i]);
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
