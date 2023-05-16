---
title:SQL
---

<!-- 因为我是下载到E盘的，所以先转换到E盘，然后再打打开bin的根目录 -->


进入SQL：在cmd中以管理员身份运行，输入用户和密码：  
```sql
mysql -uroot -p
1234
```


当想退出的时候输出语句：  
```sql
exit
```


## 通用语法


1.可以单行或者多行书写，以分号结尾  

2.SQL语句不区分大小写，关键字建议使用大写

3.注释  
单行注释：`-- 注释内容` 或`#注释内容`  
多行注释：/*注释内容*/  

语句：  
```sql
show databases;-- 查询所有数据库名称
```
## SQL分类

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
char:定长字符串  
名称 char(字符串最大长度x，储存的字符串如果小于x，那么少的部分用空格填满)  
varchar:变长字符串  
名称 varchar(字符串最大长度)  


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
```cpp
drop table op;
drop table if exists op;
```

#### 4.修改表  

```cpp
alter table op rename to op1;-- 将表op的名字改成op1
alter table op modify id varchar(30);-- 将表op中的列id的数据类型改为varchar(30)
alter table op change id idx varchar(30);-- 将表op的id列改为类型为varchar(30)的名为idx的列
alter table op drop password;-- 删除表op中名为password的列
```


### DML 
对数据进行操作  

#### 1.添加数据  

给指定列添加数据  
```cpp
insert into op1(name) values("zyz");-- 给表名为op1的表中名为name的列添加一个zyz的数据
insert into op1(birthday) values("2019-01-10");-- 给表名为op1的表中名为birthday的列加入一个 2019-01-10的date数据
```

给全部列添加数据  
```cpp
insert into op1 values(1,"zyz","zxh");-- 在op1的表里加上一行数据
```

批量添加数据  
```cpp
insert into op1 values(1,"zyz","zxh")，(2,"zxh","zyz");-- 添加两行数据
```

#### 2.修改数据  

```cpp
update op1 set id=4,name="zyx" where name="zxh";-- 将名为op1的表中，名字为zxh的数据，id改为4，name改为zyx
```
如果不加上where后面的条件，那么所有的数据的列都会修改  

#### 3.查询数据  
```cpp
select * from op1;-- 查询名为op1的表中的数据
```

#### 4，删除数据  
```cpp
delete from op1 where name="zyz";-- 删除名为op1的表中，name是zyz的数据
```


### DQL

查询数据  

先group by再where  
先where再order by  

#### 基础查询：  
1.查询多个字段  
```sql
select 字段列表 from 表名;
select name,age from op2;-- 查找表op2中的name和age两个字段

select * from 表名;-- 查询所有数据
select * from op2;-- 查询表op2中的所有数据
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
select * from op2 where name like "z%";-- 查询name中首字母是z的字段
select * from op2 where name like "_z%";-- 查询name中第二个字母是z的字段
select * from op2 where name like "%z%";-- 查询name中含有z的字段
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

#### 分组查询

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
select avg(english) from op8;-- 查找op8中english的平均值（只算所有不为null的数据的平均值）
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

分类：  

![20230509162950](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230509162950.png)  

主建约束：非空且唯一  

在添加约束的时候，约束条件并列写  

```sql
create table op3(
    id int primary key,-- 主建且增长
    ename varchar(30) not null unique,-- 员工姓名，非空且唯一
    salary double(7,2) not null,-- 工资，非0
    bonus double(7,2) default 0-- 奖金，如果没有奖金默认值设为0
);



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
```sql
--隐式内连接
select 字段列表 from 表1，表2... where 条件;
```
比如有下列两个表emp和dep：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684134000805.png" alt="Pulpit rock" width="254" height="108"> 

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684133972585.png" alt="Pulpit rock" width="254" height="108"> 


我们想显示当emp的depid和dep的id相等时，emp中的id，name，depid，和dep表中的name，那么查询语句就是：  

```sql
select emp.id,emp.name,emp.depid,dep.name from emp,dep where emp.depid=dep.id;
```
那么查询的结果就是：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684134240923.png" alt="Pulpit rock" width="254" height="108"> 



还可以给emp和dep表起别名，比如分别是t1和t2，那么语句就是  
```sql
select t1.id,t1.name,t1.depid,t2.name from emp t1,dep t2 where t1.depid=t2.id;
```


```sql
--显式内连接
select 字段列表 from 表1 inner join 表2 on 条件;
```
假如还是查询emp表的depid和dep表的id相等的话，语句如下：  

```sql
select * from emp inner join dept on emp.depid=dep.id;-- 查询的是所有条件是emp.id=dep.id的emp和dep中全部字段
```

#### 外连接：  

左外连接：相当于查询A所有数据和交集  
```sql
select 字段列表 from 表1 left join 表2 on 条件;
```
假如有下面两张emp和dep的表：  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1684135737972.png" alt="Pulpit rock" width="254" height="158"> 
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515152959.png" alt="Pulpit rock" width="254" height="158">   

我们想对emp表进行左外连接，条件是找emp的depid和dep的id一样的数据，那么语句是
```sql
SELECT * FROM emp LEFT JOIN dep ON emp.depid=dep.id;
```
那么我们显示的是emp中的所有数据，其中不满足条件的数据的dep表的字段为null  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515153520.png" alt="Pulpit rock" width="354" height="158">   

右外连接：相当于查询B表所有数据和交集  
```sql
select 字段列表 from 表1 right join 表2 on 条件;
```

对这两个表进行右查询 
```sql
select * from emp right join dep on emp.depid=dep.id;
```
那么显示dep表里的所有数据，不满足条件的emp表的字段为空  
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230515153818.png" alt="Pulpit rock" width="404" height="158">   


### 子查询

查询中嵌套查询，称嵌套查询为子查询  

子查询根据查询的结果不同，作用不同：  

#### 单行单列
作为条件值，使用= != > <等条件进行判断  
```sql
select 字段列表 from 表 where 字段名=(子查询);
```


#### 多行单列
作为条件值，使用in等关键字进行条件查询
```sql
select 字段列表 from 表 where 字段名 in(子查询);
```

#### 多行多列
作为虚拟列表
```sql
select 字段列表 from (子查询) where 条件;
```


## 事务

### 执行语句
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


```sql
--模拟转账操作

-- 开启事务
begin;-- 或者start transaction;
-- 回滚事务
rollback;
-- 提交事务
commit;


```

### 事务四大特征
ACID：  
原子性 一致性 隔离性 持久性  

MySQL事务默认自动提交  

```sql
-- 查看事务的默认提交方式
select @@autocommit;
-- 1 自动提交 0手动提交
-- 修改事务提交方式
set @@autocommit=0;
```



