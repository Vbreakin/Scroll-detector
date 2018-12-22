var scrollPos = (window.scrollY);

window.addEventListener('scroll', function(){
        
    if ((document.body.getBoundingClientRect()).top > scrollPos)
            document.getElementById('scrollInfo').setAttribute('data-scroll-direction', 'UP');
        else
            document.getElementById('scrollInfo').setAttribute('data-scroll-direction', 'DOWN');
            
        scrollPos = (document.body.getBoundingClientRect()).top;
});

function valueScroll(){
    console.log(scrollPos);
}