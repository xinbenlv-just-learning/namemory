
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Namemory' });
};
exports.thankyou = function(req, res){
  res.render('thankyou', { title: "Namemory" });
};

