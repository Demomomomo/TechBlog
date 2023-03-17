export const data = JSON.parse("{\"key\":\"v-17cef7a3\",\"path\":\"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/qu-jian-dp.html\",\"title\":\"区间dp\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"区间dp\",\"description\":\"状态定义 f[i][j]表示区间[i,j]的最优解 目标状态 f[1][n]：区间1~n的最优解 阶段的划分 区间长度。 因为我们需要求这个区间的最优解，那么我们要用他的子区间的最优解递推出来，那么他的子区间的长度是小于他的长度的，所有我们需要先将长度小的区间求出来。 框架 ```cpp for(int len=2;lenn; for(int i=1;...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/qu-jian-dp.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"区间dp\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"状态定义 f[i][j]表示区间[i,j]的最优解 目标状态 f[1][n]：区间1~n的最优解 阶段的划分 区间长度。 因为我们需要求这个区间的最优解，那么我们要用他的子区间的最优解递推出来，那么他的子区间的长度是小于他的长度的，所有我们需要先将长度小的区间求出来。 框架 ```cpp for(int len=2;lenn; for(int i=1;...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"状态定义\",\"slug\":\"状态定义\",\"link\":\"#状态定义\",\"children\":[]},{\"level\":2,\"title\":\"目标状态\",\"slug\":\"目标状态\",\"link\":\"#目标状态\",\"children\":[]},{\"level\":2,\"title\":\"阶段的划分\",\"slug\":\"阶段的划分\",\"link\":\"#阶段的划分\",\"children\":[]},{\"level\":2,\"title\":\"框架\",\"slug\":\"框架\",\"link\":\"#框架\",\"children\":[]},{\"level\":2,\"title\":\"例题\",\"slug\":\"例题\",\"link\":\"#例题\",\"children\":[{\"level\":3,\"title\":\"石子合并\",\"slug\":\"石子合并\",\"link\":\"#石子合并\",\"children\":[]},{\"level\":3,\"title\":\"环形石子合并\",\"slug\":\"环形石子合并\",\"link\":\"#环形石子合并\",\"children\":[]},{\"level\":3,\"title\":\"能量项链\",\"slug\":\"能量项链\",\"link\":\"#能量项链\",\"children\":[]},{\"level\":3,\"title\":\"凸多边形的划分\",\"slug\":\"凸多边形的划分\",\"link\":\"#凸多边形的划分\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.89,\"words\":2067},\"filePathRelative\":\"algorithm/动态规划/qu-jian-dp.md\"}")

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
