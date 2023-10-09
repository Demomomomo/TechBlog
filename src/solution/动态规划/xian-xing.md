---
title: 线性dp
---
## 至多删3个字符
原题链接：  
https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805046946938880  
题意：  
有一个全部由小写英文字母组成的字符串，允许最多删3个字符，结果可能有多少种不同的字符串。  
思路：  
f[i][j]表示前i个字符中删掉了j个字符之后，不同的字符串数。  
对于第i个字符，我们可以删或者不删：  
不删的方案数：f[i-1][j]  
删的方案数：f[i-1][j-1]  
但是这样肯定会重复  
比如对于abcdfcef这个字符串，我们删除cdf后得到的字符串和删掉dfc后得到的字符串都是abcef。  
那么我们可以发现，对于一个字母s[i]，如果他的前面存在一个s[x]使得s[i]=s[x]，那么删除区间[x,i-1]和删除区间[x+1,i]得到的字符串是一样的。  
那么我们就要减去这种重复的情况：  
对于f[i][j]：如果前面有一个x使得s[x]==s[i]并且[x,i-1]这个区间长度小于等于3,那么我们就需要减去重复算的字符。重复的字符实际上就是f[x-1][j-(i-x)]  
因为我们是删除了[x,i-1]这段的字符才会重复，这段字符的长度是i-x，那么我们就需要在前x-1个字符中删掉j-(i-x)，这样保证了[x,i-1]这段区间必然是都删过的。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int n,m;
string s;
int x[1000006];
int f[1000006][5];
signed main(){
	cin>>s;
	n=s.size();
	s=" "+s;
	map<char,int> mp;
	for(int i=1;i<=n;i++){
		if(mp[s[i]]==0){
			x[i]=-1;
			mp[s[i]]=i;
		}else{
			x[i]=mp[s[i]];
			mp[s[i]]=i;
		}
	}
	f[0][0]=1;
	for(int i=1;i<=n;i++){
		for(int j=0;j<=3;j++){
			if(i-1>=0)f[i][j]+=f[i-1][j];
			if(j-1>=0)f[i][j]+=f[i-1][j-1];
			if(x[i]!=-1&&i-x[i]<=3&&j-(i-x[i])>=0){
				f[i][j]-=f[x[i]-1][j-(i-x[i])];
			}
		}
	}
	int con=0;
	for(int i=0;i<=3;i++){
		con+=f[n][i];
	}
	cout<<con;
	return 0;
}
```



## 收集宝物
原题链接：  
https://pintia.cn/problem-sets/1639924117484503040/exam/problems/1639924223701057549  
题意：  
有一个n*m的矩阵，每个格子里有一个值v，从左上走到右下，每次走只能向右或向下，每走到一个格子，如果这个格子里的值大于我们手里拿的所有值，我们就可以拿他，当然也可以拿。求最后拿了p个数的方案数。  
数据范围：  
n,m<60  v<12  p<12  
思路：  
因为数据范围小，可以用dp  
看有几个限制：  
1.坐标ij  
2.走到一个点需要看手中最大值  
3.手里拿的值的个数  
那么就设f[i][j][mx][k]表示为当走到i,j时，手里最大的数不超过mx，且已经拿了k个数的方案数。  
那么我们可以不拿v[i][j]，那么方案数就加上从上一个格子和左一个格子走来的方案数：  
f[i][j][mx][k]+=f[i-1][j][mx][k]  
f[i][j][mx][k]+=f[i][j-1][mx][k]  
那么我们也可以拿v[i][j]，但是前提是，走到上一个格子（或左一个格子）时的mx必须小于v[i][j]，那么我们才能拿v[i][j],这时候走到v[i][j]的最大值就变成了v[i][j]  
if(mx>v[i][j])  f[i][j][v[i][j]][k]+=f[i-1][j][mx][k-1]  
if(mx>v[i][j])  f[i][j][v[i][j]][k]+=f[i][j-1][mx][k-1]  
初始化的时候，在（1,1）处为起点，可以选或者不选，不选的话初始化f[1][1][0][0]=1  
选的话初始化f[1][1][v[1][1]][1]=1  
最后算出的是走到(n,m)处选的数为k的方案数，那么对最大值没有限制，所有最大值的方案数都需要加上。  
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,m,p;
ll f[60][60][15][15];
ll a[60][60];
int main(){
    cin>>n>>m>>p;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            int x;
            cin>>x;
            a[i][j]=x+1;
        }
    }
    f[1][1][0][0]=1;
    f[1][1][a[1][1]][1]=1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            for(int mx=0;mx<15;mx++){
                for(int k=0;k<15;k++){
                    if(i-1>=1)f[i][j][mx][k]=(f[i][j][mx][k]+f[i-1][j][mx][k])%1000000007;
                    if(j-1>=1)f[i][j][mx][k]=(f[i][j][mx][k]+f[i][j-1][mx][k])%1000000007;
                    if(a[i][j]>mx&&k-1>=0) {
                        if(i-1>=1) f[i][j][a[i][j]][k]=(f[i][j][a[i][j]][k]+f[i-1][j][mx][k-1])%1000000007;
                        if(j-1>=1) f[i][j][a[i][j]][k]=(f[i][j][a[i][j]][k]+f[i][j-1][mx][k-1])%1000000007;
                    }
                }
            }
        }
    }
    ll con=0;
    for(int i=0;i<15;i++){
        con=(con+f[n][m][i][p])%1000000007;
    }
    cout<<con;
    return 0;
}
```




