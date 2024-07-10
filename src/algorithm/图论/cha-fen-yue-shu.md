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




## 应用1：线性约束

线性约束一般是在一维空间中给出的一些变量（一般定义位置），然后告诉你某两个变量的约束关系，求两个变量a和b的差值的最大值或最小值。  
原题链接：https://www.luogu.com.cn/problem/P4878   

题意：有n个奶牛按照1~n的顺序站成一排，有ml对之间的距离小于等于一个数，md对之间的距离大于等于一个数，求1号牛和n号牛的最远距离。  

距离小于等于一个数：B-A<=D  
距离大于等于一个数：B-A>=D -> A-B<=-D  
排成一排：i-(i-1)>=0 -> (i-1)-i<=0  

因为可能会有某些部分是负环，所以创建一个虚拟原点，向每个点都连一条边权为0的边，从原点来走一遍spfa判断一下负环，如果有负环就说明没有解输出-1，然后再从原点1开始spfa得到d[n]的值即可。

```cpp

#include<bits/stdc++.h>
using namespace std;
#include<queue>
#define int long long
const int N=2e4+10,M=1e5+10;
int n,ml,md;
int h[N],e[M],ne[M],w[N],idx;
int d[N];
bool st[N];
int con[N];

void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool spfa1(int s){
	memset(d,0x3f,sizeof d);
	memset(con,0,sizeof con);
	d[s]=0;
	st[s]=true;
	queue<int> q;
	q.push(s);
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
					return true;
				}
				if(!st[j]){
					q.push(j); 
				}
			}
		}
	}
	return false; 
}

signed main(){
	int ml,md;
	cin>>n>>ml>>md;
	memset(h,-1,sizeof h);
	while(ml--){
		int a,b,c;
		cin>>a>>b>>c;
		add(a,b,c);
	}
	while(md--){
		int a,b,c;
		cin>>a>>b>>c;
		add(b,a,-c);
	}
	for(int i=1;i<=n;i++){
		add(0,i,0);
	}
	for(int i=2;i<=n;i++){
		add(i,i-1,0);
	}
	bool f=spfa1(0);
	if(f){
		cout<<-1<<endl;
	}else{
		bool ff=spfa1(1);
		if(f){
			cout<<-1<<endl;
			return 0;
		}
		if(d[n]>=0x3f3f3f3f){
			cout<<-2<<endl;
		}else cout<<d[n]<<endl;
	}
	return 0;
}
```

## 应用2：区间约束

给定n(n<=50000)个整点闭区间和这个区间中至少有多少个整点需要被选中，这个区间的范围为[ai,bi]，并且至少有ci个点要被选中，其中0<=ai<=bi<=50000  
求：[0,50000]至少需要有多少个点被选中。  

思路：  
用d[i]表示[0,i]这个区间至少有多少个点能被选中  
利用前缀和的知识：  
对于每个区间[ai,bi],可以表示成d[bi]-d[ai-1]>=ci  


注意隐含条件： 0<=d[i]-d[i-1]<=1  
因为在i这个点我们要么只有一个点，要么没有点  

因为需要使用前缀和，所以我们尽量不要让区间在0，那么我们就把区间整体右移一位，算[1,50001]的结果就可以。  
```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=5e4+10, M =2e6;
int n;
int dist[N];
int h[N],e[M],ne[M],idx,w[M];
bool st[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}

void spfa()
{
    memset(dist, -0x3f, sizeof dist);
    dist[0] = 0;
    st[0] = true;
    queue<int> q;
	q.push(0); 
    while (q.size() )
    {
        int t = q.front() ;
        q.pop() ;
        st[t] = false;
        for (int i = h[t]; ~i; i = ne[i])
        {
            int j = e[i];
            if (dist[j] < dist[t] + w[i])
            {
                dist[j] = dist[t] + w[i];
                if (!st[j])
                {
                    q.push(j); 
                    st[j] = true;
                }
            }
        }
    }
}

int main()
{
    scanf("%d", &n);

    memset(h, -1, sizeof h);
    for (int i = 1; i < N; i ++ )//范围是N
    {
        add(i - 1, i, 0);
        add(i, i - 1, -1);
    }

    for (int i = 0; i < n; i ++ )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        a ++, b ++ ;
        add(a - 1, b, c);
    }

    spfa();

    printf("%d\n", dist[50001]);

    return 0;
}

```

