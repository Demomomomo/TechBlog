<template><div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>有n个结点，n-1条边的联通无向图<br>
无向无环的联通图</p>
<h3 id="适用于无根树和有根树" tabindex="-1"><a class="header-anchor" href="#适用于无根树和有根树" aria-hidden="true">#</a> 适用于无根树和有根树</h3>
<p>森林：每个联通分量（连通块）都是树的图。一棵树也是森林。<br>
生成树：一个联通无向图的生成子树，同时要求是树。即在子树中有n个点，n-1条边且联通。</p>
<h3 id="只适用于有根树" tabindex="-1"><a class="header-anchor" href="#只适用于有根树" aria-hidden="true">#</a> 只适用于有根树</h3>
<p>父亲：对于除了根节点以外的每个节点，定义为从该节点到根路径上的第二个结点。根节点没有父结点。<br>
祖先：一个点到根节点的路径上，除了他本身的点以外的结点，根节点没有祖先。<br>
子节点：如果u是v的父亲，那么v是u的子节点。<br>
结点的深度：到根结点的路径上的边数。<br>
树的高度：所有结点的深度的最大值。<br>
兄弟：同一个父亲的多个子节点互为兄弟。<br>
后代：子节点和子节点的后代。<br>
子树：删掉与父节点相连的边后，该点所在的子图。</p>
<h2 id="储存" tabindex="-1"><a class="header-anchor" href="#储存" aria-hidden="true">#</a> 储存</h2>
<h3 id="邻接表" tabindex="-1"><a class="header-anchor" href="#邻接表" aria-hidden="true">#</a> 邻接表</h3>
<p>对于无根树：为每个结点用一个vector数组来存所有与他相连的结点编号。<br>
对于有根数：
方法1：若给定的是无向图，可以按上面的方法储存，但是在遍历的时候要区分一下结点的上下关系，即不能往回走。<br>
方法2：用vector数组来存每个结点的子节点，如果需要的话还可以再开辟一个数组来记录父节点。</p>
<h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3>
<p>记录每个结点的左右子节点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">name</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">,</span>l<span class="token punctuation">,</span>r<span class="token punctuation">;</span>
<span class="token punctuation">}</span>q<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树的遍历" tabindex="-1"><a class="header-anchor" href="#树的遍历" aria-hidden="true">#</a> 树的遍历</h2>
<h3 id="树上dfs" tabindex="-1"><a class="header-anchor" href="#树上dfs" aria-hidden="true">#</a> 树上dfs</h3>
<p>先访问根结点，再访问根结点的每个儿子的子树。<br>
可以用来求每个结点的深度，父亲等信息。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>e<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>ne<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span><span class="token keyword">int</span> fa<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">!=</span>fa<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> root<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//图的深度优先搜索：</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
    st<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//标记一下已经走过了</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token function">dfs</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 图的宽度优先遍历</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span>
	q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span><span class="token number">0x3f</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> t<span class="token operator">=</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
		st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">>=</span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
				q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> 
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的先序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的先序遍历" aria-hidden="true">#</a> 二叉树的先序遍历</h3>
<p>按照根，左，右的顺序来遍历。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">xianxu</span><span class="token punctuation">(</span>name a<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">.</span>id<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>l<span class="token punctuation">)</span><span class="token function">xianxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>r<span class="token punctuation">)</span><span class="token function">xianxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的中序遍历" aria-hidden="true">#</a> 二叉树的中序遍历</h3>
<p>按照左，根，右的顺序来遍历</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">zhongxu</span><span class="token punctuation">(</span>name a<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>l<span class="token punctuation">)</span><span class="token function">zhongxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">.</span>id<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>r<span class="token punctuation">)</span><span class="token function">zhongxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树的后序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的后序遍历" aria-hidden="true">#</a> 二叉树的后序遍历</h3>
<p>按照左，右，跟的顺序来遍历</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">houxu</span><span class="token punctuation">(</span>name a<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>l<span class="token punctuation">)</span><span class="token function">houxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>r<span class="token punctuation">)</span><span class="token function">houxu</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>a<span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">.</span>id<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据中序遍历序列和任意另外一个序列可以求第三个序列<br>
<img src="https://img-blog.csdnimg.cn/8ca09824970b40f493e3dd7fc0389531.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>1.前序遍历的第一个是root，后序的最后一个根是root。<br>
2.先确定根节点，然后根据中序遍历，在根左边的为左子树，在根右边的为右子树。</p>
<h2 id="树的重心" tabindex="-1"><a class="header-anchor" href="#树的重心" aria-hidden="true">#</a> 树的重心</h2>
<p>定义：树的重心是树中的一个结点，如果将这个结点删除之后，剩余各个联通块中点数的最大值最小，那么这个点就是树的重心。</p>
<h3 id="例题-树的重心" tabindex="-1"><a class="header-anchor" href="#例题-树的重心" aria-hidden="true">#</a> 例题：树的重心</h3>
<p>原题链接：<a href="https://www.acwing.com/problem/content/848/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/848/<ExternalLinkIcon/></a></p>
<p>找到去掉重心之后连通块中的点数最大值。</p>
<p>思路：求出来一个点相连的每个子节点的子图中点数的最大值mx，再与他的父节点形成的子图的点数取最大值，答案就是每个点的mx的最小值。</p>
<p>父结点形成的子图的点数是n-他所在的子图的点数。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">2e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>e<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>ne<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>idx<span class="token punctuation">;</span>
<span class="token keyword">int</span> ans<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">;</span>
	ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">=</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
	h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">=</span>idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	st<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> con<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> mx<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">=</span>ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> j<span class="token operator">=</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> op<span class="token operator">=</span><span class="token function">dfs</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
			mx<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mx<span class="token punctuation">,</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
			con<span class="token operator">+=</span>op<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	mx<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mx<span class="token punctuation">,</span>n<span class="token operator">-</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
	ans<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span>mx<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> con<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token punctuation">;</span>
		<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	ans<span class="token operator">=</span><span class="token number">0x3f3f3f3f</span><span class="token punctuation">;</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树的直径" tabindex="-1"><a class="header-anchor" href="#树的直径" aria-hidden="true">#</a> 树的直径</h2>
<p>树上任意两点之间最长的简单路径即为数的直径</p>
<p>一条树可以有多条直径，他们的长度相等。<br>
可以用两次dfs或者树形dp的方法在O（n）的时间求出树的直径。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">200010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> N <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> e<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">,</span> w<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">,</span> ne<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">,</span> idx<span class="token punctuation">;</span>
LL d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">,</span> w<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">,</span> ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">,</span> h<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span> <span class="token comment">//找出距离u节点最远的节点</span>
<span class="token punctuation">{</span>
    queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    d<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            d<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">+</span> w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> d<span class="token punctuation">[</span>res<span class="token punctuation">]</span><span class="token punctuation">)</span>
            res <span class="token operator">=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">memset</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d%d%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> q <span class="token operator">=</span> <span class="token function">bfs</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%lld\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


