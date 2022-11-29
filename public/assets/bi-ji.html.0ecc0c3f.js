import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p}from"./app.b5d96126.js";const t={},e=p(`<h2 id="_2779-小a与泉水" tabindex="-1"><a class="header-anchor" href="#_2779-小a与泉水" aria-hidden="true">#</a> 2779: 小A与泉水</h2><p>题目描述</p><p>小A遇到了一座神奇的泉水，在泉水中洗涤会大幅增加他的精力。在一次洗涤中，泉水增加力量的数值为当前力量二进制表示中的最低位的1对应的值。</p><p>例如：</p><p>如果当前力量为9（1001 最低位1对应的值为1），增加的力量为1；</p><p>如果当前力量为12（1100 最低位1对应的值为100），增加的力量为4。</p><p>小A想要将他的力量变为2的幂次数，他需要在泉水中洗涤多少次呢？</p><p>输入</p><p>多样例测试<br> 第一行输入T（T&lt;=100,000），代表样例数；<br> 剩余T行，每行输入一个数n(n&lt;1,000,000,000)代表小A当前的力量。</p><p>输出</p><p>对于每次询问，输出小A需要在泉水中洗涤的次数。</p><p>样例输入 <a>Copy</a></p><pre>4
1
2
3
5</pre><p>样例输出 <a>Copy</a></p><pre>0
0
1
2</pre><p>思路：根据题意模拟，当n不是0的时候进入循环，判断是否为奇数，如果是奇数的话说明最后一位是1判断一下奇数是否是1，如果不是进行一次1的左移操作，n除以2删掉最后一位，当是偶数的时候最后一位是0，直接删掉最右一位0。最后到1的时候多做了一个操作，所以要输出操作数减一</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdio&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;0\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token operator">||</span>n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;0\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				con<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">)</span>n<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			n<span class="token operator">&gt;&gt;=</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>con<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> t<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">sove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="关于字符串函数" tabindex="-1"><a class="header-anchor" href="#关于字符串函数" aria-hidden="true">#</a> 关于字符串函数</h2><p>前置条件：#include&lt;string&gt;</p><p>substr函数：截取字符串</p><p>string q=s.substr(k);</p><p>把从s的下标为k的字符开始一直到结尾</p><p>string sub2 = s.substr( i,k);</p><p>从下标为i开始截取k位</p><p><br> 假设：string s = “0123456789”;</p><p>string sub1 = s.substr(5); //只有一个数字5表示从下标为5开始一直到结尾：sub1 = “56789”</p><p>string sub2 = s.substr(5, 3); //从下标为5开始截取长度为3位：sub2 = “567”</p><p></p><p>string s=to_string(n)</p><p>功能：将数字常量n转换为<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.0.8/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M276" data-link-title="字符串" href="https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&amp;spm=1001.2101.3001.7020" title="字符串">字符串</a>s;</p><p>stoi函数：</p><p>将字符串转化为10进制的数</p><p>stoi（字符串，起始位置（下标），n进制（默认10进制）），将 n 进制的字符串转化为十进制</p><p>stoi(s,0,2) ：将二进制的字符串s转化为十进制；</p><p>int x=stoi(s);把s转化为十进制的x</p><p>memcpy函数：把字符串b复制到字符串a中</p><p>memcpy（a,b,sizeof(a)); //sizeof()必须使用在拷贝到的字符串身上，不然会造成溢出</p><p>isalnum函数：判断是否为字母或数字，是的话返回true。</p><p>头文件：cctype</p><p>tolower函数：把大写字符转化为小写字符，如果不是大写字符就不转化</p><p>头文件是#include &lt;cctype&gt;</p><p>用法：tolower(s[i]);</p><p>insert函数：在字符串里插入字符</p><p>用法：s.insert(i,&#39;k&#39;)，在字符串下标为i的地方加k</p><p>stringstream：在头文件sstream里，是负责输入和输出操作的（参考了吴雨小姐姐的博客）</p><p>用法1：用于数据转化</p><p>         如整型转<a data-link-icon="https://csdnimg.cn/release/blog_editor_html/release2.0.8/ckeditor/plugins/CsdnLink/icons/icon-default.png?t=M276" data-link-title="字符串" href="https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&amp;spm=1001.2101.3001.7020" title="字符串">字符串</a>型</p><p>        先定义个整型，再定义一个stringstream型，然后把整型传入stringstream型的参数里，然后再定义一个字符串型，把stringstream里的传入字符串型里</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> x<span class="token punctuation">;</span>
cin<span class="token operator">&gt;&gt;</span>x<span class="token punctuation">;</span>
stringstream a<span class="token punctuation">;</span>
a<span class="token operator">&lt;&lt;</span>x<span class="token punctuation">;</span>
string s<span class="token punctuation">;</span>
a<span class="token operator">&gt;&gt;</span>s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法2：用于读入多字符串</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>stringstream s<span class="token punctuation">;</span><span class="token comment">//定义一个stringstream变量 </span>
	s<span class="token operator">&lt;&lt;</span><span class="token string">&quot;first string &quot;</span><span class="token operator">&lt;&lt;</span><span class="token string">&quot; &quot;</span><span class="token operator">&lt;&lt;</span><span class="token string">&quot;is: &quot;</span><span class="token punctuation">;</span>
	s<span class="token operator">&lt;&lt;</span><span class="token string">&quot;you &quot;</span><span class="token operator">&lt;&lt;</span><span class="token string">&quot;are a idiot!&quot;</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span>s<span class="token punctuation">.</span><span class="token function">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//输出的答案为first string  is: you are a idiot! </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> 用法3：分隔读入的一行字符串（比如一个字符串里有许多空格，可以通过这个方法去消除空格）</p><p>先把需要转化的字符串读入，然后定义stringstream，把字符串传入这个里面，然后再定义一个字符串，将stringstream里的数循环传入这个字符串并输出。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string s<span class="token punctuation">,</span>t<span class="token punctuation">;</span>
<span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
stringstream q<span class="token punctuation">;</span>
q<span class="token operator">&lt;&lt;</span>s<span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token operator">&gt;&gt;</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span>t<span class="token operator">&lt;&lt;</span><span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>find函数：在头文件string里</p><p>使用方法：如在string1中查找string2，string1.find(string2)；返回值为string2第一次在string1中出现的位置。<br> 若希望在特定位置开始查找，可使用 string1.find(string2，location);<br> 如果找不到，则返回值为string::npos ，即对于string，通过a.find(val)==string::npos来做判断是否查找成功</p><p>还有第二种用法是在algorithm里，find用来查找数组中的数，返回的是第一次出现的地址，如果没找到返回end（）</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector <span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">;</span>
<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token function">find</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">-</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">!=</span>a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;yes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br> 判断是不是大写字母：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> op<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isupper</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;YES&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p> 判断是不是小写字母：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> op<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">islower</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;YES&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p> 变成大写字母：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> op<span class="token punctuation">;</span>
op<span class="token operator">=</span><span class="token function">toupper</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>变成小写字母：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> op<span class="token punctuation">;</span>
op<span class="token operator">=</span><span class="token function">tolower</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>insert函数：</p><p>string s,f;</p><p>s.insert(i,f)</p><p>在下标为i的地方插入一个字符串f</p><p>append函数：</p><p>在字符串的后面加上一个字符串</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string s1<span class="token operator">=</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">;</span>
string s2<span class="token operator">=</span><span class="token string">&quot;34&quot;</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span>s1<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么输出的s1就是1234 </p><p></p><p>pop_back()函数：</p><p>删除字符串的最后一个字符</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string s<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的就是12</p><h2 id="_7-8-单词倒置" tabindex="-1"><a class="header-anchor" href="#_7-8-单词倒置" aria-hidden="true">#</a> 7-8 单词倒置</h2><p>小明终于等来了好朋友的来信，但打开来信就傻眼了，居然看不懂，原来好朋友把信中的每个单词都翻转了顺序，例如“Happy”在朋友的信里变成了“yppaH”。请你编写程序帮助小明还原来信内容吧。</p><h3 id="输入格式">输入格式:</h3><p>输入一个字符串，以回车结束。该字符串长度不超过100，包含多个单词，单词之间有一个或多个空格。</p><h3 id="输出格式">输出格式:</h3><p>输出一行，即单词翻转后的字符串，注意每对单词之间的空格数量保持不变。</p><h3 id="输入样例">输入样例:</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>yppaH   wen raey

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例">输出样例:</h3><p>在这里给出相应的输出。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>Happy   <span class="token keyword">new</span> year
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>思路：遍历字符串，从下标为0的字符开始记住第一个不是空格的位置下标然后往下遍历到最后一个不是空格的字符下标，然后直接从最后一个不是字符的下标到第一个不是空格的下标输出，注意可能最后不是以空格结尾所以还要判断一下下一位是不是‘\\0’;</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">105</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">gets</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> len<span class="token operator">=</span><span class="token function">strlen</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> first<span class="token punctuation">,</span>last<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			first<span class="token operator">=</span>i<span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span>i<span class="token punctuation">;</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39; &#39;</span><span class="token operator">&amp;&amp;</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				last<span class="token operator">=</span>j<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> q<span class="token operator">=</span>last<span class="token punctuation">;</span>q<span class="token operator">&gt;=</span>first<span class="token punctuation">;</span>q<span class="token operator">--</span><span class="token punctuation">)</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">=</span>last<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="mex函数" tabindex="-1"><a class="header-anchor" href="#mex函数" aria-hidden="true">#</a> MEX函数</h2><p>mex(l,r)指的是从l~r这一段里的数中没有出现过的最小非负整数</p><p>那我们要算的话用一个map来标记他在不在数组里</p><p>从l到r，mp【i】++，标记一下</p><p>然后我们令j=0</p><p>当j被标记过的时候j++，否则j就是最小mex值</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>l<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>r<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    mp<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>mp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>j<span class="token operator">++</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后如果我们想算一个数组，从a[i]开始到哪个下标他的mex是op的话</p><p>我们令id从i下标开始，令j=0,当j!=op的话我们就mp[a[++id]]++;</p><p>最后算出来的id就是从下标为i开始长度最短的mex值是op的区间</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>l<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> id<span class="token operator">=</span>i<span class="token punctuation">;</span>
	<span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	mp<span class="token punctuation">[</span>a<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>mp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>j<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">!=</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span>
		mp<span class="token punctuation">[</span>a<span class="token punctuation">[</span><span class="token operator">++</span>id<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>j<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="位运算-lowbit" tabindex="-1"><a class="header-anchor" href="#位运算-lowbit" aria-hidden="true">#</a> 位运算（lowbit）</h2><p>&amp; 与 两个位都为1时，结果为1<br> | 或 两个位都为0时，结果为0<br> ^ 异或 两个位相同为0，相异为1<br> ~ 取反 0变1，1变0<br> 左移 &lt;&lt; 各二进位全部左移若干位，高位丢弃，低位补0<br> 右移 &gt;&gt;各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）</p><p>1.找到一个数x的2进制表示的第k位是几，最低位为第0位</p><p>右移运算符：&gt;&gt;，将x的二进制表示数右移，&gt;&gt;k就是右移了k位</p><p>那么求一个数的2进制表示的第k位是几就先将他右移k位再&amp;1</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>x<span class="token operator">&gt;&gt;</span>k<span class="token operator">&amp;</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.lowbit运算</p><p>作用：返回从左往右数最后一位1，（最右边一位）如10100，变为100,1010110变为10（返回的是十进制数）</p><p>可以用来计算一个数x中1的个数，先con=0；然后当x不为0时循环，x=x-lowbit（x），意思是x减去了他最右边一位二进制1所代表的十进制数</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">return</span> x<span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,117),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","bi-ji.html.vue"]]);export{k as default};
