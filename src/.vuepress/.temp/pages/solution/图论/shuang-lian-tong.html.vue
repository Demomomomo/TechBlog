<template><div><h2 id="b-let-me-sleep" tabindex="-1"><a class="header-anchor" href="#b-let-me-sleep" aria-hidden="true">#</a> B. Let me sleep</h2>
<p>原题链接：<br>
<a href="https://codeforces.com/gym/102163/problem/B" target="_blank" rel="noopener noreferrer">https://codeforces.com/gym/102163/problem/B<ExternalLinkIcon/></a></p>
<p>题意：<br>
有n个点，m条边，可以在任意两个点之间添加一条边，那么最小的割边数是多少</p>
<p>割边：在一个联通块中，去掉这条边使得这个联通块变成了不联通的两个部分，那么这条边就叫做割边</p>
<p>思路：<br>
那么我们先进行缩点，那么缩点后形成的森林的每条边都是割边，如果想让割边尽可能小的话，添加在缩点之后的每个点里面的边肯定不能改变割边的数量，那么我们就考虑加在缩点之后的每个点之间</p>
<p>如下图：<br>
<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/B04603B8E99A36D4D6B805B2FE65C291.png" alt="Pulpit rock" width="354" height="208"></p>
<p>如果加1这条边的话，会使得1-&gt;2之间的边不是割边，最后会有2-&gt;3这一个割边；如果加2这条边的话，会使得1-&gt;3之间的边不是割边，最后会有0个割边</p>
<p>那么想让割边最小实际上就是找到最长的直径，将边加在直径的两端端点处即可</p>
</div></template>


