---
title: stl

category:
  - algorithm

tag:
  - STL
---


## 集合相似度

<p>给定两个整数集合，它们的相似度定义为：Nc​/Nt​×100%。其中Nc​是两个集合都有的不相等整数的个数，Nt​是两个集合一共有的不相等整数的个数。你的任务就是计算任意一对给定集合的相似度。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入第一行给出一个正整数N（≤50），是集合的个数。随后N行，每行对应一个集合。每个集合首先给出一个正整数M（≤104），是集合中元素的个数；然后跟M个[0,109]区间内的整数。</p>

<p>之后一行给出一个正整数K（≤2000），随后K行，每行对应一对需要计算相似度的集合的编号（集合从1到N编号）。数字间以空格分隔。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>对每一对需要计算的集合，在一行中输出它们的相似度，为保留小数点后2位的百分比数字。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
3
3 99 87 101
4 87 101 5 87
7 99 101 18 5 135 18 99
2
1 2
1 3

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
50.00%
33.33%
```


<p> 思路：因为要求不相等整数的个数，所以用set来储存数组来去重，用n1来表示两个集合都有的不相等整数的个数，n2来表示两个集合一共有的不相等整数的个数，然后列举集合x中的所有数找集合y里有没有，如果有的话n1++，n2可以通过两个集合中各有的不相等整数的个数相加然后减去两个集合都有的不相等整数的个数来算出。（n2=x.size+y.size-n1）</p>


```cpp
#include<iostream>
#include<algorithm>
#include<set>
using namespace std;

int main(){
	int n,m,k,n1,n2;
	set<int> s[55];
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>m;
		while(m--){
			int o;
			cin>>o;
			s[i].insert(o); 
		}
	}
	cin>>k;
	while(k--){
		n1=0;
		int x,y;
		cin>>x>>y;
		for(auto t=s[x].begin() ;t!=s[x].end() ;t++){
			if(s[y].find(*t)!=s[y].end()){
				n1++;
			}
		}
		n2=s[x].size() +s[y].size() -n1;
		printf("%.2f%%\n",n1*1.0/n2*100);
	}
	return 0;
}
```


<p></p>

## C - Prefix K-th Max

<p>题意：他的意思是从i=k开始一直到i=n时求每次的前i位的第k大的值，我们就可以设置一个小额、根堆，先读入k个数输出栈顶元素，然后在后来的n-k次我们每加入一个元素，比较一下他和栈顶元素的关系，如果大于栈顶元素就把栈顶元素删除，把他加入之后输出栈顶元素，如果小于的话直接输出栈顶元素就行。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<queue>
#include<vector>
using namespace std;
const int N=100005;

int n,k,x;

int main(){
	cin>>n>>k;
	priority_queue<int,vector<int>,greater<int> > p;
	for(int i=1;i<=k;i++){
		cin>>x;
		p.push(x);
	}
	printf("%d\n",p.top());
	for(int i=k;i<n;i++){
		cin>>x;
		if(x<=p.top()){
			printf("%d\n",p.top());
		}else{
			p.push(x);
			p.pop();
			printf("%d\n",p.top());
		}
	}
	return 0;
}
```


<p></p>

## 出栈序列的合法性

<p>给定一个最大容量为 M 的堆栈，将 N 个数字按 1, 2, 3, ..., N 的顺序入栈，允许按任何顺序出栈，则哪些数字序列是不可能得到的？例如给定 M=5、N=7，则我们有可能得到{ 1, 2, 3, 4, 5, 6, 7 }，但不可能得到{ 3, 2, 1, 7, 5, 6, 4 }。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入第一行给出 3 个不超过 1000 的正整数：M（堆栈最大容量）、N（入栈元素个数）、K（待检查的出栈序列个数）。最后 K 行，每行给出 N 个数字的出栈序列。所有同行数字以空格间隔。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>对每一行出栈序列，如果其的确是有可能得到的合法序列，就在一行中输出<code>YES</code>，否则输出<code>NO</code>。</p>

<h3 id="输入样例：">样例："&gt;样例："&gt;样例："&gt;样例："&gt;样例："&gt;样例："&gt;样例："&gt;输入样例：</h3>


```cpp
5 7 5
1 2 3 4 5 6 7
3 2 1 7 5 6 4
7 6 5 4 3 2 1
5 6 4 3 7 2 1
1 7 6 5 4 3 2

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
YES
NO
NO
YES
NO
```


<p>思路：先把要检查的序列存起来，然后按1-n的顺序一个一个加入栈中，要检查序列下标从0开始，每加一次检查一下栈顶元素与要检查的序列的下标所表示的数是否相等，如果相等就把他pop出栈，下标右移，再检查pop后的栈顶元素与下标所指的是否一样，直到不一样，然后再往栈里加a后来的元素。当向栈里加数后要检查一下他是否大于容量m，如果大于则说明不能形成这个序列。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<stack>
using namespace std;

