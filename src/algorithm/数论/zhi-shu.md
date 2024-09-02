---
title: 质数约数
---

# 质数


含义：除了1和他本身外，不能被其他自然数整数的数叫做质数，否则为合数  

注：1既不是质数也不是合数  


## 试除法判断素数  

思想：对于一个数n，由于只有1和他本身能被整除，那么我们只用枚举2~n-1看是否出现被整除的情况，如果没有说明是素数  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
	int x;
	cin>>x;
	//特判1
	if(x==1){
		cout<<"No"<<endl;
		continue;
	}
	bool f=true;
	//暴力从2~x-1
	for(int i=2;i<=x-1;i++){
		if(x%i==0){
			f=false;
			break;
		}
	}
	if(f)cout<<"Yes"<<endl;
	else cout<<"No"<<endl;
	return 0;
}
```


如果对于一个数x，可以被n整除，商为y，那么n=x*y，设x<=y，那么我们只用枚举x，如果n可以被x整除，那么也可以被y整除。所以对于上面判断方法可以优化：只用看在前半部分的数能否被n整除即可  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
	int x;
	cin>>x;
	if(x==1){
		cout<<"No"<<endl;
		continue;
	}
	bool f=true;
	for(int i=2;i*i<=x;i++){
		if(x%i==0){
			f=false;
			break;
		}
	}
	if(f)cout<<"Yes"<<endl;
	else cout<<"No"<<endl;
	return 0;
}
```
那么上面的方法也有问题，如果i为1e9，那么i*i就会发生溢出，不能和x比了。所以我们把i*i<=x换为i<=x/i，这样就不会发生溢出了  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
	int x;
	cin>>x;
	if(x==1){
		cout<<"No"<<endl;
		continue;
	}
	bool f=true;
	for(int i=2;i<=x/i;i++){
		if(x%i==0){
			f=false;
			break;
		}
	}
	if(f)cout<<"Yes"<<endl;
	else cout<<"No"<<endl;
	return 0;
}
```

## 分解质因数

根据算术基本定理，不考虑排列顺序的情况下，每个正整数都能够以唯一的方式表示成它的质因数的乘积。  

$n=p_{1}^{x_{1} }  \times p_{2}^{x_{2} } \times p_{3}^{x_{3} }... \times p_{n}^{x_{n} }$

pi代表质因数，xi代表指数  

那么我们将他的因数i从小到大枚举，如果可以整除i，那么我们就将x一直除以i到不能除为止，然后输出i和指数（除以i的次数），然后再继续枚举。由于在前面将所有的整除的因数都除了，可以保证后来所能整除的因数都为质因数。  

进一步优化：枚举可以不用枚举到x-1，可以枚举到$\sqrt{x}$,相当于枚举了n=x*y，x<=y中的x。  

并且可以证明对于x，只能有一因数大于 $\sqrt{x}$：运用反证法，如果有两个因数大于$\sqrt{x}$，那么相乘就大于x，不等于x。  

到最后如果剩下的数>1，说明剩下的数是唯一一个大于$\sqrt{x}$的因数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
	int x;
	cin>>x;
	for(int i=2;i<=sqrt(x);i++){
		if(x%i==0){
			int ans=0;
			while(x%i==0){
				x/=i;
				ans++;
			}
			cout<<i<<" "<<ans<<endl;
		}
	}
	if(x>1)cout<<x<<" "<<1<<endl;
	cout<<endl;
	return 0;
}
```

## 埃式筛法筛质数

求出1~n中的所有质数的个数  

时间复杂度O（nlog（logn））  

思想：从2~n开始枚举，每次碰到素数记录一下，并且将他的倍数（合数）给筛掉，那么可以保证后面没有被筛掉的都是素数  

```cpp
	cin>>n;
	int con=0;
	for(int i=2;i<=n;i++){
		if(!st[i]){
			st[i]=true;
			prim[++con]=i;
			for(int j=i;j<=n;j+=i)st[j]=true;
		}
	}
	cout<<con;
```
# 约数

约数也叫因数，如果n能被m整除，那么m就叫做n的约数  

## 试除法求约数

给定n个数ai，求每个数的约数，并从小到大排序输出  

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
const int N=1e6+10;
int prim[N];
bool st[N];
int main(){
	cin>>n;
	vector<int> v;
	while(n--){
		v.clear();
		int x;
		cin>>x;
		for(int i=1;i<=x/i;i++){
			if(x%i==0){
				v.push_back(i);
				if(x/i!=i)v.push_back(x/i);
			}
		}
		sort(v.begin(),v.end());
		for(int i=0;i<v.size();i++){
			cout<<v[i]<<" ";
		}
		cout<<endl;
	}
	return 0;
}
```

##  最大公约数

最大公约数：两个或多个整数共有约数中最大的一个数，也称最大公因数，最大公因子  

用(a，b)表示a和b的最大公因数：有结论(a，b)=(a，ka+b)，其中a、b、k都为自然数。  

也就是说，两个数的最大公约数，将其中一个数加到另一个数上，得到的新数，其公约数不变.  

那么我们就可以将(a，ka+b)，通过（ka+b）%a的方式，变为b，那么就变为（a，b）了  

基本思路就是取余，一直取到其中一个结果为0的时候就可以结束，剩下的一个数就是最大公约数  

```cpp
int gcd(int a,int b){
	return b?gcd(b,a%b):a;
}
```
