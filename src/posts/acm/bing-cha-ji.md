---
title: 并查集

category:
  - algorithm
tag:
  - 数据结构
---


## 排座位pta

<p>布置宴席最微妙的事情，就是给前来参宴的各位宾客安排座位。无论如何，总不能把两个死对头排到同一张宴会桌旁！这个艰巨任务现在就交给你，对任何一对客人，请编写程序告诉主人他们是否能被安排同席。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入第一行给出3个正整数：<code>N</code>（≤100），即前来参宴的宾客总人数，则这些人从1到<code>N</code>编号；<code>M</code>为已知两两宾客之间的关系数；<code>K</code>为查询的条数。随后<code>M</code>行，每行给出一对宾客之间的关系，格式为：<code>宾客1 宾客2 关系</code>，其中<code>关系</code>为1表示是朋友，-1表示是死对头。注意两个人不可能既是朋友又是敌人。最后<code>K</code>行，每行给出一对需要查询的宾客编号。</p>

<p>这里假设朋友的朋友也是朋友。但敌人的敌人并不一定就是朋友，朋友的敌人也不一定是敌人。只有单纯直接的敌对关系才是绝对不能同席的。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>对每个查询输出一行结果：如果两位宾客之间是朋友，且没有敌对关系，则输出<code>No problem</code>；如果他们之间并不是朋友，但也不敌对，则输出<code>OK</code>；如果他们之间有敌对，然而也有共同的朋友，则输出<code>OK but...</code>；如果他们之间只有敌对关系，则输出<code>No way</code>。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
7 8 4
5 6 1
2 7 -1
1 3 1
3 4 1
6 7 -1
1 2 1
1 4 1
2 3 -1
3 4
5 7
2 3
7 2

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
No problem
OK
OK but...
No way
```


<p> 思路：因为朋友的朋友也是朋友所以用并查集存朋友的关系，只有直接敌对的关系才是敌人，用二维数组g来存一下敌对的关系就可以了，先判断是否敌对，如果敌对判断一下两个人的父节点是否相等，如果不相等就是纯敌对输出noway，相等就是有共同朋友输出okbut，如果不敌对判断一下两个人的父节点是否相等，如果相等就是朋友输出noproblem，如果不相等就是不是朋友也不是敌人输出ok</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,m,k;
int g[105][105];
int p[105];
int find(int x){
	if(p[x]!=x)p[x]=find(p[x]);
	return p[x];
}
int main(){
	cin>>n>>m>>k;
	for(int i=1;i<=n;i++){
		p[i]=i;
	}
	while(m--){
		int a,b,c;
		cin>>a>>b>>c;
		if(c==-1){
			g[a][b]=g[b][a]=-1;
		}else if(c==1){
			p[find(a)]=find(b);
		}
	}
	while(k--){
		int a,b;
		cin>>a>>b;
		if(g[a][b]==-1){
			if(p[find(a)]==find(b)){
				printf("OK but...\n");
			}else printf("No way\n");
		}else {
			if(p[find(a)]==find(b)){
				printf("No problem\n");
			}else printf("OK\n");
		}
	}
	return 0;
}
```


<p></p>

## 红色警报（并查集）

<p>战争中保持各个城市间的连通性非常重要。本题要求你编写一个报警程序，当失去一个城市导致国家被分裂为多个无法连通的区域时，就发出红色警报。注意：若该国本来就不完全连通，是分裂的k个区域，而失去一个城市并不改变其他城市之间的连通性，则不要发出警报。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在第一行给出两个整数<code>N</code>（0 &lt; <code>N</code> ≤ 500）和<code>M</code>（≤ 5000），分别为城市个数（于是默认城市从0到<code>N</code>-1编号）和连接两城市的通路条数。随后<code>M</code>行，每行给出一条通路所连接的两个城市的编号，其间以1个空格分隔。在城市信息之后给出被攻占的信息，即一个正整数<code>K</code>和随后的<code>K</code>个被攻占的城市的编号。</p>

