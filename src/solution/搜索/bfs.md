---
title: bfs
---


## 总结

一般就是求最短距离或者最小步数，思路就是把初始状态加入队列中，写一个while循环，条件是队列不空，每次取队头然后拓展队头。一般需要一个额外的数组来记录每个位置的距离，并需要在刚开始的时候初始化。


## 青蛙跳杯子
原题链接：https://www.lanqiao.cn/problems/102/learning/?page=1&first_category_id=1&sort=students_count&name=%E9%9D%92%E8%9B%99%E8%B7%B3%E6%9D%AF%E5%AD%90  
题意：  
有一排杯子，其中只有一个空杯子，剩下的都是青蛙。青蛙有两种颜色：黑（W）和白（B），每个青蛙可以有一下几种操作：1.跳入相邻的空杯子 2.隔一个青蛙跳入一个空杯子 3.隔两个青蛙跳入一个空杯子。  
那么给定一个初始状态和一个结果状态，求能从初始状态到达结果状态最小有青蛙跳几步。  
思路：  
相当于一个空杯子跳，可以向左1,2,3步或者向右1,2,3步，求最小步数。  
那么我们可以用bfs，将初始状态加入队列，当队列不空的时候每次取队头，找到空杯子然后进行6个步数的跳动。如果没出现过就更新加入队列中，如果第一次找到结果状态立刻返回。  
```cpp
#include<bits/stdc++.h>
#include<queue>
using namespace std;
string sr,en;
map<string,int> d;

int dx[6]={-3,-2,-1,1,2,3};
int bfs(string st){
	queue<string> q;
	q.push(st);
	d[st]=0;
	while(q.size() ){
		string s=q.front() ;
		q.pop() ;
		int id;
		string op=s;
		int dist=d[s];
		for(int i=0;i<s.size();i++){
			if(s[i]=='*'){
				id=i;
				break;
			}
		}
		for(int i=0;i<6;i++){
			int idx=id+dx[i];
			if(idx<0||idx>=s.size())continue;
			swap(s[id],s[idx]);
			if(!d.count(s)){
				d[s]=dist+1;
				if(s==en) return d[s];
				q.push(s); 
			}
			swap(s[id],s[idx]);
		}
	}
	return -1;
}
int main(){
	cin>>sr>>en;
	int ans=bfs(sr);
	cout<<ans<<endl;
	return 0;
}
```


