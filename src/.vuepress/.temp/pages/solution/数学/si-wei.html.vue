<template><div><h2 id="整除光棍" tabindex="-1"><a class="header-anchor" href="#整除光棍" aria-hidden="true">#</a> 整除光棍</h2>
<p>原题链接：<br>
<a href="https://pintia.cn/problem-sets/1639924117484503040/exam/problems/1639924223701057546" target="_blank" rel="noopener noreferrer">https://pintia.cn/problem-sets/1639924117484503040/exam/problems/1639924223701057546<ExternalLinkIcon/></a><br>
题意：<br>
给定一个个位数不是5的奇数n，请你找出一个数最小的数x使得x*n的结果是所有位数都是1的数，保证一定有解。输出x和x的位数<br>
思路：<br>
我们可以模拟一下都是1组成的数整除n的过程。<br>
即设一个数con刚开始为0，当con%n！=0的时候，我们将他乘10+1，这样每次都使得他是所有位数都是1的数。那么我们再比较con和n的大小，如果比n大说明可以除以n，那么我们就输出con/n，如果小的话我们输出0.</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">bool</span> f<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> i<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		con<span class="token operator">=</span>con<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token operator">>=</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> op<span class="token operator">=</span>con<span class="token operator">/</span>n<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span>op<span class="token punctuation">;</span>
			con<span class="token operator">-=</span>op<span class="token operator">*</span>n<span class="token punctuation">;</span>
			f<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> cout<span class="token operator">&lt;&lt;</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	cout<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token operator">&lt;&lt;</span>i<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


