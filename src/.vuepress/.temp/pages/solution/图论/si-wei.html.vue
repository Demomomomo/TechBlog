<template><div><h2 id="_2263-neighbor" tabindex="-1"><a class="header-anchor" href="#_2263-neighbor" aria-hidden="true">#</a> 2263: neighbor</h2>
<p>原题链接：<br>
<a href="http://acm.zzuli.edu.cn/problem.php?id=2263" target="_blank" rel="noopener noreferrer">http://acm.zzuli.edu.cn/problem.php?id=2263<ExternalLinkIcon/></a><br>
题意：<br>
有一个n*m的矩阵，给出主视图和左视图的高度，求这个矩阵的总高度的最大值和最小值。</p>
<p>思路：<br>
最大值：对于每个格子来说，取左视图和主视图的最小值，那么就保证了每个格子都被填上并且符合主视图和左视图。<br>
最小值：先将主视图填上，因为对于行列高度相等的数可以放在一个格子上就能满足，那么我们就遍历左视图，如果这个格子在主视图没有出现过或者在左视图中出现的次数大于在主视图中出现的次数，那么我们就将他加上。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1000</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ans<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> ii<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> jj<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>ii<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>jj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> mx<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>mi<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			mx<span class="token operator">+=</span><span class="token function">min</span><span class="token punctuation">(</span>ii<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>jj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> mp<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		mi<span class="token operator">+=</span>jj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		mp<span class="token punctuation">[</span>jj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>mp<span class="token punctuation">[</span>ii<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			mi<span class="token operator">+=</span>ii<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			mp<span class="token punctuation">[</span>ii<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>mi<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token operator">&lt;&lt;</span>mx<span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdu-5927-auxiliary-set" tabindex="-1"><a class="header-anchor" href="#hdu-5927-auxiliary-set" aria-hidden="true">#</a> HDU 5927 Auxiliary Set</h2>
<p>原题链接：<br>
<a href="https://acm.hdu.edu.cn/showproblem.php?pid=5927" target="_blank" rel="noopener noreferrer">https://acm.hdu.edu.cn/showproblem.php?pid=5927<ExternalLinkIcon/></a></p>
<p>题意：<br>
有一颗根节点是1的树，其中有重要的点和不重要的点，重要的点需满足以下两个条件至少一个：<br>
1.本来就是重要的点<br>
2.是两个重要的点的最近共同祖先<br>
有t个测试实例，对于每个测试实例：<br>
给出结点个数n和询问次数q<br>
对于每次询问：<br>
给出一个数con，表示不重要的点的个数<br>
接下来con个数是不重要的点的编号<br>
对于每个询问，求出重要的点的个数（每次询问之间相互独立）</p>
<p>思路：<br>
ans记录重要结点的个数<br>
本来就是重要的点有n-con个<br>
那么我们就需要检查一下不重要的点，对于每个不重要的点看看他是不是两个重要的点的最近共同祖先</p>
<p>对于点u，如果他的以儿子结点为根的子树中，多于两个子树里有
重要的结点，那么u就能变成重要的结点</p>
<p>那么我们可以先预处理好每个结点的儿子结点的个数，每个点的父节点和每个点的深度</p>
<p>然后再对不重要的结点按照深度从大到小的顺序排序</p>
<p>从最深的结点u开始遍历，如果u的有重要点的儿子结点数量超过两个，那么u就可以变成重要结点，ans++</p>
<p>如果变不了重要结点，说明u的有重要点的儿子结点数量要么是0要么是1，如果是0，那么u的父节点的有重要儿子结点的数量就需要-1，因为每次询问独立，那么我们需要将减掉的点给记录一下，当这次询问完毕时再复原加上</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> maxn<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> d<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> book<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> edg<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> que<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> impor<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> unimpor<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> son<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> so<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> fa<span class="token punctuation">[</span>maxn<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> d<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">></span>d<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span>y<span class="token punctuation">;</span>son<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>son<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>d<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>edg<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
	    <span class="token keyword">if</span><span class="token punctuation">(</span>edg<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>y<span class="token punctuation">)</span><span class="token function">dfs</span><span class="token punctuation">(</span>edg<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">int</span> t<span class="token punctuation">;</span>
   cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
   <span class="token keyword">int</span> e<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> 
   <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
     <span class="token keyword">int</span> n<span class="token punctuation">;</span>
     <span class="token keyword">int</span> q<span class="token punctuation">;</span>
     <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
    
     <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
 	edg<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
	edg<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>	
     <span class="token punctuation">}</span>
     
     <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">int</span>  m<span class="token punctuation">;</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Case #%d:\n"</span><span class="token punctuation">,</span> e<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
     <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token operator">--</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>  
	   <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//不重要节点</span>
	   so<span class="token punctuation">[</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>son<span class="token punctuation">[</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//节点的儿子</span>
	<span class="token punctuation">}</span>
	ans<span class="token operator">=</span>n<span class="token operator">-</span>m<span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>unimpor<span class="token punctuation">,</span> unimpor<span class="token operator">+</span>m<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	   <span class="token keyword">if</span><span class="token punctuation">(</span>so<span class="token punctuation">[</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">2</span><span class="token punctuation">)</span>ans<span class="token operator">++</span><span class="token punctuation">;</span>
	   <span class="token keyword">else</span>
	   <span class="token punctuation">{</span>
	    <span class="token keyword">if</span><span class="token punctuation">(</span>so<span class="token punctuation">[</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>  so<span class="token punctuation">[</span>fa<span class="token punctuation">[</span>unimpor<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	   <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\n"</span><span class="token punctuation">,</span> ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
 
     edg<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		vector&lt;int>().swap(edg[i]);</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


