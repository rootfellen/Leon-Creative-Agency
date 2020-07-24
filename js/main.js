

// Burger Menu

// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger,.header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });


document.querySelector(".header__burger").addEventListener("click", function(e) {
    document.querySelector(".header__menu").classList.toggle("active");
    document.querySelector(".header__burger").classList.toggle("active");
    document.body.classList.toggle("lock");
    document.querySelector(".header__logo").classList.toggle("off");
    document.querySelector(".header>span").classList.toggle("enabled");
});

// Responsive Images

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();

    function ibg2(){

        let ibg=document.querySelectorAll(".ibg2");
        for (var i = 0; i < ibg2.length; i++) {
        if(ibg2[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg2[i].querySelector('img').getAttribute('src')+')';
        }
        }
        }
        
        ibg2();