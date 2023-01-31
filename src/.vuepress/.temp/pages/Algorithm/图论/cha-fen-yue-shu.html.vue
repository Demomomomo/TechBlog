<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]&lt;=a[k]的形式，这样的系统称为差分约束系统</p>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2>
<p>有n个数和m个不等式的关系（x[i]-x[j]&lt;=a[k])，求x[a]-x[b]的最大值是多少</p>
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
<h2 id="解的存在性" tabindex="-1"><a class="header-anchor" href="#解的存在性" aria-hidden="true">#</a> 解的存在性</h2>
<p>一种情况：当一个图中出现负环的时候，他可以绕无数圈负环值一直变小，那么就没有解。<br>
另一种情况：如果没有路能走到点，那么解有无限多种</p>
<h2 id="求最长路径-x-i-x-j-a-k" tabindex="-1"><a class="header-anchor" href="#求最长路径-x-i-x-j-a-k" aria-hidden="true">#</a> 求最长路径（x[i]-x[j]&gt;=a[k])</h2>
<p>当符号变成&gt;=的时候，那么本质就是求最长路</p>
<p>1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了</p>
<p>2.bellman算法：将所有的边全取符号，然后对新的图求最短路</p>
<h2 id="不等式方程标准化" tabindex="-1"><a class="header-anchor" href="#不等式方程标准化" aria-hidden="true">#</a> 不等式方程标准化</h2>
<p>1.如果给出的不等式有&lt;=也有&gt;=的话，根据要求变成统一格式：</p>
<p>如果求的是两个变量差的最大值，那么需要将所有不等式转变成&lt;=的形式，建图之后求最短路</p>
<p>如果求的是两个变量差的最小值，那么需要将所有不等式转化成&gt;=，建图后求最长路</p>
<p>2.如果有A-B=C这样的等式，可以将他转换成A-B&gt;=C和A-B&lt;=C的格式</p>
<p>3.如果变量都是整数域上的，那么遇到A-B&lt; C这样的不带等号的不等式，需要将他转换成&gt;=或者&lt;=的形式，比如A-B&lt; C转换成A-B&lt;=C-1</p>
<!-- ## 应用：线性约束

线性约束一般是在一维空间中给出的一些变量（一般定义位置），然后告诉你某两个变量的约束关系，求两个变量a和b的差值的最大值或最小值。  
(有一个差不多的洛谷题：https://www.luogu.com.cn/problem/P4878 )  
题意：n个人的编号是1~n，并且按照编号顺序排成一条直线，任何两个人的位置不重合，然后给定一些约束条件：  
x组约束Ax Bx Cx ，表示Ax和Bx的距离不能大于Cx  
y组约束Ax By Cy ，表示Ay和By的距离不能小于Cy  
如果这样的排列组合存在，输出这两个人的最高可能距离，如果不存在，输出-1，如果无限长输出-2.  

思路：  
因为要求最长可能距离，就找最短路，所有等式转换为<=的格式  
x组表示：Bx-Ax<=Cx  
y组表示:By-Ax>=Cx  ->  Ay-by<=-Cx  
不存在的情况说明有负环，无限长说明没有路径能到达  
 -->
</div></template>


