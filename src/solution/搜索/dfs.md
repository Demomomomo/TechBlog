---
title: dfs

category:
  - algorithm

tag:
  - 搜索
---


## P1331 海战

<h2>题目描述</h2>

<p>在峰会期间，武装部队得处于高度戒备。警察将监视每一条大街，军队将保卫建筑物，领空将布满了F-2003飞机。此外，巡洋船只和舰队将被派去保护海岸线。不幸的是因为种种原因，国防海军部仅有很少的几位军官能指挥大型海战。因此，他们考虑培养一些新的海军指挥官，他们选择了“海战”游戏来帮助学习。</p>

<p>在这个著名的游戏中，在一个方形的盘上放置了固定数量和形状的船只，每只船却不能碰到其它的船。在这个题中，我们仅考虑船是方形的，所有的船只都是由图形组成的方形。编写程序求出该棋盘上放置的船只的总数。</p>

<h2>输入格式</h2>

<p>输入文件头一行由用空格隔开的两个整数R和C组成，1&lt;=R,C&lt;=1000，这两个数分别表示游戏棋盘的行数和列数。接下来的R行每行包含C个字符，每个字符可以为“#”，也可为“.”，“#”表示船只的一部分，“.”表示水。</p>

<h2>输出格式</h2>

<p>为每一个段落输出一行解。如果船的位置放得正确（即棋盘上只存在相互之间不能接触的方形，如果两个“#”号上下相邻或左右相邻却分属两艘不同的船只，则称这两艘船相互接触了）。就输出一段话“There are S ships.”,S表示船只的数量。否则输出“Bad placement.”。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


6 8
.....#.#
##.....#
##.....#
.......#
#......#
#..#...#

<p><strong>输出 #1</strong>复制</p>


There are 5 ships.

<p>思路：根据题意相连的块肯定能组成一个矩形，那么不能组成矩形的图案肯定最后会有这种子块：</p>



```cpp
*#
##

##
*#

#*
##

##
#*
```


<p> 如例子中的：</p>



```cpp
##.
##.
..#
```


<p>就分别属于两个矩形，但是如果两个联通的块不是矩形如：</p>



```cpp
.......#
.......#
.......#
########
```


<p> 这样的话就出现了</p>



```cpp
.#
##
```


<p> 这个子结构，而且不是矩形。</p>

<p> </p>

<p>所以如果一个点和他的上边的点，左边的点，左上方的点的#的总和加起来是3的话他就是不符合矩形这种情况的。所以我们在遍历每个点的时候判断一下他和他的上边的点，左边的点，左上方的点的#的总和是不是3，如果是三就直接输出不行退出，如果不是3的话我们在判断。</p>

<p>这个时候如果他的左边和上边的位置都不是#的话就说明他是属于一个新的独立的矩形，那么船的数量就++，如果不符合这种情况的话我们就不用加。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
char g[1005][1005];
int r,c;
int s;
bool f(int x,int y){//判断他自己和他的上边的点，左边的点，左上方的点的#的总和
	int o=0;
	if(g[x-1][y-1]=='#')o++;
	if(g[x-1][y]=='#')o++;
	if(g[x][y-1]=='#')o++;
	if(g[x][y]=='#')o++;
	if(o==3)return false;
	else return true;
	}
int main(){
	cin>>r>>c;
	for(int i=1;i<=r;i++){
		for(int j=1;j<=c;j++){
			cin>>g[i][j];
		}
	}
	for(int i=1;i<=r;i++){
		for(int j=1;j<=c;j++){
			if(f(i,j)){//判断他是不是那个子结构
				if(g[i-1][j]!='#'&&g[i][j-1]!='#'&&g[i][j]=='#')s++;//如果他自己是#且上面和右面的不是#总数就++
			}else{
				printf("Bad placement.");
				return 0;
			}
		}
	}
	printf("There are %d ships.",s);
	return 0;
}
```


<p></p>

## P1498 南蛮图腾

<h2>题目描述</h2>

<p>自从到了南蛮之地，孔明不仅把孟获收拾的服服帖帖，而且还发现了不少少数民族的智慧，他发现少数民族的图腾往往有着一种分形的效果，在得到了酋长的传授后，孔明掌握了不少绘图技术，但唯独不会画他们的图腾，于是他找上了你的爷爷的爷爷的爷爷的爷爷……帮忙，作为一个好孙子的孙子的孙子的孙子……你能做到吗？</p>

<h2>输入格式</h2>

<p>每个数据一个数字，表示图腾的大小（此大小非彼大小） n&lt;=10</p>

<h2>输出格式</h2>

<p>这个大小的图腾</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


2

<p><strong>输出 #1</strong>复制</p>


   /\
  /__\
 /\  /\
/__\/__\


<p><strong>输入 #2</strong>复制</p>


3

<p><strong>输出 #2</strong>复制</p>


       /\
      /__\
     /\  /\
    /__\/__\
   /\      /\
  /__\    /__\
 /\  /\  /\  /\
/__\/__\/__\/__\

<p>思路：我是靠dalao的题解才读懂题目的，，，刚开始是这个图形：</p>



```cpp
 /\
/__\
```


<p>每复制一次就向上向右复制一下自己本身，比如n=2时：</p>



```cpp
   /\
  /__\
 /\  /\
/__\/__\
```


<p>n=3时，再吧上面那个图形向上向右复制一次：</p>



```cpp
       /\
      /__\
     /\  /\
    /__\/__\
   /\      /\
  /__\    /__\
 /\  /\  /\  /\
/__\/__\/__\/__\

```


<p> 每次复制的时候高度和宽度*2，如果我们按正常存储按顺序输出的话要把原来的图形再向下平移啥的很麻烦，所以我们考虑倒序着存倒序着输出。</p>

<p>先把图形初始化为全是空格。</p>

<p>把最小的图形倒着存入：</p>



```cpp
/__\
 /\
```


<p> 循环n-1次，每次向左向右输出然后复制的高度加倍，代码实现是：</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

char g[10005][10005];
int n;
int main(){
	cin>>n;
	memset(g,' ',sizeof g);//注意要先把图形全初始化为空格
	g[0][0]='/';
	g[0][1]='_';
	g[0][2]='_';
	g[0][3]='\\';//注意反斜线不能直接存，要加斜线
	g[1][1]='/';
	g[1][2]='\\';
	int wide=4;//最初的图形的宽度是4
	for(int k=1;k<n;k++){//复制n-1次
		for(int i=0;i<wide/2;i++){//高度是wide/2
			for(int j=0;j<wide;j++){//宽度是wide
				g[i][j+wide]=g[i][j];//向右复制
				g[i+wide/2][j+wide/2]=g[i][j];//向下复制
			}
		}
		wide*=2;//每次复制之后宽度成倍增加
	}
	for(int i=wide/2-1;i>=0;i--){//当宽度为wide时他最下面的一行是wide-1，但是出循环的时候wide多*2，所以我们先/2再-1
		for(int j=0;j<wide;j++){
			printf("%c",g[i][j]);
		}
		printf("\n");
	}
	return 0;
}

 

```


<p></p>

<p></p>

## 城堡问题（dfs）

<p></p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/186a93c4228075a83a591c8e2f0326d8.png" /></p>

<p>图1是一个城堡的地形图。请你编写一个程序，计算城堡一共有多少房间，最大的房间有多大。城堡被分割成m*n(m≤50，n≤50)个方块，每个方块可以有0~4面墙。</p>

<h3 id="输入格式">输入格式:</h3>

<p>程序从标准输入设备读入数据。第一行是两个整数，分别是南北向、东西向的方块数。在接下来的输入行里，每个方块用一个数字(0≤p≤50)描述。用一个数字表示方块周围的墙，1表示西墙，2表示北墙，4表示东墙，8表示南墙。每个方块用代表其周围墙的数字之和表示。城堡的内墙被计算两次，方块(1,1)的南墙同时也是方块(2,1)的北墙。输入的数据保证城堡至少有两个房间。</p>

<h3 id="输出格式">输出格式:</h3>

<p>城堡的房间数、城堡中最大房间所包括的方块数。结果显示在标准输出设备上。</p>

<h3 id="输入样例">输入样例:</h3>

<p>在这里给出一组输入。例如：</p>



```cpp
4 
7 
11 6 11 6 3 10 6 
7 9 6 13 5 15 5 
1 10 12 7 13 7 5 
13 11 10 8 10 12 13 

```


<h3 id="输出样例">输出样例:</h3>

<p>在这里给出相应的输出。例如：</p>



```cpp
5
9
```


<p></p>

<p>如何处理向哪走：可以看出东南西北4个方向的值都是二进制表示的各个位上的1，所以我们判断一个数他有没有东南西北墙只需要把他&amp;操作一下就可以了</p>

<p>-----------------------------------------</p>

<p>&amp;操作的解释：比如9&amp;5，先写出他们的二进制数：9:1001 5:101</p>

<p>然后我们从最低位向最高位看，对每一位，只有两个都是1的时候结果才为1，如：</p>

<p>9最低位是1，5最低位也是1，所以二进制结果的最低位是1，倒数第二位都是0，所以二进制结果的倒数第二位是0，倒数第三位一个是0一个是1，所以二进制结果的倒数第三位是0，倒数第四位一个是1另一个为0那就是0，所以结果二进制表示为0001，化成十进制就是1；</p>

