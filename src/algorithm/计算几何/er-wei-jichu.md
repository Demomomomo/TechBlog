---
title: 二维基础
---

```cpp
const double eps=1e-18;
//记录点的横纵坐标
struct Pot{
	double x,y;
};
//记录线段的起始点和终点
struct Line{
	Pot st,ed;
};
//记录圆的圆心和半径
struct Circle{
	Pot p;
	double r;
};
//判断小数的正负，如果绝对值小于精度就返回0，小于0就返回-1，否则返回1
int sign(double x){
	if(fabs(x)<eps)return 0;
	if(x<0)return -1;
	return 1;
}
//比较小数的大小,如果x-y小于精度那么认为他们相等，如果x<y就返回-1，x大于y就返回1
int dcmp(double x,double y){
	if(fabs(x-y)<eps)return 0;
	if(x<y)return -1;
	return 1;
}
//求两个坐标相加的点的坐标
Pot operator + (Pot a,Pot b){
	return {(a.x+b.x),(a.y +b.y )};
}
//两个点相减的坐标
Pot operator - (Pot a,Pot b){
	return {(a.x -b.x ),(a.y -b.y )};
}
//判断两个点是否坐标相等
bool operator == (Pot a,Pot b){
	if(dcmp(a.x,b.x)==0&&dcmp(a.y,b.y)==0)return 1;
	return 0;
}
//求一个向量长度乘c之后的向量
Pot operator * (Pot a,double c){
	return {(a.x*c),(a.y *c)};
}
//求一个向量除以c之后的向量
Pot operator / (Pot a,double c){
	return {(a.x/c),(a.y /c)};
}
//向量a在向量b上的投影与b长度的乘积
//a*b=|a||b|cos(c)
double dot(Pot a,Pot b){
	return a.x*b.x+a.y *b.y  ;
}
//向量a与b张成的平行四边形的有向面积，b在a的逆时针方向为正
//a*b=|a||b|sin(c)
double cross(Pot a,Pot b){
	return a.x *b.y -b.x *a.y ;
}
//计算a到原点的距离
double get_length(Pot a){
	return sqrt(dot(a,a));
}
//返回角aOb的角度，返回的是弧度
double get_angle(Pot a,Pot b){
	return acos(dot(a,b)/get_length(a)/get_length(b));
}
//返回三个点构成的三角形面积的两倍
double area(Pot a,Pot b,Pot c){
	return cross(b-a,c-a);
}
//点a绕原点顺时针旋转angle度（弧度制
Pot rotate(Pot a,double angle){
	return {a.x*cos(angle)+a.y *sin(angle),-a.x*sin(angle)+a.y *cos(angle)};
}


//求两直线的交点，v为p的向量，w为q的向量
Pot get_Line_inter(Pot p,Pot v,Pot q,Pot w){
	Pot u=p-q;
	double t=cross(w,u)/cross(v,w);
	return p+v*t;
}
//点p到直线ab的距离
double dist_to_line(Pot p,Pot a,Pot b){
	Pot v1=b-a,v2=p-a;
	return fabs(cross(v1,v2)/get_length(v1));
}
//点p到线段ab的距离
double dist_to_seg(Pot p,Pot a,Pot b){
	if(a==b)return get_length(p-a);
	Pot v1=b-a,v2=p-a,v3=p-b;
	if(sign(dot(v1,v2))<0)return get_length(v2);
	if(sign(dot(v1,v3))>0)return get_length(v3);
	return dist_to_line(p,a,b);
}
//点p在直线ab上的投影
Pot get_line_pro(Pot p,Pot a,Pot b){
	Pot v=b-a;
	return a+v*(dot(v,p-a)/dot(v,v));
}
//点a和点b之间的距离
double dist(Pot a,Pot b){
	return sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y));
}
//判断点p是否在线段ab上
bool on_seg(Pot p,Pot a,Pot b){
	return sign(cross(p-a,p-b))==0&&sign(dot(p-a,p-b))<=0;
}
//判断两线段是否相交
bool xiangjiao(Pot a1,Pot a2,Pot b1,Pot b2){
	double c1=cross(a2-a1,b1-a1),c2=cross(a2-a1,b2-a1);
	double c3=cross(b2-b1,a2-b1),c4=cross(b2-b1,a1-b1);
	return sign(c1)*sign(c2)<=0&&sign(c3)*sign(c4)<=0;
}
//三条边长求三角形面积
double helen(double a,double b,double c){
	double p=(a+b+c)/2;
	return sqrt(p*(p-a)*(p-b)*(p-c));
}
//n个点从0到n-1求多边形面积
double Polygon_area(Pot p[],int n){
	double s=0;
	for(int i=1;i+1<n;i++){
		s+=cross(p[i]-p[0],p[i+1]-p[i]);
	}
	return s/2;
}

```

