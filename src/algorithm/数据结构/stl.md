---
title: stl
---
## vector
vector是一个长度动态变化的函数  
`vector<int>a` 是一个长度动态变化的int类型数组  
`vector<int> a(n)`定义一个长度为n的vector数组  
`vector<int> a(n,x)`定义一个长度为n，所有数都是x的vector数组  
`vector<int>b[233] `相当于一个第一维长度233，第二维长度动态变化的int数组  
也可以创建一个结构体REC，然后用`vector<REC>c` 结构体长度动态变化
`a.size（）`可以求出a数组的长度  
`b.empty( )` 判断b数组是不是空的，如果是返回TRUE，不是空的返回FALSE。  
`a.clear( ) `删除a数组里的所有元素。  
迭代器：相当于指针 引用：` vector<int>::iterator p ;`要用指针所指的数，用 `*` 号引用，如输出p所指的数：`*p`  
`a.begin( ) `指的是数组a的起始位置的地址  
`a.end( )` 指的是数组a的最后一位元素的下一位的地址  
初始化a：`vector<int>a({1,2,3});`  
遍历a：
```cpp
for(i=0;i<a.size();i++) cout<<a[i]<<" ";
//或  
for(auto x:a)cout<<x<<" ";  
//或
vector<int>::iterator it;  
for(it=a.begin();it!=a.end();it++)cout<<*it;  
```
`a.front( ) `指的是a的第一个元素   
`a.back( )` 指的是a的最后一个元素  
`auto `的作用是让编译器自己判断类型  
`a.push_back(4) `是往a数组的最后边加一个元素4  
`a.pop_back( ) `是删除a数组的最后一个元素  
`vector`还能支持比较运算，按照字典序比大小，比如：  
`vector<int> a(4,2),b(1,3)`，那么就可以得出b>a  
创建一个n行m列的二维数组a，可以这样：
```cpp
vector<vector<int> > a;
//resize（x）的左作用是使容器的大小边变成x
a.resize(n+5);
for(int i=1;i<=n;i++) a[i].resize(m);
```
或者这样：  
```cpp
char **g=new char*[n];
for(int i=0;i<n;i++){
	g[i]=new char[m];
}
```



## queue(无clear函数)
包括循环队列`queue`和优先队列`priority_queue`两个容器  
`queue`是先进先出，`priority_queue`是先出最大的数  
在头文件`#include<queue>`里  
定义：`queue<int>q;` `<>`里可以更改类型如`double`或者结构体名称//队列  
`priority_queue<int> q;` 默认的是大根堆//先出的是大的数  
`priority_queue<int,vector<int>,greater<int> > b;`是小根堆//先出的是小的数  
对队列`queue`:  
`q.push(1) `在队尾插入1；  
`q.pop( )` 弹出队头元素//删除队头元素  
只能从队头插入，从队尾弹出  
`q.front( )`返回队头元素  
`q.back( ) `返回队尾元素  
对优先队列`priority_queue`:   
`a.push(1)` 插入一个元素（不按顺序）  
优先队列其实就是自己排序把大的排在前面  
`a.top( )`取最大值//队头元素  
`a.pop( )`删除最大值//删除队头  
遍历队列：  
当a不空时，输出队头然后删除队头  
```cpp
while（!a.empty( )）{
    printf("%d ",a.front( ));
    a.pop( );
}
```
## stack(无clear函数)
栈，先进后出 （吃薯片，最开始装入的最后吃，一端开口的数据结构）  
定义：`stack<int> a;`  
`a.push(1)` 插入一个元素  
`a.top( )`返回栈顶元素//最后一个插入的元素叫栈顶元素  
`a.pop( ) `删除栈顶元素  


