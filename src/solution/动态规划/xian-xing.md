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


