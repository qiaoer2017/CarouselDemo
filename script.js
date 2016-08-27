/**
 * Created by qiaoer on 16/8/27.
 */
window.onload = function () {
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    next.onclick = function () {
        switchingCurrentItem(-600);
    };
    prev.onclick = function () {
        switchingCurrentItem(600);
    };

};

function switchingCurrentItem(offset) {
    list.style.left = (parseInt(list.style.left) + offset) + 'px';
}