<template><div><p>原题链接：<a href="https://ac.nowcoder.com/acm/contest/46800/G?&amp;headNav=acm" target="_blank" rel="noopener noreferrer">https://ac.nowcoder.com/acm/contest/46800/G?&amp;headNav=acm<ExternalLinkIcon/></a></p>
<p>你有一个长为n的数组a，需要支持以下两种操作：<br>
1.输入l，r，k，对区间[l,r]中所有数字执行a[i]=10 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mi>a</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{a[i]}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mord mathnormal">a</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">]</span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.28em' viewBox='0 0 400000 1296' preserveAspectRatio='xMinYMin slice'><path d='M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span> ,round为四舍五入函数<br>
2.输出当前数组所有数字的和。<br>
你需要正确处理m次这样的操作</p>
<p>思路：<br>
对1e9一直开根号的话，大概操作9次左右最后会变成1<br>
数据范围a[i]&lt;=1e9，因为开根号很少次就可以得到一个固定的值，那么我们找一个数试试一直按照上面的函数改变几次会变成一个固定的值<br>
那么对于1e9来说，他操作9次之后就变成了100，而且100进行上述的操作时候还是100，那么说明对于数组a，我们最多操作n*10次操作每个数就可以变成一个固定的值。<br>
那么我们用set来存储还没有变成100的值的下标，每次需要操作的时候我们就从一个大于等于l的下标开始，大于r结束的set里存的每个下标id，对a[id]进行k次操作就行了<br>
为了方便计算sum，我们每次对一个数进行完k次操作的时候，减去原来他的值再加上他变化后的值就可以了</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> op<span class="token operator">=</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token operator">*</span><span class="token function">sqrt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> op<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> st<span class="token punctuation">;</span>
	<span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		st<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		sum<span class="token operator">+=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> op<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>op<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> l<span class="token punctuation">,</span>r<span class="token punctuation">,</span>k<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>l<span class="token operator">>></span>r<span class="token operator">>></span>k<span class="token punctuation">;</span>
			<span class="token keyword">auto</span> s<span class="token operator">=</span>st<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// </span>
			vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> yy<span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> i<span class="token operator">=</span>s<span class="token punctuation">;</span>i<span class="token operator">!=</span>st<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span><span class="token operator">*</span>i<span class="token operator">&lt;=</span>r<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">int</span> con<span class="token operator">=</span>k<span class="token punctuation">;</span>
				<span class="token keyword">int</span> id<span class="token operator">=</span><span class="token operator">*</span>i<span class="token punctuation">;</span>
				<span class="token keyword">while</span><span class="token punctuation">(</span>con<span class="token operator">&amp;&amp;</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					sum<span class="token operator">-=</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
					a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					sum<span class="token operator">+=</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
					con<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">==</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> yy<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//这里注意我们不能直接在st里删除id这个下标，不然指针就会指向删除之后的空值。这里我们先用一个vector数组来存需要删除的下标，在遍历完st之后我们再删除</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>yy<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> st<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>yy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>、、删除下标 
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span>sum<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


