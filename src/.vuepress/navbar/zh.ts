import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "ACM",
    icon: "edit",
    children: [
      {
        text: "题解",
        icon: "edit",
        link: "/solution"
      },
      {
        text: "算法",
        icon: "edit",
        link: "/algorithm"
      },
      // {
      //   text: "在上方导航栏的名字2",
      //   icon: "图标代号",
      //   link: "本文件夹默认文件的路径"
        
      // }
      // 再新建文件夹了默认路径改为这个文件夹的默认文件，格式如上
    ],
  },
  // {
  //   text: ""
  // }
  
]);
