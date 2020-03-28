const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/coffee-match',function(req,res){
  res.sendFile(path.join(__dirname+'/coffee-match.html'));
});

router.get('/match',function(req,res){
  res.sendFile(path.join(__dirname+'/match.html'));
});

router.get('/share',function(req,res){
  res.sendFile(path.join(__dirname+'/share.html'));
});

router.get('/preparation-guides',function(req,res){
  res.sendFile(path.join(__dirname+'/preparation-guides.html'));
});

router.post('/api/coffee_match_answers', function(req,res){
	res.sendStatus(200);
})

//add the router
app.use(express.static(__dirname + '/public/html'));
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.listen(process.env.PORT || 8080);