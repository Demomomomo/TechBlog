---
title: 字符串

category:
  - algorithm

tag:
  - 字符串
---


## A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛）

<p><br /><strong>柳庭风静人眠昼，昼眠人静风庭柳。香汗薄衫凉，凉衫薄汗香。</strong><br /><br /><strong>手红冰碗藕，藕碗冰红手。郎笑藕丝长，长丝藕笑郎。</strong><br /><br />
给出一个序列 ana_nan​，对于 iii，求有几个数 jjj 满足：<br /><br />
111 、i≤ji \le ji≤j<br /><br />
222 、子串 ai∼ja_{i\sim j}ai∼j​ 是一个回文串<br /><br />
回文串定义：当序列 ana_nan​ 满足，对任意 1≤i≤n1\le i\le n1≤i≤n，ai=an−i+1a_i=a_{n-i+1}ai​=an−i+1​ 成立。</p>

<p>思路：这个时候就用到了一个算法：manacher算法（不会的看一下别的dalao的博客学习一下）</p>

<p>这个算法的作用是找字符串的最大回文串的长度，我们在算的过程中会算出一个len数组，他表示以下标为i的字符为中心的最大回文串的最右端的字符所在的位置到i有几个字符（包括i和最右端的字符），当我们每次遍历字符串的时候，我们找到以i为下标的最大长度的回文串的最左边，也就是下标为i-len[i]+1的位置，然后到i这个区间是回文串的左边，这个区间的每个数到和其i对称的坐标的地方都能构成一个回文串，而题目要求是以最左边为回文串的开头，所以我们把构成回文串的左边，也就是i+len[i]-1——i这个区间的所有的坐标上的字符能构成的回文串数量都加1，这时候我们就用到了差分数组，创建一个b数组作为差分数组，在b[i-len[i]+1]处+1，在b[i+1]-1,（即l=i-len[i]+1，r=i），最后通过算出b数组的前缀合就能算出每个位置以自己为首字母的回文串的数量了。</p>


```cpp
#include <iostream>
#include<cstring>
#include<algorithm>
#include<cmath>
using namespace std;
const int N=3e6+10;//记得数开大点，否则会有边界问题
int a[N],b[N],len[N];//a是修改之后的数组，b是以i为首字母的回文串的个数的差分数组，len是回文串长度数组
int n,x;
int main(){
	cin>>n;
	a[0]=0;
	for(int i=1;i<=n;i++){
		cin>>x;
		a[i*2-1]=-1;
		a[i*2]=x;
	}
	a[n*2+1]=-2;
	int mx=0,po=0;//mx表示目前找到的最大回文串的最右端的字符的下标，po是这个最大回文串的中间字符串的下标
	for(int i=1;i<=2*n;i++){
		if(i<mx){
			len[i]=min(len[2*po-i],mx-i);
		}else len[i]=1;
		while(a[i+len[i]]==a[i-len[i]])len[i]++;//更新len[i]
		b[i-len[i]+1]++;
		b[i+1]--;
		if(mx<i+len[i]){
			mx=i+len[i];
			po=i;
		}
		
	}
	for(int i=1;i<=2*n;i++){
		b[i]+=b[i-1];
		if(i%2==0){
			printf("%d ",b[i]);
		}
	}
	return 0;
}
```


<p></p>

## 字母子集合

<p>输入一个正整数n（n&lt;=26），利用二进制法输出字母表（A-Z）前n个字母所构成的所有子集合，包括空集。</p>

<h3 id="输入格式">输入格式:</h3>

<p>一个正整数n（n&lt;=26）。</p>

<h3 id="输出格式">输出格式:</h3>

<p>输出前n个字母组成的所有子集合，每个子集合用一对大括号包含在内。每个字母之间，以及字母与大括号之间都有一个空格，最右边大括号后面没有空格。空集表示为：一对大括号中间一个空格。</p>

<h3 id="输入样例">样例"&gt;样例"&gt;样例"&gt;样例"&gt;样例"&gt;样例"&gt;样例"&gt;样例"&gt;样例"&gt;输入样例:</h3>


```cpp
3

```


<h3 id="输出样例">输出样例:</h3>


```cpp
{ }
{ A }
{ B }
{ A B }
{ C }
{ A C }
{ B C }
{ A B C }
```


