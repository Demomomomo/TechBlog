export const data = JSON.parse("{\"key\":\"v-ccec4096\",\"path\":\"/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/tu-bao.html\",\"title\":\"凸包\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"凸包\",\"description\":\"凸包问题 一片树林里有很多树，让你用一根绳子将这些树包围住，求最短的绳子长度 实质：用一个最小的凸多边形将所有点包住 graham scan算法 找一个y值最小的点 $p{0}$，按照每个点 $p{i}$ 和 $p_{0}$ 连成的直线和x轴正半轴的夹角大小，从小到大排序 排完序之后，用一个栈来储存凸包含有的点，先放一个0进栈，然后将前三个点放入栈中，...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/tu-bao.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"凸包\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"凸包问题 一片树林里有很多树，让你用一根绳子将这些树包围住，求最短的绳子长度 实质：用一个最小的凸多边形将所有点包住 graham scan算法 找一个y值最小的点 $p{0}$，按照每个点 $p{i}$ 和 $p_{0}$ 连成的直线和x轴正半轴的夹角大小，从小到大排序 排完序之后，用一个栈来储存凸包含有的点，先放一个0进栈，然后将前三个点放入栈中，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"凸包问题\",\"slug\":\"凸包问题\",\"link\":\"#凸包问题\",\"children\":[]},{\"level\":2,\"title\":\"graham scan算法\",\"slug\":\"graham-scan算法\",\"link\":\"#graham-scan算法\",\"children\":[]}],\"readingTime\":{\"minutes\":1.38,\"words\":413},\"filePathRelative\":\"algorithm/计算几何/tu-bao.md\"}")

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
