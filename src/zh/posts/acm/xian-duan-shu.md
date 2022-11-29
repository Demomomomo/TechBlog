---
title: 线段树

category:
  - algorithm

tag:
  - 数据结构
---


## E - Replace Digits（线段树）

<h3>Problem Statement</h3>

<p><a data-link-desc="AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online." data-link-icon="https://img.atcoder.jp/assets/favicon.png" data-link-title="E - Replace Digits" href="https://atcoder.jp/contests/abl/tasks/abl_e" title="E - Replace Digits">E - Replace Digits</a></p>

<p>You have a string SS of length NN. Initially, all characters in SS are <code>1</code>s.</p>

<p>You will perform queries QQ times. In the ii-th query, you are given two integers L_i, R_iLi​,Ri​ and a character D_iDi​ (which is a digit). Then, you must replace all characters from the L_iLi​-th to the R_iRi​-th (inclusive) with D_iDi​.</p>

<p>After each query, read the string SS as a decimal integer, and print its value modulo 998,244,353998,244,353.</p>

<h3>Constraints</h3>

<ul><li>1 \leq N, Q \leq 200,0001≤N,Q≤200,000</li>
	<li>1 \leq L_i \leq R_i \leq N1≤Li​≤Ri​≤N</li>
	<li>1 \leq D_i \leq 91≤Di​≤9</li>
	<li>All values in input are integers.</li>
</ul><hr /><h3>Input</h3>

<p>Input is given from Standard Input in the following format:</p>

<pre>
NN QQ
L_1L1​ R_1R1​ D_1D1​
::
L_QLQ​ R_QRQ​ D_QDQ​
</pre>

<h3>Output</h3>

<p>Print QQ lines. In the ii-th line print the value of SS after the ii-th query, modulo 998,244,353998,244,353.</p>

<hr /><h3>Sample Input 1 Copy</h3>

<p>Copy</p>

<pre id="pre-sample0">
8 5
3 6 2
1 4 7
3 8 3
2 2 2
4 5 1
</pre>

<h3>Sample Output 1 Copy</h3>

<p>Copy</p>

<pre id="pre-sample1">
11222211
77772211
77333333
72333333
72311333
</pre>

<p></p>

<p>题意：有一个长为n的串，初始的每个位置都是1</p>

<p>m个操作，每次操作l r x，把l~r这一段位置上的每个数都改成x</p>

<p>每次修改之后看总的串膜上998,244,353之后的结果</p>

<p>思路：先建树</p>

<p>sum表示l~r这段的总数，s表示l~r这段的数应该乘的数位，lazy表示懒标记</p>

<p>建树的时候sum和s随着更新</p>

<p>但是修改的时候只有sum在更新，因为l~r这段应该乘的位数是不变的</p>


```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
const long long mod=998244353;
typedef long long ll;
struct name{
	int l,r;
	ll sum,lazy,s;
}tr[N*4];
int n,m;
ll a[N];
void pushup(int u){
	tr[u].sum =(tr[u<<1].sum+tr[u<<1|1].sum  )%mod;
	tr[u].s =(tr[u<<1].s +tr[u<<1|1].s)%mod;
}
void build(int u,int l,int r){
	if(l==r){
		tr[u]={l,r,a[l],0,a[l]};
	}else{
		int mid=l+r>>1;
		tr[u]={l,r,0,0,0};
		build(u<<1,l,mid);
		build(u<<1|1,mid+1,r);
		pushup(u);
	}
}
void pushdown(int u){
	if(tr[u].lazy ){
		tr[u<<1].lazy =tr[u].lazy ;
		tr[u<<1].sum =tr[u<<1].s *tr[u].lazy %mod;
		tr[u<<1|1].lazy =tr[u].lazy ;
		tr[u<<1|1].sum =tr[u<<1|1].s *tr[u].lazy %mod;
		tr[u].lazy =0;		
	}
}
void modify(int u,int l,int r,ll x){
	if(l<=tr[u].l &&r>=tr[u].r ){
		tr[u].lazy =x;
		tr[u].sum =tr[u].s *x%mod;
	}else{
		pushdown(u);
		int mid=tr[u].l +tr[u].r >>1;
		if(l<=mid)modify(u<<1,l,r,x);
		if(r>mid)modify(u<<1|1,l,r,x);
		tr[u].sum =(tr[u<<1].sum +tr[u<<1|1].sum)%mod; 
	}
}
int main(){
	scanf("%d%d",&n,&m);
	a[n]=1;
	for(int i=n-1;i>=1;i--){
		a[i]=a[i+1]*10%mod;
	}
	build(1,1,n);
	while(m--){
		int l,r;
		ll x;
		scanf("%d%d%lld",&l,&r,&x);
		modify(1,l,r,x);
		printf("%lld\n",tr[1].sum );
	}
	return 0;
}
```


<p></p>

