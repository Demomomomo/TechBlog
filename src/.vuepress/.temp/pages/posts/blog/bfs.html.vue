<template><div><h2 id="bfs总结" tabindex="-1"><a class="header-anchor" href="#bfs总结" aria-hidden="true">#</a> bfs总结</h2>
<p>一般就是求最短距离，思路就是把初始状态加入队列中，写一个while循环，条件是队列不空，每次取队头然后拓展队头。一般需要一个额外的数组来记录每个位置的距离，并需要在刚开始的时候初始化。</p>
<p>例题：走迷宫</p>
<p>给定一个 n×mn×m 的二维整数数组，用来表示一个迷宫，数组中只包含 00 或 11，其中 00 表示可以走的路，11 表示不可通过的墙壁。</p>
<p>最初，有一个人位于左上角 (1,1)(1,1) 处，已知该人每次可以向上、下、左、右任意一个方向移动一个位置。</p>
<p>请问，该人从左上角移动至右下角 (n,m)(n,m) 处，至少需要移动多少次。</p>
<p>数据保证 (1,1)(1,1) 处和 (n,m)(n,m) 处的数字为 00，且一定至少存在一条通路。</p>
<p>输入格式</p>
<p>第一行包含两个整数 nn 和 mm。</p>
<p>接下来 nn 行，每行包含 mm 个整数（00 或 11），表示完整的二维数组迷宫。</p>
<p>输出格式</p>
<p>输出一个整数，表示从左上角移动至右下角的最少移动次数。</p>
<p>数据范围</p>
<p>1≤n,m≤1001≤n,m≤100</p>
<p>输入样例：</p>
<pre>
<code>5 5
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 1 0
</code></pre>
<p>输出样例：</p>
<pre>
<code>8</code></pre>
<p>思路：用一个g数组存图，用一个d数组来存每个点到原点的距离，并初始化为-1，先将0.0这个点加入队头，当队头不空的时候取出队头然后遍历他的上下左右，如果他能走而且没有被走过我们就把他的距离更新并把这个点加入队列中，最后返回重点的d。</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
using namespace std;
const int N=105;
typedef pair&lt;int,int&gt; pii;
int g[N][N];
int d[N][N];
int n,m;
pii q[N*N];
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int bfs(){
	q[0]={0,0};
	d[0][0]=0;
	int hh=0,tt=0;
	while(hh&lt;=tt){
		pii t=q[hh++];
		for(int i=0;i&lt;4;i++){
			int x=t.first +dx[i];
			int y=t.second +dy[i];
			if(x&gt;=0&amp;&amp;x&lt;n&amp;&amp;y&gt;=0&amp;&amp;y&lt;m&amp;&amp;g[x][y]==0&amp;&amp;d[x][y]==-1){
				q[++tt]={x,y};
				d[x][y]=d[t.first ][t.second ]+1;
			}
		}
	}
	return d[n-1][m-1];
}
int main(){
	cin&gt;&gt;n&gt;&gt;m;
	for(int i=0;i&lt;n;i++){
		for(int j=0;j&lt;m;j++){
			cin&gt;&gt;g[i][j];
		}
	}
	memset(d,-1,sizeof d);
	cout&lt;&lt;bfs();
	return 0;
}</code></pre>
<p>如果我们想记录一下路径的话，只需要用一个数组在更新的时候来存他上一个点就可以了</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
using namespace std;
const int N=105;
typedef pair&lt;int,int&gt; pii;
int g[N][N];
int d[N][N];
int n,m;
pii q[N*N],in[N][N];
int dx[4]={-1,1,0,0};
int dy[4]={0,0,-1,1};
int bfs(){
	q[0]={0,0};
	d[0][0]=0;
	int hh=0,tt=0;
	while(hh&lt;=tt){
		pii t=q[hh++];
		for(int i=0;i&lt;4;i++){
			int x=t.first +dx[i];
			int y=t.second +dy[i];
			if(x&gt;=0&amp;&amp;x&lt;n&amp;&amp;y&gt;=0&amp;&amp;y&lt;m&amp;&amp;g[x][y]==0&amp;&amp;d[x][y]==-1){
				q[++tt]={x,y};
				in[x][y]=t;
				d[x][y]=d[t.first ][t.second ]+1;
			}
		}
	}
	int x=n-1,y=m-1;
	while(x||y){
		printf("%d %d\n",x,y);
		auto t=in[x][y];
		x=t.first ;
		y=t.second ;
	}
	return d[n-1][m-1];
}
int main(){
	cin&gt;&gt;n&gt;&gt;m;
	for(int i=0;i&lt;n;i++){
		for(int j=0;j&lt;m;j++){
			cin&gt;&gt;g[i][j];
		}
	}
	memset(d,-1,sizeof d);
	cout&lt;&lt;bfs();
	return 0;
}</code></pre>
<p></p>
<h2 id="p1126-机器人搬重物" tabindex="-1"><a class="header-anchor" href="#p1126-机器人搬重物" aria-hidden="true">#</a> P1126 机器人搬重物</h2>
<p>机器人移动学会（<code>RMI</code>）现在正尝试用机器人搬运物品。机器人的形状是一个直径1.61.6米的球。在试验阶段，机器人被用于在一个储藏室中搬运货物。储藏室是一个 N \times MN×M 的网格，有些格子为不可移动的障碍。机器人的中心总是在格点上，当然，机器人必须在最短的时间内把物品搬运到指定的地方。机器人接受的指令有：向前移动11步（<code>Creep</code>）；向前移动2步（<code>Walk</code>）；向前移动33 步（<code>Run</code>）；向左转（<code>Left</code>）；向右转（<code>Right</code>）。每个指令所需要的时间为11 秒。请你计算一下机器人完成任务所需的最少时间。</p>
<h2>输入格式</h2>
<p>第一行为两个正整数N,M(N,M \le 50)N,M(N,M≤50)，下面NN行是储藏室的构造，00表示无障碍，11表示有障碍，数字之间用一个空格隔开。接着一行有44个整数和11个大写字母，分别为起始点和目标点左上角网格的行与列，起始时的面对方向（东EE，南SS，西WW，北NN），数与数，数与字母之间均用一个空格隔开。终点的面向方向是任意的。</p>
<h2>输出格式</h2>
<p>一个整数，表示机器人完成任务所需的最少时间。如果无法到达，输出-1−1。</p>
<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/8d6cf06d92d97fb77851917f5f2a1e1e.png" /></p>
<h2>输入输出样例</h2>
<p><strong>输入 #1</strong>复制</p>
<pre>
9 10
0 0 0 0 0 0 1 0 0 0
0 0 0 0 0 0 0 0 1 0
0 0 0 1 0 0 0 0 0 0
0 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 1 0 0 0
0 0 0 0 0 1 0 0 0 0
0 0 0 1 1 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
1 0 0 0 0 0 0 0 1 0
7 2 2 7 S</pre>
<p><strong>输出 #1</strong>复制</p>
<pre>
12</pre>
<p> 思路：读入的是格子，机器人走的是格点，所以我们需要用两个数组来分别存格子和格点</p>
<p>因为机器人有半径，所以最外圈的格点不能走</p>
<p>格子下标从1开始，格点下标从0开始</p>
<p>假设读入的格子的坐标是xy，那么不能走的格点是(x,y) (x-1,y) (x,y-1) (x-1,y-1)</p>
<p>我们用一个结构体来储存当前的坐标，方向和最短时间</p>
<p>用顺时针方向上右下左这四个方向分别编号1 2 3 4</p>
<p>每个方向的x的变化值用数组dx来表示，y的变化值用dy来表示</p>
<p>因为左转右转也需要花费时间，那么我们就写成顺时针分别转1 2 3 4次，那么每次的最短时间就是1 2 1 0（顺时针转1次相当于向右转一次，转两次相当于向右或左转两次，转三次相当于向左转一次，转四次相当于没有转）</p>
<p>每次取队头，列举一下转几次，假设转i次，那么转之后的方向就是原来的方向+i，如果&gt;4就减去4</p>
<p>假设转之后方向是zhuan，那么我们再列举走j（1-3）步，那么坐标就是（x+dx[zhuan]*j,y+dy[zhuan]*j）</p>
<p>然后就是判断是否出界以及是不是0</p>
<p>.如果符合条件，判断他是不是更短的时间，如果是的话更新一下入队</p>
<pre>
<code class="hljs">#include&lt;bits/stdc++.h&gt;
#include&lt;queue&gt;
using namespace std;

