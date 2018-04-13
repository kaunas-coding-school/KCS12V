console.log(4+4);

document.getElementById('profiliofoto').onclick = function () {
    alert('Paspaudei');
};


document.onkeyup = function(e) {
    if(e.keyCode == 37) {
        console.log('judu kairen');
    }

    if(e.keyCode == 38) {
        console.log('judu aukstyn');
    }

    if(e.keyCode == 39) {
        console.log('judu desinen');
    }

    if(e.keyCode == 40) {
        console.log('judu zemyn');
    }
};