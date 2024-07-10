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



## Problem C. Serval 的试卷答案

原题链接：https://codeforces.com/gym/103941/attachments  

题意：  

有一个长度为n，只含有ABCD的字符串s，有q个操作，分为两种：  
1.1 l r：将[l,r]这段的每个s[x]变成下一个字母，即将A变成B，将B变成C，将C变成D，将D变成A  
2.2 l r k:对于[l,r]这段字符串，问有多少种分法将字符串分为恰好k个合法的答案。  
一个字符串是合法答案的定义：对于每个字符，他都比后面的所有字符小。比如ACD是合法答案，AA和DB都不是合法答案  

思路：  

如果一个字符串合法的话，如果s[i]>s[i+1]，那么这个位置是必须分割开的一个间隔，其他的位置间隔可以分割开也可以不分割开。  

那么求[l,r]这个区间里有多少种k个合法答案，实际上就是将[l,r]这段分割成k份，分割成k份需要k-1个间隔，如果[l,r]有x个位置必须要有间隔，那么分成k个合法答案的个数就是： $C_{r-l-x}^{k-1-x}$  

那么对于每段，我们需要找有多少个间隔满足s[i]< s[i+1]，那么其实对于s[i]和s[i+1]这一对间隔，只有AA，AB，...，CD，DD这16种情况  
那么我们维护一个线段树：  

lr表示区间，left，right表示字符串两端的字符，c[i][j]表示前面字母是i后面字母是j的间隔个数，lz表示懒标记，cnt记录当前区间的s[i] > s[i+1]的个数  

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int N=1e5+10,mod=998244353;
int f[N],fi[N];
int ksm(int a,int b){
	int res=1%mod;
	while(b){
		if(b&1)res=res*a%mod;
		a=a*a%mod;
		b>>=1;
	}
	return res;
}
void init(){
	f[0]=fi[0]=1;
	for(int i=1;i<N;i++){
		f[i]=(f[i-1]*i)%mod;
		fi[i]=(fi[i-1]*ksm(i,mod-2))%mod;
	}
}
int C(int a,int b){
	int ans=(f[a]*fi[b]%mod*fi[a-b])%mod;
	return ans;
}
struct name{
	int l,r,cnt,lz,left,right;
	int c[5][5],tmp[5][5];
}tr[4*N];
int n,m;
string s;
void pushup(int u){
	tr[u].left=tr[u<<1].left;
	tr[u].right=tr[u<<1|1].right;
	tr[u].cnt=tr[u<<1].cnt+tr[u<<1|1].cnt ;
	for(int i=0;i<4;i++){
		for(int j=0;j<4;j++){
			tr[u].c[i][j]=tr[u<<1].c[i][j]+tr[u<<1|1].c[i][j];
		}
	}
	tr[u].c[tr[u<<1].right][tr[u<<1|1].left]++;
	if(tr[u<<1].right>=tr[u<<1|1].left) tr[u].cnt++;
}

void update(int u,int x){
	tr[u].cnt=0;
	tr[u].left=(tr[u].left+x)%4;
	tr[u].right=(tr[u].right+x)%4;
	for(int i=0;i<4;i++){
		for(int j=0;j<4;j++){
			tr[u].tmp[(i+x)%4][(j+x)%4]=tr[u].c[i][j];
		}
	}
	for(int i=0;i<4;i++){
		for(int j=0;j<4;j++){
			tr[u].c[i][j]=tr[u].tmp[i][j];
		}
	}	
	for(int i=0;i<4;i++){
		for(int j=0;j<4;j++){
			if(i>=j) tr[u].cnt+=tr[u].c [i][j];
		}
	}
	
}


void pushdown(int u){
	if(tr[u].lz){
		tr[u<<1].lz+=tr[u].lz ;
		tr[u<<1|1].lz+=tr[u].lz;
		update(u<<1,tr[u].lz);
		update(u<<1|1,tr[u].lz);
		tr[u].lz=0;
	}
}
void build(int u,int l,int r){
	tr[u]={l,r,0,0};
	if(l==r){
		tr[u].left=tr[u].right=s[l]-'A';
		return ;
	}
	int mid=l+r>>1;
	build(u<<1,l,mid);
	build(u<<1|1,mid+1,r);
	pushup(u);
}

void modify(int u,int l,int r){
	if(l<=tr[u].l&&r>=tr[u].r ){
		tr[u].lz++;
		update(u,1);
		return ;
	}
	pushdown(u);
	int mid=tr[u].l+tr[u].r >>1;
	if(l<=mid) modify(u<<1,l,r);
	if(r>mid) modify(u<<1|1,l,r);
	pushup(u);
}

int query(int u,int l,int r){
	if(l<=tr[u].l &&r>=tr[u].r ){
		return tr[u].cnt;
	}
	pushdown(u);
	int mid=tr[u].l+tr[u].r >>1;
	int res=0,ff=0;
	if(l<=mid) res+=query(u<<1,l,r),ff++;
	if(r>mid) res+=query(u<<1|1,l,r),ff++;
	if(ff==2&&tr[u<<1].right>=tr[u<<1|1].left) res++;
	return res;
}


signed main(){
	init();
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	cin>>n>>m;
	cin>>s;
	s=" "+s;
	build(1,1,n);
	while(m--){
		int op,l,r,k;
		cin>>op;
		if(op==1){
			cin>>l>>r;
			modify(1,l,r);
		}else{
			cin>>l>>r>>k;
//			cout<<"==";
			int c=query(1,l,r);
			if(r-l<k-1||k-1<c){
				cout<<0<<endl;
			}else{
				cout<<C(r-l-c,k-1-c)<<endl;
			}
		}
	}
	return 0;
}
```





