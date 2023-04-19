<!-- ---
title: kmp

category:
  - algorithm

tag:
  - 字符串
---


## 剪花布条（kmp）

<p>一块花布条，里面有些图案，另有一块直接可用的小饰条，里面也有一些图案。对于给定的花布条和小饰条，计算一下能从花布条中尽可能剪出几块小饰条来呢？</p>

<p>输入格式</p>

<p>输入数据为多组数据，读取到 `#` 字符时结束。每组数据仅有一行，为由空格分开的花布条和小饰条。花布条和小饰条都是用可见 ASCII 字符表示的，不会超过 10001000 个字符。</p>

<p><strong>注意：这个 `#` 应为单个字符。若某字符串开头有 `#`，不意味着读入结束！</strong></p>

<p>输出格式</p>

<p>对于每组数据，输出一行一个整数，表示能从花纹布中剪出的最多小饰条个数。</p>

<p>样例</p>

<table><thead><tr><th>Inputcopy</th>
			<th>Outputcopy</th>
		</tr></thead><tbody><tr><td>
			<pre>
abcde a3
aaaaaa aa
#</pre>
			</td>
			<td>
			<pre>
0
3</pre>
			</td>
		</tr></tbody></table>

```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
char s[1005],p[1005];
int ne[1005];
int n,m;
int main(){
	while(1){
		int ans=0;
		s[0]='0';//设置一下s【0】来方便计算字符串长度
		cin>>s+1;//下标从1开始
		n=strlen(s)-1;//减去0
		if(s[1]!='#'||s[1]=='#'&&n!=1){
			memset(ne,0,sizeof(ne));//初始化ne
			p[0]='0';
			cin>>p+1;
			m=strlen(p)-1;
			//算ne数组
			for(int i=2,j=0;i<=m;i++){//下标从2开始并且长度是子串长度
				while(j&&p[i]!=p[j+1])j=ne[j];
				if(p[i]==p[j+1])j++;
				ne[i]=j;
			}
			//从1开始遍历s
			for(int i=1,j=0;i<=n;i++){
				while(j&&s[i]!=p[j+1])j=ne[j];
				if(s[i]==p[j+1])j++;
				if(j==m){//当j==子串的长度时
					ans++;//说明有一个子串出现，数量加1
					j=0;//当有子串出现因为要算剪出来的短数，所以下次判断从子串的头开始
				}
			}
			printf("%d\n",ans);
		}else break;
		
	}
	
	return 0;
}
```


<p> 核心：找ne数组，判断找到子串后应该进行的操作。</p>

## Power Strings

<p>给定两个字符串a和b，我们定义a*b为它们的连接。例如，如果a = "abc "和b = "def "，那么a*b = "abcdef "。如果我们把串联看作乘法，那么非负整数的幂运算是以正常方式定义的:a^0 = "(空字符串)和a^(n+1) = a*(a^n).</p>

<p>投入</p>

<p>每个测试用例是一行代表s的输入，s是一串可打印的字符。s的长度至少为1，不会超过100万个字符。最后一个测试用例后面有一行句号。</p>

<p>输出</p>

<p>对于每个s，你应该打印出最大的n，使得s =某个字符串a的a^n</p>

<p>样品</p>

<table><thead><tr><th>投入copy</th>
			<th>输出复制</th>
		</tr></thead><tbody><tr><td>
			<pre>
abcd
aaaa
ababab
.
</pre>
			</td>
			<td>
			<pre>
1
4
3
</pre>
			</td>
		</tr></tbody></table><p>暗示</p>

<p>这个问题的输入量很大，用scanf代替cin可以避免超时。</p>

