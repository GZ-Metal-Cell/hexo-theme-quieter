initPhotoFigcaption = () => {
    $('article img').each(function () {
        if ($(this).attr('no-figcaption') != undefined || $(this).attr('has-figcaption') != undefined) {
            return;
        }
        $(this).wrap('<figure></figure>');
        const altValue = $(this).attr('title') || $(this).attr('alt');
        if (!altValue) return;
        const pEle = $('<p>').text(altValue).css('text-align', 'center');
        const figEle = $('<figcaption>').append(pEle);
        $(this).after(figEle);
        $(this).attr('has-figcaption', '');
    });
}