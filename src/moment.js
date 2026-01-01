"use strict";

const d = new Date();
const _d = {
    YYYY: d.getFullYear(),
    YY: d.getFullYear().toString().slice(-2),
    MM: d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1,
    DD: d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
    HH: d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
    mm: d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
    ss: d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
};

module.exports.Moment = {
    /**
     * @param {string} format - The format string. Default is 'YYYY-MM-DD HH:mm:ss'.
     * @returns {string} The formatted date string.
     */
    _now: function (format = 'YYYY-MM-DD HH:mm:ss') {
        const formatString = format.replace('YYYY', _d.YYYY)
            .replace('YY', _d.YY)
            .replace('MM', _d.MM)
            .replace('DD', _d.DD)
            .replace('HH', _d.HH)
            .replace('mm', _d.mm)
            .replace('ss', _d.ss);
        return formatString;
    },
}