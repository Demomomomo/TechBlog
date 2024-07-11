<template><div><h2 id="第一章-android入门" tabindex="-1"><a class="header-anchor" href="#第一章-android入门" aria-hidden="true">#</a> 第一章：android入门</h2>
<p>属于Google发布Android源代码的授权方式是Apache开源许可证</p>
<p>短信程序与联系人程序属于应用程序层 音频驱动属于Linux内核层</p>
<h3 id="图片资源" tabindex="-1"><a class="header-anchor" href="#图片资源" aria-hidden="true">#</a> 图片资源</h3>
<p>扩展名为：<code v-pre>.png,.jpg,.gif,.9.png</code>等的文件</p>
<p>图片资源都在文件夹app的src下的res里</p>
<p>图片资源分类：</p>
<p>1.应用图标资源：在mipmap里</p>
<p>2.界面中使用的图片资源：在drawable里</p>
<p>调用图片资源的方法：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621190617.png" alt="20230621190617" loading="lazy"></p>
<h3 id="主题和样式的资源" tabindex="-1"><a class="header-anchor" href="#主题和样式的资源" aria-hidden="true">#</a> 主题和样式的资源</h3>
<p>主题是包含一种或多种的格式化属性集合，在程序中调用主题资源可改变窗体的样式，对整个应用或某个Activity存在全局性影响。</p>
<p>定义位置：res/values目录下的themes.xml中</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--用来定义主题，属性name用来定义主题的名称，parent来定义副主题--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--用于设定主题的样式，属性name设置样式名称--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置view的具体样式：定义位置在res/values目录下的theme.xml文件中，然后在activity_main.xml里的TextView中设置style=&quot;@style/样式名称即可&quot;</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--用来设置样式--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--设置控件的样式--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布局资源" tabindex="-1"><a class="header-anchor" href="#布局资源" aria-hidden="true">#</a> 布局资源</h3>
<p>布局资源常用于搭建程序中的各个界面</p>
<p>定义位置：res/layout文件夹中</p>
<p>调用方式：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621220900.png" alt="20230621220900" loading="lazy"></p>
<h3 id="字符串资源" tabindex="-1"><a class="header-anchor" href="#字符串资源" aria-hidden="true">#</a> 字符串资源</h3>
<p>位置：res/values/文件夹的strings.xml中</p>
<p>编写字符串资源：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621221659.png" alt="20230621221659" loading="lazy"></p>
<p>调用资源：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621221818.png" alt="20230621221818" loading="lazy"></p>
<h3 id="颜色资源" tabindex="-1"><a class="header-anchor" href="#颜色资源" aria-hidden="true">#</a> 颜色资源</h3>
<p>定义位置：res/values/文件夹的colors.xml文件中</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621231723.png" alt="20230621231723" loading="lazy"></p>
<p>调用颜色资源：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621231841.png" alt="20230621231841" loading="lazy"></p>
<p>定义颜色值：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232338.png" alt="20230621232338" loading="lazy"></p>
<p>例子：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232409.png" alt="20230621232409" loading="lazy"></p>
<h3 id="尺寸资源" tabindex="-1"><a class="header-anchor" href="#尺寸资源" aria-hidden="true">#</a> 尺寸资源</h3>
<p>尺寸资源：例如view的宽高值</p>
<p>定义位置：res/values/文件夹里的dimens.xml中</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232800.png" alt="20230621232800" loading="lazy"></p>
<p>调用方法：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>在java代码里进行调用：
getResources().getDimension(R.dimen.名称);
在xml里进行调用：
@dimen/名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h3>
<p>单元测试是指在应用程序开发过程中对最小的功能模块进行测试</p>
<p>分类：</p>
<p>1.android单元测试：速度比较慢，ExampleInstrumentedTest</p>
<p>2.junit单元测试：只适合java，ExampleUnitTest类</p>
<h3 id="logcat的使用" tabindex="-1"><a class="header-anchor" href="#logcat的使用" aria-hidden="true">#</a> LogCat的使用</h3>
<p>LogCat是android中的命令行工具，用于获取程序从启动到关闭的日志信息</p>
<p>Log类所输出的日志内容分六个级别：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621234444.png" alt="20230621234444" loading="lazy"></p>
<h2 id="第二章-android常见界面布局" tabindex="-1"><a class="header-anchor" href="#第二章-android常见界面布局" aria-hidden="true">#</a> 第二章 android常见界面布局</h2>
<p>在XML文件中编写布局:有效的将界面中布局的代码和Java代码隔离，使程序的结构更加清晰。</p>
<p>在Java代码中编写布局:在Android中所有布局和控件的对象都可以通过new关键字创建出来，将创建的View控件添加到ViewGroup布局中，从而实现View控件在布局界面中显示。</p>
<p>常见的界面布局：</p>
<p>线性布局，相对布局，帧布局，表格布局，约束布局</p>
<p>通用属性：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622114617.png" alt="20230622114617" loading="lazy"></p>
<h3 id="linearlayout线性布局" tabindex="-1"><a class="header-anchor" href="#linearlayout线性布局" aria-hidden="true">#</a> LinearLayout线性布局</h3>
<p>主要以水平或垂直方式来显示界面中的控件。当控件水平排列时，显示顺序依次为从左到右，当控件垂直排列时，显示顺序依次为从上到下。</p>
<p>设置水平布局：在activity.xml文件里，先将界面设置为水平：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622131256.png" alt="20230622131256" loading="lazy"></p>
<p>用属性orientation来设置vertical竖直，还是horizontal水平排列</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622131556.png" alt="20230622131556" loading="lazy"></p>
<h3 id="relativelayout相对布局" tabindex="-1"><a class="header-anchor" href="#relativelayout相对布局" aria-hidden="true">#</a> RelativeLayout相对布局</h3>
<p>相对布局是通过相对定位的方式指定子控件位置，即以其它控件或父容器为参照物，摆放控件位置</p>
<p>定义格式：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622133030.png" alt="20230622133030" loading="lazy"></p>
<p>属性：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622134901.png" alt="20230622134901" loading="lazy"></p>
<p>例子：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622140652.png" alt="20230622140652" loading="lazy"></p>
<p>效果图：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622140725.png" alt="20230622140725" loading="lazy"></p>
<h3 id="tablelayout表格布局" tabindex="-1"><a class="header-anchor" href="#tablelayout表格布局" aria-hidden="true">#</a> TableLayout表格布局</h3>
<p>采用行、列的形式来管理控件，它不需要明确声明包含多少行、多少列，而是通过在TableLayout布局中添加TableRow布局来控制表格的行数，通过在TableRow布局中添加控件来控制表格的列数。</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622141404.png" alt="20230622141404" loading="lazy"></p>
<p>属性：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622141525.png" alt="20230622141525" loading="lazy"></p>
<p>例如：实现下面的表格</p>
<p>三行三列，且第三列被拉伸</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622143352.png" alt="20230622143352" loading="lazy"></p>
<p>运行代码：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622143738.png" alt="20230622143738" loading="lazy"></p>
<h3 id="framelayout帧布局" tabindex="-1"><a class="header-anchor" href="#framelayout帧布局" aria-hidden="true">#</a> FrameLayout帧布局</h3>
<p>帧布局用于在屏幕上创建一块空白区域，添加到该区域中的每个子控件占一帧，这些帧会一个一个叠加在一起，后加入的控件会叠加在上一个控件上层显示</p>
<p>所有控件都默认显示在屏幕左上角。</p>
<p>定义格式：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622144128.png" alt="20230622144128" loading="lazy"></p>
<p>例如：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622145005.png" alt="20230622145005" loading="lazy"></p>
<p>效果图：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622145343.png" alt="20230622145343" loading="lazy"></p>
<h2 id="第三章android常见界面控件" tabindex="-1"><a class="header-anchor" href="#第三章android常见界面控件" aria-hidden="true">#</a> 第三章android常见界面控件</h2>
<h3 id="textview控件" tabindex="-1"><a class="header-anchor" href="#textview控件" aria-hidden="true">#</a> TextView控件</h3>
<p>显示文本信息</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622150130.png" alt="20230622150130" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151008.png" alt="20230622151008" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151058.png" alt="20230622151058" loading="lazy"></p>
<h3 id="edittext控件" tabindex="-1"><a class="header-anchor" href="#edittext控件" aria-hidden="true">#</a> EditText控件</h3>
<p>EditText表示编辑框，它是TextView的子类（可以使用TextView里的属性），用户可在此控件中输入信息。</p>
<p>属性:</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151232.png" alt="20230622151232" loading="lazy"></p>
<p>例子：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622153700.png" alt="20230622153700" loading="lazy"></p>
<p>代码：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622153630.png" alt="20230622153630" loading="lazy"></p>
<h3 id="button控件" tabindex="-1"><a class="header-anchor" href="#button控件" aria-hidden="true">#</a> Button控件</h3>
<p>Button控件表示按钮，它继承自TextView控件，既可以显示文本，又可以显示图片,同时也允许用户通过点击来执行操作，当Button控件被点击时，被按下与弹起的背景会有一个动态的切换效果，这个效果就是点击效果</p>
<p>方法1：</p>
<p>在xml里的相应按钮设置点击事件，再在java里设置方法</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>在xml里设置：onClick="click"
在java的MainActivity里设置一个变量表示被点击的按钮：
private Button button1;
在onCreate里将他赋值成被点击的按钮：
button1=findViewById(R.id.button1);
在java里设置点击之后发生的事：
public void click(View view){
    button1.setText("按钮1已被点击");
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xml代码：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622161810.png" alt="20230622161810" loading="lazy"></p>
<p>java代码：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622161719.png" alt="20230622161719" loading="lazy"></p>
<p>方法2：</p>
<p>匿名内部类：</p>
<p>在java代码中对按钮操作：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622162153.png" alt="20230622162153" loading="lazy"></p>
<p>方法3：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Button</span> button3<span class="token punctuation">;</span>
    button3<span class="token operator">=</span><span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>button3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    button3<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token class-name">View</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
    button3<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"按钮3被点击"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imageview控件" tabindex="-1"><a class="header-anchor" href="#imageview控件" aria-hidden="true">#</a> ImageView控件</h3>
<p>显示图片</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622162342.png" alt="20230622162342" loading="lazy"></p>
<p>例：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163010.png" alt="20230622163010" loading="lazy"></p>
<p>效果图：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163028.png" alt="20230622163028" loading="lazy"></p>
<p>background是背景图的属性，大小会根据背景尺寸伸缩</p>
<p>src并不会根据背景伸缩，还是原图的尺寸</p>
<h3 id="radiobutton控件" tabindex="-1"><a class="header-anchor" href="#radiobutton控件" aria-hidden="true">#</a> RadioButton控件</h3>
<p>RadioButton为单选按钮，android:checked属性指定是否选中的状态。</p>
<p>RadioGroup是单选组合框，可容纳多个RadioButton，并把它们组合在一起，实现单选状态。</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163346.png" alt="20230622163346" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622164507.png" alt="20230622164507" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622164311.png" alt="20230622164311" loading="lazy"></p>
<h3 id="checkbox控件" tabindex="-1"><a class="header-anchor" href="#checkbox控件" aria-hidden="true">#</a> CheckBox控件</h3>
<p>CheckBox表示复选框,它是Button的子类,用于实现多选功能通过android:checked属性指定CheckBox控件是否选中的状态。</p>
<p>CheckBox没有Group</p>
<p>xml中的定义：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622181942.png" alt="20230622181942" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622185505.png" alt="20230622185505" loading="lazy"></p>
<h3 id="listview控件" tabindex="-1"><a class="header-anchor" href="#listview控件" aria-hidden="true">#</a> ListView控件</h3>
<p>ListView以列表的形式展示数据内容，并且能够根据列表的高度自适应屏幕显示。</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622185642.png" alt="20230622185642" loading="lazy"></p>
<p>要想在ListView里显示内容，就需要选择适配器</p>
<p>常用的数据适配器：BaseAdapter，SimpleAdapter，ArrayAdapter</p>
<p>BaseAdapter顾名思义是基本的适配器。他实际上是一个抽象类，通常在自定义适配器时会继承BaseAdapter</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622190352.png" alt="20230622190352" loading="lazy"></p>
<p>例如：进行物品列表item的实现</p>
<p>分别用下面的数组来设置每个物品的名字，价格和图片</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622202749.png" alt="20230622202749" loading="lazy"></p>
<p>然后再设置一个类：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622202949.png" alt="20230622202949" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622203601.png" alt="20230622203601" loading="lazy"></p>
<p>最后在onCreate里设置适配器：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622203919.png" alt="20230622203919" loading="lazy"></p>
<h2 id="第四章-activity" tabindex="-1"><a class="header-anchor" href="#第四章-activity" aria-hidden="true">#</a> 第四章 Activity</h2>
<p>Activity：负责与用户交互的组件</p>
<h3 id="activity的开启和关闭" tabindex="-1"><a class="header-anchor" href="#activity的开启和关闭" aria-hidden="true">#</a> Activity的开启和关闭</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622210044.png" alt="20230622210044" loading="lazy"></p>
<h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3>
<p>Intent被称为意图，是程序中各组件进行交互的一种重要方式，他不仅可以指定当前组件要执行的动作，还可以在不同组件之间进行数据传递。</p>
<p>一般用于启动Activity、Service以及发送广播等。根据开启目标组件的方式不同，Intent被分为两种类型显示意图和隐式意图。</p>
<p>intentfilter有三个属性：</p>
<p>action属性:</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234046.png" alt="20230622234046" loading="lazy"></p>
<p>data属性：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234130.png" alt="20230622234130" loading="lazy"></p>
<p>category属性：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234206.png" alt="20230622234206" loading="lazy"></p>
<h3 id="activity之间的跳转" tabindex="-1"><a class="header-anchor" href="#activity之间的跳转" aria-hidden="true">#</a> Activity之间的跳转</h3>
<p>1.传递数据用intent的putExtra()方法传递数据</p>
<p>将MainActivity里的数据传到SecondActivity</p>
<p>首先在MainActivity里定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Intent</span> intent<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token class-name">SecondActivity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intent<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span><span class="token string">"student"</span>，<span class="token string">"小明"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再在SecondActivity里用getXXExtra()获取对象：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Intent</span> intent<span class="token operator">=</span><span class="token function">getIntent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name<span class="token operator">=</span>intent<span class="token punctuation">.</span><span class="token function">getStringExtra</span><span class="token punctuation">(</span><span class="token string">"student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.用Bundle类传递数据</p>
<p>先在MainActivity中将数据传输给SecondActivity</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Intent</span> intent<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intent<span class="token punctuation">.</span><span class="token function">setClass</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token class-name">SecondActivity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Bundle</span> bundle<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建一个Bundle对象</span>
bundle<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">"account"</span><span class="token punctuation">,</span><span class="token string">"江小白"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将用户名封装到Bundle中</span>
intent<span class="token punctuation">.</span><span class="token function">putExtras</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将bundle对象封装到intent对象</span>
<span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在SecondActivity中获取传递信息</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Bundle</span> bundle<span class="token operator">=</span><span class="token function">getIntent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getExtras</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取Bundle对象</span>
<span class="token class-name">String</span> account<span class="token operator">=</span>bundle<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"account"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取用户名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="activity之间的数据回传" tabindex="-1"><a class="header-anchor" href="#activity之间的数据回传" aria-hidden="true">#</a> Activity之间的数据回传</h3>
<p>有三种方法：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623001824.png" alt="20230623001824" loading="lazy"></p>
<h3 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h3>
<p>Fragment是一种可以嵌入在Activity中的UI片段，它可以用来描述Activity中的一部分布局。</p>
<p>动态添加：</p>
<p>在Activity中使用Fragment时，可以通过两种方式将Fragment添加:一种是通过布局文件添加，一种是通过代码动态添加。</p>
<p>通过布局添加：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003414.png" alt="20230623003414" loading="lazy"></p>
<p>动态添加：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003557.png" alt="20230623003557" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003622.png" alt="20230623003622" loading="lazy"></p>
<h2 id="第五章数据存储" tabindex="-1"><a class="header-anchor" href="#第五章数据存储" aria-hidden="true">#</a> 第五章数据存储</h2>
<h3 id="数据存储方式" tabindex="-1"><a class="header-anchor" href="#数据存储方式" aria-hidden="true">#</a> 数据存储方式</h3>
<p>有五种：文件存储，SharePreferences，SQLite数据库，ContentProvider，网络存储</p>
<h3 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储" aria-hidden="true">#</a> 文件存储</h3>
<p>有两种存储方式：内部存储和外部存储</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623093428.png" alt="20230623093428" loading="lazy"></p>
<p>将数据存入文件中：</p>
<p>1.内部存储：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">FileOutputStream</span> fos<span class="token operator">=</span><span class="token function">openFileOutput</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> mode<span class="token punctuation">)</span><span class="token comment">//打开应用程序中对应的输出流，将数据存储到指定的文件中，mode是操作模式</span>
<span class="token class-name">FileInputStream</span> fis<span class="token operator">=</span><span class="token function">openFileInput</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打开应用程序对应的输入流，读取指定文件的数据 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mode取值：</p>
<p>MODE_PRIVATE:该文件只能被当前程序读写<br>
MODE_APPEND:该文件的内容可以追加<br>
MODE_WORLD_READABLE:该文件的内容可以被其他程序读<br>
MODE_WORLD_WRITEABLE:该文件的内容可以被其他程序写</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623094441.png" alt="20230623094441" loading="lazy"></p>
<p>2.外部存储（以存到SD卡为例）：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623094802.png" alt="20230623094802" loading="lazy"></p>
<p>从文件中读取数据：</p>
<p>1，内部读取：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623111609.png" alt="20230623111609" loading="lazy"></p>
<p>2.外部读取：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623111645.png" alt="20230623111645" loading="lazy"></p>
<h3 id="sharepreferences存储" tabindex="-1"><a class="header-anchor" href="#sharepreferences存储" aria-hidden="true">#</a> SharePreferences存储</h3>
<p>SharedPreferences:是Android平台上一个轻量级的存储类，用于程序中一些少量数据持久化存储。</p>
<p>将数据存入SharePreferences中：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623112220.png" alt="20230623112220" loading="lazy"></p>
<p>数据的读取和删除：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623142732.png" alt="20230623142732" loading="lazy"></p>
<h3 id="sqlite数据库的存储" tabindex="-1"><a class="header-anchor" href="#sqlite数据库的存储" aria-hidden="true">#</a> SQLite数据库的存储</h3>
<p>SQLite是Android自带的一个轻量级的数据库，他运算速度快，占用资源少，支持基本SQL语法。</p>
<p>sQLite数据库可以存储应用程序中的大量数据，并对数据进行管理和维护。</p>
<p>创建数据库：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623142924.png" alt="20230623142924" loading="lazy"></p>
<p>添加数据：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623143007.png" alt="20230623143007" loading="lazy"></p>
<p>删除数据：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623143205.png" alt="20230623143205" loading="lazy"></p>
<p>修改数据：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623143230.png" alt="20230623143230" loading="lazy"></p>
<p>查询数据：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623143322.png" alt="20230623143322" loading="lazy"></p>
<p>使用sql语句进行数据库操作：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623144132.png" alt="20230623144132" loading="lazy"></p>
<h3 id="sqlite的事务" tabindex="-1"><a class="header-anchor" href="#sqlite的事务" aria-hidden="true">#</a> SQLite的事务</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623144251.png" alt="20230623144251" loading="lazy"></p>
<h2 id="第六章内容提供者" tabindex="-1"><a class="header-anchor" href="#第六章内容提供者" aria-hidden="true">#</a> 第六章内容提供者</h2>
<p>概述：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623144636.png" alt="20230623144636" loading="lazy"></p>
<h3 id="查询其他程序的数据" tabindex="-1"><a class="header-anchor" href="#查询其他程序的数据" aria-hidden="true">#</a> 查询其他程序的数据</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623145545.png" alt="20230623145545" loading="lazy"></p>
<h2 id="第七章广播机制" tabindex="-1"><a class="header-anchor" href="#第七章广播机制" aria-hidden="true">#</a> 第七章广播机制</h2>
<p>动态注册网络接受者：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token keyword">extends</span> <span class="token class-name">AppCompatActivity</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">MyBroadcastReceiver</span> receiver<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>
        receiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyBroadcastReceiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实例化过滤器并设置要过滤的 action</span>
        <span class="token class-name">String</span> action <span class="token operator">=</span> <span class="token string">"android.provider.Telephony.SMS_RECEIVED"</span><span class="token punctuation">;</span>
        <span class="token class-name">IntentFilter</span> intentFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntentFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        intentFilter<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 注册广播</span>
        <span class="token function">registerReceiver</span><span class="token punctuation">(</span>receiver<span class="token punctuation">,</span> intentFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Activity 销毁时注销广播接收者</span>
    <span class="token function">unregisterReceiver</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第八章服务" tabindex="-1"><a class="header-anchor" href="#第八章服务" aria-hidden="true">#</a> 第八章服务</h2>
<h3 id="创建服务" tabindex="-1"><a class="header-anchor" href="#创建服务" aria-hidden="true">#</a> 创建服务</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">IBinder</span> <span class="token function">onBind</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: Return the communication channel to the service.</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token string">"Not yet implemented"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务的启动方式" tabindex="-1"><a class="header-anchor" href="#服务的启动方式" aria-hidden="true">#</a> 服务的启动方式</h3>
<p>通过 startService() 方法，带参数</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">MyService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">startService</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 BindService() 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">BindService</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> service<span class="token punctuation">,</span> <span class="token class-name">ServiceConnection</span> conn<span class="token punctuation">,</span> <span class="token keyword">int</span> flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第九章网络编程" tabindex="-1"><a class="header-anchor" href="#第九章网络编程" aria-hidden="true">#</a> 第九章网络编程</h2>
<h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3>
<p>使用 JSONObject 类解析对象结构的数据：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">JSONObject</span> jsobObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span>json1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">optString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">optInt</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> married <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">optBoolean</span><span class="token punctuation">(</span><span class="token string">"married"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 JSONArray 类解析数组结构的数据</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">JSONArray</span> jsonArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONArray</span><span class="token punctuation">(</span>json2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> jsonArray<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">JSONObject</span> jsobObj <span class="token operator">=</span> jsonArray<span class="token punctuation">.</span><span class="token function">getJSONObject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">optString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">optInt</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handler消息机制" tabindex="-1"><a class="header-anchor" href="#handler消息机制" aria-hidden="true">#</a> Handler消息机制</h3>
<p>Handler 是一种异步回调机制，主要负责与子线程进行通信，主要包括四个关键对象：<br>
Message：在线程之间传递的消息<br>
Handler：处理者，主要负责 Message 的发送以及处理<br>
MessageQueue：消息队列，存放 Handler 发送过来的消息，按照先入先出的规则执行<br>
Looper：不断的从消息队列中抽取消息并传递到 Handler 对象的 handleMessage() 方法中</p>
<h2 id="第十章图形图像处理" tabindex="-1"><a class="header-anchor" href="#第十章图形图像处理" aria-hidden="true">#</a> 第十章图形图像处理</h2>
<h3 id="绘图类-bitmapfactory类" tabindex="-1"><a class="header-anchor" href="#绘图类-bitmapfactory类" aria-hidden="true">#</a> 绘图类：BitmapFactory类</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623151515.png" alt="20230623151515" loading="lazy"></p>
<p>调用：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623151534.png" alt="20230623151534" loading="lazy"></p>
<h2 id="第十一章多媒体应用开发" tabindex="-1"><a class="header-anchor" href="#第十一章多媒体应用开发" aria-hidden="true">#</a> 第十一章多媒体应用开发</h2>
<h3 id="使用mediaplayer类播放音频" tabindex="-1"><a class="header-anchor" href="#使用mediaplayer类播放音频" aria-hidden="true">#</a> 使用MediaPlayer类播放音频</h3>
<p>方法：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623151715.png" alt="20230623151715" loading="lazy"></p>
<p>播放音频文件：prepare(),start()</p>
<p>暂停播放：pause()</p>
<p>重新播放：seekTo(0)</p>
<p>停止播放：stop()</p>
</div></template>


