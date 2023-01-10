<template><div><h2 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp" aria-hidden="true">#</a> kmp</h2>
<p>时间复杂度：O(n)
基本操作：看b串是不是a串的子串
a串：主串，b串：模式串
核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始
p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度
思路：a[i-j+1<sub>i]和b[1</sub>j]已经匹配，然后比较a[i+1]和b[j+1]，如果j！=0并且a[i+1]!=b[j+1]的话，我们把b串向后拉至第一个与a串以i结尾的字符相等的位置，即j=p[j],因为a[i-j+1<sub>i]和b[1</sub>j]已经匹配，那么实质上p[j]就是以j结尾的前缀等于后缀的最大长度，也就是求p的方法。如果相等的话j++，然后判断：如果j==m的话，就说明模式串在主串中存在。</p>
</div></template>


