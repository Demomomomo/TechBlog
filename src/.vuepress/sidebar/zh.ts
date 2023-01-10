import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "题解",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    },
    {
      text: "算法",
      icon: "note",
      prefix: "algorithm/",
      children: "structure"
    }
  ],
});
