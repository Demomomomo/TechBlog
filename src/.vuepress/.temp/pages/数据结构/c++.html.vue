<template><div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2>
<p>用<code v-pre>类型* 变量名</code>来表示一个指针</p>
<p><code v-pre>*变量名</code>表示取变量所指向的值</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>	<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span><span class="token keyword">const</span> p<span class="token operator">=</span><span class="token operator">&amp;</span>i<span class="token punctuation">;</span><span class="token comment">//const在*后面表示指针p不能变，就是指针的值不能变，即指针不能再指向别的地址</span>
	<span class="token operator">*</span>p<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span><span class="token comment">//可以通过p更改所指地址的值</span>
	i<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span><span class="token comment">//也可以通过变量更改值</span>
	<span class="token keyword">int</span> op<span class="token punctuation">;</span>
<span class="token comment">//	p=&amp;op;//但是不能指向别的变量</span>

	<span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span>pp<span class="token operator">=</span><span class="token operator">&amp;</span>i<span class="token punctuation">;</span><span class="token comment">//const在*前表示const是修饰前面的类型，即不能通过p去做赋值</span>
	<span class="token comment">//与int const *pp表示相同，只看const在*前还是在*后</span>
<span class="token comment">//	*pp=10;//不能通过pp改变变量的值</span>
	i<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//可以通过i去做赋值</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内联函数" tabindex="-1"><a class="header-anchor" href="#内联函数" aria-hidden="true">#</a> 内联函数</h2>
<p>通过“内存膨胀的方式”用空间去换时间，提高运行时间</p>
<p>在函数前面加关键字<code v-pre>inline</code>，内联函数通过编译器实现</p>
<h2 id="new和delete" tabindex="-1"><a class="header-anchor" href="#new和delete" aria-hidden="true">#</a> new和delete</h2>
<p>动态开内存</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">;</span><span class="token comment">//开一个类型为int的内存，p为指针</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//开一个类型为int并且存放的数为10的内存</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//开10个类型为int的内存</span>
<span class="token keyword">delete</span> p<span class="token punctuation">;</span><span class="token comment">//最后用完释放，释放首地址的内存</span>
<span class="token keyword">delete</span> p1<span class="token punctuation">;</span>
<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> p2<span class="token punctuation">;</span><span class="token comment">//释放数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2>
<p>关键字<code v-pre>class</code></p>
<p>在类里面可以定义数据和函数</p>
<p>直接写的数据默认是私有的</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> 类名
<span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span><span class="token comment">//公有的，在类外可以直接引用</span>
        <span class="token comment">//成员：数据，函数</span>
    <span class="token keyword">private</span><span class="token operator">:</span><span class="token comment">//私有的，在类外不能直接引用</span>
        <span class="token comment">//成员：数据，函数</span>
    <span class="token keyword">protected</span><span class="token operator">:</span><span class="token comment">//被保护的</span>
        <span class="token comment">//成员：数据，函数</span>

<span class="token punctuation">}</span>

<span class="token comment">//例子</span>

<span class="token keyword">class</span> <span class="token class-name">sheep</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        string name<span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
            cout<span class="token operator">&lt;&lt;</span><span class="token string">"my name is"</span><span class="token operator">&lt;&lt;</span>name<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">void</span> <span class="token function">speakage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            cout<span class="token operator">&lt;&lt;</span><span class="token string">"I am "</span><span class="token operator">&lt;&lt;</span>age<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">setage</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token punctuation">{</span>
            age<span class="token operator">=</span>u<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		<span class="token keyword">void</span> <span class="token function">getname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> sheep<span class="token double-colon punctuation">::</span><span class="token function">getname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"name"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

sheep xyy<span class="token punctuation">;</span>
xyy<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"xyy"</span><span class="token punctuation">;</span><span class="token comment">//公有属性可以直接访问</span>
xyy<span class="token punctuation">.</span><span class="token function">setage</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//公有函数可以直接访问</span>
<span class="token comment">//xyy.age=10是错的，因为age是私有属性不能直接访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2>
<p>用于在类里面初始化数据</p>
<p>在<code v-pre>public</code>里</p>
<p>名字与类名一样</p>
<p>可以重载</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">int</span> age<span class="token punctuation">,</span>name<span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token keyword">int</span> id<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//在类中也可以直接定义一个不变的数</span>
        <span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//这个是系统自动给的构造函数，在创建对象的时候会运行</span>
        <span class="token punctuation">}</span>
        <span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//重载一个构造函数，在定义的命名的时候直接调用，变量也可以直接初始化</span>
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//在外面定义构造函数</span>
    age<span class="token operator">=</span>u<span class="token punctuation">,</span>name<span class="token operator">=</span>v<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


myclass <span class="token function">c1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//定义新变量的时候直接引用</span>
myclass <span class="token operator">*</span>p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token function">myclass</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建一个新的类的地址</span>
myclass <span class="token operator">*</span>pp<span class="token operator">=</span><span class="token keyword">new</span> myclass<span class="token punctuation">;</span><span class="token comment">//如果自己写了含有参数的构造函数，那么系统自动给的不含参数的构造函数会消失，所以我们如果在自己写了含参的构造函数再想这样写的话就自己再写一个不含参的构造函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候数据成员必须初始化并且类型为只读不能改，我们就不能在构造函数中赋值，那么我们就用成员初始化列表的方式给数据初始化</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">const</span> <span class="token keyword">int</span> id<span class="token punctuation">,</span>op<span class="token punctuation">;</span><span class="token comment">//用初始化列表的方式初始化</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> u<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">id</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">op</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//将id和op分别初始化为n和0</span>
			num<span class="token operator">=</span>u<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>	
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="析构函数" tabindex="-1"><a class="header-anchor" href="#析构函数" aria-hidden="true">#</a> 析构函数</h2>
<p>作用：在对象生命周期结束的时候进行清理，系统可以自动调用解析函数</p>
<p>先构造的后析构</p>
<p>函数名与类名相同，在前面加上一个<code v-pre>~</code></p>
<p>没有返回值类型和返回值，也没有参数</p>
<p>先运行的后析构</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//析构函数，创建函数的结束时候也会调用</span>
			<span class="token comment">//函数体</span>
		<span class="token punctuation">}</span>	