## deque
双端队列，可以在队头队尾插入删除  
定义：`deque<int> a;`  
`a.begin( ) `a的首个元素地址  
`a.end( )`a的最后一个元素的下一位的地址  
`a.back( )`a的最后一个元素  
`a.front( )`a的第一个元素  
`a.push_back(1)`往a最后面插入一个1  
`a.push_front(2)`在a的最前面插入一个2  
`a.pop_back( )`删除最后一个元素  
`a.pop_front( )`删除第一个元素  
`a.clear（）`清除一个队列 

## set
定义：`set<int> a;`//不包含重复元素,而且按从小到大排序  
`multiset<int> a;`//可以包含重复元素  
函数： `a.size( )`返回长度  
`a.empty( )`是否为空  
`a.clear( )`清除队列  
`a.end( )`返回最后一个元素的后一个位置（set中的最大值的迭代器）  
`a.insert(1)`表示插入一个元素1  
`a.find(2)`表示查找一个元素2，返回的是元素2的迭代器（指针），如果数组中没有这个元素则返回`a.end( )`  
`if(a.find(x)==a.end())`判断x在a中是否存在  
`a.lower_bound(x)`找到大于等于x的最小迭代器  
`a.upper_bound(x)`找到大于x的最小元素的迭代器  
`s.erase(it)`把it这个迭代器指向的元素删掉  
`s.erase(x)`把容器中所有等于x的数都删掉（在multiset中也是将所有的x的数都删掉）  
`s.erase(s.find(x))`找到x所在的迭代器，删掉这个迭代器（与上一行操作不同的是只删除了一个x）  
`a.count (x)` 表示x在a里的个数（因为set不存重复元素，所以存在x就返回1，不存在就返回0，`multiset`则返回个数）  
访问set：
```cpp
set<int> st;
for(auto i=st.begin();i!=st.end();i++){
    int op=*i;
    cout<<op<<" ";
}
//注意：如果要对set里删除数的话，我们需要先把数存一下然后遍历set完之后再从set里删除
//比如删除set里所有大于4的数

vector<int> yy;
for(auto i=st.begin();i!=st.end();i++){
    if(*i>4){
        yy.push_back(*i);
    }
}
for(int i=0;i<yy.size();i++) st.erase(yy[i]);
```
## map
定义：映射数组//前面的映射出后面的，就是输出后面的  
如果存数组那么按字典序递增的方式储存 
map查找一个数的时间复杂度是logn，unordered_map是O（1） 
```cpp
map<int,int> a;
a[1]=2;`
a[1000000]=3;
printf("%d",a[10000000])---输出3
```
`<>`里面的两个类型可以自己定义，比如字符串和数字：  
```cpp
map<string,int> a;
a[“zxh”]=2;
printf("%d",a[“zxh”])--输出2
```
也可以定义字符串和vector数组：  
```cpp
map<string,vector<int> > a;
a[“zxh”]=({2,5,4,3});
printf(“%d”,a[“zxh”][2])--输出5（vector的第二个元素）
//遍历map里的字符串和数组的话
	for(auto [x,v] :mp){
		string s=x;
        cout<<s<<endl;
		for(int j=0;j<v.size();j++)cout<<v[j]<<" ";
	}

```
函数：`a.size( )`
`a.empty( );`  
`a.clear( );`  
`a.begin( );`  
`a.end( );`  
`a.erase(val);`删除一个值，时间复杂度是logn  
`a.erase(it);`删除一个下标，时间复杂度是1  
`a.insert()`插入一个二元组：`a.insert({“a”,{5}})`  
输入字符串然后来记录他出现的次数的话用  
```cpp
map<string,int> a;
String x;
Cin<<x;
A[x]++;
```
遍历map：使用迭代器`map<string,string> ::iterator it;`  
```cpp
map<string,int> a;
	map<string,int>::iterator it;
	int n;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		string s;
		cin>>s;
		a[s]++;
	}
	for(it=a.begin();it!=a.end();it++){
		cout<<it->first<<' '<<it->second<<endl;
	}
