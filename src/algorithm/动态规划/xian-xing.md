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

## 搬寝室
原题链接：https://acm.hdu.edu.cn/showproblem.php?pid=1421  

题意：  
有n件物品，从中选择2*k件物品搬，搬一次时左手拿一个物品，右手拿一个物品，这一次的疲劳度是左右手物品重量的差的平方，那么求搬完这些物品之后最低的疲劳度是多少。  
思路：  
第一感觉是每次选的两个值相差的越小越好，那么我们猜测一下每次选是不是一定是两个相邻的数。  
比如有四个数：a < b < c < d,那么有三种搬法：  
ab和cd，ac和bd，bc和ad。  
ac和bd的差肯定大于ab和cd差，那么我们主要看ab和cd以及bc和ad。  
用图来画出他们的差值，就是：  
<img src="https://img-blog.csdnimg.cn/3f9a15bbf88948799e4bdd02ec6f2c86.jpeg#pic_center" alt="Pulpit rock" width="304" height="228">  
很容易能看出ab和cd的差值比ac和bd的差值小，那么我们每次选择的时候，选相邻的两个数的差值是最小的。  
f[i][j]表示前i个物品中选j对  
我们可以分成选第i件和不选第i件两种情况：  
选第i件：因为选择相邻两个最优，那么我们就只能选择a[i-1]和a[i]，并且在前i-2个物品中选j-1对。  
不选第i件：那么就从前i-1个里面选j对，那么就是f[i-1][j]  
那么这两种状态取最大即可。  
注意将a数组排序。  
<!-- ```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m;
const int N=2005;
int f[N][N];
int a[N];
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>a[i];
	sort(a+1,a+1+n);
	memset(f,0x3f,sizeof f);
	for(int i=0;i<=n;i++)f[i][0]=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m&&j*2<=i;j++){
			f[i][j]=min(f[i-1][j],f[i-1][j-1]+(a[i]-a[i-1])*(a[i]-a[i-1]));
		}
	}
	cout<<f[n][m]<<endl;
	return 0;
}


``` -->




