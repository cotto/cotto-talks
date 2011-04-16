// BEGIN controls.js
function nextSlide() {
    window.location = $('#next-slide').attr('href');
}

function prevSlide() {
    window.location = $('#prev-slide').attr('href');
}

function indexSlide() {
    window.location = $('#index-slide').attr('href');
}

function startSlide() {
    window.location = 'start.html';
}

function closeSlide() {
    window.close();
}

function keyUp(evt) {
  if (!evt) evt = (window.event) ? event : null;
  if (!evt || evt.shiftKey || evt.ctrlKey || evt.metaKey || evt.altKey)
    return true;
  var keyCode = evt.keyCode;
  switch(keyCode) {
    case 33: // PageUp
    case 80:
      prevSlide(); break;
    case 34: // PageDown
    case 78:
    case 13:
    case 32:
      nextSlide(); break;
    case 73: 
      indexSlide(); break;
    default:
      // alert("You pressed " + evt.keyCode);
  }
}


document.onkeyup = keyUp

[% IF mouse_controls -%]
document.onclick = nextSlide
[% END -%]
// END controls.js
