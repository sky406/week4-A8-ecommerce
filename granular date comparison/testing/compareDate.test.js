"use strict";
exports.__esModule = true;
// this test file should not log anything,
// if anything is logged, ther is an error in the code
var daymonthcomp_module_1 = require("../daymonthcomp.module");
function cleartime(date) {
    // this function simply sets all time values to 0 so it can be propperly compared 
    date.setHours(0, 0, 0, 0);
    return date;
}
// control same date
var control_date = new Date;
var expected = {
    before: false,
    year_dif: 0,
    month_dif: 0,
    date_dif: 0,
    hour_dif: 0,
    sec_dif: 0,
    mil_dif: 0,
    min_dif: 0,
    difference: 0
};
var result = (0, daymonthcomp_module_1.compareDate)(control_date, control_date);
if (JSON.stringify(expected) != JSON.stringify(result)) {
    console.error('t0 control dates not same');
    console.log("expected:".concat(JSON.stringify(expected), " \n result:").concat(JSON.stringify(result)));
}
// test 1 difference in year month/month/day
// test 1.1 year difference
var testd_1 = new Date('01-01-2022');
var testd_2 = new Date('01-01-2021');
expected = 1;
result = (0, daymonthcomp_module_1.compareDate)(testd_1, testd_2);
if (expected != result.year_dif) {
    console.error('t1.1 result not expected');
    console.log("expected:".concat(expected, " result:").concat(result.year_dif));
}
;
// test 1.2 month difference 
testd_1 = new Date('01-02-2022');
testd_2 = new Date('02-02-2022');
expected = 1;
result = (0, daymonthcomp_module_1.compareDate)(testd_1, testd_2);
if (expected != result.month_dif) {
    console.error('t1.2 result not expected');
    console.log("expected:".concat(expected, " result:").concat(result.month_dif));
}
;
// test 1.3 second difference
testd_1 = new Date(420696969);
testd_2 = new Date(69420000);
expected = 351276969;
result = (0, daymonthcomp_module_1.compareDate)(testd_1, testd_2);
if (expected != result.difference) {
    console.error('t1.3 result not expected');
    console.log("expected:".concat(expected, " result:").concat(result.difference));
}
;