<p>可以用2进制法进行处理，子集是{0,1,2,3....2^n-1}如果输入的数据为n，那么枚举的范围就是0-2^n-1，当我们从0开始枚举整个子集，把枚举的i化为2进制的数，然后从他的最低位到最高位开始遍历这个二进制数，如果是1就是选了这个数，如果是0表示没有选这个数，从最低位到最高位分别表示ABCD...如果是一就输出相应的字母。例如：</p>

<p>1： 二进制：1，只选了A；</p>

<p>2： 二进制：10，只选了B</p>

<p>3： 二进制：11，选了AB；</p>

<p>4： 二进制：100，只选了C；</p>

<p>...</p>

<p>7：二进制：111，选了ABC；</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<vector>
using namespace std;
int n;
int main(){
	cin>>n;
	int con=pow(2,n);
	for(int i=0;i<con;i++){
		if(i==0){
			printf("{ }\n");
		}else{
			vector<int> a;
			int p=i;
			while(p!=0){
				a.push_back(p%2);
				p/=2;
			}
			printf("{");
			for(int j=0;j<a.size();j++){
				if(a[j]!=0){
					char op=j+'A';
					printf(" %c",op);
				}
			}
			printf(" }\n");
		}
	}
	return 0;
}

```


<p></p>

## 生命游戏（试玩版）

<p>英国数学家约翰·康威在1970年设计了一种称为<strong>生命游戏</strong>（Game of Life）的<strong>细胞自动机</strong>。</p>

<p>生命游戏的<em>世界</em>是个二维的细胞网格，每个细胞（格子）有<strong>存活、死亡</strong>两种状态，各有8个邻居。由当前状态演化下一代的规则是：</p>

<ul><li>如果<strong>活</strong>细胞周围有2或3个活细胞，那么在下一代存活，否则死亡（邻居过少则孤独、过多则资源匮乏）。</li>
	<li>如果<strong>死</strong>细胞周围有3个活细胞，那么在下一代将创生（繁殖）。</li>
</ul><p>这两条规则虽然机械，却能演化出类似生命的现象，出现很多有趣的模式。参考这个网站：<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.0.8/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M276" data-link-title="Play John Conway’s Game of Life" href="https://playgameoflife.com/" title="Play John Conway’s Game of Life">Play John Conway’s Game of Life</a></p>

<p>我们来模拟下生命游戏的演化。模拟时要符合细胞自动机的三个特性：</p>

<ul><li>并行性：每一代中，所有细胞同时演化。</li>
	<li>局部性：下代细胞状态由当代的局部环境决定。</li>
	<li>一致性：所有细胞遵循相同的演化规则。</li>
</ul><p>输入规格</p>

<ul><li>输入有多组数据，处理到EOF为止。</li>
	<li>每组数据包括：
	<ul><li>首行有3个非负整数：行数R、列数C、演化代数G。</li>
		<li>之后有R行字符串、每行C个字符。<code>.</code>代表死细胞，<code>#</code>代表活细胞。</li>
	</ul></li>
	<li>网格尺寸R、C不超过256，迭代G不超过100，这次不考察时空复杂性。</li>
	<li>网格边界以外视为死亡细胞。</li>
</ul><p>输出规格</p>

<ul><li>对每组数据，演化G代后输出状态。格式与输入规格相同。</li>
</ul><p>样例输入</p>


```cpp
3 4 1
.#..
####
#...

