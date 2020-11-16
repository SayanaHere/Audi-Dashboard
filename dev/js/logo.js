import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#Audi-Logo",{transformOrigin: "center"});

export function LogoAnimation() {
    var logotl = gsap.timeline();
    logotl.from("#circle-1,#circle-2,#circle-3,#circle-4", {
        duration: 1,
        drawSVG: "50% 50%" });

    logotl.from("#Audi", {
        
        duration: 1,
        y:-20,
        alpha:-1 });

    logotl.to("#Audi-Logo", {
        duration: 1,
        y:90,
        alpha:-1 });

    return logotl;
}