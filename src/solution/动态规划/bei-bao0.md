---
title: 背包
---

## 本质
从一堆物品中选择一些物品，满足某些条件，求选择的最大值/最小值/方法数  

有几种限制条件就有几维，先枚举物品再枚举其他的限制条件，对于01背包来讲剩下的限制条件需要从大到小枚举以防重复选择  


## 01背包求方案数

### 质数拆分
原题链接：  
https://www.lanqiao.cn/problems/809/learning/?page=1&first_category_id=1&sort=students_count&tags=2019&status=2  

题意：  
将2019拆分成若干个不同的质数，一共有多少种不同的方法？  
思路：  
就是在1~2019范围内的质数中选，满足和为2019的方案数。  
那么就先处理出所有质数，然后再把每个数看做一个背包，做一遍01背包求方案数就可以了。  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
const int N=1e6+10;
typedef long long ll;
int n;
int v[N];
ll f[N];
int cnt;
int ispr(int num ){
    int i;
    //从2开始循环，一直到i的平方小于等于给定的数。
    for (i = 2; i*i<=num; i++) {
        if ( ( num % i ) == 0 ) {
            return 0;
        }
    }
    return 1;
}
int main(){
    cnt=0;
    n=2019;
    for(int i=2;i<=2019;i++){
        if(ispr(i)){
            v[++cnt]=i;
        }
    }
//    for(int i=1;i<=n ;i++)cout<<v[i]<<" ";
    f[0]=1;
    for(int i=1;i<=cnt;i++){
        for(int j=2019;j>=v[i];j--){
            f[j]+=f[j-v[i]];
        }
    }
    cout<<f[2019];
    return 0;
}
```

## 01背包

### 清楚姐姐学01背包(Hard Version)（必选蝴蝶结
原题链接：  
https://ac.nowcoder.com/acm/contest/46812/D  

题意：有n个蝴蝶结，每个蝴蝶结的体积是vi，好看程度为wi，有一个容量大小是m的背包，将这n个蝴蝶结放入背包中且总体积不能超过背包容量，想让好看程度最大化。  
定义上面的问题的好看程度最大值为mmax1。  
定义这n个蝴蝶结中去掉第i个蝴蝶结之后，从剩余n-1个蝴蝶结中选蝴蝶结放入背包，好看程度最大值为mmax2。  
如果mmax2< mmax1，那么称第i个背包为必选背包。  
想知道对于第i个蝴蝶结（i：1~n），在他初始的好看程度基础上，再加多少好看程度，该蝴蝶结就能成为一个必选蝴蝶结？  

数据范围：1<=N,M<=5000.  1<=vi<=M. wi<=1e9 

思路：  
我们要判断是不是必选蝴蝶结就要知道不选第i个蝴蝶结的情况下，最大体积不超过m的最大好看程度  
那么需要加的好感度最小等于=mmax1+1（i为必选要达到的最小的好感度）-必选i得到的最大好感度-w[i]    
那么我们必须要求的就是：  
不选第i个蝴蝶结，体积不超过m的最大好看程度  
必选第i个蝴蝶结，体积不超过m的最大好看程度  

f1[i][j]表示从前i个物品中选，体积不超过j的最大好看程度  
转移方程:f1[i][j]=max(f1[i-1][j],f1[i-1][j-v[i]]+w[i])  
f2[i][j]表示从第i个到第n个物品中选，体积不超过j的最大好看程度  
转移方程:f2[i][j]=max(f2[i+1][j],f2[i+1][j-v[i]]+w[i])  
z[i]表示不选第i个蝴蝶结，最大体积不超过m的最大好看程度  
状态转移：  
```cpp
for(int i=1;i<=n;i++){
    for(int j=0;j<=m;j++){//列举f1所占的体积
        z[i]=max(f1[i-1][j]+f[i+1][m-j],z[i]);
    }
}
```
g[i]表示必选第i个蝴蝶结，其他背包的体积最大体积不超过m-vi的最大好看程度  
状态转移：
```cpp
for(int i=1;i<=n;i++){
    for(int j=0;j<=m-v[i];j++){
        g[i]=max(g[i],f1[i-1][j]+f2[i+1][m-v[i]-j]);
    }
}