<p>--------------------------------------------</p>

<p>思路：先设置一个二维数组来标记他走没走过，遍历每个点，把房间数赋值为0；当他没被走过的时候我们就dfs他，dfs的出口是他如果被走过了就return，没有被走过房间数就加1且标记他已经走过，然后再进行&amp;操作看应该dfs哪个坐标，代码如下：</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int st[60][60];
int g[60][60];
int num,maxnum=0,anum=0;
int n,m;
void dfs(int x,int y){
	if(st[x][y]!=0)return ;//如果走过就跳出
	num++;//没走过房间数就加
	st[x][y]=1;//标记一下走过了
	if((g[x][y]&1)==0)dfs(x,y-1);//西
	if((g[x][y]&2)==0)dfs(x-1,y);//北
	if((g[x][y]&4)==0)dfs(x,y+1);//东
	if((g[x][y]&8)==0)dfs(x+1,y);//南
	
}
int main(){
	scanf("%d%d",&n,&m);
	memset(st,0,sizeof st);//st=0表示没走过
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			scanf("%d",&g[i][j]);
		}
	}
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			if(st[i][j]==0){//如果没走过
			num=0;//记录房间数
			anum++;//记录块数
			dfs(i,j);
			maxnum=max(maxnum,num);
			}
		}
	}
	printf("%d\n%d",anum,maxnum);
	return 0;
}
```


<p></p>

## 两种搜索总结

<p>搜索时所有的点都只遍历一次，所以不管是bfs还是dfs我们都需要开个bool数组或int数组来记录是否被搜过（一般搜索点用dfs的话用bool数组，用bfs搜索图的话一般求距离数组用int数组初始化为-1）</p>

<p>存图：用邻接表，单链表中e[n]存数 ne[n]存下一个数的下标 head=-1头结点（注意：在图中用邻接表存的话，要开e[2*n],ne[2*n]，因为每个点有两条边，在之前的题中pair&lt;int,int&gt; 存坐标时也是要建立q[n*n]个）</p>



```cpp
void add(int a,int b){//把a和b连起来，如果是无向边的话需要add(a,b)和add(b,a)
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx;
	idx++;
}
```


<p>邻接表的头节点是一个数组h[n]</p>

<p>遍历单链表的话</p>



```cpp
for(int i =head;i!=-1;i=ne[i]){//i相当于下标
	cout<<e[i];
}
```


<p>遍历图的邻接表的话，比如遍历编号为n的点，吧head换为h[n]就可以了</p>



```cpp
for(int i =h[n];i!=-1;i=ne[i]){
	cout<<e[i];
}
```


<p>深度优先遍历图：当遍历到编号为u的节点时，修改u的状态为true表示已经走过，然后遍历与u相连的点，如果没走过就遍历它（注意：与之前的n皇后不一样，每个点都走一次所以出来时不需要恢复状态）</p>



```cpp
void dfs(int u){
	st[u]=true;
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];//j是i这个下标存的点的编号
		if(!st[j])dfs(j);//如果没被走过，就遍历它
	}
}
```


<p>例题：数的重心</p>

<p>宽度优先遍历图有框架：</p>

<p>刚开始时初始化队列，队头先插入初始点，初始点的d数组值为0；</p>

<p>一般都求距离，建立一个距离数组为d[n],初始化为-1，判断是否被遍历一般看d[x]是否为-1.</p>

<p>先把起始点插入队列，while队列不空，取出队头元素t，遍历队头t所有的邻点x，如果x未被遍历，那么就把x入队，更新一下x的距离d[x]=d[t]+1</p>



```cpp
int bfs(){
	memset(d,-1,sizeof(d));//初始化距离为-1
	q[0]=1;//取初始点存入队列
	d[1]=0;//第一个点的距离记作0
	int hh=0,tt=0;//初始化头和尾
	while(hh<=tt){
		int t=q[hh++];//取头节点
		for(int i=h[t];i!=-1;i=ne[i]){
			int j=e[i];
			if(d[j]==-1){//如果这个点没有被走过
				q[++tt]=j;
				d[j]=d[t]+1;
			}
		}
	}
	return d[n];
}
```


<p>例题：图中点的层次</p>

## P6183 [USACO10MAR] The Rock Game S

<p>在奶牛回家休息和娱乐之前，Farmer John 希望它们通过玩游戏获得一些智力上的刺激。游戏板由 nn 个相同的孔组成，这些孔最初<strong>都是空的</strong>。一头母牛要么用石头盖住一个洞，要么揭开一个先前被盖住的洞。<strong>游戏状态</strong>的定义是哪些洞被石头覆盖，哪些洞没有覆盖。游戏的目标是让奶牛准确地到达每个可能的游戏状态一次，然后返回到所有洞都没有覆盖的状态。以下是他们其中一次游戏的示例（空的洞用 
```cpp
O
```
 表示，用石头盖住的洞用 
```cpp
X
```
 表示）：</p>

<table><thead><tr><th>时间</th>
			<th>洞 1</th>
			<th>洞 2</th>
			<th>洞 3</th>
			<th>描述</th>
		</tr></thead><tbody><tr><td>00</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>一开始所有的洞都是空的</td>
		</tr><tr><td>11</td>
			<td>O</td>
			<td>O</td>
			<td>X</td>
			<td>盖上洞 3</td>
		</tr><tr><td>22</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
			<td>盖上洞 1</td>
		</tr><tr><td>33</td>
			<td>X</td>
			<td>O</td>
			<td>O</td>
			<td>打开洞 3</td>
		</tr><tr><td>44</td>
			<td>X</td>
			<td>X</td>
			<td>O</td>
			<td>盖上洞 2</td>
		</tr><tr><td>55</td>
			<td>O</td>
			<td>X</td>
			<td>O</td>
			<td>打开洞 1</td>
		</tr><tr><td>66</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
			<td>盖上洞 3</td>
		</tr><tr><td>77</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
			<td>盖上洞 1</td>
		</tr></tbody></table><p>现在牛被卡住玩不下去了！他们必须打开一个洞，不管他们打开哪个洞，他们都会到达一个他们已经到达的状态。例如，如果他们从第二个洞中取出岩石，他们将到达他们在时间 22 已经访问过的状态（
```cpp
X O X
```
）。</p>

<p>下面是一个 3 个孔的有效解决方案：</p>

<table><thead><tr><th>时间</th>
			<th>洞 1</th>
			<th>洞 2</th>
			<th>洞 3</th>
			<th>描述</th>
		</tr></thead><tbody><tr><td>00</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>一开始所有的洞都是空的</td>
		</tr><tr><td>11</td>
			<td>O</td>
			<td>X</td>
			<td>O</td>
			<td>盖上洞 2</td>
		</tr><tr><td>22</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
			<td>盖上洞 3</td>
		</tr><tr><td>33</td>
			<td>O</td>
			<td>O</td>
			<td>X</td>
			<td>打开洞 2</td>
		</tr><tr><td>44</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
			<td>盖上洞 1</td>
		</tr><tr><td>55</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
			<td>盖上洞 2</td>
		</tr><tr><td>66</td>
			<td>X</td>
			<td>X</td>
			<td>O</td>
			<td>打开洞 3</td>
		</tr><tr><td>77</td>
			<td>X</td>
			<td>O</td>
			<td>O</td>
			<td>打开洞 2</td>
		</tr><tr><td>88</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>打开洞 1，恢复到原来的状态</td>
		</tr></tbody></table><p>现在，奶牛们厌倦了这个游戏，它们想找你帮忙。</p>

<p>给定 nn，求游戏的有效解决方案序列。如果有多个解决方案，则返回<strong>任意一个</strong>。</p>

<h2>输入格式</h2>

<p>仅一行，一个整数 nn。</p>

<h2>输出格式</h2>

<p>共 2^n+12n+1 行，每行一个长度为 nn 的字符串，其中只包含字符 
```cpp
O
```
 和 
```cpp
X
```
，该行中的第 ii 个字符表示第 ii 个孔在此状态下是被覆盖还是未覆盖，第一行和最后一行必须全部都是 
```cpp
O
```
。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


3

<p><strong>输出 #1</strong>复制</p>


OOO
OXO
OXX
OOX
XOX
XXX
XXO
XOO
OOO


<p>思路：如果去掉两个全都是0的序列的话就是有2^n-1个序列</p>

<p>状态用1~2^n的二进制数表示</p>

<p>然后我们就找1~2^n的全排列中满足相邻的两个数相差一位的序列</p>

<p>用一个数来记录一下，找到了就更改一下，每次递归首先判断一下是否已经更改，如果更改了就直接返回</p>

<p>用一个数组来记录2^n-1个状态的方案序列</p>

<p>然后每次递归记录的是当前搜到第几个状态，如果搜到了最后的先输出全是0再输出序列再输出全是0</p>

<p>因为我们要找的是1~2^n的二进制表示的状态，为了避免搜到0我们先把0标记为已经用过</p>

<p>然后我们开始从第一个序列递归</p>

<p>设每次递归到第u个状态的数，那我们就一位一位看第u-1个状态的数</p>

<p>如果第i位的数是1就减掉第i位的1递归，如果是0就加上第i位上的1递归</p>

<p>具体见代码注释</p>


```cpp
/*

 .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |  ________    | || |  _________   | || | ____    ____ | || |     ____     | |
| | |_   ___ `.  | || | |_   ___  |  | || ||_   \  /   _|| || |   .'    `.   | |
| |   | |   `. \ | || |   | |_  \_|  | || |  |   \/   |  | || |  /  .--.  \  | |
| |   | |    | | | || |   |  _|  _   | || |  | |\  /| |  | || |  | |    | |  | |
| |  _| |___.' / | || |  _| |___/ |  | || | _| |_\/_| |_ | || |  \  `--'  /  | |
| | |________.'  | || | |_________|  | || ||_____||_____|| || |   `.____.'   | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'

*/
#include<iostream>
#include<algorithm>
#include<cstring>
#include<vector>
#include<set>
#include<map>
#include<queue>
#include<deque>
#include<cmath>
#include<stack>
#define int long long
#define lowbit(x) x&amp;(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int gcd(int a,int b) {
	return b? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
