---
title: manachar
---

## A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛）

原题链接：  
https://ac.nowcoder.com/acm/contest/50354/A  

题意：  

一个长度为n的数组，对于每个数a[i],求有几个数满足：  

1.i<=j  

2.子串a[i~j]是一个回文串  

思路：  

这个时候就用到了一个算法：manacher算法  

这个算法的作用是找字符串的最大回文串的长度，我们在算的过程中会算出一个len数组，他表示以下标为i的字符为中心的最大回文串的最右端的字符所在的位置到i有几个字符（包括i和最右端的字符），当我们每次遍历字符串的时候，我们找到以i为下标的最大长度的回文串的最左边，也就是下标为i-len[i]+1的位置，然后到i这个区间是回文串的左边，这个区间的每个数到和其i对称的坐标的地方都能构成一个回文串，而题目要求是以最左边为回文串的开头，所以我们把构成回文串的左边，也就是i+len[i]-1——i这个区间的所有的坐标上的字符能构成的回文串数量都加1，这时候我们就用到了差分数组，创建一个b数组作为差分数组，在b[i-len[i]+1]处+1，在b[i+1]-1,（即l=i-len[i]+1，r=i），最后通过算出b数组的前缀合就能算出每个位置以自己为首字母的回文串的数量了。

```cpp
#include <iostream>
#include<cstring>
#include<algorithm>
#include<cmath>
using namespace std;
const int N=3e6+10;//记得数开大点，否则会有边界问题
int a[N],b[N],len[N];//a是修改之后的数组，b是以i为首字母的回文串的个数的差分数组，len是回文串长度数组
int n,x;
int main(){
	cin>>n;
	a[0]=0;
	for(int i=1;i<=n;i++){
		cin>>x;
		a[i*2-1]=-1;
		a[i*2]=x;
	}
	a[n*2+1]=-2;
	int mx=0,po=0;//mx表示目前找到的最大回文串的最右端的字符的下标，po是这个最大回文串的中间字符串的下标
	for(int i=1;i<=2*n;i++){
		if(i<mx){
			len[i]=min(len[2*po-i],mx-i);
		}else len[i]=1;
		while(a[i+len[i]]==a[i-len[i]])len[i]++;//更新len[i]
		b[i-len[i]+1]++;
		b[i+1]--;
		if(mx<i+len[i]){
			mx=i+len[i];
			po=i;
		}
		
	}
	for(int i=1;i<=2*n;i++){
		b[i]+=b[i-1];
		if(i%2==0){
			printf("%d ",b[i]);
		}
	}
	return 0;
}
```


























