export const data = JSON.parse("{\"key\":\"v-528eea3d\",\"path\":\"/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/beibao.html\",\"title\":\"背包模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"背包模型\",\"description\":\"01背包 容量为v的背包里，有n件物品，每件物品的体积为vi，价值为wi，求不超过背包体积的情况下能获得的物品的最大价值 有序变无序：从1~i依次遍历，那么处理到i的是吧前i-1个已经被处理过了，可以直接拿着算 f[i][j]表示在前i个物品中选，总体积不超过j的方案的能获得的最大价值 对于每个物品i，可以选和不选 不选：在前i-1个物品中选，体积不超...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/beibao.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"背包模型\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"01背包 容量为v的背包里，有n件物品，每件物品的体积为vi，价值为wi，求不超过背包体积的情况下能获得的物品的最大价值 有序变无序：从1~i依次遍历，那么处理到i的是吧前i-1个已经被处理过了，可以直接拿着算 f[i][j]表示在前i个物品中选，总体积不超过j的方案的能获得的最大价值 对于每个物品i，可以选和不选 不选：在前i-1个物品中选，体积不超...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"01背包\",\"slug\":\"_01背包\",\"link\":\"#_01背包\",\"children\":[]},{\"level\":2,\"title\":\"完全背包\",\"slug\":\"完全背包\",\"link\":\"#完全背包\",\"children\":[]},{\"level\":2,\"title\":\"多重背包\",\"slug\":\"多重背包\",\"link\":\"#多重背包\",\"children\":[]}],\"readingTime\":{\"minutes\":3.28,\"words\":985},\"filePathRelative\":\"algorithm/动态规划/beibao.md\"}")

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
