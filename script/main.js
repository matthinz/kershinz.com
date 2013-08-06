(function() {

    $(function() {

        handleNav();
        handleRSVP();

    });

    function handleNav() {
        $(document).on('click', 'nav a', function(evt) {
            evt.preventDefault();
            var m = /#(.+)/.exec(this.href);
            var $el = $('#' + m[1]);
            scrollTo($el);
        });
    }

    function handleRSVP() {

        $(document).on('click', '#rsvp-button', function(evt) {
            evt.preventDefault();

            loadRSVPForm();
            $(document.body).addClass('show-rsvp');
            window.setTimeout(function() {
                $("#rsvp").each(function() {
                    scrollTo(this);
                })
            }, 0)

        });

    }

    function loadRSVPForm() {

        if ($(document.body).is('.wufoo-loaded')) {
            return;
        }

        var z7x4m1;(function(d, t) {
        var s = d.createElement(t), options = window.RSVP_OPTIONS;
        s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
        s.onload = s.onreadystatechange = function() {
        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try { wooFooLoaded(); z7x4m1 = new WufooForm();z7x4m1.initialize(options);z7x4m1.display(); } catch (e) {}};
        var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
        })(document, 'script');
    }

    function scrollTo(el) {
        var $el = $(el),
            offset = $el.offset(),
            padding = parseInt($(document.body).css('padding-top'), 10);

        $('html,body').animate({
            scrollTop: offset.top - (padding / 2)
        }, 300);
    }

    function wooFooLoaded() {
        $(document.body).addClass('wufoo-loaded');
    }

})();