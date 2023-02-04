---
title: 树基础
---

## 定义

有n个结点，n-1条边的联通无向图  
无向无环的联通图  

### 适用于无根树和有根树
森林：每个联通分量（连通块）都是树的图。一棵树也是森林。  
生成树：一个联通无向图的生成子树，同时要求是树。即在子树中有n个点，n-1条边且联通。  
### 只适用于有根树
父亲：对于除了根节点以外的每个节点，定义为从该节点到根路径上的第二个结点。根节点没有父结点。  
祖先：一个点到根节点的路径上，除了他本身的点以外的结点，根节点没有祖先。  
子节点：如果u是v的父亲，那么v是u的子节点。  
结点的深度：到根结点的路径上的边数。  
树的高度：所有结点的深度的最大值。  
兄弟：同一个父亲的多个子节点互为兄弟。  
后代：子节点和子节点的后代。  
子树：删掉与父节点相连的边后，该点所在的子图。  


## 储存

### 邻接表
对于无根树：为每个结点用一个vector数组来存所有与他相连的结点编号。  
对于有根数：
方法1：若给定的是无向图，可以按上面的方法储存，但是在遍历的时候要区分一下结点的上下关系，即不能往回走。  
方法2：用vector数组来存每个结点的子节点，如果需要的话还可以再开辟一个数组来记录父节点。  

### 二叉树
记录每个结点的左右子节点  
```cpp
struct name{
    int id,l,r;
}q[N];
```


## 树的遍历

### 树上dfs
先访问根结点，再访问根结点的每个儿子的子树。  
可以用来求每个结点的深度，父亲等信息。  

```cpp
int h[N],e[N],ne[N];
void dfs(int u,int fa){
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(j!=fa){
            dfs(j,u);
        }
    }
}

int root=1;
dfs(root,-1);

//图的深度优先搜索：
bool st[N];
void dfs(int u){
    st[u]=true;//标记一下已经走过了
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(!st[j])dfs(j);
    }
}

// 图的宽度优先遍历
bool st[N];
int d[N];
void bfs(){
	queue<int> q;
	q.push(1);
	memset(d,0x3f,sizeof d);
	d[1]=0;
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		if(st[t])continue;
		st[t]=true;
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(!st[j]&&d[j]>=d[t]+1){
				d[j]=d[t]+1;
				q.push(j); 
			}
		}
	} 
}

```

### 二叉树的先序遍历
按照根，左，右的顺序来遍历。

```cpp
void xianxu(name a){
    if(a.id)cout<<a.id<<endl;
    if(a.l)xianxu(q[a.l]);
    if(a.r)xianxu(q[a.r]);
}

```
### 二叉树的中序遍历
按照左，根，右的顺序来遍历  
```cpp
void zhongxu(name a){
    if(a.l)zhongxu(q[a.l]);
    if(a.id)cout<<a.id<<endl;
    if(a.r)zhongxu(q[a.r]);
}
```

### 二叉树的后序遍历
按照左，右，跟的顺序来遍历  
```cpp
void houxu(name a){
    if(a.l)houxu(q[a.l]);
    if(a.r)houxu(q[a.r]);
    if(a.id)cout<<a.id<<endl;
}

```
根据中序遍历序列和任意另外一个序列可以求第三个序列  
<img src="https://img-blog.csdnimg.cn/8ca09824970b40f493e3dd7fc0389531.png#pic_center" alt="Pulpit rock" width="304" height="228">  

1.前序遍历的第一个是root，后序的最后一个根是root。  
2.先确定根节点，然后根据中序遍历，在根左边的为左子树，在根右边的为右子树。  

## 树的重心
定义：树的重心是树中的一个结点，如果将这个结点删除之后，剩余各个联通块中点数的最大值最小，那么这个点就是树的重心。  

### 例题：树的重心
原题链接：https://www.acwing.com/problem/content/848/  

找到去掉重心之后连通块中的点数最大值。  

思路：求出来一个点相连的每个子节点的子图中点数的最大值mx，再与他的父节点形成的子图的点数取最大值，答案就是每个点的mx的最小值。  

父结点形成的子图的点数是n-他所在的子图的点数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
int h[N],e[N],ne[N],idx;
int ans;
int n;
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
bool st[N];
int dfs(int u){
	st[u]=true;
	int con=1;
	int mx=0;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!st[j]){
			int op=dfs(j);
			mx=max(mx,op);
			con+=op;
		}
	}
	mx=max(mx,n-con);
	ans=min(ans,mx);
	return con;
}
int main(){
	cin>>n;
	memset(h,-1,sizeof h);
	for(int i=1;i<n;i++){
		int a,b;
		cin>>a>>b;
		add(a,b);
		add(b,a);
	}
	ans=0x3f3f3f3f;
	dfs(1);
	cout<<ans<<endl;
	return 0;
}

```



## 树的直径

树上任意两点之间最长的简单路径即为数的直径

一条树可以有多条直径，他们的长度相等。  
可以用两次dfs或者树形dp的方法在O（n）的时间求出树的直径。  

```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long LL;

const int N = 200010, M = N * 2;

int n;
int h[N], e[M], w[M], ne[M], idx;
LL d[N]; 
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx++;
}

int bfs(int u) //找出距离u节点最远的节点
{
    queue<int> q;
    q.push(u); 
    memset(d, -1, sizeof d);
    d[u] = 0;
    while(q.size() )
    {
        int t = q.front() ;
		q.pop() ;
        for(int i = h[t]; i != -1; i = ne[i])
        {
            int j = e[i];
            if(d[j] != -1) continue;
            d[j] = d[t] + w[i];
            q.push(j); 
        }
    }

    int res = 0;
    for(int i = 1; i <= n; i++)
        if(d[i] > d[res])
            res = i;

    return res;
}


int main()
{
    scanf("%d", &n);

    memset(h, -1, sizeof h); 

    for(int i = 0; i < n - 1; i++)
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(a, b, c), add(b, a, c); 
    }
    int p = bfs(1);
    int q = bfs(p);

    printf("%lld\n", d[q]); 


    return 0;
}


```








