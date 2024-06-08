import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import vetImage from "./assets/pocket-vet-preview.png";

// todo still need this?
export enum ProjectNames {
  MEET = "Meet",
  TAQUERIA = "Taqueria Express",
  ORB = "My Orb",
  VET = "Pocket Vet",
}

export type ProjectData = {
  name: string;
  image: string;
  text: string;
  url: string;
  order: number;
};

// todo rename this!!
export const ProjectsData: ProjectData[] = [
  {
    name: ProjectNames.VET,
    image: vetImage,
    text: "Accessibility study for an in-development mobile app",
    url: "/projects/pocketvet",
    order: 0,
  },
  {
    name: ProjectNames.ORB,
    image: orbImage,
    text: "Mobile app design for the tool that gathers existing social media content into one platform for small content creators and artists",
    url: "/projects/myorb",
    order: 1,
  },
  {
    name: ProjectNames.TAQUERIA,
    image: taqueriaImage,
    text: "Mobile and responsive web design for a popular taco truck in Charleston SC",
    url: "/projects/taqueria",
    order: 2,
  },
  {
    name: ProjectNames.MEET,
    image: meetImage,
    text: "Mobile and responsive web design for expat women to meet others in their new city",
    url: "/projects/meet",
    order: 3,
  },
];
