const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://mokeshmokesh86:mokesh1985@ac-vtrvjhh-shard-00-00.fbefv5z.mongodb.net:27017,ac-vtrvjhh-shard-00-01.fbefv5z.mongodb.net:27017,ac-vtrvjhh-shard-00-02.fbefv5z.mongodb.net:27017/test?ssl=true&replicaSet=atlas-gcukx1-shard-0&authSource=admin&appName=Cluster0'
)
.then(() => {
  console.log('MongoDB Connected');
})
.catch((err) => {
  console.log('Connection Error:', err);
});