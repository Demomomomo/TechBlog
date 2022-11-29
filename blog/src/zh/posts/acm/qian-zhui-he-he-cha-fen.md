---
title: 前缀和和差分

category:
  - algorithm

tag:
  - 数据结构
---


## 前缀和（c++）

<p>用于计算已知数组的任意一段区域的和。</p>

<p>例题：</p>

<p>输入一个长度为 n的整数序列。</p>

<p>接下来再输入 m 个询问，每个询问输入一对 l,r。</p>

<p>对于每个询问，输出原序列中从第 l 个数到第 r 个数的和。</p>

<p>注意：输入a数组时下标从1开始，输入的时候就开始算s数组</p>


```cpp
#include<iostream>

using namespace std;
const int N=100010;
int n,m;
int a[N],s[N];
int main(){
	scanf("%d %d",&n,&m);
	a[0]=s[0]=0;//从a[1]开始所以a[0]和s[0]需要等于0
	int i;
	for(i=1;i<=n;i++)scanf("%d",&a[i]);
	for(i=1;i<=n;i++)s[i]=s[i-1]+a[i];//根据s[i]=s[i-1]+a[i]直接算出各项
	while(m--){
		int r,l;
		scanf("%d %d",&l,&r);
		printf("%d\n",s[r]-s[l-1]);
	}
}
```


<p> 核心代码：</p>


```cpp
s[i]=s[i-1]+a[i];
l-r:s[r]-s[l-1];
```


<p> 还有二维前缀和：</p>

<p></p>

<p>注：所学来自acwing</p>

## 前缀和（一维，二维）

<p>有数组a1 a2 a3 a4...an</p>

<p>算Sn.</p>

<p>从1开始循环到n s0=0</p>

<p>作用是：算一个数组的【L,r】区间的数的和</p>

<p>算Sr-Sl-1就可</p>

<p>Sn的计算公式是Sn-1+an；</p>


```cpp
#include<iostream>
using namespace std;
int n,m;
const int N=100005;
int a[N],s[N];
 int main(){
 	scanf("%d %d",&n,&m);
 	for(int i=1;i<=n;i++){
 		scanf("%d",&a[i]);
 		s[i]=s[i-1]+a[i];
	 }
 	while(m--){
 		int l,r;
 		scanf("%d%d",&l,&r);
 		printf("%d\n",s[r]-s[l-1]);
	 }
 	
 	return 0;
 }
```


<p>二维矩形算法</p>

<p>先算出s【i，j】</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/8d50fcd7d1fd41f38cba35523a78a28c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBARGVtby5v,size_20,color_FFFFFF,t_70,g_se,x_16" /></p>

<p> 再算以x1，y1为左上角，x2y2为右下角的矩形面积</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/87550374ad314b45a3c9afc785c9b2a7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBARGVtby5v,size_20,color_FFFFFF,t_70,g_se,x_16" /></p>

<p></p>


```cpp
#include<iostream>
using namespace std;
int n,m,q;
int a[1010][1010]={0},s[1010][1010]={0};
int main(){
	scanf("%d%d%d",&n,&m,&q);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			scanf("%d",&a[i][j]);
			s[i][j]=s[i-1][j]+s[i][j-1]-s[i-1][j-1]+a[i][j];
		}
	}
	while(q--){
		int x1,x2,y1,y2;
		scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
		printf("%d\n",s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]);
	}
	return 0;
}
```


<p>记录学习acwing</p>

## 2781: 小A的魔法

<p>题目描述</p>

<p>小A踏上了AK这场新生赛的旅程。但对方太狡猾，将小A传送到了一个不知名的地方。经过探查，小A发现了一座很大的迷宫。这座迷宫从上方看竟然是正方形的，而且内部被分为了1个同等大小房间，而狡猾的敌人则隐藏在某些房间中，准备偷袭小A. </p>

<p>幸好小A提前发现了对方的阴谋，准备解决所有的敌人。但敌人太多了，小A准备使用高级魔法---“这题我会”。这个魔法的作用范围是正好是一个矩形，能够覆盖W∗H个房间(注意：W∗H与H∗W是不同的，如：2 * 3与3 * 2是两种魔法)，处于该范围内的敌人将会被魔法消灭魔法的边界必须与房间的墙壁重合，否则狡猾的敌人会躲在墙边，从而躲开此次攻击。小A只能发动一次该魔法，他希望魔法发动时能攻击到更多的敌人。小A选择寻求你的帮助，他告诉你了n个敌人的位置，你能告诉他，发动魔法最多能消灭多少个敌人吗？ </p>

