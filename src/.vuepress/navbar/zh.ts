import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "ACM",
        icon: "edit",
        link: "acm/bei-bao.html"
      },
      {
        text: "love",
        icon: "edit",
        link: "love/main.html"
      }
    ],
  },
]);
