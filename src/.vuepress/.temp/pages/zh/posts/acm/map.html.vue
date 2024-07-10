<template><div><h2 id="帅到没朋友" tabindex="-1"><a class="header-anchor" href="#帅到没朋友" aria-hidden="true">#</a> 帅到没朋友</h2>
<p>当芸芸众生忙着在朋友圈中发照片的时候，总有一些人因为太帅而没有朋友。本题就要求你找出那些帅到没有朋友的人。</p>
<h3 id="输入格式：">输入格式：</h3>
<p>输入第一行给出一个正整数<code>N</code>（≤100），是已知朋友圈的个数；随后<code>N</code>行，每行首先给出一个正整数<code>K</code>（≤1000），为朋友圈中的人数，然后列出一个朋友圈内的所有人——为方便起见，每人对应一个ID号，为5位数字（从00000到99999），ID间以空格分隔；之后给出一个正整数<code>M</code>（≤10000），为待查询的人数；随后一行中列出<code>M</code>个待查询的ID，以空格分隔。</p>
<p>注意：没有朋友的人可以是根本没安装“朋友圈”，也可以是只有自己一个人在朋友圈的人。虽然有个别自恋狂会自己把自己反复加进朋友圈，但题目保证所有<code>K</code>超过1的朋友圈里都至少有2个不同的人。</p>
<h3 id="输出格式：">输出格式：</h3>
<p>按输入的顺序输出那些帅到没朋友的人。ID间用1个空格分隔，行的首尾不得有多余空格。如果没有人太帅，则输出<code>No one is handsome</code>。</p>
<p>注意：同一个人可以被查询多次，但只输出一次。</p>
<h3 id="输入样例1：">输入样例1：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token number">3</span>
<span class="token number">3</span> <span class="token number">11111</span> <span class="token number">22222</span> <span class="token number">55555</span>
<span class="token number">2</span> <span class="token number">33333</span> <span class="token number">44444</span>
<span class="token number">4</span> <span class="token number">55555</span> <span class="token number">66666</span> <span class="token number">99999</span> <span class="token number">77777</span>
<span class="token number">8</span>
<span class="token number">55555</span> <span class="token number">44444</span> <span class="token number">10000</span> <span class="token number">88888</span> <span class="token number">22222</span> <span class="token number">11111</span> <span class="token number">23333</span> <span class="token number">88888</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例1：">输出样例1：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token number">10000</span> <span class="token number">88888</span> <span class="token number">23333</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例2：">输入样例2：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token number">3</span>
<span class="token number">3</span> <span class="token number">11111</span> <span class="token number">22222</span> <span class="token number">55555</span>
<span class="token number">2</span> <span class="token number">33333</span> <span class="token number">44444</span>
<span class="token number">4</span> <span class="token number">55555</span> <span class="token number">66666</span> <span class="token number">99999</span> <span class="token number">77777</span>
<span class="token number">4</span>
<span class="token number">55555</span> <span class="token number">44444</span> <span class="token number">22222</span> <span class="token number">11111</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例2：">输出样例2：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>No one is handsome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>思路：用map&lt;string,int&gt;来存一个字符串的个数，用一个类型是string的vector数组来记录哪些没出现过的字符， 在加入的时候还要判断他是否已经加入过这个数组，所以再开一个map&lt;string,int&gt;的int来表示他加入过没有，最初没加过都是0，判断的时候如果他是0就加入数组，然后把他的int改成1，如果他是1表示已经加过了就不再加入数组。注意：当k=1的时候说明朋友圈只有一个人，不能算出现过的字符。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;map></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> mp<span class="token punctuation">,</span>mp1<span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span>string<span class="token operator">></span> a<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> k<span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			string s<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>k<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			string s2<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>s2<span class="token punctuation">;</span>
			mp<span class="token punctuation">[</span>s2<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s3<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>s3<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>mp<span class="token punctuation">[</span>s3<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>mp1<span class="token punctuation">[</span>s3<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			a<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span>
			mp1<span class="token punctuation">[</span>s3<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> r<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>r<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"No one is handsome"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>r<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>r<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</div></template>


