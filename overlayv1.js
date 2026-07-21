
var publisher_name = window.location.hostname
.split(".")
.slice(-2)
.join(".");

var featured_image = publisher_name!=="bites.tbsnews.net"?  top.document.querySelector(".adf-overlay img"):top.document.querySelectorAll('[id=adf-overlay]')[1];

var scriptElement = document.getElementById("adf-marker-tbs");
// Get the value of the id attribute
var idValue = scriptElement.getAttribute('name');
var iframeValue = document.getElementsByName(idValue)

var timer = setInterval(featureimageloaded, 500);

var top_image = "";
var replace_image = "";


function featureimageloaded() {

if ( featured_image && featured_image.complete === true) {

  clearInterval(timer);
  overlay(featured_image);
}

}

function insertAfter(referenceNode, newNode) {
referenceNode.parentNode.insertBefore(
  newNode,
  referenceNode.nextSibling
);

}

function ctaFunction() {
  window.open(clickTag);
}

function overlay(featured_image) {
var width = featured_image.clientWidth;
var height = featured_image.clientHeight;
if(publisher_name==="tbsnews.net"){
  iframeValue[0].setAttribute(
    "style",
    `border:none;position:fixed; width:${width}px;height:${height}px;margin-top:-${height+5}px`
  );

}
else{
  iframeValue[0].setAttribute(
    "style",
    `position:fixed; border:none; width:${width}px;height:${height}px;margin-bottom:-${height+5}px`
  );

}

var html = top.document.createElement("div");
html.setAttribute("id", "adf_image_overlay_section");
insertAfter(featured_image, html);

featured_image.parentNode.removeChild(featured_image);

var adf_image_overlay_section = top.document.getElementById(
  "adf_image_overlay_section"
);
var new_adf_image_overlay_section =
  adf_image_overlay_section.cloneNode(false);
new_adf_image_overlay_section.appendChild(featured_image);
adf_image_overlay_section.parentNode.insertBefore(
  iframeValue[0],
  adf_image_overlay_section
);

html = "";

function isMobile() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}



  html +=
    `
<!-- overlay image css -->
<script type="text/javascript">var clickTag ="https://www.tropicalhomesltd.com/projects/ta-tower"</script>


<style>
.adf__wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*  publisher stuff */

.img-cover img {
  width: 100%;
  height: auto!important;
}

a.jw_media_holder.alignfull img {
  width: auto !important; 
  min-width: auto !important;
}

// .content_detail .featured_image img {
//   width: 100%;
// }

@media only screen and (max-width: 800px)
.content_detail .jw_media_holder img {
  width: auto; 
}

a.jw_media_holder.alignfull .adf__wrapper .adf_overlay_img {
  height: auto;
  top: auto;
  bottom: 0;
  left: 0;
  max-width: 100%!important;
  width: 100%!important;
  animation-duration: 2s;
  cursor: pointer;
  position: absolute;
}

@media (max-width:600px) {
  a.jw_media_holder.alignfull .ntcLogoB{
    right: 3.5%;
    left: auto;
    bottom: 5%;
    width: 39% !important;
    z-index: 1000;
}

  a.jw_media_holder.alignfull .ntcLogoC{
  right: 3.5%;
  left: auto;
  bottom: 5%;
  width: 39% !important;
  display: none;
  z-index: 1000;
}

a.jw_media_holder.alignfull .prodB{
  left: 2%;
  bottom: 10%;
  max-width: 7% !important;
  width: 7% !important;
  height: auto;
  object-fit: fill;
}

a.jw_media_holder.alignfull .vitaminB{
  left: 33%;
  bottom: 10%;
  width: 21% !important;
  object-fit: fill;
}


a.jw_media_holder.alignfull .cta{
  left: 42.5%;
  bottom: 4%;
  width: 13% !important;
  object-fit: fill;
}


a.jw_media_holder.alignfull .titleB{
  right:28%;
  left:auto;
  bottom:2%;
  width:23%!important;
  height:auto;
  object-fit:fill
}

a.jw_media_holder.alignfull .copy{
  left: 19%;
  bottom: 10%;
  width: 13% !important;
  z-index: 1000;
}

a.jw_media_holder.alignfull .copy1{
  left: 10%;
  width: 15% !important;
  z-index: 1000;
}

}



@media (max-width:600px) {
  .dtl_img_section .adf_overlay img {
    position: absolute !important;
  }
  
  .dtl_img_section .adf_overlay .adf_overlay_img {
    bottom: 0 !important;
  }
}


@font-face { 
  font-family: 'Hind Siliguri';
  src:  url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700&display=swap');
  font-weight: 700;
  font-color: '#FFFFFF';
  font-style: normal;
  }

#adf_image_overlay_section {
  position: relative;
  overflow: hidden;
}



.adf__wrapper #bg {
  top: 0;
  left: 0;
  opacity:0;
  right: auto;
  width: 100% !important;
  height: 100% !important;
  // object-fit: fill;
}

.adf__wrapper .adf_overlay_img {
  height: auto;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  animation-duration: 2s;
  cursor: pointer;
  position: absolute;
  z-index: 999;
}

.absolute {
  position: absolute
}

.hidden {
  display: none !important;
}

.animate__animated {
  animation-duration: 1.5s;
  animation-fill-mode: both;
}

.animate__animated1 {
  animation-duration: 1s;
  animation-fill-mode: both;
}


@keyframes fadeInBottom {
  0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0)
  }

  to {
      opacity: 1;
      transform: translateZ(0)
  }
}



.animate__fadeInBottom {
  animation-name: fadeInBottom
}




/*info css*/

.adf_generic_close,
.adf_generic_icon {
  position: absolute;
  right: 5px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin: 0 !important;
  z-index: 9999999999;
}

.adf_generic_icon {
  bottom: 51px;
  background: url('tbsnews.net/file/infosvg') 0 0/100% 100% no-repeat;
  -webkit-animation: 1s .4s both fadeIn24;
  animation: 1s .4s both fadeIn24
}

.adf_generic_close {
  bottom: 90px;
  right:0;
  width: 15px;
  height: 15px;
  background: url('') 0 0/100% 100% no-repeat;
  -webkit-animation: 1s .4s both fadeIn24;
  animation: 1s .4s both fadeIn24
}

/* updated full responsive code */

@media (max-width:767px) {

.adf__wrapper .adf_overlay_img {
  height: auto;
}
  .adf_generic_close {
      bottom: 47px !important
  }
}
@media (max-width:567px) {
}
@media (max-width:435px) {
}
@media (max-width:395px) {
}
@media (max-width:325px) {
}

#adf_image_overlay_section{
width: ` +
    width +
    `px;
height:${height + "px"};
  margin:auto;
  top:0;
  position: absolute;

}
</style>

<style>
.adf_takeover img{
  position:absolute !important;
}

#adfinixAdLogo {
  z-index: 99999999;
  background: #ededed;
  bottom:0;
  right:0;
  opacity: .8;
  transition: .2s;
  border-radius:50%;
  position: absolute;
  display: inline-flex;
  text-decoration: none;
  padding: 3px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  align-items: center
}


#adfinixAdLogo img {
  width: 15px;
  height: 15px
}

#adfinixAdLogo span {
  width: 0;
  transition: .2s;
  margin-left: 2px;
  display: inline-block;
  font-size: 10px;
  visibility: hidden
}

#adfinixAdLogo:hover {
  opacity: 1
}

#adfinixAdLogo:hover span {
  width: 50px;
  margin-left: -70px;
  visibility: visible;
  padding:5px;
  padding-left: 10px;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  color: black;
  background: #ededed;
}



</style>

<div class="adf__wrapper">


<div class="adf_overlay">

<img onclick="ctaFunction()" 
src="https://tbsad.pages.dev/Business-Standrad-728-X-90.gif" class="absolute adf_overlay_img animate__animated animate__fadeInBottom">


</div>


<div class="adf_generic_close adf-close"></div>
</div>

<!-- modal info --> 
<link rel="stylesheet" href="https://tbsad.pages.dev/modal.css">
<div class="adf-modal-info" id="adf-modal-info">
<script src="https://tbsad.pages.dev/modal.js"></script>

<script src="https://tbsad.pages.dev/jquery.min.js"></script>

<script>

  function ctaFunction() {
      window.open(clickTag);

  }

let bg = top.document.querySelector("#bg");

let adf_overlay = document.querySelector(".adf_overlay");
let adf_overlay_img = document.querySelector(".adf_overlay_img");

function isMobile() {
  return window.top.innerWidth < 768;
}


if (window.top.innerWidth < 768) {
  adf_overlay_img.src = "https://tbsad.pages.dev/Business-Standrad-320-X-50-Pix-Mobile.gif";
  
} else {
  adf_overlay_img.src = "https://tbsad.pages.dev/Business-Standrad-728-X-90.gif";
}




/*add and remove class function*/

function remove_class(element, classname,newclass='') {
element.className = element.className.replace(classname, newclass);
}

function add_class(element, classname) {
element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
} 


<\/script>
`;


  new_adf_image_overlay_section.innerHTML += html;

  var scripts =
    new_adf_image_overlay_section.getElementsByTagName("SCRIPT");
  for (var i = 0; i < scripts.length; i++) {
    var s = document.createElement("SCRIPT");
    var a = scripts[i].attributes;
    for (var j = 0; j < a.length; j++) {
      s[a[j].nodeName] = a[j].value;
    }
    if (scripts[i].innerHTML) {
      s.text = scripts[i].innerHTML;
    }
    scripts[i].parentNode.replaceChild(s, scripts[i]);
  }
  adf_image_overlay_section.parentNode.replaceChild(
    new_adf_image_overlay_section,
    adf_image_overlay_section
  );
}

// desktop er jonno % mobile a gele px 
