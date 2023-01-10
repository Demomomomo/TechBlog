import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "ACM",
        icon: "edit",
        link: "acm/bei-bao.html"
      },
      // {
      //   text: "在上方导航栏的名字1",
      //   icon: "图标代号",
      //   link: "本文件夹默认文件的路径"
        
      // },
      // {
      //   text: "在上方导航栏的名字2",
      //   icon: "图标代号",
      //   link: "本文件夹默认文件的路径"
        
      // }
      // 再新建文件夹了默认路径改为这个文件夹的默认文件，格式如上
    ],
  },
]);
