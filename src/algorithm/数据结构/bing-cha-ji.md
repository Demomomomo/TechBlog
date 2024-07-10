---
title: 并查集
---
作用：合并两个集合，查询某个数的祖宗结点  
查找一个集合里的元素的数量  
核心：find函数  
```cpp
void find(int x){
	if(p[x]!=x)p[x]=find[p[x]];
	return p[x];
}
```
如果a和b不是一个集合，那么把a合并到b的集合中，在合并之前先把b的集合加上a的元素个数  
```cpp
size[find(b)]+=size[find(a)];
p[find(a)]=find(b)
```
## 例题1：超时
给n个物品每个物品有pi的利润，di的过去天数，过期的物品不能出售，每天只能卖出一个物品，求最大能得到的利润  
思路：建立一个关于天数的并查集，p[i]表示第i天最晚能安排到的天数，最早能安排的天数>0的时候我们就能把他卖出去，然后把他的最早能安排的天数的值--。  
```cpp
const int N=1e4+100;int fa[N];struct name {
	int p,d;}q[N];bool cmp(name a,name b){
	return a.p >b.p ;}int find(int x){
	if(x!=fa[x])fa[x]=find(fa[x]);
	return fa[x];}int main(){
	int n;
	while(~scanf("%d",&n)){
		for(int i=1;i<=n;i++)scanf("%d%d",&q[i].p ,&q[i].d );
		sort(q+1,q+1+n,cmp);
		for(int i=1;i<=10000;i++)fa[i]=i;
		int con=0;
		for(int i=1;i<=n;i++){
			int fx=find(q[i].d );
			if(fx>0){
				con+=q[i].p ;
				fa[fx]=fx-1;
			}
		}
		printf("%d\n",con);
	}
	return 0;
}
```
## 判断图有没有环
如果我们想判断一个图有没有环，那么我们就把每一条边看做联通的关系  
如果两个点已经联通了，那么如果我们再有一条边表示他们联通的话，说明有环  

