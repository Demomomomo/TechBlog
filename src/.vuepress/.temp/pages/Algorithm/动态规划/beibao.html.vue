<template><div><h2 id="_01背包" tabindex="-1"><a class="header-anchor" href="#_01背包" aria-hidden="true">#</a> 01背包</h2>
<p>容量为v的背包里，有n件物品，每件物品的体积为vi，价值为wi，求不超过背包体积的情况下能获得的物品的最大价值<br>
有序变无序：从1~i依次遍历，那么处理到i的是吧前i-1个已经被处理过了，可以直接拿着算<br>
f[i][j]表示在前i个物品中选，总体积不超过j的方案的能获得的最大价值<br>
对于每个物品i，可以选和不选<br>
不选：在前i-1个物品中选，体积不超过j的方案的最大价值<br>
选：在前i-1个物品中选，体积不超过j-vi的方案的最大价值+wi<br>
f[i][j]=max(f[i-1][j],f[i-1][j-vi]+wi);<br>
可以优化成一维的数组：f[j]表示体积不超过j的方案的最大价值<br>
因为每一次更新只和上一层有关<br>
如果我们按顺序遍历的话，那么我们到j更新的时候所找到的j-vi已经在第i层更新过了，也就是说i已经被拿了，如果我们再按照这个更新的话会再拿一次i<br>
那么我们i从第一个物品开始遍历，每次j从大到小更新:f[j]=max(f[j],f[j-vi]+wi)<br>
这样的话当我们更新到j的时候，所用到的j-vi实际上是没有更新过的上一层i-1的最大价值，这样就避免了重复取值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>m<span class="token punctuation">;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完全背包" tabindex="-1"><a class="header-anchor" href="#完全背包" aria-hidden="true">#</a> 完全背包</h2>
<p>有一个价值为v的背包，n种物品，每种物品的数量都是无穷的，第i种物品的价值是wi，体积是vi，求不超过背包体积能获得的最大价值
因为每种物品的数量是无限的，所以我们如果正序遍历j的话，到第j-vi的时候虽然是第i层，但是我们是可以多拿几个i取最大的，符合要求（与01的区别就是j反向遍历）</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要求背包装满的话，那我们设的状态是：f[i][j]表示在前i个物品里恰好选择了体积为j的物品获得的最大价值，那么我们初始化的时候f[0][0]表示在前0个物品选体积恰好为0的最大价值，那么是0，但是f[0][i]表示在前0个物品中选体积恰好为i的最大价值，无解，所以1~n的f[0][i]的值是负无穷，然后我们再正常按01和完全背包做，当最后f[m]是负无穷的话说明没有能正好装满的方案，如果不是那就是最大价值<br>
memset(f,-0x3f,sizeof f);<br>
f[0][0]=0;</p>
<h2 id="多重背包" tabindex="-1"><a class="header-anchor" href="#多重背包" aria-hidden="true">#</a> 多重背包</h2>
<p>有一个体积为v的背包，n种物品，每个物品的体积是vi，价值是wi，个数是si，求拿的物品的体积不超过背包体积时的最大价值<br>
用二进制优化<br>
对于一种背包，我们可以拿0<sub>si个，我们把他分成1,2,4...这种二进制个捆在一起作为一组，那么我们可以用这几组凑出0</sub>si中所有的数，然后对这几组进行01背包问题的拿取就可以了</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
	<span class="token keyword">int</span> cnt<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>s<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>a<span class="token operator">>></span>b<span class="token operator">>></span>s<span class="token punctuation">;</span>
		<span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>k<span class="token operator">&lt;=</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
			cnt<span class="token operator">++</span><span class="token punctuation">;</span>
			v<span class="token punctuation">[</span>cnt<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token operator">*</span>k<span class="token punctuation">;</span>
			w<span class="token punctuation">[</span>cnt<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token operator">*</span>k<span class="token punctuation">;</span>
			s<span class="token operator">-=</span>k<span class="token punctuation">;</span>
			k<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cnt<span class="token operator">++</span><span class="token punctuation">;</span>
			v<span class="token punctuation">[</span>cnt<span class="token punctuation">]</span><span class="token operator">=</span>s<span class="token operator">*</span>a<span class="token punctuation">;</span>
			w<span class="token punctuation">[</span>cnt<span class="token punctuation">]</span><span class="token operator">=</span>s<span class="token operator">*</span>b<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>cnt<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>m<span class="token punctuation">;</span>j<span class="token operator">>=</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>f<span class="token punctuation">[</span>j<span class="token operator">-</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>f<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


