---
title: 可持久化线段树
---

## P1383 高级打字机
原题；链接：https://www.luogu.com.cn/problem/P1383  
题意：有n个操作，操作有三种类型：  
1.T x：在文章末尾加一个小写字母x  
2.U x：撤销最后的x次操作  
3.Q x：询问当前文章中第x个字母  

思路：用可持久化线段树来分别储存每个历史版本，需要用一个数组cnt来记录每个版本的长度，还需要一个now来记录当前的版本编号。  
当T操作的时候，就将版本数now++，当前版本的长度cnt[now]=cnt[now-1]+1，然后在cnt[now]的位置进行插入操作。  
当执行U的操作的时候，now++，当前的版本应该是编号第now-x-1个版本，长度也是第now-x-1的版本的长度。  
在进行询问的时候，直接询问now版本的第x个字母就行，now不需要++（询问不选修改操作）

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
const int N=1e5+10;
struct name{
	int l,r;
	int ch;
}tr[10000000];
int idx;
int con[N];
int root[N];
int insert(int p,int l,int r,int v,int x){
	int q=++idx;
	tr[q]=tr[p];
	if(l==r){
		tr[q].ch =v;
		return q;
	}
	int mid=l+r>>1;
	if(x<=mid) tr[q].l =insert(tr[p].l ,l,mid,v,x);
	else tr[q].r =insert(tr[p].r ,mid+1,r,v,x);
	return q;
}
int query(int k,int p,int l,int r){
	if(l==r)return tr[p].ch;
	int mid=l+r>>1;
	if(k<=mid) return query(k,tr[p].l ,l,mid);
	else return query(k,tr[p].r ,mid+1,r);
}
int main(){
	cin>>n;
	int now=0;
	for(int i=1;i<=n;i++){
		char op;
		cin>>op;
		if(op=='T'){
			char ch;
			cin>>ch;
			now++;
			int x=ch-'a';
			con[now]=con[now-1]+1;
			root[now]=insert(root[now-1],1,n,x,con[now]);
		}else if(op=='Q'){
			int x;
			cin>>x;
			int oo=query(x,root[now],1,n);
			char pp=oo+'a';
			cout<<pp<<endl;
		}else{
			int x;
			cin>>x;
			now++;
			con[now]=con[now-x-1];
			root[now]=root[now-x-1];
		}

	}
	return 0;
}

```

## P3567 [POI2014]KUR-Couriers
原题链接：https://www.luogu.com.cn/problem/P3567  
题意：有一个长度为n的数组，m个询问，每次询问一个区间[l,r]内是否存在一个数使得出现的次数严格大于这个区间的一半，如果有输出这个数，如果没有输出0。  
思路：维护每个区间内数的个数，记录每个版本的个数，从根节点开始询问，如果r版本的子树减去l-1版本的子树的数的个数满足条件，那么就递归到这个子树，如果没有返回0.  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
const int N=5e5+10;
struct name{
	int l,r;
	int cnt;
}tr[20000000];
int idx,m;
int root[N];
int a[N];
int insert(int p,int l,int r,int x){
	int q=++idx;
	tr[q]=tr[p];
	if(l==r){
		tr[q].cnt++;
		return q;
	}
	int mid=l+r>>1;
	if(x<=mid) tr[q].l =insert(tr[p].l ,l,mid,x);
	else tr[q].r =insert(tr[p].r ,mid+1,r,x);
	tr[q].cnt =tr[tr[q].l ].cnt +tr[tr[q].r ].cnt ;
	return q;
}
int query(int p,int q,int l,int r,int k){
	if(l==r)return l;
	int mid=l+r>>1;
	int cnt1=tr[tr[q].l ].cnt -tr[tr[p].l ].cnt ; 
	int cnt2=tr[tr[q].r ].cnt -tr[tr[p].r ].cnt ;
	if(cnt1>=k) return query(tr[p].l ,tr[q].l ,l,mid,k);
	if(cnt2>=k) return query(tr[p].r ,tr[q].r ,mid+1,r,k);
	return 0;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;	
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>a[i];
	for(int i=1;i<=n;i++){
		root[i]=insert(root[i-1],1,n,a[i]);
	}
	while(m--){
		int l,r;
		cin>>l>>r;
		int con=r-l+1;
		con/=2;
		con++;
		cout<<query(root[l-1],root[r],1,n,con)<<endl;
	}
	return 0;
}



```






