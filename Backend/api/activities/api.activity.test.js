const db = require('../connection');
const moment = require('moment');

test('should create activity', () => {
    
    db('activities')
    .insert
    ([{         
        activity_date: moment().format('YYYY-MM-DD'),
        start_time: '08:30:00',
        end_time:   '10:30:00',
        activity_type_id: 2,
        volunteer_id: 5
    }])
    
    .then((data, err) => {
        expect(err == false).toBe(true);
        expect(data.id).toBe(26);
    })
    
    .catch((err) => { expect(err == false).toEqual(true); }) 

});



 test('should delete activity', () => {
     const activity_id = 25; 
     db('activities')
         .where({ id: activity_id })
         .del()
         .then(function(err) {
             expect(err == false).toBe(true);
         });
 });

 test('should get activity by id', () => {
     const activity_id = 1;
     db.select('*')
     .where({ id: activity_id })
     .from('activities')
     .then(function(data, err){
         expect(data.activity_date = '2019-02-12');
         expect(data.start_time = '08:00:00');
     })
 });
 
 test('should get activities beetween dates', () => {
  
     const startDate = '2019-02-12';
     const endDate   = '2019-04-12';
     const userId = 1;
     db.select('*')
         .from('activities')
         .where({ volunteer_id: 1 })
         .andWhereBetween('activity_date', ['2019-02-12','2019-04-12'])
         .then(function(data, err) {
             expect(data.length).toEqual(3);
             expect(data[2].start_time).toEqual('08:30:00');
         })
 });
 test('should get user activities beetween dates', () => {
  
 });