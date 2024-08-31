import { Icons } from "@/components/icons";
import { HomeIcon,Download, Icon } from "lucide-react";
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
      title: "NoteBin",
      href: "https://notebin-svvv.vercel.app/",
      dates: "31 July - 2 August 2024",
      active: true,
      description:
        "Notebin is a platform designed to help students find, organize, and share academic notes and materials. It offers a centralized hub for all your study resources, making it easy to access a wide range of study materials and contribute to the community by sharing your own notes.",
      technologies: [
        "Next.js",
        "Express.js",
        "Javascript",
        "MongoDb",
        "Cloudinary",
        "Nodemailer",
        "Jwt",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://notebin-svvv.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/imdeeep/notebin",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072293/jpyk7a7itxsqby9vsdll.png",
    },
    {
      title: "Lambda",
      href: "https://mylambda.vercel.app/",
      dates: "July - Present",
      active: true,
      description:"A real-time chat platform built with Socket.IO, featuring user profiles, friend connections, and group creation. It offers a social media experience for seamless interactions. The project is currently a work in progress.",
      technologies: [
        "Next.js",
        "Express.js",
        "Javacript",
        "MongoDb",
        "Socket.IO",
        "Redux",
        "Cloudinary",
        "Multer",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mylambda.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/lambda",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072289/refzs66kbk1fve4kffgs.png",
    },
    {
      title: "JobBoard",
      href: "https://jobboardsite.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
        "A website where employers can post job openings and job seekers can search and apply for jobs.",
        technologies: [
          "Next.js",
          "Express.js",
          "Javascript",
          "MongoDb",
          "Nodemailer",
          "Jwt",
          "Redux",
        ],
      links: [
        {
          type: "Website",
          href: "https://jobboardsite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/JobBoard",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072294/klnhwfi6xcfilitydvgx.png",
    },
    {
      title: "Veloura",
      href: "https://veloura-site.vercel.app/",
      dates: "May 2024 - Present",
      active: true,
      description:
        "A premium clothing e-commerce platform, currently a work in progress.",
      technologies: [
        "Next.js",
        "Redux",
        "MongoDB",
        "Express.js",
        "GSAP",
        "Lenis",
      ],
      links: [
        {
          type: "Website",
          href: "https://veloura-site.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/veloura",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072295/mbdmtvvidqeyc14mbpnz.png",
    },
    {
      title: "Abhyudaya Coding Club",
      href: "https://abhyudayacodingclub.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
      "Official Abhyudaya Coding Club website, a hub for coding enthusiasts to collaborate, learn, and showcase their projects. The site features coding resources, event announcements, and a platform for members to connect and share ideas.",
      technologies: [
        "Next.js",
        "Redux",
        "MongoDB",
        "Express.js",
        "GSAP",
        "Lenis",
      ],
      links: [
        {
          type: "Website",
          href: "https://abhyudayacodingclub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/abhyudayaCodingClub",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072295/mlz6qddyx72jcriqwnmn.png",
    },
    {
      title: "DocFlow",
      href: "https://docflow.netlify.app/",
      dates: "June 2024",
      active: true,
      description:
        "A collaborative document editing system featuring real-time chat functionality.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Express.js",
        "Firebase",
        "Jwt",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://docflow.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/docflow",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072290/jhllj580anjrbsp8qbrv.png",
    },
    {
      title: "Abhyudaya Elite",
      href: "https://abhyudyaelite.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
      "Official Abhyudaya Elite website, a hub for coding enthusiasts to collaborate, learn, and showcase their projects. The site features coding resources, event announcements, and a platform for members to connect and share ideas.",
      technologies: [
        "Next.js",
        "GSAP",
        "Framer Motion",
        "Jwt",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://abhyudyaelite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/Elite-Website",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072293/n8iurz8cfrn24zxlufkv.png",
    },
    {
      title: "DreamDose",
      href: "https://dreamdose.vercel.app/",
      dates: "Decemeber 2023",
      active: true,
      description:
        "A site dedicated to the horror genre, where users can write, upload, and share chilling stories, articles, and blogs. The platform offers a space for horror enthusiasts to create and engage with content.",
      technologies: [
        "Next.js",
        "GSAP",
        "Framer Motion",
        "Jwt",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://dreamdose.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href:"https://github.com/imdeeep/Dreamdose",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072289/iuyhdxhp5bucsdrqwptm.png",
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
