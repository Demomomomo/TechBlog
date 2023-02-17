---
title: 线段树
---

## 扶苏的问题
原题链接：https://www.luogu.com.cn/problem/P1253  
给定一个长度为n的数组，要求支持以下三种操作：  
1.给定区间[l,r]，将区间内每个数都改为x。  
2.给定区间[l,r]，将区间内每个数都加上x。  
3.给定区间[l,r]，求区间内的最大值。  

思路：  
因为有两个对区间的修改，所以要用两个修改操作和两个懒标记。  
定义upd为操作1的懒标记，add为操作2的懒标记。  
操作1更新：  
如果当前遍历的区间被需要修改的区间完全覆盖，那么就直接将mx和upd改为x，add改为0.否则的话分裂区间进行pushdown操作然后再分别进行更新。  
操作2更新：  
如果当前遍历的区间被需要修改的区间完全覆盖，那么就直接将mx+x，add+x。否则的话分裂区间进行pushdown操作然后再分别进行更新。  
对于分裂操作，有两种：
1.将upd下传：左右子树的upd改为父节点的upd，add改为0，mx改为upd，最后将父结点的upd清除。  
2.将add下传：左右子树的add+父节点的add，mx+父节点的add，最后将父节点的add改为0.  
注意分裂操作的时候我们需要先下传upd再下传add，因为对于一个区间来说，如果只改了一部分，那么我们需要先把这一部分的数的add改成0之后，再将剩余的部分add进行更新。

```cpp
#include<bits/stdc++.h>
using namespace std;
//#define int long long
typedef long long ll;
const int N=2e6+10;
const ll INF=2e18;
int n,m;
struct name{
	int l,r;
	ll upd,add,mx;
}tr[N*4];
int a[N];
void pushup(int u){
	tr[u].mx =max(tr[u<<1].mx ,tr[u<<1|1].mx );
}
void build(int u,int l,int r){
	tr[u]={l,r};
	tr[u].add =0;
	tr[u].upd =INF;
	tr[u].mx =-INF;
	if(l==r){
		tr[u].mx =a[l];
		return ;
	}
	int mid=l+r>>1;
	build(u<<1,l,mid);
	build(u<<1|1,mid+1,r);
	pushup(u);
}
void downupd(int u){
	if(tr[u].upd !=INF){
		tr[u<<1].upd =tr[u].upd ;
		tr[u<<1|1].upd =tr[u].upd ;
		tr[u<<1].mx =tr[u].upd ;
		tr[u<<1|1].mx=tr[u].upd ; 
		tr[u<<1].add =0;
		tr[u<<1|1].add =0;
		tr[u].upd =INF;
	}
}
void downadd(int u){
	if(tr[u].add ){
		tr[u<<1].add +=tr[u].add ;
		tr[u<<1|1].add +=tr[u].add ;
		tr[u<<1].mx +=tr[u].add ;
		tr[u<<1|1].mx +=tr[u].add ;
		tr[u].add =0;
	}
}
void upd(int u,int l,int r,ll d){
	if(l<=tr[u].l &&r>=tr[u].r ){
		tr[u].add =0;
		tr[u].mx =d;
		tr[u].upd =d;
	}else{
		downupd(u);
		downadd(u);
		int mid=tr[u].l+tr[u].r >>1;
		if(l<=mid) upd(u<<1,l,r,d);
		if(r>mid) upd(u<<1|1,l,r,d);
		pushup(u);
	}
}
void add(int u,int l,int r,ll d){
	if(l<=tr[u].l &&r>=tr[u].r ){
		tr[u].add +=d;
		tr[u].mx +=d;
	}else{
		downupd(u);
		downadd(u);
		int mid=tr[u].l+tr[u].r >>1;
		if(l<=mid) add(u<<1,l,r,d);
		if(r>mid) add(u<<1|1,l,r,d);
		pushup(u);
	}
}
ll query(int u,int l,int r){
	if(l<=tr[u].l &&r>=tr[u].r ){
		return tr[u].mx;
	}else{
		downupd(u);
		downadd(u);
		int mid=tr[u].l +tr[u].r >>1;
		ll num=-2e18;
		if(l<=mid) num=max(num,query(u<<1,l,r));
		if(r>mid) num=max(num,query(u<<1|1,l,r));
		return num;
	}
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	build(1,1,n);
	while(m--){
		int op,l,r;
		cin>>op>>l>>r;
		if(op==1){
			ll x;
			cin>>x;
			upd(1,l,r,x);
		}else if(op==2){
			ll x;
			cin>>x;
			add(1,l,r,x);
		}else{
			cout<<query(1,l,r)<<endl;
		}
	}
	return 0;
}
```

## 鸡格线
原题链接：https://ac.nowcoder.com/acm/contest/46800/G?&headNav=acm


你有一个长为n的数组a，需要支持以下两种操作：  
1.输入l，r，k，对区间[l,r]中所有数字执行a[i]=10 $\sqrt{a[i]}$ ,round为四舍五入函数  
2.输出当前数组所有数字的和。  
你需要正确处理m次这样的操作  

思路：  
对1e9一直开根号的话，大概操作9次左右最后会变成1  
数据范围a[i]<=1e9，因为开根号很少次就可以得到一个固定的值，那么我们找一个数试试一直按照上面的函数改变几次会变成一个固定的值  
那么对于1e9来说，他操作9次之后就变成了100，而且100进行上述的操作时候还是100，那么说明对于数组a，我们最多操作n*10次操作每个数就可以变成一个固定的值。  
那么我们用set来存储还没有变成100的值的下标，每次需要操作的时候我们就从一个大于等于l的下标开始，大于r结束的set里存的每个下标id，对a[id]进行k次操作就行了  
为了方便计算sum，我们每次对一个数进行完k次操作的时候，减去原来他的值再加上他变化后的值就可以了E:

```cpp
#include<bits/stdc++.h>
#include<set>
#include<vector>
#define int long long
using namespace std;
const int N=1e5+10;
int n,m;
int a[N];
int f(int x){
	int op=round(10.0*sqrt(x));
	return op;
}
signed main(){
	cin>>n>>m;
	set<int> st;
	int sum=0;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		st.insert(i); 
		sum+=a[i];
	}
	while(m--){
		int op;
		cin>>op;
		if(op==1){
			int l,r,k;
			cin>>l>>r>>k;
			auto s=st.lower_bound(l);// 
			vector<int> yy;
			for(auto i=s;i!=st.end() &&*i<=r;i++){
				int con=k;
				int id=*i;
				while(con&&a[id]!=f(a[id])){
					sum-=a[id];
					a[id]=f(a[id]);
					sum+=a[id];
					con--;
				}
				if(a[id]==f(a[id])) yy.push_back(id) ; //这里注意我们不能直接在st里删除id这个下标，不然指针就会指向删除之后的空值。这里我们先用一个vector数组来存需要删除的下标，在遍历完st之后我们再删除
			}
			for(int i=0;i<yy.size() ;i++) st.erase(yy[i]);、、删除下标 
		}else{
			cout<<sum<<endl;
		}
	}
	return 0;
}
```


