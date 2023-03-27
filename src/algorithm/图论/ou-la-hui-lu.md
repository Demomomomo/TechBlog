---
title: 欧拉路径和欧拉回路
---

## 概念

欧拉路径：是否存在一条路径使得每条边只走一次  
欧拉回路：是否存在一条路径使得每条边只走一次，且起点和终点相同  

观察每个点的度数和（出度+入度），对于一个起点来说，一条边出，以后再经过这个点的时候必定一进一出。那么对于起点的度实际上是奇数。同理对于终点，一条边入，之前经过这个点都是一进一出，度数也是奇数。  

那么对于中间点来说，进去一次就需要出来一次，度数应该是偶数。  


## 对无向图
前提条件：所有边都是联通的  
存在欧拉路径的充分必要条件：度数为奇数的点有0个或者两个。  
存在欧拉回路的充分必要条件：所有点的度数全为偶数  

## 对有向图
前提条件：所有边都是联通的（点可以不联通但是边必须要联通）  
存在欧拉路径的充分必要条件：要么所有点的出度均等于入度，要么有一个点的入度比出度多一，有一个点的入度比出度多一，其他的点入度等于出度。  
存在欧拉回路的充分必要条件：所有点的出度均等于入度  

## 思路
路径可以看做是由两条连向起点和终点的路径加上一堆环组成。因为满足每个点的度数是偶数的话，在出去这个点之后肯定需要再回来。那么就构成了一个环。  

如何将点和路融合？  

那么在求欧拉路径的时候，用dfs遍历每条路。在遍历到u结点的时候，遍历完他的每条出边之后再将他加入队列，那么和u相关的所有边都被遍历了一遍，相当于走了以u为顶点的环。那么这样得到的队列其实是终点到起点的顺序，那么将他倒序就可以了。  


## 例题

### 欧拉回路
原题链接：  
https://www.acwing.com/problem/content/1186/  

题意：  
给你一个有向图或者无向图，找出他的一条欧拉回路。  

思路：  
先判断度数是否符合  
对于无向图来说，所有出度入度的和必须全是偶数  
对于有向图来说，出度必须等于入度。  

判断完之后再从一个有边的点开始遍历，用cnt记录走了几条边，如果cnt少于总边数，那么说明边不联通，没有欧拉回路。  

之后再倒序输出走过的点就可以了。  

走到当前u的时候，我们需要遍历与他相连的每条边。  

边的编号：对于有向图来说下标就是他的编号-1。对于无向图来说，因为又加了一个反向边，所以应该/2+1.  

对于一条边，如果走过的话我们将他删掉。如果没有走过，那么我们将这个边标记并删掉，如果这个图是无向图，那么我们还需要删除他的反向边。然后遍历这个点，当遍历完的时候将这个边加入答案数组中。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=4e5+10;
int n,m,t;
int e[N],ne[N],idx,h[N];
bool used[N];
vector<int> ans;
int chu[N],ru[N];
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx++;
}
void dfs(int u){
	for(int &i=h[u];~i;){
		if(used[i]){
			i=ne[i];
			continue;
		}
		used[i]=true;
		if(t==1) used[i^1]=true;
		int id;
		if(t==1){
			id=i/2+1;
			if(i&1) id=-id;
		}else{
			id=i+1;
		}
		int j=e[i];
		i=ne[i];
		dfs(j);
		ans.push_back(id); 
	}
}
int main(){
	cin>>t>>n>>m;
	memset(h,-1,sizeof h);
	for(int i=1;i<=m;i++){
		int a,b;
		cin>>a>>b;
		add(a,b);
		ru[b]++;
		chu[a]++;
		if(t==1) add(b,a);
	}
	if(t==1){
		for(int i=1;i<=n;i++){
			if((ru[i]+chu[i])%2){
				cout<<"NO";
				return 0;
			}
		}
	}else{
		for(int i=1;i<=n;i++){
			if(ru[i]!=chu[i]){
				cout<<"NO";
				return 0;
			}
		}
	}
	
	for(int i=1;i<=n;i++){
		if(~h[i]){
			dfs(i);
			break;
		}
	}
	
	if(ans.size() <m){
		cout<<"NO";
		return 0;
	}
	
	cout<<"YES"<<endl;
	for(int i=ans.size() -1;i>=0;i--){
		cout<<ans[i]<<" ";
	}
	return 0;
}

