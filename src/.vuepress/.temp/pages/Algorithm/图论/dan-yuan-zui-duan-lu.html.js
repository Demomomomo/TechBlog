export const data = JSON.parse("{\"key\":\"v-23220696\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/dan-yuan-zui-duan-lu.html\",\"title\":\"单源最短路\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"单源最短路\",\"description\":\"从一个点到其他所有点的最短路 （n是点数，m是边数） 所有边权都是正数 朴素版dijkstra算法（稠密图 时间复杂度O（n*n） g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小 然后进行dijk算法： d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0 进行n次循环，每次找到一个没有被确定的最短距离...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/dan-yuan-zui-duan-lu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"单源最短路\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"从一个点到其他所有点的最短路 （n是点数，m是边数） 所有边权都是正数 朴素版dijkstra算法（稠密图 时间复杂度O（n*n） g[i][j]表示第i个点到第j个点的最短边，先初始化g数组为极大值，每次输入取最小 然后进行dijk算法： d[i]表示i点到1的最小距离，初始化为极大值，先设d[1]=0 进行n次循环，每次找到一个没有被确定的最短距离...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"所有边权都是正数\",\"slug\":\"所有边权都是正数\",\"link\":\"#所有边权都是正数\",\"children\":[{\"level\":3,\"title\":\"朴素版dijkstra算法（稠密图\",\"slug\":\"朴素版dijkstra算法-稠密图\",\"link\":\"#朴素版dijkstra算法-稠密图\",\"children\":[]},{\"level\":3,\"title\":\"堆优化版dijkstra算法（稀疏图\",\"slug\":\"堆优化版dijkstra算法-稀疏图\",\"link\":\"#堆优化版dijkstra算法-稀疏图\",\"children\":[]},{\"level\":3,\"title\":\"例题：昂贵的聘礼\",\"slug\":\"例题-昂贵的聘礼\",\"link\":\"#例题-昂贵的聘礼\",\"children\":[]}]},{\"level\":2,\"title\":\"存在负权边\",\"slug\":\"存在负权边\",\"link\":\"#存在负权边\",\"children\":[{\"level\":3,\"title\":\"bellman-ford算法（有边数限制可用\",\"slug\":\"bellman-ford算法-有边数限制可用\",\"link\":\"#bellman-ford算法-有边数限制可用\",\"children\":[]},{\"level\":3,\"title\":\"spfa算法(可判断负环)\",\"slug\":\"spfa算法-可判断负环\",\"link\":\"#spfa算法-可判断负环\",\"children\":[]}]},{\"level\":2,\"title\":\"单源最短路的综合应用\",\"slug\":\"单源最短路的综合应用\",\"link\":\"#单源最短路的综合应用\",\"children\":[{\"level\":3,\"title\":\"与dfs结合\",\"slug\":\"与dfs结合\",\"link\":\"#与dfs结合\",\"children\":[]},{\"level\":3,\"title\":\"与二分结合\",\"slug\":\"与二分结合\",\"link\":\"#与二分结合\",\"children\":[]}]}],\"readingTime\":{\"minutes\":10.65,\"words\":3195},\"filePathRelative\":\"algorithm/图论/dan-yuan-zui-duan-lu.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