<p>例如：小A魔法的范围是3*2，他共探查到了5个敌人，位置如下，他最多可以消灭4个敌人。 </p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/44e2350fae1c69e319f2dc7c4f3ee1cf.png" /></p>

<p> </p>

<p>输入</p>

<p>第一行包含3个整数n, W, H(1&lt;= n &lt;= 100, 1&lt;=  W, H&lt;= 1000)。代表共有n个敌人，魔法的打击范围是W*H。<br />
 <br />
   接下来n行，每行包含两个整数x_i, y_i(1&lt;= x_i, y_i &lt;= 1000), 代表第i个敌人位于坐标(xi, yi)的房间。保证每个房间最多只有一个敌人。 </p>

<p></p>

<p>输出</p>

<p>输出一个整数。代表小A发动魔法，最多消灭的敌人的数量。 </p>

<p>样例输入 <a>Copy</a></p>

<pre>
5 3 2
1 1
2 1
3 1
4 1
4 2</pre>

<p>样例输出 <a>Copy</a></p>

<pre>
4</pre>

<p> 思路：前缀与差分，把有敌人的点都设为1；然后从右下角的x2y2分别等于wh开始枚举到1000，根据边的关系算出x1y1，然后用公式算出x1y1x2y2的矩形内所有数的和，即为所求的最大敌人数，一般方法是需要再开一个s【n】【n】，但是可能会导致内存超限，所以直接根据公式把他自己变成自己的前缀和就行了</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
using namespace std;
int n,w,h,ans;
int g[1005][1005];
int main(){
	scanf("%d%d%d",&n,&w,&h);
	while(n--){
		int x,y;
		scanf("%d%d",&x,&y);
		g[x][y]++;
	}
	for(int i=1;i<=1000;i++){
		for(int j=1;j<=1000;j++){
			g[i][j]+=g[i-1][j]+g[i][j-1]-g[i-1][j-1];
		}
	}
	for(int i=w;i<=1000;i++){
		for(int j=h;j<=1000;j++){
			int x1=i-w;
			int y1=j-h;
			ans=max(ans,g[i][j]-g[x1][j]-g[i][y1]+g[x1][y1]);
		}
	}
	printf("%d",ans);
	return 0;
}
```


<p></p>

## D - Circular Addition

​

We have an integer sequence of length NN: x=(x_0,x_1,\cdots,x_{N-1})x=(x0​,x1​,⋯,xN−1​) (note that its index is 00-based). Initially, all elements of xx are 00.

You can repeat the following operation any number of times.

Choose integers i,ki,k (0 \leq i \leq N-10≤i≤N−1, 1 \leq k \leq N1≤k≤N). Then, for every jj such that i \leq j \leq i+k-1i≤j≤i+k−1, increase the value of x_{j\bmod N}xjmodN​ by 11.
You are given an integer sequence of length NN: A=(A_0,A_1,\cdots,A_{N-1})A=(A0​,A1​,⋯,AN−1​). Find the minimum number of operations needed to make xx equal AA.

Constraints

1 \leq N \leq 2000001≤N≤200000
1 \leq A_i \leq 10^91≤Ai​≤109
All values in input are integers.
Input

Input is given from Standard Input in the following format:

NN
A_0A0​ A_1A1​ \cdots⋯ A_{N-1}AN−1​
Output

Print the answer.

Sample 1

Inputcopy	Outputcopy
4
1 2 1 2
2
We should do the following.

Initially, we have x=(0,0,0,0)x=(0,0,0,0).
Do the operation with i=1,k=3i=1,k=3, making x=(0,1,1,1)x=(0,1,1,1).
Do the operation with i=3,k=3i=3,k=3, making x=(1,2,1,2)x=(1,2,1,2).
Sample 2

Inputcopy	Outputcopy
5
3 1 4 1 5
7
Sample 3

Inputcopy	Outputcopy
1
1000000000
1000000000
思路：我们需要把数组从0变成他给出的数组，不妨考虑把他给的数组变成全是0，因为全是0，原数组的数相等，所以差分数组最后全是0，我们要把他的差分变成0，他是一个环（因为j超过n-1就会modn），所以差分数组的正数和等于负数和，因为我们本来需要对原数组进行+1的操作，但是我们现在转化思维对他给出的数组进行-1的操作使他变成0，当我们对他l-r的区间进行减1的操作时差分数组就会进行一个b[l]-1,b[r+1]+1的操作，因为lr是我们任意选的，所以我们只用操作差分的正数之和个操作就可以让原数组一样（选一个正数-1，选一个负数+1），但是当最小的值太大的时候我们把差分数组变成0之后只是让他们变成了一样的数，还需要把操作之后的n个相同的数x操作x下减到0，根据贪心的思想我们每次操作势必会对max(a[i])操作，假设操作了o次，操作之后的数再变成0所需要的操作数h加上o肯定还是max(a[i])，我们把max(a[i])和把差分数组变成0所进行的con次操作数做比较，取最大值：如果max(a[i])>con说明他经过con次操作只是把原数组变成了一样的数而没有变成零，所以总共需要进行max(a[i])次操作，如果con>max(a[i])说明经过con次操作不仅原数组的数一样而且等于0。

注意：以后不管是整数多大都给我整成longlong！！！int不过！！！！

```cpp
#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;

