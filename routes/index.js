var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Output is printed in console' });
});

function pascalTriangle(rows){
  var pascal = [];
      pascal[0] = [1];
      pascal[1] = [1,1];
  for (var row = 2; row < rows; row++){
      pascal[row] = [1];
      for (var col = 1; col <= row -1; col++){
          pascal[row][col] = pascal[row-1][col] + pascal[row-1][col-1];
          pascal[row].push(1);
      }
  }
  return pascal;
  }
  

  var numberOfRows = 20;

  for (var i = 0; i < pascalTriangle(numberOfRows).length; i++){
      //document.write(pascalTriangle(numberOfRows)[i]+"<br>");
      console.log(pascalTriangle(numberOfRows)[i]+"<br>");
  }

module.exports = router;
