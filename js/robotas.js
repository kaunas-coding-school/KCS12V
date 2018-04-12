var robotas = document.getElementById('C3PO');
var juodas = document.getElementById('juodas');
robotas.position = [];
robotas.position['top'] = 0;
robotas.position['left'] = 0;

robotas.kairen = function(steps) {
    robotas.position['left'] = robotas.position['left'] - 102
    robotas.style.left = robotas.position['left'] +'px';
    console.log(isCollide(juodas, robotas));
};

robotas.aukstyn = function(steps) {
    robotas.position['top'] = robotas.position['top'] - 102
    robotas.style.top = robotas.position['top'] +'px';
    console.log(isCollide(juodas, robotas));
};

robotas.desinen = function(steps) {
    robotas.position['left'] = robotas.position['left'] + 102
    robotas.style.left = robotas.position['left'] +'px';
    console.log(isCollide(juodas, robotas));
};

robotas.zemyn = function(steps) {
    robotas.position['top'] = robotas.position['top'] + 102
    robotas.style.top = robotas.position['top'] +'px';
    console.log(isCollide(juodas, robotas));
};


document.onkeyup = function(e) {
    if(e.keyCode == 37) {
        robotas.kairen();
        console.log('judu kairen');
    }

    if(e.keyCode == 38) {
        robotas.aukstyn();
        console.log('judu aukstyn');
    }

    if(e.keyCode == 39) {
        robotas.desinen();
        console.log('judu desinen');
    }

    if(e.keyCode == 40) {
        robotas.zemyn();
        console.log('judu zemyn');
    }
};


var isCollide = function( ) {
    $div1 = $('#juodas');
    $div2 = $('#C3PO');
    // Div 1 data
    var d1_offset             = $div1.offset();
    var d1_height             = $div1.outerHeight( true );
    var d1_width              = $div1.outerWidth( true );
    var d1_distance_from_top  = d1_offset.top + d1_height;
    var d1_distance_from_left = d1_offset.left + d1_width;

    // Div 2 data
    var d2_offset             = $div2.offset();
    var d2_height             = $div2.outerHeight( true );
    var d2_width              = $div2.outerWidth( true );
    var d2_distance_from_top  = d2_offset.top + d2_height;
    var d2_distance_from_left = d2_offset.left + d2_width;

    var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

    return ! not_colliding;
};