//int e[N],ne[N],h[N],idx,w[N];
/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/
const int N=1<<15+5;
int m,f,n;
int c[N];//记录每个状态是否出来过
int a[N];
void dfs(int u){//记录当前状态的下标
    if(f)return ;
	if(u==m){
		f=1;
		for(int i=0;i<n;i++)cout<<"O";
		cout<<endl;
		for(int i=1;i<m;i++){
			for(int j=0;j<n;j++){
				if((a[i]>>j)&amp;1)cout<<"X";
				else cout<<"O";
			}
			cout<<endl;
		}
		for(int i=0;i<n;i++)cout<<"O";
		cout<<endl;		
		return ;
	}
	int now;
	for(int i=0;i<n;i++){
		if((a[u-1]>>i)&amp;1){
			now=a[u-1]-(1<<i);
		}else now=a[u-1]+(1<<i);
		if(!c[now]){//如果没被用过
			c[now]=1;//标记一下
			a[u]=now;//现在这个状态是now
			dfs(u+1);//递归下一位
			c[now]=0;//如果找不到正确答案那就回溯
			a[u]=0;
		}
	}
	return ;
}
void sove(){
	cin>>n;
	m=1<<n;
	c[0]=1;
	dfs(1);
}

signed main(){
	sove();

	return 0;
}
```

<p></p>

## 数的重心（dfs）

<p>给定一颗树，树中包含 n个结点（编号 1∼n）和 n−1 条无向边。</p>

<p>请你找到树的重心，并输出将重心删除后，剩余各个连通块中点数的最大值。</p>

<p>重心定义：重心是指树中的一个结点，如果将这个点删除后，剩余各个连通块中点数的最大值最小，那么这个节点被称为树的重心。</p>

<p>输入格式</p>

<p>第一行包含整数 n，表示树的结点数。</p>

<p>接下来 n−1 行，每行包含两个整数 a和 b，表示点 a 和点 b 之间存在一条边。</p>

<p>输出格式</p>

<p>输出一个整数 m，表示将重心删除后，剩余各个连通块中点数的最大值。</p>

<p>数据范围</p>

<p>1≤n≤105</p>

<p>输入样例</p>



```cpp
9
1 2
1 7
1 4
2 8
2 5
4 3
3 9
4 6

```


<p>输出样例：</p>



```cpp
4
```


<p> </p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int ans,n;
bool st[100005];
int e[100005*2],ne[100005*2],h[100005],idx;
void add(int a,int b){
	e[idx]=b;
	ne[idx]=h[a];
	h[a]=idx;
	idx++;
}
int dfs(int u){
	st[u]=true;//标记已经走过,不要在全局变量定义sum和res
	int sum=1,res=0;//sum是与子点链接的点的点数，res是求联通点的最大值
	for(int i=h[u];i!=-1;i=ne[i]){
		int j=e[i];
		if(!st[j]){//如果点没被走过
			int s=dfs(j);//搜索这个点
			sum+=s;//加上子节点
			res=max(res,s);//取最大联通点
		}
	}
	res=max(res,n-sum);
	ans=min(ans,res);
	return sum;
}
int main(){
	cin>>n;
	ans=n;
	memset(h,-1,sizeof(h));//记得初始化头节点数组为-1
	for(int i=0;i<n-1;i++){//注意n个点n-1条边
		int a,b;
		cin>>a>>b;
		add(a,b);
		add(b,a);
	}
	dfs(1);//从1开始遍历
	printf("%d",ans);//输出最大联通点数的最小数
	return 0;
}
```


<p></p>

## 马踏棋盘。

<p>有一个 n×m的棋盘，在某个点 (x, y) 上有一个马，要求计算出马到达棋盘上任意一个点最少要走几步。<br />
数据规模：对于全部的测试点，保证 1≤x≤n≤400，1≤y≤m≤400。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/39ca8aaecf2786a166d921ca9a42d433.png" /></p>

<h3 id="输入格式">输入格式:</h3>

<p>输入一行四个整数，分别为 n, m, x, y。</p>

<h3 id="输出格式">输出格式:</h3>

<p>一个 n×m 的矩阵，表示马到达某个点最少要走几步（左对齐，宽 5 格，不能到达输出 −1）。</p>

<h3 id="输入样例">输入样例:</h3>



```cpp
3 3 1 1

```


<h3 id="输出样例">样例"&gt;输出样例:</h3>

<p>在这里给出相应的输出。例如：</p>



```cpp
0    3    2    
3    -1   1    
2    1    4    
```


<p>马的走法：1. 向上走2向左走二，（x-2,y-1）2.向上走二向右走二(x-2,y+1)，3.向右走二向上走一（x-1,y+2），4.向右走二向下走一（x+1,y+2）.....</p>

<p>整合成坐标就是</p>



```cpp
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={1,-1,2,2,-1,1,-2,-2};
```


<p>思路：求到每个点的最短距离用bfs，把初始距离全设为-1，把起始点的距离设为0，把他的横纵坐标加入队列，当队列不空取队头，对队头元素的八个走法进行遍历，然后把遍历的点加入队列。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<queue>
#include<cstring>
using namespace std;
const int N=410;
typedef pair<int,int> pii;
queue<pii> q;
int n,m,x,y;
int dist[N][N];
bool st[N][N];
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={1,-1,2,2,-1,1,-2,-2};
void bfs(){
	q.push(make_pair(x,y));
	dist[x][y]=0;
	st[x][y]=true;
	while(q.size()){
		pii tt=q.front();
		q.pop();
		for(int i=0;i<8;i++){
			int x1=tt.first +dx[i];
			int y1=tt.second +dy[i];
			if(x1>=1&&x1<=n&&y1>=1&&y1<=m){
				if(!st[x1][y1]){
					dist[x1][y1]=dist[tt.first ][tt.second ]+1;
					q.push(make_pair(x1,y1));
					st[x1][y1]=true;
				}
			}
		}
	}
	
}