```

## pair<int,int>
是个二元组，取第一个数就是`p.first`,取第二个数就是`p.second`  
支持比较运算，以`first`为第一个关键字，以`second`为第二个关键字  
构造一个pair的话用`make_pair()`函数：  
`pair <int,int> p=make_pair(1,2);`  
也可直接写为  
`p={1,2};`  
也可以用pair来存三个值：  
`pair<int,pair<int,int> > p;`  

## string 
`s.size();`  
`s.empty();`  
`s.clear();`  
s可以加一个字符串：`s+="abf";`  
也可以加一个字符：`s+='a';`  
`substr( )`函数：  
`string q=s.substr(k);`把从s的下标为k的字符开始一直到结尾  
`s.substr(k,x)`返回的是起始位置下标为k，长度是x的字符串，当`x>s.size()`时，就输出到字符串结束为止。  
`s.substr(i)`返回从下标为i开始到结尾的字符串。  
`string s=to_string(n)`：将数字常量n转换为字符串s;  
`stoi`函数：  
将字符串转化为10进制的数  
`stoi（字符串，起始位置（下标），n进制（默认10进制））`，将 n 进制的字符串转化为十进制  
`stoi(s,0,2)` ：将二进制的字符串s转化为十进制；  
`int x=stoi(s);`把s转化为十进制的x  

`isalnum函数`：判断是否为字母或数字，是的话返回true。  
头文件是`#include <cctype>`  
`tolower`函数：把大写字符转化为小写字符，如果不是大写字符就不转化
用法：`tolower(s[i]);`  
`insert`函数：在字符串里插入字符  
用法：`s.insert(i,'k')`，在字符串下标为i的地方加k  

`find`函数：在头文件`string`里  

使用方法：如在`string1`中查找`string2`，`string1.find(string2)；`返回值为string2第一次在string1中出现的位置。  
若希望在特定位置开始查找，可使用 `string1.find(string2，location);`  
如果找不到，则返回值为`string::npos` ，即对于string，通过`a.find(val)==string::npos`来做判断是否查找成功  

还有第二种用法是在`algorithm`里，`find`用来查找数组中的数，返回的是第一次出现的地址，如果没找到返回`end（）`  
`isupper(op)`判断是不是大写字母  
​`islower(op)`判断是不是小写字母  
`toupper(op)`大写字母  
`tolower(op)`变成小写字母  
`insert`函数：  
```cpp
//在下标为i的地方插入一个字符串f
string s,f;
s.insert(i,f)
```
`append`函数：  

在字符串的后面加上一个字符串  
```cpp
string s1="12";
string s2="34";
s1.append(s2);
cout<<s1<<endl;
```
`pop_back()`函数：删除字符串的最后一个字符  

## memset

对整数类型的数组一般取极大值为 `memset(a,0x3f,sizeof a)`  
对浮点数类型的数组一般取最大值为 `memset(a,0x7f,sizeof a`  

## memcpy

`memcpy`函数：把b复制到a中  
`memcpy（a,b,sizeof(b)); `sizeof()必须使用在拷贝到的字符串身上，不然会造成溢出  ,将b拷贝到a上
关于memcpy函数：`memcpy(目标数组，被复制的数组，被复制的数组的大小)`  

## stringstream

用于输入一个含有空格和数字的字符串，将里面间隔的数字提取出来的函数  

比如一个字符串是 `123 45 67 890`  

我们先用string类型读入，再用stringstream传出
```cpp
string s;
getline(cin,s);
stringstream ss(s);
int op,con=0;
while(ss>>op) a[++con]=op;//相当于把字符中的每个数字传到op里，再把op存到a数组里去  

```

## 全排列函数
next_permutation实现升序，那么刚开始的数组需要是升序排列  

```cpp
int a[4]={1,2,3,4};
sort(a,a+4);
do{
	for(int i=0;i<4;i++){
		cout<<a[i]<<" ";
	}
	cout<<endl;
}while(next_permutation(a,a+4));

```