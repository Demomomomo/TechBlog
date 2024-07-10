export const data = JSON.parse("{\"key\":\"v-48f745ad\",\"path\":\"/algorithm/%E5%9B%BE%E8%AE%BA/shu-lian-pofen.html\",\"title\":\"树链剖分\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"树链剖分\",\"description\":\"作用： 对树上的两点路径或者是对一个子树进行操作，转换为线段树的区间操作 轻重链剖分 将树剖分成一条条不相交的从祖先到子孙的链 设size[x]表示以x为根节点的子树的大小（点的个数） size[x]=1+sum(size[y]),其中y是x的儿子 对于每个点x，将儿子中size最大的那个儿子作为它的重儿子，剩下的作为轻儿子，如果有很多个最大重量的儿子...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%9B%BE%E8%AE%BA/shu-lian-pofen.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"树链剖分\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"作用： 对树上的两点路径或者是对一个子树进行操作，转换为线段树的区间操作 轻重链剖分 将树剖分成一条条不相交的从祖先到子孙的链 设size[x]表示以x为根节点的子树的大小（点的个数） size[x]=1+sum(size[y]),其中y是x的儿子 对于每个点x，将儿子中size最大的那个儿子作为它的重儿子，剩下的作为轻儿子，如果有很多个最大重量的儿子...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"步骤\",\"slug\":\"步骤\",\"link\":\"#步骤\",\"children\":[]},{\"level\":2,\"title\":\"求lca\",\"slug\":\"求lca\",\"link\":\"#求lca\",\"children\":[]},{\"level\":2,\"title\":\"树上操作\",\"slug\":\"树上操作\",\"link\":\"#树上操作\",\"children\":[{\"level\":3,\"title\":\"例题1：树链剖分\",\"slug\":\"例题1-树链剖分\",\"link\":\"#例题1-树链剖分\",\"children\":[]},{\"level\":3,\"title\":\"例题2：软件包管理器\",\"slug\":\"例题2-软件包管理器\",\"link\":\"#例题2-软件包管理器\",\"children\":[]}]},{\"level\":2,\"title\":\"树上差分\",\"slug\":\"树上差分\",\"link\":\"#树上差分\",\"children\":[{\"level\":3,\"title\":\"作用1：将一条路径上的所有点的点权加上一个数\",\"slug\":\"作用1-将一条路径上的所有点的点权加上一个数\",\"link\":\"#作用1-将一条路径上的所有点的点权加上一个数\",\"children\":[]},{\"level\":3,\"title\":\"作用2：将这条路径上的所有祖先点权都加上一个数\",\"slug\":\"作用2-将这条路径上的所有祖先点权都加上一个数\",\"link\":\"#作用2-将这条路径上的所有祖先点权都加上一个数\",\"children\":[]}]}],\"readingTime\":{\"minutes\":12.69,\"words\":3808},\"filePathRelative\":\"algorithm/图论/shu-lian-pofen.md\"}")

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
