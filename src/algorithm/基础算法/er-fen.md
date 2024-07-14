---
title: 二分
---

时间复杂度：O（logn）  

对于一整个数据，有前一部分的数据满足某种性质，后一部分不满足某种性质，用二分可以找出这个分界线，二分经常处理满足某种条件的最大最小值问题  

有整数二分和小数二分两种  

## 整数二分：  

假设给出一段区间，前半部分满足某种性质，后半部分不满足某种性质，那么分界点有两个，即满足性质的最后一个res1和不满足性质的第一个res2，如图1：  

如果我们想找res1，那么我们可以先找中间值mid=（l+r+1）/2，判断他是否满足性质，如果满足性质，那么答案就在[mid,r]之间，那么就将l设为mid之后重复找，如图：  


那么l重设之后，再找mid，如果mid不满足性质，那么答案就在[l,mid-1]之间，那么将r设为mid-1继续进行查找，如图：  



一直到l>=r的时候停止查找，那么答案就是a[l]  

伪代码如下：  

cheek函数是用来检查是否符合要找的答案的性质  

```cpp
while(l<r){
    int mid=(l+r+1)/2;
    if(cheek(mid)) l=mid;
    else r=mid-1;
}
```


如果我们想找res2，那么我们可以先找中间值mid=（l+r）/2，判断他是否满足性质，如果不满足性质，那么说明答案在[l,mid]之间，那么将r设为mid之后继续上述步骤，如图：  


重设之后继续找mid，如果mid满足性质，那么说明答案在[mid+1,r]之间，那么将l设为mid+1，继续上述操作，如图：  

一直到l>=r的时候停止查找，那么答案就是a[r]  

伪代码如下：  

cheek函数是用来检查是否符合要找的答案的性质  

```cpp

while(l<r){
    int mid=(l+r)/2;
    if(cheek(mid))r=mid;
    else l=mid+1;
}
```
注意两个部分中间值的取值，取值不当会死循环或段错误  

例题：  

给出一个含有n个数的升序数组，q个查询，每次查询给出一个数x，查询x的起始位置和终止位置，如果不存在输出“-1 -1”  

思路：查询x的起始位置，x的前面的数满足a[i]<=x，x的后面满足a[i]>=x，起始位置就是a[i]>=x的第一个数，终止位置是a[i]<=x的最后一个位置，那么我们就可以用二分解决。如果找到的起始位置和终止位置所值的数不是x，那么说明x不在数组里，输出“-1 -1”  

```cpp
#include<iostream>
#include<algorithm>

using namespace std;

const int N=1e5+10;
int q,x;
int a[N];
int n;
int main(){
    cin>>n>>q;
    for(int i=1;i<=n;i++)cin>>a[i];
    while(q--){
        // cout<<"q=="<<q<<endl;
        cin>>x;
        int l=1,r=n,res1,res2;
        while(l<r){
            int mid=(l+r+1)/2;
            if(a[mid]<=x)l=mid;
            else r=mid-1;
        }
        res2=l;
        // cout<<"res2=="<<res2<<endl;
        l=1,r=n;
        while(l<r){
            int mid=(l+r)/2;
            if(a[mid]>=x)r=mid;
            else l=mid+1;
        }
        res1=l;
        // cout<<"res1=="<<res1<<endl;
        if(a[res1]!=x){
            res1=0,res2=0;
        }
        cout<<res1-1<<" "<<res2-1<<endl;
    }
    return 0;
}

```

## 小数二分：  

小数二分的时候，因为没有整数那种l==r的情况，所以我们认为l和r距离很近的时候（如r-l<1e-7），可以大致认为他们是一个同一个小数，将l或r作为结果，循环结束  

例题：
给定一个浮点数n，求它的三次方根,输出数为6位小数  

-1000<=n<=1000  

```cpp
#include<iostream>
#include<algorithm>
using namespace std;


int main(){
    double n;
    cin>>n;
    double l=-10000,r=10000;
    while(r-l>1e-7){
        double mid=(l+r)/2;
        // cout<<"l=="<<l<<" r=="<<r<<endl;
        // cout<<"mid=="<<mid<<endl;
        if(n-(mid*mid*mid)>0)l=mid;
        else r=mid;
        // cout<<"-=="<<n-(mid*mid*mid)<<endl;
    }
    printf("%.6f",l);
    return 0;
}
```