<span class="token punctuation">}</span><span class="token punctuation">;</span>

op<span class="token punctuation">.</span><span class="token operator">~</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//也可以直接调用</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拷贝构造函数" tabindex="-1"><a class="header-anchor" href="#拷贝构造函数" aria-hidden="true">#</a> 拷贝构造函数</h2>
<p>一种特殊的构造函数，通过拷贝构造函数完成一个复制的过程</p>
<p>特殊：第一个参数是本类的对象的引用</p>
<p>先是构造函数，才可能是拷贝构造函数，没写的话系统给，将成员一一对应赋值，可以自定义</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">monster</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		string name<span class="token punctuation">;</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">double</span> op<span class="token punctuation">;</span>
		<span class="token function">monster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			name<span class="token operator">=</span><span class="token string">"name"</span><span class="token punctuation">;</span>
			num<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
			op<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">monster</span><span class="token punctuation">(</span>string s<span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">double</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
			name<span class="token operator">=</span>s<span class="token punctuation">;</span>
			num<span class="token operator">=</span>n<span class="token punctuation">;</span>
			op<span class="token operator">=</span>p<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">monster</span> <span class="token punctuation">(</span>monster <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token comment">//拷贝构造函数第一个参数是本类对象的引用。拷贝的内容自定义，可以拷贝属性，这个是系统默认构造的拷贝函数，可以不用定义</span>
        <span class="token punctuation">{</span>
			name<span class="token operator">=</span>obj<span class="token punctuation">.</span>name <span class="token punctuation">;</span>
			num<span class="token operator">=</span>obj<span class="token punctuation">.</span>num <span class="token punctuation">;</span>
			op<span class="token operator">=</span>obj<span class="token punctuation">.</span>op <span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">monster</span> <span class="token punctuation">(</span>monster <span class="token operator">&amp;</span>obj<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//拷贝函数也可以重载，也可以拷贝输入的参数</span>
			name<span class="token operator">=</span>obj<span class="token punctuation">.</span>name <span class="token punctuation">;</span>
			num<span class="token operator">=</span>v<span class="token punctuation">;</span>
			op<span class="token operator">=</span>obj<span class="token punctuation">.</span>op <span class="token punctuation">;</span>
		<span class="token punctuation">}</span>	