## 7-12 子序列

![20230403205244](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230403205244.png)

题意：  

有一个长度为n的子序列，第i个数为a[i]  
求不超过三对位置的元素相等的子序列的个数  

思路：  

对于每个数，我们先存他有几个位置  

然后我们再遍历每种数：  

设数x的不同位置有y个  

dp[i]表示所选的序列恰好有i对相等的数的序列的个数  

dp[0]表示所选序列中恰好有0对相同的数的序列的个数，那么我们在之前的所有的序列之后选上x这个数或者不选x这个数之后，所选的序列依旧是有0对相同的数，有因为x这个数有y种位置，所以我们有y+1种选法，即：  

dp[0]=dp[0]*(y+1)  

dp[1]表示所选序列中恰好有1对相同的数的序列个数  
那么由两部分组成：  
1.在之前序列中相同的数为0对的序列的基础上，再选一对相同的x(在y个位置里选两个)，即dp[0] * $C_{y}^{2}$；  
2.在之前序列中相同的数为1对的序列的基础上，再选一个x，或者不选x，即dp[1] *(y+1)  

dp[2]表示所选序列中恰好有两对相同的数的序列的个数  
那么由两部分组成:  
1.在之前相同数的对数为1的序列的基础上，再选一对相同的x(在y个位置里选两个)，即dp[1] *$C_{y}^{2}$；  
2.在之前序列中相同的数为两对的序列的基础上，再选一个x，或者不选，即dp[2] *(y+1)  

dp[3]表示所选序列中恰好有三对相同的数的序列的个数  
那么由三部分组成：  
1.在之前相同数的对数为0的基础上选三对相同的x（在y个位置中选三个），即dp[0] * $C_{y}^{3}$;  
2.在之前相同数对数为2的序列的基础上选一对相同的x（在y个位置里选两个），即dp[2] *$C_{y}^{2}$  
3.在之前相同数对数为3的序列的基础上选一个x或者不选x，即dp[3] *(y+1)  

