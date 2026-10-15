---
title: DFS
---

## 前置知识：递归与函数。  

函数与递归是信息学竞赛中承上启下的核心能力：函数是代码复用的基本单位，递归则是搜索、分治、动态规划等高级算法的思维基础。  

核心概念：函数将一段可复用的代码封装成独立单元，通过参数接收输入、通过返回值输出结果。理解局部变量（函数内有效）与全局变量（整个程序有效）的作用域差异是关键。  

递归指函数直接或间接调用自身。一个正确的递归函数必须包含两个要素：  

· 递归方程式：如何将原问题分解为规模更小的同类子问题。  
· 终止条件（递归出口）：何时直接返回结果、停止调用。  

理解递归的栈式执行过程至关重要——每次递归调用都会在内存栈中开辟新的“函数帧”，只有最内层的调用返回后，外层才会继续执行。  

## 普通dfs

深度优先遍历：对于每次搜索，都像深度更深的点搜，如果没有更深的点回溯一步回到上一步所在节点，再看有没有没有遍历过的更深的点，如果有就遍历，没有就继续回溯。  

![97c154261b59ded49cb73749dd9c9d4e](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/97c154261b59ded49cb73749dd9c9d4e.jpg)  


### 求全排列
原题链接：  
https://www.acwing.com/problem/content/844/  

题意：  
给定一个数字n，按照字典序求出他的全排列  


思路：  
由于排列有n个位置，那么我们就分别枚举每个位置应该填什么数，由于字典序需要从小到大，那么我们将数从小到大枚举。  
由于排列中一个数只能用一次，那么需要额外一个数组来记录数是否被使用，并且还需要一个数组来记录排列的数。  
那么当我们从第1个位置开始枚举，枚举到第n个位置的时候，输出里面的数即可。  
对于每个位置：从小到大枚举每个数，如果一个数x没有被用过，那么我们就将这个位置填上x，再深搜下一个位置直至每个位置都填上数。当递归完成，说明当前位置填x的所有排列情况已经看完，那么我们就该枚举下一个数y在这个位置的所有情况了，那么在将y填到这个位置之前，我们需要将x占用这个位置的所有状态都复原，这个位置就可以存放y，再进行深搜了  





```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int n;
int path[10];
int v[10];
void dfs(int u){
    if(u==n){
        for(int i=0;i<n;i++){
            cout<<path[i]<<" ";
        }
        cout<<endl;
        return ;
    }
    for(int i=1;i<=n;i++){
        if(v[i]==0){
            path[u]=i;
            v[i]=1;
            dfs(u+1);
            v[i]=0;
        }
    }
}
int main(){
    cin>>n;
    dfs(0);
    return 0;
}
```

### n皇后问题

题意：有一个n*n的棋盘，往上放n个棋子，使得满足任意两个棋子的每行，每列以及每个对角线都只有一个棋子，输出所有方案  

思路：从第一行开始，枚举该行放棋子的列数，在放之前判断所在列和对角线是否有棋子，如果没有就放，放完向下一行深搜。那么就需要数组来存储列和正反对角线的状态。  
正反对角线所在的直线如下图：  
![15edf11102e9f00589896447a7d36584](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/15edf11102e9f00589896447a7d36584.jpg)  
那么可以用截距b来记录对角线的编号：反对角线：b=x+y，正对角线b=y-x+n(y-x可能为负)  


```cpp
#include<iostream>
#include<algorithm>
using namespace std;
const int N=20;
int x[N];
int y[N];
int z1[N];
int z2[N];
char s[N][N];
int n;
int con;
void dfs(int x1){
    if(x1==n){
        if(con==n){
            for(int i=0;i<n;i++){
                for(int j=0;j<n;j++){
                    cout<<s[i][j];
                }
                cout<<endl;
            }
            cout<<endl;
        }
        return ;
    }
    for(int j=0;j<n;j++){
        if(y[j]==0){
            if(z1[j-x1+n]==0&&z2[j+x1]==0){
                y[j]=1;
                z1[j-x1+n]=1;
                z2[j+x1]=1;
                x[x1]=1;
                con++;
                s[x1][j]='Q';
                dfs(x1+1);
                y[j]=0;
                z1[j-x1+n]=0;
                z2[j+x1]=0;
                x[x1]=0;
                con--;
                s[x1][j]='.';
            }
        }
    }
}
int main(){
    cin>>n;
    con=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            s[i][j]='.';
        }
    }
    dfs(0);
    return 0;
}

```






