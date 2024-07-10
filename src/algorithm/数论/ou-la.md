---
title: 欧拉函数
---

定义：  
一个数n的欧拉函数就是1~n中与n互质的数的个数  

定理：  
n=$\alpha 1^{\beta 1} *\alpha 2^{\beta 2}...*\alpha k^{\beta k}$  

这个数的欧拉函数的值是：  
$n*(1-\frac{1}{\alpha 1} )*(1-\frac{1}{\alpha 2} )*...*(1-\frac{1}{\alpha k} )$  

证明：  
首先将 $\alpha 1,\alpha 2...\alpha k$ 的倍数都去掉，即：  
$n-\frac{n}{\alpha 1}-\frac{n}{\alpha 2}...-\frac{n}{\alpha k}$  
但是有一些数即是 $\alpha 1$ 的倍数也是  $\alpha 2$ 的倍数，那么我们就应该将多加的减去，即：  
$-\frac{n}{\alpha 1*\alpha 2}-\frac{n}{\alpha 1*\alpha 3}...$  
但是对于三个质因数的倍数来说，经过上面两个操作相当于没有加也没有减，那么我们再减去三个质因子的倍数，即：  
$-\frac{n}{\alpha 1*\alpha 2*\alpha 3}-\frac{n}{\alpha 1*\alpha 2*\alpha 4}...$  

这样一直类推下去可以发现，单数项都是减，双数项都是加，并且上面的柿子刚好是欧拉函数的展开式  
