```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
const int N=2e5+10;
const int mod=998244353;
typedef long long ll;
int n,m;
int a[N];
ll dp[N][6];
int f[N],fi[N];
int ksm(int a,int b){
	int res=1%mod;
	while(b){
		if(b&1)res=res*a%mod;
		a=a*a%mod;
		b>>=1;
	}
	return res;
}
void init(){
	f[0]=fi[0]=1;
	for(int i=1;i<N;i++){
		f[i]=(f[i-1]*i)%mod;
		fi[i]=(fi[i-1]*ksm(i,mod-2))%mod;
	}
}
signed main(){
	scanf("%lld",&n);
	init();
	map<int,int> mp;
	vector<int> op;
	op.push_back(0);
	for(int i=1;i<=n;i++){
		scanf("%lld",&a[i]);
		mp[a[i]]++;
		op.push_back(a[i]);
	}
	sort(op.begin(),op.end());
	op.erase(unique(op.begin(),op.end()),op.end());
	dp[0][0]=1;
	for(int i=1;i<op.size();i++){
		int y=mp[op[i]];
		dp[i][3]=dp[i-1][3]%mod*(y+1)%mod;
		if(y>=2){
			dp[i][3]=(dp[i][3]+dp[i-1][2]%mod*(f[y]*fi[2]%mod*fi[y-2]%mod)%mod)%mod;
		}
		if(y>=3){
			dp[i][3]=(dp[i][3]+dp[i-1][0]%mod*(f[y]*fi[3]%mod*fi[y-3]%mod)%mod)%mod;
		}
		dp[i][2]=(dp[i-1][2]%mod*(y+1))%mod;
		if(y>=2){
			dp[i][2]=(dp[i][2]%mod+dp[i-1][1]*(f[y]*fi[2]%mod*fi[y-2]%mod)%mod)%mod;
		}
		dp[i][1]=(dp[i-1][1]%mod*(y+1)%mod)%mod;
		if(y>=2){
			dp[i][1]=(dp[i][1]%mod+dp[i-1][0]*(f[y]*fi[2]%mod*fi[y-2]%mod)%mod)%mod;
		}
		dp[i][0]=dp[i-1][0]*(y+1)%mod;
	}
	ll ans=0;
	int len=op.size();
	for(int i=0;i<=3;i++){
		ans=(ans%mod+dp[len-1][i]%mod)%mod;
	}
	cout<<ans-1;//减掉一个空字符
	
	return 0;
}
```

## I - 宠物对战 

原题链接：  
https://vjudge.net/contest/532518#problem/I  

题意：  
A类字符串有n个，B类字符串有m个，给定一个字符串S，问S是否能被A类B类字符串交替表示，即ababa...或bababa...（ab分别为A类和B类中的字符串），如果不能输出-1，如果能就输出能这样表示所需要的最少的字符串的个数  

思路：  

用到tire树和dp  

查询某串字符串是否在集合中，就用tire树来存储和查询  

f[i][0/1]表示到第i个字符为止，最后一部分是A类/B类字符串所需要的最小字符串的个数  

那么我们就枚举前面满足在A或B字符串中的子串的最后一个字母的下标i，从i开始往后看，假设前面的子串在A字符串中，那么我们就枚举j从i+1开始往后的字符s[j]有无在B字符串中，如果在B字符串中并且s[i+1]~s[j]为B的子串，那么就用f[i][0]更新f[j][1]:f[j][1]=min(f[j][1],f[i][0]+1)  

```cpp
#include<bits/stdc++.h>
using namespace std;
int tr[2][1000010][26];
const int INF =2e9+7;
int n,m,idx;
int cnt[2][1000010];
int f[5005][2];
void insert(int x,string s){
    int p=0;
    for(int i=0;i<s.size();i++){
        int u=s[i]-'a';
        if(tr[x][p][u]==0){
            tr[x][p][u]=++idx;
        }
        p=tr[x][p][u];
    }
    cnt[x][p]++;//这个在字符串最后一个字符的结点编号处记录这个字符串有几个
}

int main(){
	string s;
	int len;
	cin>>n;
	for(int i=1;i<=n;i++){
		string op;
		cin>>op;
		insert(0,op);
	}
	cin>>m;
	for(int i=1;i<=m;i++){
		string op;
		cin>>op;
		insert(1,op);
	}
	cin>>s;
	len=s.size();
	s=" "+s;
	for(int i=0;i<=len;i++){
		for(int j=0;j<=1;j++){
			f[i][j]=INF;
		}
	}
	f[0][0]=f[0][1]=0;
	for(int i=0;i<=len;i++){
		if(f[i][0]<INF){
			int p=0;
			for(int j=i+1;j<=len;j++){
				int u=s[j]-'a';
				if(tr[1][p][u]){
					p=tr[1][p][u];
					if(cnt[1][p]>0) f[j][1]=min(f[j][1],f[i][0]+1);
				}else break;
			}
		}
		
		if(f[i][1]<INF){
			int p=0;
			for(int j=i+1;j<=len;j++){
				int u=s[j]-'a';
				if(tr[0][p][u]){
					p=tr[0][p][u];
					if(cnt[0][p]>0)f[j][0]=min(f[j][0],f[i][1]+1);
				}else break;
			}
		}
	}
	
	int ans=min(f[len][0],f[len][1]);
	if(ans>=INF)ans=-1;
	cout<<ans;
	return 0;
}
```


