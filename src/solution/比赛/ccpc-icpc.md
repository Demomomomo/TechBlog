---
title: ccpc-icpc

category:
  - algorithm
tag:
  - ACM
---


## A - I Count Two Three

<p>题意：找出一个大于等于n的，能写成2^a*3^b*5^c*7^d的数。（a，b，c，d均大于等于0）</p>

<p>思路：打表+查找。</p>

<p>打表的时候直接a，b，c，d枚举出来4重循环，然后再剪枝，因为2^32&gt;1e9，所以我们在枚举的时候a，b，c，d都枚举到32就可以了，剪枝是判断一下当我们枚举的乘在一起大于1e9的时候就直接break。</p>

<p>查找用lower_bound函数，本质是二分查找，不会t。</p>

<p>还有卡cin，cout，注意！</p>



```cpp
#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;
const int N=1e6;
typedef long long ll;
ll a[N];
int con=0;
ll poww(ll a,int b){
	ll res=1;
	while(b){
		if(b&1)res=res*a;
		a=a*a;
		b>>=1;
	}
	return res;
}
void init(){
	con=0;
	for(int d=0;d<32;d++){
		if(poww(7,d)>1e9)break;
		for(int c=0;c<32;c++){
			if(poww(7,d)*poww(5,c)>1e9)break;
			for(int b=0;b<32;b++){
				if(poww(7,d)*poww(5,c)*poww(3,b)>1e9)break;
				for(int r=0;r<32;r++){
					ll num=poww(7,d)*poww(5,c)*poww(3,b)*poww(2,r);
					if(num>1e9)break;
					a[con++]=num;
				}
			}
		}
	}
	sort(a,a+con);
}
void sove(){
	ll n;
	scanf("%lld",&n);
	ll q=*lower_bound(a,a+con,n);
	printf("%lld\n",q);
}
int main(){
	int t;
	scanf("%d",&t);
	init();
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

## B - Cure

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/472f8d4dd58b4f3da3d6841f34c22393.png" /></p>

<p> 题意：给一个数n，输出从1/（1*1）+1/(2*2)+...+1/(n*n)的值。</p>

<p>思路：打表存到n的数，注意当n很大的时候1/（n*n）越小，那么他就趋近于0，所以当n很大的时候我们输出趋近的值就可以了。注意在实现的时候不能直接算1/（n*n），需要1/n/n。因为这个数可能很大，所以我们用字符串读入，保留5位小数，那我们打表打到1e6就可以了。</p>



```cpp
#include <algorithm>
#include <cstring>
#include <iostream>
#include <string>
using namespace std;
const int N=1e6+5;
typedef long long ll;
double a[N];
string s;
void init(){
	double sum=0;
	for(int i=1;i<=1e6;i++){
		sum+=(double)(1.0/i/i);
		a[i]=sum;
	}
}
void sove(){
	string s;
	while(cin>>s){
		if(s.size()>=7){
			printf("%.5f\n",a[1000000]);
		}else{
			int t=stoi(s);//将字符串转换为整数的函数
				if(t>=1000000){
					printf("%.5f\n",a[1000000]);
				}else	printf("%.5f\n",a[t]);
		}
	}
}
int main(){
	int t=1;
	init();
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

<p></p>

## B - 缺失的数据范围

著名出题人小Q出过非常多的题目，在这个漫长的过程中他发现，确定题目的数据范围是非常痛苦的一件事。

每当思考完一道题目的时间效率，小Q就需要结合时限以及评测机配置来设置合理的数据范围。

因为确定数据范围是一件痛苦的事，小Q出了非常多的题目之后，都没有它们设置数据范围。对于一道题目，小Q会告诉你他的算法的时间复杂度为O(n^a\log^bn)O(nalogbn)，且蕴含在这个大OO记号下的常数为11。同时，小Q还会告诉你评测机在规定时限内可以执行kk条指令。小Q认为只要n^a\left(\lceil\log_2n\rceil\right)^bna(⌈log2​n⌉)b不超过kk，那么就是合理的数据范围。其中，\lceil x\rceil⌈x⌉表示最小的不小于xx的正整数，即xx上取整。

自然，小Q希望题目的数据范围nn越大越好，他希望你写一个程序帮助他设置最大的数据范围。

Input

第一行包含一个正整数T(1\leq T\leq 1000)T(1≤T≤1000)，表示测试数据的组数。

每组数据包含一行三个正整数a,b,k(1\leq a,b\leq 10,10^6\leq k\leq 10^{18})a,b,k(1≤a,b≤10,106≤k≤1018)，分别描述时间复杂度以及允许的指令数。

Output

对于每组数据，输出一行一个正整数nn，即最大可能的nn。

Sample

Inputcopy	Outputcopy

3 1 1 100000000 2 1 100000000 1 3 200000000

4347826 2886 48828
 思路：二分n

注意log2不能使用longlong，需要手写log2



```cpp
ll log(ll x){
	ll con=0;
	ll ans=1;
	while(ans<x){
		con++;
		ans*=2;
	}
	return con;
}
```

<p>然后因为n^a会爆longlong，那么我们就用__int128存数</p>

<p>乘a个n再乘b个log（n），每乘一下判断是不是小于k即可</p>



```cpp
bool cheek(ll n){
	__int128 ans=1;
	for(int i=0;i<a;i++){
		ans*=n;
		if(ans>k)return false;
	}
	ll op=log(n);
	for(int i=0;i<b;i++){
		ans*=op;
		if(ans>k)return false;
	}
	return true;
}
```

<p> 接下来是完整代码：</p>



```cpp
ll a,b,k;
ll log(ll x){
	ll con=0;
	ll ans=1;
	while(ans<x){
		con++;
		ans*=2;
	}
	return con;
}
bool cheek(ll n){
	__int128 ans=1;
	for(int i=0;i<a;i++){
		ans*=n;
		if(ans>k)return false;
	}
	ll op=log(n);
	for(int i=0;i<b;i++){
		ans*=op;
		if(ans>k)return false;
	}
	return true;
}
void sove(){
	scanf("%lld%lld%lld",&a,&b,&k);
	ll l=0,r=1e18;
	while(l<r){
		ll mid=(l+r+1)/2;
	//	cout<<"mid=="<<mid<<endl;
		if(cheek(mid))l=mid;
		else r=mid-1;
	//	cout<<"l=="<<l<<" r=="<<r<<endl;
	}
	printf("%lld\n",l);	
}
int main(){
	int t;
	scanf("%d",&t);
	while(t--){
		sove();
	}
	
	return 0;
}
```

<p></p>

## F - The Best Path

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/d5f31147946540bf8814c2a03fccbf15.png" /></p>

<p> </p>

<p>题意：当每条河只能走一遍而且能遍历所有湖的情况下，输出每个湖的值的最大异或值，如果不存在这种情况输出impossible。</p>

<p>思路：我强大的队友画图找出了规律。。。tql</p>

<p>对于一个湖，算出他出度入度的总和之后，遍历一遍看他有几个奇数，如果有两个奇数或者没有奇数的话就说明可以在每条边都遍历一遍的情况下走遍所有的湖，其他情况就是不能遍历所有的湖直接输出impossible。当全是偶数边的时候，说明是环，那么肯定会回到起点的位置，那么起点的位置就多异或了一遍，最后还得再异或一遍起点的位置，那么我们本题是在任意起点出发，所以我们要遍历所有湖，然后拿我们算好的异或值再异或一下湖的数取最大值，如果有两个奇数边的话就没有回到起始点的情况，所以直接输出我们算的异或值就行了。</p>



```cpp
#include <algorithm>
#include <cstring>
#include <iostream>
#include <string>
using namespace std;
typedef long long ll;
ll d[100005],a[100005];
int n,m;
void sove(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		d[i]=0;
	}
	for(int i=0;i<m;i++){
		int a,b;
		cin>>a>>b;
		d[a]++;
		d[b]++;
	}
	int con=0;
	for(int i=1;i<=n;i++){
		if(d[i]&1)con++;
	}
	if(con!=0&&con!=2){
		cout<<"Impossible"<<endl;
		return ;
	}
	ll ans=0;
	for(int i=1;i<=n;i++){
		int tmp=(d[i]+1)/2;//因为我们算的是出度+入度，所以我们每次算一个湖异或几遍的时候先/2.
		while(tmp--){
			ans^=a[i];
		}
	}
	if(con==2){//当有2个奇数说明不能回到起始点直接输出异或值
		cout<<ans<<endl;
		return ;
	}
	//如果全是偶数说明会回到起点，那么列举一下我们算出来的数和每个起点的值异或起来的数取最大。
	int res=0;
	for(int i=1;i<=n;i++){
		if(d[i]){
			int num=ans^a[i];
			res=max(res,num);
		}
	}
	cout<<res<<endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

## C - Recursive sequence （矩阵ksm）

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





<p>2 3 1 2 4 1 10</p>

<p></p>

<p></p>

<p>Sample Output</p>





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



```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll mod=2147493647;
ll n,aa,bb;
void mul(ll c[7][7],ll a[7][7],ll b[7][7]){
	ll temp[7][7]={0};
	for(int i=0;i<7;i++){
		for(int j=0;j<7;j++){
			for(int k=0;k<7;k++){
				temp[i][j]=(temp[i][j]+a[i][k]*b[k][j])%mod;
			}
		}
	}
	memcpy(c,temp,sizeof temp);
}
void sove(){
	scanf("%lld%lld%lld",&n,&aa,&bb);
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
		if(k&1)mul(f3,f3,a);
		mul(a,a,a);
		k>>=1;
	}
	ll ans=(2*f3[0][0]+f3[0][1]+f3[0][2])%mod;
	printf("%lld\n",ans);
}
int main(){
	int t;
	scanf("%d",&t);
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

