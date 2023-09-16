---
title: javaweb
---

## *概念

### 组件

组件指在应用程序中发挥特定功能的软件单位  

三类javaEE组件：客户端组件，Web组件，EJB组件  

### html

即超文本链接标记语言，使用html可以设计静态网页  

### CSS

层叠样式表，是一种美化网页的技术，主要完成字体，颜色，布局等方面的各种设置  

CSS由三个部分：对象（选择器），属性和值组成的  

选择器通常是指希望定义的html元素或者标签，分为以下三种类型：  
标签选择器：通过html标签定义选择器  
类别选择器：使用class定义选择器  
ID选择器：使用id定义选择器  

属性是希望要设置的属性，并且每个属性都有一个值，属性和值被冒号分开，属性之前用分号分隔，并由花括号包围  

```css
p{background-color:blue;color:red;}//定义标签p的选择器
.csl{color:red;}//定义类别选择器.csl
#cs2{color:red;}//定义id选择器
```

在样式表中使用CSS有四种方式：  
行内式，内嵌式，链接式，导入式  



### JavaScript

一种简单的脚本语言，在浏览器中直接运行，无需服务器的支持  

### 安装Tomcat

默认值：端口号：8080，用户名：空，密码：空  

测试Tomcat：在地址栏输入：`http://localhost:8080`或`http://127.0.0.1:8080`  


### jsp

jsp页面由html代码和嵌入其中的java代码组成  

有四个内置对象：page，request，session，application  

作用域：  

page：对象只能在创建它的JSP页面中被访问  

request：对象可以在与创建它的JSP页面监听HTTP请求相同的任意一个JSP中被访问  

session：对象可以在与创建它的JSP页面共享相同的HTTP会话的任意一个JSP中被访问  

application：对象可以在与创建它的JSP页面属于相同的Web应用程序的任意一个JSP中被访问  

### 传递参数的三种方式  

1.用`jsp`的`forward`或`include`操作，利用传递参数子动作实现传递参数  

2.用表单传输数据  

当向页面2传输表单时，页面1应该这样写：  
```jsp
<form action="页面2的名字" method="post">
    姓名：<input name="mz"><br>
    电话：<input name="dh"><br>
    <input type="submit" value="提交">
</form>
```

3.追加在网址后的参数传递或追加在超链接后面的参数  

### JDBC

JDBC访问数据库流程：

1.注册驱动  
2.建立连接  
3.创建数据库操作对象用于执行SQL语句  
4.执行语句  
5.处理执行结果  
6.释放资源  

访问结果集接口ResultSet：`java.sql.ResultSet`接口相当于一个数据表，通过该接口的实例可以获得检索结果表，以及对应数据表的相关信息。ResultSet具有指向当前数据行的指针  

释放资源的时候是逆序释放，先释放查询的结果集，再释放操作对象，最后释放链接对象  

### javabean

设计Javabean就是编写java类，但与普通类不同，有其特殊的设计规则和要求  

设计规则：  
1.Javabean是一个公众类  
2.javabean类具有一个公共的无参构造方法  
3.JavaBean所有的属性定义为私有的。  
4.在 JavaBean中，需要对每个属性提供两个公共方法。假设属性名字是xxx，要提供的两个方法如下:
setXxx():用来设置属性xxx的值。  
getXxx(:用来获取属性xxx的值（若属性类型是boolean，则方法名为isXxx())。  

### jsp+Servet开发模式

在JSP+JavaBean编程模式中，JavaBean 提供了业务处理,而JSP却具有两种职责:一是，调用执行业务逻辑并负责流程的控制;二是信息的显示和提交。  



## *HTML


1.拓展名为`.html`  


```html
<html>
    <head>
        <title></title>//上方标题内容
    </head>
    <body>
         <font color="red"></font>//字体颜色
    </body>
</html>
```
## 基础标签

![20230516212513](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230516212513.png)

## 图片，音频，视频标签
```html
<!--定义图片-->
<img src="图片地址">
<!--src:规定显示图像的地址 height定义图像的高度 width定义图像的宽度-->
<!--定义音频-->
<audio src="音频地址" controls>
<!--src:定义音频的地址 controls：显示播放控件-->
<!--定义视频-->
<video src="视频地址" controls>
<!--src：规定视频的地址 controls：显示播放控件-->
```

## 超链接标签和列表标签

### *超链接  
```html
<a href="网址" target="设置超链接的页面跳转"></a><!--设置_self是默认值，在当前页面打开，_blank是在空白页面打开-->
```

