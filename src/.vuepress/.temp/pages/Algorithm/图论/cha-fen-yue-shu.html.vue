<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]&lt;=a[k]的形式，这样的系统称为差分约束系统</p>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2>
<p>有n个数和m个不等式的关系（x[i]-x[j]&lt;=a[k])，
1.求x[a]-x[b]的最大值是多少<br>
2.求符合约束条件的一组解</p>
<p>如果无解输出-1，有许多解输出-2.</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>bellman算法中的核心操作是：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">></span>d<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:d[b]&lt;=d[a]+w[a][b]</p>
<p>变形一下就是d[b]-d[a]&lt;=w[a][b]<br>
那么在系统中每个点的关系是：x[i]-x[j]&lt;=a[k]<br>
类比一下就是在x[j]到x[i]建立了一条边权为a[k]的有向边。</p>
<p>例子：假设有x0~x3这四个数，有下面五种关系：<br>
<img src="https://img-blog.csdnimg.cn/f67c5ba5aa6b47fba0644c5b57eb2e5f.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>求x3-x0的最大可能值<br>
那么我们可以得到几个x3和x0的关系：<br>
<img src="https://img-blog.csdnimg.cn/e892cfe245b044308097b22262a6ca9d.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>那么取他们的最小值7就是答案<br>
转换成图就是：<br>
<img src="https://img-blog.csdnimg.cn/3fa9014ed6f24f4d943459467c3c91d6.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>那么答案实际上就是求x0-&gt;x3的最短路</p>
<p>1.求x[n]-x[1]的最大值，实质就是求x[1]-&gt;x[n]的最短路<br>
一种情况：当一个图中出现负环的时候，他可以绕无数圈负环值一直变小，那么就没有解。并且在一个系统里，只要有负环的话，就说明肯定没有解。<br>
另一种情况：如果没有路能从起点走到终点，那么说明没有约束条件，解有无限多种。</p>
<p>2.设d[0]=0,并向每个点连一条权重为0的边，跑单源最短路，如果图中存在负环，那么给定的差分约束系统无解，否则,x[i]=d[i]为该差分约束系统的解。</p>
<h2 id="不等式方程标准化" tabindex="-1"><a class="header-anchor" href="#不等式方程标准化" aria-hidden="true">#</a> 不等式方程标准化</h2>
<p>1.如果给出的不等式有&lt;=也有&gt;=的话，根据要求变成统一格式：</p>
<p>如果求的是两个变量差的最大值，那么需要将所有不等式转变成&lt;=的形式，建图之后求最短路</p>
<p>如果求的是两个变量差的最小值，那么需要将所有不等式转化成&gt;=，建图后求最长路</p>
<p>2.如果有A-B=C这样的等式，可以将他转换成A-B&gt;=C和A-B&lt;=C的格式</p>
<p>3.如果变量都是整数域上的，那么遇到A-B&lt; C这样的不带等号的不等式，需要将他转换成&gt;=或者&lt;=的形式，比如A-B&lt; C转换成A-B&lt;=C-1</p>
<h2 id="差分约束系统解的模板" tabindex="-1"><a class="header-anchor" href="#差分约束系统解的模板" aria-hidden="true">#</a> 差分约束系统解的模板</h2>
<p>原题链接：<a href="https://www.luogu.com.cn/problem/P5960" target="_blank" rel="noopener noreferrer">https://www.luogu.com.cn/problem/P5960<ExternalLinkIcon/></a></p>
<p>题意：有n个数m个形如x[i]-x[j]&lt;=a[k]的关系，求满足关系的一组解，如果无解输出NO。</p>
<p>对于每个x[i]-x[j]&lt;=a[k]连一条从j到i的边权为a[k]的边，对于1~n的每个点i连一条从0到i的边权为0的边， 从0开始用spfa求最短路，如果有负环（当一个点的cnt数值&gt;=n+1,因为有n+1个点)，那么就是无解。如果有解，x[i]=d[i]就是解。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;queue></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5e3</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>idx<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>e<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ne<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>w<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
	e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">;</span>
	w<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>c<span class="token punctuation">;</span>
	ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
	h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">=</span>idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> f<span class="token punctuation">;</span>
