---
title: 数据结构
---

程序=数据结构+算法  

![20230614165659](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230614165659.png)  

## 线性表

线性表有两种存结构：顺序存储结构和链式存储结构  

### 线性表的顺序存储




依次储存，地址连续，中间没有空出存储单元  

一个典型的线性表顺序存储结构  

地址不连续，中间存在空的存储单元不是线性的  

存储位置的计算：一个元素的存储位置是x，每个元素占用y个单元，那么他占用了[x,x+y-1]这段存储空间，那么他的下一个元素的存储位置是x+y  

用一个一维数组来表示线性表  

但是由于会有删除增加的操作使得表的长度可变，那么我们就用一个变量表示顺序表的长度属性  



```cpp
#define N 100//线性表储存空间的初始分配量
typedef struct {
    Elemtype elem[N];
    int length;//当前长度
}sqllist;

```
那么我们想存储一个包含系数和指数的线性表，代码如下
```cpp
#define N 1000
typedef struct {
    float p;//系数
    int e;//指数
}a;
typedef struct {
    a *elem;//储存空间的基地址
    int  length;//多项式中当前项的个数
}list;//多项式的顺序存储结构为sqlist
```
c的动态分配函数：  
需要加载头文件：`<stdlib.h>`  
`malloc(m)`：开辟长度为m的地址空间，并返回空间的首地址  
`sizeof(x)`：计算变量x的字节长度  
`free(p)`：释放指针p所指变量的储存空间，即彻底删除一个变量  
```cpp
list l;//定义一个list类型的表
l.elem=(a*)malloc(sizeof(a)*N);//存字节数为N个a类型的字节的空间  
```
c++的动态储存分配  
`new 类型名(初值列表)`：申请内存空间  
`delete p`：删除p所指向的指针，p必须是new操作的返回值  
```cpp
int *p=new int;//开辟一个int类型的空间
int *p=new int(10);//开辟10个int类型的空间
```

传地址方式：  

指针做参数：传递的是地址  

数组名做参数：传递的是数组的首地址  

引用类型做参数：给一个对象提供一个替代的名字，引用的变量和原来的对象是共用同一个地址
```cpp
int i=9;
int &j=i;//j代表i，j改变i也改变，i改变j也改变 
```


假设表为：
```cpp

typedef struct {
    int *elem;
    int length;
}list;

线性表的几个操作：  

以下的位置从1开始，表的下标从0开始  

```
### 构造一个空的线性表

操作结果：构造一个空的线性表  

```cpp
bool init(list &l){
    l.elem=new a[N];
    if(!l.elem) return false;//储存分配失败
    l.length=0;
    return true;
}

```

### 销毁线性表

初始条件：线性表已经存在  

操作结果：销毁线性表  

```cpp
void delist(list &l){
    if(l.elem) delete l.elem;//释放储存空间
}
```


### 线性表的清除

初始条件：线性表已经存在  

操作结果：将线性表重置为空表  

```cpp
void clearlist(list &l){
    l.length=0;//将线性表的长度设置成0
}
```

### 判断线性表是否为空

初始条件：线性表已经存在  

操作结果：为空表返回true，否则返回false  

```cpp
bool empty(list &l){
    if(l.length==0)return true;
    else return false;
}

```

### 求一个线性表的长度

初始条件：线性表已经存在  

操作结果：返回线性表中元素的个数  

```cpp
int getlength(list &l){
    return l.length;
}
```

### 查找第i个元素的值

初始条件：线性表已经存在  

操作结果：用e返回线性表的第i个元素的值  

```cpp
bool getx(int i,list &l,int &x){
    if(i<1||i>l.length)return false;
    x=l.elem[i-1];
    return true;
}

```


### 查找满足条件的数的下标

初始条件：线性表存在，有判定函数  

操作结果：返回线性表中第一个满足判定函数的元素的下标，如果不存在就返回0  

```cpp

int cheeck(list l,int e){
    for(int i=0;i<l.length;i++){
        if(l.elem[i]==e)return i+1;
    }
    return -1;
}
```

平均查找长度（ASL）：为确定记录在表中的位置，需要与给定值进行比较的关键字的个数的期望值叫做查找算法的平均查找长度  

ASL=每个数出现的概率*每个数需要查找的次数  

$p_{i} =\frac{1}{n}$  

![20230607155648](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230607155648.png)  

化简后的结果是：  

$ASL=\frac{n+1}{2}$  


### 在某个位置之前插入一个元素  

初始条件：线性表已经存在  

操作结果：插入这个元素，长度+1  

```cpp
bool insert(list &l,int x,int v){
    if(x<1||x>l.length+1)return false;
    if(l.length==1000)return false;
    for(int i=l.length-1;i>=x-1;i--){
        l.elem[i+1]=l.elem[i];
    }
    l.elem[x-1]=v;
    l.length++;
    return true;
}
```

平均移动次数:$\frac{(0+1+2+...n)}{n+1} =\frac{n}{2}$  


### 删除某个位置的元素

初始条件：线性表已经存在  

操作结果：删除这个元素，长度-1,将删除的元素返回e  

```cpp
bool delist(list &l,int x,int &e){
    if(x<1||x>l.length)return false;
    e=l.elem[x-1];
    for(int i=x-1;i<=l.length-1;i++){
        l.elem[i]=l.elem[i+1];
    }
    l.length--;
    return true;
}
```

平均查找长度=$\frac{0+1+2+...n-1}{n}=\frac{n-1}{2}$  


### 优缺点
优点：  
1.储存密度大  
2.可以随机访问任意元素  

缺点：  
1.在插入删除的时候需要移动大量元素  
2.浪费储存空间  
3.属于静态存储形式，数据元素的个数不能自由扩充  

为了优化这些问题，我们采用链表  

## 线性表的链式存储 

链式结构：在储存器中的位置是任意的，在逻辑上相邻的元素不一定相邻  

线性表的链式表示又称为非顺序映像或链式映像  

结点：数据结构的存储映像，由数据域和指针域两部分组成  

链表：n个结点由指针链组成的一个链表  

单链表：结点只有一个指针域的链表  

双链表：结点有两个指针域的链表  

循环链表：首尾相接  

头指针：是指向链表中第一个结点的指针  

首元结点：是指链表中存储第一个数据元素的结点  

头结点：是在首元结点前附设的一个结点  

那么链表的储存有两种形式：  

不带头结点：头指针直接指向首元结点  

带头结点：头指针指向头结点，头结点指向首元结点  

优点：  
1.结点空间可以动态申请和释放  
2.删除和插入时不需要移动元素  

缺点：  
1.存储密度小，每个结点的指针域需要额外占用储存空间  
![20230608211316](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608211316.png)  

2.链式结构是非随机存储结构，对任意一点的操作都需要从头指针链查找到该节点，增加了算法的复杂度  

![20230608211856](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608211856.png)  



结构：
```cpp
typedef struct list{//声明结点的类型和指向结点的指针类型
    int data;//结点的数据域
    struct list *next;//结点的指针域
}list,*nlist;

nlist h;//定义头指针
list *h;//这样也可以
```

### 构造一个空表

1.生成新结点作为头结点，用头指针h指向头结点  

2.将头结点的指针域置空  
```cpp
void init(nlist &h){
    h=new list;
    h->next=NULL;
}

```

### 判断列表是否为空

```cpp
bool empty(nlist &h){
    if(h->next){
        return false;
    }else return true;
}

```


### 单链表的销毁

从头指针开始，依次释放所有点  

用p指针来存当前需要销毁的地址，从头指针开始，如果头指针的下一个指针所指的位置不空，说明我们要删掉头指针所在的地址，并遍历头指针所指的下一个元素。  

首先将p指向头指针的地址，将头指针的地址变成头指针指向的下一个元素的地址，然后再删除头指针  

```cpp
void delist(nlist &h){
    nlist p;
    while(h){
        p=h;
        h=h->next;
        free(p);
    }
}
```

### 清空单链表

链表仍存在，但是链表中无元素，成为空链表（头指针和头结点依然存在）  

依次释放头指针之后的所有结点，并将头指针指向空地址  

```cpp
void clear(nlist &h){
    nlist p=h->next;
    while(p){
        nlist op=p->next;
        free(p);
        p=op;
    }
    h->next=NULL;
}
```
### 查找表的长度

用一个新指针p指向第一个结点，当p不空的时候计数++，p指向下一个元素  

```cpp
int listlength(nlist h){
    int ans=0;
    nlist p=h->next;
    while(p){
        ans++;
        p=p->next;
    }
    return ans;
}
```

### 取单链表中第i个元素

从首元结点开始，一直搜到第i个元素为止  

所以链表不是随机存储结构  

条件：i必须在链表范围内（1<=i<=length）  

```cpp
bool cheecke(nlist h,int &e,int i){
    nlist p=h->next;
    if(i<1)return false;
    int j=1;
    while(j<i&&p){
        j++;
        p=p->next;
    }
    if(i==j){
        e=p->data;
        return true;
    }else return false;
}

```


