---
title: c++
---

## 指针

用`类型* 变量名`来表示一个指针  

`*变量名`表示取变量所指向的值  

```cpp
	int i=7;
	int *const p=&i;//const在*后面表示指针p不能变，就是指针的值不能变，即指针不能再指向别的地址
	*p=12;//可以通过p更改所指地址的值
	i=12;//也可以通过变量更改值
	int op;
//	p=&op;//但是不能指向别的变量

	const int *pp=&i;//const在*前表示const是修饰前面的类型，即不能通过p去做赋值
	//与int const *pp表示相同，只看const在*前还是在*后
//	*pp=10;//不能通过pp改变变量的值
	i=10;//可以通过i去做赋值
	
	return 0;
```


## 内联函数

通过“内存膨胀的方式”用空间去换时间，提高运行时间  

在函数前面加关键字`inline`，内联函数通过编译器实现  


## new和delete

动态开内存  

```cpp
int *p=new int;//开一个类型为int的内存，p为指针
int *p1=new int(10);//开一个类型为int并且存放的数为10的内存
int *p2=new int[10];//开10个类型为int的内存
delete p;//最后用完释放，释放首地址的内存
delete p1;
delete[] p2;//释放数组
```



## 类

关键字`class`  

在类里面可以定义数据和函数  

直接写的数据默认是私有的  

```cpp
class 类名
{
    public://公有的，在类外可以直接引用
        //成员：数据，函数
    private://私有的，在类外不能直接引用
        //成员：数据，函数
    protected://被保护的
        //成员：数据，函数

}

//例子

class sheep{
    public:
        string name;
        void speak(){ 
            cout<<"my name is"<<name<<endl;
        }
        void speakage(){
            cout<<"I am "<<age<<endl;
        }
        setage(int u){
            age=u;
        }
		void getname();
    private:
        int age;
}

void sheep::getname(){
	cout<<"name"<<endl;
}

sheep xyy;
xyy.name="xyy";//公有属性可以直接访问
xyy.setage(10);//公有函数可以直接访问
//xyy.age=10是错的，因为age是私有属性不能直接访问
```



## 构造函数

用于在类里面初始化数据  

在`public`里  

名字与类名一样  

可以重载  

```cpp
class myclass{
    public:
        int age,name;
        const int id=0;//在类中也可以直接定义一个不变的数
        myclass(){//这个是系统自动给的构造函数，在创建对象的时候会运行
        }
        myclass(int u,int v=0);//重载一个构造函数，在定义的命名的时候直接调用，变量也可以直接初始化
    
};
myclass::myclass(int u,int v){//在外面定义构造函数
    age=u,name=v;
}


myclass c1(1,2);//定义新变量的时候直接引用
myclass *p=new myclass(1,2);//创建一个新的类的地址
myclass *pp=new myclass;//如果自己写了含有参数的构造函数，那么系统自动给的不含参数的构造函数会消失，所以我们如果在自己写了含参的构造函数再想这样写的话就自己再写一个不含参的构造函数
```

有时候数据成员必须初始化并且类型为只读不能改，我们就不能在构造函数中赋值，那么我们就用成员初始化列表的方式给数据初始化  

```cpp
class myclass{
	public:
		const int id,op;//用初始化列表的方式初始化
		int num;
		myclass(int n,int u):id(n),op(0){//将id和op分别初始化为n和0
			num=u;
		}	
};

```


## 析构函数

作用：在对象生命周期结束的时候进行清理，系统可以自动调用解析函数  

先构造的后析构  

函数名与类名相同，在前面加上一个`~`  

没有返回值类型和返回值，也没有参数  

先运行的后析构  

```cpp
class myclass{
	public:
		int num;
		~myclass(){//析构函数，创建函数的结束时候也会调用
			//函数体
		}	
};

op.~myclass();//也可以直接调用

```


## 拷贝构造函数

一种特殊的构造函数，通过拷贝构造函数完成一个复制的过程  

特殊：第一个参数是本类的对象的引用  

先是构造函数，才可能是拷贝构造函数，没写的话系统给，将成员一一对应赋值，可以自定义  

