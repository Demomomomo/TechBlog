export const data = JSON.parse("{\"key\":\"v-3d6faa00\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/wang-luo-liu.html\",\"title\":\"网络流\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"网络流\",\"description\":\"问题： 有n个结点，m条有向管道，每条管道中有一个边权，即为这个管道中能通过的最大水量，求s到t的能通过的最大水量。 dinic算法 每次找到一个从s到t的路径，这条路径上的每个边减去这条路径上的剩余的最小流量，重复这个步骤直到不能找到从s到t的路径为止 那么我们在找路径的时候，前面找出的路径不一定是最优解 那么我们可以对于每条有向边加一条反边，当减去...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/wang-luo-liu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"网络流\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"问题： 有n个结点，m条有向管道，每条管道中有一个边权，即为这个管道中能通过的最大水量，求s到t的能通过的最大水量。 dinic算法 每次找到一个从s到t的路径，这条路径上的每个边减去这条路径上的剩余的最小流量，重复这个步骤直到不能找到从s到t的路径为止 那么我们在找路径的时候，前面找出的路径不一定是最优解 那么我们可以对于每条有向边加一条反边，当减去...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"dinic算法\",\"slug\":\"dinic算法\",\"link\":\"#dinic算法\",\"children\":[]}],\"readingTime\":{\"minutes\":1.73,\"words\":520},\"filePathRelative\":\"algorithm/图论/wang-luo-liu.md\"}")

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
