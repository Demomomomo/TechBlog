export const data = JSON.parse("{\"key\":\"v-b334c830\",\"path\":\"/src/demo/\",\"title\":\"Features Demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Features Demo\",\"index\":false,\"icon\":\"discover\",\"category\":[\"Guide\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Catalog\",\"slug\":\"catalog\",\"link\":\"#catalog\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"src/demo/README.md\"}")

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
