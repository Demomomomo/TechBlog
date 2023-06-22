---
title: android
---

## 第一章：android入门

属于Google发布Android源代码的授权方式是Apache开源许可证  

短信程序与联系人程序属于应用程序层 音频驱动属于Linux内核层  



### 图片资源

扩展名为：`.png,.jpg,.gif,.9.png`等的文件  

图片资源都在文件夹app的src下的res里  

图片资源分类：  

1.应用图标资源：在mipmap里  

2.界面中使用的图片资源：在drawable里  

调用图片资源的方法：  

![20230621190617](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621190617.png)  


### 主题和样式的资源

主题是包含一种或多种的格式化属性集合，在程序中调用主题资源可改变窗体的样式，对整个应用或某个Activity存在全局性影响。  

定义位置：res/values目录下的themes.xml中  

```xml
<style><!--用来定义主题，属性name用来定义主题的名称，parent来定义副主题-->
    <item></item><!--用于设定主题的样式，属性name设置样式名称-->
</style>

```

设置view的具体样式：定义位置在res/values目录下的theme.xml文件中，然后在activity_main.xml里的TextView中设置style="@style/样式名称即可"  

```xml
<style><!--用来设置样式-->
    <item></item><!--设置控件的样式-->
</style>

```

### 布局资源

布局资源常用于搭建程序中的各个界面  

定义位置：res/layout文件夹中  

调用方式：  

![20230621220900](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621220900.png)  


### 字符串资源

位置：res/values/文件夹的strings.xml中  

编写字符串资源：  

![20230621221659](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621221659.png)  


调用资源：  

![20230621221818](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621221818.png)  


### 颜色资源

定义位置：res/values/文件夹的colors.xml文件中  

![20230621231723](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621231723.png)  

调用颜色资源：  

![20230621231841](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621231841.png)  


定义颜色值：  

![20230621232338](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232338.png)  

例子：  

![20230621232409](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232409.png)  


### 尺寸资源

尺寸资源：例如view的宽高值  

定义位置：res/values/文件夹里的dimens.xml中  

![20230621232800](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621232800.png)  

调用方法：  

```xml
在java代码里进行调用：
getResources().getDimension(R.dimen.名称);
在xml里进行调用：
@dimen/名称
```


### 单元测试

单元测试是指在应用程序开发过程中对最小的功能模块进行测试  

分类：  

1.android单元测试：速度比较慢，ExampleInstrumentedTest  

2.junit单元测试：只适合java，ExampleUnitTest类  


### LogCat的使用

LogCat是android中的命令行工具，用于获取程序从启动到关闭的日志信息  

Log类所输出的日志内容分六个级别：  

![20230621234444](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230621234444.png)  


## 第二章 android常见界面布局



在XML文件中编写布局:有效的将界面中布局的代码和Java代码隔离，使程序的结构更加清晰。  

在Java代码中编写布局:在Android中所有布局和控件的对象都可以通过new关键字创建出来，将创建的View控件添加到ViewGroup布局中，从而实现View控件在布局界面中显示。  


常见的界面布局：  

线性布局，相对布局，帧布局，表格布局，约束布局  

通用属性：  

![20230622114617](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622114617.png)  


### LinearLayout线性布局

主要以水平或垂直方式来显示界面中的控件。当控件水平排列时，显示顺序依次为从左到右，当控件垂直排列时，显示顺序依次为从上到下。  

设置水平布局：在activity.xml文件里，先将界面设置为水平：  

![20230622131256](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622131256.png)  

用属性orientation来设置vertical竖直，还是horizontal水平排列  

![20230622131556](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622131556.png)  


### RelativeLayout相对布局

相对布局是通过相对定位的方式指定子控件位置，即以其它控件或父容器为参照物，摆放控件位置  

定义格式：  

![20230622133030](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622133030.png)  


属性：  

![20230622134901](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622134901.png)  

例子：  

![20230622140652](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622140652.png)  

效果图：  

![20230622140725](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622140725.png)  

### TableLayout表格布局

采用行、列的形式来管理控件，它不需要明确声明包含多少行、多少列，而是通过在TableLayout布局中添加TableRow布局来控制表格的行数，通过在TableRow布局中添加控件来控制表格的列数。  


![20230622141404](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622141404.png)  

属性：  

![20230622141525](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622141525.png)  

例如：实现下面的表格  

三行三列，且第三列被拉伸  

![20230622143352](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622143352.png)  

运行代码：  

![20230622143738](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622143738.png)  

### FrameLayout帧布局

帧布局用于在屏幕上创建一块空白区域，添加到该区域中的每个子控件占一帧，这些帧会一个一个叠加在一起，后加入的控件会叠加在上一个控件上层显示  

所有控件都默认显示在屏幕左上角。  

定义格式：  

![20230622144128](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622144128.png)  

例如：  

![20230622145005](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622145005.png)  

效果图：  

![20230622145343](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622145343.png)  


## 第三章android常见界面控件



### TextView控件

显示文本信息  

![20230622150130](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622150130.png)  

![20230622151008](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151008.png)  

![20230622151058](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151058.png)  


### EditText控件

EditText表示编辑框，它是TextView的子类（可以使用TextView里的属性），用户可在此控件中输入信息。  

