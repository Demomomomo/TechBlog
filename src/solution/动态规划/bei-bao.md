---
title: 背包

category:
  - algorithm
tag:
  - 动态规划
---


## 1432背包again

<div>
<div>
<div>
<div>
<div>
<p>Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。</p>
</div>
</div>

<div>
<div><strong>输入</strong></div>

<div>
<p>第一行一个正整数T(T &lt;= 100)，表示有T组数据。</p>

<p>每组数据输入格式如下：</p>

<p>第一行为一个正整数N(N&lt;=100)，表示物品个数。</p>

<p>第二行N个正整数，表示每个物品的价值vi(1&lt;=vi&lt;=1000000)</p>
</div>
</div>

<div>
<div><strong>输出</strong></div>

<div>
<p>共输出T行，即每组数据相应答案。</p>
</div>
</div>

<div>
<div><strong>样例输入 <a>Copy</a></strong></div>

<div>

```cpp
2
3
2 4 8
4
1 2 4 8

```

</div>
</div>

<div>
<div><strong>样例输出 <a>Copy</a></strong></div>

<div>

```cpp
1
16

```

</div>
</div>
</div>
</div>
</div>

<p> 思路：首先我们先把最小能凑出来的数min赋值是1，将数组从小到大排序之后，遍历数组，看看能不能再凑出别的连续的值。当a[i]&lt;=min的时候,我们更新min=min+a[i]。当a[i]&gt;min的时候，更新不了。（假如我们最小能凑出来的是1，a[i]=3的话，我们还是凑不出来2的情况，所以只用考虑a[i]&lt;=min的情况就可）</p>

<p>原因：假如我们这个时候的min是4，说明从1-3的数我们都能凑出来，那么我们加上这个a[i]的话,从a[i]+1~a[i]+3也能凑出来，所以我们最小凑不出来的数是a[i]+4也就是a[i]+min.</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

void sove(){
	int n;
	int v[105];
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d",&v[i]);
	}
	sort(v,v+n);
	int min=1;
	for(int i=0;i<n;i++){
		if(v[i]<=min){
			min+=v[i];
		}
	}
	printf("%d\n",min);
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


<p></p>

## 背包问题（01，完全，多重，分组）

<p>dp问题一般从两个方面考虑：1.状态表示 2.状态计算</p>

<p>1.01背包</p>

<p>有一个容量为v的背包，有n个物体，每个物体的体积是vi，价值是wi，在背包能装下的情况下找出最大能装多少价值的物品。（每件只有一个）</p>

<p>1.状态表示： f[i][j]这个形式表示的是从前i个物品里选，最大体积不超过j的方法的集合</p>

<p>这个数储存的是这个状态的某种属性：如最大价值，最小价值，在本题是最大价值</p>

<p>2.状态计算：最后求的状态应该是f[n][v]</p>

<p>f[i][j]可以划分为两个状态的集合：一种是不选i，一种是不选i</p>

<p>1.不选i的状态表示是f[i-1][j]（从前i-1个物品中选总体积不超过j的所有选择方法的集合的最大价值）</p>

<p>2.选i的状态表示是f[i-1][j-vi]+wi（前i-1个物品中选总体积不超过j-vi（给i留个体积确保他能装进去）的状态的最大价值最后再加上i的价值wi就说明最后的最大价值里一定选了i）。但是这个状态有一个条件，那就是j&gt;=vi，意思是他要求最大不超过的体积一定要比i的体积大才能选i，不然就装不了i</p>

<p>我们要求最大值，这两个状态加起来就是总情况，且两个状态求的都是最大值，所以两个状态取max就是所求f[i][j]的值，即</p>

<p>f[i][j]=max (f[i-1][j] , f[i-1][j-vi]+ wi)</p>

