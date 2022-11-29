<template><div><h2 id="阅览室pta-详解" tabindex="-1"><a class="header-anchor" href="#阅览室pta-详解" aria-hidden="true">#</a> 阅览室pta（详解）</h2>
<p>天梯图书阅览室请你编写一个简单的图书借阅统计程序。当读者借书时，管理员输入书号并按下<code>S</code>键，程序开始计时；当读者还书时，管理员输入书号并按下<code>E</code>键，程序结束计时。书号为不超过1000的正整数。当管理员将0作为书号输入时，表示一天工作结束，你的程序应输出当天的读者借书次数和平均阅读时间。</p>
<p>注意：由于线路偶尔会有故障，可能出现不完整的纪录，即只有<code>S</code>没有<code>E</code>，或者只有<code>E</code>没有<code>S</code>的纪录，系统应能自动忽略这种无效纪录。另外，题目保证书号是书的唯一标识，同一本书在任何时间区间内只可能被一位读者借阅。</p>
<h3 id="输入格式：">输入格式：</h3>
<p>输入在第一行给出一个正整数N（≤10），随后给出N天的纪录。每天的纪录由若干次借阅操作组成，每次操作占一行，格式为：</p>
<p><code>书号</code>（[1, 1000]内的整数） <code>键值</code>（<code>S</code>或<code>E</code>） <code>发生时间</code>（<code>hh:mm</code>，其中<code>hh</code>是[0,23]内的整数，<code>mm</code>是[0, 59]内整数）</p>
<p>每一天的纪录保证按时间递增的顺序给出。</p>
<h3 id="输出格式：">输出格式：</h3>
<p>对每天的纪录，在一行中输出当天的读者借书次数和平均阅读时间（以分钟为单位的精确到个位的整数时间）。</p>
<h3 id="输入样例：">输入样例：</h3>
<pre>
<code>3
1 S 08:10
2 S 08:35
1 E 10:00
2 E 13:16
0 S 17:00
0 S 17:00
3 E 08:10
1 S 08:20
2 S 09:00
1 E 09:20
0 E 17:00
</code></pre>
<h3 id="输出样例：">输出样例：</h3>
<pre>
<code>2 196
0 0
1 60</code></pre>
<p>注意：因为题目中说有故障可能会有不完整的线路，只借不还不能算借的次数，只还不借也不能算借的次数，有借有还才是借的次数，所以我们需要结构体里加一个变量来存储他到底是被借了还是没有被借，只有在还的时候书被借出才能算借的次数。 </p>
<p>思路：用结构体数组来存储每组数的小时，分钟和是否被借出，下标是他的书号，当归还时判断他是否被借出，如果是就次数加一，更新他的状态为未被借出，然后计算他们的差值时间。</p>
<p></p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;vector&gt;
int day;
struct name{
	int wb;//0是未被借出，1是借出了
	int h,m;
};
int main(){
	scanf("%d",&amp;day);
	while(day--){
		struct name re[1005],temp;
		int count=0,res=0;//次数，总时间
		while(1){
			int id;
			char op;
			scanf("%d %c %d:%d",&amp;id,&amp;op,&amp;temp.h ,&amp;temp.m );
			if(id==0){
				break;
			}else{
				if(op=='E'){//当归还时
					if(re[id].wb ==1){//如果被借出
						count ++;//次数++
						res+=(temp.h -re[id].h )*60+temp.m -re[id].m ;
						re[id].wb =0;//更新状态
					}
				}else{
					re[id]=temp;//如果是借就存入结构体数组
					re[id].wb =1;//把状态改为借出
				}
			}
		}
		if(count ==0){//如果借的次数为0直接输出0 0
			printf("0 0\n");
		}else{//否则我们输出次数和总时间除次数四舍五入后的结果，注意四舍五入的方法是先变为double再加0.5之后变为int
			printf("%d %d\n",count,(int)((double)res/count+0.5));
		}
	}
	return 0;
}</code></pre>
<p></p>
<h2 id="奥运排行榜" tabindex="-1"><a class="header-anchor" href="#奥运排行榜" aria-hidden="true">#</a> 奥运排行榜</h2>
<p>每年奥运会各大媒体都会公布一个排行榜，但是细心的读者发现，不同国家的排行榜略有不同。比如中国金牌总数列第一的时候，中国媒体就公布“金牌榜”；而美国的奖牌总数第一，于是美国媒体就公布“奖牌榜”。如果人口少的国家公布一个“国民人均奖牌榜”，说不定非洲的国家会成为榜魁…… 现在就请你写一个程序，对每个前来咨询的国家按照对其最有利的方式计算它的排名。</p>
<h3 id="输入格式">输入格式:</h3>
<p>输入的第一行给出两个正整数N和M（≤224，因为世界上共有224个国家和地区），分别是参与排名的国家和地区的总个数、以及前来咨询的国家的个数。为简单起见，我们把国家从0 ~ N−1编号。之后有N行输入，第i行给出编号为i−1的国家的金牌数、奖牌数、国民人口数（单位为百万），数字均为[0,1000]区间内的整数，用空格分隔。最后面一行给出M个前来咨询的国家的编号，用空格分隔。</p>
<h3 id="输出格式">输出格式:</h3>
<p>在一行里顺序输出前来咨询的国家的<code>排名:计算方式编号</code>。其排名按照对该国家最有利的方式计算；计算方式编号为：金牌榜=1，奖牌榜=2，国民人均金牌榜=3，国民人均奖牌榜=4。输出间以空格分隔，输出结尾不能有多余空格。</p>
<p>若某国在不同排名方式下有相同名次，则输出编号最小的计算方式。</p>
<h3 id="输入样例">输入样例:</h3>
<pre>
<code>4 4
51 100 1000
36 110 300
6 14 32
5 18 40
0 1 2 3
</code></pre>
<h3 id="输出样例">输出样例:</h3>
<pre>
<code>1:1 1:2 1:3 1:4</code></pre>
<p>思路：本题需要创建结构体分别存金牌数，总奖牌数，人均金牌数，人均奖牌数，排名，写出四个排序的规则，记下他们在每个规则的排名和方法，因为排序之后分数相同的国家排名不相同，所以我们需要sort对排名来修改一下，当i&gt;0&amp;&amp;a[i]==a[i-1]时，将a[i]的排名等于a[i-1]的排名就可以了。 </p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;

