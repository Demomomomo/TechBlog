import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({

    dest: './public',
    lang: "zh-CN",

  base: "/",

  locales: {
    "/": {
        lang: "zh-CN",
        title: "Demo",
        description: "Demo 的技术栈",
    },
  },

  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [],
    }),
  ],

  theme,
});