### 列表

```html
<!--有序列表，会自动给每个列表项排序-->
<ol type="A"><!--定义有序列表,type里设置排序的方式，如从A开始排序，或者从1开始排序，默认从1开始-->
    <li>字段1</li><!--定义列表项-->
    <li>字段2</li>  
    <li>字段3</li>
</ol>

<!--无序列表，在每个列表项前面有一个符号-->
<ul type="circle"><!--定义无序列表，type设置项目符号，如circle表示符号是圆，默认是黑点-->
    <li>字段1</li>
    <li>字段2</li>  
    <li>字段3</li>    
</ul>

```
效果图：  
![20230522185314](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230522185314.png)



## 表格和布局


### *表格
```html

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


       <table border="1" width="100%" cellspacing="0">
        <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>班级</th>
        </tr>
        <tr align="center">//这行里的所有单元格中的字居中
            <td rowspan="2" colspan="1">1</td>//单元格横跨两行纵跨一列
            <td>zxh</td>
            <td>08</td>
        </tr>
        <tr align="center">
            <td>zyz</td>
            <td>1</td>
        </tr>

       </table>
</table>
```

效果图：  
![20230522190608](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230522190608.png)

### 布局

```html
<div>块级标签，会占满一整行</div>
<span>行内标签，不会占满一整行</span>
```


## *表单

表单：在网页中主要负责数据采集功能，使用`<form>`标签定义表单  

表元素：不同类型的`input`元素，下拉列表，文本域  

```html
<form> 定义表单
    action：规定当提交表单时向何处发送表单数据，当为"#"的时候，表名将表单提交到当前的html的页面当中
    method：规定用于发送表单数据的方式
        get：默认值，浏览器会将数据直接附在表单的action URL之后，大小有限制
        post：浏览器会将数据放到http请求协议的请求体中，大小无限制
```
### 表单项

```html
<input> 定义表单项，通过type属性控制输入形式，当type为submit的时候是提交按钮，表单项要想被提交必须指定其name属性  
<label>为表单项定义标注，用for和表单项的id联系，当点到标注时相联系的表单项的光标会显示  
<select>定义下拉列表，并且需要定义上交的name <option>定义下拉列表的列表项，需要定义选项的value
<textarea>定义文本域，需要定义上交的name，可以设置文本域的行数：cols 和列数：rows
```
`input`的`type`属性值：  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230528215850.png" height="300">  

```html
submit:定义提交按钮，value定义按钮的字段名称
    <submit value="免费注册"><!--按钮显示为免费注册的提交按钮-->

reset:重置按钮，同样用value来定义字段文字

button：按钮，用value来定义字段文字

radio:定义单选框的时候，用name来将单选的几个选项联系起来，相同的name的单选项只能选其中一个。用value定义选择的选项的值。
    <input type="radio" name="sex" value="1">男
    <input type="radio" name="sex" value="2">女
    <!--按钮为男女的单选按钮-->

checkbox:定义复选框，和单选框同理，用name定义同一类复选框的名字，value定义每个选项交上去的值

```

## *框架标签

用`<frameset>`定义框架标签，框架标签可以将几个页面显示在一个浏览器标签中  

直接在`<html>`标签下定义,不能再设置`<head>`和`<body>`标签了  

设有三个html文件，分别为`op1.html`和`op2.html`和`op3.html`  

三个页面的样式为这样：  
op1:  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203353.png" width="200">  

op2:  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203407.png" width="200">  
op3:  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203418.png" width="200">  

想将这三个页面按顺序竖直放置，那么代码为：  

```html
<html>
        <frameset cols="20%,50%,20%">
            <frame src="C:/Users/Demo/Desktop/op1.html">
                <frame src="C:/Users/Demo/Desktop/op2.html">
                    <frame src="C:/Users/Demo/Desktop/op3.html">
        </frameset>
</html>

```

最后的效果为：  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529203855.png" width="400">  


按水平放置就将`cols`改为`rows`即可  

效果图为：  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529204347.png" width="400">  

此时，两两个框中间的边框用户是可以拖动来改变他们的大小的，为了避免这种情况，在`<frame>`标签中加入`noresize="noresize"`  




## CSS导入方式

1.内联样式：在标签内部使用style属性，属性值是css属性键值对
```html
<div style="color:red">hello css</div>
```

2.内部样式：定义style标签，在标签内部定义css样式
```html
<style type="text/css">
    div{
        color:red;
    }
</style>
```