```cpp
class monster{
	public:
		string name;
		int num;
		double op;
		monster(){
			name="name";
			num=100;
			op=0.0;
		}
		monster(string s,int n,double p){
			name=s;
			num=n;
			op=p;
		}
		monster (monster &obj)//拷贝构造函数第一个参数是本类对象的引用。拷贝的内容自定义，可以拷贝属性，这个是系统默认构造的拷贝函数，可以不用定义
        {
			name=obj.name ;
			num=obj.num ;
			op=obj.op ;
		}
		monster (monster &obj,int v){//拷贝函数也可以重载，也可以拷贝输入的参数
			name=obj.name ;
			num=v;
			op=obj.op ;
		}	
};

	monster c1("xyy",1,0.0);
	monster c3=c1;//直接写等于也可以直接复制
	monster c2(c1);//传入的是monster类，所以使用的是拷贝函数，c2就是复制了c1，如果没有定义拷贝函数那么就按默认构造的拷贝函数，即所有属性都复制
	monster c4(c1,2);//用拷贝函数将c1的部分属性复制并更改某个属性
```

注意：在拷贝函数中，如果属性中有指针，那么我们不能直接将指针指向被复制的对象的指针。我们需要新开辟一个内存，然后将被复制的对象的指针所指的内容复制到新建的指针所指的内容中去，这时候我们就得自己定义一个拷贝函数  

```cpp
class monster{
public:
	int *p;
	monster(){
		p=NULL;//默认构造置空
	}
	monster(int n){
		p=new int[10];//赋值初始化开十个空间
	}
	monster(monster &obj){//默认复制构造的时候是将指针直接指向原指针所指的地址，没有意义，那么我们就需要写一个新的构造函数
		p=obj.p ;
	}	
	monster(monster &obj，int v){
		p=new int[10];//自己定义的时候复制的时候开十个新空间分别复制原来十个空间的数据
		for(int i=0;i<10;i++){
			p[i]=obj.p[i];
		}
	}
	~monster(){//析构函数当指针不空的时候释放内存
		if(p!=NULL){
			delete p;
			p=NULL;
		}
	}	
};
```

## this指针

this指针是系统自动生成并且隐藏的指针  

this指针不是对象的一部分，作用域在类内部，每个对象都有相应的this指针  

类的普通函数访问类的普通成员时，this指针总是指向调用者对象  

```cpp
class myclass{
	int num;
	void setnum(int num){
		this->num =num;//this指向被调用的对象，传进来的num赋值到了对象的num
	}	
	int getnum(){
		return num;//等价于return this->num,所以一般在函数中调用对象的属性前面都隐藏了this->
	}
};
```
## static成员

静态成员，分为静态数据成员和静态函数成员    

### 静态数据成员

在声明成员的时候加上static关键字  

静态成员存在于程序的静态全局区，生命周期是从程序开始到程序结束，所以存在的周期比类长，不能用初始化列表或初始化函数来赋值，那么我们就需要在类的外面进行赋值  


所有的类的对象都共享一个静态数据内存空间，如果一个类创建了两个对象，第一个对象的静态数据更改，第二个对象的静态数据就会变成改后的内容，因为他们共享一个内存  

另外静态数据结构也可以通过`类名::数据名`的访问方式进行访问

```cpp
class myclass{
	public:
		static int num;
};
int myclass::num=0;//在类外面赋初始值
int main(){
	myclass c1,c2;
	c1.num =10;//将c1的静态数据更改了
	cout<<c2.num <<endl;//c2与c1公用静态内存，所以c2的num为更改之后的10
	cout<<myclass::num <<endl;//用类名直接访问
	return 0;
}


```
### 静态成员函数

在函数前面加上static关键字  

在静态函数里只能访问静态成员和静态函数，不能访问普通成员和普通函数，因为static属于一个类不需要依靠对象就可以访问，但是对于普通的数据只有有了对象才有相应的数据，在调用函数的时候普通的数据还没有创建，所以不能访问  

在静态成员函数中也不能调用this指针，因为this指针也时有了对象之后才创建的  


可以通过`类名::函数名`的方式直接访问这个函数  


```cpp
class myclass{
	public:
		static int num;
		static void getnum(){//静态函数加关键字static
			cout<<"num=="<<num<<endl;
		}
};
int myclass::num=0;
int main(){
	myclass c1,c2;
	c1.num =10;
	c1.getnum() ;//直接调用
	c1::getnum(); 
	return 0;
}
```


