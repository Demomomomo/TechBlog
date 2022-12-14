export const data = JSON.parse("{\"key\":\"v-4497620a\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.html\",\"title\":\"拓扑排序\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"拓扑排序\",\"description\":\"概念 对于一个有向无环图的所有点排成一个序列，使他的任意一条边的两个点（u,v），u始终在v的前面，那么这个序列就叫拓扑序列 做法：找到入度为0的点加入队列中，循环队列，每次找到入度为0的点，并删除与这个点联通的点的边，如果删边之后入度为0，把点加入队列中，直到队列为空 ```cpp int n,m; int q[100005],d[100005]; ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/tuo-pu-paixu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"拓扑排序\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 对于一个有向无环图的所有点排成一个序列，使他的任意一条边的两个点（u,v），u始终在v的前面，那么这个序列就叫拓扑序列 做法：找到入度为0的点加入队列中，循环队列，每次找到入度为0的点，并删除与这个点联通的点的边，如果删边之后入度为0，把点加入队列中，直到队列为空 ```cpp int n,m; int q[100005],d[100005]; ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"例一：可达性统计\",\"slug\":\"例一-可达性统计\",\"link\":\"#例一-可达性统计\",\"children\":[]},{\"level\":2,\"title\":\"例二：车站分级\",\"slug\":\"例二-车站分级\",\"link\":\"#例二-车站分级\",\"children\":[]}],\"readingTime\":{\"minutes\":5.31,\"words\":1592},\"filePathRelative\":\"algorithm/图论/tuo-pu-paixu.md\"}")

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
