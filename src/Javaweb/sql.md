---
title: 数据库
---

<!-- 因为我是下载到E盘的，所以先转换到E盘，然后再打打开bin的根目录 -->



## 数据库概述

### 数据独立性

数据独立性包括两个方面：逻辑独立性和物理独立性  

好处：（1）减轻了应用程序的维护工作量（2）提高数据共享性,使数据库系统有较好的可扩充性  

### 数据库系统的组成

数据库系统一般由数据库、数据库管理系统、应用程序和数据库管理员四个部分。数据库系统的核心和大脑是数据库管理系统。  

## 数据库系统结构

### 数据特征

数据库中的数据具有静态和动态两种特征：  

1.静态特征：包括数据的基本结构，数据间的联系以及对数据取值范围的约束  

2.动态特征：指对数据可以进行一些符合一定规矩的操作  

数据模型三要素：包括数据的基本结构，数据的约束条件，和定义在数据上的操作  

### 数据库的组织模型

层次模型，网状模型，关系模型，对象-关系模型  

### E-R图


![20230619121902](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619121902.png)  

![20230619121927](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619121927.png)  

![20230619122038](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619122038.png)  


实体之间的联系：一对一，一对多，多对多  

例子：  

![20230619122933](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619122933.png)  

![20230619123000](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619123000.png)  

![20230619123037](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619123037.png)  

设计E-R图的步骤：先将所有有关系的实体建立E-R图，然后再合并这些图  

将两个E-R图合并成一个图时，将一个实体在两个图中的所有属性都标注出来，对于一个实体，可以对多种实体有不同的联系，就都列出来  

![20230619172132](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619172132.png)  


### 关系模型

一个实体和一些属性构成一张关系表，用括号将多个属性包含在内  

主码：是关系中用于唯一确定一个元组的一个属性或属性最小组（注意：主键可以有多个，根据实体来确定）  

外码：用于表示两个或多个实体之间的关联关系  

主属性：主码所包含的属性称为关系的主属性  

非主属性：其他的非主码属性称为非主属性  

在一个关系模型中，主键用下划线标注  

比如学生有4个属性：学号，姓名，性别，出生日期。可以看出只要知道学号就可以确定一个学生，那么学号就是主键，用下划线标注  

关系模型：学生（<u>学号</u>，姓名，性别，出生日期）  

选课有三个属性：学号，课程号，学分。一个学生可以选很多课程，那么需要学号和课程才能确定选什么课，那么学号和课程号就是主键  

关系模型：选课（<u>学号</u>，<u>课程号</u>，学分）  

关系模型的数据完整性约束：  

1.实体完整性 2.参照完整性 3.用户定义完整性  

### 三级模式结构

1.内模式：数据的物理存储方式  

2.外模式：用户所看见的数据视图  

3.概念模式：介于内模式和外模式之间的中间层次，也称为模式  

## SQL语言

完整性约束条件的作用对象：表，元素，列  

SQL语言特点：1.一体化 2.高度自动化 3.简洁 4.能以多种方式使用

进入SQL：在cmd中以管理员身份运行，输入用户和密码：  
```sql
mysql -uroot -p
12342
```


当想退出的时候输出语句：  
```sql
exit
```


通用语法：
1.可以单行或者多行书写，以分号结尾  

2.SQL语句不区分大小写，关键字建议使用大写

3.注释  
单行注释：`-- 注释内容` 或`#注释内容`  
多行注释：/*注释内容*/  

语句：  
```sql
show databases;-- 查询所有数据库名称
```
## 分类

DDL：数据定义语言，用来定义数据库对象，表，列等  
DML：数据操作语言，用来对数据库中表的数据进行增删改  
DQL：数据查询语句，用来查询数据库中表的记录  
DCL：数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户  

操作的对象及关系如下： 

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/3F984FA332063984B369B20EFBEDC721.png" alt="Pulpit rock" width="504" height="258">  


### DDL

操作数据库和表  

操作数据库  

#### 1.查询  
查询所有数据库  
```sql
show databases;-- 查询所有数据库名称
```

#### 2.创建数据库
```sql
create database db1;-- 创建数据库db1
```
不能创建名称已经存在的数据库  
那么我们就先判断一下要创建的数据库是否存在，如果不存在的话就创建  
```sql
create database if not exists db1;
```

