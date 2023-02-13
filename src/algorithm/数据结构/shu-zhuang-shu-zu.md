---
title: 树状数组
---
作用：单点修改区间查询  
1.快速求前缀和 O(logn)  
2.快速修改某个数 O(logn)  

lowbit（x）表示x的最低位1所表示的十进制数  
tr[i]表示区间[1,i]的和  

## 1.求前缀和：  
```cpp
int sum(int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i) )res+=tr[i];
	return res;
}
```

## 2.在下标为i的位置上加一个数
```cpp
void add(int x,int c){
	for(int i=x;i<=n;i+=lowbit(i))tr[i]+=c;
}
```

## 例题 

冒泡排序求交换次数  
给定n个数，进行冒泡排序，请计算交换次数。  
数据范围：n<=5e5,a[i]<=1e9

本质就是记录逆序对的数量。  

先进行离散化，算逆序对的数量。  


## 区间修改，单点查询
有一个大小为n的a数组，每次将下标为l~r的数加上一个数，最后再查询每一个数最终的结果  
利用差分数组，设b是a的差分数组，对a的操作相当于b[l]+c,b[r+1]+c,b[1]+b[2]+...+b[i]就是变化之后a[i]的值。  

## 区间修改，区间查询
有一个大小为n的数组，m条指令，每条指令有两种：  
1.C l r d，表示把a[l]~a[r]都加上d  
2.Q l r，表示询问数列中第l~r的和。  

<img src="https://img-blog.csdnimg.cn/44aa91a695424c7f9c976fe7d11a1901.png#pic_center" alt="Pulpit rock" width="304" height="228">  
<img src="https://img-blog.csdnimg.cn/45fb0c656cb24482b7707c584b0680c7.png#pic_center" alt="Pulpit rock" width="304" height="228">  

那么要求a[i]的前缀和我们只需要维护两个树状数组：差分数组d和i*d就可以了。  

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int N=1e5+10;
int n,m;
int tr1[N*4],tr2[4*N];
int a[N];
int lowbit(int x){
	return x&(-x);
}
int sum(int tr[],int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i)){
		res+=tr[i];
	}
	return res;
}
void add(int tr[],int x,int c){
	for(int i=x;i<=n;i+=lowbit(i)){
		tr[i]+=c;
	}
}
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		int op=a[i]-a[i-1];
		int tmp=op*i;
		add(tr1,i,op);
		add(tr2,i,tmp);
	}
	while(m--){
		char op;
		cin>>op;
		if(op=='C'){
			int l,r,d;
			cin>>l>>r>>d;
			add(tr1,l,d);
			add(tr2,l,l*d);
			if(r+1<=n){
				add(tr1,r+1,-d);
				add(tr2,r+1,(r+1)*(-d));
			}
		}else{
			int l,r;
			cin>>l>>r;
			int sumr=(r+1)*sum(tr1,r)-sum(tr2,r);
			int suml=(l)*sum(tr1,l-1)-sum(tr2,l-1);
			cout<<sumr-suml<<endl;
		}
	}
	return 0;
}
```

## 约瑟夫问题
有n个人按顺序围成一圈，编号为1的人从1开始喊，喊到m的人出局，直至没有人，求出局的顺序。  

思路：我们用now记录一下要找的位置，从1开始，op表示现在还有几个人，正常情况下要喊的应该是now+m-1，但是因为围成了一圈，然后我们就需要取模把他映射到0~op-1，即now=(now+m-1-1)%op+1，找到之后删除这个人  
然后再用二分找到这个位置就可以了。找到之后op需要--。  



```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int N=2e5+10;
int n,m;
int tr[N*4];
int a[N];

int lowbit(int x){
	return x&(-x);
}
int sum(int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i)){
		res+=tr[i];
	}
	return res;
}
void add(int x,int c){
	for(int i=x;i<=n;i+=lowbit(i)){
		tr[i]+=c;
	}
}
bool st[N];
int ans[N];
bool cheek(int mid,int x){
	if(sum(mid)>=x)return true;
	else return false;
}
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++) add(i,1);
	int now=1,op=n;
	vector<int> yy;
	while(op){
		now=(now+m-1-1)%op+1;
		int l=1,r=n;
		while(l<r){
			int mid=(l+r)>>1;
			if(cheek(mid,now)) r=mid;
			else l=mid+1;
		}
		yy.push_back(l);
		add(l,-1);
		op--; 
	}
	for(int i=0;i<yy.size() ;i++) cout<<yy[i]<<" ";
	return 0;
}
```


