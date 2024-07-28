---
title: 模拟栈，模拟队列
---

## 栈

先进先出，如图，栈像一个桶，进入的顺序是1，2，3，从桶里拿出的顺序是3，2，1：  

![0610cf52ef9e86163ee296ad37c80fb3](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/0610cf52ef9e86163ee296ad37c80fb3.jpg)  

用数组stk[n]模拟栈，tt存的是栈顶元素的下表。

```cpp
int stk[N];
int tt;
//加入栈
stk[++tt]=x;
//移除栈顶元素
tt--;
//判断栈是否为空
if(tt>0) not empty;
else empty;
//输出栈顶元素
stk[tt];
```






## 队列

先进先出，如图，在通道处排队出去，排在前面的先出  

![c7b78aa07e2a8c84c435b4d54d2be1bd](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/c7b78aa07e2a8c84c435b4d54d2be1bd.jpg)  


