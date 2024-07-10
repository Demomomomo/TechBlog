---
title:  思维
---


## 整除光棍
原题链接：  
https://pintia.cn/problem-sets/1639924117484503040/exam/problems/1639924223701057546  
题意：  
给定一个个位数不是5的奇数n，请你找出一个数最小的数x使得x*n的结果是所有位数都是1的数，保证一定有解。输出x和x的位数  
思路：  
我们可以模拟一下都是1组成的数整除n的过程。  
即设一个数con刚开始为0，当con%n！=0的时候，我们将他乘10+1，这样每次都使得他是所有位数都是1的数。那么我们再比较con和n的大小，如果比n大说明可以除以n，那么我们就输出con/n，如果小的话我们输出0.  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int n;
signed main(){
	int con=0;
	cin>>n;
	bool f=false;
	int i;
	for(i=1;;i++){
		con=con*10+1;
		if(con>=n){
			int op=con/n;
			cout<<op;
			con-=op*n;
			f=true;
		}else if(f) cout<<0;
		if(con==0) break;
	}
	
	cout<<" "<<i;
	return 0;
}

```
















