export const data = JSON.parse("{\"key\":\"v-8eb1b37e\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/lca.html\",\"title\":\"LCA\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"LCA\",\"description\":\"概念 两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先 预处理时间复杂度O（nlogn） 查询的时间复杂度O(logn) 倍增算法求最近共同祖先 预处理每个点向上走2^k步到达的父节点的编号 f[i][j]表示从i开始向上走2^j步所能走到的点（0=depth[y],说明跳k步的深度还在y下面，可以继续跳.如果从i开始跳2^k步...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/lca.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"LCA\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 两个点都有自己的祖先，他们的共同祖先距离他们两个最近的点就是最近共同祖先 预处理时间复杂度O（nlogn） 查询的时间复杂度O(logn) 倍增算法求最近共同祖先 预处理每个点向上走2^k步到达的父节点的编号 f[i][j]表示从i开始向上走2^j步所能走到的点（0=depth[y],说明跳k步的深度还在y下面，可以继续跳.如果从i开始跳2^k步...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"倍增算法求最近共同祖先\",\"slug\":\"倍增算法求最近共同祖先\",\"link\":\"#倍增算法求最近共同祖先\",\"children\":[]},{\"level\":2,\"title\":\"例题1：祖孙询问\",\"slug\":\"例题1-祖孙询问\",\"link\":\"#例题1-祖孙询问\",\"children\":[]},{\"level\":2,\"title\":\"tarjan-离线求lca\",\"slug\":\"tarjan-离线求lca\",\"link\":\"#tarjan-离线求lca\",\"children\":[]},{\"level\":2,\"title\":\"求两点间距离\",\"slug\":\"求两点间距离\",\"link\":\"#求两点间距离\",\"children\":[]},{\"level\":2,\"title\":\"例题2：在树中求两点间距离\",\"slug\":\"例题2-在树中求两点间距离\",\"link\":\"#例题2-在树中求两点间距离\",\"children\":[]}],\"readingTime\":{\"minutes\":5.48,\"words\":1645},\"filePathRelative\":\"algorithm/图论/lca.md\"}")

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
