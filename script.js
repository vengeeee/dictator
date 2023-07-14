var numStars = 200; // Adjust the number of stars
var maxGlow = 1.0; // Adjust the maximum glow intensity
var starContainer = document.getElementById('background');
var textContainer = document.getElementById('text-container');

for (var i = 0; i < numStars; i++) {
  var star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  starContainer.appendChild(star);
}

setTimeout(function() {
  textContainer.style.opacity = 1;
}, 1000);

document.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;

  var stars = document.getElementsByClassName('star');
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    var dx = Math.abs(x - star.offsetLeft - star.offsetWidth / 2);
    var dy = Math.abs(y - star.offsetTop - star.offsetHeight / 2);
    var dist = Math.sqrt(dx * dx + dy * dy);

    var glow = (maxGlow - dist / 200) < 0 ? 0 : (maxGlow - dist / 200);
    star.style.boxShadow = "0 0 " + (glow * 30) + "px #fff";
  }
});
