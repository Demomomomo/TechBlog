---
title: 树状数组
---

操作：  
1.在下标为i的数上+x：add（i，x）  
2.询问前x个数的前缀和：sum（x）  

要做区间修改，单点查询的话，可以对差分数组b做操作：  
1.在l~r的区间内加上d：b[l]+=d,b[r+1]+=d;  
2.询问x的值：sum（x）  

## 回转寿司
原题链接：https://www.luogu.com.cn/problem/P5459  
题意：有n个盘子，每个盘子里放a[i]个寿司，可以连续吃掉一段区间寿司，求连续吃掉的寿司总数在L~R之间的区间数。  

思路：设s数组是a的前缀和数组，那么有这样一组关系：  
L<=s[r]-s[l-1]<=R  
变化一下就是：  
s[r]-R<=s[l-1]<=s[r]-L  
那么就是对每个前缀和数，求在他之前的数大小在s[r]-R和s[r]-L之间的s[l-1]有几个  
（注意对于每个r：1<=l<=r，那么0<=l-1<=r-1，所以我们应该从s[0]开始遍历）  
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#include<vector>
int n,l,r,m;
const int N=1e5+10;
int tr[N*4];
int a[N],s[N];
vector<int> yy;
int lowbit(int x){
	return x&(-x);
}
int sum(int x){
	int ans=0;
	for(int i=x;i;i-=lowbit(i)) ans+=tr[i];
	return ans;
}
void add(int x,int c){
	for(int i=x;i<=m;i+=lowbit(i)){
		tr[i]+=c;
	}
}
signed main(){
	cin>>n>>l>>r;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		s[i]=s[i-1]+a[i];
	}
	for(int i=0;i<=n;i++){
		yy.push_back(s[i]);
		yy.push_back(s[i]-l);
		yy.push_back(s[i]-r);   
	}
	int ans=0;
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() );
	m=yy.size() ;
	for(int i=0;i<=n;i++){
		int id=lower_bound(yy.begin() ,yy.end() ,s[i] )-yy.begin() +1;
		int rr=lower_bound(yy.begin() ,yy.end() ,s[i]-l)-yy.begin() +1;
		int ll=lower_bound(yy.begin() ,yy.end() ,s[i]-r)-yy.begin() +1;
		ans+=(sum(rr)-sum(ll-1));
		add(id,1);
	}
	cout<<ans<<endl;
	return 0;
}
```




## F. Range Update Point Query
原题链接：https://codeforces.com/contest/1791/problem/F  
题意：  
有n个数组，有m个操作：  
1.1 l r：将l~r内的a[i]变成a[i]的位数之和。  
2.2 x:询问a[x]的值。  

思路：  
a[i]最大是1e9，那么我们最多操作三步就可以将他变成一位数，变成一位数之后再执行1操作的话就不变，那么我们就记录一下每个点的操作次数，最后直接暴力即可。  
1是区间修改，2是单点查询，那么我们就可以转换为对他的差分数组b进行单点修改，区间查询：  
将原数组的l~r的区间上个数加1，相当于:b[l]+=1;b[r+1]-=1;  
询问位置x的操作数相当与求x的前缀和：sum（x）  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
int n,m;
int a[N];
int tr[N*4];
int f(int x){
	int a=x/1000000000;
	int b=x/100000000%10;
	int c=x/10000000%10;
	int d=x/1000000%10;
	int e=x/100000%10;
	int ff=x/10000%10;
	int g=x/1000%10;
	int h=x/100%10;
	int i=x/10%10;
	int j=x%10;
	return a+b+c+d+e+ff+g+h+i+j;
}
int lowbit(int x){
	return x&(-x);
}
void add(int x,int d){
	for(int i=x;i<=n;i+=lowbit(i)){
		tr[i]+=d;
	}
}
int sum(int x){
	int ans=0;
	for(int i=x;i;i-=lowbit(i)) ans+=tr[i];
	return ans;
}
void sove(){
	memset(tr,0,sizeof tr);
	scanf("%d%d",&n,&m);
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
	}
	while(m--){
		int op;
		scanf("%d",&op);
		if(op==1){
			int l,r;
			scanf("%d%d",&l,&r);
			add(l,1);
			if(r+1<=n) add(r+1,-1);
		}else{
			int x;
			scanf("%d",&x);
			int cnt=sum(x);
			int num=a[x];
			while(cnt&&f(num)!=num){
				num=f(num);
				cnt--;
			}
			printf("%d\n",num);
		}
	}
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