### 查找

按值查找：1.获取地址 2.获取下标  

获取地址：
```cpp
bool cheeke(int e,nlist h,nlist op,int i){
    nlist p=h->next;
    int j=1;
    while(p){
        if(p->data==e){
            op=p;
            i=j;
            return true;
        }
        j++;
        p=p->next;
    }
    return false;
}
```

### 插入

在第i个位置插入值为e的结点  

```cpp
bool insert(nlist &h,int e,int i){
    int j=0;
    nlist p=h;
    nlist op=new list;
    op->data=e;
    if(i<1)return false;
    while(p){
        if(j==i-1){
            op->next=p->next;
            p->next=op;
            return true;
        }
        p=p->next;
        j++;
    }
    return false;
}
```

### 删除第i个结点

```cpp
bool delisti(nlist &h,int i){
    int j=0;
    nlist p=h;
    if(i<1)return false;
    while(p->next){
        if(j==i-1){
            nlist op=p->next;
            p->next=op->next;
            free(op);
            return true;
        }
        p=p->next;
        j++;
    }
    return false;
}

```

### 单链表的建立

头插法：  
1.从一个空表开始，重复读入数据  
2.生成新结点，将读入的数据存放到新结点的数据域中  
3.从最后一个结点开始，将各个结点依次插进链表的前端  
```cpp
typedef struct {
    int num;
}a;
a q[N];
void build1(){
    scanf("%d",&n);
    nlist h=new list;
    h->next=NULL;
    for(int i=1;i<=n;i++){
        scanf("%d",&q[i]);
    }
    for(int i=n;i>=1;i--){
        nlist op=new list;
        op->data=q[i];
        op->next=h->next;
        h->next=op;
    }
}

```
尾插法：  

从空表h开始，将新结点依次插入到链表的尾部，尾指针r指向链表的尾结点  
2.初始时，r同h均指向头结点，每读入一个数据元素则申请一个新结点，将新结点插入到尾结点，r指向新结点  
```cpp
void build2(){
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        scanf("%d",&q[i]);
    }
    nlist h=new list;
    h->next;
    nlist r=h;
    for(int i=1;i<=n;i++){
        nlist op=new list;
        op->data=q[i];
        op->next=NULL;
        r->next=op;
        r=op;
    }
}
```

## 循环链表

是一种头尾相接的链表，即最后一个结点的指针域指向头结点  

优点：从任意一个点出发都能找到任何一个其他的结点  

遍历结束的标志：当前点等于头指针  

合并两个循环列表，将Tb合并到Ta之后  

![20230608182040](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608182040.png)

```cpp
void hb(nlist &Ta,nlist &Tb){
    nlist op=Ta->next;
    Ta->next=Tb->next->next;
    free(Tb->next);
    Tb->next=op;
}

```

## 双向链表

在单链表的每个结点里再增加一个指向直接前驱的指针域pre  

```cpp
typedef struct list{
    a data;
    struct list *next,*pre;
}list,*nlist;

```

双向链表的头结点的pre域是空，尾结点的next域为空  

![20230608202251](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230608202251.png)  

双向链表也有循环链表，头结点的pre指针指向尾结点，尾结点的next指针指向头结点，当双向链表是空表的时候，头结点的pre指针指向自己，next指针也指向自己  

### 插入

```cpp
nlist geti(nlist &h,int i){
    nlist p=h->next;
    int j=1;
    while(p){
        if(j==i){
            return p;
        }
    }
    return NULL;
}
bool insert(int i,nlist &h,int e){
    nlist nx=geti(h,i);
    if(!nx) return false;
    nlist pr=nx->pre;
    nlist op=new list;
    op->data=e;
    op->next=nx;
    nx->pre=op;
    pr->next=op;
    op->pre=pr;
    return true;
}

```

### 删除

```cpp
bool delist(nlist &h,int i){
    nlist p=geti(h,i);
    if(!p)return false;
    nlist pr=p->pre;
    nlist nx=p->next;
    free(p);
    pr->next=nx;
    nx->pre=pr;
    return true;
}

```

## 线性表的应用

### 线性表的合并
问题描述：  
假设两个线性表La和Lb分别表示两个集合AB，现在要求一个新的集合A=A和B的并集  

看其中一个表的每个元素，看看是否出现在另一个表中，如果没出现就将这个元素放在另一个表的尾结点的后面  

假设表的结构是这样的：
```cpp
typedef struct list{
    int data;
    list *next;
}list,*nlist;
```

```cpp
int getlen(nlist h){
    int ans=0;
    nlist p=h->next;
    while(p){
        ans++;
        p=p->next;
    }
    return ans;
}

void gete(nlist h,int i,int &e){
    int j=1;
    nlist p=h->next;
    while(j<i){
        j++;
        p=p->next;
    }
    e=p->data;
}

bool cheeck(nlist h,int e){
    nlist p=h->next;
    while(p){
        if(p->data == e){
            return true;
        }
        p=p->next;
    }
    return false;
}

void insert(nlist &h,int e){
    nlist p=h;
    nlist op=new list;
    op->data=e;
    op->next=NULL;
    while(p->next) p=p->next;
    p->next=op;
}
void un(nlist &la,nlist &lb){
    int lena=getlen(la);
    int lenb=getlen(lb);
    for(int i=1;i<=lenb;i++){
        int e;
        gete(lb,i,e);
        if(!cheeck(la,e)) {
            lena++;
            insert(la,e);
        }
    }
}

```

### 有序表的合并


问题描述：  
已知线性表La和Lb中的数据元素按值按非递减有序序列，现要求将La和Lb归并成一个新的线性表Lc，并且Lc中的值还继续按照值非递减  


用顺序表实现：  
顺序表操作比较方便，我们定义这样一个顺序表  
```cpp
typedef struct{
    int *elem;
    int length;
}list;
```
那么合并函数就是：  
```cpp
void merge(list la,list lb,list &lc){
	int *pa=la.elem ;
	int *pb=lb.elem ;
	int *pc=lc.elem ;
	int lena=la.length ;
	int lenb=lb.length ;
	int lenc=lena+lenb;
	lc.length =lenc;
	lc.elem =new int[lenc];
	int *lalast=pa+lena-1;
	int *lblast=pb+lenb-1;
	while(pa<=lalast&&pb<=lblast){
		if(*pa <= *pb){
			*pc=*pa;
			pc++;
			pa++;
		}else{
			*pc=*pb;
			pc++;
			pb++;
		}
	}
	while(pa<=lalast){
		*pc=*pa;
		pc++;
		pa++;
	}
	while(pb<=lblast){
		*pc=*pb;
		pc++;
		pb++;
	}
}
```
链表的实现：  
定义一个这样的链表：
```cpp
typedef struct list{
    int data;
    list *next;
}list,*nlist;
```
合并操作：  
```cpp
void merge(nlist &la,nlist &lb,nlist &lc){
    nlist pa=la->next;
    nlist pb=lb->next;
    nlist r=lc;
    while(pa&&pb){
        nlist op=new list;
        op->next=NULL;
        if(pa->data<=pb->data){
            op->data=pa->data;
            r->next=op;
            r=op;
            pa=pa->next;
        }else{
            op->data=pb->data;
            r->next=op;
            r=op;
            pb=pb->next;
        }
    }
    while(pa){
       nlist op=new list;
       op->data=pa->data;
       op->next=NULL;
       r->next=op;
       r=op;
       pa=pa->next; 
    }
    while(pb){
        nlist op=new list;
        op->data=pb->data;
        op->next=NULL;
        r->next=op;
        r=op;
        pb=pb->next;
    }
}
```

## 有序表的合并 -用链表
有a和b两个链表，合并后的新链表是c  

a的头节点是la，b的头节点是lb，c的头节点是lc  

先将c的头节点建立，可以等于a的头结点或者b的头结点  

然后再用三个指针pa，pb和pc分别指向a，b和c的首元节点  

当两个链表都没有遍历完的时候，每次比较两个指针所指的数据的大小  

假设pa的数据小，那么我们将pc的下一位的地址指向pa，然后pc往后移动一位（pc=pc.next||pc=pa），再将pa往后
移动一位  

最后如果还有剩余的元素，那么我们将剩余的部分接在pc后，即：如果pa是空指针，那么就将pb接到pc的后面，反之则将pa接到pc的后面  

最后b的头结点没有用了，那么我们就释放lb

```cpp
void merge(nlist &la,nlist &lb,nlist &lc){
    nlist pa,pb,pc;
    pc=lc=la;
    pa=la->next;
    pb=lb->next;
    while(pa&&pb){
        if(pa->data<=pb->data){
            pc->next=pa;
            pc=pc->next;
            pa=pa->next;
        }else{
            pc->next=pb;
            pc=pc->next;
            pb=pb->next;
        }
    }
    if(pa){
        pc->next=pa;
    }else pc->next=pb;
    free(lb);
}
```

