<template><div><h2 id="p1002-noip2002-普及组-过河卒" tabindex="-1"><a class="header-anchor" href="#p1002-noip2002-普及组-过河卒" aria-hidden="true">#</a> P1002 [NOIP2002 普及组] 过河卒</h2>
<h2>题目描述</h2>
<p>棋盘上 AA 点有一个过河卒，需要走到目标 BB 点。卒行走的规则：可以向下、或者向右。同时在棋盘上 CC 点有一个对方的马，该马所在的点和所有跳跃一步可达的点称为对方马的控制点。因此称之为“马拦过河卒”。</p>
<p>棋盘用坐标表示，AA 点 (0, 0)(0,0)、BB 点 (n, m)(n,m)，同样马的位置坐标是需要给出的。</p>
<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/e12dd07475a2c1336523b41db5d5d23c.png" /></p>
<p>现在要求你计算出卒从 AA 点能够到达 BB 点的路径的条数，假设马的位置是固定不动的，并不是卒走一步马走一步。</p>
<h2>输入格式</h2>
<p>一行四个正整数，分别表示 BB 点坐标和马的坐标。</p>
<h2>输出格式</h2>
<p>一个整数，表示所有的路径条数。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<p>6 6 3 3</p>
<p><strong>输出 #1</strong>复制</p>
<p>6</p>
<p> 思路：因为只能向下或向右走，所以我们[i][j]这个点只能从[i-1][j]和[i][j-1]转移过来，因为马能控制的坐标横纵坐标要减2，所以马如果在x或y轴上数组就会越界，所以我们需要把所有的横纵坐标都加上2方便计算，因为马走日字，所以我们用一个v数组来记录马能控制的地方状态为1，当遍历到这的时候直接跳过，然后利用状态转移方程f[i][j]=f[i-1][j]+f[i][j-1]来完成就行，记得初始化的时候因为原点的坐标为2，2，在原点的路径只有一条，但是当我们遍历的时候需要利用方程，所以我们让他的左边一个点的路径为1（f[2][1]），或者他的下边的一个点的路径为1(f[1][2])，这样我们算f[2][2]的时候就是1+0=1条了。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> xx<span class="token punctuation">,</span>yy<span class="token punctuation">,</span>n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token keyword">long</span> a<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> v<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token operator">>></span>xx<span class="token operator">>></span>yy<span class="token punctuation">;</span><span class="token comment">//坐标，马</span>
	n<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
	m<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
	xx<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
	yy<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	v<span class="token punctuation">[</span>xx<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%lld"</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<h2 id="p1799-数列" tabindex="-1"><a class="header-anchor" href="#p1799-数列" aria-hidden="true">#</a> P1799 数列</h2>
<h2>题目描述</h2>
<p>虽然 msh 长大了，但她还是很喜欢找点游戏自娱自乐。有一天，她在纸上写了一串数字：1, 1, 2, 5, 41,1,2,5,4。接着她擦掉了一个 11，结果发现剩下 1, 2, 41,2,4 都在自己所在的位置上，即 11 在第 11 位，22 在第 22 位，44 在第 44 位。她希望擦掉某些数后，剩下的数列中在自己位置上的数尽量多。她发现这个游戏很好玩，于是开始乐此不疲地玩起来……不过她不能确定最多能有多少个数在自己的位置上，所以找到你，请你帮忙计算一下！</p>
<h2>输入格式</h2>
<p>第一行为一个数 nn，表示数列的长度。</p>
<p>接下来一行为 nn个用空格隔开的正整数，第 ii 行表示数 A_iAi​。</p>
<h2>输出格式</h2>
<p>一行一个整数，表示擦掉某些数后，最后剩下的数列中最多能有多少个数在自己的位置上，即 A_i=iAi​=i 最多能有多少。</p>
<p>思路：设dp[i][j]为到第i位删除了j个数的适配度</p>
<p>那么我们就看第i位是不是第j个删除的数</p>
<p>当是删除的数的时候dp[i][j]=dp[i-1][j-1]</p>
<p>当不是的时候，如果a[i]这个位置等于i-j这个数（删了j个数之后的位置），那么适配度就等于</p>
<p>dp[i-1][j]+1</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">/*

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

*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;map></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;queue></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;deque></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cmath></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stack></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">lowbit</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> x<span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.1415926535</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">endl</span> <span class="token string">"\n"</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> pii<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> b<span class="token operator">?</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token operator">%</span>b<span class="token punctuation">)</span><span class="token operator">:</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/</span>
<span class="token comment">//int e[N],ne[N],h[N],idx,w[N];</span>
<span class="token comment">/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e3</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> dp<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>i<span class="token operator">-</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ans<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span>dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//	cin>>t;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
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
<p>3
4 2
4 1 3 2
3 5
-2 -7 -1
10 2
-6 -1 -2 4 -6 -1 -4 4 -5 -4</p>
<p><strong>输出 #1</strong>复制</p>
<p>10 12 14 16 18
0 4 4 5
4 6 6 7 7 7 7 8 8 8 8</p>
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
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cmath></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;map></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5005</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
ll n<span class="token punctuation">,</span>x<span class="token punctuation">;</span>
ll f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>x<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">0x3f</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> len<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>len<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>len<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>len<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>f<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">+</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token operator">+</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
				f<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">-</span>s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>k<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ll maxk<span class="token operator">=</span><span class="token operator">-</span><span class="token number">0x3f3f3f3f</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> len<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>len<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>len<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			ll q<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
			maxk<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>maxk<span class="token punctuation">,</span>f<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token operator">+</span>q<span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cout<span class="token operator">&lt;&lt;</span>maxk<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<h2 id="p2051-ahoi2009-中国象棋-dp" tabindex="-1"><a class="header-anchor" href="#p2051-ahoi2009-中国象棋-dp" aria-hidden="true">#</a> P2051 [AHOI2009] 中国象棋（dp）</h2>
<h2>题目描述</h2>
<p>这次小可可想解决的难题和中国象棋有关，在一个 nn 行 mm 列的棋盘上，让你放若干个炮（可以是 00 个），使得没有一个炮可以攻击到另一个炮，请问有多少种放置方法。大家肯定很清楚，在中国象棋中炮的行走方式是：一个炮攻击到另一个炮，当且仅当它们在同一行或同一列中，且它们之间恰好 有一个棋子。你也来和小可可一起锻炼一下思维吧！</p>
<h2>输入格式</h2>
<p>一行包含两个整数 n,mn,m，之间由一个空格隔开。</p>
<h2>输出格式</h2>
<p>总共的方案数，由于该值可能很大，只需给出方案数模 99999739999973 的结果。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<p>1 3</p>
<p><strong>输出 #1</strong>复制</p>
<p>7</p>
<h2>说明/提示</h2>
<p><strong>样例说明</strong></p>
<p>除了 33 个格子里都塞满了炮以外，其它方案都是可行的，所以一共有 2 \times 2 \times 2-1=72×2×2−1=7 种方案。</p>
<p><strong>数据规模与约定</strong></p>
<ul><li>对于 30\%30% 的数据，nn 和 mm 均不超过 66。</li>
	<li>对于 50\%50% 的数据，nn 和 mm 至少有一个数不超过 88。</li>
	<li>对于 100\%100% 的数据，1 \leq n,m \leq 1001≤n,m≤100。</li>
</ul><p>思路：因为能攻击到的情况是同行同列两个炮中间隔了一个炮的情况</p>
<p>也就是有三个炮在同一行或者同一列</p>
<p>那么我们就让他一行和一列就只能有0 1 2个炮</p>
<p>dp[i][j][k]表示前i行有j列放了1个炮，有k列放了两个炮</p>
<p>首先第i行不放的话：dp[i][j][k]=dp[i-1][j][k]</p>
<p>第i行放一个：</p>
<p>1.放在有0个炮的列上：dp[i][j][k]+=dp[i-1][j-1][k]*(m-j-k+1)</p>
<p>(因为我们放在了有0个炮的列上之后的状态是 j k，j比原来多了一个，k不变那么i-1行的状态就是dp[i][j-1][k]）</p>
<p>2.放在有1个炮的列上：dp[i][j][k]+=dp[i-1][j+1][k-1]*(j+1)</p>
<p>第i行放两个：</p>
<p>1.都放在有0个棋子的列：dp[i][j][k]+=dp[i-1][j-2][k]*getc(m-k-j+2,2,9999973);</p>
<p>2.都放在有1个棋子的列：dp[i][j][k]+=dp[i-1][j+2][k-2]*getc(j+2,2,9999973)</p>
<p>3.一个放在有0个的一个放在有一个的：dp[i][j][k]+=dp[i-1][j][k-1]*j*(m-j-k+1)</p>
<p>最后的答案是所有在前n行，有0~m个列放了1个，有0~m-j列放了两个的方法的总和</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">/*

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

*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;map></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;queue></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;deque></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cmath></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stack></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">lowbit</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> x<span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.1415926535</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">endl</span> <span class="token string">"\n"</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> pii<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> b<span class="token operator">?</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token operator">%</span>b<span class="token punctuation">)</span><span class="token operator">:</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/</span>
<span class="token comment">//int e[N],ne[N],h[N],idx,w[N];</span>
<span class="token comment">/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">100</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> m<span class="token punctuation">,</span>p<span class="token punctuation">,</span>n<span class="token punctuation">;</span>
<span class="token keyword">int</span> dp<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">ksm</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> mod<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> res<span class="token operator">=</span><span class="token number">1</span><span class="token operator">%</span>mod<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span>res<span class="token operator">=</span>res<span class="token operator">*</span>a<span class="token operator">%</span>mod<span class="token punctuation">;</span>
		a<span class="token operator">=</span>a<span class="token operator">*</span>a<span class="token operator">%</span>mod<span class="token punctuation">;</span>
		b<span class="token operator">>>=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> mod<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">></span>a<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> res<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>a<span class="token punctuation">,</span>j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>b<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">,</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		res<span class="token operator">=</span>res<span class="token operator">*</span>i<span class="token operator">%</span>mod<span class="token punctuation">;</span>
		res<span class="token operator">=</span>res<span class="token operator">*</span><span class="token function">ksm</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span>mod<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span>mod<span class="token punctuation">)</span><span class="token operator">%</span>mod<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">getc</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> mod<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;</span>mod<span class="token operator">&amp;&amp;</span>b<span class="token operator">&lt;</span>mod<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token function">c</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">c</span><span class="token punctuation">(</span>a<span class="token operator">%</span>mod<span class="token punctuation">,</span>b<span class="token operator">%</span>mod<span class="token punctuation">,</span>mod<span class="token punctuation">)</span><span class="token operator">*</span><span class="token function">getc</span><span class="token punctuation">(</span>a<span class="token operator">/</span>mod<span class="token punctuation">,</span>b<span class="token operator">/</span>mod<span class="token punctuation">,</span>mod<span class="token punctuation">)</span><span class="token operator">%</span>mod<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	p<span class="token operator">=</span><span class="token number">9999973</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">+</span>k<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//不放</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
				<span class="token comment">//放一个棋子</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">(</span>m<span class="token operator">-</span>j<span class="token operator">-</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//放在有0个棋子的列</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//放在有一个棋子的列</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
				<span class="token comment">//放两个</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">>=</span><span class="token number">2</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">*</span><span class="token function">getc</span><span class="token punctuation">(</span>m<span class="token operator">-</span>k<span class="token operator">-</span>j<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">9999973</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//都放在有0个棋子的列</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">>=</span><span class="token number">2</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token function">getc</span><span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">9999973</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//都放在有1个棋子的列</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">)</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+=</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span>j<span class="token operator">*</span><span class="token punctuation">(</span>m<span class="token operator">-</span>j<span class="token operator">-</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一个放在有0个的一个放在有一个的</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">%=</span>p<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">+</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			ans<span class="token operator">=</span><span class="token punctuation">(</span>ans<span class="token operator">+</span>dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">%</span>p<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//	cin>>t;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p>
<h2 id="p1064-noip2006-提高组-金明的预算方案" tabindex="-1"><a class="header-anchor" href="#p1064-noip2006-提高组-金明的预算方案" aria-hidden="true">#</a> P1064 [NOIP2006 提高组] 金明的预算方案</h2>
<p>金明今天很开心，家里购置的新房就要领钥匙了，新房里有一间金明自己专用的很宽敞的房间。更让他高兴的是，妈妈昨天对他说：“你的房间需要购买哪些物品，怎么布置，你说了算，只要不超过 nn 元钱就行”。今天一早，金明就开始做预算了，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：</p>
<table><thead><tr><th>主件</th>
			<th>附件</th>
		</tr></thead><tbody><tr><td>电脑</td>
			<td>打印机，扫描仪</td>
		</tr><tr><td>书柜</td>
			<td>图书</td>
		</tr><tr><td>书桌</td>
			<td>台灯，文具</td>
		</tr><tr><td>工作椅</td>
			<td>无</td>
		</tr></tbody></table><p>如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 00 个、11 个或 22 个附件。每个附件对应一个主件，附件不再有从属于自己的附件。金明想买的东西很多，肯定会超过妈妈限定的 nn 元。于是，他把每件物品规定了一个重要度，分为 55 等：用整数 1 \sim 51∼5 表示，第 55 等最重要。他还从因特网上查到了每件物品的价格（都是 1010 元的整数倍）。他希望在不超过 nn 元的前提下，使每件物品的价格与重要度的乘积的总和最大。</p>
<p>设第 jj 件物品的价格为 v_jvj​，重要度为w_jwj​，共选中了 kk 件物品，编号依次为 j_1,j_2,\dots,j_kj1​,j2​,…,jk​，则所求的总和为：</p>
<p>v_{j_1} \times w_{j_1}+v_{j_2} \times w_{j_2}+ \dots +v_{j_k} \times w_{j_k}vj1​​×wj1​​+vj2​​×wj2​​+⋯+vjk​​×wjk​​。</p>
<p>请你帮助金明设计一个满足要求的购物单。</p>
<h2>输入格式</h2>
<p>第一行有两个整数，分别表示总钱数 nn 和希望购买的物品个数 mm。</p>
<p>第 22 到第 (m + 1)(m+1) 行，每行三个整数，第 (i + 1)(i+1) 行的整数 v_ivi​，p_ipi​，q_iqi​ 分别表示第 ii 件物品的价格、重要度以及它对应的的主件。如果 q_i=0qi​=0，表示该物品本身是主件。</p>
<h2>输出格式</h2>
<p>输出一行一个整数表示答案。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<p>1000 5
800 2 0
400 5 1
300 5 1
400 3 0
500 2 0</p>
<p><strong>输出 #1</strong>复制</p>
<p>2200</p>
<h2>说明/提示</h2>
<p>数据规模与约定</p>
<p>对于全部的测试点，保证 1 \leq n \leq 3.2 \times 10^41≤n≤3.2×104，1 \leq m \leq 601≤m≤60，0 \leq v_i \leq 10^40≤vi​≤104，1 \leq p_i \leq 51≤pi​≤5，0 \leq q_i \leq m0≤qi​≤m，答案不超过 2 \times 10^52×105。</p>
<p>思路：一个主件有0-2个附件，买附件的话一定要买主件，买主件不一定需要买附件，那么我们就从买主件i开始入手，有四种情况：1.不够买主件i 2.只能买主件i 3.能买主件i和附件1 4.能买主件i和附件2。那么我们就根据这四种情况，用一个二维数组v[i][j]来记录编号为i的j主件或附件的价格，当j==0时是记录编号为i的主件加附件的个数，当j==1时表示的是主件，j==2表示的是附件1，j==3表示的是附件2。然后再用一个二维数组p[i][j]来表示编号为i的j主件或附件的价格×重要值，p[i][j]表示编号为i，当j==0时表示的编号为i的主件+附件的数量，当j==1时表示主件的价格×重要值，当j==2时表示附件1的价格×重要值，j==3时表示附件2的价格×重要值。</p>
<p>然后用01背包问题一个个枚举价格是否大于那四种情况然后更新就可以了。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span><span class="token number">32005</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> v<span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> p<span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>m<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>x<span class="token operator">>></span>y<span class="token operator">>></span>z<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>z<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">++</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
			p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">++</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token operator">*</span>y<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			v<span class="token punctuation">[</span>z<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">++</span>v<span class="token punctuation">[</span>z<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
			p<span class="token punctuation">[</span>z<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">++</span>p<span class="token punctuation">[</span>z<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token operator">*</span>y<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>m<span class="token punctuation">;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">3</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">3</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>f<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<h2 id="p1156-垃圾陷阱" tabindex="-1"><a class="header-anchor" href="#p1156-垃圾陷阱" aria-hidden="true">#</a> P1156 垃圾陷阱</h2>
<h2>题目描述</h2>
<p>卡门――农夫约翰极其珍视的一条
```cpp
Holsteins
```
奶牛――已经落了到“垃圾井”中。“垃圾井”是农夫们扔垃圾的地方，它的深度为D(2 \le D \le 100)D(2≤D≤100)英尺。</p>
<p>卡门想把垃圾堆起来，等到堆得与井同样高时，她就能逃出井外了。另外，卡门可以通过吃一些垃圾来维持自己的生命。</p>
<p>每个垃圾都可以用来吃或堆放，并且堆放垃圾不用花费卡门的时间。</p>
<p>假设卡门预先知道了每个垃圾扔下的时间t(0&lt; t \le 1000)t(0&lt;t≤1000)，以及每个垃圾堆放的高度h(1 \le h \le 25h(1≤h≤25)和吃进该垃圾能维持生命的时间f(1 \le f \le 30)f(1≤f≤30)，要求出卡门最早能逃出井外的时间，假设卡门当前体内有足够持续1010小时的能量，如果卡门1010小时内没有进食，卡门就将饿死。</p>
<h2>输入格式</h2>
<p>第一行为22个整数，DD和 G (1 \le G \le 100)G(1≤G≤100)，GG为被投入井的垃圾的数量。</p>
<p>第二到第G+1G+1行每行包括33个整数：T (0 &lt; T &lt;= 1000)T(0&lt;T&lt;=1000)，表示垃圾被投进井中的时间；F (1 \le F \le 30)F(1≤F≤30)，表示该垃圾能维持卡门生命的时间；和 H (1 \le H \le 25)H(1≤H≤25)，该垃圾能垫高的高度。</p>
<h2>输出格式</h2>
<p>如果卡门可以爬出陷阱，输出一个整表示最早什么时候可以爬出；否则输出卡门最长可以存活多长时间。</p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<p>20 4
5 4 9
9 3 2
12 6 10
13 1 1</p>
<p><strong>输出 #1</strong>复制</p>
<p>13</p>
<h2>说明/提示</h2>
<p>[样例说明]</p>
<p>卡门堆放她收到的第一个垃圾：height=9height=9；</p>
<p>卡门吃掉她收到的第22个垃圾，使她的生命从1010小时延伸到1313小时；</p>
<p>卡门堆放第33个垃圾，height=19height=19；</p>
<p>卡门堆放第44个垃圾，height=20height=20。</p>
<p> 思路：用f[i][j]来表示到第i堆的时候，高度到达j时剩下的最大生命值。</p>
<p>创建结构体数组p记录三个信息，即垃圾扔下的时刻t，吃了垃圾能维持的时间f，堆垃圾能增加的高度h。</p>
<p>因为有每堆垃圾要么堆要么吃，所以有两种状态转移方程：</p>
<p>用于堆（高度增加，剩下的最大生命值是第i-1堆到达高度j时的最大生命值减去第i堆和第i-1堆的时间差）：</p>
<p>f[i] [j+p[i].h]=max(f[i] [j+h], f[i-1] [j]- (p[i].t-p[i-1].t) )</p>
<p>用于吃（高度不变，剩下的最大生命值是第i-1堆到达j高度时剩下的最大生命值减去第i堆和第i-1堆的时间差+吃了第i堆能维持的时间）</p>
<p>f[i] [j]=max(f[i] [j],f[i-1][j]-(p[i].t-p[i-1].t)+p[i].f)</p>
<p>只有当我们第i-1堆剩余的最大生命值大于等于从第i-1堆到第i堆相差的时间我们才能进行第i堆的转换，所以当进行上面两个转移之前我们要先判断一下是否符合条件。</p>
<p>那么能逃出去的时刻，就是能进行状态转移，并且到达的高度j加上第i堆的h大于等于d的时刻，因为堆垃圾不费时间，所以直接就是扔下第i堆的时刻。直接判断如果满足条件直接输出i的时刻即可。</p>
<p>那么如果不能逃出去，就是我们把能吃的垃圾全都吃掉所维持的时间。ans表示最大能维持的时刻，刚开始为10，ans=10。然后遍历一遍p数组，如果最大能维持的时刻小于第i堆垃圾扔下来的时刻，那么说明在第i堆扔下之前就死了，所以我们直接break就行，否则的话说明在第i堆扔下来的时刻没有死，那么就加上吃掉第i堆维持的时间f。最后输出ans即可。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> d<span class="token punctuation">,</span>n<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">105</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">name</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token punctuation">,</span>f<span class="token punctuation">,</span>h<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
name p<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">cmp</span><span class="token punctuation">(</span>name a<span class="token punctuation">,</span>name b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>t <span class="token operator">&lt;</span>b<span class="token punctuation">.</span>t <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>d<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">>></span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>f<span class="token operator">>></span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>h <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>n<span class="token punctuation">,</span>cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
	f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>d<span class="token punctuation">;</span>j<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//相当于用01背包，滚动数组</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">>=</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//如果他剩下的最大时间大于到第i堆需要的时间</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>h <span class="token operator">>=</span>d<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token punctuation">;</span>
					<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>h <span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>h <span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token punctuation">)</span><span class="token punctuation">;</span>
				f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>f <span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//最大活的时间</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ans<span class="token operator">&lt;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>t <span class="token punctuation">)</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		ans<span class="token operator">+=</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>f <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</div></template>


