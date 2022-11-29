---
title: 链表

category:
  - algorithm
tag:
  - 数据结构
---


## stack（hdu）

<p>题意：有n个栈，第i个栈刚开始只放了i，有m个操作，每次把ai放到bi里，求最后每个栈里元素的个数和元素</p>

<p>模拟肯会超时，那么我们就想用双链表来写</p>

<p>s数组用来存一个数的前面相连的数或者后面的数（因为堆的话一个数只能连两个数）</p>


```cpp
struct name{
	int pre,next;
}s[N];
```


<p>sta数组用来记录栈顶和栈底元素</p>


```cpp
struct po{
	int top,bot;
}sta[N];
```


<p>f数组来记录这个数输出过没有，num来记录每个栈的元素的个数</p>


```cpp
int f[N],num[N];
```


<p>刚开始初始化的时候每个栈的栈顶和栈底都是i本身，然后num都是1，f初始化为0，每个数没有与他相连的数，所以前面后面都是0</p>


```cpp
for(int i=1;i<=n;i++){
			num[i]=1;
			sta[i].top =sta[i].bot =i;
			f[i]=0;
			s[i].next =s[i].pre =0;
		}
```


<p>然后我们对于把a这个栈放到b这个栈的add操作：</p>

<p>我们分别用xyzq来记录a的栈顶和栈底，b的栈顶和栈底</p>

<p>把a放入b，那么a的栈底就是b的栈顶</p>

<p>a的num要加到b的num里去，a的num变成0</p>

<p>然后a的栈顶x就会连上b的栈顶z，判断一下x有没有与他相连的数</p>

<p>如果没有就把z连到x的后面next，如果有就连到x的前面pre</p>

<p>z的情况也是一样，如果z后面没有的话就连到后面，有的话就连到前面</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cmath>
#include<stack>
#include<vector>
#include<queue>
#include<set>
#include<cstring>
#include<list>
#include<map>
#include<cstdio>
typedef long long ll;
typedef int64_t s64;
using namespace std;
struct node{
    int pre,next;
}s[200005];
struct stac{
    int top,bot;
}sta[200005];
int num[200005];
void add(int a,int b){
    int x=sta[a].top;
    int y=sta[a].bot;
    int z=sta[b].top;
    int q=sta[b].bot;
    if(!num[b]){        //b栈中没有东西
        sta[b].bot=x;   //a的头变b的底
        sta[b].top=y;   //a的底比b的头
        sta[a].top=sta[a].bot=0; //把a头和底置0 
    }
    else{              //b栈有东西
        if(!s[x].next){   //判断a栈中的头是否是next空（因为此题为双向链表不能确定是next还是pre）
            s[x].next=z;
        }   
        else{   //判断a栈中的头是否是pre空
            s[x].pre=z;
        }
        if(!s[z].next){   //判断b栈中的头是否是next空（双向链表所以a和b是需要相互连接的）
            s[z].next=x;
        }
        else{   //判断b栈中的头是否是pre空
            s[z].pre=x;
        }   //在这之前都是在做将ab栈连接起来的操作
        sta[b].top=y;   //把a的底变b的头
        sta[a].top=sta[a].bot=0;   //把a的头和底置0
    }
    num[b]+=num[a];
    num[a]=0;
}
int sig[200005];
int main(){
    int n,m;
    while(cin>>n>>m){
        for(int i=1;i<=n;i++){   //初始化n个栈
            s[i].pre=s[i].next=0;
            sta[i].top=sta[i].bot=i;
            num[i]=1;
            sig[i]=0;
        }
        int x,y;
        while(m--){
            cin>>x>>y;
            if(num[x]==0)
                continue;
            add(x,y);
        }
        for(int i=1;i<=n;i++){
            int k=sta[i].top;
            cout<<num[i];   //输出当前栈中的数据个数
            if(num[i]){     //判断是否栈中有数据   
                while(k){
                    cout<<" "<<k;   
                    sig[k]=1;   //每次找到并且输出后都需要标记
                    if(s[k].next&&sig[s[k].next]!=1){   //寻找下一个数据，因不确定是next还是pre所以需要进行以下的判断
                        k=s[k].next;
                    }
                    else if(s[k].pre&&sig[s[k].pre]!=1){
                        k=s[k].pre;
                    }
                    else{
                        k=0;   //找不到下一个退出循环
                    }
                }
            }
            cout<<endl;
        }
    }
    return 0;
}
```


<p></p>

## 逆散列问题

<p>给定长度为 N 的散列表，处理整数最常用的散列映射是 H(x)=x%N。如果我们决定用线性探测解决冲突问题，则给定一个顺序输入的整数序列后，我们可以很容易得到这些整数在散列表中的分布。例如我们将 1、2、3 顺序插入长度为 3 的散列表<code>HT[]</code>后，将得到<code>HT[0]=3</code>，<code>HT[1]=1</code>，<code>HT[2]=2</code>的结果。</p>

<p>但是现在要求解决的是“逆散列问题”，即给定整数在散列表中的分布，问这些整数是按什么顺序插入的？</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入的第一行是正整数 N（≤1000），为散列表的长度。第二行给出了 N 个整数，其间用空格分隔，每个整数在序列中的位置（第一个数位置为0）即是其在散列表中的位置，其中负数表示表中该位置没有元素。题目保证表中的非负整数是各不相同的。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>按照插入的顺序输出这些整数，其间用空格分隔，行首尾不能有多余的空格。注意：对应同一种分布结果，插入顺序有可能不唯一。例如按照顺序 3、2、1 插入长度为 3 的散列表，我们会得到跟 1、2、3 顺序插入一样的结果。在此规定：当前的插入有多种选择时，必须选择最小的数字，这样就保证了最终输出结果的唯一性。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
11
33 1 13 12 34 38 27 22 32 -1 21

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
1 13 12 21 33 34 38 27 22 32
```