int main(){
	int m,n,k;
	stack<int> a[1005];
	int b[1005];
	scanf("%d%d%d",&m,&n,&k);
	for(int i=0;i<k;i++){//k次操作
		int flag=1;//标记是否大于容量
		int count =0;//检查下标从0开始
		for(int j=0;j<n;j++){//要检查的序列读入
			scanf("%d",&b[j]);
		}
		for(int j=1;j<=n;j++){//一次一次往栈里加元素
			a[i].push(j);
			if(a[i].size() >m)flag=0;//如果加后超过容量，则标记不能形成序列
			while(a[i].top() ==b[count]){//当栈顶元素等于要检查的下标时一直循环到不能再相等再往a里加元素
				count++;
				a[i].pop() ;
				if(a[i].size() ==0)break;
			} 
		}
		if(flag==0){
			printf("NO\n");
		}else{
			if(a[i].size() ==0){
				printf("YES\n");
			}else{
				printf("NO\n");
			}
		}
	}
	return 0;
}
```


<p> </p>

## 小a的刷题顺序

<p>小A是一个卷王，小A为了在Codeforces上干翻最高3900+的t宝，于是立了一个flag，要在一年之内刷完Codeforces上评分超过1600的所有题，虽然小A的学校大一不能带电脑，但是小A熬夜在网吧刷题！</p>

<p>但是codeforce上的题很多，如果要刷完的话，平均下来小A每天要刷20+题，每一题有最佳开始时间，部分题的最佳开始时间可能会有重叠,只有在最佳开始时间准时开始的题才能准时结束，每一题根据难度不同，其所消耗时间也不同，那么请问小A如何选择最佳写题顺序从而解决最多的题？</p>

<h2>输入格式</h2>

<p>第一行输入小A今天的刷题数目n(0&lt;n≤10000)n(0&lt;n≤10000)</p>

<p>接下来有nn行数,每一行的第一个数为该题的开始时间a_i,ai​,第二个数为该题的结束时间b_ibi​,其中ii的范围为(0≤i≤n)(0≤i≤n)</p>

<h2>输出格式</h2>

<p>第一行输出小A今天的最大刷题数量</p>

<p>第二行输出小A所能解决的题的序号,每到题的之间相隔一个空格</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>

<pre>
12
1 3
3 4
0 7
3 8
2 9
5 10
6 12
4 14
10 15
8 18
15 19
14 20</pre>

<p><strong>输出 #1</strong>复制</p>

<pre>
5 
0 1 5 8 10</pre>

<h2>说明/提示</h2>

<h2>注意事项</h2>

<ul><li>题的序号是从0开始</li>
</ul><h2>样例解释</h2>

<p>在样例中，样例有12个题的起始时间，题的序号从0开始，样例第一行输出为5，第二行为0 1 5 8 10 分别对应输入中的题的编号，对照输入的起始时间分别为1 3，3 4，5 10，10 15，15 19</p>

<p> 思路：贪心，自己拿纸模拟一下，对结束的时间排序，然后看结束的时间是否小于下一个的开始时间，如果小于就存起来总数++，如果大于就不合题意继续往下找，存的是题目编号所以我们要写一个结构体来存他的编号，开始时间结束时间，最后利用小根堆来输出存的题目编号即可。</p>

<p></p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<cmath>
#include<cstring>
#include<queue>
using namespace std;
int n;
struct name{
	int l,r,num;
};
bool cmp(name a,name b){
	return a.r <b.r ;
}
int main(){
	struct name a[10005];
	cin>>n;
	for(int i=0;i<n;i++){
		int x,y;
		cin>>x>>y;
		a[i].l =x;
		a[i].r =y;
		a[i].num =i;
	}
	sort(a,a+n,cmp);
	int con=0;
	priority_queue <int,vector<int> ,greater<int> >q;//用小根堆来存题目编号
	int e=0;//用e来存右边结束的时间，因为初始时间是0所以赋值0
	for(int i=0;i<n;i++){
		if(a[i].l >=e){//如果开始的时间大于上一个结束的时间
			con++;
			e=a[i].r ;//更新e
			q.push(a[i].num );//把下标存入 
		}
	}
	printf("%d\n",con);
	while(!q.empty() ){//当q不空时输出队头再删除队头
		printf("%d ",q.top() );
		q.pop() ;
	}
	return 0;
}
```


<p></p>

## 小猫排队（牛客）

<p>链接：<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.0.8/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M276" data-link-title="登录—专业IT笔试面试备考平台_牛客网" href="https://ac.nowcoder.com/acm/contest/11224/C" title="登录—专业IT笔试面试备考平台_牛客网">登录—专业IT笔试面试备考平台_牛客网</a><br />
来源：牛客网<br />
 </p>