<p>注意：输入保证给出的被攻占的城市编号都是合法的且无重复，但并不保证给出的通路没有重复。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>对每个被攻占的城市，如果它会改变整个国家的连通性，则输出<code>Red Alert: City k is lost!</code>，其中<code>k</code>是该城市的编号；否则只输出<code>City k is lost.</code>即可。如果该国失去了最后一个城市，则增加一行输出<code>Game Over.</code>。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
5 4
0 1
1 3
3 0
0 4
5
1 2 0 4 3

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
City 1 is lost.
City 2 is lost.
Red Alert: City 0 is lost!
City 4 is lost.
City 3 is lost.
Game Over.
```


<p> 思路：先用一个结构体将联通的两个城市的编号记录下来，再用一个vis数组来记录他是否被攻占，在攻占之前先用num记录一下联通城市的块数，然后在每次输入攻占城市编号的时候变一下编号的vis的状态（变为1），重新再算一下联通块的个数，当结构体里储存的两个联通编号只要有一个编号的vis值等于1（被攻占）的时候，不用联通他俩，如果俩都不等于1就联通他俩。然后算一下联通块的个数，如果等于原来的num或者等于num+1的时候就没有改变城市的联通性，否则就改变了联通性。最后再判断一下攻占的城市的数量是不是等于n，如果等于n就game over</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int vis[5005];//记录是否被攻占 
int n,m;
int p[5005];//记录祖宗节点
struct name{
	int x,y;//记录联通城市的编号
};
int find(int x){
	if(x!=p[x])p[x]=find(p[x]);
	return p[x];
}
struct name q[5005];
int main(){
	cin>>n>>m;
	for(int i=0;i<n;i++){
		p[i]=i;
	}
	for(int i=0;i<m;i++){
		cin>>q[i].x >>q[i].y ;
		p[find(q[i].x )]=find(q[i].y );
	}
	int num=0;//记录原来有几个连通块
	for(int i=0;i<n;i++){
		if(p[i]==i)num++;//算出来原来联通的城市块数
	}
	int k,cnt;
	cin>>k;
	cnt=k;
	while(k--){
		int x,num1=0;//记录每次攻占之后的连通块
		cin>>x;
		vis[x]=1;//记录被攻占了
		for(int i=0;i<n;i++){
			p[i]=i;
		}
		for(int i=0;i<m;i++){
			if(vis[q[i].x] ==1||vis[q[i].y ]==1){//如果被攻占就不用联通
				continue;
			}
			p[find(q[i].x )]=find(q[i].y );//联通
		}
		for(int i=0;i<n;i++){
			if(p[i]==i)num1++;
		}
		if(num==num1||num1==num+1){
			printf("City %d is lost.\n",x);
		}else printf("Red Alert: City %d is lost!\n",x);
		num=num1;//注意这里要更新num，因为联通块在变，我们比较的是这个状态和上一个状态的连通块的个数
	}
	if(cnt==n)printf("Game Over.\n");
	return 0;
}
```


<p></p>

<p></p>

## 文件传输（并查集）

<p>当两台计算机双向连通的时候，文件是可以在两台机器间传输的。给定一套计算机网络，请你判断任意两台指定的计算机之间能否传输文件？</p>

<h3 id="输入格式：">输入格式：</h3>

<p>首先在第一行给出网络中计算机的总数 N (2≤N≤104)，于是我们假设这些计算机从 1 到 N 编号。随后每行输入按以下格式给出：</p>


```cpp
I c1 c2  

```


<p>其中<code>I</code>表示在计算机<code>c1</code>和<code>c2</code>之间加入连线，使它们连通；或者是</p>


```cpp
C c1 c2    

```


<p>其中<code>C</code>表示查询计算机<code>c1</code>和<code>c2</code>之间能否传输文件；又或者是</p>


```cpp
S

```


<p>这里<code>S</code>表示输入终止。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>对每个<code>C</code>开头的查询，如果<code>c1</code>和<code>c2</code>之间可以传输文件，就在一行中输出"yes"，否则输出"no"。当读到终止符时，在一行中输出"The network is connected."如果网络中所有计算机之间都能传输文件；或者输出"There are <code>k</code>components."，其中<code>k</code>是网络中连通集的个数。</p>

<h3 id="输入样例-1：">输入样例 1：</h3>


```cpp
5
C 3 2
I 3 2
C 1 5
I 4 5
I 2 4
C 3 5
S

```


<h3 id="输出样例-1：">输出样例 1：</h3>


```cpp
no
no
yes
There are 2 components.

```


<h3 id="输入样例-2：">输入样例 2：</h3>


```cpp
5
C 3 2
I 3 2
C 1 5
I 4 5
I 2 4
C 3 5
I 1 3
C 1 5
S

```


<h3 id="输出样例-2：">输出样例 2：</h3>


```cpp
no
no
yes
yes
The network is connected.
```


<p>思路：典型并查集，第一个操作把a，b两个点所在的集合连在一起，第二个操作判断a，b是否在一个集合，第三个操作看有几个集合（判断条件：p[i]==i） </p>


```cpp
#include<iostream>
#include<algorithm>
#include<map>
#include<vector>

using namespace std;
int n;
int p[10005];
int find(int x){
	if(p[x]!=x)p[x]=find(p[x]);
	return p[x];
}
int main(){
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		p[i]=i;
	}
	while(1){
		char op[5];
		scanf("%s",op);
		if(op[0]=='S'){
			break;
		}
		if(op[0]=='I'){
			int a,b;
			scanf("%d%d",&a,&b);
			p[find(a)]=find(b);
		}else{
			int a,b;
			scanf("%d%d",&a,&b);
			if(find(a)==find(b)){
				printf("yes\n");
			}else printf("no\n");
		}
	}
	int cnt=0;
	for(int i=1;i<=n;i++){
		if(i==p[i])cnt++;
	}
	if(cnt==1)printf("The network is connected.");
	else printf("There are %d components.",cnt);
	return 0;
}
```


<p></p>



