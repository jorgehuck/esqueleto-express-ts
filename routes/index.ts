var express = require('express');
var router = express.Router();

const Sistema = require('../app/Modules/Sistema/Routes');

router.use(Sistema);

/* GET home page. */
router.get('/', function( _:any , res:any ) {
  res.send('respond with a resource with TS ---');
});


module.exports = router;
