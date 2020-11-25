import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//gsap.set("#Logo",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});

const dashboardtl = gsap.timeline();

export function DashboardAnimation() {

    
    dashboardtl.to("#Logo", {
        duration: 0.3,
        y: "-=50",
        x: "+=205",

        scale:0.3 });
      
        dashboardtl.to("#AudiName", {
          duration: 0.1,
          y: "-=140",
          x: "+=10",
  
          scale:0.9 });


    dashboardtl.from("#Speedometer", {
            duration: 0.7,
           alpha:-1,
           y: "-=50"
         });
        

    dashboardtl.from("#RPM", {
            duration: 0.9,
           alpha:-1
         });

         dashboardtl.from("#RectangleRed", {
          duration: 0.5,
          drawSVG: "0%",
         alpha:-1,
         width: "-25"
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
            duration: 3,
           alpha:-1,
           rotate: 800
           
         });

         
    return dashboardtl;

    
}