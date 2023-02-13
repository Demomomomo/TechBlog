export const data = JSON.parse("{\"key\":\"v-68bac7ff\",\"path\":\"/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.html\",\"title\":\"树状数组\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"树状数组\",\"description\":\"作用：单点修改区间查询 1.快速求前缀和 O(logn) 2.快速修改某个数 O(logn) lowbit（x）表示x的最低位1所表示的十进制数 tr[i]表示区间[1,i]的和 1.求前缀和： ```cpp int sum(int x){ int res=0; for(int i=x;i;i-=lowbit(i) )res+=tr[i]; retur...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/shu-zhuang-shu-zu.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"树状数组\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"作用：单点修改区间查询 1.快速求前缀和 O(logn) 2.快速修改某个数 O(logn) lowbit（x）表示x的最低位1所表示的十进制数 tr[i]表示区间[1,i]的和 1.求前缀和： ```cpp int sum(int x){ int res=0; for(int i=x;i;i-=lowbit(i) )res+=tr[i]; retur...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1.求前缀和：\",\"slug\":\"_1-求前缀和\",\"link\":\"#_1-求前缀和\",\"children\":[]},{\"level\":2,\"title\":\"2.在下标为i的位置上加一个数\",\"slug\":\"_2-在下标为i的位置上加一个数\",\"link\":\"#_2-在下标为i的位置上加一个数\",\"children\":[]},{\"level\":2,\"title\":\"例题\",\"slug\":\"例题\",\"link\":\"#例题\",\"children\":[]},{\"level\":2,\"title\":\"区间修改，单点查询\",\"slug\":\"区间修改-单点查询\",\"link\":\"#区间修改-单点查询\",\"children\":[]},{\"level\":2,\"title\":\"区间修改，区间查询\",\"slug\":\"区间修改-区间查询\",\"link\":\"#区间修改-区间查询\",\"children\":[]},{\"level\":2,\"title\":\"约瑟夫问题\",\"slug\":\"约瑟夫问题\",\"link\":\"#约瑟夫问题\",\"children\":[]}],\"readingTime\":{\"minutes\":2.93,\"words\":879},\"filePathRelative\":\"algorithm/数据结构/shu-zhuang-shu-zu.md\"}")

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