<p> 思路：先找出来插入的数，因为题目中说了如果是负数就代表没有元素，所以我们要开一个数组b来记录插入的数，当数大于等于0时存入b，con来记录插入数组b的个数。因为需要输出从小到大的插入顺序，所以我们先将b数组按升序排序，开一个ans记录插入数的顺序，用v1来记录插入的数是否被用过v2来记录表中的位置是否被找过，然后我们开始一个一个找ans里的数。</p>

<p>每找一次遍历一遍b数组，如果b数组的这个数被用过了就找下一个数，如果没被用过的话，我们先找到这个数应该在表里的下标，即k=b[j]%n,如果这个表的下标k没有被找而且里面的数恰好等于b[j],我们就把这个数放进ans里，标记一下找到了，可以找下一个存入ans的数了，如果这个表的下标k被找了我们就++看看下面一个位置是不是b[j],如果这个表的下标没有被找但是里面的数不是b[j]的话，说明不是按这个顺序填入的，我们就j++找下一个b[j]。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int n,con;//con存数的个数
int a[1005],b[1005],ans[1005];//a存表，b来存数，ans存顺序
int v1[1005],v2[1005];//v1看数有没有被用过，v2看表中的位置有没有被用过
int main(){
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	for(int i=0;i<n;i++){
		if(a[i]>=0)b[con++]=a[i];//当不是负数就存入b中
	}
	sort(b,b+con);//因为他要输出递增的序列，所以我们把数先按照递增的顺序来拍
	for(int i=0;i<con;i++){//这层循环是为了找出ans数组，每次找到的数等于ans[i]
		for(int j=0;j<con;j++){//这层循环是为了看b数组中的没有被用到的数在表中找到之后插入ans
			if(v1[j])continue;//当数被用过的时候直接continue找下一个
			int f=0;//用来记录每次循环是否找到了一个可以放在ans里的数，如果能找到就改变状态j循环break然后i++找下一个存到ans里的数
			for(int k=b[j]%n; ;k++){//k是b映射到a的下标，如果他的位置没有被占领他俩之间的关系就是a[b[j]%n]=b[j]
				if(k==n)k=0;//如果表走到末尾了就从头开始查找
				if(v2[k]==0&&a[k]==b[j]){//当表的位置没有被占领而且表存的数和枚举的数相等时
					ans[i]=b[j];//把这个数存到ans里
					v1[j]=v2[k]=1;//记录一下表和数组已经被使用
					f=1;//记录一下已经找到一个数存入ans里了
					break;//找到之后不用顺延表的下标了直接跳出
				}
				if(v2[k]==0){//如果这个表的位置没有被占领，说明这个b[j]不是我们要找的，不能插入ans里，我们再找下一个j
					break;
				}
			}
			if(f)break;//当我们在一个i循环里已经找到一个b[j]塞入ans的话我们就从j循环里break
		}
	}
	for(int i=0;i<con;i++){
		if(i!=0)printf(" ");
		printf("%d",ans[i]);
	}
	return 0;
}
```


<p></p>

## 链表去重 。

<p>给定一个带整数键值的链表 L，你需要把其中绝对值重复的键值结点删掉。即对每个键值 K，只有第一个绝对值等于 K 的结点被保留。同时，所有被删除的结点须被保存在另一个链表上。例如给定 L 为 21→-15→-15→-7→15，你需要输出去重后的链表 21→-15→-7，还有被删除的链表 -15→15。</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在第一行给出 L 的第一个结点的地址和一个正整数 N（≤105，为结点总数）。一个结点的地址是非负的 5 位整数，空地址 NULL 用 −1 来表示。</p>

<p>随后 N 行，每行按以下格式描述一个结点：</p>


```cpp
地址 键值 下一个结点

