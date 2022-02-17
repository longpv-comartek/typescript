var timezone = require('moment-timezone');
import moment from 'moment';

const data = {
    'Vn': {
        status: false,
        start: false,
        stop: false,
        timezone: 7
    }
}
const time = timezone().format('YYYY/MM/DD hh:mm:ss').toString();
const GMTVN = 60 * 60 * 1000;
const toTimestamp = (strDate: string) => {
    const dt = Date.parse(strDate);
    return dt;
}
const toTimenow = (strDate: string) => {
    const dt = Date.parse(strDate);
    return dt;
}
const date = new Date().toString()
const timeAnh = toTimenow(date) - 7 * GMTVN;
// const tzGreenwich = timezone.tz("2022-02-17 9:12", "ETC/Greenwich")
var c = new Date(timeAnh);
const hours = c.getHours();
const day = c.getDay();
const ngay = c.getDate();
let msec = Date.parse(c.toString());
console.log(c);
console.log(moment(c).format("DD/MM/YYYY hh:ss"));//ngày bên Greenwich

