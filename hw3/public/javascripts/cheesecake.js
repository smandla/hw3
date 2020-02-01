
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("#order").click(function () {
      
      var text1 = document.getElementById('notes').value.toLowerCase();
      
      if ( text1.indexOf('vegan') != -1 ) {
         alert('Vegan options are not available!');
      }   
     // <!--External Citation: https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_elementcreate
      else {
          var myNode = document.getElementById("body");
          while (myNode.firstChild) {
              myNode.removeChild(myNode.firstChild);
          }
          var para = document.createElement("p");
          var node = document.createTextNode("Thank you. Your order has been placed!");
          para.appendChild(node);
          var element = document.getElementById("body");
          element.appendChild(para);
       }
   });
});