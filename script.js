$(document).ready(function() {
    var $action = $('.close');
    var $target = $('.popup');
    $action.click(function() {
        $target.fadeOut('slow');
    });
});
