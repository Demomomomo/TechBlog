<template><div><p>原题链接：<a href="https://ac.nowcoder.com/acm/contest/46814/B" target="_blank" rel="noopener noreferrer">https://ac.nowcoder.com/acm/contest/46814/B<ExternalLinkIcon/></a><br>
题意：有一个长度为n的数组a，下标从1开始，有q次操作。<br>
修改操作： 1 x：将数组末尾增加一个数x，数组长度增加1<br>
查询操作： 2 x：求[x+1,n]的区间内，有多少个数满足a[i]是a[x]的倍数。</p>
<p>思路：如果想找[x+1,n]的区间内是a[x]的倍数，那么我们可以用[1,n]含有的x的倍数减去[1,x]中含有的x的倍数。<br>
设记录i的倍数的个数的数组为v，那么其实我们每添加一个数x的时候，x的所有因数的v都会+1。<br>
当我们询问a[x]的倍数的时候，只需要将记录a[x]的倍数个数的v值减去在[1~x]中的a[x]的倍数就行了。<br>
那么我们用一个g数组来存当走到i时，a[i]的倍数个数。<br>
那么答案就是v[a[x]]-g[x]</p>
<p>时间复杂度：O（n*450）（n个数，每个数找他的所有因子）</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">4e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> v<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//记录当前i的倍数个数</span>
<span class="token keyword">int</span> g<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//记录到i的时候已经有几个数是a[i]的倍数了</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> x<span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">*</span>j<span class="token operator">&lt;=</span>x<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">%</span>j<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">/</span>j<span class="token operator">!=</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
					v<span class="token punctuation">[</span>x<span class="token operator">/</span>j<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>v<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> op<span class="token punctuation">,</span>x<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>op<span class="token operator">>></span>x<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span>v<span class="token punctuation">[</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">-</span>g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			a<span class="token punctuation">[</span><span class="token operator">++</span>n<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">*</span>j<span class="token operator">&lt;=</span>x<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">%</span>j<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">/</span>j<span class="token operator">!=</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
						v<span class="token punctuation">[</span>x<span class="token operator">/</span>j<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			g<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token operator">=</span>v<span class="token punctuation">[</span>a<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


