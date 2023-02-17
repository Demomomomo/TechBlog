---
title: 树的三种遍历
---
## 清楚姐姐学树状数组
原题链接：https://ac.nowcoder.com/acm/contest/46812/F  

题意：将树状数组的第i个元素对应二叉树上编号为i的结点构造出一个二叉树。  
有一个尺寸大小为N= $2^k$ 的树状数组，按照下面规则构成一个二叉树：  
1.编号为i的结点深度为 $\log_{2}{（lowbit（N））} -\log_{2}{（lowbit（i））} $ .  
2.整棵树的中序遍历结点顺序是1,2,3,4...N  

做出的二叉树如图：  
<img src="https://img-blog.csdnimg.cn/589b45772cce45b4a7a83e0758f94506.png#pic_center" alt="Pulpit rock" width="304" height="228">  


如图所示，我们以左上角为坐标原点，向下为x轴正方向，向右为y轴正方向建立直角坐标系。  

现在想知道对于这个二叉树上编号为x的结点，分别在前序中序后序的遍历中是第几个被遍历到的点。  

思路：我们可以发现，对于每个左子树x，他的父节点都是x+lowbit（x），左子树的编号是二进制表示形如XXX010...的数。因为我们加一个lowbit（x）之后，这个数就变成了XXX100...，因为定义他们的深度是 $\log_{2}{（lowbit（N））} -\log_{2}{（lowbit（i））} $ ，所以+lowbit（x）之后的数深度-1。并且中序遍历是1~n，那么在lowbit（x）+x和x之间，即XX100和XX010之间，没有满足一个数和XX010相差深度为1，那么就说明lowbit（x）+x是x的父节点。  
对于每个右子树i我们可以发现，他的父节点是x-lowbit(x)。右子树的编号为形如XX110...的二进制数，那么我们减去lowbit（x）之后就变成了XX100...，深度-1，符合中序遍历，那么在XX100~XX110之间找不到任何一个数满足深度和XX110差1的条件，所以成立。  


那么我们要还原这个树的时候就要判断是左孩子还是右孩子，那么就判断最低一位1的前一位是不是0，以及求父节点的代码，即：  
```cpp
bool is(int x){
    if((lowbit(x)<<1)&x==0){
        return true;
    }else return false;
}

int fa(int x){
    if(is(x)){
        return x+lowbit(x);
    }else return x-lowbit(x);
}

```

左子树010进位之后是父节点100，所以我们可以反推一个点的左子树。  
```cpp
int lch(int x){
    return x-lowbit(x)+lowbit(x)>>1;
} 

```
右子树110去掉末尾之后是父节点100，可以反推一个点的右子树。  
```cpp
int rch(int x){
    return x+lowbit(x)>>1;
}

```

可以根据这个关系把二叉树建出来，但是因为n太大建不出来，也不用去建，只需要在dfs的时候计算子树尺寸加起来就行。  

因为大小是 $2^k$ 的树状数组除了根节点之外其他子树都是全满的，所以可以直接算出以每个节点为根的子树的大小。  

假如这个数编号是i，那么以他为根的子树的大小就是(lowbit（i）<<1)-1，因为他的左子树是前缀的一部分，是长度为lowbit(i)的一个区间:[i-lowbit(i)+1,i],右子树和左子树实际上是对称分布的。那么dfs的时候直接跳过整颗的子树部分直接计算就行。  

//注意k的类型是int，如果设为long long的话转成n会超时。  

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int m,k;
ll n;
ll lowbit(ll x){
	return x&-x;
}
ll lch(ll x){
	return x ^ lowbit(x) ^ (lowbit(x) >> 1);
}
ll rch(ll x){
	return x ^ (lowbit(x) >> 1);
}
ll size(ll x){
	return (lowbit(x)<<1)-1;
}
bool islch(ll x){
	return !(x & (lowbit(x) << 1));
	//判断他的最低位1的前一位是不是0
}
ll fa(ll x){
	if(islch(x)){
		return lowbit(x)+x;
	}else{
		return x-lowbit(x);
	}
}
ll qianxu(ll x){
	ll root=n;
	ll con=1;
	while(root!=x){
		con++;
		if(x<root){
			root=lch(root);
		}else{
			con+=size(lch(root));
			root=rch(root);
		}
	}
	return con;
}
ll houxu(ll x){//因为后序遍历是左右根，所以先遍历左子树再遍历右子树，最后才是自己
	//那么对于一个点来说，他的左右子树肯定被遍历过了。
	//如果他是他父亲的右结点，那么他父亲的左子树肯定被遍历过了，再加上左子树的点数。
	if(x==n){
		return n;
	}
	ll root=x;
	ll con=size(x);
	while(root!=n){
		if(root==rch(fa(root))){
			con+=size(lch(fa(root)));
		}
		root=fa(root);
	}
	return con;
}
int main(){
	cin>>k>>m;
	n=1ll<<k;
	while(m--){
		ll x;
		cin>>x;
		cout<<qianxu(x)<<" "<<x<<" "<<houxu(x)<<endl;
	}
	return 0;
}

```

