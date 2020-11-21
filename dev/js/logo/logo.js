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
        duration: 1,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-2", {
        duration: 1.3,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-3", {
        duration: 1.6,
        drawSVG: "50% 50%"
    });

    logotl.from("#circle-4", {
        duration: 2,
        drawSVG: "50% 50%"
    });

    logotl.from("#Audi", {

        duration: 1.6,
        drawSVG: "50% 50%"
        // y: -20
    });

    logotl.to("#Audi-Logo", {
        duration: 1,
        y: 90
    });

    return logotl;
}