```


<p>样例输出</p>


```cpp
3 4 1
##..
#.#.
#.#.
```


<p> 思路：输入图（注意输入的时候用cin，本题输入量不大而且测试点会有多个空格的情况，cin能跳过空格读取字符），然后遍历g遍每个位置，看他的周围八个字符有几个#，再开一个二维字符数组按照题意把变化之后的图存入，每次遍历完记得更新一下原图</p>


```cpp
#include<iostream>
#include<algorithm>
using namespace std;
const int N=260;
char g[N][N];
char ans[N][N];
int n,m,q;
int dfs(int x,int y){
	int con=0;
	for(int i=-1;i<=1;i++){
		for(int j=-1;j<=1;j++){
			int x1=x+i;
			int y1=y+j;
			if(x1>=0&&x1<n&&y1>=0&&y1<m&&g[x1][y1]=='#'){
				con++;
			}
		}
	}	
	if(g[x][y]=='#')con--;
	return con;
	
}
void test(){
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			int t=dfs(i,j);
			if(g[i][j]=='#'){
				if(t==2||t==3){
					ans[i][j]='#';
				}else ans[i][j]='.';
			}else{
				if(t==3)ans[i][j]='#';
				else ans[i][j]='.';
			}
		}
	}
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			g[i][j]=ans[i][j];
		}
	}
	
}
void sove(){
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			cin>>g[i][j];
		}
	}
	for(int i=0;i<q;i++){
		test();
	}
	printf("%d %d %d\n",n,m,q);
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			printf("%c",g[i][j]);
		}
		printf("\n");
	}
}
int main(){
	while(scanf("%d%d%d",&n,&m,&q)!=EOF){
		sove();
	}
	return 0;
}
```


<p></p>

## 倒数第N个字符串

<p>给定一个完全由小写英文字母组成的字符串等差递增序列，该序列中的每个字符串的长度固定为 L，从 L 个 a 开始，以 1 为步长递增。例如当 L 为 3 时，序列为 { aaa, aab, aac, ..., aaz, aba, abb, ..., abz, ..., zzz }。这个序列的倒数第27个字符串就是 zyz。对于任意给定的 L，本题要求你给出对应序列倒数第 N 个字符串。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在一行中给出两个正整数 L（2 ≤ L ≤ 6）和 N（≤105）。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>在一行中输出对应序列倒数第 N 个字符串。题目保证这个字符串是存在的。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
3 7417

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
pat
```


<p> 思路：可以把每一位所表示的字母看做26进制，l个z用十进制表示是pow（26，l），因为是倒数第n个数，所以我们要算表示他的十进制要pow（26，l）-n，然后把他每一位转化成26进制+‘a’就可以了</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
using namespace std;
char a[26];
int main(){
	long long l,n;
	scanf("%lld%lld",&l,&n);
	long long num=pow(26,l)-n;//这个数的十进制表示
	for(int i=l-1;i>=0;i--){//因为先算出的是最低位26进制数，所以要倒着存
		a[i]=num%26+'a';
		num/=26;
	}
	for(int i=0;i<l;i++){
		printf("%c",a[i]);
	}
	return 0;
}
```


<p></p>

## L1-025 正整数A+B

<p>题的目标很简单，就是求两个正整数<code>A</code>和<code>B</code>的和，其中<code>A</code>和<code>B</code>都在区间[1,1000]。稍微有点麻烦的是，输入并不保证是两个正整数。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在一行给出<code>A</code>和<code>B</code>，其间以空格分开。问题是<code>A</code>和<code>B</code>不一定是满足要求的正整数，有时候可能是超出范围的数字、负数、带小数点的实数、甚至是一堆乱码。</p>

<p>注意：我们把输入中出现的第1个空格认为是<code>A</code>和<code>B</code>的分隔。题目保证至少存在一个空格，并且<code>B</code>不是一个空字符串。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>如果输入的确是两个正整数，则按格式<code>A + B = 和</code>输出。如果某个输入不合要求，则在相应位置输出<code>?</code>，显然此时和也是<code>?</code>。</p>

<h3 id="输入样例1：">样例1："&gt;输入样例1：</h3>


```cpp
123 456

```


<h3 id="输出样例1：">输出样例1：</h3>


```cpp
123 + 456 = 579

```


<h3 id="输入样例2：">输入样例2：</h3>


```cpp
22. 18

```


<h3 id="输出样例2：">输出样例2：</h3>


```cpp
? + 18 = ?

```


<h3 id="输入样例3：">输入样例3：</h3>


```cpp
-100 blabla bla...33

