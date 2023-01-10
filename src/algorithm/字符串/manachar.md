---
title: manachar算法
---

## 概念
求一个字符串的最长回文串的长度
时间复杂度O（n）
Manachar算法只能处理对称轴是某个字母的回文串（长度为奇数），但是回文串还有一种是对称轴在两个字母中间（长度为偶数），那么我们就得把他转换为对称轴是某个字母的回文串 （转换为长度为奇数的回文串）
转换方式：在所有字符之间和首尾加上没有出现过的字符（如#），然后再在新的字符首尾加上没有出现过的字符（如*），那么我们就可以把原来的回文串变成极大的左右端用#来表示的奇数的回文串，那么原串里回文串的长度等于新串的回文串的半径-1
a是原串，b是修改之后的串，p是以i为中心的回文串的最大半径
```cpp
void init(){
	b=b+"$";
	n=a.size();
	b=b+"#";
	for(int i=0;i<n;i++){
		b+=a[i];
		b+="#";
	}
	b+="^";
	n=b.size();
}
```
P[i]表示的是以i为中心的回文串的最大半径的长度
我们每次维护一个右边界最大的回文串，对称轴坐标为mid，右边界为mr
对于每个i有两种情况，当i在mr左边的时候，我们可以找到一个i关于mid对称的点j，p[j]已知，如果以j为对称轴的回文串在我们维护的右边界最大的回文串里，那么p[i]==p[j]，如果不在的话p[i]=mr-i，如果相等的话我们再一个一个往外阔
当i在mr右边的时候，我们就不能利用对称的性质，只能从1开始往外阔
阔的时候：while( s[i-p[i]]==s[i+p[i]] )p[i]++;
然后再更新mr：mr=max(mr,i+p[i])

```cpp
void manachar(){
	int mr=0,mid;
	for(int i=1;i<n;i++){
		if(i<mr) p[i]=min(p[2*mid-i],mr-i);
		else p[i]=1;
		while(b[i-p[i]]==b[i+p[i]])p[i]++;
		if(mr<i+p[i]){
			mr=i+p[i];
			mid=i;
		}
	}
}
```
## 例题：求在奇数长度的回文串里从大到小排序的前k个的长度的乘积（不存在返回-1
只找长度为奇数的，并且假设一个回文串的最大长度是5，那么1.3也是要找的长度是奇数的回文串，如果一个一个加的话肯定超时，那么我们先算好最大回文串的长度为奇数的个数，然后从大到小来处理，因为如果一个奇数后面还有比他大的奇数，那么他的个数等于他本身是最大回文串的个数加上比他大的最大回文串是奇数的个数和，那么其实我们从大到小来算，用一个数sum来记录到长度为i的回文串的个数，从大到小来枚举i，每次都加上本身的个数，那么到i的时候就是本身的个数加上后面比他大的回文串为奇数的个数。
当我们要找的剩下的数是k个的话，那么对于每个i，比较一下i的个数sum和k的关系，如果k大那么说明sum个i可以取完，那么就乘sum个i，k再减去sum，如果sum大，但是我们只能取k个i，然后k变0
最后判断k，如果等于0那么说明取够k个了，直接输出求的值，如果不是0，说明我们取的不够k个数输出-1.
```cpp
#include<bits/stdc++.h>
#define int long long
#include<vector>
using namespace std;
const int N=2e6+50,mod=19930726;
int p[N];
string a,b;
int n,k;
int cnt[N];
int ksm(int a,int b,int p){
	int ans=1;
	while(b){
		if(b&1)ans=ans*a%mod;
		a=a*a%mod;
		b>>=1;
	}
	return ans;
}
void init(){
	b+="$#";
	for(int i=0;i<n;i++){
		b+=a[i];
		b+="#";
	}
	b+="^";
}
void manachar(){
	int mr=0,mid;
	n=b.size();
	for(int i=1;i<n;i++){
		if(i>mr)p[i]=1;
		else p[i]=min(p[2*mid-i],mr-i);
		while(b[i-p[i]]==b[i+p[i]])p[i]++;
		if(i+p[i]>mr){
			mr=i+p[i];
			mid=i;
		}
		cnt[p[i]-1]++;
	}
}
signed main(){
	cin>>n>>k;
	cin>>a;
	init();
	manachar();
	int ans=1;
	n=a.size();
	int sum=0;
	for(int i=n;i>0;i--){
		if(i%2==0)continue;
		sum+=cnt[i];
		if(k>sum){
			ans=ans*ksm(i,sum,mod)%mod;
			k-=sum;
		}else{
			ans=ans*ksm(i,k,mod)%mod;
			k=0;
		}
	}
	if(k==0){
		cout<<ans<<endl;
	}else cout<<-1<<endl;
	return 0;
}

```