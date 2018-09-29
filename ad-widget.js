// Check if widget block exists in sub category
if(document.getElementById('ad_sub_cat_widget')){
    var widget = 'ad_sub_cat_widget';
}
// Check if widget block exists in main category
if(document.getElementById('ad_cat_widget')){
    var widget = 'ad_cat_widget';
}
// Check it widget exists on item page
if(document.getElementById('ad_item_widget')){
    var widget = 'ad_item_widget';
}

// Get widget params
var cat_id = $("#" + widget).attr("cat-id");
var site_name = $("#" + widget).attr("site-name");
document.getElementById(widget).style.display = "none"; 

// Get widget body from back end
function getSlider(cat_id, site_name, widget){
var request = new XMLHttpRequest();
    function reqReadyStateChange() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                document.getElementById(widget).innerHTML = request.responseText;
            }
        }
    }
    request.open("GET", "https://block.mirkrestikom.ru/widget/?id=" + cat_id + "&site=" + site_name);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
}

// Get js libs
$.getScript("https://alltay.github.io/blocks/jquery-migrate-1.2.1.min.js");
$.getScript("https://alltay.github.io/blocks/slick.min.js"); // Need to change on release
getSlider(cat_id, site_name, widget)

setTimeout(function(){
    $.getScript("https://alltay.github.io/blocks/slider.js");// Need to change on release
}, 2000);

// Show widget with latensy
setTimeout(function(){
    document.getElementById(widget).style.display = "block"; 
}, 2000);

