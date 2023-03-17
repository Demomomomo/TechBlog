<template><div><h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector</h2>
<p>vector是一个长度动态变化的函数<br>
<code v-pre>vector&lt;int&gt;a</code> 是一个长度动态变化的int类型数组<br>
<code v-pre>vector&lt;int&gt; a(n)</code>定义一个长度为n的vector数组<br>
<code v-pre>vector&lt;int&gt; a(n,x)</code>定义一个长度为n，所有数都是x的vector数组<br>
<code v-pre>vector&lt;int&gt;b[233] </code>相当于一个第一维长度233，第二维长度动态变化的int数组<br>
也可以创建一个结构体REC，然后用<code v-pre>vector&lt;REC&gt;c</code> 结构体长度动态变化
<code v-pre>a.size（）</code>可以求出a数组的长度<br>
<code v-pre>b.empty( )</code> 判断b数组是不是空的，如果是返回TRUE，不是空的返回FALSE。<br>
<code v-pre>a.clear( ) </code>删除a数组里的所有元素。<br>
迭代器：相当于指针 引用：<code v-pre> vector&lt;int&gt;::iterator p ;</code>要用指针所指的数，用 <code v-pre>*</code> 号引用，如输出p所指的数：<code v-pre>*p</code><br>
<code v-pre>a.begin( ) </code>指的是数组a的起始位置的地址<br>
<code v-pre>a.end( )</code> 指的是数组a的最后一位元素的下一位的地址<br>
初始化a：<code v-pre>vector&lt;int&gt;a({1,2,3});</code><br>
遍历a：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
<span class="token comment">//或  </span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> x<span class="token operator">:</span>a<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>  
<span class="token comment">//或</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token double-colon punctuation">::</span>iterator it<span class="token punctuation">;</span>  
<span class="token keyword">for</span><span class="token punctuation">(</span>it<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token operator">!=</span>a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token operator">++</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>it<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>a.front( ) </code>指的是a的第一个元素<br>
<code v-pre>a.back( )</code> 指的是a的最后一个元素<br>
<code v-pre>auto </code>的作用是让编译器自己判断类型<br>
<code v-pre>a.push_back(4) </code>是往a数组的最后边加一个元素4<br>
<code v-pre>a.pop_back( ) </code>是删除a数组的最后一个元素<br>
<code v-pre>vector</code>还能支持比较运算，按照字典序比大小，比如：<br>
<code v-pre>vector&lt;int&gt; a(4,2),b(1,3)</code>，那么就可以得出b&gt;a<br>
创建一个n行m列的二维数组a，可以这样：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token operator">></span> a<span class="token punctuation">;</span>
<span class="token comment">//resize（x）的左作用是使容器的大小边变成x</span>
a<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="queue-无clear函数" tabindex="-1"><a class="header-anchor" href="#queue-无clear函数" aria-hidden="true">#</a> queue(无clear函数)</h2>
<p>包括循环队列<code v-pre>queue</code>和优先队列<code v-pre>priority_queue</code>两个容器<br>
<code v-pre>queue</code>是先进先出，<code v-pre>priority_queue</code>是先出最大的数<br>
在头文件<code v-pre>#include&lt;queue&gt;</code>里<br>
定义：<code v-pre>queue&lt;int&gt;q;</code> <code v-pre>&lt;&gt;</code>里可以更改类型如<code v-pre>double</code>或者结构体名称//队列<br>
<code v-pre>priority_queue&lt;int&gt; q;</code> 默认的是大根堆//先出的是大的数<br>
<code v-pre>priority_queue&lt;int,vector&lt;int&gt;,greater&lt;int&gt; &gt; b;</code>是小根堆//先出的是小的数<br>
对队列<code v-pre>queue</code>:<br>
<code v-pre>q.push(1) </code>在队尾插入1；<br>
<code v-pre>q.pop( )</code> 弹出队头元素//删除队头元素<br>
只能从队头插入，从队尾弹出<br>
<code v-pre>q.front( )</code>返回队头元素<br>
<code v-pre>q.back( ) </code>返回队尾元素<br>
对优先队列<code v-pre>priority_queue</code>:<br>
<code v-pre>a.push(1)</code> 插入一个元素（不按顺序）<br>
优先队列其实就是自己排序把大的排在前面<br>
<code v-pre>a.top( )</code>取最大值//队头元素<br>
<code v-pre>a.pop( )</code>删除最大值//删除队头<br>
遍历队列：<br>
当a不空时，输出队头然后删除队头</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">while</span>（<span class="token operator">!</span>a<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>）<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stack-无clear函数" tabindex="-1"><a class="header-anchor" href="#stack-无clear函数" aria-hidden="true">#</a> stack(无clear函数)</h2>
<p>栈，先进后出 （吃薯片，最开始装入的最后吃，一端开口的数据结构）<br>
定义：<code v-pre>stack&lt;int&gt; a;</code><br>
<code v-pre>a.push(1)</code> 插入一个元素<br>
<code v-pre>a.top( )</code>返回栈顶元素//最后一个插入的元素叫栈顶元素<br>
<code v-pre>a.pop( ) </code>删除栈顶元素</p>
<h2 id="deque" tabindex="-1"><a class="header-anchor" href="#deque" aria-hidden="true">#</a> deque</h2>
<p>双端队列，可以在队头队尾插入删除<br>
定义：<code v-pre>deque&lt;int&gt; a;</code><br>
<code v-pre>a.begin( ) </code>a的首个元素地址<br>
<code v-pre>a.end( )</code>a的最后一个元素的下一位的地址<br>
<code v-pre>a.back( )</code>a的最后一个元素<br>
<code v-pre>a.front( )</code>a的第一个元素<br>
<code v-pre>a.push_back(1)</code>往a最后面插入一个1<br>
<code v-pre>a.push_front(2)</code>在a的最前面插入一个2<br>
<code v-pre>a.pop_back( )</code>删除最后一个元素<br>
<code v-pre>a.pop_front( )</code>删除第一个元素<br>
<code v-pre>a.clear（）</code>清除一个队列</p>
<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2>
<p>定义：<code v-pre>set&lt;int&gt; a;</code>//不包含重复元素,而且按从小到大排序<br>
<code v-pre>multiset&lt;int&gt; a;</code>//可以包含重复元素<br>
函数： <code v-pre>a.size( )</code>返回长度<br>
<code v-pre>a.empty( )</code>是否为空<br>
<code v-pre>a.clear( )</code>清除队列<br>
<code v-pre>a.end( )</code>返回最后一个元素的后一个位置（set中的最大值的迭代器）<br>
<code v-pre>a.insert(1)</code>表示插入一个元素1<br>
<code v-pre>a.find(2)</code>表示查找一个元素2，返回的是元素2的迭代器（指针），如果数组中没有这个元素则返回<code v-pre>a.end( )</code><br>
<code v-pre>if(a.find(x)==a.end())</code>判断x在a中是否存在<br>
<code v-pre>a.lower_bound(x)</code>找到大于等于x的最小迭代器<br>
<code v-pre>a.upper_bound(x)</code>找到大于x的最小元素的迭代器<br>
<code v-pre>s.erase(it)</code>把it这个迭代器指向的元素删掉<br>
<code v-pre>s.erase(x)</code>把容器中所有等于x的数都删掉（在multiset中也是将所有的x的数都删掉）<br>
<code v-pre>s.erase(s.find(x))</code>找到x所在的迭代器，删掉这个迭代器（与上一行操作不同的是只删除了一个x）<br>
<code v-pre>a.count (x)</code> 表示x在a里的个数（因为set不存重复元素，所以存在x就返回1，不存在就返回0，<code v-pre>multiset</code>则返回个数）<br>
访问set：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> st<span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> i<span class="token operator">=</span>st<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">!=</span>st<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> op<span class="token operator">=</span><span class="token operator">*</span>i<span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>op<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//注意：如果要对set里删除数的话，我们需要先把数存一下然后遍历set完之后再从set里删除</span>
<span class="token comment">//比如删除set里所有大于4的数</span>

vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> yy<span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> i<span class="token operator">=</span>st<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">!=</span>st<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>i<span class="token operator">></span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        yy<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>yy<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> st<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>yy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2>
<p>定义：映射数组//前面的映射出后面的，就是输出后面的<br>
如果存数组那么按字典序递增的方式储存
map查找一个数的时间复杂度是logn，unordered_map是O（1）</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>`
a<span class="token punctuation">[</span><span class="token number">1000000</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">10000000</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">--</span><span class="token operator">-</span>输出<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;&gt;</code>里面的两个类型可以自己定义，比如字符串和数字：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
a<span class="token punctuation">[</span>“zxh”<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>“zxh”<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">--</span>输出<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以定义字符串和vector数组：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token operator">></span> a<span class="token punctuation">;</span>
a<span class="token punctuation">[</span>“zxh”<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span>“<span class="token operator">%</span>d”<span class="token punctuation">,</span>a<span class="token punctuation">[</span>“zxh”<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">--</span>输出<span class="token number">5</span>（vector的第二个元素）
<span class="token comment">//遍历map里的字符串和数组的话</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>v<span class="token punctuation">]</span> <span class="token operator">:</span>mp<span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s<span class="token operator">=</span>x<span class="token punctuation">;</span>
        cout<span class="token operator">&lt;&lt;</span>s<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>v<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数：<code v-pre>a.size( )</code>
<code v-pre>a.empty( );</code><br>
<code v-pre>a.clear( );</code><br>
<code v-pre>a.begin( );</code><br>
<code v-pre>a.end( );</code><br>
<code v-pre>a.erase(val);</code>删除一个值，时间复杂度是logn<br>
<code v-pre>a.erase(it);</code>删除一个下标，时间复杂度是1<br>
<code v-pre>a.insert()</code>插入一个二元组：<code v-pre>a.insert({“a”,{5}})</code><br>
输入字符串然后来记录他出现的次数的话用</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
String x<span class="token punctuation">;</span>
Cin<span class="token operator">&lt;&lt;</span>x<span class="token punctuation">;</span>
A<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历map：使用迭代器<code v-pre>map&lt;string,string&gt; ::iterator it;</code></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> a<span class="token punctuation">;</span>
	map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span><span class="token double-colon punctuation">::</span>iterator it<span class="token punctuation">;</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		string s<span class="token punctuation">;</span>
		cin<span class="token operator">>></span>s<span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span>it<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token operator">!=</span>a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span>it<span class="token operator">-></span>first<span class="token operator">&lt;&lt;</span><span class="token char">' '</span><span class="token operator">&lt;&lt;</span>it<span class="token operator">-></span>second<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pair-int-int" tabindex="-1"><a class="header-anchor" href="#pair-int-int" aria-hidden="true">#</a> pair&lt;int,int&gt;</h2>
<p>是个二元组，取第一个数就是<code v-pre>p.first</code>,取第二个数就是<code v-pre>p.second</code><br>
支持比较运算，以<code v-pre>first</code>为第一个关键字，以<code v-pre>second</code>为第二个关键字<br>
构造一个pair的话用<code v-pre>make_pair()</code>函数：<br>
<code v-pre>pair &lt;int,int&gt; p=make_pair(1,2);</code><br>
也可直接写为<br>
<code v-pre>p={1,2};</code><br>
也可以用pair来存三个值：<br>
<code v-pre>pair&lt;int,pair&lt;int,int&gt; &gt; p;</code></p>
<h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2>
<p><code v-pre>s.Size();</code><br>
<code v-pre>s.empty();</code><br>
<code v-pre>s.clear();</code><br>
s可以加一个字符串：<code v-pre>s+=&quot;abf&quot;;</code><br>
也可以加一个字符：<code v-pre>s+='a';</code><br>
<code v-pre>substr( )</code>函数：<br>
<code v-pre>string q=s.substr(k);</code>把从s的下标为k的字符开始一直到结尾<br>
<code v-pre>s.substr(k,x)</code>返回的是起始位置下标为k，长度是x的字符串，当<code v-pre>x&gt;s.size()</code>时，就输出到字符串结束为止。<br>
<code v-pre>s.substr(i)</code>返回从下标为i开始到结尾的字符串。<br>
<code v-pre>string s=to_string(n)</code>：将数字常量n转换为字符串s;<br>
<code v-pre>stoi</code>函数：<br>
将字符串转化为10进制的数<br>
<code v-pre>stoi（字符串，起始位置（下标），n进制（默认10进制））</code>，将 n 进制的字符串转化为十进制<br>
<code v-pre>stoi(s,0,2)</code> ：将二进制的字符串s转化为十进制；<br>
<code v-pre>int x=stoi(s);</code>把s转化为十进制的x</p>
<p><code v-pre>isalnum函数</code>：判断是否为字母或数字，是的话返回true。<br>
头文件是<code v-pre>#include &lt;cctype&gt;</code><br>
<code v-pre>tolower</code>函数：把大写字符转化为小写字符，如果不是大写字符就不转化
用法：<code v-pre>tolower(s[i]);</code><br>
<code v-pre>insert</code>函数：在字符串里插入字符<br>
用法：<code v-pre>s.insert(i,'k')</code>，在字符串下标为i的地方加k</p>
<p><code v-pre>find</code>函数：在头文件<code v-pre>string</code>里</p>
<p>使用方法：如在<code v-pre>string1</code>中查找<code v-pre>string2</code>，<code v-pre>string1.find(string2)；</code>返回值为string2第一次在string1中出现的位置。<br>
若希望在特定位置开始查找，可使用 <code v-pre>string1.find(string2，location);</code><br>
如果找不到，则返回值为<code v-pre>string::npos</code> ，即对于string，通过<code v-pre>a.find(val)==string::npos</code>来做判断是否查找成功</p>
<p>还有第二种用法是在<code v-pre>algorithm</code>里，<code v-pre>find</code>用来查找数组中的数，返回的是第一次出现的地址，如果没找到返回<code v-pre>end（）</code><br>
<code v-pre>isupper(op)</code>判断是不是大写字母<br>
​<code v-pre>islower(op)</code>判断是不是小写字母<br>
<code v-pre>toupper(op)</code>大写字母<br>
<code v-pre>tolower(op)</code>变成小写字母<br>
<code v-pre>insert</code>函数：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//在下标为i的地方插入一个字符串f</span>
string s<span class="token punctuation">,</span>f<span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>append</code>函数：</p>
<p>在字符串的后面加上一个字符串</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>string s1<span class="token operator">=</span><span class="token string">"12"</span><span class="token punctuation">;</span>
string s2<span class="token operator">=</span><span class="token string">"34"</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
cout<span class="token operator">&lt;&lt;</span>s1<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>pop_back()</code>函数：删除字符串的最后一个字符</p>
<h2 id="memset" tabindex="-1"><a class="header-anchor" href="#memset" aria-hidden="true">#</a> memset</h2>
<p>对整数类型的数组一般取极大值为 <code v-pre>memset(a,0x3f,sizeof a)</code><br>
对浮点数类型的数组一般取最大值为 <code v-pre>memset(a,0x7f,sizeof a</code></p>
<h2 id="memcpy" tabindex="-1"><a class="header-anchor" href="#memcpy" aria-hidden="true">#</a> memcpy</h2>
<p><code v-pre>memcpy</code>函数：把b复制到a中<br>
<code v-pre>memcpy（a,b,sizeof(b)); </code>sizeof()必须使用在拷贝到的字符串身上，不然会造成溢出  ,将b拷贝到a上
关于memcpy函数：<code v-pre>memcpy(目标数组，被复制的数组，被复制的数组的大小)</code></p>
<h2 id="stringstream" tabindex="-1"><a class="header-anchor" href="#stringstream" aria-hidden="true">#</a> stringstream</h2>
<p>用于输入一个含有空格和数字的字符串，将里面间隔的数字提取出来的函数</p>
<p>比如一个字符串是 <code v-pre>123 45 67 890</code></p>
<p>我们先用string类型读入，再用stringstream传出</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>string s<span class="token punctuation">;</span>
<span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
stringstream <span class="token function">ss</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> op<span class="token punctuation">,</span>con<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>ss<span class="token operator">>></span>op<span class="token punctuation">)</span> a<span class="token punctuation">[</span><span class="token operator">++</span>con<span class="token punctuation">]</span><span class="token operator">=</span>op<span class="token punctuation">;</span><span class="token comment">//相当于把字符中的每个数字传到op里，再把op存到a数组里去  </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全排列函数" tabindex="-1"><a class="header-anchor" href="#全排列函数" aria-hidden="true">#</a> 全排列函数</h2>
<p>next_permutation实现升序，那么刚开始的数组需要是升序排列</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">do</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">next_permutation</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