```


<h3 id="输出样例3：">输出样例3：</h3>


```cpp
? + ? = ?
```


<p>思路：这题的重点就是当第一个空格出现的时候是a和b的分界线，所以从第一个空格的下一个字符往后都是b，首先找出第一个空格的下标i，然后建立两个字符串s1s2，遍历字符串，如果遍历的字符是数字就存入s1，如果不是，标记一下a不合法，同样的方法遍历i之后的字符存入s2，判断ab是否合法，如果合法的话用stoi函数把他变为整数即可（stoi函数在头文件cstring里，作用是把字符串变为整数，详细用法见我的一篇文章<a data-link-desc="前置条件：#include&amp;lt;string&amp;gt;string q=s.substr(k);把从s的下标为k的字符开始一直到结尾string sub2 = s.substr(i, k);从下标为i开始截取k位假设：string s = “0123456789”;string sub1 = s.substr(5); //只有一个数字5表示从下标为5开始一直到结尾：sub1 = “56789”string sub2 = s.substr(5, 3); //从下标为5开始截取长度" data-link-icon="https://g.csdnimg.cn/static/logo/favicon32.ico" data-link-title="关于字符串函数_Demo.o的博客-CSDN博客" href="https://blog.csdn.net/qq_61903556/article/details/123776173?spm=1001.2014.3001.5501" title="关于字符串函数_Demo.o的博客-CSDN博客">关于字符串函数_Demo.o的博客-CSDN博客</a>） ，最后输出的时候不仅要判断是不是合法，还要判断是不是在1-1000这个区间，如果不在的话还是不合法。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

int main(){
	string s;
	getline(cin,s);
	int en,be;//第一个空格出现的位置和下一个位置
	for(int i=0;i<s.size();i++){
		if(s[i]==' '){
			en=i;
			be=i+1;
			break;
		}
	}
	
	int f1=1,f2=1;
	if(en==0)f1=0;//如果他第一个字符就是空格的话a直接不合法
	string a,b;
	int x,y;
	int n=0,m=0;
	for(int i=0;i<en;i++){
		if(s[i]>='0'&&s[i]<='9'){//如果合法存入a
			a[n++]=s[i];
		}else{
			f1=0;//否则标记退出
			break;
		}
	}
	for(int i=be;i<s.size();i++){
		if(s[i]>='0'&&s[i]<='9'){
			b[m++]=s[i];
		}else{
			f2=0;
			break;
		}
	}
	if(f1==1){//如果字符串全是数字的话
		x=stoi(a);//转为整数
		if(x<=1000&&x>=1){//判断是否合法
			printf("%d + ",x);
		}else {
			printf("? + ");
			f1=0;//不合法的话标记
		}
		
	}else{
		printf("? + ");
	}
	if(f2==1){
		y=stoi(b);
		if(y<=1000&&y>=1){
			printf("%d = ",y);
		}else{
			printf("? = ");
			f2=0;
		} 
		
		
	}else printf("? = ");
	if(f1==1&&f2==1){
		printf("%d",x+y);
	}else printf("?");
	return 0;
}
```


<p></p>

## Manacher算法

<p>Manacher算法是查找一个字符串的最长回文子串的线性算法</p>

<p>设原数组为s，先构造一个a数组：把特殊的字符插进s的每个字符之间，注意下标从1开始</p>

<p>例如s【1-5】：1 1 1 1 1</p>

<p>a【1-10】：-1 1 -1 1 -1 1 -1 1 -1 1</p>

<p>然而当我们防止边界问题往往会把a【0】设置成一个不同于插入字符的字符，这个可以是-2；</p>

<p>那么a【0-10】：-2 -1 1 -1 1 -1 1 -1 1 -1 1</p>