3.外部样式:定义link标签，引入外部的css文件  
```html
<link rel="stylesheet" href="demo.css"><!--href指定css文件，rel指定stylesheet表明是css的文件-->

demo.css:  
div{
    color:red;
}
```


## CSS选择器

选择器是选取需设置样式的元素（标签）  

分类：  

1.元素(标签)选择器  
```html
元素名称{
    键值对;
}

div{
    color:red;
}
```

2.id选择器  
id选择器只能选择一个元素
```html
#id的属性值{
    键值对;
}

#op{
    color:red;
}
<div id="op">hello css</div>
```

3.类选择器  
类选择器可以选择多个元素
```html
.class的属性值{
    键值对;
}

.cls{
    color:red;
}
<div class="cls">hello css</div>

```

例如如下代码：  
```html
<html>
    <head>
        <title>html</title>
        <style>
            div{
                color: red;
            }
            #d2{
                color:blue;
            }
            .op{
                color:blueviolet;
            }
        </style>
    </head>
    <body>
      <div>div1</div>
      <div id="d2">div2</div>
      <div class="op">div3</div>
      <span class="op">span</span>
    </body>
</html>
```

显示结果：  

![20230529104055](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230529104055.png)


## CSS属性

`style="display:none"`不显示块中的内容  
`style="display:`显示块中的内容


<a href="https://www.w3school.com.cn/css/index.asp">点击查看</a>


## JavaScript

用来控制网页行为的，使网页可交互  

## 引入方式

### 1.内部脚本：将js代码定义在html页面中  

在html中，JavaScript代码必须位于`<script>`与`</script>`之间，且`<script`必须在`<head>`之间  



```html

<script>
    alert("hello js~");
</script>
<!--alert表示弹出警告 框，内容是hello js~-->
```
注意：  

1.在html文档中可以在任意地方放置任意数量的`<script>`  

2.一般把脚本置于`<body>`元素的底部，可改善显示速度，因为脚本执行会脱慢显示  



### 2.外部脚本：将js代码定义在外部js文件中，然后引入到html文件中  

外部文件：`demo.js`
```js
alert("hello js");
```

引入外部js文件：  
```html
<script src="../js/demo.js"></script>
```
注意：  

1.外部脚本不能包含`<script>`标签  

2.`<script>`标签不能自闭合  

## 基础语法

### 书写语法

数据类型：`int,float,String,boolean,null`  

变量：用var声明变量  
```Java
var x;
var a=new Array(10);//声明一个大小为10的数组
```

函数的声明：先在`<script>`里定义函数，再使用  

```javascript
function test(){//函数实现弹出窗口
    window.alert("hello");
}
```

1.区分大小写  

2.每行结尾的分号可有可无  

3.注释：  
单行注释：//注释内容  
多行注释：/*注释内容*/  

4.大括号表示代码块  

### 输出语句
```js
alert("弹出警告框");
document.write("写入html输出");//可以直接在页面看到
console.log("写入浏览器控制台");//在开发者工具中点控制台能看到
```


### 变量

JavaScript中用关键字`var`来声明变量  
```js
var test=250;
text="zyz";
```

JavaScript是一门弱类型的语言，变量可以存放不同类型的值  

变量名遵循如下规则：  

1.组成字母可以是任何字母，数字，下划线，或美元符号  

2.数字不能开头  

`var`是一个全局变量，也可以重复定义  

`let`也可以用来定义变量，但是定义的变量只在所在代码块内有效，且不允许重复声明  

`const`用来定义一个只读的变量，他的值不能改变  

### 数据类型

类型分为原始类型和引用类型  

五种原始类型：  
```js
number:数字（整数，小数）
string:字符，字符串，单双引皆可
boolean:布尔，true，false
null:对象为空
undefine:当声明的变量未初始化时，该变量的默认值是undefined
```

使用`typeof`运算符可以获取数据类型  


### 函数

用`function`定义函数类型，参数不需要写名称，返回时直接`return`返回到需要的值  

```js
方法1：
function 名称{
    代码段
    return 返回值;
}

方法2：
var 名称=function{
    代码段
    return 返回值;
}

```

调用：  
直接调用名称。  

```js
var result=函数名称(实际参数);
```

实际参数的个数可以和定义的函数的形参个数不同：  

当个数大于形参时，函数只接收形参那么多个数  