<p>最朴素的二维代码是</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,m;
int v[1100],w[1100];
int f[1100][1110];
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d%d",&v[i],&w[i]);
	}
	for(int i=1;i<=n;i++){//因为i=0时表示的是从前0件物品中选，都是0所以从1开始
		for(int j=0;j<=m;j++){
			f[i][j]=f[i-1][j];//这个状态一定存在
			if(j>=v[i])f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);//**
		}
	}
	printf("%d",f[n][m]);
	return 0;
}
```


<p>欧莫，我突然发现//**的地方max里的f[i][j]写成f[i-1][j]也可以，因为他们俩值一样。所以我记的话为了保持一致就全i-1好了</p>

<p> 这个是二维的，计算一般会超时，所以我们来把他进行一个优化，即删掉【i】这一维，当删掉i这一维时，变成了：</p>


```cpp
for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			f[j]=f[j];//恒等式，可直接删除，但是删除之后的下面那个式子和原来表达的不一样
			if(j>=v[i])f[j]=max(f[j],f[j-v[i]]+w[i]);//这个式子中的j-v[i]恒小于j，所以在i-1层被算过了，我们要处理这种情况只用把j反转过来就好了，即：j=m,j>=v[i],j--
		}
	}
```


<p>最终优化的版本是：</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int f[1100];
int v[1100],w[1100];
int main(){
	int n,m;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>v[i]>>w[i];
	}
	for(int i=1;i<=n;i++){
		for(int j=m;j>=v[i];j--){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}
	printf("%d",f[m]);
	return 0;
}
```


<p>2.完全背包问题</p>

<p>题干同01背包，不同的是每件有无数个。</p>

<p>1.状态表示：因为每种有无数个物品，但是背包的能装的体积是有限的，所以他最多能装v/v[i]个i物品，，设他装k个i物品，那么不含i的状态表示就是f[i-1][j]，含k个i的状态表示是f[i-1][j-k*v[i]]+k*w[i],很容易发现当k=0时就是f[i-1][j],所以我们可以把他总结成通式：f[i-1][j-k*v[i]]+k*w[i],然后再枚举k从0到v/v[i]即可。</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/b0ebf3fb6c5943d2a0cc294e3df17dbd.png" /></p>

<p></p>

<p>最朴素的代码（但是会t，只是用来理解）</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,m;
int v[1100],w[1100];
int f[1100][1110];
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d%d",&v[i],&w[i]);
	}
	for(int i=1;i<=n;i++){//因为i=0时表示的是从前0件物品中选，都是0所以从1开始
		for(int j=0;j<=m;j++){
			for(int k=0;k*v[i]<=j;k++){
				f[i][j]=max(f[i][j],f[i-1][j-k*v[i]]+k*w[i]);
			}
		}
	}
	printf("%d",f[n][m]);
	return 0;
}
```


<p> 他t的原因是三层循环，所以我们优化的时候考虑删掉一层循环，考虑吧k的那层循环删掉。</p>

<p>我们先看一下f[i][j]包含的状态是什么：</p>

<p>f[i][j]=max(f[i-1][j], f[i-1][j-vi]+w, f[i-1][j-2*vi]+2*w....)</p>

<p>(不含物品i，含一个物品i，含两个物品i....这所有情况集合的最大值）</p>

<p>再看一下f[i][j-vi]包含的状态是什么：</p>

<p>f[i][j-v]=max(f[i-1][j-v] ,f[i-1][j-2*vi]+w ,f[i-1][j-3*vi]+2*w...)</p>

<p>(不含物品i，含一个物品i，含两个物品i....这所有情况集合的最大值）</p>

<p>对比这两个式子：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/4da93efa19254a0dac8c1dc003c06a4a.png" /></p>

<p> 可以总结出最后的式子与k无关：</p>

<p>f[i][j]=max(f[i-1][j],f[i][j-vi]+w)</p>

<p>但是f[i][j-vi]+w存在的情况是有条件的：j&gt;=vi</p>

<p>所以完成了优化，代码是</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,m;
int v[1100],w[1100];
int f[1100][1110];
int main(){
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d%d",&v[i],&w[i]);
	}
	for(int i=1;i<=n;i++){//因为i=0时表示的是从前0件物品中选，都是0所以从1开始
		for(int j=0;j<=m;j++){
			f[i][j]=f[i-1][j];
			if(j>=v[i])f[i][j]=max(f[i][j],f[i][j-v[i]]+w[i]);
		}
	}
	printf("%d",f[n][m]);
	return 0;
}
```


