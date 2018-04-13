// var robotas = document.getElementById('C3PO');
var robotas = $('#C3PO');

robotas.position = [];
robotas.position['top'] = 0;
robotas.position['left'] = 0;

robotas.kairen = function () {
    robotas.position['left'] = robotas.position['left'] - 102;
    robotas.css('left', robotas.position['left'] + 'px');
    arMirtis();
};

robotas.aukstyn = function () {
    robotas.position['top'] = robotas.position['top'] - 102;
    robotas.css('top', robotas.position['top'] + 'px');
    arMirtis();
};

robotas.desinen = function () {
    robotas.position['left'] = robotas.position['left'] + 102;
    robotas.css('left', robotas.position['left'] + 'px');
    arMirtis();
};

robotas.zemyn = function () {
    robotas.position['top'] = robotas.position['top'] + 102;
    robotas.css('top', robotas.position['top'] + 'px');
    arMirtis();
};

document.onkeyup = function (e) {
    if (e.keyCode == 37) {
        robotas.kairen();
    }

    if (e.keyCode == 38) {
        robotas.aukstyn();
    }

    if (e.keyCode == 39) {
        robotas.desinen();
    }

    if (e.keyCode == 40) {
        robotas.zemyn();
    }
};

var isCollide = function () {
    $div2 = $('#C3PO');
    var state = false;

    $('.juoda').each(function( index ) {
        $div1 = $( this );
        // Div 1 data
        var d1_offset = $div1.offset();
        var d1_height = $div1.outerHeight(true);
        var d1_width = $div1.outerWidth(true);
        var d1_distance_from_top = d1_offset.top + d1_height;
        var d1_distance_from_left = d1_offset.left + d1_width;

        // Div 2 data
        var d2_offset = $div2.offset();
        var d2_height = $div2.outerHeight(true);
        var d2_width = $div2.outerWidth(true);
        var d2_distance_from_top = d2_offset.top + d2_height;
        var d2_distance_from_left = d2_offset.left + d2_width;

        var not_colliding = (d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left);

        if (!not_colliding) {
            state = true;
        }
    });
    return state;
};

function arMirtis() {
    if (isCollide()) {
        robotas.css('background', "url('/img/boom.gif')");
        setTimeout(function(){atgalIPradzia();}, 500);

    }
}

function atgalIPradzia() {
    robotas.position['top'] = 0;
    robotas.position['left'] = 0;
    robotas.css(
        {
            top:0,
            left:0,
            background:"url('/img/c3po.jpeg')"
        }
    );
}