long long a[200000];

int main(){
	long long n,ans=0;
	scanf("%lld",&n);
	for(long long i=0;i<n;i++){
		scanf("%lld",&a[i]);
	}
	long long max1=a[0];
	for(long long  i=1;i<n;i++){
		long long t=a[i]-a[i-1];
		if(t>0){
			ans+=t;
		}
		if(a[i]>max1){
			max1=a[i];
		}
	}
	long long q=a[0]-a[n-1];
	if(q>0){
		ans+=q;
	}
	ans=max(max1,ans);
	printf("%lld",ans);
	return 0;
}

```
​

## CF1648B Integral Array

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


```cpp
#include<iostream>
#include<algorithm>
#include<cmath>
#include<cstring>
#include<map>
using namespace std;
const int N=1000005;
typedef long long ll;
int n,c;
int s[N],a[N];
void sove(){
	cin>>n>>c;
	for(int i=1;i<=c;i++){
		a[i]=s[i]=0;
	}
	for(int i=1;i<=n;i++){
		int x;
		cin>>x;
		a[x]=1;
	}
	for(int i=1;i<=c;i++)s[i]=s[i-1]+a[i];
	for(int i=1;i<=c;i++){
		if(a[i]==0)continue;
		for(int j=1;i*j<=c;j++){
			if(a[j]==1)continue;
			int l=i*j-1;
			int r=min(c,i*(j+1)-1);
			if(s[r]-s[l]>0){
				cout<<"No"<<endl;
				return ;
			}
		}
	}
	cout<<"Yes"<<endl;
}
int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

<p></p>

## IncDec Sequence

<h3><span style="color:#000000;">Description</span></h3>

<p><span style="color:#000000;">给定一个长度为n的数列{a1,a2...an}，每次可以选择一个区间[l,r]，使这个区间内的数都加一或者都减一。<br />
问至少需要多少次操作才能使数列中的所有数都一样,并求出在保证最少次数的前提下,最终得到的数列有多少种。</span></p>

<h3><span style="color:#000000;">Input</span></h3>

<p><span style="color:#000000;">第一行一个正整数n <br />
接下来n行,每行一个整数,第i+1行的整数表示ai。<br />
。</span></p>

<h3><span style="color:#000000;">Output</span></h3>

<p><span style="color:#000000;">第一行输出最少操作次数<br />
第二行输出最终能得到多少种结果</span></p>

<h3><span style="color:#000000;">Sample Input</span></h3>

<p><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">4 </span></span><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">1 </span></span><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">1 </span></span><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">2 </span></span><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">2 </span></span><br />
 </p>

<h3><span style="color:#000000;">Sample Output</span></h3>

<p><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">1 </span></span><br /><span style="color:#000000;"><span style="background-color:rgba(210,210,255,.5);">2 </span></span><br />
 </p>

<h3><span style="color:#000000;">Hint</span></h3>

<p><span style="color:#000000;">对于100%的数据，n=100000，0&lt;=ai&lt;2147483648</span></p>

