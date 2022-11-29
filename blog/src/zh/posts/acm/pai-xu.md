---
title: 排序

category:
  - algorithm

tag:
  - 技巧
---


## 1416: 大小关系（拓扑排序）

<div>
<div>
<div>
<div>
<div>
<p style="text-align:left;"><span style="color:#000000;">当我们知道一组大小关系之后，可判断所有关系是否都能成立，即关系间没有矛盾。</span> <br /><span style="color:#000000;">例如：A&lt;B, A&lt;C, B&lt;C  通过这组关系我们可以得到A&lt;B&lt;C ，所有关系都成立，没有矛盾。</span> <br /><span style="color:#000000;">若</span> <span style="color:#000000;">A&lt;B, B&lt;C, C&lt;A  通过前两个关系我们得到</span> <span style="color:#000000;">A&lt;B&lt;C ，这个关系与C&lt;A矛盾，所有关系不能同时成立。</span> <br /><br /><span style="color:#000000;">现在我们知道m个关系,请判断这m个关系是否能成立，成立输出</span><span style="color:#000000;">“</span><span style="color:#000000;">YES”，否则输出</span><span style="color:#000000;">“</span><span style="color:#000000;">NO”。</span></p>
</div>
</div>

<div>
<div><strong>输入</strong></div>

<div>
<p style="text-align:left;"><span style="color:#000000;">多组数据，每组数据如下：</span></p>

<p style="text-align:left;"><span style="color:#000000;">第一行有两个字母m。</span> <span style="color:#000000;">m代表m组关系(1&lt;=m&lt;=400)，接下来m行每行有一个关系，用两个不同的字母和一个符号表示。（输入保证字母在</span><span style="color:#000000;">‘</span><span style="color:#000000;">A’-‘Z’之间，关系符号只有</span> <span style="color:#000000;">&gt; , &lt;）</span></p>
</div>
</div>

<div>
<div><strong>输出</strong></div>

<div>
<p style="text-align:left;"><span style="color:#000000;">对于每组数据输出</span><span style="color:#000000;">“</span><span style="color:#000000;">YES”或</span><span style="color:#000000;">“</span><span style="color:#000000;">NO”.</span></p>
</div>
</div>

<div>
<div><strong>样例输入 <a>Copy</a></strong></div>

<div>

```cpp
3
A<B
A<C
B<C
3
A<B
B<C
C<A

```

</div>
</div>

<div>
<div><strong>样例输出 <a>Copy</a></strong></div>

<div>

```cpp
YES
NO

```

</div>
</div>
</div>
</div>
</div>

<p> 思路：因为要拍先后顺序，所以使用拓扑排序，用结构体数组存每个字母的字符和比他大的字符的指针，相当于用邻接表存一个字符的所有大于他的字符，然后当op1&lt;op2的时候，把op2插入以op1开头的邻接表的后面。</p>