## 判断关系（带权并查集）
1.相等和不相等  
相等的话，看做一个联通块，然后再用不相等的条件来判断，如果联通说明条件不对
带权并查集：一个p数组存所在集合，一个d数组存与根节点的关系  
2.吃与被吃  
假设a吃b，b吃c，c吃a，他们组成了一个环，p数组来表示属于哪个集合，那么我们用d[x]来表示x到他的父节点的距离，当距离为1的时候是他吃父节点且为第一级，距离为2的时候是父节点吃他且为第二级，当距离是0的时候是父节点同类（条件都是膜3）  
那么如果我们知道了一个集合中的任意两个点和根节点的关系，那么我们就能知道这两个点的关系  
比如说如果x和y是同类关系的话，当在一个集合的时候，我们就判断他俩到根节点膜3的距离是不是相等，如果不相等那么就不对。当不在一个集合的时候，我们就把他俩合并到一个集合，这里以把x合并到y为例，那就p[px]=py（px是x的根节点，py是y的根节点），那么得建立一条px到py的边，即d[px]，因为x和y是同类关系，那么x到y的根节点==y到y的根节点，即d[x]+d[px]==d[y],那么d[px]=d[y]-d[x]  
找根节点的操作：  
先递归找到px的根节点t，因为递归之后的d[px]就是px到px所在的根节点的距离,然后再更新d[x]+=d[px],然后再把p[x]赋值成t  
```cpp
int find(int x){
	if(p[x]!=x){
		int u=find(p[x]);
		d[x]+=d[p[x]];
		p[x]=u;		
	}
	return p[x];
}
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)p[i]=i;
	int res=0;
	while(m--){
		int op,x,y;
		cin>>op>>x>>y;
		int px=find(x),py=find(y);
		if(x>n||y>n) {
			res++;
			continue;
		}
		if(op==1){
			if(px==py){
				if((d[x]-d[y])%3)res++;
			}else{
				p[px]=py;
				d[px]=(d[y]-d[x])%3;
			}
		}else{
			if(px==py){
				if((d[x]-d[y]-1)%3)res++;
			}else{
				p[px]=py;
				d[px]=(d[y]-d[x]+1)%3;
			}
		}
	}
	cout<<res<<endl;

```
3.奇偶关系  
有一个01序列，长度为n（n<=1e9），有m个问题，l r odd表示从l到r这段序列里面有奇数个1，l r even表示l~r这段里有偶数个1，找到最大满足条件的序号  
可以看为前缀和，l~r这一段有奇数个1，可以看成s[l-1]和s[r]不同类，偶数就是同类
那么我们设d数组是到根的关系，==0的时候说明是同类，==1的时候说明是不同类
然后离散化一下和上面的操作一样  
```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
const int N=20005;
int n,m;
struct name{
	int a,b,c;
}q[N];
int p[N];
int d[N];
vector<int> yy;
int findid(int x){
	return lower_bound(yy.begin() ,yy.end() ,x)-yy.begin() +1;
}
int find(int x){
	if(p[x]!=x){
		int u=find(p[x]);
		d[x]+=d[p[x]];
		p[x]=u;
	}
	return p[x];
}
signed main(){
	cin>>n>>m;
	for(int i=1;i<=m;i++){
		int l,r;
		char op[5];
		cin>>l>>r>>op;
		q[i].a =l-1;
		q[i].b =r;
		if(op[0]=='e'){
			q[i].c =0;
		}else q[i].c =1;
		yy.push_back(l-1);
		yy.push_back(r);  
	}
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() );
	int id=0;
	for(int i=1;i<=yy.size() ;i++)p[i]=i;
	for(int i=1;i<=m;i++){
		int x=findid(q[i].a ),y=findid(q[i].b ),c=q[i].c ;
		int px=find(x),py=find(y);
		if(px==py){
			int dd=(d[x]+d[y])%2;
			if(dd==0){
			if(c==0)
				id=i;
				else break;
			}
			else{
				if(c==1){
					id=i;
				}else 
				break;
			}
		}else{
			p[px]=py;
			if(c==0){
				d[px]=-d[y]-d[x];
			}else{
				d[px]=1-d[y]-d[x];
			}
			id=i;
		}
	} 

	cout<<id<<endl;
	return 0;
}
```
## 合并列
有m个操作，最初每个列都有一个战舰，每次操作1:M i j把i列所在的一整列战舰加到j所在的一整列战舰尾部，操作2:C i j 询问i和j是不是在同列，如果不在输出-1，在的话输出中间相隔几个战舰。  
用p数组来表示所在排头，用d数组来表示到根节点的距离，那么对于1操作：  
如果ij不在同一列那么就合并，合并是把x加到y的尾部，相当于在x所在列的根节点到y所在根节点加上了一条大小为size[y]的路径，即d[px]=size[y]，然后更新一下py的size，即size[py]+=size[px],然后再改一下px的根节点，即p[px]=py  
对于询问操作，当在一列时候，因为我们求的是间隔多少，所以就是xy的距离-1，需要特判一下，当x==y的时候，应该输出0而不是-1  
```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
const int N=60005;
int n,m;
struct name{
	int a,b,c;
}q[N];
int p[N];
int d[N];
vector<int> yy;
int si[N];
int find(int x){
	if(p[x]!=x){
		int u=find(p[x]);
		d[x]+=d[p[x]];
		p[x]=u;
	}
	return p[x];
}
signed main(){
	cin>>n;
	for(int i=1;i<=60005;i++)p[i]=i,si[i]=1;
	while(n--){
		char op[5];
		int x,y;
		cin>>op>>x>>y;
		int px=find(x),py=find(y);
		if(op[0]=='M'){
			if(px==py)continue;
			d[px]=si[py];
			si[py]+=si[px];
			p[px]=py;
		}else{
			if(px!=py){
				cout<<-1<<endl;
			}else{
				if(x==y){
					cout<<0<<endl;
				}else{
					cout<<abs(d[x]-d[y])-1<<endl;
				}
			}
		}
	}
	return 0;
}
```