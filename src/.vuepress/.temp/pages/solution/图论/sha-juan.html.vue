<template><div><p>原题链接：<a href="https://ac.nowcoder.com/acm/contest/46814/I" target="_blank" rel="noopener noreferrer">https://ac.nowcoder.com/acm/contest/46814/I<ExternalLinkIcon/></a></p>
<p>题意：有编号为1~n的n个城堡，要从1号城市到n号城市，可以在任何时候选择两条道路，一条道路时间变为1，并且毁灭另一条道路。被毁灭的道路无法通行，并且无法被技能选中。<br>
求从1号城市到n号城市所需要的最短时间。</p>
<p>思路：贪心的想，当我们走到i的时候，可以将他上一条走过的路毁灭，将下一个他要走的路径长度改为1，但是从第一个点开始走的时候，因为他之前没有要走的路，那么我们这个路径的长度先保留，剩下的要走的路径的长度都设为1</p>
</div></template>