### 单例模式

要求：创建一个只能创建一个对象的类  

只能有一个对象，那么我们可以将所有指针都指向一个内存，访问的时候直接用指针来访问  

将构造函数和拷贝函数设置为私有，那么我们就不能通过类名+对象名的方式创造对象  

将指针设置为私有，这样保证不会在类的外面访问指针，并且设置成static，这样可以在类的外面初始化为NULL  

写一个公有且静态的得到指针的函数，这样我们可以直接通过`类名::函数`来得到指针，这个函数的内容是如果为空就创建，如果不为空就不用管，最后返回指针，那么得到的一直是第一次创建的指针  



```cpp
class oneinstance{
	public:
		int num;//需要用的数据
		static oneinstance* getpone();//构造一个得到静态指针的私有函数
	private://将构造函数和拷贝函数写成私有，那么在类的外面就不能构造和拷贝函数,就不能通过类名+对象名的方式创建对象了
		oneinstance();
		oneinstance(oneinstance &obj);
		static oneinstance *pone;//建造静态的一个私有指针，那么我们在类外面就不会访问到他
};

oneinstance* oneinstance::getpone(){
	if(pone==NULL){
		pone=new oneinstance;
	}
	return pone;
}

oneinstance* oneinstance::pone =NULL;//先将静态指针置空


oneinstance::oneinstance() {
	num=0;
}

oneinstance::oneinstance(oneinstance &obj){
	
}
int main(){
	oneinstance *p1=oneinstance::getpone();//使用的时候直接得到这个类的指针
	cout<<"num=="<<p1->num <<endl;
	p1->num =10;
	oneinstance *p2=oneinstance::getpone();//p2的指针同样指向p1
	cout<<"num=="<<p2->num <<endl;
	return 0;
}
```

## const成员

声明对象的时候加上const关键字  

常量成员分为常量数据成员和常量函数成员  

### const数据成员

const对象必须用初始化列表进行初始化  

const使每个对象都不能改，但是static数据并不属于某个对而是属于一个类，那么在const函数里static对象就可以改  

```cpp
class myclass{
	public:
		int num;
		const int val;
		myclass();
		myclass(int v);
		myclass(int n,int v);
};
myclass::myclass():val(0),num(0){
	
} 
myclass::myclass(int v):val(v),num(0){
	
}
myclass::myclass(int n,int v):num(n),val(v){
	
} 
```

### const函数成员

在函数声明的后面加上关键字const

在常量成员函数里可以对静态成员进行修改，不能对其他的数据成员进行修改  

如果将对象也设置成const，那么类中除了static数据其他的数据都不能修改，也不能调用普通成员函数，因为普通函数有可能会改数据，但是const对象是不能改数据的，所以不能调用普通函数，但是可以调用const函数，因为const函数不能改除了static对象以外的其他对象    

```cpp
class myclass{
	public:
		int num;
		const int val;
		static int n;
		myclass();
		void getnv(){
			cout<<"getnv"<<endl;
		}
		void getnv1() const{//在函数后面加上const关键字，函数内除了static对象其他的对象都不能改
			n=10;//static对象可以在const函数中修改
			cout<<"getnv1"<<endl;
			cout<<"num=="<<num<<endl;
			cout<<"val=="<<val<<endl;
			cout<<"n=="<<n<<endl;

		}
		void getnv2() const;
};
int myclass::n =0;//static对象在类外面进行初始化
myclass::myclass():val(0),num(0){//const使用初始化列表进行初始化
	
} 
void myclass::getnv2() const{//在外面声明的时候也需要在函数的最后加上const关键字
	n=100;
	cout<<"getnv2"<<endl;
	cout<<"num=="<<num<<endl;
	cout<<"val=="<<val<<endl;
	cout<<"n=="<<n<<endl;
}

int main(){
	const myclass c2;//将对象设为const
	c2.n =10;//可以改static数据
	cout<<c2.n <<endl;
	c2.getnv1() ;//const对象可以调用const函数
//	c2.getnv() ;const对象不能调用普通函数
	return 0;
}
```


## 友元关系

友元分为友元函数和友元类  

关键词是friend  

