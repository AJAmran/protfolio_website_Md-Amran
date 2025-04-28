const projects = [
    {
        id: 1,
        title: "X-mart Super Shop",
        description:
          "X-Mart Super Shop is a modern full-stack e-commerce solution designed to deliver a seamless digital shopping experience. The platform features secure user authentication, comprehensive product catalog management, efficient order processing, and an intuitive admin dashboard for business operations",
        techStack: [
          "Next.js (v15.0.4)",
          "NextUI ",
          "React Query ",
          "Tailwind CSS",
          "Axios",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Mongoose",
          "JWT",
          "Multer",
          "Framer Motion"
        ],
        client: "https://github.com/AJAmran/x-mart-client.git",
        server: "https://github.com/AJAmran/x-mart-backend.git",
        liveLink: "https://x-mart-client.vercel.app/",
        images: [
          {
            src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1745861627/x1_swzmef.png",
            alt: "X-mart Homepage"
          },
          {
            src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1745861626/x2_ievxhr.png",
            alt: "X-mart Shop Page"
          },
          {
            src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1745861626/x-3_acopks.png",
            alt: "X-mart Order Page"
          }
        ],
        features: [
          "Event management system",
          "Online ticket booking",
          "Admin dashboard",
          "Venue information"
        ],
        category: "Professional",
        year: 2023
      },
    {
      id: 2,
      title: "Bangabandhu International Conference Center",
      description:
        "A comprehensive event management website designed for the Bangabandhu International Conference Center. Users can browse upcoming events, book tickets, and access detailed venue information.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
        "Firebase",
        "React Router",
        "PHP",
        "MySQL",
        "Cloudinary",
        "Google Map",
      ],
      githubLink: "",
      liveLink: "https://bicc-bd.com",
      images: [
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120359/bicc-1_gq0kxt.webp",
          alt: "BICC Homepage"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120360/bicc-3_vpboav.webp",
          alt: "About Page"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120359/bicc-5_ikzmuh.webp",
          alt: "Catering Page"
        }
      ],
      features: [
        "Event management system",
        "Online ticket booking",
        "Admin dashboard",
        "Venue information"
      ],
      category: "Professional",
      year: 2023
    },
    {
      id: 3,
      title: "Xinxian Hospitality Training Institute",
      description:
        "A platform developed for the Xinxian Hospitality Training Institute (XHTI), enabling course registration, student management, and efficient communication for a government-approved hospitality institute.",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Vite",
        "Framer Motion",
        "Firebase",
        "PHP",
        "MySQL",
        "Google Apps Script",
        "Swiper",
      ],
      githubLink: "",
      liveLink: "https://xhti-bd.com",
      images: [
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120434/xhit1_p2l5os.webp",
          alt: "XHTI Homepage"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120435/xhti2_n2gagi.webp",
          alt: "About Page"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120435/xhti3_rej6sy.webp",
          alt: "About page"
        }
      ],
      features: [
        "Course registration system",
        "Student management",
        "Certificate generation",
        "Payment integration"
      ],
      category: "Professional",
      year: 2022
    },
    {
      id: 4,
      title: "Scouts Poll",
      description:
        "A single-page application for conducting polls, with full admin control. The platform allows users to vote, view poll history, and see results in real time.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "React Router",
        "Node.js",
        "Express",
        "MongoDB",
        "Recharts",
      ],
      githubLink: "https://github.com/UpalBarua/scouts-poll.git",
      liveLink: "https://scouts-poll.vercel.app/auth",
      images: [
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120394/1694331635144_pjxfxn.jpg",
          alt: "Poll Interface"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120395/1694331635246_y3xnnq.jpg",
          alt: "Active Polls Page"
        },
        {
          src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120395/1694331635957_hbdkzh.jpg",
          alt: "Results Page"
        }
      ],
      features: [
        "Real-time polling",
        "Admin controls",
        "Data visualization",
        "User authentication"
      ],
      category: "Personal",
      year: 2023
    },
    // {
    //   id: 5,
    //   title: "TrendHaven",
    //   description:
    //     "A fully functional e-commerce platform that provides users with a seamless online shopping experience.",
    //   techStack: [
    //     "React",
    //     "Tailwind CSS",
    //     "@tanstack/react-query",
    //     "Firebase",
    //     "Express",
    //     "MongoDB",
    //     "Sweetalert2",
    //     "Framer Motion",
    //   ],
    //   githubLink: "https://github.com/trendhaven-client",
    //   liveLink: "hhttps://trendhaven.netlify.app/registration",
    //   images: [
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven1_eyo347.webp",
    //       alt: "Product Catalog"
    //     },
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven3_jbx7v6.webp",
    //       alt: "Shopping Cart"
    //     },
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven2_krq7ag.webp",
    //       alt: "Shop Page"
    //     }
    //   ],
    //   features: [
    //     "Product catalog",
    //     "Shopping cart",
    //     "Payment processing",
    //     "Order tracking"
    //   ],
    //   category: "Professional",
    //   year: 2023
    // }
    // {
    //   id: 6,
    //   title: "Admin Dashboard",
    //   description:
    //     "A fully functional e-commerce platform that provides users with a seamless online shopping experience.",
    //   techStack: [
    //     "React",
    //     "Tailwind CSS",
    //     "@tanstack/react-query",
    //     "Firebase",
    //     "Express",
    //     "MongoDB",
    //     "Sweetalert2",
    //     "Framer Motion",
    //   ],
    //   githubLink: "https://github.com/trendhaven-client",
    //   liveLink: "hhttps://trendhaven.netlify.app/registration",
    //   images: [
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven1_eyo347.webp",
    //       alt: "Product Catalog"
    //     },
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven3_jbx7v6.webp",
    //       alt: "Shopping Cart"
    //     },
    //     {
    //       src: "https://res.cloudinary.com/ddbvbwznx/image/upload/v1725120411/trendhaven2_krq7ag.webp",
    //       alt: "Shop Page"
    //     }
    //   ],
    //   features: [
    //     "Product catalog",
    //     "Shopping cart",
    //     "Payment processing",
    //     "Order tracking"
    //   ],
    //   category: "Professional",
    //   year: 2023
    // }
  ];
  
  export default projects;