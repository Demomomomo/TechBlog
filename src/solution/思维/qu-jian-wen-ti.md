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



## 每段有n个不同的数，求所有区间的不同数的方案数  

### 列车售货员难题

原题链接：  
https://ac.nowcoder.com/acm/contest/58860/A  

题意：  

有n个段，第i段有ki个不同的物品，物品编号在1~m之间，求所有连续的段的物品不同的种类一共有多少种  

数据范围：  

1<=n<=2e5,1<=m<=100  

思路：  

记录连续的段的不同数的不同种类总数，当我们走到i的时候，假设已有x，y这两个数，那么我们再走到i+1段，如果i+1段里没有包含除了x，y以外的其他的数，那么说明这一段和上一段的种类相同。  

那么我们对这个步数进行优化，每次走到下一个位置必须满足下一个位置中包含已经走过的前面的数中没有的数，那么m总共100个，对于每个起点最多跳100次，那么分别以1~n为起点跳100次，找到所有不同种类数，时间复杂度就是2e7，不会超时  

那么我们需要对于每个起点i，找出所有的物品的下一个位置的下标，下标从小到大依次跳，每次跳都可以使得所有数的种类数不同，记录每组种类数  

那么肯定会有重复的种类，那么我们把所有种类放进一个set里进行去重之后，就可以得到所有的不同的种类数的方案了  


```cpp
#include<bits/stdc++.h>
using namespace std;
typedef pair<int,int> pii;
int n,m;
bool st[200005][105];//记录第i段j是否出现
int id[105];//记录i的下标
pii nex[200005][105];//记录第i段的下一个数的标和下一个数的值

set<__int128_t> mp;
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		int k;
		cin>>k;
		while(k--){
			int op;
			cin>>op;
			st[i][op]=true;//op在第i段
		}
	}
	for(int i=1;i<=m;i++){
		id[i]=3e5;//边界值
	}
	for(int i=n;i>=1;i--){
		for(int j=1;j<=m;j++){
			if(st[i][j]) id[j]=i;//如果在第i段出现过，id[j]更新
			nex[i][j]={id[j],j};//第i段的j的下一个位置坐标是id[j]，值是j
		}
	}
	for(int i=1;i<=n;i++){
		sort(nex[i]+1,nex[i]+1+m);//根据第i段中的下标从小到大排序
		int op;
		__int128_t con=0;//记录不同的物品数
		for(int j=1;j<=m;j++){
			if(nex[i][j].first==3e5)break;//如果当前已经凑齐了就break
			op=nex[i][j].first;//记录当前的坐标
			while(nex[i][j].first==op&&j<=m&&nex[i][j].first!=3e5){//将当前的坐标里的数都加上
				con+=((__int128_t)1)<<nex[i][j].second;
				j++;
			}
			j--;
			mp.insert(con);//加入方案数中
		}
	}
	cout<<mp.size();
	return 0;
}

```

















