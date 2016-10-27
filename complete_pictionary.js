//load the mongoose module in our program
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var url = require('url');
var app = express();


var Schema = mongoose.Schema;

var imgPath1 = "public/images/car.png";
var imgPath2 = 'public/images/house.png';
var imgPath3 = 'public/images/elephant.png';
var imgPath4 = 'public/images/horse.png';
var imgPath5 = 'public/images/mouse.png';
var imgPath6 = 'public/images/sun.png';
var imgPath7 = 'public/images/moon.png';
var imgPath8 = 'public/images/circle.png';
var imgPath9 = 'public/images/Diamond.png';
var imgPath10 = 'public/images/triangle.png';
var imgPath11 = 'public/images/ship.png';
var imgPath12 = 'public/images/fish.png';
var imgPath13 = 'public/images/heart.png';
var imgPath14 = 'public/images/star.png';
var imgPath15 = 'public/images/tree.png';
var imgPath16 = 'public/images/tortoise.png';
var imgPath17 = 'public/images/pentagon.png';
var imgPath18 = 'public/images/dinosaur.png';
var imgPath19 = 'public/images/tiger.png';
var imgPath20 = 'public/images/lion.png';

//mongoose.connection.close();
//connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/pictionary');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Picture = mongoose.Schema({name : String ,img: {data: Buffer, contentType: String }});

/**
 * Lets Use our Models
 * */
