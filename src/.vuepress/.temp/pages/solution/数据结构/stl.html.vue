<template><div><h2 id="特殊堆栈" tabindex="-1"><a class="header-anchor" href="#特殊堆栈" aria-hidden="true">#</a> 特殊堆栈</h2>
<p>原题链接：<br>
<a href="https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805053695574016" target="_blank" rel="noopener noreferrer">https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805053695574016<ExternalLinkIcon/></a><br>
题意：<br>
对于一个栈有n个操作，三个类型：<br>
1.Push x：将x加入栈中<br>
2.Pop：将栈顶元素输出并删除，如果栈中元素为0，那么就不合法输出Invalid<br>
3.PeekMedian：返回栈中所有数的中间值，设栈中元素为x，当x为偶数的时候输出第x/2大的数，如果x为奇数的时候输出(x+1)/2大的数。如果栈中元素为0，那么不合法，输出Invalid<br>
思路：<br>
一个栈st来模拟对栈的操作<br>
一个multiset a来找中间值<br>
一个multiset的指针mi来指向中间值<br>
l记录mi左边的元素数量，r记录mi右边的元素数量</p>
<p>对于插入x的操作，如果我们插入之前栈为空，那么我们插入的数就是唯一一个值，也就是中间值。那么我们将x插入st和multiset之后，mi指向x的地址，l设为0，r设为0；如果元素不为空，那么我们就比一下这个值和mi所指向的数的大小，看x插在mi前还是mi后，如果x&lt;*mi，那么l++，否则就r++。</p>
<p>对于pop操作，我们先找到栈顶元素x，将他删掉，再寻找他在a中最先出现的的地址it。如果x&lt;*mi,那么l--；如果x&gt; *mi，那么r--；当x== *mi的时候，如果it==mi：如果mi的左边有数就向左移，否则向右移，之后删除it；如果it！=mi，那么it一定在mi左边，那么直接删除it，l--就可以了。</p>
<p>对于输出中值，因为找中间位置，当l&gt;r的时候mi向右移<br>
当l&lt; r的时候往左移<br>
最后mi指向的数就是中值。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stack></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> st<span class="token punctuation">;</span>
multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> l<span class="token punctuation">,</span>r<span class="token punctuation">;</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token double-colon punctuation">::</span>iterator mi<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s<span class="token punctuation">;</span>
		<span class="token keyword">int</span> x<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token string">"Push"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				a<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				mi<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				l<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token operator">*</span>mi<span class="token punctuation">)</span> l<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">else</span> r<span class="token operator">++</span><span class="token punctuation">;</span>
				st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				a<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token string">"Pop"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"Invalid"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token keyword">int</span> x<span class="token operator">=</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
				cout<span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token double-colon punctuation">::</span>iterator it<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token operator">*</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
					a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
					l<span class="token operator">--</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">></span><span class="token operator">*</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
					a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
					r<span class="token operator">--</span><span class="token punctuation">;</span> 
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>it<span class="token operator">==</span>mi<span class="token punctuation">)</span><span class="token punctuation">{</span>
						<span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
							l<span class="token operator">--</span><span class="token punctuation">;</span>
							mi<span class="token operator">--</span><span class="token punctuation">;</span>
							a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> 
						<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
							r<span class="token operator">--</span><span class="token punctuation">;</span>
							mi<span class="token operator">++</span><span class="token punctuation">;</span>
							a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> 
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
						a<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
						l<span class="token operator">--</span><span class="token punctuation">;</span> 
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				cout<span class="token operator">&lt;&lt;</span><span class="token string">"Invalid"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
				l<span class="token operator">++</span><span class="token punctuation">;</span>
				r<span class="token operator">--</span><span class="token punctuation">;</span>
				mi<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">></span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
				l<span class="token operator">--</span><span class="token punctuation">;</span>
				r<span class="token operator">++</span><span class="token punctuation">;</span>
				mi<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>mi<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdu-5929-basic-data-structure" tabindex="-1"><a class="header-anchor" href="#hdu-5929-basic-data-structure" aria-hidden="true">#</a> HDU-5929 Basic Data Structure</h2>
<p>原题链接：<br>
<a href="https://acm.hdu.edu.cn/showproblem.php?pid=5929" target="_blank" rel="noopener noreferrer">https://acm.hdu.edu.cn/showproblem.php?pid=5929<ExternalLinkIcon/></a></p>
<p>题意：</p>
<p>有一个栈，每次有四种操作：<br>
1、PUSH X向栈顶加一个数x（x只能是0或1）<br>
2、POP 删除栈顶元素<br>
3、REVERSE 将整个栈翻转<br>
4、NAND 从栈顶到栈底的顺序进行&amp;计算整个栈中元素最后的值，如果栈为空就输出&quot;Invalid.&quot;,按照以下规则计算：<br>
0&amp;0=1<br>
0&amp;1=1<br>
1&amp;0=1<br>
1&amp;1=0</p>
<p>思路：</p>
<p>只有1和1的结果是0，0和任意数结果都是1，那么我们可以从栈底到上看，碰到的第一个0，如果0的上面有数的话，他们的结果是1，如果没有数的话，那么结果是0</p>
<p>那么对于都是1的结果来说，如果有奇数个1结果就是1，偶数个1结果就是0</p>
<p>那么我们用一个数组a来模拟整个栈，lr记录当前的栈底和栈顶，双端队列q来记录0的下标，f记录数组是正序还是倒序</p>
<p>push操作：<br>
是正序的时候，r++，a[r]=x，x如果是0的话，就在q的后面加上r<br>
是倒序的时候，l--，a[l]=x，x如果是0的话，就在q的前面加上l</p>
<p>pop操作：<br>
是正序的时候，先判断r处是不是0，如果是0的话就将q最后的数删掉，r--<br>
是倒序的时候，先判断l处是不是0，如果是0的话就将q最前面的数删掉，l++</p>
<p>reverse操作：<br>
修改f</p>
<p>nand操作：<br>
特判一下栈为空<br>
如果是正序，我们要算从栈顶到栈底的顺序，就是从r到l的顺序。算的时候看从栈底到栈顶的第一个出现的0，即l到r中先出现的0：如果没有0，直接判断栈中有几个1，如果是奇数个就输出1，偶数个就输出0；如果有0，且0前面没有数，即	q的第一个元素是r，那么0和前面的结果就是0，总的结果就是直接看1的个数-1的奇偶，即r-l的奇偶；否则的话就是1的个数+1个数的奇偶，即算q.front-l+1的奇偶</p>
<p>倒序的话就是看栈底到栈顶的顺序，就是从l到r的顺序，算的时候看从栈顶到栈底的第一个出现的0，即r到l第一个出现的0：如果没有0就看1个数的奇偶，如果有0：如果0前面没有数，即q.back==l，那么就是1的个数-1个数的奇偶；如果有数，就是1的个数+1的奇偶，即r-q.back+1的奇偶</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;deque></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">2e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> l<span class="token punctuation">,</span>r<span class="token punctuation">,</span>si<span class="token punctuation">;</span>
deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">push0</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	r<span class="token operator">++</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">push1</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	l<span class="token operator">--</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		q<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">get0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> op<span class="token operator">=</span>r<span class="token operator">-</span>l<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> op<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> op<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
		op<span class="token operator">=</span>r<span class="token operator">-</span>l<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		op<span class="token operator">=</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>l<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> op<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">get1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> op<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		op<span class="token operator">=</span>r<span class="token operator">-</span>l<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
			op<span class="token operator">=</span>r<span class="token operator">-</span>l<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			op<span class="token operator">=</span>r<span class="token operator">-</span>q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> op<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> ca<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>ca<span class="token operator">&lt;=</span>t<span class="token punctuation">;</span>ca<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token string">"Case #"</span><span class="token operator">&lt;&lt;</span>ca<span class="token operator">&lt;&lt;</span><span class="token string">":"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token comment">//		printf("%d:\n",ca);</span>
		cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
		q<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		l<span class="token operator">=</span>N<span class="token punctuation">,</span>r<span class="token operator">=</span>N<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		si<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> f<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			string op<span class="token punctuation">;</span>
			cin<span class="token operator">>></span>op<span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"PUSH"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				si<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">int</span> x<span class="token punctuation">;</span>
				cin<span class="token operator">>></span>x<span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">push0</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					<span class="token function">push1</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"POP"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>si<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">continue</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				si<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						q<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					r<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						q<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					l<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op<span class="token operator">==</span><span class="token string">"REVERSE"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				f<span class="token operator">=</span><span class="token number">1</span><span class="token operator">-</span>f<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>si<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span><span class="token string">"Invalid."</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token comment">//					printf("\n");</span>
					<span class="token keyword">continue</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span><span class="token function">get0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token comment">//					printf("%d\n",);</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					cout<span class="token operator">&lt;&lt;</span><span class="token function">get1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token comment">//					printf("%d\n",get1());</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdu-6695-welcome-party" tabindex="-1"><a class="header-anchor" href="#hdu-6695-welcome-party" aria-hidden="true">#</a> HDU 6695 Welcome Party</h2>
<p>原题链接：<br>
<a href="https://acm.hdu.edu.cn/showproblem.php?pid=6695" target="_blank" rel="noopener noreferrer">https://acm.hdu.edu.cn/showproblem.php?pid=6695<ExternalLinkIcon/></a></p>
<p>题意：<br>
有n个人，每个人有一个x属性有一个y属性，每个人选择其中的一个属性，并且每个人都需要选。求所有方案中两种属性的最大值的差的最小值是多少</p>
<p>思路：<br>
a数组记录x属性和y属性</p>
<p>先将a数组按照x属性从大到小排序</p>
<p>然后遍历整个数组，每次将a[i].x当做所挑的x中最大的值</p>
<p>那么[1,i-1]之间的数就不能选x，就必须选y，[i+1,n]之间的数可以选x也可以选y，那么我们就找到与mx相差最小的y选择就可以了</p>
<p>假设[1,i-1]中的数最大值是my，如果my大于等于a[i].x，那么选择比my小的y最大值还是my，选择比my大的数a[i].x和my的差值会越来越大，所以当my比a[i].x大的时候最小值就是my-a[i].x</p>
<p>当my比a[i].x小的时候，我们就需要在[i+1,n]之间选择最接近a[i].x的y值，即找一个比a[i].x大的最小值，找一个比a[i].x小的最大值，取他们之间差值最小的就可以了</p>
<p>具体处理的话，用一个multiset类型的ly和ry分别来存a[i]前面的y值和a[i]后面的y值，初始的时候将所有y值都加入到ry中去，然后开始遍历a数组</p>
<p>当遍历到a[i]的时候，先将ry中的a[i].y删去，再进行上面的找差值的操作，找完差值之后再将a[i].y加入到ly中去，利用multiset就可以线性的找到差值</p>
<p>注意细节的处理，比如当在第一个的时候，ly中没有数，那么我们就直接在ry中找，最后一个的时候ry中没有数，并且唯一值就是ly的最大值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;set></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ra</span> <span class="token expression">multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token double-colon punctuation">::</span>iterator</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">2e5</span><span class="token operator">+</span><span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">name</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> <span class="token function">cmp</span><span class="token punctuation">(</span>name a<span class="token punctuation">,</span>name b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>x <span class="token operator">></span>b<span class="token punctuation">.</span>x <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>n<span class="token punctuation">,</span>cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> mi<span class="token operator">=</span><span class="token number">2e18</span><span class="token punctuation">;</span>
	multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> ly<span class="token punctuation">,</span>ry<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		ry<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		  ry<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>ry<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		  <span class="token keyword">int</span> mx<span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token punctuation">;</span>
		  <span class="token keyword">if</span><span class="token punctuation">(</span>ly<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		  	ra id<span class="token operator">=</span>ry<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>mx<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		  	<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>ry<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		  		mi<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mi<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id<span class="token operator">-</span>mx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">!=</span>ry<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
				id<span class="token operator">--</span><span class="token punctuation">;</span>
				mi<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mi<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id<span class="token operator">-</span>mx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		  	ra id<span class="token operator">=</span>ly<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
		  	id<span class="token operator">--</span><span class="token punctuation">;</span>
		  	mi<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mi<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id<span class="token operator">-</span>mx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>id<span class="token operator">&lt;</span>mx<span class="token operator">&amp;&amp;</span>ry<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		  		ra id1<span class="token operator">=</span>ry<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>mx<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		  		<span class="token keyword">if</span><span class="token punctuation">(</span>id1<span class="token operator">!=</span>ry<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		  			mi<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mi<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id1<span class="token operator">-</span>mx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				  <span class="token punctuation">}</span>
		  		<span class="token keyword">if</span><span class="token punctuation">(</span>id1<span class="token operator">!=</span>ry<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		  			id1<span class="token operator">--</span><span class="token punctuation">;</span>
		  			mi<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>mi<span class="token punctuation">,</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">*</span>id1<span class="token operator">-</span>mx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				  <span class="token punctuation">}</span>
			  <span class="token punctuation">}</span>
		  <span class="token punctuation">}</span>
		  ly<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>mi<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="倍数问题" tabindex="-1"><a class="header-anchor" href="#倍数问题" aria-hidden="true">#</a> 倍数问题</h2>
<p>原题链接：<br>
<a href="https://www.lanqiao.cn/problems/168/learning/?page=1" target="_blank" rel="noopener noreferrer">https://www.lanqiao.cn/problems/168/learning/?page=1<ExternalLinkIcon/></a></p>
<p>题意：</p>
<p>有n个数，从中取三个满足和是m的倍数的和的最大值</p>
<p>思路：<br>
(a+b+c)%m=a%m+b%m+c%m<br>
所以我们可以将余数相同的归为一类，枚举a和b的余数i和j，算出c的余数k，然后取ijk这三类中最大的数。由于ijk可能相等导致我们取到同一个数，那么我们可以用栈来存每一类，当找到某一类的时候就将他的最大值出栈，然后再继续往下找。找完之后再将他的最大值放回去即可。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stack></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">1005</span><span class="token punctuation">;</span>
stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">100005</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cin<span class="token operator">>></span>n<span class="token operator">>></span>m<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        st<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span>m<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> k<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>m<span class="token operator">-</span>i<span class="token operator">-</span>j<span class="token punctuation">)</span><span class="token operator">%</span>m<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">,</span>num3<span class="token punctuation">,</span>con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
                num1<span class="token operator">=</span>st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                con<span class="token operator">+=</span>num1<span class="token punctuation">;</span>
                st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
                    num2<span class="token operator">=</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                    con<span class="token operator">+=</span>num2<span class="token punctuation">;</span>
                    st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
                        num3<span class="token operator">=</span>st<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                        con<span class="token operator">+=</span>num3<span class="token punctuation">;</span>
                        st<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
                        ans<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        st<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                    <span class="token punctuation">}</span>
                    st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                <span class="token punctuation">}</span>
                st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span>ans<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


