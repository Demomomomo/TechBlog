<template><div><p>原题链接：<a href="https://vjudge.net/contest/541856#problem/K" target="_blank" rel="noopener noreferrer">https://vjudge.net/contest/541856#problem/K<ExternalLinkIcon/></a></p>
<p>题意：有两个数组a，b，每个数组都有n个数，我们需要构造一个c数组，使得c[k]=max(a[i]b[j])(i&amp;j&gt;=k),求这个c数组的和模上998244353的值。</p>
<p>思路：<br>
当k=1001时，我们需要i和j都是1XX1的形式，才能让c[k]取到a[i]*b[j]。<br>
因为c[k]要取到最大值，那么我们就需要找a[i]和b[j]满足形式是1XX1的最大值和最小值，最大值乘最大值和最小值乘最小值比谁更大。<br>
因为i&amp;j&gt;=k的时候c[k]包含a[i]*b[j]这个值，那么下标大的最大值被包含在下标小的最大值的范围内，比如k=5的最大值被包含在k=3的最大值内，那么我们就可以按下标开始从大到小来找每一位的最大值。<br>
如何更新：<br>
假设我们遍历到a数组的下标i的二进制表示是1001，那么我们就可以在他的二进制表示为0的位置上改一个1，那么他可以取的值是{1101,1011}。<br>
至于为什么不用取1111的情况，因为当遍历i=1101的时候就已经遍历过1111取最大值了，那么我们就不用再遍历了。</p>
</div></template>