#### 3.删除数据库
```sql
drop database db1;-- 删除db1
```
不能删除不存在的数据库  
那么我们就先判断一下存在不存在  
```sql
drop database if exists db1;
```

#### 4.使用数据库
```sql
use db1;-- 使用数据库db1
select database();-- 查询当前使用的数据库
```

查找当前在哪个数据库  
```sql
select database();
```

操作表  

#### 1.查询表  
查询当前数据库所有的表  
```sql
use db1;-- 先使用数据库db1
show tables;-- 查询db1的所有表
desc func;-- 查询表func的具体结构信息
```
#### 2.创建表  

表的数据类型  
![C42BA0584D8CC9EBB733532B1379188E](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C42BA0584D8CC9EBB733532B1379188E.png)  

用法：  
double:用来存储小数  
名称 double(总长度[最大值的位数+保留的小数点后面的位数]，保留小数点后的位数)  
date:用来存储年月日，日期的数据表示为XXXX-XX-XX  
名称 date  
char:定长字符串，存非Unicode字符串，占用空间n字节  
名称 char(字符串最大长度x，储存的字符串如果小于x，那么少的部分用空格填满)  
varchar:变长字符串  
名称 varchar(字符串最大长度)  
nchar：定长字符串，存Unicode字符串数据，空间占用为2n字节  
名称 nchar(字符串最大长度)
```sql
create table 表名(
    字段名1 数据类型,
    字段名2 数据类型,
    ...
    字段名n 数据类型-- 注意，最后一行没有逗号
)；
```
比如在数据库db1中创建下图结构的表  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/DCF05D7F81784E022B008D820C32AA4E.png" alt="Pulpit rock" width="304" height="158">  

代码：  
```sql
use db1;
create table tb_user(-- 用的是括号
    id int,-- 每行用逗号隔开
    username varchar(30),-- 在数据库中字符串用varchar表示，括号里的数字表示字符串不能超过的最长长度
    password varchar(30)-- 最后一行没有逗号
);
```

#### 3.删除表  
```sql
drop table op;
drop table if exists op;
```

#### 4.修改表  

```sql
alter table op drop column password;-- 删除表op中名为password的列
alter table op add name varchar(30);-- 添加一个名为name的数据类型为字符的列
alter table op alter column id varchar(30);-- 将列为id的数据类型改为字符
```


### DML 
对数据进行操作  

#### 1.添加数据  

给指定列添加数据  
```sql
insert into op1(name) values("zyz");-- 给表名为op1的表中名为name的列添加一个zyz的数据
insert into op1(birthday) values("2019-01-10");-- 给表名为op1的表中名为birthday的列加入一个 2019-01-10的date数据
```

给全部列添加数据  
```sql
insert into op1 values(1,"zyz","zxh");-- 在op1的表里加上一行数据
```

批量添加数据  
```sql
insert into op1 values(1,"zyz","zxh")，(2,"zxh","zyz");-- 添加两行数据
```

#### 2.修改数据  

```sql
update op1 set id=4,name="zyx" where name="zxh";-- 将名为op1的表中，名字为zxh的数据，id改为4，name改为zyx
```
如果不加上where后面的条件，那么所有的数据的列都会修改  

#### 3.查询数据  
```sql
select * from op1;-- 查询名为op1的表中的数据
```

#### 4，删除数据  
```sql
delete from op1 where name="zyz";-- 删除名为op1的表中，name是zyz的数据
```


### DQL

查询数据  

先where再group by  
先group by再order by  

#### 基础查询：  
1.查询多个字段  
```sql
select 字段列表 from 表名;
select name,age from op2;-- 查找表op2中的name和age两个字段

select * from 表名;-- 查询所有数据
select * from op2;-- 查询表op2中的所有数据

select name ,"出生年月"，password from op;-- 在op里查找name和password，并且中间显示一个全为'出生年月'的列

```

2.去除重复记录  
```sql 
select distinct 字段列表 from 表名;-- 查询到的就是这个字段内所有不重复的字段
select distinct sex from op2;
```


3.起别名
```sql
as:as 也可以省略
select idol as love from op2;-- 查询表op2中的字段名为idol的列，idol显示为love
select idol love from op2;-- as可以省略
```


#### 条件查询  