## 求最长路径（x[i]-x[j]>=a[k])

求一个问题最小的值，就是求最长路。  
当符号变成>=的时候，那么本质就是求最长路  
 
1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了  

2.bellman算法：将所有的边全取负号，然后对新的图求最短路  

3.spfa算法：将d初始化为负无穷，然后每次更新的判断条件是如果与队头取出的点t相连的点j的d[j]< d[t]+w[i]的话就更新。注意spfa判断负环的时候用栈比较快些，但在一般条件下还是队列比较快。


### 例题：糖果
原题链接：https://www.acwing.com/problem/content/description/1171/  
题意：  
一个老师给n个小朋友分糖果，保证每个小朋友都能分到糖果的情况下，有m个要求： x a b  
如果X=1表示第 A个小朋友分到的糖果必须和第B个小朋友分到的糖果一样多。  
如果X=2，表示第A个小朋友分到的糖果必须少于第B个小朋友分到的糖果。  
如果X=3，表示第A个小朋友分到的糖果必须不少于第B个小朋友分到的糖果。  
如果X=4，表示第A个小朋友分到的糖果必须多于第B个小朋友分到的糖果。  
如果 X=5，表示第A个小朋友分到的糖果必须不多于第B个小朋友分到的糖果。  

问满足以上条件前提下，老师需要准备多少个糖果？  

思路：  
每个小朋友都能分到糖果=每个小朋友至少有一个糖果  
那么设一个超级原点为0，那么对于每个小朋友i，d[i]-d[0]>=1  
x=1：a=b -> a-b>=0 b-a>=0  
x=2: a< b -> b-a>=1  
x=3: a>=b -> a-b>=0  
x=4: a>b -> a-b>=1  
x=5: a<=b -> b-a>=0  

然后用spfa求最长路即可（注意判断负环的话用栈比较快）  

```cpp
#include<bits/stdc++.h>
#include<queue>
#include<stack>
using namespace std;
const int N=1e6+10,M=1e6+10;
int n,m;
typedef long long ll;
int h[N],e[N],ne[N],idx;
int w[N];
ll d[N];
bool st[N];
int cnt[N];
void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool spfa(){
	memset(d,-0x3f,sizeof d);
	d[0]=0;
	stack<int> q;
	q.push(0); 
	st[0]=true;
	while(q.size() ){
		int t=q.top() ;
		q.pop() ;
		st[t]=false;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]<d[t]+w[i]){
				d[j]=d[t]+w[i];
				cnt[j]=cnt[t]+1;
				if(cnt[j]>=n+1){
					return true;
				}
				if(!st[j]){
					q.push(j);
					st[j]=true; 
				}
			}
		}
	} 
	return false;
}
int  main(){
	cin>>n>>m;
	memset(h,-1,sizeof h);
	while(m--){
		int x,a,b;
		cin>>x>>a>>b;
		if(x==1){
			add(b,a,0);
			add(a,b,0);
		}else if(x==2){
			add(a,b,1);
		}else if(x==3){
			add(b,a,0);
		}else if(x==4){
			add(b,a,1);
		}else {
			add(a,b,0);
		}
	}
	for(int i=1;i<=n;i++){
		add(0,i,1);
	}
	if(spfa()){
		cout<<-1<<endl;
	}else{
		ll ans=0;
		for(int i=1;i<=n;i++){
			ans+=d[i];
		}
		cout<<ans<<endl;
	}
	return 0;
}

```

<!-- ### 例二：雇佣收银员
原题链接：https://www.acwing.com/problem/content/395/  
题意：  
一个店24小时营业，需要雇佣一大批收银员。  
已知不同时间段需要的收银员数量不同，希望能够雇佣尽可能少的人员。  
提供了一个各个时间段收银员最小需求量清单：R(0),R(1)...R(23)  
R(0)表示午夜00:00到01:00，R(1)表示凌晨01:00-02:00,以此类推。  
一共有n个合格人申请岗位，第i个人可以从ti时刻开始连续工作8小时。  
求出最少雇佣多少名收银员。  
思路：  

num[i]表示从i点开始工作的人数  
x[i]表示最终从i点开始工作的人里面挑的人数。  

满足的等式关系：  
1.0<=x[i]<=num[i]  
2.x[i-7]+x[i-6]+...+x[i]>=r[i]   -->






