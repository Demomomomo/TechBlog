---
title: 组合数
---
公式：  
$C_{n}^{m} =\frac{n！}{m！（n-m）！}$ 

## ab的值很小且mod的值固定

给定n组询问，每组询问给定两个正数a，b，请你输出 $C_{a}^{b}$ 的值。  

```cpp
const int N=2000+2,mod=1e9+7;
int n;
int c[N][N];
void init(){
	for(int i=0;i<2001;i++){
		for(int j=0;j<=i;j++){
			if(j==0)c[i][j]=1;
			else c[i][j]=(c[i-1][j]+c[i-1][j-1])%mod;
		}
	}
}
void sove(){
	init();
	cin>>n;
	while(n--){
	int a,b;
	cin>>a>>b;
	cout<<c[a][b]<<endl;
	}
	
}

```
## ab的值大mod固定

```cpp
const int N=1e5+2,mod=1e9+7;
int n;
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
void sove(){
	cin>>n;
	init();
	while(n--){
		int a,b;
		cin>>a>>b;
		int ans=(f[a]*fi[b]%mod*fi[a-b])%mod;
		cout<<ans<<endl;
	}
	
```

## a,b的值大且mod不固定

给定n组询问，每组询问给定三个整数，a，b，p，求 $ C_{a}^{b}$ %p的值。  

```cpp
const int N=2e5+10;
int n;
int ksm(int a,int b,int mod){
	int res=1%mod;
	while(b){
		if(b&1)res=res*a%mod;
		a=a*a%mod;
		b>>=1;
	}
	return res;
}
int c(int a,int b,int mod){
	if(b>a)return 0;
	int res=1;
	for(int i=a,j=1;j<=b;j++,i--){
		res=res*i%mod;
		res=res*ksm(j,mod-2,mod)%mod;
	}
	return res;
}
int getc(int a,int b,int mod){
	if(a<mod&&b<mod)return c(a,b,mod);
	else return c(a%mod,b%mod,mod)*getc(a/mod,b/mod,mod)%mod;
}
void sove(){
	cin>>n;
	while(n--){
		int a,b,mod;
		cin>>a>>b>>mod;
		cout<<getc(a,b,mod)<<endl;
		
	}
}

```

## 没有mod，答案很大需要使用高精度
输入a,b,求 $C_{a}^{b}$  

```cpp
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;


const int N = 5010;

int primes[N], cnt;
int sum[N];
bool st[N];


void get_primes(int n)
{
    for (int i = 2; i <= n; i ++ )
    {
        if (!st[i]) primes[cnt ++ ] = i;
        for (int j = 0; primes[j] <= n / i; j ++ )
        {
            st[primes[j] * i] = true;
            if (i % primes[j] == 0) break;
        }
    }
}


int get(int n, int p)
{
    int res = 0;
    while (n)
    {
        res += n / p;
        n /= p;
    }
    return res;
}


vector<int> mul(vector<int> a, int b)
{
    vector<int> c;
    int t = 0;
    for (int i = 0; i < a.size(); i ++ )
    {
        t += a[i] * b;
        c.push_back(t % 10);
        t /= 10;
    }
    while (t)
    {
        c.push_back(t % 10);
        t /= 10;
    }
    return c;
}


int main()
{
    int a, b;
    cin >> a >> b;

    get_primes(a);

    for (int i = 0; i < cnt; i ++ )
    {
        int p = primes[i];
        sum[i] = get(a, p) - get(a - b, p) - get(b, p);
    }

    vector<int> res;
    res.push_back(1);

    for (int i = 0; i < cnt; i ++ )
        for (int j = 0; j < sum[i]; j ++ )
            res = mul(res, primes[i]);

    for (int i = res.size() - 1; i >= 0; i -- ) printf("%d", res[i]);
    puts("");

    return 0;
}

```