## 一元多项式的运算

实现两个多项式的加减乘运算  

用两个顺序表分别存储两个多项式每个对应项的系数，然后再建立一个表将两个顺序表每个对应表相加的结果存储  

### 稀疏多项式的运算

1.用顺序表存储：

我们用两个顺序表存储每个项的系数和指数  

然后比较每项，那么对于两个表的对应项来说只有两种情况：指数相同或者指数不同  

当指数相同的时候就将系数相加，如果结果不为0的话就在c里增加一个新项  

当指数不相同的时候，将指数较小的项复制到c中  

当一个多项式遍历完毕的时候，将另一个剩余项依次复制到c中即可  

那么就有有几个问题：新建的数组的大小不好确定，空间复杂度比较高  

2.用链表存储

还是用两个链表a，b分别存储两个多项式的每一项的系数和指数：  

先建立头结点la。假设有n个项数，那么我们遍历每项的时候先建立一个新节点s，然后再从链表的头结点开始遍历，找到小于当前项系数的最大项作为前驱pre节点，和他的后继p节点，将s加入到pre和s中间  

```cpp
typedef struct list{
    double x;//系数
    int z;//指数
    struct list *next;
}list,*nlist;

void build(nlist &l,int n){
    l=new list;
    l->next=NULL;
    for(int i=1;i<=n;i++){
        nlist s=new list;
        cin>>s->x>>s->z;
        nlist pre,p;
        pre=l;
        p=l->next;
        while(p&&p->z<s->z){
            pre=p;
            p=p->next;
        }
        s->next=p;
        pre->next=s;
    }
}
```

建立应该新链表c，从a和b的首元节点pa，pb判断，如果pa和pb的指数相等，就将系数相加，如果结果不等于0就将新结果加到c中；如果pa和pb的指数不相等，那么我们就将指数较小的接在c后。当最后有一个链表已经遍历完，那么就将另一个链表接到c后面即可  

```cpp


void add(nlist *la,nlist *lb){
    nlist lc,pc,pa,pb;
    lc=pc=la;
    pa=la->next;
    pb=lb->next;
    while(pa&&pb){
        if(pa->z==pb->z){
            double op=pa->x+pb->x;
            if(op){
                pc->next->x=op;
                pc->next->z=pa->z;
                pc=pc->next;
            }
            pa=pa->next;
            pb=pb->next;
        }else{
            if(pa->z<pb->z){
                pc->next->z=pa->z;
                pc->next->x=pa->x;
                pc=pc->next;
                pa=pa->next;
            }else{
                pc->next->x=pb->x;
                pc->next->z=pb->z;
                pc=pc->next;
                pb=pb->next;
            }
        }
    }
    if(pa)pc->next=pa;
    else pc->next=pb;
    free(lb);
}

```


## 栈和队列

栈和队列是只能在端点进行操作的线性表  

栈具有后进先出的特性  

栈（stack）是仅在表尾进行插入删除操作的线性表  

表尾称为栈顶（top），表头称为栈底（base）  

插入元素到栈顶的操作称为入栈（push（x）），从栈顶删除最后一个元素的操作称为出栈（pop（））  

逻辑结构：一对一  

存储结构：顺序栈和链栈都可以，顺序栈更常见  

队列有先进先出的特性  

在表尾插入在表头删除  

逻辑结构：一对一  

存储结构：顺序队或链队，循环顺序队列更常见  


```cpp
对于栈：
insert(S,n+1,x);
delete(S,n);
对于队列：
insert(S,n+1,x);
delete(S,1);
```

### 案例

栈：  

1.进制转换  

十进制数N向其他进制数d的转换  

转换法则：除以d倒取余  

就是先将当前数对d取余，数存到数组里，然后再将当前数除以d，重复操作直至当前数为0  

那么答案就是数组的逆序输出  

栈的特性刚好可以满足这个要求：先进去的后出  

那么我们每次就将取余之后的数放入栈中，当做完操作的时候再将栈里的所有数弹出，就是想要的答案  

2.括号匹配的检验  

假设表达式中允许包含两种括号：圆括号和方括号  

其嵌套的顺序随意，例如：  

1.( [ ] ( ) )或[ ( [ ] [ ] ) ]  

2.[ ( ] )为错误格式  

3.( [ ( ) )或( ( ) ] )为错误格式  

解法：将表达式遍历，如果当前符号是左括号的时候入栈，如果当前是右括号：判断当前栈顶是否是与之匹配的左括号，如果是的话将栈顶出栈，如果不是的话就说明不匹配，格式错误。到最后判断栈内是否为空，如果为空就说明格式正确，否则说明还有没有匹配的左括号，格式错误。  

3.表达式求值  

对于一个含有加减乘除的算式进行求值  

算法：算符优先算法  

表达式的组成：  

1.操作数：常数，变量  

2.运算符：算数运算符，关系运算符，逻辑运算符  

3.界限符：左右括弧和表达式结束符  

任何一个算数表达式都由操作数（常数，变量），算术运算符（+，-，*，/）和界限符（括号，表达式结束符'#',虚设的表达式起始符'#')组成，后两者统称为算符  

例如：#3*(7-2)#  

为了实现表达式求值，需要设置两个栈：  

一个是算符栈optr，用于寄存运算符  

另一个称为操作数栈opnd，用于寄存运算数和运算结果  

求值的处理过程是从左向右扫描表达式的每一个字符  

当扫描的到的是运算数，将其压入栈opnd  

当扫描的是运算符时：  

1.若这个运算符比optr栈顶运算符的优先级高，则入栈optr，继续向后处理  

2.若这个运算符比optr栈顶运算符优先级低，则从opnd栈中弹出两个运算数，从optr中弹出栈顶运算符进行运算，并将运算结果压入栈opnd中  


队列：  

1.舞伴问题  

假设在舞会上，男士和女士各自排成一队。配对舞伴的时候依次从两个队头各出一人配成舞伴，如果两队初始人数不同，那么较长的一队未配对的等待下一轮舞曲，要求写一种算法模拟上述配对  

那么先构造两个队列，然后依次将队头元素出队配成舞伴。  
  



### 栈的顺序表示

利用一组地址连续的存储单元依次存放自栈底到栈顶的数据元素，栈底一般在低地址端  

附设top指针，指示栈顶元素在顺序栈中的位置，但是为了方便操作通常top指示真正的栈顶元素之上的下标位置  

另设base指针，指示栈底元素在顺序栈中的位置  

另外，用stacksize表示栈可使用的最大容量（栈的下标范围：0~stacksize-1）  

空栈：top和base指针相等  

栈满：top-base=stacksize  

```cpp
typedef struct Stack{
    Stack *base;//栈底指针
    Stack *top;//栈顶指针
    int stacksize;//栈可用最大容量
}Stack;

bool init(Stack &s){
    s->base=(Stack*)malloc(stacksize*sizeof(struct Stack));//为栈底指针分配内存
    if(!s->base)return false;//储存分配失败
    s->top=base;
    s->stacksize=stacksize;
    return true;
}


```
#### 判断栈是否为空

```cpp
bool empty(Stack s){
    if(s->top==s->base)return true;
    else return false;
}
```

#### 求栈内元素个数

```cpp
int getlength(Stack s){
    return s->top-s->base;
}
```
#### 清空栈
```cpp
bool clear(Stack &s){
    if(s->base)s->top=s->base;//如果栈存在，就清空
    return true;
}
```

#### 销毁栈

```cpp
bool deletestack(Stack &s){
    if(s->base){
        free(s->base);
        s->stacksize=0;
        s->base=s->top=NULL;
    }
    return true;
}
```


#### 入栈

先判断栈是否满，如果满了就不能入栈（top-base==stacksize）

入栈元素x赋值给top指针所指的位置，top向后移动  

```cpp
bool insert(Stack &s,int x){
    if(s->top-s->base==s->stacksize)return false;
    *s->top=x;
    s->top++;
    return true;
}
```

#### 出栈

位置在top-1的元素出栈，top--  

```cpp
bool pop(Stack &s,int x){
    if(s.top-s.base==0)return false;
    s.top--;
    x=*s->top;
    return true;
}
```


### 栈的链式表示

```cpp
typedef struct Stack{
    int data;
    struct Stack *next;
}Stack,*nStack;
```

链栈只能在链表头部操作，在链表头进行插入和删除  

链表的头指针就是栈顶，不需要头结点，基本不存在栈满的情况，空栈相当于头指针指向空  

构造一个空栈
```cpp
void init(nStack &s){
    s=NULL;
}
```

#### 判断栈是否为空

```cpp
bool empty(nStack s){
    if(s==NULL)return true;
    else return false;
}
```


 #### 入栈操作

s用来记录栈顶节点，也就是头节点，那么我们想插入一个新元素，就需要新建一个节点，让这个节点的指针指向原来的栈顶s，然后将s更新为这个新节点  

 ```cpp
void insert(nStack &s,int x){
    nStack op;
    op=(nStack)malloc(sizeof(struct Stack));
    op->data=x;
    op->next=s;
    s=op;
}

 ```

