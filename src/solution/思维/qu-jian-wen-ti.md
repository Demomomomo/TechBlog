---
title: 区间问题
---

## 宽度一定求多能容纳的区间数

### 7-10 售卖车票

![20230403201841](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230403201841.png)

题意：  

有一个长度为n的公路，将他看成[1,n]共n个段  

另外有m个区间，第i个区间是[li,ri]，如果选择这段区间会让这段区间的每个压力都+1  

求这段公路的每段的压力都小于k，能选择的最多的区间的个数  

思路：  

想让区间数尽可能的多，那么我们对于起点相同的所有区间，肯定优先选择右边界小的区间，这样我们后面才能放更多的区间  

我们对于每个以i为起点的区间，先把所有区间都加进去，s记录当前选择的区间的个数，如果s>k的话，我们就将右边界最大的区间给去掉  

到最后以i为起点选择的区间的个数都小于等于k，满足了题意之后我们再看下一个区间，同时把我们当前选择的区间中以i为右边界的区间都给删掉，因为i之前的区间都满足了题意  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=2e5+10;
int n,m,k;
vector<int> v[N];
priority_queue<int> q;
int b[N];
int main(){
	scanf("%d%d%d",&n,&m,&k);
	for(int i=1;i<=m;i++){
		int l,r;
		cin>>l>>r;
		v[l].push_back(r);
	}
	int con=0,s=0;
	for(int i=1;i<=n;i++){
		int op=0;
		for(int j=0;j<v[i].size();j++){
			b[v[i][j]]++;
			op++;
			s++;
			q.push(v[i][j]);
		}
		while(s>k){
			op--;
			int r=q.top();
			q.pop();
			b[r]--;
			s--;
		}
		con+=op;
		s-=b[i];
	}
	printf("%d",con);
	
	
	
	return 0;
}

```





















