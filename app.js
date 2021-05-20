setInterval(() => {
    d = new Date()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotations = (30 * htime) + (mtime / 2);
    mrotations = 6 * mtime;
    srotations = 6 * stime;

    hour.style.transform = `rotate(${hrotations}deg)`
    Min.style.transform = `rotate(${mrotations}deg)`
    Sec.style.transform = `rotate(${srotations}deg)`

}, 1000);


setInterval(() => {



}, 2000);



const body = document.querySelector('body')

body.addEventListener('hover', function () {

    // const newcolor = randcolor();
    document.body.style.backgroundColor = 'black';

})

