---
title: ac自动机
---
## 作用
判断n个串中有几个串是主串的子串  
实质：tire+kmp  
思路：  
先建立tire树，将n个串的tire树建出来  
每个点都有一个next数组，表示以这个点为结尾的路径中，前缀等于后缀的最长前缀的尾端点（前缀可以不在这个路径上，前缀是在整个trie树上找）  
kmp是每次比较i+1和j+1是不是一样，那么转换到tire树里就是比较第i+1层和第j+1层表示的字母是否存在，因为每次要用到上一层的ne值，所以用bfs一层一层遍历。  
先将第一层的所有结点加入到队列中。  
然后每次取队头t，遍历队头的下一层（i+1层）字母i，然后取j（==ne[t]），看j+1层和i+1层是否相等（tr[j][i]是否存在），如果j！=0&&tr[j][i]不存在，那么更新j=ne[j]，如果存在，j=tr[j][i],最后更新第i+1层的ne：c=tr[t][i],ne[c]=j，然后把c加入队列  

```cpp
void pre(){
	int p=0;
	for(int i=0;i<26;i++){
		if(!tr[p][i]) q.push(tr[p][i]); 
	}
	while(q.size()){
		int t=q.front() ;
		q.pop() ;
		for(int i=0;i<26;i++){
			int c=tr[t][i];
			if(!c)continue;
			int j=ne[t];
			if(j&&!tr[j][i]) j=ne[j];
			if(tr[j][i]) j=tr[j][i];
			ne[c]=j;
			q.push(c); 
		}
	}
}
```

## 例题1：给出n个单词，看在一篇文章里有几种单词出现

朴素版代码：  
```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
const int N=1e4+10,S=55;
int n,m;
string s,str;
int tr[N*S][27];
int cnt[N*S];
int ne[N*S];
queue<int> q;
int idx;
void init(){
	memset(tr,0,sizeof tr);
	memset(cnt,0,sizeof cnt);
	memset(ne,0,sizeof ne);
	idx=0;
}
void insert(){
	int p=0;
	for(int i=0;i<s.size();i++){
		int t=s[i]-'a';
		if(!tr[p][t]) tr[p][t]=++idx;
		p=tr[p][t];
	}
	cnt[p]++;
}
void pre(){
	for(int i=0;i<26;i++){
		if(tr[0][i]) q.push(tr[0][i]); 
	}
	while(q.size()){
		int t=q.front() ;
		q.pop() ;
		for(int i=0;i<26;i++){
			int c=tr[t][i];
			if(!c)continue;
			int j=ne[t];
			if(j&&!tr[j][i]) j=ne[j];
			if(tr[j][i]) j=tr[j][i];
			ne[c]=j;
			q.push(c); 
		}
	}
}
void sove(){
	init();
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>s;
		insert();
	}
	pre();
	cin>>str;
	int j=0;
	int ans=0;
	for(int i=0;i<str.size();i++){
		int t=str[i]-'a';
		while(j&&!tr[j][t]) j=ne[j];
		if(tr[j][t]) j=tr[j][t];
		int p=j;
		while(p){//因为算的j是最大的能匹配的后缀，也有可能包含比他短的能匹配的串，所以要算上所有的后缀
			ans+=cnt[p];
			cnt[p]=0;//因为只能算一次，所以用完一次之后把他赋值成0
			p=ne[p];
		}
	}
	cout<<ans<<endl;
}
int main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}

```

因为在我们算ne数组的时候，有while循环：每次比较i字符是否在主串的第j层的下一位出现过，如果没有的话我们就让j返回到以j为结尾的最长等于后缀的前缀的尾端点，这样一个一个找的话可能会循环很多次，那么我们可以直接让tr[t][i]就等于最后找到的尾端点的下标，每次找的时候，p=tr[t][i],当p不存在的时候，我们直接让tr[t][i]=tr[ne[t]][i]，这样直接走到的是他最长前缀后面加个i字母的结点编号，当p存在的时候，那么ne[p]=tr[ne[t]][i]，直接找到的是最长前缀后面加个i字母的结点编号。   

