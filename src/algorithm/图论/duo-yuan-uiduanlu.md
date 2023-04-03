---
title: 多源汇最短路（Floyd算法）
---
## 概念
起点和终点都不确定的最短路  
时间复杂度O（n* n *n）  
思路：
用邻接矩阵来存储边d[i][j]存i到j的边的长度  
三重循环：  
第一重循环循环中间点，第二第三重循环循环两边点  
```cpp
//初始化：

memset(d,0x3f,sizeof d);
for(int i=1;i<=n;i++)d[i][i]=0;

//求最短路

	for(int k=1;k<=n;k++) 
		for(int i=1;i<=n;i++)
			for(int j=1;j<=n;j++)
				d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
```


应用:  
1.最短路  
2.传递闭包   
3.找最小环  
4.恰好经过k条边的最短路  

对状态的分析：
d[k][i][j]所以从i出发，最终走到j，且中间只经过节点编号不超过k的点的所有路径的最短路径
分成两部分：  
不包含编号为k的点的路径：d[k-1][i][j]  
包含编号为k的点的路径:那么路径就是i->k->j:  
对于i->k这段路径，因为起点是i终点是k，且点不能有重复，那么点的编号应该不超过k-1，所以状态是：d[k-1][i][k]  
那么k->j同理得：d[k-1][k][j]  
所以包含k的点的路径表示为：d[k-1][i][k]+d[k-1][k][j]  

综上，状态转移是：d[k][i][j]=min(d[k-1][i][j],d[k-1][i][k]+d[k-1][k][j])  
变换等价于：d[i][j]=min(d[i][j],d[i][k]+d[k][j])  

## 最短路
例题：牛的旅行  
原题链接：https://www.acwing.com/problem/content/1127/  
题意：有n个牧区，牧区组成的联通块是牧场，牧场里距离最远的两个点的最短距离叫做这个牧场的直径，已知至少有两个牧区不联通，那么让你仅加一条路径在两个不联通的牧区上，使得新生成的牧场和原来有的没有变的牧场的最大直径最小，求出这个直径。  

假设d1与d2相连，设d1所在的联通块为D1，d2所在的联通块为D2，那么新连成的牧场的直径>=所有牧场的直径。新牧场的直径=D1中离d1最远的点和d1之间的距离+D2中与d2最远的点和d2之间的距离+d1和d2之间的距离。  

那么直径就是：max(没有变的所有牧场的最大直径D1，新组成的牧场的直径D2)的最小值，因为D2肯定大于等于原来组成他的两个牧场的直径，所以D1可以直接算原来所有牧场的直径最大值，是一个定值，要想让直径小，那么就让D2最小，然后D1和D2取最大值就行了。  

1.用Floyd求出任意两点间的最短距离d[i][j]  
2.求maxd[i]，表示与i联通的距离i最远的点到i的距离  
3.求D1的话就是maxd的最大值，求D2的话，列举我们要连的两点i j，要满足的要求是：d[i][j]=INF(不在一个牧场里)，然后D2=maxd[i]+dist(i,j)+maxd[j],求出最小的值与D1取最大即可。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=155;
char g[N][N];
double d[N][N];
double maxd[N];
struct name{
	int x,y;
}a[N];
int n;
double dist(int i,int j){
	double op=sqrt((a[i].x -a[j].x)*(a[i].x -a[j].x )+(a[i].y -a[j].y )*(a[i].y -a[j].y ));
	return op;
}
int main(){
	cin>>n;
	memset(d,0x7f,sizeof d);
	for(int i=1;i<=n;i++)d[i][i]=0;
	for(int i=1;i<=n;i++){
		cin>>a[i].x >>a[i].y ;
	}
	for(int i=1;i<=n;i++){
		cin>>g[i]+1;
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(g[i][j]=='1'){
				d[i][j]=min(d[i][j],dist(i,j));
			}
		}
	}
	for(int k=1;k<=n;k++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
			}
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(d[i][j]>=0x3f3f3f3f)continue;
			maxd[i]=max(maxd[i],d[i][j]);
		}
	}
	double ans1=0;
	for(int i=1;i<=n;i++) ans1=max(ans1,maxd[i]);
	double ans2=0x7f7f7f7f; 
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(d[i][j]>=0x3f3f3f3f){
				ans2=min(ans2,maxd[i]+dist(i,j)+maxd[j]);
			}
		}
	}
	double ans=max(ans1,ans2);
	printf("%.6f",ans);
	
	return 0;
}
```

## 传递闭包

一个有向图，将所有间接能到的点之间连一条边，比如a->b,b->c,那么就加一条a->c的边。最后形成的图就是原图的传递闭包  

步骤：d[i][j]=1表示i和j之间有一条边，将所有边先读入，如果d[i][k]==1&&d[k][j]==1那么说明i可以走到j，d[i][j]=1.

```cpp
	for(int k=1;k<=n;k++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				if(d[i][k]&&d[k][j]) d[i][j]=1;
			}
		}
	}

```

例题：排序  

原题链接：https://www.acwing.com/problem/content/345/  
给n个字母和m个不等式关系，n<=26，变量用大写英文字母表示，从前往后遍历每个关系，判断：  
1.输出第几条使关系矛盾  
2.输出第几条使这n个关系全都确定了  
3.如果循环结束没有发生上面的情况，那么输出没有解  


思路：  
d[i][j]=1表示i < j
对于矛盾的情况是A < B,B < A,那么推出来A < A,矛盾  
对于确定的情况是：所有的字母与其他字母都有一个确定的关系  
如果上面的关系都没有推出来，就是无解  

d[i][i]=1对应第一种情况  
对于每个i j：当i！=j的时候，d[i][j]==1||d[j][i]==1对应第二种情况  


```cpp
#include<bits/stdc++.h>
using namespace std;
typedef pair<int,char> pii;
const int N=30;
int n,m;
int d[N][N];
string jk[200010];
void sove(){
	memset(d,0,sizeof d);
	int id;
	for(int i=1;i<=m;i++){
		cin>>jk[i];
	}
	for(int t=1;t<=m;t++){
		int a=jk[t][0]-'A'+1;
		int b=jk[t][2]-'A'+1;
		d[a][b]=1;
		for(int k=1;k<=n;k++){
			for(int i=1;i<=n;i++){
				for(int j=1;j<=n;j++){
					if(d[i][k]&&d[k][j]) d[i][j]=1;
				}
			}
		}
		int ans=0;
		for(int i=1;i<=n;i++){
			if(d[i][i]==1){
				printf("Inconsistency found after %d relations.\n",t);
				return ;
			}
		}
		bool f=true;
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				if(i!=j){
					if(d[i][j]==0&&d[j][i]==0){
						f=false;
						break;
					}
				}
			}
			if(!f)break;
		}
		if(f){
			printf("Sorted sequence determined after %d relations: ",t);
			priority_queue<pii> q;
			for(int i=1;i<=n;i++){
				int con=0;
				for(int j=1;j<=n;j++){
					if(d[i][j]) con++;
				}
				char op=i-1+'A';
				q.push({con,op});
			}
			while(q.size()){
				pii tt=q.top();
				q.pop();
				 printf("%c",tt.second);
			}
			printf(".\n");
			return ;
		}
		
	}
	printf("Sorted sequence cannot be determined.\n");
}
int main(){
	while(cin>>n>>m){
		if(n==0&&m==0)break;
		sove();
	}
	return 0;
}

```