```

AC代码：  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

const int N=5005,M=600;
int n,m;
int v[N],w[N];
int f1[N][N],f2[N][N],z[N],g[N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++)cin>>v[i]>>w[i];
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			f1[i][j]=f1[i-1][j];
			if(j>=v[i]) f1[i][j]=max(f1[i-1][j],f1[i-1][j-v[i]]+w[i]);
		}
	}
	int mx=f1[n][m];
	for(int i=n;i>=1;i--){
		for(int j=0;j<=m;j++){
			f2[i][j]=f2[i+1][j];
			if(j>=v[i]) f2[i][j]=max(f2[i+1][j],f2[i+1][j-v[i]]+w[i]);
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			z[i]=max(z[i],f1[i-1][j]+f2[i+1][m-j]);
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m-v[i];j++){
			g[i]=max(g[i],f1[i-1][j]+f2[i+1][m-j-v[i]]);
		}
	}
	for(int i=1;i<=n;i++){
		if(z[i]<mx){
			cout<<0<<endl;
		}else{
			cout<<mx+1-g[i]-w[i]<<endl;
		}
	}
	return 0;
}
```

### B_GlassHalfSpilled
原题链接：  
https://codeforces.com/contest/1458/problem/B  
题意：  
有n个杯子，每个杯子有vi的容量，杯子里有wi的水。当我们想从第i个杯子向第j个杯子里倒x的水时，会撒一半。那么第i个杯子就剩下wi-x的水，第j个杯子就有wj+x/2的水。  
现在我们要选k个杯子（k从1~n），可以任意选两个杯子倒任意体积的水，求这k个杯子里最多能放多少容量的水。  
思路：  
假如我们选了k个杯子，杯子里最多x单位的水。  
设选的杯子的总体积是sumv，所有水的总体积是sumw  
那么杯子最大的容量就是其他杯子里的水全加入这k个杯子里  
即min(sumv,x+(sumw-x)/2)  
那么就转换为选k个杯子，杯子里最多能装多少水的问题  
但是还有一个体积限制，因为我们选了这k个杯子还要知道他们的体积才能算出所求结果  
那么我们就设f[i][j]表示选了i个杯子，所选杯子体积是j的最大水量  
枚举每个杯子x，那么当选择这个杯子的时候状态转移方程就是  
f[i][j]=max(f[i][j],f[i-1][j-v[x]]+w[x])  
那么我们就可以求得在选择k个杯子的每个容量的值，然后对于每个容量取最大就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
typedef long long ll;
int n,m;
double f[110][10005];
int v[110],w[110];
signed main(){
	cin>>n;
	int sumv=0,sumw=0;
	for(int i=1;i<=n;i++){
		cin>>v[i]>>w[i];
		sumv+=v[i];
		sumw+=w[i];
	}
	for(int i=0;i<=n;i++){
		for(int j=0;j<=sumv;j++){
			f[i][j]=-1e12;
		}
	}
	f[0][0]=0;
	for(int x=1;x<=n;x++){
		for(int i=n;i>=1;i--){
			for(int j=sumv;j>=v[x];j--){
				f[i][j]=max(f[i][j],f[i-1][j-v[x]]+w[x]);
			}
		}
	}
	for(int i=1;i<=n;i++){
		double mx=0;
		for(int j=0;j<=sumv;j++){
			mx=max(mx,min(j*1.0,f[i][j]+(sumw-f[i][j])*1.0/2));
		}
		printf("%.10f ",mx);
	}
	cout<<endl;
	return 0;
}
```

### 分仙贝


原题链接：  
https://ac.nowcoder.com/acm/contest/46800/M  

题意：  
把m个仙贝分给n个朋友，假设手里现在有x个仙贝，分给一个朋友y个仙贝，那么这个朋友对你的好感度就增加y/x，每个朋友可以分也可以不分，如果分的话每个朋友只能分一次，仙贝也可以剩下或不剩下。  
求最优送仙贝的策略下，朋友对你的好感度之和最大是多少  
思路：  
设f[i][j]为前i个人送完之后，还剩下j个仙贝的情况下所有人对你的最大好感度和  
对于第i个人：我们需要枚举送几个，假设送k个，设前i-1个人送完之后还剩j个，那么给i送完k个还剩j-k个  
f[i][j-k]=max(f[i][j-k],f[i-1][j]+1.0*k/j);
初始化：最初所有人的好感都是0，不用初始化  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
typedef long long ll;
int n,m;
const int N=550;
double f[N][N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			for(int k=0;k<=j;k++){
				f[i][j-k]=max(f[i][j-k],f[i-1][j]+1.0*k/j);
			}
		}
	}
	printf("%.6f",f[n][0]);
	return 0;
}
```



