---
title: 同余
---

## k倍区间
原题链接：https://www.lanqiao.cn/problems/97/learning/?page=1&first_category_id=1&sort=students_count&name=k  
题意：  
有n个数，如果一段连续的区间的和是k的倍数，那么这个区间就称之为k倍区间，求k倍区间的个数。  
思路：  
转换一下题意就是有多少对l,r满足(s[r]-s[l-1])%k==0  
其实就是看%k之后结果相等的前缀和有几对  
那么就将%k相等的前缀和存在一个数组add里，设%k之后结果是id，那么我们就将这个前缀和存在add[id]里。那么就是算对于每个id，add[id]有几对不同的前缀和，设add[id]里存的前缀和个数为m，那么答案就是C（2，m）。  
那么最后还需要加上add[0]里前缀和的个数，因为他的本身也是k的倍数。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=1e5+10;
int n,k;
int a[N],s[N];
int add[N];
signed main(){
	cin>>n>>k;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		s[i]=s[i-1]+a[i];
	}
	for(int i=1;i<=n;i++){
		int op=s[i]%k;
		add[op]++;
	}
	for(int i=0;i<k;i++){
		if(add[i]>=2){
			int op=add[i]*(add[i]-1);
			ans+=op/2;
		}
	}
	ans+=add[0];
	cout<<ans<<endl;
	return 0;
}
```
## 倍数问题
原题链接：  
https://pintia.cn/problem-sets/1640362170426494976/exam/problems/1640362221630545927  
题意：  
有n个数，我们需要选三个数，使得这三个数的和是p的倍数且值最大。  
思路：  
(a+b+c)%p==a%p+b%p+c%p  
那么说明我们选的数如果相加起来是p的倍数的话，实际上只用看每个数的余数就可以了  
有需要找和最大的数，那么我们就存%p之后的余数原本的数，然后从大到小排序，肯定是需要选前面大的数。  
设i=a%p,j=b%p,k=c%p  
那么实际上就是(i+j+k)%p==0  
那么我们枚举i和j，算出k  
k就是(p-(i+j)%p+p)%p  
然后再分类讨论：  
如果i!=j!=k，那么都取这三个余数中存的最大数。  
如果i==j&&j!=k,那么我们就需要看看i里存的数的大小是否大于等于2，如果大于等于2的话取前两个最大的，否则没有方案。  
i==k&&k！=j和j==k&&i!=j同理  
那么对于三个都相等的情况，就判断个数是不是大于3就可以了。  

```cpp
#include<bits/stdc++.h>
#include<vector>
using namespace std;
int n,p;
vector<int> a[1005];
bool cmp(int a,int b){
	return a>b;
}
int main(){
	cin>>n>>p;
	for(int i=1;i<=n;i++){
		int x;
		cin>>x;
		int id=x%p;
		a[id].push_back(x);
	}
	for(int i=0;i<p;i++){
		sort(a[i].begin() ,a[i].end() ,cmp);
	}
	int con=0;
	for(int i=0;i<p;i++){
		for(int j=0;j<p;j++){
			int k=(p-(i+j)%p+p)%p;
			if(i==j&&j==k){
				if(a[i].size() >=3){
					con=max(con,a[i][1]+a[i][0]+a[i][2]);
				}
			}
			if(i!=j&&j!=k&&i!=k){
				if(a[i].size() >0&&a[j].size() >0&&a[k].size() >0){
					con=max(con,a[i][0]+a[j][0]+a[k][0]);
				}
			}
			if(i==j&&j!=k){
				if(a[i].size() >=2&&a[k].size() >0){
					con=max(con,a[i][0]+a[i][1]+a[k][0]);
				}
			}
			if(i==k&&k!=j){
				if(a[i].size() >=2&&a[j].size() >0){
					con=max(a[i][0]+a[i][1]+a[j][0],con);
				}
			}
			if(j==k&&i!=j){
				if(a[j].size() >=2&&a[i].size() >0){
					con=max(con,a[j][0]+a[j][1]+a[i][0]);
				}
			}
		}
	}
	cout<<con;
	return 0;
}

```



