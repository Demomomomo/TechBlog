export const data = JSON.parse("{\"key\":\"v-27f3ede8\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.html\",\"title\":\"二分图\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"二分图\",\"description\":\"概念 将一个图的点分成两部分，当这两部分里的所有点所连的边都是在两部分的点之间连（没有一条边所连的点属于同一个部分），那么这个图就是二分图 一个图是二分图的话当且仅当这个图里没有奇数环 染色法判断二分图 遍历n个点，如果他没有被染色的话，我们就递归把他染上1 递归函数：先把这个点染色，然后把与他相连的没有染色的染成另外一种颜色，如果染完之后不满足题意返...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/er-fen-tu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"二分图\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 将一个图的点分成两部分，当这两部分里的所有点所连的边都是在两部分的点之间连（没有一条边所连的点属于同一个部分），那么这个图就是二分图 一个图是二分图的话当且仅当这个图里没有奇数环 染色法判断二分图 遍历n个点，如果他没有被染色的话，我们就递归把他染上1 递归函数：先把这个点染色，然后把与他相连的没有染色的染成另外一种颜色，如果染完之后不满足题意返...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"染色法判断二分图\",\"slug\":\"染色法判断二分图\",\"link\":\"#染色法判断二分图\",\"children\":[]},{\"level\":2,\"title\":\"例题1：关押罪犯\",\"slug\":\"例题1-关押罪犯\",\"link\":\"#例题1-关押罪犯\",\"children\":[]},{\"level\":2,\"title\":\"匈牙利算法找二分图最大匹配数\",\"slug\":\"匈牙利算法找二分图最大匹配数\",\"link\":\"#匈牙利算法找二分图最大匹配数\",\"children\":[]},{\"level\":2,\"title\":\"增广路径\",\"slug\":\"增广路径\",\"link\":\"#增广路径\",\"children\":[]},{\"level\":2,\"title\":\"二分图的最小顶点覆盖\",\"slug\":\"二分图的最小顶点覆盖\",\"link\":\"#二分图的最小顶点覆盖\",\"children\":[]},{\"level\":2,\"title\":\"有向无环图的最小路径覆盖\",\"slug\":\"有向无环图的最小路径覆盖\",\"link\":\"#有向无环图的最小路径覆盖\",\"children\":[]},{\"level\":2,\"title\":\"最大独立集\",\"slug\":\"最大独立集\",\"link\":\"#最大独立集\",\"children\":[]},{\"level\":2,\"title\":\"有向图的最小路径重复点覆盖\",\"slug\":\"有向图的最小路径重复点覆盖\",\"link\":\"#有向图的最小路径重复点覆盖\",\"children\":[]},{\"level\":2,\"title\":\"例一：任务安排\",\"slug\":\"例一-任务安排\",\"link\":\"#例一-任务安排\",\"children\":[]},{\"level\":2,\"title\":\"例二：棋盘覆盖\",\"slug\":\"例二-棋盘覆盖\",\"link\":\"#例二-棋盘覆盖\",\"children\":[]},{\"level\":2,\"title\":\"例三：骑士放置\",\"slug\":\"例三-骑士放置\",\"link\":\"#例三-骑士放置\",\"children\":[]}],\"readingTime\":{\"minutes\":11.5,\"words\":3451},\"filePathRelative\":\"algorithm/图论/er-fen-tu.md\"}")

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