友元函数：一个类的私有数据不能被普通函数访问，但是一个类的友元函数可以访问这个类的私有数据  

设置一个类的友元函数：在类里声明这个函数，并且在函数的前面加上关键词friend  

友元类：一个类的友元类也可以访问这个类的私有数据  

设置一个类的友元类：在类里声明他的友元类，在前面加上friend关键字  

注意：一个类的友元函数和友元类可以访问这个类的私有数据，但是这个类不能访问他的友元函数和友元类的私有数据  

```cpp
class A{
	int num;//未声明的数据是私有数据
	friend void getnum(A obj);//在函数的前面加上关键字friend就设置成了该类的友元函数
	friend class B;//在类的前面加上关键friend就可以将他设为友元类，友元类可以访问自己的私有数据
	public:
		int val;
		A();
};

class B{
	public:
		void getAnum(A obj){//B是A的友元类，可以访问A的私有数据
			cout<<"Anum=="<<obj.num <<endl;
		}
};


A::A() {
	num=0;
}

void getval(A obj){//普通函数可以直接访问公有的成员
	cout<<"val=="<<obj.val <<endl;
}

void getnum(A obj){//普通函数不能直接访问类的私有成员，就需要将这个函数设为类的友元函数
	cout<<"num=="<<obj.num <<endl;
}

```

## 继承与派生

不影响原来类的代码实现对于类的功能的扩展，在原有的类的基础上快速增加新的功能  

### 概念

在原来已经有的类上新建一个新的类，这个类可以含有一个或多个原来已经有的类，原来已经有的类叫做父类或基类，新建的类就叫子类或派生类  

继承和派生是同一个过程  

继承分类：1.只有一个父类：单继承 2.有两个或两个以上的父类：多继承  

### 继承方式

#### 语法：  

```cpp

单继承：
class 父类名{
};

class 子类名:继承权限 父类名{
};

多继承：
class 父类1{
};
class 父类2{
};

class 子类名:继承权限1 父类名1,继承权限2 父类名2{
};

```
继承权限：1.公有继承pubic 2.私有继承：private 3.保护继承 protected  

（权限：写在class里是自己的权限，在class外是继承权限）  

注意：继承是子类继承父类的全部成员  

#### 权限授予  

单继承规则：  

![20231118210131](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231118210131.png)  

规律:严格程度私有>保护>公有，哪个更严格就按照哪种继承  

多继承：分析直接父子类  

例子：  

```cpp
class father{//父类
	public:
		father();
	public:
		int pub;
		void getpub(){
			cout<<"getpub"<<endl;
			cout<<"pub=="<<pub<<endl;
		}
	private:
		int pri;
		void getpri(){
			cout<<"getpri"<<endl;
			cout<<"pri=="<<pri<<endl;
		}		
	protected:
		int pro;
		void getpro(){
			cout<<"getpro"<<endl;
			cout<<"pro=="<<pro<<endl;
		}		
	
};
father::father() {
	pub=0;
	pro=0;
	pri=0;
}
class son:public father{//子类，继承方式为公有继承
	public:
		son();		
	public:
		void getpubpro(){//在子类的内部父类的公有的和被保护的数据都可以访问，只有私有不能访问
			cout<<"getpubpro"<<endl;
			cout<<"pub=="<<pub<<endl;
			cout<<"pro=="<<pro<<endl;
		}
};
son::son() {
	
}
int main(){
	son obj;
	obj.pub ;//在外部，子类只能访问父类的公有成员，父类的私有和被保护的成员都不能访问
	return 0;
}
```

### 父子关系

派生类的构成：派生类会继承基类除了构造，拷贝构造和析构函数外所有的成员函数和数据成员。如果派生类新添加的数据和基类的数据名称相同，那么基类的数据就会被隐藏  

要想通过派生类访问基类被隐藏的数据，那么就用`对象名.基类名::被隐藏的数据名`来访问  

子类将父类的所有成员都继承下来。如果自己有父类也有，或不同的父类有重复的成员，那么我们就描述一下：如果用自己的就直接用；如果用父类的就用`对象名.父类名::成员名`来访问  

子类的对象可以当做父类的对象来使用，父类对象可以接受子类对象的值  

