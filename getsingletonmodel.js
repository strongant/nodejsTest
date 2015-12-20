var hello = require('./singletonmodel');
var he = new hello();
he.setName('xiaoming');
he.sayHello();

var he2 = new hello();
he2.setName('yfc');
he2.sayHello();

