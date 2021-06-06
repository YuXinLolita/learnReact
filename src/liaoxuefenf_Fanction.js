/*function add(a,b) {
    if(typeof a !== 'number' || typeof b !=='number') {
        throw{
            name:'TypeEror!',
            message:'add needs numbers'
        };
    }

    return a+b;
}

var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it();*/

'use strict';

/*var Student = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name+'is Runing...');
    }

};

function creatStudent (name) {
    var s = Object.create(Student);

    s.name = name ;

    return s;
}

var xiaoming = creatStudent('小明');

xiaoming.run();
*/

/*function Student (name) {

    this.name = name;
    this.hello = function () {
        alert('Hello,'+this.name+'!');
    }

}

var student = new Student('小明');

student.hello();
*/

function Student(props) {
   
    this.name = props.name;
    this.grage = props.grage || 1;
}

Student.prototype.hello = function () {
    alert('Hello,'+this.name+'!');
};

function createStudent (props) {
    return new Student(props || {} );
}

var xiaoming = createStudent({
    name: '小明'
});

xiaoming.hello();