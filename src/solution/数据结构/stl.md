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






## HDU-5929 Basic Data Structure

原题链接：  
https://acm.hdu.edu.cn/showproblem.php?pid=5929  

题意：  

有一个栈，每次有四种操作：  
1、PUSH X向栈顶加一个数x（x只能是0或1）  
2、POP 删除栈顶元素  
3、REVERSE 将整个栈翻转  
4、NAND 从栈顶到栈底的顺序进行&计算整个栈中元素最后的值，如果栈为空就输出"Invalid.",按照以下规则计算：  
0&0=1  
0&1=1  
1&0=1  
1&1=0  

思路：  

只有1和1的结果是0，0和任意数结果都是1，那么我们可以从栈底到上看，碰到的第一个0，如果0的上面有数的话，他们的结果是1，如果没有数的话，那么结果是0  

那么对于都是1的结果来说，如果有奇数个1结果就是1，偶数个1结果就是0  

那么我们用一个数组a来模拟整个栈，lr记录当前的栈底和栈顶，双端队列q来记录0的下标，f记录数组是正序还是倒序  

push操作：  
是正序的时候，r++，a[r]=x，x如果是0的话，就在q的后面加上r  
是倒序的时候，l--，a[l]=x，x如果是0的话，就在q的前面加上l  

pop操作：  
是正序的时候，先判断r处是不是0，如果是0的话就将q最后的数删掉，r--  
是倒序的时候，先判断l处是不是0，如果是0的话就将q最前面的数删掉，l++  

reverse操作：  
修改f  

nand操作：  
特判一下栈为空  
如果是正序，我们要算从栈顶到栈底的顺序，就是从r到l的顺序。算的时候看从栈底到栈顶的第一个出现的0，即l到r中先出现的0：如果没有0，直接判断栈中有几个1，如果是奇数个就输出1，偶数个就输出0；如果有0，且0前面没有数，即	q的第一个元素是r，那么0和前面的结果就是0，总的结果就是直接看1的个数-1的奇偶，即r-l的奇偶；否则的话就是1的个数+1个数的奇偶，即算q.front-l+1的奇偶  

倒序的话就是看栈底到栈顶的顺序，就是从l到r的顺序，算的时候看从栈顶到栈底的第一个出现的0，即r到l第一个出现的0：如果没有0就看1个数的奇偶，如果有0：如果0前面没有数，即q.back==l，那么就是1的个数-1个数的奇偶；如果有数，就是1的个数+1的奇偶，即r-q.back+1的奇偶  



```cpp
#include<bits/stdc++.h>
#include<deque>
using namespace std;
const int N=2e5+10;
int a[2*N];
int l,r,si;
deque<int> q;
int n;
void push0(int x){
	r++;
	a[r]=x;
	if(x==0){
		q.push_back(r);
	}
}
void push1(int x){
	l--;
	a[l]=x;
	if(x==0){
		q.push_front(l);
	}
}
int get0(){
	if(q.size()==0){
		int op=r-l+1;
		return op%2;
	}
	int op;
	if(q.front()==r){
		op=r-l;
	}else{
		op=q.front()-l+1;
	}
	return op%2;
	
}
int get1(){
	int op;
	if(q.size()==0){
		op=r-l+1;
	}else{
		if(q.back()==l){
			op=r-l;
		}else{
			op=r-q.back()+1;
		}
	}
	return op%2;
	
}

int main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	int t;
	cin>>t;
	for(int ca=1;ca<=t;ca++){
		cout<<"Case #"<<ca<<":"<<endl;
//		printf("%d:\n",ca);
		cin>>n;
		q.clear();
		l=N,r=N-1;
		si=0;
		int f=0;
		while(n--){
			string op;
			cin>>op;
			if(op=="PUSH"){
				si++;
				int x;
				cin>>x;
				if(f==0){
					push0(x);
				}else{
					push1(x);
				}
			}else if(op=="POP"){
				if(si==0){
					continue;
				}
				si--;
				if(f==0){
					if(a[r]==0){
						q.pop_back();
					}
					r--;
				}else{
					if(a[l]==0){
						q.pop_front();
					}
					l++;
				}
			}else if(op=="REVERSE"){
				f=1-f;
			}else{
				if(si==0){
					cout<<"Invalid."<<endl;
//					printf("\n");
					continue;
				}
				if(f==0){
					cout<<get0()<<endl;
//					printf("%d\n",);
				}else{
					cout<<get1()<<endl;
//					printf("%d\n",get1());
				}
			}
		}
	}
	return 0;
}
```




















