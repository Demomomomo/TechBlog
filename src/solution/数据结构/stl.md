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




## HDU 6695 Welcome Party
原题链接：  
https://acm.hdu.edu.cn/showproblem.php?pid=6695  

题意：  
有n个人，每个人有一个x属性有一个y属性，每个人选择其中的一个属性，并且每个人都需要选。求所有方案中两种属性的最大值的差的最小值是多少  

思路：  
a数组记录x属性和y属性

先将a数组按照x属性从大到小排序  

然后遍历整个数组，每次将a[i].x当做所挑的x中最大的值  

那么[1,i-1]之间的数就不能选x，就必须选y，[i+1,n]之间的数可以选x也可以选y，那么我们就找到与mx相差最小的y选择就可以了  

假设[1,i-1]中的数最大值是my，如果my大于等于a[i].x，那么选择比my小的y最大值还是my，选择比my大的数a[i].x和my的差值会越来越大，所以当my比a[i].x大的时候最小值就是my-a[i].x  

当my比a[i].x小的时候，我们就需要在[i+1,n]之间选择最接近a[i].x的y值，即找一个比a[i].x大的最小值，找一个比a[i].x小的最大值，取他们之间差值最小的就可以了  

具体处理的话，用一个multiset类型的ly和ry分别来存a[i]前面的y值和a[i]后面的y值，初始的时候将所有y值都加入到ry中去，然后开始遍历a数组  

当遍历到a[i]的时候，先将ry中的a[i].y删去，再进行上面的找差值的操作，找完差值之后再将a[i].y加入到ly中去，利用multiset就可以线性的找到差值  

注意细节的处理，比如当在第一个的时候，ly中没有数，那么我们就直接在ry中找，最后一个的时候ry中没有数，并且唯一值就是ly的最大值

```cpp
#include<bits/stdc++.h>
#include<set>
#define int long long
#define ra multiset<int>::iterator
using namespace std;
int n;
const int N=2e5+20;
struct name{
	int x,y;
}a[N];
bool cmp(name a,name b){
	return a.x >b.x ;
}
void sove(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i].x >>a[i].y ;
	}
	sort(a+1,a+1+n,cmp);
	int mi=2e18;
	multiset<int> ly,ry;
	for(int i=1;i<=n;i++){
		ry.insert(a[i].y ); 
	}
	for(int i=1;i<=n;i++){
		  ry.erase(ry.find(a[i].y ) );
		  int mx=a[i].x ;
		  if(ly.size() ==0){
		  	ra id=ry.lower_bound(mx); 
		  	if(id!=ry.end() ){
		  		mi=min(mi,abs(*id-mx));
			}
			if(id!=ry.begin() ){
				id--;
				mi=min(mi,abs(*id-mx));
			}
		  }else{
		  	ra id=ly.end() ;
		  	id--;
		  	mi=min(mi,abs(*id-mx));
		  	if(*id<mx&&ry.size() ){
		  		ra id1=ry.lower_bound(mx); 
		  		if(id1!=ry.end() ){
		  			mi=min(mi,abs(*id1-mx));
				  }
		  		if(id1!=ry.begin() ){
		  			id1--;
		  			mi=min(mi,abs(*id1-mx));
				  }
			  }
		  }
		  ly.insert(a[i].y );  
	}
	cout<<mi<<endl;
}
signed main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


## 倍数问题

原题链接：  
https://www.lanqiao.cn/problems/168/learning/?page=1  

题意：  

有n个数，从中取三个满足和是m的倍数的和的最大值  

思路：  
(a+b+c)%m=a%m+b%m+c%m  
所以我们可以将余数相同的归为一类，枚举a和b的余数i和j，算出c的余数k，然后取ijk这三类中最大的数。由于ijk可能相等导致我们取到同一个数，那么我们可以用栈来存每一类，当找到某一类的时候就将他的最大值出栈，然后再继续往下找。找完之后再将他的最大值放回去即可。  

```cpp
#include<bits/stdc++.h>
#include<stack>
using namespace std;
const int N=1005;
stack<int> st[N];
int n,m;
int a[100005];
int main(){
    cin>>n>>m;
    for(int i=1;i<=n;i++)cin>>a[i];
    sort(a+1,a+1+n);
    for(int i=1;i<=n;i++){
        st[a[i]%m].push(a[i]); 
    }
    int ans=0;
    for(int i=0;i<m;i++){
        if(!st[i].size() )continue;
        for(int j=0;j<m;j++){
            if(!st[j].size() )continue;
            int k=(2*m-i-j)%m;
            if(!st[k].size() )continue;
            int num1,num2,num3,con=0;
            if(st[i].size() ){
                num1=st[i].top() ;
                con+=num1;
                st[i].pop() ;
                if(st[j].size() ){
                    num2=st[j].top() ;
                    con+=num2;
                    st[j].pop() ;
                    if(st[k].size() ){
                        num3=st[k].top() ;
                        con+=num3;
                        st[k].pop() ;
                        ans=max(ans,con);
                        st[k].push(num3); 
                    }
                    st[j].push(num2); 
                }
                st[i].push(num1); 
            }
        }
    }
    cout<<ans;
    return 0;
}

