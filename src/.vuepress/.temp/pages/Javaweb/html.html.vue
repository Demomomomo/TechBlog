<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
<p>1.新建一个文本文件，后缀名改为<code v-pre>.html  </code></p>
<p>2.编写<code v-pre>HTML</code>结构标签</p>
<p>3.在<code v-pre>&lt;body&gt;</code>中定义文字</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>//上方标题内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">></span></span>//字体颜色
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础标签" tabindex="-1"><a class="header-anchor" href="#基础标签" aria-hidden="true">#</a> 基础标签</h2>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230516212513.png" alt="20230516212513" loading="lazy"></p>
<h2 id="图片-音频-视频标签" tabindex="-1"><a class="header-anchor" href="#图片-音频-视频标签" aria-hidden="true">#</a> 图片，音频，视频标签</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--定义图片--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片地址<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--src:规定显示图像的地址 height定义图像的高度 width定义图像的宽度--></span>
<span class="token comment">&lt;!--定义音频--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>音频地址<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--src:定义音频的地址 controls：显示播放控件--></span>
<span class="token comment">&lt;!--定义视频--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>视频地址<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--src：规定视频的地址 controls：显示播放控件--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="超链接标签和列表标签" tabindex="-1"><a class="header-anchor" href="#超链接标签和列表标签" aria-hidden="true">#</a> 超链接标签和列表标签</h2>
<h3 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>网址<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>设置超链接的页面跳转<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--设置_self是默认值，在当前页面打开，_blank是在空白页面打开--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--有序列表，会自动给每个列表项排序--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--定义有序列表,type里设置排序的方式，如从A开始排序，或者从1开始排序，默认从1开始--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--定义列表项--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--无序列表，在每个列表项前面有一个符号--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--定义无序列表，type设置项目符号，如circle表示符号是圆，默认是黑点--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>字段3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230522185314.png" alt="20230522185314" loading="lazy"></p>
<h2 id="表格和布局" tabindex="-1"><a class="header-anchor" href="#表格和布局" aria-hidden="true">#</a> 表格和布局</h2>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>
table:定义表格
        border：规定表格边框的宽度
        width：定义表格的宽度
        cellspacing：规定单元格之间的空白

tr：定义行
        align：定义内容对齐样式

th：定义表头

td：定义单元格
        rowspa：定义单元格可横跨的行数
        colspan：定义单元格可横跨的列数


       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>编号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>班级<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>//这行里的所有单元格中的字居中
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">rowspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>//单元格横跨两行纵跨一列
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>zxh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>08<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>zyz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>

       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230522190608.png" alt="20230522190608" loading="lazy"></p>
<h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>块级标签，会占满一整行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>行内标签，不会占满一整行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2>
<p>表单：在网页中主要负责数据采集功能，使用<code v-pre>&lt;form&gt;</code>标签定义表单</p>
<p>表元素：不同类型的<code v-pre>input</code>元素，下拉列表，文本域</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span> 定义表单
    action：规定当提交表单时向何处发送表单数据，当为"#"的时候，表名将表单提交到当前的html的页面当中
    method：规定用于发送表单数据的方式
        get：默认值，浏览器会将数据直接附在表单的action URL之后，大小有限制
        post：浏览器会将数据放到http请求协议的请求体中，大小无限制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单项" tabindex="-1"><a class="header-anchor" href="#表单项" aria-hidden="true">#</a> 表单项</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">></span></span> 定义表单项，通过type属性控制输入形式，当type为submit的时候是提交按钮，表单项要想被提交必须指定其name属性  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>为表单项定义标注，用for和表单项的id联系，当点到标注时相联系的表单项的光标会显示  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span>定义下拉列表，并且需要定义上交的name <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>定义下拉列表的列表项，需要定义选项的value
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span class="token punctuation">></span></span>定义文本域，需要定义上交的name，可以设置文本域的行数：cols 和列数：rows
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>input</code>的<code v-pre>type</code>属性值：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230528215850.png" height="300"></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>submit:定义提交按钮，value定义按钮的字段名称
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>免费注册<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--按钮显示为免费注册的提交按钮--></span>

reset:重置按钮，同样用value来定义字段文字

button：按钮，用value来定义字段文字

