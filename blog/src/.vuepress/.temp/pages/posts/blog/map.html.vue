<template><div><h2 id="帅到没朋友" tabindex="-1"><a class="header-anchor" href="#帅到没朋友" aria-hidden="true">#</a> 帅到没朋友</h2>
<p>当芸芸众生忙着在朋友圈中发照片的时候，总有一些人因为太帅而没有朋友。本题就要求你找出那些帅到没有朋友的人。</p>
<h3 id="输入格式：">输入格式：</h3>
<p>输入第一行给出一个正整数<code>N</code>（≤100），是已知朋友圈的个数；随后<code>N</code>行，每行首先给出一个正整数<code>K</code>（≤1000），为朋友圈中的人数，然后列出一个朋友圈内的所有人——为方便起见，每人对应一个ID号，为5位数字（从00000到99999），ID间以空格分隔；之后给出一个正整数<code>M</code>（≤10000），为待查询的人数；随后一行中列出<code>M</code>个待查询的ID，以空格分隔。</p>
<p>注意：没有朋友的人可以是根本没安装“朋友圈”，也可以是只有自己一个人在朋友圈的人。虽然有个别自恋狂会自己把自己反复加进朋友圈，但题目保证所有<code>K</code>超过1的朋友圈里都至少有2个不同的人。</p>
<h3 id="输出格式：">输出格式：</h3>
<p>按输入的顺序输出那些帅到没朋友的人。ID间用1个空格分隔，行的首尾不得有多余空格。如果没有人太帅，则输出<code>No one is handsome</code>。</p>
<p>注意：同一个人可以被查询多次，但只输出一次。</p>
<h3 id="输入样例1：">输入样例1：</h3>
<pre>
<code>3
3 11111 22222 55555
2 33333 44444
4 55555 66666 99999 77777
8
55555 44444 10000 88888 22222 11111 23333 88888
</code></pre>
<h3 id="输出样例1：">输出样例1：</h3>
<pre>
<code>10000 88888 23333
</code></pre>
<h3 id="输入样例2：">输入样例2：</h3>
<pre>
<code>3
3 11111 22222 55555
2 33333 44444
4 55555 66666 99999 77777
4
55555 44444 22222 11111
</code></pre>
<h3 id="输出样例2：">输出样例2：</h3>
<pre>
<code>No one is handsome</code></pre>
<p>思路：用map&lt;string,int&gt;来存一个字符串的个数，用一个类型是string的vector数组来记录哪些没出现过的字符， 在加入的时候还要判断他是否已经加入过这个数组，所以再开一个map&lt;string,int&gt;的int来表示他加入过没有，最初没加过都是0，判断的时候如果他是0就加入数组，然后把他的int改成1，如果他是1表示已经加过了就不再加入数组。注意：当k=1的时候说明朋友圈只有一个人，不能算出现过的字符。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;map&gt;
#include&lt;vector&gt;

using namespace std;
int n,m;
map&lt;string,int&gt; mp,mp1;
vector&lt;string&gt; a;
int main(){
	scanf("%d",&amp;n);
	while(n--){
		int k;
		scanf("%d",&amp;k);
		if(k==1){
			string s;
			cin&gt;&gt;s;
			continue;
		}
		while(k--){
			string s2;
			cin&gt;&gt;s2;
			mp[s2]++;
		}
	}
	scanf("%d",&amp;m);
	while(m--){
		string s3;
		cin&gt;&gt;s3;
		if(mp[s3]==0&amp;&amp;mp1[s3]==0){
			a.push_back(s3);
			mp1[s3]++;
		}
		
	}
	int r=a.size();
	if(r==0){
		printf("No one is handsome");
	}else{
		for(int i=0;i&lt;r-1;i++){
			cout&lt;&lt;a[i];
			printf(" ");
		}
		cout&lt;&lt;a[r-1];
	}
	return 0;
}</code></pre>
<p></p>
</div></template>


