<template><div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">ksm</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
	a<span class="token operator">%=</span>p<span class="token punctuation">;</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">1</span><span class="token operator">%</span>p<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span> ans<span class="token operator">=</span>ans<span class="token operator">*</span>a<span class="token operator">%</span>p<span class="token punctuation">;</span>
		a<span class="token operator">=</span>a<span class="token operator">*</span>a<span class="token operator">%</span>p<span class="token punctuation">;</span>
		b<span class="token operator">>>=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


