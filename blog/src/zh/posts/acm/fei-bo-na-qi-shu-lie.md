---
title: 斐波那契数列

category:
  - algorithm

tag:
  - 数学
---


## 7-8 汉诺塔问题

<p>相传在古印度圣庙中，有一种被称为汉诺塔(Hanoi)的游戏。该游戏是在一块铜板装置上，有三根杆(编号A、B、C)，在A杆自下而上、由大到小按顺序放置64个金盘(如图1)。游戏的目标：把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子可以置于A、B、C任一杆上。</p>

<p class="img-center"><img alt="" src="https://img-blog.csdnimg.cn/img_convert/7435942180bdee61783900c36e2925e6.png" /></p>

<h3 id="输入格式">输入格式:</h3>

<p>输入在一行中给出1个正整数n。</p>

<h3 id="输出格式">输出格式:</h3>

<p>输出搬动盘子过程。</p>

<h3 id="输入样例">输入样例:</h3>

<p>在这里给出一组输入。例如：</p>



```cpp
3

```


<h3 id="输出样例">输出样例:</h3>

<p>在这里给出相应的输出。例如：</p>



```cpp
No.1 disk: a->c
No.2 disk: a->b
No.1 disk: c->b
No.3 disk: a->c
No.1 disk: b->a
No.2 disk: b->c
No.1 disk: a->c
```


<p></p>

<p> 典型的汉诺塔问题，参考了大佬的博客才看懂的</p>

<p>这两位大佬博文特清楚强推：<a data-link-desc="汉诺塔：汉诺塔(Tower of Hanoi)源于印度传说中，大梵天创造世界时造了三根金钢石柱子，其中一根柱子自底向上叠着64片黄金圆盘。大梵天命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上。并且规定，在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。                        --引用维基百科单看这个问题描述有点让人抓瞎，这是当然，无论多么简单的问题描述..." data-link-icon="https://g.csdnimg.cn/static/logo/favicon32.ico" data-link-title="图解汉诺塔问题（递归求解）_漂流的云的博客-CSDN博客_汉诺塔问题" href="https://blog.csdn.net/qq_37873310/article/details/80461767?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164976812316780357228241%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&amp;request_id=164976812316780357228241&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-80461767.142%5Ev7%5Epc_search_result_cache,157%5Ev4%5Econtrol&amp;utm_term=%E6%B1%89%E8%AF%BA%E5%A1%94%E9%97%AE%E9%A2%98&amp;spm=1018.2226.3001.4187" title="图解汉诺塔问题（递归求解）_漂流的云的博客-CSDN博客_汉诺塔问题">图解汉诺塔问题（递归求解）_漂流的云的博客-CSDN博客_汉诺塔问题</a></p>

<p><a data-link-desc="问题来源：汉诺塔来源于印度传说的一个故事，上帝创造世界时作了三根金刚石柱子，在一根柱子上从上往下从小到大顺序摞着64片黄金圆盘。上帝命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上。并且规定，在小圆盘上不能放大圆盘，在三根柱子之间一回只能移动一个圆盘，只能移动在最顶端的圆盘。有预言说，这件事完成时宇宙会在一瞬间闪电式毁灭。也有人相信婆罗门至今仍在一刻不停地搬动着圆盘。恩，当然这个传说并不" data-link-icon="https://g.csdnimg.cn/static/logo/favicon32.ico" data-link-title="经典汉诺塔问题分析_Adherer的博客-CSDN博客_汉诺塔问题" href="https://blog.csdn.net/liujian20150808/article/details/50793101?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164976812316780357228241%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&amp;request_id=164976812316780357228241&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-50793101.142%5Ev7%5Epc_search_result_cache,157%5Ev4%5Econtrol&amp;utm_term=%E6%B1%89%E8%AF%BA%E5%A1%94%E9%97%AE%E9%A2%98&amp;spm=1018.2226.3001.4187" title="经典汉诺塔问题分析_Adherer的博客-CSDN博客_汉诺塔问题">经典汉诺塔问题分析_Adherer的博客-CSDN博客_汉诺塔问题</a></p>

<p> 我的理解：</p>

<p>如果有n个盘需要挪，假设abc分别是起始盘，中间缓存盘，目标盘，我们需要借助中间缓存盘来把起始盘中的圆环挪到目标盘。操作是：先把前n-1个圆环看做一个整体放到缓存盘上，最后一个n放到目标盘，然后再把前n-1个圆环放到目标盘上。这时有一个递归的思想，先不管第n个圆环，再把前n-2个圆环看成一个整体，放入缓存盘，然后把第n-1个圆环放到目标盘，再把前n-2个圆环放到目标盘.....当n=1的时候很简单，直接把他放入目标盘即可。</p>

<p>总结下来就是两个函数：一个是把前n-1个盘借助目标盘放入缓存盘，另一个是把第n个盘放入目标盘（把在前n-1个盘放入目标盘的操作可以把原来的起始盘看成缓存盘借助他来放入目标盘）</p>



```cpp
#include <iostream>
#include <algorithm>
using namespace std;
void move(int n,char a,char c){//把n从起始盘直接放到目标盘
	printf("No.%d disk: %c->%c\n",n,a,c);
}
void hnt(int n,char a,char b,char c){//abc分别是起始盘缓存盘和目标盘
	if(n==1)move(n,a,c);//当只有一个的时候直接放到目标盘
	else{
		hnt(n-1,a,c,b);//把前n-1个放入缓存盘中
		move(n,a,c);//把第n个从起始盘放入目标盘
		hnt(n-1,b,a,c);//再把n-1个从缓存盘里换到目标盘
	}
}
int main(){
    int n;
    scanf("%d",&n);
    hnt(n,'a','b','c');//n是要处理的盘子数，abc分别是起始盘缓存盘和目标盘
    return 0;
}
```


<p> </p>

## 斐波那契数列

<p>指这样一个数列：1 1 2 3 5 8...</p>

<p>可以这样递归计算：f[0]=1,f[1]=1;f[n]=f[n-1]+f[n-2];第一阶是1第二阶是2</p>

<p>应用：童年生活二三事和 另一个爱与希望的故事</p>

<p>大致意思是有n级台阶，目前她处于第0级台阶，她每一次可以选择选择爬一级台阶或是连爬两级台阶，想知道她有几种到达第n级台阶的走法。</p>



```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int f(int n){
	if(n==0)return 0;
	if(n==1)return 1;
	return f(n-1)+f(n-2);
}
int main(){
	int n;
	scanf("%d",&n);
	printf("%d",f(n));
	return 0;
}
```


<p>还有一种题型是给你数字n让你输出前n个斐波那契数列的数，直接做n次，只需要三个数abc，才开始将a赋值0，b赋值1，然后每次循环输出a之后算出c=a+b，a=b，b=c即可；</p>



```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<cstring>

using namespace std;

int main(){
	int n;
	int a=0,b=1,c;
	scanf("%d",&n);
	while(n--){
		printf("%d ",a);
		c=a+b;
		a=b;
		b=c;
	}
	return 0;
}
```


<p></p>

