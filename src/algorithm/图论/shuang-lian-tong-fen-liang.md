---
title: 双联通分量
---

## 概念
对无向图来说才有双联通分量
双联通分量有两种：


1.边双联通分量（e-dcc）：
桥：对于一个联通图来说，如果删掉一条边使图不能联通，那么这条边就称为桥
极大的不含有桥的联通区域就称为边双联通分量

性质：
在边双联通分量里，不管删掉哪条边，图还是联通的
在边双联通分量里，任意两点之间一定包含两条不相交的路径（存在两条没有公共边的路径）


2.点双联通分量（v-dcc）：
割点：在一个联通图中，如果把一个点及他连接的所有边删掉之后图不联通，那么这个点就叫做割点
一个割点至少属于两个联通分量  
极大的不包含割点的联通块，就被称为点双联通分量

## tarjan算法求边双联通分量
思路：
dfn[x]表示最早走到x的时间
low[x]表示从x开始走，能走到的点的最小时间
判断一个边是不是桥：x-y之间有一条边，（x比y先遍历到）如果y结点能走到x的祖宗结点，他就不是桥，如果不能说明他是桥
所以如果当xy之间的边是桥的话，dfn[x] < low[y]
如何找到一个边双联通分量：
方法1：将所有的桥删掉，剩下的每一个联通块就是边双联通分量
方法2：用一个栈来存遍历到的点，遍历完x之后，如果dfn[x] == low[x]，说明从x走不到让他的父结点，那么x与他的父节点之间的边 就是一个桥，x的子树就是x所在的边双联通分量

方法2代码：


## 例题1：冗余路径
给定一个无向联通图，问至少加几条边使他变成一个边双联通分量

思路：
对于所有的边双联通分量，如果我们在里面加任意一条边都是多余的，因为加不加去掉任何一个边都联通，所以我们先对于一个图中所有的边双联通分量进行缩点，缩点之后的每条边都是一个桥。
那么缩点度数为1的点（叶子节点）至少要加一条边，否则如果删掉与度数为1的点相连的边的话，这个点就与原来的图不联通。那么我们可以把叶子节点：最左边的点连最右边的点，第二个连第二个...如果剩一个的话随便向之前的点连一条边，然后我们就能发现无论删哪条边，整个图都联通。所以答案是（入度为1的点数+1）/2

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=5000+10,M=100000+10;
int n,m;
int ne[M],e[M],h[N],idx,id[N];
int dfn[N],low[N],d[N],st[N],dccnt,ti,top;
bool isq[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
void tarjan(int u,int from){//遍历到的点和来时的边
	dfn[u]=low[u]=++ti;
	st[++top]=u;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(dfn[j]==0){
			tarjan(j,i);
			low[u]=min(low[u],low[j]);
			if(dfn[u]<low[j]){
				isq[i]=isq[i^1]=true;//因为两个反向边的坐标是0,1 2,3  4，5...关系是i和i^1
 			}
		}else if(i!=(from^1)){
			low[u]=min(low[u],dfn[j]);
		}
	}
	if(low[u]==dfn[u]){
		int  y;
		dccnt++;
		do{
			y=st[top--];
			id[y]=dccnt;
		}while(y!=u);
	}
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int a,b;
		cin>>a>>b;
		add(a,b);
		add(b,a);
	}
	tarjan(1,-1);
	for(int i=0;i<idx;i++){
		if(isq[i]){
			d[id[e[i]]]++;
		}
	}
	int ans=0;
	for(int i=1;i<=dccnt;i++){
		if(d[i]==1){
			ans++;
		}
	}
	ans+=1;
	ans/=2;
	cout<<ans<<endl;
	return 0;
}
```




 

