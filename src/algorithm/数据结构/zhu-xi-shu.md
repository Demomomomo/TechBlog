---
title: 可持久化线段树
---
（参考的宝贝博客：https://tech.chivas-regal.top/blogs/algorithm/data-structure/function-segmenttree.html#%E7%A8%8B%E5%BA%8F 写的太好啦）
## 概念
部分可持久化：对于一个数据结构有很多修改和查询的操作  
对于每次修改操作都有一个全新的版本（修改只对于最新的版本）  
可以查询所有的历史版本，但是只能修改最新的版本  
完全可持久化：与部分可持久化不同的是可以修改历史版本  
可以进行可持久化的前提是本身的拓扑排序在整个操作中不变。  
可持久化线段树：可以修改最新版本和查询历史版本的线段树。  
对于每次修改，修改单点，修改区间很难。  

## 例题引入：区间第k小值  
原题链接：https://www.acwing.com/problem/content/257/  
题意：给你一组大小为n的数组，m个询问，每次问l~r这段区间的第k小数是什么。  
前置知识：权值线段树  
就是对于数组中每个数出现的次数建立的线段树。  
比如对于1 1 2 2 3 3 3 3 4 5这个数组  
会形成一个这样的权值线段树：  
<img src="https://img-blog.csdnimg.cn/313f8c89fd58474884106751995d3cad.png#pic_center" alt="Pulpit rock" width="304" height="228">  
如果想求得这个序列整体的第k小，那么利用权值线段树的性质，可以二分的往下走  
如果左子树的个数>=k，那么就找左子树的第k 大  
如果左子树的个数< k，那么就右子树中的第k-左子树的个数 大   

可持久化线段树就储存了每次修改之后的历史版本。  
可以从左往右来将数组中的数加进去，当加上a[i]的时候就当于建立了一个新的第i个版本  
如果我们想求[1,r]的第k大数，那么其实我们可以找到第r个版本的权值线段树，然后按照上面的查询方法查找第k大值。  
那么我们要求[l,r]的第k大数的话，那么出现在[l,r]里面的数实际上就是将第r个版本的权值线段树中区间在[l,r]的数的个数减去第l-1个版本的权值线段树在区间[l,r]的数的个数。  
即在前r个数中出现的数的个数减去前l-1个数中出现的数的个数，最后算出的就是在[l,r]中出现的数的个数

储存：  
```cpp
int root[N];//用来每个版本的编号
int idx;//记录当前到了哪个版本
struct name{
    int l,r;//当前结点的左右子树
    int cnt;//当前结点所包含的区间的数的个数
}tr[N*40];//开的数组的大小取决于内存，尽可能开大些，不过一般都开40倍左右
```
离散化：  
```cpp
vector<int> yy;
int find(int x){
    return lower_bound(yy.begin(),yy.end(),x)-yy.begin()+1;
}
for(int i=1;i<=n;i++) yy.push_back(a[i]);
sort(yy.begin(),yy.end());
yy.erase(unique(yy.begin(),yy.end()),yy.end());
```


插入：  
```cpp
void insert(int p,int l,int r,int x){//上一个版本编号，当前的版本包含的区间，需要改变的数的编号，返回的是插入x之后的版本编号
    int q=++idx;//新建一个结点
    tr[q]=tr[q];//先将上一个版本复制
    if(l==r){//如果是叶节点，那么肯定是x
        tr[q].cnt++;//将这个数的个数++
        rteun q;//返回新建的结点编号
    }
    int mid=l+r>>1;
    if(x<=mid) tr[q].l=insert(tr[p].l,l,mid,x);//如果需要改的数在左子树，那么我们把新建的编号为q的线段数的左儿子编号改成插入之后的编号（q的左儿子的历史版本是p的左儿子）
    else tr[q].r=insert(tr[p].r,mid+1,r,x);//否则改q的右儿子
    tr[q].cnt =tr[tr[q].l].cnt+tr[tr[q].r].cnt;//修改完q的左右儿子之后需要更新一下q值
    return q;//最后返回我们新建的版本的编号
}

for(int i=1;i<=n;i++)
root[i]=insert(root[i-1],0,yy.size()-1,find(yy[a[i]]));

```

