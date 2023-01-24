---
title: ksm
---

```cpp
int ksm(int a,int b,int p){
	a%=p;
	int ans=1%p;
	while(b){
		if(b&1) ans=ans*a%p;
		a=a*a%p;
		b>>=1;
	}
	return ans;
}
```