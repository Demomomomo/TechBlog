---
title: 小沙の不懂
---
原题链接：https://ac.nowcoder.com/acm/contest/46813/C  

题意：p是一个下标从0开始的0~9的排列，有两个数字a，b，在给你之前会做一遍a[i]=p[a[ i ] ],b[i]=p[b [i] ]的操作，那么问在变化之前的a b的大小关系  
数据范围：0<=a,b<=$10^{10^{5} }$  
（给的数字可能有前导0）  

误区：  
长度长的不一定数字就大  
比如a=00000003,b=7,a>b  

思路：可以把p[i]=x，看成是一个i->x的映射关系    
当长度一样时，如果ab串相等，对于每个i，都在p数组里映射同一个数，所以原来的数肯定一样。对于不相等的ab，可以在第一个不相等的位置让a[i]映射大的数，b[i]映射小的数，也可以让a[i]映射小的数，b[i]映射大的数，所以ab的大小关系不确定。  

当长度不一样的时候，假设a长度大于b长度  
如果没有前导0，那么a肯定大于b  
有前导0的话，我们要找找有没有a<=b的情况，如果有的话就是不确定，如果没有的话a肯定大于b  

找a<=b的情况让a尽可能小，那么就让a[0]映射到0，设f=a[0],a比b多出来x个字符。  
那么检查a的前i个字符是不是都等于f，只要有一个不等于f说明a的位数肯定比b多，那么a>b。  
当都等于f的时候，那么我们去掉a前面比b多的字符，再比较a，b。当后来的a=b的时候说明可能相等，那么a!=b。当不相等的时候，我们一位一位比较a和b，找到第一个a[i]!=b[i]的位置，如果b[i]==f,说明a>b，如果b[i]!=f，说明a在最小的情况下有可能< b，a和b大小补确定。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

const int N=5005,M=600;
int n,m;
string a,b;
signed main(){
	cin>>a>>b;
	if(a.size()==b.size()){
		if(a==b)cout<<"="<<endl;
		else cout<<"!"<<endl;
	}else{
		char ans='>';
		if(a.size()<b.size()){
			swap(a,b);
			ans='<';
		}
		int id=a.size()-b.size();
		char op=a[0];
		for(int i=0;i<id;i++){
			if(a[i]!=op){
				cout<<ans<<endl;
				return 0;
			}
		}
		string aa=a.substr(id);
		if(aa==b){
			cout<<"!"<<endl;
			return 0;
		}
		for(int i=0;i<b.size();i++){
			if(aa[i]!=b[i]){
				if(b[i]==op){
					cout<<ans<<endl;
				}else{
					cout<<"!"<<endl;
				}
				return 0;
			}
		}
	}
	return 0;
}
```