### 小沙の抱团 hard
原题链接：  
https://ac.nowcoder.com/acm/contest/46813/L  

题意：有n个人，m条指令，对第i条指令可以花费bi的代价,要求xi个人抱团，剩下的人淘汰，m条指令可以重复选，那么最少花费多少代价使剩余的人数最少？  

思路：f[i]表示剩下i个人时花费的最小代价，初始化f[n]=0，对于第j条指令，如果当前有i个人，那么行使完指令之后还剩i-i%x[i]个人，代价是f[i]+b[i]，那么状态转移方程就是：  
```cpp
f[i-i%x[i]]=min(f[i-i%x[i]],f[i]+b[i]);
```
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

const int N=1e5+10,M=600;
int n,m;
int b[M],x[M];
int f[N];
signed main(){
	cin>>n>>m;
	for(int i=1;i<=m;i++)cin>>b[i]>>x[i];
	memset(f,0x3f,sizeof f);
	f[n]=0;
	for(int i=n;i>=0;i--){
		for(int j=1;j<=m;j++){
			if(x[j]<=i){
				f[i-i%x[j]]=min(f[i-i%x[j]],f[i]+b[j]);
			}
		}
	}
	for(int i=0;i<=n;i++){
		if(f[i]>=0x3f3f3f3f){
			continue;
		}else{
			cout<<f[i];
			break;
		}
	}
	return 0;
}
```
















### i love exam
原题链接：  
https://vjudge.net/contest/541856#problem/H  
题意：  
有n场考试，还有t天开学  
有m本复习资料  
对于第i本复习资料，名称是s[i]，研究的时间是y[i]，可以在这门学科上加x[i]的分（每科的上限是100，每本资料只能用一次）  
他的所有科目都是0分，可以挂p门课，否则就要被叫家长  
想知道在不叫家长的情况下能得到的最大分，如果被叫了家长输出-1  
数据范围：n<=50,m<=15000,s[i]长度不超过15,x[i]和y[i]数据范围是1~10，天数t:1~500，允许不及格科目p:0<=3
思路：  
f[i][j]表示第i门课程花费时间不超过j能得到的最大分数  
先用一个vector< pii> a[i]来存第i门课程的所有书籍  
那么枚举第i门的每个书籍x，每本都有选或者不选的情况，选x的状态转移是：  
f[i][j]=max(f[i][j],f[i][j-v[x]]+w[x]);  
dp[i][j][pp]表示在前i科里，花费不超过j天的时间，挂了pp门课的最大分数。  
枚举第i门课的最大花费时间k，然后得到这个情况的最大分数f[i][k]  
当f[i][k]>=60的时候状态转移方程是：dp[i][j][pp]=max(dp[i][j][pp],dp[i-1][j-k][pp]+f[i][k]);  
当f[i][k]<=60的时候且pp-1>=0的时候的状态转移方程是：dp[i][j][pp]=max(dp[i][j][pp],dp[i-1][j-k][pp-1]+f[i][k]);  

```cpp
#include<bits/stdc++.h>
#include<vector>
#define v first
#define w second
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int n,m,t,p;
int f[60][600];
int dp[60][600][4];
vector<pii> a[60];
map<string,int> mp;
void sove(){
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		string s;
		cin>>s;
		mp[s]=i;
		a[i].clear();
	}
	scanf("%d",&m);
	for(int i=1;i<=m;i++){
		string s;
		cin>>s;
		int id=mp[s];
		int v,w;
		scanf("%d%d",&w,&v);
		a[id].push_back({v,w});
	}
	scanf("%d%d",&t,&p);
	memset(f,0,sizeof f);
	for(int i=1;i<=n;i++){
		for(auto vv:a[i]){
			int vx=vv.v,wx=vv.w;
			for(int j=t;j>=vx;j--){
				f[i][j]=max(f[i][j],f[i][j-vx]+wx);
				f[i][j]=min(100,f[i][j]);
			}
		}
	}
	memset(dp,-0x3f,sizeof dp);
	dp[0][0][0]=0;
	for(int i=1;i<=n;i++){
		for(int j=0;j<=t;j++){
			for(int k=0;k<=j;k++){
				for(int pp=0;pp<=p;pp++){
					if(f[i][k]>=60){
						dp[i][j][pp]=max(dp[i][j][pp],dp[i-1][j-k][pp]+f[i][k]);
					}else if(pp-1>=0){
						dp[i][j][pp]=max(dp[i][j][pp],dp[i-1][j-k][pp-1]+f[i][k]);
					}
				}
			}
		}
	}
	int ans=-1;
	for(int i=0;i<=p;i++){
		ans=max(dp[n][t][i],ans);
	}
	printf("%d\n",ans);
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