using namespace std;
struct name{
	int j;//金牌
	int c;//总数
	double rj;//人均金牌
	double rc;//人均奖牌
	int num;//他的国家标号
	int rank;//排名
};
bool cmp1(name a,name b){
return  a.j &gt;b.j;

}
bool cmp2(name a,name b){
return a.c &gt;b.c ;

}
bool cmp3(name a,name b){
	return a.rj &gt;b.rj  ;

}
bool cmp4(name a,name b){
return a.rc &gt;b.rc ;

}
int main(){
	int n,m;
	scanf("%d%d",&amp;n,&amp;m);
	struct name a[300];
	for(int i=0;i&lt;n;i++){
		int jin,con,ren;
		scanf("%d%d%d",&amp;jin,&amp;con,&amp;ren);
		double renjin=jin*1.0/ren;//算出人均
		double rencon=con*1.0/ren;
		a[i].num =i;//把各个数据传入
		a[i].j =jin;
		a[i].c =con;
		a[i].rj =renjin;
		a[i].rc =rencon;
	}
	bool q=1;//注意输出的时候要求最后一个不能有空格，我们先用一个q记录一下第一次输入，然后第一次之后改变一下就可以了
	while(m--){
		int x;
		scanf("%d",&amp;x);
		int n1;//记录按cmp1排序之后的排名
		sort(a,a+n,cmp1);
		for(int i=0;i&lt;n;i++){//对排名进行优化
			if(a[i].j ==a[i-1].j &amp;&amp;i&gt;0){
				a[i].rank =a[i-1].rank ;
			}else a[i].rank =i+1;//注意我们存的时候是从0开始但是排名从1开始所以要加一
		}
		for(int i=0;i&lt;n;i++){
			if(a[i].num ==x){//当标号等于国家下标时把排名存入n1中
				n1=a[i].rank ;
				break;
			}
		}
		int n2;
		sort(a,a+n,cmp2);
		for(int i=0;i&lt;n;i++){
			if(a[i].c ==a[i-1].c &amp;&amp;i&gt;0){
				a[i].rank =a[i-1].rank ;
			}else a[i].rank =i+1;
		}
		for(int i=0;i&lt;n;i++){
			if(a[i].num ==x){
				n2=a[i].rank ;
				break;
			}
		}
		int n3;
		sort(a,a+n,cmp3);
		for(int i=0;i&lt;n;i++){
			if(a[i].rj  ==a[i-1].rj &amp;&amp;i&gt;0){
				a[i].rank =a[i-1].rank ;
			}else a[i].rank =i+1;
		}
		for(int i=0;i&lt;n;i++){
			if(a[i].num ==x){
				n3=a[i].rank ;
				break;
			}
		}
		int n4;
		sort(a,a+n,cmp4);
		for(int i=0;i&lt;n;i++){
			if(a[i].rc  ==a[i-1].rc &amp;&amp;i&gt;0){
				a[i].rank =a[i-1].rank ;
			}else a[i].rank =i+1;
		}
		for(int i=0;i&lt;n;i++){
			if(a[i].num ==x){
				n4=a[i].rank ;
				break;
			}
		}
		int flag=n1,f=1;//flag记录最小排名，f记录方法编号
		if(n2&lt;flag){
			flag=n2;
			f=2;
		}
		if(n3&lt;flag){
			flag=n3;
			f=3;
		}
		if(n4&lt;flag){
			flag=n4;
			f=4;
		}
		if(q==1){
			printf("%d:%d",flag,f);
			q=0;
		}else{
			printf(" %d:%d",flag,f);
		}
		
	}
	
	return 0;
}</code></pre>
<p> </p>
<h2 id="名人堂与代金券" tabindex="-1"><a class="header-anchor" href="#名人堂与代金券" aria-hidden="true">#</a> 名人堂与代金券</h2>
<p>对于在中国大学MOOC（http://www.icourse163.org/ ）学习“数据结构”课程的学生，想要获得一张合格证书，总评成绩必须达到 60 分及以上，并且有另加福利：总评分在 [G, 100] 区间内者，可以得到 50 元 PAT 代金券；在 [60, G) 区间内者，可以得到 20 元PAT代金券。全国考点通用，一年有效。同时任课老师还会把总评成绩前 K 名的学生列入课程“名人堂”。本题就请你编写程序，帮助老师列出名人堂的学生，并统计一共发出了面值多少元的 PAT 代金券。</p>
<h3 id="输入格式：">输入格式：</h3>
<p>输入在第一行给出 3 个整数，分别是 N（不超过 10 000 的正整数，为学生总数）、G（在 (60,100) 区间内的整数，为题面中描述的代金券等级分界线）、K（不超过 100 且不超过 N 的正整数，为进入名人堂的最低名次）。接下来 N 行，每行给出一位学生的账号（长度不超过15位、不带空格的字符串）和总评成绩（区间 [0, 100] 内的整数），其间以空格分隔。题目保证没有重复的账号。</p>
<h3 id="输出格式：">输出格式：</h3>
<p>首先在一行中输出发出的 PAT 代金券的总面值。然后按总评成绩非升序输出进入名人堂的学生的名次、账号和成绩，其间以 1 个空格分隔。需要注意的是：成绩相同的学生享有并列的排名，排名并列时，按账号的字母序升序输出。</p>
<h3 id="输入样例：">输入样例：</h3>
<pre>
<code>10 80 5
cy@zju.edu.cn 78
cy@pat-edu.com 87
1001@qq.com 65
uh-oh@163.com 96
test@126.com 39
anyone@qq.com 87
zoe@mit.edu 80
jack@ucla.edu 88
bob@cmu.edu 80
ken@163.com 70
</code></pre>
<h3 id="输出样例：">输出样例：</h3>
<pre>
<code>360
1 uh-oh@163.com 96
2 jack@ucla.edu 88
3 anyone@qq.com 87
3 cy@pat-edu.com 87
5 bob@cmu.edu 80
5 zoe@mit.edu 80</code></pre>
<p>思路：用struct结构体存他的字符串，总成绩和排名，然后排序，注意写排序规则的时候，如果他的成绩不同则返回较大的成绩，如果他的成绩相同，题目让按名字字母升序排列，题目中说字符串不超过15个，所以我们用一个从0到15的for循环，每次判断一下相应的字母一样不一样，如果不一样返回字典序较小的即可（如果没有名字的处理过不了最后一个测试点）。然后处理排名的问题，从1到n-1写个for循环，如果他与前面的一个人成绩一样的话，就让他的排名和前面的人的排名一样 ，最后输出1-k的排名的人即可</p>
<pre>
<code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
#include&lt;cstring&gt;

