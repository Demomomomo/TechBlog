---
title: STL 
---

## 特殊堆栈
原题链接：  
https://pintia.cn/problem-sets/994805046380707840/exam/problems/994805053695574016  
题意：  
对于一个栈有n个操作，三个类型：  
1.Push x：将x加入栈中  
2.Pop：将栈顶元素输出并删除，如果栈中元素为0，那么就不合法输出Invalid  
3.PeekMedian：返回栈中所有数的中间值，设栈中元素为x，当x为偶数的时候输出第x/2大的数，如果x为奇数的时候输出(x+1)/2大的数。如果栈中元素为0，那么不合法，输出Invalid  
思路：  
一个栈st来模拟对栈的操作  
一个multiset a来找中间值  
一个multiset的指针mi来指向中间值  
l记录mi左边的元素数量，r记录mi右边的元素数量  


对于插入x的操作，如果我们插入之前栈为空，那么我们插入的数就是唯一一个值，也就是中间值。那么我们将x插入st和multiset之后，mi指向x的地址，l设为0，r设为0；如果元素不为空，那么我们就比一下这个值和mi所指向的数的大小，看x插在mi前还是mi后，如果x<*mi，那么l++，否则就r++。  

对于pop操作，我们先找到栈顶元素x，将他删掉，再寻找他在a中最先出现的的地址it。如果x<*mi,那么l--；如果x> *mi，那么r--；当x== *mi的时候，如果it==mi：如果mi的左边有数就向左移，否则向右移，之后删除it；如果it！=mi，那么it一定在mi左边，那么直接删除it，l--就可以了。  


对于输出中值，因为找中间位置，当l>r的时候mi向右移  
当l< r的时候往左移  
最后mi指向的数就是中值。  

```cpp
#include<bits/stdc++.h>
#include<stack>
#include<set>
#define int long long
using namespace std;
stack<int> st;
multiset<int> a;
int n;
int l,r;
signed main(){
	cin>>n;
	multiset<int> ::iterator mi;
	for(int i=1;i<=n;i++){
		string s;
		int x;
		cin>>s;
		if(s=="Push"){
			cin>>x;
			if(st.size() ==0){
				st.push(x);
				a.insert(x);
				mi=a.begin() ;
				l=0,r=0;  
			}else{
				if(x<*mi) l++;
				else r++;
				st.push(x);
				a.insert(x);  
			}
		}else if(s=="Pop"){
			if(st.size() ==0){
				cout<<"Invalid"<<endl;
			}else{
				int x=st.top() ;
				st.pop() ;
				cout<<x<<endl;
				multiset<int> ::iterator it=a.lower_bound(x) ;
				if(x<*mi){
					a.erase(it);
					l--; 
				}else if(x>*mi){
					a.erase(it);
					r--; 
				}else{
					if(it==mi){
						if(l>0){
							l--;
							mi--;
							a.erase(it); 
						}else{
							r--;
							mi++;
							a.erase(it); 
						}
					}else{
						a.erase(it);
						l--; 
					}
				}
			}
		}else{
			if(st.size() ==0){
				cout<<"Invalid"<<endl;
				continue;
			}
			while(l<r){
				l++;
				r--;
				mi++;
			}
			while(l>r){
				l--;
				r++;
				mi--;
			}
			cout<<*mi<<endl;
		}
	}
	
	return 0;
}
```






