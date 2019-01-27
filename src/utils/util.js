function getPosition(e) {
    var x = e.getBoundingClientRect().left + document.documentElement.scrollLeft;
    var y = e.getBoundingClientRect().top + document.documentElement.scrollTop;
    return { x, y }
}
export {getPosition}