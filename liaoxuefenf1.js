/*var height = parseFloat(prompt('请输入身高（m）：'));
var weight = parseFloat(prompt('请输入体重（kg）：'));

var than = weight/(height*height);
var ibm = 0;

if(than < 18.5){
   ibm ='过轻';
}else if(than <= 25){
   ibm ='正常';
}else if(than <= 28){
   ibm ='过重';
}else if(than <= 32){
   ibm ='肥胖';
}else if(than >32){
    ibm ='严重肥胖';
}

document.getElementById('root').innerHTML = `您的身高是${height}m,体重是${weight}kg,IBM指标是${than},
根据IBM指标您的体重是${ibm}`;
*/
/*var a  =3;
if(a>=18){
    console.log('已成年');
}else {
    if(a>=6){
        console.log('未成年');
    }else {
        console.log('ta还是个孩纸');
    }
    
}*/

/*var x = 0;
var i = 1;
for (i;i>=10000;i++){
    x=x+i;
}
alert(x);
alert(i);
console.log(x);
console.log(i);
*/
/*var x =2;
var i=1;
for(i;i<=10;i++)
{
    x = i*x;
}
console.log(x);
console.log(i);*/

/*var arr = [
    'Apple',
    'Google',
    'MisroSoft',
];
 var x,i;
 for(i=0;i<arr.length;i++){
    x = arr[i];


 }
 alert(x);
 var b = arr.length;
 alert(b);*/

/*var x = 0;
for (;;){
    if(x>100){
        break;
    }
    x++;
}
alert(x);*/

/* var  xiaoming = {
    name:'小明',
    age:18,
    weight:84,
};

for (var key in xiaoming) {

    if(xiaoming.hasOwnProperty(key)) {
        console.log(key);
    }
    
}
*/
/*var arr = [
    1,2,3,4,5,
];

for (var i in arr){
    console.log(i);
    console.log(arr[i]);
}*/

/*var a =0;
var n = 0;

do{
a = a+1;
console.log(a);
 n =a+n;
 console.log(n);
}while(a<100)
document.getElementById('root').innerHTML=(n);*/

/*var arr = [
    'lisa','Bob','Marry',
];
console.log(`哈喽`);
var b = 0;
for(var i in arr) {
b= i;
}
for(b;b>=0;b--)
{
    console.log(`Hallo,${arr[b]}`);
}

for(var i = 0; i<arr.length;i++){
    console.log(`Hallo,${arr[i]}`);
}
var x = 0;
while(x< arr.length){
  console.log(`Hallo,${arr[x]}`);
  x= x+1;
}*/

/*var name1= [
    'Bob','Lisa','John',
];
var socore = [
    35,87,90,
];
var new2 = socore[0];
var new1 = name1[0];
alert(new1);
alert(new2);*/

/*var arr = new Set([
1,2,3,4,5,'1',
]);
*/

/*var arr= new Map([
    ['bob',45],
    ['lisa',34],
    ['John',88],
]);

for(var x of arr){
    console.log(x[0]+'='+x[1]);
}
var j;
alert(j);*
/*var b= arr.forEach(function (element,index,array){
    console.log(element+index+array);
});*/

/*arr.forEach((x,i,a)=> 
console.log(`element:${x},index:${i},array:${a}`)
);*/

var a = new Map([['name', 'Bob'], ['age', 18], ['sex', 'boy']]);

a.forEach(function (x, e, s) {
    return console.log('element:' + x + ',someElement:' + e + ',set:' + s);
});