<p></p>

<p> 这里就要对01背包和完全背包来个对比了，两个代码唯一的区别就是01是从i-1层更新的，完全是从i层开始更新的。</p>

<p>我们要进行优化，把他优化成一维的话，因为都是第i层，所以直接把他i那一维删了就可以了。 </p>


```cpp
for(int i=1;i<=n;i++){
		for(int j=v[i];j<=m;j++){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}

```


<p>多重背包问题：有n个物品，背包容量是m，第i个物品最多有si个，体积是vi，价值是wi，问背包最大价值能装多少。</p>

<p>思路和完全背包差不多，但是不同的是k的范围，完全背包是当k*v[i]&lt;=m时循环，而这个给定了最大数量s[i]，所以条件变为k&lt;=s[i]。</p>


```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int f[105][105];
int s[105];
int v[105];
int w[105];
int n,m;
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>v[i]>>w[i]>>s[i];
	}
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			for(int k=0;k<=s[i]&&k*v[i]<=j;k++){
				f[i][j]=max(f[i][j],f[i-1][j-k*v[i]]+k*w[i]);
			}
		}
	}
	printf("%d",f[n][m]);
	return 0;
}
```


<p> 但是这样肯定会t，所以我们需要把他优化一下。</p>

<p>优化的方式就是二进制优化，一共有n个，我们可以把他分为1.2.4.8...2^k个一组，然后我们就可以用这么多组拼凑出来n，但是注意我们要保证1+2+4+...+2^k小于等于n，如果大于的话就超过了n，不符合要求，如果小于的话我们求出s=n-（1+2+4+...+2^k），然后就能拿1.2.4...2^k.s，这些数来凑n了，这样按二进制分组之后再做一遍01背包问题就能解决了。</p>


```cpp
#include<iostream>
#include<algorithm>
using namespace std;
const int N=25000;
int f[N];
int v[N];
int w[N];
int n,m;
int main(){
	cin>>n>>m;
	int cnt=0;
	for(int i=1;i<=n;i++){
		int v1,w1,s1;
		cin>>v1>>w1>>s1;
		int k=1;
		while(k<=s1){
			cnt++;
			v[cnt]=v1*k;
			w[cnt]=w1*k;
			s1-=k;
			k*=2;
		}
		if(s1>0){
			cnt++;
			v[cnt]=s1*v1;
			w[cnt]=s1*w1;
		}
	}
	for(int i=1;i<=cnt;i++){
		for(int j=m;j>=v[i];j--){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}
	printf("%d",f[m]);
	return 0;
}
```


<p>分组背包问题：有n组物品，有一个最大体积为m的背包，每组有si种物品，每种物品的价值是w体积是w，且每组里只能挑一个物品，求最大价值。</p>

<p>将每组的物品当成01背包来做就好了。</p>

<p>.</p>


```cpp
#include<iostream>
#include<algorithm>
using namespace std;

int f[30000];
int s[105];
int v[105][105];
int w[105][105];
int main(){
	int n,m;
	cin >>n>>m;
	for(int i=1;i<=n;i++){
		cin>>s[i];//输入每组的个数
		for(int j=0;j<s[i];j++){//在各组的编号
			cin>>v[i][j]>>w[i][j];
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=m;j>=0;j--){//01背包模型，只能选一个
			for(int k=0;k<s[i];k++){//在每组的编号
				if(v[i][k]<=j){//当能装下才能更新
					f[j]=max(f[j],f[j-v[i][k]]+w[i][k]);
				}
			}
		}
	}
	printf("%d",f[m]);
	return 0;
}
```


