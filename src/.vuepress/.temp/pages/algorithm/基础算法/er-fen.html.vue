<template><div><p>时间复杂度：O（logn）</p>
<p>对于一整个数据，有前一部分的数据满足某种性质，后一部分不满足某种性质，用二分可以找出这个分界线，二分经常处理满足某种条件的最大最小值问题</p>
<p>有整数二分和小数二分两种</p>
<h2 id="整数二分" tabindex="-1"><a class="header-anchor" href="#整数二分" aria-hidden="true">#</a> 整数二分：</h2>
<p>假设给出一段区间，前半部分满足某种性质，后半部分不满足某种性质，那么分界点有两个，即满足性质的最后一个res1和不满足性质的第一个res2，如图1：</p>
<p>如果我们想找res1，那么我们可以先找中间值mid=（l+r+1）/2，判断他是否满足性质，如果满足性质，那么答案就在[mid,r]之间，那么就将l设为mid之后重复找，如图：</p>
<p>那么l重设之后，再找mid，如果mid不满足性质，那么答案就在[l,mid-1]之间，那么将r设为mid-1继续进行查找，如图：</p>
<p>一直到l&gt;=r的时候停止查找，那么答案就是a[l]</p>
<p>伪代码如下：</p>
<p>cheek函数是用来检查是否符合要找的答案的性质</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">cheek</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> l<span class="token operator">=</span>mid<span class="token punctuation">;</span>
    <span class="token keyword">else</span> r<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想找res2，那么我们可以先找中间值mid=（l+r）/2，判断他是否满足性质，如果不满足性质，那么说明答案在[l,mid]之间，那么将r设为mid之后继续上述步骤，如图：</p>
<p>重设之后继续找mid，如果mid满足性质，那么说明答案在[mid+1,r]之间，那么将l设为mid+1，继续上述操作，如图：</p>
<p>一直到l&gt;=r的时候停止查找，那么答案就是a[r]</p>
<p>伪代码如下：</p>
<p>cheek函数是用来检查是否符合要找的答案的性质</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
<span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">cheek</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span>r<span class="token operator">=</span>mid<span class="token punctuation">;</span>
    <span class="token keyword">else</span> l<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意两个部分中间值的取值，取值不当会死循环或段错误</p>
<p>例题：</p>
<p>给出一个含有n个数的升序数组，q个查询，每次查询给出一个数x，查询x的起始位置和终止位置，如果不存在输出“-1 -1”</p>
<p>思路：查询x的起始位置，x的前面的数满足a[i]&lt;=x，x的后面满足a[i]&gt;=x，起始位置就是a[i]&gt;=x的第一个数，终止位置是a[i]&lt;=x的最后一个位置，那么我们就可以用二分解决。如果找到的起始位置和终止位置所值的数不是x，那么说明x不在数组里，输出“-1 -1”</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> q<span class="token punctuation">,</span>x<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cin<span class="token operator">>></span>n<span class="token operator">>></span>q<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// cout&lt;&lt;"q=="&lt;&lt;q&lt;&lt;endl;</span>
        cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
        <span class="token keyword">int</span> l<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>r<span class="token operator">=</span>n<span class="token punctuation">,</span>res1<span class="token punctuation">,</span>res2<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&lt;=</span>x<span class="token punctuation">)</span>l<span class="token operator">=</span>mid<span class="token punctuation">;</span>
            <span class="token keyword">else</span> r<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res2<span class="token operator">=</span>l<span class="token punctuation">;</span>
        <span class="token comment">// cout&lt;&lt;"res2=="&lt;&lt;res2&lt;&lt;endl;</span>
        l<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>r<span class="token operator">=</span>n<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">>=</span>x<span class="token punctuation">)</span>r<span class="token operator">=</span>mid<span class="token punctuation">;</span>
            <span class="token keyword">else</span> l<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res1<span class="token operator">=</span>l<span class="token punctuation">;</span>
        <span class="token comment">// cout&lt;&lt;"res1=="&lt;&lt;res1&lt;&lt;endl;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>res1<span class="token punctuation">]</span><span class="token operator">!=</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res1<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>res2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cout<span class="token operator">&lt;&lt;</span>res1<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token operator">&lt;&lt;</span>res2<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小数二分" tabindex="-1"><a class="header-anchor" href="#小数二分" aria-hidden="true">#</a> 小数二分：</h2>
<p>小数二分的时候，因为没有整数那种l==r的情况，所以我们认为l和r距离很近的时候（如r-l&lt;1e-7），可以大致认为他们是一个同一个小数，将l或r作为结果，循环结束</p>
<p>例题：
给定一个浮点数n，求它的三次方根,输出数为6位小数</p>
<p>-1000&lt;=n&lt;=1000</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> n<span class="token punctuation">;</span>
    cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
    <span class="token keyword">double</span> l<span class="token operator">=</span><span class="token operator">-</span><span class="token number">10000</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token operator">></span><span class="token number">1e-7</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">double</span> mid<span class="token operator">=</span><span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// cout&lt;&lt;"l=="&lt;&lt;l&lt;&lt;" r=="&lt;&lt;r&lt;&lt;endl;</span>
        <span class="token comment">// cout&lt;&lt;"mid=="&lt;&lt;mid&lt;&lt;endl;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token punctuation">(</span>mid<span class="token operator">*</span>mid<span class="token operator">*</span>mid<span class="token punctuation">)</span><span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span>l<span class="token operator">=</span>mid<span class="token punctuation">;</span>
        <span class="token keyword">else</span> r<span class="token operator">=</span>mid<span class="token punctuation">;</span>
        <span class="token comment">// cout&lt;&lt;"-=="&lt;&lt;n-(mid*mid*mid)&lt;&lt;endl;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%.6f"</span><span class="token punctuation">,</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


