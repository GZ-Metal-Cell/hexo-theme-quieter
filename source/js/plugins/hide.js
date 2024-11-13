/**
 * tag-hide
 */
const initTagHide = () => {
    const $hideButtons = $('.hide-button');
    if ($hideButtons.length === 0) return;

    const handleClick = function(e) {
        const $this = $(this);
        $this.addClass('open');
        const $fjGallery = $this.next().find('.gallery-container');
        if ($fjGallery.length) {
            addJustifiedGallery($fjGallery.get(0));
        }
    }

    $hideButtons.one('click', handleClick); // 使用 .one() 来确保事件只触发一次
}