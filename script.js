/**
 * Created by qiaoer on 16/8/27.
 */
window.onload = function () {
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    var currentIndex = 1;

    next.onclick = function () {
        if (currentIndex >= 5) {
            currentIndex = 1;
        } else {
            currentIndex += 1;
        }
        switchingCurrentItem(-600);
        changeIndicator();
    };
    prev.onclick = function () {
        if (currentIndex <= 1) {
            currentIndex = 5;
        } else {
            currentIndex -= 1;
        }
        switchingCurrentItem(600);
        changeIndicator();
    };

    function switchingCurrentItem(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';

        if (newLeft > -600) {
            list.style.left = -3000 + 'px';
        }
        if (newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
    }

    function changeIndicator() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                // debugger;
                buttons[i].className = '';
                break;
            }
        }
        buttons[currentIndex - 1].className = 'on';
    }

};
