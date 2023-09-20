---
title: 状态压缩dp
---

## 定义

状态压缩dp是将比较复杂的状态映射成数字后进行dp

例如：布尔数组用二进制表示(st[i]表示第i位做了还是没做，st数组就可以变成一个二进制数)  

更复杂的状态可以用map等结构来重标号成数字后进行转移  

## 例题

### 蒙德里安的梦想

题目链接：https://www.acwing.com/problem/content/293/  

题意：  

有一个N*M的矩形，用1*2的方格将他填满，请问有多少种方法  

思路：  

如果全部横向的1*2的方格都将当前的矩形放完了，那么剩下的格子都只能放纵向的，所以只需要求只放横向的矩形有多少种方法数就可以了。  

横向放从左到右考虑列横着放小方格，那么我们考虑到当前列的时候，就需要知道哪些行已经被前一列放的格子占了，如果占了就不能再放横向的小方格了。那么用n位二进制数来记录每当前列每行是否被占过。  

用f[i][j]来表示到第i列时，第i列的行状态为j的方案数  

那么需要得到第i列的状态j，那么我们就需要枚举第i-1列的状态k。把所有的满足和j不冲突的状态k的方案加起来，就是状态为j的方案数。k能转移到j的条件是，i-1列被前一列占的行不能和i列被i-1列占的行一样,如果占的一样就会有下面的情况，不符合题意：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230920204830.png" alt="Pulpit rock" width="304" height="228">  

那么就要求k和j的每位不能同时为1，用位运算k&j==0来表示k状态和j状态没有同一行都为1的情况  

并且列出的第i-1列的状态k也需要满足相邻的空出的行是偶数的情况，因为我们已经把第i-1列的横向的方格给放完了，剩下的空位都需要用纵向的方格来放，那么我们就必须满足相邻的空出的行是2的倍数。那么i-1列的空格就可以用k|j来算出：因为k的x位为1时i-1列的x行被i-1列和i-2列放的小方格挡住，j的第y位为1时i-1列的y行被i-1列和i列放的小方格挡住，i-1的这些位上都有格子。  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230920213031.png" alt="Pulpit rock" width="504" height="328">  

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int N=12,M=1<<N;
int f[N][M];
int n,m;
bool st[M];
signed main(){
	
	while(cin>>n>>m,n!=0&&m!=0){
		for(int i=0;i<(1<<n);i++){
			st[i]=true;
			int con=0;
			for(int j=0;j<n;j++){
				if((i>>j)&1){
					if(con%2)st[i]=false;
					con=0;
				}else con++;	
			}
			if(con%2)st[i]=false;
		}
		for(int i=0;i<=m;i++){
			for(int j=0;j<(1<<n);j++){
				f[i][j]=0;
			}
		}
		f[0][0]=1;
		for(int i=1;i<=m;i++){
			for(int j=0;j<(1<<n);j++){
				for(int k=0;k<(1<<n);k++){
					if((j&k)==0&&st[j|k])f[i][j]+=f[i-1][k];
				}
			}
		}
		cout<<f[m][0]<<endl;
	
}
	return 0;
}
```







