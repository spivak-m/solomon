$(document).ready(function() {

	// FORM SELECT

	$('.form_select').on('click', '.form_select-current', function(e){
		e.preventDefault();
		$(this).closest('.form_select').toggleClass('__is-open');
	});

	$('.form_select').on('click', '.form_select-val', function(e){
		e.preventDefault();

		var val = $(this).text(),
			attr = $(this).attr( 'data-val' );

		$(this).closest('.form_select').find('.form_select-current').text(val);
		$(this).closest('.form_select').find('.form_select-input').val(attr);
		$(this).closest('.form_select').removeClass('__is-open');
	});

	$(document).mouseup(function (e){
		var popup = $('.form_select');
		if(!popup.is(e.target) && popup.has(e.target).length === 0) {
			popup.removeClass('__is-open');
		};
	});

	// MODALS

	$('.mopen').wmodal();

	// SPINNER

	var input = $('.js-spinner').children('.spinner_vp'),
        minVal = 1,
        maxVal = 99,
        price = $('.js-spinner').siblings('.cart-item_price').find('.cart-item_price-num');

    input.val(1);

    if ( input.val() <= minVal ) {
       input.siblings('.spinner_btn.__dec').addClass('__is-disabled');
    } else {
        input.siblings('.spinner_btn.__dec').removeClass('__is-disabled');
    };

	input.on('change', function() {
		if ( $(this).val() <= minVal ) {
			$(this).siblings('.spinner_btn.__dec').addClass('__is-disabled');
		} else {
			$(this).siblings('.spinner_btn.__dec').removeClass('__is-disabled');
		};

		if ( $(this).val() >= maxVal ) {
			$(this).siblings('.spinner_btn.__inc').addClass('__is-disabled');
		} else {
			$(this).siblings('.spinner_btn.__inc').removeClass('__is-disabled');
		};
	});

	input.siblings('.spinner_btn.__dec').on('click', function(e) {
		e.preventDefault();

		var count = $(this).siblings('.spinner_vp').val(),
			currentPrice = $(this).closest('.js-spinner').siblings('.cart-item_price').find('.cart-item_price-num'),
			sum = +currentPrice + +price;

        if ( $(this).hasClass('__is-disabled') ) {
        	return false;
        } else {
        	$(this).siblings('.spinner_vp').val(--count).trigger('change');
            currentPrice.text(sum);
        };
    });

	input.siblings('.spinner_btn.__inc').on('click', function(e) {
		e.preventDefault();
		var count = $(this).siblings('.spinner_vp').val(),
			currentPrice = $(this).closest('.js-spinner').siblings('.cart-item_price').find('.cart-item_price-num'),
			sum = +currentPrice + +price;

		 if ( $(this).hasClass('__is-disabled') ) {
        	return false;
        } else {
            $(this).siblings('.spinner_vp').val(++count).trigger('change');
            currentPrice.text(sum);
        };
    });

});
