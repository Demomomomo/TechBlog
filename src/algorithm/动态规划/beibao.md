---
title: 背包模型
---

在设基本状态的时候有三种设法：  
1.体积最多为j（一般的背包问题）  

初始化所有值都是0，当体积的状态大于等于0的时候才能转换  

2.体积恰好为j  

初始化f[0]=0,其他的都是正无穷（根据题意设），当体积恰好是要求的体积且大于0的时候才能转换  

3.体积最少为j（潜水员）  

初始化f[0]=0，其他都是正无穷（根据题意）
当状态的体积小于0的时候也可以转换


## 01背包
容量为v的背包里，有n件物品，每件物品的体积为vi，价值为wi，求不超过背包体积的情况下能获得的物品的最大价值  
有序变无序：从1~i依次遍历，那么处理到i的是吧前i-1个已经被处理过了，可以直接拿着算  
f[i][j]表示在前i个物品中选，总体积不超过j的方案的能获得的最大价值  
对于每个物品i，可以选和不选  
不选：在前i-1个物品中选，体积不超过j的方案的最大价值  
选：在前i-1个物品中选，体积不超过j-vi的方案的最大价值+wi  
f[i][j]=max(f[i-1][j],f[i-1][j-vi]+wi);  
可以优化成一维的数组：f[j]表示体积不超过j的方案的最大价值  
因为每一次更新只和上一层有关  
如果我们按顺序遍历的话，那么我们到j更新的时候所找到的j-vi已经在第i层更新过了，也就是说i已经被拿了，如果我们再按照这个更新的话会再拿一次i  
那么我们i从第一个物品开始遍历，每次j从大到小更新:f[j]=max(f[j],f[j-vi]+wi)  
这样的话当我们更新到j的时候，所用到的j-vi实际上是没有更新过的上一层i-1的最大价值，这样就避免了重复取值  

```cpp
	for(int i=1;i<=n;i++){
		for(int j=m;j>=v[i];j--){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}

```

## 01背包求方案数
原题链接：https://www.acwing.com/problem/content/280/  
题意：  

有n个数a[1],a[2]...a[n]，从他们中选出若干数使得和为m，那么有多少个方案。  

思路：  

f[i][j]表示在前i个物品中选，选出的数的和为j的方案数。  

那么对于这个状态的方案数有两两部分组成：选i的方案数和不选i的方案数。  

那么f[i][j]=f[i-1][j]+f[i-1][j-a[i]]  

优化成一维，因为都是i-1层的所以j从大到小列举，注意f[j]已经是上一层的方案数，即f[i][j]已经等于f[i-1][j]了所以我们只用加上f[j-a[i]]就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,p;
int f[10005];
int a[105];
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	f[0]=1;
	for(int i=1;i<=n;i++){
		for(int j=m;j>=a[i];j--){
			f[j]+=f[j-a[i]];
		}
	}
	cout<<f[m]<<endl;
	return 0;
}

