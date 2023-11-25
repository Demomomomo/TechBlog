---
title: 平衡树
---

## BST-二叉搜索树

每个结点都有一个权值，每一个结点都满足：他的左子树中任何一个点的权值严格小于当前结点的权值。他的右子树中任何一个点的权值严格大于当前结点的权值。  
BST中一般没有重复的数，如果有的话在这个点上加一个计数器来记录这个点出现的次数。  
BST的中序遍历一定是从大到小。

### 插入
从根结点开始递归，如果比根结点小的话就递归左子树。如果我们插入的这个数是存在的值，那么当我们找到结点权值与他相同的编号之后，这个编号的cnt++；如果插入的这个数不存在，那么我们就把他加上。  
### 删除
删除叶节点
### 找最大最小值
一个以x为根的子树的最大值就是从这个结点开始一直往右走，走到不能走（没有右儿子）为止。找最小值就是一直往左走。
### 找前驱/后继
前驱：在这个BST中序遍历之后的新序列中，一个结点的前一个数就叫做这个点的前驱。  
后继：在这个BST中序遍历之后的新序列中，一个结点的后一个数就叫做这个点的后继。  
找前驱：如果存在左子树，那么左子树中的最大值就是前驱；如果不存在左子树，那就看他和他的父结点的关系，如果他是他父节点的左子树，说明他的父节点大于他，继续找他父节点的父节点，直到找到一个当前点的父节点使得当前点是其父节点的右儿子，说明这个父节点就是我们要求的点的前驱。  
例如我们想要找下图的BST中的3和7的前驱：  
<img src="https://img-blog.csdnimg.cn/1c7625ce186e4c5f920f56a162ed6ccc.jpeg#pic_center" alt="Pulpit rock" width="204" height="228">  
3有左子树，那么我们就找他的左子树中的最大值，那么我们就找他的左子树中最左边的数，即2.  
7没有左子树，我们就找他的父节点8，7是8的左子树；继续找8的父节点9，8是9的左子树；继续找9的父节点5,9是5的右子树，那么我们就找到了7的前驱实际是5.  

找后继：如果存在右子树，那么右子树中的最小值就是后继。  

以上的所有操作在set里都是有对应的操作：  
1.insert：插入  
2.erase：删除  
3.找前驱/后继：--，++  
4.找最大/最小值：begin(),end()  
如果我们发现一个题中只要求上述几个操作的话，我们不需要手写平衡树，直接用set做就可以了。  



对一个BST进行询问，每次询问的时间与树的高度有关，一个随机的BST的高度是logn，但是最坏情况下是一条链，那么时间复杂度就是n，那么我们就需要把他变成treap，来让他的结构变得随机。  

## treap

## 作用

1.插入一个数  
2.删除一个数  
3.求某个值key的排名  
4.求排名是rank的数值  
5.比某个数小的最大值  
6.比某个数大的最小值  



### 结构  
```cpp
struct name{
    int l,r;//左右子树
    int key,val;//key是BST里排序用到的关键值，val是大根堆里的优先级，val是随机的。
    int cnt,si;//cnt表示这个数出现几次，si表示以这个结点为根的子树的大小。
}tr[N];
```
初始化的时候要加两个边界值，即根节点赋值成正无穷，再加一个负无穷。  

### 创建一个结点
创建一个结点赋值，val值赋值随机数，因为创建的是叶节点，所以他的个数和以他为根的子树的大小都是1，返回新建的编号。
```cpp
int get_node(int key){
	tr[++idx].key =key ;
	tr[idx].val =rand();
	tr[idx].si =tr[idx].cnt =1;
	return idx;
}

```
### 向上传递信息更新父结点（pushup
```cpp
void pushup(int u){
	tr[u].si =tr[tr[u].l].si +tr[tr[u].r ].si +tr[u].cnt ;
}
```