### 九小时九个人九扇门

原题链接：  
https://ac.nowcoder.com/acm/contest/23106/A  

题意：  

有n个人，每个人都有一个值是a[i]，有数字为1~9的9扇门。如果有x个人，他们的值的和的数字根是j，他们x个人才能打开第j扇门。  

一个数字的数字根是指：将该数字各数位上的数字相加得到一个新的数，直到得到的数字小于10为止  

求每扇门各有多少种方案使得门能打开  

思路：  

数字根：对于各个数k位进制下的数字根，就是他们的和sum%（k-1）+1  

对于每个数都只能选一次，对应选或者不选两种情况，那么我们就可以转换为01背包问题  

dp[i][j]表示前i个数中能组成数字根是j的方案数  

转移方程：  
不选：dp[i][j]+=dp[i-1][j];  
选：dp[i][gen(j+a[i])]+=dp[i-1][j];  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=1e5+10;
const int mod=998244353;
int n;
int a[N];
int dp[N][10];
int gen(int x){
	while(x>=10){
		int ans=0;
		int con=x;
		while(con){
			ans+=con%10;
			con/=10;
		}
		x=ans;
	}
	return x;
}
signed main(){
	cin>>n;
	for(int i=1;i<=n;i++)cin>>a[i];
	dp[0][0]=1;
	for(int i=1;i<=n;i++){
		for(int j=0;j<=9;j++){
			dp[i][j]=(dp[i-1][j]+dp[i][j])%mod;
			dp[i][gen(j+a[i])]=(dp[i][gen(j+a[i])]+dp[i-1][j])%mod;
		}
	}
	for(int i=1;i<=9;i++){
		cout<<dp[n][i]<<" ";
	}
	return 0;
}

