---
title: 鸡算几何
---
原题链接：https://ac.nowcoder.com/acm/contest/46800/E

题意：如果能判断两个L形的铁丝是由对称得来的就输出yes，否则输出no
思路：  
首先，如果AB=BC的话，旋转和对称的图形一样，所以不能判断是否是由对称得来的  
我们把AB变成长边，DE变成长边  
然后我们再看他们的叉积是否相等，如果相等说明是由旋转得到的，不相等就是由对称得到的  
注意会有精度的限制，看两个是不是一样我们就看他们的差的绝对值是否小于1e-9就可以了  
```cpp
#include<bits/stdc++.h>
using namespace std;

int xa,ya,xb,yb,xc,yc;
double xd,yd,xe,ye,xf,yf;
double chaji1(double x1,double y1,double x2,double y2){
	return x1*y2-x2*y1;
}
int chaji(int x1,int y1,int x2,int y2){
	return x1*y2-x2*y1;
}
void sove(){
	cin>>xa>>ya>>xb>>yb>>xc>>yc;
	cin>>xd>>yd>>xe>>ye>>xf>>yf;
	if((xa-xb)*(xa-xb)+(ya-yb)*(ya-yb)==(xb-xc)*(xb-xc)+(yb-yc)*(yb-yc)){
		cout<<"NO"<<endl;
		return ;
	}
	if((xa-xb)*(xa-xb)+(ya-yb)*(ya-yb)<(xb-xc)*(xb-xc)+(yb-yc)*(yb-yc)){
		swap(xa,xc);
		swap(ya,yc);
	}
	if((xd-xe)*(xd-xe)+(yd-ye)*(yd-ye)<(xe-xf)*(xe-xf)+(ye-yf)*(ye-yf)){
		swap(xd,xf);
		swap(yd,yf);
	}
	if(fabs(chaji(xa-xb,ya-yb,xc-xb,yc-yb)-chaji1(xd-xe,yd-ye,xf-xe,yf-ye))<=1e-9){
		cout<<"NO"<<endl;
	}else cout<<"YES"<<endl;
}
int main(){
	int t;
	cin>>t;
	while(t--){
		sove();
	}
	return 0;
}
```