当个数小于形参时，剩下的没有接收的形参的值为`NAN`，加上其他的参数结果还是`NAN`  

实现一个`a+b`：  

```js
function add(a,b){
    return a+b;
}
var result=add(1,2);
```

## 对象

### 数组对象

`Array`是数组对象  
```js
//定义：
var 变量名=new Array(元素列表);//方式1
var arr=new Array(1,2,3);

var 变量名=[元素列表];//方式2
var arr=[1,2,3];


//访问
arr[索引]=值;
arr[0]=1;
```
数组是变长变类型，没有定义的数的值是undefined，输出整个字符的时候没有值的用空字符代替  

属性：  

`length`是是数组中元素的个数  

`push`：添加方法  

`splice`:删除元素  

```js
var arr=[1,2,3];
arr.push(10);//在数组的最后一个数后添加一个10
arr.splice(0,1);//表示从下标为0的位置开始删，删除1个元素
```
还有一些其他的方法如下：  

![20230530111656](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230530111656.png)


### 字符串对象

`String`是字符串对象  

定义：
```js
var 变量名 =new String(s);//方式1
var str=new String("hello");
var 变量名 =s;//方式2
var str="hello";
```
属性：  

length：返回字符串的长度  

trim：去除字符串前后两端的空白字符  

### 自定义对象

```js
var 对象名称={
    属性名称1:属性值1,
    属性名称2:属性值2,
    ...
    函数名称:function(形参列表){
        代码段
    }
};

var person={
    name="zhangsan",
    age:23,
    eat:function(){
        alert("干饭");
    }
};

访问：  

alert(person.name);
person.eat();

```

### 浏览器对象模型


#### window

浏览器窗口对象  

获取：直接用window，其中window可省略  

```js
alert：弹出只有确认按钮的窗口
alert("弹出只有确认的窗口");

confirm：弹出有确认和取消按钮的窗口，有返回值，当选择确认的时候返回true，否则返回false
confirm("弹出有确认和取消按钮的窗口");

setTimeout:在一定的时间间隔后去执行语句，只执行一次
setTimeout(function,毫秒);
setTimeout(function(){
    alert("间隔一定时间弹出一次");
},3000);

setInterval:在一定的时间间隔后去执行语句，循环执行
setInterval(function(){
    alert("间隔一定时间循环弹出");
},3000);
```

案例：  

定时切换图片：  

需求：每隔一秒，灯泡图片切换一次状态  

```js
//设on()函数是控制开灯的函数，off()函数是控制关灯的函数
var x=0;
setInterval(function(){
    if(x%2==0){
        on();
    }else{
        off();
    }
    x++;
},1000);

```






<!-- ### DOM

文档对象模型  

JavaScript通过DOM，能对HTML进行操作：  

1.改变html元素的内容  
2.改变html元素的样式  
3.对html DOM事件做出反应  
4.添加和删除html元素   -->

#### Element对象

元素对象

获取：使用Document对象的方法来获取  

```js
1.getElementById:根据id属性值获取，返回一个Element对象
2.getElementsByTagName:根据标签名获取，返回Element对象数组
3.getElementsByName:根据name属性值获取，返回ELement对象数组
4.getElementsByClassName:根据class属性值获取，返回ELement对象数组
```

Element的使用：  

```js
//修改图片内容
var img=document.getElementById("对应的id名称");
img.src="新的图片的地址";
```

### 事件监听


事件：  

onblur:元素失去焦点
onfocus:元素获得焦点
onchange:内容被改变
onclick:被点击
onmouseover:鼠标移到某个元素之上
onreset:重置按钮被点击
onselect:文本被选中
onsubmit:确认按钮被点击



事件监听：JavaScript可以在事件被侦测到的时候执行代码  

#### 事件绑定

方式一：通过html标签中的事件属性进行绑定  
```js
<input type="button" onclick='on()'>
function on(){
    alert("我被点了");
}
```
方式二：通过DOM元素属性判定  
```js
//绑定点击
<input type="button" id="btn">
document.getElementById("btn").onclick=function(){
    alert("我被点了");
}
```

##### 表单验证

