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

    logotl.from("#AudiName", {
        duration: 1,
        drawSVG: "50% 50%",
        ease: "0.5"

  
    });

    return logotl;
}