子类父类构造析构的关系：先按照继承规则构造父类，再构造子类，所有的都构造完之后按照从后往前析构（符合先构造的后析构）  


```cpp
#include<bits/stdc++.h>
using namespace std;

class father{
	public:
		father();
		~father();
		int val;
		int num;
		int b;
};

father::father() {
	val=10;
	num=10;
	b=10;
	cout<<"--------fatherG"<<endl;
}


father::~father() {
	cout<<"--------fatherX"<<endl;
}

class father1{
	public:
		father1();
		~father1();
		int val;
		int num;
		int a;
		
};

father1::father1() {
	val=20;
	num=20;
	a=20;
	cout<<"--------father1G"<<endl;
}
father1::~father1() {
	cout<<"--------father1X"<<endl;
}

class son:public father,public father1{
	public:
		son();
		son(int n);
		~son();
		int num;
		
};
son::son(){
	num=30;
	cout<<"--------sonG"<<endl;
}

son::~son() {
	cout<<"--------sonX"<<endl;
}
int main(){
	son obj;
	cout<<"son.num="<<obj.num <<endl;//访问子类自己的num
	cout<<"son.a="<<obj.a <<endl;//访问唯一继承的a
	cout<<"son.b="<<obj.b <<endl;//访问唯一继承的a
	cout<<"father.num="<<obj.father::num <<endl;//由于num子类和两个父类都有，所以我们需要说明一下是哪个num
	cout<<"father.val="<<obj.father::val <<endl;//由于val两个父类都有，所以我们要说明是哪个val
	cout<<"father1.num="<<obj.father1::num <<endl;
	cout<<"father1.val="<<obj.father1::val <<endl;
	father obj1;
	obj1=obj;//子类可以给父类赋值，因为父类有的子类都有，父类对象不能给子类对象赋值，因为父类对象缺少数据
	son* pson;
	father *pfather;
	pfather=&obj;//也可以用父类的指针接受子类的对象的地址，因为子类对象数据范围覆盖了父类指针。不能用子类指针接收父类对象，因为父类对象数据范围小于子类指针指向的范围
	return 0;
}
```

如果在子类的构造函数中想调用父类的构造函数，那么在子类的构造列表后调用`:构造函数`  
```cpp
class father{
	public:
		father();
		father(int n);
		int num;
		const int op;
};
father::father():op(0){
	
}
father::father(int n):op(n){
	num=0;
} 

class son:public father{
	public:
		son();
		son(int n);
};
son::son() {
	
}
son::son(int n):father(n){//想调用父类的带参构造函数，就写在成员初始化列表里
	
} 
```


### 菱形继承

A派生出A1和A2，那么A1和A2中含有继承A的n，A1和A2又派生出AA，那么AA继承了A1的n和A2的n。我们可以通过`类名::成员名`的方式分别访问继承自A1和A2的n，但是这样继承非常浪费内存，所以我们就用虚继承（菱形继承）的方式来继承  

![20231119162430](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231119162430.png)  

虚继承：将同样从A派生的A1和A2的继承方式改为虚继承（前面加上`virtual`关键字），那么当从他们派生到AA的时候，虚指针就会自动对比，如果A1和A2从A里继承的是一样的东西，那么只会给AA一份  

```cpp
class A{
	public :
		int n;
};
class A1:virtual public A{//加上虚继承关键字virtual

};
class A2:virtual public A{

};
class AA:public A1,public A2{

};
int main(){
	AA aa;
	cout<<aa.n<<endl;//就从A1和A2继承了一个n，可以直接用aa访问
	return 0;
}
```

## 多态

虚函数：在类中的普通函数前面加上关键字`virtual`，就变成了虚函数  

多态的条件：1.有虚函数成员的父类 2.同名函数的子类 3.指针：使用父类类型的指针，指向父类或子类对象来调用函数  

用父类的指针接收子类的对象，对于存在于父类和子类的同名函数，如果同名函数不是虚函数，那么指针调用这个函数的时候调用的是本身父类的函数；如果这个函数是虚函数的话，调用的就是接收的子类对象的函数。  

在释放父类指针接收子类对象的指针内存的时候，我们需要把父类的析构函数也设为虚函数，在删除的时候调用子类对象的析构函数再调用父类的析构函数，如果析构函数没有设为虚函数，那么就只会释放父类类型指针的内存  


