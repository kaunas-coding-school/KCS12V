var robotas = document.getElementById('C3PO');
robotas.position = [];
robotas.position['top'] = 0;
robotas.position['left'] = 0;

robotas.kairen = function(steps) {
    robotas.position['left'] = robotas.position['left'] - 102
    robotas.style.left = robotas.position['left'] +'px';
};

robotas.aukstyn = function(steps) {
    robotas.position['top'] = robotas.position['top'] - 102
    robotas.style.top = robotas.position['top'] +'px';
};

robotas.desinen = function(steps) {
    robotas.position['left'] = robotas.position['left'] + 102
    robotas.style.left = robotas.position['left'] +'px';
};

robotas.zemyn = function(steps) {
    robotas.position['top'] = robotas.position['top'] + 102
    robotas.style.top = robotas.position['top'] +'px';
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