### 初始化
将负无穷和正无穷插入树中,插入之后还需要判断一下满足不满足val的性质，如果不满足我们就旋转。  
```cpp
void build(){
	get_node(-INF);
	get_node(INF);
	root=1;
	tr[1].r =2;
	pushup(root);
	if(tr[1].val<tr[2].val) zag(root); 
}
```

### 左旋/右旋
将子节点和父节点交换位置。  
左旋或右旋之后不会影响中序的遍历  
有一个口诀：左旋拎右左挂右，右旋拎左右挂左  
以将下图中的结点4右旋为例：  
<img src="https://img-blog.csdnimg.cn/14568b9b218f40eba6f6b7dfa91ade96.png#pic_center" alt="Pulpit rock" width="204" height="228">  
拎左就是将4的左子树的根结点3拎起来作为根结点  
<img src="https://img-blog.csdnimg.cn/b41cf2af9d2440949dc760195db34845.png#pic_center" alt="Pulpit rock" width="204" height="228">  
将原来左子树的3的右结点2挂在4的左子树上  
<img src="https://img-blog.csdnimg.cn/b8f9165772364b17b5e963db608f380d.png#pic_center" alt="Pulpit rock" width="204" height="228">  
那么右旋的结果就是：  
<img src="https://img-blog.csdnimg.cn/4a2f82d9fe6e4c2ab87f4b5f0af58e5d.png#pic_center" alt="Pulpit rock" width="204" height="228">  

右旋代码：  
```cpp
void zig(int &p){
	int q=tr[p].l ;
	tr[p].l =tr[q].r ;
	tr[q].r =p;
	p=q;
	pushup(tr[p].r );
	pushup(p);
}

```
左旋代码：
```cpp
void zag(int &p){
	int q=tr[p].r ;
	tr[p].r =tr[q].l ;
	tr[q].l =p;
	p=q; 
	pushup(tr[p].l );
	pushup(p);
}

```

### 插入一个数
要插入x这个数的时候，如果遍历完没有这个值，我们就新建一个结点。  
如果遍历到当前结点，当前结点的key值等于我们要插入的key值，那么我们就将当前结点的cnt++。  
如果要插入的key值小于当前结点的key值，那么我们就插入他的左子树中。插完之后我们需要按照val回溯一下：如果左子树的val值大于这个结点的val值，那么我们就进行右旋操作。  
如果要插入的key值大于当前结点的key值，那么我们就插入他的右子树中。插完之后我们再根据val值回溯，如果右子树的val值大于这个结点的val值，那么我们就将他左旋。  

在插入完结点之后，更新一下p的信息（pushup）  
```cpp
void insert(int &p,int key){
	if(!p) p=get_node(key);
	else if(tr[p].key ==key) tr[p].cnt ++;
	else if(key<tr[p].key ){
		insert(tr[p].l ,key);
		if(tr[tr[p].l ].val >tr[p].val ) zig(p);
	}else{
		insert(tr[p].r ,key);
		if(tr[tr[p].r ].val >tr[p].val ) zag(p);
	}
	pushup(p);
}
```

### 删除一个数

删除一个数的思路就是，如果这个数不存在的话我们直接返回；如果这个数的个数大于1，我们可以直接将个数减1；否则就说明我们需要删这个点，删这个点的操作就是我们需要将他向下旋转交换，直到他变成叶节点之后删除叶节点就可以了。  


如果遍历到最后发现当前删除的数不存在，那么我们就直接返回。  
如果当前的结点的key等于我们需要删除的key：  
如果这个结点的cnt>1,那么只需要将cnt--；
否则如果这个结点的左子树和右子树都不存在的话，我们直接将这个点删除就可以了。  
如果这个结点的左子树或者右子树存在的话：1.如果右子树是空的或者左子树的val大于右子树的val，那么我们就将他和左子树交换，那么就右旋。右旋之后原来要删除的结点变成了右子树，那么我们再删除右子树就可以了。2.如果左子树是空的或者右子树的val大于左子树的val，那么我们就将他与右子树交换，那么就左旋。  
如果当前结点的key不等于我们需要删除的key，那么我们就判断当前结点的key与我们需要删除的key的关系，如果key小于当前结点的key，那么我们就遍历他的左子树。否则遍历他的右子树。  