<p>思路：题目中出现 “选择一个区间[ l , r ],使这个区间内的数都+1/-1” 考虑差分原数列简化情况，将对一个区间内的操作转化为对两个数的操作<br />
转化后，题目要求变为最少需要多少次操作能够使差分数列中的diff[ 2 ~ n ]都为0<br />
这个时候就可以 利用区间修改来使一正一负抵消 ，最后加上剩下未被抵消，只能单独+1/-1的数就是最少操作数<br />
所以最少操作数为max(负数和，正数和)；<br />
所以方案数为首尾两端的差值+1，即abs( a[1] - a[n] ) + 1；且最终序列也是首尾两端的值，即[ a[1],a[n] ]；</p>

<p>注意：long long才能过（nm）！算差分从2开始</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<cstdio>
using namespace std;
typedef long long ll;
ll a[100005],c,d,t;
int main(){
	ll n;
	scanf("%lld",&n);
	for(ll i=1;i<=n;i++){
		scanf("%lld",&a[i]);
	}
	for(ll i=2;i<=n;i++){
		t=a[i]-a[i-1];
		if(t>0){
			c+=t;
		}else if(t<0){
			t=-t;
			d+=t;
		}
	}
	printf("%lld\n%lld",max(c,d),abs(a[1]-a[n])+1);
	return 0;
}
```


<p><br />
 </p>

## 差分总结（c++）（例子：Color the ball ）

​
输入一个长度为 n 的整数序列。

接下来输入 m个操作，每个操作包含三个整数l,r,c，表示将序列中 [l,r] 之间的每个数加上 c。

请你输出进行完所有操作后的序列。

与前缀和不同的是每次是在一个区间内加一个常数，我们如果想构造原数组a的差分的话，应该先把a数组里的数插进b里去，然后再根据他的操作来依次在lr之间插入数。

因为在操作之前我们需要把a也插进去，所以我们在输入a数组之后有一个insert(i,i,a[i])的操作（注意输入下标从1开始）

```cpp
for(int i=1;i<=n;i++){
		insert(i,i,a[i]);
	}
```

插入代码是：

```cpp
void insert(int x,int y,int c){
	b[x]+=c;
	b[y+1]-=c;
}
```

因为这个b数组只是我们算的差分数组，所以如果想得到原数组的话就对每个i使b[i]+=b[i-1]就可（注意从1到n）

```cpp
for(int i=1;i<=n;i++)b[i]+=b[i-1];
```

 最后输出b数组就可，完整代码：

```cpp
#include<iostream>
using namespace std;
int n,m;
int a[100005]={0},b[100005]={0};
void insert(int l,int r,int c){
	b[l]=b[l]+c;
	b[r+1]=b[r+1]-c;
}
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
	}
	for(int i=1;i<=n;i++){
		insert(i,i,a[i]);
	}
		
	while(m--){
		int l,r,c;
		scanf("%d%d%d",&l,&r,&c);
		insert(l,r,c);
	}
	for(int i=1;i<=n;i++)b[i]+=b[i-1] ;
	for(int i=1;i<=n;i++)printf("%d ",b[i]);
	return 0;
}
```

N个气球排成一排，从左到右依次编号为1,2,3....N.每次给定2个整数a b(a <= b),lele便为骑上他的“小飞鸽"牌电动车从气球a开始到气球b依次给每个气球涂一次颜色。但是N次以后lele已经忘记了第I个气球已经涂过几次颜色了，你能帮他算出每个气球被涂过几次颜色吗？

Input

每个测试实例第一行为一个整数N,(N <= 100000).接下来的N行，每行包括2个整数a b(1 <= a <= b <= N)。
当N = 0，输入结束。

Output

每个测试实例输出一行，包括N个整数，第I个数代表第I个气球总共被涂色的次数。

Sample

Inputcopy	Outputcopy

3 1 1 2 2 3 3 3 1 1 1 2 1 3 0

1 1 1 3 2 1
 典型算差分数组，直接按上面的模板往里套就行，不过每次的常数是1

```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int b[100005];
void insert(int x,int y,int c){
	b[x]+=c;
	b[y+1]-=c;
}
int main(){
	int n;
	while(cin>>n){
		if(n==0)break;
		memset(b,0,sizeof b);
		for(int i=0;i<n;i++){
			int x,y;
			cin>>x>>y;
			insert(x,y,1);
		}
		for(int i=1;i<=n;i++){
			b[i]+=b[i-1];
		}
		for(int i=1;i<=n;i++){
			if(i!=1)printf(" ");
			printf("%d",b[i]);
		}
		printf("\n");
	}
	
	return 0;
}
```


​