#### 出栈操作

```cpp
bool pop(nStack &s,int &e){
    if(s==NULL)return false;
    e=s->data;
    nlist p=s;
    free(p);
    s=s->next;
    return true;
}

```

#### 取栈顶元素

```cpp
int top(nStack &s){
    if(s!=NULL)return s->data;
}

```

## 队列


队列是仅在表尾进行插入操作，在表头进行删除操作的线性表  

插入元素称为入队，删除元素称为出队  

存储结构为链队或者顺序队，一般用循环顺序队  

对于一般的顺序队如果back-front==N，那么说明队列的位置全被占满了，发生溢出，不能再入队了  

但是如果back-front< N,但是back=N,说明back到了队列的最后一个元素，但是front前面还有空的位置，可以将新入队的元素放到前面  

所以遇到back和front=N但是前面还有空位的情况，那么我们就将back和front放到前面去，可以用对N取余操作实现使得下标在0~N-1之间  

那么取余之后，队空和队满的时候front和back都相等，那么怎么判断呢  

解决这个问题，我们可以少用一个元素空间  

那么当队满的时候的条件就是队尾指针+1=队头指针（q.back+1+N) %N==q->front,队空的时候就是back=front  

### 队列的顺序表示

用一维数组data[N]  

```cpp
typedef struct Queue{
    int *data;//队头元素的指针
    int front;//队头元素的下标
    int back;//队尾元素的下标
}Queue;
```

#### 初始化

```cpp
bool init(Queue &q){
    q.data=(int*)malloc(sizeof(int)*N);
    if(q.data==NULL)return false;
    q.front=0;
    q.back=0;
    return true;
}

```

#### 求队列的长度

```cpp
int getlength(Queue &q){
    return (q.back-q.front+N)%N;
}
```


#### 入队

```cpp
bool insert(Queue &q,int &x){
    if((q.back+1)%N==q.front)return false;
    q.data[q.back]=x;
    q.back=(q.back+1)%N;
    return true;
}

```
#### 出队

```cpp
bool pop(Queue &q,int &x){
    if(q.back==q.front)return false;
    x=q.data[q.front];
    q.front=(q.front+1)%N;
    return true;
}

```

#### 取队头元素

```cpp
bool getf(Queue &q,int &x){
    if(q.front==q.back)return false;
    x=q.data[q.front];
    return true;
}
```

### 队列的链式存储方式

若用户无法估计所用队列的长度，采用链式队列存储  

```cpp
typedef struct Queue{
    int data;
    Queue *next;
}Queue,*nQueue;

typedef struct{
    nQueue front;//头指针
    nQueue back;//尾指针
}lQueue;
```

#### 初始化
```cpp
bool init(lQueue &q){
    q.front=q.back=(Queue*)malloc(sizeof(struct Queue));
    if(!q.front)return false;
    q.front=q.back=NULL;
    return true;
}

```

#### 销毁
从头节点开始依次释放所有点  

```cpp
void delect(lQueue &q){
    while(q.front){
        p=q.front->next;
        free(q.front);
        q.front=p;
    }
}

//也可以写为
void delect(lQueue &q){
    q.back=q.front->next;
    free(q.front);
    q.front=q.back;
}

```


#### 入队
在back指针的后面插入新指针  

```cpp
bool insert(lQueue &q,int e){
    nQueue op;
    op=(Queue*)malloc(sizeof(struct Queue));
    if(!op)return false;
    op->data=e;
    op->next=NULL;
    q.back->next=op;
    q.back=op;
    return true;
}

```



#### 出队

将头指针front的next指针指向本身的下一个指针  

```cpp
bool pop(lQueue &q,int &x){
    if(q.front==q.back)return false;
    nQueue p=q.front->next;
    x=p->data;
    q.front->next=p->next;
    if(q.back==p)q.back=q.front;//当删的是最后一个元素的时候，尾指针也需要变
    free(p);
    return true;
}

```

## 串，数组和广义表

串：内容受限的线性表，里面只能是字符，是由零个或多个任意字符组成的有限序列  

子串：串中任意个连续的字符组成的子序列称为该串的子串  

真子串是不包含自身的所有子串  

主串：包含子串的串称为主串  

字符位置：字符在序列中的序号  

子串位置：子串中第一个字符在主串中的位置  

空格串：由一个或多个空格组成的串  

串相等：当且仅当两个串的长度相等并且各个对应位置上的字符都相同  

所有的空串都是相等的  

### 串的类型定义，储存结构及运算


串的顺序储存结构

一般下标从1开始  

```cpp
typedef struct{
	char ch[N+1];//存储串的一维数组
	int length;//串的当前长度
}String;
```

串的链式存储结构  

如果用普通的链表，每个结点只存一个字符的话，存储密度太低，那么我们就可以在一个结点的数据域存储多个字符来优化这个问题，那么这样的链表就叫做块链  

```cpp
typedef struct Chunk{
	char ch[N];
	struct Chunk *next;
}Chunk;
typedef struct {
	Chunk *head,*tail;//串的头指针和尾指针
	int length;//串的当前长度
}Lstring;

```

### 数组

数组：按一定格式排列起来的具有相同类型的数据元素的集合  

一维数组：若线性表中的数据元素为非结构的简单元素，则称为一维数组  

二维数组：若一维数组中的数据元素又是一维数据结构，则称为二维数组  

三维数组：若三维数组中的数据元素又是一维数据结构，则称为三维数组  

...

n维数组：若n-1维数组中的数据元素又是一维数据结构，则称为n维数组  

线性表和数组的关系：线性表结构是数组结构的一个特例，而数组结构又是线性表结构的拓展  

![20230614194303](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230614194303.png)  

在c语言中一个二维数组类型也可以定义为一维数组类型
```cpp
typedef elemtype array2[m][n];
//等价于
typedef elemtype arry1[n];
typedef arry1 arry2[m];
```

一般用顺序存储结构来表示数组  

数组可以是多维的，但是内存单元是一维的，在存储数组数据结构之前，需要将多维关系映射到一维关系的问题  

#### 特殊矩阵的压缩存储

压缩存储：若多个数据元素的值都相同，则只分配一个元素值的存储空间，且0元素不占存储空间  

1.对称矩阵的压缩：在n*n的矩阵a中，满足以下性质：a[i][j]=a[j][i]，那么我们只用存储下（或上）三角（包括主对角线）的数据元素，共占用n(n+1)/2个元素空间  

### 广义表

广义表是n个元素的有限序列，其中每个元素是可以是一个原子，也可以是一个广义表  

广义表通常记作：LS=(a1,a2,a3...an)  

习惯上，一般用大写字母表示广义表，小写字母表示原子  

表头：若LS非空，那么第一个元素就是表头，记作head(Ls)=a1，表头可以是原子也可以是子表  

表尾：除了表头之外的其他元素组成的表，记作：tail(a2,a3...an)，表位不是最后一个元素，而是子表  

广义表的长度定义为最外层所包含元素的个数  

![20230615092632](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615092632.png)  

广义表的深度定义为广义表展开后所含括号的重数  

![20230615092945](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615092945.png)  

#### 线性表和广义表的区别

广义表可以看做是线性表的推广，线性表是广义表的特例  




## 树和二叉树

### 树和森林

定义：树是有n个结点的有限集  

若n=0，称为空树  

若n>0，则满足两个条件：  

1.有且仅有一个特定的称为n的结点  

2.剩余结点可分为m个互不相交的有限集T1，T2...，Tm，其中每个集合本身又是一颗树，并称为根的子树  

根节点：非空树中无前驱结点的结点  

结点的度：结点拥有的子树数  

树的度：树内各个结点的度的最大值  

叶子结点：度=0的点，也叫终端结点  

分支结点：度！=0的点，也叫非终端结点  

内部结点：除了根结点以外的分支结点  

结点的子树的根称为该节点的孩子，该节点是其孩子的双亲  

对于一些有相同双亲的结点互为兄弟结点  

位于同一层的结点叫做堂兄弟  

结点的祖先：从根到该节点所经分支上的所有节点  

结点的子孙：以某一结点为根的子树中的任一结点  

树的深度：树中结点的最大层次  

森林：m（m>=0）个互不相交的树的集合  

一颗树可以看做是特殊的森林  

#### 树的存储结构

实现：定义数组存放数的结点，每个结点含两个域：  

1.数据域：存放结点本身的信息  

2.双亲域：指示本结点的双亲结点在数组中的位置  

特点：找双亲容易找孩子难  

```cpp
typedef struct ptnode{
    int data;//存储数据
    int p;//存储双亲
}ptnode;

typedef struct {
    ptnode nodes[N];
    int r,n;//根结点的位置和结点个数
}ptree;
```




### 二叉树

为什么要研究二叉树？  

1.二叉树结构简单，规律性最强  

