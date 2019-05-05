import Highway from "@dogstudio/highway"
import Fade from "./transition"

const H = new Highway.Core({
    transitions:{
        default: Fade
    }
});



//import { TweenLite, TimelineMax, Power2 } from "gsap";

//var logo = document.getElementById("logo");

// logo.setAttribute("width","10px");
// logo.setAttribute("heigth","10px");
// logo.setAttribute("x","200");

//TweenLite.to(logo, 2, {width: "428px", heigth: "428px", x:100, y: 300});
/*var tl = new TimelineMax().timeScale(3);
tl.to("#logo", 1, {scale: 2, opacity:0.8});
tl.staggerTo("#logo", 2, {scale: 1, rotation: 180, opacity: 1}, 0.2);
*/
//TweenLite.to("#logo", 2, {backgroundColor:"#ff000   0", width:"10%", top:"10px", ease:Power2.easeOut});