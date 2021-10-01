var express = require('express');
var router = express.Router();

router.get('/sistema', function( _:any , res:any ) {
  res.send('respond from sistema and edit');
});

module.exports = router;