条件符号及其含义：  
![20230506172652](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230506172652.png)




```sql
select 字段 from 表名 where 条件列表;
select name from op2 where idol="EXO";-- 查询op2表中中字段idol为EXO的name字段
select name from op2 where age>=19 and age<=30;-- 查询age在19到30之间的name
select name from op2 where age between 19 and 30;-- 查询age在19到30之间的name
select * from op2 where idol="EXO";-- 查询op2中idol是EXO的所有字段
select * from op2 where age=18 or age=19 or age=20;-- 在op2里找age为18或19或20的字段
select * from op2 where age in(18,19,20);-- 在op2里找age为18或19或20的字段
-- null的使用不能用！=或=，只能用is null或者is not null
select * from op2 where age is null;-- 查询age是null的列
select * from op2 where age is not null;-- 查询age不是null的列

/* 模糊查询 like
_代表单个任意字符
%代表任意个数字符
*/
_:查询单个字符
%：0个或多个字符
[]:匹配[]里的任何一个字符都可以，比如[a,b,c,d]表示a,b,c,d里任意一个字符出现都可以，简写为[a-d]
[^]：不匹配[]里的任何一个字符，比如[^a,b,c,d]表示不匹配a,b,c,d里的任意一个字符
select * from op2 where name like "z%";-- 查询name中首字母是z的字段
select * from op2 where name like "_z%";-- 查询name中第二个字母是z的字段
select * from op2 where name like "%z%";-- 查询name中含有z的字段
select * from op2 where name like "[张李刘]%";--找出姓张或姓李或姓刘的

```

但是在进行'王__'的查询的时候，查询的应该是三个字的姓王的人名，但是会出现'王X'也出现在里面的情况，实际上是char固定分配字节，不足的用空格顶替，那么就会查到两个字的情况，这时候我们可以用函数'ririm'来进行操作：  

```sql
select name from op where ririm (name) like '王__';
```




#### 排序查询  


```sql

/*
排序方式：  
asc：升序排列(默认值)
desc：降序排列
如果有多个排序，当前面条件一样时才会进行下一个条件排序
*/

select 字段列表 from 表名 order by 排序字段名1[排序方式1],排序字段名2[排序方式2]...;

select * from op6 order by age asc;-- 按照age升序的方式排列输出

select * from op6 order by english asc,math asc;-- 按照english升序，math降序的方法询问输出

```

#### 使用聚合函数

聚合函数  

数据为null的不参与聚合函数的运算  

1.概念：将一列数据作为一个整体进行纵向运算  

2.聚合函数分类  
![AB77BEE1086CC04E4BFAF15E0F8090A8](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AB77BEE1086CC04E4BFAF15E0F8090A8.png)  

![1683601795225](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683601795225.png)  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602176442.png" alt="Pulpit rock" width="354" height="208">  

<!-- 
![1683602176442](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602176442.png)   -->

![1683602253170](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1683602253170.png)

count统计数量：  
取值：1.主键 2.*（只要一列有数据就会被统计到）  

```sql
select count(id) from op8;-- 查询op8中有几个id，null不能被查询到
select count(distinct name) from op;--查找op中总共有多少个不同的name值
select sum(grade) from op;--查找grade列的总和
select avg(grade) from op;--查找grade的平均值
select max(grade) ,min(grade) from op;--查找grade的最大值和最小值
```
#### 使用分组查询

使用group by dep 对每个不同的dep进行操作  

```sql
select dep,sum(name) from op group by dep;--对dep的每个不同的值进行sum(name)的操作
```

having子句一般用于对分组之后的结果进行再次筛选，例如：  

```sql
select name ,count(*) from op group by name having count(*)>3;--查找每个个数超过三个的name
select name,avg(grade) from op group by name having avg(grade)>=60;--查找每个平均分大于60的人的名字和平均分
```


#### 分页查询

```sql
select 字段列表 from 表名 limit 起始索引,查询目录数;
-- 起始索引：从0开始  
计算公式：起始索引=(当前页码-1)*每页显示的条数

select * from op8 limit 0,3;-- 查询在表op8中，从0开始的前三条数据
select * from op8 limit 6,3;-- 每页3条数据，查询第三页数据


```

## 约束

概念：作用于表中列上的规则，用于限制加入表的数据  
约束的存在保证了数据库中数据的正确性  

