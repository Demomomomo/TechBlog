<template><div><p>一般求最小距离<br>
数组d记录第一次到达这个点的最短距离。<br>
初始状态加入队列，将初始状态的距离设为0<br>
当队列不空的时候一直循环：取出队头，拓展队头，如果拓展的点没有出现过，那么我们就将他的距离用队头的距离更新之后加入队列。</p>
<h2 id="flood-fill模型" tabindex="-1"><a class="header-anchor" href="#flood-fill模型" aria-hidden="true">#</a> flood fill模型</h2>
<p>可以在线性时间内找到某个点所在的连通块<br>
作用：找联通块（几片池塘，几块房间）</p>
</div></template>