```



### 骑马修栅栏
原题链接：  
https://www.acwing.com/problem/content/1126/  
题意：  
有不超过500个农场，有m个栅栏，需要将所有栅栏维修，且每个栅栏只经过一次（保证一定有解），求经过的点字典序最小的路径。  
思路：  
对于一个u点来说，我们如果将与他相连的点从小到大遍历边，并且在遍历完之后最后将u加进去，那么大的点肯定会比小的点先键入队中。而且我们求的是路径的逆序，那么我们按照这个方案逆序输出的点实际上就是点按字典序最小的路径。  
那么因为可以在任何点出发任何点结束，那么我们先判断有没有度数是奇数的点，如果有的话从最先出现的度数为奇数的点开始遍历，如果没有的话就从最先出现的度数不为0的点开始遍历。  
对于每个点u，从小到大遍历完他的所有边再将他加进去。  

```cpp
#include<bits/stdc++.h>
using namespace std;
int m;
int g[600][600];
vector<int> ans;

void dfs(int u){
	for(int i=1;i<=500;i++){
		while(g[u][i]){
			g[u][i]--;
			g[i][u]--;
			dfs(i);
		}
	}
	ans.push_back(u); 
}
int d[600];
int main(){
	cin>>m;
	while(m--){
		int a,b;
		cin>>a>>b;
		g[a][b]++;
		g[b][a]++;
		d[a]++;
		d[b]++;
	}
	int s=1;
	while(!d[s]) s++;
	for(int i=1;i<=500;i++) {
		if(d[i]&1){
			s=i;
			break;
		}
	}
	dfs(s);
	for(int i=ans.size() -1;i>=0;i--) cout<<ans[i]<<endl;
}

```

### 单词游戏
原题链接：  
https://www.acwing.com/problem/content/1187/  


题意：  
有n个-盘子，每个盘子里装一个由小写字母组成的盘子，需要给这些盘子找到一个合适的顺序，使得相邻的两个盘子中，前一个盘子上的单词末尾的字母等于后一个单词的首字母。  

思路：  
把每个单词看成是一个由首字母连向末字母的一条边，那么要求的是这些边是否存在欧拉路径。  
有欧拉路径的条件：  
1.所有边联通  
2.除了起点和终点的点其他的点的出度等于入度，起点的出度比入度多1，终点的入度比出度多1.  
第一个条件可以用并查集来维护，找到所有出现的字母，看看他们的集合数是不是只有一个。  
```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
int ru[30],chu[30];
int p[30];
int cnt;
bool st[30];
int find(int x){
	if(p[x]!=x) p[x]=find(p[x]);
	return p[x];
}
void sove(){
	cin>>n;
	for(int i=0;i<26;i++)p[i]=i;
	memset(ru,0,sizeof ru);
	memset(chu,0,sizeof chu);
	memset(st,false,sizeof st);
	for(int i=1;i<=n;i++){
		string s;
		cin>>s;
		int op1=s[0]-'a';
		int len=s.size();
		int op2=s[len-1]-'a';
		st[op1]=st[op2]=true;
		if(find(op1)!=find(op2)){
			p[find(op1)]=find(op2);
		}
		chu[op1]++;
		ru[op2]++;
	}
	int con1=0,con2=0,con3=0;
	bool f=true;
	for(int i=0;i<26;i++){
		if(chu[i]==ru[i]){
			con3++;
		}else
		if(chu[i]==ru[i]+1){
			con1++;
		}else
		if(ru[i]==chu[i]+1){
			con2++;
		}else{
			f=false;
		}
	}
	if(!f) {
		cout<<"The door cannot be opened."<<endl;
		return ;
	}
	int con=0;
	for(int i=0;i<26;i++){
		if(p[i]==i&&st[i]) con++;
	}
	if(con!=1){
		cout<<"The door cannot be opened."<<endl;
		return ;
	}
	if((con1==1&&con2==1)||(con1==0&&con2==0)){
		cout<<"Ordering is possible."<<endl;
	}else cout<<"The door cannot be opened."<<endl;
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