<p>世界上最苦恼的事情莫过于排队了，特别是排在你前面的猫比你可爱的时候。----《论猫的自我修养》</p>

<p>小猫啾啾现在就很苦恼，它排在队伍的末尾处等着买酱油，前面还有足足 转存失败重新上传取消 只猫咪。但幸运的是小猫啾啾会一种魔法：它可以和前面距离它最近且比它可爱（可爱值大于啾啾）的小猫交换位置（被交换的小猫会被传送到啾啾之前的位置）。</p>

<p>已知啾啾每一分钟开始时可以施展一次魔法，而每一分钟过后排在队伍最前面的猫咪就会离开队伍（这意味这啾啾会先交换位置然后队伍才开始移动）。</p>

<p>因为等会还得去买饺子所以啾啾会尽可能地与自身前方比它可爱且未出队的小猫交换位置（可以证明交换后必定更快买到酱油），现在啾啾想请你帮它计算出它需要多久才能买到酱油离开。</p>

<h2>输入描述:</h2>

<pre>

</pre>

<p>第一行一个整数 转存失败重新上传取消 代表啾啾前方小猫的数量。</p>

<p>第二行 1个用空格隔开的整数代表从队伍最前方到队尾每只小猫的可爱值。</p>

<p>第三行一个整数代表啾啾的可爱值。</p>

<p></p>

<h2>输出描述:</h2>

<pre>

</pre>

<p>一行一个整数代表啾啾需要几分钟才能买到酱油离开队伍。</p>

<p>示例1</p>

<h2>输入</h2>

<p><a>复制</a>6 9 7 3 7 6 2 5</p>

<pre>
6
9 7 3 7 6 2
5</pre>

<h2>输出</h2>

<p><a>复制</a>4</p>

<pre>
4</pre>

<h2>说明</h2>

<pre>

</pre>

<p>用*表示啾啾的位置：</p>

<p>起始时：9 7 3 7 6 2 *（无人出队）</p>

<p>第一分钟时：7 3 7 * 2 6（9已出队）</p>

<p>第二分钟时：3 * 7 2 6（9 7已出队）</p>

<p>第三分钟时：* 7 2 6（9 7 3已出队）</p>

<p>第四分钟时：7 2 6（9 7 3 *已出队）</p>

<p>示例2</p>

<h2>输入</h2>

<p><a>复制</a>1 5 2</p>

<pre>
1
5
2</pre>

<h2>输出</h2>

<p><a>复制</a>1</p>

<pre>
1</pre>

<h2>说明</h2>

<pre>
第一分钟开始的时候啾啾就已经到了队首，所以在第一分钟结束时啾啾就会出队。</pre>

<p></p>

<p>思路：因为只能传输到比小猫可爱值大的小猫的位置，所以我们可以用栈来储存比小猫可爱值大的数的下标，每次传输的时候取栈顶元素再删除，因为每分钟也有队头的小猫出队，所以我们需要用一个数l来记录队头的小猫的下标，当队头的下标小于等于小猫所在位置的下标的时候说明他还没有出队，当他没有出队的时候我们需要判断他要交换的栈顶元素（大于可爱值的下标）是否大于等于l，如果大于等于说明他前面可爱值比他大的小猫还没有出队，可以交换，（注意，等于的情况是队头的小猫可爱值恰好大于指定数值，根据题意是先交换再出队，所以等于情况也满足）交换过后l++，操作步数++，最后输出操作步数即可。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<stack>
using namespace std;
stack<int> st;
const int N=2e5;
int a[N];
int main(){
	int n;
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
	}
	int p;
	scanf("%d",&p);
	for(int i=1;i<=n;i++){
		if(a[i]>p){
			st.push(i); 
		}
	}
	int l=1,idx=n+1,con=0;//小猫前有n个猫，所以他在n+1的位置
	    do{
        if (!st.empty() && st.top() >= l){//如果栈不空且可爱值大于我们小猫的下标大于等于队头小猫的下标时
            idx= st.top();
            st.pop();
        }
        l++, con++;
    } while (l <= idx);//当队头小猫的下标小于我们的小猫所在的位置（我们小猫还没有出队时
	printf("%d",con);
	return 0;
}
```


<p></p>

## 只有一端开口的瓶子（stl）

<p>思路：最多用两个栈就可以完成排序，那么我们每次在栈中加入一个数的时候只需要判断栈顶元素与我们想要的元素一样不一样，如果一样就拿走继续判断拿走后的栈顶元素与我们想要的下一个数一样不一样，如果到最后栈不空那么久说明要用两个栈来完成了。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<stack>
using namespace std;
const int N=100005;

int n,x;
void sove(){
	cin>>n;
	stack<int> s;
	int p=1;
	for(int i=0;i<n;i++){
		cin>>x;
		s.push(x);
		while(s.size()&&s.top()==p){
			p++;
			s.pop();
		}
	}
	if(s.size()){
		printf("2\n");
	}else printf("1\n");
}
int main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

## 列车调度。

<p>火车站的列车调度铁轨的结构如下图所示。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/a5b9c28372da13f7a862a00a6799b0bb.png" /></p>

<p>两端分别是一条入口（Entrance）轨道和一条出口（Exit）轨道，它们之间有<code>N</code>条平行的轨道。每趟列车从入口可以选择任意一条轨道进入，最后从出口离开。在图中有9趟列车，在入口处按照{8，4，2，5，3，9，1，6，7}的顺序排队等待进入。如果要求它们必须按序号递减的顺序从出口离开，则至少需要多少条平行铁轨用于调度？</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入第一行给出一个整数<code>N</code> (2 ≤ <code>N</code> ≤105)，下一行给出从1到<code>N</code>的整数序号的一个重排列。数字间以空格分隔。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>在一行中输出可以将输入的列车按序号递减的顺序调离所需要的最少的铁轨条数。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
9
8 4 2 5 3 9 1 6 7

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
4
```


