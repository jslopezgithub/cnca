const connect = require('../../db/connection');

test('should connect to database', () => {
  connect((q) => {
    const activityTypesModel = q.define('activity_types', {
      id: { type: 'serial', key: true }, // the auto-incrementing primary key
      nome: { type: 'text' }
    });

    activityTypesModel.all({ }, (err, data) => {
      expect(err).toBe(null);
      expect(data.length).toBe(10);
    });
  });
});
