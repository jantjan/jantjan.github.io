

var checkbox1 = document.getElementById('checkbox1');
    var img_1_1 = 'https://i.imgur.com/FT27YXo.png';
    var img_1_2 = 'https://i.imgur.com/69NSeT9.gif';
checkbox1.onclick = function () {
    if (checkbox1.src == img_1_1) {
        checkbox1.src = img_1_2;
    } else if (checkbox1.src == img_1_2) {
        checkbox1.src = img_1_1;
    }
}

var checkbox2 = document.getElementById('checkbox2');
        var img_2_1 = 'https://i.imgur.com/IRvthMA.png';
        var img_2_2 = 'https://i.imgur.com/QymO2Qr.gif';
checkbox2.onclick = function () {
    if (checkbox2.src == img_2_1) {
        checkbox2.src = img_2_2;
    } else if (checkbox2.src == img_2_2) {
        checkbox2.src = img_2_1;
    }
}