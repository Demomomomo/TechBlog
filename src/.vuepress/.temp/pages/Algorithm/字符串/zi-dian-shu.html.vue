<template><div><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230403143912.png" alt="20230403143912" loading="lazy"></p>
<p>边表示字母，根节点到某个结点代表一个字符串，例如1-&gt;2-&gt;5就是'aa'</p>
<p>用一个二维数组来表示字典树：tr[i][j]</p>
<p>tr[i][j]=x表示编号为i的点，下一个字符是第j个字母的点的编号是x(j从0开始，对应小写a)</p>
<p>例如上图：</p>
<p>tr[1][0]=2表示编号为1的结点，下一个字符是a的结点编号是2</p>
<h2 id="插入字符串" tabindex="-1"><a class="header-anchor" href="#插入字符串" aria-hidden="true">#</a> 插入字符串</h2>
<p>例如我们要插入字符串s=abcd</p>
<p>那么我们需要从根节点一个一个插入每个字符</p>
<p>对于每个字符，如果已经存在，那么我们就遍历下一个字符</p>
<p>如果不存在，我们就新建一个结点将他插入</p>
<p>例如：</p>
<p>根节点p=0</p>
<p>对于每个s[i]</p>
<p>我们先找到s[i]是第几个字符：u=s[i]-'a'</p>
<p>然后从根节点开始遍历：</p>
<p>当tr[p][u]==0的时候，说明没有建立这个结点，我们就建立他：tr[p][u]=++idx</p>
<p>当tr[p][u]!=0的时候，说明有这个点，我们就遍历他的下一个字符看看是否建立</p>
<p>总的来说就是如果没有建点就建点，建了就看下一个</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> u<span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">++</span>idx<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//这个在字符串最后一个字符的结点编号处记录这个字符串有几个</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找字符串" tabindex="-1"><a class="header-anchor" href="#查找字符串" aria-hidden="true">#</a> 查找字符串</h2>
<p>就从根节点开始，对每个s[i]，看看tr[p][u]是否存在，如果存在就找下一个，如果不存在直接返回false，到最后一个编号为p的字符，如果cnt[p]&gt;0就说明存在，返回true</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">query</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> u<span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2>
<h3 id="字符串统计" tabindex="-1"><a class="header-anchor" href="#字符串统计" aria-hidden="true">#</a> 字符串统计</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/837/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/837/<ExternalLinkIcon/></a></p>
<p>题意：</p>
<p>维护一个字符串集合，支持两种操作：</p>
<p>1.I x:将字符串x插入集合中</p>
<p>2.Q x:将询问字符串在集合中的个数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> cnt<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> tr<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> u<span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">++</span>idx<span class="token punctuation">;</span>
		p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> u<span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">'a'</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string op<span class="token punctuation">,</span>s<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>op<span class="token operator">>></span>s<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"I"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">insert</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token function">query</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最大异或对" tabindex="-1"><a class="header-anchor" href="#最大异或对" aria-hidden="true">#</a> 最大异或对</h3>
<p>原题链接：<br>
<a href="https://www.acwing.com/problem/content/145/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/145/<ExternalLinkIcon/></a></p>
<p>题意：</p>
<p>有n个整数，在这些整数中选两个数进行异或运算，得到的最大结果是多少</p>
<p>思路：</p>
<p>想让异或运算最大的话，对于一个数的每个二进制位的数，我们都选择与之不同的数走：比如一个数的某个二进制位是0，那么我们就需要走是1的那条路。并且是从最高位开始走</p>
<p>对n个数建立一个字典树</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">4e6</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> tr<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">;</span>
<span class="token keyword">int</span> cnt<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">31</span><span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> u<span class="token operator">=</span>x<span class="token operator">>></span>i<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span><span class="token operator">++</span>idx<span class="token punctuation">;</span>
		p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> p<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">31</span><span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> u<span class="token operator">=</span>x<span class="token operator">>></span>i<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">!</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span> p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">!</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> p<span class="token operator">=</span>tr<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> x<span class="token operator">^</span>cnt<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> mx<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		mx<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>mx<span class="token punctuation">,</span><span class="token function">query</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>mx<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