using namespace std;
struct name{
	char op[20];
	int con;
	int rank;
};
bool cmp(name a,name b){
	if(a.con !=b.con )return a.con &gt;b.con ;
	for(int i=0;i&lt;15;i++){
		if(a.op [i]!=b.op [i])return a.op [i]&lt;b.op [i];
	}
}
int main(){
	int n,g,k;
	long long con1=0,con2=0,c=0;
	struct name a[10010];
	cin&gt;&gt;n&gt;&gt;g&gt;&gt;k;
	for(int i=0;i&lt;n;i++){
		scanf("%s%d",a[i].op ,&amp;a[i].con );
		if(a[i].con &gt;=g&amp;&amp;a[i].con &lt;=100)con1++;
		else if(a[i].con &gt;=60&amp;&amp;a[i].con &lt;g)con2++;
	}
	sort(a,a+n,cmp);
	
	for(int i=0;i&lt;n;i++){
		a[i].rank =i+1;
	}
	for(int i=1;i&lt;n;i++){
		if(a[i].con ==a[i-1].con  ){
			a[i].rank =a[i-1].rank ;
		}
	}
	printf("%lld\n",con1*50+con2*20);
	for(int i=0;i&lt;n;i++){
		if(a[i].rank &lt;=k){
			printf("%d %s %d\n",a[i].rank ,a[i].op ,a[i].con );
		}else break;
	    
	}
	return 0;
}</code></pre>
<p></p>
</div></template>


