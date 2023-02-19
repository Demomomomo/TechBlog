<template><div><h2 id="手写堆" tabindex="-1"><a class="header-anchor" href="#手写堆" aria-hidden="true">#</a> 手写堆</h2>
<p>以小根堆为例：<br>
操作：<br>
1.插入一个数<br>
2.求集合当中的最小值<br>
3.删除最小值<br>
4.删除任意一个元素<br>
5.修改任意一个元素</p>
<p>结构是一个二叉树，每个点都小于等于左右儿子，那么根节点就是整个树的最小值。
堆的存储：<br>
用一个一维数组来存，一号点是根节点，节点x的左儿子是x&lt;&lt;1,右儿子是x&lt;&lt;1|1.<br>
基本操作：<br>
down(x)：假设我们修改一个数，将他改为一个比他大的数x，由于左右子树都得比父节点大，那么我们需要往下调整，将他和他的左右儿子中最小的数交换。如果交换之后x还是比他的左右儿子大，那么再将他与左右儿子中最小的交换。<br>
例如有一个结构为下图的堆：
up（x）：往上调整</p>
<h2 id="treap" tabindex="-1"><a class="header-anchor" href="#treap" aria-hidden="true">#</a> treap</h2>
</div></template>


