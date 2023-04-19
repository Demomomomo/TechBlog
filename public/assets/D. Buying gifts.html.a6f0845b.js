import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as s,e as n,f as e,d as c,r as i}from"./app.e147a21b.js";const l={},u={href:"https://codeforces.com/contest/1802/problem/D",target:"_blank",rel:"noopener noreferrer"},k=s("br",null,null,-1),r=s("br",null,null,-1),d=s("br",null,null,-1),v=s("br",null,null,-1),m=s("br",null,null,-1),b=s("br",null,null,-1),f=s("br",null,null,-1),_=s("br",null,null,-1),y=s("br",null,null,-1),w=c(`<p>注意，我们在使用set的erase函数时，尽量删除迭代器而不是删除元素，因为在multiset中，如果我们erase(x)的话，就是将所有的x都删除，而q.erase(q.lower_bound(x))是只将一个删除。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">&gt;</span> pii<span class="token punctuation">;</span>
pii a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> pre<span class="token punctuation">,</span>ne<span class="token punctuation">;</span>
	cin<span class="token operator">&gt;&gt;</span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">&gt;&gt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token operator">&gt;&gt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>second <span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> ne<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>second <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">1e18</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ne<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>ne<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>second <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ne<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">auto</span> mx<span class="token operator">=</span>ne<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
			mx<span class="token operator">--</span><span class="token punctuation">;</span>
			ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>mx<span class="token operator">-</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>mx<span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token operator">&amp;&amp;</span>pre<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">auto</span> id<span class="token operator">=</span>pre<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>pre<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
					ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span><span class="token operator">*</span>id<span class="token operator">-</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>pre<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
					id<span class="token operator">--</span><span class="token punctuation">;</span>
					ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id<span class="token operator">-</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> 
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">auto</span> id<span class="token operator">=</span>pre<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>pre<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
				ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span><span class="token operator">*</span>id<span class="token operator">-</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>pre<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
				id<span class="token operator">--</span><span class="token punctuation">;</span>
				ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>first <span class="token operator">-</span><span class="token operator">*</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>			
		<span class="token punctuation">}</span>
		pre<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>second <span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token punctuation">}</span> 
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	cin<span class="token operator">&gt;&gt;</span>t<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(h,x){const a=i("ExternalLinkIcon");return p(),o("div",null,[s("p",null,[n("原题链接："),s("a",u,[n("https://codeforces.com/contest/1802/problem/D"),e(a)]),k,n(" 题意："),r,n(" 有n个ai和bi，对于每个i，要么选择ai，要么选择bi，要求选择的ai和bi的最大值的差值最小，输出最大值。"),d,n(" 思路："),v,n(" 我们先枚举选择的ai的最大值。"),m,n(" 按ai的数值从小到大排序，枚举ai是我们选择的最大值，bi必不选，那么[i+1，n] 这段区间就只能选b，如果选a的话最大值会变。对于[1,i-1]这段区间可以选择a也可以选择b，最终的目标是想让b的最大值和a的最大值最接近。"),b,n(" 对于[i+1,n]这段区间的b的最大值是个定值，假如为mx。"),f,n(" 如果mx>ai，那么我们就不用再从[1,i-1]找bi了，因为如果找的bi< mx,那么不会影响b的最大值，最后还是mx和ai做运算。如果找到的bi>mx，那么最大值与ai的差值就增大了。"),_,n(" 如果mx< ai的话，我们可以在[1,i-1]中找一个大于mx的最接近ai的b值。"),y,n(" 分别用两个set来维护b[1~i-1]和b[i+1,n]，每次找的时候直接用lower_bound找到最接近ai的数即可。")]),w])}const D=t(l,[["render",g],["__file","D. Buying gifts.html.vue"]]);export{D as default};
