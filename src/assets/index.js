import { v4 as uuidv4 } from "uuid";

import LoopstudioLandingPage from "./imgs/loopstudio-landing-page.jpg";
import ManageLandingPage from "./imgs/manage-landing-page.jpg";
import RoomHomepage from "./imgs/room-homepage.jpg";
import SunnysideLandingPage from "./imgs/sunnyside-agency-landing-page.jpg";

export const projects = [
  {
    id: uuidv4(),
    image: LoopstudioLandingPage,
    name: "Loopstudio landing page",
    description:
      "Loopstudio landing page built with html, css and tiny bit of javascript.",
    tags: ["react", "scss", "javascript"],
    live: "https://vr-loopstudios-landing-page.netlify.app/",
    code: "https://github.com/devVivekrao/loopstudios-landing-page",
    featured: true,
  },
  {
    id: uuidv4(),
    image: ManageLandingPage,
    name: "Manage landing page",
    description:
      "Manage landing page built with html, css and tiny bit of javascript.",
    tags: ["html", "scss", "javascript"],
    live: "http://vivekrao.netlify.app/",
    code: "https://github.com/devVivekrao/manage-landing-page",
    featured: false,
  },
  {
    id: uuidv4(),
    image: RoomHomepage,
    name: "Room home page",
    description:
      "Room home page built with html, css and tiny bit of javascript.",
    tags: ["html", "scss", "javascript"],
    live: "http://vivekrao.netlify.app/",
    code: "https://github.com/devVivekrao/room-homepage",
    featured: false,
  },
  {
    id: uuidv4(),
    image: SunnysideLandingPage,
    name: "Sunnyside agency landing page",
    description:
      "Sunnyside agency landing page built with html, css and tiny bit of javascript.",
    tags: ["html", "scss", "javascript"],
    live: "http://vivekrao.netlify.app/",
    code: "https://github.com/devVivekrao/sunnyside-agency-landing-page",
    featured: false,
  },
];
