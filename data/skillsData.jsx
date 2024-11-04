"use client"
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiAntdesign,
  SiCsswizardry,
  SiDaisyui,
  SiDbeaver,
  SiEclipseide,
  SiJquery,
  SiMui,
  SiNestjs,
  SiPostman,
  SiSpringboot,
  SiXcode,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { VscVscode } from "react-icons/vsc";

function PopupContentDetail({ title, skillDescriptions = [] }) {
  return (
    <div className="px-4">
      <h2 className="font-bold">{title}</h2>
      {skillDescriptions?.length > 0 && (
        <ul className="list-disc">
          {skillDescriptions.map((desc) => {
            return <li key={desc}>{desc}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export const TechGroupItems = [
  {
    groupName: "Programming Languages",
    skills: [
      {
        skillName: "javascript",
        icon: AiOutlineJavaScript,
        popupContent: () => (
          <PopupContentDetail title={"javascript"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "typescript",
        icon: BiLogoTypescript,
        popupContent: () => (
          <PopupContentDetail
            title={"typescript"}
            skillDescriptions={[]}
          />
        ),
      },
      {
        skillName: "java",
        icon: FaJava,
        popupContent: () => (
          <PopupContentDetail title={"java"} skillDescriptions={[]} />
        ),
      },
    ],
  },
  {
    groupName: "Frontend",
    skills: [
      {
        skillName: "html",
        icon: TiHtml5,
        popupContent: () => (
          <PopupContentDetail title={"html"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "css",
        icon: SiCsswizardry,
        popupContent: () => (
          <PopupContentDetail title={"css"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "jquery",
        icon: SiJquery,
        popupContent: () => (
          <PopupContentDetail title={"jquery"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "tailwind",
        icon: RiTailwindCssFill,
        popupContent: () => (
          <PopupContentDetail title={"tailwind"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "daisyui",
        icon: SiDaisyui,
        popupContent: () => (
          <PopupContentDetail title={"daisyui"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "antdesign",
        icon: SiAntdesign,
        popupContent: () => (
          <PopupContentDetail title={"antdesign"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "mui",
        icon: SiMui,
        popupContent: () => (
          <PopupContentDetail title={"mui"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "react",
        icon: FaReact,
        popupContent: () => (
          <PopupContentDetail title={"react"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "nextjs",
        icon: RiNextjsFill,
        popupContent: () => (
          <PopupContentDetail title={"nextjs"} skillDescriptions={[]} />
        ),
      },
    ],
  },
  {
    groupName: "Backend",
    skills: [
      {
        skillName: "nodejs",
        icon: FaNodeJs,
        popupContent: () => (
          <PopupContentDetail title={"nodejs"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "nestjs",
        icon: SiNestjs,
        popupContent: () => (
          <PopupContentDetail title={"nestjs"} skillDescriptions={["basic"]} />
        ),
      },
      {
        skillName: "springboot",
        icon: SiSpringboot,
        popupContent: () => (
          <PopupContentDetail
            title={"springboot"}
            skillDescriptions={["basic"]}
          />
        ),
      },
    ],
  },
  {
    groupName: "Tools",
    skills: [
      {
        skillName: "vscode",
        icon: VscVscode,
        popupContent: () => (
          <PopupContentDetail title={"vscode"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "dbeaver",
        icon: SiDbeaver,
        popupContent: () => (
          <PopupContentDetail title={"dbeaver"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "github",
        icon: FaGithub,
        popupContent: () => (
          <PopupContentDetail title={"github"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "eclipse",
        icon: SiEclipseide,
        popupContent: () => (
          <PopupContentDetail title={"eclipse"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "xcode",
        icon: SiXcode,
        popupContent: () => (
          <PopupContentDetail title={"xcode"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "android_studio",
        icon: SiAndroidstudio,
        popupContent: () => (
          <PopupContentDetail title={"android studio"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "docker",
        icon: FaDocker,
        popupContent: () => (
          <PopupContentDetail title={"docker"} skillDescriptions={["basic"]} />
        ),
      },
      {
        skillName: "dbdiagram",
        icon: FaProjectDiagram,
        popupContent: () => (
          <PopupContentDetail title={"dbdiagram"} skillDescriptions={[]} />
        ),
      },
      {
        skillName: "postman",
        icon: SiPostman,
        popupContent: () => (
          <PopupContentDetail title={"postman"} skillDescriptions={[]} />
        ),
      },
    ],
  },
  {
    groupName: "Cloud",
    skills: [
      {
        skillName: "aws",
        icon: FaAws,
        popupContent: () => (
          <PopupContentDetail
            title={"AWS"}
            skillDescriptions={["lampda", "rds", "s3", "amplify"]}
          />
        ),
      },
      {
        skillName: "digital_ocean",
        icon: FaDigitalOcean,
        popupContent: () => (
          <PopupContentDetail
            title={"digital ocean"}
            skillDescriptions={["droplets"]}
          />
        ),
      },
    ],
  },
];