当然在匹配str的时候，我们先让j=0（从根结点算起），然后遍历str，设t=str[i]-’a’，那么我们j直接跳到以j结尾的后缀等于前缀的最长前缀尾结点再接个i的编号那里。  
改良版代码：
```cpp
const int N=1e4+10,S=55;
int n;
int ne[N*S],tr[N*S][26],cnt[N*S];
int idx;
string s,str;
queue<int> q;
void insert(){
	int p=0;
	for(int i=0;i<s.size();i++){
		int t=s[i]-'a';
		if(!tr[p][t])tr[p][t]=++idx;
		p=tr[p][t];
	}
	cnt[p]++;
}
void init(){
	memset(tr,0,sizeof tr);
	memset(ne,0,sizeof ne);
	memset(cnt,0,sizeof cnt);
	idx=0;
}
void pre(){
	for(int i=0;i<26;i++){
		if(tr[0][i]) q.push(tr[0][i]); 
	}
	while(q.size() ){
		int t=q.front() ;
		q.pop() ;
		for(int i=0;i<26;i++){
			int p=tr[t][i];
			if(!p){
				tr[t][i]=tr[ne[t]][i];
			}else{
				ne[p]=tr[ne[t]][i];
				q.push(p); 
			}
		}
	}
}
void sove(){
	cin>>n;
	init();
	for(int i=1;i<=n;i++){
		cin>>s;
		insert();
	}
	pre();
	int j=0;
	cin>>str;
	int ans=0;
	for(int i=0;i<str.size();i++){
		int t=str[i]-'a';
		j=tr[j][t];
		int p=j;
		while(p){
			ans+=cnt[p];
			cnt[p]=0;
			p=ne[p];
		}
	}
	cout<<ans<<endl;
}
```

## 例题2：有n个单词，查找在所有单词中每个单词出现的次数
思路：  
一个字符串出现的次数=所有满足后缀=原串的前缀的个数  
我们先存一个数组id用来记录每个单词的末尾的字母的编号  
用f来记录前缀中满足等于原串的个数  
那么我们就对于每个前缀，先把他的个数赋值成1（他本身也满足），算出ne值（表示以i编号为结尾单词的所在单词的后缀等于所有单词的前缀的最大长度的前缀的末尾编号），因为长度长的前缀的f值也是要累加到是他满足的后缀的f值上，所以我们得按从长度大的前缀往长度小的前缀遍历的顺序，对于每个前缀的f值要累加到他满足的最大后缀的那个串的f值上，那么我们就记下入队的所有顺序，按照倒序来每次把长的前缀的f值加到短的后缀上面去，那么到最后的f值其实就是以i为结尾的满足后缀等于原串的个数，也就是我们要算的在全串中出现的个数  
```cpp
const int N=1e6+10;
int n;
int ne[N],tr[N][26],cnt[N];
int idx;
int id[N];
int f[N];
string s,str;
queue<int> q;
vector<int> yy;
void insert(int x){
	int p=0;
	for(int i=0;i<s.size();i++){
		int t=s[i]-'a';
		if(!tr[p][t])tr[p][t]=++idx;
		p=tr[p][t];
		f[p]++;
	}
	id[x]=p;
}
void init(){
	memset(tr,0,sizeof tr);
	memset(ne,0,sizeof ne);
	memset(cnt,0,sizeof cnt);
	idx=0;
}
void pre(){
	for(int i=0;i<26;i++){
		if(tr[0][i]) q.push(tr[0][i]); 
	}
	while(q.size() ){
		int t=q.front() ;
		yy.push_back(t); 
		q.pop() ;
		for(int i=0;i<26;i++){
			int p=tr[t][i];
			if(!p){
				tr[t][i]=tr[ne[t]][i];
			}else{
				ne[p]=tr[ne[t]][i];
				q.push(p); 
			}
		}
	}
}
void sove(){
	cin>>n;
	init();
	for(int i=1;i<=n;i++){
		cin>>s;
		insert(i);
	}
	pre();
	for(int i=yy.size()-1 ;i>=0;i--){
		int id1=yy[i];
		f[ne[id1]]+=f[id1];
	}
	for(int i=1;i<=n;i++){
		cout<<f[id[i]]<<endl;
	}
}

```

