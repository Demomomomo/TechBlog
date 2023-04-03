<template><div><h2 id="普通dfs" tabindex="-1"><a class="header-anchor" href="#普通dfs" aria-hidden="true">#</a> 普通dfs</h2>
<h3 id="求全排列" tabindex="-1"><a class="header-anchor" href="#求全排列" aria-hidden="true">#</a> 求全排列</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/844/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/844/<ExternalLinkIcon/></a><br>
题意：<br>
给定一个数字n，按照字典序求出他的全排列<br>
思路：<br>
因为变化是对于整个数组来说的，一个位置我们可以填许多数，但是每个数只能填一次，那么我们就得用一个数组额外记录一个数是否被用过。在每次dfs的时候从1~n遍历，如果i没有被遍历过，那么我们就将它标记，放入答案序列，再搜下个位置。直到搜完最后一个位置，我们将答案序列输出即可。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">400</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> path<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">==</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
			path<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="记忆化dfs" tabindex="-1"><a class="header-anchor" href="#记忆化dfs" aria-hidden="true">#</a> 记忆化dfs</h2>
<p>要点：<br>
确保每个点都只能遍历一次<br>
从一个起点往下走的时候，需要有一个限制使得前面的路不会被重复走<br>
没有确定的结束点</p>
<p>例子：斐波那契数列的求解方法<br>
f[1]=1<br>
f[2]=1<br>
f[n]=f[n-1]+f[n-2]</p>
<p>用普通dfs来写：<br>
dfs(u)返回的是f[u]的值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">==</span><span class="token number">1</span><span class="token operator">||</span>u<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是会递归很多次，那么我们想优化成每个f值只计算一次的话，我们需要用记忆化dfs</p>
<p>用f数组来记录值,先初始化为-1<br>
当搜到的f不等于-1，我们就返回被算过的值<br>
否则的话把f值赋值为dfs(u-1)+dfs(u-2)，返回f值<br>
注意：确保我们算到的状态都是没有算过的点，不能重复走之前走过的点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">==</span><span class="token number">1</span><span class="token operator">||</span>u<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> f<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回以某个点为起点的所有路程的最大长度-无确定终点" tabindex="-1"><a class="header-anchor" href="#返回以某个点为起点的所有路程的最大长度-无确定终点" aria-hidden="true">#</a> 返回以某个点为起点的所有路程的最大长度（无确定终点</h3>
<p>例题：老鼠和奶酪<br>
原题链接：<br>
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1078" target="_blank" rel="noopener noreferrer">http://acm.hdu.edu.cn/showproblem.php?pid=1078<ExternalLinkIcon/></a><br>
题意：<br>
有一个n*n的矩阵，每个格子里有一个数，一个老鼠从左上角走，每次走可以选择上下左右四个方向，并且每次最多只能走k步，走到的格子必须比他走到的前一个格子的数大。求他能收集的数的最大值。<br>
思路：<br>
dfs(x,y)返回的是以(x,y)为起点，走过的所有路径的最大值。<br>
那么对于(x,y)来说，可以向上下左右四个方向分别走0,1...k步<br>
但是他走到的格子里数的大小必须大于(x,y)格子里的数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>k<span class="token punctuation">;</span>
<span class="token keyword">int</span> dx<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> dy<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//	cout&lt;&lt;"x=="&lt;&lt;x&lt;&lt;" y=="&lt;&lt;y&lt;&lt;endl;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span>！<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//如果被遍历过就返回</span>
	f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>k<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> xx<span class="token operator">=</span>x<span class="token operator">+</span>dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>j<span class="token punctuation">;</span>
			<span class="token keyword">int</span> yy<span class="token operator">=</span>y<span class="token operator">+</span>dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>j<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>xx<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>xx<span class="token operator">></span>n<span class="token operator">||</span>yy<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>yy<span class="token operator">></span>n<span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token operator">></span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//这个保证了以后走的每个点都不会在前面被走过</span>
				f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token function">dfs</span><span class="token punctuation">(</span>xx<span class="token punctuation">,</span>yy<span class="token punctuation">)</span><span class="token operator">+</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>cin<span class="token operator">>></span>n<span class="token operator">>></span>k<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span>k<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>		
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回的是以某个点为起点走向终点的方案数" tabindex="-1"><a class="header-anchor" href="#返回的是以某个点为起点走向终点的方案数" aria-hidden="true">#</a> 返回的是以某个点为起点走向终点的方案数</h3>
<p>例题:how mant ways<br>
原题链接：<br>
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1978" target="_blank" rel="noopener noreferrer">http://acm.hdu.edu.cn/showproblem.php?pid=1978<ExternalLinkIcon/></a><br>
题意：<br>
一个机器人从起点(1,1)走到终点(n,m)。规则如下：<br>
1.机器人一开始在起点并有起点标有的能量<br>
2.机器人只能向右或者向下行走，每走一步消耗一单位能量<br>
3.机器人不能在原地停留<br>
4.当机器人选择一条路径时，当他走到终点的格子时，只有终点格子的能量<br>
求从(1,1)走到(n,m)的方案数</p>
<p>思路：<br>
dfs(x,y)表示以(x,y)为起点，走到终点的方案数<br>
那么设向下走i步，向右走j步(xx=x+i,yy=y+j,i+j&lt;=a[i][j])<br>
以(x,y)为起点的方案数就是他能走到的所有格子(xx,yy)的方案数相加<br>
注意：有些点走不到终点，方案数为0，那么我们就需要额外初始化f数组为-1，每次判断f等不等于-1，如果等于的话说明没有搜过，那么我们就将他的f值变成0,再加上他能走到的所有格子的方案数。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


