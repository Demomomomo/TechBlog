---
title: 暴力优化
---

## 7-6 莫比乌斯最大值isUsefulAlgorithm

题意：  
a数组有n个数，b数组有n个数 
从a，b两个数组中任选两个数a[i],b[j]，算出值a[i] * b[j] * gcd(a[i],b[j])  
求这个值的最大值  


###  1.$n\sqrt{n}$做法

用一个结构体数组存因数是i的a中最大的数，因数是i的b中最大的数  
```cpp
struct name{
    int a,b;
}q[N];
```

然后遍历a和b，对于每个a[i]，试除法找出a[i]的所有因数x，将q[x].a跟a[i]取最大，b数组同理（时间复杂度 $n\sqrt{n}$）  

然后再遍历每个因数i，求q[i].a* q[i].b * gcd(q[i].a,q[i].b),取最大就可以了  

注意：define int long long会使时间复杂度和空间复杂度加倍，开的话过不去  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
const int N=1e5+10;
typedef long long ll;
int a[N],b[N];
struct name{
	int a,b;
}q[N];
signed main(){ 
	cin>>n;
	for(int i=1;i<=n;i++)cin>>a[i];
	for(int i=1;i<=n;i++)cin>>b[i];
	sort(a+1,a+1+n);
	sort(b+1,b+1+n);
	ll mx=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j*j<=a[i];j++){
			if(a[i]%j==0){
				q[j].a =max(q[j].a ,a[i]);
				if(j!=a[i]/j) q[a[i]/j].a=max(q[a[i]/j].a,a[i]);
			}
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j*j<=b[i];j++){
			if(b[i]%j==0){
				q[j].b =max(q[j].b ,b[i]);
				if(j!=b[i]/j) q[b[i]/j].b=max(q[b[i]/j].b,b[i]);
			}
		}
	}
	for(int i=1;i<=a[n]&&i<=b[n];i++){
		mx=max(mx,(ll)q[i].a *q[i].b *i);
	}
	cout<<mx;
	return 0;
}
```

### 2.nlogn做法

枚举每个gcd的值g，对于每个g再枚举他的倍数i（调和级数，时间复杂度nlogn），看看a和b数组中包含的最大的i是多少  

最后枚举完g的倍数之后，将a和b包含的g的最大的数相乘再乘g取最大就可以了  

用map会超时(时间复杂度（O（logn）)，用unordered_map（时间复杂度O(1)）  

关于调和级数：  
形如 $\frac{n}{1}+\frac{n}{2}+\frac{n}{3}...+\frac{n}{n}$ 的柿子  

他的最后结果趋近于 $\ln_{}{n}$







```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1e5+10;
int n,m;
int a[N],b[N];
typedef long long ll;
int main(){
	scanf("%d",&n);
	int mx=0;
	unordered_map<int,int> mpa;
	unordered_map<int,int> mpb;
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
		mx=max(mx,a[i]);
		mpa[a[i]]++;
	}
	for(int i=1;i<=n;i++){
		scanf("%d",&b[i]);
		mx=max(mx,b[i]);
		mpb[b[i]]++;
	}
	ll ans=0;
	for(int g=1;g<=mx;g++){
		int am=0,bm=0;
		for(int i=g;i<=mx;i+=g){
			if(mpa[i]){
				am=max(am,i);
			}
			if(mpb[i]){
				bm=max(bm,i);
			}
		}
		ans=max(ans,(ll)am*bm*g);
	}
	printf("%lld",ans);
	return 0;
}

```


## Tokitsukaze and Three Integers

原题链接：https://ac.nowcoder.com/acm/contest/46810/L
题意：  
有一个长度为n的数组，想知道三元组[i,j,k]的数量，满足：  
·i!=j&&i!=k&&j!=k  
·（a[i]*a[j]+a[k])%p=x%p  
思路：  
化成a[i]*a[j]%p=（x-a[k])%p
先算出所有i！=j时，a[i]*a[j]的值的个数  
然后对于每个x和k，用ans[x]数组来存放x-a[k]的值的个数
但是会有k==i和k==j的情况，减去这两种情况就好了
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,p;
const int N=5010;
ll a[N];
ll ans[N];
int main(){
	scanf("%d%d",&n,&p);
	for(int i=1;i<=n;i++)scanf("%lld",&a[i]);
	unordered_map<ll,ll> mp;//用map会超时
	for(int i=1;i<=n;i++){
		for(int j=i+1;j<=n;j++){
			ll op=(ll)a[i]*a[j]%p;
			mp[op]++;
		}
	}
	for(int x=0;x<p;x++){
		for(int k=1;k<=n;k++){
			ll op=(ll)((x-a[k])%p+p)%p;
			ans[x]+=mp[op];//记录每个x的个数
		}
	}
	for(int i=1;i<=n;i++){
		for(int k=1;k<=n;k++){
			if(i==k)continue;
			int xx=(a[i]*a[k]%p+a[k])%p;//减去k==i和k==j的情况的个数
			ans[xx]--;
		}
	}
	for(int i=0;i<p;i++){
		printf("%lld ",ans[i]*2);
	}
	return 0;
}
```



