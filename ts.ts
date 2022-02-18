import * as _ from 'lodash'
//bignumber
import { BigNumber } from 'bignumber.js'
//memoizee 
import memoize from "memoizee";

var memProfile = require('memoizee/profile');

//import moment from 'moment';
import moment from 'moment';
//
var mmt = require('moment-timezone');


//_.chunk(array, [size = 1]) : Phân chia một mảng thành nhiều mảng có cùng chiều dài, mảng phần tử cuối cùng là số phần tử
//  còn lại nếu mảng không thể chia đều.
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

//compact(array): Tạo ra một mảng mới mà loại bỏ tất cả các phần từ là null, 0, undefined, " " , NaN
console.log("compact", _.compact([1, null, 0, undefined, NaN, , 2]));

//_.difference(array, [values]): Lấy những phần tử không nằm trong [values] mà nằm trong array,
// nôm na thì là lấy những phần tử khác nhau của array và[values]
console.log("_.difference", _.difference([1, 2], [2, 3]));

//_.drop(array, [n=1]) Tạo ra một mảng mới bắt đầu từ vị trí n của mảng array.
console.log("drop", _.drop([1, 2, 3]));

//findIndex(array, [predicate=.identity], [fromIndex=0]): Tìm kiếm phần tử trong mảng và trả về index của phần tử tử đó.
// Index có giá trị - 1 khi phần tử đó không tồn tại trong mảng
// var users = [
//     { 'user': 'barney', 'active': false },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': true }
// ];
// console.log("findIndex", _.findIndex(users, function (o) { return o.user == 'barney'; }));

//_.flatten(array): chuyển mảng có array level n thành level (n-1)
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

//_.last(array): lấy phần tử cuối của mảng
_.last([1, 2, 3]);
// => 3

//concat nối mảng
var array = [1];
var other = _.concat(array, 2, [3], [[44], 2]);
console.log(other);
// => [1, 2, 3, [44,2]]
console.log(array);
// => [1]

//.reject(collection, [predicate=.identity]): ngược lại với _.filter, trả về mảng các phần tử mà predicate xác định false
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true }
];
console.log(_.reject(users, ['active', true]));// { 'user': 'fred', 'age': 40, 'active': true }

//.map(collection, [iteratee=.identity]): Tạo ra một mảng các giá trị bằng cách for từng phần tử trong collection thông qua iteratee.

_.map([4, 8], function square(n) {
    return n * n;
});
// => [16, 64]

//_.includes(collection, value, [fromIndex=0]): kiểm tra value có tồn tại trong collection hay không. Giá trị trả về sẽ là true/false
_.includes([1, 2, 3], 1);
// => true

//.find(collection, [predicate=.identity], [fromIndex=0]): for các phần tử của mảng và trả về phần tử đầu tiên mà predicate xác định true
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

_.find(users, function (o) { return o.age < 40; });
// => object for 'barney'

//.filter(collection, [predicate=.identity]): for các phần tử trong collection và trả về mảng các phần tử mà predicate xác định true.
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

_.filter(users, function (o) { return !o.active; });
// => objects for ['fred']

//_.isArray(value): Kiểm tra value có phải một array hay không, kết quả trả về là true/false
_.isArray([1, 2, 3]);
// => true

//_.isBoolean(value): Kiểm tra value có phải Boolean object hay không, kết quả trả về là true/false
_.isBoolean(false);
// => true

//_.isDate(value): Kiểm tra value có phải Date object hay không, kết quả trả về là true/false
_.isDate(new Date);
// => true

//_.isElement(value): Kiểm tra nếu giá trị có thể là một phần tử DOM, kết quả trả về là true/false
// _.isElement(document.body);
// => true

//_.isEqual(value, other): So sánh 2 phần tử other và value(so sanh giá trị sâu)
var object1 = { 'a': 1 };
var object2 = { 'a': 1 };
_.isEqual(object1, object2);
// => true

//_.max(array): trả về phần tử lớn nhất của array
_.max([4, 2, 8, 6]);
// => 8

