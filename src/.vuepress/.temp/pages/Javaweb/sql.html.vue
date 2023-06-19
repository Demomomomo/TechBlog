<template><div><!-- 因为我是下载到E盘的，所以先转换到E盘，然后再打打开bin的根目录 -->
<h2 id="数据库概述" tabindex="-1"><a class="header-anchor" href="#数据库概述" aria-hidden="true">#</a> 数据库概述</h2>
<h3 id="数据独立性" tabindex="-1"><a class="header-anchor" href="#数据独立性" aria-hidden="true">#</a> 数据独立性</h3>
<p>数据独立性包括两个方面：逻辑独立性和物理独立性</p>
<p>好处：（1）减轻了应用程序的维护工作量（2）提高数据共享性,使数据库系统有较好的可扩充性</p>
<h3 id="数据库系统的组成" tabindex="-1"><a class="header-anchor" href="#数据库系统的组成" aria-hidden="true">#</a> 数据库系统的组成</h3>
<p>1.硬件 2.软件 3.人员</p>
<h2 id="数据库系统结构" tabindex="-1"><a class="header-anchor" href="#数据库系统结构" aria-hidden="true">#</a> 数据库系统结构</h2>
<h3 id="数据特征" tabindex="-1"><a class="header-anchor" href="#数据特征" aria-hidden="true">#</a> 数据特征</h3>
<p>数据库中的数据具有静态和动态两种特征：</p>
<p>1.静态特征：包括数据的基本结构，数据间的联系以及对数据取值范围的约束</p>
<p>2.动态特征：指对数据可以进行一些符合一定规矩的操作</p>
<p>数据模型三要素：包括数据的基本结构，数据的约束条件，和定义在数据上的操作</p>
<h3 id="数据库的组织模型" tabindex="-1"><a class="header-anchor" href="#数据库的组织模型" aria-hidden="true">#</a> 数据库的组织模型</h3>
<p>层次模型，网状模型，关系模型，对象-关系模型</p>
<h3 id="e-r图" tabindex="-1"><a class="header-anchor" href="#e-r图" aria-hidden="true">#</a> E-R图</h3>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619121902.png" alt="20230619121902" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619121927.png" alt="20230619121927" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619122038.png" alt="20230619122038" loading="lazy"></p>
<p>实体之间的联系：一对一，一对多，多对多</p>
<p>例子：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619122933.png" alt="20230619122933" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619123000.png" alt="20230619123000" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619123037.png" alt="20230619123037" loading="lazy"></p>
<p>设计E-R图的步骤：先将所有有关系的实体建立E-R图，然后再合并这些图</p>
<p>将两个E-R图合并成一个图时，将一个实体在两个图中的所有属性都标注出来，对于一个实体，可以对多种实体有不同的联系，就都列出来</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619172132.png" alt="20230619172132" loading="lazy"></p>
<h3 id="关系模型" tabindex="-1"><a class="header-anchor" href="#关系模型" aria-hidden="true">#</a> 关系模型</h3>
<p>一个实体和一些属性构成一张关系表，用括号将多个属性包含在内</p>
<p>主码：是关系中用于唯一确定一个元组的一个属性或属性最小组（注意：主键可以有多个，根据实体来确定）</p>
<p>外码：用于表示两个或多个实体之间的关联关系</p>
<p>主属性：主码所包含的属性称为关系的主属性</p>
<p>非主属性：其他的非主码属性称为非主属性</p>
<p>在一个关系模型中，主键用下划线标注</p>
<p>比如学生有4个属性：学号，姓名，性别，出生日期。可以看出只要知道学号就可以确定一个学生，那么学号就是主键，用下划线标注</p>
<p>关系模型：学生（<u>学号</u>，姓名，性别，出生日期）</p>
<p>选课有三个属性：学号，课程号，学分。一个学生可以选很多课程，那么需要学号和课程才能确定选什么课，那么学号和课程号就是主键</p>
<p>关系模型：选课（<u>学号</u>，<u>课程号</u>，学分）</p>
<p>关系模型的数据完整性约束：</p>
<p>1.实体完整性 2.参照完整性 3.用户定义完整性</p>
<h3 id="三级模式结构" tabindex="-1"><a class="header-anchor" href="#三级模式结构" aria-hidden="true">#</a> 三级模式结构</h3>
<p>1.内模式：数据的物理存储方式</p>
<p>2.外模式：用户所看见的数据视图</p>
<p>3.概念模式：介于内模式和外模式之间的中间层次，也称为模式</p>
<h2 id="sql语言" tabindex="-1"><a class="header-anchor" href="#sql语言" aria-hidden="true">#</a> SQL语言</h2>
<p>完整性约束条件的作用对象：表，元素，列</p>
<p>进入SQL：在cmd中以管理员身份运行，输入用户和密码：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p
<span class="token number">12342</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当想退出的时候输出语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通用语法：
1.可以单行或者多行书写，以分号结尾</p>
<p>2.SQL语句不区分大小写，关键字建议使用大写</p>
<p>3.注释<br>
单行注释：<code v-pre>-- 注释内容</code> 或<code v-pre>#注释内容</code><br>
多行注释：/<em>注释内容</em>/</p>
<p>语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span><span class="token comment">-- 查询所有数据库名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<p>DDL：数据定义语言，用来定义数据库对象，表，列等<br>
DML：数据操作语言，用来对数据库中表的数据进行增删改<br>
DQL：数据查询语句，用来查询数据库中表的记录<br>
DCL：数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户</p>
<p>操作的对象及关系如下：</p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/3F984FA332063984B369B20EFBEDC721.png" alt="Pulpit rock" width="504" height="258">  
<h3 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h3>
<p>操作数据库和表</p>
<p>操作数据库</p>
<h4 id="_1-查询" tabindex="-1"><a class="header-anchor" href="#_1-查询" aria-hidden="true">#</a> 1.查询</h4>
<p>查询所有数据库</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span><span class="token comment">-- 查询所有数据库名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-创建数据库" tabindex="-1"><a class="header-anchor" href="#_2-创建数据库" aria-hidden="true">#</a> 2.创建数据库</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> db1<span class="token punctuation">;</span><span class="token comment">-- 创建数据库db1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不能创建名称已经存在的数据库<br>
那么我们就先判断一下要创建的数据库是否存在，如果不存在的话就创建</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> db1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-删除数据库" tabindex="-1"><a class="header-anchor" href="#_3-删除数据库" aria-hidden="true">#</a> 3.删除数据库</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> db1<span class="token punctuation">;</span><span class="token comment">-- 删除db1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不能删除不存在的数据库<br>
那么我们就先判断一下存在不存在</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> db1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-使用数据库" tabindex="-1"><a class="header-anchor" href="#_4-使用数据库" aria-hidden="true">#</a> 4.使用数据库</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">use</span> db1<span class="token punctuation">;</span><span class="token comment">-- 使用数据库db1</span>
<span class="token keyword">select</span> <span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 查询当前使用的数据库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找当前在哪个数据库</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>操作表</p>
<h4 id="_1-查询表" tabindex="-1"><a class="header-anchor" href="#_1-查询表" aria-hidden="true">#</a> 1.查询表</h4>
<p>查询当前数据库所有的表</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">use</span> db1<span class="token punctuation">;</span><span class="token comment">-- 先使用数据库db1</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span><span class="token comment">-- 查询db1的所有表</span>
<span class="token keyword">desc</span> func<span class="token punctuation">;</span><span class="token comment">-- 查询表func的具体结构信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-创建表" tabindex="-1"><a class="header-anchor" href="#_2-创建表" aria-hidden="true">#</a> 2.创建表</h4>
<p>表的数据类型<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C42BA0584D8CC9EBB733532B1379188E.png" alt="C42BA0584D8CC9EBB733532B1379188E" loading="lazy"></p>
<p>用法：<br>
double:用来存储小数<br>
名称 double(总长度[最大值的位数+保留的小数点后面的位数]，保留小数点后的位数)<br>
date:用来存储年月日，日期的数据表示为XXXX-XX-XX<br>
名称 date<br>
char:定长字符串<br>
名称 char(字符串最大长度x，储存的字符串如果小于x，那么少的部分用空格填满)<br>
varchar:变长字符串<br>
名称 varchar(字符串最大长度)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
    字段名<span class="token number">1</span> 数据类型<span class="token punctuation">,</span>
    字段名<span class="token number">2</span> 数据类型<span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    字段名n 数据类型<span class="token comment">-- 注意，最后一行没有逗号</span>