数据完整性是指数据的正确性和相容性  

下面是各个数据完整性约束：  

分类：  

![20230509162950](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230509162950.png)  

主建约束：非空且唯一  

在添加约束的时候，约束条件并列写  

```sql
--可以在创建表的时候直接加上
create table op3(
    id int primary key,-- 主建且增长
    ename varchar(30) not null unique,-- 员工姓名，非空且唯一
    salary double(7,2) not null,-- 工资，非0
    bonus double(7,2) default 0,-- 奖金，如果没有奖金默认值设为0
    high int,
    low int,
    check (high>=low)
);
--也可以用后来的语句加上
alter table op add constraint pk_id  primary key (id);--给名为id的列添加名为pk_id的主码约束
alter table op add constraint un_id  unique (id);-- 给名为id的列添加名为un_id的唯一约束
alter table op add constraint de_id default 0 for (bonus);--给名为bonus的列添加名为de_id的默认值为0的约束
alter table op add constraint ch_hl check (high>=low);--给表添加heigh>=low的名为ch_hl的约束
```

### 外键约束

概念：用来让两个表的数据之间建立链接，保证数据的一致性和完整性  

例如下图中的两个表：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/4C4C2AC5B27B03ADDB76E4E325453DFE.png" alt="Pulpit rock" width="454" height="208">  
 

emp表中的dep_id和dept表中的id相关联，并且dep_id对应到id中，那么id就是dep_id的主键，dep_id到id的关联就是一个外键，emp表就是从表，dept是主表  

添加外键约束：  
```sql
-- 1.创建表的时候添加外键约束
create table 表名(
    列名 数据类型，
    ...
    [constraint] [外键名称] foreign key(外键列名) references 主表(主表列名)
);

-- 比如上例图中的表，语句这样写

-- 先建主表
create table dept(
    id int primary key,
    dep_name varchar(30),
    addr varchar(30)
);
-- 再建从表
create table emp(
    id int primary key,
    name varchar(30),
    age int,
    dep_id int primary key,
    constraint fk_emp_dept foreign key(dep_id) reference dept(id)
);


-- 2.建完表之后添加外键约束，就是把上面第一种的从表中的最后一句话删除，建完表之后再加这句话
alter table 表名 add constraint 外键名称 foreign key(外键字段名称) references 主表名称(主列表名称);

```
并且添加数据的时候也是，先添加主表中的数据，再添加从表中的数据  


删除约束：  
```sql
alter table 表名 drop foreign key 外键名称;
```
删除数据的时候，先删除从表中对应主表中的数据，才能删除主表相应的数据  

例如上图，必须先在emp表中删除dep_id=1的数据，dept表中的id=1的数据才能删除  

只有建图完添加完外键之后才能添加数据，如果已经添加了数据是不能再添加外键了  



## 数据库设计 

表关系：  

1.一对多  
将多的一方的表建立外键指向一的一方的表  
例如部门表和员工表  

2.多对多  
建立第三张中间表，至少含两个外键分别关联两方主件键  
例如商品表和订单表：  
![20230513142127](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230513142127.png)  

3.一对一  
多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表  
例如用户和用户详情  
实现方式：在任意一方加入外键，关联另一方主键，并且设置外键为唯一  


## 多表查询

假如a表有x个数据，b表有y个数据，我们如果直接查他们两个表的所有的数据，会出现x*y个数据，因为他会枚举出两个表所有数据的组合情况  


### 连接查询

#### 内连接：相当于查询AB的所有数据和交集  


先on再where  

```sql
select 字段列表 from 表1 join 表2 on 条件;
```
假如还是查询emp表的depid和dep表的id相等的话，语句如下：  

```sql
select * from op1 join op2 on op1.depid=op2.id;-- 查询的是所有条件是emp.id=dep.id的emp和dep中全部字段
select op1.name ,op2.grade from op1 join op2 on op1.depid =op2.id;
```

### 用top限制结果集

top n：显示查询结果的前n条  

top n percnet：显示查询结果的前n%条

with ties：表示包括并列的结果  

```sql
select top n name,grade from op order by grade desc;--查询符合条件的前n条
select top n percnet name,grade from op order by grade desc;--查询符合条件的前n%条
select top n with ties name,grade from op order by grade desc;--查询符合条件的前n名，包括并列
```



