---
title: 链表与临接表
---

用数组来实现链表  


## 单链表
 
用邻接表存（邻接表一般用来存图和树）  

每个链表都有几个元素：头指针，每个节点的值和指向下一个节点的指针  

![846fcd18f33d4b1237b5aa686250ba7c](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/846fcd18f33d4b1237b5aa686250ba7c.jpg)

head头指针刚开始时指向空指针  

![abca02cf68557387c69e00ae8fb64289](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/abca02cf68557387c69e00ae8fb64289.jpg)

然后在头节点后面插入节点，就可以建立链表  


![20240721084402](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20240721084402.png)

对于每个节点我们需要编号，那么我们用e[N]数组来表示我们要存的值val，ne[N]数组来表示每个节点指向的下一个节点的编号。例如i节点存的值就是e[i]，他的指向的下一个节点的编号为ne[i]。  

假设一个链表从头节点到空指针的所有节点编号为1，2，3，值为6，7，8，那么他们的e[N]数组和ne[N]数组表示如下图：  


![605e119736a91910c29c89a63d41639e](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/605e119736a91910c29c89a63d41639e.jpg)

代码实现:  

```cpp
//head用来表示头指针所指向的下一个节点的编号
int head;
//e[i]表示编号为i的节点的值
int e[N];
//ne[i]表示编号为i的节点的下一个节点的编号
int ne[N];
//idx表示现在用到的编号，用idx来给每个点都编号赋值
int idx;

//初始化：头指针指向空节点（赋值为-1），编号初始化为0
void init(){
    head=-1;
    idx=0;
}

//在头节点后插入一个值为x的节点
void addtohead(int x){
    e[idx]=x;
    ne[idx]=head;
    head=idx++;
}

//将值为x的点插入到编号为k的节点的后面
void add(int k,int x){
    e[idx]=x;
    ne[idx]=ne[k];
    ne[k]=idx++;
}

//将编号为k的后面一个点删掉
void remove(int k){
    ne[k]=ne[ne[k]];
}

```
例题：

## 双链表

有两个指针，一个指向前，一个指向后  

用l[N]表示每个节点前面的点，r[N]表示每个节点后面的点，用编号为0点节点表示头节点，编号为1的节点表示尾节点。那么注意，剩下的点开始从2编号  

那么初始状态如下图：  

![20240721143003](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20240721143003.png)

那么我们可以在某个点的左边或者右边插入点  

在k号点点右边插入值为x的点  

![d5571ad85ccc7f262e04b003ebe479e1](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/d5571ad85ccc7f262e04b003ebe479e1.jpg)

在k号点点左边插入值为x的点，就是在l[k]的右边插入值为x的点  


删掉节点k：  

![b699cf3a2eaa8133256968da0619b4c5](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/b699cf3a2eaa8133256968da0619b4c5.jpg)  

例题：  

![20240721151209](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20240721151209.png)  

```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int n,m,q;
const int N=300005;
int l[N],r[N],e[N],idx;
void addnext(int k,int x){
    e[idx]=x;
    r[idx]=r[k];
    l[r[k]]=idx;
    r[k]=idx;
    l[idx]=k;
}
void remove(int k){
    r[l[k]] =r[k];
    l[r[k]]=l[k];
}

int main(){
    cin>>n;
    idx=2;
    r[0]=1;
    l[1]=0;
    while(n--){
        string op;
        cin>>op;
        if(op=="L"){
            int x;
            cin>>x;
            addnext(0,x);
        }else if(op=="R"){
            int x;
            cin>>x;
            addnext(l[1],x);
        }else if(op=="D"){
            int k;
            cin>>k;
            remove(k+1);
        }else if(op=="IL"){
            int k,x;
            cin>>k>>x;
            addnext(l[k+1],x);
        }else{
            int x,k;
            cin>>k>>x;
            addnext(k+1,x);
        }
    }
    for(int i=r[0];i!=1;i=r[i]){
        cout<<e[i]<<" ";
    }
    return 0;
}
```

