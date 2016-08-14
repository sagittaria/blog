var mongoose = require('mongoose');
mongoose.Promise = global.Promise;//百度搜索来的，加了就不再出现“Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html”
/*这是两处参考资料
http://stackoverflow.com/questions/38138445/node3341-deprecationwarning-mongoose-mpromise
https://github.com/Automattic/mongoose/wiki/5.0-Deprecation-Warnings
*/
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});