### 子查询

查询中嵌套查询，称嵌套查询为子查询  

子查询根据查询的结果不同，作用不同：  

```sql
select name from op in(select dep from op where name="zyz");--查找所有和zyz在一个部门的人
```

## 视图

视图是由从数据库的基本表中选取出来的数据组成的逻辑窗口，是基本表的部分行和列数据的组合。  

视图的好处：1.简化数据查询语句 2.使用户能从多角度看待同一数据 3.提高了数据的安全性 4.提供了一定程度的逻辑独立性。  


## 范式

关系模型中的关系模式至少是：1NF  

任何二元关系模式的最高范式必定是：BCNF 



### 第一范式（1NF）

简单的说，第一范式就是每一个属性都不可再分。  

例如：
![20230619143634](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619143634.png)  

图中圈出的两个列中有两个元素，不满足不可再分的性质，那么我们就将两个元素分开再添一列  

![20230619143744](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619143744.png)  

下图中的‘高级职称人数’包含两个基本数据项，不是基本的数据项，不满足第一范式，我们需要修改  

![20230619144814](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619144814.png)  

分裂成两个基本数据项就行了  

![20230619144913](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619144913.png)  

### 第二范式（2NF）

首先满足第一范式，并且每个非主属性都完全函数依赖于主码  

如果一个第一范式的关系的主码只有一个列，那么这个关系也一定是第二范式关系  

对于一个关系模式：学生选课（学号，名字，性别，系别，住宿楼层，课程，分数）  

可以得到主码是学号和课程  

但是由于名字和性别等属性是只依赖学号，没有依赖课程，那么他就不满足'每个非主属性都完全函数依赖于主码'这个条件，那么我们就要进行分解  

分解方法：  

1.用组成主码的属性集合的每一个子集作为主码构成一个关系模式  

例如上面的关系模式就可以分为：  

学号（<u>学号</u>，...）  

课程（<u>课程</u>，...）  

学号课程（<u>学号</u>,<u>课程</u>...）  

2.再将依赖于这些主码的属性放进这些关系模式里  

学号（学号，名字，性别，系别，住宿楼层）  

课程（课程）  

学号课程（学号，课程，分数）  


2.然后去掉只由主码的子集构成的关系模式  

也就是去掉上面的：课程（课程），因为他只有主码构成  

那么最终被分解的形式为：  

学号（学号，名字，性别，系别，住宿楼层）  

学号课程（学号，课程，分数）  


### 第三范式

关系满足第二范式，且所有的非主属性都不传递依赖于主码  

假设同一个系都住在一层，那么在：学号（学号，名字，性别，系别，住宿楼层）这个关系模型里，有：  

因为学号->系别 系别->住宿楼层，那么学号(传递)->住宿楼层，就不满足‘所有的非主属性都不传递依赖于主码’的条件，需要分解  

分解过程：  

1.对于不是候选码的每个决定因子，从关系模式中删除依赖于他的所有属性  

那么对于学号（学号，名字，性别，系别，住宿楼层）这个关系模型分解为：  

学号（学号，名字，性别，系别）  

2.新建一个关系模式，新模式中包含在原关系模式中所有依赖于它的所有属性  

系别（系别，住宿楼层）  

3.将决定因子作为新关系模式的主码  

系别（系别，住宿楼层）中系别是主码  

那么最终的关系模式就是：  

学号（学号，名字，性别，系别）（假设称关系模型为XH），其中学号是主码，系别是引用XB关系模型的外码  

系别（系别，住宿楼层）（假设将关系模型称为XB），系别是主码，没有外码  

学号课程（学号，课程，分数）（将关系模型称为XK），学号和课程是主码，学号是引用XH关系模型的外码  

## 数据库保护

### 事务

事务是一组操作的集合，这组操作，要么全部执行成功，要么全部执行失败  

#### 执行语句
概念：一种机制，包含一组数据库操作命令，把所有命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么同时成功要么同时失败  
事务是一个不可分割的工作逻辑单元  

事务是多个语句为一个整体，那么我们在开始这多个语句之前需要开启事务，然后再进行这些语句的操作，再结束事务

例如：对于转账操作，假如zyz向zxh转500，那么我们要进行几个操作：  
1.查询zyz的余额是否大于等于500  
2.zyz账户-500  
3.zxh账户+500  

