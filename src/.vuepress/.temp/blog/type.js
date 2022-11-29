export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"/zh/":{"path":"/zh/article/","keys":["v-bc5a65d0","v-44174e72","v-5486b65c","v-21c9e4b8","v-3ac7574c","v-0ccf6f24","v-13d9a830","v-3f8ef9e5","v-ef15fc3c","v-69373a64","v-6c70f44e","v-0a58e6be","v-59fa09d1","v-582ef733","v-8d6b7aee","v-a5b2ec36","v-7c2f7840","v-4d5785df","v-551f78f4","v-6183f20b","v-53f29f0e","v-d17d1dfe","v-1864e3e6","v-02b09a76","v-c852c27e","v-3ae208a4","v-143cebc2","v-787e8347"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-c151bf32"]},"/zh/":{"path":"/zh/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]},"/zh/":{"path":"/zh/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6e19edb7"]},"/zh/":{"path":"/zh/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

