---
title: 平衡树
---
作用：  
插入一个数  
删除一个数  
求某个值的排名  
求排名是某个数的数值  
求比某个数小的最大值  
求比某个数大的最小值 

## P1533 可怜的狗狗
原题链接：https://www.luogu.com.cn/problem/P1533  

题意：  
有n只狗，每个狗狗有一个漂亮值，m个操作，每个操作是求[l,r]这段区间第k漂亮的狗狗的漂亮值是多少，并且区间不重叠。  

思路：  
因为区间不重叠，所以我们可以将区间先按左端点从小到大排序，用两个指针ll，rr来记录当前区间的数，然后遍历每个区间，将在这个区间里的所有数都插入数中，不在这个区间里的所有数都删除，再求排名是k的数就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=3e5+10,INF=1e18;
int n,m;
int a[N];
struct node{
	int l,r,k,id;
}q[N];
int root,idx;
struct name{
    int l,r;//左右子树
    int key,val;//key是BST里排序用到的关键值，val是大根堆里的优先级，val是随机的。
    int cnt,si;//cnt表示这个数出现几次，si表示以这个结点为根的子树的大小。
}tr[N];
int get_node(int key){
	tr[++idx].key =key ;
	tr[idx].val =rand();
	tr[idx].si =tr[idx].cnt =1;
	return idx;
}

void pushup(int u){
	tr[u].si =tr[tr[u].l].si +tr[tr[u].r ].si +tr[u].cnt ;
}

void zig(int &p){
	int q=tr[p].l ;
	tr[p].l =tr[q].r ;
	tr[q].r =p;
	p=q;
	pushup(tr[p].r );
	pushup(p);
}

void zag(int &p){
	int q=tr[p].r ;
	tr[p].r =tr[q].l ;
	tr[q].l =p;
	p=q; 
	pushup(tr[p].l );
	pushup(p);
}
void build(){
	get_node(-INF);
	get_node(INF);
	root=1;
	tr[1].r =2;
	pushup(root);
	if(tr[1].val<tr[2].val) zag(root); 
}
void insert(int &p,int key){
	if(!p) p=get_node(key);
	else if(tr[p].key ==key) tr[p].cnt ++;
	else if(key<tr[p].key ){
		insert(tr[p].l ,key);
		if(tr[tr[p].l ].val >tr[p].val ) zig(p);
	}else{
		insert(tr[p].r ,key);
		if(tr[tr[p].r ].val >tr[p].val ) zag(p);
	}
	pushup(p);
}
void remove(int &p,int key){
	if(!p) return ;
	if(tr[p].key==key){
		if(tr[p].cnt >1) tr[p].cnt --;
		else if(tr[p].l ||tr[p].r ){	
			if(!tr[p].r ||tr[tr[p].l].val >tr[tr[p].r ].val ){
				zig(p);
				remove(tr[p].r ,key);
			}else{
				zag(p);
				remove(tr[p].l ,key);
			}
			
		}else p=0;
	}else{
		if(key<tr[p].key ) remove(tr[p].l ,key);
		else remove(tr[p].r,key);
	}
	pushup(p);
}

int get_key_by_rank(int p,int rank){
	if(!p) return INF;
	if(tr[tr[p].l ].si>=rank) return get_key_by_rank(tr[p].l ,rank);
	if(tr[tr[p].l ].si +tr[p].cnt >=rank) return tr[p].key ;
	return get_key_by_rank(tr[p].r ,rank-tr[tr[p].l].si -tr[p].cnt );
}


int ans[N];
bool cmp(node a,node b){
	return a.l <b.l ;
}
signed main(){
	build();
	scanf("%lld%lld",&n,&m);
	for(int i=1;i<=n;i++)scanf("%lld",&a[i]);
	for(int i=1;i<=m;i++){
		int l,r,k;
		scanf("%lld%lld%lld",&l,&r,&k);
		q[i]={l,r,k,i};
	}
	sort(q+1,q+1+m,cmp);
	int ll=0,rr=0;
	for(int i=1;i<=m;i++){
		int l=q[i].l ,r=q[i].r ,k=q[i].k ,id=q[i].id ;
		while(rr<=r&&rr<=n) insert(root,a[rr]),rr++;
		while(ll<=l-1&&ll<=n) remove(root,a[ll]),ll++;
		ans[id]=get_key_by_rank(root,k+1);
	}
	for(int i=1;i<=m;i++)printf("%lld\n",ans[i]);
	return 0;
}
```