### 分成互质组  
原题链接：  
https://www.acwing.com/problem/content/description/1120/  
题意：  
给定n个正整数，将他们分组，使得每组中任意两个数互质，问至少分成多少组  
思路：  
能放进已经存在的组尽量放已经存在的组，不能放了再开新组，这样保证最优  
那么我们就先对于每个组来说，遍历所有的数，先将能放进去的都放进去，如果没有能放进去的那么就新开，有的话就不用新开  
那么每次dfs需要记录当前组的组编号，组内的元素个数，已经放进组里了几个数和从那个下标开始搜  
那么就先从开始搜的下标开始，如果有一个数没被用过且与组内的所有数都互质，那么我们就将他放进当前组之后进行dfs，dfs之后恢复现场。如果没有一个数能被放，那么我们就新开一个组  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=20;
int a[N];
bool st[N];
int group[N][N];
int n;
int ans;
int gcd(int a,int b){
	return b?gcd(b,a%b):a;
}
bool cheek(int b[],int cnt,int x){
	for(int i=0;i<cnt;i++){
		if(gcd(b[i],x)!=1) return false;
	}
	return true;
}
void dfs(int g,int gc,int tc,int start){
	if(g>=ans) return ;
	if(tc==n){
		ans=g;
		return ;
	}
	bool f=true;
	for(int i=start;i<n;i++){
		if(!st[i]&&cheek(group[g],gc,a[i])){
			st[i]=true;
			group[g][gc]=a[i];
			dfs(g,gc+1,tc+1,i+1);
			st[i]=false;
			f=false;
		}
	}
	if(f) dfs(g+1,0,tc,0);
}
int main(){
	cin>>n;
	for(int i=0;i<n;i++)cin>>a[i];
	ans=n;
	dfs(1,0,0,0);
	cout<<ans;
	return 0;
}

```

## 剪枝
1.优化搜索顺序，选择分支较少的顺序进行搜索  
例题：小猫下山  
原题链接：  
https://www.acwing.com/problem/content/167/  
题意：  
有n只小猫，第i只小猫的重量是a[i]，每个缆车的最大承重是w，问将所有小猫都送走最少需要多少缆车  
思路：  
枚举当前小猫放到哪个车上，对于每个小猫，有两种情况：可以放到之前已经有的小车上或者新建一辆小车放上  
如果一个车上放上一个体重较轻的小猫，那么我们再放的小猫的方案数肯定比放上一个体重较重的小猫的方案数多。所以我们先枚举体重较重的小猫放置的位置。即先将小猫从大到小排序。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=60;
bool st[N];
int sum[N];
int n,w;
int a[N];
int ans;
bool cmp(int a,int b){
	return a>b;
}
void dfs(int u,int g){
	if(g>=ans)return ;
	if(u==n){
		ans=g;
		return ;
	}
	for(int i=0;i<g;i++){
		if(sum[i]+a[u]<=w){
			sum[i]+=a[u];
			dfs(u+1,g);
			sum[i]-=a[u];
		}
	}
	sum[g]=a[u];//将他放到新建的车里
	dfs(u+1,g+1);
}
int main(){
	cin>>n>>w;
	for(int i=0;i<n;i++)cin>>a[i];
	sort(a,a+n,cmp);
	ans=n;
	dfs(0,0);
	cout<<ans;
	return 0;
}
```

2.排除等效冗余
3.可行性剪枝  
如果不符合要求就剪枝  
4.最优性剪枝  
如果当前搜到的方案数已经大于我们找到的最小方案数，那么我们就剪枝  

## 记忆化dfs

记忆化搜索是递归与动态规划之间的桥梁，也是竞赛中解决“状态重复计算”问题最常用的手段之一。  

### 解决的问题

1. 核心痛点：朴素递归的重复计算  

看一个最经典的例子——斐波那契数列：f[n] = f[n-1] + f[n-2]  

```cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```
画一下 fib(5) 的调用树：  

```text
                fib(5)
              /        \
         fib(4)         fib(3)
        /     \        /     \
    fib(3)  fib(2)  fib(2)  fib(1)
    /   \    /   \   /   \
fib(2) fib(1) ...
```
可以看到 fib(3) 被算了 2 次，fib(2) 被算了 3 次。n 越大，重复越夸张，时间复杂度是指数级的 O(2ⁿ)。  

根本原因：同一个子问题被反复求解，而每次求解的过程完全一样。  

2. 记忆化搜索要解决的问题  

把已经算过的子问题答案存起来，下次再遇到同一个子问题时，直接查表返回，不再重新计算。  

