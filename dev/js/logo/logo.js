import {
    gsap
} from "gsap";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#Audi-Logo", {
    transformOrigin: "center"
});

const logotl = gsap.timeline();

export function LogoAnimation() {


    logotl.from("#circle-1", {
        duration: 0.8,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-2", {
        duration: 0.8,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-3", {
        duration: 0.8,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-4", {
        duration: 0.8,
        drawSVG: "50% 50%"
    });

    logotl.to("#Audi-Logo", {
        duration: 0.8,
        y: 90
    });

    // logotl.from("#AudiName-2", {
    //     duration: 1,
    //     drawSVG: "50% 50%",
    //     ease: "0.5",
    //     autoAlpha: 1,
    //     opacity: 0

  
    // });

   logotl.from("#AudiName", {
        duration: 0.4,
        y: "-=140",
        x: "+=20",
        alpha: -6,
        opacity:0,

    scale:0.6 });   

    logotl.to("#AudiName", {
      duration: 1,
      y: "-=20",
      x: "+=5",
      opacity:1,
  scale:0.9 });  

    return logotl;
}