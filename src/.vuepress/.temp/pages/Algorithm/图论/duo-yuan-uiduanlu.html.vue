<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>起点和终点都不确定的最短路<br>
时间复杂度O（n* n *n）<br>
思路：
用邻接矩阵来存储边d[i][j]存i到j的边的长度<br>
三重循环：<br>
第一重循环循环中间点，第二第三重循环循环两边点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//初始化：</span>

<span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span><span class="token number">0x3f</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">//求最短路</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span> 
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
				d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>d<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对状态的分析：
d[k][i][j]所以从i出发，最终走到j，且中间只经过节点编号不超过k的点的所有路径的最短路径
分成两部分：<br>
不包含编号为k的点的路径：d[k-1][i][j]<br>
包含编号为k的点的路径:那么路径就是i-&gt;k-&gt;j:<br>
对于i-&gt;k这段路径，因为题目限制了经过节点编号不超过k，所以他的状态表示是：d[k-1][i][k]<br>
那么k-&gt;j同理得：d[k-1][k][j]<br>
所以包含k的点的路径表示为：d[k-1][i][k]+d[k-1][k][j]</p>
<p>应用：<br>
1.最短路
2.传递闭包
3.找最小环
4.恰好经过k条边的最短路</p>
</div></template>