这样每个子问题只算一次，时间复杂度从指数级降到子问题个数 × 单个子问题的计算量。  

3. 适用场景  

- 递归过程中存在大量重复子问题  

- 子问题的答案只依赖于参数（同样的参数一定得到同样的结果）  

- 子问题之间有重叠（不是纯粹的分治，分治的子问题不重叠）  

- 状态空间有限且可表示（能用数组/哈希表存下来）  

典型题目：过河卒、数楼梯、滑雪  

### 方法

1. 基本框架  

记忆化搜索 = 递归 + 查表 + 存表，三步走：  

```cpp
返回类型 dfs(参数) {
    if (已经算过) return 表中记录的值;   // 查表
    if (边界条件) return 边界值;         // 递归出口
    计算结果 = 由子问题的结果组合而成;    // 递归求解
    表中记录 = 计算结果;                 // 存表
    return 计算结果;
}
```
2. 记忆数组

分析子问题，确定记忆数组  






## 返回以某个点为起点的所有路程的最大长度（无确定终点



例题：老鼠和奶酪  
原题链接：  
http://acm.hdu.edu.cn/showproblem.php?pid=1078  
题意：  
有一个n*n的矩阵，每个格子里有一个数，一个老鼠从左上角走，每次走可以选择上下左右四个方向，并且每次最多只能走k步，走到的格子必须比他走到的前一个格子的数大。求他能收集的数的最大值。  
思路：  
dfs(x,y)返回的是以(x,y)为起点，走过的所有路径的最大值。  
那么对于(x,y)来说，可以向上下左右四个方向分别走0,1...k步  
但是他走到的格子里数的大小必须大于(x,y)格子里的数  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=200;
int a[N][N];
int f[N][N];
int n,k;
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int dfs(int x,int y){
//	cout<<"x=="<<x<<" y=="<<y<<endl;
	if(f[x][y]！=-1)return f[x][y];//如果被遍历过就返回
	f[x][y]=a[x][y];
	for(int i=0;i<4;i++){
		for(int j=0;j<=k;j++){
			int xx=x+dx[i]*j;
			int yy=y+dy[i]*j;
			if(xx<1||xx>n||yy<1||yy>n)continue;
			if(a[xx][yy]>a[x][y]){//这个保证了以后走的每个点都不会在前面被走过
				f[x][y]=max(f[x][y],dfs(xx,yy)+a[x][y]);
			}
		}
	}
	return f[x][y];
}

int main(){
	while(cin>>n>>k){
		if(n==-1&&k==-1)break;
		memset(f,-1,sizeof f);
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				cin>>a[i][j];
			}
		}
		cout<<dfs(1,1)<<endl;		
	}

	return 0;
}
```
## 返回的是以某个点为起点走向终点的方案数
例题:how mant ways  
原题链接：  
http://acm.hdu.edu.cn/showproblem.php?pid=1978  
题意：  
一个机器人从起点(1,1)走到终点(n,m)。规则如下：  
1.机器人一开始在起点并有起点标有的能量  
2.机器人只能向右或者向下行走，每走一步消耗一单位能量  
3.机器人不能在原地停留  
4.当机器人选择一条路径时，当他走到终点的格子时，只有终点格子的能量  
求从(1,1)走到(n,m)的方案数  

思路：  
dfs(x,y)表示以(x,y)为起点，走到终点的方案数  
那么设向下走i步，向右走j步(xx=x+i,yy=y+j,i+j<=a[i][j])  
以(x,y)为起点的方案数就是他能走到的所有格子(xx,yy)的方案数相加  
注意：有些点走不到终点，方案数为0，那么我们就需要额外初始化f数组为-1，每次判断f等不等于-1，如果等于的话说明没有搜过，那么我们就将他的f值变成0,再加上他能走到的所有格子的方案数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=106;
int a[N][N];
int n,m;
int f[N][N];
const int mod=10000;
int dfs(int x,int y){
	if(f[x][y]!=-1)return f[x][y];
	f[x][y]=0;
	for(int i=0;i<=a[x][y];i++){
		for(int j=0;j<=a[x][y]-i;j++){
			int xx=x+i;
			int yy=y+j;
			if(xx<1||xx>n||yy<1||yy>m)continue;
			f[x][y]=(f[x][y]+dfs(xx,yy))%mod;
		}
	}
	return f[x][y];
}
void sove(){
	cin>>n>>m;
	memset(f,-1,sizeof f);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			cin>>a[i][j];
		}
	}
	f[n][m]=1;
	
	dfs(1,1);
	
	cout<<f[1][1]<<endl;
	
}
int main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```












