var checkbox = document.getElementById('checkbox1');
        var img_1 = 'https://i.imgur.com/a/6hs0JZv.png';
        var img_2 = 'https://i.imgur.com/69NSeT9.gif';

checkbox.onclick = function () {
    if (checkbox1.src == img_1) {
        checkbox1.src = img_2;
    } else if (checkbox1.src == img_2) {
        checkbox1.src = img_1;
    }
}