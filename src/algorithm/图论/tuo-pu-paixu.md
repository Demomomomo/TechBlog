---
title: 拓扑排序
---

## 概念
对于一个有向无环图的所有点排成一个序列，使他的任意一条边的两个点（u,v），u始终在v的前面，那么这个序列就叫拓扑序列

做法：找到入度为0的点加入队列中，循环队列，每次找到入度为0的点，并删除与这个点联通的点的边，如果删边之后入度为0，把点加入队列中，直到队列为空

```cpp
int n,m;
int q[100005],d[100005];
int e[100005],ne[100005],h[100005],idx;
void add(int a,int b){
    e[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
bool tp(){
    int hh=0,tt=-1;
    for(int i=1;i<=n;i++){
        if(d[i]==0){
            q[++tt]=i;
        }
    }
    while(hh<=tt){
        int t=q[hh++];
        for(int i=h[t];i!=-1;i=ne[i]){
            int j=e[i];
            d[j]--;
            if(d[j]==0)q[++tt]=j;
        }
    }
    return tt==n-1;
}
int main(){
    scanf("%d%d",&n,&m);
    memset(h,-1,sizeof(h));
    while(m--){
        int a,b;
        scanf("%d%d",&a,&b);
        add(a,b);
        d[b]++;
    }
    if(tp()){
        for(int i=0;i<n;i++){
            printf("%d ",q[i]);
        }
    }else printf("-1");
    return 0;
}
```

如果要求编号小的在前面的话，我们就遍历n次，每次从前往后看哪个入度是0，如果入度是0的话就把他加入答案序列中，并且将他标记一下，然后把和这个点相连的边都删除（相连的点如果入度>0的话入度--），并且每次加答案数组的时候判断是否小于等于n，最后如果答案数组的个数是n的话就是我们要求的拓扑序，如果不是的话就输出-1

```cpp
for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(!d[j]){
				yy.push_back(j);
				if(yy.size() >n) {
					f=false;
					break;
				}
				d[j]--;
				for(int k=h[j];k!=-1;k=ne[k]){
					int op=e[k];
					if(d[op])d[op]--;
				} 
			}
		}
	}
```
## 例一：可达性统计
给定一张 N个点 M条边的有向无环图，分别统计从每个点出发能够到达的点的数量。
输入格式
第一行两个整数 N,M，接下来M行每行两个整数x,y表示从x到y的一条有向边。
（n<=1e4）
思路：不能直接算出拓扑序然后从后往前遍历，把后面的点个数加到前面的点上去，因为可能后面的点会连向相同的点，造成计算重复

那么我们就需要记录每个点能够到达哪些点了，为了方便运算我们需要用二进制来储存一个点到达每个点的情况，第k位是1就说明能到达第k个点，那么对于x->y这条边，x能到达的点就等于x能到达的点和y能到达点的并集，用按位或来计算。那么我们用 

<!-- bitset<n> f[n] -->
```cpp
bitset<N> f[N];
```
来储存N个长度为N的二进制串，<>里是二进制串的长度，然后我们按照拓扑排序以后从后往前遍历，每个点都等于他和他能到达的点的并集

```cpp
#include<bits/stdc++.h>
using namespace std;
#include<queue>
#include<bitset>
const int N=60000+10;
int e[N],ne[N],idx,h[N];
int n,m;
int d[N];
bitset<N> f[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
vector<int> yy;
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int a,b;
		cin>>a>>b;
		add(a,b);
		d[b]++;
	}
	queue<int> q;
	for(int i=1;i<=n;i++){
		if(!d[i]) q.push(i); 
	}
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		yy.push_back(t);	
		for(int i=h[t];i!=-1;i=ne[i]) {
			int j=e[i];
			d[j]--;
			if(!d[j]) q.push(j); 
		}
	}
	
	for(int k=n-1;k>=0;k--){
		int id=yy[k];
		f[id][id]=1;
		for(int i=h[id];i!=-1;i=ne[i]){
			int j=e[i];
			f[id]|=f[j];
		}
	}
	for(int i=1;i<=n;i++){
		long long ans=f[i].count();//快速的计算下标为i的二进制串里有几个1
		cout<<ans<<endl;
	}
	return 0;
}
```
## 例二：车站分级
有n个车站牌，每个车站牌有一个级别，最小是1，m趟车次，对于每趟车次满足：如果停靠在x站牌，那么也得在级别>=x级别的站牌停靠（起始站牌和终点站牌也算），那么给你m趟车次，求满足题意的n个站牌最少划分的级数
比如给一趟车次站牌： 3 5 7 9
那么说明4 6 8的级数小于3 5 7 9的级数，那么其实我们可以从4 6 8分别向3 5 7 9连一条有向边，最后按拓扑排序看看有几层就是最小划分的级数，但是如果我们对于一个大小为n的集合a和一个大小为m的集合b中的点一个一个建边的话，最坏每次需要建的时间复杂度到了nm，显然会超时，那么我们就可以建立一个虚拟的中间点x，让a中的点都指向x，x指向b中的点，那么只用建立n+m条边。
建图的话，对于b比a至少大1，我们就把a到b这条边的边权赋值成1，当对于建立虚拟点的操作，那么就是从a到x建立一个边权为0的边，再从x到b建立一个边权为1的边
```cpp
#include<bits/stdc++.h>
using namespace std;
#include<queue>
#include<bitset>
#include<vector>
const int N=1000000+10;//因为要用额外的虚拟点，虚拟点从n+1开始编号，所以我们得把空间开大些
int e[N],ne[N],idx,h[N],idx1;
int n,m;
int d[N],w[N];
int cnt[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
vector<int> yy1,yy2;
int a[N];
map<int,int> mp;
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	idx1=n+1;
	for(int i=1;i<=m;i++){
		int num;
		cin>>num;
		for(int j=1;j<=num;j++){
			cin>>a[j];
			mp[a[j]]=1;
		}
		yy1.clear() ;
		yy2.clear() ;
		for(int j=a[1];j<=a[num];j++){
			if(mp[j]){
				yy1.push_back(j) ;
				mp[j]=0;
			}else{
				yy2.push_back(j); 
			}
		}
		if(yy1.size() ==0||yy2.size() ==0)continue;//注意：如果这一段区间中没有比他们小的车牌，那么就不用建边
		idx1++;
		for(int j=0;j<yy2.size() ;j++){
//			cout<<yy2[j]<<" ";
			add(yy2[j],idx1,0);
			d[idx1]++;
		}
//		cout<<endl;
		for(int j=0;j<yy1.size() ;j++){
//			cout<<yy1[j]<<" ";
			add(idx1,yy1[j],1);
			d[yy1[j]]++;
		}
//		cout<<endl;
	}
	queue<int> q;
	int ans=0;
	for(int i=1;i<=n;i++){
		if(!d[i]){
			cnt[i]=1;
			ans=max(ans,cnt[i]);
			q.push(i); 
		}
	}
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			cnt[j]=max(cnt[j],cnt[t]+w[i]);
			ans=max(ans,cnt[j]);
			d[j]--;
			if(!d[j]){
				q.push(j); 
			}
		}
	}
	cout<<ans<<endl;
	return 0;
}

```
