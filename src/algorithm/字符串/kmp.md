---
title: kmp
---

解决问题：有两个字符串a串和b串，a串中有许多b串作为字串，找出a串中所有b串的位置。  

暴力算法：两层循环，第一层循环从a的每个字符开始看，第二层循环看和b的每个字符能否匹配上  

优化算法：kmp  时间复杂度：O(n)  

先看一般情况，当如下图所示，在i的位置a串和b串匹配，但是在i+1的位置a与b串就不匹配  

![a95caca575a1396e47492572aaa374e1](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/a95caca575a1396e47492572aaa374e1.jpg)  


假设我们b往后移动了几位之后，在i位置a串和b串重新匹配  

![b64fcba001a43ad04d1836af07818289](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/b64fcba001a43ad04d1836af07818289.jpg)  

那么如下图所示，由于段1是段3往后移动所得，所以段1=段3.由于移动后的b串与a串重新匹配，那么段1=段2.由于移动前的a串与b串匹配，那么段2=段4.综上得出段3=段4.实际上是b移动前在i位置前的串的前缀串和后缀串相等  

![9cf392bba2cb043f1ed202aa81e86af2](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/9cf392bba2cb043f1ed202aa81e86af2.jpg)  

可以发现，每次向后移动之后重新匹配的位数是和b串有关。那么当b串的前j位与a串匹配，但j+1位不匹配，要想使得向后移动最少的位置使得重新匹配，那么就找b串的前j位的前缀和后缀相等时的最大长度，然后将b移到最大前缀的地方重新看看后面是否匹配  

那么我们就需要预处理以b串的每个字符为结尾的串，前缀等于后缀的最大长度  

用ne[i]表示b串中以第i个字符为结尾的串，前缀等于后缀的最大长度，假设为x，那么如下图  

![6e31439b2d80e7cf8379ff25ece47de3](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/6e31439b2d80e7cf8379ff25ece47de3.jpg)  

匹配过程：  

遍历a，b的前j位已经和a匹配，每次用a的第i位和b的第j+1位比较

![5e4885b3f265e2adb7f4555534874d60](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/5e4885b3f265e2adb7f4555534874d60.jpg)  

如果j没有退回开头并且a[i]!=b[j+1]，那么我们让b串向后移动，即j=ne[j],然后再判断a[i]和b[j+1]是否匹配，如果匹配，那么j++  


```cpp
    for(int i=1,j=0;i<=n;i++){
        while(j&&a[i]!=b[j+1])j=ne[j];
        if(a[i]==b[j+1])j++;
        if(j==m){
            //匹配成功
        }
    }

```

预处理ne数组：  

实际就是b串匹配b串。前1位的前缀等于后缀最大长度为0，那么i从2开始，对每个i，用b的第j+1位比较，如果不相等且没有退回起点，那么就将b向后移动最大步数使与b的前i-1位匹配，移动完后如果相等j++。每次循环结束后将j赋值给ne[i]  

```cpp
    for(int i=2,j=0;i<=m;i++){
        while(j&&b[i]!=b[j+1])j=ne[j];
        if(b[i]==b[j+1])j++;
        ne[i]=j;
    }
```

  



## 求一个字符串循环节的最小长度

ne[n]表示去除第一个循环节的后缀长度，求第一个循环节那么就是n-ne[n]  

## 求一个字符串前缀等于后缀的最小长度（最小公共前后缀）

因为要用很多次ne数组，可能会超时，所以用记忆化搜索，如果已经搜出来以j结尾的最小  
公共前后缀的话直接等于j，否则就等于ne[j]

```cpp
每次令j=i，当ne[j]！=0时，j=ne[j]：
	for(int i=1;i<=n;i++){
		int j=i;
		while(ne[j]) {
			if(f[j]) j=f[j];
			else j=ne[j];
		}
		f[i]=j;
	}

```

