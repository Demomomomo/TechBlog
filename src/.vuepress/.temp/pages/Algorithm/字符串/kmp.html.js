export const data = JSON.parse("{\"key\":\"v-2a37981f\",\"path\":\"/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html\",\"title\":\"kmp\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"kmp\",\"description\":\"概念 时间复杂度：O(n) 基本操作： 看b串是不是a串的子串 看a串里有几个b串 看a串里的所有b串的位置（首字母的下标） a串：主串，b串：模式串 下标都从1开始 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路： $a[i-j+1\\\\to i...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"kmp\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 时间复杂度：O(n) 基本操作： 看b串是不是a串的子串 看a串里有几个b串 看a串里的所有b串的位置（首字母的下标） a串：主串，b串：模式串 下标都从1开始 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路： $a[i-j+1\\\\to i...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"求一个字符串循环节的最小长度\",\"slug\":\"求一个字符串循环节的最小长度\",\"link\":\"#求一个字符串循环节的最小长度\",\"children\":[]},{\"level\":2,\"title\":\"求一个字符串前缀等于后缀的最小长度（最小公共前后缀）\",\"slug\":\"求一个字符串前缀等于后缀的最小长度-最小公共前后缀\",\"link\":\"#求一个字符串前缀等于后缀的最小长度-最小公共前后缀\",\"children\":[]}],\"readingTime\":{\"minutes\":2.24,\"words\":673},\"filePathRelative\":\"algorithm/字符串/kmp.md\"}")

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
