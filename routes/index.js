
/*
 * GET home page.
 */
var url = require( "url" );
var queryString = require( "querystring" );


exports.index = function(req, res){
  res.render('index', { title: 'Namemory' });
};
exports.thankyou = function(req, res){
  res.render('thankyou', { title: "Namemory" });
};
exports.submit = function(req, res){
    console.log("--------------------------");
    console.log("submitted email:"+req.query["text_email"]);
    console.log("submitted checkbox:" + req.query["checkbox_subscribe_news"]);    
    var mongo = require('mongodb');

    var mongoUri = process.env.MONGOLAB_URI || 
      process.env.MONGOHQ_URL || 
      'mongodb://localhost/mydb'; 

    mongo.Db.connect(mongoUri, function (err, db) {
      db.collection('mydocs', function(er, collection) {
        collection.insert({
                'time': String(new Date().getTime()),
                'email': req.query["text_email"],
                "subscribe_news": req.query["checkbox_subscribe_news"]
            }, {safe: true}, 
            function(er,rs) {
               res.render('thankyou', { title: "Namemory" });
            });
      });
    });
}