int main(){
	scanf("%d%d%d%d",&n,&m,&x,&y);
	memset(dist,-1,sizeof dist);
	bfs();
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++){
			printf("%-5d",dist[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```


<p></p>

## namonamo Daimayuan Online Judge

<p>题目链接：<a data-link-icon="http://oj.daimayuan.top/images/favicon.ico" data-link-title="http://oj.daimayuan.top/course/10/problem/678" href="http://oj.daimayuan.top/course/10/problem/678" title="http://oj.daimayuan.top/course/10/problem/678">http://oj.daimayuan.top/course/10/problem/678</a></p>

<p> </p>

<p>dls 桌面上的两个小女孩除了喜欢亲亲以外，还喜欢一起共用一副耳机听歌。</p>

<p>一天，她们正在听她们最喜欢的歌，一首歌的歌词可以看着一个只包含小写字母的字符串，保证字符串的长度为偶数。</p>

<p>不幸的是，她们的 eirpods 是拼夕夕九块九包邮的，发生了一些神奇的故障，使得对于每个字母，<strong>恰好只有</strong>一个人能够听到。</p>

<p>在一首歌放完后，她们一边抱怨耳机的质量，同时惊奇地发现，她们两个人所听到的字母各自组成的字符串<strong>完全相同</strong>。</p>

<p>给定一首歌的歌词，判断这种事情是否可能发生。</p>

<hr /><p>形式化题意：给定一个长度是偶数，仅有小写字母构成的字符串，判断是否能被分成两个完全相同的子序列。</p>

<p>输入格式</p>

<p>第一行一个正整数 TT，表示数据组数。</p>

<p>接下来每一行一个字符串 SS，表示歌词。</p>

<p>输出格式</p>

<p>输出共 TT 行，每行一个字符串 
```cpp
possible
```
 或 
```cpp
impossible
```
，表示该组数据的答案。</p>

<p>样例输入</p>



```cpp
5
aabb
abba
namonamo
arqmpfvvbtltlhufznkldkurrazmgebfxeamrewn
aacfcfqqsmksimkoioeertbrtbhphnpnggddjjll
```


<p>样例输出</p>



```cpp
possible
impossible
possible
impossible
possible
```


<p> 思路：如果对整个字符串爆搜的话，每次有两个选择，40个字符串，复杂度为2^40显然超时</p>

<p>那么我们就把他分成两半进行折半搜索，这样复杂度降为2^20大约是1e6，这样就不会超时</p>

<p>那么我们分别搜前半段和后半段，对每个字符要么给a要么给b</p>

<p>然后搜完前后两段之后我们在查一下前面半段的a+后面半段的a==前面半段的b+后面半段的b</p>

<p>例如:</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/ddf8c2a0bd5d41ca8f0a1c5dba984c36.jpeg" /></p>

<p> 那么我们可以知道前半段的前缀相等，后半段的后缀相等，前半段多出来的和后半段多出来的中间段相等</p>

<p>那么我们可以对于每次前半段搜到的a，b，先判断前缀是否相等</p>

<p>如果相等，就把中间多出来的用set存一下</p>

<p>然后对于后半段每次搜出来的a，b，先判断他的后缀是否相等</p>

<p>如果相等的话我们就把他的中间段拿出来看看set里有没有，如果有的话就说明符合s1==s2了</p>


```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int gcd(int a,int b) {
	return b? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
//int e[N],ne[N],h[N],idx,w[N];
/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/
const int N=2e5+10;
int n;
bool f;
set<string> ss;
string s;
void dfs1(int st,int end,string &amp;a,string &amp;b){
	if(f)return ;
	if(st>end){
		for(int i=0;i<min(a.size(),b.size());i++){
			if(a[i]!=b[i])return ;
		}
		if(a.size()<b.size()){
			ss.insert(b.substr(a.size())); 
		}else {
			ss.insert(a.substr(b.size())); 
		}
		return ;
	}
	a.push_back(s[st]);
	dfs1(st+1,end,a,b);
	a.pop_back();
	b.push_back(s[st]);
	dfs1(st+1,end,a,b);
	b.pop_back();
}
void dfs2(int st,int end,string a,string b){
	if(f)return ;
	if(st>end){
		reverse(a.begin(),a.end());
		reverse(b.begin(),b.end());
		for(int i=0;i<min(a.size(),b.size());i++){
			if(a[i]!=b[i])return ;
		}
		string op;
		if(a.size()<b.size()){
			op=b.substr(a.size());
		}else op=a.substr(b.size());
		reverse(op.begin(),op.end());
		if(ss.count(op) ){
			f=true;
			
		}
		return ;
	}
	a.push_back(s[st]);
	dfs2(st+1,end,a,b);
	a.pop_back();
	b.push_back(s[st]);
	dfs2(st+1,end,a,b);
	b.pop_back();	
}
void sove(){
	s.clear();
	ss.clear() ;
	cin>>s;
	f=false;
	n=s.size();
	s="?"+s;
	string a,b;
	dfs1(1,n/2,a,b);
	dfs2(n/2+1,n,a,b);
	if(f)cout<<"possible"<<endl;
	else cout<<"impossible"<<endl;
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```

<p> </p>

## P1189 `SEARCH`

<p>年轻的拉尔夫开玩笑地从一个小镇上偷走了一辆车，但他没想到的是那辆车属于警察局，并且车上装有用于发射车子移动路线的装置。</p>

<p>那个装置太旧了，以至于只能发射关于那辆车的移动路线的方向信息。</p>

<p>编写程序，通过使用一张小镇的地图帮助警察局找到那辆车。程序必须能表示出该车最终所有可能的位置。</p>

<p>小镇的地图是矩形的，上面的符号用来标明哪儿可以行车哪儿不行。“.”表示小镇上那块地方是可以行车的，而符号“X”表示此处不能行车。拉尔夫所开小车的初始位置用字符的“*”表示，且汽车能从初始位置通过。</p>

<p>汽车能向四个方向移动：向北(向上)，向南(向下)，向西(向左)，向东(向右)。</p>

<p>拉尔夫所开小车的行动路线是通过一组给定的方向来描述的。在每个给定的方向，拉尔夫驾驶小车通过小镇上一个或更多的可行车地点。</p>

<h2>输入格式</h2>

<p>输入文件的第一行包含两个用空格隔开的自然数RR和CC，1≤R≤501≤R≤50，1≤C≤501≤C≤50，分别表示小镇地图中的行数和列数。</p>

<p>以下的RR行中每行都包含一组CC个符号(“.”或“X”或“*”)用来描述地图上相应的部位。</p>

<p>接下来的第R+2行包含一个自然数N，1≤N≤1000，表示一组方向的长度。</p>

<p>接下来的N行幅行包含下述单词中的任一个：NORTH(北)、SOUTH(南)、WEST(西)和EAST(东)，表示汽车移动的方向，任何两个连续的方向都不相同。</p>

<h2>输出格式</h2>

<p>用R行表示的小镇的地图(象输入文件中一样)，字符“*”应该仅用来表示汽车最终可能出现的位置。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


4 5
.....
.X...
...*X
X.X..
3
NORTH
WEST
SOUTH

<p>思路：按暴力来写会超时，因为会有每个方向走不同的步数但是走的终点相同的情况</p>

<p>比如下图，从#开始走，向上左下这三个方向走：</p>

```
....
....
*...
..#.
```

<p>可以发现当按上3-左2-下2和按上2-左2-下1这两个顺序走到的点都是*</p>

<p>而如果继续往其他方向走的话这两种路径后来的情况完全一样</p>

<p>所以我们就对他进行剪枝</p>

<p>用v[x][y][u]来记录到第u个方向xy这个点走过没有，每次搜到第u个方向判断</p>

<p>如果走过直接return</p>


```cpp
#include<bits/stdc++.h>
using namespace std;

int n,m;
const int N=60;
char g[N][N];
int len;
vector<string> word;
int v[N][N][1010];
void dfs(int u,int x,int y){
	if(v[x][y][u])return;
	if(u==len){
		g[x][y]='*';
		return ;
	}
	v[x][y][u]=1;
	if(word[u][0]=='N'){
		for(int i=1;x-i>=0;i++){
			if(g[x-i][y]!='X'){
				dfs(u+1,x-i,y);
			}else break;
		}
	}else if(word[u][0]=='S'){
		for(int i=1;i+x<n;i++){
			if(g[i+x][y]!='X'){
				dfs(u+1,x+i,y);
			}else break;
		}
	}else if(word[u][0]=='W'){
		for(int i=1;y-i>=0;i++){
			if(g[x][y-i]!='X'){
				dfs(u+1,x,y-i);
			}else break;
		}
	}else{
		for(int i=1;y+i<m;i++){
			if(g[x][y+i]!='X'){
				dfs(u+1,x,y+i);
			}else break;
		}
	}
}
int main(){
	cin>>n>>m;
	int sx,sy;
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			cin>>g[i][j];
			if(g[i][j]=='*'){
				sx=i;
				sy=j;
				g[i][j]='.';
			}
		}
	}
	cin>>len;
	for(int i=0;i<len;i++){
		string op;
		cin>>op;
		word.push_back(op);
	}
	dfs(0,sx,sy);
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			cout<<g[i][j];
		}
		cout<<endl;
	}
	return 0;
}
```

<p></p>

## E - Don‘t Really Like How The Story Ends

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/4c5e53d0951444139db37cfe021b58ca.png" /> </p>

<p> 题意：有n个点，原来有路线，使n个点从开始遍历是1~n的dfs序</p>

<p>但是后来只剩下了m条路，让求最少补多少条路能让他从1开始遍历dfs序仍是1~n</p>

<p>思路：用con来表示当前找的点，ans来表示要添加的路的条数</p>

<p>从1开始遍历，比如我们遍历与u相连的结点v</p>

<p>我们当前遍历的v小于con的话就不用管，继续遍历与u相连的v</p>

<p>如果等于的话，当前要找的结点编号con++</p>

<p>然后遍历他的上一个结点（con-1）</p>

<p>如果大于的话，相当于与u连了一个大于con的编号，那么这个时候我们就得在u上添加一个到con的路了，所以ans++，添加完之后当前找的点编号++，然后遍历当前要找的结点的上一个结点</p>

<p>（这样遍历相当于遍历了从cnt到v）</p>

<p>注意一个细节就是应该在1结点加一个与n+1相连的边（因为我们需要找到n）</p>


```cpp
#include<bits/stdc++.h>
using namespace std;
#include<vector>
const int N=1e5+10;
int  n,m;
int ans,con;
vector<int> yy[N];
void dfs(int u){
	if(u==n+1)return ;
	for(auto v:yy[u]){
		if(v<con)continue;
		while(v>=con){
			if(v==con){
				con++;
				dfs(con-1);
			}else{
				ans++;
				con++;
				dfs(con-1);
			}
		}
	}
}
void sove(){
	scanf("%d%d",&amp;n,&amp;m);
	ans=0;
	while(m--){
		int a,b;
		scanf("%d%d",&amp;a,&amp;b);
		yy[a].push_back(b);
		yy[b].push_back(a);  
	}
	yy[1].push_back(n+1); 
	for(int i=1;i<=n;i++){
		sort(yy[i].begin() ,yy[i].end() );
	}
	con=2;
	dfs(1);
	printf("%d\n",ans);
	for(int i=1;i<=n;i++) yy[i].clear() ;
	
}
int main(){
	int t;
	scanf("%d",&amp;t);
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

<p> </p>

<p></p>

## P1036 [NOIP2002 普及组] 选数

<h2>题目描述</h2>

<p>已知 nn 个整数 x_1,x_2,\cdots,x_nx1​,x2​,⋯,xn​，以及 11 个整数 kk（k&lt;nk&lt;n）。从 nn 个整数中任选 kk 个整数相加，可分别得到一系列的和。例如当 n=4n=4，k=3k=3，44 个整数分别为 3,7,12,193,7,12,19 时，可得全部的组合与它们的和为：</p>

<p>3+7+12=223+7+12=22</p>

<p>3+7+19=293+7+19=29</p>

<p>7+12+19=387+12+19=38</p>

<p>3+12+19=343+12+19=34</p>

<p>现在，要求你计算出和为素数共有多少种。</p>

<p>例如上例，只有一种的和为素数：3+7+19=293+7+19=29。</p>

<h2>输入格式</h2>

<p>第一行两个空格隔开的整数 n,kn,k（1 \le n \le 201≤n≤20，k&lt;nk&lt;n）。</p>

<p>第二行 nn 个整数，分别为 x_1,x_2,\cdots,x_nx1​,x2​,⋯,xn​（1 \le x_i \le 5\times 10^61≤xi​≤5×106）。</p>

<h2>输出格式</h2>

<p>输出一个整数，表示种类数。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


4 3
3 7 12 19


<p><strong>输出 #1</strong>复制</p>


1

<p>思路:把数组排序之后，我们按想要序列的位置一个一个来搜索，为了节省时间，我们在确定这个位置的数之后，直接从下一个数开始搜，这样就可以保证每次一个位置填的数都不同，（而且先排序了再选那么每次选不同的数算出来的总数就不同，我们就不用额外判断总数是否算过直接++就可以了）比如：</p>

<p>序列1 2 3 4 5我们要选3个数的话，我们这样选：</p>

<p>1 2 3</p>

<p>1 2 4</p>

<p>1 2 5</p>

<p>2 3 4</p>

<p>2 3 5...</p>

<p>选好之后再看看总数是否是素数就可以了。</p>

<p>所以我们就可以这么实现：</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

int a[30];
int n,k,con;
bool su(int x){
	if(x<=1)return false;
	for(int i=2;i<=x/i;i++){
		if(x%i==0){
			return false;
		}
	}
	return true;
}
void dfs(int u,int y,int ans ){//位置是u，数组下标是y，总数是ans
	if(u>=k){
		if(su(ans)){
			con++;
		}
		return ;
	}
	for(int i=y;i<n;i++){
		dfs(u+1,i+1,ans+a[i]);
	}
	
}
int main(){
	cin>>n>>k;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	sort(a,a+n);
	dfs(0,0,0);//从第0个位置，数组下标为0，总数是0的地方开始搜
	cout<<con;
	return 0;
}
```


<p></p>

## p1030求先序遍历

<h2>题目描述</h2>

<p>给出一棵二叉树的中序与后序排列。求出它的先序排列。（约定树结点用不同的大写字母表示，长度\le 8≤8）。</p>

<h2>输入格式</h2>

<p>22行，均为大写字母组成的字符串，表示一棵二叉树的中序与后序排列。</p>

<h2>输出格式</h2>

<p>11行，表示一棵二叉树的先序。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>


BADC
BDCA


<p><strong>输出 #1</strong>复制</p>


ABCD


<p></p>

<p>中序遍历：左根右</p>

<p>后序遍历：左右根</p>

<p>先序遍历：根左右</p>

<p>因为后序遍历的每次遍历都是根结点，所以我们先把后序遍历的根结点输出，然后在中序遍历中找到根结点所在的位置，在中序遍历中根结点的前面就是左子树右边就是右子树，在后序中前面是左子树，中间是右子树，最后一个是根结点，所以我们每次就根据这些下标来分别遍历左子树和右子树（因为题目要求先序遍历是根左右）。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

string zhong,hou;//中：左根右 后：左右根

void deal(int l1,int r1,int l2,int r2){
	if(l1>r1||l2>r2)return ;//当中序或后序遍历完的时候退出
	cout<<hou[r2];//没有遍历完就输出后序的最后一个（根结点
	int pos=-1;
	for(int i=0;i<=r1;i++){//找到中序里的根结点的位置
		if(zhong[i]==hou[r2]){
			pos=i;
			break;
		}
	}
	//在中序遍历中根结点的前面是左子树，根结点的后面是右子树
	//在后序遍历中我们只能知道最后一个是根结点，但是我们可以根据中序求出来左子树的长度来确定在后序中左子树和右子树的长度，最终确定位置关系
	deal(l1,pos-1,l2,l2+pos-1-l1);//左子树
	deal(pos+1,r1,l2+pos-l1,r2-1);
	
}
int main(){
	cin>>zhong>>hou;
	int len=zhong.size();
	deal(0,len-1,0,len-1);
	
	return 0;
}
```


<p></p>

<p></p>

## 单词接龙

<p>单词接龙是一个与我们经常玩的成语接龙相类似的游戏，现在我们已知一组单词，且给定一个开头的字母，要求出以这个字母开头的最长的“龙”（每个单词都最多在“龙”中出现两次），在两个单词相连时，其重合部分合为一部分，例如 beast和 astonish，如果接成一条龙则变为 beastonish ，另外相邻的两部分不能存在包含关系，例如 at 和 atide 间不能相连。</p>

<h3>输入格式</h3>

<p>输入的第一行为一个单独的整数 n (n \le 20)n(n≤20) 表示单词数，以下 nn 行每行有一个单词，输入的最后一行为一个单个字符，表示“龙”开头的字母。你可以假定以此字母开头的“龙”一定存在。</p>

<h3>输出格式</h3>

<p>只需输出以此字母开头的最长的“龙”的长度。</p>

<h3>样例说明</h3>

<p>连成的“龙”为 atoucheatactactouchoose</p>

Sample 1

Inputcopy	Outputcopy
5
at
touch
cheat
choose
tact
a
23
思路：用一个二维数组来记录两个字符串重合部分的长度，先看看所有组合的两个字符有没有重合的部分，然后遍历所有字符，如果字符的首个字符等于他给出的头字符就搜他：

<p>更新一下长度，用一个数组来记录每个字符串使用的次数，搜他的时候++，列举所有字符串，当他与列举的字符串有重合的部分且列举的字符串的使用次数小于2的话就搜他和这个列举的字符串结合之后的字符。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cstring>
using namespace std;

string q[30];//记录单词
int g[30][30];//记录两个单词最长的重合长度
int n,ans=0;
int use[30];//记录使用的次数
char op;//头字符
void dfs(string d,int last){
	ans=max(ans,(int)d.size());//更新长度
	use[last]++;//使用次数++
	for(int i=1;i<=n;i++){//遍历所有单词
		if(g[last][i]&&use[i]<2){//如果两个单词的重合长度不等于1并且使用次数不超过2
			dfs(d+q[i].substr(g[last][i]),i);//搜他们拼起来的字符
		}
	}
	use[last]--;//回溯时还原
}
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>q[i];
	}
	cin>>op;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			string a=q[i];
			string b=q[j];
			for(int k=1;k<min(a.size(),b.size());k++){//小于他俩最小的长度是因为排除包含关系
				if(a.substr(a.size()-k,k)==b.substr(0,k)){//如果i的后面k位等于j的前面k位
					g[i][j]=k;//记录长度
					break;//直接跳出
				}
			}
		}
	}
	for(int i=1;i<=n;i++){
		if(q[i][0]==op){//如果等于头节点搜
			dfs(q[i],i);
		}
	}
	printf("%d",ans);
	return 0;
}
```


<p></p>

## pta地下迷宫探索（详解）

<p>地道战是在抗日战争时期，在华北平原上抗日军民利用地道打击日本侵略者的作战方式。地道网是房连房、街连街、村连村的地下工事，如下图所示。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/3f11229be6fcb850a3d0b11aa80b29be.png" /></p>

<p>我们在回顾前辈们艰苦卓绝的战争生活的同时，真心钦佩他们的聪明才智。在现在和平发展的年代，对多数人来说，探索地下通道或许只是一种娱乐或者益智的游戏。本实验案例以探索地下通道迷宫作为内容。</p>

<p>假设有一个地下通道迷宫，它的通道都是直的，而通道所有交叉点（包括通道的端点）上都有一盏灯和一个开关。请问你如何从某个起点开始在迷宫中点亮所有的灯并回到起点？</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/821e062b0e427d70527cffad2d7b7772.png" /></p>

<h3 id="输入格式">输入格式:</h3>

<p>输入第一行给出三个正整数，分别表示地下迷宫的节点数N（1&lt;N≤1000，表示通道所有交叉点和端点）、边数M（≤3000，表示通道数）和探索起始节点编号S（节点从1到N编号）。随后的M行对应M条边（通道），每行给出一对正整数，分别是该条边直接连通的两个节点的编号。</p>

<h3 id="输出格式">输出格式:</h3>

<p>若可以点亮所有节点的灯，则输出从S开始并以S结束的包含所有节点的序列，序列中相邻的节点一定有边（通道）；否则虽然不能点亮所有节点的灯，但还是输出点亮部分灯的节点序列，最后输出0，此时表示迷宫不是连通图。</p>

<p>由于深度优先遍历的节点序列是不唯一的，为了使得输出具有唯一的结果，我们约定以节点小编号优先的次序访问（点灯）。在点亮所有可以点亮的灯后，以原路返回的方式回到起点。</p>

<h3 id="输入样例1">输入样例1:</h3>



```cpp
6 8 1
1 2
2 3
3 4
4 5
5 6
6 4
3 6
1 5

