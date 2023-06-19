<template><div><p>程序=数据结构+算法</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230614165659.png" alt="20230614165659" loading="lazy"></p>
<h2 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h2>
<p>线性表有两种存结构：顺序存储结构和链式存储结构</p>
<h3 id="线性表的顺序存储" tabindex="-1"><a class="header-anchor" href="#线性表的顺序存储" aria-hidden="true">#</a> 线性表的顺序存储</h3>
<p>依次储存，地址连续，中间没有空出存储单元</p>
<p>一个典型的线性表顺序存储结构</p>
<p>地址不连续，中间存在空的存储单元不是线性的</p>
<p>存储位置的计算：一个元素的存储位置是x，每个元素占用y个单元，那么他占用了[x,x+y-1]这段存储空间，那么他的下一个元素的存储位置是x+y</p>
<p>用一个一维数组来表示线性表</p>
<p>但是由于会有删除增加的操作使得表的长度可变，那么我们就用一个变量表示顺序表的长度属性</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">100</span></span><span class="token comment">//线性表储存空间的初始分配量</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Elemtype elem<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span><span class="token comment">//当前长度</span>
<span class="token punctuation">}</span>sqllist<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们想存储一个包含系数和指数的线性表，代码如下</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">1000</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> p<span class="token punctuation">;</span><span class="token comment">//系数</span>
    <span class="token keyword">int</span> e<span class="token punctuation">;</span><span class="token comment">//指数</span>
<span class="token punctuation">}</span>a<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a <span class="token operator">*</span>elem<span class="token punctuation">;</span><span class="token comment">//储存空间的基地址</span>
    <span class="token keyword">int</span>  length<span class="token punctuation">;</span><span class="token comment">//多项式中当前项的个数</span>
<span class="token punctuation">}</span>list<span class="token punctuation">;</span><span class="token comment">//多项式的顺序存储结构为sqlist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c的动态分配函数：<br>
需要加载头文件：<code v-pre>&lt;stdlib.h&gt;</code><br>
<code v-pre>malloc(m)</code>：开辟长度为m的地址空间，并返回空间的首地址<br>
<code v-pre>sizeof(x)</code>：计算变量x的字节长度<br>
<code v-pre>free(p)</code>：释放指针p所指变量的储存空间，即彻底删除一个变量</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>list l<span class="token punctuation">;</span><span class="token comment">//定义一个list类型的表</span>
l<span class="token punctuation">.</span>elem<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//存字节数为N个a类型的字节的空间  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>c++的动态储存分配<br>
<code v-pre>new 类型名(初值列表)</code>：申请内存空间<br>
<code v-pre>delete p</code>：删除p所指向的指针，p必须是new操作的返回值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">;</span><span class="token comment">//开辟一个int类型的空间</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//开辟10个int类型的空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>传地址方式：</p>
<p>指针做参数：传递的是地址</p>
<p>数组名做参数：传递的是数组的首地址</p>
<p>引用类型做参数：给一个对象提供一个替代的名字，引用的变量和原来的对象是共用同一个地址</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">&amp;</span>j<span class="token operator">=</span>i<span class="token punctuation">;</span><span class="token comment">//j代表i，j改变i也改变，i改变j也改变 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>假设表为：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>elem<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">;</span>

线性表的几个操作：  

以下的位置从<span class="token number">1</span>开始，表的下标从<span class="token number">0</span>开始  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造一个空的线性表" tabindex="-1"><a class="header-anchor" href="#构造一个空的线性表" aria-hidden="true">#</a> 构造一个空的线性表</h3>
<p>操作结果：构造一个空的线性表</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">init</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>elem<span class="token operator">=</span><span class="token keyword">new</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">//储存分配失败</span>
    l<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="销毁线性表" tabindex="-1"><a class="header-anchor" href="#销毁线性表" aria-hidden="true">#</a> 销毁线性表</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：销毁线性表</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">delist</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">)</span> <span class="token keyword">delete</span> l<span class="token punctuation">.</span>elem<span class="token punctuation">;</span><span class="token comment">//释放储存空间</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线性表的清除" tabindex="-1"><a class="header-anchor" href="#线性表的清除" aria-hidden="true">#</a> 线性表的清除</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：将线性表重置为空表</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">clearlist</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//将线性表的长度设置成0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断线性表是否为空" tabindex="-1"><a class="header-anchor" href="#判断线性表是否为空" aria-hidden="true">#</a> 判断线性表是否为空</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：为空表返回true，否则返回false</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">empty</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="求一个线性表的长度" tabindex="-1"><a class="header-anchor" href="#求一个线性表的长度" aria-hidden="true">#</a> 求一个线性表的长度</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：返回线性表中元素的个数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getlength</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> l<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找第i个元素的值" tabindex="-1"><a class="header-anchor" href="#查找第i个元素的值" aria-hidden="true">#</a> 查找第i个元素的值</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：用e返回线性表的第i个元素的值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">getx</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>i<span class="token operator">></span>l<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找满足条件的数的下标" tabindex="-1"><a class="header-anchor" href="#查找满足条件的数的下标" aria-hidden="true">#</a> 查找满足条件的数的下标</h3>
<p>初始条件：线性表存在，有判定函数</p>
<p>操作结果：返回线性表中第一个满足判定函数的元素的下标，如果不存在就返回0</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
<span class="token keyword">int</span> <span class="token function">cheeck</span><span class="token punctuation">(</span>list l<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>l<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>e<span class="token punctuation">)</span><span class="token keyword">return</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平均查找长度（ASL）：为确定记录在表中的位置，需要与给定值进行比较的关键字的个数的期望值叫做查找算法的平均查找长度</p>
<p>ASL=每个数出现的概率*每个数需要查找的次数</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow><annotation encoding="application/x-tex">p_{i} =\frac{1}{n}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230607155648.png" alt="20230607155648" loading="lazy"></p>
<p>化简后的结果是：</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mi>S</mi><mi>L</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">ASL=\frac{n+1}{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<h3 id="在某个位置之前插入一个元素" tabindex="-1"><a class="header-anchor" href="#在某个位置之前插入一个元素" aria-hidden="true">#</a> 在某个位置之前插入一个元素</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：插入这个元素，长度+1</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>x<span class="token operator">></span>l<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>l<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">>=</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>v<span class="token punctuation">;</span>
    l<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平均移动次数:<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi>n</mi><mo stretchy="false">)</mo></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">\frac{(0+1+2+...n)}{n+1} =\frac{n}{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4133em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mtight">0</span><span class="mbin mtight">+</span><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mord mtight">2</span><span class="mbin mtight">+</span><span class="mord mtight">...</span><span class="mord mathnormal mtight">n</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0404em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<h3 id="删除某个位置的元素" tabindex="-1"><a class="header-anchor" href="#删除某个位置的元素" aria-hidden="true">#</a> 删除某个位置的元素</h3>