radio:定义单选框的时候，用name来将单选的几个选项联系起来，相同的name的单选项只能选其中一个。用value定义选择的选项的值。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女
    <span class="token comment">&lt;!--按钮为男女的单选按钮--></span>

checkbox:定义复选框，和单选框同理，用name定义同一类复选框的名字，value定义每个选项交上去的值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架标签" tabindex="-1"><a class="header-anchor" href="#框架标签" aria-hidden="true">#</a> 框架标签</h2>
<p>用<code v-pre>&lt;frameset&gt;</code>定义框架标签，框架标签可以将几个页面显示在一个浏览器标签中</p>
<p>直接在<code v-pre>&lt;html&gt;</code>标签下定义,不能再设置<code v-pre>&lt;head&gt;</code>和<code v-pre>&lt;body&gt;</code>标签了</p>
<p>设有三个html文件，分别为<code v-pre>op1.html</code>和<code v-pre>op2.html</code>和<code v-pre>op3.html</code></p>
<p>三个页面的样式为这样：<br>
op1:<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203353.png" width="200"></p>
<p>op2:<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203407.png" width="200"><br>
op3:<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203418.png" width="200"></p>
<p>想将这三个页面按顺序竖直放置，那么代码为：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20%,50%,20%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C:/Users/Demo/Desktop/op1.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C:/Users/Demo/Desktop/op2.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C:/Users/Demo/Desktop/op3.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的效果为：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203855.png" width="400"></p>
<p>按水平放置就将<code v-pre>cols</code>改为<code v-pre>rows</code>即可</p>
<p>效果图为：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529204347.png" width="400"></p>
<p>此时，两两个框中间的边框用户是可以拖动来改变他们的大小的，为了避免这种情况，在<code v-pre>&lt;frame&gt;</code>标签中加入<code v-pre>noresize=&quot;noresize&quot;</code></p>
<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1>
<p>CSS是一门语言，用于控制页面表现</p>
<h2 id="css导入方式" tabindex="-1"><a class="header-anchor" href="#css导入方式" aria-hidden="true">#</a> CSS导入方式</h2>
<p>1.内联样式：在标签内部使用style属性，属性值是css属性键值对</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>hello css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.内部样式：定义style标签，在标签内部定义css样式</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.外部样式:定义link标签，引入外部的css文件</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--href指定css文件，rel指定stylesheet表明是css的文件--></span>

