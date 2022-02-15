/****************SIDE NAV********************/

function openSideNav(){
    document.getElementById("sideNav").style.width = "100%";
}
function closeSideNav(){
    document.getElementById("sideNav").style.width = "0%";
}


/****************** DARK MODE *********************/

function darkMode(){
    let btnDarkMode = document.body;
    let toggleIcon = document.getElementById("toggleIcon");
    //alert("alert")
    //console.log('rrztzyt')

    btnDarkMode.classList.toggle("dark-mode");

    if(toggleIcon.className === "fa-solid fa-toggle-off"){
        //alert('gszfsgzfsfs')
        toggleIcon.className ="fa-solid";
        toggleIcon.classList.toggle("fa-toggle-on");

    }else{
        toggleIcon.className = "fa-solid fa-toggle-off";
        console.log('gefhdegedh')
    }
}


/****************** MENU BURGER *********************/

function responsiveNav(){
    let navResponsive = document.getElementById("navBar");

    if (navResponsive.className === "navBarClass"){
        navResponsive.className += " responsive";
        /*alert("test btn burger")*/
    }else{
        navResponsive.className = "navBarClass";
    }
}