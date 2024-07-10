export const data = JSON.parse("{\"key\":\"v-6d08d646\",\"path\":\"/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/kmp.html\",\"title\":\"kmp\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"kmp\",\"description\":\"kmp 时间复杂度：O(n) 基本操作：看b串是不是a串的子串 a串：主串，b串：模式串 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路：a[i-j+1~i]和b[1~j]已经匹配，然后比较a[i+1]和b[j+1] 如果j！=0并且a[i+1...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/kmp.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"kmp\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"kmp 时间复杂度：O(n) 基本操作：看b串是不是a串的子串 a串：主串，b串：模式串 核心：i用来扫a串，j用来扫b串，都从0开始，字符串的下标从1开始 p数组的含义是当b[j+1]不能匹配的时候，以j结尾的字符串前缀等于后缀的最大长度 思路：a[i-j+1~i]和b[1~j]已经匹配，然后比较a[i+1]和b[j+1] 如果j！=0并且a[i+1...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"kmp\",\"slug\":\"kmp\",\"link\":\"#kmp\",\"children\":[]},{\"level\":2,\"title\":\"求一个字符串循环节的最小长度\",\"slug\":\"求一个字符串循环节的最小长度\",\"link\":\"#求一个字符串循环节的最小长度\",\"children\":[]},{\"level\":2,\"title\":\"求一个字符串前缀等于后缀的最小长度（最小公共前后缀）\",\"slug\":\"求一个字符串前缀等于后缀的最小长度-最小公共前后缀\",\"link\":\"#求一个字符串前缀等于后缀的最小长度-最小公共前后缀\",\"children\":[]}],\"readingTime\":{\"minutes\":2.11,\"words\":634},\"filePathRelative\":\"algorithm/数据结构/kmp.md\"}")

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
