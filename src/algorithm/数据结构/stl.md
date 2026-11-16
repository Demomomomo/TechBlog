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
`vector<int> a(4,2),b(1,3)`，那么就可以得出a > b    
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
只能从队尾插入，从队头弹出  
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
set是 C++ STL 中基于红黑树实现的有序集合容器，是竞赛中处理"去重 + 有序 + 快速查找"问题的利器。
问题：维护一个集合，支持以下操作：  
- 插入一个元素  
- 删除一个元素  
- 查询某个元素是否存在  
- 查询最小值 / 最大值  
- 查询某个元素的前驱 / 后继  
- 按顺序遍历所有元素  

暴力做法：用数组存储，插入 O(1)，但查找 O(n)、删除 O(n)、维护有序需要 O(n log n) 排序。

set 做法：所有操作都是 O(log n)，且元素自动去重、自动排序。  

特性	        说明  
自动去重	    相同元素只保留一个  
自动排序	    默认升序，可自定义  
底层结构	    红黑树（平衡二叉搜索树）  
操作复杂度	    插入/删除/查找均为 O(log n)  
不支持随机访问	不能用 s[i] 访问  
不支持修改元素	只能删除再插入  

基本操作：  
1. 定义与初始化  

```cpp
#include <set>

set<int> s;                          // 空集合，默认升序
set<int> s2 = {3, 1, 2};             // 初始化，自动排序为 {1, 2, 3}
set<int, greater<int>> s3;           // 降序集合
```
2. 插入元素  
```cpp
s.insert(1); //插入1
```
insert 返回一个 pair<iterator, bool>：  
```cpp
auto [it, ok] = s.insert(1);
if (ok) cout << "插入成功";
else cout << "已存在";
```

3. 删除元素
```cpp
s.erase(1); //删除元素1
s.erase(it);//删除迭代器
s.clear();  //清空
```

4. 查找元素  
```cpp
auto it = find(5);
if (it != s.end()) cout << "找到了";
else cout << "不存在";
```
注意：find 返回的是迭代器，如果元素存在返回所在迭代器，否则返回s.end()  

5. 判断是否存在  
```cpp
if (s.count(5)) cout << "存在";
else cout << "不存在";
```
s.count(x) 表示返回x的个数，对 set 只返回 0 或 1（因为去重）。

6. 大小与空判断  
```cpp
s.size();
s.empty();
```

迭代器与遍历:  
1. 正向遍历（升序）  
```cpp
for (auto it = s.begin(); it != s.end(); it++) {
	cout << *it << " ";
}
for (auto x : s) cout << x << " ";
```

2. 反向遍历（降序）  
```cpp
for (auto it = s.rbegin(); it != s.rend(); it++) {
	cout << *it << " ";
}
```
3. 迭代器性质
set 的迭代器是双向迭代器，支持 ++ 和 --，不支持 +n。  
不能修改 *it 的值（会破坏红黑树结构）。  
begin() 指向最小值，end() 是尾后位置.  

核心进阶操作：  

1. 前驱与后继  

```cpp
auto it = s.find(5);

// 前驱：小于 5 的最大元素
if (it != s.begin()) {
    auto pre = prev(it);//prev不是set的成员函数，是全局函数，不要写成s.prev(it)
    cout << "前驱：" << *pre;
}

// 后继：大于 5 的最小元素
auto nxt = next(it);//next不是set的成员函数，是全局函数，不要写成s.next(it)
if (nxt != s.end()) {
    cout << "后继：" << *nxt;
}
```

2. lower_bound 与 upper_bound  

这是 set 最强大的功能之一：

```cpp
// lower_bound(x)：第一个 >= x 的元素
auto it1 = s.lower_bound(5);

// upper_bound(x)：第一个 > x 的元素
auto it2 = s.upper_bound(5);
```
应用：快速找到"第一个不小于 x 的数"或"第一个大于 x 的数"，返回的是指针，如果找不到返回s.end()。

3. 删除区间  

```cpp
auto l = s.lower_bound(3);
auto r = s.upper_bound(7);
s.erase(l, r);   // 删除 [3, 7] 范围内的所有元素
```

multiset 与 set 的唯一区别：允许重复元素。  

删除单个元素  
```cpp
multiset<int> ms;
auto it = ms.find(3);
ms.erase(it);   // 只删除一个 3
```
删除所有相同元素  

```cpp
ms.erase(3);    // 删除所有值为 3 的元素
```
易错点：erase(value) 删除所有相同值，erase(iterator) 只删一个。  

