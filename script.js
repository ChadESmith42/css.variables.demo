//Side menu animation:
function toggleMenu(x) {
    //Using x (ElementID) add an "a" to get all of the children for that element:
    var listName = x.id + "a";
    //Toggle the hidden CSS class to display the dropdown menu:
    document.getElementById(listName).classList.toggle("hidden");
    //Change the CSS styling for the menu header:
    x.classList.toggle("nav__item--clicked");
    //Get the "+/-" span for the clicked menu item:
    var plusName = "menu__toggle" + x.id;
    //Check if the menu is clicked and toggle the "+/-":
    if (x.classList.contains("nav__item--clicked")) {
        document.getElementById(plusName).innerHTML = "&minus;";
    } else {
        document.getElementById(plusName).innerHTML = "&plus;";
    }
}

//Dynamically add the Copyright year to the website:
//Called from <body onload="">
function copyrightDate() {
    var copyrightYear = new Date();
    document.getElementById('copyright').innerHTML = copyrightYear.getFullYear();
}
