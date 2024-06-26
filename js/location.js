$(document).ready(function(){

    function textDesc(num, obj, obj_desc) {
        $('.day-desc-block').removeClass('active');
  
        var str = obj.attr('day-str');
        obj_desc.find('.day-str').text(str);
        obj_desc.addClass('active');
    }

    function DayDesc(num) {
      var obj = $('.day-item[day-num="'+ num +'"]');
      var obj_desc = $('#day-info-'+ num +'');

      textDesc(num, obj, obj_desc);

      //btns
      obj_desc.find('.btns').remove();
      if(obj.hasClass('first')) {
        obj_desc.find('.day-desc').append('<div class="btns"><div class="btn-block"><a href="#" class="btn whitebtn2 next-btn"><span>NEXT DAY</span><svg id="next-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5375 18.3455"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>next-btn</title><path class="cls-1" d="M.05,15.4441,6.5709,9.1725.05,2.9006.001,0l9.5375,9.173L.001,18.345Z" transform="translate(-0.001 0.0005)"/></svg></a></div></div>');
      } else if(obj.hasClass('last')) {
        obj_desc.find('.day-desc').append('<div class="btns"><div class="btn-block"><a href="#" class="btn whitebtn2 prev-btn"><svg id="prev-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5375 18.3455"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>prev-btn</title><path class="cls-1" d="M9.5385,18.345.001,9.1725,9.5385,0,9.4893,2.9006,2.9686,9.1725l6.5207,6.2716Z" transform="translate(-0.001 0.0005)"/></svg>PREV DAY</a></div></div>');
      } else {
        obj_desc.find('.day-desc').append('<div class="btns"><div class="btn-block"><a href="#" class="btn whitebtn2 prev-btn"><svg id="prev-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5375 18.3455"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>prev-btn</title><path class="cls-1" d="M9.5385,18.345.001,9.1725,9.5385,0,9.4893,2.9006,2.9686,9.1725l6.5207,6.2716Z" transform="translate(-0.001 0.0005)"/></svg><span>PREV DAY</span></a></div><div class="btn-block"><a href="#" class="btn whitebtn2 next-btn"><span>NEXT DAY</span><svg id="next-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.5375 18.3455"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>next-btn</title><path class="cls-1" d="M.05,15.4441,6.5709,9.1725.05,2.9006.001,0l9.5375,9.173L.001,18.345Z" transform="translate(-0.001 0.0005)"/></svg></a></div></div>');
      }
    }

    function Scroll() {
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $('.day-desc-blocks').offset().top - fixed_offset }, 1000);
    }

    DayDesc(1);

    function DayItemActive(obj) {
        $('.day-item').removeClass('active');
        obj.addClass('active');
    }

    $('.day-item').on('click', function(e) {
        var attr = $(this).attr('day-num');
        DayItemActive($(this));
        DayDesc(attr);
        Scroll();
    });

    $(document).on('click', '.day-desc .btn', function(e) {
        e.preventDefault();
        var num_cur_day = $('.day-item.active').attr('day-num');

        if($(this).hasClass('next-btn')) {
            var num_new_day = Number(num_cur_day) + 1;
        } else {
            var num_new_day = Number(num_cur_day) - 1;
        }

        DayItemActive($('.day-item[day-num="'+ num_new_day +'"]'));
        DayDesc(num_new_day);
        Scroll();

    });
 
    
});
  


  
  