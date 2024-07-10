export const data = JSON.parse("{\"key\":\"v-2b0455e0\",\"path\":\"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/zhuang-ya-dp.html\",\"title\":\"状态压缩dp\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"状态压缩dp\",\"description\":\"定义 状态压缩dp是将比较复杂的状态映射成数字后进行dp 例如：布尔数组用二进制表示(st[i]表示第i位做了还是没做，st数组就可以变成一个二进制数) 更复杂的状态可以用map等结构来重标号成数字后进行转移 滚动数组优化：在转移第i维的时候我们只用到了第i-1维，那么我们就可以用两维相互转化。优化方式：1.将i&1 2.每次用i-1&1维转化完i&1...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/zhuang-ya-dp.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"状态压缩dp\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"定义 状态压缩dp是将比较复杂的状态映射成数字后进行dp 例如：布尔数组用二进制表示(st[i]表示第i位做了还是没做，st数组就可以变成一个二进制数) 更复杂的状态可以用map等结构来重标号成数字后进行转移 滚动数组优化：在转移第i维的时候我们只用到了第i-1维，那么我们就可以用两维相互转化。优化方式：1.将i&1 2.每次用i-1&1维转化完i&1...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"定义\",\"slug\":\"定义\",\"link\":\"#定义\",\"children\":[]},{\"level\":2,\"title\":\"类型一：在一个n* m的网格上，用一个图形填网格，有一些限制，求方案数/放的图形的最大最小值\",\"slug\":\"类型一-在一个n-m的网格上-用一个图形填网格-有一些限制-求方案数-放的图形的最大最小值\",\"link\":\"#类型一-在一个n-m的网格上-用一个图形填网格-有一些限制-求方案数-放的图形的最大最小值\",\"children\":[{\"level\":3,\"title\":\"蒙德里安的梦想\",\"slug\":\"蒙德里安的梦想\",\"link\":\"#蒙德里安的梦想\",\"children\":[]},{\"level\":3,\"title\":\"炮兵阵地\",\"slug\":\"炮兵阵地\",\"link\":\"#炮兵阵地\",\"children\":[]}]},{\"level\":2,\"title\":\"类型二：每个点不重不漏走一次，求最短路\",\"slug\":\"类型二-每个点不重不漏走一次-求最短路\",\"link\":\"#类型二-每个点不重不漏走一次-求最短路\",\"children\":[{\"level\":3,\"title\":\"最短哈曼顿路径\",\"slug\":\"最短哈曼顿路径\",\"link\":\"#最短哈曼顿路径\",\"children\":[]}]},{\"level\":2,\"title\":\"类型三：要求必须有某些状态，求方案数\",\"slug\":\"类型三-要求必须有某些状态-求方案数\",\"link\":\"#类型三-要求必须有某些状态-求方案数\",\"children\":[{\"level\":3,\"title\":\"I Pa?sWorD\",\"slug\":\"i-pa-sword\",\"link\":\"#i-pa-sword\",\"children\":[]}]}],\"readingTime\":{\"minutes\":10.54,\"words\":3163},\"filePathRelative\":\"algorithm/动态规划/zhuang-ya-dp.md\"}")

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
