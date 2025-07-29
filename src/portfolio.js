/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Naveen's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Naveen Kurra Portfolio",
    type: "website",
    url: "http://NaveenKurra.com/",
  },
};

//Home Page
const greeting = {
  title: "Naveen Kurra",
  logo_name: "NaveenKurra",
  nickname: "Naveen",
  subTitle:
    "CS graduate and ML engineer driven to create impactful AI solutions for community well-being and personal fulfillment.",
  resumeLink:
    "https://drive.google.com/file/d/1QML6PZ4dr27FeqVa5xZGPgjcFp2KCXD4/view?usp=sharing",
  portfolio_repository: "https://github.com/naveen-kurra/Portifolio",
  githubProfile: "https://github.com/naveen-kurra",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/naveen-kurra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nkurra01/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:nkurra01@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Naveen_kurra7",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/naveen._kurra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#8B0000",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#ADD8E6",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#0000FF",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nkurra7/",
    },
    {
      siteName: "Machine Hack",
      iconifyClassname: "simple-icons:hackthebox", // No need for Iconify classname when using a custom image
      style: {
        color: "#F79F1B", // Set transparent as the color since you have an image
      },
      //logoImage: "Machinehacklogo.png", // Replace with the actual path to your Machine Hack logo image
      profileLink: "https://machinehack.com/user/5fe6d08cfdb02e4b8fc658f7", // Update this with your actual Machine Hack profile link
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    {
      siteName: "Google Scholar",
      iconifyClassname: "mdi:school",
      style: {
        color: "#1F8ACB",
      },
      profileLink:
        "https://scholar.google.com/citations?user=_OV9OgEAAAAJ&hl=en",
    },
    {
      siteName: "Zindi",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#323754",
      },
      profileLink: "https://zindi.africa/users/NaveenKurra",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/drphoenix",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Georgia",
      subtitle: "M.S. in Computer Science",
      logo_path: "ugalogo.png",
      alt_name: "UGA Athens",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.uga.edu/",
    },
    {
      title: "Vellore Institute of Technology",
      subtitle: "B.Tech. in Computnp,er Science and Engineering",
      logo_path: "vitaplogo.png",
      alt_name: "VIT-AP Amaravati",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://vitap.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Senior in NLP ",
      subtitle: "- Micro1",
      logo_path: "Micro1.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZqVgpkNdEYguQB1OdG3MmxzFY93IozY1/view?usp=sharing",
      alt_name: "Micro1",
      color_code: "#00000099",
    },
    {
      title: "Transformer Models and BERT Model",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/61fc4f36-c794-48ba-bba8-09a5a0f933d7/badges/12943478?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Attention Mechanism",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/61fc4f36-c794-48ba-bba8-09a5a0f933d7/badges/12943619?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: " Encoder-Decoder Architecture",
      subtitle: "-  Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/61fc4f36-c794-48ba-bba8-09a5a0f933d7/badges/12943677?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to LLM’s",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/61fc4f36-c794-48ba-bba8-09a5a0f933d7/badges/12943619?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Natural Language Processing Specilization",
      subtitle: "- Younes Bensouda, Łukasz Kaiser",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/YQX4DLMBB5K3",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/9FLPDVSK5GTP",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/68ANANEBG53G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Applied Machine Learning in Python",
      subtitle: "- Kevyn Collins-Thompson",
      logo_path: "umich.png",
      certificate_link: "https://coursera.org/verify/K82H7TEQ49S6",
      alt_name: "University of Michigan",
      color_code: "#8C151599",
    },
    {
      title: "Big Data",
      subtitle: "- Digital Vidya",
      logo_path: "nassommfslogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1itAllyDj72PxVuI5LJYH-xDOxnP4DsZo/view?usp=sharing",
      alt_name: "Nasscom",
      color_code: "#FFFFFFFF",
    },
    {
      title: "Associate Analytics",
      subtitle: "- NASSCOM",
      logo_path: "nasscomITSEClogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bkcU8R3FdTvWvblcIgUtrrXNqxFXU57i/view?usp=sharing",
      alt_name: "NASSCOMM",
      color_code: "#FFFFFFFF",
    },
    {
      title: "AI with Python",
      subtitle: "- Major League Hacking",
      logo_path: "mlhlogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1wF8YMKx_GpXvtnRXOL1c8NvlGiiHvsL5/view?usp=sharing",
      alt_name: "MLH",
      color_code: "#8C151599",
    },
    {
      title: "MATLAB",
      subtitle: "- MathWorks | Training Services",
      logo_path: "matlablogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1dp1_Gv1O9_MBEyulBZkxOj_NW3HQguGw/view?usp=sharing",
      alt_name: "matlab",
      color_code: "#FFFFFFFF",
    },
    {
      title: "Ethical Hacking",
      subtitle: "- Internshala",
      logo_path: "islogo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1K531Ohj6-ivb23XyAzgCJ3DjyWMR6-1c/view?usp=sharing",
      alt_name: "Internshala",
      color_code: "#FFFFFFFF",
    },
    // {
    //   title: "Ethical Hacking",
    //   subtitle: "- Internshala",
    //   logo_path: "islogo.jpg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1K531Ohj6-ivb23XyAzgCJ3DjyWMR6-1c/view?usp=sharing",
    //   alt_name: "Internshala",
    //   color_code: "#FFFFFFFF",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer Engineer II",
          company: "Oracle America, Inc.",
          company_url: "https://www.oracle.com/",
          logo_path: "oci_logo.png",
          duration: "July 2025 - Present",
          location: "Seattle, WA, USA",
          description: " Oracle Database@Google ",
          color: "#000000",
        },
        {
          title: "Senior Machine Learning Engineer",
          company: "Prometheus Intelligence",
          company_url: "https://www.prointel.net/",
          logo_path: "prointel.jpg",
          duration: "Feb 2025 - July 2025",
          location: "Atlanta, GA, USA",
          description:
            " ◦ Engineered end-to-end pipeline from Whisper streaming STT, Silero VAD, active-memory LangChain orchestration, and FP16 Piper TTS, delivering < 1.2 s round-trip latency in fully autonomous and human-in-the-loop modes. Won USD 5M nn-dilutive sponsorship from the USAF Maintenance Wing and U.S. Army Equipment Testing Command to field-test the platform for aircraft maintenance debriefs and equipment QA. Distilled an 11B-parameter LLM to 4B using a proprietary human-curated dataset; designed a custom knowledge-distillation loss combining cross-entropy and cosine embedding, preserving 97% downstream accuracy with 66% parameter reduction. Elevated scenario-specific accuracy with few-shot learning: fine-tuned the distilled 4 B model using LoRA, QLoRA, and PEFT adapters, then applied targeted few-shot prompts to outperform the base model across diverse customer use-cases. Pruned & quantized the distilled model to mixed INT4-INT8 precision (GPTQ & AWQ) and exported to ONNX & .gguf; realized 3.2× faster inference and 68% memory savings on Jetson NX due to less memory footprint. And also converted to TensorRT format when using fixed size. Prometheus Intelligence logoDevised a Whisper streaming STT pipeline running INT8 onnx weights; paired with SileroVAD and PyAudio to cut utterance latency by 40% while retaining ±1% WER vs FP32 baseline. Integrated Piper TTS (FP16 onnx) with dynamic voice selection, shrinking end-to-end voice assistant round-trip  to < 1.2s. Implemented sentence-level streaming TTS: leveraged NLTK to detect end-of-sentence tokens and trigger Piper TTS immediately, slashing unnecessary TTS calls and trimming end-to-end latency by sending only completed sentences; added a token-matching “early-stop” to terminate generation once the desired utterance was produced. Implemented LangChain-based orchestration with active-memory buffers enabling the 4B model to handle role-switched dialogues; reduced hallucination rate >25% via curated system prompts & RAG. Tamed hallucinations via rigorous hyper-parameter tuning: optimized temperature, batch size, past present buffer, max length, and context-window management, cutting spurious responses and boosting factual precision during live edge deployments. Collaborated with Microsoft ONNX Runtime team; identified token-append bottleneck, especially during forward pass that shaved 8% latency off onnxruntime-genai forward-passes. Hardened edge images (Ubuntu 22.04 aarch64): rebuilt PyPI wheels (PyTorch, HF, GPTQ-cuda) from source; automated provisioning scripts, yielding >90% first-boot success across multiple devices. Productized the web version on Azure ML Studio: containerized the 4 B quantized model with a custom environment.yml and lean score.py inference handler, then exposed it as an autoscaling HTTPS endpoint for browser clients and REST integrations.",
          color: "#000000",
        },
        {
          title: "Research Engineer",
          company: "University of Georgia",
          company_url: "https://www.uga.edu/",
          logo_path: "ugalogo.png",
          duration: "Feb 2025 - Present",
          location: "Athens, GA, USA",
          description:
            " ◦ Project A - Real-Time Avian Comfort & Ventilation Monitor Engineered an ESP32-based IoT node that samples temperature, humidity, air-velocity, and barometric pressure over I²C and streams packets via BLE at < 200 ms intervals. Built a React.js telemetry dashboard with live WebSocket ingestion and lightweight D3 charts, giving transport staff an at-a-glance “comfort index” and historical trend drill-downs. Integrated GPT-4 via Azure OpenAI; the model ingests rolling sensor windows and formulates prescriptive insights (e.g., “Increase airflow in bay 3 by 15 Project B - Hyperspectral Peanut Maturity Sorting System Captured 462-band hyperspectral cubes using a programmable FLIR imager on Raspberry Pi 5; automated shutter, exposure, and conveyor sync for 12 fps throughput. Compressed spectra with PCA to three principal components retaining 99.9% variance, enabling real-time processing on the Pi’s 16 GB RAM. Segmented kernels via K-means (k = 3) on the PCA composite, producing crisp maturity masks without labeled data. Mapped pixel masks back to full spectral stack and ranked wavelengths by one-vs-rest F1, pinpointing the top band for each maturity stage (green, yellow, brown).",
          color: "#000000",
        },
        {
          title: "Research Assistant",
          company: "University of Georgia",
          company_url: "https://www.uga.edu/",
          logo_path: "ugalogo.png",
          duration: "Jan 2023 - Present",
          location: "Athens, GA, USA",
          description:
            " Evaluated a novel photonic based breathe analyzer through signal processing and machine learning techniques (SVM,XGBoost), achieving 98% accuracy with extensive feature engineering. Also worked on extending an existing simulator that replicates the process of neuro-degenerative diseases in humans using multi agent system architecture, behavioral trees in unity.",
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Junior Engineer",
          company: "Velozity Global Solutions",
          company_url: "https://velozityglobal.com/",
          logo_path: "velozitylogo.jpg",
          duration: "Feb 2022 - May 2022",
          location: "Chennai, India",
          description:
            "Developed and Deployed an Advanced ECG Signal Classification System with Custom 1D CNN-ResNet Fusion Model. Model Development & Innovation: Spearheaded the development of a custom 1D CNN-ResNet fusion-based machine learning model capable of detecting up to 14 distinct arrhythmias from ECG signals, achieving an impressive 92% classification accuracy. Feature Engineering & Signal Analysis: Engineered advanced temporal and frequency-domain features, including R-R intervals, heart rate variability (HRV), and spectral power metrics, to enhance model inputs, driving substantial performance gains in ECG classification tasks. Cross-Channel Dependency Analysis: Pioneered the adaptation of multivariate dependency analysis inspired by cross-channel techniques from C-Mamba, significantly boosting the model’s ability to correlate cardiac events across multiple ECG leads, thus improving interpretability and robustness. Human-in-the-Loop Learning: Implemented human-in-the-loop (HITL) learning techniques, incorporating dynamic callbacks for on-demand model retraining, leading to rapid feedback loops and ongoing model optimization. This approach led to more adaptive and context-aware model improvements. Signal Processing & Annotation: Applied rigorous signal processing techniques by cleaning, pruning, and annotating ECG signals with precise, domain-specific labels. This meticulous approach enhanced the signal-to-noise ratio, resulting in a 30% boost in model performance. Utilization of Industry-Standard Libraries: Explored and leveraged cutting-edge signal processing libraries, including HeartPy, NeuroKit2, BioSignalsNotebooks, MNE, Scipy, and other essential toolkits for robust ECG signal analysis and preprocessing. Custom Utility Development: Built custom utility functions for preprocessing, inspired by the core capabilities of established libraries. These utilities offered tailored solutions to address edge cases, reduce noise, and streamline signal transformations, ensuring clean, high-quality data inputs for the model. Collaborative & Cross-Functional Approach: Collaborated with cross-functional teams of data scientists, machine learning engineers, and healthcare professionals to align development efforts with clinical needs and regulatory standards, ensuring the model's readiness for real-world deployment.",
          color: "#000000",
        },
        {
          title: "Research Fellow",
          company: "Madras Scientific Research Foundation",
          company_url: "https://www.madrasscience.org/",
          logo_path: "msrflogo.jpg",
          duration: "Jan 2022 - Jun 2022",
          location: "Chennai, India",
          description:
            "Designed and deployed a legal navigation platform leveraging NLP, transformers, and machine learning to assist cyber-attack victims in accessing legal resources and support, with insights visualized in Tableau for impact and engagement analysis. Designed and implemented clustering algorithms like K-means and hierarchical clustering to group legal documents,enabling efficient retrieval of relevant resources for user queries based on contextual similarity. Used PCA, t-SNE and UMAP to visualize and reduce the dimensionality of legal text embeddings, uncovering hidden relationships and improving the interpretability of document clusters. Engineered ML-driven anomaly detection for additive manufacturing, achieving 95% accuracy with a Modified YOLO architecture, leveraging computer vision, deep learning, and multi-threading.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Developer",
          company: "Analysed.in",
          // company_url:
          //   "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "analysedlogo.jpg",
          duration: "Feb 2021 - May 2021",
          location: "Hyderabad, India",
          description:
            "Built a recruitment platform integrating NLP, feature engineering, and predictive modeling to optimize job matching with candidate analytics and platform performance visualized using Power BI. Leveraged OpenPose for body language analysis and Transformers, RNNs, and Wave2Vec for stammering detection. Improved Wave2Vec transcription accuracy by optimizing time series signal preprocessing through spectral analysis.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "NVIDIA Developer Program",
          company: "NVIDIA",
          company_url: "https://developer.nvidia.com/developer-program",
          logo_path: "Nvidia_logo.png",
          duration: "Dec 2024 - Present",
          location: "",
          description:
            "The NVIDIA Developer Program is a platform designed to support developers, researchers, engineers, and data scientists who are building AI, machine learning, data science, computer vision, graphics, robotics, and other high-performance computing (HPC) applications",
          color: "#4285F4",
        },
        {
          title: "Judge",
          company: "75th and 76th Georgia State Science and Engineering Fair",
          company_url:
            "https://www.georgiacenter.uga.edu/youth/academic-special-programs/georgia-science-and-engineering-fair",
          logo_path: "gseflogo.png",
          duration: "",
          location: "Athens, GA, USA",
          description:
            "Served as a tier I judge to evaluate the works presented by high shool students in the area of Robotics and AI",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        {
          title: "Vice President",
          company: "Indian Student Association - University of Georgia",
          company_url: "https://isa.uga.edu/",
          logo_path: "uga_isa_logo.jpeg",
          duration: "Aug 2023 - May 2024",
          location: "Athens, Georgia, USA",
          description:
            "Indian Student Association (ISA) is a student organization under the International Student Life (ISL) supporting the Indian students at University of Georgia ,Athens, GA. ISA comprises of Indian students, faculty, and families residing in Athens.",
          color: "#0C9D58",
        },
        {
          title: "Judge",
          company: "Georgia Junior Science & Humanities Symposium",
          company_url:
            "https://www.georgiacenter.uga.edu/youth/academic-special-programs/georgia-junior-science-humanities-symposium",
          logo_path: "gjshslogo.png",
          duration: "2023",
          location: "Athens, GA, USA",
          description:
            "Served as a judge to evaluate the works presented by high shool students in the area of AI.",
          color: "#181717",
        },
        {
          title: "Developer Students Club Member",
          company: "GDSC VIT-AP University",
          company_url:
            "https://www.linkedin.com/company/gdgoncampusvitap/?originalSubdomain=in",
          logo_path: "dsc_logo.png",
          duration: "2023 and 2024",
          location: "Amaravati, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Googel Clound, Flutter.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "senti-clasification",
      name:
        "Sentiment classification on Tamil and Telugu text using RNNs and Transformers",
      createdAt: "2021",
      description:
        "Paper presented in 2021 International Conference on Technological Advancements and Innovations and published in IEEE Xplore",
      url: "https://ieeexplore.ieee.org/document/9673365",
    },
    {
      id: "chest-X-ray",
      name: "CHEST X-RAY CLASSIFICATION USING SELF-SUPERVISED LEARNING",
      createdAt: "2023",
      description: "Published in Investigación Operacional 45.1 (2024): 40-45.",
      url:
        "https://rev-inv-ope.pantheonsorbonne.fr/sites/default/files/inline-files/45124-07.pdf",
    },
    {
      id: "resp-pranas",
      name:
        "Pathogenic Bacteria Characterization through Portable Optical Scatter Device and Machine Learning",
      createdAt: "2024",
      description: "Submitted to PNAS Nexus",
      //url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Naveen_Kurra.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "10 Peachford Cir., Dunwoody, GA, USA 30338",
    locality: "Dunwoody",
    country: "USA",
    region: "Georgia",
    postalCode: "3033",
    streetAddress: "10 Peachford Cir.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://g.co/kgs/4aVa2D2",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