<p>然后我们再构造一个len数组来表示以i为中心的最大回文串的最右端的字符到i之间（包括i和这个数）的最大长度是多少。先设一个mx=0来表示最右边的数的坐标，po表示以po为中心的点的坐标。计算方法：当i&lt;mx时：len[i]=min(mx-i,a[2*po-i])否则len[i]=1;再算len应该是多少：当以i为中心以len往外的字符串相等时我们就len[i]++；当更新完毕之后如果i+len[i]&gt;mx,我们就要更新一下mx和po：mx=[+len[i],po=i;</p>

<p>代码如下：</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cmath>
using namespace std;

const int N=3e6+10;
int a[N],len[N];
int n,x;
int main(){
	cin>>n;
	a[0]=0;
	for(int i=1;i<=n;i++){//构造数组
		cin>>x;
		a[i*2-1]=-1;
		a[i*2]=x;
	}
	a[2*n+1]=0;
	int mx=0,po=0;
	for(int i=1;i<=2*n;i++){//算len数组
		if(i<mx){
			len[i]=min(mx-i,len[2*po-i]);
		}else len[i]=1;
		while(a[i+len[i]]==a[i-len[i]])len[i]++;
		if(i+len[i]>mx){
			mx=i+len[i];
			po=i;
		}
	}
	
	return 0;
}
```


<p> 如果想求每个数为头的字符串的数量，要用b数组来存，每次更新完len时b[i-len[i]+1]++,b[i+1]--</p>

<p>最后对b数组求前缀和当下标为偶数时输出就行。</p>

<p>例题：花非花（第十八届西南科技大学ACM程序设计竞赛（同步赛））</p>

<p>链接：<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.1.3/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M4AD" data-link-title="登录—专业IT笔试面试备考平台_牛客网" href="https://ac.nowcoder.com/acm/contest/33540/A" title="登录—专业IT笔试面试备考平台_牛客网">登录—专业IT笔试面试备考平台_牛客网</a><br />
来源：牛客网<br /><br />
给出一个序列 ana_nan​，对于 iii，求有几个数 jjj 满足：<br /><br />
1 、i≤j<br /><br />
2 、子串 ai∼j​ 是一个回文串</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=3e6+10;
int a[N],b[N],len[N];
int n,x;
int main(){
	cin>>n;
	a[0]=0;
	for(int i=1;i<=n;i++){//构造一个数组
		cin>>x;
		a[i*2-1]=-1;
		a[i*2]=x;
	}
	a[n*2+1]=0;
	int mx=0,po=0;//mx是上次更新时最长子串最右边的数的坐标，po是中间对称的数的坐标
	for(int i=1;i<=2*n;i++){
		if(i<mx){
			len[i]=min(mx-i,len[2*po-i]);//
		}else len[i]=1;
		while(a[i-len[i]]==a[i+len[i]])len[i]++;
		b[i-len[i]+1]++;
		b[i+1]--;
		if(i+len[i]>mx){
			mx=i+len[i];
			po=i;
		}
	}
	for(int i=1;i<=2*n;i++){
		b[i]+=b[i-1];
		if(i%2==0)printf("%d ",b[i]);
	}
	return 0;
}
```


<p><br />
 </p>

<p></p>

## 谷歌的招聘

<p>2004 年 7 月，谷歌在硅谷的 101 号公路边竖立了一块巨大的广告牌（如下图）用于招聘。内容超级简单，就是一个以 .com 结尾的网址，而前面的网址是一个 10 位素数，这个素数是自然常数 e 中最早出现的 10 位连续数字。能找出这个素数的人，就可以通过访问谷歌的这个网站进入招聘流程的下一步。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/87f78cb56db67c89a9b66b7874916bc0.png" /></p>

<p>自然常数 e 是一个著名的超越数，前面若干位写出来是这样的：e = 2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642<strong>7427466391</strong>932003059921... 其中粗体标出的 10 位数就是答案。</p>

<p>本题要求你编程解决一个更通用的问题：从任一给定的长度为 L 的数字中，找出最早出现的 K 位连续数字所组成的素数。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在第一行给出 2 个正整数，分别是 L（不超过 1000 的正整数，为数字长度）和 K（小于 10 的正整数）。接下来一行给出一个长度为 L 的正整数 N。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>在一行中输出 N 中最早出现的 K 位连续数字所组成的素数。如果这样的素数不存在，则输出 <code>404</code>。注意，原始数字中的前导零也计算在位数之内。例如在 200236 中找 4 位素数，0023 算是解；但第一位 2 不能被当成 0002 输出，因为在原始数字中不存在这个 2 的前导零。</p>

<h3 id="输入样例-1：">输入样例 1：</h3>


```cpp
20 5
23654987725541023819

```


<h3 id="输出样例-1：">输出样例 1：</h3>


```cpp
49877

```


<h3 id="输入样例-2：">输入样例 2：</h3>


```cpp
10 3
2468001680

```


<h3 id="输出样例-2：">输出样例 2：</h3>

<p> </p>


```cpp
404
```


<p> 思路：从下标为0开始到下标为l-k，每次截取k位判断是否为素数，这时我们用到了两个函数：</p>

<p>字符串截取函数substr和把字符串变为数字的函数stoi函数，具体操作见代码</p>

<p>注意：题目要求输出前导0，如果直接输出化为整数的数的话会去掉前导0，所以我们要输出截取的字符串</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<cstring>
#include<vector>
#include<cmath>

using namespace std;
typedef long long ll;

bool cheek(int x){
	if(x<=1)return false;
	for(int i=2;i<=x/i;i++){
		if(x%i==0){
			return false;
		}
	}
	return true;
}
int main(){
	int l,k,x;
	string s1,s2;
	scanf("%d%d",&l,&k);
	cin>>s1;
	for(int i=0;i<=l-k;i++){
		s2=s1.substr(i,k);
		x=stoi(s2);
		if(cheek(x)){
			cout<<s2<<endl;//注意：题上说前导0也需要输出，所以输出一个x的话会不过，所以必须输出字符串s2
			return 0;
		}
	}
	printf("404");
	return 0;
}
```


<p></p>

