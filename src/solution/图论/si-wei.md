---
title: 思维
---

## 2263: neighbor
原题链接：  
http://acm.zzuli.edu.cn/problem.php?id=2263  
题意：  
有一个n*m的矩阵，给出主视图和左视图的高度，求这个矩阵的总高度的最大值和最小值。  

思路：  
最大值：对于每个格子来说，取左视图和主视图的最小值，那么就保证了每个格子都被填上并且符合主视图和左视图。  
最小值：先将主视图填上，因为对于行列高度相等的数可以放在一个格子上就能满足，那么我们就遍历左视图，如果这个格子在主视图没有出现过或者在左视图中出现的次数大于在主视图中出现的次数，那么我们就将他加上。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1000+10;
int a[N][N];
int ans[N];
int n,m;
int ii[N];
int jj[N];
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>ii[i];
	}
	for(int i=1;i<=m;i++){
		cin>>jj[i];
	}
	int mx=0,mi=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			mx+=min(ii[i],jj[j]);
		}
	}
	map<int,int> mp;
	for(int i=1;i<=m;i++){
		mi+=jj[i];
		mp[jj[i]]++;
	}
	for(int i=1;i<=n;i++){
		if(mp[ii[i]]==0){
			mi+=ii[i];
		}else{
			mp[ii[i]]--;
		}
	}
	cout<<mi<<" "<<mx;
	
	return 0;
	
}
```


## HDU 5927 Auxiliary Set
原题链接：  
https://acm.hdu.edu.cn/showproblem.php?pid=5927  

题意：  
有一颗根节点是1的树，其中有重要的点和不重要的点，重要的点需满足以下两个条件至少一个：  
1.本来就是重要的点  
2.是两个重要的点的最近共同祖先  
有t个测试实例，对于每个测试实例：  
给出结点个数n和询问次数q  
对于每次询问：  
给出一个数con，表示不重要的点的个数  
接下来con个数是不重要的点的编号  
对于每个询问，求出重要的点的个数（每次询问之间相互独立）  

思路：  
ans记录重要结点的个数  
本来就是重要的点有n-con个  
那么我们就需要检查一下不重要的点，对于每个不重要的点看看他是不是两个重要的点的最近共同祖先  

对于点u，如果他的以儿子结点为根的子树中，多于两个子树里有
重要的结点，那么u就能变成重要的结点  

那么我们可以先预处理好每个结点的儿子结点的个数，每个点的父节点和每个点的深度  

然后再对不重要的结点按照深度从大到小的顺序排序  

从最深的结点u开始遍历，如果u的有重要点的儿子结点数量超过两个，那么u就可以变成重要结点，ans++  

如果变不了重要结点，说明u的有重要点的儿子结点数量要么是0要么是1，如果是0，那么u的父节点的有重要儿子结点的数量就需要-1，因为每次询问独立，那么我们需要将减掉的点给记录一下，当这次询问完毕时再复原加上  

```cpp
#include <bits/stdc++.h>
using namespace std;
const int maxn=1e5+5;
int d[maxn];
int book[maxn];
vector<int> edg[maxn];
int que[maxn];
int impor[maxn];
int unimpor[maxn];
int ans;
int son[maxn];
int so[maxn];
int fa[maxn];
bool cmp(int x, int y)
{
    return d[x]>d[y];
}
void dfs(int x, int y)
{
    fa[x]=y;son[y]++;son[x]=0;d[x]=d[y]+1;
    for(int i=0; i<(int)edg[x].size(); i++)
    {
	    if(edg[x][i]!=y)dfs(edg[x][i],x);
    }
    return;
}
int main()
{
   int t;
   cin>>t;
   int e=1; 
   while(t--)
   {
     int n;
     int q;
     scanf("%d%d", &n, &q);
     int i, j, x, y;
    
     for(i=0; i<n-1; i++)
     {
	scanf("%d %d", &x, &y);
 	edg[x].push_back(y);
	edg[y].push_back(x);	
     }
     
     dfs(1,0);
     int  m;
     printf("Case #%d:\n", e++);    
     while(q--)
     {
	scanf("%d", &m);
	for(i=0; i<m; i++)
	{  
	   scanf("%d", &unimpor[i]);//不重要节点
	   so[unimpor[i]]=son[unimpor[i]];//节点的儿子
	}
	ans=n-m;
	sort(unimpor, unimpor+m, cmp);
	for(i=0; i<m; i++)
	{
	   if(so[unimpor[i]]>=2)ans++;
	   else
	   {
	    if(so[unimpor[i]]==0)  so[fa[unimpor[i]]]--;
	   }
	}
	printf("%d\n", ans);
     }
     for(i=1; i<=n; i++)
     {
 
     edg[i].clear();
//		vector<int>().swap(edg[i]);
     }
   }  
}

```



## Total Eclipse
原题链接：  
https://acm.hdu.edu.cn/showproblem.php?pid=6763  

题意：  
有一个n个点m条边的图，每个点有一个值，每次可以做这样的操作：选择一些点，这些点联通并且值都大于0，然后每个点的值减去1。那么最小操作数是多少  

思路：  
对于一个联通块来说，我们最优的方法是选择这整个联通块内的点，操作其中最小值点的次数，那么这样我们就将每个点都减去最小值，然后对于新图再重复如上操作  

但是这样写的话就需要对于每个联通块找最小值，找到之后减去最小值对于新图再继续找联通块，时间复杂度很大，那么我们就逆向思维来考虑这个问题  

对于一个联通块来说，我们是找到最小的值，操作数加上值，再将联通块内的每个点减去这个值，删除这个点，然后找到删掉这个点之后新的联通块  



那么反过来就是将点按照从大到小的顺序加入图中，ans记录联通块的数量，每次加他与下一个点的差值和联通块个数的乘积  

如下图：  
![2D8F7B2B1BAF61A58791B67E5C2A4653](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/2D8F7B2B1BAF61A58791B67E5C2A4653.png)

```cpp

#include<bits/stdc++.h>
#include<vector>
//#define int long long 
using namespace std;
const int N=1e5+10,M=4e5+10;
typedef long long ll;
int n,m;
int h[N],ne[M],e[M],idx;
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
struct name{
	int id;
	ll b;
}q[N];
int p[N];
int find(int x){
	if(p[x]!=x) p[x]=find(p[x]);
	return p[x];
}
bool cmp(name a,name b){
	return a.b >b.b ;
}
bool vis[N];
void sove(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++) {
		scanf("%lld",&q[i].b );
		q[i].id =i;
	}
	sort(q+1,q+1+n,cmp);
	idx=0;
	for(int i=1;i<=n;i++){
		p[i]=i;
		h[i]=-1;
		vis[i]=false;
	}
	ll ans=0,sum=0;
	for(int i=1;i<=m;i++){
		int o,p;
		scanf("%d%d",&o,&p);
		add(o,p);
		add(p,o);
	}
	q[n+1].b=0;
	for(int ca=1;ca<=n;ca++){
		int u=q[ca].id ;
		vis[u]=true;
		ans++;
		for(int i=h[u];i!=-1;i=ne[i]){
			int j=e[i];
			if(vis[j]){
				if(find(j)!=find(u)){
					p[find(j)]=find(u);
					ans--;
				}
			}
		}
		sum+=ans*(q[ca].b -q[ca+1].b );
		
	}
	printf("%lld\n",sum);
	
}
int main(){
	int t;
	scanf("%d",&t);
	while(t--){
		sove();
	}
	return 0;
}


```




