---
title: 排序
---

## 快速排序

一个数组有n个数，用快速排序的方法对这个数组从小到大进行排序，将排序对数列按顺序输出  

n<=1e5  所有数<=1e9  

### 思路

时间复杂度：最快O（nlogn）最慢O（n*n）  

采用分治的思想，将一整个问题分成一个个子问题处理  

对于一个区间：  

1.随机选一个数x（一般取中间的数），将前面部分存小于等于x的数，后半部分存大于等于x的数  

2.然后再处理前半部分和后半部分，当递归处理一直处理到当前区间最小的时候，当前区间有序，比他长的区间也有序，整个区间也有序  

### 实现

对于步骤1的实现有两种方式：  

1.暴力：用两个数组，扫整个子区间，一个数组存小于等于x的数，另一个数组存大于等于x的数，然后将两个数组合并，但是需要的空间比较多  

2.双指针：设当前区间为[l,r]，用两个指针i和j分别从l向r，从r向l开始扫。当a[i]<=x的时候，i向r跳，当a[i]>x的时候停下；当a[j]>=x的时候，j向l扫，当a[j]< x的时候停下。如果i< j,那么这个时候交换a[i]和a[j]的值，那么a[l~i]<=x,a[j~r]>=x，然后继续扫，直到i和j相遇。  

```cpp
#include<iostream>
#include<algorithm>
using namespace std;

int n;
const int N=1e5+10;
int a[N];
void kp(int l,int r,int q[]){
    if(l>=r)return ;
    int mid=(l+r+1)/2;
    int x=q[mid];
    int i=l-1,j=r+1;
    while(i<j){
        //用双指针实现的时候，需要处理边界问题。我们将i和j分别设为l-1和r+1，先进行一步i++和j--之后再进行判断a[i]和a[j]和x的大小关系。
        do i++;while(a[i]<x);
        do j--;while(a[j]>x);
        //如果i>j，不需要进行这一步
        if(i<j)swap(a[i],a[j]);
    }
    //当循环结束的时候i>=j,a[l,l+1,...,i-1]是<=x的，a[i]是>=x的，那么我们分界就需要分i-1和i，a[j+1,j+2,...r]是>=x的，而a[j]<=x，那么我们分界就需要分j和j+1。
    //注意中点取值和最后递归取区间边界的关系，处理不当会造成段错误
    //当区间长度为奇数时中点永远取中间数，但是如果区间长度为偶数的时候，中间有两个数：（l+r）/2取的是左边的数，（l+r+1）/2取的是右边的数
    //如果取的是右边的数，当如果刚好取到区间的右端点的时候，i和j都指向右端点，但是j+1越界，所以我们需要取i-1和i。同理如果取左端点的话，i-1越界，所以我们需要取j和j+1
    kp(l,i-1,q),kp(i,r,q);
}
int main(){
    cin>>n;
    for(int i=1;i<=n;i++)cin>>a[i];
    kp(1,n,a);
    for(int i=1;i<=n;i++)cout<<a[i]<<" ";
    return 0;
}
```
## 归并排序

一个数组有n个数，用归并排序的方法对这个数组从小到大进行排序，将排序对数列按顺序输出  

n<=1e5 所有数<=1e9  

### 思路

时间复杂度：O（nlogn）  

1.先从中间分，左半部分和右半部分先排序  

2.将排好序的两部分合并成一个升序数组  

合并方法：用两个指针i和j分别从两个数组的左端点开始，比较两个指针所指的数的大小，小的放入数组，指针后移一位。当其中一个数组都放入了之后，再把剩下的一个数组没有放入的数依次放入  


```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int n;
const int N=1e5+10;
int a[N],b[N],c[N];
void gb(int l,int r,int q[]){
    if(l>=r)return ;
    int mid=(l+r+1)/2;
    gb(l,mid-1,q),gb(mid,r,q);
    int i=l,j=mid;
    int cnt=0;
    while(i<=mid-1&&j<=r){
        if(q[i]<=q[j])c[++cnt]=q[i++];
        else c[++cnt]=q[j++];
    }
    while(i<=mid-1) c[++cnt]=q[i++];
    while(j<=r)c[++cnt]=q[j++];
    for(int i=1;i<=cnt;i++){
        q[l+i-1]=c[i];
    }
}
int main(){
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
    }
    gb(1,n,a);
    for(int i=1;i<=n;i++)cout<<a[i]<<" ";
    return 0;
}
```