2.可以证明，所有树都可以转为唯一对应的二叉树，不失一般性  

二叉树是n个结点的有限集，或者是空集  

由一个根结点及两个互不相交的分别称作这个根的左子树和右子树的二叉树组成  


二叉树的特点：  

1.每个结点最多有两个孩子  

2.子树有左右之分，次序不能颠倒  

3.二叉树可以是空集合，根可以有空的左子树或者空的右子树  

二叉树不是树的特殊情况，他们是两个概念：  

二叉树的子树要区分左子树和右子树，即使只有一个子树也要进行区分  

树当结点只有一个孩子时，就无需区分他是左还是右  

（也就是说二叉树每个结点位置或者说次序都是固定的，可以是空，但是不能说他没有位置，而树的结点位置是相对于别的结点来说的，没有别的结点时就无所谓左右）  

#### 二叉树的性质

性质：  

1.二叉树在第i层上至多有$2^(i-1)$个结点，至少有1个结点  

2.深度为k的二叉树最多有$2^(k)-1$个结点，至少有k个结点  

3.对于任何一颗二叉树，如果叶子数为n0，度为2的结点数为n2，n0=n2+1  

4.具有n个结点的完全二叉树的深度为$\left \lfloor \log_{2}{n}  \right \rfloor+1$  

5.对一个有n个结点的完全二叉树，按层序遍历，对任意结点i，有：  

1）如果i=1，则i是二叉树的根；否则i的双亲结点是i/2  

2）如果2i>n，则i为叶子结点，无左儿子，否则其左儿子是2i  

3）如果2i+1>n，则i无右儿子；否则i的右儿子是2i+1 

#### 满二叉树和完全二叉树

满二叉树：一颗深度为k且有$2^(k)-1$个结点的二叉树  

满二叉树的特点：  

1.每层上的结点数都是最大结点数  

2.叶子结点全部在最底层  

完全二叉树：深度为k的具有n个结点的二叉树，当且仅当每个结点都与深度为k的满二叉树中编号为1~n的结点一一对应时，称为完全二叉树  

![20230615140621](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615140621.png)  

完全二叉树的特点：  

1.叶子只可能分布在最大的两层上  

2.对任意结点，如果其右子树最大层数是i，那么他的左子树层数必为i或i+1   

#### 二叉树的存储结构

![20230615142109](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615142109.png)  

二叉树的链式存储结构：  

存储三个部分：data存储本身的信息，lchild存储左儿子，rchild存储右儿子  

```cpp
typedef struct tree{
    char data;//存储的数据
    struct tree *lchild,*rchild;
}tree,*ntree;
```
在n个结点的二叉链表中，有几个空指针域？  

有2n个链域，处跟结点之外，其他的结点都有一个唯一的双亲，那么被占用的链域就是n-1个，剩下的空指针域就是n+1个  

#### 二叉树的建立

先按照二叉树的结构写出对应的先序（或中序或后序）遍历，注意需要将二叉树所有结点的左右子树用空结点（比如'#'）补全（如果只求出了不是空的元素的先序遍历，那么不能确定唯一的二叉树），对于补全的二叉树求先序遍历，然后按照先序遍历写出先序序列，再建树  

![20230615182351](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615182351.png)  




```cpp
//按照先序序列建立二叉树
bool creatxianxu(ntree &t){
    char ch;
    scanf("%c",&ch);
    if(ch=='#'){
    	t=NULL;
    	return true;
	}
    t=(tree *)malloc(sizeof(struct tree));
    if(!t)return false;
    t->data=ch;
    creatxianxu(t->lchild );
    creatxianxu(t->rchild );
    return true;
}

```


#### 遍历二叉树

遍历的定义：顺着某一条搜索路径巡防二叉树中的结点，使得每个结点都被访问一次，而且仅被访问一次  

遍历的目的：得到树中所有结点的一个线性排列  

遍历用途：是树结构插入，删除，修改，查找和排序运算的前提，是二叉树一切运算的基础和核心  

遍历方法：先序遍历，中序遍历，后序遍历  

![20230615154508](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615154508.png)  

若二叉树中各结点的值均不相同，则二叉树的先序序列，中序序列和后序序列都是唯一的  

由二叉树的先序序列和中序序列，或由二叉树的后序序列和中序序列可以确定唯一的二叉树  


```cpp
//先序遍历
void xianxu(ntree t){
    if(t){
        printf("%d ",t->data);
        xianxu(t->lchild);
        xianxu(t->rchild);
    }
}

//中序遍历

void zhongxu(ntree t){
    if(t){
        zhongxu(t->lchild);
        printf("%d ",t->data);
        zhongxu(t->rchild);
    }
}


//后序遍历

void houxu(ntree t){
    if(t){
        houxu(t->lchild);
        houxu(t->rchild);
        printf("%d ",t->data);
    }
}
```

已知先序和中序序列求二叉树  

先序遍历：根左右，中序遍历左根右，那么我们先用先序遍历找到整个根节点，那么在中序遍历中这个根节点的左边就是他的左子树里有的节点，右边就是他的右子树中有的节点，对于他的左右子树中的节点，看哪个节点先出现在先序遍历中，那么这个结点就是子树的根，确定跟之后再按照中序遍历看该节点的左右子树...以此类推  

#### 复制二叉树

如果是空树，递归结束  

否则，申请新结点空间，复制根结点，然后递归复制左子树，再递归复制右子树  

```cpp
bool copy(ntree t,ntree &nt){
	if(t==NULL){
		nt=NULL;
		return ;
	}
	nt=(tree*)malloc(sizeof (struct tree));
	if(nt==NULL)return false;
	nt->data =t->data ;
	copy(t->lchild ,nt->lchild );
	copy(t->rchild ,nt->rchild );
	return true;
}
```

#### 计算二叉树深度

如果是空树，则深度为0  

否则，递归计算左子树的深度记为m，递归计算右子树的深度记为n，二叉树的深度则是m和n的较大者+1  

```cpp
int deep(ntree &t){
	if(t==NULL)return 0;
	int m=deep(t->lchild );
	int n=deep(t->rchild );
	if(m>=n)return m+1;
	else return n+1;
}
```

#### 计算二叉树结点总数

如果是空树，返回0  

否则个数是左子树结点个数+右子树结点个数+1  

```cpp
int getn(ntree &t){
	if(t==NULL)return 0;
	return getn(t->lchild)+getn(t->rchild )+1;
}
```

#### 计算二叉树叶子结点的个数

如果是空树，叶子结点个数为0  

否则是左子树的叶子结点个数+右子树的叶子结点个数  

```cpp
int getyz(ntree &t){
	if(t==NULL)return 0;
	if(t->lchild==NULL&&t->rchild==NULL) return 1;
	return getz(t->lchild )+getz(t->rchild );
}

```


#### 线索二叉树

为什么要研究线索二叉树？  

当用二叉链表作为二叉树的存储结构时，可以很方便的找到某个结点的左右孩子，但一般情况下，无法直接找到该节点在某种遍历序列中的前驱和后继  

一般解决方法：  

1.遍历一遍直接找--浪费时间  

2.再增加前驱，后继结点--增加存储负担  

3.利用二叉链表中的空指针域：如果某个结点的左孩子为空，那么我们将空的左孩子指针指向其前驱，如果结点的右孩子为空，则将右孩子的指针域改为后继  

上面方法3中改变指向的指针称为线索，加上了线索的二叉树称为线索二叉树  

对二叉树按某种遍历次序使其变为线索二叉树的过程叫做线索化  

![20230615205933](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230615205933.png)  

（为了区分和原来指针的关系，画的时候线索线用虚线）  

那么为了区分lchild和rchild到底是指向孩子的指针还是指向前驱或者后继的指针，对二叉链表中的每个结点都增设两个标志域ltag和rtag，并约定：  

tag=0，指向孩子，tag=1，指向对应的前驱或者后继  

那么线索二叉树的结构就是： 

```cpp
typedef struct xstree{
    int data;
    int ltag,rtag;
    struct xstree *lchild,*rchild;
}xstree,*nxstree;

```

### 案例

#### 数据压缩问题

将数据文件转换成由0，1组成的二进制串，称为编码  

#### 利用二叉树求解表达式的值  

若表达式为‘第一操作数 运算符 第二操作数’的形式，那么相应的二叉树中以左子树表示第一操作数，右子树表示第二操作数，根节点的数据域存放运算符  


### 哈夫曼树


路径：从树中的一个结点到另一个结点之间的分支构成这两个结点间的路径  

结点的路径长度：两个结点间路径上的分支数  

树的路径长度：从树的根结点到每个结点的路径长度之和  

权：将树中的结点赋给一个有某种含义的数值，则这个数值称为该节点的权  

结点的带权路径长度：从根结点到该点的路径长度与该点权的乘积  

树的带权路径长度：树中所有叶子结点的带权路径长度之和，记作：WPL  

哈夫曼树：带权路径长度最短的二叉树  