```



## 完全背包
有一个价值为v的背包，n种物品，每种物品的数量都是无穷的，第i种物品的价值是wi，体积是vi，求不超过背包体积能获得的最大价值
因为每种物品的数量是无限的，所以我们如果正序遍历j的话，到第j-vi的时候虽然是第i层，但是我们是可以多拿几个i取最大的，符合要求（与01的区别就是j反向遍历）  

```cpp
	for(int i=1;i<=n;i++){
		for(int j=v[i];j<=m;j++){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}
```
如果要求背包装满的话，那我们设的状态是：f[i][j]表示在前i个物品里恰好选择了体积为j的物品获得的最大价值，那么我们初始化的时候f[0][0]表示在前0个物品选体积恰好为0的最大价值，那么是0，但是f[0][i]表示在前0个物品中选体积恰好为i的最大价值，无解，所以1~n的f[0][i]的值是负无穷，然后我们再正常按01和完全背包做，当最后f[m]是负无穷的话说明没有能正好装满的方案，如果不是那就是最大价值  
memset(f,-0x3f,sizeof f);  
f[0][0]=0;  


## 完全背包求方案数
和01背包的思路一样，优化之后是将j从大到小列举。  
```cpp
	f[0]=1;
	for(int i=1;i<=n;i++){
		for(int j=v[i];j<=m;j++){
			f[j]+=f[j-a[i]];
		}
	}
	cout<<f[m]<<endl;
```


## 多重背包

### 二进制优化
数据范围：n<=1000 v<=2000 si<=2000  
有一个体积为v的背包，n种物品，每个物品的体积是vi，价值是wi，个数是si，求拿的物品的体积不超过背包体积时的最大价值  
用二进制优化  
对于一种背包，我们可以拿0 ~ si个，我们把他分成1,2,4...这种二进制个捆在一起作为一组，那么我们可以用这几组凑出0 ~ si中所有的数，然后对这几组进行01背包问题的拿取就可以了  

```cpp
cin>>n>>m;
	int cnt=0;
	for(int i=1;i<=n;i++){
		int a,b,s;
		cin>>a>>b>>s;
		int k=1;
		while(k<=s){
			cnt++;
			v[cnt]=a*k;
			w[cnt]=b*k;
			s-=k;
			k*=2;
		}
		if(s>0){
			cnt++;
			v[cnt]=s*a;
			w[cnt]=s*b;
		}
	}
	for(int i=1;i<=cnt;i++){
		for(int j=m;j>=v[i];j--){
			f[j]=max(f[j],f[j-v[i]]+w[i]);
		}
	}
	cout<<f[m]<<endl;
```

<!-- ### 单调队列优化
数据范围：n<=1000 v<=20000 vi,wi,si<=20000  
原题链接：https://www.acwing.com/problem/content/6/  
题意：和上面一样，不过数据范围变大了。  


思路：  
f[i][j]表示在前i个物品中选，体积不超过j的最大价值。    -->




## 二维费用的背包问题
宠物小精灵之收服  
原题链接：https://www.acwing.com/problem/content/1024/  
题意：  


有n个小精灵，要收服第i只小精灵的话需要v[i]个精灵球和p[i]个体力，我们有m个精灵球和p个体力，当收服一个小精灵将我们的体力变成一个小于等于0的数的时候，我们停止收服，当精灵球用完的时候，我们停止收服。问最多能收服多少小精灵。  


思路：  
f[i][j][k]表示在前i个小精灵中，花费的精灵球数不超过j，损失的体力不超过k的情况下，能收服的小精灵的最多个数。  

那么对于每个小精灵有两种选择：选或者不选。  
不选：f[i][j][k]=f[i-1][j][k];  
选：f[i][j][k]=f[i-1][j-v[i]][k-w[i]]+1  

那么整理之后的代码就是：  
```cpp
for(int i=1;i<=n;i++){
	for(int j=1;j<=m;j++){
		for(int k=1;k<=p;k++){
			f[i][j][k]=f[i-1][j][k];
			if(j>=v[i]&&k>=w[i]) f[i][j][k]=max(f[i-1][j-v[i]][k-w[i]]+1);
		}
	}
}
```

但是三维的数组会爆空间，那么我们注意到每次实际上更新i只用了第i-1层的数，所以我们用优化01背包的方法，将j和k反着求就好了。  
```cpp
	for(int i=1;i<=n;i++){
		for(int j=m;j>=v[i];j--){
			for(int k=p;k>=w[i];k--){
				f[j][k]=max(f[j-v[i]][k-w[i]]+1,f[j][k]);
			}
		}
	}
```

最后需要注意的是，如果说一个小精灵收服后体力值变为0，那么我们就不能收服这个小精灵，那么我们可以求当收到的伤害不超过p-1的时候能收服的最多的小精灵的数量，即f[m][p-1]。并且求最多剩余体力，那么我们就看等于答案的最小收到的伤害con，再用总体力减去con就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,p;
int f[1005][505];
int v[105],w[105];
int main(){
	cin>>m>>p>>n;
	for(int i=1;i<=n;i++)cin>>v[i]>>w[i];
	for(int i=1;i<=n;i++){
		for(int j=m;j>=v[i];j--){
			for(int k=p;k>=w[i];k--){
				f[j][k]=max(f[j-v[i]][k-w[i]]+1,f[j][k]);
			}
		}
	}
	int ans=f[m][p-1];
	int con;
	for(int i=0;i<=p;i++){
		if(ans==f[m][i]){
			con=i;
			break;
		}
	}
	cout<<ans<<" "<<p-con<<endl;
	return 0;
}

```



潜水员  
原题链接：https://www.acwing.com/problem/content/1022/  
题意：  
有n个气缸，每个气缸都装有两种气体：氧气和氮气，还有相应的气体容量。第i个气缸中有容量为v1[i]的氧气和v2[i]的氮气，他的重量是w[i]。那么求至少装容量为m1的氧气和容量为m2的氮气时，选择的气缸的重量的最小值。  
思路：  
f[i][j1][j2]表示在前i个物品中选，氧气的体积至少为j1，氮气体积至少为j2的情况下，选择的气缸重量的最小值。  
不选第i个物品：f[i-1][j1][j2]  
选第i个物品：f[i-1][j1-v1[i]][j2-v2[i]]  
因为要求最小值，初始化的时候把所有值都赋值成极大值，将f[0][0][0]赋值成0.  
那么我们在转移的时候，从j-v转移过来的时候，如果j-v是负数，那么这个状态也是合法的，表示为如果容量至少为负数的时候，所选气缸的最小重量。  
换一种说法，当j-v<0的时候表示v>j，那么选了这个物品之后肯定满足至少为j，那么我们就不需要选之前的物品，那么就按照之前的物品的容量至少为0来算就可以了。  

核心代码：  
```cpp
	memset(f,0x3f,sizeof f);
	f[0][0][0]=0;
	for(int i=1;i<=n;i++){
		for(int j1=0;j1<=m1;j1++){
			for(int j2=0;j2<=m2;j2++){
				f[i][j1][j2]=f[i-1][j1][j2];
				f[i][j1][j2]=min(f[i-1][max(0ll,j1-v1[i])][max(0ll,j2-v2[i])]+w[i],f[i][j1][j2]);
			}
		}
	}
```

优化一维之后的代码是：  
```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
typedef long long ll;
int n,m1,m2;
int f[30][85];
signed main(){
	cin>>m1>>m2;
	cin>>n;
	memset(f,0x3f,sizeof f);
	f[0][0]=0;
	for(int i=1;i<=n;i++){
		int v1,v2,w;
		cin>>v1>>v2>>w;
		for(int j1=m1;j1>=0;j1--){
			for(int j2=m2;j2>=0;j2--){
				f[j1][j2]=min(f[j1][j2],f[max(0ll,j1-v1)][max(0ll,j2-v2)]+w);
			}
		}
	}
	cout<<f[m1][m2]<<endl;
	return 0;
}
```



## 混合背包问题
原题链接：https://www.acwing.com/problem/content/7/  
题意：  
有n种物品和一个容量为v的背包  
物品有三类：  
第一类只能用一次（01背包）  
第二类物品可以用无限次（完全背包）  
第三类物品最多只能用si次（多重背包）  
每种体积是vi，价值是wi  
将哪些物品装入背包使总体积不超过m的情况下总价值最大。  

思路：  
f[i][j]表示在前i个物品中选，且体积不超过j的选法中能得到的最大价值。  

01背包：f[i][j]=max(f[i-1][j],f[i-1][j-v[i]]+w[i])  

完全背包：f[i][j]=max(f[i-1][j],f[i][j-v[i]]+w[i])  

多重背包：f[i][j]=max(f[i-1][j],f[i-1][j-v[i]]+w[i],f[i-1][j-2v[i]]+2w[i]...)  

对于第i个物品有选或者不选两种情况。  
不选:f[i-1][j]  
选：要考虑第i件物品的类型：  
对于第i种物品：  
如果是完全背包，那么我们就按正常的优化后的f[j]从小到大更新f[j]=max(f[j],f[j-v]+w)  
01背包是个数为1的多重背包，那么我们就认为他是si为1的完全背包。  
对于完全背包，我们要对他进行二进制优化。把他分成二进制的多个01背包，然后对每个背包进行一次01背包的状态转移就可以了。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1005;
int f[N];
int n,m;

int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		int v,w,s;
		cin>>v>>w>>s;
		if(s==0){
			for(int j=v;j<=m;j++){
				f[j]=max(f[j],f[j-v]+w);
			}
		}else {
			if(s==-1) s=1;
			for(int k=1;k<=s;k*=2){
				for(int j=m;j>=k*v;j--){
					f[j]=max(f[j],f[j-k*v]+k*w);
				}
				s-=k;
			}
			if(s>0){
				for(int j=m;j>=s*v;j--){
					f[j]=max(f[j],f[j-s*v]+s*w);
				}
			}
		}
	}
	cout<<f[m]<<endl;
	return 0;
}
```








## 货币系统
原题链接：https://www.acwing.com/video/388/  
题意：  

有n种面额的货币，第i种货币的面额为a[i]，每种货币有无数张。那么我们将这n种货币能凑成的全部面额称为一个货币系统，记为（n,a)。那么我们要找到一个货币系统(m,b)，m尽可能小，使得这个货币系统和(n,a)这个货币系统凑成的数值相等。  

思路：  

可以发现a数组中的每个数，都可以被b数组中的一些数凑出来。   
在最优解中，b都是从a数组中选择出来的。  

那么较大的数是被较小的数凑出来的，那么我们先将a数组从小到大排序之后，再对每个数进行考虑。  

对第i个数来说，我们需要判断的是它能否被前面的数（1~i-1）凑出来，如果能被凑出来说明不能选择他，不能凑出来的话说明必须要选择他。  


将每个数看成一种有无数个的物品，将他们的和看成是背包的容积，那么看能不能凑出a[i]，实际上就是看用前i-1种物品是否能凑出来体积等于a[i]的容量。  

其实就是判断一下，装满a[i]的方案数是不是0.  

f[i][j]表示能从前i个数中凑出j的方案数。那么我们只需要做一遍完全背包求方案数，然后判断每个f[i-1][a[i]]是否等于0就可以了。  

朴素做法容易超时且爆空间，那么我们就优化一维，然后判断对于每个f[a[i]]的方案数是否等于1就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int n,m,p;
int f[25005];
int a[105];
void sove(){
	cin>>n;
	int mx=0;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		mx=max(mx,a[i]);
	}
		for(int j=0;j<=mx;j++){
			f[j]=0;
		}
	
	f[0]=1;
	sort(a+1,a+1+n);
	for(int i=1;i<=n;i++){
		for(int j=a[i];j<=mx;j++){
			f[j]+=f[j-a[i]];
		}
	}
	int con=0;
	for(int i=1;i<=n;i++){
		if(f[a[i]]==1) con++;
	}
	cout<<con<<endl;
}
signed main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}

```


