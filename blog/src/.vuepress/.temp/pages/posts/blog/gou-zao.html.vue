<template><div><h2 id="c-submask" tabindex="-1"><a class="header-anchor" href="#c-submask" aria-hidden="true">#</a> C - Submask</h2>
<p>You are given a non-negative integer NN. Print all non-negative integers xx that satisfy the following condition in ascending order.</p>
<ul><li>The set of the digit positions containing 11 in the binary representation of xx is a subset of the set of the digit positions containing 11 in the binary representation of NN.
	<ul><li>That is, the following holds for every non-negative integer kk: if the digit in the "2^k2ks" place of xx is 11, the digit in the 2^k2ks place of NN is 11</li>
	</ul></li>
</ul><p>题意：给你一个数n，他的二进制表示的所有1的位数的集合是s ，求满足二进制表示的所有的1的位数的集合是s的子集的数</p>
<p>思路：先把每一位1放进一个数组里，下标想从0开始，看看有几位，然后状态压缩，转换成二进制一个一个枚举每一位选或不选的状态</p>
<p>比如：有4位，那么我们就令所有状态为op=1&lt;&lt;4,然后从0到op-1枚举i，看i的每一位是不是1，如果是1的话就说明选了哪一位，最后看所有选的数加起来是多少就行</p>
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
int a[N];
int f[65];
void init(){
	f[0]=1;
	for(int i=1;i&lt;=60;i++){
		f[i]=f[i-1]*2;
	}
}
void sove(){
	cin&gt;&gt;n;
	int k=0,con=0;
	while(n){
		if(n&amp;1)a[con++]=f[k];
		k++;
		n&gt;&gt;=1;
	}
//	cout&lt;&lt;con&lt;&lt;endl;
	int num=1&lt;&lt;con;
//	cout&lt;&lt;num&lt;&lt;endl;
	for(int i=0;i&lt;num;i++){
		int x=i,cnt=0;
		int ans=0;
		while(x){
			if(x&amp;1)ans+=a[cnt];
			cnt++;
			x&gt;&gt;=1;
		}
		cout&lt;&lt;ans&lt;&lt;endl;
	}
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
	init();
//	cin&gt;&gt;t;
	while(t--){
		sove();
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="最小区间覆盖问题" tabindex="-1"><a class="header-anchor" href="#最小区间覆盖问题" aria-hidden="true">#</a> 最小区间覆盖问题</h2>
<p>给你一段区间1~t，有n个区间，求能覆盖完1~t的区间的最小个数，如果不能覆盖完输出-1</p>
<p>例题：poj2376</p>
<p>我们先假设已经覆盖了区间a~b，那么我们选择下一个区间的时候，为了保证最贪心的取，肯定会取左端点&gt;=b+1的区间，这样重叠浪费的就少</p>
<p>然后我们再按贪心的思想，肯定是右端点越长覆盖的越多</p>
<p>那么我们现在开始思考这个问题</p>
<p>先按左端点从小到大排序，如果左端点相同的话按右端点从左到右排序</p>
<p>然后我们先判断第一个区间</p>
<p>如果第一个区间的左端点大于1 的话说明不能覆盖完1~t，直接输出-1</p>
<p>否则的话，last表示已经覆盖的区间的下标，我们把最原始的区间的下标last设为1，记录区间个数的变量flag设为1</p>
<p>然后我们从i=2开始遍历，当第i个区间的左端点&lt;=last的右端点+1，并且第i个区间的右端点大于last的右端点的话，我们就从i开始找右端点最长的区间</p>
<p>找到之后个数++，i变化一下</p>
<p>最后判断一下已覆盖的区间last的右端点是否大于等于t，如果是就输出个数，如果不是说明没有覆盖完全，输出-1</p>
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
const int N=25000+10;

/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/

struct name{
	int l,r;
}q[N];
int n;
bool cmp(name a,name b){
	if(a.l !=b.l )return a.l &lt;=b.l ;
	return a.r &lt;=b.r ;
}
void sove(){
	int t;
	cin&gt;&gt;n&gt;&gt;t;
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;q[i].l &gt;&gt;q[i].r ;
	}
	sort(q+1,q+1+n,cmp);
	if(q[1].l &gt;1){
		cout&lt;&lt;-1&lt;&lt;endl;
		return ;
	}
	int flag=1,last=1;
	for(int i=2;i&lt;=n;i++){
		if(q[i].l &lt;=q[last].r +1&amp;&amp;q[i].r &gt;q[last].r ){
			int j=i;
			while(q[i].l &lt;=q[last].r +1&amp;&amp;i&lt;=n){
				if(q[i].r &gt;q[j].r ){
					j=i;
				}
				i++;
			}
			i=j;
			last=j;
			flag++;
			if(q[last].r &gt;=t)break;
		}
	}
	if(q[last].r &lt;t){
		cout&lt;&lt;-1&lt;&lt;endl;
	}else cout&lt;&lt;flag&lt;&lt;endl;
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
<p> 还有一个例题：</p>
<p>给你n个区间，选最少的区间来完全覆盖s~t这一段区间，</p>
<p>如果能覆盖完输出最小区间数量，如果不能的话我们就输出-1</p>
<p>思路：先按左端点从大到小排序</p>
<p>然后遍历n个区间</p>
<p>每次找左端点大于s的区间的最大右端点r</p>
<p>如果能找到的话就把s更新为r，数量++</p>
<p>如果找不到的话就把答案设为-1break</p>
<p>当然我们要额外判断一下我们更新的区间右端点是不是大于t，如果大于的话就输出个数</p>
<p>否则输出-1</p>
<pre>
<code class="language-cpp">/*

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
const int N=1e5+10;
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/

struct name{
	int l,r;
}q[N];
int n;
bool cmp(name a,name b){
	return a.l &lt;b.l ;
}
void sove(){
	int s,t;
	cin&gt;&gt;s&gt;&gt;t;
	cin&gt;&gt;n;
	for(int i=1;i&lt;=n;i++){
		cin&gt;&gt;q[i].l &gt;&gt;q[i].r ;
	}
	sort(q+1,q+1+n,cmp);
	bool f=false;
	int res=0;
	for(int i=1;i&lt;=n;i++){
		int j=i,r=-2e9;
		while(j&lt;=n&amp;&amp;q[j].l &lt;=s){
			r=max(r,q[j].r );
			j++;
		}
		if(r&lt;s){
			res=-1;
			break;
		}
		res++;
		if(r&gt;=t){
			f=true;
			break;
		}
		s=r;
		i=j-1;
	}
	if(!f)res=-1;
	cout&lt;&lt;res&lt;&lt;endl;
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
<p></p>
<h2 id="stack-hdu" tabindex="-1"><a class="header-anchor" href="#stack-hdu" aria-hidden="true">#</a> stack（hdu）</h2>
<p>题意：有n个栈，第i个栈刚开始只放了i，有m个操作，每次把ai放到bi里，求最后每个栈里元素的个数和元素</p>
<p>模拟肯会超时，那么我们就想用双链表来写</p>
<p>s数组用来存一个数的前面相连的数或者后面的数（因为堆的话一个数只能连两个数）</p>
<pre>
<code class="hljs">struct name{
	int pre,next;
}s[N];</code></pre>
<p>sta数组用来记录栈顶和栈底元素</p>
<pre>
<code class="hljs">struct po{
	int top,bot;
}sta[N];</code></pre>
<p>f数组来记录这个数输出过没有，num来记录每个栈的元素的个数</p>
<pre>
<code class="hljs">int f[N],num[N];</code></pre>
<p>刚开始初始化的时候每个栈的栈顶和栈底都是i本身，然后num都是1，f初始化为0，每个数没有与他相连的数，所以前面后面都是0</p>
<pre>
<code class="hljs">for(int i=1;i&lt;=n;i++){
			num[i]=1;
			sta[i].top =sta[i].bot =i;
			f[i]=0;
			s[i].next =s[i].pre =0;
		}</code></pre>
<p>然后我们对于把a这个栈放到b这个栈的add操作：</p>
<p>我们分别用xyzq来记录a的栈顶和栈底，b的栈顶和栈底</p>
<p>把a放入b，那么a的栈底就是b的栈顶</p>
<p>a的num要加到b的num里去，a的num变成0</p>
<p>然后a的栈顶x就会连上b的栈顶z，判断一下x有没有与他相连的数</p>
<p>如果没有就把z连到x的后面next，如果有就连到x的前面pre</p>
<p>z的情况也是一样，如果z后面没有的话就连到后面，有的话就连到前面</p>
<pre>
<code class="hljs">#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cmath&gt;
#include&lt;stack&gt;
#include&lt;vector&gt;
#include&lt;queue&gt;
#include&lt;set&gt;
#include&lt;cstring&gt;
#include&lt;list&gt;
#include&lt;map&gt;
#include&lt;cstdio&gt;
typedef long long ll;
typedef int64_t s64;
using namespace std;
struct node{
    int pre,next;
}s[200005];
struct stac{
    int top,bot;
}sta[200005];
int num[200005];
void add(int a,int b){
    int x=sta[a].top;
    int y=sta[a].bot;
    int z=sta[b].top;
    int q=sta[b].bot;
    if(!num[b]){        //b栈中没有东西
        sta[b].bot=x;   //a的头变b的底
        sta[b].top=y;   //a的底比b的头
        sta[a].top=sta[a].bot=0; //把a头和底置0 
    }
    else{              //b栈有东西
        if(!s[x].next){   //判断a栈中的头是否是next空（因为此题为双向链表不能确定是next还是pre）
            s[x].next=z;
        }   
        else{   //判断a栈中的头是否是pre空
            s[x].pre=z;
        }
        if(!s[z].next){   //判断b栈中的头是否是next空（双向链表所以a和b是需要相互连接的）
            s[z].next=x;
        }
        else{   //判断b栈中的头是否是pre空
            s[z].pre=x;
        }   //在这之前都是在做将ab栈连接起来的操作
        sta[b].top=y;   //把a的底变b的头
        sta[a].top=sta[a].bot=0;   //把a的头和底置0
    }
    num[b]+=num[a];
    num[a]=0;
}
int sig[200005];
int main(){
    int n,m;
    while(cin&gt;&gt;n&gt;&gt;m){
        for(int i=1;i&lt;=n;i++){   //初始化n个栈
            s[i].pre=s[i].next=0;
            sta[i].top=sta[i].bot=i;
            num[i]=1;
            sig[i]=0;
        }
        int x,y;
        while(m--){
            cin&gt;&gt;x&gt;&gt;y;
            if(num[x]==0)
                continue;
            add(x,y);
        }
        for(int i=1;i&lt;=n;i++){
            int k=sta[i].top;
            cout&lt;&lt;num[i];   //输出当前栈中的数据个数
            if(num[i]){     //判断是否栈中有数据   
                while(k){
                    cout&lt;&lt;" "&lt;&lt;k;   
                    sig[k]=1;   //每次找到并且输出后都需要标记
                    if(s[k].next&amp;&amp;sig[s[k].next]!=1){   //寻找下一个数据，因不确定是next还是pre所以需要进行以下的判断
                        k=s[k].next;
                    }
                    else if(s[k].pre&amp;&amp;sig[s[k].pre]!=1){
                        k=s[k].pre;
                    }
                    else{
                        k=0;   //找不到下一个退出循环
                    }
                }
            }
            cout&lt;&lt;endl;
        }
    }
    return 0;
}</code></pre>
<p></p>
</div></template>