```cpp
#include<bits/stdc++.h>
using namespace std;

class father{
	public:
		father();
		virtual ~father();
		virtual void fa();
};
father::father(){
	cout<<"father::father()"<<endl;
}
father::~father(){
	cout<<"father::~father()"<<endl;
}
void father::fa() {
	cout<<"father::fa()"<<endl;
}

class son1:public father{
	public:
		son1();
		~son1();
		void fa();
};
son1::son1() {
	cout<<"son1::son1()"<<endl;
}
son1::~son1(){
	cout<<"son1::~son1()"<<endl;
}
void son1::fa() {
	cout<<"son1::fa()"<<endl;
}

class son2:public father{
	public:
		son2();
		~son2();
		void fa();
};
son2::son2() {
	cout<<"son2::son12()"<<endl;
}
son2::~son2(){
	cout<<"son2::~son2()"<<endl;
}
void son2::fa() {
	cout<<"son2::fa()"<<endl;
}

int main(){
	father fatherobj;
	son1 son1obj;
	son2 son2obj;
	father *p;//父类类型的指针,如果不是虚函数，那么他即使取的是son的地址，执行fa()函数的时候仍然调用的是父类的fa()函数
	p=&fatherobj;//指向自己
	p->fa() ;//调用自己的函数
	p=&son1obj;//指向son1
	p->fa() ;//调用son1的函数
	p=&son2obj;//指向son2
	p->fa() ;//调用son2的函数
	father *pp=new son1;//用父类指针接收子类对象
	pp->fa() ;
	delete pp;
	pp=NULL;
	return 0;
}
```


纯虚函数：没有函数体的虚函数，在声明的时候将他赋值为0  

作用：写在父类，父类不用写函数，在子类重新写同名函数的时候再写函数体  

如果在一个类里出现了纯虚函数就变成了抽象类，抽象类不能定义对象，但是可以用来定义指针。如果子类没有重新定义父类中的所有纯虚函数，那么子类也是抽象类。并且子类中重新定义的函数其实也是虚函数，当做父类的时候也可以被子类重写  


```cpp
class father{
	public:
		father();
		virtual ~father();
		virtual void fa()=0;//纯虚函数
		virtual void fa1()=0;
};
father::father(){
}
father::~father(){
}
void father::fa() {
}

class son1:public father{
	public:
		son1();
		~son1();
		void fa();//将两个纯虚函数都重新写才能建对象
		void fa1();
};
son1::son1() {
}
son1::~son1(){
}
void son1::fa1() {
	cout<<"son1::fa1"<<endl;
}
void son1::fa() {
	cout<<"son1::fa()"<<endl;
}
int main(){
	father *p;
	son1 obj;
	p=&obj;
	p->fa();
	return 0;
}
```


## final

权限掠夺者：1.掠夺函数权限：阻止重写 2.掠夺类的权限：阻止派生  

1.在函数的后面加上`final`关键字，该函数的子类就不允许重写函数了 2.在类的后面加上`final`关键字，该类就不能作为父类  

```cpp
class classname final{//类后加final就不能有子类
	public:
		classname();
};
classname::classname() {
	
}
class father{
	public:
		father();
		virtual void fa() final;//函数后加final就不能重写（能重写的函数类型是virtual
};

void father::fa() {
	
}
father::father(){
	
}

class son:public father{
	public:
		son();
};
son::son(){
	
}
```

## 运算符重载

重载概念：重新定义运算符的运算规则  

重载函数语法:`返回值类型 operator运算符名称（形参列表）{}`  

区分自增运算符的前置形式和后置形式：后置比前置多加了一个int类型的参数  

```cpp
//实现复数的加减
class myclass{
	public:
		myclass(double aa=0.0,double bb=0.0);
		void getnum() const;
		//重载运算符的函数
		myclass operator+(myclass other){//在函数内部已经有一个对象了，用this指针访问，所以我们再传一个对象就可以了。并且这个this指针是运算符左边的对象调用的，参数是运算符右边的对象
			myclass obj;
			obj.a =a +other.a ;
			obj.b =b +other.b ;
			return obj;
		}
		
	private:
		double a;
		double b;
		
};
myclass::myclass(double aa,double bb) {
	a=aa;
	b=bb;
}
void myclass::getnum() const{
	cout<<"("<<a<<"+"<<b<<"i)"<<endl;
}
int main(){
	myclass obj1(1,3);
	myclass obj2(2,5);
	myclass obj3=obj1+obj2;
	obj3.getnum() ;
	return 0;
}
```

