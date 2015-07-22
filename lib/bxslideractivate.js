jQuery(document).ready(function() {
    /** Logo Slider **/
    function construcSlider(minS, maxS, slidW, wW, contr) {
        return jQuery('.bxslider').bxSlider({
            minSlides: minS,
            maxSlides: maxS,
            slideWidth: slidW,
            slideMargin: 0,
            viewportWidth: wW,
            controls: contr,
            pager: false,
            moveSlides:1
        });
    }
    /** Skew Slider **/
    function construcSkewSlider(wW,touchEnabled,contr) {
        var wid = wW+'%';
        return jQuery('.skew-slides').bxSlider({
            infiniteLoop: true,
            startSlide: 0,
            speed: 1000,
            easing: 'swing',
            viewportWidth: wid,
            touchEnabled: touchEnabled,
            controls: contr,
            auto: false
        })
    }

   function removeFlexContainer(){
      jQuery('ul.bxslider.flex-container').removeClass('flex-container');
   }

   function createFlexContainer(){
      jQuery('ul.bxslider').addClass('flex-container');
   }

    /** Rebuild Logo Slider **/
    function rebuildSlider(windowWidth) {

       var iconsInSlider = jQuery('ul.bxslider .icon').length;
       var shouldDisplaySlider = iconsInSlider > 7;


        if(typeof iconslider !== 'undefined') { // if iconslider exists then destroy it.
            iconslider.destroySlider();
        }

        if(windowWidth > 1200) {
            if( shouldDisplaySlider ){
               removeFlexContainer();
               iconslider = construcSlider(6,6,154.285714,'100%',true);
            }else{
               createFlexContainer();
            }
        } else if(windowWidth < 1199 && windowWidth > 740) {
           if( shouldDisplaySlider ){
              removeFlexContainer();
              iconslider = construcSlider(6,6,154.285714,'95%',true);
           }else{
              createFlexContainer();
           }
           createFlexContainer();
        }else if(windowWidth < 739 && windowWidth > 376) {
           removeFlexContainer();
            iconslider = construcSlider(3,3,112,'100%',true);
        } else if(windowWidth < 375 && windowWidth > 0) {
           removeFlexContainer();
            iconslider = construcSlider(2,2,112,'100%',true);
        }
    }

    /** Rebuild Skew Slider **/
    function rebuildSkewSlider(windowWidth) {
        if (typeof skewslider !== 'undefined' && skewslider.length) { // if iconslider exists then destroy it.
            skewslider.destroySlider();
        }
        if (windowWidth > 740) {
            skewslider = construcSkewSlider(80,false,true);
        }
        if (windowWidth < 740 && windowWidth > 0) {
            skewslider = construcSkewSlider(100,true,false);
        }
    }
    /** Resize function **/
    function resizedw() {
        if(jQuery('.bxSlider').length == 1) {
            rebuildSlider(jQuery(window).width());
        }
        if(jQuery('.skew-slider').length == 1) {
            rebuildSkewSlider(jQuery(window).width());
        }
    }
    var doit;
    window.onresize = function(){
        clearTimeout(doit);
        doit = setTimeout(resizedw, 100);
    };
    /** Initialize **/
    if(jQuery('.bxSlider').length == 1) {
        rebuildSlider(jQuery(window).width()); // Initalization logo icons
    }
    if(jQuery('.skew-slider').length == 1) {
        rebuildSkewSlider(jQuery(window).width()); // Initialization skew slider
    }
    //rebuildSlider(jQuery(window).width());
    //rebuildSkewSlider(jQuery(window).width());
});