## 图



![20230616090536](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616090536.png)  

![20230616091129](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091129.png)  

![20230616091409](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091409.png)  

![20230616091503](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091503.png)  

![20230616091749](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616091749.png)  


![20230616092042](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092042.png)  


![20230616092735](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092735.png)  


![20230616092848](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092848.png)  

![20230616092948](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616092948.png)  

![20230616093037](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616093037.png)  

![20230616093207](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616093207.png)  

### 图的存储结构

邻接矩阵和链式存储结构  

邻接矩阵：  

![20230616094110](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094110.png)  

![20230616094229](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094229.png)  

![20230616094319](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094319.png)  

![20230616094639](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094639.png)  

![20230616094803](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094803.png)  

![20230616094841](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616094841.png)  

![20230616095141](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095141.png)  

![20230616095532](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095532.png)  

边有权值的图，在结点上地址域前加一个数据域就可以了  

![20230616095717](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095717.png)  


![20230616095846](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616095846.png)  


邻接矩阵和邻接表的关系：  

1.联系:邻接表中每个链表对应于邻接矩阵中的一行，链表中结点个数等于一行中非零元素的个数  

2.区别:  
1）对于任一确定的无向图，邻接矩阵是唯一的(行列号与顶点编号一致)，但邻接表不唯一（链接次序与顶点编号无关）  
2）邻接矩阵的空间复杂度为O(n*n),而邻接表的空间复杂度为O(n+e)  

3.用途：邻接矩阵多用于稠密图，而邻接表多用于稀疏图  


### 图的遍历

遍历定义:  

从已给的连通图中某一顶点出发，沿着一些边访遍图中所有的顶点，且使每个顶点仅被访问一次，就叫做图的遍历，它是图的基本运算  

遍历实质:找每个顶点的邻接点的过程  

图的特点:  

图中可能存在回路，且图的任一顶点都可能与其它顶点相通，在访问完某个顶点之后可能会沿着某些边又回到了曾经访问过的顶点  

怎样避免重复访问?  

解决思路:设置辅助数组visit[n]，用来标记每个被访问过的顶点  
初始状态visit[i]为0  
顶点i被访问，改visit为1，防止被多次访问  


### 最小生成树

生成树:所有顶点均由边连接在一起，但不存在回路的图  


一个图可以有许多棵不同的生成树  

所有生成树具有以下共同特点:  

1.生成树的顶点个数与图的顶点个数相同  

2.生成树是图的极小连通子图，去掉一条边则非连通;一个有n个顶点的连通图的生成树有n-1条边;·在生成树中再加一条边必然形成回路  

3.生成树中任意两个顶点间的路径是唯一的  


最小生成树:给定一个无向网络，在该网的所有生成树中，使得各边权值之和最小的那棵生成树称为该网的最小生成树，也叫最小代价生成树  

#### prim算法

先将图的一个结点加入我们构造的最小生成树中的点集，然后找这个点集中有的点到这个点集中没有的点之间的所有边权最小的边，保留这条边，将这个边链接的没有加入点集的点加入点集  

如下图：  

![20230616105111](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616105111.png)  

用prim算法的步骤就是：  

![20230616105138](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616105138.png)  



#### kruskal算法

在所有的边中每次找到边权最小的边，满足：加入边之后的图不形成回路  

先画出所有点，然后慢慢加边  

### 最短路  

#### dijkstra算法：单源最短路

g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小  
然后进行dijk算法：  
d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0  
进行n次循环，每次找到一个没有被确定的最短距离d[t]  
再用d[t]来更新每个点到1的最小距离（d[j]=min(d[j],d[t]+g[t][j]))  

例：求下图中，a到其他结点的最短路径，画出求解过程  
![20230616112224](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616112224.png)  

![20230616112313](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616112313.png)  

#### floyd算法：多源汇最短路

算法思想：  

逐个顶点试探，从vi到vj的所有可能存在的路径中，选出一条最短的路径  

求最短路径步骤：  

初始时设置一个n阶方阵令其对角线元素为0，若存在边i->j，则对应元素为权值;否则为正无穷  

![20230616163007](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616163007.png)  

逐步试着在原直接路径中增加中间顶点，若加入中间顶点后路径变短，则修改之;否则，维持原值。所有顶点试探完毕，算法结束  

![20230616164031](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616164031.png)  

### 拓扑排序

有向无环图：无环的有向图，简称DAG图  

有向无环图常用来描述一个工程或系统的进行过程。(通常把计划、施工、生产、程序流程等当成是一个工程)  

AOV网：用一个有向图表示一个工程的各子工程及其相互制约的关系，其中以顶点表示活动，弧表示活动之间的优先制约关系，称这种有向图为顶点表示活动的网，简称AOV网，用来解决拓扑排序  

AOV网的特点：  

1.若从i到j有一条有向路径，则i是j的前驱;j是i的后继。  

2.若有i->j的一条有向边，则i是j的直接前驱;j是i的直接后继。  

3.AOV网中不允许有回路，因为如果有回路存在，则表明某项活动以自己为先决条件，显然这是荒谬的  


拓扑排序：在AOV网没有回路的前提下，我们将全部活动排列成一个线性序列，使得若AOV网中有i->j的弧存在，则在这个序列中，i一定排在j的前面，具有这种性质的线性序列称为拓扑有序序列，相应的拓扑有序排序的算法称为拓扑排序  

步骤：  
在有向图中选一个没有前驱的顶点且输出之  
从图中删除该顶点和所有以它为尾的弧  
重复上述两步，直至全部顶点均已输出;或者当图中不存在无前驱的顶点为止  

一个AOV网的拓扑排序不是唯一的  

检测AOV网中是否存在环的方法：  
对有向图构造其顶点的拓扑有序序列，若网中所有顶点都在它的拓扑有序序列中，则该AOV 网必定不存在环。  

<!-- ### 关键路径

AOE网：用一个有向图表示一个工程的各子工程及其相互制约的关系，以弧表示活动，以顶点表示活动的开始或结束事件，称这种有向图为边表示活动的网，简称为AOE网，用来解决关键路径  

把工程计划表示为边表示活动的网络，即AOE网，用顶点表示事件，弧表示活动，弧的权表示活动持续时间。  

解决的问题：  

![20230616173730](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616173730.png)  


问题：  

1.完成整项工作至少需要多少时间  

2.哪些活动是影响工程进度的关键  

确定关键路径，需要定义四个描述量：  

1.ve（vj）：表示事件j最早发生时间  

2.vl（vj）：表示事件j最迟发生时间  

3.e（i）：表示活动i最早开始时间  

4.l（i）：表示活动i最迟开始时间  

l（i）-e（i）表示完成活动ai的时间余量  

关键活动：关键路径上的活动，即l(i)=e(i)   -->


## 查找

在查找表里查找数据  

查找表：由同一类型的数据元素（或记录）构成的集合。由于“集合”中的数据元素之间存在着松散的关系，因此查找表是一种应用灵便的结构  


怎么查找？  

根据给定的某个值，在查找表中确定一个其关键字等于给定值的数据元素（或记录）  


关键字：用来标识一个数据元素(或记录) 的某个数据项的值  

主关键字:可唯一地标识一个记录的关键字是主关键字  

次关键字:反之，用以识别若干记录的关键字是次关键字  

查找的目的：  

对查找表经常进行的操作：  

1、查询某个“特定的”数据元素是否在查找表中;  
2、检索某个“特定的”数据元素的各种属性;  
3、在查找表中插入一个数据元素;  
4、删除查找表中的某个数据元素。  


查找表可分为两类:静态查找表和动态查找表  

静态查找表：仅作查询”（检索）操作的查找表  

动态查找表:作“插入”和“删除”操作的查找表。有时在查询之后，还需要将“查询”结果为“不在查找表中”的数据元素插入到查找表中;或者，从查找表中删除其“查询”结果为“在查找表中”的数据元素，此类表为动态查找表。  

### 平均查找长度ASL

查找算法的评价指标：关键字的平均比较次数，也称平均查找长度ASL  

![20230616203346](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616203346.png)  

n:记录的个数  

pi:查找第i个记录的概率（通常认为pi =1/n）  

ci:找到第i个记录所需的比较次数  

查找的方法取决于查找表的结构，即表中数据元素是依何种关系组织在一起的  


### 线性表的查找

#### 顺序查找

应用范围：
顺序表或线性链表表示的静态查找表  
表内元素之间无序  

查找成功的平均查找长度，设表中各记录查找概率相等：  

$ASL=\frac{n+1}{2}$  


优点:算法简单，逻辑次序无要求，且不同存储结构均适用。  

缺点:ASL太长，时间效率太低。  


#### 折半查找 

前提是序列必须有序  

假设我们查找x，用l和r分别记录查找的两个端点，起始时l=1，r=n，每次查找的时候取他们的中间点坐标mid：mid=(l+r)/2,每次比较a[mid]和x的大小，如果相等就找到了，否则的话：如果a[mid]>x，那么说明x在前面的位置，r=mid-1；如果a[mid]< x，那么说明x在后面的位置，l=mid+1  

