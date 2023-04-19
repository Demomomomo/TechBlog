import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,e as s,f as e,d as c,r as l}from"./app.e147a21b.js";const i={},u={href:"https://vjudge.net/contest/541856#problem/K",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>题意：有两个数组a，b，每个数组都有n个数，我们需要构造一个c数组，使得c[k]=max(a[i]b[j])(i&amp;j&gt;=k),求这个c数组的和模上998244353的值。</p><p>思路：<br> c[k]找的是两个数相乘的最大值，然而数有正有负，两个很大的正数相乘可以很大，两个很大的负数相乘也可以很大，所以我们需要找一下满足条件的最大值和最小值。<br> 需要满足的条件：<br> 因为i&amp;j&gt;=k，假设k=1001的话，i和j必须得是形如1XX1的数<br> 如何找：<br> 满足i&amp;j&gt;=k-1的i，j会被包含在满足i&amp;j&gt;=k的i，j里<br> 所以我们可以按坐标从大到小的顺序，当遍历到k=i的时候，将他的所有二进制表示为0的数位变成1之后的坐标里取最大最小值。<br> 比如：k的二进制表示为1001<br> 那么满足条件的i和j就是：1101,1011<br> 为什么不用枚举1111的情况：<br> 因为是从大到小枚举，在枚举1110的时候已经和1111取了最大最小值，那么就不用再列举。</p><p>找到满足k的所有a和b的最大值最小值之后，因为满足i&amp;j&gt;=k-1的i，j会被包含在满足i&amp;j&gt;=k的i，j里，所以我们将坐标i从后往前枚举，每次取出来a的最大值和b的最大值，a的最小值和b的最小值，a的最大值和b的最小值，a的最小值和b的最大值取最大之后，再与i+1处的最大值取最大值，就是满足k=i的情况下c[i]的值。</p><p>（注意取模，取模之后没有负数，那么我们就对结果额外处理一下）</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">const</span> <span class="token keyword">int</span> mod<span class="token operator">=</span><span class="token number">998244353</span><span class="token punctuation">;</span><span class="token comment">//</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e6</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
ll a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
ll b<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
ll mxa<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
ll mia<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
ll mxb<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
ll mib<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mxa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>mia<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mxb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>mib<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token number">1ll</span><span class="token operator">&lt;&lt;</span>j<span class="token punctuation">)</span><span class="token operator">&lt;</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> temp<span class="token operator">=</span><span class="token number">1ll</span><span class="token operator">&lt;&lt;</span>j<span class="token punctuation">;</span>
			temp<span class="token operator">=</span>temp<span class="token operator">|</span>i<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">&lt;</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
				mxa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mxa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mxa<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				mia<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mia<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mia<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				mxb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mxb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mxb<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				mib<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mib<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mib<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">//	for(int i=0;i&lt;n;i++)cout&lt;&lt;mxa[i]&lt;&lt;&quot; &quot;&lt;&lt;mia[i]&lt;&lt;endl;</span>
	ll ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	ll op<span class="token operator">=</span><span class="token operator">-</span><span class="token number">2e18</span><span class="token punctuation">;</span><span class="token comment">//记录最大值，因为数据范围是-1e9~1e9，那么取极小值就取-2e18</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ll num1<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mxa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>mxb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mia<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>mib<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ll num2<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mxa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>mib<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>mxb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>mia<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ll num<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		op<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>op<span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ans<span class="token operator">=</span><span class="token punctuation">(</span>ans<span class="token operator">+</span>op<span class="token operator">%</span>mod<span class="token punctuation">)</span><span class="token operator">%</span>mod<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>ans<span class="token operator">%</span>mod<span class="token operator">+</span>mod<span class="token punctuation">)</span><span class="token operator">%</span>mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function r(d,m){const a=l("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[s("原题链接："),n("a",u,[s("https://vjudge.net/contest/541856#problem/K"),e(a)])]),k])}const f=t(i,[["render",r],["__file","mx-mul.html.vue"]]);export{f as default};