属性:  

![20230622151232](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622151232.png)  

例子：  

![20230622153700](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622153700.png)  

代码：  

![20230622153630](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622153630.png)  

### Button控件

Button控件表示按钮，它继承自TextView控件，既可以显示文本，又可以显示图片,同时也允许用户通过点击来执行操作，当Button控件被点击时，被按下与弹起的背景会有一个动态的切换效果，这个效果就是点击效果  

方法1：

在xml里的相应按钮设置点击事件，再在java里设置方法
```xml
在xml里设置：onClick="click"
在java的MainActivity里设置一个变量表示被点击的按钮：
private Button button1;
在onCreate里将他赋值成被点击的按钮：
button1=findViewById(R.id.button1);
在java里设置点击之后发生的事：
public void click(View view){
    button1.setText("按钮1已被点击");
}

```
xml代码：  

![20230622161810](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622161810.png)  

java代码：  

![20230622161719](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622161719.png)  

方法2：  

匿名内部类：  

在java代码中对按钮操作：  

![20230622162153](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622162153.png)  

方法3：  

```java
void onCreate(){
    private Button button3;
    button3=findViewById(R.id.button3);
    button3.setOnClickListener(this);
}
@Override
public void onClick(View v){
    button3.setText("按钮3被点击");
} 

```



### ImageView控件

显示图片  

![20230622162342](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622162342.png)  

例：  

![20230622163010](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163010.png)  

效果图：  

![20230622163028](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163028.png)  

background是背景图的属性，大小会根据背景尺寸伸缩   

src并不会根据背景伸缩，还是原图的尺寸  



### RadioButton控件

RadioButton为单选按钮，android:checked属性指定是否选中的状态。  

RadioGroup是单选组合框，可容纳多个RadioButton，并把它们组合在一起，实现单选状态。  

![20230622163346](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622163346.png)  


![20230622164507](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622164507.png)  

![20230622164311](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622164311.png)  





### CheckBox控件

CheckBox表示复选框,它是Button的子类,用于实现多选功能通过android:checked属性指定CheckBox控件是否选中的状态。  

CheckBox没有Group  

xml中的定义：  

![20230622181942](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622181942.png)  

![20230622185505](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622185505.png)  



### ListView控件

ListView以列表的形式展示数据内容，并且能够根据列表的高度自适应屏幕显示。  

![20230622185642](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622185642.png)  

要想在ListView里显示内容，就需要选择适配器  

常用的数据适配器：BaseAdapter，SimpleAdapter，ArrayAdapter  

BaseAdapter顾名思义是基本的适配器。他实际上是一个抽象类，通常在自定义适配器时会继承BaseAdapter  

![20230622190352](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622190352.png)  


例如：进行物品列表item的实现  

分别用下面的数组来设置每个物品的名字，价格和图片  

![20230622202749](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622202749.png)  

然后再设置一个类：  

![20230622202949](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622202949.png)  


![20230622203601](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622203601.png)  

最后在onCreate里设置适配器：  

![20230622203919](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622203919.png)  


## 第四章 Activity

Activity：负责与用户交互的组件  

###  Activity的开启和关闭

![20230622210044](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622210044.png)  

### Intent

Intent被称为意图，是程序中各组件进行交互的一种重要方式，他不仅可以指定当前组件要执行的动作，还可以在不同组件之间进行数据传递。  


一般用于启动Activity、Service以及发送广播等。根据开启目标组件的方式不同，Intent被分为两种类型显示意图和隐式意图。  


intentfilter有三个属性：  

action属性:  

![20230622234046](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234046.png)

data属性：  

![20230622234130](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234130.png)  

category属性：  

![20230622234206](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230622234206.png)  

### Activity之间的跳转

1.传递数据用intent的putExtra()方法传递数据  

将MainActivity里的数据传到SecondActivity  

首先在MainActivity里定义：  

```java
Intent intent=new Intent(MainActivity.this,SecondActivity.class);
intent.putExtra("student"，"小明");
startActivity(intent);
```

再在SecondActivity里用getXXExtra()获取对象：  

```java
Intent intent=getIntent();
String name=intent.getStringExtra("student");
```

1.用Bundle类传递数据  

先在MainActivity中将数据传输给SecondActivity  

```java
Intent intent=new Intent();
intent.setClass(this,SecondActivity.class);
Bundle bundle=new Bundle();//创建一个Bundle对象
bundle.putString("account","江小白");//将用户名封装到Bundle中
intent.putExtras(bundle);//将bundle对象封装到intent对象
startActivity(intent);
```
在SecondActivity中获取传递信息  

```java
Bundle bundle=getIntent().getExtras();//获取Bundle对象
String account=bundle.getString("account");//获取用户名
```

### Activity之间的数据回传

有三种方法：  

![20230623001824](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623001824.png)  


### Fragment

Fragment是一种可以嵌入在Activity中的UI片段，它可以用来描述Activity中的一部分布局。  

动态添加：  

在Activity中使用Fragment时，可以通过两种方式将Fragment添加:一种是通过布局文件添加，一种是通过代码动态添加。  

通过布局添加：  

![20230623003414](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003414.png)  

动态添加：  

![20230623003557](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003557.png)  

![20230623003622](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230623003622.png)  




