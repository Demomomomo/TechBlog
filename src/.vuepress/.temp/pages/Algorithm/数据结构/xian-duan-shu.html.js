export const data = JSON.parse("{\"key\":\"v-7a1f0214\",\"path\":\"/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html\",\"title\":\"线段树\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"线段树\",\"description\":\"作用：对【l，r】区间进行修改操作，询问【l，r】区间的某种性质（最大值，前缀和等等） 操作： 1.build：将一段区间初始化成线段树 2.modify：修改操作，有两种，一种是修改单点（简单），一种是修改区间（要用到懒标记） 3.query：查询某个区间的操作 更新： 1.push up：由子树来更新父结点的信息 2.push down：父结点的修...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/xian-duan-shu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"线段树\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"作用：对【l，r】区间进行修改操作，询问【l，r】区间的某种性质（最大值，前缀和等等） 操作： 1.build：将一段区间初始化成线段树 2.modify：修改操作，有两种，一种是修改单点（简单），一种是修改区间（要用到懒标记） 3.query：查询某个区间的操作 更新： 1.push up：由子树来更新父结点的信息 2.push down：父结点的修...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1.创建树：build函数\",\"slug\":\"_1-创建树-build函数\",\"link\":\"#_1-创建树-build函数\",\"children\":[]},{\"level\":2,\"title\":\"修改操作：（单点修改）\",\"slug\":\"修改操作-单点修改\",\"link\":\"#修改操作-单点修改\",\"children\":[]},{\"level\":2,\"title\":\"修改操作：（区间修改）\",\"slug\":\"修改操作-区间修改\",\"link\":\"#修改操作-区间修改\",\"children\":[]},{\"level\":2,\"title\":\"查询操作：query函数\",\"slug\":\"查询操作-query函数\",\"link\":\"#查询操作-query函数\",\"children\":[]},{\"level\":2,\"title\":\"区间乘一个数再加一个数\",\"slug\":\"区间乘一个数再加一个数\",\"link\":\"#区间乘一个数再加一个数\",\"children\":[]},{\"level\":2,\"title\":\"扫描线\",\"slug\":\"扫描线\",\"link\":\"#扫描线\",\"children\":[]}],\"readingTime\":{\"minutes\":8.16,\"words\":2448},\"filePathRelative\":\"algorithm/数据结构/xian-duan-shu.md\"}")

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