<p>拓扑排序思路：枚举所有点，找到入度为0的点放入栈或队列中，当栈或队列不空的时候一直循环，取他的队头或栈顶，遍历以他为头节点的链表，遍历之后删除那个链（后面的数入度--），再判断一下如果入度变成0了就加入栈或队列中。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<stack>
using namespace std;
struct name{
	char data;
	struct name *p;
};
int d[26];
int vis[26];
struct name ch[26];
void in(){//初始化
	for(int i=0;i<26;i++){
		ch[i].data =(char)(i+65);//记录他的符号
		ch[i].p =NULL;//记录大于他的字符的指针
	}
}
bool tomp(struct name ch[],int n){
	stack<int> s;
	for(int i=0;i<26;i++){
		if(vis[i]!=0&&d[i]==0){//当他被输入过而且入度为0的时候加入栈
			s.push(i); 
		}
	}
	int con=0;//记录放到栈中的数的个数
	while(s.size() ){//当他不空
		int tt=s.top() ;//取栈顶
		con++;//更新个数
		s.pop() ;
		struct name *q;
		for(q=ch[tt].p ;q;q=q->p ){//遍历以栈顶元素为下标的元素的后面的元素
			char kk=q->data ;
			d[kk-65]--;//遍历到的字符的入度--
			if(d[kk-65]==0){//如果入度是0就加入到栈中
				s.push(kk-65); 
			}
		}
	}
	return con==n;//最后判断栈中的个数是不是加了n个，如果是就说明有拓扑序
}
int main(){
	int m;
	while(scanf("%d",&m)!=EOF){
		in();
		memset(d,0,sizeof d);
		memset(vis,0,sizeof vis);
		char op[5];
		int num=0;*//记录不同字符的种数
		while(m--){
			scanf("%s",op);
			if(vis[op[0]-65]==0){//如果他没有被记录过
				vis[op[0]-65]=1;//记录
				num++;//种数++
			}
			if(vis[op[2]-65]==0){
				vis[op[2]-65]=1;
				num++;
			}
			if(op[1]=='<'){//如果是小于就把后面的字符插入以前面字符为头节点的链表中
				struct name *q;
				q=(struct name*)malloc(sizeof(name));//记得动态申请内存
				q->data =op[2];
				q->p =ch[op[0]-65].p ;
				ch[op[0]-65].p =q;
				d[op[2]-65]++;
			}else{
				struct name *q;
				q=(struct name*)malloc(sizeof(name));
				q->data =op[0];
				q->p =ch[op[2]-65].p ;
				ch[op[2]-65].p =q;
				d[op[0]-65]++;
				
			}
			
		}if(tomp(ch,num)){
				printf("YES\n");
			}else printf("NO\n");
	}
	
	return 0;
}
```


<p></p>

## 拓扑序列，拓扑排序

<p>定义：对于图中的每条边 (x,y)，x 在 A 中都出现在 y 之前，则称 A 是该图的一个拓扑序列</p>

<p>可以证明，任意一个有向无环图都存在一个拓扑序列，有环的话不能构成拓扑序列</p>

<p>宽搜的一种</p>

<p>用法：求从小到大的排序时可以用，也可以求字符从大到小的排序</p>

<p>思路：枚举所有种类的点（每个点表示的数或者字符应该是不同的），将入度为0的点加入队列或者栈中，当栈或队列不空的时候，我们取栈顶或者队头元素，并且记录一下他里面一共加了多少个元素，遍历以这个元素为头节点的链表，每遍历一个数将他的入度--，当入度为0的时候加入栈或者队列中，最后判断一下如果加入栈中的元素数等于n（不同数的种类数），就说明有拓扑序，如果不相等就说明没有拓扑序。</p>

<p>下面是用加入队列的代码实现：</p>


```cpp
bool tp(){
    int hh=0,tt=-1;
    for(int i=1;i<=n;i++){
        if(d[i]==0){
            q[++tt]=i;
        }
    }
    while(hh<=tt){
        int t=q[hh++];
        for(int i=h[t];i!=-1;i=ne[i]){
            int j=e[i];
            d[j]--;
            if(d[j]==0)q[++tt]=j;
        }
    }
    return tt==n-1;
}


```


<p></p>

## 插入排序还是归并排序

<p>根据维基百科的定义：</p>

<p><strong>插入排序</strong>是迭代算法，逐一获得输入数据，逐步产生有序的输出序列。每步迭代中，算法从输入序列中取出一元素，将之插入有序序列中正确的位置。如此迭代直到全部元素有序。</p>

<p><strong>归并排序</strong>进行如下迭代操作：首先将原始序列看成 N 个只包含 1 个元素的有序子序列，然后每次迭代归并两个相邻的有序子序列，直到最后只剩下 1 个有序的序列。</p>

<p>现给定原始序列和由某排序算法产生的中间序列，请你判断该算法究竟是哪种排序算法？</p>

<h3 id="输入格式：">输入格式：</h3>

<p>输入在第一行给出正整数 N (≤100)；随后一行给出原始序列的 N 个整数；最后一行给出由某排序算法产生的中间序列。这里假设排序的目标序列是升序。数字间以空格分隔。</p>

<h3 id="输出格式：">输出格式：</h3>

<p>首先在第 1 行中输出<code>Insertion Sort</code>表示插入排序、或<code>Merge Sort</code>表示归并排序；然后在第 2 行中输出用该排序算法再迭代一轮的结果序列。题目保证每组测试的结果是唯一的。数字间以空格分隔，且行首尾不得有多余空格。</p>

<h3 id="输入样例-1：">输入样例 1：</h3>


```cpp
10
3 1 2 8 7 5 9 4 6 0
1 2 3 7 8 5 9 4 6 0

```


<h3 id="输出样例-1：">输出样例 1：</h3>


```cpp
Insertion Sort
1 2 3 5 7 8 9 4 6 0

```


<h3 id="输入样例-2：">输入样例 2：</h3>


```cpp
10
3 1 2 8 7 5 9 4 0 6
1 3 2 8 5 7 4 9 0 6

```


<h3 id="输出样例-2：">输出样例 2：</h3>


```cpp
Merge Sort
1 2 3 8 4 5 7 9 0 6
```


<p> 思路：如果是插入排序的话，那么就会b就会先有一段非递减序列，假设非递减序列到下标为j结束，那么数组b从下标j+1到n-1的数和原数组a一样。如果不是这样的话就是归并排序。</p>

<p> 对插入排序来说，找到异常的数的下标，然后从这个下标开始往前走，如果找到比他小的数就把他放在比他小的数后面结束，如果这个数比他大，就把这个数往后挪。</p>

<p>对归并排序来说，找到头两个非递减序列的长度cnt1和cnt2，因为归并排序每次是两个和两个序列合并，所以取他俩的最小值cnt之后找一下能够两两配对的下标最长到哪，假设到x，然后我们对这两两配对的区间进行排序，最后处理一下最后没被配对的序列排个序就好了。</p>


```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

