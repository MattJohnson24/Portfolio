function toggleMenu(){
    if(document.getElementById('drop-down-menu').style.display === "flex"){
        document.getElementById('drop-down-menu').style.display = "none";
        document.getElementsByClassName('menu-icon')[0].style.display = "flex";
        document.getElementsByClassName('close-icon')[0].style.display = "none";
    }
    else{
        document.getElementById('drop-down-menu').style.display = "flex";
        document.getElementsByClassName('menu-icon')[0].style.display = "none";
        document.getElementsByClassName('close-icon')[0].style.display = "flex";
    }

    // if(document.getElementById('drop-down-menu').style.filter === "invert(86%) sepia(53%) saturate(1708%) hue-rotate(290deg) brightness(90%) contrast(81%)"){
    //     document.getElementById('drop-down-menu').style.filter = "";
    // }
    // else{
    //     document.getElementById('drop-down-menu').style.display = "invert(86%) sepia(53%) saturate(1708%) hue-rotate(290deg) brightness(90%) contrast(81%)";
    // }
}

function closeMenu(){
    document.getElementById('drop-down-menu').style.display === "none";
}