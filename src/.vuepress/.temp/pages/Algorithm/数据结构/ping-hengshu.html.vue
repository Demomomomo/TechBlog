<template><div><h2 id="bst-二叉搜索树" tabindex="-1"><a class="header-anchor" href="#bst-二叉搜索树" aria-hidden="true">#</a> BST-二叉搜索树</h2>
<p>每个结点都有一个权值，每一个结点都满足：他的左子树中任何一个点的权值严格小于当前结点的权值。他的右子树中任何一个点的权值严格大于当前结点的权值。<br>
BST中一般没有重复的数，如果有的话在这个点上加一个计数器来记录这个点出现的次数。<br>
BST的中序遍历一定是从大到小。</p>
<h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3>
<p>从根结点开始递归，如果比根结点小的话就递归左子树。如果我们插入的这个数是存在的值，那么当我们找到结点权值与他相同的编号之后，这个编号的cnt++；如果插入的这个数不存在，那么我们就把他加上。</p>
<h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3>
<p>删除叶节点</p>
<h3 id="找最大最小值" tabindex="-1"><a class="header-anchor" href="#找最大最小值" aria-hidden="true">#</a> 找最大最小值</h3>
<p>一个以x为根的子树的最大值就是从这个结点开始一直往右走，走到不能走（没有右儿子）为止。找最小值就是一直往左走。</p>
<h3 id="找前驱-后继" tabindex="-1"><a class="header-anchor" href="#找前驱-后继" aria-hidden="true">#</a> 找前驱/后继</h3>
<p>前驱：在这个BST中序遍历之后的新序列中，一个结点的前一个数就叫做这个点的前驱。<br>
后继：在这个BST中序遍历之后的新序列中，一个结点的后一个数就叫做这个点的后继。<br>
找前驱：如果存在左子树，那么左子树中的最大值就是前驱；如果不存在左子树，那就看他和他的父结点的关系，如果他是他父节点的左子树，说明他的父节点大于他，继续找他父节点的父节点，直到找到一个当前点的父节点使得当前点是其父节点的右儿子，说明这个父节点就是我们要求的点的前驱。<br>
例如我们想要找下图的BST中的3和7的前驱：<br>
<img src="https://img-blog.csdnimg.cn/1c7625ce186e4c5f920f56a162ed6ccc.jpeg#pic_center" alt="Pulpit rock" width="204" height="228"><br>
3有左子树，那么我们就找他的左子树中的最大值，那么我们就找他的左子树中最左边的数，即2.<br>
7没有左子树，我们就找他的父节点8，7是8的左子树；继续找8的父节点9，8是9的左子树；继续找9的父节点5,9是5的右子树，那么我们就找到了7的前驱实际是5.</p>
<p>找后继：如果存在右子树，那么右子树中的最小值就是后继。</p>
<p>以上的所有操作在set里都是有对应的操作：<br>
1.insert：插入<br>
2.erase：删除<br>
3.找前驱/后继：--，++<br>
4.找最大/最小值：begin(),end()<br>
如果我们发现一个题中只要求上述几个操作的话，我们不需要手写平衡树，直接用set做就可以了。</p>
<h2 id="平衡树的结构" tabindex="-1"><a class="header-anchor" href="#平衡树的结构" aria-hidden="true">#</a> 平衡树的结构</h2>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">name</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> l<span class="token punctuation">,</span>r<span class="token punctuation">;</span><span class="token comment">//左右子树</span>
    <span class="token keyword">int</span> key<span class="token punctuation">,</span>val<span class="token punctuation">;</span><span class="token comment">//BST里排序用到的关键值和heap里的优先级，val是随机的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 


### 求某一个值的排名


### 求排名是k的数是哪个


### 求比某个数小的最大值
区别于前驱：这个数可能在树中不存在  



### 求比某个数大的最小值
区别于后继：这个数可能在树中不存在   -->
</div></template>