```


<h3 id="输出样例1">输出样例1:</h3>



```cpp
1 2 3 4 5 6 5 4 3 2 1

```


<h3 id="输入样例2">输入样例2:</h3>



```cpp
6 6 6
1 2
1 3
2 3
5 4
6 5
6 4

```


<h3 id="输出样例2">输出样例2:</h3>



```cpp
6 4 5 4 6 0
```


<p>思路：用一个vector数组存路径，一个vector g[N]的二维数组来存与n联通的点，int数组来存每个点的状态是否被走过，具体递归代码如下</p>



```cpp
#include<iostream>
#include<algorithm>
#include<vector>
#include<cstring>
#include<cmath>
#include<cstdio>
#include<queue>
using namespace std;

vector <int> path,g[1005];//path存路，g存联通的点
int visit[1005];//存点的状态，0为未走过，1为走过了
void dfs(int k){
	path.push_back(k);//加入路径中
	visit[k]=1;//表示已经走过
	sort(g[k].begin() ,g[k].end() );//对与k联通的点进行排序
	for(int i=0;i<g[k].size() ;i++){
		int x=g[k][i];
		if(visit[x]==0){//如果这个点没有走过，搜这个点
			dfs(x);
			path.push_back(k);//搜完之后把k加上相当于返回时的路径 
		}
	} 
	return ;
	
}
int main(){
	int n,m,s;
	scanf("%d%d%d",&n,&m,&s);
	while(m--){
		int a,b;
		scanf("%d%d",&a,&b);
		g[a].push_back(b);//把与a，b两点联通的点存起来
		g[b].push_back(a);  
	}
	dfs(s);
	for(int i=1;i<=n;i++){
		if(visit[i]==0){//如果这个点没有被走过，就在最后加0
			path.push_back(0); 
			break;
		}
	}
	for(int i=0;i<path.size() ;i++){
		if(i==0)printf("%d",path[i]);
		else printf(" %d",path[i]);
	}
	return 0;
}
```


<p> </p>

## 滑雪（dfs）

<p>Michael喜欢滑雪百这并不奇怪， 因为滑雪的确很刺激。可是为了获得速度，滑的区域必须向下倾斜，而且当你滑到坡底，你不得不再次走上坡或者等待升降机来载你。Michael想知道载一个区域中最长底滑坡。区域由一个二维数组给出。数组的每个数字代表点的高度。下面是一个例子</p>


 1  2  3  4 5

16 17 18 19 6

15 24 25 20 7

14 23 22 21 8

13 12 11 10 9

<p><br />
一个人可以从某个点滑向上下左右相邻四个点之一，当且仅当高度减小。在上面的例子中，一条可滑行的滑坡为24-17-16-1。当然25-24-23-...-3-2-1更长。事实上，这是最长的一条。</p>

<p>Input</p>

<p>输入的第一行表示区域的行数R和列数C(1 &lt;= R,C &lt;= 100)。下面是R行，每行有C个整数，代表高度h，0&lt;=h&lt;=10000。</p>

<p>Output</p>

<p>输出最长区域的长度。</p>

Sample

Inputcopy
5 5
1 2 3 4 5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9

Outputcopy
25

```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

