import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//gsap.set("#Logo",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});

const dashboardtl = gsap.timeline();

export function DashboardAnimation() {

    
    dashboardtl.to("#Logo", {
        duration: 0.3,
        y: "-=50",
        x: "+=233",

        scale:0.2 });


    dashboardtl.from("#Speedometer", {
            duration: 0.9,
           alpha:-1
           
         });

    dashboardtl.from("#RPM", {
            duration: 1,
           alpha:-1
         });

    dashboardtl.from("#Speed", {
            duration: 0.9,
           alpha:-1
         });

    dashboardtl.from("#Circles", {
            duration: 1,
           alpha:-1
         });

    dashboardtl.from("#Icon", {
            duration: 1,
           alpha:-1
         });
    
         dashboardtl.from("#Music", {
            duration: 0.6,
           alpha:-1
         });
         dashboardtl.from("#Settings", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#Brightness", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#AC", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#Fan", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#Temperaturefuel-", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#Emergency", {
            duration: 0.7,
           alpha:-1
         });
         dashboardtl.from("#Fuel", {
            duration: 0.7,
           alpha:-1
         });
         dashboardtl.from("#Temperature", {
            duration: 0.7,
           alpha:-1
         });
        
         dashboardtl.from("#Speed-Needle", {
            duration: 4,
           alpha:-1,
           rotate: 800
           
         });
    return dashboardtl;

    
}