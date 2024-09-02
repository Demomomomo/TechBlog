---
高精度加减乘除运算
---

设A和B为超过1e18的大整数，a和b为小于2e9的小整数  

## 如何存大整数

输入的大整数用字符串存，计算之前用数组存  


每一位用数组存，从低位到高位分别存入数组。  

这样存如果遇到进位，在最高位进1，就是在数组末尾加一个数，这样操作比较简单。如果从高位到低位存，如果遇到进位，我们需要最高位进一，也就是数组的最开头加上一位，那就需要把数组整体向后挪一位之后再在开头加上一位，比较麻烦  

例如：数字17435，用a数组存，那么就是  
数字：1 7 4 3 5  
a[ i ] ：5 3 4 7 1  


## 高精度加法
求A+B  

设a数组存A，b数组存B  

那么对于第i位的计算，其实是：a[i]+b[i]+t，a[i]存A的第i位上的数，b[i]存B上第i位上的数，t存前一位向第i位进位的数：如果没有进位就为0，如果进位就为1  

```cpp
#include<bits/stdc++.h>
using namespace std;
string A,B;
vector<int> a,b,c;//存一个较大的加数，一个较小的加数和结果

int main(){
	cin>>A>>B;
	int n,m;
	n=A.size();
	m=B.size();
	//处理输入的大整数，将较长的放入a中，较短的放入b中
	if(n>=m){
		for(int i=n-1;i>=0;i--){
			int op=A[i]-'0';
			a.push_back(op);
		}
		for(int i=m-1;i>=0;i--){
			int op=B[i]-'0';
			b.push_back(op);
		}
	}else{
		for(int i=m-1;i>=0;i--){
			int op=B[i]-'0';
			a.push_back(op);
		}
		for(int i=n-1;i>=0;i--){
			int op=A[i]-'0';
			b.push_back(op);
		}
		swap(n,m);
	}
	//对每一位进行计算
	int t=0;
	for(int i=0;i<n;i++){
		int op=a[i];
		if(i<m)op+=b[i];
		op+=t;
		if(op>=10){
			op-=10;
			t=1;
		}else t=0;
		c.push_back(op);
	}
	//注意当最高位还需要向前进位的时候，在结果的最后进一位
	if(t==1)c.push_back(1);
	int x=c.size();
	for(int i=x-1;i>=0;i--){
		cout<<c[i];
	}
	
	return 0;
}
```

## 高精度减法

求A-B  

设a数组存被减数A，b数组存被减数B  

如果A>=B，那么结果就是A-B，如果A< B,那么结果就是-（B-A）  

计算第i位，其实就是：a[i]-b[i]+t（+10），t存前一位是否借位，如果借位就-1，如果没有借位就为0。然后判断结果是否大于0，如果小于0就需要向后一位借位，如果借位就再加上10  

```cpp
#include<bits/stdc++.h>
using namespace std;
string A,B;
vector<int> a,b,c;

vector<int> jian(string A,string B){
	vector<int> c;
	int n=A.size();
	int m=B.size();
	for(int i=n-1;i>=0;i--)a.push_back(A[i]-'0');
	for(int i=m-1;i>=0;i--)b.push_back(B[i]-'0');
	int t=0;
	for(int i=0;i<n;i++){
		int op=a[i];
		if(i<m)op-=b[i];
		op+=t;
		if(op<0){
			op+=10;
			t=-1;
		}else{
			t=0;
		}
		c.push_back(op);
	}
	//注意：当前面有前置0的时候需要删除，如00087,000就需要删掉，但是如果是000，我们就不能将0全删除，需要留一个0
	while(c.size()>1&&c.back()==0){
		c.pop_back();
	}
	return c;
}


int main(){
	cin>>A>>B;
	int f=false;
	vector<int> c;
	//判断A和B谁大
	if(A.size()>B.size()){//A的长度长就是A大
		c=jian(A,B);
	}else if(A.size()==B.size()){//当长度相等时可以直接比两个字符串的字典序（字典序比较方法：从左向右每一位相比较，第一次出现不同的字符的时候，字符大的字符串就大）
		if(A>=B)c=jian(A,B);
		else {
			c=jian(B,A);
			f=true;
		}
	}else{//当B长的时候就是B大
		c=jian(B,A);
		f=true;
	}
	if(f)cout<<"-";
	int x=c.size();
	for(int i=x-1;i>=0;i--){
		cout<<c[i];
	}
	
	return 0;
}
```

## 高精度乘法

计算A*b  

注意：A是大整数，b为小整数，一般计算的都为A*b，大整数A*大整数B的情况很少，在此我们计算A*b  

对每一位i，就是  

c[i]=(a[i]*b+t[i])%10  

t[i+1]=(a[i]*b+t[i])/10  

t[i]为第i位的进位  

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f8cbd16d718843f185fba11596e72e11.png#pic_center)

```cpp
#include<bits/stdc++.h>
using namespace std;
string A;
int b;
vector<int> a,c;


int main(){
	cin>>A>>b;
	if(b==0){
		cout<<0;
		return 0;
	}
	int n=A.size();
	for(int i=n-1;i>=0;i--){
		a.push_back(A[i]-'0');
	}
	int t=0;
	for(int i=0;i<n;i++){
		int op=a[i]*b+t;
		c.push_back(op%10);
		t=op/10;
	}
	while(t){
		c.push_back(t%10);
		t/=10;
	}
	int x=c.size();
	for(int i=x-1;i>=0;i--){
		cout<<c[i];
	}
	return 0;
}
```


## 高精度除法      

计算A/b  

对于第i位数，设t[i]为上一位遗留的数，那么这时候参与运算的数应该为t[i]*10+a[i]  

那么商c[i]应该为（t[i]*10+a[i]）/b  

该位遗留且参与到下一位计算的数就是（t[i]*10+a[i]）%b  

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/405c05d4c79a4e1aa857bc7c85fadc06.png#pic_center)
```cpp
#include<bits/stdc++.h>
using namespace std;
string A;
int b;
vector<int> a,c;
int y;
vector<int> chu(vector<int> a,int b){
	int m=a.size();
	vector<int> c(m);
	int t=0;
	for(int i=m-1;i>=0;i--){
		c[i]=(t*10+a[i])/b;
		t=(t*10+a[i])%b;
	}
	if(t)y=t;//余数
	//清除前置0
	while(c.size()>1&&c.back()==0){
		c.pop_back();
	}
	return c;
}
int main(){
	cin>>A>>b;
	int n=A.size();
	for(int i=n-1;i>=0;i--){
		a.push_back(A[i]-'0');
	}
	y=0;
	c=chu(a,b);
	int x=c.size();
	for(int i=x-1;i>=0;i--){
		cout<<c[i];
	}
	cout<<endl;
	cout<<y;
	return 0;
}
```