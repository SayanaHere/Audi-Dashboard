import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//gsap.set("#Logo",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});

const dashboardtl = gsap.timeline();

export function DashboardAnimation() {
    
    dashboardtl.to("#Logo", {
        duration: 1,
        y: "-=100",
        scale:0.5 });

    return dashboardtl;
}