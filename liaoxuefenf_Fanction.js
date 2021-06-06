/*function num (x) {
    if(x>0){
        return x;
    }else{
        return -x;
    }
}*/

/*function variable(x){
    console.log('x='+x);
    for(var i = 0; i< arguments.length;i++){
        console.log(i+'='+arguments[i]);
    }
}

var  num =variable(9,10,23)
alert(num);*/

/*function variable (x,y,z) {
    if(arguments.length===2){
        z=y;
        y=null;

    }
    if(y){
        return x*y*z;
    }
    
    return x*z;
}
    
var a =  variable(5,2,8);
alert(a);*/
/*function sum(a,b,...rest) {
    var i= 0;
    
    var c =0;

    for(i;i<rest.length;i++){
        c= c+rest[i];
    }
    return a+b+c;
}
alert(sum(1,2));*/

/*function foo() {
    return (
        {
            name:'foo'
        }
    )
        
    
}
console.log(foo());*/

/*function area_of_circle(a,b) {
    b=3.14;
    if(arguments.length===2){
        b = arguments[1];
    }
    return b*a*a;
}
console.log(area_of_circle(2,3.1416));*/

/*function sum() {
    var i='X';
    i=i+'B';
    return i;
}



alert(sum());*/

/*function num(){
    var x=1;
    return x+1;
}
function num1(){
    var x = 3;
    return x+3;
}
alert(num());
alert(num1());*/
/*function num(){
   var 
   x=1,
   y=2,
   z;

   for(x;x<100;x++){
z=x+y;
   }
   return z;
};*/

/*var s = 'Learn java script';

alert(s);
window.alert(s);*/

'use strict';
/*function test() {
    var m = 0;
    for(let i= 0;i<100;i++){
        m = i+i;
    }
    return m;

}
alert(test());
*/
/*var [,,c] = ['hello','world','!'];
alert([c]);*/

/*var prosion = {
    name1:'bob',
    age:18,
    school:'NO.1 middle school',
    address:{
        city:'BeiJIng',
        zipcode:'100001',
        
    },
};*/

/*var {name1,age,address:{ci
console.log('name='+name1+',age='+ age+',city='+city+'zip='+zip);
var {city,zipcode} = address;
console.log('city='+ city+',zipcode='+zipcode);*/
/*
var {name1,age,string=true} = prosion;

console.log('name1='+name1+'age='+age+'string='+string);*/

// var {hostname:domain, pathname:path} = location;
// console.log(domain,path);
//function buildDate({year,month,day,hour=0,minute=0,second=0}) {
//  return new Date(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second);
//}
//function buildDate({year, month, day, hour=0, minute=0, second=0}) {
// return new Date(year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second);
//}

function buildDate(_ref) {
    var year = _ref.year,
        month = _ref.month,
        day = _ref.day,
        hour = _ref.hour,
        minute = _ref.minute,
        second = _ref.second;

    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
var time = {};
time.year = 2021;
time.month = 4;
time.day = 15;
time.hour = 6;
time.minute = 43;
time.second = 18;
console.log(buildDate(time.year, time.month, time.hour, time.minute, time.second)); //Mon Jan 01 2018 23:45:18 GMT+0800 (中国标准时间)