也可以定义全局运算符重载  
正常写函数主体，不过要写两个参数，当在类中要用到私有值的时候需要在类里声明函数是友元函数  

```cpp
class A{
	public:
		friend A& operator+(A& obj1,A& pbj2);
//			A c;
//			c.a =a+obj.a ;
//			c.b =b+obj.b ;
//			return c;
//		}

	private:
		int a,b;
};

A& operator+(A &obj1,A& obj2){
	A obj;
	obj.a =obj1.a +obj2.a;
	obj.b =obj1.b +obj2.b;
	return obj;
} 
```


 
### 规则

并不是所有运算符都可以重载  

并不能改变运算符的优先级和结合性  

重载不会改变运算符的用法  

运算符重载函数不能有默认的参数  

运算符重载函数可以作为类的成员函数，也可以作为全局函数  

### 重载输入输出

1.建议作为友元函数重载  

2.istream：输入  

3.ostream：输出  

作用：当遇到不能直接输出的数据类型的时候重载输入输出就可以按照想要的方式输入输出  

```cpp
class myclass{
	public:
		myclass(double aa=0.0,double bb=0.0);
		friend istream& operator>>(istream& in,myclass& obj);//函数需要访问类的私有数据，就加上友元
		friend ostream& operator<<(ostream& out,myclass& obj);
	private:
		double a,b;
};
myclass::myclass(double aa,double bb):a(aa),b(bb){
	
}

istream& operator>>(istream& in,myclass& obj){
	in>>obj.a>>obj.b;
	return in;//返回in
}
ostream& operator<<(ostream& out,myclass& obj){
	out<<"("<<obj.a<<"+"<<obj.b<<"i"<<")";
	return out;
}
int main(){
	myclass obj;
	cin>>obj;//重载之后可以直接读入不同类的数据
	cout<<obj;
	return 0;
}
```
## 模板

模板分类：函数模板，类模板  


### 函数模板

函数模板是函数的语法  

`template <typename 类型名1，typename 类型名2>`是模板关键字  

函数模板和普通模板对比：函数模板和普通函数都可以重载 如果模板函数和普通函数重载的话，会先调用普通函数 

```cpp
//函数模板语法
//template <typename 类型1,typename 类型2...typename 类型n>
//返回值类型 函数名（形参列表）
//{
//	函数体
// } 

//调用：函数名<传入类型（可省略）>(实参表)

template <typename T1,typename T2>
T1 add(T1 a,T2 b){
	return a+b;
}

template <typename t1>
void test(t1 a){
	cout<<a<<endl;
}

int main(){
	test(add(1.2,2));
	int op=add<int,double>(1.2,8.9);//如果想先确定传入数据的类型，那么就将类型写在传入参数的前面
	cout<<op;
	return 0;
}
```
函数重载
```cpp
class myclass{
	public:
		myclass(int n=0):num(0){}
		int num;
};

template <typename t>
bool func(t a,t b){
	if(a==b)return true;
	else return false;
}

template <> bool func<myclass>(myclass &a,myclass &b){
	if(a.num ==b.num)return true;
	else return false;
}

int main(){
	if(func(1,1))cout<<"true"<<endl;
	else cout<<"false"<<endl;
	myclass obj1,obj2;
	if(func(obj1,obj2))cout<<"true"<<endl;
	else cout<<"false"<<endl;
	return 0;
}
```
### 类模板

定义：  
```cpp
//template <class 类型名1,class 类型名2...>
//class 模板类名
//{
//	成员;
//}; 
//声明类：类名<类型名1，类型名2...> 对象名（实参列表）

template<class t1,class t2>
class myclass{
	public:
		myclass(t1 n=0,t2 v=0):num(n),val(v){}
		t1 getnum(){
			return num;
		}
		t2 getval(){
			return val;
		}
		void showdata(){
			cout<<"num=="<<num<<endl;
			cout<<"val=="<<val<<endl;
		}
	private:
		t1 num;
		t2 val;
};

int main(){
	myclass<int,int> obj(1,2);
	obj.showdata() ;
	return 0;
}
```

