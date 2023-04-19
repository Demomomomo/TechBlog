<template><div><h2 id="回文串问题" tabindex="-1"><a class="header-anchor" href="#回文串问题" aria-hidden="true">#</a> 回文串问题</h2>
<p><img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230419200939.png" alt="20230419200939" loading="lazy"></p>
<p>思路：<br>
dp[l][r]表示将[l,r]这段的字符变成回文串所需要添加的最小字符数</p>
<p>初始化dp[i][i]=0</p>
<p>那么对于[l,r]这一段：<br>
如果s[l]==s[r]：如果长度大于2，那么dp[l][r]=dp[l+1][r-1],如果长度等于2，那么直接赋值为0<br>
如果s[l]!=s[r]，那么可以让他的左边除了s[r]的部分全都变成回文串，然后再加一个和s[r]相同的字符，使得s[l]<sub>s[r]变成回文串；也可以将右边除了s[l]的部分都变成回文串之后，再加一个和s[l]相同的字符，使得s[l]</sub>s[r]都变成回文串</p>
<p>转移方程：<br>
s[l]==s[r]:<br>
if(r-l+1&gt;=3) dp[l][r]=dp[l+1][r-1]<br>
else dp[l][r]=0</p>
<p>s[l]!=s[r]:<br>
dp[l][r]=min(dp[l+1][r]+1,dp[l][r-1]+1)</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


