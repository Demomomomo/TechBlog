export const data = JSON.parse("{\"key\":\"v-1dd6d9a3\",\"path\":\"/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.html\",\"title\":\"ac自动机\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ac自动机\",\"description\":\"作用 判断n个串中有几个串是主串的子串 实质：tire+kmp 思路： 先建立tire树，将n个串的tire树建出来 每个点都有一个next数组，表示以这个点为结尾的路径中，前缀等于后缀的最长前缀的尾端点（前缀可以不在这个路径上，前缀是在整个trie树上找） kmp是每次比较i+1和j+1是不是一样，那么转换到tire树里就是比较第i+1层和第j+1层...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/ac.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ac自动机\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"作用 判断n个串中有几个串是主串的子串 实质：tire+kmp 思路： 先建立tire树，将n个串的tire树建出来 每个点都有一个next数组，表示以这个点为结尾的路径中，前缀等于后缀的最长前缀的尾端点（前缀可以不在这个路径上，前缀是在整个trie树上找） kmp是每次比较i+1和j+1是不是一样，那么转换到tire树里就是比较第i+1层和第j+1层...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":2,\"title\":\"例题1：给出n个单词，看在一篇文章里有几种单词出现\",\"slug\":\"例题1-给出n个单词-看在一篇文章里有几种单词出现\",\"link\":\"#例题1-给出n个单词-看在一篇文章里有几种单词出现\",\"children\":[]},{\"level\":2,\"title\":\"例题2：有n个单词，查找在所有单词中每个单词出现的次数\",\"slug\":\"例题2-有n个单词-查找在所有单词中每个单词出现的次数\",\"link\":\"#例题2-有n个单词-查找在所有单词中每个单词出现的次数\",\"children\":[]}],\"readingTime\":{\"minutes\":5.48,\"words\":1643},\"filePathRelative\":\"algorithm/字符串/ac.md\"}")

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