删除操作完成之后需要更新一下p的信息（pushup）  

```cpp
void remove(int &p,int key){
	if(!p) return ;
	if(tr[p].key==key){
		if(tr[p].cnt >1) tr[p].cnt --;
		else if(tr[p].l ||tr[p].r ){	
			if(!tr[p].r ||tr[tr[p].l].val >tr[tr[p].r ].val ){
				zig(p);
				remove(tr[p].r ,key);
			}else{
				zag(p);
				remove(tr[p].l ,key);
			}
			
		}else p=0;
	}else{
		if(key<tr[p].key ) remove(tr[p].l ,key);
		else remove(tr[p].r,key);
	}
	pushup(p);
}

```






### 求某一个值key的排名
如果遍历完之后这个值不存在，就返回题目要求的值。  
如果当前结点的key值等于key，那么他的排名就是左子树的大小加1.  
如果key值小于当前结点的key，那么key就在他的左子树上，递归到他的左子树中看排名。  
如果key值大于当前结点的key，那么就在他的右子树上，注意；返回的排名应该是这个结点的左子树的大小加上这个结点的值的个数再加上key在右子树中的排名。  


```cpp
int get_rank_by_key(int p,int key){
	if(!p) return INF;
	if(tr[p].key ==key) return tr[tr[p].l ].si +1;
	if(key<tr[p].key ) return get_rank_by_key(tr[p].l ,key);
	else return tr[p].cnt +tr[tr[p].l ].si +get_rank_by_key(tr[p].r ,key);
}
```



### 求排名是rank的数值
如果遍历完没有，那么就返回指定值。  
如果当前结点的左子树的大小>=rank，那么就递归找他的左子树中排名为rank的结点的值。  
否则的话如果他的左子树的大小加上当前结点的个数>=rank的话，说明这个结点就是要找的值。  
否则的话就找他的右子树，找他的右子树中排名为rank-左子树大小-这个结点的个数的值。  
```cpp
int get_key_by_rank(int p,int rank){
	if(!p) return INF;
	if(tr[tr[p].l ].si>=rank) return get_key_by_rank(tr[p].l ,rank);
	if(tr[tr[p].l ].si +tr[p].cnt >=rank) return tr[p].key ;
	return get_key_by_rank(tr[p].r ,rank-tr[tr[p].l].si -tr[p].cnt );
}

```

### 求比某个数小的最大值
区别于前驱：这个数可能在树中不存在  
如果这个数不存在那么我们就返回负无穷。  
如果当前的结点key值大于等于key，那么我们就递归找他的左子树。  
如果当前结点key值小于key，那么将当前结点的key和右子树找到的值取最大。  
```cpp
int get_prev(int p,int key){
	if(!p) return -INF;
	if(tr[p].key >=key) return get_prev(tr[p].l ,key);
	return max(tr[p].key ,get_prev(tr[p].r ,key));
}
```

### 求比某个数大的最小值
区别于后继：这个数可能在树中不存在  
如果这个数不存在那么我们就返回负无穷。  
如果当前的结点key值小于等于key，那么我们就递归找他的右子树。  
如果当前结点key值大于key，那么将当前结点的key和右子树找到的值取最小。 

```cpp
int get_next(int p,int key){
	if(!p) return INF;
	if(tr[p].key <=key) return get_next(tr[p].r ,key);
	else return min(tr[p].key ,get_next(tr[p].l ,key));
}

```


### 例题：普通平衡树
原题链接：https://www.acwing.com/problem/content/description/255/  
题意：  
您需要写一种数据结构（可参考题目标题），来维护一些数，其中需要提供以下操作：  
1.插入数值x。  
2.删除数值x。(若有多个相同的数，应只删除一个)。  
3.查询数值x的排名(若有多个相同的数，应输出最小的排名)。  
4.查询排名为x的数值。  
5.求数值x的前驱(前驱定义为小于x的最大的数)。  
6.求数值x的后继(后继定义为大于x的最小的数)。  

