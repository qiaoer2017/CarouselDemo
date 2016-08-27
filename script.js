/**
 * Created by qiaoer on 16/8/27.
 */
window.onload = function () {
    var container = document.getElementById("container");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var list = document.getElementById("list");

    prev.onclick = function () {
        list.style.left = (parseInt(list.style.left) + 600) + 'px';

    };
    next.onclick = function () {
        list.style.left = (parseInt(list.style.left) - 600) + 'px';
    };

};