<span class="token keyword">int</span> con<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span><span class="token number">0x3f</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span>
	q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	st<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> t<span class="token operator">=</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				con<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>con<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//		cout&lt;&lt;"j=="&lt;&lt;j&lt;&lt;" con[j]=="&lt;&lt;con[j]&lt;&lt;endl;</span>
					f<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
					st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token operator">>></span>c<span class="token punctuation">;</span>
		<span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"NO"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展例题-小k的农场" tabindex="-1"><a class="header-anchor" href="#拓展例题-小k的农场" aria-hidden="true">#</a> 拓展例题：小k的农场</h3>
<p>题意：小k有n个农场，每个农场都有一个农作物的数量，但是他忘记具体数量了，只记得有m个条件，有三种形式描述：<br>
1.农场a比农场b至少多种了c个单位的作物<br>
2.农场a比农场b至多多种了c个单位的作物<br>
3.农场a和农场b种的作物一样多</p>
<p>想知道有没有一种情况符合这m个条件。如果有输出Yes，否则输出No</p>
<p>思路：<br>
第一种情况：x[a]-x[b]&gt;=c -&gt; x[b]-x[a]&lt;=-c<br>
第二种情况：x[a]-x[b]&lt;=c<br>
第三种情况：x[a]-x[b]&gt;=c&amp;&amp;x[a]-x[b]&lt;=c</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;queue></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">6e3</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>idx<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>e<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ne<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>w<span class="token punctuation">[</span>N<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
	e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">;</span>
	w<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>c<span class="token punctuation">;</span>
	ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
	h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">=</span>idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> f<span class="token punctuation">;</span>
<span class="token keyword">int</span> con<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span><span class="token number">0x3f</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span>
	q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	st<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> t<span class="token operator">=</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				con<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>con<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">>=</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//		cout&lt;&lt;"j=="&lt;&lt;j&lt;&lt;" con[j]=="&lt;&lt;con[j]&lt;&lt;endl;</span>
					f<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
					st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> op<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>op<span class="token punctuation">;</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cin<span class="token operator">>></span>c<span class="token punctuation">;</span>
			<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token operator">-</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cin<span class="token operator">>></span>c<span class="token punctuation">;</span>
			<span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">spfa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"No"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"Yes"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用-线性约束" tabindex="-1"><a class="header-anchor" href="#应用-线性约束" aria-hidden="true">#</a> 应用：线性约束</h2>
<p>线性约束一般是在一维空间中给出的一些变量（一般定义位置），然后告诉你某两个变量的约束关系，求两个变量a和b的差值的最大值或最小值。<br>
(有一个差不多的洛谷题：<a href="https://www.luogu.com.cn/problem/P4878" target="_blank" rel="noopener noreferrer">https://www.luogu.com.cn/problem/P4878<ExternalLinkIcon/></a> )<br>
题意：n个人的编号是1~n，并且按照编号顺序排成一条直线，任何两个人的位置不重合，然后给定一些约束条件：<br>
x组约束Ax Bx Cx ，表示Ax和Bx的距离不能大于Cx<br>
y组约束Ax By Cy ，表示Ay和By的距离不能小于Cy<br>
如果这样的排列组合存在，输出这两个人的最高可能距离，如果不存在，输出-1，如果无限长输出-2.</p>
<p>思路：<br>
因为要求最长可能距离，就找最短路，所有等式转换为&lt;=的格式<br>
x组表示：Bx-Ax&lt;=Cx<br>
y组表示:By-Ax&gt;=Cx  -&gt;  Ay-by&lt;=-Cx<br>
不存在的情况说明有负环，无限长说明没有路径能到达</p>
<h2 id="求最长路径-x-i-x-j-a-k" tabindex="-1"><a class="header-anchor" href="#求最长路径-x-i-x-j-a-k" aria-hidden="true">#</a> 求最长路径（x[i]-x[j]&gt;=a[k])</h2>
<p>当符号变成&gt;=的时候，那么本质就是求最长路</p>
<p>1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了</p>
<p>2.bellman算法：将所有的边全取符号，然后对新的图求最短路</p>
</div></template>


