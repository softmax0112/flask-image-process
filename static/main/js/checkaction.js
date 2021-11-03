
    $(function () {
        $('.column input[type=checkbox]').on('click', function () {
            $(this).closest('.column').find('input[type=text]').prop('disabled', !$(this).is(':checked'));
        });
    });