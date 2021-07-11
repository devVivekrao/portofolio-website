import { v4 as uuidv4 } from "uuid";

import LoopstudioLandingPage from "./imgs/loopstudio-landing-page.webp";
import ManageLandingPage from "./imgs/manage-landing-page.webp";
import RoomHomepage from "./imgs/room-homepage.webp";
import SunnysideLandingPage from "./imgs/sunnyside-agency-landing-page.webp";
import SimpleSocialMedia from "./imgs/simple-social-media.webp";

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
    live: "https://vr-room-homepage.netlify.app/",
    code: "https://github.com/devVivekrao/room-homepage",
    featured: true,
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
  {
    id: uuidv4(),
    image: SimpleSocialMedia,
    name: "Simple social media app with authentication",
    description:
      "Simple social media app built with reactjs, nodejs, expressjs and mongodb.",
    tags: ["react", "scss", "javascript"],
    live: "http://vivekrao.netlify.app/",
    code: "https://github.com/devVivekrao/sunnyside-agency-landing-page",
    featured: true,
  },
];
