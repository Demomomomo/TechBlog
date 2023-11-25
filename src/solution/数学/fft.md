---
title: fft
---

解决多项式乘法，由于$a_{i}x^{i}*b_{j}x^{j}=a_{i}b_{j}x^{i+j}$,所以可以求所有当i+j=k时，ai* bj的和，即为$x^{k}$的系数  

## K - 区间和 

原题链接：https://vjudge.net/contest/532518#problem/K  

题意：   
有一个长度为n的数组p，只包含0和正整数，保证所有pi的和不超过1e6  
给定一个区间[l,r]的权值为区间和，依据这个权值对所有区间和进行从小到大排序  
给出m个询问，每次询问给出一个k，输出排第k的区间的权值  

思路：  

输出区间和排第k的权值，那么我们用b[i]记录权值为i的区间个数  
对b做一个二分查找就可以了  
那么怎么能找出区间和为i的区间的个数呢？  
s表示原数组的前缀和  
[l,r]的区间和k=s[r]-s[l-1]  
设s[r]=i,s[l-1]=j  
那么区间和为k的区间个数就是：所有当i-j=k情况下的i，j，s[ii]=i的s[ii]个数 * s[jj]=j的s[jj]个数的和  
那么我们就需要预处理一下a[i]数组，表示s[ii]值为i的s[ii]个数  
那么要求所有的当i-j=k，ai * aj相加的和，可以构造两个多项式：  
$A[n]=a_{0}x^{0}+a_{1}x^{1}+...+a_{n}x^{n}$  
$B[n]=a_{0}x^{0}+a_{1}x^{-1}+...+a_{-n}x^{-n}$  
由于A中的项为$a_{i}x^{i}$,B中的项为$a_{j}x^{-j}$,那么他们相乘之后就是$a_{i}a_{j}x^{i-j}$,那么在算出的项中$c_{i}x^{i}$中x前的系数就是当i-j=i时，所有的a[i] * a[j]的和  
并且，当k=0的时候会重复计算，所以我们需要单独算一下k=0时b[k]的值  
那么x的幂次>=1的时候前面的系数就是合法的k  
那么由于多项式的模板x的幂次不能为负数，那么我们可以将B中的每个幂次都加上n，本来我们要找的系数是幂次>=1时x前的系数，加上n之后变成了幂次>=1+n时x前的系数  
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=3e6,M=1e6+5;
const double PI = acos(-1.0);
typedef long long ll;
int p[M],A[M],ss[M];
ll s[M],c[M];
int n,m,q;
struct Complex { // 复数结构体
        double x, y;
        Complex friend operator + (Complex a, Complex b) { return {a.x + b.x, a.y + b.y}; }
        Complex friend operator - (Complex a, Complex b) { return {a.x - b.x, a.y - b.y}; }
        Complex friend operator * (Complex a, Complex b) { return {a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x}; }
} a[N], b[N]; // 两个多项式的点表示
int rev[N];   // 分治时候的二进制表示对应的结果二进制表示，即反过来了
int bit, tot; // 二进制上的位数，总个数

inline void FFT (Complex a[], int inv) {
        for (int i = 0; i < tot; i ++) if (i < rev[i]) swap(a[i], a[rev[i]]); // 变成正确的分治结果位置（只能换一半，防止换回来
        for (int mid = 1; mid < tot; mid <<= 1) { // 枚举分块的块长度
                Complex w1 = {cos(PI / mid), inv * sin(PI / mid)}; // 这也是把整个单位圆平均切成mid个后出现的 \omega^1
                for (int i = 0; i < tot; i += mid * 2) { // 两个两个块向后跳，枚举每一段
                        Complex wk = {1, 0}; // w(n, 0)单位一开始
                        for (int j = 0; j < mid; j ++, wk = wk * w1) { // 把区间里面数枚举一遍，且wk要往上跑一格
                                Complex x = a[i + j], y = wk * a[i + j + mid]; // x把左边提出，y把右边提出
                                a[i + j] = x + y, a[i + j + mid] = x - y;      // 左边和右边重构
                        }
                }
        }
}
int main() {
	ios::sync_with_stdio(false);
	cin.tie(),cout.tie();
        cin>>n;
        for(int i=1;i<=n;i++)cin>>p[i];
        for(int i=1;i<=n;i++)ss[i]=ss[i-1]+p[i];
        int mx=0;
        for(int i=0;i<=n;i++)A[ss[i]]++,mx=max(mx,ss[i]);
        for (int i = 0; i <= mx; i ++)  a[i].x=A[i]; // 把输入的系数塞入实部
        for (int i = 0; i <= mx; i ++) 	b[mx-i].x=A[i]; // 把输入的系数塞入虚部
        while ((1 << bit) < mx + mx + 1) bit ++; // 次数最多到n+m+1，所以利用n+m+1记录二进制位数
        tot = 1 << bit; // 在二进制位数下计算刚好达不到的那个位数的数
        for (int i = 0; i < tot; i ++) rev[i] = (rev[i >> 1] >> 1) | ((i & 1) << (bit - 1)); // 每个rev[i]初始化为i的二进制逆转
        FFT(a, 1); FFT(b, 1); // 完成a和b的点表示
        for (int i = 0; i < tot; i ++) a[i] = a[i] * b[i]; // 点表示法内完成两方程合并
        FFT(a, -1); // 逆向做一遍得到系数表示
        for (int i = 1+mx; i <=mx+mx; i ++) c[i-mx]=(ll)(a[i].x / tot + 0.5) ; // 防止精度丢失，要向上0.5再强转扔精度
		long long op=0;
		for(int i=1;i<=n;i++){
			if(p[i]==0){
				long long con=0;
				int j=i;
				while(j<=n&&p[j]==0){
					con++;
					j++;
				}
				op+=con*(1+con)/2;
				i=j-1;
			}
		}
		c[0]=op;
//		for(int i=0;i<=mx;i++)cout<<c[i]<<" ";
//		cout<<endl;		
		s[0]=c[0];
		for(int i=1;i<=mx;i++)s[i]=s[i-1]+c[i];
		cin>>q;
		while(q--){
			ll k;
			cin>>k;
			int id=lower_bound(s,s+1+mx,k)-s;
			cout<<id<<endl;
		}
        return 0;
}
```

