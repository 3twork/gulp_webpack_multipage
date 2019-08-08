if($('body').find('.workshop-resume')){
  function moreText(e, t) {
    function n(t) {
      t.preventDefault();
      var n = $(this),
      o = n.find(".btn-text"),
      i = n.closest(e),
      r = i.find(".less-content"),
      a = i.find(".more-content"),
      s = i.hasClass("is-show-more");
      s ? (i.removeClass("is-show-more"), r.show(), a.hide(), o.text(n.attr("data-more"))) : (i.addClass("is-show-more"), r.hide(), a.show(), o.text(n.attr("data-less")))
    }
    var o = {
      lineNum: 2.5
    },
    i = $.extend({},
    o, t),
    r = $(e);
    i.lineNum = r.attr("show-line") ? Number(r.attr("show-line")) : i.lineNum,
    r.each(function() {
      var e = $(this),
      t = e.find(".more-content"),
      n = e.find(".btn-more"),
      o = e.find(".btn-text"),
      r = $.trim(e.attr("show-mode")),
      a = t.innerWidth(),
      s = $.trim(t.text()),
      l = s.length,
      c = parseInt(t.css("font-size")),
      u = Math.floor(a / c),
      d = u * i.lineNum;
      if (l <= u * Math.ceil(i.lineNum)) return n.remove(),
      void t.show();
      var f = s.slice(0, d) + "...";
      $("<div>", {
        text: f,
        "class": "less-content"
      }).insertBefore(t);
      var p = e.find(".less-content");
      "less" == r && (t.hide(), p.show(), e.removeClass("is-show-more"), o.text(n.attr("data-more"))),
      "more" == r && (t.show(), p.hide(), e.addClass("is-show-more"), o.text(n.attr("data-less")))
    }),
    $("body").off('click', ".btn-more").on('click', ".btn-more", n)
  }
  moreText('#workshopResume')
}
console.log('test')