<p>初始条件：线性表已经存在</p>
<p>操作结果：删除这个元素，长度-1,将删除的元素返回e</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">delist</span><span class="token punctuation">(</span>list <span class="token operator">&amp;</span>l<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>x<span class="token operator">></span>l<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    e<span class="token operator">=</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>l<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    l<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平均查找长度=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">\frac{0+1+2+...n-1}{n}=\frac{n-1}{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span><span class="mbin mtight">+</span><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mord mtight">2</span><span class="mbin mtight">+</span><span class="mord mtight">...</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3>
<p>优点：<br>
1.储存密度大<br>
2.可以随机访问任意元素</p>
<p>缺点：<br>
1.在插入删除的时候需要移动大量元素<br>
2.浪费储存空间<br>
3.属于静态存储形式，数据元素的个数不能自由扩充</p>
<p>为了优化这些问题，我们采用链表</p>
<h2 id="线性表的链式存储" tabindex="-1"><a class="header-anchor" href="#线性表的链式存储" aria-hidden="true">#</a> 线性表的链式存储</h2>
<p>链式结构：在储存器中的位置是任意的，在逻辑上相邻的元素不一定相邻</p>
<p>线性表的链式表示又称为非顺序映像或链式映像</p>
<p>结点：数据结构的存储映像，由数据域和指针域两部分组成</p>
<p>链表：n个结点由指针链组成的一个链表</p>
<p>单链表：结点只有一个指针域的链表</p>
<p>双链表：结点有两个指针域的链表</p>
<p>循环链表：首尾相接</p>
<p>头指针：是指向链表中第一个结点的指针</p>
<p>首元结点：是指链表中存储第一个数据元素的结点</p>
<p>头结点：是在首元结点前附设的一个结点</p>
<p>那么链表的储存有两种形式：</p>
<p>不带头结点：头指针直接指向首元结点</p>
<p>带头结点：头指针指向头结点，头结点指向首元结点</p>
<p>优点：<br>
1.结点空间可以动态申请和释放<br>
2.删除和插入时不需要移动元素</p>
<p>缺点：<br>
1.存储密度小，每个结点的指针域需要额外占用储存空间<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608211316.png" alt="20230608211316" loading="lazy"></p>
<p>2.链式结构是非随机存储结构，对任意一点的操作都需要从头指针链查找到该节点，增加了算法的复杂度</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608211856.png" alt="20230608211856" loading="lazy"></p>
<p>结构：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span><span class="token punctuation">{</span><span class="token comment">//声明结点的类型和指向结点的指针类型</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span><span class="token comment">//结点的数据域</span>
    <span class="token keyword">struct</span> <span class="token class-name">list</span> <span class="token operator">*</span>next<span class="token punctuation">;</span><span class="token comment">//结点的指针域</span>
<span class="token punctuation">}</span>list<span class="token punctuation">,</span><span class="token operator">*</span>nlist<span class="token punctuation">;</span>

nlist h<span class="token punctuation">;</span><span class="token comment">//定义头指针</span>
list <span class="token operator">*</span>h<span class="token punctuation">;</span><span class="token comment">//这样也可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造一个空表" tabindex="-1"><a class="header-anchor" href="#构造一个空表" aria-hidden="true">#</a> 构造一个空表</h3>
<p>1.生成新结点作为头结点，用头指针h指向头结点</p>
<p>2.将头结点的指针域置空</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    h<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    h<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断列表是否为空" tabindex="-1"><a class="header-anchor" href="#判断列表是否为空" aria-hidden="true">#</a> 判断列表是否为空</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">empty</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>h<span class="token operator">-></span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单链表的销毁" tabindex="-1"><a class="header-anchor" href="#单链表的销毁" aria-hidden="true">#</a> 单链表的销毁</h3>
<p>从头指针开始，依次释放所有点</p>
<p>用p指针来存当前需要销毁的地址，从头指针开始，如果头指针的下一个指针所指的位置不空，说明我们要删掉头指针所在的地址，并遍历头指针所指的下一个元素。</p>
<p>首先将p指向头指针的地址，将头指针的地址变成头指针指向的下一个元素的地址，然后再删除头指针</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">delist</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p<span class="token operator">=</span>h<span class="token punctuation">;</span>
        h<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清空单链表" tabindex="-1"><a class="header-anchor" href="#清空单链表" aria-hidden="true">#</a> 清空单链表</h3>
<p>链表仍存在，但是链表中无元素，成为空链表（头指针和头结点依然存在）</p>
<p>依次释放头指针之后的所有结点，并将头指针指向空地址</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist op<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>op<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    h<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找表的长度" tabindex="-1"><a class="header-anchor" href="#查找表的长度" aria-hidden="true">#</a> 查找表的长度</h3>
<p>用一个新指针p指向第一个结点，当p不空的时候计数++，p指向下一个元素</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">listlength</span><span class="token punctuation">(</span>nlist h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ans<span class="token operator">++</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取单链表中第i个元素" tabindex="-1"><a class="header-anchor" href="#取单链表中第i个元素" aria-hidden="true">#</a> 取单链表中第i个元素</h3>
<p>从首元结点开始，一直搜到第i个元素为止</p>
<p>所以链表不是随机存储结构</p>
<p>条件：i必须在链表范围内（1&lt;=i&lt;=length）</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">cheecke</span><span class="token punctuation">(</span>nlist h<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&lt;</span>i<span class="token operator">&amp;&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        e<span class="token operator">=</span>p<span class="token operator">-></span>data<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3>
<p>按值查找：1.获取地址 2.获取下标</p>
<p>获取地址：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">cheeke</span><span class="token punctuation">(</span><span class="token keyword">int</span> e<span class="token punctuation">,</span>nlist h<span class="token punctuation">,</span>nlist op<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-></span>data<span class="token operator">==</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            op<span class="token operator">=</span>p<span class="token punctuation">;</span>
            i<span class="token operator">=</span>j<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3>
<p>在第i个位置插入值为e的结点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>h<span class="token punctuation">;</span>
    nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    op<span class="token operator">-></span>data<span class="token operator">=</span>e<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">==</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            op<span class="token operator">-></span>next<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
            p<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除第i个结点" tabindex="-1"><a class="header-anchor" href="#删除第i个结点" aria-hidden="true">#</a> 删除第i个结点</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">delisti</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>h<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">==</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nlist op<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
            p<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单链表的建立" tabindex="-1"><a class="header-anchor" href="#单链表的建立" aria-hidden="true">#</a> 单链表的建立</h3>
<p>头插法：<br>
1.从一个空表开始，重复读入数据<br>
2.生成新结点，将读入的数据存放到新结点的数据域中<br>
3.从最后一个结点开始，将各个结点依次插进链表的前端</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>a<span class="token punctuation">;</span>
a q<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">build1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nlist h<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    h<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>n<span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
        op<span class="token operator">-></span>data<span class="token operator">=</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        op<span class="token operator">-></span>next<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
        h<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尾插法：</p>
<p>从空表h开始，将新结点依次插入到链表的尾部，尾指针r指向链表的尾结点<br>
2.初始时，r同h均指向头结点，每读入一个数据元素则申请一个新结点，将新结点插入到尾结点，r指向新结点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">build2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nlist h<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    nlist r<span class="token operator">=</span>h<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
        op<span class="token operator">-></span>data<span class="token operator">=</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
        r<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
        r<span class="token operator">=</span>op<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表" aria-hidden="true">#</a> 循环链表</h2>
<p>是一种头尾相接的链表，即最后一个结点的指针域指向头结点</p>
<p>优点：从任意一个点出发都能找到任何一个其他的结点</p>
<p>遍历结束的标志：当前点等于头指针</p>
<p>合并两个循环列表，将Tb合并到Ta之后</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608182040.png" alt="20230608182040" loading="lazy"></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">hb</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>Ta<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>Tb<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist op<span class="token operator">=</span>Ta<span class="token operator">-></span>next<span class="token punctuation">;</span>
    Ta<span class="token operator">-></span>next<span class="token operator">=</span>Tb<span class="token operator">-></span>next<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>Tb<span class="token operator">-></span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Tb<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h2>
<p>在单链表的每个结点里再增加一个指向直接前驱的指针域pre</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span><span class="token punctuation">{</span>
    a data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">list</span> <span class="token operator">*</span>next<span class="token punctuation">,</span><span class="token operator">*</span>pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">,</span><span class="token operator">*</span>nlist<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双向链表的头结点的pre域是空，尾结点的next域为空</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608202251.png" alt="20230608202251" loading="lazy"></p>
<p>双向链表也有循环链表，头结点的pre指针指向尾结点，尾结点的next指针指向头结点，当双向链表是空表的时候，头结点的pre指针指向自己，next指针也指向自己</p>
<h3 id="插入-1" tabindex="-1"><a class="header-anchor" href="#插入-1" aria-hidden="true">#</a> 插入</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>nlist <span class="token function">geti</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">==</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> p<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist nx<span class="token operator">=</span><span class="token function">geti</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>nx<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    nlist pr<span class="token operator">=</span>nx<span class="token operator">-></span>pre<span class="token punctuation">;</span>
    nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    op<span class="token operator">-></span>data<span class="token operator">=</span>e<span class="token punctuation">;</span>
    op<span class="token operator">-></span>next<span class="token operator">=</span>nx<span class="token punctuation">;</span>
    nx<span class="token operator">-></span>pre<span class="token operator">=</span>op<span class="token punctuation">;</span>
    pr<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
    op<span class="token operator">-></span>pre<span class="token operator">=</span>pr<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">delist</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span><span class="token function">geti</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    nlist pr<span class="token operator">=</span>p<span class="token operator">-></span>pre<span class="token punctuation">;</span>
    nlist nx<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pr<span class="token operator">-></span>next<span class="token operator">=</span>nx<span class="token punctuation">;</span>
    nx<span class="token operator">-></span>pre<span class="token operator">=</span>pr<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线性表的应用" tabindex="-1"><a class="header-anchor" href="#线性表的应用" aria-hidden="true">#</a> 线性表的应用</h2>
<h3 id="线性表的合并" tabindex="-1"><a class="header-anchor" href="#线性表的合并" aria-hidden="true">#</a> 线性表的合并</h3>
<p>问题描述：<br>
假设两个线性表La和Lb分别表示两个集合AB，现在要求一个新的集合A=A和B的并集</p>
<p>看其中一个表的每个元素，看看是否出现在另一个表中，如果没出现就将这个元素放在另一个表的尾结点的后面</p>
<p>假设表的结构是这样的：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    list <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">,</span><span class="token operator">*</span>nlist<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getlen</span><span class="token punctuation">(</span>nlist h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ans<span class="token operator">++</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">gete</span><span class="token punctuation">(</span>nlist h<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    e<span class="token operator">=</span>p<span class="token operator">-></span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">bool</span> <span class="token function">cheeck</span><span class="token punctuation">(</span>nlist h<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-></span>data <span class="token operator">==</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>h<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist p<span class="token operator">=</span>h<span class="token punctuation">;</span>
    nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    op<span class="token operator">-></span>data<span class="token operator">=</span>e<span class="token punctuation">;</span>
    op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token punctuation">)</span> p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    p<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">un</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>la<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>lb<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> lena<span class="token operator">=</span><span class="token function">getlen</span><span class="token punctuation">(</span>la<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> lenb<span class="token operator">=</span><span class="token function">getlen</span><span class="token punctuation">(</span>lb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>lenb<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> e<span class="token punctuation">;</span>
        <span class="token function">gete</span><span class="token punctuation">(</span>lb<span class="token punctuation">,</span>i<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">cheeck</span><span class="token punctuation">(</span>la<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lena<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token function">insert</span><span class="token punctuation">(</span>la<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序表的合并" tabindex="-1"><a class="header-anchor" href="#有序表的合并" aria-hidden="true">#</a> 有序表的合并</h3>
<p>问题描述：<br>
已知线性表La和Lb中的数据元素按值按非递减有序序列，现要求将La和Lb归并成一个新的线性表Lc，并且Lc中的值还继续按照值非递减</p>
<p>用顺序表实现：<br>
顺序表操作比较方便，我们定义这样一个顺序表</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>elem<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么合并函数就是：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span>list la<span class="token punctuation">,</span>list lb<span class="token punctuation">,</span>list <span class="token operator">&amp;</span>lc<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>pa<span class="token operator">=</span>la<span class="token punctuation">.</span>elem <span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>pb<span class="token operator">=</span>lb<span class="token punctuation">.</span>elem <span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>pc<span class="token operator">=</span>lc<span class="token punctuation">.</span>elem <span class="token punctuation">;</span>
	<span class="token keyword">int</span> lena<span class="token operator">=</span>la<span class="token punctuation">.</span>length <span class="token punctuation">;</span>
	<span class="token keyword">int</span> lenb<span class="token operator">=</span>lb<span class="token punctuation">.</span>length <span class="token punctuation">;</span>
	<span class="token keyword">int</span> lenc<span class="token operator">=</span>lena<span class="token operator">+</span>lenb<span class="token punctuation">;</span>
	lc<span class="token punctuation">.</span>length <span class="token operator">=</span>lenc<span class="token punctuation">;</span>
	lc<span class="token punctuation">.</span>elem <span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>lenc<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>lalast<span class="token operator">=</span>pa<span class="token operator">+</span>lena<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>lblast<span class="token operator">=</span>pb<span class="token operator">+</span>lenb<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token operator">&lt;=</span>lalast<span class="token operator">&amp;&amp;</span>pb<span class="token operator">&lt;=</span>lblast<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>pa <span class="token operator">&lt;=</span> <span class="token operator">*</span>pb<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">*</span>pa<span class="token punctuation">;</span>
			pc<span class="token operator">++</span><span class="token punctuation">;</span>
			pa<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">*</span>pb<span class="token punctuation">;</span>
			pc<span class="token operator">++</span><span class="token punctuation">;</span>
			pb<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token operator">&lt;=</span>lalast<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">*</span>pa<span class="token punctuation">;</span>
		pc<span class="token operator">++</span><span class="token punctuation">;</span>
		pa<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>pb<span class="token operator">&lt;=</span>lblast<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token operator">*</span>pc<span class="token operator">=</span><span class="token operator">*</span>pb<span class="token punctuation">;</span>
		pc<span class="token operator">++</span><span class="token punctuation">;</span>
		pb<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链表的实现：<br>
定义一个这样的链表：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    list <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">,</span><span class="token operator">*</span>nlist<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并操作：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>la<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>lb<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>lc<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist pa<span class="token operator">=</span>la<span class="token operator">-></span>next<span class="token punctuation">;</span>
    nlist pb<span class="token operator">=</span>lb<span class="token operator">-></span>next<span class="token punctuation">;</span>
    nlist r<span class="token operator">=</span>lc<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token operator">&amp;&amp;</span>pb<span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
        op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token operator">-></span>data<span class="token operator">&lt;=</span>pb<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            op<span class="token operator">-></span>data<span class="token operator">=</span>pa<span class="token operator">-></span>data<span class="token punctuation">;</span>
            r<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
            r<span class="token operator">=</span>op<span class="token punctuation">;</span>
            pa<span class="token operator">=</span>pa<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            op<span class="token operator">-></span>data<span class="token operator">=</span>pb<span class="token operator">-></span>data<span class="token punctuation">;</span>
            r<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
            r<span class="token operator">=</span>op<span class="token punctuation">;</span>
            pb<span class="token operator">=</span>pb<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token punctuation">)</span><span class="token punctuation">{</span>
       nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
       op<span class="token operator">-></span>data<span class="token operator">=</span>pa<span class="token operator">-></span>data<span class="token punctuation">;</span>
       op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
       r<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
       r<span class="token operator">=</span>op<span class="token punctuation">;</span>
       pa<span class="token operator">=</span>pa<span class="token operator">-></span>next<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pb<span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist op<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
        op<span class="token operator">-></span>data<span class="token operator">=</span>pb<span class="token operator">-></span>data<span class="token punctuation">;</span>
        op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
        r<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
        r<span class="token operator">=</span>op<span class="token punctuation">;</span>
        pb<span class="token operator">=</span>pb<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有序表的合并-用链表" tabindex="-1"><a class="header-anchor" href="#有序表的合并-用链表" aria-hidden="true">#</a> 有序表的合并 -用链表</h2>
<p>有a和b两个链表，合并后的新链表是c</p>
<p>a的头节点是la，b的头节点是lb，c的头节点是lc</p>
<p>先将c的头节点建立，可以等于a的头结点或者b的头结点</p>
<p>然后再用三个指针pa，pb和pc分别指向a，b和c的首元节点</p>
<p>当两个链表都没有遍历完的时候，每次比较两个指针所指的数据的大小</p>
<p>假设pa的数据小，那么我们将pc的下一位的地址指向pa，然后pc往后移动一位（pc=pc.next||pc=pa），再将pa往后
移动一位</p>
<p>最后如果还有剩余的元素，那么我们将剩余的部分接在pc后，即：如果pa是空指针，那么就将pb接到pc的后面，反之则将pa接到pc的后面</p>
<p>最后b的头结点没有用了，那么我们就释放lb</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>la<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>lb<span class="token punctuation">,</span>nlist <span class="token operator">&amp;</span>lc<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist pa<span class="token punctuation">,</span>pb<span class="token punctuation">,</span>pc<span class="token punctuation">;</span>
    pc<span class="token operator">=</span>lc<span class="token operator">=</span>la<span class="token punctuation">;</span>
    pa<span class="token operator">=</span>la<span class="token operator">-></span>next<span class="token punctuation">;</span>
    pb<span class="token operator">=</span>lb<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token operator">&amp;&amp;</span>pb<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token operator">-></span>data<span class="token operator">&lt;=</span>pb<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            pc<span class="token operator">-></span>next<span class="token operator">=</span>pa<span class="token punctuation">;</span>
            pc<span class="token operator">=</span>pc<span class="token operator">-></span>next<span class="token punctuation">;</span>
            pa<span class="token operator">=</span>pa<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            pc<span class="token operator">-></span>next<span class="token operator">=</span>pb<span class="token punctuation">;</span>
            pc<span class="token operator">=</span>pc<span class="token operator">-></span>next<span class="token punctuation">;</span>
            pb<span class="token operator">=</span>pb<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        pc<span class="token operator">-></span>next<span class="token operator">=</span>pa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> pc<span class="token operator">-></span>next<span class="token operator">=</span>pb<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>lb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一元多项式的运算" tabindex="-1"><a class="header-anchor" href="#一元多项式的运算" aria-hidden="true">#</a> 一元多项式的运算</h2>
<p>实现两个多项式的加减乘运算</p>
<p>用两个顺序表分别存储两个多项式每个对应项的系数，然后再建立一个表将两个顺序表每个对应表相加的结果存储</p>
<h3 id="稀疏多项式的运算" tabindex="-1"><a class="header-anchor" href="#稀疏多项式的运算" aria-hidden="true">#</a> 稀疏多项式的运算</h3>
<p>1.用顺序表存储：</p>
<p>我们用两个顺序表存储每个项的系数和指数</p>
<p>然后比较每项，那么对于两个表的对应项来说只有两种情况：指数相同或者指数不同</p>
<p>当指数相同的时候就将系数相加，如果结果不为0的话就在c里增加一个新项</p>
<p>当指数不相同的时候，将指数较小的项复制到c中</p>
<p>当一个多项式遍历完毕的时候，将另一个剩余项依次复制到c中即可</p>
<p>那么就有有几个问题：新建的数组的大小不好确定，空间复杂度比较高</p>
<p>2.用链表存储</p>
<p>还是用两个链表a，b分别存储两个多项式的每一项的系数和指数：</p>
<p>先建立头结点la。假设有n个项数，那么我们遍历每项的时候先建立一个新节点s，然后再从链表的头结点开始遍历，找到小于当前项系数的最大项作为前驱pre节点，和他的后继p节点，将s加入到pre和s中间</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> x<span class="token punctuation">;</span><span class="token comment">//系数</span>
    <span class="token keyword">int</span> z<span class="token punctuation">;</span><span class="token comment">//指数</span>
    <span class="token keyword">struct</span> <span class="token class-name">list</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>list<span class="token punctuation">,</span><span class="token operator">*</span>nlist<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">build</span><span class="token punctuation">(</span>nlist <span class="token operator">&amp;</span>l<span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    l<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
    l<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nlist s<span class="token operator">=</span><span class="token keyword">new</span> list<span class="token punctuation">;</span>
        cin<span class="token operator">>></span>s<span class="token operator">-></span>x<span class="token operator">>></span>s<span class="token operator">-></span>z<span class="token punctuation">;</span>
        nlist pre<span class="token punctuation">,</span>p<span class="token punctuation">;</span>
        pre<span class="token operator">=</span>l<span class="token punctuation">;</span>
        p<span class="token operator">=</span>l<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">&amp;&amp;</span>p<span class="token operator">-></span>z<span class="token operator">&lt;</span>s<span class="token operator">-></span>z<span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre<span class="token operator">=</span>p<span class="token punctuation">;</span>
            p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        s<span class="token operator">-></span>next<span class="token operator">=</span>p<span class="token punctuation">;</span>
        pre<span class="token operator">-></span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建立应该新链表c，从a和b的首元节点pa，pb判断，如果pa和pb的指数相等，就将系数相加，如果结果不等于0就将新结果加到c中；如果pa和pb的指数不相等，那么我们就将指数较小的接在c后。当最后有一个链表已经遍历完，那么就将另一个链表接到c后面即可</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>

<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span>nlist <span class="token operator">*</span>la<span class="token punctuation">,</span>nlist <span class="token operator">*</span>lb<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nlist lc<span class="token punctuation">,</span>pc<span class="token punctuation">,</span>pa<span class="token punctuation">,</span>pb<span class="token punctuation">;</span>
    lc<span class="token operator">=</span>pc<span class="token operator">=</span>la<span class="token punctuation">;</span>
    pa<span class="token operator">=</span>la<span class="token operator">-></span>next<span class="token punctuation">;</span>
    pb<span class="token operator">=</span>lb<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pa<span class="token operator">&amp;&amp;</span>pb<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token operator">-></span>z<span class="token operator">==</span>pb<span class="token operator">-></span>z<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">double</span> op<span class="token operator">=</span>pa<span class="token operator">-></span>x<span class="token operator">+</span>pb<span class="token operator">-></span>x<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>x<span class="token operator">=</span>op<span class="token punctuation">;</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>z<span class="token operator">=</span>pa<span class="token operator">-></span>z<span class="token punctuation">;</span>
                pc<span class="token operator">=</span>pc<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pa<span class="token operator">=</span>pa<span class="token operator">-></span>next<span class="token punctuation">;</span>
            pb<span class="token operator">=</span>pb<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token operator">-></span>z<span class="token operator">&lt;</span>pb<span class="token operator">-></span>z<span class="token punctuation">)</span><span class="token punctuation">{</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>z<span class="token operator">=</span>pa<span class="token operator">-></span>z<span class="token punctuation">;</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>x<span class="token operator">=</span>pa<span class="token operator">-></span>x<span class="token punctuation">;</span>
                pc<span class="token operator">=</span>pc<span class="token operator">-></span>next<span class="token punctuation">;</span>
                pa<span class="token operator">=</span>pa<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>x<span class="token operator">=</span>pb<span class="token operator">-></span>x<span class="token punctuation">;</span>
                pc<span class="token operator">-></span>next<span class="token operator">-></span>z<span class="token operator">=</span>pb<span class="token operator">-></span>z<span class="token punctuation">;</span>
                pc<span class="token operator">=</span>pc<span class="token operator">-></span>next<span class="token punctuation">;</span>
                pb<span class="token operator">=</span>pb<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>pa<span class="token punctuation">)</span>pc<span class="token operator">-></span>next<span class="token operator">=</span>pa<span class="token punctuation">;</span>
    <span class="token keyword">else</span> pc<span class="token operator">-></span>next<span class="token operator">=</span>pb<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>lb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h2>
<p>栈和队列是只能在端点进行操作的线性表</p>
<p>栈具有后进先出的特性</p>
<p>栈（stack）是仅在表尾进行插入删除操作的线性表</p>
<p>表尾称为栈顶（top），表头称为栈底（base）</p>
<p>插入元素到栈顶的操作称为入栈（push（x）），从栈顶删除最后一个元素的操作称为出栈（pop（））</p>
<p>逻辑结构：一对一</p>
<p>存储结构：顺序栈和链栈都可以，顺序栈更常见</p>
<p>队列有先进先出的特性</p>
<p>在表尾插入在表头删除</p>
<p>逻辑结构：一对一</p>
<p>存储结构：顺序队或链队，循环顺序队列更常见</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>对于栈：
<span class="token function">insert</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
对于队列：
<span class="token function">insert</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<p>栈：</p>
<p>1.进制转换</p>
<p>十进制数N向其他进制数d的转换</p>
<p>转换法则：除以d倒取余</p>
<p>就是先将当前数对d取余，数存到数组里，然后再将当前数除以d，重复操作直至当前数为0</p>
<p>那么答案就是数组的逆序输出</p>
<p>栈的特性刚好可以满足这个要求：先进去的后出</p>
<p>那么我们每次就将取余之后的数放入栈中，当做完操作的时候再将栈里的所有数弹出，就是想要的答案</p>
<p>2.括号匹配的检验</p>
<p>假设表达式中允许包含两种括号：圆括号和方括号</p>
<p>其嵌套的顺序随意，例如：</p>
<p>1.( [ ] ( ) )或[ ( [ ] [ ] ) ]</p>
<p>2.[ ( ] )为错误格式</p>
<p>3.( [ ( ) )或( ( ) ] )为错误格式</p>
<p>解法：将表达式遍历，如果当前符号是左括号的时候入栈，如果当前是右括号：判断当前栈顶是否是与之匹配的左括号，如果是的话将栈顶出栈，如果不是的话就说明不匹配，格式错误。到最后判断栈内是否为空，如果为空就说明格式正确，否则说明还有没有匹配的左括号，格式错误。</p>
<p>3.表达式求值</p>
<p>对于一个含有加减乘除的算式进行求值</p>
<p>算法：算符优先算法</p>
<p>表达式的组成：</p>
<p>1.操作数：常数，变量</p>
<p>2.运算符：算数运算符，关系运算符，逻辑运算符</p>
<p>3.界限符：左右括弧和表达式结束符</p>
<p>任何一个算数表达式都由操作数（常数，变量），算术运算符（+，-，*，/）和界限符（括号，表达式结束符'#',虚设的表达式起始符'#')组成，后两者统称为算符</p>
<p>例如：#3*(7-2)#</p>
<p>为了实现表达式求值，需要设置两个栈：</p>
<p>一个是算符栈optr，用于寄存运算符</p>
<p>另一个称为操作数栈opnd，用于寄存运算数和运算结果</p>
<p>求值的处理过程是从左向右扫描表达式的每一个字符</p>
<p>当扫描的到的是运算数，将其压入栈opnd</p>
<p>当扫描的是运算符时：</p>
<p>1.若这个运算符比optr栈顶运算符的优先级高，则入栈optr，继续向后处理</p>
<p>2.若这个运算符比optr栈顶运算符优先级低，则从opnd栈中弹出两个运算数，从optr中弹出栈顶运算符进行运算，并将运算结果压入栈opnd中</p>
<p>队列：</p>
<p>1.舞伴问题</p>
<p>假设在舞会上，男士和女士各自排成一队。配对舞伴的时候依次从两个队头各出一人配成舞伴，如果两队初始人数不同，那么较长的一队未配对的等待下一轮舞曲，要求写一种算法模拟上述配对</p>
<p>那么先构造两个队列，然后依次将队头元素出队配成舞伴。</p>
<h3 id="栈的顺序表示" tabindex="-1"><a class="header-anchor" href="#栈的顺序表示" aria-hidden="true">#</a> 栈的顺序表示</h3>
<p>利用一组地址连续的存储单元依次存放自栈底到栈顶的数据元素，栈底一般在低地址端</p>
<p>附设top指针，指示栈顶元素在顺序栈中的位置，但是为了方便操作通常top指示真正的栈顶元素之上的下标位置</p>
<p>另设base指针，指示栈底元素在顺序栈中的位置</p>
<p>另外，用stacksize表示栈可使用的最大容量（栈的下标范围：0~stacksize-1）</p>
<p>空栈：top和base指针相等</p>
<p>栈满：top-base=stacksize</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Stack</span><span class="token punctuation">{</span>
    Stack <span class="token operator">*</span>base<span class="token punctuation">;</span><span class="token comment">//栈底指针</span>
    Stack <span class="token operator">*</span>top<span class="token punctuation">;</span><span class="token comment">//栈顶指针</span>
    <span class="token keyword">int</span> stacksize<span class="token punctuation">;</span><span class="token comment">//栈可用最大容量</span>
<span class="token punctuation">}</span>Stack<span class="token punctuation">;</span>

<span class="token keyword">bool</span> <span class="token function">init</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    s<span class="token operator">-></span>base<span class="token operator">=</span><span class="token punctuation">(</span>Stack<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>stacksize<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//为栈底指针分配内存</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token operator">-></span>base<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">//储存分配失败</span>
    s<span class="token operator">-></span>top<span class="token operator">=</span>base<span class="token punctuation">;</span>
    s<span class="token operator">-></span>stacksize<span class="token operator">=</span>stacksize<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断栈是否为空" tabindex="-1"><a class="header-anchor" href="#判断栈是否为空" aria-hidden="true">#</a> 判断栈是否为空</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">empty</span><span class="token punctuation">(</span>Stack s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">-></span>top<span class="token operator">==</span>s<span class="token operator">-></span>base<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="求栈内元素个数" tabindex="-1"><a class="header-anchor" href="#求栈内元素个数" aria-hidden="true">#</a> 求栈内元素个数</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getlength</span><span class="token punctuation">(</span>Stack s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token operator">-></span>top<span class="token operator">-</span>s<span class="token operator">-></span>base<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="清空栈" tabindex="-1"><a class="header-anchor" href="#清空栈" aria-hidden="true">#</a> 清空栈</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">clear</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">-></span>base<span class="token punctuation">)</span>s<span class="token operator">-></span>top<span class="token operator">=</span>s<span class="token operator">-></span>base<span class="token punctuation">;</span><span class="token comment">//如果栈存在，就清空</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="销毁栈" tabindex="-1"><a class="header-anchor" href="#销毁栈" aria-hidden="true">#</a> 销毁栈</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">deletestack</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">-></span>base<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">free</span><span class="token punctuation">(</span>s<span class="token operator">-></span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-></span>stacksize<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        s<span class="token operator">-></span>base<span class="token operator">=</span>s<span class="token operator">-></span>top<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="入栈" tabindex="-1"><a class="header-anchor" href="#入栈" aria-hidden="true">#</a> 入栈</h4>
<p>先判断栈是否满，如果满了就不能入栈（top-base==stacksize）</p>
<p>入栈元素x赋值给top指针所指的位置，top向后移动</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">-></span>top<span class="token operator">-</span>s<span class="token operator">-></span>base<span class="token operator">==</span>s<span class="token operator">-></span>stacksize<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>s<span class="token operator">-></span>top<span class="token operator">=</span>x<span class="token punctuation">;</span>
    s<span class="token operator">-></span>top<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出栈" tabindex="-1"><a class="header-anchor" href="#出栈" aria-hidden="true">#</a> 出栈</h4>
<p>位置在top-1的元素出栈，top--</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">pop</span><span class="token punctuation">(</span>Stack <span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>top<span class="token operator">-</span>s<span class="token punctuation">.</span>base<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span>top<span class="token operator">--</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span><span class="token operator">*</span>s<span class="token operator">-></span>top<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="栈的链式表示" tabindex="-1"><a class="header-anchor" href="#栈的链式表示" aria-hidden="true">#</a> 栈的链式表示</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Stack</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Stack<span class="token punctuation">,</span><span class="token operator">*</span>nStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链栈只能在链表头部操作，在链表头进行插入和删除</p>
<p>链表的头指针就是栈顶，不需要头结点，基本不存在栈满的情况，空栈相当于头指针指向空</p>
<p>构造一个空栈</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span>nStack <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    s<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断栈是否为空-1" tabindex="-1"><a class="header-anchor" href="#判断栈是否为空-1" aria-hidden="true">#</a> 判断栈是否为空</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">empty</span><span class="token punctuation">(</span>nStack s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="入栈操作" tabindex="-1"><a class="header-anchor" href="#入栈操作" aria-hidden="true">#</a> 入栈操作</h4>
<p>s用来记录栈顶节点，也就是头节点，那么我们想插入一个新元素，就需要新建一个节点，让这个节点的指针指向原来的栈顶s，然后将s更新为这个新节点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>nStack <span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
   nStack op<span class="token punctuation">;</span>
   op<span class="token operator">=</span><span class="token punctuation">(</span>nStack<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   op<span class="token operator">-></span>data<span class="token operator">=</span>x<span class="token punctuation">;</span>
   op<span class="token operator">-></span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>
   s<span class="token operator">=</span>op<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出栈操作" tabindex="-1"><a class="header-anchor" href="#出栈操作" aria-hidden="true">#</a> 出栈操作</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">pop</span><span class="token punctuation">(</span>nStack <span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    e<span class="token operator">=</span>s<span class="token operator">-></span>data<span class="token punctuation">;</span>
    nlist p<span class="token operator">=</span>s<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取栈顶元素" tabindex="-1"><a class="header-anchor" href="#取栈顶元素" aria-hidden="true">#</a> 取栈顶元素</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">top</span><span class="token punctuation">(</span>nStack <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> s<span class="token operator">-></span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2>
<p>队列是仅在表尾进行插入操作，在表头进行删除操作的线性表</p>
<p>插入元素称为入队，删除元素称为出队</p>
<p>存储结构为链队或者顺序队，一般用循环顺序队</p>
<p>对于一般的顺序队如果back-front==N，那么说明队列的位置全被占满了，发生溢出，不能再入队了</p>
<p>但是如果back-front&lt; N,但是back=N,说明back到了队列的最后一个元素，但是front前面还有空的位置，可以将新入队的元素放到前面</p>
<p>所以遇到back和front=N但是前面还有空位的情况，那么我们就将back和front放到前面去，可以用对N取余操作实现使得下标在0~N-1之间</p>
<p>那么取余之后，队空和队满的时候front和back都相等，那么怎么判断呢</p>
<p>解决这个问题，我们可以少用一个元素空间</p>
<p>那么当队满的时候的条件就是队尾指针+1=队头指针（q.back+1+N) %N==q-&gt;front,队空的时候就是back=front</p>
<h3 id="队列的顺序表示" tabindex="-1"><a class="header-anchor" href="#队列的顺序表示" aria-hidden="true">#</a> 队列的顺序表示</h3>
<p>用一维数组data[N]</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Queue</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>data<span class="token punctuation">;</span><span class="token comment">//队头元素的指针</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span><span class="token comment">//队头元素的下标</span>
    <span class="token keyword">int</span> back<span class="token punctuation">;</span><span class="token comment">//队尾元素的下标</span>
<span class="token punctuation">}</span>Queue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">init</span><span class="token punctuation">(</span>Queue <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    q<span class="token punctuation">.</span>data<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>data<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>front<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>back<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="求队列的长度" tabindex="-1"><a class="header-anchor" href="#求队列的长度" aria-hidden="true">#</a> 求队列的长度</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getlength</span><span class="token punctuation">(</span>Queue <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>back<span class="token operator">-</span>q<span class="token punctuation">.</span>front<span class="token operator">+</span>N<span class="token punctuation">)</span><span class="token operator">%</span>N<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="入队" tabindex="-1"><a class="header-anchor" href="#入队" aria-hidden="true">#</a> 入队</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span>Queue <span class="token operator">&amp;</span>q<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>back<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>N<span class="token operator">==</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>q<span class="token punctuation">.</span>back<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>back<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>back<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>N<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出队" tabindex="-1"><a class="header-anchor" href="#出队" aria-hidden="true">#</a> 出队</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">pop</span><span class="token punctuation">(</span>Queue <span class="token operator">&amp;</span>q<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>back<span class="token operator">==</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span>q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>front<span class="token operator">=</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>N<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取队头元素" tabindex="-1"><a class="header-anchor" href="#取队头元素" aria-hidden="true">#</a> 取队头元素</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">getf</span><span class="token punctuation">(</span>Queue <span class="token operator">&amp;</span>q<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token operator">==</span>q<span class="token punctuation">.</span>back<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span>q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列的链式存储方式" tabindex="-1"><a class="header-anchor" href="#队列的链式存储方式" aria-hidden="true">#</a> 队列的链式存储方式</h3>
<p>若用户无法估计所用队列的长度，采用链式队列存储</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Queue</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    Queue <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Queue<span class="token punctuation">,</span><span class="token operator">*</span>nQueue<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    nQueue front<span class="token punctuation">;</span><span class="token comment">//头指针</span>
    nQueue back<span class="token punctuation">;</span><span class="token comment">//尾指针</span>
<span class="token punctuation">}</span>lQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">init</span><span class="token punctuation">(</span>lQueue <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    q<span class="token punctuation">.</span>front<span class="token operator">=</span>q<span class="token punctuation">.</span>back<span class="token operator">=</span><span class="token punctuation">(</span>Queue<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>front<span class="token operator">=</span>q<span class="token punctuation">.</span>back<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="销毁" tabindex="-1"><a class="header-anchor" href="#销毁" aria-hidden="true">#</a> 销毁</h4>
<p>从头节点开始依次释放所有点</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">delect</span><span class="token punctuation">(</span>lQueue <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p<span class="token operator">=</span>q<span class="token punctuation">.</span>front<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span>front<span class="token operator">=</span>p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//也可以写为</span>
<span class="token keyword">void</span> <span class="token function">delect</span><span class="token punctuation">(</span>lQueue <span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    q<span class="token punctuation">.</span>back<span class="token operator">=</span>q<span class="token punctuation">.</span>front<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>front<span class="token operator">=</span>q<span class="token punctuation">.</span>back<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="入队-1" tabindex="-1"><a class="header-anchor" href="#入队-1" aria-hidden="true">#</a> 入队</h4>
<p>在back指针的后面插入新指针</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">insert</span><span class="token punctuation">(</span>lQueue <span class="token operator">&amp;</span>q<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nQueue op<span class="token punctuation">;</span>
    op<span class="token operator">=</span><span class="token punctuation">(</span>Queue<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>op<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    op<span class="token operator">-></span>data<span class="token operator">=</span>e<span class="token punctuation">;</span>
    op<span class="token operator">-></span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>back<span class="token operator">-></span>next<span class="token operator">=</span>op<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>back<span class="token operator">=</span>op<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出队-1" tabindex="-1"><a class="header-anchor" href="#出队-1" aria-hidden="true">#</a> 出队</h4>
<p>将头指针front的next指针指向本身的下一个指针</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">pop</span><span class="token punctuation">(</span>lQueue <span class="token operator">&amp;</span>q<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>front<span class="token operator">==</span>q<span class="token punctuation">.</span>back<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    nQueue p<span class="token operator">=</span>q<span class="token punctuation">.</span>front<span class="token operator">-></span>next<span class="token punctuation">;</span>
    x<span class="token operator">=</span>p<span class="token operator">-></span>data<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span>front<span class="token operator">-></span>next<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>back<span class="token operator">==</span>p<span class="token punctuation">)</span>q<span class="token punctuation">.</span>back<span class="token operator">=</span>q<span class="token punctuation">.</span>front<span class="token punctuation">;</span><span class="token comment">//当删的是最后一个元素的时候，尾指针也需要变</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="串-数组和广义表" tabindex="-1"><a class="header-anchor" href="#串-数组和广义表" aria-hidden="true">#</a> 串，数组和广义表</h2>
<p>串：内容受限的线性表，里面只能是字符，是由零个或多个任意字符组成的有限序列</p>
<p>子串：串中任意个连续的字符组成的子序列称为该串的子串</p>
<p>真子串是不包含自身的所有子串</p>
<p>主串：包含子串的串称为主串</p>
<p>字符位置：字符在序列中的序号</p>
<p>子串位置：子串中第一个字符在主串中的位置</p>
<p>空格串：由一个或多个空格组成的串</p>
<p>串相等：当且仅当两个串的长度相等并且各个对应位置上的字符都相同</p>
<p>所有的空串都是相等的</p>
<h3 id="串的类型定义-储存结构及运算" tabindex="-1"><a class="header-anchor" href="#串的类型定义-储存结构及运算" aria-hidden="true">#</a> 串的类型定义，储存结构及运算</h3>
<p>串的顺序储存结构</p>
<p>一般下标从1开始</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">[</span>N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//存储串的一维数组</span>
	<span class="token keyword">int</span> length<span class="token punctuation">;</span><span class="token comment">//串的当前长度</span>
<span class="token punctuation">}</span>String<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>串的链式存储结构</p>
<p>如果用普通的链表，每个结点只存一个字符的话，存储密度太低，那么我们就可以在一个结点的数据域存储多个字符来优化这个问题，那么这样的链表就叫做块链</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Chunk</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">Chunk</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Chunk<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Chunk <span class="token operator">*</span>head<span class="token punctuation">,</span><span class="token operator">*</span>tail<span class="token punctuation">;</span><span class="token comment">//串的头指针和尾指针</span>
	<span class="token keyword">int</span> length<span class="token punctuation">;</span><span class="token comment">//串的当前长度</span>
<span class="token punctuation">}</span>Lstring<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>数组：按一定格式排列起来的具有相同类型的数据元素的集合</p>
<p>一维数组：若线性表中的数据元素为非结构的简单元素，则称为一维数组</p>
<p>二维数组：若一维数组中的数据元素又是一维数据结构，则称为二维数组</p>
<p>三维数组：若三维数组中的数据元素又是一维数据结构，则称为三维数组</p>
<p>...</p>
<p>n维数组：若n-1维数组中的数据元素又是一维数据结构，则称为n维数组</p>
<p>线性表和数组的关系：线性表结构是数组结构的一个特例，而数组结构又是线性表结构的拓展</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230614194303.png" alt="20230614194303" loading="lazy"></p>
<p>在c语言中一个二维数组类型也可以定义为一维数组类型</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> elemtype array2<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//等价于</span>
<span class="token keyword">typedef</span> elemtype arry1<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> arry1 arry2<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般用顺序存储结构来表示数组</p>
<p>数组可以是多维的，但是内存单元是一维的，在存储数组数据结构之前，需要将多维关系映射到一维关系的问题</p>
<h4 id="特殊矩阵的压缩存储" tabindex="-1"><a class="header-anchor" href="#特殊矩阵的压缩存储" aria-hidden="true">#</a> 特殊矩阵的压缩存储</h4>
<p>压缩存储：若多个数据元素的值都相同，则只分配一个元素值的存储空间，且0元素不占存储空间</p>
<p>1.对称矩阵的压缩：在n*n的矩阵a中，满足以下性质：a[i][j]=a[j][i]，那么我们只用存储下（或上）三角（包括主对角线）的数据元素，共占用n(n+1)/2个元素空间</p>
<h3 id="广义表" tabindex="-1"><a class="header-anchor" href="#广义表" aria-hidden="true">#</a> 广义表</h3>
<p>广义表是n个元素的有限序列，其中每个元素是可以是一个原子，也可以是一个广义表</p>
<p>广义表通常记作：LS=(a1,a2,a3...an)</p>
<p>习惯上，一般用大写字母表示广义表，小写字母表示原子</p>
<p>表头：若LS非空，那么第一个元素就是表头，记作head(Ls)=a1，表头可以是原子也可以是子表</p>
<p>表尾：除了表头之外的其他元素组成的表，记作：tail(a2,a3...an)，表位不是最后一个元素，而是子表</p>
<p>广义表的长度定义为最外层所包含元素的个数</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615092632.png" alt="20230615092632" loading="lazy"></p>
<p>广义表的深度定义为广义表展开后所含括号的重数</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615092945.png" alt="20230615092945" loading="lazy"></p>
<h4 id="线性表和广义表的区别" tabindex="-1"><a class="header-anchor" href="#线性表和广义表的区别" aria-hidden="true">#</a> 线性表和广义表的区别</h4>
<p>广义表可以看做是线性表的推广，线性表是广义表的特例</p>
<h2 id="树和二叉树" tabindex="-1"><a class="header-anchor" href="#树和二叉树" aria-hidden="true">#</a> 树和二叉树</h2>
<h3 id="树和森林" tabindex="-1"><a class="header-anchor" href="#树和森林" aria-hidden="true">#</a> 树和森林</h3>
<p>定义：树是有n个结点的有限集</p>
<p>若n=0，称为空树</p>
<p>若n&gt;0，则满足两个条件：</p>
<p>1.有且仅有一个特定的称为n的结点</p>
<p>2.剩余结点可分为m个互不相交的有限集T1，T2...，Tm，其中每个集合本身又是一颗树，并称为根的子树</p>
<p>根节点：非空树中无前驱结点的结点</p>
<p>结点的度：结点拥有的子树数</p>
<p>树的度：树内各个结点的度的最大值</p>
<p>叶子结点：度=0的点，也叫终端结点</p>
<p>分支结点：度！=0的点，也叫非终端结点</p>
<p>内部结点：除了根结点以外的分支结点</p>
<p>结点的子树的根称为该节点的孩子，该节点是其孩子的双亲</p>
<p>对于一些有相同双亲的结点互为兄弟结点</p>
<p>位于同一层的结点叫做堂兄弟</p>
<p>结点的祖先：从根到该节点所经分支上的所有节点</p>
<p>结点的子孙：以某一结点为根的子树中的任一结点</p>
<p>树的深度：树中结点的最大层次</p>
<p>森林：m（m&gt;=0）个互不相交的树的集合</p>
<p>一颗树可以看做是特殊的森林</p>
<h4 id="树的存储结构" tabindex="-1"><a class="header-anchor" href="#树的存储结构" aria-hidden="true">#</a> 树的存储结构</h4>
<p>实现：定义数组存放数的结点，每个结点含两个域：</p>
<p>1.数据域：存放结点本身的信息</p>
<p>2.双亲域：指示本结点的双亲结点在数组中的位置</p>
<p>特点：找双亲容易找孩子难</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ptnode</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span><span class="token comment">//存储数据</span>
    <span class="token keyword">int</span> p<span class="token punctuation">;</span><span class="token comment">//存储双亲</span>
<span class="token punctuation">}</span>ptnode<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ptnode nodes<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> r<span class="token punctuation">,</span>n<span class="token punctuation">;</span><span class="token comment">//根结点的位置和结点个数</span>
<span class="token punctuation">}</span>ptree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3>
<p>为什么要研究二叉树？</p>
<p>1.二叉树结构简单，规律性最强</p>
<p>2.可以证明，所有树都可以转为唯一对应的二叉树，不失一般性</p>
<p>二叉树是n个结点的有限集，或者是空集</p>
<p>由一个根结点及两个互不相交的分别称作这个根的左子树和右子树的二叉树组成</p>
<p>二叉树的特点：</p>
<p>1.每个结点最多有两个孩子</p>
<p>2.子树有左右之分，次序不能颠倒</p>
<p>3.二叉树可以是空集合，根可以有空的左子树或者空的右子树</p>
<p>二叉树不是树的特殊情况，他们是两个概念：</p>
<p>二叉树的子树要区分左子树和右子树，即使只有一个子树也要进行区分</p>
<p>树当结点只有一个孩子时，就无需区分他是左还是右</p>
<p>（也就是说二叉树每个结点位置或者说次序都是固定的，可以是空，但是不能说他没有位置，而树的结点位置是相对于别的结点来说的，没有别的结点时就无所谓左右）</p>
<h4 id="二叉树的性质" tabindex="-1"><a class="header-anchor" href="#二叉树的性质" aria-hidden="true">#</a> 二叉树的性质</h4>
<p>性质：</p>
<p>1.二叉树在第i层上至多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mo stretchy="false">(</mo></msup><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">2^(i-1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9713em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mopen mtight">(</span></span></span></span></span></span></span></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span>个结点，至少有1个结点</p>
<p>2.深度为k的二叉树最多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mo stretchy="false">(</mo></msup><mi>k</mi><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^(k)-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mopen mtight">(</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>个结点，至少有k个结点</p>
<p>3.对于任何一颗二叉树，如果叶子数为n0，度为2的结点数为n2，n0=n2+1</p>
<p>4.具有n个结点的完全二叉树的深度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mo fence="true">⌊</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi><mo fence="true">⌋</mo></mrow><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\left \lfloor \log_{2}{n}  \right \rfloor+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;">⌊</span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">n</span></span><span class="mclose delimcenter" style="top:0em;">⌋</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>5.对一个有n个结点的完全二叉树，按层序遍历，对任意结点i，有：</p>
<p>1）如果i=1，则i是二叉树的根；否则i的双亲结点是i/2</p>
<p>2）如果2i&gt;n，则i为叶子结点，无左儿子，否则其左儿子是2i</p>
<p>3）如果2i+1&gt;n，则i无右儿子；否则i的右儿子是2i+1</p>
<h4 id="满二叉树和完全二叉树" tabindex="-1"><a class="header-anchor" href="#满二叉树和完全二叉树" aria-hidden="true">#</a> 满二叉树和完全二叉树</h4>
<p>满二叉树：一颗深度为k且有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mo stretchy="false">(</mo></msup><mi>k</mi><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^(k)-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mopen mtight">(</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>个结点的二叉树</p>
<p>满二叉树的特点：</p>
<p>1.每层上的结点数都是最大结点数</p>
<p>2.叶子结点全部在最底层</p>
<p>完全二叉树：深度为k的具有n个结点的二叉树，当且仅当每个结点都与深度为k的满二叉树中编号为1~n的结点一一对应时，称为完全二叉树</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615140621.png" alt="20230615140621" loading="lazy"></p>
<p>完全二叉树的特点：</p>
<p>1.叶子只可能分布在最大的两层上</p>
<p>2.对任意结点，如果其右子树最大层数是i，那么他的左子树层数必为i或i+1</p>
<h4 id="二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#二叉树的存储结构" aria-hidden="true">#</a> 二叉树的存储结构</h4>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615142109.png" alt="20230615142109" loading="lazy"></p>
<p>二叉树的链式存储结构：</p>
<p>存储三个部分：data存储本身的信息，lchild存储左儿子，rchild存储右儿子</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">tree</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> data<span class="token punctuation">;</span><span class="token comment">//存储的数据</span>
    <span class="token keyword">struct</span> <span class="token class-name">tree</span> <span class="token operator">*</span>lchild<span class="token punctuation">,</span><span class="token operator">*</span>rchild<span class="token punctuation">;</span>
<span class="token punctuation">}</span>tree<span class="token punctuation">,</span><span class="token operator">*</span>ntree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在n个结点的二叉链表中，有几个空指针域？</p>
<p>有2n个链域，处跟结点之外，其他的结点都有一个唯一的双亲，那么被占用的链域就是n-1个，剩下的空指针域就是n+1个</p>
<h4 id="二叉树的建立" tabindex="-1"><a class="header-anchor" href="#二叉树的建立" aria-hidden="true">#</a> 二叉树的建立</h4>
<p>先按照二叉树的结构写出对应的先序（或中序或后序）遍历，注意需要将二叉树所有结点的左右子树用空结点（比如'#'）补全（如果只求出了不是空的元素的先序遍历，那么不能确定唯一的二叉树），对于补全的二叉树求先序遍历，然后按照先序遍历写出先序序列，再建树</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615182351.png" alt="20230615182351" loading="lazy"></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//按照先序序列建立二叉树</span>
<span class="token keyword">bool</span> <span class="token function">creatxianxu</span><span class="token punctuation">(</span>ntree <span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ch<span class="token operator">==</span><span class="token char">'#'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	t<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
    	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    t<span class="token operator">=</span><span class="token punctuation">(</span>tree <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">tree</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    t<span class="token operator">-></span>data<span class="token operator">=</span>ch<span class="token punctuation">;</span>
    <span class="token function">creatxianxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">creatxianxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历二叉树" tabindex="-1"><a class="header-anchor" href="#遍历二叉树" aria-hidden="true">#</a> 遍历二叉树</h4>
<p>遍历的定义：顺着某一条搜索路径巡防二叉树中的结点，使得每个结点都被访问一次，而且仅被访问一次</p>
<p>遍历的目的：得到树中所有结点的一个线性排列</p>
<p>遍历用途：是树结构插入，删除，修改，查找和排序运算的前提，是二叉树一切运算的基础和核心</p>
<p>遍历方法：先序遍历，中序遍历，后序遍历</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615154508.png" alt="20230615154508" loading="lazy"></p>
<p>若二叉树中各结点的值均不相同，则二叉树的先序序列，中序序列和后序序列都是唯一的</p>
<p>由二叉树的先序序列和中序序列，或由二叉树的后序序列和中序序列可以确定唯一的二叉树</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//先序遍历</span>
<span class="token keyword">void</span> <span class="token function">xianxu</span><span class="token punctuation">(</span>ntree t<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>t<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">xianxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">xianxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//中序遍历</span>

<span class="token keyword">void</span> <span class="token function">zhongxu</span><span class="token punctuation">(</span>ntree t<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">zhongxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>t<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">zhongxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//后序遍历</span>

<span class="token keyword">void</span> <span class="token function">houxu</span><span class="token punctuation">(</span>ntree t<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">houxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">houxu</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>t<span class="token operator">-></span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已知先序和中序序列求二叉树</p>
<p>先序遍历：根左右，中序遍历左根右，那么我们先用先序遍历找到整个根节点，那么在中序遍历中这个根节点的左边就是他的左子树里有的节点，右边就是他的右子树中有的节点，对于他的左右子树中的节点，看哪个节点先出现在先序遍历中，那么这个结点就是子树的根，确定跟之后再按照中序遍历看该节点的左右子树...以此类推</p>
<h4 id="复制二叉树" tabindex="-1"><a class="header-anchor" href="#复制二叉树" aria-hidden="true">#</a> 复制二叉树</h4>
<p>如果是空树，递归结束</p>
<p>否则，申请新结点空间，复制根结点，然后递归复制左子树，再递归复制右子树</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">copy</span><span class="token punctuation">(</span>ntree t<span class="token punctuation">,</span>ntree <span class="token operator">&amp;</span>nt<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		nt<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	nt<span class="token operator">=</span><span class="token punctuation">(</span>tree<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">tree</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>nt<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	nt<span class="token operator">-></span>data <span class="token operator">=</span>t<span class="token operator">-></span>data <span class="token punctuation">;</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild <span class="token punctuation">,</span>nt<span class="token operator">-></span>lchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild <span class="token punctuation">,</span>nt<span class="token operator">-></span>rchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="计算二叉树深度" tabindex="-1"><a class="header-anchor" href="#计算二叉树深度" aria-hidden="true">#</a> 计算二叉树深度</h4>
<p>如果是空树，则深度为0</p>
<p>否则，递归计算左子树的深度记为m，递归计算右子树的深度记为n，二叉树的深度则是m和n的较大者+1</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">deep</span><span class="token punctuation">(</span>ntree <span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> m<span class="token operator">=</span><span class="token function">deep</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> n<span class="token operator">=</span><span class="token function">deep</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token operator">>=</span>n<span class="token punctuation">)</span><span class="token keyword">return</span> m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">return</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="计算二叉树结点总数" tabindex="-1"><a class="header-anchor" href="#计算二叉树结点总数" aria-hidden="true">#</a> 计算二叉树结点总数</h4>
<p>如果是空树，返回0</p>
<p>否则个数是左子树结点个数+右子树结点个数+1</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getn</span><span class="token punctuation">(</span>ntree <span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">getn</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">getn</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild <span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="计算二叉树叶子结点的个数" tabindex="-1"><a class="header-anchor" href="#计算二叉树叶子结点的个数" aria-hidden="true">#</a> 计算二叉树叶子结点的个数</h4>
<p>如果是空树，叶子结点个数为0</p>
<p>否则是左子树的叶子结点个数+右子树的叶子结点个数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">getyz</span><span class="token punctuation">(</span>ntree <span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild<span class="token operator">==</span><span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span>t<span class="token operator">-></span>rchild<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">getz</span><span class="token punctuation">(</span>t<span class="token operator">-></span>lchild <span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">getz</span><span class="token punctuation">(</span>t<span class="token operator">-></span>rchild <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="线索二叉树" tabindex="-1"><a class="header-anchor" href="#线索二叉树" aria-hidden="true">#</a> 线索二叉树</h4>
<p>为什么要研究线索二叉树？</p>
<p>当用二叉链表作为二叉树的存储结构时，可以很方便的找到某个结点的左右孩子，但一般情况下，无法直接找到该节点在某种遍历序列中的前驱和后继</p>
<p>一般解决方法：</p>
<p>1.遍历一遍直接找--浪费时间</p>
<p>2.再增加前驱，后继结点--增加存储负担</p>
<p>3.利用二叉链表中的空指针域：如果某个结点的左孩子为空，那么我们将空的左孩子指针指向其前驱，如果结点的右孩子为空，则将右孩子的指针域改为后继</p>
<p>上面方法3中改变指向的指针称为线索，加上了线索的二叉树称为线索二叉树</p>
<p>对二叉树按某种遍历次序使其变为线索二叉树的过程叫做线索化</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615205933.png" alt="20230615205933" loading="lazy"></p>
<p>（为了区分和原来指针的关系，画的时候线索线用虚线）</p>
<p>那么为了区分lchild和rchild到底是指向孩子的指针还是指向前驱或者后继的指针，对二叉链表中的每个结点都增设两个标志域ltag和rtag，并约定：</p>
<p>tag=0，指向孩子，tag=1，指向对应的前驱或者后继</p>
<p>那么线索二叉树的结构就是：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">xstree</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">int</span> ltag<span class="token punctuation">,</span>rtag<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">xstree</span> <span class="token operator">*</span>lchild<span class="token punctuation">,</span><span class="token operator">*</span>rchild<span class="token punctuation">;</span>
<span class="token punctuation">}</span>xstree<span class="token punctuation">,</span><span class="token operator">*</span>nxstree<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3>
<h4 id="数据压缩问题" tabindex="-1"><a class="header-anchor" href="#数据压缩问题" aria-hidden="true">#</a> 数据压缩问题</h4>
<p>将数据文件转换成由0，1组成的二进制串，称为编码</p>
<h4 id="利用二叉树求解表达式的值" tabindex="-1"><a class="header-anchor" href="#利用二叉树求解表达式的值" aria-hidden="true">#</a> 利用二叉树求解表达式的值</h4>
<p>若表达式为‘第一操作数 运算符 第二操作数’的形式，那么相应的二叉树中以左子树表示第一操作数，右子树表示第二操作数，根节点的数据域存放运算符</p>
<h3 id="哈夫曼树" tabindex="-1"><a class="header-anchor" href="#哈夫曼树" aria-hidden="true">#</a> 哈夫曼树</h3>
<p>路径：从树中的一个结点到另一个结点之间的分支构成这两个结点间的路径</p>
<p>结点的路径长度：两个结点间路径上的分支数</p>
<p>树的路径长度：从树的根结点到每个结点的路径长度之和</p>
<p>权：将树中的结点赋给一个有某种含义的数值，则这个数值称为该节点的权</p>
<p>结点的带权路径长度：从根结点到该点的路径长度与该点权的乘积</p>
<p>树的带权路径长度：树中所有叶子结点的带权路径长度之和，记作：WPL</p>
<p>哈夫曼树：带权路径长度最短的二叉树</p>
<h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h2>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616090536.png" alt="20230616090536" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091129.png" alt="20230616091129" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091409.png" alt="20230616091409" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091503.png" alt="20230616091503" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091749.png" alt="20230616091749" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092042.png" alt="20230616092042" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092735.png" alt="20230616092735" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092848.png" alt="20230616092848" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092948.png" alt="20230616092948" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616093037.png" alt="20230616093037" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616093207.png" alt="20230616093207" loading="lazy"></p>
<h3 id="图的存储结构" tabindex="-1"><a class="header-anchor" href="#图的存储结构" aria-hidden="true">#</a> 图的存储结构</h3>
<p>邻接矩阵和链式存储结构</p>
<p>邻接矩阵：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094110.png" alt="20230616094110" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094229.png" alt="20230616094229" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094319.png" alt="20230616094319" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094639.png" alt="20230616094639" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094803.png" alt="20230616094803" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094841.png" alt="20230616094841" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095141.png" alt="20230616095141" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095532.png" alt="20230616095532" loading="lazy"></p>
<p>边有权值的图，在结点上地址域前加一个数据域就可以了</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095717.png" alt="20230616095717" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095846.png" alt="20230616095846" loading="lazy"></p>
<p>邻接矩阵和邻接表的关系：</p>
<p>1.联系:邻接表中每个链表对应于邻接矩阵中的一行，链表中结点个数等于一行中非零元素的个数</p>
<p>2.区别:<br>
1）对于任一确定的无向图，邻接矩阵是唯一的(行列号与顶点编号一致)，但邻接表不唯一（链接次序与顶点编号无关）<br>
2）邻接矩阵的空间复杂度为O(n*n),而邻接表的空间复杂度为O(n+e)</p>
<p>3.用途：邻接矩阵多用于稠密图，而邻接表多用于稀疏图</p>
<h3 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> 图的遍历</h3>
<p>遍历定义:</p>
<p>从已给的连通图中某一顶点出发，沿着一些边访遍图中所有的顶点，且使每个顶点仅被访问一次，就叫做图的遍历，它是图的基本运算</p>
<p>遍历实质:找每个顶点的邻接点的过程</p>
<p>图的特点:</p>
<p>图中可能存在回路，且图的任一顶点都可能与其它顶点相通，在访问完某个顶点之后可能会沿着某些边又回到了曾经访问过的顶点</p>
<p>怎样避免重复访问?</p>
<p>解决思路:设置辅助数组visit[n]，用来标记每个被访问过的顶点<br>
初始状态visit[i]为0<br>
顶点i被访问，改visit为1，防止被多次访问</p>
<h3 id="最小生成树" tabindex="-1"><a class="header-anchor" href="#最小生成树" aria-hidden="true">#</a> 最小生成树</h3>
<p>生成树:所有顶点均由边连接在一起，但不存在回路的图</p>
<p>一个图可以有许多棵不同的生成树</p>
<p>所有生成树具有以下共同特点:</p>
<p>1.生成树的顶点个数与图的顶点个数相同</p>
<p>2.生成树是图的极小连通子图，去掉一条边则非连通;一个有n个顶点的连通图的生成树有n-1条边;·在生成树中再加一条边必然形成回路</p>
<p>3.生成树中任意两个顶点间的路径是唯一的</p>
<p>最小生成树:给定一个无向网络，在该网的所有生成树中，使得各边权值之和最小的那棵生成树称为该网的最小生成树，也叫最小代价生成树</p>
<h4 id="prim算法" tabindex="-1"><a class="header-anchor" href="#prim算法" aria-hidden="true">#</a> prim算法</h4>
<p>先将图的一个结点加入我们构造的最小生成树中的点集，然后找这个点集中有的点到这个点集中没有的点之间的所有边权最小的边，保留这条边，将这个边链接的没有加入点集的点加入点集</p>
<p>如下图：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616105111.png" alt="20230616105111" loading="lazy"></p>
<p>用prim算法的步骤就是：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616105138.png" alt="20230616105138" loading="lazy"></p>
<h4 id="kruskal算法" tabindex="-1"><a class="header-anchor" href="#kruskal算法" aria-hidden="true">#</a> kruskal算法</h4>
<p>在所有的边中每次找到边权最小的边，满足：加入边之后的图不形成回路</p>
<p>先画出所有点，然后慢慢加边</p>
<h3 id="最短路" tabindex="-1"><a class="header-anchor" href="#最短路" aria-hidden="true">#</a> 最短路</h3>
<h4 id="dijkstra算法-单源最短路" tabindex="-1"><a class="header-anchor" href="#dijkstra算法-单源最短路" aria-hidden="true">#</a> dijkstra算法：单源最短路</h4>
<p>g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小<br>
然后进行dijk算法：<br>
d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0<br>
进行n次循环，每次找到一个没有被确定的最短距离d[t]<br>
再用d[t]来更新每个点到1的最小距离（d[j]=min(d[j],d[t]+g[t][j]))</p>
<p>例：求下图中，a到其他结点的最短路径，画出求解过程<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616112224.png" alt="20230616112224" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616112313.png" alt="20230616112313" loading="lazy"></p>
<h4 id="floyd算法-多源汇最短路" tabindex="-1"><a class="header-anchor" href="#floyd算法-多源汇最短路" aria-hidden="true">#</a> floyd算法：多源汇最短路</h4>
<p>算法思想：</p>
<p>逐个顶点试探，从vi到vj的所有可能存在的路径中，选出一条最短的路径</p>
<p>求最短路径步骤：</p>
<p>初始时设置一个n阶方阵令其对角线元素为0，若存在边i-&gt;j，则对应元素为权值;否则为正无穷</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616163007.png" alt="20230616163007" loading="lazy"></p>
<p>逐步试着在原直接路径中增加中间顶点，若加入中间顶点后路径变短，则修改之;否则，维持原值。所有顶点试探完毕，算法结束</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616164031.png" alt="20230616164031" loading="lazy"></p>
<h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序" aria-hidden="true">#</a> 拓扑排序</h3>
<p>有向无环图：无环的有向图，简称DAG图</p>
<p>有向无环图常用来描述一个工程或系统的进行过程。(通常把计划、施工、生产、程序流程等当成是一个工程)</p>
<p>AOV网：用一个有向图表示一个工程的各子工程及其相互制约的关系，其中以顶点表示活动，弧表示活动之间的优先制约关系，称这种有向图为顶点表示活动的网，简称AOV网，用来解决拓扑排序</p>
<p>AOV网的特点：</p>
<p>1.若从i到j有一条有向路径，则i是j的前驱;j是i的后继。</p>
<p>2.若有i-&gt;j的一条有向边，则i是j的直接前驱;j是i的直接后继。</p>
<p>3.AOV网中不允许有回路，因为如果有回路存在，则表明某项活动以自己为先决条件，显然这是荒谬的</p>
<p>拓扑排序：在AOV网没有回路的前提下，我们将全部活动排列成一个线性序列，使得若AOV网中有i-&gt;j的弧存在，则在这个序列中，i一定排在j的前面，具有这种性质的线性序列称为拓扑有序序列，相应的拓扑有序排序的算法称为拓扑排序</p>
<p>步骤：<br>
在有向图中选一个没有前驱的顶点且输出之<br>
从图中删除该顶点和所有以它为尾的弧<br>
重复上述两步，直至全部顶点均已输出;或者当图中不存在无前驱的顶点为止</p>
<p>一个AOV网的拓扑排序不是唯一的</p>
<p>检测AOV网中是否存在环的方法：<br>
对有向图构造其顶点的拓扑有序序列，若网中所有顶点都在它的拓扑有序序列中，则该AOV 网必定不存在环。</p>
<!-- ### 关键路径

AOE网：用一个有向图表示一个工程的各子工程及其相互制约的关系，以弧表示活动，以顶点表示活动的开始或结束事件，称这种有向图为边表示活动的网，简称为AOE网，用来解决关键路径  

把工程计划表示为边表示活动的网络，即AOE网，用顶点表示事件，弧表示活动，弧的权表示活动持续时间。  

解决的问题：  

![20230616173730](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616173730.png)  


问题：  

1.完成整项工作至少需要多少时间  

2.哪些活动是影响工程进度的关键  

确定关键路径，需要定义四个描述量：  

1.ve（vj）：表示事件j最早发生时间  

2.vl（vj）：表示事件j最迟发生时间  

3.e（i）：表示活动i最早开始时间  

4.l（i）：表示活动i最迟开始时间  

l（i）-e（i）表示完成活动ai的时间余量  

关键活动：关键路径上的活动，即l(i)=e(i)   -->
<h2 id="查找-1" tabindex="-1"><a class="header-anchor" href="#查找-1" aria-hidden="true">#</a> 查找</h2>
<p>在查找表里查找数据</p>
<p>查找表：由同一类型的数据元素（或记录）构成的集合。由于“集合”中的数据元素之间存在着松散的关系，因此查找表是一种应用灵便的结构</p>
<p>怎么查找？</p>
<p>根据给定的某个值，在查找表中确定一个其关键字等于给定值的数据元素（或记录）</p>
<p>关键字：用来标识一个数据元素(或记录) 的某个数据项的值</p>
<p>主关键字:可唯一地标识一个记录的关键字是主关键字</p>
<p>次关键字:反之，用以识别若干记录的关键字是次关键字</p>
<p>查找的目的：</p>
<p>对查找表经常进行的操作：</p>
<p>1、查询某个“特定的”数据元素是否在查找表中;<br>
2、检索某个“特定的”数据元素的各种属性;<br>
3、在查找表中插入一个数据元素;<br>
4、删除查找表中的某个数据元素。</p>
<p>查找表可分为两类:静态查找表和动态查找表</p>
<p>静态查找表：仅作查询”（检索）操作的查找表</p>
<p>动态查找表:作“插入”和“删除”操作的查找表。有时在查询之后，还需要将“查询”结果为“不在查找表中”的数据元素插入到查找表中;或者，从查找表中删除其“查询”结果为“在查找表中”的数据元素，此类表为动态查找表。</p>
<h3 id="平均查找长度asl" tabindex="-1"><a class="header-anchor" href="#平均查找长度asl" aria-hidden="true">#</a> 平均查找长度ASL</h3>
<p>查找算法的评价指标：关键字的平均比较次数，也称平均查找长度ASL</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616203346.png" alt="20230616203346" loading="lazy"></p>
<p>n:记录的个数</p>
<p>pi:查找第i个记录的概率（通常认为pi =1/n）</p>
<p>ci:找到第i个记录所需的比较次数</p>
<p>查找的方法取决于查找表的结构，即表中数据元素是依何种关系组织在一起的</p>
<h3 id="线性表的查找" tabindex="-1"><a class="header-anchor" href="#线性表的查找" aria-hidden="true">#</a> 线性表的查找</h3>
<h4 id="顺序查找" tabindex="-1"><a class="header-anchor" href="#顺序查找" aria-hidden="true">#</a> 顺序查找</h4>
<p>应用范围：
顺序表或线性链表表示的静态查找表<br>
表内元素之间无序</p>
<p>查找成功的平均查找长度，设表中各记录查找概率相等：</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mi>S</mi><mi>L</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">ASL=\frac{n+1}{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<p>优点:算法简单，逻辑次序无要求，且不同存储结构均适用。</p>
<p>缺点:ASL太长，时间效率太低。</p>
<h4 id="折半查找" tabindex="-1"><a class="header-anchor" href="#折半查找" aria-hidden="true">#</a> 折半查找</h4>
<p>前提是序列必须有序</p>
<p>假设我们查找x，用l和r分别记录查找的两个端点，起始时l=1，r=n，每次查找的时候取他们的中间点坐标mid：mid=(l+r)/2,每次比较a[mid]和x的大小，如果相等就找到了，否则的话：如果a[mid]&gt;x，那么说明x在前面的位置，r=mid-1；如果a[mid]&lt; x，那么说明x在后面的位置，l=mid+1</p>
<p>如果l&gt;r说明序列中没有，结束</p>
<p>假如当前我们查找的是这个数组，ci表示第i个元素的实际查找次数</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616214503.png" alt="20230616214503" loading="lazy"></p>
<p>那么次数转换为树就是：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617092401.png" alt="20230617092401" loading="lazy"></p>
<p>那么平均查找长度就是：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617092436.png" alt="20230617092436" loading="lazy"></p>
<p>折半查找优点:效率比顺序查找高。</p>
<p>折半查找缺点:只适用于有序表，且限于顺序存储结构（对线性链表无效）。</p>
<h4 id="分块查找" tabindex="-1"><a class="header-anchor" href="#分块查找" aria-hidden="true">#</a> 分块查找</h4>
<p>条件：分块之后的块有序，块内元素可以有序或者无序</p>
<p>分块查找：先将表分成块，对块进行二分查找，然后再对块内元素进行顺序查找</p>
<p>分块过程：建立索引表，每个块含有块内最大关键字和指向本块的第一个元素的指针</p>
<p>块有序表示：当i&lt; j时，第i块里的每个元素都小于j块中最小的元素</p>
<p>平均查找长度：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617093142.png" alt="20230617093142" loading="lazy"></p>
<p>优点：插入和删除比较容易，无需进行大量移动。</p>
<p>缺点:要增加一个索引表的存储空间并对初始索引表进行排序运算。</p>
<p>适用情况:如果线性表既要快速查找又经常动态变化，则可采用分块查找</p>
<h3 id="树表的查找" tabindex="-1"><a class="header-anchor" href="#树表的查找" aria-hidden="true">#</a> 树表的查找</h3>
<p>当表插入、删除操作频繁时，为维护表的有序性，需要移动表中很多记录。</p>
<p>改用动态查找表——几种特殊的树</p>
<p>问题：对于给定值key，若表中存在，则成功返回;否则，插入关键字等于key的记录</p>
<p>那么要用到几种特殊的树：二叉排序树，平衡二叉树,红黑树,B-树,B+树,键树</p>
<h4 id="二叉排序树" tabindex="-1"><a class="header-anchor" href="#二叉排序树" aria-hidden="true">#</a> 二叉排序树</h4>
<p>二叉排序树:又称为二叉搜索树、二叉查找树</p>
<p>二叉排序树或是空树，或是满足如下性质的二叉树:</p>
<p>(1)若其左子树非空，则左子树上所有结点的值均小于根结点的值;<br>
(2)若其右子树非空，则右子树上所有结点的值均大于等于根结点的值;<br>
(3)其左右子树本身又各是一棵二叉排序树</p>
<p>二叉排序树的性质:</p>
<p>中序遍历非空的二叉排序树所得到的数据元素序列是一个按关键字排列的递增有序序列。</p>
<p>二叉排序树的查找：</p>
<p>从根节点开始查找x，如果当前结点大于x，那么查找他的左子树，如果当前结点小于x，查找右子树，如果等于就返回，如果是空那么就找不到</p>
<p>比较的关键字次数=此结点所在层次数</p>
<p>最多的比较次数=树的深度</p>
<p>平均查找长度：</p>
<p>最好情况：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101435.png" alt="20230617101435" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101540.png" alt="20230617101540" loading="lazy"></p>
<p>最差情况：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101507.png" alt="20230617101507" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101557.png" alt="20230617101557" loading="lazy"></p>
<p>问题:如何提高形态不均衡的二叉排序树的查找效率?</p>
<p>解决办法:做“平衡化”处理，即尽量让二叉树的形状均衡!</p>
<p>二叉排序树的插入：</p>
<p>从根结点开始，如果当前的根比x小，那么就判断他的右子树；如果当前的根比x大，那么就判断他的左子树；如果当前是空，那么就将x赋给当前结点；如果当前根等于x，那么就不再插入，结束</p>
<p>从空树出发，经过一系列的查找、插入操作之后，可生成一栋二叉排序树。</p>
<p>一个无序序列可通过构发二叉排序树而变成一个有序序列。构造树的过程就是对无序序列进行排序的过程。</p>
<p>关键字的输入顺序不同，建立的不向二叉排序树。</p>
<p>二叉排序树的删除：</p>
<p>从二叉排序树中删除一个结点，不能把以该结点为根的子树都删去，只能删掉该结点，并且还应保证删除后所得的二叉树仍然满足二叉排序树的性质不变</p>
<p>由于中序遍历二叉排序树可以得到一个递增有序的序列。那么，在二叉排序树中删去一个结点相当于删去有序序列中的一个结点</p>
<p>将因删除结点而断开的二叉链表重新链接起来并防止重新链接后树的高度增加</p>
<p>(1)被删除的结点是叶子结点:直接删去该结点，将双亲结点中相对应的指针域改为空</p>
<p>(2)被删除的结点只有左子树或者只有右子树，用其左子树或者右子树替换它(结点替换)</p>
<p>(3)被删除的结点既有左子树，也有右子树，那么就用他的前驱代替他，递归删除他的前驱结点；或者用他的后继结点替换他，然后删除后继结点</p>
<p>前驱结点是左子树中最大的点</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104537.png" alt="20230617104537" loading="lazy"></p>
<p>50的前驱是40，那么就先将他变为40：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104626.png" alt="20230617104626" loading="lazy"></p>
<p>然后再删除40的结点：由于40只有左子树，那么直接将他替换为他的左子树即可</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104727.png" alt="20230617104727" loading="lazy"></p>
<h4 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树" aria-hidden="true">#</a> 平衡二叉树</h4>
<p>平衡二叉树又称AVL树</p>
<p>一棵平衡二叉树或者是空树，或者是具有下列性质的二叉排序树:</p>
<p>1.左子树与右子树的高度之差的绝对值小于等于1</p>
<p>2.左子树和右子树也是平衡二叉排序树</p>
<p>为了方便起见，给每个结点附加一个数字，给出该结点左子树一右子树的高度差。这个数字称为结点的平衡因子（BF）</p>
<p>平衡因子=结点左子树的高度-结点右子树的高度</p>
<p>根据平衡二叉树的定义，平衡二叉树上所有结点的平衡因子只能是-1、0，或1。</p>
<p>当我们在一个平衡二叉排序树上插入一个结点时，有可能导致失衡，即出现平衡因子绝对值大于1的结点，如:2、-2.</p>
<p>如果在一颗AVL树中插入一个新结点后造成失衡，则必须重新调整树的位置，使之恢复平衡</p>
<p>平衡调整的四种类型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618141013.png" alt="20230618141013" loading="lazy"></p>
<p>就将这四种情况分别调整为下面的类型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618141156.png" alt="20230618141156" loading="lazy"></p>
<p>调整原则：11.降低高度 2.保持二叉排序树性质</p>
<p>规律：ll型和rr型把中间结点作为根结点，lr型和rl型把最低的结点作为根结点，然后按照二叉排序树的性质变化</p>
<p>具体实现方式：</p>
<p>ll型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618142252.png" alt="20230618142252" loading="lazy"></p>
<p>rr型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/F1F268E04FC2F0D689D8CAA2E973C3E4.png" alt="F1F268E04FC2F0D689D8CAA2E973C3E4" loading="lazy"></p>
<p>lr型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/CFD8AC5C4CA3E3263F18E461F2A24C6C.png" alt="CFD8AC5C4CA3E3263F18E461F2A24C6C" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/9A56D7F08401C6C1090D412085685B8F.png" alt="9A56D7F08401C6C1090D412085685B8F" loading="lazy"></p>
<p>rl型：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/DEE36D55E0AAD209004B7421435FD09A.png" alt="DEE36D55E0AAD209004B7421435FD09A" loading="lazy"></p>
<p>方法：将A和B分别作为c的左子树和右子树，原来的c的左子树作为A的右子树，原来的c的右子树作为B的左子树</p>
<h3 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树" aria-hidden="true">#</a> B-树</h3>
<p>m阶B树的特性：</p>
<p>一棵m阶B-树，或为空树，或为满足下列特性的树:</p>
<p>(1)树中每个结点至多有m棵子树;</p>
<p>(2)若根结点不是叶子结点，则至少有两棵子树;</p>
<p>(3)除根之外的所有非终端结点至少有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo fence="true">⌈</mo><mfrac><mi>m</mi><mn>2</mn></mfrac><mo fence="true">⌉</mo></mrow><annotation encoding="application/x-tex">\left \lceil\frac{m}{2}\right \rceil</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2em;vertical-align:-0.35em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">⌈</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">⌉</span></span></span></span></span></span> 棵子树;</p>
<p>(4)所有叶子结点都出现在同一层，且不带信息。</p>
<p>B树中允许一个结点中包含多个key ,可以是3个、4个、5个甚至更多，并不确定，需要看具体的实现。现在我们选择一个参数M,来构造一个B树，我们可以把它称作是M阶的B树，那么该树会具有如下特点:</p>
<p>每个结点最少有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mo fence="true">⌈</mo><mfrac><mi>m</mi><mn>2</mn></mfrac><mo fence="true">⌉</mo></mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\left\lceil\frac{m}{2}\right\rceil-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2em;vertical-align:-0.35em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">⌈</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">⌉</span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 个key，最多有M-1个key，M个指针，并且以升序排列</p>
<p>以五阶b树为例(每个结点最多存储四个key，五个指针)：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619230715.png" alt="20230619230715" loading="lazy"></p>
<p>在两个key之间的指针所指的结点的所有key范围都在这两个key之间，并且以升序排列</p>
<p>构建B-树：</p>
<p>每次插入一个key：如果小于当前结点的最小key并且当前结点有左子树，就找当前结点的左子树；大于当前结点最大key就找当前结点的右子树</p>
<p>找到应插入的结点之后，当插入这个key之后的结点数据大于m-1，那么我们就将中间的key向上裂变，key左面的小于他的key做他的左子树，右边大于他的key做右子树</p>
<p>在五阶B树的一个结点key值为：23,234,0345,0899的结点中插入一个1200，那么插入之后的key为23,234,0345,0899,1200，个数大于4，那么就找位于中间的key值为0345的域将他向上裂变，然后就形成：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619231624.png" alt="20230619231624" loading="lazy"></p>
<p>如果在以下的图中插入一个1000</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619232254.png" alt="20230619232254" loading="lazy"></p>
<p>从根节点开始，大于0345，找右子树，那么应该插入在0899和1200之间，但是插入之后就变成了0899,1000,1200,1234,1500，那么我们就将中间元素1200向上分裂到0345后面，变成：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619232649.png" alt="20230619232649" loading="lazy"></p>
<p>将下图插入一个2456：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619232849.png" alt="20230619232849" loading="lazy"></p>
<p>那么最终会插入到第二层最右边的结点，这个时候1980向上分裂，形成：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619233007.png" alt="20230619233007" loading="lazy"></p>
<p>那么第一层的结点不符合题意，1200再次向上分裂：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619233102.png" alt="20230619233102" loading="lazy"></p>
<p>B树的删除：</p>
<p>如果删除之后，还满足每个结点的key的个数&lt; m并且指针数是key的个数+1，就直接删除</p>
<p>如果删除之后，他的指针少了一个（一个结点少了一个子树），那么我们就可以用他的根节点或者兄弟结点来代替他</p>
<p>比如：</p>
<p>将下图中的4阶B-树删掉39</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230620001042.png" alt="20230620001042" loading="lazy"></p>
<p>那么删掉之后变为：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230620001106.png" alt="20230620001106" loading="lazy"></p>
<p>那么第二层最右的子树就少了一个左子树，那么我们需要将这个左子树填上。那么我们可以注意到删除的子树的右边的结点有两个key，那么我们就可以将删掉的结点的根结点的最左边的key填到删除的结点的key，向删除的子树的右边的结点借一个最左边的key当跟结点被删除的key</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230620001428.png" alt="20230620001428" loading="lazy"></p>
<p>那么如果我们想再删除64，删了之后就会变为</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230620001501.png" alt="20230620001501" loading="lazy"></p>
<p>那么还是少了一个指针，如果我们想问他的右边的结点借一个key，那么右边的结点就会变成空，还是会少一个结点</p>
<p>那么我们就可以将他的根结点最左边的key放到他的左子树上或者将根节点的最右边的key放在右子树上，那么这样就会使得根节点少了一个key，也就少了一个指针，满足B-树的要求,下图是将跟结点的最右边key放到右子树</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230620001715.png" alt="20230620001715" loading="lazy"></p>
<h3 id="b-树-1" tabindex="-1"><a class="header-anchor" href="#b-树-1" aria-hidden="true">#</a> B+树</h3>
<p>所有元素都会出现在叶子结点，非叶子结点只是起到索引作用，叶子结点是用来存放数据的</p>
<p>叶子结点形成一个链表，每一个叶子结点都会有一个指针指向下一个结点</p>
<p>以4阶B+数为例：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619234027.png" alt="20230619234027" loading="lazy"></p>
<p>B+树的构造：</p>
<p>在插入一个结点的时候，找寻插入规则和B-树一样，只是在分裂的时候，中间key向上分裂的同时，他的右子树中还含有key，并且建立一个他的左子树到右子树的指针</p>
<p>比如在下图的5阶B+树中中插入890：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619234418.png" alt="20230619234418" loading="lazy"></p>
<p>0567向上分裂，他的左子树是0232,0234，右子树是0567,890,1000，并且多出一个左子树到右子树的指针</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619234701.png" alt="20230619234701" loading="lazy"></p>
<p>相对于B树的区别：1.所有数据都会出现在叶子结点 2.叶子结点形成一个单向列表</p>
<h3 id="散列表的查找" tabindex="-1"><a class="header-anchor" href="#散列表的查找" aria-hidden="true">#</a> 散列表的查找</h3>
<p>基本思想：记录的存储位置与关键字之间存在的对应关系</p>
<p>对应关系：hash函数</p>
<p>loc[i]=h[keyi]</p>
<p>优点：查找效率高</p>
<p>缺点：空间效率低</p>
<p>散列方法(杂凑法)：选取某个函数，依该函数按关键字计算元素的存储位置，并按此存放;查找时，由同一个函数对给定值k计算地址，将k与地址单元中元素关键码进行比，确定查找是否成功。</p>
<p>散列函数(杂凑函数):散列方法中使用的转换函数</p>
<p>冲突:不同的关键码映射到同一个散列地址，key1！=key2，但是h(key1)=h(key2)</p>
<p>同义词:具有相同函数值的多个关键字</p>
<p>使用散列表要解决好两个问题:</p>
<p>1.构造好的散列函数:所选函数尽可能简单，以便提高转换速度;所选函数对关键码计算出的地址，应在散列地址集中致均匀分布，以减少空间浪费。</p>
<p>2.制定一个好的解决冲突的方案:查找时，如果从散列函数计算出的地址中查不到关键码，则应当依据解决冲突的规则，有规律地查询其它相关单元。</p>
<p>构造散列函数考虑的因素：</p>
<p>1.执行速度</p>
<p>2.关键字长度</p>
<p>3.散列表的大小</p>
<p>4.关键字的分布情况</p>
<p>5.考虑查找频率</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/EA5FE07DAE12003C4F817A9ADE9AF72C.png" alt="EA5FE07DAE12003C4F817A9ADE9AF72C" loading="lazy"></p>
<p>直接定址法：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618155141.png" alt="20230618155141" loading="lazy"></p>
<p>除留余数法：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618155526.png" alt="20230618155526" loading="lazy"></p>
<h4 id="处理冲突的方法" tabindex="-1"><a class="header-anchor" href="#处理冲突的方法" aria-hidden="true">#</a> 处理冲突的方法</h4>
<p>处理冲突的方法有：开放定址法，链地址法，再散列法，建立一个公共溢出区域</p>
<p>1.开放地址法：有冲突的时候就去寻找下一个空的散列地址，只要散列表足够大，空的散列地址总能找到，并将数据元素存入</p>
<p>寻找空的地址时，可以用线性探测法，链地址法</p>
<p>线性探测法：遇到冲突时，依次看冲突位置的后一位，后两位...直到找到符合条件的地址填入</p>
<p>计算平均查找长度ASL：每个数找到的次数的和除以数的个数</p>
<p>2.链地址法：</p>
<p>基本思想:相同散列地址的记录链成单链表</p>
<p>m个散列地址就设m个单链表（m是取模的数），然后用一个数组将m个单链表的表头指针存储起来，形成一个动态的结构</p>
<p>链地址法操作步骤：对于关键值key，计算地址，如果地址是空就插入该地址，否则选择解决方法处理冲突，计算下一个储存地址，如果该地址链表不为空，那么利用扦插法或者后插法将元素插入此链表</p>
<p>查找成功的平均查找次数：</p>
<p>构造出链之后的每个数的查找次数总和除以数的个数</p>
<p>查找失败的平均查找次数：</p>
<p>构造出链后，每个地址所拥有的数的个数+1的总和除以地址总数</p>
<p>例如下图：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/14F48DF0F97BFD4A1890E821E8AE41D6.png" alt="14F48DF0F97BFD4A1890E821E8AE41D6" loading="lazy"></p>
<p>每个数查找成功的次数：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/FD7489602102E2011B568D2B63596C12.png" alt="FD7489602102E2011B568D2B63596C12" loading="lazy"></p>
<p>ASL=（1<em>4+2</em>3+3*1）/8</p>
<p>查找不成功的次数：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1BCCF819D948FD58ED70A9ABE790E363.png" alt="1BCCF819D948FD58ED70A9ABE790E363" loading="lazy"></p>
<p>ASL=(3+4+2+1+1+3+1+1+1+1+1)/11</p>
<p>例题：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/FEBFC9ADCEB827CE9D7F632EAE8E1F26.png" alt="FEBFC9ADCEB827CE9D7F632EAE8E1F26" loading="lazy"></p>
<p>mod13，那么就将数组设置成0~12，然后再对每个地址加入值</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/9964C178FA5F1453657648A305AF7521.png" alt="9964C178FA5F1453657648A305AF7521" loading="lazy"></p>
<h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2>
<h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3>
<p>基本思想：</p>
<p>每步将一个待排序的对象，按其关键码大小，插入到前面已经排好序的一组对象的适当位置上，直到对象全部插入为止。</p>
<p>每插入一个元素，应插入的位置之后的所有元素都右移</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/CD92275F4C8272D3FF1EB252734F7070.png" alt="CD92275F4C8272D3FF1EB252734F7070" loading="lazy"></p>
<p>那么有几种插入排序：</p>
<h4 id="_1-直接插入排序-顺序法定位插入位置" tabindex="-1"><a class="header-anchor" href="#_1-直接插入排序-顺序法定位插入位置" aria-hidden="true">#</a> 1.直接插入排序：顺序法定位插入位置</h4>
<p>在基本有序的序列里效率比较高</p>
<p>将x加在序列的最后一个位置，每次比较前面的位置上的数，如果比x大就交换</p>
<h4 id="_2-二分插入排序-二分法定位插入位置" tabindex="-1"><a class="header-anchor" href="#_2-二分插入排序-二分法定位插入位置" aria-hidden="true">#</a> 2.二分插入排序：二分法定位插入位置</h4>
<p>比直接插入排序时间=快一些</p>
<p>先将插入的元素x保存到哨兵位置0，然后l=1，r=i-1，当l&lt;=r的时候取mid=(l+r)/2，如果x&lt; a[mid],r=mid-1;如果x&gt;a[mid],l=mid+1。循环结束，插入位置是r+1，那么我们就将r+1到i的元素都往后移动一位，在r+1的位置赋值x</p>
<h4 id="_3-希尔排序-缩小增量多遍插入排序" tabindex="-1"><a class="header-anchor" href="#_3-希尔排序-缩小增量多遍插入排序" aria-hidden="true">#</a> 3.希尔排序：缩小增量多遍插入排序</h4>
<p>先将整个待排记录序列分割成若干子序列，分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行一次直接插入排序。</p>
<p>特点：</p>
<p>1.一次移动，移动位置较大，跳跃式的接近排序后的最终位置</p>
<p>2.最后一次只需要少量移动</p>
<p>3.增量序列必须是递减的，最后一个必须是1</p>
<p>4.增量序列应该是互质的</p>
<p>比如下图的序列：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/081E152EC37688970BBDD743D187E95E.png" alt="081E152EC37688970BBDD743D187E95E" loading="lazy"></p>
<p>先将间隔为5的数进行一次直接插入排序，再将间隔为3的进行一次直接插入排序，最后再对整体直接插入排序</p>
<p>希尔排序是一种不稳定的排序算法</p>
<h3 id="交换排序" tabindex="-1"><a class="header-anchor" href="#交换排序" aria-hidden="true">#</a> 交换排序</h3>
<p>常见的交换排序方法：冒泡排序和快速排序</p>
<h4 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序：</h4>
<p>基本思想：不断将两个相邻的数两两比较，如果不符合排序条件就交换</p>
<p>进行n-1趟两两比较就可以得到一个有序序列</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/F78803C07D22B729A0FCE57FA5092041.png" alt="F78803C07D22B729A0FCE57FA5092041" loading="lazy"></p>
<h4 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h4>
<p>时间复杂度：O(nlogn)</p>
<p>快速排序不稳定</p>
<p>不适用于原本有序或者基本有序的记录序列进行排序</p>
<p>基本思想：任取一个元素(如:第一个)为中心，所有比它小的元素一律前放，比它大的元素一律后放，形成左右两个子表;对各子表重新选择中心元素并依此规则调整，直到每个子表的元素只剩一个</p>
<p>每次划分选择第一个数x，将他放到0号位置，那么一号位置就空了出来，用两个指针l和r分别从0号和n号位置出发，因为空着的是l，那么我们就将r向前移动，找到一个小于x的数，将他放到l，那么r就空了，我们继续将l向后移动，找到一个大于x的数，将数放到r...以此类推直到l=r，那么l的位置就是x应该放的位置，那么l将区间分成了两段，那么分别再对两段区间进行操作</p>
<p>例：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/8344B2A4EA8CCEC5530F7F6AEDE418ED.png" alt="8344B2A4EA8CCEC5530F7F6AEDE418ED" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/8327027CB699553C50E485EA9B3EDC5B.png" alt="8327027CB699553C50E485EA9B3EDC5B" loading="lazy"></p>
<h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3>
<h4 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h4>
<p>堆排序不稳定</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C415E45291A56F7994DA094A5FC11040.png" alt="C415E45291A56F7994DA094A5FC11040" loading="lazy"></p>
<p>从堆的定义可以看出，堆实质是满足如下性质的完全二叉树:二叉树中任一非叶子结点均小于(大于)它的孩子结点</p>
<p>若在输出堆顶的最小值(最大值)后使得剩余n-1个元素的序列重又建成一个堆，则得到n个元素的次小值（次大值）…如此反复，便能得到一个有序序列，这个过程称之为堆排序。</p>
<p>要想使用堆排序，需要先将无序序列变成一个堆</p>
<p>对一个无序序列反复筛选就可以得到一个堆</p>
<p>显然：单结点的二叉树是堆，在完全二叉树中所有以叶子结点为根的子树是堆</p>
<p>那么从完全二叉树的最后一个非叶子结点开始，一直到第一个点进行调整，将每个不是叶节点的点调整为以他为根节点的堆，最后一个非叶子结点是n/2</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619002140.png" alt="20230619002140" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/27BCAEA08AFC15F5A5FEF64A25E9C23A.png" alt="27BCAEA08AFC15F5A5FEF64A25E9C23A" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AA80A016B2AAE4639ED6494C919B235A.png" alt="AA80A016B2AAE4639ED6494C919B235A" loading="lazy"></p>
<p>每次取出堆顶元素之后对剩下的元素进行调整成为一个新的堆</p>
<p>以小根堆为例：</p>
<p>1．输出堆顶元素之后，以堆中最后一个元素替代之;<br>
2.然后将根结点值与左、右子树的根结点值进行比较，并与其中小者进行
交换;<br>
3．重复上述操作，直至叶子结点，将得到新的堆，称这个从堆顶至叶子的
调整过程为“筛选”</p>
<h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h3>
<p>将两个或两个以上的有序子序列归并成一个有序序列</p>
<p>在内部排序中，通常采用的是2-路归并排序</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/415068911995D53F559B2A744FE90C93.png" alt="415068911995D53F559B2A744FE90C93" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C467C82D5A271911F5884ED1A6232638.png" alt="C467C82D5A271911F5884ED1A6232638" loading="lazy"></p>
<h3 id="基数排序" tabindex="-1"><a class="header-anchor" href="#基数排序" aria-hidden="true">#</a> 基数排序</h3>
<p>时间复杂度O(k*(n+m))，k是关键字数，m关键字取值范围为m个值</p>
<p>基本思想:分配+收集</p>
<p>也叫桶排序或箱排序:设置若干个箱子，将关键字为k的记录放入第k个箱子，然后在按序号将非空的连接。</p>
<p>基数排序:数字是有范围的，均由0-9这十个数字组成，则只需设置十个箱子，相继按个、十、百...进行排序.</p>
<p>先设置0~9一共十个箱子，然后我们从所有数的最低位到最高位一位一位比，每次比的时候将相应的位数上的数放入相应的桶中，进行完这个操作之后按照顺序收集一次数据，然后再进行下一位的比较，直到比完</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/D5B22AAD65D3686E912E7B1AA50C66CB.png" alt="D5B22AAD65D3686E912E7B1AA50C66CB" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/87A2FE8C73506C4E47CA9A27F7859CE2.png" alt="87A2FE8C73506C4E47CA9A27F7859CE2" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/D45AA465B200B61D00580DBE5A9800C8.png" alt="D45AA465B200B61D00580DBE5A9800C8" loading="lazy"></p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/2C0A247CF17730AC14B605FD4C86A788.png" alt="2C0A247CF17730AC14B605FD4C86A788" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/3C69A6E666376DCA818DB2490A4D3B01.png" alt="3C69A6E666376DCA818DB2490A4D3B01" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/E1C2100E6CD1ACDFF816B3465BB30899.png" alt="E1C2100E6CD1ACDFF816B3465BB30899" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AB3770D7A6E2935132D0FA266D9046BB.png" alt="AB3770D7A6E2935132D0FA266D9046BB" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619004326.png" alt="20230619004326" loading="lazy"></p>
</div></template>


