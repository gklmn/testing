
// Rep�re le warning "pas de tarif" et cache le parent
var myDiv = Array.prototype.slice.call(document.querySelectorAll('notification'));

myDiv.map(function (x) {
    if (x.parentNode.tagName === 'PRICE-LAYOUT') {
        x.parentNode.style.color = 'red';
        x.parentNode.style.display = 'none';
    }
    x.style.color = "red";
    x.style.display = "none";
    x.classList.add("mystyle");

});
