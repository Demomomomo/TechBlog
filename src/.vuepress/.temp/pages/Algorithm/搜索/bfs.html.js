export const data = JSON.parse("{\"key\":\"v-0b2145da\",\"path\":\"/algorithm/%E6%90%9C%E7%B4%A2/bfs.html\",\"title\":\"BFS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"BFS\",\"description\":\"一般求最小距离 数组d记录第一次到达这个点的最短距离。 初始状态加入队列，将初始状态的距离设为0 当队列不空的时候一直循环：取出队头，拓展队头，如果拓展的点没有出现过，那么我们就将他的距离用队头的距离更新之后加入队列。 联通块模型 可以在线性时间内找到某个点所在的连通块 作用：找联通块（几片池塘，几块房间） 每次遍历，把没有遍历过的点进行一次bfs： ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%90%9C%E7%B4%A2/bfs.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"BFS\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一般求最小距离 数组d记录第一次到达这个点的最短距离。 初始状态加入队列，将初始状态的距离设为0 当队列不空的时候一直循环：取出队头，拓展队头，如果拓展的点没有出现过，那么我们就将他的距离用队头的距离更新之后加入队列。 联通块模型 可以在线性时间内找到某个点所在的连通块 作用：找联通块（几片池塘，几块房间） 每次遍历，把没有遍历过的点进行一次bfs： ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"联通块模型\",\"slug\":\"联通块模型\",\"link\":\"#联通块模型\",\"children\":[]},{\"level\":2,\"title\":\"最短路模型\",\"slug\":\"最短路模型\",\"link\":\"#最短路模型\",\"children\":[{\"level\":3,\"title\":\"例题：PUBG\",\"slug\":\"例题-pubg\",\"link\":\"#例题-pubg\",\"children\":[]}]},{\"level\":2,\"title\":\"最小步数模型\",\"slug\":\"最小步数模型\",\"link\":\"#最小步数模型\",\"children\":[]}],\"readingTime\":{\"minutes\":2.95,\"words\":884},\"filePathRelative\":\"algorithm/搜索/bfs.md\"}")

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
