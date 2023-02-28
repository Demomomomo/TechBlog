<template><div><p>基本状态：f[i]表示所有以i结尾的最长上升子序列的长度。<br>
时间复杂度：n*n<br>
状态转移：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么如果n比较大，就不能用基础解法，这个时候我们就要用到了贪心的解法。</p>
<h2 id="变形" tabindex="-1"><a class="header-anchor" href="#变形" aria-hidden="true">#</a> 变形</h2>
<p>例题：友好城市<br>
原题链接：<a href="https://www.acwing.com/problem/content/1014/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/1014/<ExternalLinkIcon/></a><br>
题意：<br>
南北两岸各有n个城市，每个城市都有唯一一个与之相连的城市的道路。有n个关系，分别表示南岸位置在x的城市和北岸位置在y城市之间有条道路，求最多的不交叉的道路。</p>
<p>思路：<br>
将南岸的城市按位置从小到大排序，再将北岸的城市附上这个次序，如图：<br>
绿色的是北岸的城市按南岸位置排序得出的序号，红色是我们选出的一个合法的方案<br>
<img src="https://img-blog.csdnimg.cn/be215301c6254d299fa3c99fef118985.jpeg#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>那么我们可以发现，合法的方案就是北岸的城市位置从左到右序号的最长上升子序列</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5005</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">name</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>q<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">cmp1</span><span class="token punctuation">(</span>name a<span class="token punctuation">,</span>name b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>x <span class="token operator">&lt;</span>b<span class="token punctuation">.</span>x <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> <span class="token function">cmp2</span><span class="token punctuation">(</span>name a<span class="token punctuation">,</span>name b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>y <span class="token operator">&lt;</span>b<span class="token punctuation">.</span>y <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token operator">>></span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>q<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span>q<span class="token operator">+</span>n<span class="token punctuation">,</span>cmp1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">=</span>i<span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>q<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>q<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>n<span class="token punctuation">,</span>cmp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&lt;</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token punctuation">)</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ans<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>ans<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">//cin>>t;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导弹拦截系统" tabindex="-1"><a class="header-anchor" href="#导弹拦截系统" aria-hidden="true">#</a> 导弹拦截系统</h2>
<p>一个数组最少用多少个非上升的子序列覆盖这个数组中所有数的个数，等于这个数组的最长上升子序列。<br>
原题链接：<a href="https://www.acwing.com/problem/content/1012/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/1012/<ExternalLinkIcon/></a></p>
<p>题意：<br>
一个导弹拦截系统可以发射许多个拦截导弹，第一个拦截导弹可以发射任意高度，但是以后发射的每一个拦截导弹都不能高于前一个拦截导弹发射的高度，问一个导弹最多能拦截多少导弹，要拦截n个导弹最少需要多少个导弹拦截系统。</p>
<p>思路：<br>
对于每个导弹，我们有两个选择：<br>
1.放进已有的系统里<br>
2.开一个新的系统放进去<br>
那么贪心的来看：<br>
情况1：如果现有的子序列的结尾都小于这个数，那么我们就新建一个序列把他插进去。<br>
情况2：如果现有的子序列中有结尾大于这个数的序列，就把他放到结尾大于这个数的最小的结尾的子序列中。因为较大的结尾也可以容纳比这个数大的数，后面可能有比这个数更大的数，可以放在较大的结尾后面儿不能放在较小的结尾后面。</p>
<p>实现：用一个g数组来存当前所有开好的子序列的结尾的数，按照贪心的思想放好的子序列的结尾组成一个单调的序列，每一次插入一个数的时候在子序列中找大于等于这个数的最小的一个数所在的序列，将这个数替换；如果找不到，就新开一个子序列来存这个数。</p>
<h2 id="最长公共子序列" tabindex="-1"><a class="header-anchor" href="#最长公共子序列" aria-hidden="true">#</a> 最长公共子序列</h2>
<p>原题链接：<a href="https://www.acwing.com/problem/content/899/" target="_blank" rel="noopener noreferrer">https://www.acwing.com/problem/content/899/<ExternalLinkIcon/></a><br>
题意：<br>
给定两个长度分别为N和M的字符串A和B，求既是A的子序列又是B的子序列的字符串长度最长是多少。
思路：<br>
f[i][j]表示A的前1<sub>i个字符和B的1</sub>j个字符中，最长的公共子序列的长度。<br>
以A字符串和B字符串的结尾字符i和j来划分：<br>
公共子序列可以不包含i和j：f[i][j]=f[i-1][j-1]<br>
也可以只包含i：f[i][j]=f[i][j-1]<br>
也可以只包含j：f[i][j]=f[i-1][j]<br>
同时包含ij的话，因为a[i]是a的最后一个元素，b[j]是b的最后一个元素，那么需要满足a[i]==b[j]：if(a[i]==b[j]) f[i][j]=f[i-1][j-1]+1</p>
<p>以上状态取最大值即可。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1500</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	string a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>a<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>b<span class="token punctuation">;</span>
	a<span class="token operator">=</span><span class="token string">" "</span><span class="token operator">+</span>a<span class="token punctuation">;</span>
	b<span class="token operator">=</span><span class="token string">" "</span><span class="token operator">+</span>b<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>b<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


