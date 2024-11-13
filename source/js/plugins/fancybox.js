function initFancybox() {
	$('article img').each(function () {
		// 避免与 leaflet 冲突
		if ($(this).parent().hasClass('fancybox') || $(this).closest('no-fancybox').length > 0 || $(this).attr('no-fancybox') != undefined) return;
		
		var alt = this.alt;
		$(this).wrap(
			'<a ' +
			'class="fancybox"' +
			'href="' + ($(this).attr('data-original') == null ? this.src : $(this).attr('data-original')) +
			'"data-caption="' + alt + '"' +
			'data-fancybox="gallery"' +
			'data-thumb=' + ($(this).attr('data-original') == null ? this.src : $(this).attr('data-original')) + '>' +
			'</a>');
	});
	Fancybox.bind('[data-fancybox]', {
		Thumbs: {
			showOnStart: false,
		},
		Hash: false,
		Images: {
			Panzoom: {
				maxScale: 4
			}
		},
		Carousel: {
			transition: 'slide'
		},
		Toolbar: {
			display: {
				left: ['infobar'],
				middle: [
					'zoomIn',
					'zoomOut',
					'toggle1to1',
					'rotateCCW',
					'rotateCW',
				],
				right: ['slideshow', 'thumbs', 'close']
			}
		}
	})
}