直接套上面板子就可以了。  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=1e5+10,INF=1e8;
struct name{
	int l,r;
	int key,val;
	int cnt,si;
}tr[N];
int n,root,idx;
void pushup(int u){
	tr[u].si =tr[tr[u].l].si +tr[tr[u].r ].si +tr[u].cnt ;
}
void zig(int &p){
	int q=tr[p].l ;
	tr[p].l =tr[q].r ;
	tr[q].r =p;
	p=q;
	pushup(tr[p].r );
	pushup(p);
}
void zag(int &p){
	int q=tr[p].r ;
	tr[p].r =tr[q].l ;
	tr[q].l =p;
	p=q; 
	pushup(tr[p].l );
	pushup(p);
}
int get_node(int key){
	tr[++idx].key =key ;
	tr[idx].val =rand();
	tr[idx].si =tr[idx].cnt =1;
	return idx;
}
void build(){
	get_node(-INF);
	get_node(INF);
	root=1;
	tr[1].r =2;
	pushup(root);
	if(tr[1].val<tr[2].val) zag(root); 
}

void insert(int &p,int key){
	if(!p) p=get_node(key);
	else if(tr[p].key ==key) tr[p].cnt ++;
	else if(key<tr[p].key ){
		insert(tr[p].l ,key);
		if(tr[tr[p].l ].val >tr[p].val ) zig(p);
	}else{
		insert(tr[p].r ,key);
		if(tr[tr[p].r ].val >tr[p].val ) zag(p);
	}
	pushup(p);
}
void remove(int &p,int key){
	if(!p) return ;
	if(tr[p].key==key){
		if(tr[p].cnt >1) tr[p].cnt --;
		else if(tr[p].l ||tr[p].r ){	
			if(!tr[p].r ||tr[tr[p].l].val >tr[tr[p].r ].val ){
				zig(p);
				remove(tr[p].r ,key);
			}else{
				zag(p);
				remove(tr[p].l ,key);
			}
			
		}else p=0;
	}else{
		if(key<tr[p].key ) remove(tr[p].l ,key);
		else remove(tr[p].r,key);
	}
	pushup(p);
}


int get_rank_by_key(int p,int key){
	if(!p) return INF;
	if(tr[p].key ==key) return tr[tr[p].l ].si +1;
	if(key<tr[p].key ) return get_rank_by_key(tr[p].l ,key);
	else return tr[p].cnt +tr[tr[p].l ].si +get_rank_by_key(tr[p].r ,key);
}
int get_key_by_rank(int p,int rank){
	if(!p) return INF;
	if(tr[tr[p].l ].si>=rank) return get_key_by_rank(tr[p].l ,rank);
	if(tr[tr[p].l ].si +tr[p].cnt >=rank) return tr[p].key ;
	return get_key_by_rank(tr[p].r ,rank-tr[tr[p].l].si -tr[p].cnt );
}
int get_prev(int p,int key){
	if(!p) return -INF;
	if(tr[p].key >=key) return get_prev(tr[p].l ,key);
	return max(tr[p].key ,get_prev(tr[p].r ,key));
}

int get_next(int p,int key){
	if(!p) return INF;
	if(tr[p].key <=key) return get_next(tr[p].r ,key);
	else return min(tr[p].key ,get_next(tr[p].l ,key));
}
int main(){
	scanf("%d",&n);
	build();
	while(n--){
		int op,x;
		scanf("%d%d",&op,&x);
		if(op==1)insert(root,x);
		else if(op==2)remove(root,x);
		else if(op==3) printf("%d\n",get_rank_by_key(root,x)-1);
		else if(op==4) printf("%d\n",get_key_by_rank(root,x+1));
		else if(op==5) printf("%d\n",get_prev(root,x));
		else printf("%d\n",get_next(root,x));
	}
	return 0;
}
```

