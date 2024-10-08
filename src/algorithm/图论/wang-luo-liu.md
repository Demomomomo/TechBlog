---
title: 网络流
---

问题：  

有n个结点，m条有向管道，每条管道中有一个边权，即为这个管道中能通过的最大水量，求s到t的能通过的最大水量。  

## dinic算法  


每次找到一个从s到t的路径，这条路径上的每个边减去这条路径上的剩余的最小流量，重复这个步骤直到不能找到从s到t的路径为止  

那么我们在找路径的时候，前面找出的路径不一定是最优解  

那么我们可以对于每条有向边加一条反边，当减去这条路径的剩余的最小流量的时候，反边再加上这条路的剩余的最小流量，那么我们再流过这条边之后是可以再留回来的，就相当于抵消了留过去的那条边  

用一个d数组来存每个点最小的深度，s点深度设为1，对于每个点来说，他的深度就是深度最小的父节点+1，可以通过bfs来找到每个点的d  

那么在寻找每条路径的时候，我们按照点按深度递增的路径找。找完一条路径之后，每条边减去这个路径上的最小流量，这时候对于图会有边断开，然后对于新的图再重新找一遍d数组，找到d数组之后再按照点的深度递增的路径找，以此类推  

如下图：  

<img src="https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230411191045.png" alt="Pulpit rock" width="304" height="228">  

刚开始的时候d[1]=1,d[2]=2,d[3]=2,d[4]=3,d[5]=3  

那么我们按深度递增的顺序找路径，找到1->3->5这条路径（不能找1->2->4->5这条路径，因为d[4]=d[5]，d并不是按照递增的顺序）,找到之后这条路径上所有边都减去4，那么3->5这条边没有了，1->3这条边的边权变为2  

那么对于新图来说





























