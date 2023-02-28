---
title: 线性dp
---

## 最短编辑距离
原题链接：https://www.acwing.com/problem/content/904/  
题意：  
给定两个字符串A和B，现在要将A经过若干操作变为B，可进行的操作有：  
1.删除–将字符串A中的某个字符删除。  
2.插入–在字符串A的某个位置插入某个字符。  
3.替换–将字符串A中的某个字符替换为另一个字符。  

求将A变为b至少需要多少次操作。  

思路：  
f[i][j]表示A[1~i]变为B[1~j]需要的最小操作次数。  
因为求最小值，先将f初始化为极大值。  
因为当ab字符串都是空的时候，不用进行操作也一样，那么f[0][0]=0.  
将a[1~i]变为b[0]的时候，我们需要将a全部删除，那么f[i][0]=i  
将a[0]变为b[1~i]的时候，我们需要将a加上i个字符，那么f[0][i]=i  
对于第一个删除操作，当a[1~i-1]已经变为b[1~j]的时候，我们需要将a的i删除，那么f[i][j]=min(f[i][j],f[i-1][j]+1)  
对于第二个插入操作，当a[1~i]已经变为b[1~j-1]，那么我们需要再a的最后加上一个字符，那么f[i][j]=min(f[i][j],f[i][j-1]+1)  
对于第三个替换操作，如果a[i]!=b[j]，那么就需要替换，那么f[i][j]=min(f[i][j],f[i-1][j-1]+1)  
那么当a[i]==b[j]的时候，我们不用操作，f[i][j]=min(f[i][j],f[i-1][j-1]+1)  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1500;
int f[N][N];
int n,m;
int main(){
	cin>>n;
	string a,b;
	cin>>a;
	cin>>m;
	cin>>b;
	a=" "+a;
	b=" "+b;
	memset(f,0x3f,sizeof f);
	f[0][0]=0;
	for(int i=1;i<=n;i++) f[i][0]=i;
	for(int i=1;i<=m;i++) f[0][i]=i;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			
			f[i][j]=min(f[i][j],f[i][j-1]+1);
			f[i][j]=min(f[i][j],f[i-1][j]+1);
			if(a[i]==b[j]) f[i][j]=min(f[i][j],f[i-1][j-1]);
			else f[i][j]=min(f[i-1][j-1]+1,f[i][j]);
		}
	}
	cout<<f[n][m]<<endl;
	return 0;
}
```




