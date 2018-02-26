const Immutable = require('immutable');
const { Map }   = require('immutable');


// 不可变性 => 返回新值，原值不变
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)

const val_1 = map1.get('b') + " vs. " + map2.get('b') // 2 vs. 50
console.log('map1: ', map1);
console.log('map2: ', map2);
console.log('map1 === map2: ', map1 === map2);
console.log('map1.equals(map2): ', map1.equals(map2));

// 不可变性 => 用不可变
const map3 = map1;
console.log('map3 === map1: ', map3 === map1);
map3.set('a', 3);
console.log('map3 === map1: ', map3 === map1);


// 值相等判断
let map4_1 = Immutable.Map({a:1, b:1, c:1});
let map4_2 = Immutable.Map({a:1, b:1, c:1});
console.log('map4_2 === map4_1: ', map4_2 === map4_1);
console.log('Immutable.is(map4_2, map4_1): ', Immutable.is(map4_2, map4_1));

