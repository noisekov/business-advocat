
// fix menu 
const menuFixBtn = document.querySelector(".header__menu-fix-btn");
const menuFixList = document.querySelector(".header__menu-fix-list");
const menuFixListHidden = document.querySelector(".header__menu-fix-list_hidden");

menuFixBtn.addEventListener("click", slideMenu)
function slideMenu(e){
    if (e.target.closest(".header__menu-fix-btn")) {
        menuFixList.classList.add("_active");
        menuFixListHidden.classList.add("_active");
    }
}

menuFixListHidden.addEventListener("click", closeMenu)
function closeMenu(e){
    if (e.target.closest(".header__menu-fix-list_hidden")){
        menuFixList.classList.remove("_active");
        menuFixListHidden.classList.remove("_active");
    }
    console.log(menuFixListHidden);
}

//scroll-btn
const scrollBtn = document.querySelector("#js-scroll-btn");

scrollBtn.addEventListener("click", function(){
    window.scrollTo(window.pageXOffset, 0);
})

window.addEventListener("scroll", function(){
    if (window.pageYOffset < document.documentElement.clientHeight){
        scrollBtn.classList.remove("hidden");
    } 
    if (window.pageYOffset == 0){
        scrollBtn.classList.add("hidden");
    } 

})

//services-costs__btn
// if (location.pathname == "/"){
    const btnCivil = document.querySelector(".services-costs__btn-civil");
    const btnFamily = document.querySelector(".services-costs__btn-family");
    const btnBlockCivil = document.querySelector(".services-costs_civil");
    const btnBlockFamily = document.querySelector(".services-costs_family");

    btnCivil.addEventListener("click", function(e){
        if (e.target.closest(".services-costs__btn-civil")){
            btnBlockCivil.classList.add("show");
            btnBlockFamily.classList.add("hidden");
            btnBlockFamily.classList.remove("show");
        }
    })

    btnFamily.addEventListener("click", function(e){
        if (e.target.closest(".services-costs__btn-family")){
            btnBlockCivil.classList.add("hidden");
            btnBlockCivil.classList.remove("show");
            btnBlockFamily.classList.add("show");
        }
    })
// }

//main btn
// if (location.pathname == "/"){
    const btnMain = document.querySelectorAll("#js-btnContact");
    const btnDoOrderClose = document.querySelector(".do-order__btn-close");
    const doOrderBlock = document.querySelector(".do-order__wrapper");
    
    btnMain.forEach(e => {
        e.addEventListener("click", function(e){
            if (e.target.closest("#js-btnContact")){
                doOrderBlock.classList.add("show");
                doOrderBlock.classList.add("hidden");
            }
        })
    });
    
    btnDoOrderClose.addEventListener("click", function(e){
        if (e.target.closest(".do-order__btn-close")){
            doOrderBlock.classList.add("hidden");
            doOrderBlock.classList.remove("show");
        }
    })

    window.addEventListener("keydown", function(e){
        if (e.key == "Escape"){
            doOrderBlock.classList.add("hidden");
            doOrderBlock.classList.remove("show");
        }
    })
// }

//mask
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});





//modal window
const loginForm = document.querySelector(".do-order__name [type=text]");
const phoneForm = document.querySelector(".do-order__phone [type=password]");
const form = document.querySelector(".do-order__block form");
const modal = document.querySelector(".do-order");


let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login")
} catch (err) {
    isStorageSupport = false
}


// loginForm.focus()
form.addEventListener("submit", function(evt){
    if (!loginForm || !phoneForm) {
        evt.preventDefault()
        modal.classList.add("do-order-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem ("login", loginForm.value)
        }
    }
})