<span class="token punctuation">}</span><span class="token punctuation">;</span>

	monster <span class="token function">c1</span><span class="token punctuation">(</span><span class="token string">"xyy"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	monster c3<span class="token operator">=</span>c1<span class="token punctuation">;</span><span class="token comment">//直接写等于也可以直接复制</span>
	monster <span class="token function">c2</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入的是monster类，所以使用的是拷贝函数，c2就是复制了c1，如果没有定义拷贝函数那么就按默认构造的拷贝函数，即所有属性都复制</span>
	monster <span class="token function">c4</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//用拷贝函数将c1的部分属性复制并更改某个属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在拷贝函数中，如果属性中有指针，那么我们不能直接将指针指向被复制的对象的指针。我们需要新开辟一个内存，然后将被复制的对象的指针所指的内容复制到新建的指针所指的内容中去，这时候我们就得自己定义一个拷贝函数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">monster</span><span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
	<span class="token function">monster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		p<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span><span class="token comment">//默认构造置空</span>
	<span class="token punctuation">}</span>
	<span class="token function">monster</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
		p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//赋值初始化开十个空间</span>
	<span class="token punctuation">}</span>
	<span class="token function">monster</span><span class="token punctuation">(</span>monster <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//默认复制构造的时候是将指针直接指向原指针所指的地址，没有意义，那么我们就需要写一个新的构造函数</span>
		p<span class="token operator">=</span>obj<span class="token punctuation">.</span>p <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	<span class="token function">monster</span><span class="token punctuation">(</span>monster <span class="token operator">&amp;</span>obj，<span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
		p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//自己定义的时候复制的时候开十个新空间分别复制原来十个空间的数据</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>obj<span class="token punctuation">.</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token operator">~</span><span class="token function">monster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//析构函数当指针不空的时候释放内存</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">delete</span> p<span class="token punctuation">;</span>
			p<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this指针" tabindex="-1"><a class="header-anchor" href="#this指针" aria-hidden="true">#</a> this指针</h2>
<p>this指针是系统自动生成并且隐藏的指针</p>
<p>this指针不是对象的一部分，作用域在类内部，每个对象都有相应的this指针</p>
<p>类的普通函数访问类的普通成员时，this指针总是指向调用者对象</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> num<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">setnum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token operator">-></span>num <span class="token operator">=</span>num<span class="token punctuation">;</span><span class="token comment">//this指向被调用的对象，传进来的num赋值到了对象的num</span>
	<span class="token punctuation">}</span>	
	<span class="token keyword">int</span> <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> num<span class="token punctuation">;</span><span class="token comment">//等价于return this->num,所以一般在函数中调用对象的属性前面都隐藏了this-></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static成员" tabindex="-1"><a class="header-anchor" href="#static成员" aria-hidden="true">#</a> static成员</h2>
<p>静态成员，分为静态数据成员和静态函数成员</p>
<h3 id="静态数据成员" tabindex="-1"><a class="header-anchor" href="#静态数据成员" aria-hidden="true">#</a> 静态数据成员</h3>
<p>在声明成员的时候加上static关键字</p>
<p>静态成员存在于程序的静态全局区，生命周期是从程序开始到程序结束，所以存在的周期比类长，不能用初始化列表或初始化函数来赋值，那么我们就需要在类的外面进行赋值</p>
<p>所有的类的对象都共享一个静态数据内存空间，如果一个类创建了两个对象，第一个对象的静态数据更改，第二个对象的静态数据就会变成改后的内容，因为他们共享一个内存</p>
<p>另外静态数据结构也可以通过<code v-pre>类名::数据名</code>的访问方式进行访问</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">static</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> myclass<span class="token double-colon punctuation">::</span>num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//在类外面赋初始值</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass c1<span class="token punctuation">,</span>c2<span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span>num <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//将c1的静态数据更改了</span>
	cout<span class="token operator">&lt;&lt;</span>c2<span class="token punctuation">.</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//c2与c1公用静态内存，所以c2的num为更改之后的10</span>
	cout<span class="token operator">&lt;&lt;</span>myclass<span class="token double-colon punctuation">::</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//用类名直接访问</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态成员函数" tabindex="-1"><a class="header-anchor" href="#静态成员函数" aria-hidden="true">#</a> 静态成员函数</h3>
<p>在函数前面加上static关键字</p>
<p>在静态函数里只能访问静态成员和静态函数，不能访问普通成员和普通函数，因为static属于一个类不需要依靠对象就可以访问，但是对于普通的数据只有有了对象才有相应的数据，在调用函数的时候普通的数据还没有创建，所以不能访问</p>
<p>在静态成员函数中也不能调用this指针，因为this指针也时有了对象之后才创建的</p>
<p>可以通过<code v-pre>类名::函数名</code>的方式直接访问这个函数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">static</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//静态函数加关键字static</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> myclass<span class="token double-colon punctuation">::</span>num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass c1<span class="token punctuation">,</span>c2<span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span>num <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span><span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//直接调用</span>
	c1<span class="token double-colon punctuation">::</span><span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3>
<p>要求：创建一个只能创建一个对象的类</p>
<p>只能有一个对象，那么我们可以将所有指针都指向一个内存，访问的时候直接用指针来访问</p>
<p>将构造函数和拷贝函数设置为私有，那么我们就不能通过类名+对象名的方式创造对象</p>
<p>将指针设置为私有，这样保证不会在类的外面访问指针，并且设置成static，这样可以在类的外面初始化为NULL</p>
<p>写一个公有且静态的得到指针的函数，这样我们可以直接通过<code v-pre>类名::函数</code>来得到指针，这个函数的内容是如果为空就创建，如果不为空就不用管，最后返回指针，那么得到的一直是第一次创建的指针</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">oneinstance</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span><span class="token comment">//需要用的数据</span>
		<span class="token keyword">static</span> oneinstance<span class="token operator">*</span> <span class="token function">getpone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//构造一个得到静态指针的私有函数</span>
	<span class="token keyword">private</span><span class="token operator">:</span><span class="token comment">//将构造函数和拷贝函数写成私有，那么在类的外面就不能构造和拷贝函数,就不能通过类名+对象名的方式创建对象了</span>
		<span class="token function">oneinstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">oneinstance</span><span class="token punctuation">(</span>oneinstance <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">static</span> oneinstance <span class="token operator">*</span>pone<span class="token punctuation">;</span><span class="token comment">//建造静态的一个私有指针，那么我们在类外面就不会访问到他</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

oneinstance<span class="token operator">*</span> oneinstance<span class="token double-colon punctuation">::</span><span class="token function">getpone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pone<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		pone<span class="token operator">=</span><span class="token keyword">new</span> oneinstance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> pone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

oneinstance<span class="token operator">*</span> oneinstance<span class="token double-colon punctuation">::</span>pone <span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span><span class="token comment">//先将静态指针置空</span>


oneinstance<span class="token double-colon punctuation">::</span><span class="token function">oneinstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

oneinstance<span class="token double-colon punctuation">::</span><span class="token function">oneinstance</span><span class="token punctuation">(</span>oneinstance <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	oneinstance <span class="token operator">*</span>p1<span class="token operator">=</span>oneinstance<span class="token double-colon punctuation">::</span><span class="token function">getpone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//使用的时候直接得到这个类的指针</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>p1<span class="token operator">-></span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	p1<span class="token operator">-></span>num <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	oneinstance <span class="token operator">*</span>p2<span class="token operator">=</span>oneinstance<span class="token double-colon punctuation">::</span><span class="token function">getpone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//p2的指针同样指向p1</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>p2<span class="token operator">-></span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const成员" tabindex="-1"><a class="header-anchor" href="#const成员" aria-hidden="true">#</a> const成员</h2>
<p>声明对象的时候加上const关键字</p>
<p>常量成员分为常量数据成员和常量函数成员</p>
<h3 id="const数据成员" tabindex="-1"><a class="header-anchor" href="#const数据成员" aria-hidden="true">#</a> const数据成员</h3>
<p>const对象必须用初始化列表进行初始化</p>
<p>const使每个对象都不能改，但是static数据并不属于某个对而是属于一个类，那么在const函数里static对象就可以改</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token keyword">int</span> val<span class="token punctuation">;</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">num</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span> 
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">val</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">num</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> v<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">num</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">val</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const函数成员" tabindex="-1"><a class="header-anchor" href="#const函数成员" aria-hidden="true">#</a> const函数成员</h3>
<p>在函数声明的后面加上关键字const</p>
<p>在常量成员函数里可以对静态成员进行修改，不能对其他的数据成员进行修改</p>
<p>如果将对象也设置成const，那么类中除了static数据其他的数据都不能修改，也不能调用普通成员函数，因为普通函数有可能会改数据，但是const对象是不能改数据的，所以不能调用普通函数，但是可以调用const函数，因为const函数不能改除了static对象以外的其他对象</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token keyword">int</span> val<span class="token punctuation">;</span>
		<span class="token keyword">static</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">getnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getnv"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">void</span> <span class="token function">getnv1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token comment">//在函数后面加上const关键字，函数内除了static对象其他的对象都不能改</span>
			n<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//static对象可以在const函数中修改</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getnv1"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"val=="</span><span class="token operator">&lt;&lt;</span>val<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"n=="</span><span class="token operator">&lt;&lt;</span>n<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

		<span class="token punctuation">}</span>
		<span class="token keyword">void</span> <span class="token function">getnv2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> myclass<span class="token double-colon punctuation">::</span>n <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//static对象在类外面进行初始化</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">num</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//const使用初始化列表进行初始化</span>
	
<span class="token punctuation">}</span> 
<span class="token keyword">void</span> myclass<span class="token double-colon punctuation">::</span><span class="token function">getnv2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token comment">//在外面声明的时候也需要在函数的最后加上const关键字</span>
	n<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"getnv2"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"val=="</span><span class="token operator">&lt;&lt;</span>val<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"n=="</span><span class="token operator">&lt;&lt;</span>n<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">const</span> myclass c2<span class="token punctuation">;</span><span class="token comment">//将对象设为const</span>
	c2<span class="token punctuation">.</span>n <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//可以改static数据</span>
	cout<span class="token operator">&lt;&lt;</span>c2<span class="token punctuation">.</span>n <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	c2<span class="token punctuation">.</span><span class="token function">getnv1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//const对象可以调用const函数</span>
