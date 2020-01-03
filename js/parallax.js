let windowWidth = 0;
let topBarHeight = 100;

// run script as soon as dom is ready
$(function () {
    
    adjustParallaxBackgroundSize();
    
    updateWindowWidth();
    addResizeListener();
    
});



function addResizeListener() {
    $(window).resize(function () {
        // only update when necessary, because update is relatively performance intensive
        if (windowWidthHasChanged()) {
            updateWindowWidth();
            adjustParallaxBackgroundSize();
        }
    })
}

function adjustParallaxBackgroundSize() {
    // get website content height
    let height = $(".parallax .parallax-content").height();

    // + topBarSize to account for the navigation bar
    let newHeight = height + topBarHeight;
    
    // calc(150vh + newHeight in pixels) is not just the result of trial and error, but of justifiable mathematics
    // the value of 150vh has to be changed if the distances of the parallax elements change:
    // new Value = 50vh * (distance of parallax elements to origin) / (distance of perspective [camera] to origin)
    // $(".parallax .parallax-element").css("height", "calc(150vh + " + newHeight + "px)");
    $(".parallax .parallax-element").css("height", "calc(300vh + " + newHeight + "px)");
}

function windowWidthHasChanged() {
    return ($(window).width() !== windowWidth);
}

function updateWindowWidth() {
    windowWidth = $(window).width();
}