如果l>r说明序列中没有，结束  

假如当前我们查找的是这个数组，ci表示第i个元素的实际查找次数  

![20230616214503](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230616214503.png)  

那么次数转换为树就是：  

![20230617092401](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617092401.png)  

那么平均查找长度就是：  

![20230617092436](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617092436.png)  



折半查找优点:效率比顺序查找高。  

折半查找缺点:只适用于有序表，且限于顺序存储结构（对线性链表无效）。  

#### 分块查找

条件：分块之后的块有序，块内元素可以有序或者无序  

分块查找：先将表分成块，对块进行二分查找，然后再对块内元素进行顺序查找  

分块过程：建立索引表，每个块含有块内最大关键字和指向本块的第一个元素的指针  

块有序表示：当i< j时，第i块里的每个元素都小于j块中最小的元素  

平均查找长度：  

![20230617093142](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617093142.png)  

优点：插入和删除比较容易，无需进行大量移动。  

缺点:要增加一个索引表的存储空间并对初始索引表进行排序运算。  

适用情况:如果线性表既要快速查找又经常动态变化，则可采用分块查找  


### 树表的查找  

当表插入、删除操作频繁时，为维护表的有序性，需要移动表中很多记录。  

改用动态查找表——几种特殊的树  

问题：对于给定值key，若表中存在，则成功返回;否则，插入关键字等于key的记录  

那么要用到几种特殊的树：二叉排序树，平衡二叉树,红黑树,B-树,B+树,键树  

#### 二叉排序树

二叉排序树:又称为二叉搜索树、二叉查找树  

二叉排序树或是空树，或是满足如下性质的二叉树:  

(1)若其左子树非空，则左子树上所有结点的值均小于根结点的值;  
(2)若其右子树非空，则右子树上所有结点的值均大于等于根结点的值;  
(3)其左右子树本身又各是一棵二叉排序树  

二叉排序树的性质:  

中序遍历非空的二叉排序树所得到的数据元素序列是一个按关键字排列的递增有序序列。  

二叉排序树的查找：  

从根节点开始查找x，如果当前结点大于x，那么查找他的左子树，如果当前结点小于x，查找右子树，如果等于就返回，如果是空那么就找不到  

比较的关键字次数=此结点所在层次数  

最多的比较次数=树的深度  

平均查找长度：  

最好情况：  

![20230617101435](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101435.png)  

![20230617101540](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101540.png)  

最差情况：  

![20230617101507](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101507.png)  

![20230617101557](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617101557.png)  


问题:如何提高形态不均衡的二叉排序树的查找效率?  

解决办法:做“平衡化”处理，即尽量让二叉树的形状均衡!  

二叉排序树的插入：  

从根结点开始，如果当前的根比x小，那么就判断他的右子树；如果当前的根比x大，那么就判断他的左子树；如果当前是空，那么就将x赋给当前结点；如果当前根等于x，那么就不再插入，结束  

从空树出发，经过一系列的查找、插入操作之后，可生成一栋二叉排序树。  

一个无序序列可通过构发二叉排序树而变成一个有序序列。构造树的过程就是对无序序列进行排序的过程。  

关键字的输入顺序不同，建立的不向二叉排序树。  


二叉排序树的删除：  

从二叉排序树中删除一个结点，不能把以该结点为根的子树都删去，只能删掉该结点，并且还应保证删除后所得的二叉树仍然满足二叉排序树的性质不变  

由于中序遍历二叉排序树可以得到一个递增有序的序列。那么，在二叉排序树中删去一个结点相当于删去有序序列中的一个结点  

将因删除结点而断开的二叉链表重新链接起来并防止重新链接后树的高度增加  

(1)被删除的结点是叶子结点:直接删去该结点，将双亲结点中相对应的指针域改为空  

(2)被删除的结点只有左子树或者只有右子树，用其左子树或者右子树替换它(结点替换)  

(3)被删除的结点既有左子树，也有右子树，那么就用他的前驱代替他，递归删除他的前驱结点；或者用他的后继结点替换他，然后删除后继结点  

前驱结点是左子树中最大的点  

![20230617104537](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104537.png)  

50的前驱是40，那么就先将他变为40：  

![20230617104626](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104626.png)  

然后再删除40的结点：由于40只有左子树，那么直接将他替换为他的左子树即可  

![20230617104727](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230617104727.png)  



#### 平衡二叉树

平衡二叉树又称AVL树  

一棵平衡二叉树或者是空树，或者是具有下列性质的二叉排序树:  

1.左子树与右子树的高度之差的绝对值小于等于1  

2.左子树和右子树也是平衡二叉排序树  


为了方便起见，给每个结点附加一个数字，给出该结点左子树一右子树的高度差。这个数字称为结点的平衡因子（BF）  

平衡因子=结点左子树的高度-结点右子树的高度  

根据平衡二叉树的定义，平衡二叉树上所有结点的平衡因子只能是-1、0，或1。  

当我们在一个平衡二叉排序树上插入一个结点时，有可能导致失衡，即出现平衡因子绝对值大于1的结点，如:2、-2.  

如果在一颗AVL树中插入一个新结点后造成失衡，则必须重新调整树的位置，使之恢复平衡  

平衡调整的四种类型：  

![20230618141013](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618141013.png)  

就将这四种情况分别调整为下面的类型：  

![20230618141156](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618141156.png)  

调整原则：11.降低高度 2.保持二叉排序树性质  

规律：ll型和rr型把中间结点作为根结点，lr型和rl型把最低的结点作为根结点，然后按照二叉排序树的性质变化  

具体实现方式：  

ll型：  

![20230618142252](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618142252.png)  

rr型：  

![F1F268E04FC2F0D689D8CAA2E973C3E4](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/F1F268E04FC2F0D689D8CAA2E973C3E4.png)  

lr型：  

![CFD8AC5C4CA3E3263F18E461F2A24C6C](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/CFD8AC5C4CA3E3263F18E461F2A24C6C.png)  

![9A56D7F08401C6C1090D412085685B8F](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/9A56D7F08401C6C1090D412085685B8F.png)  

rl型：  

![DEE36D55E0AAD209004B7421435FD09A](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/DEE36D55E0AAD209004B7421435FD09A.png)  

方法：将A和B分别作为c的左子树和右子树，原来的c的左子树作为A的右子树，原来的c的右子树作为B的左子树  

### B-树

B树的特性：  

B树中允许一个结点中包含多个key ,可以是3个、4个、5个甚至更多，并不确定，需要看具体的实现。现在我们选择一个参数M,来构造一个B树，我们可以把它称作是M阶的B树，那么该树会具有如下特点:  

每个结点最多有M-1个key，并且以升序排列  

每个结点最多能有M个子结点  

根结点至少有两个子结点  

![5295C67E27DCF70B811AB8D6E4D23F5F](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/5295C67E27DCF70B811AB8D6E4D23F5F.png)  


B-树的构造：  

从根节点开始，每个节点只能有m-1个数据，如果当前的数插入之后的节点满足有m-1个数据的条件，那么就选择插入，否则就将这个结点中最中间的元素向上一层提，提上去的规律也满足从小到大的原则，然后插入这个数据之后，原来小于这个中间数的数据做这个结点的左子树，大于这个数的数据做这个结点的右子树  




### 散列表的查找

基本思想：记录的存储位置与关键字之间存在的对应关系  

对应关系：hash函数  

loc[i]=h[keyi]  

优点：查找效率高  

缺点：空间效率低  

散列方法(杂凑法)：选取某个函数，依该函数按关键字计算元素的存储位置，并按此存放;查找时，由同一个函数对给定值k计算地址，将k与地址单元中元素关键码进行比，确定查找是否成功。  

散列函数(杂凑函数):散列方法中使用的转换函数  

冲突:不同的关键码映射到同一个散列地址，key1！=key2，但是h(key1)=h(key2)  

同义词:具有相同函数值的多个关键字  

使用散列表要解决好两个问题:  

1.构造好的散列函数:所选函数尽可能简单，以便提高转换速度;所选函数对关键码计算出的地址，应在散列地址集中致均匀分布，以减少空间浪费。  

2.制定一个好的解决冲突的方案:查找时，如果从散列函数计算出的地址中查不到关键码，则应当依据解决冲突的规则，有规律地查询其它相关单元。  

构造散列函数考虑的因素：  

1.执行速度  

2.关键字长度  

3.散列表的大小  

4.关键字的分布情况  

5.考虑查找频率  

![EA5FE07DAE12003C4F817A9ADE9AF72C](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/EA5FE07DAE12003C4F817A9ADE9AF72C.png)  

直接定址法：  

![20230618155141](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618155141.png)  


除留余数法：  

![20230618155526](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230618155526.png)  

#### 处理冲突的方法  