在保证这些操作都没有问题的情况下才操作，如果有一环出错就不会操作这个事务  

那么开始操作事务之后，在做的所有语句都是临时操作，当事务完成之后才操作这些语句，即提交事务  

那么当我们操作语句发现错误的时候，回滚事务，就能恢复到没有操作的状态

默认mysql事务是自动提交的，也就是说，当执行一条DML语句，mysql会立刻隐式的提交事务  

那么就需要我们手动开启事务和提交事务  

```sql
-- 方法1：将mysql的默认语句改为手动提交，那么当执行语句报错的时候我们进行回滚，全部语句都完成之后再手动提交
select @@autocommit;-- 查看事务的默认提交方式：1 自动提交 0手动提交
set @@autocommit=0;-- 修改事务提交方式为手动提交
rollback;-- 如果执行过程中报错，那么我们回滚事务
commit;-- 执行全部命令之后提交事务

-- 方式2：执行开启事务的操作，在报错的时候回滚，所有语句都执行成功就提交
begin;-- 或start transaction;开启事务
rollback;-- 回滚事务
commit;-- 提交事务
```

#### 四大特征
ACID：  
1.原子性：事务是不可分割的最小操作单元，要么全部成功，要么全部失败  

2.一致性：事务完成时，必须使所有的数据都保持一致状态  

3.隔离性：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行  

4.持久性：事务一旦提交或回滚，他对数据库中的数据的改变是永久的   

#### 并发事务问题

问题1：脏读:一个事务读到另外一个事务还没有提交的数据。  

问题2：不可重复读：一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。  

问题3：幻读：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”。  

#### 事务隔离级别

事务的隔离级别有以下几种：  

![20230619224513](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619224513.png)  

```sql
select @@transaction_isolation;-- 查看事务隔离级别
set[session|global] transaction isolation level{read uncommitted|read committed|repeatable read|serializable}-- 设置事务隔离级别，如果设置session，那么只对于当前客户端的窗口有效，如果设置global，那么对于所有客户端的窗口都有效 

```

#### 小结

![20230619225447](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619225447.png)  


### 死锁
死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无法推进下去；  


### 两段锁协议 

两段锁协议是指所有的事物必须分为两个阶段，对数据进行加锁和解锁，具体内容如下：  

1.在对任何数据进行读写操作之前，首先要获得对该数据的封锁。  

2.在释放一个封锁之后，事务不再申请和获得任何其他锁  

意思是可以将每个事务分成两个时期：申请封锁期和释放封锁期  

### 数据库故障的种类

1.事务内部的故障 2.系统故障 3.其他故障  

### 数据库备份

指定备份策略时考虑以下几个方面：  

1.备份的内容 2.备份频率  

备份的介质可以是磁带也可以是磁盘  

### 数据库恢复

数据库恢复的基本原理就是增加数据冗余。即数据库中任何一部分的数据可以利用存储在系统其他存储器上的冗余数据来重建，即恢复。  


恢复策略：  

1.事务故障的恢复 


2.系统故障的恢复 


3.介质故障的恢复  

在发生介质故障时，磁盘上的物理数据库被破坏，恢复措施为：  

首先重装数据库，使数据库管理系统能正常运行，然后利用介质损坏前对数据库已做的备份或利用镜像设备恢复数据库  

## 数据库设计

数据库设计的基本步骤：  

1.需求分析  

2.结构设计：包括概念设计，逻辑结构设计和物理结构设计  

3.行为设计：包括功能设计，事务设计和程序设计  

4.数据库实施：包括加载数据库数据和调试运行应用程序  

5.数据库运行和维护阶段  

与 DBMS 无关的是需求分析、概念结构设计和逻辑结构设计；  

安全性措施：  

a.对数据字段命名的规范性  
b.一些业内常用的术语，在设计数据库存储时，把数据转化为 int 类型存储而不是采用 nvarchar、varchar等类型存储；  
c.在数据库设计中，对于业务与业务中的逻辑联系，采用外键关系进行连接；不要再逻辑联系中采用视图实现，会让人很容易解密数据库数据；  
d.在数据库设计中，数据字段最好不要设定为空，因为为空的数据字段存储为空，无形中为数据的窃取者提供了进入数据库接口。  