int n,m;
int ans=0;
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int high[105][105];//记录每个点的高度
int maxlen[105][105];//记录最大下降的高度
bool cheek(int x,int y){
	if(x>=0&&x<n&&y>=0&&y<m)return true;
	else return false;
}
int dfs(int x,int y){//返回的是最大能下降的高度
	if(maxlen[x][y]!=0){//如果走过就跳出函数
		return maxlen[x][y];
	}
	maxlen[x][y]=1;//最低只能走一步
	for(int i=0;i<4;i++){//遍历上下左右
		int x1=x+dx[i];
		int y1=y+dy[i];
		if(cheek(x1,y1)&&high[x1][y1]<high[x][y]){//如果这个位置在范围内而且高度低
			maxlen[x][y]=max(dfs(x1,y1)+1,maxlen[x][y]);//拿这个位置能下降的最大高度+1和本身比取最大
		}
	}
	return maxlen[x][y];
}
int main(){
	memset(maxlen,0,sizeof maxlen);
	cin>>n>>m;
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			cin>>high[i][j];
		}
	}
	for(int i=0;i<n;i++){
		for(int j=0;j<m;j++){
			ans=max(ans,dfs(i,j));
		}
	}
	printf("%d",ans);
	return 0;
}
```


<p></p>

## HDU - 5937 E - Equation（搜索）

<p>Little Ruins is a studious boy, recently he learned addition operation! He was rewarded some number bricks of 11 to 99 and infinity bricks of addition mark <strong>'+'</strong> and equal mark <strong>'='</strong>.<br /><br />
Now little Ruins is puzzled by those bricks because he wants to put those bricks into as many different addition equations form x + y = zx+y=z as possible. Each brick can be used at most once and x, y, z are one digit integer.<br /><br />
As Ruins is a beginer of addition operation, xx, yy and zz will be single digit number.<br /><br />
Two addition equations are different if any number of xx, yy and zz is different.<br /><br />
Please help little Ruins to calculate the <strong>maximum</strong> number of different addition equations.</p>

<p>Input</p>

<p>First line contains an integer TT, which indicates the number of test cases.<br /><br />
Every test case contains one line with nine integers, the i^{th}ith integer indicates the number of bricks of ii.<br /><br />
Limits<br />
1 \leq T \leq 301≤T≤30<br />
0 \leq \text{bricks number of each type} \leq 1000≤bricks number of each type≤100</p>

Output

For every test case, you should output 'Case #x: y', where x indicates the case number and counts from 1 and y is the result.

Sample

Inputcopy	Outputcopy

3 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 0 3 3 0 3 0 0 0 0

Case #1: 2 Case #2: 6 Case #3: 2

题意：给你1~9的数的个数，让你求形如x+y=z的柿子的个数（x，y，z都是个位数，任意一个数不同就算是一个不同的柿子）

<p>思路：打表一下可以知道，最终不同的柿子只有36个</p>

<p>然后用结构体记下每个柿子的数还有他们的总数</p>

<p>如果读入的数超过了这些数的个数，那么直接输出36就行</p>

<p>然后我们再进行dfs，找每个柿子能不能选就行了</p>


```cpp
/*

 .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |  ________    | || |  _________   | || | ____    ____ | || |     ____     | |
| | |_   ___ `.  | || | |_   ___  |  | || ||_   \  /   _|| || |   .'    `.   | |
| |   | |   `. \ | || |   | |_  \_|  | || |  |   \/   |  | || |  /  .--.  \  | |
| |   | |    | | | || |   |  _|  _   | || |  | |\  /| |  | || |  | |    | |  | |
| |  _| |___.' / | || |  _| |___/ |  | || | _| |_\/_| |_ | || |  \  `--'  /  | |
| | |________.'  | || | |_________|  | || ||_____||_____|| || |   `.____.'   | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'

*/
#include<iostream>
#include<algorithm>
#include<cstring>
#include<vector>
#include<set>
#include<map>
#include<queue>
#include<deque>
#include<cmath>
#include<stack>
#define int long long
#define lowbit(x) x&amp;(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int gcd(int a,int b) {
	return b? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
//int e[N],ne[N],h[N],idx,w[N];
/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/
const int N=2e5+10;
int n;
int cnt[12];
int num[12];
int ans;
struct name{
	int x,y,z;
}q[40];
void init(){//记录每个柿子和每个数用了几次
	int op=0;
	for(int i=1;i<=9;i++){
		for(int j=1;j<=9;j++){
			if(i<=9&amp;&amp;j<=9&amp;&amp;i+j<=9){
				cnt[i]++;
				cnt[j]++;
				cnt[i+j]++;
				q[++op]={i,j,i+j};
			}
		}
	}
}
void dfs(int i,int sum){//到第i个柿子选了sum个柿子
	ans=max(sum,ans);
	if(i>36){//如果大于36的话我们就剪枝
		return ;
	}
    if(sum+36-i+1<=ans) return ;//这步是最大值剪枝，当我们选了剩下的所有的柿子之后没超过当前的最大值，那么我们直接返回
	int x=q[i].x ,y=q[i].y ,z=q[i].z ;
	//选第i个柿子
	if(num[x]>0&amp;&amp;num[y]>0&amp;&amp;num[z]>0){//如果当前柿子的个数>0
		num[x]--;
		num[y]--;
		num[z]--;
		if(num[x]>=0 &amp;&amp; num[y]>=0 &amp;&amp; num[z]>=0)dfs(i+1,sum+1);//如果选了之后他们的个数不是负数，就进入下一个柿子，总数++
		num[x]++;
		num[y]++;
		num[z]++;//回溯
	}
	//不选第i个柿子
	dfs(i+1,sum);
}
signed main(){
	int t;
	init();
	scanf("%d",&amp;t);
	for(int p=1;p<=t;p++){
		for(int i=1;i<=9;i++)scanf("%d",&amp;num[i]);
		bool f=true;
		for(int i=1;i<=9;i++){
			if(num[i]<cnt[i]){
				f=false;
				break;
			}
		}
		if(f){
			printf("Case #%d: %d\n",p,36);
			continue;
		}
		ans=0;
		dfs(1,0);	//从第一个柿子开始，选了0个柿子	
		printf("Case #%d: %d\n",p,ans);
	}
	return 0;
}
```


<p></p>

## dfs各大题目类型

<p>1.遍历各个位置，并且记录每组遍历的路程</p>

<p>遍历各个位置的时候就在每个dfs（u）里遍历下一个dfs（u+1）。</p>

<p>记录路程用数组。</p>

<p>如果要求每个数只能用一次或者每个点只能走一次的话用一个bool或int数组来储存他的状态（遍历过或没遍历过）</p>

<p>如果问题有边界的情况，如给你了n个位置，或者是n*n的图我们遍历每一行的话，递归的出口就是当我们那层的数等于n，如果一个位置有多种情况（如能填多个数）的话，我们需要回溯操作的时候，先在dfs之前把状态修改，在dfs之后把状态复原。</p>

<p>例题1：n个数的全排列</p>

<p>题目：输入n，输出1-n的全排列</p>

<p>思路：我们可以按照位置编号一个一个搜，从0编号开始搜，递归的出口是这个位置的编号==n，而且在这个时候我们就可以输出记录路径的数组里存的数，然后我们再枚举从1到n的数，如果他没有被遍历的话我们就把这个数放到这个位置，修改这个数的状态和位置上的数，dfs他的下一个位置，当dfs递归出来之后我们需要把这个数的状态和这个位置的数恢复到原来的样子 。</p>

<p>代码实现如下：</p>

<p></p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cstring>
using namespace std;

bool st[105];//用来储存每个数的状态
int path[105];//用来记录每个位置所存的数
int n;
void dfs(int u){
	if(u==n){
		for(int i=0;i<n;i++){
			printf("%d ",path[i]);
		}
		printf("\n");
	}
	for(int i=1;i<=n;i++){
		if(!st[i]){
			path[u]=i;
			st[i]=true;
			dfs(u+1);
			st[i]=false;
			path[u]=0;
		}
	}
}
int main(){
	cin>>n;
	dfs(0);//从0这个位置开始搜
	
	return 0;
}
```