set 与 priority_queue 的区别  
对比项	       set	             priority_queue  
有序性	       完全有序，可遍历	 只保证堆顶最优  
查找任意元素	O(log n)	     不支持  
删除任意元素	O(log n)	     不支持  
前驱后继	    支持	          不支持  
去重	        自动	          不去重  
常数	        较大	          较小  
选择原则：只需要堆顶 → priority_queue；需要查找/删除/前驱后继 → set。  

## bitset
在头文件`include<bitset>`  
它是一种类似数组的结构，它的每一个元素只能是０或１，每个元素仅用１bit空间，每八位占用一个字节，可用于状态压缩，n位的bitset执行一次运算时间复杂度为n/32    
定义：`bitset <n> op`//长度为n的默认都是0的串  
数字转换为bitset：先转换为二进制，如果变成的二进制的位数小于n，那么前面的部分用0补充完整；如果位数大于n，那么我们只取最低位的n位  
`bitset <4> op(4)`,4变为二进制是100，但是有4位，那么前面多的位就用0补上，即`op=0100`  
`bitset <4> op(17)`，17变为二进制是10001，但是我们只要最低的四位，即`op=0001`  
字符串转换为bitset：字符串只能含有0和1，否则会报错。当字符串的长度小于n的时候，前面多的部分用0补齐；小于n的时候只取前面n位  
`bitset <4> op("001")`,长度小前面用0补齐，即`op=0001`  
`bitset <4> op("110001")`,长度大只取前面4位，即`op=1100`  
可用的运算符：`^,|,&,<<,>>,==,!=,~`  
```cpp
	bitset <4> a("0011");
	bitset <4> b("1100");
	cout<<(a|b)<<endl;//输出的是1111
	cout<<(a&b)<<endl;//输出的是0000
	cout<<(a^b)<<endl;//输出的是1111
	cout<<(a<<2)<<endl;//a左移两位，低位补0，输出1100
	cout<<(b>>2)<<endl;//b右移两位，高位补0，输出0011
	cout<<(~a)<<endl;//将a取反，输出1100
```
也可以通过[]访问元素（类似数组，最低位下标从0开始），也可以给某一个元素赋值  
`bitset <4> op("1100")`,`op[2]`就是1，注意，从最右边开始起始坐标为0  
函数：  
`bitset <5> op("11100")`  
`op.count()`:求op中1的个数，为3  
`op.size()`:求op的大小，有5位  
`op.test(1)`:查找下标为1的元素，op[1]是0  
`op.any()`:检查op里是否有1  
`op.none()`：检查op里是否无1  
`op.all()`:检查op里是否全为1  
`op.flip()`:将op全部取反  
`op.flip(x)`:将op[x]取反  
`op.set()`:将op的全部元素变为1  
`op.set(x,0)`：只将op[x]置为0  
`op.set(x)`:只将op[x]置为1  
`op.reset()`：将op全部元素置为0  
`op.reset(x)`：只将op[x]置为0  
`op.to_string()`:将op转为string类型  
`op.to_ulong`:将op转为unsigned long 类型  
`op.to_ullong`:将op转为unsigned long long 类型  

## pair

pair 是 C++ STL 中最简单的二元组容器，把两个任意类型的值捆绑成一个整体。  

一、解决什么问题  

1. 核心需求：把两个值捆绑成一个整体  
很多场景需要"成对"处理数据：  

坐标：(x, y)  

键值对：(key, value)  

边：(终点, 边权)  

区间：(左端点, 右端点)  

返回值：函数需要返回两个值  

如果分开存，排序、传参、存容器都很麻烦。pair 把它们打包成一个整体，可以直接比较、排序、作为容器的元素。  

2. pair 的特点  

特性	          说明  

存储两个值	 first 和 second，类型可不同  

字典序比较	 先比 first，再比 second  

轻量	     本质是结构体，无额外开销  

可直接排序	 无需自定义比较函数  

二、基本操作  

1. 定义与初始化  

```cpp
#include <utility>   // pair 定义在这里

pair<int, int> p1;                    // 默认初始化，值为 (0, 0)
pair<int, int> p2(1, 2);              // 直接初始化
pair<int, int> p3 = {1, 2};           // 列表初始化
pair<int, string> p4 = {1, "Tom"};    // 类型可以不同
pair<int, int> p5 = make_pair(3, 4);  // make_pair 函数
```

2. 访问成员  

