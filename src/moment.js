"use strict";

module.exports.Moment = {
    _now: function () {
        return new Date(Date.now()).toJSON()
            .replace('T', ' ')
            .replace(/\.\d{3}Z/, '');
    },
}