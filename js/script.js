$(document).ready(function(){
	$('.is').on('click', function(){
		$('.sear').toggle();
		$(this).toggleClass('actser');
		$('.ent').hide();
		$('.bask').hide();
		$('.iconer').removeClass('actser');
	});
	$('.butt_form').on('click', function(){
		$('.alert').show();
	});
	$('.close').on('click', function(){
		$('.alert').hide();
	});
	$('.iconer').on('click', function(){
		$('.ent').toggle();
		$(this).toggleClass('actser');
		$('.sear').hide();
		$('.bask').hide();
		$('.is').removeClass('actser');
	});
	$('.bg1').on('click', function(){
		$('body').addClass('bodybg1');
		$('body').removeClass('bodybg2');
		$('body').removeClass('bodybg3');
		$(this).addClass('bg');
		$('.bg2').removeClass('bg');
		$('.bg3').removeClass('bg');
		$('header').addClass('header1');
		$('header').removeClass('header2');
		$('header').removeClass('header3');
		$('#moroj').attr('src','img/bg1.png');
		$('.hslider').html('Крем-брюле и пломбир </br> с малиновым джемом');
		$('.right_head button').css('background', '#9DB1A6');
		$('header a, .foot2 a, .foot3 a').css('border-bottom', '1px solid rgba(255,255,255,0.4)');
		$('.foot1 i').css({'color':'#799284', 'border':'4px solid #B7C6BE'});
	});
	$('.bg2').on('click', function(){
		$('body').addClass('bodybg2');
		$('body').removeClass('bodybg1');
		$('body').removeClass('bodybg3');
		$(this).addClass('bg');
		$('.bg1').removeClass('bg');
		$('.bg3').removeClass('bg');
		$('header').addClass('header2');
		$('header').removeClass('header1');
		$('header').removeClass('header3');
		$('#moroj').attr('src','img/bg2.png');
		$('.hslider').html('Шоколадный пломбир </br> и лимонный сорбет');
		$('.right_head button').css('background', '#a1abb8');
		$('header a, .foot2 a, .foot3 a').css('border-bottom', '1px solid rgba(255,255,255,0.4)');
		$('.foot1 i').css({'color' : '#7E8B9C', 'border' :'4px solid #c3cad2'});
	});
	$('.bg3').on('click', function(){
		$('body').addClass('bodybg3');
		$('body').removeClass('bodybg1');
		$('body').removeClass('bodybg2');
		$(this).addClass('bg');
		$('.bg2').removeClass('bg');
		$('.bg1').removeClass('bg');
		$('header').addClass('header3');
		$('header').removeClass('header1');
		$('header').removeClass('header2');
		$('#moroj').attr('src','img/bg3.png');
		$('.hslider').html('Пломбир с помадкой <br> и клубничный щербет');
		$('.right_head button').css('background', '#b1a29d');
		$('header a, .foot2 a, .foot3 a').css('border-bottom', '1px solid rgba(255,255,255,0.4)');
		$('.foot1 i').css({'color':'#928079', 'border':'4px solid #cec5c2'});
	});
	$('.popul').on('click', function(){
		$('.sortlist').toggle();
		$(this).toggleClass('populact');
	});
	$('.licon2').on('click', function(){
		$('.bask').toggle();
		$('.sear').hide();
		$('.ent').hide();
		$('.iconer').removeClass('actser');
		$('.is').removeClass('actser');
	});
});