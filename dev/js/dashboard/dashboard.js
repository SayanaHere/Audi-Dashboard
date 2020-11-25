import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//gsap.set("#Logo",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});

const dashboardtl = gsap.timeline();

export function DashboardAnimation() {

    
    dashboardtl.to("#Logo", {
        duration: 0.3,
        y: "-=50",
        x: "+=197",

        scale:0.3 });
      
        dashboardtl.to("#AudiName", {
          duration: 0.3,
          y: "-=140",
          x: "+=20",
  
          scale:0.9 });


    dashboardtl.from("#Speedometer", {
            duration: 0.7,
           alpha:-1
           
         });

    dashboardtl.from("#RPM", {
            duration: 0.9,
           alpha:-1
         });

         dashboardtl.from("#RectangleRed", {
          duration: 0.9,
          drawSVG: "0%",
         alpha:-1,
         ease: "power6.out"
         
       });
       

    dashboardtl.from("#Speed", {
            duration: 0.9,
           alpha:-1
         });

    dashboardtl.from("#Circles", {
            duration: 1,
           alpha:-1
         });

    dashboardtl.from("#Icons", {
            duration: 1,
           alpha:-1
         });
    
         dashboardtl.from("#Temperaturefuel-", {
            duration: 1,
           alpha:-1
         });
         dashboardtl.from("#RPMIcons", {
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