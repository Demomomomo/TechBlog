---
title: 双指针
---

作用：优化时间复杂度，当一个数组找其中满足某些条件的区间，需要两层循环的时候时间复杂度为O（n*n），我们可以利用双指针来扫描，对于每个指针都扫了一遍，那么时间复杂度就变为O（n）  

模板：  
```cpp
for(int i=1,j=1;i<=n;i++){
    while(j<i&&cheek(i,j))j++;//cheek是判断函数
}
```
例题：长度为n的数列，找出最长不包含重复数的连续区间。  

思路：用双指针i和j，表示以s[i]为结尾，s[j]为开头的最长不包含重复数的连续区间，那么可以证明，i和j都是单调递增，那么枚举所有i，看j满足i～j之间不含重复数的最左位置在哪，对所有的i和j所对应的区间取最大值。判断i～j之间是否含有重复数，可以用map记录在区间内每个数的个数来实现  

```cpp
#include<iostream>
#include<algorithm>
#include<map>
using namespace std;
int n;
const int N=1e5+10;
int a[N];
map<int,int> mp;
int main(){
    cin>>n;
    int mx=0;
    for(int i=1;i<=n;i++)cin>>a[i];
    for(int i=1,j=1;i<=n;i++){
        mp[a[i]]++;
        while(j<i&&mp[a[i]]>1){
            mp[a[j]]--;
            j++;
        }
        cout<<"i=="<<i<<" j=="<<j<<endl;
        mx=max(mx,i-j+1);
    }
    cout<<mx;
    return 0;
}
```