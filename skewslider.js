function reposition() {
    var windowW = jQuery(window).width();
    var measures = {};
    measures.window = windowW;
    if(measures.window > 740) {
        a = jQuery('li.slide:first-child').height();
        anglx = 25;
        radians = anglx * Math.PI / 180;
        h = a/Math.cos(radians)
        i = Math.pow(h,2)-Math.pow(a,2);
        b = Math.sqrt(i);
        meas = {};
        meas.a = a;
        meas.h = h;
        meas.b = b;
        var compensation = (meas.b/2);
        compensation = compensation+5;
        jQuery('ul.skew-slides').css('left',-compensation);
        var left = (meas.b/2);
        var right = (meas.b/2);
        jQuery('a.bx-prev').css('left',compensation);
        jQuery('a.bx-next').css('right',compensation);
    }
    if(measures.window < 740) {
        jQuery('ul.skew-slides').css('left','0');
    }
}
jQuery(window).on("resizeEnd", function(event) {
   reposition();
});
jQuery(document).ready(function() {
    console.log('skew slider');
   reposition();
});