//_.mean(array):Tính giá trị trung bình của các giá trị trong mảng
_.mean([4, 2, 8, 6]);
// => 5

//_.min(array): trả về phần tử nhỏ nhất của array
_.min([4, 2, 8, 6]);
// => 2

//_.sum(array): Tính tổng các giá trị của mảng
_.sum([4, 2, 8, 6]);
// => 20

//_.camelCase([string='']): convert từ camelCase sang camelcase
_.camelCase('Foo Bar');
// => 'fooBar'
_.camelCase('__FOO_BAR__');
// => 'fooBar'

//_.lowerCase([string='']): chuyển đổi chuỗi thành chữ thường
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
_.lowerCase('fooBar');
// => 'foo bar'

//_.snakeCase([string='']): chuyển đôỉ từ chuỗi snakeCase sang chuỗi snakecase
_.snakeCase('Foo Bar');
// => 'foo_bar'
_.snakeCase('fooBar');
// => 'foo_bar'

//bignumber.js
const res = new BigNumber(5000.333)
console.log("res", res);
//c | hệ số | số [] | Mảng các số cơ sở 1-14 sau dấu phẩy 
// e | số mũ | số | Số nguyên, bao gồm - 1000000000 đến 1000000000
// s | ký tên | số | -1 hoặc 1 âm hoặc dương

//plus:cộng minus:trừ times nhân div chia lấy dư
const a = new BigNumber(0.2)
const c = new BigNumber(0.1)

console.log("a.plus(c)", a.plus(c).toNumber());
console.log("a.minus(c)", a.minus(c).toNumber());
console.log("a.times(c)", a.times(c).toNumber());
console.log("a.div(c)", a.div(c).toNumber());

//var memoize = require("memoizee");
// cơ chế
// function memoizer(fun) {
//     let cache = {}
//     return function (n) {
//         if (cache[n] != undefined) {
//             return cache[n]
//         } else {
//             let result = fun(n)
//             cache[n] = result
//             return result
//         }
//     }
// }
var fn = function (one: string, two: number) {
    console.log(one, two);
};
let memoized = memoize(fn, { length: 2 });
// memoized("foo", 3);
// memoized("foo", 3); // Cache hit
//số lượng đối số nhận vào nó đọc từ độ dài length nên ta có thể thêm {length:2} để có thể bù cho đủ số lượng nhận
memoized("foo", 3); // Assumed: 'foo', undefined
memoized("foo", 2);
// memoized("foo", 2);
// memoized("foo", 3); // Assumed: 'foo', undefined
// //hoặc cho false để có thể nhận mọi giá trị
// // memoized = memoize(fn, { length: false });
// // memoized("foo");
// // memoized("foo");
// memoized("foo", 5); // Assumed: 'foo', undefined
// memoized("foo", 6); // Assumed: 'foo', undefined

// memoized("foo", 3);
// memoized("foo", 3);
// memoized("foo", 4);

