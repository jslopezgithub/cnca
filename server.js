const express = require('express');

const app = express();
const orm = require("orm");
const PORT = process.env.PORT || 5000;

app.use(express.static('./Frontend/build'));

app.use(orm.express({
  user:     "root",
  pass:     "",
  host:     "localhost",
  database: "cnca",
  protocol: 'mysql',
  port:     '3306',
  query:    {pool: true}
}, { 

  define: function(db, models, next) {
  
  
  models.activityType = db.define("activity_types", {
    id: { type: 'serial', key: true },
    nome: { type: 'text' }
  });

  models.activities = db.define("activities", {
    id:               { type: 'serial', key: true },
    activity_date:    { type: "date" },
    start_time:       { type: "date", time: true },
    end_time:         { type: "date", time: true },
    volunteer_id:     { type: "number"  },
    activity_type_id: { type: "number"  }
  });

  next();
}

}))

app.get("/api/activities/types", (req, res) => {

  req.models.activityType.all({}, 
    
    (err, data) => {
    
    if(err) {
      console.log(err);
    }

    res.send(data);  
  })
  
  
})

app.listen(PORT, () => { 
  console.log("app started");
});
