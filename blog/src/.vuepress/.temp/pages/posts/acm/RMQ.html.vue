<template><div><h2 id="rmq-区间最值问题" tabindex="-1"><a class="header-anchor" href="#rmq-区间最值问题" aria-hidden="true">#</a> RMQ（区间最值问题）</h2>
<p style="margin-left:.0001pt;text-align:center;"></p>
<p style="margin-left:.0001pt;text-align:justify;">作用：找到一段区间的最值(不支持修改</p>
<p style="margin-left:.0001pt;text-align:justify;">方法：用st表</p>
<p style="margin-left:.0001pt;text-align:justify;">ST表：</p>
<p style="margin-left:.0001pt;text-align:justify;">f[i][j]表示以i为起点长度为2的j次方的区间的最值</p>
<p style="margin-left:.0001pt;text-align:justify;">右端点就是i+2^j-1</p>
<p style="margin-left:.0001pt;text-align:justify;">更新方式就是把这个区间分成两半，取这两半的最值</p>
<p style="margin-left:.0001pt;text-align:justify;">左边区间就是[i , i+2^(j-1)-1]，右边区间就是[i+2^(j-1) , i+2^j-1 ]</p>
<p style="margin-left:.0001pt;text-align:justify;">所以写成转移方程就是f[i][j]=max(f[i][j-1],f[i+2^(j-1),j-1]</p>
<p style="margin-left:.0001pt;text-align:justify;">例子：</p>
<p style="margin-left:.0001pt;text-align:justify;">给定一个区间l-r找这段区间的最大值：</p>
<p style="margin-left:.0001pt;text-align:justify;">算出长度：len=r-l+1</p>
<p style="margin-left:.0001pt;text-align:justify;">找出小于等于len的最大的一个2的次幂数k</p>
<p style="margin-left:.0001pt;text-align:justify;">那么两个2^k就一定能覆盖这个区间，一个从l数一个从r数</p>
<p style="margin-left:.0001pt;text-align:justify;">然后我们就取前面长度为2^k和后面2^k的区间取最大值就行了</p>
<p style="margin-left:.0001pt;text-align:justify;">f[l][r]=max(f[l][k],f[r-2^k+1][k])</p>
<p style="margin-left:.0001pt;text-align:justify;">当输入完一个数组的时候，初始化st表，按长度（2的j次方）开始列举，每次循环从i=1开始</p>
<p style="margin-left:.0001pt;text-align:justify;">如果j==0的话说明长度是2的0次方，也就是1，那么我们就把他赋值成他本身，如果长度大于1的话我们取两半的最值</p>
<pre>
<code class="hljs">void init(){

    for(int j=0;j&lt;=18;j++)//最外层枚举的是长度

        for(int i=1;i+(1&lt;&lt;j)-1&lt;=n;i++)

            if(! j)f[i][j]=w[i];

            else f[i][j]=max(f[i][ j-1],f[i+(1&lt;&lt;( j - 1 )) ][j-1] )//右边的是i+2^(j-1)-&gt;i+(1&lt;&lt;j-1)

}</code></pre>
<p></p>
<h2 id="rmq算法" tabindex="-1"><a class="header-anchor" href="#rmq算法" aria-hidden="true">#</a> RMQ算法</h2>
<p>作用：询问数组a的区间l-r的最大值</p>
<p>用到st表：用来储存下标为i长度为2^k的区间的最大值</p>
<p>思想：其实本质是dp，用f[i][j]来表示从下标为i开始长度为2的j次方的区间的最大值，算法就是把这个区间分为两半，取这两部分的最大值，即f[i][j]=max(f[i][j-1],f[i+2^(k-1)][j-1])（区间长度是2^j，那么一半就是2^(j-1),左半部分就表示为下标为i长度为2^(j-1)的区间的最大值即f[i][j-1]，这个区间的右端点是i+2^(j-1)-1，那么右边就是下标从i+2^(j-1)开始长度为2^(j-1)的区间的最大值即f[i+2^(j-1)][j-1]。）</p>
<p>当我们算的时候，假设一个区间的下标为i长度为len，我们先找出不大于len的最大的2^k，然后这个区间的最大值就是max(f[i][k],f[i-2^k-1][k])，他的意思是以i开始长度为2^k的区间的最大值和以i-2^k-1为下标长度为2^k的最大值取最大，前面是从前面开始数长度为2^k的区间，后面这个区间是从后开始数长度为2^k的区间，两个区间有重合而且肯定覆盖了一整个区间，所以我们取他们两个部分的最大值就可以是整个区间的最大值。</p>
<p>tip：算x是2的多少k次方可以用cmath库里的log函数，k=log(x)/log(2)来算哦。2^k也可以用1&lt;&lt;k来直接算出</p>
<p>先初始化f数组：</p>
<pre>
<code>void init(){
	for(int j=0;j&lt;=18;j++){
		for(int i=1;i+1&lt;&lt;j-1&lt;=n;i++){
			if(j==0)f[i][j]=a[i];//当长度为2^0=1的时候，最大值就是他本身
			else f[i][j]=max(f[i][j-1],f[i+(1&lt;&lt;(j-1))][j-1]);//当长度不为1时，取前半部分和后半部分的最大值。
		}
	}
}</code></pre>
<p>当我们询问的时候，先找出来长度len，算出小于len的最大2的k次方。然后在前2的k次方个和后2的k次方个里面取最大值</p>
<pre>
<code>int query(int l,int r){
	int len=r-l+1;
	int k=log(len)/log(2);
	return max(f[l][k],f[r-(1&lt;&lt;k)+1][k]);
}</code></pre>
<p>例题：1273. 天才的记忆</p>
<p>从前有个人名叫 WNB，他有着天才般的记忆力，他珍藏了许多许多的宝藏。</p>
<p>在他离世之后留给后人一个难题（专门考验记忆力的啊！），如果谁能轻松回答出这个问题，便可以继承他的宝藏。</p>
<p>题目是这样的：给你一大串数字（编号为 11 到 NN，大小可不一定哦！），在你看过一遍之后，它便消失在你面前，随后问题就出现了，给你 MM 个询问，每次询问就给你两个数字 A,BA,B，要求你瞬间就说出属于 AA 到 BB 这段区间内的最大数。</p>
<p>一天，一位美丽的姐姐从天上飞过，看到这个问题，感到很有意思（主要是据说那个宝藏里面藏着一种美容水，喝了可以让这美丽的姐姐更加迷人），于是她就竭尽全力想解决这个问题。</p>
<p>但是，她每次都以失败告终，因为这数字的个数是在太多了！</p>
<p>于是她请天才的你帮他解决。如果你帮她解决了这个问题，可是会得到很多甜头的哦！</p>
<p>输入格式</p>
<p>第一行一个整数 NN 表示数字的个数。</p>
<p>接下来一行为 NN 个数，表示数字序列。</p>
<p>第三行读入一个 MM，表示你看完那串数后需要被提问的次数。</p>
<p>接下来 MM 行，每行都有两个整数 A,BA,B。</p>
<p>输出格式</p>
<p>输出共 MM 行，每行输出一个数，表示对一个问题的回答。</p>
<p>数据范围</p>
<p>1≤N≤2×1051≤N≤2×105,<br />
1≤M≤1041≤M≤104,<br />
1≤A≤B≤N1≤A≤B≤N。</p>
<p>输入样例：</p>
<pre>
<code>6
34 1 8 123 3 2
4
1 2
1 5
3 4
2 3
</code></pre>
<p>输出样例：</p>
<pre>
<code>34
123
123
8</code></pre>
<p> 按模板正常写就行</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
using namespace std;
typedef long long ll;

int n,m;
const int N=200005;
int a[N];
int f[N][20];
void init(){
	for(int j=0;j&lt;=18;j++){
		for(int i=1;i+(1&lt;&lt;j)-1&lt;=n;i++){
			if(j==0)f[i][j]=a[i];
			else f[i][j]=max(f[i][j-1],f[i+(1&lt;&lt;(j-1))][j-1]);
		}
	}
}
int query(int l,int r){
	int len=r-l+1;
	int k=log(len)/log(2);
	return max(f[l][k],f[r-(1&lt;&lt;k)+1][k]);
}
void sove(){
	cin&gt;&gt;n;
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;a[i];
	}
	init();
	cin&gt;&gt;m;
	while(m--){
		int a,b;
		cin&gt;&gt;a&gt;&gt;b;
		int ans=query(a,b);
		printf("%d\n",ans);
	}
}
int main(){
	sove();
	return 0;
}
</code></pre>
<p></p>
<h2 id="p4392-boi2007-sound-静音问题-rmq-st表" tabindex="-1"><a class="header-anchor" href="#p4392-boi2007-sound-静音问题-rmq-st表" aria-hidden="true">#</a> P4392 [BOI2007]Sound 静音问题（rmq，st表）</h2>
<h2>题目描述</h2>
<p>数字录音中，声音是用表示空气压力的数字序列描述的，序列中的每个值称为一个采样，每个采样之间间隔一定的时间。</p>
<p>很多声音处理任务都需要将录到的声音分成由静音隔开的几段非静音段。为了避免分成过多或者过少的非静音段，静音通常是这样定义的：m个采样的序列，该序列中采样的最大值和最小值之差不超过一个特定的阈值c。</p>
<p>请你写一个程序，检测n个采样中的静音。</p>
<h2>输入格式</h2>
<p>第一行有三个整数n，m，c（ 1&lt;= n&lt;=1000000，1&lt;=m&lt;=10000， 0&lt;=c&lt;=10000），分别表示总的采样数、静音的长度和静音中允许的最大噪音程度。</p>
<p>第2行n个整数ai (0 &lt;= ai &lt;= 1,000,000)，表示声音的每个采样值，每两个整数之间用空格隔开。</p>
<h2>输出格式</h2>
<p>列出了所有静音的起始位置i（i满足max(a[i, . . . , i+m−1]) − min(a[i, . . . , i+m−1]) &lt;= c），每行表示一段静音的起始位置，按照出现的先后顺序输出。如果没有静音则输出NONE。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
7 2 0
0 1 1 2 3 2 2</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
2
6</pre>
<p>思路：用两个st表记录一下区间的最大最小值，遍历一遍数组，以i为起点长度为m的区间判断最大最小值之差大小是不是&lt;=c即可</p>
<p>坑点：最后一个测试点会mle，所以我们需要尽量用少的空间，</p>
<p>那么我们就不要再设置新的数组来存原数组了，</p>
<p>读入的时候直接存入st[i][0]中</p>
<p>然后我们看m的范围是1e4</p>
<p>那么我们st表的第二维只用开log2（1e4）=13就可以了</p>
<pre>
<code class="hljs">/*

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
#define lowbit(x) x&amp;(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair&lt;int,int&gt; pii;
int gcd(int a,int b) {
	return b? gcd(b,a%b):a;
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
const int N=1e6+3;
int m,n,c;
int fi[N][14],fx[N][14];
void init(){
	for(int j=1;j&lt;=20;j++)//最外层枚举的是长度
		for(int i=1;i+(1&lt;&lt;j)-1&lt;=n;i++)
		{
			fi[i][j]=min(fi[i][ j-1],fi[i+(1&lt;&lt;( j - 1 )) ][j-1] );//右边的是i+2^(j-1)-&gt;i+(1&lt;&lt;j-1)
				  fx[i][j]=max(fx[i][ j-1],fx[i+(1&lt;&lt;( j - 1 )) ][j-1] );//右边的是i+2^(j-1)-&gt;i+(1&lt;&lt;j-1)
		}
}
void sove(){
	cin&gt;&gt;n&gt;&gt;m&gt;&gt;c;
	for(int i=1;i&lt;=n;i++){
		int x;
		cin&gt;&gt;x;
		fi[i][0]=x;
		fx[i][0]=x;
	}
	init();
	int k=log2(m);
	bool f=true;
	for(int i=1;i+m-1&lt;=n;i++){
		int l=i,r=l+m-1;
		int ansi=min(fi[l][k],fi[r-(1&lt;&lt;k)+1][k]);
		int ansx=max(fx[l][k],fx[r-(1&lt;&lt;k)+1][k]);
		if(ansx-ansi&lt;=c){
			cout&lt;&lt;i&lt;&lt;endl;
			f=false;
		}
	}
	if(f)cout&lt;&lt;"NONE"&lt;&lt;endl;
}

int main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
/*	int op=log2(1e4);
	cout&lt;&lt;op&lt;&lt;endl;
	*/
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
</div></template>


