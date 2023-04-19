import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as s,e as n,f as e,d as c,r as l}from"./app.e147a21b.js";const i={},u={href:"https://atcoder.jp/contests/arc153/tasks/arc153_b",target:"_blank",rel:"noopener noreferrer"},r=s("br",null,null,-1),k=s("br",null,null,-1),d=s("br",null,null,-1),m=s("br",null,null,-1),b=s("br",null,null,-1),v=s("br",null,null,-1),y=s("br",null,null,-1),_=s("br",null,null,-1),x=s("br",null,null,-1),w=s("br",null,null,-1),h=s("br",null,null,-1),f=s("br",null,null,-1),g=s("br",null,null,-1),N=s("br",null,null,-1),j=s("br",null,null,-1),q=s("br",null,null,-1),V=s("br",null,null,-1),B=c(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N<span class="token operator">=</span><span class="token number">5e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span>m<span class="token punctuation">,</span>q<span class="token punctuation">;</span>
string s<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> xx1<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> xx2<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> yy1<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> yy2<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cin<span class="token operator">&gt;&gt;</span>n<span class="token operator">&gt;&gt;</span>m<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>cin<span class="token operator">&gt;&gt;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	cin<span class="token operator">&gt;&gt;</span>q<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> xx1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">,</span>xx2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//横坐标的原序列，横坐标的逆序列</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> yy1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">,</span>yy2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>m<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//纵坐标的原序列，纵坐标的逆序列</span>
	<span class="token keyword">int</span> xx<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>yy<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//最开始时第一个字母的坐标  </span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>q<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>         
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
		cin<span class="token operator">&gt;&gt;</span>a<span class="token operator">&gt;&gt;</span>b<span class="token punctuation">;</span>
		<span class="token keyword">int</span> x<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>xx<span class="token operator">&lt;=</span>a<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>x<span class="token operator">=</span>a<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>xx<span class="token punctuation">;</span><span class="token comment">//如果在a-1之间，说明是按0~a的区间-1之间翻转</span>
		<span class="token keyword">else</span> x<span class="token operator">=</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>xx<span class="token punctuation">)</span><span class="token operator">+</span>a<span class="token punctuation">;</span><span class="token comment">//如果在a~n-1之间，按a~n-1的区间翻转</span>
		<span class="token keyword">int</span> y<span class="token punctuation">;</span><span class="token comment">//y同理</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>yy<span class="token operator">&lt;=</span>b<span class="token punctuation">)</span>y<span class="token operator">=</span>b<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>yy<span class="token punctuation">;</span>
		<span class="token keyword">else</span> y<span class="token operator">=</span><span class="token punctuation">(</span>m<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>yy<span class="token punctuation">)</span><span class="token operator">+</span>b<span class="token punctuation">;</span>
		<span class="token keyword">int</span> op1<span class="token punctuation">,</span>op2<span class="token punctuation">;</span>
		<span class="token keyword">int</span> f<span class="token punctuation">;</span>
		xx<span class="token operator">=</span>x<span class="token punctuation">;</span><span class="token comment">//每次算出变化后的坐标之后xx，yy也及时更新</span>
		yy<span class="token operator">=</span>y<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//如果是偶数次操作说明是对原序列</span>
			f<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//标记是在xx1，yy1的序列进行偏移</span>
			op1<span class="token operator">=</span>x<span class="token punctuation">;</span><span class="token comment">//偏移量=后来的坐标-在原序列的坐标，在原序列坐标为0</span>
			op2<span class="token operator">=</span>y<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			f<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
			op1<span class="token operator">=</span>x<span class="token operator">-</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//原序列逆序列中坐标为n-1</span>
			op2<span class="token operator">=</span>y<span class="token operator">-</span>m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//坐标为m-1</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//最后输出</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//当f=1时说明是在xx1，yy1中偏移，因为偏移量=变化后的坐标-在原序列中的坐标，那么对于i来说在原序列中的坐标=（i-op+n)%n，j同理</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>s<span class="token punctuation">[</span>xx1<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">-</span>op1<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy1<span class="token punctuation">[</span><span class="token punctuation">(</span>j<span class="token operator">-</span>op2<span class="token operator">+</span>m<span class="token punctuation">)</span><span class="token operator">%</span>m<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
					<span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span>s<span class="token punctuation">[</span>xx2<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">-</span>op1<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>yy2<span class="token punctuation">[</span><span class="token punctuation">(</span>j<span class="token operator">-</span>op2<span class="token operator">+</span>m<span class="token punctuation">)</span><span class="token operator">%</span>m<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>	
<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(I,L){const a=l("ExternalLinkIcon");return p(),o("div",null,[s("p",null,[n("原题链接："),s("a",u,[n("https://atcoder.jp/contests/arc153/tasks/arc153_b"),e(a)]),n(" 题意：有n*m的矩阵，每个方格里有一个小写英文字母，有q个操作，每次询问给你两个值ai，bi，让你执行如下操作："),r,n(" 在以（1,1）为左上角，（ai，bi）为右下角的矩形内将字母整体旋转180度"),k,n(" 在以（1,bi+1）为左上角，（ai，m）为右下角的矩形内将字母整体旋转180度"),d,n(" 在以（ai+1,1）为左上角，（n，bi）为右下角的矩形内将字母整体旋转180度"),m,n(" 在以（ai+1,bi+1）为左上角，（n，m）为右下角的矩形内将字母整体旋转180度"),b,n(" 让你输出最后的矩阵"),v,n(" 思路："),y,n(" 我们可以把行和列单独看，对每行来说每次操作实际上就是对行以b,b+1之间为分界线，对前半部分和后半部分分别进行逆转："),_,n(" 比如序列："),x,n(" 1,2,3,4,5,6"),w,n(" 那么我们以2,3之间为分界线，把前半部分和后半部分分别逆转得到："),h,n(" 2,1,6,5,4,3"),f,n(" 可以发现，他是序列6,5,4,3,2,1向左平移4步得到的，因为相对顺序是一定的，那么我们就可以通过找翻转之后1的位置算出偏移量之后，那么翻转之后的数组就是原来数组上的数+偏移量"),g,n(" 那么我们再把这个序列按照5,4之间的分界线逆转，那么就变成了："),N,n(" 5,6,1,2,3,4"),j,n(" 可以发现，是序列1,2,3,4,5,6向右偏移2步得到的，那么同理根据偏移量也能算出来"),q,n(" 而且还有一个规律：翻转奇数次是原序列逆序的偏移量，偶数次是原序列的偏移量"),V,n(" 那么我们每次就可以分别算出左上角的（1,1）分别在什么位置，算出偏移量之后每个数的位置也就可以算出i’=（i+偏移量）%n")]),B])}const T=t(i,[["render",E],["__file","abc.html.vue"]]);export{T as default};
