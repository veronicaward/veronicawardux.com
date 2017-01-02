(function () {
  function initAnimateHeader() {
    var mainImage = $('.main-image');
    var mainTitles = $('.main-titles');

    $(window).scroll(function () {
      var bb = mainImage[0].getBoundingClientRect();
      var percentScrolled = 1.0;
      var translatePx = Math.floor(-bb.top / 3);
      var translate = 'translate3d(0px, ' + translatePx +  'px, 0px)';

      if (translatePx > 0) {
        percentScrolled = .75 - Math.abs(bb.top / (bb.bottom - bb.top));
      }

      if (bb.bottom >= 0) {
        mainTitles.css('opacity', percentScrolled);

        if (bb.top < 0) {
          mainTitles.css('transform', translate);
        }
      }
    });
  }

  $().ready(function () {
    if ($(window).width() > 700) {
      initAnimateHeader();
    }
  });
})();
