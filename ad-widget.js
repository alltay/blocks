var cat_id = $("#ad_sub_cat_widget").attr("cat-id")
var site_name = $("#ad_sub_cat_widget").attr("site-name")
document.getElementById("ad_sub_cat_widget").style.display = "none"; 


function getSlider(cat_id, site_name){
var request = new XMLHttpRequest();
    function reqReadyStateChange() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                document.getElementById("ad_sub_cat_widget").innerHTML=request.responseText;
            }
        }
    }
    var body = cat_id;
    var aditional = site_name;
    request.open("GET", "http://localhost:8000/?"+body+"&"+aditional); // Ned to change on relise
    request.onreadystatechange = reqReadyStateChange;
    request.send();
}

$.getScript("https://alltay.github.io/blocks/jquery-migrate-1.2.1.min.js");
$.getScript("https://alltay.github.io/blocks/slick.min.js"); // Need to change on relese
getSlider(cat_id, site_name)

setTimeout(function(){
    $.getScript("https://alltay.github.io/blocks/slider.js");// Need to change on relese
}, 2000);

setTimeout(function(){
    document.getElementById("ad_sub_cat_widget").style.display = "block"; 
}, 2000);