函数调用类模板的方法  

```cpp
template<class t1,class t2>
class myclass{
	public:
		myclass(t1 n=0,t2 v=0):num(n),val(v){}
		t1 getnum(){
			return num;
		}
		t2 getval(){
			return val;
		}
		void showdata(){
			cout<<"num=="<<num<<endl;
			cout<<"val=="<<val<<endl;
		}
	private:
		t1 num;
		t2 val;
};
//直接写，需要明确类模板的类型
void testf(myclass<int,int>&obj){
	obj.showdata();
}
//通用模板1
template <typename tt1,typename tt2>
void testf2(myclass<tt1,tt2>&obj){
	obj.showdata();
}
//通用模板2，但是需要知道类的作用
template<class t>
void testf3(t&obj){
	obj.showdata();
}

int main(){
	myclass<int,int> obj(1,2);
	obj.showdata() ;
	testf(obj);//也可以在形参前加上类型<>
	testf3(obj);
	testf2(obj);
	return 0;
}
```

类模板和继承  

```cpp
template<class ftype>
class father{
	public:
	ftype fval;
};
//普通子类继承
class son:public father<int>{
	public:
		int sval;
};
//模板子类继承
template<class stype1,class stype2>
class son1:public father<stype1>{
	public:
		stype2 sval;
};
int main(){
	son1<int,double> obj;
	return 0;
}
```

#### 类模板与友元函数

当类模板需要友元函数的时候，尽量把友元函数写在类里。如果想写在外面，那么需要在类里声明友元函数之后，在友元函数的上面再声明一下函数，在函数上面再声明一下类  

```cpp
template <class T>//在函数声明之前再声明一下模板类
class A;

template <typename T>
void show2(A<T>&obj);

template <class T>
class A{
	public:
		A(T t=0):num(t){}
		friend void show1(A<T>& obj){//尽量在类里实现
			cout<<obj.num <<endl;
		}
		friend void show2<>(A<T> &obj);//否则在类里声明，并且在类之前声明这个函数
	private:
		T num;
};

template <typename T>
void show2(A<T>&obj){
	cout<<obj.num<<endl;
}
int main(){
	A<int> obj;
	show1(obj);
	show2(obj);
	return 0;
}
```


## 异常处理机制

```cpp
throw：抛出异常
try：尝试可能有异常的代码
catch：处理异常

try{
	直接或间接有try
}
catch(接收异常){

}



int test(int a,int b){
	if(b==0){
		//有异常情况->打报告
		//throw抛出异常信息：支持多种类型，可以是字符串，数字等
		throw "error";
//		throw 1;
		//如果抛出异常，后面的语句不会执行
	}
	
	return a/b;
}

int main(){
	try{
		cout<<test(9,0);
	}
	
	catch(const char* str){//可以用字符串接收
		cout<<str<<endl;
	}
	
//	catch(int num){
//		cout<<num<<endl;
//	}	
	return 0;
}

```
## 文件流

`fstream`是文件操作类，头文件是`<fstream>`  

![20231121110907](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20231121110907.png)  

```cpp
int main(){
	fstream obj;
	obj.open("text.txt",ios::out);//打开文件,""里是地址,以文件的形式写入,用out的话如果文件不存在会新建
	obj.put('s');//写入S
	obj.close();//关闭文件，写完之后必须要关
	char ch;
	obj.open("text.txt",ios::in);//换种方式打开
	obj.get(ch);//接收ch,接收的是最后的
	cout<<ch<<endl;
	obj.close();//操作完关掉
	
//	obj.is_open();//判断是否成功打开文件
//	obj.eof();//判断是否成功打开文件尾
	
	return 0;
}
```


```cpp
int main(){
	fstream obj;
	obj.open("text.txt",ios::out);
	int num=99;
	obj.write((const char*)&num,sizeof(int));//write需要写入的类型是const char *类型，所以我们可以转一下类型再写入
	obj.close();
	obj.open("text.txt",ios::in);
	int val;
	obj.read((char*)&val,sizeof(int));//读取
	obj.close();
	return 0;
}
```

