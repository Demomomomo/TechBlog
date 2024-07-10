<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>欧拉路径：是否存在一条路径使得每条边只走一次<br>
欧拉回路：是否存在一条路径使得每条边只走一次，且起点和终点相同</p>
<p>观察每个点的度数和（出度+入度），对于一个起点来说，一条边出，以后再经过这个点的时候必定一进一出。那么对于起点的度实际上是奇数。同理对于终点，一条边入，之前经过这个点都是一进一出，度数也是奇数。</p>
<p>那么对于中间点来说，进去一次就需要出来一次，度数应该是偶数。</p>
<h2 id="对无向图" tabindex="-1"><a class="header-anchor" href="#对无向图" aria-hidden="true">#</a> 对无向图</h2>
<p>前提条件：所有边都是联通的<br>
存在欧拉路径的充分必要条件：度数为奇数的点有0个或者两个。<br>
存在欧拉回路的充分必要条件：所有点的度数全为偶数</p>
<h2 id="对有向图" tabindex="-1"><a class="header-anchor" href="#对有向图" aria-hidden="true">#</a> 对有向图</h2>
<p>前提条件：所有边都是联通的（点可以不联通但是边必须要联通）<br>
存在欧拉路径的充分必要条件：要么所有点的出度均等于入度，要么有一个点的入度比出度多一，有一个点的入度比出度多一，其他的点入度等于出度。<br>
存在欧拉回路的充分必要条件：所有点的出度均等于入度</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>路径可以看做是由两条连向起点和终点的路径加上一堆环组成。因为满足每个点的度数是偶数的话，在出去这个点之后肯定需要再回来。那么就构成了一个环。</p>
<p>如何将点和路融合？</p>
<p>那么在求欧拉路径的时候，用dfs遍历每条路。在遍历到u结点的时候，遍历完他的每条出边之后再将他加入队列，那么和u相关的所有边都被遍历了一遍，相当于走了以u为顶点的环。那么这样得到的队列其实是终点到起点的顺序，那么将他倒序就可以了。</p>
<h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2>
<h3 id="欧拉回路" tabindex="-1"><a class="header-anchor" href="#欧拉回路" aria-hidden="true">#</a> 欧拉回路</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/1186/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/1186/<ExternalLinkIcon/></a></p>
<p>题意：<br>
给你一个有向图或者无向图，找出他的一条欧拉回路。</p>
<p>思路：<br>
先判断度数是否符合<br>
对于无向图来说，所有出度入度的和必须全是偶数<br>
对于有向图来说，出度必须等于入度。</p>
<p>判断完之后再从一个有边的点开始遍历，用cnt记录走了几条边，如果cnt少于总边数，那么说明边不联通，没有欧拉回路。</p>
<p>之后再倒序输出走过的点就可以了。</p>
<p>走到当前u的时候，我们需要遍历与他相连的每条边。</p>
<p>边的编号：对于有向图来说下标就是他的编号-1。对于无向图来说，因为又加了一个反向边，所以应该/2+1.</p>
<p>对于一条边，如果走过的话我们将他删掉。如果没有走过，那么我们将这个边标记并删掉，如果这个图是无向图，那么我们还需要删除他的反向边。然后遍历这个点，当遍历完的时候将这个边加入答案数组中。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">4e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">,</span>t<span class="token punctuation">;</span>
<span class="token keyword">int</span> e<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>ne<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>idx<span class="token punctuation">,</span>h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> used<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> chu<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>ru<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">;</span>
	ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
	h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">=</span>idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>i<span class="token operator">=</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token operator">~</span>i<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> used<span class="token punctuation">[</span>i<span class="token operator">^</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> id<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			id<span class="token operator">=</span>i<span class="token operator">/</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span> id<span class="token operator">=</span><span class="token operator">-</span>id<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			id<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ans<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>t<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token punctuation">;</span>
		<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ru<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		chu<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ru<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>chu<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"NO"</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>ru<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>chu<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"NO"</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">~</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span>ans<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span>m<span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"NO"</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"YES"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>ans<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span>ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="骑马修栅栏" tabindex="-1"><a class="header-anchor" href="#骑马修栅栏" aria-hidden="true">#</a> 骑马修栅栏</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/1126/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/1126/<ExternalLinkIcon/></a><br>
题意：<br>
有不超过500个农场，有m个栅栏，需要将所有栅栏维修，且每个栅栏只经过一次（保证一定有解），求经过的点字典序最小的路径。<br>
思路：<br>
对于一个u点来说，我们如果将与他相连的点从小到大遍历边，并且在遍历完之后最后将u加进去，那么大的点肯定会比小的点先键入队中。而且我们求的是路径的逆序，那么我们按照这个方案逆序输出的点实际上就是点按字典序最小的路径。<br>
那么因为可以在任何点出发任何点结束，那么我们先判断有没有度数是奇数的点，如果有的话从最先出现的度数为奇数的点开始遍历，如果没有的话就从最先出现的度数不为0的点开始遍历。<br>
对于每个点u，从小到大遍历完他的所有边再将他加进去。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> m<span class="token punctuation">;</span>
<span class="token keyword">int</span> g<span class="token punctuation">[</span><span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> ans<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">500</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>g<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			g<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	ans<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token punctuation">;</span>
		g<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		g<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		d<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> s<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>d<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> s<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">500</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			s<span class="token operator">=</span>i<span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>ans<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span> cout<span class="token operator">&lt;&lt;</span>ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单词游戏" tabindex="-1"><a class="header-anchor" href="#单词游戏" aria-hidden="true">#</a> 单词游戏</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/1187/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/1187/<ExternalLinkIcon/></a></p>
<p>题意：<br>
有n个-盘子，每个盘子里装一个由小写字母组成的盘子，需要给这些盘子找到一个合适的顺序，使得相邻的两个盘子中，前一个盘子上的单词末尾的字母等于后一个单词的首字母。</p>
<p>思路：<br>
把每个单词看成是一个由首字母连向末字母的一条边，那么要求的是这些边是否存在欧拉路径。<br>
有欧拉路径的条件：<br>
1.所有边联通<br>
2.除了起点和终点的点其他的点的出度等于入度，起点的出度比入度多1，终点的入度比出度多1.<br>
第一个条件可以用并查集来维护，找到所有出现的字母，看看他们的集合数是不是只有一个。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> ru<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>chu<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> p<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> cnt<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">!=</span>x<span class="token punctuation">)</span> p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">find</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> p<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">26</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>ru<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> ru<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>chu<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> chu<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> st<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
		<span class="token keyword">int</span> op1<span class="token operator">=</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> len<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> op2<span class="token operator">=</span>s<span class="token punctuation">[</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
		st<span class="token punctuation">[</span>op1<span class="token punctuation">]</span><span class="token operator">=</span>st<span class="token punctuation">[</span>op2<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">find</span><span class="token punctuation">(</span>op1<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token function">find</span><span class="token punctuation">(</span>op2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			p<span class="token punctuation">[</span><span class="token function">find</span><span class="token punctuation">(</span>op1<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">find</span><span class="token punctuation">(</span>op2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		chu<span class="token punctuation">[</span>op1<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		ru<span class="token punctuation">[</span>op2<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> con1<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>con2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>con3<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">bool</span> f<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">26</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>chu<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>ru<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			con3<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>chu<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>ru<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			con1<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ru<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>chu<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			con2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			f<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"The door cannot be opened."</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">26</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>i<span class="token operator">&amp;&amp;</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> con<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"The door cannot be opened."</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>con1<span class="token operator">==</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span>con2<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token punctuation">(</span>con1<span class="token operator">==</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>con2<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"Ordering is possible."</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span><span class="token string">"The door cannot be opened."</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


