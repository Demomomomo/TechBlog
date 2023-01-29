---
title: 差分约束
---

## 概念

如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]<=a[k]的形式，这样的系统称为差分约束系统  
问题：有n个数和m个不等式的关系，求x[a]-x[b]的最大值是多少


## 思路

bellman算法中的核心操作是：
```cpp
if(d[b]>d[a]+w[a][b]){
    d[b]=d[a]+w[a][b];
}
```
说明:d[b]<=d[a]+w[a][b]  

变形一下就是d[b]-d[a]<=w[a][b]  
那么在系统中每个点的关系是：x[i]-x[j]<=a[k]  
类比一下就是在x[i]和x[j]之间建立了一条边权为a[k]的有向边，因为满足所有条件，也就是求x[a]->x[b]的最短路  

例子：假设有x0~x3这四个数，有下面五种关系：  
<img src="https://img-blog.csdnimg.cn/f67c5ba5aa6b47fba0644c5b57eb2e5f.png#pic_center" alt="Pulpit rock" width="304" height="228">  

求x3-x0的最大可能值  
那么我们可以得到几个x3和x0的关系：  
<img src="https://img-blog.csdnimg.cn/e892cfe245b044308097b22262a6ca9d.png#pic_center" alt="Pulpit rock" width="304" height="228">  

那么取他们的最小值7就是答案  
转换成图就是：  
<img src="https://img-blog.csdnimg.cn/3fa9014ed6f24f4d943459467c3c91d6.png#pic_center" alt="Pulpit rock" width="304" height="228">  

那么答案实际上就是求x0->x3的最短路  

但是当一个图中出现负环的时候，他可以绕无数圈负环值一直变小，那么就没有解。  





## 求最长路径

1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了  

2.bellman算法：将所有的边全取符号，然后对新的图求最短路  



