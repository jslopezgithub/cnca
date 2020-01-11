test('should nothing', () => {
    
});

// const holidayService = require('./holiday.service');
// const moment = require('moment');

// test('should check is holiday', () => {
    
//     const currentYear = (new Date()).getFullYear();
//     const date = '2020/01/01'; //should be true
//     const result = holidayService
//                     .isHoliday(date)
//                     .then(function(err, data) {                        
//                     //expect(err).toBe(null);
//                     expect(data.id).toBe(1);
//                     expect(data.year).toBe(2020);
//                     expect(data.is_continious).toBe(1);
//                 });
// });

// test('should check holiday is not a holiday', () => {

//     const today = moment().format('YYYY/MM/DD')
//     const year = today.year;

//     holidayService
//         .isHoliday(today)
//         .then(function(err, data) {

//             expect(err).toBe(null);
//             expect(data.is_continious).toBe(false);
//             expect(moment(data)).toBe(false);

//         });


// });

// test('should get all holidays', () => {
    
//     const count = 13;

//     const data = holidayService
//         .getAll()
//         .then(function(err, data) {
//             expect(count).toEqual(data.lenght);
//         });

// });

// test('should approve holiday', () => {

// });
