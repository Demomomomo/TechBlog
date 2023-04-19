<template><div><p>原题链接：<a href="https://ac.nowcoder.com/acm/contest/46813/C" target="_blank" rel="noopener noreferrer">https://ac.nowcoder.com/acm/contest/46813/C<ExternalLinkIcon/></a></p>
<p>题意：p是一个下标从0开始的0~9的排列，有两个数字a，b，在给你之前会做一遍a[i]=p[a[ i ] ],b[i]=p[b [i] ]的操作，那么问在变化之前的a b的大小关系<br>
数据范围：0&lt;=a,b&lt;=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><msup><mn>0</mn><mrow><mn>1</mn><msup><mn>0</mn><mn>5</mn></msup></mrow></msup></mrow><annotation encoding="application/x-tex">10^{10^{5} }</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9869em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9869em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br>
（给的数字可能有前导0）</p>
<p>误区：<br>
长度长的不一定数字就大<br>
比如a=00000003,b=7,a&gt;b</p>
<p>思路：可以把p[i]=x，看成是一个i-&gt;x的映射关系<br>
当长度一样时，如果ab串相等，对于每个i，都在p数组里映射同一个数，所以原来的数肯定一样。对于不相等的ab，可以在第一个不相等的位置让a[i]映射大的数，b[i]映射小的数，也可以让a[i]映射小的数，b[i]映射大的数，所以ab的大小关系不确定。</p>
<p>当长度不一样的时候，假设a长度大于b长度<br>
如果没有前导0，那么a肯定大于b<br>
有前导0的话，我们要找找有没有a&lt;=b的情况，如果有的话就是不确定，如果没有的话a肯定大于b</p>
<p>找a&lt;=b的情况让a尽可能小，那么就让a[0]映射到0，设f=a[0],a比b多出来x个字符。<br>
那么检查a的前i个字符是不是都等于f，只要有一个不等于f说明a的位数肯定比b多，那么a&gt;b。<br>
当都等于f的时候，那么我们去掉a前面比b多的字符，再比较a，b。当后来的a=b的时候说明可能相等，那么a!=b。当不相等的时候，我们一位一位比较a和b，找到第一个a[i]!=b[i]的位置，如果b[i]==f,说明a&gt;b，如果b[i]!=f，说明a在最小的情况下有可能&lt; b，a和b大小补确定。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5005</span><span class="token punctuation">,</span>M<span class="token operator">=</span><span class="token number">600</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
string a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span>b<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span>b<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">"="</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span><span class="token string">"!"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">char</span> ans<span class="token operator">=</span><span class="token char">'>'</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>b<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
			ans<span class="token operator">=</span><span class="token char">'&lt;'</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">int</span> id<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>b<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">char</span> op<span class="token operator">=</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>id<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		string aa<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>aa<span class="token operator">==</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"!"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>b<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>aa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span><span class="token string">"!"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


