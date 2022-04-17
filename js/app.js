function image(url){
    var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    document.getElementById("img").src=url;
    $('#img').addClass('classname fadeUp');
    $('#img').one(animationEvent, function(event) {
        $('#img').removeClass('classname fadeUp');
    });   
}

function pop(){
    var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    document.getElementById('pop').style.display="block";
    $('#pop').addClass('classname fadeUp');
    $('#pop').one(animationEvent, function(event) {
        $('#pop').removeClass('classname fadeUp');
    });   
}