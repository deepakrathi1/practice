window.onload = function() {
  var heading = document.getElementById('heading');
  var myVar = setInterval(myTimer, 1000);
  function myTimer() {
    heading.classList.toggle('colorchange');
  }
}