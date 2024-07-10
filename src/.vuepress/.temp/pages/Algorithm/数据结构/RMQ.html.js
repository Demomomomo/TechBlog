export const data = JSON.parse("{\"key\":\"v-765dd11e\",\"path\":\"/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.html\",\"title\":\"st表\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"st表\",\"description\":\"作用 找到一段区间的最值（不支持修改） 方法 f[i][j]表示从下标i为起点长度为 $2^j$ 的区间的最值 右端点就是 $i+2^j-1$ 更新方式就是将区间分成两半，取两半的最值 左边区间就是[i,i+2^(j-1)-1]，右边区间就是[i+2^(j-1),i+2^j-1] 所以写成转移方程就是f[i][j]=max(f[i][j-1],f[i+...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/RMQ.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"st表\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"作用 找到一段区间的最值（不支持修改） 方法 f[i][j]表示从下标i为起点长度为 $2^j$ 的区间的最值 右端点就是 $i+2^j-1$ 更新方式就是将区间分成两半，取两半的最值 左边区间就是[i,i+2^(j-1)-1]，右边区间就是[i+2^(j-1),i+2^j-1] 所以写成转移方程就是f[i][j]=max(f[i][j-1],f[i+...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":2,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[]},{\"level\":2,\"title\":\"初始化\",\"slug\":\"初始化\",\"link\":\"#初始化\",\"children\":[]},{\"level\":2,\"title\":\"查找区间最值\",\"slug\":\"查找区间最值\",\"link\":\"#查找区间最值\",\"children\":[]}],\"readingTime\":{\"minutes\":1.27,\"words\":382},\"filePathRelative\":\"algorithm/数据结构/RMQ.md\"}")

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