```


<p>其中<code>地址</code>是该结点的地址，<code>键值</code>是绝对值不超过104的整数，<code>下一个结点</code>是下个结点的地址。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>首先输出去重后的链表，然后输出被删除的链表。每个结点占一行，按输入的格式输出。</p>

<h3 id="输入样例：">输入样例：</h3>


```cpp
00100 5
99999 -7 87654
23854 -15 00000
87654 15 -1
00000 -15 99999
00100 21 23854

```


<h3 id="输出样例：">输出样例：</h3>


```cpp
00100 21 23854
23854 -15 99999
99999 -7 -1
00000 -15 87654
87654 15 -1
```


<p>tidx思路：建立一个结构体来存他的数值和下一个数的下标，用一个数组tidx来存未被删除的元素的下标，再用一个数组fidx来存被删除的元素的下标，开一个ab数组来记录每个数的绝对值是否出现过，如果没出现就把他的下标加入tidx，否则加入fidx。</p>

<p>注意：要特别判断一下n==1的情况</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
struct name{
	int data;//存数
	int next;//存下一个数的下标
};
struct name a[100005];
	int h,n;//头结点和数的数量
	int tidx[100005];//未被删除的元素的下标
	int fidx[100005];//被删除的元素的下标
	int ab[100005];//标记每个数的绝对值
	int t=0,f=0;//删除后序列的数量和删除的数量
int main(){
	cin>>h>>n;
	for(int i=0;i<n;i++){
		int idx,x,nidx;
		cin>>idx>>x>>nidx;
		a[idx].data =x;
		a[idx].next =nidx;
	}
	if(n==1){//这里要特判一下n==1的情况
		printf("%05d %d %d",h,a[h].data ,-1);
	}else{
		while(h!=-1){//遍历链表
		if(ab[abs(a[h].data )]==0){//如果没有出现过
			tidx[t++]=h;//把他的下标存入未被删除的序列
			ab[abs(a[h].data )]=1;//标记
		}else{
			fidx[f++]=h;//把他放入删除元素的下标
		}
		h=a[h].next ;
	}
	for(int i=0;i<t-1;i++){
		printf("%05d %d %05d\n",tidx[i],a[tidx[i]].data ,tidx[i+1]);
	}
	printf("%05d %d %d\n",tidx[t-1],a[tidx[t-1]].data ,-1);
	for(int i=0;i<f-1;i++){
		printf("%05d %d %05d\n",fidx[i],a[fidx[i]].data ,fidx[i+1]);
	}
	printf("%05d %d %d\n",fidx[f-1],a[fidx[f-1]].data ,-1);
	}
	
	return 0;
}
```


<p></p>