<p>思路：因为数是按输入的顺序出去的，所以我们保存的时候用队列保存，然后我们来模拟一下过程。</p>

<p>当8出去的时候，因为没有路，所以我们要加一个1路放8.</p>

<p>当4出去的时候，已经有一个1路，而且恰好1路里最外面的8比4大，所以我们把4放到1路里</p>

<p>当2出去的时候，已经有一个1路，而且恰好1路里最外面的4比2大，所以我们把2放到1路里</p>

<p>当5出去的时候，有1路，但是1路最外面的数是2，比5小，我们需要的是按从大到小的顺序，所以不能把5加到1路后面，就再开一个2路放5</p>

<p>当3出去的时候，有1.2两条路，但是只有2路最外面放的5比3大，所以我们把3放入2路</p>

<p>当9出去的时候，有1.2两条路，但是最外面没有比9大的数，所以我们再开一条3路放9</p>

<p>当1出去的时候，有1.2.3三条路最外面的数2,3,9都比1大，但是我们要找距离1最近的比1大的数，所以我们把1放进1路</p>

<p>当6出去的时候，有1.2.3三条路，最外面的数分别为1,3,9，只有3路的9比6大，所以我们把6放入9</p>

<p>当7出去的时候，有1.2.3三条路，但是最外面分别是1.3.6，没有比7大的数，所以我们需要再开一条路4来放7</p>

<p>综上所述，开了4条路，且最后的情况如下：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/e51a0dc68c5b4d64b486fe6b2ea2fd14.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBARGVtby5v,size_20,color_FFFFFF,t_70,g_se,x_16" /></p>

<p> 过程模拟明白了，我们下一步想如何实现。</p>

<p>我们在取队头元素来判断的时候，只需要知道已知路中最外面的数。如果一个路里加入了新的数，那么对以后的判断只有新的这个数有用，这个新的数前面的数没有用。</p>

