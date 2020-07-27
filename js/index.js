//全屏滚动
$('#index_main').fullpage({
	'navigation': true,
	slidesNavigation: true,
	controlArrows: false,
	continuousHorizontal:true,
	scrollingSpeed:1000,
	showActiveTooltip :true, 
	anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
	loopHorizontal: true,
	afterLoad: function(anchorLink, index){
		if(index == 1){
		  $('.fp-show-active li .name').css('display','none');
		  $('.fp-show-active li:eq(0) .name').css('display','block');
	  }
		if(index == 2){
      		$('.page2 .title').removeClass('animate__animated flipInX').addClass('animate__animated animate__jackInTheBox animate__delay-.3s');
			$('.page2 .about-count li').addClass('animate__animated animate__zoomInDown animate__delay-.3s');
			$('.page2 .about-word').addClass('animate__animated animate__slideInLeft animate__delay-.3s');
			$('.page2 .about-more').addClass('animate__animated animate__slideInLeft animate__delay-.3s');
			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(1) .name').css('display','block');
		}
		if(index == 3){
			$('.page3 .Items .Items-title').addClass('animate__animated animate__flipInY animate__delay-.3s');
			$('.page3 .Items .Items-title .i-t-title').addClass('animate__animated animate__flipInY animate__delay-.3s');
			$('.page3 .Items .Items-list li:eq(0)').addClass('animate__animated animate__fadeInTopLeft animate__delay-.3s');
			$('.page3 .Items .Items-list li:eq(1)').addClass('animate__animated animate__fadeInTopLeft animate__delay-.3s');
			$('.page3 .Items .Items-list li:eq(2)').addClass('animate__animated animate__fadeInDown animate__delay-.3s');
			$('.page3 .Items .Items-list li:eq(3)').addClass('animate__animated animate__fadeInTopRight animate__delay-.3s');
			$('.page3 .Items .Items-list li:eq(4)').addClass('animate__animated animate__fadeInTopRight animate__delay-.3s');

			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(2) .name').css('display','block');
		}
		if(index == 4){
			$('.page4 .n-title').addClass('animate__animated animate__jackInTheBox animate__delay-.3s');
			$('.page4 .news .swiper-container .swiper-wrapper .swiper-slide').addClass('animate__animated animate__zoomInRight animate__delay-.3s');
			$('.page4 .news .n-news .n-more').addClass('animate__animated animate__slideInUp animate__delay-.3s');
			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(3) .name').css('display','block');
		}
		if(index == 5){
			$('.page5 .c-title').addClass('animate__jackInTheBox animate__delay-.3s');
			$('.page5 .footer').addClass('animate__animated animate__fadeInUp animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(0)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(1)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(2)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(3)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(4)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(5)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(6)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.page5 .classic .classic-count li:eq(7)').addClass('animate__animated animate__pulse animate__delay-.3s');
			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(4) .name').css('display','block');
		}
		if(index == 6){
			$('.page6 .c-title').addClass('animate__animated animate__jackInTheBox');
			$('.page6 .contact .contact-count .c-c-left').addClass('animate__animated animate__fadeInLeft');
			$('.page6 .contact .contact-count .c-c-right').addClass('animate__animated animate__fadeInRight');
			$('.page6 .footer').addClass('animate__animated animate__fadeInUp');
			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(5) .name').css('display','block');
		}
		if(index == 7){
			$('.page7 .n-title').addClass('animate__animated animate__jackInTheBox');
			$('.page7 .footer').addClass('animate__animated animate__fadeInUp');
			$('.fp-show-active li .name').css('display','none');
			$('.fp-show-active li:eq(6) .name').css('display','block');
		}
	},
	onLeave: function(index, direction){
	}
});
