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

## P5482 [JLOI2011]不等式组
原题链接：https://www.luogu.com.cn/problem/P5482  
题意：  
有n个操作，每个操作有三种情况：  
1.Add a b c:向不等式组中加入一个不等式ax+b>c  
2.Del i:删除第i条添加的不等式  
3.Query k：询问x=k时当前不等式组中成立的不等式有几个。  

思路：  
对于ax+b>c的解有三种情况：  
1：a=0,这个时候只要判断一下b>c是否正确即可  
2：a>0，那么解就是 x>$\frac{c-b}{a} $  
3：a<0，那么解就是 x<$\frac{c-b}{a} $  

而且我们询问的时候只询问整数，那么我们就需要处理一下边界问题：  
当x>$\frac{c-b}{a} $ 时，整数解应该是 $\frac{c-b}{a} $ 下取整+1。  
当x<$\frac{c-b}{a} $ 时，整数解一个是 $\frac{c-b}{a} $ 上取整-1。  

下取整函数：floor(x)  
上取整函数：ceil(x)  

因为这个值域很大，所以我们要先读入所有添加和询问操作的数离散化一下，假设离散化之后的大小为m。  

那么我们可以用树状数组维护差分数组b来求每个整数为解满足的不等式的个数。当x>$\frac{c-b}{a} $  时，假设离散化之后的 $\frac{c-b}{a} $ 下标为id， 我们将[id,m]这个区间+1。同理当x>$\frac{c-b}{a} $  时，将[1,id]这个区间+1，当a==0的时候单独用个数来记录。  


```cpp
#include<bits/stdc++.h>
#include<vector>
#define int long long
using namespace std;
const int N=3e5+10;
struct name{
	string op;
	int num;
}q[N];
int st[N];
int n,m;
int tr[N*4];
int lowbit(int x){
	return x&(-x);
}
int idx;
vector<int> yy;
int ans[N];
int find(int x){
	return lower_bound(yy.begin() ,yy.end() ,x)-yy.begin() +1;
}
int sum(int x){
	int res=0;
	for(int i=x;i;i-=lowbit(i) )res+=tr[i];
	return res;
}
void add(int x,int c){
	for(int i=x;i<=m;i+=lowbit(i))tr[i]+=c;
}

void addb(int l,int r,int d){
	add(l,d);
	if(r+1<=m) add(r+1,-d);
}
signed main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		string op;
		cin>>op;
		if(op=="Add"){
			int a,b,c;
			cin>>a>>b>>c;
			idx++;
			int num;
			if(a==0){
				if(b>c){
					st[idx]=1;
					num=0;
				}
			}else if(a>0){
				num=floor((c-b)*1.0/a)+1;
				st[idx]=2;
				ans[idx]=num;
				yy.push_back(num); 
			}else {
				num=ceil((c-b)*1.0/a)-1;
				st[idx]=3;
				ans[idx]=num;
				yy.push_back(num); 
			}
			q[i]={op,num};
		}else if(op=="Del"){
			int k;
			cin>>k;
			q[i]={op,k};
		}else{
			int num;
			cin>>num;
			yy.push_back(num);
			q[i]={op,num}; 
		}
	}
	sort(yy.begin() ,yy.end() );
	yy.erase(unique(yy.begin() ,yy.end() ),yy.end() );
	m=yy.size() ;
	idx=0;
	int con=0;
	for(int i=1;i<=n;i++){
		string op=q[i].op ;
		int num=q[i].num ;
		int id;
		if(op=="Add"){
			idx++;
			if(st[idx]==1){
				con++;
			}else if(st[idx]==2){
				id=find(num);
				addb(id,m,1);
			}else if(st[idx]==3){
				id=find(num);
				addb(1,id,1);
			}
		}else if(op=="Del"){
			int k=q[i].num ;
			if(st[k]==1){
				con--;
			}else if(st[k]==2){
				num=ans[k];
				id=find(num);
				addb(id,m,-1);
			}else if(st[k]==3){
				num=ans[k];
				id=find(num);
				addb(1,id,-1);
			}
			st[k]=0;
		}else{
			id=find(num);
			cout<<sum(id)+con<<endl;
		}
	} 
	return 0;
}


```