```

### 费用报销

题目链接：  

https://www.lanqiao.cn/problems/2195/learning/?page=2&first_category_id=1&sort=students_count&second_category_id=3&tags=%E5%9B%BD%E8%B5%9B,2022  

题意：  

有n个票，每个票上有日期（X月X日），还有面额w。  

想从中挑选若干张票使得满足：  

1.任意两张票的天数相差>=k  

2.这些面额的总值不超过m  

求最接近m面额  

思路：  

先将每个日期映射为是今年的第x天，用于判断相隔天数  

先将票按照天数从小到大排序  

f[i][j]表示在前i张票中，存在挑选满足条件的票使得能凑出总面额为j的方案  

对于第i张票来说，有选和不选两种情况：  

不选：f[i][j]=f[i-1][j]  

选：前提是j必须大于等于w[i];那么我们找到i左边第一个满足相差天数大于等于k的票数编号last，f[i][j]|=f[last][j-w[i]];  

```cpp
#include<bits/stdc++.h>
#include<queue>
#define int long long
using namespace std;
const int N=1005;
bool f[N][5005];
int mon[30];
int s[30];
int n,m,k;
struct name{
	int d,m,v;
}a[N];
void pro(){
	mon[1]=mon[3]=mon[5]=mon[7]=mon[8]=mon[10]=mon[12]=31;
	mon[4]=mon[6]=mon[9]=mon[11]=30;
	mon[2]=28;
	for(int i=1;i<=12;i++){
		s[i]=s[i-1]+mon[i];
	}
}
int get(int m,int d){
	return s[m-1]+d;
}
bool cmp(name a,name b){
	return get(a.m ,a.d )<get(b.m ,b.d );
}
signed main(){
	pro();
	cin>>n>>m>>k;
	for(int i=1;i<=n;i++){
		cin>>a[i].m >>a[i].d >>a[i].v ;
	}
	sort(a+1,a+1+n,cmp);
	f[0][0]=true;
	for(int i=1;i<=n;i++){
		int last=i-1;
		while(last>0&&get(a[i].m ,a[i].d )-get(a[last].m,a[last].d)<k)last--;
		for(int j=0;j<=m;j++){
			f[i][j]=f[i-1][j];
			if(j>=a[i].v )f[i][j]|=f[last][j-a[i].v ];
		}
	}
	int ans=0;
	for(int i=m;i>=0;i--){
		if(f[n][i]){
			ans=i;
			break;
		}
	}
	cout<<ans;
	return 0;
}

```

## 分组背包

### M-二手物品回收

原题链接：https://ac.nowcoder.com/acm/contest/58860/M?&headNav=acm  

题意：  

有n个物品需要出售，m个商家来买，需要出售k个物品，对于第i个物品有ai和bi，ai表示卖出的价格，bi表示愿意回收的商家。对于每个商家i，还有xi的快递费，如果卖给商家i物品（个数大于0）就需要支付xi的费用，且只用支付一次，求卖出的最大价格。  

思路：  

因为卖给同一个商家若干个物品的话有一个快递费需要减去，那么我们就按照商家分组，每个商家能买的物品分为一组，然后枚举每组商家买多少物品。对于每个商家，当然是能买的物品的价值越大越好，那么我们对于每组商家的物品价值再从大到小排序

f[i][j]表示卖给前i个商家j个物品卖出的最大价值  

定义`vector<int> w[i]`为第i组商家能买的物品的价值  

对于第i个商家，枚举买的物品的个数kk，那么状态转移方程就是f[i][j]=max(f[i][j],f[i-1][j-kk]+w总-x[i])  

由于我们需要恰好出售物品k个，所以我们要初始化所有不能恰好出售的状态为-INF，f[i][0]表示在前i个里挑0个的最大价值，最大是0，那么赋值f[i][0]为0

```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
typedef pair<int,int> pii;
const int N=1005,INF=2e9;
int f[N][N];
int x[N];
vector<int> w[N];
int n,m,k;
signed main(){
	cin>>n>>m>>k;
	for(int i=1;i<=m;i++)cin>>x[i];
	for(int i=1;i<=n;i++){
		int a,b;
		cin>>a>>b;
		w[b].push_back(a); 
	}
	for(int i=1;i<=m;i++){
		sort(w[i].begin() ,w[i].end() ,greater<int>());
	}
	for(int i=0;i<=m;i++){
		for(int j=0;j<=k;j++){
			f[i][j]=-INF;
		}
	}
	for(int i=0;i<=m;i++)f[i][0]=0;
	for(int i=1;i<=m;i++){
		for(int j=1;j<=k;j++){
			f[i][j]=f[i-1][j];
			int op=-x[i];
			for(int kk=0;kk<w[i].size()&&kk<j;kk++){
				op+=w[i][kk];
				f[i][j]=max(f[i][j],f[i-1][j-kk-1]+op);
			}
		}
	}
	cout<<f[m][k]<<endl;
	return 0;
}
```







