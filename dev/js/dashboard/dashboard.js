import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#Dashboard",{transformOrigin: "center"});

export function DashboardAnimation() {
    var dashboardtl = gsap.timeline();
    dashboardtl.from("#Logo", {
        duration: 1,
        drawSVG: "50% 50%" });



    

    return dashboardtl;
}