---
title: 鸡格线
---

原题链接：https://ac.nowcoder.com/acm/contest/46800/G?&headNav=acm


你有一个长为n的数组a，需要支持以下两种操作：  
1.输入l，r，k，对区间[l,r]中所有数字执行a[i]=10 $\sqrt{a[i]}$ ,round为四舍五入函数  
2.输出当前数组所有数字的和。  
你需要正确处理m次这样的操作  

思路：  
对1e9一直开根号的话，大概操作9次左右最后会变成1  
数据范围a[i]<=1e9，因为开根号很少次就可以得到一个固定的值，那么我们找一个数试试一直按照上面的函数改变几次会变成一个固定的值  
那么对于1e9来说，他操作9次之后就变成了100，而且100进行上述的操作时候还是100，那么说明对于数组a，我们最多操作n*10次操作每个数就可以变成一个固定的值。  
那么我们用set来存储还没有变成100的值的下标，每次需要操作的时候我们就从一个大于等于l的下标开始，大于r结束的set里存的每个下标id，对a[id]进行k次操作就行了  
为了方便计算sum，我们每次对一个数进行完k次操作的时候，减去原来他的值再加上他变化后的值就可以了

```cpp
#include<bits/stdc++.h>
#include<set>
#include<vector>
#define int long long
using namespace std;
const int N=1e5+10;
int n,m;
int a[N];
int f(int x){
	int op=round(10.0*sqrt(x));
	return op;
}
signed main(){
	cin>>n>>m;
	set<int> st;
	int sum=0;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		st.insert(i); 
		sum+=a[i];
	}
	while(m--){
		int op;
		cin>>op;
		if(op==1){
			int l,r,k;
			cin>>l>>r>>k;
			auto s=st.lower_bound(l);// 
			vector<int> yy;
			for(auto i=s;i!=st.end() &&*i<=r;i++){
				int con=k;
				int id=*i;
				while(con&&a[id]!=f(a[id])){
					sum-=a[id];
					a[id]=f(a[id]);
					sum+=a[id];
					con--;
				}
				if(a[id]==f(a[id])) yy.push_back(id) ; //这里注意我们不能直接在st里删除id这个下标，不然指针就会指向删除之后的空值。这里我们先用一个vector数组来存需要删除的下标，在遍历完st之后我们再删除
			}
			for(int i=0;i<yy.size() ;i++) st.erase(yy[i]);、、删除下标 
		}else{
			cout<<sum<<endl;
		}
	}
	return 0;
}
```