int a[105];
int b[105];
int main(){
	int n,x;//用x来记录异常顺序的数
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	for(int i=0;i<n;i++){
		cin>>b[i];
	}
	bool f=true;
	int idx;//用idx来记录异常顺序数的下标
	for(int i=0;i<n;i++){
		if(b[i]<b[i+1])continue;//如果正常，直接跳过
		else{
			idx=i+1;//否则记录一下异常数的下标和数
			x=b[i+1];
			break;
		} 
	}
	for(int i=idx;i<n;i++){//检查异常数后面的数是否和原数组后面的数一样
		if(a[i]!=b[i]){//如果不一样就是归并排序
			f=false;
			break;
		}
	}
	if(f){
		printf("Insertion Sort\n");
		for(int i=idx;i>=0;i--){//如果是插入排序的话就从异常的数开始往前看
			if(i==0)b[i]=x;//如果走到首个元素了就把异常元素放进首个元素里
			else{
				if(x>b[i-1]){//找到比异常元素小的位置，把异常元素放他后面
					b[i]=x;
					break;
				}else{
					b[i]=b[i-1];//如果他比异常元素大，把他往后挪
				}
			}
		}
		for(int i=0;i<n;i++){
			if(i!=0)printf(" ");
			printf("%d",b[i]);
	}
	}
	else{
		printf("Merge Sort\n");
		int cnt1=1,cnt2=1,cnt,z=0;//cnt1是第一个非递减序列的长度，cnt2是第二个递减序列的长度
		int flag=0;//记录是在算第一个长度还是第二个长度
		for(int i=1;i<n;i++){
			if(flag==0){//如果在算第一个长度
				if(b[i-1]<=b[i]){//当他递增的时候长度++
					cnt1++;
				}else{//否则的话开始第二个长度的计算
					flag=1;
				}
			}else{//第二个长度计算
				if(b[i-1]<=b[i]){//如果递增长度就++
					cnt2++;
				}else break;//否则结束运算
			}
		}
		cnt=min(cnt1,cnt2);//取两个序列最短的那个长度
		int x=n/(2*cnt)*(2*cnt);//这里是在计算当前面的序列两两配对后的长度（
		while(z+2*cnt<=n){//这个z是用来记录每次排序的头下标，这个操作是用来对两两配对的序列进行整合排序
			sort(b+z,b+z+2*cnt);//将两两配对的区间里的数划分在一起排序
			z+=2*cnt;//更新排序的下标
		}
		sort(b+x,b+n);//对最后没有配对的序列进行排序
		for(int i=0;i<n;i++){
			if(i!=0)printf(" ");
			printf("%d",b[i]);
		}
	} 
	
	return 0;
}
```


<p></p>

## 插入排序（c++）

<p>插入排序就是按顺序一个接一个的拿出一个数组里顺序不对的元素，然后把他放到正确的位置，我们可以用一个指针i来扫描数组a，如果a[i]&lt;a[i-1]的话是正确的顺序，我们跳过，如果a[i]&gt;a[i-1]说明a[i-1]是异常的元素（比前面的数小，我们要的顺序应该是递增的顺序），然后我们就把这个元素的值和下标拿出来，另x等于他的值，idx等于他的下标，用指针j来从异常的元素的下标idx来往他前面找，如果找到比x小的数就让他的下一个位置等于x，如果他比x大的话我们就让他后面那个数等于他（把大的数往后移动）。</p>


```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    int a[100];
    cin>>n;
    int idx,x;
    for(int i=0;i<n;i++){
    	cin>>a[i];
	}
    for (int i = 0; i < n-1; i++) {//因为比i和i+1所以i要小于n-1
        if (a[i] < a[i + 1]) continue; // 如果是正常的顺序，跳过
        else { // 否则进行插入排序
            idx = i + 1; // 存储异常元素位置
            x = a[i + 1]; // 存储异常元素的值 
            for (int j = idx ; j >= 0; j--) { // 从异常元素的位置往前查找
                if(j==0)a[j]=x;//如果走到了首个元素就把异常的数赋给首个元素（异常元素最小
                else{
                	if (x > a[j - 1]) { //如果发现前一个元素，比异常元素小，那就是插入的位置，插入元素
					a[j] = x;
                    break;
                } else { // 否则将大的元素往后移动
                    a[j] = a[j - 1];
                }
				}
				
            }
        }
    }
    for(int i=0;i<n;i++)printf("%d ",a[i]);
    return 0;
}


```


<p></p>


