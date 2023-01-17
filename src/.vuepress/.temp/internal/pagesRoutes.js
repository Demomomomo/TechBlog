export const pagesRoutes = [
  ["v-8daa1a0e","/",{"t":"Demo Blog","i":"home","y":"h","r":{"minutes":0.6,"words":181}},["/index.html","/README.md"]],
  ["v-70bc2959","/algorithm/",{"t":"指南","y":"a","e":"这里是存放算法的位置","r":{"minutes":0.04,"words":13}},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-799e9206","/solution/",{"t":"指南","y":"a","e":"这里是存放题解的位置 Markdown 教学 ```` 新算法的题目 题面 思路 ```cpp // 代码 ``` 好用的 markdown 语法 66 我是行内代码块 66 ```cpp 我是行间代码块 ``` 加粗 斜体 上面是分割线 好用的 latex 公式 $a_i,a^i,a\\to b$ 网站参考 latexlive $\\alpha$ 两侧有...","r":{"minutes":0.34,"words":101}},["/solution/index.html","/solution/README.md"]],
  ["v-624abbbe","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji.html",{"t":"叉积","y":"a","e":"海伦公式求三角形面积 已知三角形三条边分别为a，b，c,设p=$\\frac{a+b+c}{2}$, 那么三角形的面积为： $\\sqrt{p(p-a)(p-b)(p-c)}$ 缺点：在开根号的过程中精度损失 概念 两个向量的乘积，设有p1，p2两个坐标，p1表示从（0,0）点出发，到（x1，y1）的坐标，p2表示从（0,0）点出发，到（x2，y2）的坐标...","r":{"minutes":1.43,"words":429}},["/algorithm/计算几何/chaji.html","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji","/algorithm/计算几何/chaji.md","/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/chaji.md"]],
  ["v-7aebf5c4","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.html",{"t":"差分约束","y":"a","e":"作用： （1）求不等式的可行解 （2）求最大值或者最小值","r":{"minutes":0.09,"words":26}},["/algorithm/图论/cha-fen-yue-shu.html","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu","/algorithm/图论/cha-fen-yue-shu.md","/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.md"]],
  ["v-0eb212bb","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.html",{"t":"多源汇最短路（Floyd算法）","y":"a","e":"概念 起点和终点都不确定的最短路 时间复杂度O（n n n） 思路： 用邻接矩阵来存储边d[i][j]存i到j的边的长度 三重循环： 第一重循环循环中间点，第二第三重循环循环两边点 ```cpp //初始化： memset(d,0x3f,sizeof d); for(int i=1;ij同理得：d[k-1][k][j] 所以包含k的点的路径表示为：d[...","r":{"minutes":1.1,"words":330}},["/algorithm/图论/duo-yuan-uiduanlu.html","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu","/algorithm/图论/duo-yuan-uiduanlu.md","/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.md"]],
  ["v-27f3ede8","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.html",{"t":"二分图","y":"a","e":"概念 将一个图的点分成两部分，当这两部分里的所有点所连的边都是在两部分的点之间连（没有一条边所连的点属于同一个部分），那么这个图就是二分图 一个图是二分图的话当且仅当这个图里没有奇数环 染色法判断二分图 遍历n个点，如果他没有被染色的话，我们就递归把他染上1 递归函数：先把这个点染色，然后把与他相连的没有染色的染成另外一种颜色，如果染完之后不满足题意返...","r":{"minutes":11.5,"words":3451}},["/algorithm/图论/er-fen-tu.html","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu","/algorithm/图论/er-fen-tu.md","/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.md"]],
  ["v-8eb1b37e","/algorithm/%E5%9B%BE%E8%AE%BA/lca.html",{"t":"LCA","y":"a","e":"概念 两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先 预处理时间复杂度O（nlogn） 查询的时间复杂度O(logn) 倍增算法求最近共同祖先 预处理每个点向上走2^k步到达的父节点的编号 f[i][j]表示从i开始向上走2^j步所能走到的点（0=depth[y],说明跳k步的深度还在y下面，可以继续跳.如果从i开始跳2^k步...","r":{"minutes":5.48,"words":1645}},["/algorithm/图论/lca.html","/algorithm/%E5%9B%BE%E8%AE%BA/lca","/algorithm/图论/lca.md","/algorithm/%E5%9B%BE%E8%AE%BA/lca.md"]],
  ["v-b34b0726","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.html",{"t":"强联通分量","y":"a","e":"概念 在有向图中选取一个点集S，对于点集S中的任意两个点u，v，u可以到达v，v也可以到达u，则称这个点集S是强连通的 如果一个强连通点集S中不能再加入任何点使他仍然强联通，则S是强连通分量 强连通分量其实就是两两点之间能相互可达的最大点集 对无向图求强连通分量 只要相互联通的点都属于一个强连通分量 方法：那么我们就从1~n遍历没有走过的点，从一个点出...","r":{"minutes":12.33,"words":3699}},["/algorithm/图论/qiang-lian-tong-fen-liang.html","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang","/algorithm/图论/qiang-lian-tong-fen-liang.md","/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.md"]],
  ["v-16c25e71","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang.html",{"t":"双联通分量","y":"a","e":"概念 对无向图来说才有双联通分量 双联通分量有两种： 1.边双联通分量（e-dcc）： 桥：对于一个联通图来说，如果删掉一条边使图不能联通，那么这条边就称为桥 极大的不含有桥的联通区域就称为边双联通分量 性质： 在边双联通分量里，不管删掉哪条边，图还是联通的 在边双联通分量里，任意两点之间一定包含两条不相交的路径（存在两条没有公共边的路径） 2.点双联...","r":{"minutes":3.18,"words":953}},["/algorithm/图论/shuang-lian-tong-fen-liang.html","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang","/algorithm/图论/shuang-lian-tong-fen-liang.md","/algorithm/%E5%9B%BE%E8%AE%BA/shuang-lian-tong-fen-liang.md"]],
  ["v-4497620a","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.html",{"t":"拓扑排序","y":"a","e":"概念 对于一个有向无环图的所有点排成一个序列，使他的任意一条边的两个点（u,v），u始终在v的前面，那么这个序列就叫拓扑序列 做法：找到入度为0的点加入队列中，循环队列，每次找到入度为0的点，并删除与这个点联通的点的边，如果删边之后入度为0，把点加入队列中，直到队列为空 ```cpp int n,m; int q[100005],d[100005]; ...","r":{"minutes":5.31,"words":1592}},["/algorithm/图论/tuo-pu-paixu.html","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu","/algorithm/图论/tuo-pu-paixu.md","/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.md"]],
  ["v-a8267624","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.html",{"t":"最小生成树","y":"a","e":"概念 最小生成树是由n个点，n-1条边组成的权值最小的树的结构（边权正负都可以） Prim求最小生成树 时间复杂度O（n*n）（稠密图） 循环n次，每次找到不在联通块内距离集合最近的点，（距离就是我们保留的树的边权），然后把他加到集合里 然后用这个点更新其他点到集合的距离 ```cpp #include #include using namespace...","r":{"minutes":7.32,"words":2197}},["/algorithm/图论/zui-xiao-sheng-cheng-shu.html","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu","/algorithm/图论/zui-xiao-sheng-cheng-shu.md","/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.md"]],
  ["v-1dd6d9a3","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.html",{"t":"ac自动机","y":"a","e":"作用 判断n个串中有几个串是主串的子串 实质：tire+kmp 思路： 先建立tire树，将n个串的tire树建出来 每个点都有一个next数组，表示以这个点为结尾的路径中，前缀等于后缀的最长前缀的尾端点（前缀可以不在这个路径上，前缀是在整个trie树上找） kmp是每次比较i+1和j+1是不是一样，那么转换到tire树里就是比较第i+1层和第j+1层...","r":{"minutes":5.48,"words":1643}},["/algorithm/字符串/ac.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac","/algorithm/字符串/ac.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.md"]],
  ["v-2a37981f","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html",{"t":"kmp","y":"a","e":"概念 时间复杂度：O(n) 基本操作：看b串是不是a串的子串 a串：主串，b串：模式串 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路：$a[i-j+1\\to i]$ 和 $b[1\\to j]$ 已经匹配，然后比较a[i+1]和b[j+1] 如...","r":{"minutes":2.13,"words":639}},["/algorithm/字符串/kmp.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp","/algorithm/字符串/kmp.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.md"]],
  ["v-057f5b88","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar.html",{"t":"manachar算法","y":"a","e":"概念 求一个字符串的最长回文串的长度 时间复杂度O（n） Manachar算法只能处理对称轴是某个字母的回文串（长度为奇数），但是回文串还有一种是对称轴在两个字母中间（长度为偶数），那么我们就得把他转换为对称轴是某个字母的回文串 （转换为长度为奇数的回文串） 转换方式：在所有字符之间和首尾加上没有出现过的字符（如#），然后再在新的字符首尾加上没有出现过...","r":{"minutes":3.65,"words":1096}},["/algorithm/字符串/manachar.html","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar","/algorithm/字符串/manachar.md","/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/manachar.md"]],
  ["v-8e8bac92","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.html",{"t":"并查集","y":"a","e":"作用：合并两个集合，查询某个数的祖宗结点 查找一个集合里的元素的数量 核心：find函数 ```cpp void find(int x){ if(p[x]!=x)p[x]=find[p[x]]; return p[x]; } ``` 如果a和b不是一个集合，那么把a合并到b的集合中，在合并之前先把b的集合加上a的元素个数 ```cpp size[fin...","r":{"minutes":5.9,"words":1771}},["/algorithm/数据结构/bing-cha-ji.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji","/algorithm/数据结构/bing-cha-ji.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.md"]],
  ["v-178a7989","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl.html",{"t":"stl","y":"a","e":"vector vector是一个长度动态变化的函数 vectora 是一个长度动态变化的int类型数组 vector a(n)定义一个长度为n的vector数组 vector a(n,x)定义一个长度为n，所有数都是x的vector数组 vectorb[233] 相当于一个第一维长度233，第二维长度动态变化的int数组 也可以创建一个结构体REC，然...","r":{"minutes":7.16,"words":2149}},["/algorithm/数据结构/stl.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl","/algorithm/数据结构/stl.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stl.md"]],
  ["v-7a1f0214","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html",{"t":"线段树","y":"a","e":"作用：对【l，r】区间进行修改操作，询问【l，r】区间的某种性质（最大值，前缀和等等） 操作： 1.build：将一段区间初始化成线段树 2.modify：修改操作，有两种，一种是修改单点（简单），一种是修改区间（要用到懒标记） 3.query：查询某个区间的操作 1.push up：由子树来更新父结点的信息 2.push down：父结点的修改信息下...","r":{"minutes":4.89,"words":1467}},["/algorithm/数据结构/xian-duan-shu.html","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu","/algorithm/数据结构/xian-duan-shu.md","/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.md"]],
  ["v-9d49b844","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao.html",{"t":"背包","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":18.97,"words":5692}},["/solution/动态规划/bei-bao.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao","/solution/动态规划/bei-bao.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/bei-bao.md"]],
  ["v-0db0ff5f","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp.html",{"t":"dp","y":"a","e":"P1002 [NOIP2002 普及组] 过河卒 题目描述 棋盘上 AA 点有一个过河卒，需要走到目标 BB 点。卒行走的规则：可以向下、或者向右。同时在棋盘上 CC 点有一个对方的马，该马所在的点和所有跳跃一步可达的点称为对方马的控制点。因此称之为“马拦过河卒”。 棋盘用坐标表示，AA 点 (0, 0)(0,0)、BB 点 (n, m)(n,m)，同...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":21.37,"words":6410}},["/solution/动态规划/dp.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp","/solution/动态规划/dp.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/dp.md"]],
  ["v-167acb93","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke.html",{"t":"分扇贝","y":"a","e":"题目 把m个仙贝分给n个朋友，假设手里现在有x个仙贝，分给一个朋友y个仙贝，那么这个朋友对你的好感度就增加y/x，每个朋友可以分也可以不分，如果分的话每个朋友只能分一次，仙贝也可以剩下或不剩下。 求最优送仙贝的策略下，朋友对你的好感度之和最大是多少 思路 设f[i][j]为前i个人送完之后，还剩下j个仙贝的情况下所有人对你的最大好感度和 对于第i个人：...","r":{"minutes":0.95,"words":286}},["/solution/动态规划/niuke.html","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke","/solution/动态规划/niuke.md","/solution/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/niuke.md"]],
  ["v-1b93fb49","/solution/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.html",{"t":"强联通分量","y":"a","e":"概念","r":{"minutes":0.03,"words":8}},["/solution/图论/qiang-lian-tong-fen-liang.html","/solution/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang","/solution/图论/qiang-lian-tong-fen-liang.md","/solution/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.md"]],
  ["v-3318fe32","/solution/%E5%9B%BE%E8%AE%BA/shu.html",{"t":"树","y":"a","e":"CF706D Vasiliy‘s Multiset Author has gone out of the stories about Vasiliy, so here is just a formal task description. You are given qq queries and a multiset AA , initially con...","c":["algorithm"],"g":["图"],"r":{"minutes":9.44,"words":2831}},["/solution/图论/shu.html","/solution/%E5%9B%BE%E8%AE%BA/shu","/solution/图论/shu.md","/solution/%E5%9B%BE%E8%AE%BA/shu.md"]],
  ["v-e635bbc8","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.html",{"t":"最短路+最小生成树","y":"a","e":"畅通工程之最低成本建设问题 某地区经过对城镇交通状况的调查，得到现有城镇间快速道路的统计数据，并提出“畅通工程”的目标：使整个地区任何两个城镇间都可以实现快速交通（但不一定有直接的快速道路相连，只要互相间接通过快速路可达即可）。现得到城镇道路统计表，表中列出了有可能建设成快速路的若干条道路的成本，求畅通工程需要的最低成本。 输入格式: 输入的第一行给出...","c":["algorithm"],"g":["图"],"r":{"minutes":11.45,"words":3436}},["/solution/图论/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.html","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu-+-zui-xiao-sheng-cheng-shu","/solution/图论/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.md","/solution/%E5%9B%BE%E8%AE%BA/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.md"]],
  ["v-59ad23c3","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html",{"t":"kmp","y":"a","e":"剪花布条（kmp） 一块花布条，里面有些图案，另有一块直接可用的小饰条，里面也有一些图案。对于给定的花布条和小饰条，计算一下能从花布条中尽可能剪出几块小饰条来呢？ 输入格式 输入数据为多组数据，读取到 # 字符时结束。每组数据仅有一行，为由空格分开的花布条和小饰条。花布条和小饰条都是用可见 ASCII 字符表示的，不会超过 10001000 个字符。 ...","c":["algorithm"],"g":["字符串"],"r":{"minutes":9.57,"words":2870}},["/solution/字符串/kmp.html","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp","/solution/字符串/kmp.md","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.md"]],
  ["v-07f2a534","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan.html",{"t":"字符串","y":"a","e":"A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛） 柳庭风静人眠昼，昼眠人静风庭柳。香汗薄衫凉，凉衫薄汗香。手红冰碗藕，藕碗冰红手。郎笑藕丝长，长丝藕笑郎。 给出一个序列 ana_nan​，对于 iii，求有几个数 jjj 满足： 111 、i≤ji \\le ji≤j 222 、子串 ai∼ja_{i\\sim j}ai∼j​ 是一个回文串 回...","c":["algorithm"],"g":["字符串"],"r":{"minutes":16.91,"words":5073}},["/solution/字符串/zi-fu-chuan.html","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan","/solution/字符串/zi-fu-chuan.md","/solution/%E5%AD%97%E7%AC%A6%E4%B8%B2/zi-fu-chuan.md"]],
  ["v-267368ef","/solution/%E6%90%9C%E7%B4%A2/bfs.html",{"t":"bfs","y":"a","e":"bfs总结 一般就是求最短距离，思路就是把初始状态加入队列中，写一个while循环，条件是队列不空，每次取队头然后拓展队头。一般需要一个额外的数组来记录每个位置的距离，并需要在刚开始的时候初始化。 例题：走迷宫 给定一个 n×mn×m 的二维整数数组，用来表示一个迷宫，数组中只包含 00 或 11，其中 00 表示可以走的路，11 表示不可通过的墙壁。...","c":["algorithm"],"g":["搜索"],"r":{"minutes":6.93,"words":2078}},["/solution/搜索/bfs.html","/solution/%E6%90%9C%E7%B4%A2/bfs","/solution/搜索/bfs.md","/solution/%E6%90%9C%E7%B4%A2/bfs.md"]],
  ["v-13947aa6","/solution/%E6%90%9C%E7%B4%A2/dfs.html",{"t":"dfs","y":"a","e":"P1331 海战 题目描述 在峰会期间，武装部队得处于高度戒备。警察将监视每一条大街，军队将保卫建筑物，领空将布满了F-2003飞机。此外，巡洋船只和舰队将被派去保护海岸线。不幸的是因为种种原因，国防海军部仅有很少的几位军官能指挥大型海战。因此，他们考虑培养一些新的海军指挥官，他们选择了“海战”游戏来帮助学习。 在这个著名的游戏中，在一个方形的盘上放置...","c":["algorithm"],"g":["搜索"],"r":{"minutes":55.24,"words":16572}},["/solution/搜索/dfs.html","/solution/%E6%90%9C%E7%B4%A2/dfs","/solution/搜索/dfs.md","/solution/%E6%90%9C%E7%B4%A2/dfs.md"]],
  ["v-156bc363","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie.html",{"t":"斐波那契数列","y":"a","e":"7-8 汉诺塔问题 相传在古印度圣庙中，有一种被称为汉诺塔(Hanoi)的游戏。该游戏是在一块铜板装置上，有三根杆(编号A、B、C)，在A杆自下而上、由大到小按顺序放置64个金盘(如图1)。游戏的目标：把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子...","c":["algorithm"],"g":["数学"],"r":{"minutes":5.8,"words":1741}},["/solution/数学/fei-bo-na-qi-shu-lie.html","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie","/solution/数学/fei-bo-na-qi-shu-lie.md","/solution/%E6%95%B0%E5%AD%A6/fei-bo-na-qi-shu-lie.md"]],
  ["v-2a1a8ba6","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi.html",{"t":"矩阵快速幂","y":"a","e":"C - Recursive sequence （矩阵ksm） 原题链接：Problem - 5950 Problem Description Farmer John likes to play mathematics games with his N cows. Recently, they are attracted by recursive seq...","c":["algorithm"],"g":["数学"],"r":{"minutes":2.51,"words":753}},["/solution/数学/ju-zhen-kuai-su-mi.html","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi","/solution/数学/ju-zhen-kuai-su-mi.md","/solution/%E6%95%B0%E5%AD%A6/ju-zhen-kuai-su-mi.md"]],
  ["v-b2dbcbaa","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue.html",{"t":"排列数学","y":"a","e":"CF1422C Bargain 题目描述 Sometimes it is not easy to come to an agreement in a bargain. Right now Sasha and Vova can't come to an agreement: Sasha names a price as high as possible,...","c":["algorithm"],"g":["数学"],"r":{"minutes":13.44,"words":4033}},["/solution/数学/pai-lie-shu-xue.html","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue","/solution/数学/pai-lie-shu-xue.md","/solution/%E6%95%B0%E5%AD%A6/pai-lie-shu-xue.md"]],
  ["v-1d691529","/solution/%E6%9D%82%E8%AE%B0/bi-ji.html",{"t":"笔记","y":"a","e":"2779: 小A与泉水 题目描述 小A遇到了一座神奇的泉水，在泉水中洗涤会大幅增加他的精力。在一次洗涤中，泉水增加力量的数值为当前力量二进制表示中的最低位的1对应的值。 例如： 如果当前力量为9（1001 最低位1对应的值为1），增加的力量为1； 如果当前力量为12（1100 最低位1对应的值为100），增加的力量为4。 小A想要将他的力量变为2的幂次...","c":["algorithm"],"g":["note"],"r":{"minutes":8.47,"words":2541}},["/solution/杂记/bi-ji.html","/solution/%E6%9D%82%E8%AE%B0/bi-ji","/solution/杂记/bi-ji.md","/solution/%E6%9D%82%E8%AE%B0/bi-ji.md"]],
  ["v-5211b96a","/solution/%E7%89%9B%E5%AE%A2/ji-ge-xian.html",{"t":"鸡格线","y":"a","e":"原题链接：https://ac.nowcoder.com/acm/contest/46800/G?&headNav=acm 你有一个长为n的数组a，需要支持以下两种操作： 1.输入l，r，k，对区间[l,r]中所有数字执行a[i]=10 $\\sqrt{a[i]}$ ,round为四舍五入函数 2.输出当前数组所有数字的和。 你需要正确处理m次这样的操作...","r":{"minutes":1.93,"words":579}},["/solution/牛客/ji-ge-xian.html","/solution/%E7%89%9B%E5%AE%A2/ji-ge-xian","/solution/牛客/ji-ge-xian.md","/solution/%E7%89%9B%E5%AE%A2/ji-ge-xian.md"]],
  ["v-35be4ada","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.html",{"t":"并查集","y":"a","e":"排座位pta 布置宴席最微妙的事情，就是给前来参宴的各位宾客安排座位。无论如何，总不能把两个死对头排到同一张宴会桌旁！这个艰巨任务现在就交给你，对任何一对客人，请编写程序告诉主人他们是否能被安排同席。 输入格式： 输入第一行给出3个正整数：N（≤100），即前来参宴的宾客总人数，则这些人从1到N编号；M为已知两两宾客之间的关系数；K为查询的条数。随后M...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":8.19,"words":2456}},["/solution/数据结构/bing-cha-ji.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji","/solution/数据结构/bing-cha-ji.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bing-cha-ji.md"]],
  ["v-440b6636","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/chairmen-tree.html",{"t":"可持久化线段树","y":"a","e":"2 3 4 宝贝的博客 (https://tech.chivas-regal.top) 1 $1$ $\\sum\\limits{i=1}^{n}ai$ 粗文本 ```cpp for () ``` wo this is cpp shi","c":["algorithm"],"g":["数据结构"],"r":{"minutes":0.17,"words":50}},["/solution/数据结构/chairmen-tree.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/chairmen-tree","/solution/数据结构/chairmen-tree.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/chairmen-tree.md"]],
  ["v-e2270190","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/lian-biao.html",{"t":"链表","y":"a","e":"stack（hdu） 题意：有n个栈，第i个栈刚开始只放了i，有m个操作，每次把ai放到bi里，求最后每个栈里元素的个数和元素 模拟肯会超时，那么我们就想用双链表来写 s数组用来存一个数的前面相连的数或者后面的数（因为堆的话一个数只能连两个数） ```cpp struct name{ int pre,next; }s[N]; ``` sta数组用来记录...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":10.14,"words":3043}},["/solution/数据结构/lian-biao.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/lian-biao","/solution/数据结构/lian-biao.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/lian-biao.md"]],
  ["v-017721f5","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/qian-zhui-he-he-cha-fen.html",{"t":"前缀和和差分","y":"a","e":"前缀和（c++） 用于计算已知数组的任意一段区域的和。 例题： 输入一个长度为 n的整数序列。 接下来再输入 m 个询问，每个询问输入一对 l,r。 对于每个询问，输出原序列中从第 l 个数到第 r 个数的和。 注意：输入a数组时下标从1开始，输入的时候就开始算s数组 ```cpp #include using namespace std; const...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":16.11,"words":4834}},["/solution/数据结构/qian-zhui-he-he-cha-fen.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/qian-zhui-he-he-cha-fen","/solution/数据结构/qian-zhui-he-he-cha-fen.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/qian-zhui-he-he-cha-fen.md"]],
  ["v-3a011dfa","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.html",{"t":"RMQ","y":"a","e":"RMQ（区间最值问题） 作用：找到一段区间的最值(不支持修改 方法：用st表 ST表： f[i][j]表示以i为起点长度为2的j次方的区间的最值 右端点就是i+2^j-1 更新方式就是把这个区间分成两半，取这两半的最值 左边区间就是[i , i+2^(j-1)-1]，右边区间就是[i+2^(j-1) , i+2^j-1 ] 所以写成转移方程就是f[i]...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":9.25,"words":2774}},["/solution/数据结构/RMQ.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ","/solution/数据结构/RMQ.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.md"]],
  ["v-14b99028","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu---xian-duan-shu.html",{"t":"树状数组-线段树","y":"a","e":"P5200 [USACO19JAN]Sleepy Cow Sorting G 题目描述 Farmer John正在尝试将他的 NN 头奶牛（1\\le N\\le 10^51≤N≤105），方便起见编号为 1\\ldots N1…N，在她们前往牧草地吃早餐之前排好顺序。 当前，这些奶牛以 p1,p2,p3,\\ldots,pNp1​,p2​,p3​,…,pN​...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":23.35,"words":7006}},["/solution/数据结构/shu-zhuang-shu-zu---xian-duan-shu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu---xian-duan-shu","/solution/数据结构/shu-zhuang-shu-zu---xian-duan-shu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu---xian-duan-shu.md"]],
  ["v-279cebf0","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html",{"t":"线段树","y":"a","e":"E - Replace Digits（线段树） Problem Statement E - Replace Digits You have a string SS of length NN. Initially, all characters in SS are 1s. You will perform queries QQ times. In the...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":2.46,"words":738}},["/solution/数据结构/xian-duan-shu.html","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu","/solution/数据结构/xian-duan-shu.md","/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.md"]],
  ["v-11413ec7","/solution/%E6%AF%94%E8%B5%9B/abc.html",{"t":"B - Grid Rotations","y":"a","e":"原题链接：https://atcoder.jp/contests/arc153/tasks/arc153_b 题意：有n*m的矩阵，每个方格里有一个小写英文字母，有q个操作，每次询问给你两个值ai，bi，让你执行如下操作： 在以（1,1）为左上角，（ai，bi）为右下角的矩形内将字母整体旋转180度 在以（1,bi+1）为左上角，（ai，m）为右下角的...","r":{"minutes":3.03,"words":908}},["/solution/比赛/abc.html","/solution/%E6%AF%94%E8%B5%9B/abc","/solution/比赛/abc.md","/solution/%E6%AF%94%E8%B5%9B/abc.md"]],
  ["v-27efaafc","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc.html",{"t":"ccpc-icpc","y":"a","e":"A - I Count Two Three 题意：找出一个大于等于n的，能写成2^a3^b5^c*7^d的数。（a，b，c，d均大于等于0） 思路：打表+查找。 打表的时候直接a，b，c，d枚举出来4重循环，然后再剪枝，因为2^32&gt;1e9，所以我们在枚举的时候a，b，c，d都枚举到32就可以了，剪枝是判断一下当我们枚举的乘在一起大于1e9的时候...","c":["algorithm"],"g":["ACM"],"r":{"minutes":8.49,"words":2547}},["/solution/比赛/ccpc-icpc.html","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc","/solution/比赛/ccpc-icpc.md","/solution/%E6%AF%94%E8%B5%9B/ccpc-icpc.md"]],
  ["v-348f8f46","/solution/%E6%AF%94%E8%B5%9B/cf.html",{"t":"cf","y":"a","e":"CF706D Vasiliy‘s Multiset Author has gone out of the stories about Vasiliy, so here is just a formal task description. You are given qq queries and a multiset AA , initially con...","c":["algorithm"],"g":["ACM"],"r":{"minutes":21.23,"words":6370}},["/solution/比赛/cf.html","/solution/%E6%AF%94%E8%B5%9B/cf","/solution/比赛/cf.md","/solution/%E6%AF%94%E8%B5%9B/cf.md"]],
  ["v-607fb266","/solution/%E6%AF%94%E8%B5%9B/%E7%89%9B%E5%AE%A2.html",{"t":"牛客","y":"a","r":{"minutes":0.01,"words":3}},["/solution/比赛/牛客.html","/solution/%E6%AF%94%E8%B5%9B/%E7%89%9B%E5%AE%A2","/solution/比赛/牛客.md","/solution/%E6%AF%94%E8%B5%9B/%E7%89%9B%E5%AE%A2.md"]],
  ["v-7c8a5a6c","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu.html",{"t":"结构体排序","y":"a","e":"阅览室pta（详解） 天梯图书阅览室请你编写一个简单的图书借阅统计程序。当读者借书时，管理员输入书号并按下S键，程序开始计时；当读者还书时，管理员输入书号并按下E键，程序结束计时。书号为不超过1000的正整数。当管理员将0作为书号输入时，表示一天工作结束，你的程序应输出当天的读者借书次数和平均阅读时间。 注意：由于线路偶尔会有故障，可能出现不完整的纪录...","c":["algorithm"],"g":["语言基础"],"r":{"minutes":10.02,"words":3006}},["/solution/语法技巧/jie-gou-ti-pai-xu.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu","/solution/语法技巧/jie-gou-ti-pai-xu.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/jie-gou-ti-pai-xu.md"]],
  ["v-187be613","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map.html",{"t":"map","y":"a","e":"帅到没朋友 当芸芸众生忙着在朋友圈中发照片的时候，总有一些人因为太帅而没有朋友。本题就要求你找出那些帅到没有朋友的人。 输入格式： 输入第一行给出一个正整数N（≤100），是已知朋友圈的个数；随后N行，每行首先给出一个正整数K（≤1000），为朋友圈中的人数，然后列出一个朋友圈内的所有人——为方便起见，每人对应一个ID号，为5位数字（从00000到99...","c":["algorithm"],"g":["STL"],"r":{"minutes":2.52,"words":757}},["/solution/语法技巧/map.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map","/solution/语法技巧/map.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/map.md"]],
  ["v-6e05f6a4","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl.html",{"t":"stl","y":"a","e":"集合相似度 给定两个整数集合，它们的相似度定义为：Nc​/Nt​×100%。其中Nc​是两个集合都有的不相等整数的个数，Nt​是两个集合一共有的不相等整数的个数。你的任务就是计算任意一对给定集合的相似度。 输入格式： 输入第一行给出一个正整数N（≤50），是集合的个数。随后N行，每行对应一个集合。每个集合首先给出一个正整数M（≤104），是集合中元素的...","c":["algorithm"],"g":["STL"],"r":{"minutes":28.82,"words":8647}},["/solution/语法技巧/stl.html","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl","/solution/语法技巧/stl.md","/solution/%E8%AF%AD%E6%B3%95%E6%8A%80%E5%B7%A7/stl.md"]],
  ["v-cab1018e","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen.html",{"t":"二分","y":"a","e":"​ 题目描述 一年一度的“跳石头”比赛又要开始了！ 这项比赛将在一条笔直的河道中进行，河道中分布着一些巨大岩石。组委会已经选择好了两块岩石作为比赛起点和终点。在起点和终点之间，有 NN 块岩石（不含起点和终点的岩石）。在比赛过程中，选手们将从起点出发，每一步跳向相邻的岩石，直至到达终点。 为了提高比赛难度，组委会计划移走一些岩石，使得选手们在比赛过程中...","c":["algorithm"],"g":["技巧"],"r":{"minutes":11.2,"words":3361}},["/solution/算法技巧/er-fen.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen","/solution/算法技巧/er-fen.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/er-fen.md"]],
  ["v-0436993c","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao.html",{"t":"构造","y":"a","e":"C - Submask You are given a non-negative integer NN. Print all non-negative integers xx that satisfy the following condition in ascending order. The set of the digit positions c...","c":["algorithm"],"g":["技巧"],"r":{"minutes":8.82,"words":2645}},["/solution/算法技巧/gou-zao.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao","/solution/算法技巧/gou-zao.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/gou-zao.md"]],
  ["v-5f8a0336","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu.html",{"t":"排序","y":"a","e":"1416: 大小关系（拓扑排序） 当我们知道一组大小关系之后，可判断所有关系是否都能成立，即关系间没有矛盾。 例如：A&lt;B, A&lt;C, B&lt;C  通过这组关系我们可以得到A&lt;B&lt;C ，所有关系都成立，没有矛盾。 若 A&lt;B, B&lt;C, C&lt;A  通过前两个关系我们得到 A&lt;B&lt;C ，这个关系与...","c":["algorithm"],"g":["技巧"],"r":{"minutes":10.81,"words":3244}},["/solution/算法技巧/pai-xu.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu","/solution/算法技巧/pai-xu.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/pai-xu.md"]],
  ["v-06000b64","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei.html",{"t":"思维","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["技巧"],"r":{"minutes":50.62,"words":15187}},["/solution/算法技巧/si-wei.html","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei","/solution/算法技巧/si-wei.md","/solution/%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7/si-wei.md"]],
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
  ["v-300d34ce","/tag/%E5%9B%BE/",{"t":"图 标签","y":"p"},["/tag/图/","/tag/%E5%9B%BE/index.html"]],
  ["v-93cb9d6e","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/",{"t":"字符串 标签","y":"p"},["/tag/字符串/","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/index.html"]],
  ["v-3b0e2518","/tag/%E6%90%9C%E7%B4%A2/",{"t":"搜索 标签","y":"p"},["/tag/搜索/","/tag/%E6%90%9C%E7%B4%A2/index.html"]],
  ["v-9904a07c","/tag/%E6%95%B0%E5%AD%A6/",{"t":"数学 标签","y":"p"},["/tag/数学/","/tag/%E6%95%B0%E5%AD%A6/index.html"]],
  ["v-28e08cef","/tag/note/",{"t":"note 标签","y":"p"},["/tag/note/index.html"]],
  ["v-13770b26","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{"t":"数据结构 标签","y":"p"},["/tag/数据结构/","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html"]],
  ["v-b316775c","/tag/acm/",{"t":"ACM 标签","y":"p"},["/tag/acm/index.html"]],
  ["v-b7e505f4","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/",{"t":"语言基础 标签","y":"p"},["/tag/语言基础/","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-b3059a9c","/tag/stl/",{"t":"STL 标签","y":"p"},["/tag/stl/index.html"]],
  ["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{"t":"技巧 标签","y":"p"},["/tag/技巧/","/tag/%E6%8A%80%E5%B7%A7/index.html"]],
]
