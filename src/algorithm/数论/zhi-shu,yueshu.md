---
title: 质数约数
---

## 等比等差数的前n项和公式

### 等差数列
$S_{n}=\frac{(a_{1}+a_{n})n}{2}$  
=$a_{1}n+\frac{n(n-1)d}{2}$ 
### 等比数列
a1为首项，q为公差  

$S_{n}=a_{1}n$ (q=1)  
$S_{n}=\frac{a_{1}(1-q^{n} )}{1-q}$ (q!=1)  


## 质数

定义：  

在大于1的整数中，如果只包含1和他本身的两个约数，就被称作质数或素数  

### 质数的判定

1.试除法判定质数  

时间复杂度:$O(\sqrt{n})$  

```cpp
bool cheek(int x){
    if(x<2) return false;
    for(int i=2;i<=x/i;i++){
        if(x%i==0) return false;
    }
    return true;
}

```

### 分解质因数

时间复杂度：$O(\sqrt{n})$  

i从2枚举到x，如果i能被x整除，那么我们就找有几个i，并把他除尽  

n中最多只包含一个大于sqrt（n）的质因子，所以我们i枚举到n/i就可以了，最后再判断一下x是否大于1，如果是的话说明x就是那个大于sqrt（n）的质因子，把最后的x也算上就可以了  

```cpp
void zhiyinshu(int x){
	for(int i=2;i<=x/i;i++){
		if(x%i==0){
			int s=0;
			while(x%i==0){
				s++;
				x/=i;
			}
			printf("%d %d\n",i,s);
		}
	}
	if(x>1)printf("%d 1\n",x);
}

```

### 筛质数

埃氏筛法    

时间复杂度：$O(n\log_{}{n})$

1~n中大概有 $\frac{n}{\ln_{}{n}}$ 个质数  


i从2开始枚举，枚举到n，将大于i的i的倍数全都删掉  
没有被删掉的数就是质数  

```cpp
void pr(int x){
	for(int i=2;i<=n;i++){
		if(!st[i]){
			prime[++cnt]=i;
			for(int j=i+i;j<=n;j+=i){
				st[j]=true;
			}
		}
	}
	for(int i=1;i<=cnt;i++)printf("%d ",prime[i]);
}
```

线性筛法  
时间复杂度：O(n)  

```cpp
void pr(int x){
	for(int i=2;i<=x;i++){
		if(!st[i])prime[++cnt]=i;
		for(int j=1;prime[j]<=x/i;j++){
			st[prime[j]*i]=true;
			if(i%prime[j]==0)break;
		}
	}
}
```
#### 例题：质数距离
原题链接：  
https://www.acwing.com/problem/content/198/  

题意：  

给出一个区间[l,r],求这个区间里的所有相邻的两个质数的差值的最小距离和最大距离的两组数，如果距离相同输出第一组  

l,r<=2e9+10  
r-l<=1e6  

思路：  

由于lr范围很大，所以我们不能直接从1~n直接筛质数  
对于一个数，如果他是合数，那么他一定有一个质因子在 $\sqrt{n}$ 的范围内。那么对于每个在2e9以内的lr，一定会有个质因子在
$\sqrt{2e9}$ ，即50000以内，那么我们可以先处理出来这些质数，然后对于每个质数，用埃氏筛法将他们的倍数全都删去(删一个质数的倍数的时间复杂度ln(n)),那么最后的时间复杂度就能优化  

