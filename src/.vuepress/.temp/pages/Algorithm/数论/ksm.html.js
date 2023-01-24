export const data = JSON.parse("{\"key\":\"v-f7e0ba02\",\"path\":\"/algorithm/%E6%95%B0%E8%AE%BA/ksm.html\",\"title\":\"ksm\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ksm\",\"description\":\"```cpp int ksm(int a,int b,int p){ a%=p; int ans=1%p; while(b){ if(b&1) ans=ans*a%p; a=a*a%p; b>>=1; } return ans; } ```\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/algorithm/%E6%95%B0%E8%AE%BA/ksm.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ksm\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"```cpp int ksm(int a,int b,int p){ a%=p; int ans=1%p; while(b){ if(b&1) ans=ans*a%p; a=a*a%p; b>>=1; } return ans; } ```\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"algorithm/数论/ksm.md\"}")

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
