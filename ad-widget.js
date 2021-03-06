// Get js libs
$.getScript("https://alltay.github.io/blocks/jquery-migrate-1.2.1.min.js");
$.getScript("https://alltay.github.io/blocks/slick.min.js"); // Need to change on release

// Check if widget block exists in sub category
if(document.getElementById('ad_sub_cat_widget')){
    var widget = 'ad_sub_cat_widget';
    var param = 'id';
    var title = 'Популярные товары в категории';
    getSlider(getParams(widget)[0], getParams(widget)[1], widget)
}
// Check if widget block exists in main category
if(document.getElementById('ad_cat_widget')){
    var widget = 'ad_cat_widget';
    var param = 'm_id';
    var title = 'Популярные товары в категории';
    getSlider(getParams(widget)[0], getParams(widget)[1], widget)
}
// Check it widget exists on item page
if(document.getElementById('ad_item_widget')){
    var widget = 'ad_item_widget';
    var param = 'i_id';
    var title = 'Похожие товары';
    getSlider(getParams(widget)[0], getParams(widget)[1], widget)  
}

// Get widget params
function getParams(widget){
    var cat_id = $("#" + widget).attr("cat-id");
    var site_name = $("#" + widget).attr("site-name");
    return [cat_id, site_name]
}

// Get widget body from back end
function getSlider(cat_id, site_name, widget){
var request = new XMLHttpRequest();
    function reqReadyStateChange() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                document.getElementById(widget).innerHTML = request.responseText;
                document.getElementById('ad-row-main').style.display = "none";
                $( document ).ready(showWidget(title))
                showArrows(widget)
            }
        }
    }
    request.open("GET", "https://block.mirkrestikom.ru/widget/?" + param + "=" + cat_id + "&site=" + site_name);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
}

// Show widgets with latency
function showWidget(title){
    document.getElementById("ad-head-title").innerHTML = title;
    $.getScript("https://alltay.github.io/blocks/slider.js");
    document.getElementById('ad-row-main').style.display = "block"; 
}
s
function showArrows(widget){
    setTimeout(function(){
       $( "#" + widget ).css( "overflow", "visible" );
    }, 600);
}
    