<p>我们可以开一个vector数组，数组中每个元素存的数就是每条路最外面的数，每次加入一个数的时候用lower_bound函数查找有没有比他大的数，也就是找有没有路的最外面的数比他大，如果有的话，我们就把他用新加的这个数替换掉，（因为只有新加的最外面的数有用）如果没有比他大的就把他加进数组中，最后数组的长度就是我们要求的道路的条数。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<vector>
#include<queue>
using namespace std;
queue<int> a;//存数组
vector<int> b;//存每条道路最外面的数
int n;
int main(){
	cin>>n;
	while(n--){
		int x;
		cin>>x;
		a.push(x); 
	}
	while(a.size() ){
		int t=a.front() ;//取队头
		a.pop() ;
		if(b.size() ==0){//如果没有道路，我们先开一个道路存他
			b.push_back(t); 
		}else{
			if(lower_bound(b.begin() ,b.end() ,t)!=b.end() ){//如果在道路里能找到比他大的数
				int q=lower_bound(b.begin() ,b.end() ,t)-b.begin() ;
				b[q]=t;//就把道路最外面的数替换成这个新数
			}else{
				b.push_back(t);  //否则的话再开一条路
			}
		}
	}
	printf("%d",b.size() );
	return 0;
}
```


<p></p>

<p></p>

## c++的stl总结

<ol><li style="text-align:left;">#include&lt;vector&gt;</li>
</ol><p style="margin-left:0;text-align:left;">vector是一个长度动态变化的函数</p>

<p style="margin-left:0;text-align:left;">vector&lt;int&gt;a 是一个长度动态变化的int类型数组</p>

<p style="margin-left:0;text-align:left;">vector&lt;int&gt;b[233] 相当于一个第一维长度233，第二维长度动态变化的int数组</p>

<p style="margin-left:0;text-align:left;">也可以创建一个结构体REC，然后用vector&lt;REC&gt;c 结构体长度动态变化</p>

<p style="margin-left:0;text-align:left;">a.size（）可以求出a数组的长度</p>

<p style="margin-left:0;text-align:left;">b.empty( ) 判断b数组是不是空的，如果是返回TRUE，不是空的返回FALSE。</p>

<p style="margin-left:0;text-align:left;">a.clear( ) 删除a数组里的所有元素。</p>

<p style="margin-left:0;text-align:left;">迭代器：相当于指针 引用： vector&lt;int&gt;::iterator p ;要用指针所指的数，用*号引用，如输出p所指的数：*p</p>

<p style="margin-left:0;text-align:left;">a.begin( ) 指的是数组a的起始位置的地址</p>

<p style="margin-left:0;text-align:left;">a.end( ) 指的是数组a的最后一位元素的下一位的地址</p>

<p style="margin-left:0;text-align:left;">初始化a：vector&lt;int&gt;a({1,2,3});</p>

<p style="margin-left:0;text-align:left;">遍历a：for(i=0;i&lt;a.size();i++)</p>

<p style="margin-left:0;text-align:left;">Vector&lt;int&gt;::iterator it;</p>

<p style="margin-left:0;text-align:left;">for(it=a.begin();it!=a.end();it++)cout&lt;&lt;*it;</p>

<p style="margin-left:0;text-align:left;">a.front( ) 指的是a的第一个元素</p>

<p style="margin-left:0;text-align:left;">a.back( ) 指的是a的最后一个元素</p>

<p style="margin-left:0;text-align:left;">auto 的作用是让编译器自己判断类型</p>

<p style="margin-left:0;text-align:left;">a.push_back( 4) 是往a数组的最后边加一个元素4</p>

<p style="margin-left:0;text-align:left;">a.pop_back( ) 是删除a数组的最后一个元素</p>

<p style="margin-left:.0001pt;text-align:left;">2.#include&lt;queue&gt;</p>

<p style="margin-left:0;text-align:left;">包括循环队列queue和优先队列priority_queue两个容器</p>

<p style="margin-left:0;text-align:left;">queue是先进先出，priority_queue是先出最大的数</p>

<p style="margin-left:0;text-align:left;">在头文件#include&lt;queue&gt;里</p>

<p style="margin-left:0;text-align:left;">定义：queue&lt;int&gt;q; &lt;&gt;里可以更改类型如double或者结构体名称//队列</p>

<p style="margin-left:0;text-align:left;">priority_queue&lt;int&gt; q; 默认的是大根堆//先出的是大的数</p>

<p style="margin-left:0;text-align:left;">priority_queue&lt;int,vector&lt;int&gt;,greater&lt;int&gt; &gt; b;是小根堆//先出的是小的数</p>

<p style="margin-left:0;text-align:left;">对队列</p>

<p style="margin-left:0;text-align:left;">queue：q.push(1) 在队尾插入1；</p>

<p style="margin-left:0;text-align:left;">q.pop( ) 弹出队头元素//删除队头元素</p>

<p style="margin-left:0;text-align:left;">只能从队头插入，从队尾弹出</p>

<p style="margin-left:0;text-align:left;">q.front( )返回队头元素</p>

<p style="margin-left:0;text-align:left;">q.back( ) 返回队尾元素</p>

<p style="margin-left:0;text-align:left;">对优先队列priority_queue:</p>

<ol><li style="text-align:left;">push(1) 插入一个元素（不按顺序）</li>
</ol><p style="margin-left:0;text-align:left;">优先队列其实就是自己排序把大的排在前面</p>

<p style="margin-left:0;text-align:left;">a.top( )取最大值//队头元素</p>

<p style="margin-left:0;text-align:left;">a.pop( )删除最大值//删除队头</p>

<p style="margin-left:0;text-align:left;">遍历队列：</p>

<p style="margin-left:0;text-align:left;">当a不空时，输出队头然后删除队头</p>

<p style="margin-left:0;text-align:left;">While（!a.empty( )）{</p>

<p style="margin-left:0;text-align:left;">Printf(“%d ”,a.front( ));</p>

<p style="margin-left:0;text-align:left;">a.pop( );</p>

<p style="margin-left:0;text-align:left;">}</p>

<p style="margin-left:.0001pt;text-align:left;">3.#include&lt;stack&gt;</p>

<p style="margin-left:0;text-align:left;">栈，先进后出 （吃薯片，最开始装入的最后吃，一端开口的数据结构）</p>

<p style="margin-left:0;text-align:left;">定义：stack&lt;int&gt; a;</p>

<p style="margin-left:0;text-align:left;">a.push(1) 插入一个元素</p>

<p style="margin-left:0;text-align:left;">a.top( )返回栈顶元素//最后一个插入的元素叫栈顶元素</p>

<p style="margin-left:0;text-align:left;">a.pop( ) 删除栈顶元素</p>

<p style="margin-left:.0001pt;text-align:left;">4.#include&lt;deque&gt;</p>

<p style="margin-left:0;text-align:left;">双端队列，可以在队头队尾插入删除</p>

<p style="margin-left:0;text-align:left;">定义：deque&lt;int&gt; a;</p>

<p style="margin-left:0;text-align:left;">a.begin( ) a的首个元素地址</p>

<p style="margin-left:0;text-align:left;">a.end( )a的最后一个元素的下一位的地址</p>

<p style="margin-left:0;text-align:left;">a.back( )a的最后一个元素</p>

<p style="margin-left:0;text-align:left;">a.front( )a的第一个元素</p>

<p style="margin-left:0;text-align:left;">a.push_back(1)往a最后面插入一个1</p>

<p style="margin-left:0;text-align:left;">a.push_front(2)在a的最前面插入一个2</p>

<p style="margin-left:0;text-align:left;">a.pop_back( )删除最后一个元素</p>

<p style="margin-left:0;text-align:left;">a.pop_front( )删除第一个元素</p>

<p style="margin-left:0;text-align:left;">a.clear（）清除一个队列</p>

<p style="margin-left:0;text-align:left;">#include&lt;set&gt;</p>

<p style="margin-left:0;text-align:left;">定义：set&lt;int&gt; a;//不包含重复元素,而且按从小到大排序</p>

<p style="margin-left:0;text-align:left;">multiset&lt;int&gt; a;//可以包含重复元素</p>

<p style="margin-left:0;text-align:left;">函数： a.size( )返回长度</p>

<p style="margin-left:0;text-align:left;">a.empty( )是否为空</p>

<p style="margin-left:0;text-align:left;">a.clear( )清除队列</p>

<p style="margin-left:0;text-align:left;">a.end( )返回最后一个元素的后一个位置</p>

<p style="margin-left:0;text-align:left;">a.insert(1 )表示插入一个元素1</p>

<p style="margin-left:0;text-align:left;">a.find( 2)表示查找一个元素2，返回的是元素2的迭代器（指针），如果数组中没有这个元素则返回a.end( )</p>

<p style="margin-left:0;text-align:left;">If(a.find(x)==a.end())判断x在a中是否存在</p>

<ol><li style="text-align:left;">lower_bound( x)找到大于等于x的最小迭代器</li>
</ol><ol><li style="text-align:left;">upper_bound(x)找到大于x的最小元素的迭代器</li>
</ol><p style="margin-left:0;text-align:left;">s.erase(it)把it这个迭代器指向的元素删掉</p>

<p style="margin-left:0;text-align:left;">s.erase(x)把容器中所有等于x的数都删掉</p>

<p style="margin-left:0;text-align:left;">a.count (x) 表示x在a里的个数（因为set不存重复元素，所以存在x就返回1，不存在就返回0，multiset则返回个数）</p>

<p style="margin-left:0;text-align:left;">#include&lt;map&gt;</p>

<p style="margin-left:0;text-align:left;">定义：映射数组//前面的映射出后面的，就是输出后面的</p>

<p style="margin-left:0;text-align:left;">如果存数组那么按字典序递增的方式储存</p>

<p style="margin-left:0;text-align:left;">map&lt;int,int&gt; a;</p>

<p style="margin-left:0;text-align:left;">a[1]=2;</p>

<p style="margin-left:0;text-align:left;">a[1000000]=3;</p>

<p style="margin-left:0;text-align:left;">Printf(“%d”,a[10000000])---输出3</p>

<p style="margin-left:0;text-align:left;">&lt;&gt;里面的两个类型可以自己定义，比如字符串和数字：</p>

<p style="margin-left:0;text-align:left;">map&lt;string,int&gt; a;</p>

<p style="margin-left:0;text-align:left;">a[“zxh”]=2;</p>

<p style="margin-left:0;text-align:left;">Printf(“%d”,a[“zxh”])--输出2</p>

<p style="margin-left:0;text-align:left;">也可以定义字符串和vector数组：</p>

<p style="margin-left:0;text-align:left;">map&lt;string,vector&lt;int&gt; &gt; a;</p>

<p style="margin-left:0;text-align:left;">a[“zxh”]=({2,5,4,3});</p>

<p style="margin-left:0;text-align:left;">Printf(“%d”,a[“zxh”][2])--输出5（vector的第二个元素）</p>

<p style="margin-left:0;text-align:left;">函数：a.size( )</p>

<ol><li style="text-align:left;">empty( );</li>
</ol><ol><li style="text-align:left;">clear( );</li>
</ol><ol><li style="text-align:left;">begin( );</li>
</ol><ol><li style="text-align:left;">end( );</li>
</ol><ol><li style="text-align:left;">insert()插入一个二元组：a.insert({“a”,{5}})</li>
</ol><p style="margin-left:0;text-align:left;">输入字符串然后来记录他出现的次数的话用</p>

<p style="margin-left:0;text-align:left;">Map&lt;string,int&gt; a;</p>

<p style="margin-left:0;text-align:left;">String x;</p>

<p style="margin-left:0;text-align:left;">Cin&lt;&lt;x;</p>

<p style="margin-left:0;text-align:left;">A[x]++;</p>

<p style="margin-left:0;text-align:left;">遍历map：使用迭代器map&lt;string,string&gt; ::iterator it;</p>

<p style="margin-left:0;text-align:left;">map&lt;string,int&gt; a;</p>

<p style="margin-left:0;text-align:left;">map&lt;string,int&gt;::iterator it;</p>

<p style="margin-left:0;text-align:left;">int n;</p>

<p style="margin-left:0;text-align:left;">scanf("%d",&amp;n);</p>

<p style="margin-left:0;text-align:left;">for(int i=0;i&lt;n;i++){</p>

<p style="margin-left:0;text-align:left;">string s;</p>

<p style="margin-left:0;text-align:left;">cin&gt;&gt;s;</p>

<p style="margin-left:0;text-align:left;">a[s]++;</p>

<p style="margin-left:0;text-align:left;">}</p>

<p style="margin-left:0;text-align:left;">for(it=a.begin();it!=a.end();it++){</p>

<p style="margin-left:0;text-align:left;">cout&lt;&lt;it-&gt;first&lt;&lt;' '&lt;&lt;it-&gt;second&lt;&lt;endl;</p>

<p style="margin-left:0;text-align:left;">}</p>

<p style="margin-left:0;text-align:left;"></p>

<p style="margin-left:0;text-align:left;"></p>

<ol><li style="text-align:left;">#include&lt;algorithm&gt;</li>
</ol><p style="margin-left:.0001pt;text-align:justify;">reserve函数：用来逆序数组或vector数组。reserve(a.begin(),a+a.size())或reserve(a,a+n),n是数组a的元素个数.（参数是数组的首地址和最后地址的下一位）</p>

<p style="margin-left:.0001pt;text-align:justify;">unique函数：用来去除数组里的重复元素。必须要在去重之前排序，因为他删除的是相邻重复的元素unique(a,a+n)或unique(a.begin(),a.end())（要求是重复元素必须挨在一起）。有返回值，是去重之后数组最后元素的下一位地址。所以返回值减去a的首地址得到数组不同元素的个数。（参数是数组的首地址和最后地址的下一位）</p>

<p style="margin-left:.0001pt;text-align:justify;">random_shuffle函数：用来打乱数组中元素的顺序。random_shuffle（a.begin(),a.end()）（参数是数组的首地址和最后地址的下一位）</p>

<p style="margin-left:.0001pt;text-align:justify;">sort函数：用来排序数组（从小到大）。sort(a.begin(),a.end())或sort(a,a+n).（参数是数组的首地址和最后地址的下一位）.如果想从大到小排序用sort(a.begin(),a.end(),greater&lt;int&gt;()).</p>

<p style="margin-left:.0001pt;text-align:justify;">Sort的参数是数组的首位地址，末尾元素的下一位地址，和对应法则</p>

<p style="margin-left:.0001pt;text-align:justify;">Sort(a,a+n,cmp)</p>

<p style="margin-left:.0001pt;text-align:justify;">当对结构体里的东西排序时用cmp来写准则</p>

<p style="margin-left:.0001pt;text-align:justify;">#include&lt;iostream&gt;</p>

<p style="margin-left:.0001pt;text-align:justify;">#include&lt;algorithm&gt;</p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;">using namespace std;</p>

<p style="margin-left:.0001pt;text-align:justify;">struct name{</p>

<p style="margin-left:.0001pt;text-align:justify;">string st;</p>

<p style="margin-left:.0001pt;text-align:justify;">int s;</p>

<p style="margin-left:.0001pt;text-align:justify;">};</p>

<p style="margin-left:.0001pt;text-align:justify;">bool cmp(name a,name b){</p>

<p style="margin-left:.0001pt;text-align:justify;">return a.s &gt;b.s ;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">int main(){</p>

<p style="margin-left:.0001pt;text-align:justify;">int n;</p>

<p style="margin-left:.0001pt;text-align:justify;">scanf("%d",&amp;n);</p>

<p style="margin-left:.0001pt;text-align:justify;">struct name a[400];</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;n;i++){</p>

<p style="margin-left:.0001pt;text-align:justify;">cin&gt;&gt;a[i].st &gt;&gt;a[i].s ;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">sort(a,a+n,cmp);</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;n;i++){</p>

<p style="margin-left:.0001pt;text-align:justify;">cout&lt;&lt;a[i].st &lt;&lt;' '&lt;&lt;a[i].s &lt;&lt;endl;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;">return 0;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">对字符串排序（按字典序输出最大）：</p>

<p style="margin-left:.0001pt;text-align:justify;">bool cmp(string a,string b){</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;a[i]&amp;&amp;b[i];i++){</p>

<p style="margin-left:.0001pt;text-align:justify;">if(a[i]&gt;b[i])return 1;</p>

<p style="margin-left:.0001pt;text-align:justify;">if(a[i]&lt;b[i])return 0;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">string s1=a+b;</p>

<p style="margin-left:.0001pt;text-align:justify;">string s2=b+a;</p>

<p style="margin-left:.0001pt;text-align:justify;">return s1&gt;s2;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">string s[100];</p>

<p style="margin-left:.0001pt;text-align:justify;">int n;</p>

<p style="margin-left:.0001pt;text-align:justify;">scanf("%d",&amp;n);</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;n;i++){</p>

<p style="margin-left:.0001pt;text-align:justify;">cin&gt;&gt;s[i];</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">sort(s,s+n,cmp);</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;n;i++)cout&lt;&lt;s[i];</p>

<p style="margin-left:.0001pt;text-align:justify;">全排列函数：</p>

<p style="margin-left:.0001pt;text-align:justify;">在用之前要先排序</p>

<p style="margin-left:.0001pt;text-align:justify;">next_permutation实现升序；prev_permutation实现降序</p>

<p style="margin-left:.0001pt;text-align:justify;">拿升序举例：（降序就把next换成prev就可）</p>

<p style="margin-left:.0001pt;text-align:justify;">对整数数组：int a[4]={1,2,3,4};</p>

<p style="margin-left:.0001pt;text-align:justify;">Sort(a,a+4);</p>

<p style="margin-left:.0001pt;text-align:justify;">do{</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;4;i++)printf(“%d  ”,a[i]);</p>

<p style="margin-left:.0001pt;text-align:justify;">Printf(“\n”);</p>

<p style="margin-left:.0001pt;text-align:justify;">}while(next_permutation(a,a+4));</p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;">对字符串全排列：string st;</p>

<p style="margin-left:.0001pt;text-align:justify;">cin&gt;&gt;st;</p>

<p style="margin-left:.0001pt;text-align:justify;">sort(st.begin(),st.end());</p>

<p style="margin-left:.0001pt;text-align:justify;">do{</p>

<p style="margin-left:.0001pt;text-align:justify;">cout&lt;&lt;st&lt;&lt;endl;</p>

<p style="margin-left:.0001pt;text-align:justify;">}while(next_permutation(st.begin(),st.end()));</p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;">算出集合{1,2，...m}的第n个排列：</p>

<p style="margin-left:.0001pt;text-align:justify;">比如算出{1,2,3,4,5,6,7}的第n=1654个排列：</p>

<p style="margin-left:.0001pt;text-align:justify;">int a[7]={1,2,3,4,5,6,7};</p>

<p style="margin-left:.0001pt;text-align:justify;">sort(a,a+7);</p>

<p style="margin-left:.0001pt;text-align:justify;">int n=1;</p>

<p style="margin-left:.0001pt;text-align:justify;">do{</p>

<p style="margin-left:.0001pt;text-align:justify;">if(n==1654){</p>

<p style="margin-left:.0001pt;text-align:justify;">for(int i=0;i&lt;7;i++)printf("%d",a[i]);</p>

<p style="margin-left:.0001pt;text-align:justify;">printf("\n");</p>

<p style="margin-left:.0001pt;text-align:justify;">break;</p>

<p style="margin-left:.0001pt;text-align:justify;">}</p>

<p style="margin-left:.0001pt;text-align:justify;">n++;</p>

<p style="margin-left:.0001pt;text-align:justify;">}while(next_permutation(a,a+7));</p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;"></p>

<p style="margin-left:.0001pt;text-align:justify;">lower_bound函数：返回大于等于x的最小迭代器（指针）</p>

<p style="margin-left:.0001pt;text-align:justify;">在头文件&lt;algorithm&gt;里；</p>

<p style="margin-left:.0001pt;text-align:justify;">用法：lower_bound(a.begin( ),a.end( ),x)//查找x</p>

<p style="margin-left:.0001pt;text-align:justify;">如果返回end（），就是没有，要是想查vector数组的下标，</p>

<p style="margin-left:.0001pt;text-align:justify;">Lower_bound(a.begin( ),a.end( ),x)-a.begin( )就是数组的下标</p>

<p style="margin-left:.0001pt;text-align:justify;">upper_bound函数：返回大于x的最小迭代器（指针）用法同上</p>