demo.css:  
div{
    color:red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css选择器" tabindex="-1"><a class="header-anchor" href="#css选择器" aria-hidden="true">#</a> CSS选择器</h2>
<p>选择器是选取需设置样式的元素（标签）</p>
<p>分类：</p>
<p>1.元素(标签)选择器</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>元素名称{
    键值对;
}

div{
    color:red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.id选择器<br>
id选择器只能选择一个元素</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>#id的属性值{
    键值对;
}

#op{
    color:red;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>op<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.类选择器<br>
类选择器可以选择多个元素</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>.class的属性值{
    键值对;
}

.cls{
    color:red;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如如下代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
            <span class="token selector">div</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#d2</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.op</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span>blueviolet<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>div1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>op<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>op<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529104055.png" alt="20230529104055" loading="lazy"></p>
<h2 id="css属性" tabindex="-1"><a class="header-anchor" href="#css属性" aria-hidden="true">#</a> CSS属性</h2>
<p><code v-pre>style=&quot;display:none&quot;</code>不显示块中的内容<br>
<code v-pre>style=&quot;display:</code>显示块中的内容</p>
<p><a href="https://www.w3school.com.cn/css/index.asp">点击查看</a></p>
<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1>
<p>用来控制网页行为的，使网页可交互</p>
<h2 id="引入方式" tabindex="-1"><a class="header-anchor" href="#引入方式" aria-hidden="true">#</a> 引入方式</h2>
<h3 id="_1-内部脚本-将js代码定义在html页面中" tabindex="-1"><a class="header-anchor" href="#_1-内部脚本-将js代码定义在html页面中" aria-hidden="true">#</a> 1.内部脚本：将js代码定义在html页面中</h3>
<p>在html中，JavaScript代码必须位于<code v-pre>&lt;script&gt;</code>与<code v-pre>&lt;/script&gt;</code>之间</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--alert表示弹出警告 框，内容是hello js~--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<p>1.在html文档中可以在任意地方放置任意数量的<code v-pre>&lt;script&gt;</code></p>
<p>2.一般把脚本置于<code v-pre>&lt;body&gt;</code>元素的底部，可改善显示速度，因为脚本执行会脱慢显示</p>
<h3 id="_2-外部脚本-将js代码定义在外部js文件中-然后引入到html文件中" tabindex="-1"><a class="header-anchor" href="#_2-外部脚本-将js代码定义在外部js文件中-然后引入到html文件中" aria-hidden="true">#</a> 2.外部脚本：将js代码定义在外部js文件中，然后引入到html文件中</h3>
<p>外部文件：<code v-pre>demo.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入外部js文件：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/demo.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p>
<p>1.外部脚本不能包含<code v-pre>&lt;script&gt;</code>标签</p>
<p>2.<code v-pre>&lt;script&gt;</code>标签不能自闭合</p>
<h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2>
<h3 id="书写语法" tabindex="-1"><a class="header-anchor" href="#书写语法" aria-hidden="true">#</a> 书写语法</h3>
<p>1.区分大小写</p>
<p>2.每行结尾的分号可有可无</p>
<p>3.注释：<br>
单行注释：//注释内容<br>
多行注释：/<em>注释内容</em>/</p>
<p>4.大括号表示代码块</p>
<h3 id="输出语句" tabindex="-1"><a class="header-anchor" href="#输出语句" aria-hidden="true">#</a> 输出语句</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"弹出警告框"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"写入html输出"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//可以直接在页面看到</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"写入浏览器控制台"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在开发者工具中点控制台能看到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p>JavaScript中用关键字<code v-pre>var</code>来声明变量</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> test<span class="token operator">=</span><span class="token number">250</span><span class="token punctuation">;</span>
text<span class="token operator">=</span><span class="token string">"zyz"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript是一门弱类型的语言，变量可以存放不同类型的值</p>
<p>变量名遵循如下规则：</p>
<p>1.组成字母可以是任何字母，数字，下划线，或美元符号</p>
<p>2.数字不能开头</p>
<p><code v-pre>var</code>是一个全局变量，也可以重复定义</p>
<p><code v-pre>let</code>也可以用来定义变量，但是定义的变量只在所在代码块内有效，且不允许重复声明</p>
<p><code v-pre>const</code>用来定义一个只读的变量，他的值不能改变</p>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p>类型分为原始类型和引用类型</p>
<p>五种原始类型：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">number</span><span class="token operator">:</span>数字（整数，小数）
<span class="token literal-property property">string</span><span class="token operator">:</span>字符，字符串，单双引皆可
<span class="token literal-property property">boolean</span><span class="token operator">:</span>布尔，<span class="token boolean">true</span>，<span class="token boolean">false</span>
<span class="token keyword">null</span><span class="token operator">:</span>对象为空
<span class="token literal-property property">undefine</span><span class="token operator">:</span>当声明的变量未初始化时，该变量的默认值是<span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>typeof</code>运算符可以获取数据类型</p>
<h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3>
<p>用<code v-pre>function</code>定义函数类型，参数不需要写名称，返回时直接<code v-pre>return</code>返回到需要的值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>方法<span class="token number">1</span>：
<span class="token keyword">function</span> 名称<span class="token punctuation">{</span>
    代码段
    <span class="token keyword">return</span> 返回值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

方法<span class="token number">2</span>：
<span class="token keyword">var</span> <span class="token function-variable function">名称</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">{</span>
    代码段
    <span class="token keyword">return</span> 返回值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：<br>
直接调用名称。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> result<span class="token operator">=</span><span class="token function">函数名称</span><span class="token punctuation">(</span>实际参数<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际参数的个数可以和定义的函数的形参个数不同：</p>
<p>当个数大于形参时，函数只接收形参那么多个数</p>
<p>当个数小于形参时，剩下的没有接收的形参的值为<code v-pre>NAN</code>，加上其他的参数结果还是<code v-pre>NAN</code></p>
<p>实现一个<code v-pre>a+b</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result<span class="token operator">=</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2>
<h3 id="数组对象" tabindex="-1"><a class="header-anchor" href="#数组对象" aria-hidden="true">#</a> 数组对象</h3>
<p><code v-pre>Array</code>是数组对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义：</span>
<span class="token keyword">var</span> 变量名<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>元素列表<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//方式1</span>
<span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> 变量名<span class="token operator">=</span><span class="token punctuation">[</span>元素列表<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//方式2</span>
<span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">//访问</span>
arr<span class="token punctuation">[</span>索引<span class="token punctuation">]</span><span class="token operator">=</span>值<span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组是变长变类型，没有定义的数的值是undefined，输出整个字符的时候没有值的用空字符代替</p>
<p>属性：</p>
<p><code v-pre>length</code>是是数组中元素的个数</p>
<p><code v-pre>push</code>：添加方法</p>
<p><code v-pre>splice</code>:删除元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在数组的最后一个数后添加一个10</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//表示从下标为0的位置开始删，删除1个元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一些其他的方法如下：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230530111656.png" alt="20230530111656" loading="lazy"></p>
<h3 id="字符串对象" tabindex="-1"><a class="header-anchor" href="#字符串对象" aria-hidden="true">#</a> 字符串对象</h3>
<p><code v-pre>String</code>是字符串对象</p>
<p>定义：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//方式1</span>
<span class="token keyword">var</span> str<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> 变量名 <span class="token operator">=</span>s<span class="token punctuation">;</span><span class="token comment">//方式2</span>
<span class="token keyword">var</span> str<span class="token operator">=</span><span class="token string">"hello"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性：</p>
<p>length：返回字符串的长度</p>
<p>trim：去除字符串前后两端的空白字符</p>
<h3 id="自定义对象" tabindex="-1"><a class="header-anchor" href="#自定义对象" aria-hidden="true">#</a> 自定义对象</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> 对象名称<span class="token operator">=</span><span class="token punctuation">{</span>
    属性名称<span class="token number">1</span><span class="token operator">:</span>属性值<span class="token number">1</span><span class="token punctuation">,</span>
    属性名称<span class="token number">2</span><span class="token operator">:</span>属性值<span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token function-variable function">函数名称</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">形参列表</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        代码段
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> person<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">=</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token function-variable function">eat</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"干饭"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

访问：  

<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h3>
<p>定义：浏览器对象模型</p>
<h4 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h4>
<p>浏览器窗口对象</p>
<p>获取：直接用window，其中window可省略</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>alert：弹出只有确认按钮的窗口
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"弹出只有确认的窗口"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

confirm：弹出有确认和取消按钮的窗口，有返回值，当选择确认的时候返回<span class="token boolean">true</span>，否则返回<span class="token boolean">false</span>
<span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">"弹出有确认和取消按钮的窗口"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token literal-property property">setTimeout</span><span class="token operator">:</span>在一定的时间间隔后去执行语句，只执行一次
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">,</span>毫秒<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"间隔一定时间弹出一次"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token literal-property property">setInterval</span><span class="token operator">:</span>在一定的时间间隔后去执行语句，循环执行
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"间隔一定时间循环弹出"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：</p>
<p>定时切换图片：</p>
<p>需求：每隔一秒，灯泡图片切换一次状态</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//设on()函数是控制开灯的函数，off()函数是控制关灯的函数</span>
<span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h4>
<p>历史记录</p>
<p>获取：使用<code v-pre>window.history</code>获取，window.可以省略</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//方法：</span>
<span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>加载history列表中的前一个<span class="token constant">URL</span>
<span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>加载history列表中的下一个<span class="token constant">URL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4>
<p>地址栏对象</p>
<p>获取：使用<code v-pre>windows.location</code>获取，其中<code v-pre>window.</code>可以忽略</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>windows<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
location<span class="token punctuation">.</span><span class="token function">方法</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//属性： </span>
<span class="token literal-property property">href</span><span class="token operator">:</span>设置或返回完整的<span class="token constant">URL</span>
location<span class="token punctuation">.</span>href<span class="token operator">=</span><span class="token string">"https://demooo.top/"</span><span class="token punctuation">;</span><span class="token comment">//跳转到指定网页的地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-1" tabindex="-1"><a class="header-anchor" href="#dom-1" aria-hidden="true">#</a> DOM</h3>
<p>文档对象模型</p>
<p>JavaScript通过DOM，能对HTML进行操作：</p>
<p>1.改变html元素的内容<br>
2.改变html元素的样式<br>
3.对html DOM事件做出反应<br>
4.添加和删除html元素</p>
<h4 id="element对象" tabindex="-1"><a class="header-anchor" href="#element对象" aria-hidden="true">#</a> Element对象</h4>
<p>元素对象</p>
<p>获取：使用Document对象的方法来获取</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">.</span>getElementById<span class="token operator">:</span>根据id属性值获取，返回一个Element对象
<span class="token number">2</span><span class="token punctuation">.</span>getElementsByTagName<span class="token operator">:</span>根据标签名获取，返回Element对象数组
<span class="token number">3</span><span class="token punctuation">.</span>getElementsByName<span class="token operator">:</span>根据name属性值获取，返回ELement对象数组
<span class="token number">4</span><span class="token punctuation">.</span>getElementsByClassName<span class="token operator">:</span>根据<span class="token keyword">class</span>属性值获取，返回ELement对象数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Element的使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改图片内容</span>
<span class="token keyword">var</span> img<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"对应的id名称"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"新的图片的地址"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件监听" tabindex="-1"><a class="header-anchor" href="#事件监听" aria-hidden="true">#</a> 事件监听</h3>
<p>事件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">onblur</span><span class="token operator">:</span>元素失去焦点
<span class="token literal-property property">onfocus</span><span class="token operator">:</span>元素获得焦点
<span class="token literal-property property">onchange</span><span class="token operator">:</span>内容被改变
<span class="token literal-property property">onclick</span><span class="token operator">:</span>被点击
<span class="token literal-property property">onmouseover</span><span class="token operator">:</span>鼠标移到某个元素之上
<span class="token literal-property property">onreset</span><span class="token operator">:</span>重置按钮被点击
<span class="token literal-property property">onselect</span><span class="token operator">:</span>文本被选中
<span class="token literal-property property">onsubmit</span><span class="token operator">:</span>确认按钮被点击
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件监听：JavaScript可以在事件被侦测到的时候执行代码</p>
<h4 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h4>
<p>方式一：通过html标签中的事件属性进行绑定</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> onclick<span class="token operator">=</span><span class="token string">'on()'</span><span class="token operator">></span>
<span class="token keyword">function</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：通过DOM元素属性判定</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//绑定点击</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> id<span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"我被点了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证" aria-hidden="true">#</a> 表单验证</h5>
<p>1.当输入框失去焦点的时候，判断输入框是否符合要求
步骤：<br>
1.获取输入框</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> op<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"id名称"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.绑定事件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//假设事件为失去焦点</span>
op<span class="token punctuation">.</span><span class="token function-variable function">onblur</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.获取输入框的内容</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//假设事件为失去焦点</span>
op<span class="token punctuation">.</span><span class="token function-variable function">onblur</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token function">函数名称</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取输入内容并且去掉首尾的空格</span>
    <span class="token keyword">var</span> name<span class="token operator">=</span>op<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.判断用户名是否输入规则</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//假设限制是长度6~12位，更复杂的判断用正则表达式</span>
op<span class="token punctuation">.</span>onblur<span class="token operator">=</span>函数名称<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">函数名称</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取输入内容并且去掉首尾的空格</span>
    <span class="token keyword">var</span> name<span class="token operator">=</span>op<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">12</span><span class="token operator">||</span>name<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//不符合要求，将语句显示出来</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"隐藏的话的id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">//必要的时候设置返回值</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"隐藏的话的id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">'none'</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.当点击提交按钮时，判断所有的输入框内容是否符合要求，不符合则阻止表单提交</p>
<p>1.获取表单对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> op2<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"表单的id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.为表单对象绑定<code v-pre>onsubmit</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>op2<span class="token punctuation">.</span>onsubmit<span class="token operator">=</span>函数名称<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">函数名称</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.验证所有输入框是否满足要求，如果有一项不符合就返回false</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>op2<span class="token punctuation">.</span>onsubmit<span class="token operator">=</span>函数名称<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">函数名称</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">函数1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">函数2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3>
<p>正则表达式定义了字符串组成的规则</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//直接量：注意不加引号</span>
<span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\w{6,12}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">//创建RegExp对象</span>
<span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"^\\w{6,12}$"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//方法</span>
<span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token operator">:</span>判断指定字符是否符合规则，返回<span class="token boolean">true</span>或<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230531143113.png" alt="20230531143113" loading="lazy"></p>
</div></template>