<span class="token punctuation">)</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如在数据库db1中创建下图结构的表</p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/DCF05D7F81784E022B008D820C32AA4E.png" alt="Pulpit rock" width="304" height="158">  
<p>代码：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">use</span> db1<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> tb_user<span class="token punctuation">(</span><span class="token comment">-- 用的是括号</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span><span class="token comment">-- 每行用逗号隔开</span>
    username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">-- 在数据库中字符串用varchar表示，括号里的数字表示字符串不能超过的最长长度</span>
    password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token comment">-- 最后一行没有逗号</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-删除表" tabindex="-1"><a class="header-anchor" href="#_3-删除表" aria-hidden="true">#</a> 3.删除表</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> op<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> op<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-修改表" tabindex="-1"><a class="header-anchor" href="#_4-修改表" aria-hidden="true">#</a> 4.修改表</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> op <span class="token keyword">rename</span> <span class="token keyword">to</span> op1<span class="token punctuation">;</span><span class="token comment">-- 将表op的名字改成op1</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> op <span class="token keyword">modify</span> id <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 将表op中的列id的数据类型改为varchar(30)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> op change id idx <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 将表op的id列改为类型为varchar(30)的名为idx的列</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> op <span class="token keyword">drop</span> password<span class="token punctuation">;</span><span class="token comment">-- 删除表op中名为password的列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h3>