<span class="token comment">//	c2.getnv() ;const对象不能调用普通函数</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="友元关系" tabindex="-1"><a class="header-anchor" href="#友元关系" aria-hidden="true">#</a> 友元关系</h2>
<p>友元分为友元函数和友元类</p>
<p>关键词是friend</p>
<p>友元函数：一个类的私有数据不能被普通函数访问，但是一个类的友元函数可以访问这个类的私有数据</p>
<p>设置一个类的友元函数：在类里声明这个函数，并且在函数的前面加上关键词friend</p>
<p>友元类：一个类的友元类也可以访问这个类的私有数据</p>
<p>设置一个类的友元类：在类里声明他的友元类，在前面加上friend关键字</p>
<p>注意：一个类的友元函数和友元类可以访问这个类的私有数据，但是这个类不能访问他的友元函数和友元类的私有数据</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> num<span class="token punctuation">;</span><span class="token comment">//未声明的数据是私有数据</span>
	<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">getnum</span><span class="token punctuation">(</span>A obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在函数的前面加上关键字friend就设置成了该类的友元函数</span>
	<span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">;</span><span class="token comment">//在类的前面加上关键friend就可以将他设为友元类，友元类可以访问自己的私有数据</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> val<span class="token punctuation">;</span>
		<span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">void</span> <span class="token function">getAnum</span><span class="token punctuation">(</span>A obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//B是A的友元类，可以访问A的私有数据</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"Anum=="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token class-name">A</span><span class="token double-colon punctuation">::</span><span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">getval</span><span class="token punctuation">(</span>A obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//普通函数可以直接访问公有的成员</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"val=="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>val <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">getnum</span><span class="token punctuation">(</span>A obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//普通函数不能直接访问类的私有成员，就需要将这个函数设为类的友元函数</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承与派生" tabindex="-1"><a class="header-anchor" href="#继承与派生" aria-hidden="true">#</a> 继承与派生</h2>
<p>不影响原来类的代码实现对于类的功能的扩展，在原有的类的基础上快速增加新的功能</p>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>在原来已经有的类上新建一个新的类，这个类可以含有一个或多个原来已经有的类，原来已经有的类叫做父类或基类，新建的类就叫子类或派生类</p>
<p>继承和派生是同一个过程</p>
<p>继承分类：1.只有一个父类：单继承 2.有两个或两个以上的父类：多继承</p>
<h3 id="继承方式" tabindex="-1"><a class="header-anchor" href="#继承方式" aria-hidden="true">#</a> 继承方式</h3>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
单继承：
<span class="token keyword">class</span> 父类名<span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> 子类名<span class="token operator">:</span>继承权限 父类名<span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

多继承：
<span class="token keyword">class</span> 父类<span class="token number">1</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> 父类<span class="token number">2</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> 子类名<span class="token operator">:</span>继承权限<span class="token number">1</span> 父类名<span class="token number">1</span><span class="token punctuation">,</span>继承权限<span class="token number">2</span> 父类名<span class="token number">2</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承权限：1.公有继承pubic 2.私有继承：private 3.保护继承 protected</p>
<p>（权限：写在class里是自己的权限，在class外是继承权限）</p>
<p>注意：继承是子类继承父类的全部成员</p>
<h4 id="权限授予" tabindex="-1"><a class="header-anchor" href="#权限授予" aria-hidden="true">#</a> 权限授予</h4>
<p>单继承规则：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231118210131.png" alt="20231118210131" loading="lazy"></p>
<p>规律:严格程度私有&gt;保护&gt;公有，哪个更严格就按照哪种继承</p>
<p>多继承：分析直接父子类</p>
<p>例子：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span><span class="token comment">//父类</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> pub<span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">getpub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getpub"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"pub=="</span><span class="token operator">&lt;&lt;</span>pub<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">private</span><span class="token operator">:</span>
		<span class="token keyword">int</span> pri<span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">getpri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getpri"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"pri=="</span><span class="token operator">&lt;&lt;</span>pri<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>		
	<span class="token keyword">protected</span><span class="token operator">:</span>
		<span class="token keyword">int</span> pro<span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">getpro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getpro"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"pro=="</span><span class="token operator">&lt;&lt;</span>pro<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>		
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pub<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	pro<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	pri<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">son</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span><span class="token comment">//子类，继承方式为公有继承</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">void</span> <span class="token function">getpubpro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//在子类的内部父类的公有的和被保护的数据都可以访问，只有私有不能访问</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"getpubpro"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"pub=="</span><span class="token operator">&lt;&lt;</span>pub<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"pro=="</span><span class="token operator">&lt;&lt;</span>pro<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son<span class="token double-colon punctuation">::</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	son obj<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>pub <span class="token punctuation">;</span><span class="token comment">//在外部，子类只能访问父类的公有成员，父类的私有和被保护的成员都不能访问</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父子关系" tabindex="-1"><a class="header-anchor" href="#父子关系" aria-hidden="true">#</a> 父子关系</h3>
<p>派生类的构成：派生类会继承基类除了构造，拷贝构造和析构函数外所有的成员函数和数据成员。如果派生类新添加的数据和基类的数据名称相同，那么基类的数据就会被隐藏</p>
<p>要想通过派生类访问基类被隐藏的数据，那么就用<code v-pre>对象名.基类名::被隐藏的数据名</code>来访问</p>
<p>子类将父类的所有成员都继承下来。如果自己有父类也有，或不同的父类有重复的成员，那么我们就描述一下：如果用自己的就直接用；如果用父类的就用<code v-pre>对象名.父类名::成员名</code>来访问</p>
<p>子类的对象可以当做父类的对象来使用，父类对象可以接受子类对象的值</p>
<p>子类父类构造析构的关系：先按照继承规则构造父类，再构造子类，所有的都构造完之后按照从后往前析构（符合先构造的后析构）</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> val<span class="token punctuation">;</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">int</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	val<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	num<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	b<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------fatherG"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token class-name">father</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------fatherX"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">father1</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">father1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> val<span class="token punctuation">;</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">int</span> a<span class="token punctuation">;</span>
		
<span class="token punctuation">}</span><span class="token punctuation">;</span>