询问：  
```cpp
int query(int p,int q,int l,int r,int k){//l的版本编号，r的版本编号，当前查找到的区间，查找第k大的数
    if(l==r) return r;//如果已经到了叶子结点，那么答案必然是叶子结点的编号。
    int cnt=tr[tr[q].l].cnt-tr[tr[p].l].cnt;//算出这两个版本的左子树的个数
    int mid=l+r>>1;
    if(k<=cnt) return query(tr[p].l,tr[q].l,l,mid,k);//如果这两个版本左子树个数的差小于等于k，那么我们继续递归他们的左子树
    else return query(tr[p].r,tr[q].r,mid+1,r,k-cnt);
}
```
```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=1e5+10;
int n,m,idx;
int a[N];
int root[N];
struct name{
	int l,r;
	int cnt;
}tr[N*40];
vector<int> yy;
int find(int x){
	return lower_bound(yy.begin(),yy.end() ,x)-yy.begin() ;
}
int insert(int p,int l,int r,int x){
	int q=++idx;
	tr[q]=tr[p];
	if(l==r){
		tr[q].cnt ++;
		return q;
	}
	int mid=l+r>>1;
	if(x<=mid) tr[q].l=insert(tr[p].l ,l,mid,x);
	else tr[q].r =insert(tr[p].r ,mid+1,r,x);
	tr[q].cnt =tr[tr[q].l ].cnt +tr[tr[q].r ].cnt ;
	return q;
}
int query(int p,int q,int l,int r,int k){
	if(l==r)return l;
	int mid=l+r>>1;
	int cnt=tr[tr[q].l ].cnt -tr[tr[p].l ].cnt ;
	if(k<=cnt) return query(tr[p].l ,tr[q].l ,l,mid,k);
	else return query(tr[p].r ,tr[q].r ,mid+1,r,k-cnt);
}
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
		yy.push_back(a[i]); 
	}
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() );
	for(int i=1;i<=n;i++) root[i]=insert(root[i-1],0,yy.size()-1 ,find(a[i]));//建立每个历史版本
	while(m--){
		int l,r,k;
		scanf("%d%d%d",&l,&r,&k);
		printf("%d\n",yy[query(root[l-1],root[r],0,yy.size()-1 ,k)]);
	}
	return 0;
}
```
## 例题 mex
原题链接：https://www.luogu.com.cn/problem/P4137  
题意：给定一个大小为n的数组，有m次查询，每次查询一个区间最小的没有出现过的自然数。  

思路：  
因为大小不会超过n，所以大于n的数可以忽略掉。  
假设所有询问的右端点都是n：  
设f[x]表示数字x最右一次出现的下标。  
如果f[x]< l,说明x没有在l~n出现  
那么问题就变成了我们需要找一个最小的x让f[x]< l  
那么用线段树来维护f的区间最小值。  
从根节点开始，如果左子树的区间最小值< l,那么说明mex在左子树，否则在右子树。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
int n,m;
int a[N];
struct name{
	int l,r;
	int id;//这个区间的最小值
}tr[N*40];
int idx;
int root[N];
int insert(int p,int l,int r,int x,int v){
	int q=++idx;
	tr[q]=tr[p];
	if(l==r){
		tr[q].id =v;
		return q;
	}
	int mid=l+r>>1;
	if(x<=mid) tr[q].l =insert(tr[p].l ,l,mid,x,v);
	else tr[q].r =insert(tr[p].r ,mid+1,r,x,v);
	tr[q].id =min(tr[tr[q].l ].id,tr[tr[q].r ].id );
	return q;
}
int query(int k,int q,int l,int r){
	if(l==r)return l;
	int mid=l+r>>1;
	if(tr[tr[q].l ].id <k) return query(k,tr[q].l,l,mid);
	else return query(k,tr[q].r ,mid+1,r);
}
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		cin>>a[i];
		if(a[i]>n) a[i]=n;//将大于n的都设为n
	}
	for(int i=1;i<=n;i++){
		root[i]=insert(root[i-1],0,n,a[i],i);
	}
	while(m--){
		int l,r;
		cin>>l>>r;
		cout<<query(l,root[r],0,n)<<endl;
	}
	return 0;
}


```