1.当输入框失去焦点的时候，判断输入框是否符合要求
步骤：  
1.获取输入框  
```js
var op=document.getElementById("id名称");
```
2.绑定事件
```js
//假设事件为失去焦点
op.onblur=function(){

}
```
3.获取输入框的内容
```js
//假设事件为失去焦点
op.onblur=function 函数名称(){
    //获取输入内容并且去掉首尾的空格
    var name=op.value.trim();
}
```
4.判断用户名是否输入规则
```js
//假设限制是长度6~12位，更复杂的判断用正则表达式
op.onblur=函数名称;

function 函数名称(){
    //获取输入内容并且去掉首尾的空格
    var name=op.value.trim();
    if(name.length>12||name.length<6){
        //不符合要求，将语句显示出来
        document.getElementById("隐藏的话的id").style.display='';
        return false;//必要的时候设置返回值
    }else{
        document.getElementById("隐藏的话的id").style.display='none';
        return true;
    }
}
```

2.当点击提交按钮时，判断所有的输入框内容是否符合要求，不符合则阻止表单提交  

1.获取表单对象
```js
var op2=document.getElementById("表单的id");
```
2.为表单对象绑定`onsubmit`
```js
op2.onsubmit=函数名称;
function 函数名称(){
    
}
```
3.验证所有输入框是否满足要求，如果有一项不符合就返回false
```js
op2.onsubmit=函数名称;
function 函数名称(){
    if(!函数1())return false;
    if(!函数2())return false;
    ...
}
```

### 正则表达式

正则表达式定义了字符串组成的规则

```js
//直接量：注意不加引号
var reg=/^\w{6,12}$/;
//创建RegExp对象
var reg=new RegExp("^\\w{6,12}$");
//方法
test(str):判断指定字符是否符合规则，返回true或false
```
语法：  
![20230531143113](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230531143113.png)


## JSP
概念：  

java服务端页面  

一种动态的网页技术，其中既可以定义html，js，css等静态内容，还可以定义java代码的动态内容  

jsp=html+java  

java代码用`<%%>`包含  

## jsp指令元素

指令包括：`page`,`include`,`taglib`  

指令的语法格式：
```jsp
<%@ 指令名称 属性1="属性值1" 属性2="属性值2"...%>
```

### page指令

定义jsp页面的全局属性  

作用域：他所在的jsp文件页面和其包含的文件  

属性：  

```jsp
<%@page language="java"%>//指定用到的脚本语言，默认是java
<%@page import="java.until.Date"%>//需要显示当前时间时，导入java.until.Date类
<%@page contentType="text/html" pageEncoding="UTF-8"%>//页面使用汉字的时候，采用UTF-8编码
```
### include指令

文件加载指令，将其他的文件插入jsp文件中，属于静态插入  

```jsp
<%@include file="被插入的文件的名称"%>
```


## 脚本


![20230601172936](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230601172936.png)

显示当前时间：  

```jsp
Date day=new Date();
<%=day%>
```

表达式：直接嵌入html页面  

格式：
```jsp
<%=表达式%>
```


## 动作元素

### 1.<jsp:include>动作


功能：当前jsp文件动态包含另一个文件  

语法格式：  

```jsp
<jsp:include page="文件的名字">
...
<jsp:include/>
```


### 2.<jsp:forward>动作

用于停止当前页面的执行，转向另一个html或者jsp页面  

语法：  
```jsp
<jsp:forward page="文件名字">
...
</jsp:forward>
```

### 3.<jsp:param>子标签

`param`不能独立使用，需作为`<jsp:include>`和`<jsp:forward>`标签的子标签使用  

当与`<jsp:include>`使用，将`param`中的变量值传递给动态加载的页面  

语法格式：  
```jsp
<jsp:include page="接收数据的文件的名字">
    <jsp:param name="要传递的变量名字1" value="变量值1"/>
    <jsp:param name="要传递的变量名字2" value="变量值2"/>
    ...
</jsp:include>
```

当与`<jsp:forward>`使用，将`param`中的变量传递给要跳转的文件，然后对被穿进页面对参数进行加工处理  
```jsp
<jsp:forward page="文件的名字">
    <jsp:param name="变量名字1" value="变量值1"/>
    <jsp:param name="变量名字2" value="变量值2"/>
    ...
</jsp:forward>
```
比如在op1中需要传递数据到op2，那么我们就需要在op1中定义：  

```jsp
<jsp:include page="op2.jsp">
    <jsp:param name="x" value="1">
</jsp:include>
```

## jsp内置对象

有四个对象：page，request，session，application  

作用域：  

page：对象只能在创建它的JSP页面中被访问  

request：对象可以在与创建它的JSP页面监听HTTP请求相同的任意一个JSP中被访问  

session：对象可以在与创建它的JSP页面共享相同的HTTP会话的任意一个JSP中被访问  

