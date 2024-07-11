export const data = JSON.parse("{\"key\":\"v-0eb212bb\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.html\",\"title\":\"多源汇最短路（Floyd算法）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"多源汇最短路（Floyd算法）\",\"description\":\"多源最短路 起点和终点都不确定的最短路 时间复杂度O（n n n） 思路： 用邻接矩阵来存储边d[i][j]存i到j的边的长度 三重循环： 第一重循环循环中间点，第二第三重循环循环两边点 ```cpp //初始化： memset(d,0x3f,sizeof d); for(int i=1;ij同理得：d[k-1][k][j] 所以包含k的点的路径表示为...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/duo-yuan-uiduanlu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"多源汇最短路（Floyd算法）\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"多源最短路 起点和终点都不确定的最短路 时间复杂度O（n n n） 思路： 用邻接矩阵来存储边d[i][j]存i到j的边的长度 三重循环： 第一重循环循环中间点，第二第三重循环循环两边点 ```cpp //初始化： memset(d,0x3f,sizeof d); for(int i=1;ij同理得：d[k-1][k][j] 所以包含k的点的路径表示为...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"多源最短路\",\"slug\":\"多源最短路\",\"link\":\"#多源最短路\",\"children\":[]},{\"level\":2,\"title\":\"最短路\",\"slug\":\"最短路\",\"link\":\"#最短路\",\"children\":[]},{\"level\":2,\"title\":\"传递闭包\",\"slug\":\"传递闭包\",\"link\":\"#传递闭包\",\"children\":[]}],\"readingTime\":{\"minutes\":5.5,\"words\":1651},\"filePathRelative\":\"algorithm/图论/duo-yuan-uiduanlu.md\"}")

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
