//생성자 함수 선언
function Person(name) {
    this.name = name || "brad";
}

Person.prototype.getName = function() {
    return this.name;
}

//생성자 함수 선언
function Korean(name) {}

Korean.prototype = new Person();