<p></p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
using namespace std;
int ne[1000005];
char a[1000005];
int con,n;
//求ne数组
void getnext(){
	int i=0,j=-1;
	ne[0]=-1;
	while(i<n){
		if(j==-1||a[i]==a[j]){
			i++;
			j++;
			ne[i]=j;
		}else{
			j=ne[j];
		}
	}
}
int main(){
	while(1){
		scanf("%s",a);
		if(a[0]=='.'){
			break;
		}else{
			con=0;
			n=strlen(a);
			getnext();
			if(n%(n-ne[n])==0){//判断原数组是否能整除循环串
				printf("%d\n",n/(n-ne[n]));
			}else//如果不能就只有他本身一个串
			printf("1\n",con);
		}
	}
	return 0;
}
```


<p></p>

## A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛）

### <p><br /><strong>柳庭风静人眠昼，昼眠人静风庭柳。香汗薄衫凉，凉衫薄汗香。</strong><br /><br /><strong>手红冰碗藕，藕碗冰红手。郎笑藕丝长，长丝藕笑郎。</strong><br /><br />
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

## kmp（next模板）

<p>时间复杂度O（n+m）</p>

<p>ne数组表示下标为i为结尾的最长前缀和后缀相等的长度</p>

<p>比如ne[i]=k，说明下标为[0，k-1]和[ i-（k-1),i]这两段的字符串相等</p>

<p>先求ne数组：</p>

<p>下标从1开始（这样的话直接储存的就是跳到的下标了）：</p>

<p>i从2开始，因为a[1]没有最长前缀和后缀，j从0开始，因为匹配的是i和j+1</p>


```cpp
for(int i=2,j=0;i<=m;i++){
		while(j&&p[i]!=p[j+1])j=ne[j];//当j+1==1的时候不能j=ne[j]，因为ne[j]没有最长前后缀
		if(p[i]==p[j+1])j++;
		ne[i]=j;
	}
```


<p>然后拿模板串匹配文本串，当匹配的长度==模板串的长度的时候，那么文本串里就有一个模板子串</p>

<p>作用：可以求模板串在文本串里出现的下标，也可以求模板串在文本串里出现的个数</p>


```cpp
for(int i=1,j=0;i<=n;i++){
		while(j&&s[i]!=p[j+1])j=ne[j];
		if(s[i]==p[j+1])j++;
		if(j==m){
			con++;
			j=ne[j];
		}
	}
