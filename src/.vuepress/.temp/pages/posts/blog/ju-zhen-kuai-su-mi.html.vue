<template><div><h2 id="c-recursive-sequence-矩阵ksm" tabindex="-1"><a class="header-anchor" href="#c-recursive-sequence-矩阵ksm" aria-hidden="true">#</a> C - Recursive sequence （矩阵ksm）</h2>
<p>原题链接：<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.2.0/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M85B" data-link-title="Problem - 5950" href="https://acm.hdu.edu.cn/showproblem.php?pid=5950" title="Problem - 5950">Problem - 5950</a></p>
<p>Problem Description</p>
<p>Farmer John likes to play mathematics games with his N cows. Recently, they are attracted by recursive sequences. In each turn, the cows would stand in a line, while John writes two positive numbers a and b on a blackboard. And then, the cows would say their identity number one by one. The first cow says the first number a and the second says the second number b. After that, the i-th cow says the sum of twice the (i-2)-th number, the (i-1)-th number, and i4. Now, you need to write a program to calculate the number of the N-th cow in order to check if John’s cows can make it right.</p>
<p></p>
<p></p>
<p>Input</p>
<p>The first line of input contains an integer t, the number of test cases. t test cases follow.<br />
Each case contains only one line with three numbers N, a and b where N,a,b &lt; 231 as described above.</p>
<p></p>
<p></p>
<p>Output</p>
<p>For each test case, output the number of the N-th cow. This number might be very large, so you need to output it modulo 2147493647.</p>
<p></p>
<p></p>
<p>Sample Input</p>
<pre>

</pre>
<p>2 3 1 2 4 1 10</p>
<p></p>
<p></p>
<p>Sample Output</p>
<pre>

</pre>
<p>85 369</p>
<p>题意：给三个数n a b，规定一个数组，f[i]=2*f[i-2]+f[i-1]+i^4</p>
<p>a是数组的第一个数，b是数组的第二个数</p>
<p>求第n个数是多少（mod2^32）</p>
<p>思路：根据f[i]=2*f[i-2]+f[i-1]+i^4</p>
<p>把i^4展开就是i^4 + 4*i^3+ 6*i^2+ 4*i+ 1</p>
<p>那么我们就需要i^4 i^3 i^2 i 1</p>
<p>构造Fn={fn-2,fn-1,n^4,n^3,n^2,n,1}</p>
<p>那么Fn+1={fn-1,fn,(n+1)^4,(n+1)^3,(n+1)^2,(n+1),1}</p>
<p>那么A矩阵就是：</p>
<p>0 2 0 0 0 0 0</p>
<p>1 1 0 0 0 0 0</p>
<p>0 1 1 0 0 0 0</p>
<p>0 0 4 1 0 0 0</p>
<p>0 0 6 3 1 0 0</p>
<p>0 0 4 3 2 1 0</p>
<p>0 0 1 1 1 1 1</p>
<p>f3数组就是{a,b,81,27,9,3,1}</p>
<p>然后就算出来： f3*A^（n-3）</p>
<p>最后答案就是：2*f3[0][0]+f3[0][1]+f3[0][2];</p>
<pre>
<code>#include&lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
const ll mod=2147493647;
ll n,aa,bb;
void mul(ll c[7][7],ll a[7][7],ll b[7][7]){
	ll temp[7][7]={0};
	for(int i=0;i&lt;7;i++){
		for(int j=0;j&lt;7;j++){
			for(int k=0;k&lt;7;k++){
				temp[i][j]=(temp[i][j]+a[i][k]*b[k][j])%mod;
			}
		}
	}
	memcpy(c,temp,sizeof temp);
}
void sove(){
	scanf("%lld%lld%lld",&amp;n,&amp;aa,&amp;bb);
	if(n==1){
		printf("%lld\n",aa);
		return ;
	}
	if(n==2){
		printf("%lld\n",bb);
		return ;
	}
	ll a[7][7]={
	{0,2,0,0,0,0,0},
	{1,1,0,0,0,0,0},
	{0,1,1,0,0,0,0},
	{0,0,4,1,0,0,0},
	{0,0,6,3,1,0,0},
	{0,0,4,3,2,1,0},
	{0,0,1,1,1,1,1},
	};
	ll f3[7][7];
	memset(f3,0,sizeof f3);
	f3[0][0]=aa;
	f3[0][1]=bb;
	f3[0][2]=81;
	f3[0][3]=27;
	f3[0][4]=9;
	f3[0][5]=3;
	f3[0][6]=1;
	ll k=n-3;
	while(k){
		if(k&amp;1)mul(f3,f3,a);
		mul(a,a,a);
		k&gt;&gt;=1;
	}
	ll ans=(2*f3[0][0]+f3[0][1]+f3[0][2])%mod;
	printf("%lld\n",ans);
}
int main(){
	int t;
	scanf("%d",&amp;t);
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
</div></template>


