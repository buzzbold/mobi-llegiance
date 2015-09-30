$( document ).ready(function() {
loadjscssfile("https://buzzbold.github.io/mobi-llegiance/kska/ma.css", "css");
loadjscssfile("https://buzzbold.github.io/mobi-llegiance/js/jquery.radiosforbuttons.min.js"
, "js");
 $('#ctl00_AllegMain_wrkEmail').attr('placeholder', 'me@mydomain.net');
$('#ctl00_AllegMain_wrkPhone').attr('placeholder', '907-000-0000');

insertHeaders();
insertGiftChange();

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


 function insertGiftChange() {
var allegMode = $("#ctl00_AllegMain_wrkAmountsPeriodic").val();
console.log('Giving Mode:'+ allegMode);
var appendText;
if (allegMode =="FULL") {
 appendText = '<p><a  id="linkForm monthly" href="http://bit.ly/1VRWuDG" >I want to make a monthly contribution.</a></p>';
} else {
  appendText = '<p><a  id="linkForm single" href="https://secure.alaskapublic.org/WebModule/Donate.aspx?P=P1506W&PAGETYPE=PLG&CHECK=UtaN75o9T72x6prc3yxoWxiCxtaFReuS" >I want to make a single contribution.</a></p>';
}
  $(appendText).insertAfter("#ctl00_AllegMain_UPGRADETABLE");
 }

function insertHeaders() {
//$(".ALLEGHEADERS div").text("");
var givAmtHeader = '<h2 class="alaskapublicFormHighlight">1. How much would you like to give?</h2>'
$(givAmtHeader).insertBefore("#ctl00_AllegMain_UPGRADETABLE_0");
var payInfoHeader = '<h2 class="alaskapublicFormHighlight">2. Payment information</h2>'
$(payInfoHeader).insertBefore("#ctl00_AllegMain_SECTIONNAMEADDRESS");

}