```


<p>也可以求最小的循环节:x=n-ne[n],如果n%x==0的时候说明有最小的循环节，如果n%x!=0的话说明没有</p>

<p>例题：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/f5db2a24c0a54e6cbf8bf71737bd491d.png" /></p>

<p>求多少个k转换成求有多少个最小循环节，如果没有循环节的话输出1</p>


```cpp
/*

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
#include<iostream>
#include<algorithm>
#include<cstring>
#include<vector>
#include<set>
#include<map>
#include<queue>
#include<deque>
#include<cmath>
#include<unordered_map>
#include<unordered_set>
#include<stack>
#define int long long
#define lowbit(x) x&(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int gcd(int a,int b){
	return b>0 ? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
const int N=1e3+10;
int n,m;
int ne[N];
void sove(){
	string p;
	cin>>n;
	cin>>p;
	p=" "+p;
	for(int i=2,j=0;i<=n;i++){
		while(j&&p[i]!=p[j+1])j=ne[j];
		if(p[i]==p[j+1])j++;
		ne[i]=j;
	}
	int x=n-ne[n];
	if(n%x){
		cout<<1<<endl;
	}else cout<<n/x<<endl;
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
//	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

## Oulipo

<p>The French author Georges Perec (1936–1982) once wrote a book, La disparition, without the letter 'e'. He was a member of the Oulipo group. A quote from the book:</p>

<blockquote>
<p>Tout avait Pair normal, mais tout s’affirmait faux. Tout avait Fair normal, d’abord, puis surgissait l’inhumain, l’affolant. Il aurait voulu savoir où s’articulait l’association qui l’unissait au roman : stir son tapis, assaillant à tout instant son imagination, l’intuition d’un tabou, la vision d’un mal obscur, d’un quoi vacant, d’un non-dit : la vision, l’avision d’un oubli commandant tout, où s’abolissait la raison : tout avait l’air normal mais…</p>
</blockquote>

<p>Perec would probably have scored high (or rather, low) in the following contest. People are asked to write a perhaps even meaningful text on some subject with as few occurrences of a given “word” as possible. Our task is to provide the jury with a program that counts these occurrences, in order to obtain a ranking of the competitors. These competitors often write very long texts with nonsense meaning; a sequence of 500,000 consecutive 'T's is not unusual. And they never use spaces.</p>

<p>So we want to quickly find out how often a word, i.e., a given string, occurs in a text. More formally: given the alphabet {'A', 'B', 'C', …, 'Z'} and two finite strings over that alphabet, a word <em>W</em> and a text <em>T</em>, count the number of occurrences of <em>W</em> in <em>T</em>. All the consecutive characters of W must exactly match consecutive characters of <em>T</em>. Occurrences may overlap.</p>

<p>Input</p>

<p>The first line of the input file contains a single number: the number of test cases to follow. Each test case has the following format:</p>

<ul><li>One line with the word <em>W</em>, a string over {'A', 'B', 'C', …, 'Z'}, with 1 ≤ |<em>W</em>| ≤ 10,000 (here |<em>W</em>| denotes the length of the string <em>W</em>).</li>
	<li>One line with the text <em>T</em>, a string over {'A', 'B', 'C', …, 'Z'}, with |<em>W</em>| ≤ |<em>T</em>| ≤ 1,000,000.</li>
</ul><p>Output</p>

<p>For every test case in the input file, the output should contain a single number, on a single line: the number of occurrences of the word <em>W</em> in the text <em>T</em>.</p>

<p>Sample</p>

<table><thead><tr><th>Inputcopy</th>
			<th>Outputcopy</th>
		</tr></thead><tbody><tr><td>
			<pre>
3
BAPC
BAPC
AZA
AZAZAZA
VERDI
AVERDXIVYERDIAN</pre>
			</td>
			<td>
			<pre>
1
3
0</pre>
			</td>
		</tr></tbody></table><p>kmp模板往上套就完了</p>


```cpp
#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;

char s[1000005],p[10005];
int n,m,con;
int ne[1000000];
//求ne数组
void getnext(){
	int i=0,j=-1;
	ne[0]=-1;
	while(i<m){
		if(j==-1||p[i]==p[j]){
			i++;
			j++;
			ne[i]=j;
		}else{
			j=ne[j];
		}
	}
	
}
void sove(){
	con=0;
	scanf("%s%s",p,s);
	m=strlen(p);
	n=strlen(s);
	getnext();
//求重复的子段数量
	int i=0,j=0;
	while(i<n){
		if(j==-1||s[i]==p[j]){
			i++;
			j++;
			if(j==m){
				con++;
				j=ne[j];
			}
		}else{
			j=ne[j];
		}
	}
	printf("%d\n",con);
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

## 2264: sequence
原题链接：  
http://acm.zzuli.edu.cn/problem.php?id=2264  
题意：  
有一个长为n的数组a和一个长为m的数组b，询问在A中有多少段连续的长为m的子序列满足A[k],[Ak+1],…,A[k+m-1]使得对于任意1<=i, j<=m满足A[k+i-1]-B[i]=A[k+j-1]-B[j]  


思路：  
变形一下就是对于a的[l,r]中任意的i，j：  
a[l+i-1]-a[l+j-1]=b[i]-b[j]  
那么实际上就是求b的差分数组在a的差分数组中出现了几次  
求b串在a串中出现了几次，用kmp  

模板：  
https://demooo.top/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#include<vector>
const int N=1e6+10;
int a[N];
int b[N];
int s2[N],s1[N];
int p[N];
int n,m;
void pre(){
	int j=0;
	p[1]=0;
	for(int i=1;i<m;i++){
		while(j&&s2[i+1]!=s2[j+1]) j=p[j];
		if(s2[i+1]==s2[j+1])j++;
		p[i+1]=j;
	}
}
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>a[i];
	for(int i=1;i<=m;i++)cin>>b[i];
	for(int i=1;i<n;i++) s1[i]=a[i+1]-a[i];
	for(int i=1;i<m;i++) s2[i]=b[i+1]-b[i];
	n--;
	m--;
//	for(int i=0;i<n;i++)cout<<s1[i]<<" ";
//	cout<<endl;
//	for(int i=0;i<m;i++) cout<<s2[i]<<" ";
//	cout<<endl;
	pre();
	int j=0;
	int con=0;
	for(int i=0;i<n;i++){
		while(j&&s1[i+1]!=s2[j+1])j=p[j];
		if(s1[i+1]==s2[j+1])j++;
		if(j==m){
			con++;
			j=p[j];//继续寻找匹配（可重叠，不可重叠的话j=0）
		}
	}	
	cout<<con;
	return 0;
	
}
```



 -->
