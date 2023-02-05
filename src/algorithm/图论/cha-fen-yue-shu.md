---
title: 差分约束
---

## 概念

如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]<=a[k]的形式，这样的系统称为差分约束系统  

## 问题描述

有n个数和m个不等式的关系（x[i]-x[j]<=a[k])，
1.求x[a]-x[b]的最大值是多少  
2.求符合约束条件的一组解  

如果无解输出-1，有许多解输出-2.  

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
类比一下就是在x[j]到x[i]建立了一条边权为a[k]的有向边。  

例子：假设有x0~x3这四个数，有下面五种关系：  
<img src="https://img-blog.csdnimg.cn/f67c5ba5aa6b47fba0644c5b57eb2e5f.png#pic_center" alt="Pulpit rock" width="304" height="228">  

求x3-x0的最大可能值  
那么我们可以得到几个x3和x0的关系：  
<img src="https://img-blog.csdnimg.cn/e892cfe245b044308097b22262a6ca9d.png#pic_center" alt="Pulpit rock" width="304" height="228">  

那么取他们的最小值7就是答案  
转换成图就是：  
<img src="https://img-blog.csdnimg.cn/3fa9014ed6f24f4d943459467c3c91d6.png#pic_center" alt="Pulpit rock" width="304" height="228">  

那么答案实际上就是求x0->x3的最短路  

1.求x[n]-x[1]的最大值，实质就是求x[1]->x[n]的最短路    
一种情况：当一个图中出现负环的时候，他可以绕无数圈负环值一直变小，那么就没有解。并且在一个系统里，只要有负环的话，就说明肯定没有解。  
另一种情况：如果没有路能从起点走到终点，那么说明没有约束条件，解有无限多种。  

2.设d[0]=0,并向每个点连一条权重为0的边，跑单源最短路，如果图中存在负环，那么给定的差分约束系统无解，否则,x[i]=d[i]为该差分约束系统的解。  




## 不等式方程标准化


1.如果给出的不等式有<=也有>=的话，根据要求变成统一格式：  

如果求的是两个变量差的最大值，那么需要将所有不等式转变成<=的形式，建图之后求最短路  

如果求的是两个变量差的最小值，那么需要将所有不等式转化成>=，建图后求最长路  

2.如果有A-B=C这样的等式，可以将他转换成A-B>=C和A-B<=C的格式  

3.如果变量都是整数域上的，那么遇到A-B< C这样的不带等号的不等式，需要将他转换成>=或者<=的形式，比如A-B< C转换成A-B<=C-1  

## 差分约束系统解的模板
原题链接：https://www.luogu.com.cn/problem/P5960  

题意：有n个数m个形如x[i]-x[j]<=a[k]的关系，求满足关系的一组解，如果无解输出NO。  


对于每个x[i]-x[j]<=a[k]连一条从j到i的边权为a[k]的边，对于1~n的每个点i连一条从0到i的边权为0的边， 从0开始用spfa求最短路，如果有负环（当一个点的cnt数值>=n+1,因为有n+1个点)，那么就是无解。如果有解，x[i]=d[i]就是解。  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=5e3+10;
int n,m;
int d[N],idx;
bool st[N];
int h[N],e[N*2],ne[N*2],w[N*2];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool f;
int con[N];
void spfa(){
	memset(d,0x3f,sizeof d);
	d[0]=0;
	queue<int> q;
	q.push(0);
	st[0]=true;
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		st[t]=false;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>d[t]+w[i]){
				d[j]=d[t]+w[i];
				con[j]=con[t]+1;
				if(con[j]>n){
			//		cout<<"j=="<<j<<" con[j]=="<<con[j]<<endl;
					f=true;
					break;
				}
				if(!st[j]){
					q.push(j);
					st[j]=true; 
				}
			}
		}
	} 
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int a,b,c;
		cin>>a>>b>>c;
		add(b,a,c);
	}
	for(int i=1;i<=n;i++){
		add(0,i,0);
	}
	spfa();
	if(f){
		cout<<"NO"<<endl;
	}else{
		for(int i=1;i<=n;i++)cout<<d[i]<<" ";
	}
	return 0;
}

```

### 拓展例题：小k的农场

题意：小k有n个农场，每个农场都有一个农作物的数量，但是他忘记具体数量了，只记得有m个条件，有三种形式描述：  
1.农场a比农场b至少多种了c个单位的作物  
2.农场a比农场b至多多种了c个单位的作物  
3.农场a和农场b种的作物一样多  

想知道有没有一种情况符合这m个条件。如果有输出Yes，否则输出No  

思路：  
第一种情况：x[a]-x[b]>=c -> x[b]-x[a]<=-c  
第二种情况：x[a]-x[b]<=c  
第三种情况：x[a]-x[b]>=c&&x[a]-x[b]<=c  

```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=6e3+10;
int n,m;
int d[N],idx;
bool st[N];
int h[N],e[N*2],ne[N*2],w[N*2];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool f;
int con[N];
void spfa(){
	memset(d,0x3f,sizeof d);
	d[0]=0;
	queue<int> q;
	q.push(0);
	st[0]=true;
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		st[t]=false;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]>d[t]+w[i]){
				d[j]=d[t]+w[i];
				con[j]=con[t]+1;
				if(con[j]>=n+1){
			//		cout<<"j=="<<j<<" con[j]=="<<con[j]<<endl;
					f=true;
					break;
				}
				if(!st[j]){
					q.push(j);
					st[j]=true; 
				}
			}
		}
	} 
}
int main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int op;
		cin>>op;
		int a,b,c;
		cin>>a>>b;
		if(op==1){
			cin>>c;
			add(a,b,-c);
		}else if(op==2){
			cin>>c;
			add(b,a,c);
		}else{
			add(a,b,0);
			add(b,a,0);
		}
	}
	for(int i=1;i<=n;i++){
		add(0,i,0);
	}
	spfa();
	if(f){
		cout<<"No"<<endl;
	}else{
		cout<<"Yes"<<endl;
	}
	return 0;
}


```




## 应用：线性约束

线性约束一般是在一维空间中给出的一些变量（一般定义位置），然后告诉你某两个变量的约束关系，求两个变量a和b的差值的最大值或最小值。  
(有一个差不多的洛谷题：https://www.luogu.com.cn/problem/P4878 )  
题意：n个人的编号是1~n，并且按照编号顺序排成一条直线，任何两个人的位置不重合，然后给定一些约束条件：  
x组约束Ax Bx Cx ，表示Ax和Bx的距离不能大于Cx  
y组约束Ax By Cy ，表示Ay和By的距离不能小于Cy  
如果这样的排列组合存在，输出这两个人的最高可能距离，如果不存在，输出-1，如果无限长输出-2.  

思路：  
因为要求最长可能距离，就找最短路，所有等式转换为<=的格式  
x组表示：Bx-Ax<=Cx  
y组表示:By-Ax>=Cx  ->  Ay-by<=-Cx  
不存在的情况说明有负环，无限长说明没有路径能到达  







## 求最长路径（x[i]-x[j]>=a[k])

当符号变成>=的时候，那么本质就是求最长路  
 
1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了  

2.bellman算法：将所有的边全取符号，然后对新的图求最短路  



