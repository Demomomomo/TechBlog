---
title: 字典树
---

## 结构

![20230403143912](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230403143912.png)

边表示字母，根节点到某个结点代表一个字符串，例如1->2->5就是'aa'  

用一个二维数组来表示字典树：tr[i][j]  

tr[i][j]=x表示编号为i的点，下一个字符是第j个字母的点的编号是x(j从0开始，对应小写a)  

例如上图：  

tr[1][0]=2表示编号为1的结点，下一个字符是a的结点编号是2  

## 插入字符串


例如我们要插入字符串s=abcd  

那么我们需要从根节点一个一个插入每个字符  

对于每个字符，如果已经存在，那么我们就遍历下一个字符  

如果不存在，我们就新建一个结点将他插入  

例如：  

根节点p=0  

对于每个s[i]  

我们先找到s[i]是第几个字符：u=s[i]-'a'  

然后从根节点开始遍历：  

当tr[p][u]==0的时候，说明没有建立这个结点，我们就建立他：tr[p][u]=++idx  

当tr[p][u]!=0的时候，说明有这个点，我们就遍历他的下一个字符看看是否建立  

总的来说就是如果没有建点就建点，建了就看下一个  

```cpp
void insert(string s){
    int p=0;
    for(int i=0;i<s.size();i++){
        int u=s[i]-'a';
        if(tr[p][u]==0){
            tr[p][u]=++idx;
        }
        p=tr[p][u];
    }
    cnt[p]++;//这个在字符串最后一个字符的结点编号处记录这个字符串有几个
}

```



## 查找字符串

就从根节点开始，对每个s[i]，看看tr[p][u]是否存在，如果存在就找下一个，如果不存在直接返回false，到最后一个编号为p的字符，如果cnt[p]>0就说明存在，返回true  

```cpp
bool query(string s){
    int p=0;
    for(int i=0;i<s.size();i++){
        int u=s[i]-'a';
        if(tr[p][u]==0)return false;
        p=tr[p][u];
    }
    if(cnt[p]) return true;
}


```

## 例题

### 字符串统计

原题链接：  
https://www.acwing.com/problem/content/837/  

题意：  

维护一个字符串集合，支持两种操作：  

1.I x:将字符串x插入集合中  

2.Q x:将询问字符串在集合中的个数  


```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1e5+10;
int n;
int cnt[N];
int tr[N][30];
int idx;
void insert(string s){
	int p=0;
	for(int i=0;i<s.size();i++){
		int u=s[i]-'a';
		if(tr[p][u]==0) tr[p][u]=++idx;
		p=tr[p][u];
	}
	cnt[p]++;
}
int query(string s){
	int p=0;
	for(int i=0;i<s.size();i++){
		int u=s[i]-'a';
		if(tr[p][u]==0) return 0;
		p=tr[p][u];
	}
	return cnt[p];
}
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		string op,s;
		cin>>op>>s;
		if(op=="I"){
			insert(s);
		}else{
			cout<<query(s)<<endl;
		}
	}
	return 0;
}
```

### 最大异或对

原题链接：  
https://www.acwing.com/problem/content/145/  

题意：  

有n个整数，在这些整数中选两个数进行异或运算，得到的最大结果是多少  

思路：  

想让异或运算最大的话，对于一个数的每个二进制位的数，我们都选择与之不同的数走：比如一个数的某个二进制位是0，那么我们就需要走是1的那条路。并且是从最高位开始走  

对n个数建立一个字典树

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=4e6+10;
int n;
int a[N];
int tr[N][3];
int idx;
int cnt[N];
void insert(int x){
	int p=0;
	for(int i=31;i>=0;i--){
		int u=x>>i&1;
		if(tr[p][u]==0) tr[p][u]=++idx;
		p=tr[p][u];
	}
	cnt[p]=x;
}
int query(int x){
	int p=0;
	for(int i=31;i>=0;i--){
		int u=x>>i&1;
		if(tr[p][!u]) p=tr[p][!u];
		else p=tr[p][u];
	}
	return x^cnt[p];
}
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		insert(a[i]);
	}
	int mx=0;
	for(int i=1;i<=n;i++){
		mx=max(mx,query(a[i]));
	}
	cout<<mx;
	return 0;
}
```
























