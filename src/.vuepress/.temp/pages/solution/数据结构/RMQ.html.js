export const data = JSON.parse("{\"key\":\"v-3a011dfa\",\"path\":\"/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.html\",\"title\":\"RMQ\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"RMQ\",\"category\":[\"algorithm\"],\"tag\":[\"数据结构\"],\"description\":\"RMQ（区间最值问题） 作用：找到一段区间的最值(不支持修改 方法：用st表 ST表： f[i][j]表示以i为起点长度为2的j次方的区间的最值 右端点就是i+2^j-1 更新方式就是把这个区间分成两半，取这两半的最值 左边区间就是[i , i+2^(j-1)-1]，右边区间就是[i+2^(j-1) , i+2^j-1 ] 所以写成转移方程就是f[i]...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/solution/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"RMQ\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"RMQ（区间最值问题） 作用：找到一段区间的最值(不支持修改 方法：用st表 ST表： f[i][j]表示以i为起点长度为2的j次方的区间的最值 右端点就是i+2^j-1 更新方式就是把这个区间分成两半，取这两半的最值 左边区间就是[i , i+2^(j-1)-1]，右边区间就是[i+2^(j-1) , i+2^j-1 ] 所以写成转移方程就是f[i]...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"数据结构\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"RMQ（区间最值问题）\",\"slug\":\"rmq-区间最值问题\",\"link\":\"#rmq-区间最值问题\",\"children\":[]},{\"level\":2,\"title\":\"RMQ算法\",\"slug\":\"rmq算法\",\"link\":\"#rmq算法\",\"children\":[]},{\"level\":2,\"title\":\"P4392 [BOI2007]Sound 静音问题（rmq，st表）\",\"slug\":\"p4392-boi2007-sound-静音问题-rmq-st表\",\"link\":\"#p4392-boi2007-sound-静音问题-rmq-st表\",\"children\":[]}],\"readingTime\":{\"minutes\":9.25,\"words\":2774},\"filePathRelative\":\"solution/数据结构/RMQ.md\"}")

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
