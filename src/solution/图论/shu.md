---
title: 树

category:
  - algorithm

tag:
  - 图
---


## CF706D Vasiliy‘s Multiset

<p>Author has gone out of the stories about Vasiliy, so here is just a formal task description.</p>

<p>You are given qq queries and a multiset AA , initially containing only integer 00 . There are three types of queries:</p>

<ol><li>"+ x" — add integer xx to multiset AA .</li>
	<li>"- x" — erase one occurrence of integer xx from multiset AA . It's guaranteed that at least one xx is present in the multiset AA before this query.</li>
	<li>"? x" — you are given integer xx and need to compute the value 
	<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/200f51f1c76134b1655997977ed2f391.png" /></p>
	, i.e. the maximum value of bitwise exclusive OR (also know as XOR) of integer xx and some integer yy from the multiset AA .</li>
</ol><p>Multiset is a set, where equal elements are allowed.</p>

<p>题意：刚开始a集合里有一个数0，那么我们有q个操作：1.+x，将x加到集合a中，2.-x，将x从集合中减掉，3.？x，输出集合a中的数与x的最大异或值</p>

<p>思路：异或的话存二进制字典树，对插入操作就是平常的操作，因为还有一个删除和询问所以我们需要用个num数组记录一下一个数的二进制每个位的数的个数，删除的时候遍历一下num--，因为有询问操作所以我们要用一个数组v来记录一下到一个编号的数是多少</p>

<p></p>


```cpp
/*

 .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |  ________    | || |  _________   | || | ____    ____ | || |     ____     | |
| | |_   ___ `.  | || | |_   ___  |  | || ||_   \  /   _|| || |   .'    `.   | |
| |   | |   `. \ | || |   | |_  \_|  | || |  |   \/   |  | || |  /  .--.  \  | |
| |   | |    | | | || |   |  _|  _   | || |  | |\  /| |  | || |  | |    | |  | |
| |  _| |___.' / | || |  _| |___/ |  | || | _| |_\/_| |_ | || |  \  `--'  /  | |
| | |________.'  | || | |_________|  | || ||_____||_____|| || |   `.____.'   | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'

*/
#include<iostream>
#include<algorithm>
#include<cstring>
#include<vector>
#include<set>
#include<map>
#include<queue>
#include<deque>
#include<cmath>
#include<stack>
#define int long long
#define lowbit(x) x&(-x)
#define PI 3.1415926535
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int,int> pii;
int gcd(int a,int b){
	return b>0 ? gcd(b,a%b):a;
}
/*
int dx[8]={-2,-2,-1,1,2,2,-1,1};
int dy[8]={-1,1,2,2,1,-1,-2,-2};
int dx[4]={0,-1,0,1};
int dy[4]={-1,0,1,0};
int dx[8]={-1,1,0,0,-1,-1,1,1};
int dy[8]={0,0,-1,1,-1,1,-1,1};
*/
//int e[N],ne[N],h[N],idx,w[N];
/*void add(int a,int b,int c){
	e[idx]=b;
	w[idx]=c;
	ne[idx]=h[a];
	h[a]=idx++;
}
*/
const int N=2e5+10;
int n;
int cnt;
int tr[N*17][2],num[N*27],v[N*27];//v是记录每个编号所表示的数字
void insert(int x){
	int p=0;
	for(int i=32;i>=0;i--){
		int op=x>>i&1;
		if(!tr[p][op]){
			tr[p][op]=++cnt;
		}
		p=tr[p][op];
		num[p]++;//对于每个位上的二进制数的编号，个数++
	}
	v[p]=x;//到最后的时候记录一下到达这个编号所表示的值
}
void declear(int x){//删除的是x的每一位二进制的数的编号的个数
	int p=0;
	for(int i=32;i>=0;i--){
		int op=x>>i&1;
		p=tr[p][op];
		num[p]--;
	}
}
int query(int x){
	int p=0;
	for(int i=32;i>=0;i--){
		int op=x>>i&1;
		if(tr[p][op^1]&&num[tr[p][op^1]]){//如果^1的数存在的话我们就让编号等于^1之后的数，否则还等于原数
			p=tr[p][op^1];
		}else p=tr[p][op];
	}
	return x^v[p];//返回异或值，v[p]表示我们最终找到的数的编号p所表示的数值
}
void sove(){
	char op;
	int x;
	cin>>op>>x;
	if(op=='+'){
		insert(x);
	}else if(op=='-'){
		declear(x);
	}else cout<<query(x)<<endl;
}