```



## B. Building Company  

原题链接：https://codeforces.com/gym/104417/problem/B?mobile=true  

题意：  
公司有g类职位（1<=g<=1e5），第i个职位编号为ai（1<=ai<=1e9），人数为bi（1<=bi<=1e9）。有n个项目(1<=n<=1e5)，满足第i个项目需要满足mi个条件(0<=mi<=1e5)，其中第j个条件是：编号为cij的职位人数大于等于dij,在完成一个项目之后，会有ti类职业的员工加入公司(0<=ki<=1e5)，其中第j类的编号是eij，人数为hij，求最多能完成的项目数。  


思路：  

看能否满足一个项目的所有条件，如果都满足了就将新加的人加入，之后再判断新加入的人数加入之后是否能满足更多的项目，直到不能满足更多的为止。  

那么我们可以用po[i]记录第i个项目还需要满足多少个条件，当最后po[i]为0的时候，就可以完成这个项目  

对每个职业op建立一个优先队列q[op]，存储满足第i个项目的一个条件需要j个人。当职业人数大于等于j的时候，我们将po[i]--，将ij弹出q[op]。直到最小的j大于当前职业的人数停止。那么当po[i]=0的时候，我们也需要把新加入的人加入，然后对更新的职业的优先队列再判断。  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=2e5+10;
#define int long long
typedef pair<int,int> pii;
map<int,int> st;//记录每个职业的编号
int stnum;//记录当前职业有几个
int g,n,m,k;
int con[N];
int po[N];//记录每个职业还需要满足几个条件
vector<pii> t[N];//记录完成第i个项目之后，新加入的职业人数
queue<int> ti,sy;//记录完成之后未加入的项目序号以及新加入的职业
priority_queue<pii,vector<pii>,greater<pii>> q[N];
signed main(){
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
	cin>>g;
	stnum=0;
	for(int i=1;i<=g;i++){
		int a,b;
		cin>>a>>b;
		if(st[a]==0){
			stnum++;
			st[a]=stnum;
		}
		con[st[a]]+=b;
	}
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>m;
		po[i]=m;
		for(int j=1;j<=m;j++){
			int a,b;
			cin>>a>>b;
			if(st[a]==0){
				stnum++;
				st[a]=stnum;
			}
			q[st[a]].push({b,i}); 
		}
		cin>>k;
		for(int j=1;j<=k;j++){
			int a,b;
			cin>>a>>b;
			if(st[a]==0){
				stnum++;
				st[a]=stnum;
			}
			t[i].push_back({a,b}); 
		}
	}
	for(int i=1;i<=n;i++){
		if(po[i]==0){
			ti.push(i); 
		}
	}
	for(int i=1;i<=200005;i++){
		while(q[i].size() &&q[i].top() .first<=con[i]){
			int id=q[i].top() .second;
			po[id]--;
			if(po[id]==0) ti.push(id);
			q[i].pop() ;
		}
	}
	
	while(ti.size() ||sy.size() ){
		while(ti.size() ){
			int id=ti.front() ;
			ti.pop() ;
			for(int i=0;i<t[id].size() ;i++){
				int a=t[id][i].first;
				int b=t[id][i].second;
				if(st[a]==0){
					stnum++;
					st[a]=stnum;
				}
				con[st[a]]+=b;
				sy.push(st[a]); 
			}
		}
		while(sy.size() ){
			int i=sy.front() ;
			sy.pop() ;
			while(q[i].size() &&q[i].top().first<=con[i]){
				int id=q[i].top() .second ;
				po[id]--;
				if(po[id]==0){
					ti.push(id); 
				}
				q[i].pop() ;
			}
		}
	}
	int ans=0;
	for(int i=1;i<=n;i++){
		if(po[i]==0)ans++;
	}
	cout<<ans;
	return 0;
}
```