father1<span class="token double-colon punctuation">::</span><span class="token function">father1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	val<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
	num<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
	a<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------father1G"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">father1</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">father1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------father1X"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">son</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span><span class="token punctuation">,</span><span class="token keyword">public</span> <span class="token class-name">father1</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son<span class="token double-colon punctuation">::</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	num<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------sonG"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">son</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"--------sonX"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	son obj<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son.num="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//访问子类自己的num</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son.a="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>a <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//访问唯一继承的a</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son.b="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>b <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//访问唯一继承的a</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father.num="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>father<span class="token double-colon punctuation">::</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//由于num子类和两个父类都有，所以我们需要说明一下是哪个num</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father.val="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>father<span class="token double-colon punctuation">::</span>val <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//由于val两个父类都有，所以我们要说明是哪个val</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father1.num="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>father1<span class="token double-colon punctuation">::</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father1.val="</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>father1<span class="token double-colon punctuation">::</span>val <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	father obj1<span class="token punctuation">;</span>
	obj1<span class="token operator">=</span>obj<span class="token punctuation">;</span><span class="token comment">//子类可以给父类赋值，因为父类有的子类都有，父类对象不能给子类对象赋值，因为父类对象缺少数据</span>
	son<span class="token operator">*</span> pson<span class="token punctuation">;</span>
	father <span class="token operator">*</span>pfather<span class="token punctuation">;</span>
	pfather<span class="token operator">=</span><span class="token operator">&amp;</span>obj<span class="token punctuation">;</span><span class="token comment">//也可以用父类的指针接受子类的对象的地址，因为子类对象数据范围覆盖了父类指针。不能用子类指针接收父类对象，因为父类对象数据范围小于子类指针指向的范围</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在子类的构造函数中想调用父类的构造函数，那么在子类的构造列表后调用<code v-pre>:构造函数</code></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token keyword">int</span> op<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">op</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">op</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
	num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