处理冲突的方法有：开放定址法，链地址法，再散列法，建立一个公共溢出区域  

1.开放地址法：有冲突的时候就去寻找下一个空的散列地址，只要散列表足够大，空的散列地址总能找到，并将数据元素存入  

寻找空的地址时，可以用线性探测法，链地址法  

线性探测法：遇到冲突时，依次看冲突位置的后一位，后两位...直到找到符合条件的地址填入  

计算平均查找长度ASL：每个数找到的次数的和除以数的个数  

2.链地址法：  

基本思想:相同散列地址的记录链成单链表  

m个散列地址就设m个单链表（m是取模的数），然后用一个数组将m个单链表的表头指针存储起来，形成一个动态的结构  

链地址法操作步骤：对于关键值key，计算地址，如果地址是空就插入该地址，否则选择解决方法处理冲突，计算下一个储存地址，如果该地址链表不为空，那么利用扦插法或者后插法将元素插入此链表  



查找成功的平均查找次数：  

构造出链之后的每个数的查找次数总和除以数的个数  

查找失败的平均查找次数：  

构造出链后，每个地址所拥有的数的个数+1的总和除以地址总数  

例如下图：  

![14F48DF0F97BFD4A1890E821E8AE41D6](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/14F48DF0F97BFD4A1890E821E8AE41D6.png)  


每个数查找成功的次数：  

![FD7489602102E2011B568D2B63596C12](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/FD7489602102E2011B568D2B63596C12.png)  

ASL=（1*4+2*3+3*1）/8  

查找不成功的次数：  

![1BCCF819D948FD58ED70A9ABE790E363](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/1BCCF819D948FD58ED70A9ABE790E363.png)  

ASL=(3+4+2+1+1+3+1+1+1+1+1)/11  




例题：  

![FEBFC9ADCEB827CE9D7F632EAE8E1F26](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/FEBFC9ADCEB827CE9D7F632EAE8E1F26.png)  

mod13，那么就将数组设置成0~12，然后再对每个地址加入值  

![9964C178FA5F1453657648A305AF7521](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/9964C178FA5F1453657648A305AF7521.png)  





## 排序


### 插入排序

基本思想：  

每步将一个待排序的对象，按其关键码大小，插入到前面已经排好序的一组对象的适当位置上，直到对象全部插入为止。  

每插入一个元素，应插入的位置之后的所有元素都右移  

![CD92275F4C8272D3FF1EB252734F7070](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/CD92275F4C8272D3FF1EB252734F7070.png)  


那么有几种插入排序：  

#### 1.直接插入排序：顺序法定位插入位置  

在基本有序的序列里效率比较高  

将x加在序列的最后一个位置，每次比较前面的位置上的数，如果比x大就交换  

#### 2.二分插入排序：二分法定位插入位置  

比直接插入排序时间=快一些  

先将插入的元素x保存到哨兵位置0，然后l=1，r=i-1，当l<=r的时候取mid=(l+r)/2，如果x< a[mid],r=mid-1;如果x>a[mid],l=mid+1。循环结束，插入位置是r+1，那么我们就将r+1到i的元素都往后移动一位，在r+1的位置赋值x  

#### 3.希尔排序：缩小增量多遍插入排序  

先将整个待排记录序列分割成若干子序列，分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行一次直接插入排序。  

特点：  

1.一次移动，移动位置较大，跳跃式的接近排序后的最终位置  

2.最后一次只需要少量移动  

3.增量序列必须是递减的，最后一个必须是1  

4.增量序列应该是互质的  


比如下图的序列：  

![081E152EC37688970BBDD743D187E95E](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/081E152EC37688970BBDD743D187E95E.png)  

先将间隔为5的数进行一次直接插入排序，再将间隔为3的进行一次直接插入排序，最后再对整体直接插入排序  

希尔排序是一种不稳定的排序算法  




### 交换排序

常见的交换排序方法：冒泡排序和快速排序  

#### 冒泡排序：  

基本思想：不断将两个相邻的数两两比较，如果不符合排序条件就交换  

进行n-1趟两两比较就可以得到一个有序序列  

![F78803C07D22B729A0FCE57FA5092041](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/F78803C07D22B729A0FCE57FA5092041.png)  

#### 快速排序

时间复杂度：O(nlogn)  

快速排序不稳定  

不适用于原本有序或者基本有序的记录序列进行排序  

基本思想：任取一个元素(如:第一个)为中心，所有比它小的元素一律前放，比它大的元素一律后放，形成左右两个子表;对各子表重新选择中心元素并依此规则调整，直到每个子表的元素只剩一个  

每次划分选择第一个数x，将他放到0号位置，那么一号位置就空了出来，用两个指针l和r分别从0号和n号位置出发，因为空着的是l，那么我们就将r向前移动，找到一个小于x的数，将他放到l，那么r就空了，我们继续将l向后移动，找到一个大于x的数，将数放到r...以此类推直到l=r，那么l的位置就是x应该放的位置，那么l将区间分成了两段，那么分别再对两段区间进行操作  

例：  

![8344B2A4EA8CCEC5530F7F6AEDE418ED](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/8344B2A4EA8CCEC5530F7F6AEDE418ED.png)  

![8327027CB699553C50E485EA9B3EDC5B](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/8327027CB699553C50E485EA9B3EDC5B.png)  

### 选择排序

#### 堆排序  

堆排序不稳定  

![C415E45291A56F7994DA094A5FC11040](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C415E45291A56F7994DA094A5FC11040.png)  

从堆的定义可以看出，堆实质是满足如下性质的完全二叉树:二叉树中任一非叶子结点均小于(大于)它的孩子结点  

若在输出堆顶的最小值(最大值)后使得剩余n-1个元素的序列重又建成一个堆，则得到n个元素的次小值（次大值）…如此反复，便能得到一个有序序列，这个过程称之为堆排序。  

要想使用堆排序，需要先将无序序列变成一个堆  

对一个无序序列反复筛选就可以得到一个堆  

显然：单结点的二叉树是堆，在完全二叉树中所有以叶子结点为根的子树是堆  

那么从完全二叉树的最后一个非叶子结点开始，一直到第一个点进行调整，将每个不是叶节点的点调整为以他为根节点的堆，最后一个非叶子结点是n/2  

![20230619002140](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619002140.png)  

![27BCAEA08AFC15F5A5FEF64A25E9C23A](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/27BCAEA08AFC15F5A5FEF64A25E9C23A.png)  

![AA80A016B2AAE4639ED6494C919B235A](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AA80A016B2AAE4639ED6494C919B235A.png)  

每次取出堆顶元素之后对剩下的元素进行调整成为一个新的堆  

以小根堆为例：  

1．输出堆顶元素之后，以堆中最后一个元素替代之;  
2.然后将根结点值与左、右子树的根结点值进行比较，并与其中小者进行
交换;  
3．重复上述操作，直至叶子结点，将得到新的堆，称这个从堆顶至叶子的
调整过程为“筛选”  



### 归并排序

将两个或两个以上的有序子序列归并成一个有序序列  

在内部排序中，通常采用的是2-路归并排序  

![415068911995D53F559B2A744FE90C93](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/415068911995D53F559B2A744FE90C93.png)  

![C467C82D5A271911F5884ED1A6232638](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/C467C82D5A271911F5884ED1A6232638.png)  



### 基数排序

时间复杂度O(k*(n+m))，k是关键字数，m关键字取值范围为m个值  

基本思想:分配+收集  

也叫桶排序或箱排序:设置若干个箱子，将关键字为k的记录放入第k个箱子，然后在按序号将非空的连接。  

基数排序:数字是有范围的，均由0-9这十个数字组成，则只需设置十个箱子，相继按个、十、百...进行排序.  

先设置0~9一共十个箱子，然后我们从所有数的最低位到最高位一位一位比，每次比的时候将相应的位数上的数放入相应的桶中，进行完这个操作之后按照顺序收集一次数据，然后再进行下一位的比较，直到比完  

![D5B22AAD65D3686E912E7B1AA50C66CB](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/D5B22AAD65D3686E912E7B1AA50C66CB.png)  

![87A2FE8C73506C4E47CA9A27F7859CE2](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/87A2FE8C73506C4E47CA9A27F7859CE2.png)  

![D45AA465B200B61D00580DBE5A9800C8](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/D45AA465B200B61D00580DBE5A9800C8.png)  





### 小结

![2C0A247CF17730AC14B605FD4C86A788](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/2C0A247CF17730AC14B605FD4C86A788.png)  

![3C69A6E666376DCA818DB2490A4D3B01](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/3C69A6E666376DCA818DB2490A4D3B01.png)  

![E1C2100E6CD1ACDFF816B3465BB30899](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/E1C2100E6CD1ACDFF816B3465BB30899.png)  

![AB3770D7A6E2935132D0FA266D9046BB](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/AB3770D7A6E2935132D0FA266D9046BB.png)  

![20230619004326](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230619004326.png)  












