var ANSWER = function () {
  var Side1 =parseInt(document.Number.Side1.value);
  var Side2 =parseInt(document.Number.Side2.value);
  var Side3 =parseInt(document.Number.Side3.value);

   var output = document.getElementById('output');

  if( Side3 >= Side2 + Side1 || Side2 >= Side3 + Side1 || Side1
    >= Side2 + Side3){
       alert("This Values cannot form a triangle");
    }else if(Side1===Side2 && Side2===Side3){
      alert("This is an Equilateral Triangle");
    }else if(Side1===Side2 || Side2===Side3 || Side1===Side3){
      alert("This is an Isosceles Triangle");
    }else{
      alert("This is a Scalene Triangle");
    }
    }