```cpp
pair<int, string> p = {1, "Tom"};
cout << p.first;    // 1
cout << p.second;   // Tom

p.first = 2;        // 可以修改
p.second = "Amy";
```

3. 比较运算  

pair 重载了全部六个比较运算符，规则是字典序：  

先比较 first，谁小谁就小。  

first 相等时，比较 second。  

```cpp
pair<int, int> a = {1, 2};
pair<int, int> b = {1, 3};
pair<int, int> c = {2, 1};

a < b;    // true，first 相等，2 < 3
a < c;    // true，1 < 2，second 不再比较
a == b;   // false
```

4. 交换  

```cpp
pair<int, int> a = {1, 2}, b = {3, 4};
swap(a, b);
// a = {3, 4}, b = {1, 2}
```

三、pair 的排序  

1. 直接 sort  

因为 pair 天然支持 <，可以直接排序：  

```cpp
vector<pair<int, int>> v = {{3, 1}, {1, 2}, {1, 1}, {2, 0}};
sort(v.begin(), v.end());
// 结果：{1,1}, {1,2}, {2,0}, {3,1}
```
排序规则：先按 first 升序，first 相同按 second 升序。

2. 降序  

```cpp
// 整体降序
sort(v.begin(), v.end(), greater<pair<int,int>>());

// 只按 first 降序，second 升序
sort(v.begin(), v.end(), [](auto& a, auto& b) {
    if (a.first != b.first) return a.first > b.first;
    return a.second < b.second;
});

```
3. 只按 second 排序  

```cpp
sort(v.begin(), v.end(), [](auto& a, auto& b) {
    return a.second < b.second;
});
```




## map
map 是 C++ STL 中基于红黑树实现的有序键值对容器，是竞赛中处理"映射关系 + 有序性"问题的核心工具。  

一、解决什么问题  

1. 核心需求  

问题：需要把"键"映射到"值"，并且键要保持有序。  

典型场景：  

- 计数：统计每个字符串/数字出现的次数  

- 映射：学号 → 姓名，单词 → 释义  

- 离散化：把大范围的值映射到小范围的下标  

- 有序遍历：按 key 从小到大处理数据  

- 查找前驱/后继：找比某个 key 大的最小 key  

2. map 的特点  

特性	               说明  
键值对存储	    每个元素是 pair<const Key, T>  

自动排序	    按 key 升序（默认），可自定义  

键唯一	        每个 key 只出现一次  

底层结构	    红黑树（平衡二叉搜索树）  

操作复杂度	    插入/删除/查找均为 O(log n)  

支持迭代器遍历	按 key 顺序遍历  

不支持随机访问	不能用 m[i] 按位置访问  


3. 与相关容器对比  

容器	        键唯一	       有序	  底层	     查找  

map	            是	          是	红黑树	   O(log n)  

multimap	    否	          是	红黑树	   O(log n)  

unordered_map	是	          否	哈希表	   平均 O(1) ,最坏O(n) 

set	            是（只有 key） 是	 红黑树	    O(log n)  

选择原则：  

- 需要有序 → map  

- 只需要快速查找、不关心顺序 → unordered_map  

- 允许重复 key → multimap  


二、基本操作  

1. 定义与初始化  

```cpp
#include <map>

map<string, int> m;                          // 空 map
map<string, int> m2 = {{"Tom", 90}, {"Amy", 85}};
map<int, string, greater<int>> m3;           // 按 key 降序
```
2. 插入元素  

方法一：[] 运算符（最常用）  

```cpp
m["Tom"] = 90;      // 不存在则插入，存在则覆盖
m["Amy"] = 85;
```

方法二：insert  
```cpp
m.insert({"Tom", 90});              // 不存在才插入，存在则忽略
m.insert(make_pair("Amy", 85));
m.insert(pair<string,int>("Bob", 70));
```

方法三：emplace（C++11，原地构造，效率略高）  

```cpp
m.emplace("Tom", 90);
```

[] 和 insert 的关键区别：  

```cpp
map<string, int> m;
m["Tom"] = 90;
m["Tom"] = 95;          // 覆盖，m["Tom"] == 95

m.insert({"Tom", 80});  // 无效，已存在，m["Tom"] 仍为 95
```

3. 访问元素  
```cpp
m["Tom"];               // 返回值的引用；key 不存在时会自动插入默认值！
m.at("Tom");            // 返回值的引用；key 不存在时抛异常
```
重要陷阱：m[key] 在 key 不存在时会自动插入一个默认值（int 为 0，string 为空串）。如果只想查询不想插入，用 find 或 count。  

