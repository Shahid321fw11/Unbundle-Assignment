console.log("helllo");
var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  // options
  //   cellAlign: "left",
  //   contain: true,
  draggable: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
});