<p>还有一些问题是问你装满背包的话最大价值是多少，如果不能装满输出no的那种，我们就把f全都赋值成负无穷。f[0]=0，然后剩下代码和上面一样，如果fm输出的是负无穷的话就表示不能把fn装满，直接输出no。</p>

## P1064 [NOIP2006 提高组] 金明的预算方案

<p>金明今天很开心，家里购置的新房就要领钥匙了，新房里有一间金明自己专用的很宽敞的房间。更让他高兴的是，妈妈昨天对他说：“你的房间需要购买哪些物品，怎么布置，你说了算，只要不超过 nn 元钱就行”。今天一早，金明就开始做预算了，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：</p>

<table><thead><tr><th>主件</th>
			<th>附件</th>
		</tr></thead><tbody><tr><td>电脑</td>
			<td>打印机，扫描仪</td>
		</tr><tr><td>书柜</td>
			<td>图书</td>
		</tr><tr><td>书桌</td>
			<td>台灯，文具</td>
		</tr><tr><td>工作椅</td>
			<td>无</td>
		</tr></tbody></table><p>如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 00 个、11 个或 22 个附件。每个附件对应一个主件，附件不再有从属于自己的附件。金明想买的东西很多，肯定会超过妈妈限定的 nn 元。于是，他把每件物品规定了一个重要度，分为 55 等：用整数 1 \sim 51∼5 表示，第 55 等最重要。他还从因特网上查到了每件物品的价格（都是 1010 元的整数倍）。他希望在不超过 nn 元的前提下，使每件物品的价格与重要度的乘积的总和最大。</p>

<p>设第 jj 件物品的价格为 v_jvj​，重要度为w_jwj​，共选中了 kk 件物品，编号依次为 j_1,j_2,\dots,j_kj1​,j2​,…,jk​，则所求的总和为：</p>

<p>v_{j_1} \times w_{j_1}+v_{j_2} \times w_{j_2}+ \dots +v_{j_k} \times w_{j_k}vj1​​×wj1​​+vj2​​×wj2​​+⋯+vjk​​×wjk​​。</p>

<p>请你帮助金明设计一个满足要求的购物单。</p>

<h2>输入格式</h2>

<p>第一行有两个整数，分别表示总钱数 nn 和希望购买的物品个数 mm。</p>

<p>第 22 到第 (m + 1)(m+1) 行，每行三个整数，第 (i + 1)(i+1) 行的整数 v_ivi​，p_ipi​，q_iqi​ 分别表示第 ii 件物品的价格、重要度以及它对应的的主件。如果 q_i=0qi​=0，表示该物品本身是主件。</p>

<h2>输出格式</h2>

<p>输出一行一个整数表示答案。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>

<pre>
1000 5
800 2 0
400 5 1
300 5 1
400 3 0
500 2 0
</pre>

<p><strong>输出 #1</strong>复制</p>

<pre>
2200</pre>

<h2>说明/提示</h2>

<p>数据规模与约定</p>

<p>对于全部的测试点，保证 1 \leq n \leq 3.2 \times 10^41≤n≤3.2×104，1 \leq m \leq 601≤m≤60，0 \leq v_i \leq 10^40≤vi​≤104，1 \leq p_i \leq 51≤pi​≤5，0 \leq q_i \leq m0≤qi​≤m，答案不超过 2 \times 10^52×105。</p>

<p>思路：一个主件有0-2个附件，买附件的话一定要买主件，买主件不一定需要买附件，那么我们就从买主件i开始入手，有四种情况：1.不够买主件i 2.只能买主件i 3.能买主件i和附件1 4.能买主件i和附件2。那么我们就根据这四种情况，用一个二维数组v[i][j]来记录编号为i的j主件或附件的价格，当j==0时是记录编号为i的主件加附件的个数，当j==1时表示的是主件，j==2表示的是附件1，j==3表示的是附件2。然后再用一个二维数组p[i][j]来表示编号为i的j主件或附件的价格×重要值，p[i][j]表示编号为i，当j==0时表示的编号为i的主件+附件的数量，当j==1时表示主件的价格×重要值，当j==2时表示附件1的价格×重要值，j==3时表示附件2的价格×重要值。</p>