<span class="token keyword">class</span> <span class="token class-name">son</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son<span class="token double-colon punctuation">::</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
son<span class="token double-colon punctuation">::</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">father</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//想调用父类的带参构造函数，就写在成员初始化列表里</span>
	
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="菱形继承" tabindex="-1"><a class="header-anchor" href="#菱形继承" aria-hidden="true">#</a> 菱形继承</h3>
<p>A派生出A1和A2，那么A1和A2中含有继承A的n，A1和A2又派生出AA，那么AA继承了A1的n和A2的n。我们可以通过<code v-pre>类名::成员名</code>的方式分别访问继承自A1和A2的n，但是这样继承非常浪费内存，所以我们就用虚继承（菱形继承）的方式来继承</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231119162430.png" alt="20231119162430" loading="lazy"></p>
<p>虚继承：将同样从A派生的A1和A2的继承方式改为虚继承（前面加上<code v-pre>virtual</code>关键字），那么当从他们派生到AA的时候，虚指针就会自动对比，如果A1和A2从A里继承的是一样的东西，那么只会给AA一份</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token operator">:</span>
		<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">A1</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">A</span></span><span class="token punctuation">{</span><span class="token comment">//加上虚继承关键字virtual</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">A2</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">virtual</span> <span class="token keyword">public</span> <span class="token class-name">A</span></span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">A1</span><span class="token punctuation">,</span><span class="token keyword">public</span> <span class="token class-name">A2</span></span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	AA aa<span class="token punctuation">;</span>
	cout<span class="token operator">&lt;&lt;</span>aa<span class="token punctuation">.</span>n<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">//就从A1和A2继承了一个n，可以直接用aa访问</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2>
<p>虚函数：在类中的普通函数前面加上关键字<code v-pre>virtual</code>，就变成了虚函数</p>
<p>多态的条件：1.有虚函数成员的父类 2.同名函数的子类 3.指针：使用父类类型的指针，指向父类或子类对象来调用函数</p>
<p>用父类的指针接收子类的对象，对于存在于父类和子类的同名函数，如果同名函数不是虚函数，那么指针调用这个函数的时候调用的是本身父类的函数；如果这个函数是虚函数的话，调用的就是接收的子类对象的函数。</p>
<p>在释放父类指针接收子类对象的指针内存的时候，我们需要把父类的析构函数也设为虚函数，在删除的时候调用子类对象的析构函数再调用父类的析构函数，如果析构函数没有设为虚函数，那么就只会释放父类类型指针的内存</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father::father()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">father</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father::~father()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> father<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"father::fa()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">son1</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son1<span class="token double-colon punctuation">::</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son1::son1()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">son1</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son1::~son1()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> son1<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son1::fa()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">son2</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son2<span class="token double-colon punctuation">::</span><span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son2::son12()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">son2</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son2::~son2()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> son2<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son2::fa()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	father fatherobj<span class="token punctuation">;</span>
	son1 son1obj<span class="token punctuation">;</span>
	son2 son2obj<span class="token punctuation">;</span>
	father <span class="token operator">*</span>p<span class="token punctuation">;</span><span class="token comment">//父类类型的指针,如果不是虚函数，那么他即使取的是son的地址，执行fa()函数的时候仍然调用的是父类的fa()函数</span>
	p<span class="token operator">=</span><span class="token operator">&amp;</span>fatherobj<span class="token punctuation">;</span><span class="token comment">//指向自己</span>
	p<span class="token operator">-></span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//调用自己的函数</span>
	p<span class="token operator">=</span><span class="token operator">&amp;</span>son1obj<span class="token punctuation">;</span><span class="token comment">//指向son1</span>
	p<span class="token operator">-></span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//调用son1的函数</span>
	p<span class="token operator">=</span><span class="token operator">&amp;</span>son2obj<span class="token punctuation">;</span><span class="token comment">//指向son2</span>
	p<span class="token operator">-></span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//调用son2的函数</span>
	father <span class="token operator">*</span>pp<span class="token operator">=</span><span class="token keyword">new</span> son1<span class="token punctuation">;</span><span class="token comment">//用父类指针接收子类对象</span>
	pp<span class="token operator">-></span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">delete</span> pp<span class="token punctuation">;</span>
	pp<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>纯虚函数：没有函数体的虚函数，在声明的时候将他赋值为0</p>
<p>作用：写在父类，父类不用写函数，在子类重新写同名函数的时候再写函数体</p>
<p>如果在一个类里出现了纯虚函数就变成了抽象类，抽象类不能定义对象，但是可以用来定义指针。如果子类没有重新定义父类中的所有纯虚函数，那么子类也是抽象类。并且子类中重新定义的函数其实也是虚函数，当做父类的时候也可以被子类重写</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//纯虚函数</span>
		<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">fa1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token class-name">father</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> father<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">son1</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">~</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将两个纯虚函数都重新写才能建对象</span>
		<span class="token keyword">void</span> <span class="token function">fa1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son1<span class="token double-colon punctuation">::</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token class-name">son1</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> son1<span class="token double-colon punctuation">::</span><span class="token function">fa1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son1::fa1"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> son1<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"son1::fa()"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	father <span class="token operator">*</span>p<span class="token punctuation">;</span>
	son1 obj<span class="token punctuation">;</span>
	p<span class="token operator">=</span><span class="token operator">&amp;</span>obj<span class="token punctuation">;</span>
	p<span class="token operator">-></span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="final" tabindex="-1"><a class="header-anchor" href="#final" aria-hidden="true">#</a> final</h2>
<p>权限掠夺者：1.掠夺函数权限：阻止重写 2.掠夺类的权限：阻止派生</p>
<p>1.在函数的后面加上<code v-pre>final</code>关键字，该函数的子类就不允许重写函数了 2.在类的后面加上<code v-pre>final</code>关键字，该类就不能作为父类</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">classname</span> <span class="token keyword">final</span><span class="token punctuation">{</span><span class="token comment">//类后加final就不能有子类</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">classname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
classname<span class="token double-colon punctuation">::</span><span class="token function">classname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">final</span><span class="token punctuation">;</span><span class="token comment">//函数后加final就不能重写（能重写的函数类型是virtual</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> father<span class="token double-colon punctuation">::</span><span class="token function">fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
father<span class="token double-colon punctuation">::</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">son</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
son<span class="token double-colon punctuation">::</span><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符重载" tabindex="-1"><a class="header-anchor" href="#运算符重载" aria-hidden="true">#</a> 运算符重载</h2>
<p>重载概念：重新定义运算符的运算规则</p>
<p>重载函数语法:<code v-pre>返回值类型 operator运算符名称（形参列表）{}</code></p>
<p>区分自增运算符的前置形式和后置形式：后置比前置多加了一个int类型的参数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//实现复数的加减</span>
<span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">double</span> aa<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token keyword">double</span> bb<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">void</span> <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
		<span class="token comment">//重载运算符的函数</span>
		myclass <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span>myclass other<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//在函数内部已经有一个对象了，用this指针访问，所以我们再传一个对象就可以了。并且这个this指针是运算符左边的对象调用的，参数是运算符右边的对象</span>
			myclass obj<span class="token punctuation">;</span>
			obj<span class="token punctuation">.</span>a <span class="token operator">=</span>a <span class="token operator">+</span>other<span class="token punctuation">.</span>a <span class="token punctuation">;</span>
			obj<span class="token punctuation">.</span>b <span class="token operator">=</span>b <span class="token operator">+</span>other<span class="token punctuation">.</span>b <span class="token punctuation">;</span>
			<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
	<span class="token keyword">private</span><span class="token operator">:</span>
		<span class="token keyword">double</span> a<span class="token punctuation">;</span>
		<span class="token keyword">double</span> b<span class="token punctuation">;</span>
		
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">double</span> aa<span class="token punctuation">,</span><span class="token keyword">double</span> bb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token operator">=</span>aa<span class="token punctuation">;</span>
	b<span class="token operator">=</span>bb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> myclass<span class="token double-colon punctuation">::</span><span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span><span class="token string">"("</span><span class="token operator">&lt;&lt;</span>a<span class="token operator">&lt;&lt;</span><span class="token string">"+"</span><span class="token operator">&lt;&lt;</span>b<span class="token operator">&lt;&lt;</span><span class="token string">"i)"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass <span class="token function">obj1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	myclass <span class="token function">obj2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	myclass obj3<span class="token operator">=</span>obj1<span class="token operator">+</span>obj2<span class="token punctuation">;</span>
	obj3<span class="token punctuation">.</span><span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以定义全局运算符重载<br>
正常写函数主体，不过要写两个参数，当在类中要用到私有值的时候需要在类里声明函数是友元函数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">friend</span> A<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span>A<span class="token operator">&amp;</span> obj1<span class="token punctuation">,</span>A<span class="token operator">&amp;</span> pbj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//			A c;</span>
<span class="token comment">//			c.a =a+obj.a ;</span>
<span class="token comment">//			c.b =b+obj.b ;</span>
<span class="token comment">//			return c;</span>
<span class="token comment">//		}</span>

	<span class="token keyword">private</span><span class="token operator">:</span>
		<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

A<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span>A <span class="token operator">&amp;</span>obj1<span class="token punctuation">,</span>A<span class="token operator">&amp;</span> obj2<span class="token punctuation">)</span><span class="token punctuation">{</span>
	A obj<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>a <span class="token operator">=</span>obj1<span class="token punctuation">.</span>a <span class="token operator">+</span>obj2<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span>b <span class="token operator">=</span>obj1<span class="token punctuation">.</span>b <span class="token operator">+</span>obj2<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
	<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h3>
<p>并不是所有运算符都可以重载</p>
<p>并不能改变运算符的优先级和结合性</p>
<p>重载不会改变运算符的用法</p>
<p>运算符重载函数不能有默认的参数</p>
<p>运算符重载函数可以作为类的成员函数，也可以作为全局函数</p>
<h3 id="重载输入输出" tabindex="-1"><a class="header-anchor" href="#重载输入输出" aria-hidden="true">#</a> 重载输入输出</h3>
<p>1.建议作为友元函数重载</p>
<p>2.istream：输入</p>
<p>3.ostream：输出</p>
<p>作用：当遇到不能直接输出的数据类型的时候重载输入输出就可以按照想要的方式输入输出</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">double</span> aa<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token keyword">double</span> bb<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">friend</span> istream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">>></span><span class="token punctuation">(</span>istream<span class="token operator">&amp;</span> in<span class="token punctuation">,</span>myclass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数需要访问类的私有数据，就加上友元</span>
		<span class="token keyword">friend</span> ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span>myclass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span><span class="token operator">:</span>
		<span class="token keyword">double</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myclass<span class="token double-colon punctuation">::</span><span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">double</span> aa<span class="token punctuation">,</span><span class="token keyword">double</span> bb<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">a</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">b</span><span class="token punctuation">(</span>bb<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

istream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">>></span><span class="token punctuation">(</span>istream<span class="token operator">&amp;</span> in<span class="token punctuation">,</span>myclass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	in<span class="token operator">>></span>obj<span class="token punctuation">.</span>a<span class="token operator">>></span>obj<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
	<span class="token keyword">return</span> in<span class="token punctuation">;</span><span class="token comment">//返回in</span>
<span class="token punctuation">}</span>
ostream<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>ostream<span class="token operator">&amp;</span> out<span class="token punctuation">,</span>myclass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	out<span class="token operator">&lt;&lt;</span><span class="token string">"("</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>a<span class="token operator">&lt;&lt;</span><span class="token string">"+"</span><span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>b<span class="token operator">&lt;&lt;</span><span class="token string">"i"</span><span class="token operator">&lt;&lt;</span><span class="token string">")"</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass obj<span class="token punctuation">;</span>
	cin<span class="token operator">>></span>obj<span class="token punctuation">;</span><span class="token comment">//重载之后可以直接读入不同类的数据</span>
	cout<span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2>
<p>模板分类：函数模板，类模板</p>
<h3 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板" aria-hidden="true">#</a> 函数模板</h3>
<p>函数模板是函数的语法</p>
<p><code v-pre>template &lt;typename 类型名1，typename 类型名2&gt;</code>是模板关键字</p>
<p>函数模板和普通模板对比：函数模板和普通函数都可以重载 如果模板函数和普通函数重载的话，会先调用普通函数</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//函数模板语法</span>
<span class="token comment">//template &lt;typename 类型1,typename 类型2...typename 类型n></span>
<span class="token comment">//返回值类型 函数名（形参列表）</span>
<span class="token comment">//{</span>
<span class="token comment">//	函数体</span>
<span class="token comment">// } </span>

<span class="token comment">//调用：函数名&lt;传入类型（可省略）>(实参表)</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T1</span><span class="token punctuation">,</span><span class="token keyword">typename</span> <span class="token class-name">T2</span><span class="token operator">></span>
T1 <span class="token function">add</span><span class="token punctuation">(</span>T1 a<span class="token punctuation">,</span>T2 b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">t1</span><span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span>t1 a<span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span>a<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">test</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> op<span class="token operator">=</span><span class="token generic-function"><span class="token function">add</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">double</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span><span class="token number">8.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//如果想先确定传入数据的类型，那么就将类型写在传入参数的前面</span>
	cout<span class="token operator">&lt;&lt;</span>op<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数重载</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">num</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token keyword">int</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">t</span><span class="token operator">></span>
<span class="token keyword">bool</span> <span class="token function">func</span><span class="token punctuation">(</span>t a<span class="token punctuation">,</span>t b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span>b<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token keyword">bool</span> <span class="token generic-function"><span class="token function">func</span><span class="token generic class-name"><span class="token operator">&lt;</span>myclass<span class="token operator">></span></span></span><span class="token punctuation">(</span>myclass <span class="token operator">&amp;</span>a<span class="token punctuation">,</span>myclass <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>num <span class="token operator">==</span>b<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">"true"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span><span class="token string">"false"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	myclass obj1<span class="token punctuation">,</span>obj2<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">"true"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span><span class="token string">"false"</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类模板" tabindex="-1"><a class="header-anchor" href="#类模板" aria-hidden="true">#</a> 类模板</h3>
<p>定义：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">//template &lt;class 类型名1,class 类型名2...></span>
<span class="token comment">//class 模板类名</span>
<span class="token comment">//{</span>
<span class="token comment">//	成员;</span>
<span class="token comment">//}; </span>
<span class="token comment">//声明类：类名&lt;类型名1，类型名2...> 对象名（实参列表）</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">t1</span><span class="token punctuation">,</span><span class="token keyword">class</span> <span class="token class-name">t2</span><span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span>t1 n<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>t2 v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">num</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">val</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		t1 <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		t2 <span class="token function">getval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">void</span> <span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"val=="</span><span class="token operator">&lt;&lt;</span>val<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">private</span><span class="token operator">:</span>
		t1 num<span class="token punctuation">;</span>
		t2 val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">obj</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数调用类模板的方法</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">t1</span><span class="token punctuation">,</span><span class="token keyword">class</span> <span class="token class-name">t2</span><span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">myclass</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">myclass</span><span class="token punctuation">(</span>t1 n<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>t2 v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">num</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">val</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		t1 <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		t2 <span class="token function">getval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">void</span> <span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"num=="</span><span class="token operator">&lt;&lt;</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
			cout<span class="token operator">&lt;&lt;</span><span class="token string">"val=="</span><span class="token operator">&lt;&lt;</span>val<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">private</span><span class="token operator">:</span>
		t1 num<span class="token punctuation">;</span>
		t2 val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//直接写，需要明确类模板的类型</span>
<span class="token keyword">void</span> <span class="token function">testf</span><span class="token punctuation">(</span>myclass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span><span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	obj<span class="token punctuation">.</span><span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//通用模板1</span>
<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">tt1</span><span class="token punctuation">,</span><span class="token keyword">typename</span> <span class="token class-name">tt2</span><span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">testf2</span><span class="token punctuation">(</span>myclass<span class="token operator">&lt;</span>tt1<span class="token punctuation">,</span>tt2<span class="token operator">></span><span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	obj<span class="token punctuation">.</span><span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//通用模板2，但是需要知道类的作用</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">t</span><span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">testf3</span><span class="token punctuation">(</span>t<span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	obj<span class="token punctuation">.</span><span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myclass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">obj</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">showdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
	<span class="token function">testf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//也可以在形参前加上类型&lt;></span>
	<span class="token function">testf3</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">testf2</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类模板和继承</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">ftype</span><span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
	ftype fval<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//普通子类继承</span>
<span class="token keyword">class</span> <span class="token class-name">son</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token keyword">int</span> sval<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//模板子类继承</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">stype1</span><span class="token punctuation">,</span><span class="token keyword">class</span> <span class="token class-name">stype2</span><span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">son1</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">father</span><span class="token operator">&lt;</span><span class="token class-name">stype1</span><span class="token operator">></span></span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		stype2 sval<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	son1<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">double</span><span class="token operator">></span> obj<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类模板与友元函数" tabindex="-1"><a class="header-anchor" href="#类模板与友元函数" aria-hidden="true">#</a> 类模板与友元函数</h4>
<p>当类模板需要友元函数的时候，尽量把友元函数写在类里。如果想写在外面，那么需要在类里声明友元函数之后，在友元函数的上面再声明一下函数，在函数上面再声明一下类</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">></span><span class="token comment">//在函数声明之前再声明一下模板类</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">;</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">show2</span><span class="token punctuation">(</span>A<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">></span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
		<span class="token function">A</span><span class="token punctuation">(</span>T t<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">num</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">show1</span><span class="token punctuation">(</span>A<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//尽量在类里实现</span>
			cout<span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>num <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token generic-function"><span class="token function">show2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>A<span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//否则在类里声明，并且在类之前声明这个函数</span>
	<span class="token keyword">private</span><span class="token operator">:</span>
		T num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">show2</span><span class="token punctuation">(</span>A<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token operator">&amp;</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	cout<span class="token operator">&lt;&lt;</span>obj<span class="token punctuation">.</span>num<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	A<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> obj<span class="token punctuation">;</span>
	<span class="token function">show1</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show2</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常处理机制" tabindex="-1"><a class="header-anchor" href="#异常处理机制" aria-hidden="true">#</a> 异常处理机制</h2>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">throw</span>：抛出异常
<span class="token keyword">try</span>：尝试可能有异常的代码
<span class="token keyword">catch</span>：处理异常

<span class="token keyword">try</span><span class="token punctuation">{</span>
	直接或间接有<span class="token keyword">try</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span><span class="token punctuation">(</span>接收异常<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>



<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//有异常情况->打报告</span>
		<span class="token comment">//throw抛出异常信息：支持多种类型，可以是字符串，数字等</span>
		<span class="token keyword">throw</span> <span class="token string">"error"</span><span class="token punctuation">;</span>
<span class="token comment">//		throw 1;</span>
		<span class="token comment">//如果抛出异常，后面的语句不会执行</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> a<span class="token operator">/</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">try</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//可以用字符串接收</span>
		cout<span class="token operator">&lt;&lt;</span>str<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token comment">//	catch(int num){</span>
<span class="token comment">//		cout&lt;&lt;num&lt;&lt;endl;</span>
<span class="token comment">//	}	</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件流" tabindex="-1"><a class="header-anchor" href="#文件流" aria-hidden="true">#</a> 文件流</h2>
<p><code v-pre>fstream</code>是文件操作类，头文件是<code v-pre>&lt;fstream&gt;</code></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231121110907.png" alt="20231121110907" loading="lazy"></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fstream obj<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"text.txt"</span><span class="token punctuation">,</span>ios<span class="token double-colon punctuation">::</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打开文件,""里是地址,以文件的形式写入,用out的话如果文件不存在会新建</span>
	obj<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token char">'s'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//写入S</span>
	obj<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//关闭文件，写完之后必须要关</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"text.txt"</span><span class="token punctuation">,</span>ios<span class="token double-colon punctuation">::</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//换种方式打开</span>
	obj<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//接收ch,接收的是最后的</span>
	cout<span class="token operator">&lt;&lt;</span>ch<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//操作完关掉</span>
	
<span class="token comment">//	obj.is_open();//判断是否成功打开文件</span>
<span class="token comment">//	obj.eof();//判断是否成功打开文件尾</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fstream obj<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"text.txt"</span><span class="token punctuation">,</span>ios<span class="token double-colon punctuation">::</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>num<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//write需要写入的类型是const char *类型，所以我们可以转一下类型再写入</span>
	obj<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"text.txt"</span><span class="token punctuation">,</span>ios<span class="token double-colon punctuation">::</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> val<span class="token punctuation">;</span>
	obj<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>val<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//读取</span>
	obj<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


