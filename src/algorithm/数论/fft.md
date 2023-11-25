---
title: fft
---

具体原理参考：https://tech.chivas-regal.top/blogs/algorithm/math/fft.html#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86  

解决两个多项式相乘的问题：  

假设一个多项式为：$A(x)=a_{0}x^{0}+a_{1}x^{1}+...+a_{n}x^{n}$  

另一个多项式为：$B(x)=b_{0}x^{0}+b_{1}x^{1}+...+b_{n}x^{n}$  

可以求出他们两个相乘之后的多项式C(x)各项的系数  

由于$a_{i}x^{i}*b_{j}x^{j}=a_{i}b_{j}x^{i+j}$,所以可以求所有当i+j=k时，ai* bj的和，即为 $x^{k}$ 的系数  



```cpp
const int N = 3000010;
const double PI = acos(-1.0);

int n, m;
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
        cin >> n >> m;
        for (int i = 0; i <= n; i ++) cin >> a[i].x; // A的系数
        for (int i = 0; i <= m; i ++) cin >> b[i].x; // B的系数
        while ((1 << bit) < n + m + 1) bit ++; // 次数最多到n+m+1，所以利用n+m+1记录二进制位数
        tot = 1 << bit; // 在二进制位数下计算刚好达不到的那个位数的数
        for (int i = 0; i < tot; i ++) rev[i] = (rev[i >> 1] >> 1) | ((i & 1) << (bit - 1)); // 每个rev[i]初始化为i的二进制逆转
        FFT(a, 1); FFT(b, 1); // 完成a和b的点表示
        for (int i = 0; i < tot; i ++) a[i] = a[i] * b[i]; // 点表示法内完成两方程合并
        FFT(a, -1); // 逆向做一遍得到系数表示
        for (int i = 0; i <= n + m; i ++) cout << (int)(a[i].x / tot + 0.5) << " "; //最后输出的这个数就是x的幂次为i时的系数
        return 0;
}

```