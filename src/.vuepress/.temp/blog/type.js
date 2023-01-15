export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-70bc2959","v-799e9206","v-27f3ede8","v-8eb1b37e","v-b34b0726","v-16c25e71","v-4497620a","v-a8267624","v-1dd6d9a3","v-2a37981f","v-057f5b88","v-9d49b844","v-0db0ff5f","v-8e8bac92","v-1b93fb49","v-3318fe32","v-e635bbc8","v-267368ef","v-13947aa6","v-59ad23c3","v-07f2a534","v-156bc363","v-2a1a8ba6","v-b2dbcbaa","v-11413ec7","v-27efaafc","v-348f8f46","v-cab1018e","v-0436993c","v-5f8a0336","v-06000b64","v-35be4ada","v-440b6636","v-e2270190","v-017721f5","v-3a011dfa","v-14b99028","v-279cebf0","v-1d691529","v-7c8a5a6c","v-187be613","v-6e05f6a4"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