<p>然后用01背包问题一个个枚举价格是否大于那四种情况然后更新就可以了。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>

using namespace std;
int n,m;
int f[32005];
int v[65][4];
int p[65][4];
int main(){
	cin>>m>>n;
	for(int i=1;i<=n;i++){
		int x,y,z;
		cin>>x>>y>>z;
		if(z==0){
			v[i][++v[i][0]]=x;
			p[i][++p[i][0]]=x*y;
		}else{
			v[z][++v[z][0]]=x;
			p[z][++p[z][0]]=x*y;
		}
	}
	for(int i=1;i<=n;i++){
		if(v[i][0]==0)continue;
		for(int j=m;j>=v[i][1];j--){
			f[j]=max(f[j],f[j-v[i][1]]+p[i][1]);
			if(v[i][0]>=2&&j>=v[i][1]+v[i][2]){
				f[j]=max(f[j],f[j-v[i][1]-v[i][2]]+p[i][1]+p[i][2]);
			}
			if(v[i][0]>=3&&j>=v[i][1]+v[i][3]){
				f[j]=max(f[j],f[j-v[i][1]-v[i][3]]+p[i][1]+p[i][3]);
			}
			if(v[i][0]>=3&&j>=v[i][1]+v[i][2]+v[i][3]){
				f[j]=max(f[j],f[j-v[i][1]-v[i][2]-v[i][3]]+p[i][1]+p[i][2]+p[i][3]);
			}
		}
		
	}
	cout<<f[m];
	return 0;
}
```


<p></p>

## P1156 垃圾陷阱

<h2>题目描述</h2>

<p>卡门――农夫约翰极其珍视的一条<code>Holsteins</code>奶牛――已经落了到“垃圾井”中。“垃圾井”是农夫们扔垃圾的地方，它的深度为D(2 \le D \le 100)D(2≤D≤100)英尺。</p>

<p>卡门想把垃圾堆起来，等到堆得与井同样高时，她就能逃出井外了。另外，卡门可以通过吃一些垃圾来维持自己的生命。</p>

<p>每个垃圾都可以用来吃或堆放，并且堆放垃圾不用花费卡门的时间。</p>

<p>假设卡门预先知道了每个垃圾扔下的时间t(0&lt; t \le 1000)t(0&lt;t≤1000)，以及每个垃圾堆放的高度h(1 \le h \le 25h(1≤h≤25)和吃进该垃圾能维持生命的时间f(1 \le f \le 30)f(1≤f≤30)，要求出卡门最早能逃出井外的时间，假设卡门当前体内有足够持续1010小时的能量，如果卡门1010小时内没有进食，卡门就将饿死。</p>

<h2>输入格式</h2>

<p>第一行为22个整数，DD和 G (1 \le G \le 100)G(1≤G≤100)，GG为被投入井的垃圾的数量。</p>

<p>第二到第G+1G+1行每行包括33个整数：T (0 &lt; T &lt;= 1000)T(0&lt;T&lt;=1000)，表示垃圾被投进井中的时间；F (1 \le F \le 30)F(1≤F≤30)，表示该垃圾能维持卡门生命的时间；和 H (1 \le H \le 25)H(1≤H≤25)，该垃圾能垫高的高度。</p>

<h2>输出格式</h2>

<p>如果卡门可以爬出陷阱，输出一个整表示最早什么时候可以爬出；否则输出卡门最长可以存活多长时间。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>

<pre>
20 4
5 4 9
9 3 2
12 6 10
13 1 1</pre>

<p><strong>输出 #1</strong>复制</p>

<pre>
13</pre>

<h2>说明/提示</h2>

<p>[样例说明]</p>

<p>卡门堆放她收到的第一个垃圾：height=9height=9；</p>

<p>卡门吃掉她收到的第22个垃圾，使她的生命从1010小时延伸到1313小时；</p>

<p>卡门堆放第33个垃圾，height=19height=19；</p>

<p>卡门堆放第44个垃圾，height=20height=20。</p>

<p> 思路：用f[i][j]来表示到第i堆的时候，高度到达j时剩下的最大生命值。</p>

<p>创建结构体数组p记录三个信息，即垃圾扔下的时刻t，吃了垃圾能维持的时间f，堆垃圾能增加的高度h。</p>

<p>因为有每堆垃圾要么堆要么吃，所以有两种状态转移方程：</p>

<p>用于堆（高度增加，剩下的最大生命值是第i-1堆到达高度j时的最大生命值减去第i堆和第i-1堆的时间差）：</p>

<p>f[i] [j+p[i].h]=max(f[i] [j+h], f[i-1] [j]- (p[i].t-p[i-1].t) )</p>

<p>用于吃（高度不变，剩下的最大生命值是第i-1堆到达j高度时剩下的最大生命值减去第i堆和第i-1堆的时间差+吃了第i堆能维持的时间）</p>

<p>f[i] [j]=max(f[i] [j],f[i-1][j]-(p[i].t-p[i-1].t)+p[i].f)</p>

<p>只有当我们第i-1堆剩余的最大生命值大于等于从第i-1堆到第i堆相差的时间我们才能进行第i堆的转换，所以当进行上面两个转移之前我们要先判断一下是否符合条件。</p>

<p>那么能逃出去的时刻，就是能进行状态转移，并且到达的高度j加上第i堆的h大于等于d的时刻，因为堆垃圾不费时间，所以直接就是扔下第i堆的时刻。直接判断如果满足条件直接输出i的时刻即可。</p>

<p>那么如果不能逃出去，就是我们把能吃的垃圾全都吃掉所维持的时间。ans表示最大能维持的时刻，刚开始为10，ans=10。然后遍历一遍p数组，如果最大能维持的时刻小于第i堆垃圾扔下来的时刻，那么说明在第i堆扔下之前就死了，所以我们直接break就行，否则的话说明在第i堆扔下来的时刻没有死，那么就加上吃掉第i堆维持的时间f。最后输出ans即可。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>

using namespace std;
int d,n;
const int N=105;
struct name{
	int t,f,h;
};
name p[N];
int f[N][N];
bool cmp(name a,name b){
	return a.t <b.t ;
}
int main(){
	cin>>d>>n;
	for(int i=1;i<=n;i++){
		cin>>p[i].t >>p[i].f>>p[i].h ;
	}
	sort(p+1,p+1+n,cmp);
	memset(f,-1,sizeof f);
	f[0][0]=10;
	p[0].t =0;
	for(int i=1;i<=n;i++){
		for(int j=d;j>=0;j--){//相当于用01背包，滚动数组
			if(f[i-1][j]>=p[i].t -p[i-1].t ){//如果他剩下的最大时间大于到第i堆需要的时间
				if(j+p[i].h >=d){
					cout<<p[i].t ;
					return 0;
				}
				f[i][j+p[i].h ]=max(f[i][j+p[i].h ],f[i-1][j]-p[i].t +p[i-1].t );
				f[i][j]=max(f[i][j],f[i-1][j]-p[i].t +p[i-1].t +p[i].f );
			}
		}
	}
	int ans=10;//最大活的时间
	for(int i=1;i<=n;i++){
		if(ans<p[i].t )break;
		ans+=p[i].f ;
	}
	cout<<ans;
	return 0;
}
```


<p></p>


## 一个新的背包算法的题目

题面

思路

```cpp
#include <iostream>

// 这里是代码
```