signed main(){
	ios::sync_with_stdio(false);
	cin.tie() ,cout.tie() ;
	int t=1;
	insert(0);
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```


<p></p>

## 二叉树详解

<p>二叉树：他的子节点的个数小于等于2</p>

<p>用结构体表示一个树：</p>


```cpp
struct treenode{
	int val;//根节点编号
	struct treenode* l;//左子树
	struct treenode* r;//右子树
};
```


<p>为了方便表示，优化版：</p>


```cpp
typedef struct treenode{
	int val;//根节点编号
	struct treenode* l;
	struct treenode* r;
}tree,*lptree;//其实就是命名了一下结构体。。。
```


<p>然后我们来种一个只有根节点的树</p>


```cpp
lptree creat(int t){
	lptree newtree=(lptree)malloc(sizeof newtree);
	newtree->val =t;
	newtree->l =NULL;
	newtree->r =NULL;
	return newtree;
}
```


<p></p>

<p> 接下来就是插入操作啦</p>


```cpp
void in(lptree p,lptree lc,lptree rc){//p是父节点，lc是左子树，rc是右子树
	p->l =lc;
	p->r =rc;
}
```


<p> 然后我们演示一下代码实现建立下图的树：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/abdfdf9b20154e97bcba9fda5043d53f.png" /></p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cstdlib>
using namespace std;

typedef struct tree{
	int val;
	struct tree* l;
	struct tree* r;
}tree,*lptree;
	
lptree creat(int t){
	lptree newtree=(lptree)malloc(sizeof newtree);
	newtree->val =t;
	newtree->l =NULL;
	newtree->r =NULL;
	return newtree;
}
void xianxu(lptree root){
	if(root==NULL)return ;
	printf("%d ",root->val );
	xianxu(root->l );
	xianxu(root->r );
}
void zhongxu(lptree root){
	if(root==NULL)return ;
	zhongxu(root->l );
	printf("%d ",root->val );
	zhongxu(root->r );
}
void houxu(lptree root){
	if(root==NULL)return ;
	houxu(root->l );
	houxu(root->r );
	printf("%d ",root->val );
}
void in(lptree p,lptree lc,lptree rc){
	p->l =lc;
	p->r =rc;
}
int main(){
	lptree t1=creat(1);
	lptree t2=creat(2);
	lptree t3=creat(3);
	lptree t4=creat(4);
	lptree t5=creat(5);
	lptree t6=creat(6);
	lptree t7=creat(7);
	return 0;
}
```


<p> 最简单的建树，只是为了熟悉一下用法，无实际用途</p>

<p></p>

<p></p>

<p>完全二叉树：</p>

<p>下标从1开始，为了保证他的子节点除以2等于父节点，如果父节点为n，左子节点等于2*n，右子节点等于2*n+1</p>

<p>二叉树的先序，中序，后序遍历：</p>

<p>先序遍历：先头节点再左节点再右节点</p>

<p>中序遍历：左头右</p>

<p>后序遍历：左右头</p>

<p>比如下图中的一个树：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/4c1679ea0b144ffbabe28814482ddc6d.png" /></p>

<p>我们按先序遍历的话就是：1 2 4 5 3 6 7</p>

<p>按中序遍历的话就是：4 2 5 1 6 3 7</p>

<p>按后序遍历的话就是：4 5 2 6 7 3 1</p>

<p>代码实现（先用递归）是：</p>

<p>先序：</p>


```cpp
void xianxu(lptree t){
	if(t==NULL)return ;
	printf("%d",t->val );
	xianxu(t->l );
	xianxu(t->r );
}
```


<p>中序：</p>


```cpp
void zhongxu(lptree t){
	if(t==NULL)return ;
	zhongxu(t->l );
	printf("%d",t->val );
	zhongxu(t->r );
}
```


<p>后序:</p>


```cpp
void houxu(lptree t){
	if(t==NULL)return ;
	houxu(t->l );
	houxu(t->r );
	printf("%d",t->val );
}
```


<p>聪明的小朋友很快就能看出来先中后其实是输出头节点的顺序在第一个第二个第三个啦~</p>

<p> 然后我们要看看刚才那个图我们先序中序和后序遍历的顺序是什么，我们可以这么写：</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<cstdlib>
using namespace std;

typedef struct tree{
	int val;
	struct tree* l;
	struct tree* r;
}tree,*lptree;
	
lptree creat(int t){
	lptree newtree=(lptree)malloc(sizeof newtree);
	newtree->val =t;
	newtree->l =NULL;
	newtree->r =NULL;
	return newtree;
}
void xianxu(lptree root){
	if(root==NULL)return ;
	printf("%d ",root->val );
	xianxu(root->l );
	xianxu(root->r );
}
void zhongxu(lptree root){
	if(root==NULL)return ;
	zhongxu(root->l );
	printf("%d ",root->val );
	zhongxu(root->r );
}
void houxu(lptree root){
	if(root==NULL)return ;
	houxu(root->l );
	houxu(root->r );
	printf("%d ",root->val );
}
void in(lptree p,lptree lc,lptree rc){
	p->l =lc;
	p->r =rc;
}
int main(){
	lptree t1=creat(1);
	lptree t2=creat(2);
	lptree t3=creat(3);
	lptree t4=creat(4);
	lptree t5=creat(5);
	lptree t6=creat(6);
	lptree t7=creat(7);
	in(t1,t2,t3);
	in(t2,t4,t5);
	in(t3,t6,t7);
	printf("first:");
	xianxu(t1);
	printf("\nsecond:");
	zhongxu(t1);
	printf("\nthird:");
	houxu(t1);
	return 0;
}
```


<p>最后出来的结果是：</p>

<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/718faf597d47463a96aee410eedbf23e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBARGVtby5v,size_20,color_FFFFFF,t_70,g_se,x_16" /></p>

<p>跟我们刚刚分析的一样哈，没有骗人！</p>

<p>任何递归函数都可以写成非递归，所以我们可以把这三个递归函数写成非递归函数，用压栈的方法。</p>

<p>先序：因为顺序是头左右，所以我们先把头放进去，弹出就打印，然后看他的右子树是不是空，如果不空的话就把右孩子加到栈里面，再看左孩子空不空，如果不空再把左孩子放进去。这样我们打印的顺序就是头左右啦~</p>

<p>代码实现：</p>


```cpp
stack<lptree> q;//首先定义一个栈
	q.push(t1);//把根节点放进去
	while(q.size() ){//当栈不空的时候
		lptree tt;
		tt=q.top() ;//取队头
		printf("%d ",tt->val  );//打印队头
		q.pop() ;//弹出即打印
		if(tt->r !=NULL){//如果右子树不空
			q.push(tt->r ); //压入栈中
		}
		if(tt->l!=NULL){//如果左子树不空
			q.push(tt->l ); //压
		}
	} 
```


<p>后序是左右头，我们倒过来看就是头右左，跟先序的区别就是左右换了一下，所以我们可以按照先序的做法，但是把左右换了一下，就是构造出头右左，先把头放进去，然后先压左后压右，这样出来的顺序就是头右左，但是我们想要的是他的逆序左右头，所以我们可以再建立一个栈，当他弹出原本的栈时候我们就把他存到那个新建的栈里，最后把栈输出就可以啦。</p>


```cpp
stack<lptree> q,d;
	q.push(t1);
	while(q.size() ){
		lptree tt=q.top() ;
		d.push(tt);
		q.pop() ;
		if(tt->l !=NULL){
			q.push(tt->l ); 
		} 
		if(tt->r !=NULL){
			q.push(tt->r ); 
		}
	} 
	while(d.size() ){
		lptree t=d.top() ;
		printf("%d ",t->val );
		d.pop() ;
	}
```


<p>中序遍历的话：我们先建立一个栈，判断如果头节点不空或者栈不空我们就进行循环，如果头节点不空我们就把他放进去，把头节点更新为他的左子树，（一直存他的左子树）如果头结点空了我们就取栈顶元素弹出打印之后把头结点更新为栈顶元素的右节点。</p>


```cpp
stack<lptree> o;
	lptree head=t1;
	while(o.size() ||head!=NULL){
		if(head!=NULL){
			o.push(head);
			head=head->l ; 
		}else{
			lptree t=o.top() ;
			head=t;
			o.pop() ;
			printf("%d ",t->val  );
			head=head->r ;
		}
	}
```


<p></p>

<p></p>

<p></p>

<p></p>

## p1030求先序遍历

<h2>题目描述</h2>

<p>给出一棵二叉树的中序与后序排列。求出它的先序排列。（约定树结点用不同的大写字母表示，长度\le 8≤8）。</p>

<h2>输入格式</h2>

<p>22行，均为大写字母组成的字符串，表示一棵二叉树的中序与后序排列。</p>

<h2>输出格式</h2>

<p>11行，表示一棵二叉树的先序。</p>

<h2>输入输出样例</h2>

<p><strong>输入 #1</strong>复制</p>

<pre>
BADC
BDCA
</pre>

<p><strong>输出 #1</strong>复制</p>

<pre>
ABCD
</pre>

<p></p>

<p>中序遍历：左根右</p>

<p>后序遍历：左右根</p>

<p>先序遍历：根左右</p>

<p>因为后序遍历的每次遍历都是根结点，所以我们先把后序遍历的根结点输出，然后在中序遍历中找到根结点所在的位置，在中序遍历中根结点的前面就是左子树右边就是右子树，在后序中前面是左子树，中间是右子树，最后一个是根结点，所以我们每次就根据这些下标来分别遍历左子树和右子树（因为题目要求先序遍历是根左右）。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

string zhong,hou;//中：左根右 后：左右根

void deal(int l1,int r1,int l2,int r2){
	if(l1>r1||l2>r2)return ;//当中序或后序遍历完的时候退出
	cout<<hou[r2];//没有遍历完就输出后序的最后一个（根结点
	int pos=-1;
	for(int i=0;i<=r1;i++){//找到中序里的根结点的位置
		if(zhong[i]==hou[r2]){
			pos=i;
			break;
		}
	}
	//在中序遍历中根结点的前面是左子树，根结点的后面是右子树
	//在后序遍历中我们只能知道最后一个是根结点，但是我们可以根据中序求出来左子树的长度来确定在后序中左子树和右子树的长度，最终确定位置关系
	deal(l1,pos-1,l2,l2+pos-1-l1);//左子树
	deal(pos+1,r1,l2+pos-l1,r2-1);
	
}
int main(){
	cin>>zhong>>hou;
	int len=zhong.size();
	deal(0,len-1,0,len-1);
	
	return 0;
}
```


<p></p>

<p></p>

