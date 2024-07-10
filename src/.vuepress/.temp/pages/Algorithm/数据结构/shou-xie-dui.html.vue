<template><div><h2 id="手写堆" tabindex="-1"><a class="header-anchor" href="#手写堆" aria-hidden="true">#</a> 手写堆</h2>
<p>以小根堆为例：<br>
操作：<br>
1.插入一个数<br>
2.求集合当中的最小值<br>
3.删除最小值<br>
4.删除任意一个元素<br>
5.修改任意一个元素</p>
<p>结构是一个二叉树，每个点都小于等于左右儿子，那么根节点就是整个树的最小值。
堆的存储：<br>
用一个一维数组来存，一号点是根节点，节点x的左儿子是x&lt;&lt;1,右儿子是x&lt;&lt;1|1.<br>
基本操作：<br>
down(x)：向下调整。假设我们修改一个数，将他改为一个比他大的数x，由于左右子树都得比父节点大，那么我们需要往下调整，将他和他的左右儿子中最小的数交换。如果交换之后x还是比他的左右儿子大，那么再将他与左右儿子中最小的交换。<br>
例如有一个结构为下图的堆：
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230411171154.png" alt="Pulpit rock" width="304" height="228"></p>
<p>把1改为6的操作：<br>
先将1改为6，因为6比3和4大，那么我们将6和3交换，交换之后6比3和5大，然后我们再将6和3交换。<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230411171230.png" alt="Pulpit rock" width="604" height="228"><br>
up（x）：往上调整。假设我们修改一个数，将他变为更小的数x，那么我们就需要将他与他的父节点比较，如果x小于他的父节点，那么他就与父节点交换。</p>
<h3 id="down-x" tabindex="-1"><a class="header-anchor" href="#down-x" aria-hidden="true">#</a> down(x)</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> t<span class="token operator">=</span>u<span class="token punctuation">;</span><span class="token comment">//记录最小值的编号</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> t<span class="token operator">=</span>u<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span>t<span class="token operator">=</span>u<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">!=</span>u<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">,</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">down</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="up-x" tabindex="-1"><a class="header-anchor" href="#up-x" aria-hidden="true">#</a> up(x)</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">></span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">,</span>h<span class="token punctuation">[</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        u<span class="token operator">/=</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入一个数" tabindex="-1"><a class="header-anchor" href="#插入一个数" aria-hidden="true">#</a> 插入一个数</h3>
<p>用con来表示堆的大小，heap数组来储存堆，那么我们就先将他加入到数组的最后一个位置：heap[++con]=x,up(con);</p>
<h3 id="求集合当中的最小值" tabindex="-1"><a class="header-anchor" href="#求集合当中的最小值" aria-hidden="true">#</a> 求集合当中的最小值</h3>
<p>heap[1]</p>
<h3 id="删除最小值" tabindex="-1"><a class="header-anchor" href="#删除最小值" aria-hidden="true">#</a> 删除最小值</h3>
<p>将最后一个数赋值给heap[1]，大小--，再更新一遍大小。<br>
heap[1]=heap[con],con--;
down(1)</p>
<h3 id="删除任意一个数" tabindex="-1"><a class="header-anchor" href="#删除任意一个数" aria-hidden="true">#</a> 删除任意一个数</h3>
<p>将最后一个数赋给这个数，大小--，再更新一遍大小。<br>
heap[k]=heap[con],con--;<br>
down(k),up(k);</p>
<h3 id="修改任意一个元素" tabindex="-1"><a class="header-anchor" href="#修改任意一个元素" aria-hidden="true">#</a> 修改任意一个元素</h3>
<p>heap[k]=x,down(k),up(k);</p>
<p>例题:<br>
1.堆排序<br>
原题链接：<a href="https://www.acwing.com/problem/content/840/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/840/<ExternalLinkIcon/></a><br>
题意：有一个大小为n的数组，输出数组中前m小的值。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>con<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span>u<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> t<span class="token operator">=</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> t<span class="token operator">=</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">!=</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">swap</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">,</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">down</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">>></span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	con<span class="token operator">=</span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token function">down</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span>h<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
		h<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>h<span class="token punctuation">[</span>con<span class="token punctuation">]</span><span class="token punctuation">;</span>
		con<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token function">down</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.模拟堆<br>
原题链接；<a href="https://www.acwing.com/problem/content/841/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/841/<ExternalLinkIcon/></a><br>
题意：<br>
维护一个集合，初始时集合为空，支持如下几种操作：<br>
I x，插入一个数x；<br>
PM，输出当前集合中的最小值；<br>
DM，删除当前集合中的最小值（数据保证此时的最小值唯一）；<br>
D k，删除第k个插入的数；<br>
C k x，修改第k个插入的数，将其变为x；<br>
进行n次操作，对于每个第二个操作，输出当前集合的最小值。</p>
<p>思路：<br>
因为up和down操作都是对一个数所在的位置的编号做的，所以我们在对第k个插入的数执行操作的时候需要知道他所在的位置编号，那么我们就用个额外的数组ph来存第k个插入的数的最终所在的位置编号，还得用一个额外的数组来存每个位置上的数是第几个插入的数。因为我们在进行down和up操作的时候只是把值给交换了，交换值之后还需要把他是第几个插入的数的编号交换一下。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>con<span class="token punctuation">;</span>
<span class="token keyword">int</span> hp<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span>ph<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">hswap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">swap</span><span class="token punctuation">(</span>ph<span class="token punctuation">[</span>hp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ph<span class="token punctuation">[</span>hp<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">swap</span><span class="token punctuation">(</span>hp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">,</span>hp<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">swap</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">,</span>h<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span>u<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> t<span class="token operator">=</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span>con<span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>h<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> t<span class="token operator">=</span>u<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">!=</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">hswap</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">down</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token operator">&amp;&amp;</span>h<span class="token punctuation">[</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">></span>h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">hswap</span><span class="token punctuation">(</span>u<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
		u<span class="token operator">/=</span><span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	m<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string op<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>op<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"I"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> x<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
			con<span class="token operator">++</span><span class="token punctuation">;</span>
			m<span class="token operator">++</span><span class="token punctuation">;</span>
			h<span class="token punctuation">[</span>con<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
			ph<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token operator">=</span>con<span class="token punctuation">;</span>
			hp<span class="token punctuation">[</span>con<span class="token punctuation">]</span><span class="token operator">=</span>m<span class="token punctuation">;</span>
			<span class="token function">up</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"PM"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span>h<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"DM"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">hswap</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			con<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token function">down</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">int</span> k<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>k<span class="token punctuation">;</span>
			k<span class="token operator">=</span>ph<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">hswap</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			con<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token function">down</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">up</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">int</span> k<span class="token punctuation">,</span>x<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>k<span class="token operator">>></span>x<span class="token punctuation">;</span>
			k<span class="token operator">=</span>ph<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
			h<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
			<span class="token function">up</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">down</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


