(function($) {
    function ajaxStart() { $('#progress').show(); }

    function ajaxStop() { $('#progress').hide(); }

    function parserGo() {
        ajaxStart();
        var b = $.ajax('https://ropsten.etherscan.io/');
        b.done(function(d) {
            analysisSite(d);
            ajaxStop();
        });
        // b.fail(function(e, g, f) {
        //     alert('Epic Fail');
        //     ajaxStop();
        // })
    }

    function analysisSite(data) {
        var res = '';
        var str = '';
        $(data).find('.profile-event .date-formats small').first().each(function() {
            res += $(this).text().replace(' ago', '').replace('secs', 's').replace('min', 'm');
        });
        $(data).find('.profile-event .date-formats span a').first().each(function() {
            str += $(this).text().replace('Block', ' Block: ');
        })
        $('#resultbox').html(res);
        $('#blockbox').html(str);
    }
    for (var i = 0; i < 1000; i++) {
        setTimeout(parserGo, 1000);
    }
})(jQuery);
(function($) {
    function ajaxStart() { $('#progress').show(); }

    function ajaxStop() { $('#progress').hide(); }

    function parserGoLink() {
        ajaxStart();
        // var hash_link = "0xa0d0f8f0fa7725576d02a4bb15311ad5d23e9c3d25f5e221ddae76eca28ef722";
        var b = $.ajax('https://ropsten.etherscan.io/tx/' + hash_link);
        b.done(function(d) {
            analysisSite(d);
            ajaxStop();
        });
        b.fail(function(e, g, f) {
            alert('Epic Fail');
            ajaxStop();
        })
    }

    function analysisSite(data) {
        var str = '';
        $(data).find('#ContentPlaceHolder1_maintable .col-sm-9').first().each(function() {
            str += $(this).text();
        });
        // $(data).find('.fa.fa-check-circle-o [data-original-title="Contract execution completed"]').first().each(function() {
        // });
        $("#hash_result").html(str);
    }
    for (var i = 0; i < 1000; i++) {
        hash_link = $('#hash_input').val();
        setTimeout(parserGoLink, 1000);
    }
})(jQuery);
// $('.fa.fa-check-circle-o [data-original-title="Contract execution completed"]');
// $('.button').on(click()