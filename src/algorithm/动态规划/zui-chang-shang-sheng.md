---
title: 最长上升子序列模型
---

基本状态：f[i]表示所有以i结尾的最长上升子序列的长度。  
状态转移：  
```cpp
for(int j=1;j<i;j++)
if(a[j]<a[i]) f[i]=max(f[i],f[j]+1);
```

## 变形
例题：友好城市  
原题链接：https://www.acwing.com/problem/content/1014/  
题意：  
南北两岸各有n个城市，每个城市都有唯一一个与之相连的城市的道路。有n个关系，分别表示南岸位置在x的城市和北岸位置在y城市之间有条道路，求最多的不交叉的道路。  

思路：  
将南岸的城市按位置从小到大排序，再将北岸的城市附上这个次序，如图：  
绿色的是北岸的城市按南岸位置排序得出的序号，红色是我们选出的一个合法的方案  
<img src="https://img-blog.csdnimg.cn/be215301c6254d299fa3c99fef118985.jpeg#pic_center" alt="Pulpit rock" width="304" height="228">  

那么我们可以发现，合法的方案就是北岸的城市位置从左到右序号的最长上升子序列  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=5005;
int f[N];
int n;
struct name{
	int x,y,id;
}q[N];
bool cmp1(name a,name b){
	return a.x <b.x ;
}
bool cmp2(name a,name b){
	return a.y <b.y ;
}
void sove(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>q[i].x>>q[i].y ;
	}
	sort(q+1,1+q+n,cmp1);
	for(int i=1;i<=n;i++) q[i].id =i;
	sort(q+1,q+1+n,cmp2);
	for(int i=1;i<=n;i++){
		f[i]=1;
		for(int j=1;j<i;j++){
			if(q[j].id <q[i].id )f[i]=max(f[i],f[j]+1);
		}
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		ans=max(ans,f[i]);
	}
	cout<<ans<<endl;
}
int main(){
	int t=1;
	//cin>>t;
	while(t--){
		sove();
	}
	return 0;
}

```