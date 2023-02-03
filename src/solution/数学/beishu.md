---
title: 阿宁的倍数
---
原题链接：https://ac.nowcoder.com/acm/contest/46814/B  
题意：有一个长度为n的数组a，下标从1开始，有q次操作。  
修改操作： 1 x：将数组末尾增加一个数x，数组长度增加1  
查询操作： 2 x：求[x+1,n]的区间内，有多少个数满足a[i]是a[x]的倍数。  

思路：如果想找[x+1,n]的区间内是a[x]的倍数，那么我们可以用[1,n]含有的x的倍数减去[1,x]中含有的x的倍数。  
设记录i的倍数的个数的数组为v，那么其实我们每添加一个数x的时候，x的所有因数的v都会+1。  
当我们询问a[x]的倍数的时候，只需要将记录a[x]的倍数个数的v值减去在[1~x]中的a[x]的倍数就行了。  
那么我们用一个g数组来存当走到i时，a[i]的倍数个数。  
那么答案就是v[a[x]]-g[x]  

时间复杂度：O（n*450）（n个数，每个数找他的所有因子）
``` cpp
#include<bits/stdc++.h>
using namespace std;
const int N=4e5+10;
int n,m;
int a[N];
int v[N];//记录当前i的倍数个数
int g[N];//记录到i的时候已经有几个数是a[i]的倍数了
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	for(int i=1;i<=n;i++){
		int x=a[i];
		for(int j=1;j*j<=x;j++){
			if(x%j==0){
				v[j]++;
				if(x/j!=j){
					v[x/j]++;
				}
			}
		}
		g[i]=v[a[i]];
	}
	for(int i=1;i<=m;i++){
		int op,x;
		cin>>op>>x;
		if(op==2){
			cout<<v[a[x]]-g[x]<<endl;
		}else{
			a[++n]=x;
			for(int j=1;j*j<=x;j++){
				if(x%j==0){
					v[j]++;
					if(x/j!=j){
						v[x/j]++;
					}
				}
			}
			g[n]=v[a[n]];
		}
	}
	return 0;
}

```
