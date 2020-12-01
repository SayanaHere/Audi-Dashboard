import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);



import {LogoAnimation} from "./logo/logo.js"
import {DashboardAnimation} from "./dashboard/dashboard.js"
import { speedCounter } from "./speed/speed.js";

const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());
mainTL.add(DashboardAnimation());
mainTL.add(speedCounter());


// console.log(speedCounter);



GSDevTools.create();