var Pic = mongoose.model('Pic',Picture);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
//console.log(typeof Pic);

  Pic.remove(function (err) {
    if (err) throw err;

      console.error('removed old docs');

/*var car = new Pic;
    car.img.data = fs.readFileSync(imgPath1);
    car.img.contentType = 'image/png';
        car.name = 'car';
    car.save(function (err,car) {
      if (err) throw err;
      console.error('saved img to mongo');
          });
var house = new Pic;
    house.img.data = fs.readFileSync(imgPath2);
    house.img.contentType = 'image/png';
        car.name = 'house';
    house.save(function (err,house) {
      if (err) throw err;
      console.error('saved img to mongo');
          });
*/
var elephant = new Pic;
    elephant.img.data = fs.readFileSync(imgPath3);
    elephant.img.contentType = 'image/png';
        elephant.name = 'elephant';
    elephant.save(function (err,elephant) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var horse = new Pic;
    horse.img.data = fs.readFileSync(imgPath4);
    horse.img.contentType = 'image/png';
        horse.name = 'horse';
    horse.save(function (err,horse) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var mouse = new Pic;
    mouse.img.data = fs.readFileSync(imgPath5);
    mouse.img.contentType = 'image/png';
        mouse.name = 'mouse';
    mouse.save(function (err,mouse) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var sun = new Pic;
    sun.img.data = fs.readFileSync(imgPath6);
    sun.img.contentType = 'image/png';
        sun.name = 'sun';
    sun.save(function (err,sun) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var moon = new Pic;
    moon.img.data = fs.readFileSync(imgPath7);
    moon.img.contentType = 'image/png';
        moon.name = 'moon';
    moon.save(function (err,moon) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var circle = new Pic;
    circle.img.data = fs.readFileSync(imgPath8);
    circle.img.contentType = 'image/png';
        circle.name = 'circle';
    circle.save(function (err,circle) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var Diamond = new Pic;
    Diamond.img.data = fs.readFileSync(imgPath9);
    Diamond.img.contentType = 'image/png';
        Diamond.name = 'diamond';
    Diamond.save(function (err,Diamond) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var triangle = new Pic;
    triangle.img.data = fs.readFileSync(imgPath10);
    triangle.img.contentType = 'image/png';
        triangle.name = 'triangle';
    triangle.save(function (err,triangle) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var ship = new Pic;
    ship.img.data = fs.readFileSync(imgPath11);
    ship.img.contentType = 'image/png';
        ship.name = 'ship';
    ship.save(function (err,ship) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var car = new Pic;
    car.img.data = fs.readFileSync(imgPath1);
    car.img.contentType = 'image/png';
        car.name = 'car';
    car.save(function (err,car) {
      if (err) throw err;
      console.error('saved img to mongo');
          });
var house = new Pic;
    house.img.data = fs.readFileSync(imgPath2);
    house.img.contentType = 'image/png';
        car.name = 'house';
    house.save(function (err,house) {
      if (err) throw err;
      console.error('saved img to mongo');
          });

var fish = new Pic;
    fish.img.data = fs.readFileSync(imgPath12);
    fish.img.contentType = 'image/png';
        fish.name = 'fish';
    fish.save(function (err,fish) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var heart = new Pic;
    heart.img.data = fs.readFileSync(imgPath13);
    heart.img.contentType = 'image/png';
        heart.name = 'heart';
    heart.save(function (err,heart) {
      if (err) throw err;
      console.error('saved img to mongo');
});
var star = new Pic;
    star.img.data = fs.readFileSync(imgPath14);
    star.img.contentType = 'image/png';
        star.name = 'star';
    star.save(function (err,star) {
      if (err) throw err;
     console.error('saved img to mongo');
});
var tree = new Pic;
    tree.img.data = fs.readFileSync(imgPath15);
    tree.img.contentType = 'image/png';
        tree.name = 'tree';
    tree.save(function (err,tree) {
      if (err) throw err;
      console.error('saved img to mongo');

});
          var tortoise = new Pic;
    tortoise.img.data = fs.readFileSync(imgPath16);
    tortoise.img.contentType = 'image/png';
        tortoise.name = 'tortoise';
    tortoise.save(function (err,tortoise) {
      if (err) throw err;
      console.error('saved img to mongo');
});
          var pentagon = new Pic;
    pentagon.img.data = fs.readFileSync(imgPath17);
    pentagon.img.contentType = 'image/png';
        pentagon.name = 'pentagon';
    pentagon.save(function (err,pentagon) {
      if (err) throw err;
      console.error('saved img to mongo');
});
          var dinosaur = new Pic;
    dinosaur.img.data = fs.readFileSync(imgPath18);
    dinosaur.img.contentType = 'image/png';
        dinosaur.name = 'dinosaur';
    dinosaur.save(function (err,dinosaur) {
      if (err) throw err;
      console.error('saved img to mongo');

});
          var tiger = new Pic;
    tiger.img.data = fs.readFileSync(imgPath19);
    tiger.img.contentType = 'image/png';
        tiger.name = 'tiger';
    tiger.save(function (err,tiger) {
      if (err) throw err;
      console.error('saved img to mongo');
});
           var lion = new Pic;
    lion.img.data = fs.readFileSync(imgPath20);
    lion.img.contentType = 'image/png';
        lion.name = 'lion';
    lion.save(function (err,lion) {
      if (err) throw err;
      console.error('saved img to mongo');
        });
});
});
//mongoose.connection.close();

//app.use(express.static('public'));
app.get('/*', function (req, res) {

   var path = url.parse(req.url).pathname;
   var image = path.substr(1);

   var query = Pic.findOne({ 'name': image });

// selecting the `name` and `image` fields
   query.select('name img');


   query.exec(function (err, doc) {
          if (err) return next(err);
          else if(!doc) res.send("Sorry not in Database");
          else
          { res.contentType(doc.img.contentType);
          res.send(doc.img.data);
          } 
        });
});
var server = app.listen(3000, function () {
   //var host = server.address().address
   var port = server.address().port
   //var port = normalizePort(process.env.PORT || '8081');
   //var port;
   //app.set('port', process.env.PORT || 8081);
   //require('dns').lookup(require('os').hostname(), function (err, host, fam){
   var ip = require('ip');
   var host = ip.address();
   console.log("Pictionary app listening at http://%s:%s", host, port);
});
//});
//});
