export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5ad09d9c","v-f2656fae","v-3d63fa03","v-2d56c1ad","v-e560cf96","v-72e44f2b","v-332f66bd","v-0d2653c1","v-79261834","v-6cb33e9e","v-4777a946","v-a27bfe2c","v-43e5808f","v-5200aa20","v-517ba2c4","v-49923d5a","v-b3199514","v-7279c41e","v-e2ee36a4","v-7f5c7c97","v-5020ef6c","v-dee3c6dc","v-34feecdc","v-080573f2","v-7f12c912","v-4dd2d996","v-49e74e91"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

