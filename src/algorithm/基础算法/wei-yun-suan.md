---
title: 位运算
---

对于每个数的二进制数来说，从右向左从0开始编号，比如n=15=1111，从右向左的位数就是0，1，2，3位   

位运算：n>>k，n为二进制，将第k位移到最后一位，比如n=15，n>>1=111  

基本操作：看数字n的二进制形式的第k位数字是几  

步骤：1.先将第k位移到最后一位，用位移运算n>>k 2.看最后一位是几，用x&1  

lowbit操作：返回x的最右一位1（十进制）  

比如：n的二进制形式是10100，那么lobit(n)=8，他的二进制形式是100，即返回n的二进制形式的最右一位1  

```cpp
int lowbit(x){
    return x&-x;
}
```

例题：给出n个数，求每个数二进制形式中1的个数。  

```cpp
#include<iostream>
#include<algorithm>
#include<map>
#include<math.h>
using namespace std;
const int N=1e5+10;
int a[N];
int n,m,x;
int lowbit(int x){
    return x&-x;
}
int main(){
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>x;
        int cnt=0;
        while(x){
            cnt++;
            x-=lowbit(x);
        }
        cout<<cnt<<" ";
    }
    return 0;
}
```
