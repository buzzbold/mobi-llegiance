$( document ).ready(function() {
loadjscssfile("https://buzzbold.github.io/mobi-llegiance/kska/ma.css", "css");
loadjscssfile("https://buzzbold.github.io/mobi-llegiance/js/jquery.radiosforbuttons.min.js"
, "js");
 $('#ctl00_AllegMain_wrkEmail').attr('placeholder', 'me@mydomain.net');
$('#ctl00_AllegMain_wrkPhone').attr('placeholder', '907-000-0000');


applyButtonStyle();

});
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else
     if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}


 function applyButtonStyle() {
var sustText = '<span class="btnTxt">Make a Monthly Gift</span>';
  $('#sust').innerHTML(sustText);
 }
