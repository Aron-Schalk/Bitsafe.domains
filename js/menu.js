// Mobile menu toggle
export default class MenuToggle {
	constructor() {
        var menuitems = document.querySelectorAll('.menu__item');
        var submenu = document.querySelector('.submenu');
        var arrow = document.querySelector('.arrow');
		this.elements = {
			hamburger: document.querySelector('.hamburger'),
			navbar: document.querySelector('.navbar'),
            menu: document.querySelector('.menu'),
            subtoggle: document.querySelector('.menu-link'),
            submenu: document.querySelector('.submenu'),
            arrow: document.querySelector('.arrow')
        };

        for (var i=0; i < menuitems.length; i++){
            menuitems[i].addEventListener('click', function () {
                var hasShow = $(this).find('.submenu').hasClass('submenu--show');
                $('.submenu').removeClass('submenu--show');
                $('.arrow').removeClass('arrow--up');
                
                if (!hasShow) {
                    this.querySelector('.submenu').classList.toggle('submenu--show');
                    this.querySelector('.arrow').classList.toggle('arrow--up');
                }

            }, false);
        }
        
        this.elements.hamburger.addEventListener('click', this.toggle.bind(this));

        document.addEventListener("click", function(event) {
            if (event.target.closest(".menu__item")) return;
            $('.submenu').removeClass('submenu--show');
            $('.arrow').removeClass('arrow--up');
        });
    }

    

	toggle() {
		this.elements.hamburger.classList.toggle('hamburger--cross');
		this.elements.navbar.classList.toggle('navbar--expanded');
        this.elements.menu.classList.toggle('menu--show');
    }

}
