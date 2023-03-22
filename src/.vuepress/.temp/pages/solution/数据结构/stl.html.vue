<template><div><h2 id="特殊堆栈" tabindex="-1"><a class="header-anchor" href="#特殊堆栈" aria-hidden="true">#</a> 特殊堆栈</h2>
<p>原题链接：<br>
<a href="https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805053695574016" target="_blank" rel="noopener noreferrer">https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805053695574016<ExternalLinkIcon/></a><br>
题意：<br>
对于一个栈有n个操作，三个类型：<br>
1.Push x：将x加入栈中<br>
2.Pop：将栈顶元素输出并删除，如果栈中元素为0，那么就不合法输出Invalid<br>
3.PeekMedian：返回栈中所有数的中间值，设栈中元素为x，当x为偶数的时候输出第x/2大的数，如果x为奇数的时候输出(x+1)/2大的数。如果栈中元素为0，那么不合法，输出Invalid<br>
思路：<br>
一个栈st来模拟对栈的操作<br>
一个multiset a来找中间值<br>
一个multiset的指针mi来指向中间值<br>
l记录mi左边的元素数量，r记录mi右边的元素数量</p>
<p>对于插入x的操作，如果我们插入之前栈为空，那么我们插入的数就是唯一一个值，也就是中间值。那么我们将x插入st和multiset之后，mi指向x的地址，l设为0，r设为0；如果元素不为空，那么我们就比一下这个值和mi所指向的数的大小，看x插在mi前还是mi后，如果x&lt;*mi，那么l++，否则就r++。</p>
<p>对于pop操作，我们先找到栈顶元素x，将他删掉，再寻找他在a中最先出现的的地址it。如果x&lt;*mi,那么l--；如果x&gt; *mi，那么r--；当x== *mi的时候，如果it==mi：如果mi的左边有数就向左移，否则向右移，之后删除it；如果it！=mi，那么it一定在mi左边，那么直接删除it，l--就可以了。</p>
<p>对于输出中值，因为找中间位置，当l&gt;r的时候mi向右移<br>
当l&lt; r的时候往左移<br>
最后mi指向的数就是中值。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stack></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> st<span class="token punctuation">;</span>
multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> l<span class="token punctuation">,</span>r<span class="token punctuation">;</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token double-colon punctuation">::</span>iterator mi<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s<span class="token punctuation">;</span>
		<span class="token keyword">int</span> x<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token string">"Push"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				a<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				mi<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				l<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token operator">*</span>mi<span class="token punctuation">)</span> l<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">else</span> r<span class="token operator">++</span><span class="token punctuation">;</span>
				st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				a<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token string">"Pop"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"Invalid"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token keyword">int</span> x<span class="token operator">=</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				cout<span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token double-colon punctuation">::</span>iterator it<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token operator">*</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
					a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
					l<span class="token operator">--</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">></span><span class="token operator">*</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
					a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
					r<span class="token operator">--</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>it<span class="token operator">==</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
						<span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
							l<span class="token operator">--</span><span class="token punctuation">;</span>
							mi<span class="token operator">--</span><span class="token punctuation">;</span>
							a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> 
						<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
							r<span class="token operator">--</span><span class="token punctuation">;</span>
							mi<span class="token operator">++</span><span class="token punctuation">;</span>
							a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> 
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
						a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
						l<span class="token operator">--</span><span class="token punctuation">;</span> 
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"Invalid"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
				l<span class="token operator">++</span><span class="token punctuation">;</span>
				r<span class="token operator">--</span><span class="token punctuation">;</span>
				mi<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">></span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
				l<span class="token operator">--</span><span class="token punctuation">;</span>
				r<span class="token operator">++</span><span class="token punctuation">;</span>
				mi<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>mi<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


