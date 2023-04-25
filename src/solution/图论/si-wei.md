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