## 混合背包问题
原题链接：https://www.acwing.com/problem/content/7/  
有n种物品和一个容量是m的背包，类型有3种：  
1.第一种物品只能用一次  
2.第二种物品可以用无限次  
3.第三种物品只能用si次  
求物品体积总和不超过背包容量，能装的最大价值。  

思路：  
完全背包的转移公式：f[i][j]=max(f[i][j],f[i][j-v[i]]+w[i])  
多重背包的转移公式：f[i][j]=max(f[i][j],f[i-1][j-k*v[i]]+k*w[i])  
01背包是特殊的多重背包，将si设为1即可  
那么对于多重背包，我们将他进行一个二进制优化，将他分成多个背包之后再进行01背包的转换。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2000;
int n,m;
int f[N];
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		int v,w,s;
		cin>>v>>w>>s;
		if(s==0){
			for(int j=v;j<=m;j++){
				f[j]=max(f[j],f[j-v]+w);
			}
		}else{
			if(s==-1) s=1;
			for(int k=1;k<=s;k*=2){
				for(int j=m;j>=k*v;j--){
					f[j]=max(f[j],f[j-k*v]+w*k);
				}
				s-=k;
			}
			if(s>0){
				for(int j=m;j>=s*v;j--){
					f[j]=max(f[j],f[j-s*v]+s*w);
				}
			}
		}
	}
	cout<<f[m];
	return 0;
}

```


<!-- ## 有依赖的背包问题
原题链接：https://www.acwing.com/problem/content/10/  
题意：  
有n个物品和容量是v的背包，物品之间有依赖关系，如果选择一个物品，则必须选择他的父节点。  
每件物品编号是i，体积是vi，价值是wi，依赖的父节点编号是pi，下标范围1~n。  
求将哪些物品装入背包，使物品总体积不超过背包容量且总价值最大。   -->


<!-- ## 背包问题求方案数 -->