<p> 当然，我们要实现全排列的话，algorithm里有一个专门用来全排列的函数next_permutation:</p>

<p>他的作用是输出这个序列的下一个序列，如果没有下一个序列就返回0。那么我们可以先把一个数组从小到大排序之后保证这个是字典序最小的排列，然后我们用这个函数即可。</p>

<p>代码：</p>



```cpp
#include<algorithm>
#include<iostream>
#include<cstring>
using namespace std;

int a[105];
int n;
int main(){
	cin>>n;
	for(int i=0;i<n;i++){
		a[i]=i+1;
	}
	sort(a,a+n);
	do{
		for(int i=0;i<n;i++){
			printf("%d ",a[i]);
		}
		printf("\n");
	}while(next_permutation(a,a+n));
	
	return 0;
}
```


<p>当然这个函数是按升序的全排列，还有一个prev_permutation函数是输出这个序列的上一个序列，所以我们先把他按从大到小的顺序把这个序列排序，保证他是最大的序列，然后用prev_permutation即可。（代码略）</p>

<p>例子2：n皇后问题</p>

<p>n−n−皇后问题是指将 nn 个皇后放在 n×nn×n 的国际象棋棋盘上，使得皇后不能相互攻击到，即任意两个皇后都不能处于同一行、同一列或同一斜线上。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/0e020e8274b0e0799e60adbe0cb229c2.png" /></p>

<p>现在给定整数 nn，请你输出所有的满足条件的棋子摆法。</p>

<p>输入格式</p>

<p>共一行，包含整数 n。</p>

<p>输出格式</p>

<p>每个解决方案占 n 行，每行输出一个长度为 n 的字符串，用来表示完整的棋盘状态。</p>

<p>其中 
```cpp
.
```
 表示某一个位置的方格状态为空，
```cpp
Q
```
 表示某一个位置的方格上摆着皇后。</p>

<p>每个方案输出完成后，输出一个空行。</p>

<p><strong>注意：行末不能有多余空格。</strong></p>

<p>输出方案的顺序任意，只要不重复且没有遗漏即可。</p>

<p>数据范围</p>

<p>1≤n≤91≤n≤9</p>

<p>输入样例：</p>



```cpp
4

```


<p>输出样例：</p>



```cpp
.Q..
...Q
Q...
..Q.

..Q.
Q...
...Q
.Q..
```


<p> 思路：</p>

<p>方法1：我们可以按照每行的皇后应该放哪一列来搜，dfs的是行数，从第0行开始搜，当到第n行的时候我们就可以输出整个图。题目的要求是同一行同一列同一个对角线不能有皇后，所以我们可以开三个bool数组分别表示第i列有无皇后，对角线i有无皇后和反对角线有没有皇后，当每次搜到每一行时我们要判断对应的列数对角线数反对角线的地方有没有皇后，如果没有我们更改他的状态然后再搜他的下一行。</p>



```cpp
#include<algorithm>
#include<iostream>
#include<cstring>
using namespace std;
const int N=105;
int n;
char g[N][N];
bool col[N],ug[N],dug[N];//分别表示对应的列和对角线反对角线上有没有皇后的状态
void dfs(int u){
	if(u==n){
		for(int i=0;i<n;i++){
			printf("%s\n",g[i]);
		}
		printf("\n");
	}
	for(int i=0;i<n;i++){
		if(!col[i]&&!ug[u+i]&&!dug[n-u+i]){
			g[u][i]='Q';
			col[i]=ug[u+i]=dug[n-u+i]=true;
			dfs(u+1);
			g[u][i]='.';
			col[i]=ug[u+i]=dug[n-u+i]=false;
		}
	}
}

int main(){
	cin>>n;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			g[i][j]='.';
		}
	}
	dfs(0);
	return 0;
}
```


<p> 方法2：我们可以直接从00开始一个位置一个位置往下搜，开四个bool数组分别表示行列对角线反对角线的状态。每个位置我们有放和不放两个选择，当放的时候递归到下一层我们就把当前皇后数++，x不动，y++就可，当不放的时候我们的皇后数不变。递归的出口是x==n，当皇后数==n的时候我们就能输出这个图，否则不输出。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=105;
char g[N][N];
int col[N],row[N],ug[N],dug[N];
int n;
void dfs(int x,int y,int s){
	if(y==n){
		y=0;
		x++;
	}
	if(x==n){
		if(s==n){
			for(int i=0;i<n;i++){
				printf("%s\n",g[i]);
			}
			printf("\n");
		}
		
		return ;
	}
	dfs(x,y+1,s);
	
	if(!row[x]&&!col[y]&&!ug[x+y]&&!dug[n-x+y]){
		g[x][y]='Q';
		row[x]=col[y]=ug[x+y]=dug[n-x+y]=true;
		dfs(x,y+1,s+1);
		g[x][y]='.';
		row[x]=col[y]=ug[x+y]=dug[n-x+y]=false;
	}
	
}
int main(){
	cin>>n;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			g[i][j]='.';
		}
	}
	dfs(0,0,0);
	return 0;
}
```


<p>第二种：把所有点都遍历，搜符合要求的点（根据题意搜符合要求的点的话就不用再去设置递归出口了）</p>

<p>例子1：A - Oil Deposits（石油储藏）</p>

<p>GeoSurvComp地质勘测公司负责探测地下石油储藏。GeoSurvComp一次处理一大片矩形土地，并创建一个网格，将土地分成许多方形地块。然后，它分别分析每一个地块，使用传感设备来确定该地块是否含有石油。含有石油的地块被称为“口袋”。如果两个气穴相邻，那么它们是同一个油藏的一部分。石油储量可能相当大，并可能包含许多口袋。你的工作是确定一个网格中包含多少不同的石油储量。</p>

<p>投入</p>

<p>输入包含一个或多个格网。每个网格以包含m和n的一行开始，m和n是网格中的行数和列数，由一个空格分隔。如果m = 0，则表示输入结束；否则1 &lt;= m &lt;= 100且1 &lt;= n &lt;= 100。接下来是m行，每行n个字符(不包括行尾字符)。每个字符对应一个图，或者是`* '，代表没有油，或者是`@ '，代表一个油包。<br />
 </p>

输出

水平、垂直或对角相邻。一个油矿不会包含超过100个矿坑。

样品

