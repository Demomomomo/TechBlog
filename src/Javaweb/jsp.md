---
title: JSP
---

概念：  

java服务端页面  

一种动态的网页技术，其中既可以定义html，js，css等静态内容，还可以定义java代码的动态内容  

jsp=html+java  

java代码用`<%%>`包含  



## 脚本


![20230601172936](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230601172936.png)

显示当前时间：  

```jsp
Date day=new Date();
<%=day%>
```


## 传输数据

### 1.<jsp:include>动作

语法格式：  

功能：当前jsp文件动态包含另一个文件  

```jsp
<jsp:include page="文件的名字">
...
<jsp:include/>
```


### 2.<jsp:forward>动作

用于停止当前页面的执行，转向另一个html或者jsp页面  

语法：  
```jsp
<jsp:forward page="文件名字"/>
...
</jsp:forward>
```

### 3.<jsp:param>子标签

`param`不能独立使用，需作为`<jsp:include>`和`<jsp:forward>`标签的子标签使用  

当与`<jsp:include>`使用，将`param`中的变量值传递给动态加载的页面  

语法格式：  
```jsp
<jsp:include page="文件的名字">
    <jsp:param name="变量名字1" value="变量值1"/>
    <jsp:param name="变量名字2" value="变量值2">
    ...
</jsp:include>
```

当与`<jsp:forward>`使用，将`param`中的变量传递给要跳转的文件，然后对被穿进页面对参数进行加工处理  
```jsp
<jsp:forward page="文件的名字">
    <jsp:param name="变量名字1" value="变量值1"/>
    <jsp:param name="变量名字2" value="变量值2">
    ...
</jsp:forward>
```
### 表单的传输
当向页面2传输表单时，页面1应该这样写：  
```jsp
<form action="页面2的名字" method="post">
    姓名：<input name="mz"><br>
    电话：<input name="dh"><br>
    <input type="submit" value="提交">
</form>
```

页面二这样显示：  

```jsp
<body>
<%String str1=request.getParameter("mz");
String str2=request.getParameter("dh");%>
<font face="宋体" size="4" color="blue">
您输入的名字为：<%=str1%>
电话：<%=str2%>
</font>
<body>
```



被传入的页面获取参数用：  

```jsp
<%String str1=request.getParameter("变量名字1");%>
```


### 用超链接传输

在上面的`<form>`的标签，也可以转换为超链接传输：  

```jsp
<a href="文件2地址?mz=姓名&dh=123456">传递参数</a>

```


## request对象

作用域：变量能在一次请求中生效  

### 获取数据

`request`对象的`Parameter("name")`的方法，可以将数据获取  

 

字符串变为数字：  

```jsp
整数：
int n=Integer.parseInt(字符串名);
小数：
double n=Double.parseDouble(字符串变量名);
```


如果输入的是汉字，显示页面出现乱码，那么就在最上面添加一行
```jsp
request.setCharacterEncoding("UTF-8");
```
### 新属性的设置和获取



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
double a1=(Double)request.getAttribute("n");
double a2=(Double)request.getAttribute("m");
```
## response对象


### 重定位

用`response`中的,`sendRedirect`方法重定位到另一个页面  

```jsp
response.sendRedirect("要跳转的网址");
```

与`forward`不同的是，`<jsp:forward>`会带`request`中的信息跳转，而本句不会带任何信息  


### 定时刷新以及自动跳转

采用`response`对象的`setHeader`方法  

```jsp
response.setHeader("refresh",5);//每隔五秒自动刷新
response.setHeader("refresh","10;url=要跳转的地址");//延迟10秒之后自动重定向到网页
```
## session对象

范围：在一次会话中生效  


## application对象

范围：能在一个应用下的多个会话，在服务器的多个项目之间使用  

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
```




