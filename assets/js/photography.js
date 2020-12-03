// const navBar = document.getElementById('navBar');
// const headeris = document.querySelector('header');
// headeris.appendChild(navBar);

$.get("photographers.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});