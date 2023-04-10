---
title: 树链剖分
---
## 苹方树
原题链接：  
https://ac.nowcoder.com/acm/contest/38487/J?&headNav=acm  

题意：  
![20230410222201](https://cr-demo-blog-1308117710.cos.ap-nanjing.myqcloud.com/demo/20230410222201.png)

思路：  

利用树上差分  

完全平方数的质因数的个数都是偶数个，而且数据范围很小，100以内大概只有20个左右的质因数，那么我们就对一个点上出现过的所有质因数的个数进行维护  

然而，题目要求是只要以i为根的子树有一个结点包含在路径[u,v]中，i的点权就乘l  

利用树上差分的性质，将u和v处，l的所有质因数的个数都加一，lca(u,v)处l的所有质因数的个数都减一，那么我们dfs的时候，对于i来说，他的子树里的所有质因数的个数累加，就是i结点的质因数的个数，最后判断这个结点的每个质因数是不是偶数个就可以了  

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=4e5+10;
typedef long long ll;
int e[N],ne[N],h[N],idx;
int si[N],d[N],f[N],son[N],t[N];
int a[N];
int nid[N],oid[N],dfn;
int n,m;
void dfs1(int u,int fa){
    si[u]=1;
    son[u]=0;
    f[u]=fa;
    d[u]=d[fa]+1;
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(j==fa)continue;
        dfs1(j,u);
        si[u]+=si[j];
        if(si[j]>si[son[u]])son[u]=j;
    }
}
void dfs2(int u,int topu){
    t[u]=topu;
    nid[u]=++dfn;
    oid[dfn]=u;
    if(son[u])dfs2(son[u],topu);
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(j!=f[u]&&j!=son[u]) dfs2(j,j);
    }
}
int v[N][30];
bool cheek(int x){
    for(int i=2;i<=x/i;i++){
        if(x%i==0)return false;
    }
    return true;
}
void dfs(int u){
    if(son[u])dfs(son[u]);
    for(int i=0;i<=25;i++){
        v[nid[u]][i]+=v[nid[son[u]]][i];
    }
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(j!=f[u]&&j!=son[u]){
            dfs(j);
            for(int k=0;k<=25;k++){
                v[nid[u]][k]+=v[nid[j]][k];
            }
        }
    }
}
void add(int a,int b){
    e[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int lca(int x,int y){
    while(t[x]!=t[y]){
        if(d[t[x]]<d[t[y]]) swap(x,y);
        x=f[t[x]];
    }
    if(d[x]<d[y]) return x;
    else return y;
}
 
int main(){
    map<int,int> mp;
    int op=0;
    for(int i=2;i<=100;i++){
        if(cheek(i)){
            mp[i]=++op;
        }
    }
    cin>>n;
    memset(h,-1,sizeof h);
    for(int i=1;i<n;i++){
        int a,b;
        cin>>a>>b;
        add(a,b);
        add(b,a);
    }
    dfs1(1,0);
    dfs2(1,1);
    cin>>m;
    for(int i=1;i<=m;i++){
        int a,b,w;
        cin>>a>>b>>w;
        for(int i=2;i<=w;i++){
            while(w%i==0){
                v[nid[a]][mp[i]]++;
                v[nid[b]][mp[i]]++;
                v[nid[lca(a,b)]][mp[i]]--;
                w/=i;
            }
        }
        if(w!=1) {
            v[nid[a]][w]++;
            v[nid[b]][w]++;
            v[nid[lca(a,b)]][mp[i]]--;
        }
    }
    dfs(1);
    int q;
    cin>>q;
    while(q--){
        int x;
        cin>>x;
        bool f=true;
        for(int i=1;i<=25;i++){
            if(v[nid[x]][i]%2){
                f=false;
                break;
            }
        }
        if(f)cout<<"YES"<<endl;
        else cout<<"NO"<<endl;
    }
    return 0;
}
```



