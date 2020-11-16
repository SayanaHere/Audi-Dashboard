import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);



import {LogoAnimation} from "./logo.js"
import {DashboardAnimation} from "./dashboard.js"



const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());
mainTL.add(DashboardAnimation());



GSDevTools.create();