---
title: 凸包
---
## 凸包问题
一片树林里有很多树，让你用一根绳子将这些树包围住，求最短的绳子长度  
实质：用一个最小的凸多边形将所有点包住  
<img src="https://img-blog.csdnimg.cn/84f3db1b78a44eb1869f46bfe178cfc3.png#pic_center" alt="Pulpit rock" width="400" height="228"> 

## graham scan算法
找一个y值最小的点 $p_{0}$，按照每个点 $p_{i}$ 和 $p_{0}$ 连成的直线和x轴正半轴的夹角大小，从小到大排序  
极角排序：  
用叉乘判断方向： $\overrightarrow{a}$ × $\overrightarrow{b}$ = $\left | a \right |$ $\left | b \right |$  $\sin \theta$ ,$\theta$ 是a逆时针旋转到b的角度，那么叉积是正的就是逆时针旋转过去。  

```cpp
struct name{
	int x,y;
}p[N];
long long cj(int x1,int y1,int x2,int y2){
	return x1*y2-x2*y1;
}
int js(name p0,name p1,name p0,name p2){
	int x1=p1.x -p0.x ;
	int y1=p1.y -p0.y ;
	int x2=p2.x -p0.x ;
	int y2=p2.y -p0.y ;
	return cj(x1,y1,x2,y2);
}
bool cmp(name a,name b){
	int ans=js(p[0],a,p[0],b);
	if(ans==0)return a.x <b.x ;
	return ans>0;
}
```

排完序之后，用一个栈来储存凸包含有的点，先放一个0进栈，然后将前三个点放入栈中，每次取栈中第二个元素与栈顶的点组成的向量和栈中第二个元素与最新点组成的向量，计算他们的叉积，当叉积< 0的时候说明向右转，但是向右转的话组成的图形是凹进去的，那么我们就把栈顶元素去掉，循环这个操作直至栈顶元素和第二个元素以及新加入的点组成的向量满足向右转，那么加入新的点  
比如下图：  
栈中先加入0，$p_{0}$ ,$p_{1}$ ,$p_{2}$ ,然后从i=3开始  
<img src="https://img-blog.csdnimg.cn/a2fbc05e71df40be9ec2693e61354f10.jpeg#pic_center" alt="Pulpit rock" width="400" height="228">  
那么我们去掉 $p_{2}$ 之后变成：  
<img src="https://img-blog.csdnimg.cn/21b75778b4e548a4b0f784aa7594607a.jpeg#pic_center" alt="Pulpit rock" width="400" height="228">  

按照这种方法一直进行下去，最后的图形是：  
<img src="https://img-blog.csdnimg.cn/b1efa5ea394b465c915a45fe139861c3.jpeg#pic_center" alt="Pulpit rock" width="400" height="228">  
那么栈里的点就是我们最后要求的凸包的所有点

## andrew算法
1.将点从小到大排序：x为第一关键字，y为第二关键字（可以用pair来储存，直接排序，pair就是先按照第一关键字排序再按照第二关键字排序）
2.从左至右维护上半部分，从右至左维护下半部分  
从左到右维护：  
用一个栈来存放凸包里的点，用一个数组来记录在不在栈中，当栈里的元素个数>=2，并且新的点向左拐的话，删去栈顶元素，一直删到栈顶元素到新点向右拐或者栈中元素<2之后，把新的点加入栈中。  
从右到左维护：  
因为最后需要再判断一下起始点，所以起始点的状态改为不在栈中，当新的点使用过了就不用算了，当没有用过的时候，栈中的元素的个数>=2并且新的点向左拐，删去栈顶元素，一直删到栈顶元素到新点向右拐或者栈中元素<2之后，把新的点加入栈中。  

## 例题：围住奶牛
原题链接：https://www.acwing.com/problem/content/1403/

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=10005;
int n;
typedef pair<double,double> pdd;
pdd p[N];
int q[N];
int v[N];
double cj(double x1,double y1,double x2,double y2){
	return x1*y2-x2*y1;
}
double js(int s0,int s1,int s2){
	double x1=p[s1].first-p[s0].first;
	double y1=p[s1].second-p[s0].second;
	double x2=p[s2].first-p[s0].first;
	double y2=p[s2].second-p[s0].second;
	return cj(x1,y1,x2,y2);	
}
double dist(double x1,double y1,double x2,double y2){
	return sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
signed main(){
	cin>>n;
	for(int i=1;i<=n;i++)cin>>p[i].first>>p[i].second;
	sort(p+1,p+1+n);
	int tot=0;
	for(int i=1;i<=n;i++){
		while(tot>=2&&js(q[tot-1],q[tot],i)<=0){
			v[q[tot--]]=0;
		}
		q[++tot]=i;
		v[i]=true;
	}
	v[1]=0;
	for(int i=n;i>=1;i--){
		if(v[i])continue;
		while(tot>=2&&js(q[tot-1],q[tot],i)<=0){
			tot--;
		}
		q[++tot]=i;
				
	}
	double ans=0;
	for(int i=2;i<=tot;i++){
		ans+=dist(p[q[i]].first,p[q[i]].second,p[q[i-1]].first,p[q[i-1]].second);
	}
	printf("%.2f",ans);
	return 0;
}
```

