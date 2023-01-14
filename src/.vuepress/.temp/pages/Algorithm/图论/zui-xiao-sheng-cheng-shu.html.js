export const data = JSON.parse("{\"key\":\"v-a8267624\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.html\",\"title\":\"最小生成树\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"最小生成树\",\"description\":\"概念 最小生成树是由n个点，n-1条边组成的权值最小的树的结构（边权正负都可以） Prim求最小生成树 时间复杂度O（n*n）（稠密图） 循环n次，每次找到不在联通块内距离集合最近的点，（距离就是我们保留的树的边权），然后把他加到集合里 然后用这个点更新其他点到集合的距离 ```cpp #include #include using namespace...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/zui-xiao-sheng-cheng-shu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"最小生成树\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 最小生成树是由n个点，n-1条边组成的权值最小的树的结构（边权正负都可以） Prim求最小生成树 时间复杂度O（n*n）（稠密图） 循环n次，每次找到不在联通块内距离集合最近的点，（距离就是我们保留的树的边权），然后把他加到集合里 然后用这个点更新其他点到集合的距离 ```cpp #include #include using namespace...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"Prim求最小生成树\",\"slug\":\"prim求最小生成树\",\"link\":\"#prim求最小生成树\",\"children\":[]},{\"level\":2,\"title\":\"Kruskal求最小生成树\",\"slug\":\"kruskal求最小生成树\",\"link\":\"#kruskal求最小生成树\",\"children\":[]},{\"level\":2,\"title\":\"例题1：新的开始\",\"slug\":\"例题1-新的开始\",\"link\":\"#例题1-新的开始\",\"children\":[]},{\"level\":2,\"title\":\"次小生成树\",\"slug\":\"次小生成树\",\"link\":\"#次小生成树\",\"children\":[]}],\"readingTime\":{\"minutes\":3.38,\"words\":1014},\"filePathRelative\":\"algorithm/图论/zui-xiao-sheng-cheng-shu.md\"}")

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
