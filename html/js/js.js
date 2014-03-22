$(document).ready(function(){

	$('.header__top__login__a').click(function () {
		$(this).parent().toggleClass('open');

		return false;
	});
	$('.header').hover(
			function () {
			},
			function () {
				$('.header__top__login').removeClass('open');
			}
	);

	if($('.sidebar__filter__price select').length>0){
		var params = {
			changedEl: ".sidebar__filter__price select",
			visRows: 5,
			scrollArrows: true
		}
		cuSel(params);
	}

	if($('#slider-range1').length>0){
		$( "#slider-range1" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$("#slider-range1 .ui-slider-handle").text(ui.values[ 0 ]);
				$("#slider-range1 .ui-slider-handle:last-child").text(ui.values[ 1 ]);
			}
		});
		$("#slider-range1 .ui-slider-handle").text($("#slider-range1").slider( "values", 0 ));
		$("#slider-range1 .ui-slider-handle:last-child").text($("#slider-range1").slider( "values", 1 ));
	}
	if($('#slider-range2').length>0){
		$( "#slider-range2" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$("#slider-range2 .ui-slider-handle").text(ui.values[ 0 ]);
				$("#slider-range2 .ui-slider-handle:last-child").text(ui.values[ 1 ]);
			}
		});
		$("#slider-range2 .ui-slider-handle").text($("#slider-range2").slider( "values", 0 ));
		$("#slider-range2 .ui-slider-handle:last-child").text($("#slider-range2").slider( "values", 1 ));
	}
	if($('#slider-range3').length>0){
		$( "#slider-range3" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$("#slider-range3 .ui-slider-handle").text(ui.values[ 0 ]);
				$("#slider-range3 .ui-slider-handle:last-child").text(ui.values[ 1 ]);
			}
		});
		$("#slider-range3 .ui-slider-handle").text($("#slider-range3").slider( "values", 0 ));
		$("#slider-range3 .ui-slider-handle:last-child").text($("#slider-range3").slider( "values", 1 ));
	}

	$('dl.tabs dt').click(function () {
		$(this).siblings().removeClass('selected').end().next('dd').andSelf().addClass('selected');
	});


	if($('.scroll').length>0){
		$('.scroll').cycle({
			fx:     'scrollHorz',
			speed:   400,
			timeout: 0,
			pager:  '.scroll_pager',
			pagerAnchorBuilder: function(idx, slide) {
				return '<a href="#"></a>';
			}
		});
	}

	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});