投入copy	输出复制
1 1
*
3 5
*@*@*
**@**
*@*@*
1 8
@@****@*
5 5 
****@
*@@*@
*@**@
@@@*@
@@**@
0 0
0
1
2
2
思路：每次输入图之后遍历每个点，如果符合要求的话总数就++（作用是在第一个搜索点的时候统计数量，再搜这个点附近的符合要求的点的时候我们就不用加了，因为是一块油井），把这个点改成没有油的地方标识一下已经被搜过，（不用恢复状态是因为搜完之后就不用再搜了）然后搜这个点以中心的九宫格有没有符合要求的点，有的话就搜他。


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=200;
char g[N][N];
int ans;
int m,n;
bool qs(int x,int y){
	if(x>=0&&x<m&&y>=0&&y<n){
		return true;
	}
	return false;
}
void dfs(int x,int y){
	g[x][y]='*';//把这个点改为没有油的点来表示已经被搜过了
	for(int i=-1;i<=1;i++){
		for(int j=-1;j<=1;j++){//遍历以这个点为中心的九宫格
			int x1=x+i;
			int y1=y+j;
			if(qs(x1,y1)&&g[x1][y1]=='@'){//如果在矩阵内切符合要求就搜
				dfs(x1,y1);
			}
		}
	}
	
}
int main(){
	while(1){
		cin>>m>>n;
		if(m==0)break;
		for(int i=0;i<m;i++){
			for(int j=0;j<n;j++){
				cin>>g[i][j];
			}
		}
		ans=0;
		for(int i=0;i<m;i++){
			for(int j=0;j<n;j++){//遍历每个点
				if(g[i][j]=='@'){//第一个没搜过且符合要求的点处总数++
					ans++;
					dfs(i,j);//搜这个点
				}
			}
		}
		printf("%d\n",ans);
	}
	
	return 0;
}
```


<p>  例子2：单词接龙</p>

<p>单词接龙是一个与我们经常玩的成语接龙相类似的游戏，现在我们已知一组单词，且给定一个开头的字母，要求出以这个字母开头的最长的“龙”（每个单词都最多在“龙”中出现两次），在两个单词相连时，其重合部分合为一部分，例如 beast和 astonish，如果接成一条龙则变为 beastonish ，另外相邻的两部分不能存在包含关系，例如 at 和 atide 间不能相连。</p>

<h3>输入格式</h3>

<p>输入的第一行为一个单独的整数 n (n \le 20)n(n≤20) 表示单词数，以下 nn 行每行有一个单词，输入的最后一行为一个单个字符，表示“龙”开头的字母。你可以假定以此字母开头的“龙”一定存在。</p>

<h3>输出格式</h3>

<p>只需输出以此字母开头的最长的“龙”的长度。</p>

<h3>样例说明</h3>

连成的“龙”为 atoucheatactactouchoose

Sample 1

Inputcopy	Outputcopy
5
at
touch
cheat
choose
tact
a
23
思路：这个思路就是搜以d为头的字符串和其他字符串有没有重合的字符，当搜到d的话长度更新然后d使用的次数++，如果有的重合的字符话我们再更新他的长度之后搜那个跟d有重复字符的字符串。

<p>用一个string数组来储存输入的数，一个int数组记录一个单词被用了几次（最多只能用两次，当头当尾），然后用一个二维数组来记录两个字符串的重合字符的长度。</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N=200;
string a[N];//记录读入的单词
int g[N][N];//记录以字符串i为前面j为后面的两个字符重叠的长度
int ans;
int n;
int use[N];//记录每个单词使用的次数（每个单词可以用两次，所以当他小于2的时候就可以用
void dfs(string d,int last){//搜以d为前面的字符，i为前面字符编号
	int t=d.size();
	ans=max(ans,t);//更新长度
	use[last]++;//他的使用次数++
	for(int i=1;i<=n;i++){//遍历字符串，如果和d有重合部分且他的使用次数小于2就能用
		if(g[last][i]&&use[i]<2){
			dfs(d+a[i].substr(g[last][i]),i);//传入改变之后把后面的字符脸上的字符串，传入后面字符串的编号
		}
	}
	use[last]--;//当出来的时候要回溯，（因为可能有好几个以op开头的字符串，所以我们搜完之后要把搜过的恢复以免影响下次搜索
	
}
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	char op;
	cin>>op;
	for(int i=1;i<=n;i++){//先算两个单词重叠的长度
		for(int j=1;j<=n;j++){
			string q1=a[i];
			string q2=a[j];
			for(int k=1;k<min(q1.size(),q2.size());k++){//长度从一到他们两个最小长度数-1枚举（就过滤了重合部分与其中一个字符串相等的情况
				if(q1.substr(q1.size()-k,k)==q2.substr(0,k)){
					g[i][j]=k;//如果想等我们就记录长度然后直接跳出循环
					break;
				}
			}
		}
	}
	for(int i=1;i<=n;i++){
		if(a[i][0]==op){//如果这个单词的头字母是问的字母
			dfs(a[i],i);//搜这个单词，传入这个单词和他的编号
		}
	}
	printf("%d",ans);
	return 0;
}
```


<p>3.记忆化搜索：当点搜过就返回这个点的数据，如果没被搜过就继续搜</p>

<p>例：滑雪</p>

<p>Michael喜欢滑雪百这并不奇怪， 因为滑雪的确很刺激。可是为了获得速度，滑的区域必须向下倾斜，而且当你滑到坡底，你不得不再次走上坡或者等待升降机来载你。Michael想知道载一个区域中最长底滑坡。区域由一个二维数组给出。数组的每个数字代表点的高度。下面是一个例子</p>


 1  2  3  4 5

16 17 18 19 6

15 24 25 20 7

14 23 22 21 8

13 12 11 10 9

<p><br />
一个人可以从某个点滑向上下左右相邻四个点之一，当且仅当高度减小。在上面的例子中，一条可滑行的滑坡为24-17-16-1。当然25-24-23-...-3-2-1更长。事实上，这是最长的一条。</p>

<p>Input</p>

<p>输入的第一行表示区域的行数R和列数C(1 &lt;= R,C &lt;= 100)。下面是R行，每行有C个整数，代表高度h，0&lt;=h&lt;=10000。</p>

<p>Output</p>

<p>输出最长区域的长度。</p>

Sample

Inputcopy	Outputcopy
5 5
1 2 3 4 5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
25
 思路：读入高度之后，设置一个二维数组f[i][j]数组来表示以i，j点为起点的所有路径的最大长度，并先初始化为-1，那么i，j这个点的最大长度就是他的左右前后点为起点的最大长度+1取max，而且我们要注意，f最小为1，当这个点不是-1时说明已经算出来过了直接返回，如果是-1我们就开始搜他的前后左右，注意搜的时候要判断他的前后左右的点的高度是否小于他，小于才能执行。



```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

int r,c;
const int N=110;
int h[N][N];//记录高度
int f[N][N];//记录以ij为起点的路径的最大长度
int ans;
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int dfs(int x,int y){
	if(f[x][y]!=-1)return f[x][y];//当被算过就返回
	f[x][y]=1;//最小为1（只有本身一格
	for(int i=0;i<4;i++){//然后遍历他的前后左右，如果满足低于他的高度就比较取max
		int x1=x+dx[i];
		int y1=y+dy[i];
		if(x1>=1&&x1<=r&&y1>=1&&y1<=c&&h[x][y]>h[x1][y1]){
			f[x][y]=max(f[x][y],dfs(x1,y1)+1);
		}
	}
	return f[x][y];
}
int main(){
	cin>>r>>c;
	for(int i=1;i<=r;i++){
		for(int j=1;j<=c;j++){
			cin>>h[i][j];
		}
	}
	ans=0;
	memset(f,-1,sizeof f);
	for(int i=1;i<=r;i++){
		for(int j=1;j<=c;j++){
			ans=max(ans,dfs(i,j));
		}
	}
	cout<<ans;
	return 0;
}
```


<p></p>


## 小朋友崇拜圈
原题链接：https://www.lanqiao.cn/problems/182/learning/?page=1&first_category_id=1&sort=students_count&name=%E5%B0%8F%E6%9C%8B%E5%8F%8B  
题意：  
有n个小朋友，每个小朋友都有一个崇拜的人，也可以是自己。对于每个小朋友，让他崇拜的人做他的右手边。那么求组成的圈的最多的人数是多少。  
思路：  
因为对于每个圈来说，如果想组成圈，那么起点的小朋友必须被人崇拜。  
那么我们枚举每个小朋友当圈头，然后对他进行dfs。  
记录当前遍历的小朋友的编号和圈头小朋友的编号和当前遍历到的人数。如果当前小朋友的崇拜对象是圈头小朋友，那么说明从圈头小朋友到当前小朋友组成一个圈，那么就找到了一个圈记录一下大小。如果不是的话，就对当前小朋友崇拜的人进行dfs。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1e5+10;
int n;
int fa[N];
int con[N];
bool st[N];//记录是否走过，因为一个小朋友只能崇拜一个人，那么每个小朋友只能出现在一个圈中，如果遍历过就不用遍历了
int ans;
void dfs(int u,int str,int size){//当前小朋友编号，起始小朋友编号，当前遍历到的小朋友的个数
	if(fa[u]==str){//可以组成一个圈
		ans=max(ans,size);
		return ;
	}
	int v=fa[u];
	if(!st[v]){//如果没有遍历过那么我们遍历
		st[v]=true;
		dfs(v,str,size+1);
	}
}
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>fa[i];
		con[fa[i]]++;
	}
	ans=0;
	for(int i=1;i<=n;i++){
		if(!st[i]&&con[i]){
			dfs(i,i,1);
		}
	}
	cout<<ans<<endl;
	return 0;
}
```














## 龙龙送外卖
原题链接：  
https://pintia.cn/problem-sets/994805046380707840/exam/problems/1518582482059845632  
题意：  
有一个树状的地图，需要从根节点开始走，有m个点依次出现，求每个点出现之后遍历所有出现过的点的最短距离（不用回到根节点）。  
思路：  
当用回到根节点的时候，距离是走过的所有路径的两倍，那么不用回到原点就是减去离原点最远的点到原点的距离。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+20;
int p[N];
int n,m;
int root;
int d[N];
int s,mx;
bool st[N];
int dfs(int u){
	if(p[u]==-1||d[u]>0) return d[u];
	s++;
	d[u]=dfs(p[u])+1;
	return d[u];
}
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>p[i];
		if(p[i]==-1) root=i;
	}
	s=mx=0;
	for(int i=1;i<=m;i++){
		int x;
		cin>>x;
		mx=max(mx,dfs(x));
		cout<<2*s-mx<<endl;
	}
	return 0;
}
```


