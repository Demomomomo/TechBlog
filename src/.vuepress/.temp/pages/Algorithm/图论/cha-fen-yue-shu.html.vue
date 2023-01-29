<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]&lt;=a[k]的形式，这样的系统称为差分约束系统<br>
问题：有n个数和m个不等式的关系，求x[a]-x[b]的最大值是多少</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>bellman算法中的核心操作是：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">></span>d<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:d[b]&lt;=d[a]+w[a][b]</p>
<p>变形一下就是d[b]-d[a]&lt;=w[a][b]<br>
那么在系统中每个点的关系是：x[i]-x[j]&lt;=a[k]<br>
类比一下就是在x[i]和x[j]之间建立了一条边权为a[k]的有向边，因为满足所有条件，也就是求x[a]-&gt;x[b]的最短路</p>
<p>例子：假设有x0~x3这四个数，有下面五种关系：<br>
<img src="https://img-blog.csdnimg.cn/f67c5ba5aa6b47fba0644c5b57eb2e5f.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>求x3-x0的最大可能值<br>
那么我们可以得到几个x3和x0的关系：<br>
<img src="https://img-blog.csdnimg.cn/e892cfe245b044308097b22262a6ca9d.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>那么取他们的最小值7就是答案<br>
转换成图就是：<br>
<img src="https://img-blog.csdnimg.cn/3fa9014ed6f24f4d943459467c3c91d6.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>那么答案实际上就是求x0-&gt;x3的最短路</p>
<p>但是当一个图中出现负环的时候，他可以绕无数圈负环值一直变小，那么就没有解。</p>
<h2 id="求最长路径" tabindex="-1"><a class="header-anchor" href="#求最长路径" aria-hidden="true">#</a> 求最长路径</h2>
<p>1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了</p>
<p>2.bellman算法：将所有的边全取符号，然后对新的图求最短路</p>
</div></template>


