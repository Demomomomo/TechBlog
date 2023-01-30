---
title: A - ST and TS Palindrome
---

原题链接：https://atcoder.jp/contests/arc155/tasks/arc155_a  

题意：给你一个长度为n的字符串s以及一个数字k，能否找出一个字符串t，使得：  
1.s+t是回文串  
2.t+s是回文串  

思路：  
假设s=ab，k=9，那么我们构造t的话首先要满足s+t是回文，那么就将t的最后两个字符填上ba：  

<img src="https://img-blog.csdnimg.cn/669030932e634713b7dd53484c3397b0.jpeg#pic_center)" alt="Pulpit rock" width="4500" height="228">  

也要满足t+s是回文，那么再将t的前两个字符填上ba：  
<img src="https://img-blog.csdnimg.cn/28499064a7dd4854ac3f9c4d5db25ec3.jpeg#pic_center)" alt="Pulpit rock" width="450" height="228">  

然后一直构造下去最终得到：  
<img src="https://img-blog.csdnimg.cn/71fcf60ecca348f69e6daab36dcd57e6.jpeg#pic_center)" alt="Pulpit rock" width="304" height="228">  

然后把t+s能构成回文的部分去掉，变成：  
<img src="https://img-blog.csdnimg.cn/3585b4f0303941ee97f021cc3e66e451.jpeg#pic_center)" alt="Pulpit rock" width="500" height="228">  

再把s+t能构成回文部分的去掉，变成：  
<img src="https://img-blog.csdnimg.cn/3995c9e3ccf247409d71a80e01f77041.jpeg#pic_center)" alt="Pulpit rock" width="504" height="228">  

那么实际上就是构造一个长度为k%(2*n)的t字符串，使得t+s和s+t是回文串  
因为满足条件的t字符串是确定的，那么我们只需要按照要求构造t，把t的空隙填满：  
先按t+s是回文填t的空隙，如果t没有被填完的话，再按照t+s是回文填t的空隙，生成t字符串之后，我们只用判断s+t和t+s是不是回文串就可以了。  

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
typedef long long ll;
const int N=4e5+10;
int n;
int k;
bool diff(string s){
	int len=s.size();
	for(int i=0;i<len;i++){
		if(s[i]!=s[len-1-i]) {
			return false;
		}
	}
	return true;
}
void sove(){
	cin>>n>>k;
	string s,ss;
	cin>>s;
	ss=s;
	reverse(ss.begin(),ss.end());
	int op=k%(2*n);
	if(op==0){
		if(diff(s)){
			cout<<"Yes"<<endl;
			return ;
		}else{
			cout<<"No"<<endl;
			return ;
		}
	}
	int len=min(op,n);
	string t=ss.substr(0,len);
	if(t.size()!=op){
		int oo=t.size();
		len=min(n,op-oo);
		string tt=s.substr(0,len);
		reverse(tt.begin(),tt.end());
		t+=tt;
	}
//	cout<<"t=="<<t<<endl;
	string ans1=s+t;
//	cout<<"ans1=="<<ans1<<endl;
	if(!diff(ans1)){
		cout<<"No"<<endl;
		return ;
	}
	string ans2=t+s;
	if(!diff(ans2)){
		cout<<"No"<<endl;
		return ;
	}
	cout<<"Yes"<<endl;
	
}
signed main(){
	int t=1;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


