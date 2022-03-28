

$(document).ready(function () {

    let id = document.URL.split('#')[1] 
    if(id == undefined || id == ''){
        id = 'home'
    }
    $('#' + id).toggleClass('active show');
    $('#' + id + 'link').toggleClass('active');
})