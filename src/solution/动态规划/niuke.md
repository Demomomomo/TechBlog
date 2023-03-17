---
title: 分扇贝
---
## 题目
把m个仙贝分给n个朋友，假设手里现在有x个仙贝，分给一个朋友y个仙贝，那么这个朋友对你的好感度就增加y/x，每个朋友可以分也可以不分，如果分的话每个朋友只能分一次，仙贝也可以剩下或不剩下。  
求最优送仙贝的策略下，朋友对你的好感度之和最大是多少  
## 思路
设f[i][j]为前i个人送完之后，还剩下j个仙贝的情况下所有人对你的最大好感度和  
对于第i个人：我们需要枚举送几个，假设送k个，设前i-1个人送完之后还剩j个，那么给i送完k个还剩j-k个  
f[i][j-k]=max(f[i][j-k],f[i-1][j]+1.0*k/j);
初始化：最初所有人的好感都是0，不用初始化  
```cpp
void sove(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		for(int j=0;j<=m;j++){
			for(int k=0;k<=j;k++){
				f[i][j-k]=max(f[i][j-k],f[i-1][j]+1.0*k/j);
			}
		}
	}
	printf("%.9f\n",f[n][0]);
}
```

```cpp
#include<bits/stdc++.h>
#include<queue>
#include<vector>
using namespace std;
vector<char> q;
const int N=5;
int n;
string s;
int con[N];
map<char,pair<int,char> > ch;
map<char,int> mp;
int main(){
	int id=0;
	bool f=false;
	while(cin>>s,s!="."){
		int len=s.size();
		if(f)continue;
		for(int i=0;i<len;i++){
			if(s[i]=='('||s[i]=='['||s[i]=='{'||(s[i]=='/'&&s[i+1]=='*')){
				if(mp[s[i]]==0){
					id++;
					mp[s[i]]=1;
					q.push_back(s[i]);
					ch[s[i]]={id,s[i]}; 
				}
				int op=ch[s[i]].first;
				con[op]++;
				if(s[i]=='/') i++;
			}else if(s[i]==')'||s[i]==']'||s[i]=='}'||(s[i]=='*'&&s[i+1]=='/')){
				if(s[i]==')'){
					if(mp['(']==0){
						cout<<"NO"<<endl;
						cout<<"(-?"<<endl;
						f=true;
					}
					int op=ch['('].first;
					if(con[op]<=0){
						cout<<"NO"<<endl;
						cout<<"(-?"<<endl;
						f=true;						
					}
					con[op]--;
				}
				if(s[i]=='}'){
					if(mp['}']==0){
						cout<<"NO"<<endl;
						cout<<"{-?"<<endl;
						f=true;
					}
					int op=ch['}'].first;
					if(con[op]<=0){
						cout<<"NO"<<endl;
						cout<<"{-?"<<endl;
						f=true;						
					}
					con[op]--;
				}				
				if(s[i]==']'){
					if(mp['[']==0){
						cout<<"NO"<<endl;
						cout<<"[-?"<<endl;
						f=true;
					}
					int op=ch[']'].first;
					if(con[op]<=0){
						cout<<"NO"<<endl;
						cout<<"[-?"<<endl;
						f=true;						
					}
					con[op]--;
				}
				if(s[i]=='*'){
					if(mp['/']==0){
						cout<<"NO"<<endl;
						cout<<"/*-?"<<endl;
						f=true;
					}
					int op=ch['/'].first;
					if(con[op]<=0){
						cout<<"NO"<<endl;
						cout<<"/*-?"<<endl;
						f=true;						
					}
					con[op]--;
					i++;
				}			
			}
		}
		
		
	}






	for(int i=0;i<q.size() ;i++){
		int op=ch[q[i]].first;
		if(con[op]>0){
			if(q[i]=='('){
				cout<<"NO"<<endl;
				cout<<"?-)"<<endl;
			}else if(q[i]=='['){
				cout<<"NO"<<endl;
				cout<<"?-]"<<endl;
			}else if(q[i]=='{'){
				cout<<"NO"<<endl;
				cout<<"?-}"<<endl;
			}else if(q[i]=='/'){
				cout<<"NO"<<endl;
				cout<<"?-*/"<<endl;
			}
			f=true;
			break;
		}
	}
	if(!f)cout<<"YES"<<endl;
	return 0;
}

```