<p>对数据进行操作</p>
<h4 id="_1-添加数据" tabindex="-1"><a class="header-anchor" href="#_1-添加数据" aria-hidden="true">#</a> 1.添加数据</h4>
<p>给指定列添加数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> op1<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"zyz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 给表名为op1的表中名为name的列添加一个zyz的数据</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> op1<span class="token punctuation">(</span>birthday<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">"2019-01-10"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 给表名为op1的表中名为birthday的列加入一个 2019-01-10的date数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>给全部列添加数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> op1 <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"zyz"</span><span class="token punctuation">,</span><span class="token string">"zxh"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 在op1的表里加上一行数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量添加数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> op1 <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"zyz"</span><span class="token punctuation">,</span><span class="token string">"zxh"</span><span class="token punctuation">)</span>，<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"zxh"</span><span class="token punctuation">,</span><span class="token string">"zyz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 添加两行数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-修改数据" tabindex="-1"><a class="header-anchor" href="#_2-修改数据" aria-hidden="true">#</a> 2.修改数据</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> op1 <span class="token keyword">set</span> id<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">"zyx"</span> <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">"zxh"</span><span class="token punctuation">;</span><span class="token comment">-- 将名为op1的表中，名字为zxh的数据，id改为4，name改为zyx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不加上where后面的条件，那么所有的数据的列都会修改</p>
<h4 id="_3-查询数据" tabindex="-1"><a class="header-anchor" href="#_3-查询数据" aria-hidden="true">#</a> 3.查询数据</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op1<span class="token punctuation">;</span><span class="token comment">-- 查询名为op1的表中的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-删除数据" tabindex="-1"><a class="header-anchor" href="#_4-删除数据" aria-hidden="true">#</a> 4，删除数据</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> op1 <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">"zyz"</span><span class="token punctuation">;</span><span class="token comment">-- 删除名为op1的表中，name是zyz的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dql" tabindex="-1"><a class="header-anchor" href="#dql" aria-hidden="true">#</a> DQL</h3>
<p>查询数据</p>
<p>先group by再where<br>
先where再order by</p>
<h4 id="基础查询" tabindex="-1"><a class="header-anchor" href="#基础查询" aria-hidden="true">#</a> 基础查询：</h4>
<p>1.查询多个字段</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">select</span> name<span class="token punctuation">,</span>age <span class="token keyword">from</span> op2<span class="token punctuation">;</span><span class="token comment">-- 查找表op2中的name和age两个字段</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span><span class="token comment">-- 查询所有数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2<span class="token punctuation">;</span><span class="token comment">-- 查询表op2中的所有数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.去除重复记录</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">distinct</span> 字段列表 <span class="token keyword">from</span> 表名<span class="token punctuation">;</span><span class="token comment">-- 查询到的就是这个字段内所有不重复的字段</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> sex <span class="token keyword">from</span> op2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.起别名</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">as</span>:<span class="token keyword">as</span> 也可以省略
<span class="token keyword">select</span> idol <span class="token keyword">as</span> love <span class="token keyword">from</span> op2<span class="token punctuation">;</span><span class="token comment">-- 查询表op2中的字段名为idol的列，idol显示为love</span>
<span class="token keyword">select</span> idol love <span class="token keyword">from</span> op2<span class="token punctuation">;</span><span class="token comment">-- as可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h4>
<p>条件符号及其含义：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230506172652.png" alt="20230506172652" loading="lazy"></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表名 <span class="token keyword">where</span> 条件列表<span class="token punctuation">;</span>
<span class="token keyword">select</span> name <span class="token keyword">from</span> op2 <span class="token keyword">where</span> idol<span class="token operator">=</span><span class="token string">"EXO"</span><span class="token punctuation">;</span><span class="token comment">-- 查询op2表中中字段idol为EXO的name字段</span>
<span class="token keyword">select</span> name <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age<span class="token operator">>=</span><span class="token number">19</span> <span class="token operator">and</span> age<span class="token operator">&lt;=</span><span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">-- 查询age在19到30之间的name</span>
<span class="token keyword">select</span> name <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age <span class="token operator">between</span> <span class="token number">19</span> <span class="token operator">and</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">-- 查询age在19到30之间的name</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> idol<span class="token operator">=</span><span class="token string">"EXO"</span><span class="token punctuation">;</span><span class="token comment">-- 查询op2中idol是EXO的所有字段</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age<span class="token operator">=</span><span class="token number">18</span> <span class="token operator">or</span> age<span class="token operator">=</span><span class="token number">19</span> <span class="token operator">or</span> age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span><span class="token comment">-- 在op2里找age为18或19或20的字段</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age <span class="token operator">in</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">-- 在op2里找age为18或19或20的字段</span>
<span class="token comment">-- null的使用不能用！=或=，只能用is null或者is not null</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span><span class="token comment">-- 查询age是null的列</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> age <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span><span class="token comment">-- 查询age不是null的列</span>