## n个圆的并集的面积
```cpp
#include<iostream>
#include<stdio.h>
#include<string.h>
#include<algorithm>
#include<cmath>
using namespace std;
const int maxn = 1005;
typedef double db;
const db EPS = 1e-6;
typedef pair<db, db> PDD;
int x[ maxn ], y[ maxn ], r[ maxn ];
int nx[ maxn ], ny[ maxn ], nr[ maxn ];
int xl[ maxn ], xr[ maxn ];

int s[ maxn ];
inline bool cmp( int a, int b) {
     if( x[ a ] - r [ a ] == x[ b ] - r [ b ] ) return x[ a ] + r[ a ] < x[ b ] + r [ b ];
     return x[ a ] - r[ a ] < x[ b ] - r [ b ];
}
inline bool cmp0(int a, int b){return r[ a ] > r [ b ];}
int n;
int L, R;
PDD se[ maxn ];
inline db f( db v){
   int sz = 0, i, j ;
   db ret = 0.0;
   for(i = L; i < R; ++ i){
        if( v <= xl[ i ] || v >= xr[ i ] ) continue;
        j = s[ i ];
        db d = sqrt(r[ j ]- (v - x [ j ]) * (v - x[ j ]));
        se[ sz ].first = y[ j ] - d;
        se[ sz ].second = y[ j ] +  d;
        ++ sz;   
   }
   sort( se, se + sz);
   for(i = 0; i < sz; ++ i){
         db nowl , nowr;
         nowl = se[ i ].first;
         nowr = se[ i ].second;
         for( j = i + 1; j < sz; ++ j) if(se[ j ].first > nowr) break;
         else nowr = max( nowr, se[ j ].second);
         ret += nowr - nowl;
         i = j - 1;      
   }
   return ret;
}
#define fs(x) ((x) < 0 ? (-(x)) : (x))
inline db rsimp( db l,db m, db r, db sl, db sm, db sr,db tot){
    db m1 = (l + m) * 0.5, m2 = (m + r) * 0.5;
    db s0 = f( m1), s2 = f( m2);
    db gl = (sl + sm + s0 + s0 + s0 + s0)*(m-l), gr = (sm + sr + s2 + s2 + s2 + s2)*(r-m);
    if( fs(gl + gr - tot) < EPS) return gl + gr;
    return rsimp( l, m1, m, sl, s0, sm, gl) + rsimp( m, m2,r, sm, s2, sr, gr);         
}

bool get(){ 
     if(1 != scanf("%d", &n)) return 0;
     int i, j = 0, k;
     for(i = 0; i < n; ++ i) scanf("%d%d%d", x + i, y + i, r + i), s[ i ] = i;
     sort( s, s + n, cmp0);
     for(i = 0; i < n; ++ i){
           for(k = 0; k < j; ++ k)
                 if( (nx [ k ] - x [s[i]]) * (nx [ k ] - x [s[i]])  + (ny [ k ] - y [s[i]]) *(ny [ k ] - y [s[i]])  
                     <= (nr[ k ] - r[ s[ i ] ]) * (nr[ k ] - r[ s[ i ] ]) ) break;
           if( k == j) {
               nx[ j ] = x[ s[ i ] ];
               ny[ j ] = y[ s[ i ] ];
               nr[ j ] = r[ s[ i ] ];
               s[ j ] = j;
               j ++;    
           }      
     }
     n = j;
     for(i = 0; i < n; ++ i) x[ i ] = nx[ i ], y[ i ] = ny[ i ], r[ i ] = nr[ i ];
     return 1;
}
  
void work(){
     sort( s, s + n, cmp) ;
     db lo, hi, ans = 0.0;
     int i, j;
     for(i = 0; i < n; ++ i) xl[ i ] = x[ s[ i ] ] - r[ s[ i ] ], xr[ i ] = x[ s[ i ] ] + r[ s[ i ] ], r[ s[i] ] *= r[ s[i] ];
     for(i = 0; i < n; ++ i){
           int ilo, ihi;
           ilo = xl[ i ];
           ihi = xr[ i ];
           for(j = i + 1; j < n; ++ j) {
                 if( xl[ j ] > ihi ) break;
                 ihi = max( ihi, xr[ j ]);
           }
           db lo = ilo;
           db hi = ihi;      
           L = i;
           R = j;
           db mid = (lo + hi) * 0.5;
           db sl = f(lo), sm = f(mid), sr = f(hi);
           db tot = sl + sr + sm + sm + sm + sm;
           ans += rsimp( lo, mid , hi, sl, sm , sr, tot );
           i = j - 1;
     }
     printf("%.3f\n", ans / 6.0);
}
  
int main(){
    while( get() ) work();
    return 0;
}

```

