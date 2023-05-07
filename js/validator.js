var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    Validator.prototype.validate = function (data) {
        var props = {
            "min_len": undefined,
            "max_len": undefined
        };
        var validArray = [];
        if (!this.isJson(data)) {
            return false;
        }
        var valid = false;
        data = JSON.parse(data);
        Object.keys(data).forEach(function (key) {
            var filters = data[key][1].indexOf('|') != -1 ? data[key][1].split('|') : [];
            filters.forEach(function (filter) {
                filter = filter.trim();
                if (filter == 'required') {
                    valid = data[key][0].trim().length > 0;
                }
                else if (filter.startsWith('min_len:')) {
                    props.min_len = filter.length > 8 ? filter.split(':')[1] : undefined;
                }
                else if (filter.startsWith('max_len:')) {
                    props.max_len = filter.length > 8 ? filter.split(':')[1] : undefined;
                }
                else if (filter == 'email') {
                    if (data[key][0].trim().length > 0) {
                        valid = !data[key][0].trim().startsWith('@') && ['@yandex.ru', '@mail.ru', '@gmail.com'].some(function (email) { return data[key][0].toLowerCase().endsWith(email); });
                    }
                    else {
                        valid = false;
                    }
                }
                else {
                    valid = false;
                }
            });
            if (props.min_len != undefined || props.max_len != undefined) {
                if (props.min_len != undefined && props.max_len == undefined) {
                    valid = data[key][0].length >= props.min_len;
                }
                else if (props.min_len == undefined && props.max_len != undefined) {
                    valid = data[key][0].length <= props.min_len;
                }
                else {
                    valid = data[key][0].length >= props.min_len && data[key][0].length <= props.max_len;
                }
                props.min_len = undefined;
                props.max_len = undefined;
            }
            validArray.push(valid);
        });
        return validArray.indexOf(false) == -1;
    };
    return Validator;
}());