export const pagesRoutes = [
  ["v-8daa1a0e","/",{"t":"Demo Blog","i":"home","y":"h","r":{"minutes":0.6,"words":181}},["/index.html","/README.md"]],
  ["v-5ad09d9c","/posts/acm/RMQ.html",{"t":"RMQ","y":"a","e":"RMQ（区间最值问题） 作用：找到一段区间的最值(不支持修改 方法：用st表 ST表： f[i][j]表示以i为起点长度为2的j次方的区间的最值 右端点就是i+2^j-1 更新方式就是把这个区间分成两半，取这两半的最值 左边区间就是[i , i+2^(j-1)-1]，右边区间就是[i+2^(j-1) , i+2^j-1 ] 所以写成转移方程就是f[i]...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":9.25,"words":2774}},["/posts/acm/RMQ","/posts/acm/RMQ.md"]],
  ["v-f2656fae","/posts/acm/bei-bao.html",{"t":"背包","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":18.9,"words":5669}},["/posts/acm/bei-bao","/posts/acm/bei-bao.md"]],
  ["v-3d63fa03","/posts/acm/bfs.html",{"t":"bfs","y":"a","e":"bfs总结 一般就是求最短距离，思路就是把初始状态加入队列中，写一个while循环，条件是队列不空，每次取队头然后拓展队头。一般需要一个额外的数组来记录每个位置的距离，并需要在刚开始的时候初始化。 例题：走迷宫 给定一个 n×mn×m 的二维整数数组，用来表示一个迷宫，数组中只包含 00 或 11，其中 00 表示可以走的路，11 表示不可通过的墙壁。...","c":["algorithm"],"g":["搜索"],"r":{"minutes":6.93,"words":2078}},["/posts/acm/bfs","/posts/acm/bfs.md"]],
  ["v-2d56c1ad","/posts/acm/bi-ji.html",{"t":"笔记","y":"a","e":"2779: 小A与泉水 题目描述 小A遇到了一座神奇的泉水，在泉水中洗涤会大幅增加他的精力。在一次洗涤中，泉水增加力量的数值为当前力量二进制表示中的最低位的1对应的值。 例如： 如果当前力量为9（1001 最低位1对应的值为1），增加的力量为1； 如果当前力量为12（1100 最低位1对应的值为100），增加的力量为4。 小A想要将他的力量变为2的幂次...","c":["algorithm"],"g":["note"],"r":{"minutes":8.47,"words":2541}},["/posts/acm/bi-ji","/posts/acm/bi-ji.md"]],
  ["v-e560cf96","/posts/acm/bing-cha-ji.html",{"t":"并查集","y":"a","e":"排座位pta 布置宴席最微妙的事情，就是给前来参宴的各位宾客安排座位。无论如何，总不能把两个死对头排到同一张宴会桌旁！这个艰巨任务现在就交给你，对任何一对客人，请编写程序告诉主人他们是否能被安排同席。 输入格式： 输入第一行给出3个正整数：N（≤100），即前来参宴的宾客总人数，则这些人从1到N编号；M为已知两两宾客之间的关系数；K为查询的条数。随后M...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":8.19,"words":2456}},["/posts/acm/bing-cha-ji","/posts/acm/bing-cha-ji.md"]],
  ["v-72e44f2b","/posts/acm/ccpc-icpc.html",{"t":"ccpc-icpc","y":"a","e":"A - I Count Two Three 题意：找出一个大于等于n的，能写成2^a3^b5^c*7^d的数。（a，b，c，d均大于等于0） 思路：打表+查找。 打表的时候直接a，b，c，d枚举出来4重循环，然后再剪枝，因为2^32&gt;1e9，所以我们在枚举的时候a，b，c，d都枚举到32就可以了，剪枝是判断一下当我们枚举的乘在一起大于1e9的时候...","c":["algorithm"],"g":["ACM"],"r":{"minutes":8.49,"words":2547}},["/posts/acm/ccpc-icpc","/posts/acm/ccpc-icpc.md"]],
  ["v-332f66bd","/posts/acm/cf.html",{"t":"cf","y":"a","e":"CF706D Vasiliy‘s Multiset Author has gone out of the stories about Vasiliy, so here is just a formal task description. You are given qq queries and a multiset AA , initially con...","c":["algorithm"],"g":["ACM"],"r":{"minutes":21.23,"words":6370}},["/posts/acm/cf","/posts/acm/cf.md"]],
  ["v-0d2653c1","/posts/acm/dfs.html",{"t":"dfs","y":"a","e":"P1331 海战 题目描述 在峰会期间，武装部队得处于高度戒备。警察将监视每一条大街，军队将保卫建筑物，领空将布满了F-2003飞机。此外，巡洋船只和舰队将被派去保护海岸线。不幸的是因为种种原因，国防海军部仅有很少的几位军官能指挥大型海战。因此，他们考虑培养一些新的海军指挥官，他们选择了“海战”游戏来帮助学习。 在这个著名的游戏中，在一个方形的盘上放置...","c":["algorithm"],"g":["搜索"],"r":{"minutes":55.24,"words":16572}},["/posts/acm/dfs","/posts/acm/dfs.md"]],
  ["v-79261834","/posts/acm/dp.html",{"t":"dp","y":"a","e":"P1002 [NOIP2002 普及组] 过河卒 题目描述 棋盘上 AA 点有一个过河卒，需要走到目标 BB 点。卒行走的规则：可以向下、或者向右。同时在棋盘上 CC 点有一个对方的马，该马所在的点和所有跳跃一步可达的点称为对方马的控制点。因此称之为“马拦过河卒”。 棋盘用坐标表示，AA 点 (0, 0)(0,0)、BB 点 (n, m)(n,m)，同...","c":["algorithm"],"g":["动态规划"],"r":{"minutes":21.37,"words":6410}},["/posts/acm/dp","/posts/acm/dp.md"]],
  ["v-6cb33e9e","/posts/acm/er-fen.html",{"t":"二分","y":"a","e":"​ 题目描述 一年一度的“跳石头”比赛又要开始了！ 这项比赛将在一条笔直的河道中进行，河道中分布着一些巨大岩石。组委会已经选择好了两块岩石作为比赛起点和终点。在起点和终点之间，有 NN 块岩石（不含起点和终点的岩石）。在比赛过程中，选手们将从起点出发，每一步跳向相邻的岩石，直至到达终点。 为了提高比赛难度，组委会计划移走一些岩石，使得选手们在比赛过程中...","c":["algorithm"],"g":["技巧"],"r":{"minutes":11.2,"words":3361}},["/posts/acm/er-fen","/posts/acm/er-fen.md"]],
  ["v-4777a946","/posts/acm/fei-bo-na-qi-shu-lie.html",{"t":"斐波那契数列","y":"a","e":"7-8 汉诺塔问题 相传在古印度圣庙中，有一种被称为汉诺塔(Hanoi)的游戏。该游戏是在一块铜板装置上，有三根杆(编号A、B、C)，在A杆自下而上、由大到小按顺序放置64个金盘(如图1)。游戏的目标：把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子...","c":["algorithm"],"g":["数学"],"r":{"minutes":5.8,"words":1741}},["/posts/acm/fei-bo-na-qi-shu-lie","/posts/acm/fei-bo-na-qi-shu-lie.md"]],
  ["v-a27bfe2c","/posts/acm/gou-zao.html",{"t":"构造","y":"a","e":"C - Submask You are given a non-negative integer NN. Print all non-negative integers xx that satisfy the following condition in ascending order. The set of the digit positions c...","c":["algorithm"],"g":["技巧"],"r":{"minutes":8.82,"words":2645}},["/posts/acm/gou-zao","/posts/acm/gou-zao.md"]],
  ["v-43e5808f","/posts/acm/jie-gou-ti-pai-xu.html",{"t":"结构体排序","y":"a","e":"阅览室pta（详解） 天梯图书阅览室请你编写一个简单的图书借阅统计程序。当读者借书时，管理员输入书号并按下S键，程序开始计时；当读者还书时，管理员输入书号并按下E键，程序结束计时。书号为不超过1000的正整数。当管理员将0作为书号输入时，表示一天工作结束，你的程序应输出当天的读者借书次数和平均阅读时间。 注意：由于线路偶尔会有故障，可能出现不完整的纪录...","c":["algorithm"],"g":["语言基础"],"r":{"minutes":10.02,"words":3006}},["/posts/acm/jie-gou-ti-pai-xu","/posts/acm/jie-gou-ti-pai-xu.md"]],
  ["v-5200aa20","/posts/acm/ju-zhen-kuai-su-mi.html",{"t":"矩阵快速幂","y":"a","e":"C - Recursive sequence （矩阵ksm） 原题链接：Problem - 5950 Problem Description Farmer John likes to play mathematics games with his N cows. Recently, they are attracted by recursive seq...","c":["algorithm"],"g":["数学"],"r":{"minutes":2.51,"words":753}},["/posts/acm/ju-zhen-kuai-su-mi","/posts/acm/ju-zhen-kuai-su-mi.md"]],
  ["v-517ba2c4","/posts/acm/kmp.html",{"t":"kmp","y":"a","e":"剪花布条（kmp） 一块花布条，里面有些图案，另有一块直接可用的小饰条，里面也有一些图案。对于给定的花布条和小饰条，计算一下能从花布条中尽可能剪出几块小饰条来呢？ 输入格式 输入数据为多组数据，读取到 # 字符时结束。每组数据仅有一行，为由空格分开的花布条和小饰条。花布条和小饰条都是用可见 ASCII 字符表示的，不会超过 10001000 个字符。 ...","c":["algorithm"],"g":["字符串"],"r":{"minutes":9.57,"words":2870}},["/posts/acm/kmp","/posts/acm/kmp.md"]],
  ["v-49923d5a","/posts/acm/lian-biao.html",{"t":"链表","y":"a","e":"stack（hdu） 题意：有n个栈，第i个栈刚开始只放了i，有m个操作，每次把ai放到bi里，求最后每个栈里元素的个数和元素 模拟肯会超时，那么我们就想用双链表来写 s数组用来存一个数的前面相连的数或者后面的数（因为堆的话一个数只能连两个数） sta数组用来记录栈顶和栈底元素 f数组来记录这个数输出过没有，num来记录每个栈的元素的个数 刚开始初始化...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":10.14,"words":3043}},["/posts/acm/lian-biao","/posts/acm/lian-biao.md"]],
  ["v-b3199514","/posts/acm/map.html",{"t":"map","y":"a","e":"帅到没朋友 当芸芸众生忙着在朋友圈中发照片的时候，总有一些人因为太帅而没有朋友。本题就要求你找出那些帅到没有朋友的人。 输入格式： 输入第一行给出一个正整数N（≤100），是已知朋友圈的个数；随后N行，每行首先给出一个正整数K（≤1000），为朋友圈中的人数，然后列出一个朋友圈内的所有人——为方便起见，每人对应一个ID号，为5位数字（从00000到99...","c":["algorithm"],"g":["STL"],"r":{"minutes":2.52,"words":757}},["/posts/acm/map","/posts/acm/map.md"]],
  ["v-7279c41e","/posts/acm/pai-lie-shu-xue.html",{"t":"排列数学","y":"a","e":"CF1422C Bargain 题目描述 Sometimes it is not easy to come to an agreement in a bargain. Right now Sasha and Vova can't come to an agreement: Sasha names a price as high as possible,...","c":["algorithm"],"g":["数学"],"r":{"minutes":13.44,"words":4033}},["/posts/acm/pai-lie-shu-xue","/posts/acm/pai-lie-shu-xue.md"]],
  ["v-e2ee36a4","/posts/acm/pai-xu.html",{"t":"排序","y":"a","e":"1416: 大小关系（拓扑排序） 当我们知道一组大小关系之后，可判断所有关系是否都能成立，即关系间没有矛盾。 例如：A&lt;B, A&lt;C, B&lt;C  通过这组关系我们可以得到A&lt;B&lt;C ，所有关系都成立，没有矛盾。 若 A&lt;B, B&lt;C, C&lt;A  通过前两个关系我们得到 A&lt;B&lt;C ，这个关系与...","c":["algorithm"],"g":["技巧"],"r":{"minutes":10.81,"words":3244}},["/posts/acm/pai-xu","/posts/acm/pai-xu.md"]],
  ["v-7f5c7c97","/posts/acm/qian-zhui-he-he-cha-fen.html",{"t":"前缀和和差分","y":"a","e":"前缀和（c++） 用于计算已知数组的任意一段区域的和。 例题： 输入一个长度为 n的整数序列。 接下来再输入 m 个询问，每个询问输入一对 l,r。 对于每个询问，输出原序列中从第 l 个数到第 r 个数的和。 注意：输入a数组时下标从1开始，输入的时候就开始算s数组 ```cpp #include using namespace std; const...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":16.11,"words":4834}},["/posts/acm/qian-zhui-he-he-cha-fen","/posts/acm/qian-zhui-he-he-cha-fen.md"]],
  ["v-5020ef6c","/posts/acm/shu-zhuang-shu-zu---xian-duan-shu.html",{"t":"树状数组-线段树","y":"a","e":"P5200 [USACO19JAN]Sleepy Cow Sorting G 题目描述 Farmer John正在尝试将他的 NN 头奶牛（1\\le N\\le 10^51≤N≤105），方便起见编号为 1\\ldots N1…N，在她们前往牧草地吃早餐之前排好顺序。 当前，这些奶牛以 p1,p2,p3,\\ldots,pNp1​,p2​,p3​,…,pN​...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":23.35,"words":7006}},["/posts/acm/shu-zhuang-shu-zu---xian-duan-shu","/posts/acm/shu-zhuang-shu-zu---xian-duan-shu.md"]],
  ["v-dee3c6dc","/posts/acm/shu.html",{"t":"树","y":"a","e":"CF706D Vasiliy‘s Multiset Author has gone out of the stories about Vasiliy, so here is just a formal task description. You are given qq queries and a multiset AA , initially con...","c":["algorithm"],"g":["图"],"r":{"minutes":9.44,"words":2831}},["/posts/acm/shu","/posts/acm/shu.md"]],
  ["v-34feecdc","/posts/acm/si-wei.html",{"t":"思维","y":"a","e":"1432背包again Gy最近学习了01背包问题，无聊的他又想到了一个新的问题，给定n个物品的价值，和01背包一样，每个物品只能选1次或0次，求最小不能被得到的价值。 输入 第一行一个正整数T(T &lt;= 100)，表示有T组数据。 每组数据输入格式如下： 第一行为一个正整数N(N&lt;=100)，表示物品个数。 第二行N个正整数，表示每个物品...","c":["algorithm"],"g":["技巧"],"r":{"minutes":50.62,"words":15187}},["/posts/acm/si-wei","/posts/acm/si-wei.md"]],
  ["v-080573f2","/posts/acm/stl.html",{"t":"stl","y":"a","e":"集合相似度 给定两个整数集合，它们的相似度定义为：Nc​/Nt​×100%。其中Nc​是两个集合都有的不相等整数的个数，Nt​是两个集合一共有的不相等整数的个数。你的任务就是计算任意一对给定集合的相似度。 输入格式： 输入第一行给出一个正整数N（≤50），是集合的个数。随后N行，每行对应一个集合。每个集合首先给出一个正整数M（≤104），是集合中元素的...","c":["algorithm"],"g":["STL"],"r":{"minutes":28.82,"words":8647}},["/posts/acm/stl","/posts/acm/stl.md"]],
  ["v-7f12c912","/posts/acm/xian-duan-shu.html",{"t":"线段树","y":"a","e":"E - Replace Digits（线段树） Problem Statement E - Replace Digits You have a string SS of length NN. Initially, all characters in SS are 1s. You will perform queries QQ times. In the...","c":["algorithm"],"g":["数据结构"],"r":{"minutes":2.46,"words":738}},["/posts/acm/xian-duan-shu","/posts/acm/xian-duan-shu.md"]],
  ["v-4dd2d996","/posts/acm/zi-fu-chuan.html",{"t":"字符串","y":"a","e":"A-花非花 第十八届西南科技大学ACM程序设计竞赛（同步赛） 柳庭风静人眠昼，昼眠人静风庭柳。香汗薄衫凉，凉衫薄汗香。手红冰碗藕，藕碗冰红手。郎笑藕丝长，长丝藕笑郎。 给出一个序列 ana_nan​，对于 iii，求有几个数 jjj 满足： 111 、i≤ji \\le ji≤j 222 、子串 ai∼ja_{i\\sim j}ai∼j​ 是一个回文串 回...","c":["algorithm"],"g":["字符串"],"r":{"minutes":16.91,"words":5073}},["/posts/acm/zi-fu-chuan","/posts/acm/zi-fu-chuan.md"]],
  ["v-49e74e91","/posts/acm/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.html",{"t":"最短路+最小生成树","y":"a","e":"畅通工程之最低成本建设问题 某地区经过对城镇交通状况的调查，得到现有城镇间快速道路的统计数据，并提出“畅通工程”的目标：使整个地区任何两个城镇间都可以实现快速交通（但不一定有直接的快速道路相连，只要互相间接通过快速路可达即可）。现得到城镇道路统计表，表中列出了有可能建设成快速路的若干条道路的成本，求畅通工程需要的最低成本。 输入格式: 输入的第一行给出...","c":["algorithm"],"g":["图"],"r":{"minutes":11.45,"words":3436}},["/posts/acm/zui-duan-lu-+-zui-xiao-sheng-cheng-shu","/posts/acm/zui-duan-lu-+-zui-xiao-sheng-cheng-shu.md"]],
  ["v-3706649a","/404.html",{"t":"","y":"p"},["/404"]],
  ["v-5bc93818","/category/",{"t":"分类","y":"p"},["/category/index.html"]],
  ["v-744d024e","/tag/",{"t":"标签","y":"p"},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"t":"文章","y":"p"},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"t":"加密","y":"p"},["/encrypted/index.html"]],
  ["v-d804e652","/slide/",{"t":"幻灯片","y":"p"},["/slide/index.html"]],
  ["v-154dc4c4","/star/",{"t":"收藏","y":"p"},["/star/index.html"]],
  ["v-01560935","/timeline/",{"t":"时间轴","y":"p"},["/timeline/index.html"]],
  ["v-dc8c5890","/category/algorithm/",{"t":"algorithm 分类","y":"p"},["/category/algorithm/index.html"]],
  ["v-13770b26","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{"t":"数据结构 标签","y":"p"},["/tag/数据结构/","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html"]],
  ["v-2bb96006","/tag/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/",{"t":"动态规划 标签","y":"p"},["/tag/动态规划/","/tag/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/index.html"]],
  ["v-3b0e2518","/tag/%E6%90%9C%E7%B4%A2/",{"t":"搜索 标签","y":"p"},["/tag/搜索/","/tag/%E6%90%9C%E7%B4%A2/index.html"]],
  ["v-28e08cef","/tag/note/",{"t":"note 标签","y":"p"},["/tag/note/index.html"]],
  ["v-b316775c","/tag/acm/",{"t":"ACM 标签","y":"p"},["/tag/acm/index.html"]],
  ["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{"t":"技巧 标签","y":"p"},["/tag/技巧/","/tag/%E6%8A%80%E5%B7%A7/index.html"]],
  ["v-9904a07c","/tag/%E6%95%B0%E5%AD%A6/",{"t":"数学 标签","y":"p"},["/tag/数学/","/tag/%E6%95%B0%E5%AD%A6/index.html"]],
  ["v-b7e505f4","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/",{"t":"语言基础 标签","y":"p"},["/tag/语言基础/","/tag/%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-93cb9d6e","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/",{"t":"字符串 标签","y":"p"},["/tag/字符串/","/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2/index.html"]],
  ["v-b3059a9c","/tag/stl/",{"t":"STL 标签","y":"p"},["/tag/stl/index.html"]],
  ["v-300d34ce","/tag/%E5%9B%BE/",{"t":"图 标签","y":"p"},["/tag/图/","/tag/%E5%9B%BE/index.html"]],
]
