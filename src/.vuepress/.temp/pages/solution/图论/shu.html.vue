<template><div><h2 id="清楚姐姐学树状数组" tabindex="-1"><a class="header-anchor" href="#清楚姐姐学树状数组" aria-hidden="true">#</a> 清楚姐姐学树状数组</h2>
<p>原题链接：<a href="https://ac.nowcoder.com/acm/contest/46812/F" target="_blank" rel="noopener noreferrer">https://ac.nowcoder.com/acm/contest/46812/F<ExternalLinkIcon/></a></p>
<p>题意：将树状数组的第i个元素对应二叉树上编号为i的结点构造出一个二叉树。<br>
有一个尺寸大小为N= <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span> 的树状数组，按照下面规则构成一个二叉树：<br>
1.编号为i的结点深度为 $\log_{2}{（lowbit（N））} -\log_{2}{（lowbit（i））} $ .<br>
2.整棵树的中序遍历结点顺序是1,2,3,4...N</p>
<p>做出的二叉树如图：<br>
<img src="https://img-blog.csdnimg.cn/589b45772cce45b4a7a83e0758f94506.png#pic_center" alt="Pulpit rock" width="304" height="228"></p>
<p>如图所示，我们以左上角为坐标原点，向下为x轴正方向，向右为y轴正方向建立直角坐标系。</p>
<p>现在想知道对于这个二叉树上编号为x的结点，分别在前序中序后序的遍历中是第几个被遍历到的点。</p>
<p>思路：我们可以发现，对于每个左子树x，他的父节点都是x+lowbit（x），左子树的编号是二进制表示形如XXX010...的数。因为我们加一个lowbit（x）之后，这个数就变成了XXX100...，因为定义他们的深度是 $\log_{2}{（lowbit（N））} -\log_{2}{（lowbit（i））} $ ，所以+lowbit（x）之后的数深度-1。并且中序遍历是1~n，那么在lowbit（x）+x和x之间，即XX100和XX010之间，没有满足一个数和XX010相差深度为1，那么就说明lowbit（x）+x是x的父节点。<br>
对于每个右子树i我们可以发现，他的父节点是x-lowbit(x)。右子树的编号为形如XX110...的二进制数，那么我们减去lowbit（x）之后就变成了XX100...，深度-1，符合中序遍历，那么在XX100~XX110之间找不到任何一个数满足深度和XX110差1的条件，所以成立。</p>
<p>那么我们要还原这个树的时候就要判断是左孩子还是右孩子，那么就判断最低一位1的前一位是不是0，以及求父节点的代码，即：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>x<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">is</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token operator">+</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">return</span> x<span class="token operator">-</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左子树010进位之后是父节点100，所以我们可以反推一个点的左子树。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">lch</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">-</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">>></span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>右子树110去掉末尾之后是父节点100，可以反推一个点的右子树。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">rch</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">+</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">>></span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以根据这个关系把二叉树建出来，但是因为n太大建不出来，也不用去建，只需要在dfs的时候计算子树尺寸加起来就行。</p>
<p>因为大小是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span> 的树状数组除了根节点之外其他子树都是全满的，所以可以直接算出以每个节点为根的子树的大小。</p>
<p>假如这个数编号是i，那么以他为根的子树的大小就是(lowbit（i）&lt;&lt;1)-1，因为他的左子树是前缀的一部分，是长度为lowbit(i)的一个区间:[i-lowbit(i)+1,i],右子树和左子树实际上是对称分布的。那么dfs的时候直接跳过整颗的子树部分直接计算就行。</p>
<p>//注意k的类型是int，如果设为long long的话转成n会超时。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span>
<span class="token keyword">int</span> m<span class="token punctuation">,</span>k<span class="token punctuation">;</span>
ll n<span class="token punctuation">;</span>
ll <span class="token function">lowbit</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x<span class="token operator">&amp;</span><span class="token operator">-</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ll <span class="token function">lch</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">^</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ll <span class="token function">rch</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ll <span class="token function">size</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> <span class="token function">islch</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>x <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//判断他的最低位1的前一位是不是0</span>
<span class="token punctuation">}</span>
ll <span class="token function">fa</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">islch</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">+</span>x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> x<span class="token operator">-</span><span class="token function">lowbit</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ll <span class="token function">qianxu</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	ll root<span class="token operator">=</span>n<span class="token punctuation">;</span>
	ll con<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>root<span class="token operator">!=</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
		con<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
			root<span class="token operator">=</span><span class="token function">lch</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			con<span class="token operator">+=</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">lch</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			root<span class="token operator">=</span><span class="token function">rch</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> con<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ll <span class="token function">houxu</span><span class="token punctuation">(</span>ll x<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//因为后序遍历是左右根，所以先遍历左子树再遍历右子树，最后才是自己</span>
	<span class="token comment">//那么对于一个点来说，他的左右子树肯定被遍历过了。</span>
	<span class="token comment">//如果他是他父亲的右结点，那么他父亲的左子树肯定被遍历过了，再加上左子树的点数。</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">==</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	ll root<span class="token operator">=</span>x<span class="token punctuation">;</span>
	ll con<span class="token operator">=</span><span class="token function">size</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>root<span class="token operator">!=</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token function">rch</span><span class="token punctuation">(</span><span class="token function">fa</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			con<span class="token operator">+=</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">lch</span><span class="token punctuation">(</span><span class="token function">fa</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		root<span class="token operator">=</span><span class="token function">fa</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> con<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>k<span class="token operator">>></span>m<span class="token punctuation">;</span>
	n<span class="token operator">=</span><span class="token number">1ll</span><span class="token operator">&lt;&lt;</span>k<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ll x<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token function">qianxu</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token operator">&lt;&lt;</span><span class="token function">houxu</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


