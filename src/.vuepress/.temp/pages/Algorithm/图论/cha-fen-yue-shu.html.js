export const data = JSON.parse("{\"key\":\"v-7aebf5c4\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.html\",\"title\":\"差分约束\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"差分约束\",\"description\":\"概念 如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]=的时候，那么本质就是求最长路 1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了 2.bellman算法：将所有的边全取符号，然后对新的图求最短路 不等式方程标准化 1.如果给出的不等式有=的话，根据...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/cha-fen-yue-shu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"差分约束\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 如果一个系统由n个变量和m个不等式组成，并且这m个不等式均为x[i]-x[j]=的时候，那么本质就是求最长路 1.Floyd算法：将d初始化为-INF,d[i][i]=0,然后跑一般Floyd（这时候d[i][j]就是取max了 2.bellman算法：将所有的边全取符号，然后对新的图求最短路 不等式方程标准化 1.如果给出的不等式有=的话，根据...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"问题描述\",\"slug\":\"问题描述\",\"link\":\"#问题描述\",\"children\":[]},{\"level\":2,\"title\":\"思路\",\"slug\":\"思路\",\"link\":\"#思路\",\"children\":[]},{\"level\":2,\"title\":\"解的存在性\",\"slug\":\"解的存在性\",\"link\":\"#解的存在性\",\"children\":[]},{\"level\":2,\"title\":\"求最长路径（x[i]-x[j]>=a[k])\",\"slug\":\"求最长路径-x-i-x-j-a-k\",\"link\":\"#求最长路径-x-i-x-j-a-k\",\"children\":[]},{\"level\":2,\"title\":\"不等式方程标准化\",\"slug\":\"不等式方程标准化\",\"link\":\"#不等式方程标准化\",\"children\":[]}],\"readingTime\":{\"minutes\":3.12,\"words\":935},\"filePathRelative\":\"algorithm/图论/cha-fen-yue-shu.md\"}")

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
