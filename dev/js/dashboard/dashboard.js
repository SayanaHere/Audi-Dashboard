import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//gsap.set("#Logo",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});

const dashboardtl = gsap.timeline();

export function DashboardAnimation() {
    
    dashboardtl.to("#Logo", {
        duration: 1,
        y: "-=50",
        x: "+=233",

        scale:0.2 });
        
        

    return dashboardtl;
}