这里有一个小技巧，lr里合数的值域是2e9，但是l~r的区间是1e6，那么我们就可以将l~r这段区间通过-l映射到0~1e6  

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll l,r;
const int N=1e6+10;
bool st[N];
ll prim[N];
int cnt;
void init(){
	cnt=0;
	memset(st,false,sizeof st);
	for(int i=2;i<=50000;i++){
		if(!st[i]) prim[++cnt]=i;
		for(int j=1;prim[j]<=50000/i;j++){
			st[prim[j]*i]=true;
			if(i%prim[j]==0)break;
		}
	}
}
int main(){
	while(cin>>l>>r){
		init();
		memset(st,false,sizeof st);
		for(int i=1;i<=cnt;i++){
			ll p=prim[i];
			for(ll j=max(2*p,(l+p-1)/p*p);j<=r;j+=p){
				st[j-l]=true;
			}
		}
		cnt=0;
		
		int miid=0,mxid=0;
		ll mi=3e9,mx=0;
		for(int i=0;i+l<=r;i++){
			if(!st[i]&&i+l>1) {
				prim[++cnt]=i+l;
//				cout<<"=="<<i+l<<endl;
			}
		}
		if(cnt<2){
			cout<<"There are no adjacent primes."<<endl;
		}else{
			for(int i=1;i+1<=cnt;i++){
				if(prim[i+1]-prim[i]>mx){
					mxid=i;
					mx=prim[i+1]-prim[i];
				}
				if(prim[i+1]-prim[i]<mi){
					miid=i;
					mi=prim[i+1]-prim[i];
				}
			}
			printf("%lld,%lld are closest, %lld,%lld are most distant.\n",prim[miid],prim[miid+1],prim[mxid],prim[mxid+1]);
		}
	}
	return 0;
}


```




## 约数

试除法求一个数的所有约数  


```cpp
void yue(int x){
	for(int i=1;i<=x/i;i++){
		if(x%i==0){
			y[++cnt]=i;
			if(x/i!=i) y[++cnt]=x/i;
		}
	}
}
```

### 约数个数

对于一个数n，写成n= $\alpha 1^{\beta 1}*\alpha 2^{\beta 2}...*\alpha k^{\beta k}$ 的形式  
($\alpha$ 都是质数)  
那么他的约数个数就是： $(\beta1 +1)(\beta 2+1)...(\beta k+1)$  

因为每个约数都是由质数组成的，对于每种质因数 $\alpha i$，我们可以选（0~$\beta i$)个，每种质因数选完个数之后相乘组成的数就是一个约数。那么每种有 $\beta i$+1种选择，所以将所有 $\alpha i$ 的选择数相乘就是约数个数  

原题链接：  
https://www.acwing.com/problem/content/872/  

```cpp
#include<bits/stdc++.h>
#include<map>
#define int long long
using namespace std;
typedef long long ll;
const long long mod=1e9+7;
int n,m;
map<ll,ll> mp;
signed main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		int x;
		cin>>x;
		for(int j=2;j<=x/j;j++){
			if(x%j==0){
				int s=0;
				while(x%j==0){
					s++;
					x/=j;
				}
				mp[j]+=s;
			}
		}
		if(x>1)mp[x]++;
	}
	ll ans=1;
	for(auto it=mp.begin();it!=mp.end();it++){
		int op=it->second;
		ans=ans*(op+1)%mod;
	}
	cout<<ans;
	return 0;
}

```

### 约数之和

对于一个数n，写成n= $\alpha 1^{\beta 1}*\alpha 2^{\beta 2}...*\alpha k^{\beta k}$ 的形式  

他的约数之和就是：$(\alpha1^{0}+\alpha1^{1}+...+\alpha1^{\beta1})*...*(\alpha k^{0}+\alpha k^{1}+...+\alpha k^{\beta k})$  

根据乘法分配率，将其展开之后，对于每个 $\alpha i$ 来说，都会有其他的 $\alpha q^{\beta q}$ 与之相乘，也符合上面在进行约数个数计算的时候每个数组成的规律  




```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int mod=1e9+7;
int n;
int ksm(int a,int b,int p){
	int ans=1;
	a%=p;
	while(b){
		if(b&1)ans=ans*a%p;
		a=a%p*a%p;
		b>>=1;
	}
	return ans;
}
signed main(){
	cin>>n;
	map<int,int> mp;
	for(int i=1;i<=n;i++){
		int x;
		cin>>x;
		for(int j=2;j<=x/j;j++){
			if(x%j==0){
				int s=0;
				while(x%j==0){
					s++;
					x/=j;
				}
				mp[j]+=s;
			}
		}
		if(x>1) mp[x]++;
	}
	int ans=1;
	for(auto it=mp.begin();it!=mp.end();it++){
		int x=it->first;
		int y=it->second;
		int op=ksm(x,y+1,mod);
		ans=ans%mod*(1-op)%mod*ksm(1-x,mod-2,mod)%mod;
	}
	cout<<ans<<endl;
	
	return 0;
}
```

