application：对象可以在与创建它的JSP页面属于相同的Web应用程序的任意一个JSP中被访问  

### request对象


#### 获取数据

`request`对象的`getParameter("name")`的方法，可以将数据获取  

比如说获取变量x

```jsp
int str1=request.getParameter("x");
```

字符串变为数字：  

```jsp
整数：
Integer n=Integer.parseInteger(字符串名);
小数：
double n=Double.parseDouble(字符串变量名);
```

如果输入的是汉字，显示页面出现乱码，那么就在最上面添加一行
```jsp
request.setCharacterEncoding("UTF-8");
```
#### 新属性的设置和获取

使用`request`对象的`setAttribute("name",obj)`的方法，把数据设置在`request`范围内，请求转发之后的页面用`getAttribute("name")`就可以获取obj的值  

比如在文件1中有两个实数，想把他建立到`request`里，供文件2调用     
文件1：将op1，op2作为n和m建立  
```jsp
<%
double op1=2.3;
double op2=3.4;
request.setAttribute("n",op1);
request.setAttribute("m",op2);
%>
```
文件2：获取n和m

```jsp
double a1=(Double)request.getParameter("n");
double a2=(Double)request.getParameter("m");
```
### response对象

#### 重定向网页

用`response`中的,`sendRedirect`方法重定位到另一个页面  

```jsp
response.sendRedirect("要跳转的网址");
```

与`<jsp:forward>`不同点：  
1.`<jsp:forward>`会带`request`中的信息跳转，而本句不会带任何信息  
2.只能使用`<jsp:forward>`在本网站内跳转，而使用本句可以跳转到任意一个地址的页面  



#### 定时刷新以及自动跳转

采用`response`对象的`setHeader`方法  

```jsp
response.setHeader("refresh",5);//每隔五秒自动刷新
response.setHeader("refresh","10;url=要跳转的地址");//延迟10秒之后自动重定向到网页
```
### session对象

会话：用户在浏览某个网站的时候，从进入网站到浏览器关闭所经过的这段时间称为一次会话  

作用域:在用户的整个会话期间有效  

```jsp
session.isNew();//判断当前session是否为新的session
```


## application对象

作用域:在整个应用程序的生命周期内有效，对所有用户和会话可见  

### 获取指定数据的值

`application`对象中的`getAttribute`获取指定数据的值  

```jsp
Integer number=(Integer)getAttribute("要获得的数据的name");
```

### 设置一个新属性并保存值  

```jsp
application.setAttribute("name",值);
```


## out对象

用`print`输出值

```jsp
out.print("<br/>");//输出回车
out.print(op1);//输出变量op1
out.print("abc");//直接输出abc
out.print(j+" ");//输出j的值和空格
out.print(j+"<br>");//输出j的值和空格
```


## JDBC

## javabean

根据设计规则设计：  

设计一个圆的javabean类Circle.java，并且该圆中有计算圆周长和面积的方法

```java
public class Circle{
    private int numble;//圆的编号
    private double x;//圆的x坐标
    private double y;//圆的y坐标
    private double r;//圆的半径
    private String color;//圆的颜色
    private boolean fill;//圆是否填充
    public int getNumble(){return number;}
    public void setNumber(int number){this.number=number;}
    public double getX(){return x;}
    public void setX(double x){this.x=x;}
    ...//y，r，color的构造方法和x的构造方法一样
    public boolean isFill(){return fill;}
    public void setFill(boolean fill){this.fill=fill;}
    public Circle{}//公共参数无构造方法，使用默认构造方法
    public double circleArea(){return Math.PI*r*r;}
    public double circleLength(){return 2*Math.PI*r;}
}
```

### 声明Javabean对象

使用'<jsp:useBean>'标签

```jsp
<jsp:useBean id="对象名" class="类名" scope="有效范围">

</jsp:useBean>
```

### 访问Javabean的属性

Javabean属性的设置：  

```jsp
<jsp:setProperty name="id名字" property="要设置的类型名字" value="要设置的值">
```

例如，将c的两个属性值shuju1和shuju2设置值为10和20  

```jsp
<jsp:useBean id="c" class="c.jsp"/>
<jsp:setProperty name="c" property="shuju1" value="10"/>
<jsp:setProperty name="c" property="shuju2" value="20"/>

```

### 获取Javabean的属性值并显示

使用`<jsp:getProperty>`标签  

```jsp
<jsp:getProperty name="id名字" property="属性名字">
```