<span class="token comment">/* 模糊查询 like
_代表单个任意字符
%代表任意个数字符
*/</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">"z%"</span><span class="token punctuation">;</span><span class="token comment">-- 查询name中首字母是z的字段</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">"_z%"</span><span class="token punctuation">;</span><span class="token comment">-- 查询name中第二个字母是z的字段</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op2 <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">"%z%"</span><span class="token punctuation">;</span><span class="token comment">-- 查询name中含有z的字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>
<span class="token comment">/*
排序方式：  
asc：升序排列(默认值)
desc：降序排列
如果有多个排序，当前面条件一样时才会进行下一个条件排序
*/</span>

<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表名 <span class="token keyword">order</span> <span class="token keyword">by</span> 排序字段名<span class="token number">1</span><span class="token punctuation">[</span>排序方式<span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>排序字段名<span class="token number">2</span><span class="token punctuation">[</span>排序方式<span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op6 <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">asc</span><span class="token punctuation">;</span><span class="token comment">-- 按照age升序的方式排列输出</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op6 <span class="token keyword">order</span> <span class="token keyword">by</span> english <span class="token keyword">asc</span><span class="token punctuation">,</span>math <span class="token keyword">asc</span><span class="token punctuation">;</span><span class="token comment">-- 按照english升序，math降序的方法询问输出</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h4>
<p>聚合函数</p>
<p>数据为null的不参与聚合函数的运算</p>
<p>1.概念：将一列数据作为一个整体进行纵向运算</p>
<p>2.聚合函数分类<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AB77BEE1086CC04E4BFAF15E0F8090A8.png" alt="AB77BEE1086CC04E4BFAF15E0F8090A8" loading="lazy"></p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683601795225.png" alt="1683601795225" loading="lazy"></p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602176442.png" alt="Pulpit rock" width="354" height="208">  
<!-- 
![1683602176442](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602176442.png)   -->
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602253170.png" alt="1683602253170" loading="lazy"></p>
<p>count统计数量：<br>
取值：1.主键 2.*（只要一列有数据就会被统计到）</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> op8<span class="token punctuation">;</span><span class="token comment">-- 查询op8中有几个id，null不能被查询到</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>english<span class="token punctuation">)</span> <span class="token keyword">from</span> op8<span class="token punctuation">;</span><span class="token comment">-- 查找op8中english的平均值（只算所有不为null的数据的平均值）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表名 <span class="token keyword">limit</span> 起始索引<span class="token punctuation">,</span>查询目录数<span class="token punctuation">;</span>
<span class="token comment">-- 起始索引：从0开始  </span>
计算公式：起始索引<span class="token operator">=</span><span class="token punctuation">(</span>当前页码<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>每页显示的条数

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op8 <span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">-- 查询在表op8中，从0开始的前三条数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> op8 <span class="token keyword">limit</span> <span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">-- 每页3条数据，查询第三页数据</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h2>
<p>概念：作用于表中列上的规则，用于限制加入表的数据<br>
约束的存在保证了数据库中数据的正确性</p>
<p>分类：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230509162950.png" alt="20230509162950" loading="lazy"></p>
<p>主建约束：非空且唯一</p>
<p>在添加约束的时候，约束条件并列写</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> op3<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span><span class="token comment">-- 主建且增长</span>
    ename <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">unique</span><span class="token punctuation">,</span><span class="token comment">-- 员工姓名，非空且唯一</span>
    salary <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span><span class="token comment">-- 工资，非0</span>
    bonus <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token comment">-- 奖金，如果没有奖金默认值设为0</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h3>
<p>概念：用来让两个表的数据之间建立链接，保证数据的一致性和完整性</p>
<p>例如下图中的两个表：</p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/4C4C2AC5B27B03ADDB76E4E325453DFE.png" alt="Pulpit rock" width="454" height="208">  
<p>emp表中的dep_id和dept表中的id相关联，并且dep_id对应到id中，那么id就是dep_id的主键，dep_id到id的关联就是一个外键，emp表就是从表，dept是主表</p>
<p>添加外键约束：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 1.创建表的时候添加外键约束</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span>
    列名 数据类型，
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">constraint</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>外键名称<span class="token punctuation">]</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>外键列名<span class="token punctuation">)</span> <span class="token keyword">references</span> 主表<span class="token punctuation">(</span>主表列名<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 比如上例图中的表，语句这样写</span>

<span class="token comment">-- 先建主表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> dept<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    dep_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    addr <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 再建从表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> emp<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    age <span class="token keyword">int</span><span class="token punctuation">,</span>
    dep_id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    <span class="token keyword">constraint</span> fk_emp_dept <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>dep_id<span class="token punctuation">)</span> reference dept<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">-- 2.建完表之后添加外键约束，就是把上面第一种的从表中的最后一句话删除，建完表之后再加这句话</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> <span class="token keyword">constraint</span> 外键名称 <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>外键字段名称<span class="token punctuation">)</span> <span class="token keyword">references</span> 主表名称<span class="token punctuation">(</span>主列表名称<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且添加数据的时候也是，先添加主表中的数据，再添加从表中的数据</p>
<p>删除约束：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> 外键名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除数据的时候，先删除从表中对应主表中的数据，才能删除主表相应的数据</p>
<p>例如上图，必须先在emp表中删除dep_id=1的数据，dept表中的id=1的数据才能删除</p>
<p>只有建图完添加完外键之后才能添加数据，如果已经添加了数据是不能再添加外键了</p>
<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2>
<p>表关系：</p>
<p>1.一对多<br>
将多的一方的表建立外键指向一的一方的表<br>
例如部门表和员工表</p>
<p>2.多对多<br>
建立第三张中间表，至少含两个外键分别关联两方主件键<br>
例如商品表和订单表：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230513142127.png" alt="20230513142127" loading="lazy"></p>
<p>3.一对一<br>
多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表<br>
例如用户和用户详情<br>
实现方式：在任意一方加入外键，关联另一方主键，并且设置外键为唯一</p>
<h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2>
<p>假如a表有x个数据，b表有y个数据，我们如果直接查他们两个表的所有的数据，会出现x*y个数据，因为他会枚举出两个表所有数据的组合情况</p>
<h3 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询" aria-hidden="true">#</a> 连接查询</h3>
<h4 id="内连接-相当于查询ab的所有数据和交集" tabindex="-1"><a class="header-anchor" href="#内连接-相当于查询ab的所有数据和交集" aria-hidden="true">#</a> 内连接：相当于查询AB的所有数据和交集</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--隐式内连接</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表<span class="token number">1</span>，表<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如有下列两个表emp和dep：</p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684134000805.png" alt="Pulpit rock" width="254" height="108"> 
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684133972585.png" alt="Pulpit rock" width="254" height="108"> 
<p>我们想显示当emp的depid和dep的id相等时，emp中的id，name，depid，和dep表中的name，那么查询语句就是：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> emp<span class="token punctuation">.</span>id<span class="token punctuation">,</span>emp<span class="token punctuation">.</span>name<span class="token punctuation">,</span>emp<span class="token punctuation">.</span>depid<span class="token punctuation">,</span>dep<span class="token punctuation">.</span>name <span class="token keyword">from</span> emp<span class="token punctuation">,</span>dep <span class="token keyword">where</span> emp<span class="token punctuation">.</span>depid<span class="token operator">=</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么查询的结果就是：</p>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684134240923.png" alt="Pulpit rock" width="254" height="108"> 
<p>还可以给emp和dep表起别名，比如分别是t1和t2，那么语句就是</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> t1<span class="token punctuation">.</span>id<span class="token punctuation">,</span>t1<span class="token punctuation">.</span>name<span class="token punctuation">,</span>t1<span class="token punctuation">.</span>depid<span class="token punctuation">,</span>t2<span class="token punctuation">.</span>name <span class="token keyword">from</span> emp t1<span class="token punctuation">,</span>dep t2 <span class="token keyword">where</span> t1<span class="token punctuation">.</span>depid<span class="token operator">=</span>t2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--显式内连接</span>
<span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">inner</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>假如还是查询emp表的depid和dep表的id相等的话，语句如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">inner</span> <span class="token keyword">join</span> dept <span class="token keyword">on</span> emp<span class="token punctuation">.</span>depid<span class="token operator">=</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">;</span><span class="token comment">-- 查询的是所有条件是emp.id=dep.id的emp和dep中全部字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接：</h4>
<p>左外连接：相当于查询A所有数据和交集</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">left</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假如有下面两张emp和dep的表：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684135737972.png" alt="Pulpit rock" width="254" height="158">
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515152959.png" alt="Pulpit rock" width="254" height="158"></p>
<p>我们想对emp表进行左外连接，条件是找emp的depid和dep的id一样的数据，那么语句是</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> dep <span class="token keyword">ON</span> emp<span class="token punctuation">.</span>depid<span class="token operator">=</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么我们显示的是emp中的所有数据，其中不满足条件的数据的dep表的字段为null<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515153520.png" alt="Pulpit rock" width="354" height="158"></p>
<p>右外连接：相当于查询B表所有数据和交集</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表<span class="token number">1</span> <span class="token keyword">right</span> <span class="token keyword">join</span> 表<span class="token number">2</span> <span class="token keyword">on</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对这两个表进行右查询</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">right</span> <span class="token keyword">join</span> dep <span class="token keyword">on</span> emp<span class="token punctuation">.</span>depid<span class="token operator">=</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么显示dep表里的所有数据，不满足条件的emp表的字段为空<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515153818.png" alt="Pulpit rock" width="404" height="158"></p>
<h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h3>
<p>查询中嵌套查询，称嵌套查询为子查询</p>
<p>子查询根据查询的结果不同，作用不同：</p>
<h4 id="单行单列" tabindex="-1"><a class="header-anchor" href="#单行单列" aria-hidden="true">#</a> 单行单列</h4>
<p>作为条件值，使用= != &gt; &lt;等条件进行判断</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token keyword">where</span> 字段名<span class="token operator">=</span><span class="token punctuation">(</span>子查询<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多行单列" tabindex="-1"><a class="header-anchor" href="#多行单列" aria-hidden="true">#</a> 多行单列</h4>
<p>作为条件值，使用in等关键字进行条件查询</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> 表 <span class="token keyword">where</span> 字段名 <span class="token operator">in</span><span class="token punctuation">(</span>子查询<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多行多列" tabindex="-1"><a class="header-anchor" href="#多行多列" aria-hidden="true">#</a> 多行多列</h4>
<p>作为虚拟列表</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段列表 <span class="token keyword">from</span> <span class="token punctuation">(</span>子查询<span class="token punctuation">)</span> <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2>
<p>视图是由从数据库的基本表中选取出来的数据组成的逻辑窗口，是基本表的部分行和列数据的组合。</p>
<p>视图的好处：1.简化数据查询语句 2.使用户能从多角度看待同一数据 3.提高了数据的安全性 4.提供了一定程度的逻辑独立性。</p>
<h2 id="范式" tabindex="-1"><a class="header-anchor" href="#范式" aria-hidden="true">#</a> 范式</h2>
<p>关系模型中的关系模式至少是：1NF</p>
<p>任何二元关系模式的最高范式必定是：BCNF</p>
<h3 id="第一范式-1nf" tabindex="-1"><a class="header-anchor" href="#第一范式-1nf" aria-hidden="true">#</a> 第一范式（1NF）</h3>
<p>简单的说，第一范式就是每一个属性都不可再分。</p>
<p>例如：
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619143634.png" alt="20230619143634" loading="lazy"></p>
<p>图中圈出的两个列中有两个元素，不满足不可再分的性质，那么我们就将两个元素分开再添一列</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619143744.png" alt="20230619143744" loading="lazy"></p>
<p>下图中的‘高级职称人数’包含两个基本数据项，不是基本的数据项，不满足第一范式，我们需要修改</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619144814.png" alt="20230619144814" loading="lazy"></p>
<p>分裂成两个基本数据项就行了</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619144913.png" alt="20230619144913" loading="lazy"></p>
<h3 id="第二范式-2nf" tabindex="-1"><a class="header-anchor" href="#第二范式-2nf" aria-hidden="true">#</a> 第二范式（2NF）</h3>
<p>首先满足第一范式，并且每个非主属性都完全函数依赖于主码</p>
<p>如果一个第一范式的关系的主码只有一个列，那么这个关系也一定是第二范式关系</p>
<p>对于一个关系模式：学生选课（学号，名字，性别，系别，住宿楼层，课程，分数）</p>
<p>可以得到主码是学号和课程</p>
<p>但是由于名字和性别等属性是只依赖学号，没有依赖课程，那么他就不满足'每个非主属性都完全函数依赖于主码'这个条件，那么我们就要进行分解</p>
<p>分解方法：</p>
<p>1.用组成主码的属性集合的每一个子集作为主码构成一个关系模式</p>
<p>例如上面的关系模式就可以分为：</p>
<p>学号（<u>学号</u>，...）</p>
<p>课程（<u>课程</u>，...）</p>
<p>学号课程（<u>学号</u>,<u>课程</u>...）</p>
<p>2.再将依赖于这些主码的属性放进这些关系模式里</p>
<p>学号（学号，名字，性别，系别，住宿楼层）</p>
<p>课程（课程）</p>
<p>学号课程（学号，课程，分数）</p>
<p>2.然后去掉只由主码的子集构成的关系模式</p>
<p>也就是去掉上面的：课程（课程），因为他只有主码构成</p>
<p>那么最终被分解的形式为：</p>
<p>学号（学号，名字，性别，系别，住宿楼层）</p>
<p>学号课程（学号，课程，分数）</p>
<h3 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式" aria-hidden="true">#</a> 第三范式</h3>
<p>关系满足第二范式，且所有的非主属性都不传递依赖于主码</p>
<p>假设同一个系都住在一层，那么在：学号（学号，名字，性别，系别，住宿楼层）这个关系模型里，有：</p>
<p>因为学号-&gt;系别 系别-&gt;住宿楼层，那么学号(传递)-&gt;住宿楼层，就不满足‘所有的非主属性都不传递依赖于主码’的条件，需要分解</p>
<p>分解过程：</p>
<p>1.对于不是候选码的每个决定因子，从关系模式中删除依赖于他的所有属性</p>
<p>那么对于学号（学号，名字，性别，系别，住宿楼层）这个关系模型分解为：</p>
<p>学号（学号，名字，性别，系别）</p>
<p>2.新建一个关系模式，新模式中包含在原关系模式中所有依赖于它的所有属性</p>
<p>系别（系别，住宿楼层）</p>
<p>3.将决定因子作为新关系模式的主码</p>
<p>系别（系别，住宿楼层）中系别是主码</p>
<p>那么最终的关系模式就是：</p>
<p>学号（学号，名字，性别，系别）（假设称关系模型为XH），其中学号是主码，系别是引用XB关系模型的外码</p>
<p>系别（系别，住宿楼层）（假设将关系模型称为XB），系别是主码，没有外码</p>
<p>学号课程（学号，课程，分数）（将关系模型称为XK），学号和课程是主码，学号是引用XH关系模型的外码</p>
<h2 id="数据库保护" tabindex="-1"><a class="header-anchor" href="#数据库保护" aria-hidden="true">#</a> 数据库保护</h2>
<h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3>
<p>事务是一组操作的集合，这组操作，要么全部执行成功，要么全部执行失败</p>
<h4 id="执行语句" tabindex="-1"><a class="header-anchor" href="#执行语句" aria-hidden="true">#</a> 执行语句</h4>
<p>概念：一种机制，包含一组数据库操作命令，把所有命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么同时成功要么同时失败<br>
事务是一个不可分割的工作逻辑单元</p>
<p>事务是多个语句为一个整体，那么我们在开始这多个语句之前需要开启事务，然后再进行这些语句的操作，再结束事务</p>
<p>例如：对于转账操作，假如zyz向zxh转500，那么我们要进行几个操作：<br>
1.查询zyz的余额是否大于等于500<br>
2.zyz账户-500<br>
3.zxh账户+500</p>
<p>在保证这些操作都没有问题的情况下才操作，如果有一环出错就不会操作这个事务</p>
<p>那么开始操作事务之后，在做的所有语句都是临时操作，当事务完成之后才操作这些语句，即提交事务</p>
<p>那么当我们操作语句发现错误的时候，回滚事务，就能恢复到没有操作的状态</p>
<p>默认mysql事务是自动提交的，也就是说，当执行一条DML语句，mysql会立刻隐式的提交事务</p>
<p>那么就需要我们手动开启事务和提交事务</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 方法1：将mysql的默认语句改为手动提交，那么当执行语句报错的时候我们进行回滚，全部语句都完成之后再手动提交</span>
<span class="token keyword">select</span> @<span class="token variable">@autocommit</span><span class="token punctuation">;</span><span class="token comment">-- 查看事务的默认提交方式：1 自动提交 0手动提交</span>
<span class="token keyword">set</span> @<span class="token variable">@autocommit</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">-- 修改事务提交方式为手动提交</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span><span class="token comment">-- 如果执行过程中报错，那么我们回滚事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span><span class="token comment">-- 执行全部命令之后提交事务</span>

<span class="token comment">-- 方式2：执行开启事务的操作，在报错的时候回滚，所有语句都执行成功就提交</span>
<span class="token keyword">begin</span><span class="token punctuation">;</span><span class="token comment">-- 或start transaction;开启事务</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span><span class="token comment">-- 回滚事务</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span><span class="token comment">-- 提交事务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四大特征" tabindex="-1"><a class="header-anchor" href="#四大特征" aria-hidden="true">#</a> 四大特征</h4>
<p>ACID：<br>
1.原子性：事务是不可分割的最小操作单元，要么全部成功，要么全部失败</p>
<p>2.一致性：事务完成时，必须使所有的数据都保持一致状态</p>
<p>3.隔离性：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行</p>
<p>4.持久性：事务一旦提交或回滚，他对数据库中的数据的改变是永久的</p>
<h4 id="并发事务问题" tabindex="-1"><a class="header-anchor" href="#并发事务问题" aria-hidden="true">#</a> 并发事务问题</h4>
<p>问题1：脏读:一个事务读到另外一个事务还没有提交的数据。</p>
<p>问题2：不可重复读：一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。</p>
<p>问题3：幻读：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”。</p>
<h4 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h4>
<p>事务的隔离级别有以下几种：</p>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619224513.png" alt="20230619224513" loading="lazy"></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> @<span class="token variable">@transaction_isolation</span><span class="token punctuation">;</span><span class="token comment">-- 查看事务隔离级别</span>
<span class="token keyword">set</span><span class="token punctuation">[</span><span class="token keyword">session</span><span class="token operator">|</span><span class="token keyword">global</span><span class="token punctuation">]</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span>{<span class="token keyword">read</span> <span class="token keyword">uncommitted</span><span class="token operator">|</span><span class="token keyword">read</span> <span class="token keyword">committed</span><span class="token operator">|</span><span class="token keyword">repeatable</span> <span class="token keyword">read</span><span class="token operator">|</span><span class="token keyword">serializable</span>}<span class="token comment">-- 设置事务隔离级别，如果设置session，那么只对于当前客户端的窗口有效，如果设置global，那么对于所有客户端的窗口都有效 </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619225447.png" alt="20230619225447" loading="lazy"></p>
<h3 id="两段锁协议" tabindex="-1"><a class="header-anchor" href="#两段锁协议" aria-hidden="true">#</a> 两段锁协议</h3>
<p>两段锁协议是指所有的事物必须分为两个阶段，对数据进行加锁和解锁，具体内容如下：</p>
<p>1.在对任何数据进行读写操作之前，首先要获得对该数据的封锁。</p>
<p>2.在释放一个封锁之后，事务不再申请和获得任何其他锁</p>
<p>意思是可以将每个事务分成两个时期：申请封锁期和释放封锁期</p>
<h3 id="数据库故障的种类" tabindex="-1"><a class="header-anchor" href="#数据库故障的种类" aria-hidden="true">#</a> 数据库故障的种类</h3>
<p>1.事务内部的故障 2.系统故障 3.其他故障</p>
<h3 id="数据库备份" tabindex="-1"><a class="header-anchor" href="#数据库备份" aria-hidden="true">#</a> 数据库备份</h3>
<p>指定备份策略时考虑以下几个方面：</p>
<p>1.备份的内容 2.备份频率</p>
<p>备份的介质可以是磁带也可以是磁盘</p>
<h3 id="数据库恢复" tabindex="-1"><a class="header-anchor" href="#数据库恢复" aria-hidden="true">#</a> 数据库恢复</h3>
<p>恢复策略：</p>
<p>1.事务故障的恢复 2.系统故障的恢复 3.介质故障的恢复</p>
<h2 id="数据库设计-1" tabindex="-1"><a class="header-anchor" href="#数据库设计-1" aria-hidden="true">#</a> 数据库设计</h2>
<p>数据库设计的基本步骤：</p>
<p>需求分析 结构设计 行为设计 数据库实施 数据库运行和维护阶段</p>
</div></template>


