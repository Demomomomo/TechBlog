<template><div><p>原题链接：<a href="https://atcoder.jp/contests/arc155/tasks/arc155_a" target="_blank" rel="noopener noreferrer">https://atcoder.jp/contests/arc155/tasks/arc155_a<ExternalLinkIcon/></a></p>
<p>题意：给你一个长度为n的字符串s以及一个数字k，能否找出一个字符串t，使得：<br>
1.s+t是回文串<br>
2.t+s是回文串</p>
<p>思路：<br>
假设s=ab，k=9，那么我们构造t的话首先要满足s+t是回文，那么就将t的最后两个字符填上ba：</p>
<img src="https://img-blog.csdnimg.cn/669030932e634713b7dd53484c3397b0.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228">  
<p>也要满足t+s是回文，那么再将t的前两个字符填上ba：<br>
<img src="https://img-blog.csdnimg.cn/28499064a7dd4854ac3f9c4d5db25ec3.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228"></p>
<p>然后一直构造下去最终得到：<br>
<img src="https://img-blog.csdnimg.cn/71fcf60ecca348f69e6daab36dcd57e6.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228"></p>
<p>然后把t+s能构成回文的部分去掉，变成：<br>
<img src="https://img-blog.csdnimg.cn/3585b4f0303941ee97f021cc3e66e451.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228"></p>
<p>再把s+t能构成回文部分的去掉，变成：<br>
<img src="https://img-blog.csdnimg.cn/3995c9e3ccf247409d71a80e01f77041.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228"></p>
<p>那么实际上就是构造一个长度为k%(2*n)的t字符串，使得t+s和s+t是回文串<br>
因为满足条件的t字符串是确定的，那么我们只需要按照要求构造t，把t的空隙填满：<br>
先按t+s是回文填t的空隙，如果t没有被填完的话，再按照t+s是回文填t的空隙，生成t字符串之后，我们只用判断s+t和t+s是不是回文串就可以了。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">4e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> k<span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">diff</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> len<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>s<span class="token punctuation">[</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>k<span class="token punctuation">;</span>
	string s<span class="token punctuation">,</span>ss<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
	ss<span class="token operator">=</span>s<span class="token punctuation">;</span>
	<span class="token function">reverse</span><span class="token punctuation">(</span>ss<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ss<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> op<span class="token operator">=</span>k<span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">diff</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"Yes"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"No"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> len<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>op<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	string t<span class="token operator">=</span>ss<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> oo<span class="token operator">=</span>t<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		len<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>op<span class="token operator">-</span>oo<span class="token punctuation">)</span><span class="token punctuation">;</span>
		string tt<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">reverse</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>tt<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		t<span class="token operator">+=</span>tt<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">//	cout&lt;&lt;"t=="&lt;&lt;t&lt;&lt;endl;</span>
	string ans1<span class="token operator">=</span>s<span class="token operator">+</span>t<span class="token punctuation">;</span>
<span class="token comment">//	cout&lt;&lt;"ans1=="&lt;&lt;ans1&lt;&lt;endl;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">diff</span><span class="token punctuation">(</span>ans1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"No"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	string ans2<span class="token operator">=</span>t<span class="token operator">+</span>s<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">diff</span><span class="token punctuation">(</span>ans2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"No"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"Yes"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