int n,m;
int dx[5]={0,-1,0,1,0};
int dy[5]={0,0,1,0,-1};
int abc[5]={0,1,2,1,0};
int a[60][60];
int f[60][60];
int b[60][60];
struct name{
	int x,y;
	int op;
	int t;
};
void change(){
	for(int i=1;i&lt;=n;i++){
		for(int j=1;j&lt;=m;j++){
			if(b[i][j]==1){
				a[i-1][j-1]=1;
				a[i-1][j]=1;
				a[i][j-1]=1;
				a[i][j]=1;
			}
		}
	}
}
int main(){
	cin&gt;&gt;n&gt;&gt;m;
	int op;
	for(int i=1;i&lt;=n;i++){
		for(int j=1;j&lt;=m;j++){
			cin&gt;&gt;b[i][j];
		}
	}
	int sx,sy,ex,ey;
	cin&gt;&gt;sx&gt;&gt;sy&gt;&gt;ex&gt;&gt;ey;
	char s;
	cin&gt;&gt;s;
	change();
	if(a[sx][sy]==1||a[ex][ey]==1){
		printf("-1");
		return 0;
	}
	if(sx==ex&amp;&amp;sy==ey){
		printf("0");
		return 0;
	}
	if(s=='N')op=1;
	else if(s=='E')op=2;
	else if(s=='S')op=3;
	else op=4;
	name start;
	start={sx,sy,op,0};
	queue&lt;name&gt; q;
	q.push(start);
	while(q.size()){
		name u=q.front();
		q.pop();
		for(int i=1;i&lt;=4;i++){
			int zhuan=u.op +i;
			if(zhuan==5)zhuan=1;
			if(zhuan==6)zhuan=2;
			if(zhuan==7)zhuan=3;
			if(zhuan==8)zhuan=4;
			int mi=abc[i];
			for(int j=1;j&lt;=3;j++){
				int xx=u.x +dx[zhuan]*j;
				int yy=u.y +dy[zhuan]*j;
				if(xx&lt;=0||xx&gt;=n||yy&lt;=0||yy&gt;=m)break;
				if(a[xx][yy]==1)break;
				if(f[xx][yy]==0||f[xx][yy]&gt;u.t +mi+1){
					f[xx][yy]=u.t +mi+1;
					name l={xx,yy,zhuan,f[xx][yy]};
					q.push(l);
				}
			}
		}
	}
	if(f[ex][ey]==0)printf("-1");
	else printf("%d",f[ex][ey]);
	return 0;
}</code></pre>
<p></p>
</div></template>