```cpp
map<string, int> m;
cout << m["unknown"];   // 输出 0，同时 m 中多了一个 {"unknown", 0}
cout << m.size();       // 1
```

4. 查找元素  

```cpp
auto it = m.find("Tom");
if (it != m.end()) {
    cout << it->first << " " << it->second;   // Tom 90
} else {
    cout << "不存在";
}
```
5. 判断是否存在  

```cpp
if (m.count("Tom")) cout << "存在";
if (m.find("Tom") != m.end()) cout << "存在";
```
count 对 map 只返回 0 或 1。  

6. 删除元素  

```cpp
m.erase("Tom");          // 按 key 删除，返回删除个数
m.erase(it);             // 按迭代器删除
m.erase(m.begin(), m.end());  // 删除区间
m.clear();               // 清空
```
7. 大小与空判断  

```cpp
m.size();     // 元素个数
m.empty();    // 是否为空
```

8. 遍历  

```cpp
//正向遍历，按key升序

for (auto it = m.begin(); it != m.end(); it++)
    cout << it->first << " " << it->second << "\n";
// 范围 for（C++17 结构化绑定）
for (auto& [key, val] : m)
    cout << key << " " << val << "\n";

//反向遍历，按key降序
for (auto it = m.rbegin(); it != m.rend(); it++)
    cout << it->first << " " << it->second << "\n";

```
9. lower_bound 与 upper_bound
```cpp
// lower_bound(k)：第一个 key >= k 的元素
auto it1 = m.lower_bound("Tom");

// upper_bound(k)：第一个 key > k 的元素
auto it2 = m.upper_bound("Tom");
```
应用：找"第一个不小于 k 的键"或"第一个大于 k 的键"。  

```cpp
map<int, string> m = {{1,"a"}, {3,"b"}, {5,"c"}, {7,"d"}};

auto it = m.lower_bound(4);   // 指向 key=5
auto it2 = m.upper_bound(5);  // 指向 key=7
```

10. 前驱与后继  
```cpp
auto it = m.find(5);

// 前驱：key 小于 5 的最大元素
if (it != m.begin()) {
    auto pre = prev(it);
    cout << pre->first;
}

// 后继：key 大于 5 的最小元素
auto nxt = next(it);
if (nxt != m.end()) {
    cout << nxt->first;
}
```
11. 删除区间  
```cpp
auto l = m.lower_bound(3);
auto r = m.upper_bound(7);
m.erase(l, r);   // 删除 key 在 [3, 7] 内的所有元素
```

12. 降序  
```cpp
map<int, string, greater<int>> m;
m[3] = "c"; m[1] = "a"; m[2] = "b";
// 遍历顺序：3, 2, 1
```

## multimap

multimap 与 map 的唯一区别：允许重复 key.  
```cpp
multimap<string, int> mm;
mm.insert({"Tom", 90});
mm.insert({"Tom", 85});
mm.insert({"Tom", 95});

// 查找所有 Tom 的成绩
auto range = mm.equal_range("Tom");
for (auto it = range.first; it != range.second; it++)
    cout << it->second << " ";   // 90 85 95
```

注意：multimap 不支持 [] 运算符，因为一个 key 可能对应多个 value。  

删除 multimap 中的元素  

```cpp
mm.erase("Tom");          // 删除所有 key 为 "Tom" 的元素
auto it = mm.find("Tom");
mm.erase(it);             // 只删除一个
```




## string 

string 是 C++ STL 中用于处理字符串的类.  

string 的特点  

特性	    说明  

动态长度	自动扩容，不需要预估大小  

支持赋值	s1 = s2 直接拷贝  

支持比较	==、<、> 按字典序  

支持拼接	s1 + s2、s1 += s2  

随机访问	s[i] 访问单个字符，O(1)  

内置函数	substr、find、replace 等  

`s.size();`  返回字符串长度  
`s.empty();` 返回字符串是否为空  
`s.clear();` 清除字符串  
s可以加一个字符串：`s+="abf";`  
也可以加一个字符：`s+='a';`  
`substr( )`函数：  
`string q=s.substr(k);`把从s的下标为k的字符开始一直到结尾  
`s.substr(k,x)`返回的是起始位置下标为k，长度是x的字符串，当`x>s.size()`时，就输出到字符串结束为止。    
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
对浮点数类型的数组一般取最大值为 `memset(a,0x7f,sizeof a)`  

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