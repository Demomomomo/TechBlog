<template><div><h2 id="cf706d-vasiliy-s-multiset" tabindex="-1"><a class="header-anchor" href="#cf706d-vasiliy-s-multiset" aria-hidden="true">#</a> CF706D Vasiliy‘s Multiset</h2>
<p>Author has gone out of the stories about Vasiliy, so here is just a formal task description.</p>
<p>You are given qq queries and a multiset AA , initially containing only integer 00 . There are three types of queries:</p>
<ol><li>"+ x" — add integer xx to multiset AA .</li>
	<li>"- x" — erase one occurrence of integer xx from multiset AA . It's guaranteed that at least one xx is present in the multiset AA before this query.</li>
	<li>"? x" — you are given integer xx and need to compute the value 
	<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/200f51f1c76134b1655997977ed2f391.png" /></p>
	, i.e. the maximum value of bitwise exclusive OR (also know as XOR) of integer xx and some integer yy from the multiset AA .</li>
</ol><p>Multiset is a set, where equal elements are allowed.</p>
<p>题意：刚开始a集合里有一个数0，那么我们有q个操作：1.+x，将x加到集合a中，2.-x，将x从集合中减掉，3.？x，输出集合a中的数与x的最大异或值</p>
<p>思路：异或的话存二进制字典树，对插入操作就是平常的操作，因为还有一个删除和询问所以我们需要用个num数组记录一下一个数的二进制每个位的数的个数，删除的时候遍历一下num--，因为有询问操作所以我们要用一个数组v来记录一下到一个编号的数是多少</p>
<p></p>
<pre>
<code>/*

 .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |  ________    | || |  _________   | || | ____    ____ | || |     ____     | |
| | |_   ___ `.  | || | |_   ___  |  | || ||_   \  /   _|| || |   .'    `.   | |
| |   | |   `. \ | || |   | |_  \_|  | || |  |   \/   |  | || |  /  .--.  \  | |
| |   | |    | | | || |   |  _|  _   | || |  | |\  /| |  | || |  | |    | |  | |
| |  _| |___.' / | || |  _| |___/ |  | || | _| |_\/_| |_ | || |  \  `--'  /  | |
| | |________.'  | || | |_________|  | || ||_____||_____|| || |   `.____.'   | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'

*/
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
#include&lt;vector&gt;
#include&lt;set&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;deque&gt;
#include&lt;cmath&gt;
#include&lt;stack&gt;
#define int long long
#define lowbit(x) x&amp;(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair&lt;int,int&gt; pii;
int gcd(int a,int b){
	return b&gt;0 ? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
//int e[N],ne[N],h[N],idx,w[N];
/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/
const int N=2e5+10;
int n;
int cnt;
int tr[N*17][2],num[N*27],v[N*27];//v是记录每个编号所表示的数字
void insert(int x){
	int p=0;
	for(int i=32;i&gt;=0;i--){
		int op=x&gt;&gt;i&amp;1;
		if(!tr[p][op]){
			tr[p][op]=++cnt;
		}
		p=tr[p][op];
		num[p]++;//对于每个位上的二进制数的编号，个数++
	}
	v[p]=x;//到最后的时候记录一下到达这个编号所表示的值
}
void declear(int x){//删除的是x的每一位二进制的数的编号的个数
	int p=0;
	for(int i=32;i&gt;=0;i--){
		int op=x&gt;&gt;i&amp;1;
		p=tr[p][op];
		num[p]--;
	}
}
int query(int x){
	int p=0;
	for(int i=32;i&gt;=0;i--){
		int op=x&gt;&gt;i&amp;1;
		if(tr[p][op^1]&amp;&amp;num[tr[p][op^1]]){//如果^1的数存在的话我们就让编号等于^1之后的数，否则还等于原数
			p=tr[p][op^1];
		}else p=tr[p][op];
	}
	return x^v[p];//返回异或值，v[p]表示我们最终找到的数的编号p所表示的数值
}
void sove(){
	char op;
	int x;
	cin&gt;&gt;op&gt;&gt;x;
	if(op=='+'){
		insert(x);
	}else if(op=='-'){
		declear(x);
	}else cout&lt;&lt;query(x)&lt;&lt;endl;
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
	insert(0);
	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="cf1644c-increase-subarray-sums" tabindex="-1"><a class="header-anchor" href="#cf1644c-increase-subarray-sums" aria-hidden="true">#</a> CF1644C Increase Subarray Sums</h2>
<h2>题目描述</h2>
<p>You are given an array a_1, a_2, \dots, a_na1​,a2​,…,an​ , consisting of nn integers. You are also given an integer value xx .</p>
<p>Let f(k)f(k) be the maximum sum of a contiguous subarray of aa after applying the following operation: add xx to the elements on exactly kk distinct positions. An empty subarray should also be considered, it has sum 00 .</p>
<p>Note that the subarray doesn't have to include all of the increased elements.</p>
<p>Calculate the maximum value of f(k)f(k) for all kk from 00 to nn independently.</p>
<h2>输入格式</h2>
<p>The first line contains a single integer tt ( 1 \le t \le 50001≤t≤5000 ) — the number of testcases.</p>
<p>The first line of the testcase contains two integers nn and xx ( 1 \le n \le 50001≤n≤5000 ; 0 \le x \le 10^50≤x≤105 ) — the number of elements in the array and the value to add.</p>
<p>The second line contains nn integers a_1, a_2, \dots, a_na1​,a2​,…,an​ ( -10^5 \le a_i \le 10^5−105≤ai​≤105 ).</p>
<p>The sum of nn over all testcases doesn't exceed 50005000 .</p>
<h2>输出格式</h2>
<p>For each testcase, print n + 1n+1 integers — the maximum value of f(k)f(k) for all kk from 00 to nn independently.</p>
<h2>题意翻译</h2>
<h3>题目简述</h3>
<p>给定一个序列 \left\{a_n\right\}{an​} 与 整数 xx</p>
<p>定义 f(k)f(k) 表示经过如下操作后, 序列 aa 中最大的连续子段和: 将 aa 中 kk 个<strong>不同</strong>的位置上的数加上 xx</p>
<p>请求出 f(k),\ k\in[0, n]f(k), k∈[0,n]</p>
<h3>输入数据</h3>
<p>多组数据 TT (1\leq T\leq 50001≤T≤5000)</p>
<p>每组数据的第一行为 n, xn,x (1\leq n\leq 50001≤n≤5000, 0\leq x\leq 10^50≤x≤105)<br />
第二行为 nn 个整数 a_1, a_2,\dots,a_na1​,a2​,…,an​, (-10^5\leq a_i\leq 10^5−105≤ai​≤105)</p>
<p>所有数据的 nn 的总和不超过 50005000</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
3
4 2
4 1 3 2
3 5
-2 -7 -1
10 2
-6 -1 -2 4 -6 -1 -4 4 -5 -4</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
10 12 14 16 18
0 4 4 5
4 6 6 7 7 7 7 8 8 8 8</pre>
<h2>说明/提示</h2>
<p>In the first testcase, it doesn't matter which elements you add xx to. The subarray with the maximum sum will always be the entire array. If you increase kk elements by xx , k \cdot xk⋅x will be added to the sum.</p>
<p>In the second testcase:</p>
<ul><li>For k = 0k=0 , the empty subarray is the best option.</li>
	<li>For k = 1k=1 , it's optimal to increase the element at position 33 . The best sum becomes -1 + 5 = 4−1+5=4 for a subarray [3, 3][3,3] .</li>
	<li>For k = 2k=2 , it's optimal to increase the element at position 33 and any other element. The best sum is still 44 for a subarray [3, 3][3,3] .</li>
	<li>For k = 3k=3 , you have to increase all elements. The best sum becomes (-2 + 5) + (-7 + 5) + (-1 + 5) = 5(−2+5)+(−7+5)+(−1+5)=5 for a subarray [1, 3][1,3] .</li>
</ul><p> 题意：让你求加上k个x之后子矩阵最大的和（k从0~n）</p>
<p>思路：先求每个长度子矩阵最大的和，len从1~n，当len==0的时候是空矩阵，就是0.</p>
<p>用f[i]来表示长度为i的子矩阵的最大和，因为ai有可能是负数，我们要找最大和，那么就把f初始化为-0x3f3f3f3f。</p>
<p>要很快的求子矩阵那么就需要找到他的前缀和。</p>
<p>求长度为len的子矩阵的时候，我们需要列举左端点从1~n，那么右端点就是i+len-1，这个以i为左端点长度为len的子矩阵的和就是s[i+len-1]-s[i-1]，然后我们列举左端点的时候取最大值就行，即</p>
<p>f[len]=max(f[len],s[i+len-1]-s[i-1])</p>
<p>操作是加上k个x。</p>
<p>当k&lt;=len的时候，我们在f[len]里加上k个x就行</p>
<p>当k&gt;len的时候，在这个区间里我们只能加len个x。</p>
<p>所以加的x的个数就是q=min(len,k)。</p>
<p>所以对于每个k，我们只需要列举len从1~n，取f[len]+x*q的最大值就行了。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;map&gt;
using namespace std;
const int N=5005;
typedef long long ll;
ll n,x;
ll f[N],s[N],a[N];
void sove(){
	cin&gt;&gt;n&gt;&gt;x;
	memset(f,-0x3f,sizeof f);
	memset(s,0,sizeof s);
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;a[i];
		s[i]=s[i-1]+a[i];
	}
	for(int len=0;len&lt;=n;len++){
		if(len==0)f[len]=0;
		else{
			for(int i=1;i+len-1&lt;=n;i++){
				int j=i+len-1;
				f[len]=max(f[len],s[j]-s[i-1]);
			}
			
		}
	}
	for(int k=0;k&lt;=n;k++){
		ll maxk=-0x3f3f3f3f;
		for(int len=0;len&lt;=n;len++){
			ll q=min(k,len);
			maxk=max(maxk,f[len]+q*x);
		}
		cout&lt;&lt;maxk&lt;&lt;" ";
	}
	cout&lt;&lt;endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t;
	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="cf1648b-integral-array" tabindex="-1"><a class="header-anchor" href="#cf1648b-integral-array" aria-hidden="true">#</a> CF1648B Integral Array</h2>
<h2>题目描述</h2>
<p>You are given an array aa of nn positive integers numbered from 11 to nn . Let's call an array integral if for any two, not necessarily different, numbers xx and yy from this array, x \ge yx≥y , the number \left \lfloor \frac{x}{y} \right \rfloor⌊yx​⌋ ( xx divided by yy with rounding down) is also in this array.</p>
<p>You are guaranteed that all numbers in aa do not exceed cc . Your task is to check whether this array is integral.</p>
<h2>输入格式</h2>
<p>The input consists of multiple test cases. The first line contains a single integer tt ( 1 \le t \le 10^41≤t≤104 ) — the number of test cases. Description of the test cases follows.</p>
<p>The first line of each test case contains two integers nn and cc ( 1 \le n \le 10^61≤n≤106 , 1 \le c \le 10^61≤c≤106 ) — the size of aa and the limit for the numbers in the array.</p>
<p>The second line of each test case contains nn integers a_1a1​ , a_2a2​ , ..., a_nan​ ( 1 \le a_i \le c1≤ai​≤c ) — the array aa .</p>
<p>Let NN be the sum of nn over all test cases and CC be the sum of cc over all test cases. It is guaranteed that N \le 10^6N≤106 and C \le 10^6C≤106 .</p>
<h2>输出格式</h2>
<p>For each test case print Yes if the array is integral and No otherwise.</p>
<h2>题意翻译</h2>
<p>题意 ： 给定一个数组 \ a a , 我们称该数组完整需要满足 ：若数组\ a a 中存在两数 \ x,y\ \ x,y  , 使 \ y \le x\ \ y≤x  (\ x,y\ x,y  可以是同一个数) , 则\left\lfloor\dfrac{x}{y}\right\rfloor⌊yx​⌋也必须在数组\ a a 中 , 现需要判断数组\ a a 是否完整 。</p>
<p>\ T\le 10^4 ,\sum n\le 10^6,\sum c\le 10^6 T≤104,∑n≤106,∑c≤106 , 其中\ T T 为数据组数 ， \ n n 为\ a a 的元素个数，满足\ a a 中元素\le c≤c 。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
4
3 5
1 2 5
4 10
1 3 3 7
1 2
2
1 1
1</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
Yes
No
No
Yes</pre>
<p><strong>输入 #2</strong>复制</p>
<pre>
1
1 1000000
1000000</pre>
<p><strong>输出 #2</strong>复制</p>
<pre>
No</pre>
<h2>说明/提示</h2>
<p>In the first test case it is easy to see that the array is integral:</p>
<ul><li>\left \lfloor \frac{1}{1} \right \rfloor = 1⌊11​⌋=1 , a_1 = 1a1​=1 , this number occurs in the arry</li>
	<li>\left \lfloor \frac{2}{2} \right \rfloor = 1⌊22​⌋=1</li>
	<li>\left \lfloor \frac{5}{5} \right \rfloor = 1⌊55​⌋=1</li>
	<li>\left \lfloor \frac{2}{1} \right \rfloor = 2⌊12​⌋=2 , a_2 = 2a2​=2 , this number occurs in the array</li>
	<li>\left \lfloor \frac{5}{1} \right \rfloor = 5⌊15​⌋=5 , a_3 = 5a3​=5 , this number occurs in the array</li>
	<li>\left \lfloor \frac{5}{2} \right \rfloor = 2⌊25​⌋=2 , a_2 = 2a2​=2 , this number occurs in the array</li>
</ul><p>Thus, the condition is met and the array is integral.</p>
<p>In the second test case it is enough to see that</p>
<p>\left \lfloor \frac{7}{3} \right \rfloor = \left \lfloor 2\frac{1}{3} \right \rfloor = 2⌊37​⌋=⌊231​⌋=2 , this number is not in aa , that's why it is not integral.</p>
<p>In the third test case \left \lfloor \frac{2}{2} \right \rfloor = 1⌊22​⌋=1 , but there is only 22 in the array, that's why it is not integral.</p>
<p> 题意：任选两个数x，y（可能是同一个，也可能是不同的），看对任意的xy（x&gt;=y），x/y下取整是否在数组里出现过，如果出现过就符合题意，只要有一组没出现就输出no。</p>
<p>思路：暴力肯定会t，那么我们就反着来想，假设x/y=i，x的范围就是y*i&lt;=x&lt;y*(i+1)，我们选一个在数组中的数y和一个不在数组中的数i，那么得到的x应该是不在数组中的，即在y*i&lt;=x&lt;y*(i+1)这个范围内没有数在数组中。</p>
<p>那么我们要处理这个问题的话，用一个数组来记录一下一个数有没有在数组中出现过，先出现过试1，没出现过是0，那么我们先遍历一遍1~c，找到一个i表示出现过的数之后，再遍历一遍1~c，找一个j表示没有出现过的数，那么由他们算出的x就不可能出现在这个数组，即y*i&lt;=x&lt;=y*(i+1)-1这段的子段和是0.如果大于0的话不符合题意，直接输出no，注意边界问题，我们找的时候因为找i*j，所以当进行j的循环的时候，条件就可以设置为i*k&lt;=c,当算出y*(i+1)-1这个右边界的时候，我们要拿他和c比较取最小值。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;map&gt;
using namespace std;
const int N=1000005;
typedef long long ll;
int n,c;
int s[N],a[N];
void sove(){
	cin&gt;&gt;n&gt;&gt;c;
	for(int i=1;i&lt;=c;i++){
		a[i]=s[i]=0;
	}
	for(int i=1;i&lt;=n;i++){
		int x;
		cin&gt;&gt;x;
		a[x]=1;
	}
	for(int i=1;i&lt;=c;i++)s[i]=s[i-1]+a[i];
	for(int i=1;i&lt;=c;i++){
		if(a[i]==0)continue;
		for(int j=1;i*j&lt;=c;j++){
			if(a[j]==1)continue;
			int l=i*j-1;
			int r=min(c,i*(j+1)-1);
			if(s[r]-s[l]&gt;0){
				cout&lt;&lt;"No"&lt;&lt;endl;
				return ;
			}
		}
	}
	cout&lt;&lt;"Yes"&lt;&lt;endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t;
	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<p></p>
<h2 id="cf1422c-bargain" tabindex="-1"><a class="header-anchor" href="#cf1422c-bargain" aria-hidden="true">#</a> CF1422C Bargain</h2>
<h2>题目描述</h2>
<p>Sometimes it is not easy to come to an agreement in a bargain. Right now Sasha and Vova can't come to an agreement: Sasha names a price as high as possible, then Vova wants to remove as many digits from the price as possible. In more details, Sasha names some integer price nn , Vova removes a non-empty substring of (consecutive) digits from the price, the remaining digits close the gap, and the resulting integer is the price.</p>
<p>For example, is Sasha names 12131211213121 , Vova can remove the substring 13121312 , and the result is 121121 .</p>
<p>It is allowed for result to contain leading zeros. If Vova removes all digits, the price is considered to be 00 .</p>
<p>Sasha wants to come up with some constraints so that Vova can't just remove all digits, but he needs some arguments supporting the constraints. To start with, he wants to compute the sum of all possible resulting prices after Vova's move.</p>
<p>Help Sasha to compute this sum. Since the answer can be very large, print it modulo 10^9 + 7109+7 .</p>
<h2>输入格式</h2>
<p>The first and only line contains a single integer nn ( 1 \le n &lt; 10^{10^5}1≤n&lt;10105 ).</p>
<h2>输出格式</h2>
<p>In the only line print the required sum modulo 10^9 + 7109+7 .</p>
<p>题意：</p>
<p>给一串数字，数字的长度是1e5</p>
<p>我们可以删除他任意连续长度的子串，剩下的数字组成新一个数。</p>
<p>求删除子串之后的所有情况的数的总和。</p>
<p>思路：我们看每一位对总数的贡献。比如例子：1213121</p>
<p>我们先将他逆转（以便能更好的计算每一位做的贡献）</p>
<p>我们以3举例：</p>
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/bbf51c4a7d804b6a99f64c94f7375235.png" /></p>
<p> 如果3要是对整个数有贡献，那么有两种情况：</p>
<p>1.删除的子串要么在3的前面    2.删除的子串在3的后面。</p>
<p>对于情况1：</p>
<p style="text-align:center;"><img alt="" height="245" src="https://img-blog.csdnimg.cn/2531a4010cb04674bb3b48793efc5268.png" width="188" /></p>
<p> 红色代表删除的部分。黑色代表留下的部分。</p>
<p>那么3对总数的贡献都没变，就是3*pow（10，i）</p>
<p>那么这种情况有3+2+1=6种,就是看前面有几位数然后从1加到那个数：1+2+...+len-i-1</p>
<p>所以对情况1来说我们总结的a[i]对于总数的贡献就是：</p>
<p>a[i]*pow(10,i)*（len-i-1）*（len-i）/2.</p>
<p>对于情况2：</p>
<p><img alt="" height="259" src="https://img-blog.csdnimg.cn/5ef3f51851304e429405540f19c06d97.png" width="176" /></p>
<p> 那么3的位数在变化</p>
<p>当去掉3位的情况有1种，对整体的贡献是pow(10,0)：1*pow（10,0）</p>
<p>去掉2位的情况有2种，对整体的贡献是pow(10,1):2*pow(10,1)</p>
<p>去掉1位的情况有3种，对整体的贡献是pow(10,2):3*pow(10,2)</p>
<p>而且对3右面的1来说：</p>
<p>去掉2位的情况有1种，对整体的贡献是pow(10,0):1*pow(10,0)</p>
<p>去掉1位的情况有2种，对整体的贡献是pow(10,1):2*pow(10,1)</p>
<p>那么我们就可以递推着来算贡献的位数</p>
<p>设i-1位对总数的贡献是tmp[i-1]，那么第i位对总数的贡献就是:</p>
<p>tmp[i]=tmp[i-1]+i*pow(10,i-1)</p>
<p>然后拿这个位数乘上a[i]就是右边所有数对总数的贡献：a[i]*tmp</p>
<p>还有要注意的就是题目给的mod是1e9+7，那么这个数的长度是1e5的话pow（10，i）到最后肯定会超出范围，那么我们就先预处理一下数组f[i]来记录10^i%mod的数到时候直接用就行。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;

using namespace std;
typedef long long ll;
string s;
const int N=1e5+5;
ll f[N];
const ll mod=1e9+7;
int main(){
	cin&gt;&gt;s;
	f[0]=1;
	for(int i=1;i&lt;N;i++){
		f[i]=f[i-1]*10%mod;
	}
	reverse(s.begin(),s.end());
	ll ans=0;
	ll len=s.size();
	ll tmp=0;
	for(int i=0;i&lt;len;i++){
		ll num1=(len-i-1)*(len-i)/2%mod*f[i]*(s[i]-'0')%mod;
		ll num2=(s[i]-'0')*tmp%mod;
		tmp=((i+1)*f[i]%mod+tmp)%mod;
		ans+=(num1+num2)%mod;
		ans%=mod;
	}
	cout&lt;&lt;ans;
	return 0;
}</code></pre>
<p></p>
<h2 id="p3166-cqoi2014-数三角形" tabindex="-1"><a class="header-anchor" href="#p3166-cqoi2014-数三角形" aria-hidden="true">#</a> P3166 [CQOI2014]数三角形</h2>
<h2>题目描述</h2>
<p>给定一个 N\times MN×M 的网格，请计算三点都在格点上的三角形共有多少个。注意三角形的三点不能共线。</p>
<h2>输入格式</h2>
<p>输入一行，包含两个空格分隔的正整数 MM 和 NN 。</p>
<h2>输出格式</h2>
<p>输出一个正整数，为所求三角形数量。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
2 2</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
76</pre>
<h2>说明/提示</h2>
<p>数据规模与约定</p>
<p>对于全部的测试点，保证 1\le N,M\le10001≤N,M≤1000。</p>
<p>思路：方法就是先枚举出所有点能组成的三角形的数量，然后再减去在一条线上的三个点构成的三角形的数量。</p>
<p>公式：</p>
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/4fe3b2a4e1794bd8a98d6c635a56f9e6.png" /></p>
<p> 所有点的总数：（n+1）*（m+1）</p>
<p>所有点里挑三个点就是第一个柿子。</p>
<p>然后我们再减去水平边和竖直边里的点构成的三角形的情况，就是第二个和第三个柿子。</p>
<p>最后一个柿子是在一个斜边上的三角形的数量，我们先列举这个斜边是从（0.0）到i，j</p>
<p>i，j就从1~m，1~n。</p>
<p>然后我们就找对于每对的i，j除了两个端点（0,0）和（i，j）中间有几个点在格点上。</p>
<p>以j=6，i=9为例：</p>
<p>（0.0）到（6,9）的点除了两个端点还有gcd(j，i)-1个。</p>
<p>我们把（6.9）看做一个向量，那么我们就是找和这个斜率一样的整数向量</p>
<p style="text-align:center;"><img alt="" height="273" src="https://img-blog.csdnimg.cn/985750d7237a4db68c660bc7383e31a3.png" width="501" /></p>
<p> 找到的是（2.3）（4.6）（6.9），就是gcd(j，i)</p>
<p>但是我们只要中间的，所以再减去1.</p>
<p>我们只是列举了从0.0开始的斜率，他还可以向右平移，得到的个数就是（n-j+1）个</p>
<p>我们也可以上下平移，得到的个数就是（m-i+1）个</p>
<p>然后这几种情况相乘就是总的个数，也就是最后一个柿子。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;

using namespace std;
typedef long long ll;
ll gcd(ll a,ll b)
{    
    if(a%b==0) 
    return b;        
    else return (gcd(b,a%b));
}
ll c(ll m,ll n){
	if(m&lt;n)return 0;
	if(m==n)return 1;
	ll b;
	ll a;
	if(n&gt;m-n){
		b=m-n;
		a=n;
	}else {
		b=n;
		a=m-n;
	}
	ll num1=1,num2=1;
	for(int i=m;i&gt;=a+1;i--){
		num1*=i;
	}
	for(int i=1;i&lt;=b;i++){
		num2*=i;
	}
	return num1/num2;
}
int main(){
	ll n,m;
	cin&gt;&gt;n&gt;&gt;m;
	if(n==1&amp;&amp;m==1){
		cout&lt;&lt;4;
		return 0;
	}
	ll con=(n+1)*(m+1);
	con=c(con,3);
	con-=(m+1)*c(n+1,3);
	con-=(n+1)*c(m+1,3);
//	cout&lt;&lt;"con="&lt;&lt;con&lt;&lt;endl;
	for(int i=1;i&lt;=n;i++){
		for(int j=1;j&lt;=m;j++){
			ll num1=(m-j+1)*(n-i+1)*(gcd(i,j)-1);
		//	cout&lt;&lt;"gcd="&lt;&lt;(gcd(i,j)-1)&lt;&lt;endl;
		//	cout&lt;&lt;"num1="&lt;&lt;num1&lt;&lt;endl;
			con-=(num1*2);
		}
	}
	cout&lt;&lt;con;
	return 0;
}</code></pre>
<p></p>
<h2 id="cf340c-tourist-problem" tabindex="-1"><a class="header-anchor" href="#cf340c-tourist-problem" aria-hidden="true">#</a> CF340C Tourist Problem</h2>
<h2>题目描述</h2>
<p>Iahub is a big fan of tourists. He wants to become a tourist himself, so he planned a trip. There are nn destinations on a straight road that Iahub wants to visit. Iahub starts the excursion from kilometer 0. The nn destinations are described by a non-negative integers sequence a_{1}a1​ , a_{2}a2​ , ..., a_{n}an​ . The number a_{k}ak​ represents that the kk th destination is at distance a_{k}ak​ kilometers from the starting point. No two destinations are located in the same place.</p>
<p>Iahub wants to visit each destination only once. Note that, crossing through a destination is not considered visiting, unless Iahub explicitly wants to visit it at that point. Also, after Iahub visits his last destination, he doesn't come back to kilometer 0, as he stops his trip at the last destination.</p>
<p>The distance between destination located at kilometer xx and next destination, located at kilometer yy , is |x-y|∣x−y∣ kilometers. We call a "route" an order of visiting the destinations. Iahub can visit destinations in any order he wants, as long as he visits all nn destinations and he doesn't visit a destination more than once.</p>
<p>Iahub starts writing out on a paper all possible routes and for each of them, he notes the total distance he would walk. He's interested in the average number of kilometers he would walk by choosing a route. As he got bored of writing out all the routes, he asks you to help him.</p>
<h2>输入格式</h2>
<p>The first line contains integer nn ( 2&lt;=n&lt;=10^{5}2&lt;=n&lt;=105 ). Next line contains nn distinct integers a_{1}a1​ , a_{2}a2​ , ..., a_{n}an​ ( 1&lt;=a_{i}&lt;=10^{7}1&lt;=ai​&lt;=107 ).</p>
<h2>输出格式</h2>
<p>Output two integers — the numerator and denominator of a fraction which is equal to the wanted average number. The fraction must be irreducible.</p>
<h2>题意翻译</h2>
<p>给定一条直线上n个点的坐标a_1,a_2,...a_na1​,a2​,...an​，一条路线从原点开始，经过aa的一个排列并在最后一个点结束（也就是说不返回原点）。一条路径的长度定义为排列中相邻两点x,yx,y的距离|x-y|∣x−y∣（包括原点），求所有路线的平均长度，要求化为最简分数。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
3
2 3 5
</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
22 3</pre>
<p>题意：有n个地点。</p>
<p>每个地点离原点的距离是a[i]。</p>
<p>任意两个地点i，j的距离是|a[i]-a[j]|。</p>
<p>求所有走过每个地点且只经过一次的路线的平均值（最简分母和分子）。</p>
<p>思路：经过每个点的所有路线的条数是n的全排列（n！）。</p>
<p>因为我们在算的时候是两个地点挨在一起的绝对值，所以不妨就令大的值减去小的值。</p>
<p>那这一步我们就可以从大到小将a数组排序，然后我们再观察所有路线。</p>
<p>拿例题举例：</p>
<p>2 3 5</p>
<p>全排列之后的所有可能方法是</p>
<p>2 3 5：（2-0）+（3-2）+（5-3）</p>
<p>2 5 3：（2-0）+（5-2）+（5-3）</p>
<p>3 2 5：（3-0）+（3-2）+（5-2）</p>
<p>3 5 2：（3-0）+（5-3）+（5-2）</p>
<p>5 2 3：（5-0）+（5-2）+（3-2）</p>
<p>5 3 2：（5-0）+（5-3）+（3-2）</p>
<p>然后我们可以观察出来与3相关的运算：</p>
<p>（3-2）（3-2） （3-2）（3-2）（5-3）（5-3）（5-3）（5-3）（3-0）（3-0）</p>
<p>（3-0）的情况就是用3开头的时候有几种情况，那么就是除了3剩下的数全排列即2！</p>
<p>那么3就加了2！次，即（n-1）！次。</p>
<p>再分析3和数组中其他数的相减情况：</p>
<p>可以观察出他可以和数组中每个数都能相邻</p>
<p>下标从1开始。</p>
<p>且和每一个数相邻的情况一共有A22*A22种（先挑一个数和他捆起来，然后内部全排列是A22个，之后把捆起来的看成一个整体，再让这个整体来全排列），用通式就是2*（n-1）！</p>
<p>然后我们再看他和每个数相邻是怎么计算的</p>
<p>我们把数组从大到小排序：5 3 2</p>
<p>他可以是和5挨着也可以是和2挨着，当和5挨着的时候就是5-3，当和2挨着的时候就是3-2</p>
<p>那么总结的来说就是他前面的数减去他，他后面的数加上他</p>
<p>所以他自己被加了（n-i）次，被减了（i-1）次。</p>
<p>那么我们就可以得出a[i]在总的运算来说，参与运算的柿子是：</p>
<p>a[i]*（n-1）！+2*（n-1）！*（a[i]*(n-i)-a[i]*(i-1)）</p>
<p>那么总数就是从1~n的所有a[i]*（n-1）！+2*（n-1）！*（a[i]*(n-1)-a[i]*(i-1)）相加</p>
<p>化简一下：（n-1）！*（a[i]+2*（a[i]*(n-i) ）</p>
<p>然后我们要求总数除以路线条数</p>
<p>路线条数是n！</p>
<p>我们先化简一下就是（a[i]+2*（a[i]*(n-i））/n</p>
<p>然后我们就只需要算出i从1~n，（a[i]+2*（a[i]*(n-i））的值</p>
<p>然后输出他们各自除以他们的最大公约数了。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;
using namespace std;
typedef long long ll;
const ll N=1e5+7;
ll a[N];
ll n;
ll gcd(ll a,ll b){
	if(a&lt;b)swap(a,b);
	if(b!=0){
		return gcd(b,a%b);
	}return a;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	cin&gt;&gt;n;
	ll sum=0;
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;a[i];
		sum+=a[i];
	}
	ll ans=0;
	sort(a+1,a+n+1,greater&lt;int&gt;());
	for(int i=1;i&lt;=n;i++){
		ans+=(a[i]*(n-2*i+1));
	}
	ans*=2;
	ans+=sum;
	ll m=gcd(ans,n);
	cout&lt;&lt;ans/m&lt;&lt;" "&lt;&lt;n/m;
	return 0;
}</code></pre>
<p></p>
<p></p>
</div></template>


