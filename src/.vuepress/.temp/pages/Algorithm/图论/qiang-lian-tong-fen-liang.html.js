export const data = JSON.parse("{\"key\":\"v-b34b0726\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.html\",\"title\":\"强联通分量\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"强联通分量\",\"description\":\"概念 在有向图中选取一个点集S，对于点集S中的任意两个点u，v，u可以到达v，v也可以到达u，则称这个点集S是强连通的 如果一个强连通点集S中不能再加入任何点使他仍然强联通，则S是强连通分量 强连通分量其实就是两两点之间能相互可达的最大点集 对无向图求强连通分量 只要相互联通的点都属于一个强连通分量 方法：那么我们就从1~n遍历没有走过的点，从一个点出...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/qiang-lian-tong-fen-liang.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"强联通分量\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 在有向图中选取一个点集S，对于点集S中的任意两个点u，v，u可以到达v，v也可以到达u，则称这个点集S是强连通的 如果一个强连通点集S中不能再加入任何点使他仍然强联通，则S是强连通分量 强连通分量其实就是两两点之间能相互可达的最大点集 对无向图求强连通分量 只要相互联通的点都属于一个强连通分量 方法：那么我们就从1~n遍历没有走过的点，从一个点出...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"对无向图求强连通分量\",\"slug\":\"对无向图求强连通分量\",\"link\":\"#对无向图求强连通分量\",\"children\":[]},{\"level\":2,\"title\":\"Kosaraju求有向图的强联通分量\",\"slug\":\"kosaraju求有向图的强联通分量\",\"link\":\"#kosaraju求有向图的强联通分量\",\"children\":[]},{\"level\":2,\"title\":\"例题1：求从每个点开始，能到达的所有点中的最大点权\",\"slug\":\"例题1-求从每个点开始-能到达的所有点中的最大点权\",\"link\":\"#例题1-求从每个点开始-能到达的所有点中的最大点权\",\"children\":[]},{\"level\":2,\"title\":\"例题2：受欢迎的牛\",\"slug\":\"例题2-受欢迎的牛\",\"link\":\"#例题2-受欢迎的牛\",\"children\":[]},{\"level\":2,\"title\":\"tarhan算法求强联通分量\",\"slug\":\"tarhan算法求强联通分量\",\"link\":\"#tarhan算法求强联通分量\",\"children\":[]},{\"level\":2,\"title\":\"例三：求最大的半联通子图\",\"slug\":\"例三-求最大的半联通子图\",\"link\":\"#例三-求最大的半联通子图\",\"children\":[]}],\"readingTime\":{\"minutes\":10.75,\"words\":3226},\"filePathRelative\":\"algorithm/图论/qiang-lian-tong-fen-liang.md\"}")

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
