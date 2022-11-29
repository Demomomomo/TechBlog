<template><div><h2 id="p5200-usaco19jan-sleepy-cow-sorting-g" tabindex="-1"><a class="header-anchor" href="#p5200-usaco19jan-sleepy-cow-sorting-g" aria-hidden="true">#</a> P5200 [USACO19JAN]Sleepy Cow Sorting G</h2>
<h2>题目描述</h2>
<p>Farmer John正在尝试将他的 NN 头奶牛（1\le N\le 10^51≤N≤105），方便起见编号为 1\ldots N1…N，在她们前往牧草地吃早餐之前排好顺序。</p>
<p>当前，这些奶牛以 p_1,p_2,p_3,\ldots,p_Np1​,p2​,p3​,…,pN​ 的顺序排成一行，Farmer John站在奶牛 p_1p1​ 前面。他想要重新排列这些奶牛，使得她们的顺序变为 1,2,3,\ldots,N1,2,3,…,N，奶牛 11 在 Farmer John 旁边。</p>
<p>今天奶牛们有些困倦，所以任何时刻都只有直接面向 Farmer John 的奶牛会注意听 Farmer John 的指令。每一次他可以命令这头奶牛沿着队伍向后移动 kk 步，kk 可以是 11 到 N−1N−1 之间的任意数。她经过的 kk 头奶牛会向前移动，腾出空间使得她能够插入到队伍中这些奶牛之后的位置。</p>
<p>例如，假设 N=4N=4，奶牛们开始时是这样的顺序：</p>
<pre>
<code> FJ: 4 3 2 1
</code></pre>
<p>唯一注意 FJ 指令的奶牛是奶牛 44。当他命令她向队伍后移动 22 步之后，队伍的顺序会变成：</p>
<pre>
<code> FJ: 3 2 4 1 
</code></pre>
<p>现在唯一注意 FJ 指令的奶牛是奶牛 33，所以第二次他可以给奶牛 33 下命令，如此进行直到奶牛们排好了顺序。</p>
<p>Farmer John 急欲完成排序，这样他就可以回到他的农舍里享用他自己的早餐了。请帮助他求出一个操作序列，使得能够用最少的操作次数将奶牛们排好顺序。</p>
<h2>输入格式</h2>
<p>输入的第一行包含 NN。第二行包含 NN 个空格分隔的整数：p_1,p_2,p_3,\ldots,p_Np1​,p2​,p3​,…,pN​，表示奶牛们的起始顺序。</p>
<h2>输出格式</h2>
<p>输出的第一行包含一个整数 KK，为将奶牛们排好顺序所需的最小操作次数。</p>
<p>第二行包含 KK 个空格分隔的整数，c_1,c_2,\ldots,c_Kc1​,c2​,…,cK​，每个数均在 1\ldots N−11…N−1 之间。如果第 ii 次操作 FJ 命令面向他的奶牛向队伍后移动 c_ici​ 步，那么 KK 次操作过后奶牛们应该排好了顺序。</p>
<p>如果存在多种最优的操作序列，你的程序可以输出其中任何一种。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
4
1 2 4 3</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
3
2 2 3</pre>
<p>思路：因为所有大的数都要往后去，变成递增序列</p>
<p>所以我们从后往前看，如果到达i这个位置的时候a[i]&gt;a[i+1]</p>
<p>那么就说明i和i前面的所有数都需要往后移动</p>
<p>所以我们先从后往前找到一个突然递增的数a[i]，那么他和他前面的数的数量就是需要操作几步</p>
<p>那么i后面的数就已经确定位置了</p>
<p>那么对于没有确定的数，他需要挪动的步数是：没有确定的数+已经确定但是比他小的数</p>
<p>（这步自己模拟样例就能找出来规律）</p>
<p>求已经确定但是比他小的数就用树状数组来求</p>
<p>那么先找到这个数的下标id</p>
<p>id+1~n都已经确定，那么add(a[i],1)</p>
<p>然后从1开始到id</p>
<p>不确定的数的数量就是id-i</p>
<p>确定但是比他小的数的个数就是sum(a[i]-1)</p>
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
#define int long long
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
const int N=1e5+10;
int n;
int a[N];
int tr[N*4];
vector&lt;int&gt; yy;
void add(int x,int c){
	for(int i=x;i&lt;=n;i+=lowbit(i))tr[i]+=c;
}
int sum(int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i))res+=tr[i];
	return res;
}
void sove(){
	cin&gt;&gt;n;
	for(int i=1;i&lt;=n;i++)cin&gt;&gt;a[i];
	int id=0;
	for(int i=n-1;i&gt;=1;i--){
		if(a[i]&gt;a[i+1]){
			id=i;
			break;
		}
	}
	cout&lt;&lt;id&lt;&lt;endl;
//	cout&lt;&lt;"id=="&lt;&lt;id&lt;&lt;endl;
	if(id==0)return ;
	for(int i=id+1;i&lt;=n;i++){
		add(a[i],1);
	//	cout&lt;&lt;"i=="&lt;&lt;i&lt;&lt;endl;
	}
	for(int i=1;i&lt;=id;i++){
		int con=id-i+sum(a[i]-1);
		add(a[i],1);
		cout&lt;&lt;con&lt;&lt;" ";
	}
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="p3801-红色的幻想乡-树状数组" tabindex="-1"><a class="header-anchor" href="#p3801-红色的幻想乡-树状数组" aria-hidden="true">#</a> P3801 红色的幻想乡（树状数组）</h2>
<h2>题目背景</h2>
<p>蕾米莉亚的红雾异变失败后，很不甘心。</p>
<h2>题目描述</h2>
<p>经过上次失败后，蕾米莉亚决定再次发动红雾异变，但为了防止被灵梦退治，她决定将红雾以奇怪的阵势释放。</p>
<p>我们将幻想乡看做是一个 n \times mn×m的方格地区，一开始没有任何一个地区被红雾遮盖。蕾米莉亚每次站在某一个地区上，向东南西北四个方向各发出一条无限长的红雾，可以影响到整行/整列，但不会影响到她所站的那个地区。如果两阵红雾碰撞，则会因为密度过大而沉降消失。灵梦察觉到了这次异变，决定去解决它。但在解决之前，灵梦想要了解一片范围红雾的密度。可以简述为两种操作:</p>
<p><code>1 x y</code> 蕾米莉亚站在坐标 (x,y)(x,y) 的位置向四个方向释放无限长的红雾。</p>
<p><code>2 x1 y1 x2 y2</code> 询问左上点为(x1,y1)(x1,y1)，右下点为 (x2,y2)(x2,y2) 的矩形范围内，被红雾遮盖的地区的数量。</p>
<h2>输入格式</h2>
<p>第一行三个整数 n,m,qn,m,q，表示幻想乡大小为 n \times mn×m，有 qq 个询问。</p>
<p>接下来 qq 行，每行 33 个或 55 个整数,用空格隔开，含义见题目描述。</p>
<h2>输出格式</h2>
<p>对于每一个操作 22，输出一行一个整数，表示对应询问的答案。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
4 4 3
1 2 2
1 4 4
2 1 1 4 4
</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
8</pre>
<h2>说明/提示</h2>
<p>样例输入输出 1 解释</p>
<p>用<code>o</code>表示没有红雾，<code>x</code>表示有红雾，两次释放红雾后幻想乡地图如下:</p>
<pre>
<code>oxox
xoxo
oxox
xoxo
</code></pre>
<hr /><p>数据规模与约定</p>
<ul><li>对于 20\%20% 的数据，1 \le n,m,q \le 2001≤n,m,q≤200。</li>
	<li>对于 40\%40% 的数据，1 \le n,m,q \le 10^31≤n,m,q≤103。</li>
	<li>对于 100\%100% 的数据，1 \le n,m,q \le 10^51≤n,m,q≤105，1 \le x_1,x_2,x \le n1≤x1​,x2​,x≤n，x_1 \le x_2x1​≤x2​，1 \le y_1,y_2,y \le m1≤y1​,y2​,y≤m，y_1 \le y_2y1​≤y2​。</li>
</ul><p>思路：对于每次添加来说，都是添加一行或者添加一列</p>
<p>并且（x，y）这个位置不添加，那么对于每一对x，y来说我们就多算了两个</p>
<p>用两个树状数组分别维护行和列</p>
<p>对于如果有两个的话会消失这个操作转换为每次取反</p>
<p>所以我们要用数组来记录每次的行或列的上一个状态是什么</p>
<p>如果这个数组记录是1的话就在记录x的树状数组的x的位置-1，如果是0的话就在x的位置+1</p>
<p>（这里需要对x和y两个坐标写不同的add 和sum函数，注意sum函数的i的范围不同，对于x是n，对于y是m ）</p>
<p>然后再对这个数组进行取反操作</p>
<p>设x0是x1，x2之间状态是1 的行的数量</p>
<p>y0=y1，y2之间状态是1的列的数量</p>
<p>在求x1 y1 x2 y2之间的数量就是：</p>
<p>x0*（y2-y1）+y0*（x2-x1）-x0*y0*2（重复算了两次的相交的点的数量）</p>
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
#define int long long
#define lowbit(x) x&amp;(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair&lt;int,int&gt; pii;
ll gcd(ll a,ll b) {
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
const int N=2e5+10;
int m,q,n;
int tr1[N*4],tr2[4*N];
int dx[N],dy[N];
int read(){
	int k=0; char c=getchar();
	while(c&lt;'0'||c&gt;'9') c=getchar();
	while(c&gt;='0'&amp;&amp;c&lt;='9')
	  k=k*10+c-48, c=getchar();
	return k;
}
void addx(ll x,ll c){
	for(ll i=x;i&lt;=n;i+=lowbit(i))tr1[i]+=c;
}
void addy(ll x,ll c){
	for(ll i=x;i&lt;=m;i+=lowbit(i))tr2[i]+=c;
}
ll sumx(ll x){
	ll res=0;
	for(ll i=x;i;i-=lowbit(i))res+=tr1[i];
	return res;
}
ll sumy(ll x){
	ll res=0;
	for(ll i=x;i;i-=lowbit(i))res+=tr2[i];
	return res;
}
void sove(){
	n=read();
	m=read();
	q=read();
	while(q--){
		int op;
		op=read();
		if(op==1){
			int x,y;
			x=read();
			y=read();
			(dx[x])?addx(x,-1):addx(x,1);
			dx[x]^=1;
			(dy[y])?addy(y,-1):addy(y,1);
			dy[y]^=1;
		}else {
			int x1,y1,x2,y2;
			x1=read();
			y1=read();
			x2=read();
			y2=read();
			int x0=sumx(x2)-sumx(x1-1);
			int y0=sumy(y2)-sumy(y1-1);
			int ans=x0*(y2-y1+1)+y0*(x2-x1+1)-x0*y0*2;
			cout&lt;&lt;ans&lt;&lt;endl;
		}
	}
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="t225362-《山茶文具店》" tabindex="-1"><a class="header-anchor" href="#t225362-《山茶文具店》" aria-hidden="true">#</a> T225362 《山茶文具店》</h2>
<h2>题目链接：<a data-link-icon="https://www.luogu.com.cn/favicon.ico" data-link-title="《夏摩山谷》 - 洛谷" href="https://www.luogu.com.cn/problem/T214551" title="《夏摩山谷》 - 洛谷">《夏摩山谷》 - 洛谷</a></h2>
<h2>题目背景</h2>
<p>“只要结局完美，过去的种种都算好。” ——《山茶文具店》</p>
<h2>题目描述</h2>
<p>波波店主收到这样一份代笔<br />
她被要求写下一个仅仅包含 00 到 99 字符串 ss ，但是她可能会对其中的一些数字不是很满意，会经常对某些位置重新修改<br />
而这位顾客会经常来询问店主字符串 ss 下标从 xx 到 yy 形成的十进制数在模 10^9+7109+7 下是多少<br />
店主对修改很适从，但是顾客的奇奇怪怪问题她就没办法解决了，请你帮她解决这个问题</p>
<h2>输入格式</h2>
<p>第一行一个整数 nn 和一个整数 qq，代表店主的字符串长度以及操作次数（操作包含修改和询问）<br />
接下来一行是一个字符串 ss，代表店主写下的起始字符串<br />
然后是 qq 行操作，opop xx yy</p>
<ul><li>op=1op=1：店主修改字符串下标 xx 的位置为 yy</li>
	<li>op=2op=2：顾客询问字符串 ss 下标从 xx 到 yy 形成的十进制数在模 10^9+7109+7 下是多少</li>
</ul><blockquote>
<p>字符串下标从 11 开始<br />
每次修改会将字符串 ss 变成一个新的字符串，即下一次修改是在此基础上进行再次修改</p>
</blockquote>
<h2>输出格式</h2>
<p>对于每次查询，输出一个数，表示字符串 ss 下标从 xx 到 yy 形成的十进制数在模 10^9+7109+7 下的数</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
5 7
12345
2 1 5
2 2 3
1 2 1
2 1 5
2 2 3
1 5 1
2 1 5</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
12345
23
11345
13
11341</pre>
<h2>说明/提示</h2>
<p>1\le n\le 10^51≤n≤105<br />
1\le q\le 10^51≤q≤105<br />
操作11：1\le x\le n,0\le y\le 91≤x≤n,0≤y≤9<br />
操作22：1\le x\le y\le n1≤x≤y≤n</p>
<hr /><p><strong>样例说明</strong></p>
<p>第一次修改之前的两次询问，都是 s=12345s=12345 下的询问<br />
询问11：[12345][12345]<br />
询问22：1[23]451[23]45<br />
第一次修改之后，s=11345s=11345<br />
询问44：[11345][11345]<br />
询问55：1[13]451[13]45<br />
第二次修改之后，s=11341s=11341<br />
询问77：[11341][11341]</p>
<p>思路：在更新的时候，我们观察u的左右子树和u有什么关系</p>
<p>比如u=12，那么左子树的sum就是1，右子树的sum就是2</p>
<p>那么u的sum就是左子树的sum*10的（右子树的长度）次幂+右子树的sum</p>
<pre>
<code>void pushup(int u){
	ll len=tr[u&lt;&lt;1|1].r -tr[u&lt;&lt;1|1].l +1;
	tr[u].sum =(tr[u&lt;&lt;1].sum *ksm(10,len,mod)%mod+tr[u&lt;&lt;1|1].sum )%mod;
}</code></pre>
<p>单点修改和建树操作还是按板子来就行</p>
<p>对查询操作我们要注意</p>
<p>当我们查询的u的区间被完全包含在我们需要查询的l-r中时</p>
<p>其实得到的值是u的sum*10的（r-u的r）次幂</p>
<p>比如12345</p>
<p>假设我们查的区间是2-5，但是当前结点的区间是2-3，那么我们应该得到的是2300</p>
<p>如果u不被l-r包含的话分别看看与左右子树有没有交集所得值相加就行了（因为左子树的权值我们在完全包含时就处理过了，直接加就行不用乘长度）</p>
<pre>
<code>ll query(int u,int l,int r){
	if(l&lt;=tr[u].l &amp;&amp;r&gt;=tr[u].r ){
		ll len=r-tr[u].r ;
		return tr[u].sum *ksm(10,len,mod)%mod;
	}else{
		int mid=tr[u].l +tr[u].r &gt;&gt;1;
		ll v1=0,v2=0;
		if(l&lt;=mid)v1=query(u&lt;&lt;1,l,r);
		if(r&gt;mid)v2=query(u&lt;&lt;1|1,l,r);
		return (v1+v2)%mod;
	}
}</code></pre>
<p>注意一下这个细节之后就可以ac啦~</p>
<pre>
<code>#include&lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
const int N=1e5+10;
const ll mod=1e9+7;
int n,m;
string a;
ll ksm(ll a,ll b,ll p){
	ll res=1%p;
	while(b){
		if(b&amp;1)res=res*a%p;
		a=a*a%p;
		b&gt;&gt;=1;
	}
	return res;
}
struct name{
	int l,r;
	ll sum;
}tr[N*4];
void pushup(int u){
	ll len=tr[u&lt;&lt;1|1].r -tr[u&lt;&lt;1|1].l +1;
	tr[u].sum =(tr[u&lt;&lt;1].sum *ksm(10,len,mod)%mod+tr[u&lt;&lt;1|1].sum )%mod;
//	cout&lt;&lt;"l=="&lt;&lt;tr[u&lt;&lt;1].sum &lt;&lt;" r=="&lt;&lt;tr[u&lt;&lt;1|1].sum &lt;&lt;" sum=="&lt;&lt;tr[u].sum &lt;&lt;endl;
}
void build(int u,int l,int r){
	if(l==r){
		int op=a[l]-'0';
		tr[u]={l,r,op};
	}else{
		tr[u]={l,r,0};
		int mid=l+r&gt;&gt;1;
		build(u&lt;&lt;1,l,mid);
		build(u&lt;&lt;1|1,mid+1,r);
		pushup(u);
	}
}
void modify(int u,int x,int v){
	if(tr[u].l ==x&amp;&amp;tr[u].r ==x){
		tr[u].sum =v;
	}else{
		int mid=tr[u].l +tr[u].r &gt;&gt;1;
		if(x&lt;=mid)modify(u&lt;&lt;1,x,v);
		else modify(u&lt;&lt;1|1,x,v);
		pushup(u);
	}
}
ll query(int u,int l,int r){
	if(l&lt;=tr[u].l &amp;&amp;r&gt;=tr[u].r ){
		ll len=r-tr[u].r ;
		return tr[u].sum *ksm(10,len,mod)%mod;
	}else{
		int mid=tr[u].l +tr[u].r &gt;&gt;1;
		ll v1=0,v2=0;
		if(l&lt;=mid)v1=query(u&lt;&lt;1,l,r);
		if(r&gt;mid)v2=query(u&lt;&lt;1|1,l,r);
		return (v1+v2)%mod;
	}
}
void sove(){
	scanf("%d%d",&amp;n,&amp;m);
	cin&gt;&gt;a;
	a=" "+a;
	build(1,1,n);
	while(m--){
		int op,l,r;
		scanf("%d%d%d",&amp;op,&amp;l,&amp;r);
		if(op==1){
			modify(1,l,r);
		}else{
			cout&lt;&lt;query(1,l,r)&lt;&lt;endl;
		}
	}
}
int main(){
	int t=1;
//	scanf("%d",&amp;t);
	while(t--){
		sove();
	}
	return 0;
}
</code></pre>
<p></p>
<h2 id="p6225-ejoi2019-异或橙子" tabindex="-1"><a class="header-anchor" href="#p6225-ejoi2019-异或橙子" aria-hidden="true">#</a> P6225 [eJOI2019] 异或橙子</h2>
<h2>题目描述</h2>
<p>Janez 喜欢橙子！他制造了一个橙子扫描仪，但是这个扫描仪对于扫描的每个橙子的图像只能输出一个 3232 位整数。</p>
<p>他一共扫描了 nn 个橙子，但有时他也会重新扫描一个橙子，导致这个橙子的 3232 位整数发生更新。</p>
<p>Janez 想要分析这些橙子，他觉得异或操作非常有趣，他每次选取一个区间从 ll 至 uu，他想要得到这个区间内所有子区间的异或和的异或和。</p>
<p>例如 l=2,u=4l=2,u=4 的情况，记橙子序列 AA 中第 ii 个橙子的整数是 ，那么他要求的就是：</p>
<p>a_2 \oplus a_3 \oplus a_4 \oplus (a_2\oplus a_3)\oplus(a_3\oplus a_4)\oplus(a_2\oplus a_3 \oplus a_4)a2​⊕a3​⊕a4​⊕(a2​⊕a3​)⊕(a3​⊕a4​)⊕(a2​⊕a3​⊕a4​)</p>
<hr /><p>注：式子中的 \oplus⊕ 代表按位异或运算。异或的运算规则如下。</p>
<p>对于两个数的第 ii 位，记为 x,yx,y，那么：</p>
<table><thead><tr><th>xx</th>
			<th>yy</th>
			<th>x\oplus yx⊕y</th>
		</tr></thead><tbody><tr><td>00</td>
			<td>11</td>
			<td>11</td>
		</tr><tr><td>11</td>
			<td>00</td>
			<td>11</td>
		</tr><tr><td>00</td>
			<td>00</td>
			<td>00</td>
		</tr><tr><td>11</td>
			<td>11</td>
			<td>00</td>
		</tr></tbody></table><p>例：13\oplus 23=2613⊕23=26</p>
<table><thead><tr><th>13=13=</th>
			<th>0\cdots 0011010⋯001101</th>
		</tr></thead><tbody><tr><td>23=23=</td>
			<td>0\cdots 0101110⋯010111</td>
		</tr><tr><td>13\oplus 23=13⊕23=</td>
			<td>0\cdots 0110100⋯011010</td>
		</tr></tbody></table><h2>输入格式</h2>
<p>第一行输入两个正整数 n,qn,q，表示橙子数量和操作次数。</p>
<p>接下来一行 nn 个非负整数，表示每个橙子扫描得到的数值 ，从 11 开始编号。</p>
<p>接下来 qq 行，每行三个数：</p>
<ul><li>
	<p>如果第一个数是 11，接下来输入一个正整数 ii 与非负整数 jj，表示将第 ii 个橙子的扫描值 a_iai​ 修改为 jj。</p>
	</li>
	<li>
	<p>如果第一个数是 22，接下来输入两个正整数 u,lu,l 表示询问这个区间的答案。</p>
	</li>
</ul><h2>输出格式</h2>
<p>对于每组询问，输出一行一个非负整数，表示所求的总异或和。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
3 3
1 2 3
2 1 3
1 1 3
2 1 3</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
2
0</pre>
<p><strong>输入 #2</strong>复制</p>
<pre>
5 6
1 2 3 4 5
2 1 3
1 1 3
2 1 5
2 4 4
1 1 1
2 4 4</pre>
<p><strong>输出 #2</strong>复制</p>
<pre>
2
5
4
4</pre>
<h2>说明/提示</h2>
<p>输入输出样例 1 解释</p>
<ul><li>
	<p>最初，A=[1,2,3]A=[1,2,3]，询问结果为 1\oplus 2\oplus 3\oplus(1\oplus 2)\oplus (2\oplus 3)\oplus(1\oplus 2\oplus 3)=21⊕2⊕3⊕(1⊕2)⊕(2⊕3)⊕(1⊕2⊕3)=2</p>
	</li>
	<li>
	<p>修改后，第一个位置被修改为 33 ，询问的结果是 3\oplus 2\oplus 3\oplus(3\oplus 2)\oplus (2\oplus 3)\oplus(3\oplus 2\oplus 3)=03⊕2⊕3⊕(3⊕2)⊕(2⊕3)⊕(3⊕2⊕3)=0。</p>
	</li>
</ul><hr /><p>数据规模与约定：</p>
<p><strong>本题采用多测试点捆绑测试，共有 5 个子任务</strong>。</p>
<ul><li>Subtask 1(12 points)：1\le n,q\le 10^21≤n,q≤102，无特殊限制</li>
	<li>Subtask 2(18 points)：1\le n,q\le 5\times 10^21≤n,q≤5×102，且没有修改操作。</li>
	<li>Subtask 3(25 points)：1\le n,q\le 5\times 10^31≤n,q≤5×103，无特殊限制</li>
	<li>Subtask 4(20 points)：1\le n,q\le 2\times 10^51≤n,q≤2×105，且没有修改操作。</li>
	<li>Subtask 5(25 points)：1\le n,q\le 2\times 10^51≤n,q≤2×105，无特殊限制</li>
</ul><p>对于所有数据，0\le a_i\le 10^9,1\le n,q\le 2\times 10^50≤ai​≤109,1≤n,q≤2×105</p>
<hr /><p>说明</p>
<p>原题来自：<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.2.0/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M85B" data-link-title="eJOI2019" href="http://ejoi2019.si/" title="eJOI2019">eJOI2019</a> Problem A. <a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.2.0/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M85B" data-link-title="XORanges" href="https://www.ejoi2019.si/static/media/uploads/tasks/xoranges-isc(1).pdf" title="XORanges">XORanges</a></p>
<p>思路：首先我们要观察一下区间和子区间的异或值的关系：</p>
<p>如果是2~4，那么所有的子区间异或的柿子就是</p>
<p>2^3^4^(2^3)^(3^4)^(2^3^4)</p>
<p>2用了3次，3用了4次，4用了3次</p>
<p>根据异或的性质：a^a==0</p>
<p>那么只有2和4对最后的值的贡献是1</p>
<p>再换一个区间比如：2~5</p>
<p>异或的柿子是2^3^4^5^(2^3)^(3^4)^(4^5)^(2^3^4)^(3^4^5)^(2^3^4^5)</p>
<p>所有的数都用了偶数次</p>
<p>所以异或的结果是0</p>
<p>那么我们就可以得出结论：当区间的两端的数奇偶值不相同的时候异或就是0</p>
<p>相同的话只有奇偶性和区间两端的端点的奇偶性相同的数才有贡献</p>
<p>那么我们就创建一个结构体存一个奇数，一个偶数的异或和的树状数组</p>
<p>更新的时候，把之前常用的求和运算改为异或运算（因为求的是异或和）</p>
<p>把添加操作改为异或，异或的参数是i a[i]^x（因为异或自己会抵消自己的贡献），然后把a[i]改为x</p>
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
const int N=2e5+10;
int m,n;
int a[N];
//
struct name{
	int c[4*N];
	void add(int x,int y){
		for(int i=x;i&lt;=n;i+=lowbit(i)){
			c[i]^=y;
		}
	}
	int sum(int x){
		int res=0;
		for(int i=x;i;i-=lowbit(i))res^=c[i];
		return res;
	}
}b[2];
void sove(){
	cin&gt;&gt;n&gt;&gt;m;
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;a[i];
		b[i&amp;1].add(i,a[i]); 
	}
	while(m--){
		int op,i,j;
		cin&gt;&gt;op&gt;&gt;i&gt;&gt;j;
		if(op==1){
			b[i&amp;1].add(i,a[i]^j); 
			a[i]=j;
		}else{
			if((i&amp;1)!=(j&amp;1)){
			cout&lt;&lt;0&lt;&lt;endl;
		}else{
			int op=b[i&amp;1].sum(j)^b[i&amp;1].sum(i-1);
			cout&lt;&lt;op&lt;&lt;endl;  
		}
		}
		
	}
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="p5367-【模板】康托展开-树状数组" tabindex="-1"><a class="header-anchor" href="#p5367-【模板】康托展开-树状数组" aria-hidden="true">#</a> P5367 【模板】康托展开（树状数组）</h2>
<h2>题目描述</h2>
<p>求 1\sim N1∼N 的一个给定全排列在所有 1\sim N1∼N 全排列中的排名。结果对 998244353998244353 取模。</p>
<h2>输入格式</h2>
<p>第一行一个正整数 NN。</p>
<p>第二行 NN 个正整数，表示 1\sim N1∼N 的一种全排列。</p>
<h2>输出格式</h2>
<p>一行一个非负整数，表示答案对 998244353998244353 取模的值。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
3
2 1 3</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
3</pre>
<p><strong>输入 #2</strong>复制</p>
<pre>
4
1 2 4 3</pre>
<p><strong>输出 #2</strong>复制</p>
<pre>
2</pre>
<h2>说明/提示</h2>
<p>对于10\%10%数据，1\le N\le 101≤N≤10。</p>
<p>对于50\%50%数据，1\le N\le 50001≤N≤5000。</p>
<p>对于100\%100%数据，1\le N\le 10000001≤N≤1000000。</p>
<p>思路：直接套用康托展开公式，一个大小为n的全排列的<strong>从0开始的编号</strong>是对1~n内的所有a[i]:</p>
<p>设op=没出现过的小于a[i]的数个数（用树状数组来计算）</p>
<p>对于每个a[i]: 算出op*（n-i）！的值</p>
<p>答案就是所有值相加</p>
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
#define int long long
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
const int N=1e6+10,mod=998244353;
int m,p,n,nn,l,r;
int a[N];
vector&lt;int&gt; yy;
int tr[N*4];
void add(int x,int c){
	for(int i=x;i&lt;=n;i+=lowbit(i))tr[i]+=c;
}
int sum(int x){//查询1-x的区间的前缀和
	int res=0;
	for(int i=x;i&gt;=1;i-=lowbit(i))res+=tr[i];
	return res;
}
int f[N];
void sove(){
	cin&gt;&gt;n;
	for(int i=1;i&lt;=n;i++)cin&gt;&gt;a[i];
	f[0]=1;
	for(int i=1;i&lt;=n;i++){
		f[i]=f[i-1]*i%mod;
	}
	for(int i=1;i&lt;=n;i++)add(i,1);
	int ans=0;
	for(int i=1;i&lt;=n;i++){
		int op=sum(a[i]-1);
		ans+=op*f[n-i]%mod;
		add(a[i],-1);
	}
	cout&lt;&lt;(ans+1)%mod&lt;&lt;endl;
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="p1996-约瑟夫问题-树状数组" tabindex="-1"><a class="header-anchor" href="#p1996-约瑟夫问题-树状数组" aria-hidden="true">#</a> P1996 约瑟夫问题 （树状数组）</h2>
<h2>题目描述</h2>
<p>nn 个人围成一圈，从第一个人开始报数,数到 mm 的人出列，再由下一个人重新从 11 开始报数，数到 mm 的人再出圈，依次类推，直到所有的人都出圈，请输出依次出圈人的编号。</p>
<p><strong>注意：本题和《深入浅出-基础篇》上例题的表述稍有不同。书上表述是给出淘汰 n-1n−1 名小朋友，而该题是全部出圈。</strong></p>
<h2>输入格式</h2>
<p>输入两个整数 n,mn,m。</p>
<h2>输出格式</h2>
<p>输出一行 nn 个整数，按顺序输出每个出圈人的编号。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
10 3</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
3 6 9 2 7 1 8 5 10 4
</pre>
<p> 思路：</p>
<p>用树状树状来记录每个数的个数</p>
<p>查找当前的第k个数</p>
<p>要用op来记录一下当前还有几个数，每次找到一个数组的个数--，找到的数的个数--</p>
<p>因为每次到第m个人的时候我们都要从1重新开始</p>
<p>所以我们要用一个now来记录当前我们需要找的第k大的数</p>
<p>now=(now-1+m-1)%op+1</p>
<p>（因为删除了一个所以now要-1，然后第m个数的话就加上m，-1%op+1是因为我们需要映射到1~op）</p>
<p>然后每次二分找出第now个数就好啦</p>
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
const int N=100+10;
int n,m;
int tr[N*4];
vector&lt;int&gt; yy;
int maxx;
int sum(int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i))res+=tr[i];
	return res;
}
void add(int x,int c){
	for(int i=x;i&lt;=n;i+=lowbit(i))tr[i]+=c;
}
void sove(){
	cin&gt;&gt;n&gt;&gt;m;
	int op=n;
	for(int i=1;i&lt;=n;i++)add(i,1);
	int now=1;
	while(op){
		now=(now-1+m-1)%op+1;
	//	cout&lt;&lt;"now=="&lt;&lt;now&lt;&lt;endl;
		int l=1,r=n;
		while(l&lt;r){
			int mid=l+r&gt;&gt;1;
			if(sum(mid)&gt;=now)r=mid;
			else l=mid+1;
		}
		yy.push_back(l);
		add(l,-1);
		op--; 
	}
	for(int i=0;i&lt;n;i++)cout&lt;&lt;yy[i]&lt;&lt;" ";
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}

</code></pre>
<p></p>
<p></p>
</div></template>


