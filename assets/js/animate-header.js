(function () {
  //style="transform: translate3d(0px, 30.015px, 0px); opacity: 0.835082;"

  $().ready(function () {
    var mainImage = $('.main-image');
    var mainTitles = $('.main-titles');

    $(window).scroll(function () {
      var bb = mainImage[0].getBoundingClientRect();

      if (bb.bottom >= 0) {
        var percentScrolled = .75 - Math.abs(bb.top / (bb.bottom - bb.top));
        mainTitles.css('opacity', percentScrolled);
        if (bb.top < 0) {
          var translate = 'translate3d(0px, ' + (-bb.top / 3) +  'px, 0px)';
          mainTitles.css('transform', translate);
        }
      } else {
        var offset = Math.abs(bb.top) / 4;
        console.log('Cannot see header, do not animate');
      }
    });
  });
})();
