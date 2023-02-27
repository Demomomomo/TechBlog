export const pagesRoutes = [
  ["v-8daa1a0e","/",{"t":"Demo Blog","i":"home","y":"h","r":{"minutes":0.6,"words":181}},["/index.html","/README.md"]],
  ["v-70bc2959","/algorithm/",{"t":"指南","y":"a","e":"这里是存放算法的位置","r":{"minutes":0.04,"words":13}},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-799e9206","/solution/",{"t":"指南","y":"a","e":"这里是存放题解的位置 Markdown 教学 ```` 新算法的题目 题面 思路 ```cpp // 代码 ``` 好用的 markdown 语法 66 我是行内代码块 66 ```cpp 我是行间代码块 ``` 加粗 斜体 上面是分割线 好用的 latex 公式 $a_i,a^i,a\\to b$ 网站参考 latexlive $\\alpha$ 两侧有...","r":{"minutes":0.42,"words":125}},["/solution/index.html","/solution/README.md"]],
  ["v-528eea3d","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/beibao.html",{"t":"背包模型","y":"a","e":"01背包 容量为v的背包里，有n件物品，每件物品的体积为vi，价值为wi，求不超过背包体积的情况下能获得的物品的最大价值 有序变无序：从1~i依次遍历，那么处理到i的是吧前i-1个已经被处理过了，可以直接拿着算 f[i][j]表示在前i个物品中选，总体积不超过j的方案的能获得的最大价值 对于每个物品i，可以选和不选 不选：在前i-1个物品中选，体积不超...","r":{"minutes":3.28,"words":985}},["/algorithm/动态规划/beibao.html","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/beibao","/algorithm/动态规划/beibao.md","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/beibao.md"]],
  ["v-c64fcaca","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/shu-zi-san-jiao-xing.html",{"t":"数字三角形模型","y":"a","e":"求从左上角到右下角走一次的最大或最小值 有一个n*m的网格，每个网格都有一个数，给你规定可以走的方向和走的次数，求从左上角到右下角的最大或者最小值。 常规的一般是可以向下或者向右走，走一次之后求从左上角到右下角的最大值或者最小值，那么状态转移的方程就是： f[i][j]=max(f[i][j],f[i-1][j]); f[i][j]=max(f[i][...","r":{"minutes":3.91,"words":1172}},["/algorithm/动态规划/shu-zi-san-jiao-xing.html","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/shu-zi-san-jiao-xing","/algorithm/动态规划/shu-zi-san-jiao-xing.md","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/shu-zi-san-jiao-xing.md"]],
  ["v-1dd6d9a3","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.html",{"t":"ac自动机","y":"a","e":"作用 判断n个串中有几个串是主串的子串 实质：tire+kmp 思路： 先建立tire树，将n个串的tire树建出来 每个点都有一个next数组，表示以这个点为结尾的路径中，前缀等于后缀的最长前缀的尾端点（前缀可以不在这个路径上，前缀是在整个trie树上找） kmp是每次比较i+1和j+1是不是一样，那么转换到tire树里就是比较第i+1层和第j+1层...","r":{"minutes":5.48,"words":1643}},["/algorithm/字符串/ac.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac","/algorithm/字符串/ac.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.md"]],
  ["v-2a37981f","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html",{"t":"kmp","y":"a","e":"概念 时间复杂度：O(n) 基本操作：看b串是不是a串的子串 a串：主串，b串：模式串 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路：$a[i-j+1\\to i]$ 和 $b[1\\to j]$ 已经匹配，然后比较a[i+1]和b[j+1] 如...","r":{"minutes":2.13,"words":639}},["/algorithm/字符串/kmp.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp","/algorithm/字符串/kmp.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.md"]],
  ["v-057f5b88","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar.html",{"t":"manachar算法","y":"a","e":"概念 求一个字符串的最长回文串的长度 时间复杂度O（n） Manachar算法只能处理对称轴是某个字母的回文串（长度为奇数），但是回文串还有一种是对称轴在两个字母中间（长度为偶数），那么我们就得把他转换为对称轴是某个字母的回文串 （转换为长度为奇数的回文串） 转换方式：在所有字符之间和首尾加上没有出现过的字符（如#），然后再在新的字符首尾加上没有出现过...","r":{"minutes":3.65,"words":1096}},["/algorithm/字符串/manachar.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar","/algorithm/字符串/manachar.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar.md"]],
  ["v-7aebf5c4","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.html",{"t":"差分约束","y":"a","e":"概念 如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]b>>c; add(b,a,-c); } for(int i=1;i","r":{"minutes":10.89,"words":3267}},["/algorithm/图论/cha-fen-yue-shu.html","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu","/algorithm/图论/cha-fen-yue-shu.md","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.md"]],
  ["v-23220696","/algorithm/%E5%9B%BE%E8%AE%BA/dan-yuan-zui-duan-lu.html",{"t":"单源最短路","y":"a","e":"从一个点到其他所有点的最短路 （n是点数，m是边数） 所有边权都是正数 朴素版dijkstra算法（稠密图 时间复杂度O（n*n） g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小 然后进行dijk算法： d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0 进行n次循环，每次找到一个没有被确定的最短距离...","r":{"minutes":14.01,"words":4202}},["/algorithm/图论/dan-yuan-zui-duan-lu.html","/algorithm/%E5%9B%BE%E8%AE%BA/dan-yuan-zui-duan-lu","/algorithm/图论/dan-yuan-zui-duan-lu.md","/algorithm/%E5%9B%BE%E8%AE%BA/dan-yuan-zui-duan-lu.md"]],
  ["v-0eb212bb","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.html",{"t":"多源汇最短路（Floyd算法）","y":"a","e":"概念 起点和终点都不确定的最短路 时间复杂度O（n n n） 思路： 用邻接矩阵来存储边d[i][j]存i到j的边的长度 三重循环： 第一重循环循环中间点，第二第三重循环循环两边点 ```cpp //初始化： memset(d,0x3f,sizeof d); for(int i=1;ij同理得：d[k-1][k][j] 所以包含k的点的路径表示为：d[...","r":{"minutes":5.71,"words":1714}},["/algorithm/图论/duo-yuan-uiduanlu.html","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu","/algorithm/图论/duo-yuan-uiduanlu.md","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.md"]],
  ["v-27f3ede8","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.html",{"t":"二分图","y":"a","e":"概念 将一个图的点分成两部分，当这两部分里的所有点所连的边都是在两部分的点之间连（没有一条边所连的点属于同一个部分），那么这个图就是二分图 一个图是二分图的话当且仅当这个图里没有奇数环 染色法判断二分图 遍历n个点，如果他没有被染色的话，我们就递归把他染上1 递归函数：先把这个点染色，然后把与他相连的没有染色的染成另外一种颜色，如果染完之后不满足题意返...","r":{"minutes":11.5,"words":3451}},["/algorithm/图论/er-fen-tu.html","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu","/algorithm/图论/er-fen-tu.md","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.md"]],
  ["v-8eb1b37e","/algorithm/%E5%9B%BE%E8%AE%BA/lca.html",{"t":"LCA","y":"a","e":"概念 两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先 预处理时间复杂度O（nlogn） 查询的时间复杂度O(logn) 倍增算法求最近共同祖先 预处理每个点向上走2^k步到达的父节点的编号 f[i][j]表示从i开始向上走2^j步所能走到的点（0=depth[y],说明跳k步的深度还在y下面，可以继续跳.如果从i开始跳2^k步...","r":{"minutes":5.48,"words":1645}},["/algorithm/图论/lca.html","/algorithm/%E5%9B%BE%E8%AE%BA/lca","/algorithm/图论/lca.md","/algorithm/%E5%9B%BE%E8%AE%BA/lca.md"]],
  ["v-b34b0726","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.html",{"t":"强联通分量","y":"a","e":"概念 在有向图中选取一个点集S，对于点集S中的任意两个点u，v，u可以到达v，v也可以到达u，则称这个点集S是强连通的 如果一个强连通点集S中不能再加入任何点使他仍然强联通，则S是强连通分量 强连通分量其实就是两两点之间能相互可达的最大点集 对无向图求强连通分量 只要相互联通的点都属于一个强连通分量 方法：那么我们就从1~n遍历没有走过的点，从一个点出...","r":{"minutes":12.33,"words":3699}},["/algorithm/图论/qiang-lian-tong-fen-liang.html","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang","/algorithm/图论/qiang-lian-tong-fen-liang.md","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.md"]],
  ["v-0db1bc38","/algorithm/%E5%9B%BE%E8%AE%BA/shu-ji-chu.html",{"t":"树基础","y":"a","e":"定义 有n个结点，n-1条边的联通无向图 无向无环的联通图 适用于无根树和有根树 森林：每个联通分量（连通块）都是树的图。一棵树也是森林。 生成树：一个联通无向图的生成子树，同时要求是树。即在子树中有n个点，n-1条边且联通。 只适用于有根树 父亲：对于除了根节点以外的每个节点，定义为从该节点到根路径上的第二个结点。根节点没有父结点。 祖先：一个点到根...","r":{"minutes":4.65,"words":1396}},["/algorithm/图论/shu-ji-chu.html","/algorithm/%E5%9B%BE%E8%AE%BA/shu-ji-chu","/algorithm/图论/shu-ji-chu.md","/algorithm/%E5%9B%BE%E8%AE%BA/shu-ji-chu.md"]],
  ["v-16c25e71","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang.html",{"t":"双联通分量","y":"a","e":"概念 对无向图来说才有双联通分量 双联通分量有两种： 1.边双联通分量（e-dcc）： 桥：对于一个联通图来说，如果删掉一条边使图不能联通，那么这条边就称为桥 极大的不含有桥的联通区域就称为边双联通分量 性质： 在边双联通分量里，不管删掉哪条边，图还是联通的 在边双联通分量里，任意两点之间一定包含两条不相交的路径（存在两条没有公共边的路径） 2.点双联...","r":{"minutes":3.18,"words":953}},["/algorithm/图论/shuang-lian-tong-fen-liang.html","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang","/algorithm/图论/shuang-lian-tong-fen-liang.md","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang.md"]],
  ["v-4497620a","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.html",{"t":"拓扑排序","y":"a","e":"概念 对于一个有向无环图的所有点排成一个序列，使他的任意一条边的两个点（u,v），u始终在v的前面，那么这个序列就叫拓扑序列 做法：找到入度为0的点加入队列中，循环队列，每次找到入度为0的点，并删除与这个点联通的点的边，如果删边之后入度为0，把点加入队列中，直到队列为空 ```cpp int n,m; int q[100005],d[100005]; ...","r":{"minutes":5.31,"words":1592}},["/algorithm/图论/tuo-pu-paixu.html","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu","/algorithm/图论/tuo-pu-paixu.md","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.md"]],
  ["v-a8267624","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.html",{"t":"最小生成树","y":"a","e":"概念 最小生成树是由n个点，n-1条边组成的权值最小的树的结构（边权正负都可以） Prim求最小生成树 时间复杂度O（n*n）（稠密图） 循环n次，每次找到不在联通块内距离集合最近的点，（距离就是我们保留的树的边权），然后把他加到集合里 然后用这个点更新其他点到集合的距离 ```cpp #include #include using namespace...","r":{"minutes":7.32,"words":2197}},["/algorithm/图论/zui-xiao-sheng-cheng-shu.html","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu","/algorithm/图论/zui-xiao-sheng-cheng-shu.md","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.md"]],
  ["v-8e8bac92","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.html",{"t":"并查集","y":"a","e":"作用：合并两个集合，查询某个数的祖宗结点 查找一个集合里的元素的数量 核心：find函数 ```cpp void find(int x){ if(p[x]!=x)p[x]=find[p[x]]; return p[x]; } ``` 如果a和b不是一个集合，那么把a合并到b的集合中，在合并之前先把b的集合加上a的元素个数 ```cpp size[fin...","r":{"minutes":5.9,"words":1771}},["/algorithm/数据结构/bing-cha-ji.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji","/algorithm/数据结构/bing-cha-ji.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.md"]],
  ["v-16d0f86f","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-hengshu.html",{"t":"平衡树","y":"a","e":"BST-二叉搜索树 每个结点都有一个权值，每一个结点都满足：他的左子树中任何一个点的权值严格小于当前结点的权值。他的右子树中任何一个点的权值严格大于当前结点的权值。 BST中一般没有重复的数，如果有的话在这个点上加一个计数器来记录这个点出现的次数。 BST的中序遍历一定是从大到小。 插入 从根结点开始递归，如果比根结点小的话就递归左子树。如果我们插入的...","r":{"minutes":11.5,"words":3451}},["/algorithm/数据结构/ping-hengshu.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-hengshu","/algorithm/数据结构/ping-hengshu.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-hengshu.md"]],
  ["v-00d55ff1","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shou-xie-dui.html",{"t":"手写堆","y":"a","e":"手写堆 以小根堆为例： 操作： 1.插入一个数 2.求集合当中的最小值 3.删除最小值 4.删除任意一个元素 5.修改任意一个元素 结构是一个二叉树，每个点都小于等于左右儿子，那么根节点就是整个树的最小值。 堆的存储： 用一个一维数组来存，一号点是根节点，节点x的左儿子是x","r":{"minutes":4.08,"words":1224}},["/algorithm/数据结构/shou-xie-dui.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shou-xie-dui","/algorithm/数据结构/shou-xie-dui.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shou-xie-dui.md"]],
  ["v-68bac7ff","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.html",{"t":"树状数组","y":"a","e":"作用：单点修改区间查询 1.快速求前缀和 O(logn) 2.快速修改某个数 O(logn) lowbit（x）表示x的最低位1所表示的十进制数 tr[i]表示区间[1,i]的和 1.求前缀和： ```cpp int sum(int x){ int res=0; for(int i=x;i;i-=lowbit(i) )res+=tr[i]; retur...","r":{"minutes":4.6,"words":1380}},["/algorithm/数据结构/shu-zhuang-shu-zu.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu","/algorithm/数据结构/shu-zhuang-shu-zu.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.md"]],
  ["v-178a7989","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl.html",{"t":"stl","y":"a","e":"vector vector是一个长度动态变化的函数 vectora 是一个长度动态变化的int类型数组 vector a(n)定义一个长度为n的vector数组 vector a(n,x)定义一个长度为n，所有数都是x的vector数组 vectorb[233] 相当于一个第一维长度233，第二维长度动态变化的int数组 也可以创建一个结构体REC，然...","r":{"minutes":7.87,"words":2360}},["/algorithm/数据结构/stl.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl","/algorithm/数据结构/stl.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl.md"]],
  ["v-7a1f0214","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html",{"t":"线段树","y":"a","e":"作用：对【l，r】区间进行修改操作，询问【l，r】区间的某种性质（最大值，前缀和等等） 操作： 1.build：将一段区间初始化成线段树 2.modify：修改操作，有两种，一种是修改单点（简单），一种是修改区间（要用到懒标记） 3.query：查询某个区间的操作 更新： 1.push up：由子树来更新父结点的信息 2.push down：父结点的修...","r":{"minutes":4.9,"words":1469}},["/algorithm/数据结构/xian-duan-shu.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu","/algorithm/数据结构/xian-duan-shu.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.md"]],
  ["v-55889154","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu.html",{"t":"可持久化线段树","y":"a","e":"（参考的宝贝博客：https://tech.chivas-regal.top/blogs/algorithm/data-structure/function-segmenttree.html#%E7%A8%8B%E5%BA%8F 写的太好啦） 概念 部分可持久化：对于一个数据结构有很多修改和查询的操作 对于每次修改操作都有一个全新的版本（修改只对于最新...","r":{"minutes":6.09,"words":1826}},["/algorithm/数据结构/zhu-xi-shu.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu","/algorithm/数据结构/zhu-xi-shu.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu.md"]],
  ["v-18012017","/algorithm/%E6%95%B0%E8%AE%BA/ji-chu-zhi-shi.html",{"t":"数学基础知识","y":"a","e":"各种类型的范围 int：0~4e9 long long:9e18 double: 位数9 精度：1e(-16) 函数 log(x)：以e为底取x的对数 log2(x):以2为底 log10(x):以10为底 round(x):四舍五入函数 floor(x):向下取整 ceil(x):向上取整 求x是m的几次幂：log(x)/log(m) 取几个数最大值...","r":{"minutes":2.59,"words":778}},["/algorithm/数论/ji-chu-zhi-shi.html","/algorithm/%E6%95%B0%E8%AE%BA/ji-chu-zhi-shi","/algorithm/数论/ji-chu-zhi-shi.md","/algorithm/%E6%95%B0%E8%AE%BA/ji-chu-zhi-shi.md"]],
  ["v-f7e0ba02","/algorithm/%E6%95%B0%E8%AE%BA/ksm.html",{"t":"ksm","y":"a","e":"```cpp int ksm(int a,int b,int p){ a%=p; int ans=1%p; while(b){ if(b&1) ans=ans*a%p; a=a*a%p; b>>=1; } return ans; } ```","r":{"minutes":0.11,"words":32}},["/algorithm/数论/ksm.html","/algorithm/%E6%95%B0%E8%AE%BA/ksm","/algorithm/数论/ksm.md","/algorithm/%E6%95%B0%E8%AE%BA/ksm.md"]],
  ["v-9b731bbc","/algorithm/%E6%95%B0%E8%AE%BA/zu-he-shu.html",{"t":"组合数","y":"a","e":"公式： $C_{n}^{m} =\\frac{n！}{m！（n-m）！}$ ab的值很小且mod的值固定 给定n组询问，每组询问给定两个正数a，b，请你输出 $C_{a}^{b}$ 的值。 ```cpp const int N=2000+2,mod=1e9+7; int n; int c[N][N]; void init(){ for(int i=0;i...","r":{"minutes":1.95,"words":584}},["/algorithm/数论/zu-he-shu.html","/algorithm/%E6%95%B0%E8%AE%BA/zu-he-shu","/algorithm/数论/zu-he-shu.md","/algorithm/%E6%95%B0%E8%AE%BA/zu-he-shu.md"]],
  ["v-624abbbe","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji.html",{"t":"叉积","y":"a","e":"海伦公式求三角形面积 已知三角形三条边分别为a，b，c,设 $p =\\frac{a+b+c}{2}$, 那么三角形的面积为： $\\sqrt{p(p-a)(p-b)(p-c)}$ 缺点：在开根号的过程中精度损失 概念 两个向量的乘积，设有p1，p2两个坐标，p1表示从（0,0）点出发，到（x1，y1）的坐标，p2表示从（0,0）点出发，到（x2，y2）的...","r":{"minutes":5.54,"words":1663}},["/algorithm/计算几何/chaji.html","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji","/algorithm/计算几何/chaji.md","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji.md"]],
  ["v-ccec4096","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/tu-bao.html",{"t":"凸包","y":"a","e":"凸包问题 一片树林里有很多树，让你用一根绳子将这些树包围住，求最短的绳子长度 实质：用一个最小的凸多边形将所有点包住 graham scan算法 找一个y值最小的点 $p{0}$，按照每个点 $p{i}$ 和 $p_{0}$ 连成的直线和x轴正半轴的夹角大小，从小到大排序 极角排序： 用叉乘判断方向： $\\overrightarrow{a}$ × $\\...","r":{"minutes":3.59,"words":1076}},["/algorithm/计算几何/tu-bao.html","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/tu-bao","/algorithm/计算几何/tu-bao.md","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/tu-bao.md"]],
  ["v-2f230080","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bao-tuan.html",{"t":"小沙の抱团 hard","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46813/L 题意：有n个人，m条指令，对第i条指令可以花费bi的代价,要求xi个人抱团，剩下的人淘汰，m条指令可以重复选，那么最少花费多少代价使剩余的人数最少？ 思路：f[i]表示剩下i个人时花费的最小代价，初始化f[n]=0，对于第j条指令，如果当前有i个人，那么行...","r":{"minutes":0.91,"words":274}},["/solution/动态规划/bao-tuan.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bao-tuan","/solution/动态规划/bao-tuan.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bao-tuan.md"]],
  ["v-9d49b844","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao.html",{"t":"背包","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":18.97,"words":5692}},["/solution/动态规划/bei-bao.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao","/solution/动态规划/bei-bao.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao.md"]],
  ["v-6c9a2675","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bi-xuan-hu-die-jie.html",{"t":"清楚姐姐学01背包(Hard Version)（必选蝴蝶结","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46812/D 题意：有n个蝴蝶结，每个蝴蝶结的体积是vi，好看程度为wi，有一个容量大小是m的背包，将这n个蝴蝶结放入背包中且总体积不能超过背包容量，想让好看程度最大化。 定义上面的问题的好看程度最大值为mmax1。 定义这n个蝴蝶结中去掉第i个蝴蝶结之后，从剩余n-1...","r":{"minutes":2.77,"words":832}},["/solution/动态规划/bi-xuan-hu-die-jie.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bi-xuan-hu-die-jie","/solution/动态规划/bi-xuan-hu-die-jie.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bi-xuan-hu-die-jie.md"]],
  ["v-0db0ff5f","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp.html",{"t":"dp","y":"a","e":"P1002 [NOIP2002 普及组] 过河卒 题目描述 棋盘上 AA 点有一个过河卒，需要走到目标 BB 点。卒行走的规则：可以向下、或者向右。同时在棋盘上 CC 点有一个对方的马，该马所在的点和所有跳跃一步可达的点称为对方马的控制点。因此称之为“马拦过河卒”。 棋盘用坐标表示，AA 点 (0, 0)(0,0)、BB 点 (n, m)(n,m)，同...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":21.37,"words":6410}},["/solution/动态规划/dp.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp","/solution/动态规划/dp.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp.md"]],
  ["v-717409a8","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/exam.html",{"t":"I love exam","y":"a","e":"原题链接：https://vjudge.net/contest/541856#problem/H 题意： 小z有n场考试，t天开学。 有m本复习资料。 对于第i套复习资料，名称是s[i]，研究的时间是y[i]，可以在这门学科上加x[i]的分。（每科的上限是100），每套资料用一次。 小z的每门课都是0分水平，需要选择一些科目来复习，最多可以不及格p科课...","r":{"minutes":1.86,"words":557}},["/solution/动态规划/exam.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/exam","/solution/动态规划/exam.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/exam.md"]],
  ["v-167acb93","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke.html",{"t":"分扇贝","y":"a","e":"题目 把m个仙贝分给n个朋友，假设手里现在有x个仙贝，分给一个朋友y个仙贝，那么这个朋友对你的好感度就增加y/x，每个朋友可以分也可以不分，如果分的话每个朋友只能分一次，仙贝也可以剩下或不剩下。 求最优送仙贝的策略下，朋友对你的好感度之和最大是多少 思路 设f[i][j]为前i个人送完之后，还剩下j个仙贝的情况下所有人对你的最大好感度和 对于第i个人：...","r":{"minutes":0.95,"words":286}},["/solution/动态规划/niuke.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke","/solution/动态规划/niuke.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke.md"]],
  ["v-3318fe32","/solution/%E5%9B%BE%E8%AE%BA/shu.html",{"t":"树的三种遍历","y":"a","e":"清楚姐姐学树状数组 原题链接：https://ac.nowcoder.com/acm/contest/46812/F 题意：将树状数组的第i个元素对应二叉树上编号为i的结点构造出一个二叉树。 有一个尺寸大小为N= $2^k$ 的树状数组，按照下面规则构成一个二叉树： 1.编号为i的结点深度为 $\\log{2}{（lowbit（N））} -\\log{2}...","r":{"minutes":3.7,"words":1111}},["/solution/图论/shu.html","/solution/%E5%9B%BE%E8%AE%BA/shu","/solution/图论/shu.md","/solution/%E5%9B%BE%E8%AE%BA/shu.md"]],
  ["v-f78f0f64","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu.html",{"t":"最短路","y":"a","e":"阿宁前往沙城 原题链接：https://ac.nowcoder.com/acm/contest/46814/I 题意：有编号为1~n的n个城堡，要从1号城市到n号城市，可以在任何时候选择两条道路，一条道路时间变为1，并且毁灭另一条道路。被毁灭的道路无法通行，并且无法被技能选中。 求从1号城市到n号城市所需要的最短时间。 思路：贪心的想，当我们走到i的时...","r":{"minutes":1.8,"words":540}},["/solution/图论/zui-duan-lu.html","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu","/solution/图论/zui-duan-lu.md","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu.md"]],
  ["v-3290ded0","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/A-ST%20and%20Ts.html",{"t":"A - ST and TS Palindrome","y":"a","e":"原题链接：https://atcoder.jp/contests/arc155/tasks/arc155_a 题意：给你一个长度为n的字符串s以及一个数字k，能否找出一个字符串t，使得： 1.s+t是回文串 2.t+s是回文串 思路： 假设s=ab，k=9，那么我们构造t的话首先要满足s+t是回文，那么就将t的最后两个字符填上ba： 也要满足t+s是回...","r":{"minutes":1.77,"words":531}},["/solution/字符串/A-ST and Ts.html","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/A-ST%20and%20Ts","/solution/字符串/A-ST and Ts.md","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/A-ST%20and%20Ts.md"]],
  ["v-59ad23c3","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html",{"t":"kmp","y":"a","e":"剪花布条（kmp） 一块花布条，里面有些图案，另有一块直接可用的小饰条，里面也有一些图案。对于给定的花布条和小饰条，计算一下能从花布条中尽可能剪出几块小饰条来呢？ 输入格式 输入数据为多组数据，读取到 # 字符时结束。每组数据仅有一行，为由空格分开的花布条和小饰条。花布条和小饰条都是用可见 ASCII 字符表示的，不会超过 10001000 个字符。 ...","c":["algorithm"],"g":["字符串"],"r":{"minutes":9.57,"words":2870}},["/solution/字符串/kmp.html","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp","/solution/字符串/kmp.md","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.md"]],
  ["v-07f2a534","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan.html",{"t":"字符串","y":"a","e":"A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛） 柳庭风静人眠昼，昼眠人静风庭柳。香汗薄衫凉，凉衫薄汗香。手红冰碗藕，藕碗冰红手。郎笑藕丝长，长丝藕笑郎。 给出一个序列 ana_nan​，对于 iii，求有几个数 jjj 满足： 111 、i≤ji \\le ji≤j 222 、子串 ai∼ja_{i\\sim j}ai∼j​ 是一个回文串 回...","c":["algorithm"],"g":["字符串"],"r":{"minutes":16.91,"words":5073}},["/solution/字符串/zi-fu-chuan.html","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan","/solution/字符串/zi-fu-chuan.md","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan.md"]],
  ["v-789f38b2","/solution/%E6%90%9C%E7%B4%A2/+-.html",{"t":"严肃古板的秩序","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46811/G 题意:给一个含有数字，?和一个等号的字符串，?中可以填\"+\",\"-\",\"#\"三个符号，\"a#b\"表示 $a^{a} \\bmod b$,运算优先级和+-一样，输出符合计算的等式，如果没有输出-1 思路 先处理出所有的数字放入a数组，从a[1]开始深搜，每次列...","r":{"minutes":1.12,"words":337}},["/solution/搜索/+-.html","/solution/%E6%90%9C%E7%B4%A2/+-","/solution/搜索/+-.md","/solution/%E6%90%9C%E7%B4%A2/+-.md"]],
  ["v-267368ef","/solution/%E6%90%9C%E7%B4%A2/bfs.html",{"t":"bfs","y":"a","e":"bfs总结 一般就是求最短距离，思路就是把初始状态加入队列中，写一个while循环，条件是队列不空，每次取队头然后拓展队头。一般需要一个额外的数组来记录每个位置的距离，并需要在刚开始的时候初始化。 例题：走迷宫 给定一个 n×mn×m 的二维整数数组，用来表示一个迷宫，数组中只包含 00 或 11，其中 00 表示可以走的路，11 表示不可通过的墙壁。...","c":["algorithm"],"g":["搜索"],"r":{"minutes":6.93,"words":2078}},["/solution/搜索/bfs.html","/solution/%E6%90%9C%E7%B4%A2/bfs","/solution/搜索/bfs.md","/solution/%E6%90%9C%E7%B4%A2/bfs.md"]],
  ["v-13947aa6","/solution/%E6%90%9C%E7%B4%A2/dfs.html",{"t":"dfs","y":"a","e":"P1331 海战 题目描述 在峰会期间，武装部队得处于高度戒备。警察将监视每一条大街，军队将保卫建筑物，领空将布满了F-2003飞机。此外，巡洋船只和舰队将被派去保护海岸线。不幸的是因为种种原因，国防海军部仅有很少的几位军官能指挥大型海战。因此，他们考虑培养一些新的海军指挥官，他们选择了“海战”游戏来帮助学习。 在这个著名的游戏中，在一个方形的盘上放置...","c":["algorithm"],"g":["搜索"],"r":{"minutes":55.24,"words":16572}},["/solution/搜索/dfs.html","/solution/%E6%90%9C%E7%B4%A2/dfs","/solution/搜索/dfs.md","/solution/%E6%90%9C%E7%B4%A2/dfs.md"]],
  ["v-61d13f86","/solution/%E6%95%B0%E5%AD%A6/ai-aj-ak.html",{"t":"Tokitsukaze and Three Integers","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46810/L 题意： 有一个长度为n的数组，想知道三元组[i,j,k]的数量，满足： ·i!=j&&i!=k&&j!=k ·（a[i]*a[j]+a[k])%p=x%p 思路： 化成a[i]*a[j]%p=（x-a[k])%p 先算出所有i！=j时，a[i]*a[j]的...","r":{"minutes":1,"words":300}},["/solution/数学/ai-aj-ak.html","/solution/%E6%95%B0%E5%AD%A6/ai-aj-ak","/solution/数学/ai-aj-ak.md","/solution/%E6%95%B0%E5%AD%A6/ai-aj-ak.md"]],
  ["v-bbab1e3a","/solution/%E6%95%B0%E5%AD%A6/C.%20Serval%20and%20Toxel's%20Arrays.html",{"t":"C. Serval and Toxel's Arrays","y":"a","e":"原题链接：https://codeforces.com/contest/1789/problem/C 题意： 有一个长度为n的数组，满足两两不同。 有m个操作，第i个操作是将第p个元素改为v，那么就形成了一个新的数组。 定义两个数组的值是两个数组中不同数的种类，那么求这m+1个数组中，两两数组的总值是多少。 思路：对于每个数来说，在一个数组中只能出现一...","r":{"minutes":1.5,"words":451}},["/solution/数学/C. Serval and Toxel's Arrays.html","/solution/%E6%95%B0%E5%AD%A6/C.%20Serval%20and%20Toxel's%20Arrays","/solution/数学/C. Serval and Toxel's Arrays.md","/solution/%E6%95%B0%E5%AD%A6/C.%20Serval%20and%20Toxel's%20Arrays.md"]],
  ["v-156bc363","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie.html",{"t":"斐波那契数列","y":"a","e":"7-8 汉诺塔问题 相传在古印度圣庙中，有一种被称为汉诺塔(Hanoi)的游戏。该游戏是在一块铜板装置上，有三根杆(编号A、B、C)，在A杆自下而上、由大到小按顺序放置64个金盘(如图1)。游戏的目标：把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子...","c":["algorithm"],"g":["数学"],"r":{"minutes":5.8,"words":1741}},["/solution/数学/fei-bo-na-qi-shu-lie.html","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie","/solution/数学/fei-bo-na-qi-shu-lie.md","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie.md"]],
  ["v-2a1a8ba6","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi.html",{"t":"矩阵快速幂","y":"a","e":"C - Recursive sequence （矩阵ksm） 原题链接：Problem - 5950 Problem Description Farmer John likes to play mathematics games with his N cows. Recently, they are attracted by recursive seq...","c":["algorithm"],"g":["数学"],"r":{"minutes":2.51,"words":753}},["/solution/数学/ju-zhen-kuai-su-mi.html","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi","/solution/数学/ju-zhen-kuai-su-mi.md","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi.md"]],
  ["v-b2dbcbaa","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue.html",{"t":"排列数学","y":"a","e":"CF1422C Bargain 题目描述 Sometimes it is not easy to come to an agreement in a bargain. Right now Sasha and Vova can't come to an agreement: Sasha names a price as high as possible,...","c":["algorithm"],"g":["数学"],"r":{"minutes":13.44,"words":4033}},["/solution/数学/pai-lie-shu-xue.html","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue","/solution/数学/pai-lie-shu-xue.md","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue.md"]],
  ["v-79322004","/solution/%E6%95%B0%E5%AD%A6/triangle.html",{"t":"D. Triangle Coloring","y":"a","e":"原题链接：https://codeforces.com/contest/1795/problem/D 题意： 有n个点（n能被6整除），每三个点是一个三元组，每个三元组的每个点之间有一条正权边，不在同一个三元组的点之间没有边。现在把这n个点涂色，要求只能涂两种颜色红和蓝，而且一半点涂红，一半点涂蓝。当一条边的两个端点是不同的两个颜色的时候，这条边算一个...","r":{"minutes":1.69,"words":506}},["/solution/数学/triangle.html","/solution/%E6%95%B0%E5%AD%A6/triangle","/solution/数学/triangle.md","/solution/%E6%95%B0%E5%AD%A6/triangle.md"]],
  ["v-1c746c5c","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/fen-kuai.html",{"t":"分块","y":"a","e":"时间复杂度：n $\\sqrt{n} $ 把一个数组分成 $\\sqrt{n} $ 段 对于一个区间l，r的操作，可以把他分成长度小于 $\\sqrt{n} $ 的段（两边段）和长度等于 $\\sqrt{n} $ 的完整的段（中间段）。 以一个区间加上一个数d，求一个区间的所有数的和为例： add：本段中所有的数都加上d sum：本段里所有真实数的总和（算上a...","r":{"minutes":0.63,"words":190}},["/solution/数据结构/fen-kuai.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/fen-kuai","/solution/数据结构/fen-kuai.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/fen-kuai.md"]],
  ["v-2302f78c","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-heng-shu.html",{"t":"平衡树","y":"a","e":"作用： 插入一个数 删除一个数 求某个值的排名 求排名是某个数的数值 求比某个数小的最大值 求比某个数大的最小值 P1533 可怜的狗狗 原题链接：https://www.luogu.com.cn/problem/P1533 题意： 有n只狗，每个狗狗有一个漂亮值，m个操作，每个操作是求[l,r]这段区间第k漂亮的狗狗的漂亮值是多少，并且区间不重叠。 ...","r":{"minutes":2.68,"words":804}},["/solution/数据结构/ping-heng-shu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-heng-shu","/solution/数据结构/ping-heng-shu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ping-heng-shu.md"]],
  ["v-218f384a","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.html",{"t":"树状数组","y":"a","e":"操作： 1.在下标为i的数上+x：add（i，x） 2.询问前x个数的前缀和：sum（x） 要做区间修改，单点查询的话，可以对差分数组b做操作： 1.在l~r的区间内加上d：b[l]+=d,b[r+1]+=d; 2.询问x的值：sum（x） 回转寿司 原题链接：https://www.luogu.com.cn/problem/P5459 题意：有n个盘...","r":{"minutes":5.23,"words":1570}},["/solution/数据结构/shu-zhuang-shu-zu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu","/solution/数据结构/shu-zhuang-shu-zu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.md"]],
  ["v-279cebf0","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html",{"t":"线段树","y":"a","e":"扶苏的问题 原题链接：https://www.luogu.com.cn/problem/P1253 给定一个长度为n的数组，要求支持以下三种操作： 1.给定区间[l,r]，将区间内每个数都改为x。 2.给定区间[l,r]，将区间内每个数都加上x。 3.给定区间[l,r]，求区间内的最大值。 思路： 因为有两个对区间的修改，所以要用两个修改操作和两个懒标...","r":{"minutes":4.68,"words":1403}},["/solution/数据结构/xian-duan-shu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu","/solution/数据结构/xian-duan-shu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.md"]],
  ["v-394b5610","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu.html",{"t":"可持久化线段树","y":"a","e":"P1383 高级打字机 原题；链接：https://www.luogu.com.cn/problem/P1383 题意：有n个操作，操作有三种类型： 1.T x：在文章末尾加一个小写字母x 2.U x：撤销最后的x次操作 3.Q x：询问当前文章中第x个字母 思路：用可持久化线段树来分别储存每个历史版本，需要用一个数组cnt来记录每个版本的长度，还需要...","r":{"minutes":4.44,"words":1333}},["/solution/数据结构/zhu-xi-shu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu","/solution/数据结构/zhu-xi-shu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/zhu-xi-shu.md"]],
  ["v-1d691529","/solution/%E6%9D%82%E8%AE%B0/bi-ji.html",{"t":"笔记","y":"a","e":"2779: 小A与泉水 题目描述 小A遇到了一座神奇的泉水，在泉水中洗涤会大幅增加他的精力。在一次洗涤中，泉水增加力量的数值为当前力量二进制表示中的最低位的1对应的值。 例如： 如果当前力量为9（1001 最低位1对应的值为1），增加的力量为1； 如果当前力量为12（1100 最低位1对应的值为100），增加的力量为4。 小A想要将他的力量变为2的幂次...","c":["algorithm"],"g":["note"],"r":{"minutes":8.47,"words":2541}},["/solution/杂记/bi-ji.html","/solution/%E6%9D%82%E8%AE%B0/bi-ji","/solution/杂记/bi-ji.md","/solution/%E6%9D%82%E8%AE%B0/bi-ji.md"]],
  ["v-b60648be","/solution/%E6%9E%84%E9%80%A0/a-b-pi.html",{"t":"小沙の不懂","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46813/C 题意：p是一个下标从0开始的0~9的排列，有两个数字a，b，在给你之前会做一遍a[i]=p[a[i]],b[i]=p[b[i]]的操作，那么问在变化之前的a b的大小关系 数据范围：0x的映射关系 当长度一样时，如果ab串相等，对于每个i，都在p数组里映射...","r":{"minutes":2.04,"words":611}},["/solution/构造/a-b-pi.html","/solution/%E6%9E%84%E9%80%A0/a-b-pi","/solution/构造/a-b-pi.md","/solution/%E6%9E%84%E9%80%A0/a-b-pi.md"]],
  ["v-e6a82ed2","/solution/%E6%9E%84%E9%80%A0/beishu.html",{"t":"阿宁的倍数","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46814/B 题意：有一个长度为n的数组a，下标从1开始，有q次操作。 修改操作： 1 x：将数组末尾增加一个数x，数组长度增加1 查询操作： 2 x：求[x+1,n]的区间内，有多少个数满足a[i]是a[x]的倍数。 思路：如果想找[x+1,n]的区间内是a[x]的倍...","r":{"minutes":1.46,"words":438}},["/solution/构造/beishu.html","/solution/%E6%9E%84%E9%80%A0/beishu","/solution/构造/beishu.md","/solution/%E6%9E%84%E9%80%A0/beishu.md"]],
  ["v-168e16d8","/solution/%E6%9E%84%E9%80%A0/ling-shi.html",{"t":"小沙の金银阁","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46813/I 题意：有m个灵石，进行n场游戏，在每局游戏进行之前需要压正整数的灵石，对于每一局游戏来说： 输：减掉所压的灵石的数量 赢：加上所压的灵石数量和手里现有的灵石的数量 已知只有一局赢了，那么在不会亏损灵石的条件下，请你设计一个最优方案。 对于两个方案来说，如果...","r":{"minutes":2.33,"words":698}},["/solution/构造/ling-shi.html","/solution/%E6%9E%84%E9%80%A0/ling-shi","/solution/构造/ling-shi.md","/solution/%E6%9E%84%E9%80%A0/ling-shi.md"]],
  ["v-f6116122","/solution/%E6%9E%84%E9%80%A0/mx-mul.html",{"t":"I love max and multiply","y":"a","e":"原题链接：https://vjudge.net/contest/541856#problem/K 题意：有两个数组a，b，每个数组都有n个数，我们需要构造一个c数组，使得c[k]=max(a[i]b[j])(i&j>=k),求这个c数组的和模上998244353的值。 思路： c[k]找的是两个数相乘的最大值，然而数有正有负，两个很大的正数相乘可以很大...","r":{"minutes":2.45,"words":735}},["/solution/构造/mx-mul.html","/solution/%E6%9E%84%E9%80%A0/mx-mul","/solution/构造/mx-mul.md","/solution/%E6%9E%84%E9%80%A0/mx-mul.md"]],
  ["v-5f91316a","/solution/%E6%9E%84%E9%80%A0/tea-tasting.html",{"t":"C. Tea Tasting","y":"a","e":"原题链接：https://codeforces.com/contest/1795/problem/C 题意： 给定n杯茶，每杯中有a[i]个单位的茶，n个人，每个人每次可以喝b[i]个单位的茶。刚开始的时候先第一个人喝第1杯，第二个人喝第2杯...第n个人喝第n杯。到第二轮开始的时候，第一个人被去除，第二个人喝第一杯，第三个人喝第二杯...第n个人喝第...","r":{"minutes":1.95,"words":585}},["/solution/构造/tea-tasting.html","/solution/%E6%9E%84%E9%80%A0/tea-tasting","/solution/构造/tea-tasting.md","/solution/%E6%9E%84%E9%80%A0/tea-tasting.md"]],
  ["v-11413ec7","/solution/%E6%AF%94%E8%B5%9B/abc.html",{"t":"B - Grid Rotations","y":"a","e":"原题链接：https://atcoder.jp/contests/arc153/tasks/arc153_b 题意：有n*m的矩阵，每个方格里有一个小写英文字母，有q个操作，每次询问给你两个值ai，bi，让你执行如下操作： 在以（1,1）为左上角，（ai，bi）为右下角的矩形内将字母整体旋转180度 在以（1,bi+1）为左上角，（ai，m）为右下角的...","r":{"minutes":3.03,"words":908}},["/solution/比赛/abc.html","/solution/%E6%AF%94%E8%B5%9B/abc","/solution/比赛/abc.md","/solution/%E6%AF%94%E8%B5%9B/abc.md"]],
  ["v-27efaafc","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc.html",{"t":"ccpc-icpc","y":"a","e":"A - I Count Two Three 题意：找出一个大于等于n的，能写成2^a3^b5^c*7^d的数。（a，b，c，d均大于等于0） 思路：打表+查找。 打表的时候直接a，b，c，d枚举出来4重循环，然后再剪枝，因为2^32&gt;1e9，所以我们在枚举的时候a，b，c，d都枚举到32就可以了，剪枝是判断一下当我们枚举的乘在一起大于1e9的时候...","c":["algorithm"],"g":["ACM"],"r":{"minutes":8.49,"words":2547}},["/solution/比赛/ccpc-icpc.html","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc","/solution/比赛/ccpc-icpc.md","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc.md"]],
  ["v-348f8f46","/solution/%E6%AF%94%E8%B5%9B/cf.html",{"t":"cf","y":"a","e":"CF706D Vasiliy‘s Multiset Author has gone out of the stories about Vasiliy, so here is just a formal task description. You are given qq queries and a multiset AA , initially con...","c":["algorithm"],"g":["ACM"],"r":{"minutes":21.23,"words":6370}},["/solution/比赛/cf.html","/solution/%E6%AF%94%E8%B5%9B/cf","/solution/比赛/cf.md","/solution/%E6%AF%94%E8%B5%9B/cf.md"]],
  ["v-cab1018e","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen.html",{"t":"二分","y":"a","e":"​ 题目描述 一年一度的“跳石头”比赛又要开始了！ 这项比赛将在一条笔直的河道中进行，河道中分布着一些巨大岩石。组委会已经选择好了两块岩石作为比赛起点和终点。在起点和终点之间，有 NN 块岩石（不含起点和终点的岩石）。在比赛过程中，选手们将从起点出发，每一步跳向相邻的岩石，直至到达终点。 为了提高比赛难度，组委会计划移走一些岩石，使得选手们在比赛过程中...","c":["algorithm"],"g":["技巧"],"r":{"minutes":11.2,"words":3361}},["/solution/算法技巧/er-fen.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen","/solution/算法技巧/er-fen.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen.md"]],
  ["v-0436993c","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao.html",{"t":"构造","y":"a","e":"C - Submask You are given a non-negative integer NN. Print all non-negative integers xx that satisfy the following condition in ascending order. The set of the digit positions c...","c":["algorithm"],"g":["技巧"],"r":{"minutes":8.82,"words":2645}},["/solution/算法技巧/gou-zao.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao","/solution/算法技巧/gou-zao.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao.md"]],
  ["v-5f8a0336","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu.html",{"t":"排序","y":"a","e":"1416: 大小关系（拓扑排序） 当我们知道一组大小关系之后，可判断所有关系是否都能成立，即关系间没有矛盾。 例如：A&lt;B, A&lt;C, B&lt;C  通过这组关系我们可以得到A&lt;B&lt;C ，所有关系都成立，没有矛盾。 若 A&lt;B, B&lt;C, C&lt;A  通过前两个关系我们得到 A&lt;B&lt;C ，这个关系与...","c":["algorithm"],"g":["技巧"],"r":{"minutes":10.81,"words":3244}},["/solution/算法技巧/pai-xu.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu","/solution/算法技巧/pai-xu.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu.md"]],
  ["v-06000b64","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei.html",{"t":"思维","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["技巧"],"r":{"minutes":50.62,"words":15187}},["/solution/算法技巧/si-wei.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei","/solution/算法技巧/si-wei.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei.md"]],
  ["v-0826d81a","/solution/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/ji-suan-ji-he.html",{"t":"鸡算几何","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46800/E 题意：如果能判断两个L形的铁丝是由对称得来的就输出yes，否则输出no 思路： 首先，如果AB=BC的话，旋转和对称的图形一样，所以不能判断是否是由对称得来的 我们把AB变成长边，DE变成长边 然后我们再看他们的叉积是否相等，如果相等说明是由旋转得到的，不...","r":{"minutes":1.07,"words":320}},["/solution/计算几何/ji-suan-ji-he.html","/solution/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/ji-suan-ji-he","/solution/计算几何/ji-suan-ji-he.md","/solution/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/ji-suan-ji-he.md"]],
  ["v-7c8a5a6c","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu.html",{"t":"结构体排序","y":"a","e":"阅览室pta（详解） 天梯图书阅览室请你编写一个简单的图书借阅统计程序。当读者借书时，管理员输入书号并按下S键，程序开始计时；当读者还书时，管理员输入书号并按下E键，程序结束计时。书号为不超过1000的正整数。当管理员将0作为书号输入时，表示一天工作结束，你的程序应输出当天的读者借书次数和平均阅读时间。 注意：由于线路偶尔会有故障，可能出现不完整的纪录...","c":["algorithm"],"g":["语言基础"],"r":{"minutes":10.02,"words":3006}},["/solution/语法技巧/jie-gou-ti-pai-xu.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu","/solution/语法技巧/jie-gou-ti-pai-xu.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu.md"]],
  ["v-187be613","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map.html",{"t":"map","y":"a","e":"帅到没朋友 当芸芸众生忙着在朋友圈中发照片的时候，总有一些人因为太帅而没有朋友。本题就要求你找出那些帅到没有朋友的人。 输入格式： 输入第一行给出一个正整数N（≤100），是已知朋友圈的个数；随后N行，每行首先给出一个正整数K（≤1000），为朋友圈中的人数，然后列出一个朋友圈内的所有人——为方便起见，每人对应一个ID号，为5位数字（从00000到99...","c":["algorithm"],"g":["STL"],"r":{"minutes":2.52,"words":757}},["/solution/语法技巧/map.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map","/solution/语法技巧/map.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map.md"]],
  ["v-6e05f6a4","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl.html",{"t":"stl","y":"a","e":"集合相似度 给定两个整数集合，它们的相似度定义为：Nc​/Nt​×100%。其中Nc​是两个集合都有的不相等整数的个数，Nt​是两个集合一共有的不相等整数的个数。你的任务就是计算任意一对给定集合的相似度。 输入格式： 输入第一行给出一个正整数N（≤50），是集合的个数。随后N行，每行对应一个集合。每个集合首先给出一个正整数M（≤104），是集合中元素的...","c":["algorithm"],"g":["STL"],"r":{"minutes":28.82,"words":8647}},["/solution/语法技巧/stl.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl","/solution/语法技巧/stl.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl.md"]],
  ["v-3706649a","/404.html",{"t":"","y":"p"},["/404"]],
  ["v-5bc93818","/category/",{"t":"分类","y":"p"},["/category/index.html"]],
  ["v-744d024e","/tag/",{"t":"标签","y":"p"},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"t":"文章","y":"p"},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"t":"加密","y":"p"},["/encrypted/index.html"]],
  ["v-d804e652","/slide/",{"t":"幻灯片","y":"p"},["/slide/index.html"]],
  ["v-154dc4c4","/star/",{"t":"收藏","y":"p"},["/star/index.html"]],
  ["v-01560935","/timeline/",{"t":"时间轴","y":"p"},["/timeline/index.html"]],
  ["v-dc8c5890","/category/algorithm/",{"t":"algorithm 分类","y":"p"},["/category/algorithm/index.html"]],
  ["v-2bb96006","/tag/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/",{"t":"动态规划 标签","y":"p"},["/tag/动态规划/","/tag/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/index.html"]],
  ["v-93cb9d6e","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/",{"t":"字符串 标签","y":"p"},["/tag/字符串/","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/index.html"]],
  ["v-3b0e2518","/tag/%E6%90%9C%E7%B4%A2/",{"t":"搜索 标签","y":"p"},["/tag/搜索/","/tag/%E6%90%9C%E7%B4%A2/index.html"]],
  ["v-9904a07c","/tag/%E6%95%B0%E5%AD%A6/",{"t":"数学 标签","y":"p"},["/tag/数学/","/tag/%E6%95%B0%E5%AD%A6/index.html"]],
  ["v-28e08cef","/tag/note/",{"t":"note 标签","y":"p"},["/tag/note/index.html"]],
  ["v-b316775c","/tag/acm/",{"t":"ACM 标签","y":"p"},["/tag/acm/index.html"]],
  ["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{"t":"技巧 标签","y":"p"},["/tag/技巧/","/tag/%E6%8A%80%E5%B7%A7/index.html"]],
  ["v-b7e505f4","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/",{"t":"语言基础 标签","y":"p"},["/tag/语言基础/","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-b3059a9c","/tag/stl/",{"t":"STL 标签","y":"p"},["/tag/stl/index.html"]],
  ["v-dc6d973e","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/zui-chang-shang-sheng.html",{"t":"最长上升子序列模型","y":"a","r":{"minutes":0.03,"words":10}},["/algorithm/动态规划/zui-chang-shang-sheng.html","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/zui-chang-shang-sheng","/algorithm/动态规划/zui-chang-shang-sheng.md","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/zui-chang-shang-sheng.md"]],
]