memProfile.statistics; // Statistics accessible for programmatic use
console.log(memProfile.log());
//moment khác moment ts : moments thêm sửa đổi múi giờ
const day = new Date(2020, 2, 23);
console.log(day);
const now = moment();//Để có được ngày và giờ hiện tại, chỉ cần gọi moment () 
console.log("now", now);
moment.locale('en');// đổi đơn vị ngôn ngữ 
console.log(moment(day).fromNow());//so sánh times theo năm
console.log(moment().add(7, 'hour'));//moment().add:thêm 
console.log(moment().subtract(7, 'days'));//lùi thời gian   
moment("2012-02", "YYYY-MM").daysInMonth() // 29  Get số ngày trong tháng hiện tại
console.log("date", moment().format('DD/MMM/YYYY/HH:mm'));
console.log("date01", moment().add(2, 'month').quarters());//
console.log("unix", moment.unix(2));
console.log("time", moment('2013-09-01T00:00:00.000').quarters(4));
console.log(moment.utc().format());
console.log('format', (moment().format()));
console.log('moment', moment());
console.log('moment quarters', moment().quarters(), moment().quarter());
console.log(mmt().tz("America/Los_Angeles").format());
const formatDate = 1399919400000;//mili giây
const responseDate = moment(formatDate).format('DD/MMM/YYYY');
console.log("responseDate", responseDate);
console.log(moment("1995-12-25"));
console.log(moment("12-25-1995", "DD-DD-YYYY"));
//lấy phút
console.log(moment().minute());//moment().get('minute');set:moment().set('minute', 20);
//lấy giờ
console.log(moment().hour());//moment().get('hour');set:moment().set('hour', 13);
//lấy ngày tháng
console.log(moment().date());//moment().get('date');set:moment().set('date', 1);
//lấy tháng trả từ 0-11 tương đương 1-12
console.log(moment().month());//moment().get('month');set:moment().set('month', 3); 
// lấy năm
console.log(moment().year());//moment().get('year');set:moment().set('year', 2013);
//bắt đầu tiên của x('x')
console.log(moment().startOf('isoWeek'), moment().startOf('year'));
//
const jun = mmt("2014-06-01T12:00:00Z");
const dec = mmt("2014-12-01T12:00:00Z");
console.log(jun.tz('America/Los_Angeles').format('ha z'))
console.log(dec.tz('America/Los_Angeles').format('ha z'))  // 4am PST
console.log(jun.tz('America/New_York').format('ha z'))   // 8am EDT
console.log(dec.tz('America/New_York').format('ha z'))  // 7am EST
console.log(jun.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(dec.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(jun.tz('Australia/Sydney').format('ha z')) // 10pm EST
console.log(dec.tz('Australia/Sydney').format('ha z')) // 11pm EST

const newYork = mmt.tz("2014-06-01 12:00", "America/New_York");
const losAngeles = newYork.clone().tz("America/Los_Angeles");
const london = newYork.clone().tz("Europe/London");

console.log(newYork.format());    // 2014-06-01T12:00:00-04:00
console.log(losAngeles.format()); // 2014-06-01T09:00:00-07:00
console.log(london.format());     // 2014-06-01T17:00:00+01:00
const date = new Date()
console.log(date)

//Method to format Date:
//Có thể truyền tối đa 7 đối số vào hàm để tạo ra ngày/giờ :
// + Year: 4 ký tự năm
// + Month: (0-11). Month là zero-indexed
// + Day
// + Hour
// + Minutes
// + Seconds
// + Milliseconds

//toString :
//Example :
const date1 = new Date(2019, 0, 23, 17, 23, 42)// Khai bao ngày tháng sử dụng đối số
console.log("toString :", date1.toString())

//toDateString :
//Example :
console.log("toDateString :", date1.toDateString())

//toLocaleString :
//Example :
console.log("toLocaleString :", date1.toLocaleString())

//toLocaleDateString :
//Example :
console.log("toLocaleDateString :", date1.toLocaleDateString())

//toUTCString :
//Example :
console.log("toUTCString :", date1.toUTCString())

//toISOString :
//Example :
console.log("toISOString :", date1.toISOString())

//Comparing dates
//Example : 
const earlier = new Date(2019 - 3 - 26)// Khai báo ngày tháng sử dụng datestring
const later = new Date(2019 - 3 - 26)
console.log(earlier < later)//So sanh lon hon // true
const isSameTime = (earlier: any, later: any) => earlier.getTime() === later.getTime()
console.log(isSameTime(earlier, later))//So sanh bang //false
const failDay = new Date(2021, 3, 33)
console.log(failDay.toLocaleDateString())
const dayStamp = new Date(1645000000000)// Sử dụng timestamp để khởi tạo ngày tháng.
console.log(dayStamp.toDateString())//16/02/2022
//typescript
//modules
// VN
const dayVn = new Date()
console.log('dayVn', dayVn);
console.log('dayVn', moment(dayVn).format("MM-DDD-YYYY"));
console.log(mmt.tz("2013-12-01", "America/Los_Angeles").format());
console.log(mmt.tz("2013-01-01", "America/Los_Angeles").format());
