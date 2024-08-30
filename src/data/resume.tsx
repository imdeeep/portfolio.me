import { Icons } from "@/components/icons";
import { HomeIcon,Download } from "lucide-react";
import profilePic from "../../public/me.jpeg"

export const DATA = {
  name: "Mandeep Yadav",
  url: "https://www.linkedin.com/in/mandeepyadav27/",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/indore",
  description:
    "Web Developer, Native Developer, Open-Source Contributor, DSA and Cybersecurity Enthusiast, Constant Learner",
  summary:
  "I'm a [Cybersecurity enthusiast and Web Developer](/#work) with a passion for building secure and scalable solutions. Currently [pursuing a Bachelor's in Cybersecurity](/#education), I'm skilled in Network Security, Web Development, and languages like Python, Java, C. I'm actively working on [open-source projects, developing web-based solutions, and enhancing my skills in DSA and cybersecurity](/#rightnow). Eager to contribute to impactful projects and collaborate on exciting opportunities!",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Backend",
    "Typescript",
    "Python",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "VAPT",
    "DSA",
    "Java",
    "C++",
  ],
  initials: "MY",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/13IdIwbDCP00wDcdhtOOU5Ac4riuVEPy3/view", icon: Download, label: "Resume" },
  ],
  contact: {
    email: "mandeep7yadav@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imdeeep",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mandeepyadav27/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      href: "https://www.linkedin.com/in/mandeepyadav27/",
      company: "Self-Employed",
      badges: [],
      location: "Remote",
      title: "FullStack Developer and Cybersecurity Specialist",
      logoUrl: "/self.avif",
      start: "January 2024",
      end: "Present",
      description: "As a self-employed FullStack Developer and Cybersecurity Specialist, I have been involved in various freelancing projects that have honed my skills in both development and security. I have successfully completed projects ranging from building scalable web applications to implementing robust security measures for clients. These projects have not only allowed me to refine my technical abilities but also to grow individually by exploring new technologies and solving complex challenges. My work has been focused on delivering high-quality solutions that meet clients' needs while continually expanding my expertise in full-stack development and cybersecurity."
    },    
    {
      href: "https://www.linkedin.com/company/abhyudaya-coding-club/mycompany/",
      company: "Abhyudaya Coding Club",
      badges: [],
      location: "Remote",
      title: "FullStack Developer and Backend Lead",
      logoUrl: "/abhyudaya.jpeg",
      start: "March 2024",
      end: "Present",
      description:"As a FullStack Developer and Backend Lead at Abhyudaya Coding Club, I have been instrumental in driving the technical initiatives of the club.Abhyudaya Coding Club is a vibrant community dedicated to fostering a passion for coding and technology among students. Through workshops, seminars, hackathons, and other events, we empower members to enhance their coding abilities, explore new technologies, and build real-world projects, equipping them with the tools and knowledge necessary to succeed in the rapidly evolving field of technology."
    },
    
  ],
  education: [
    {
      school: " Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      href: "https://svvv.edu.in/",
      degree: "Bachelor's Degree of Computer Science and Information & Cybersecurity (B.Tech)",
      logoUrl: "/svvv.jpeg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack'Ndore",
      dates: "27 July - 29 July 2023",
      location: "Indore, India",
      description:
        "Developed an asset management system for Indore Municipal Corporation (IMC) to manage all assets under IMC. This system aimed to streamline the tracking and management of municipal assets.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66914f3895d69_hackendore_jpg.png?d=200x200",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://imc-hackndore.vercel.app/",
        },
      ],
    },
    {
      title: "wittyhacks-4.0",
      dates: "5 April - 7 April 2024",
      location: "Indore , India",
      description:
        "Developed an online food ordering system based on personal preferences, allowing users to place orders tailored to their tastes and dietary needs.",
      image:
        "https://www.datacode.in/static/media/logo.4eb691cc.svg",
      links:[]
    },
    {
      title: " 0xPPL AlgoBee II",
      dates: "16 April 2024",
      location: "Banglore, India",
      description:
        "Participated in an online DSA-based competitive programming challenge, focusing on problem-solving and algorithmic skills.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-660a5fe09783e_untitled-removebg_1_.png?d=200x200",
      links: [
          {
            title: "Website",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/ba1f3b38-33a7-4f15-b42b-a08e934df440.jpg",
          },
        ],
    },
    {
      title: " Code Mutants",
      dates: "24 February 2024",
      location: "Online , India",
      description:
        "Participated in an online competitive coding competition, testing problem-solving skills and coding expertise in a timed environment.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65cd10455e34a_img_0656.png?d=200x200",
        links: [],
    },
    {
      title: " Void Hacks( ) 5.0",
      dates: "16 November - 17 November 2023",
      location: "Indore, India",
      description:
        "Developed an online voting system as a solution to create a secure and centralized platform for online voting, ensuring the integrity and confidentiality of votes.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65149896437c0_vhlogo.png?d=200x200",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://votesphere.vercel.app/",
        },
      ],
    },
  ],
} as const;
