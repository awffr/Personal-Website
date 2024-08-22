import Header from "../components/Header";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const experiencesData = [
  {
    title: "Medco Business Apprentice - Digital Information & Technology",
    description:
      "An Accelerated Development Program from Medco Energi providing fresh graduates with opportunities to take part of filling out Company’s key positions. It integrates development approach of OJT, Coaching & Mentoring, and Targeted training. The Digital Information Technology functions includes:",
    extras: "",
      points: [
      "Digital Transformation",
      "IT Business Application & Information Management",
      "IT Strategy Architecture & Planning",
      "Demand & Portfolio Management",
      "IT Technical Application & Data Management",
      "IT Infrastructure Management",
    ],
    location: "Jakarta, Indonesia",
    date: "Sep 24 - Present",
    content: (
      <img src="/experience-logo-medco.svg" alt="Medco Logo" className="w-auto h-auto" />
    ),
  },
  {
    title: "Cloud DevOps Engineer Intern",
    description:
      "",
    extras: "",
    points: [
      "Built and deployed cloud-based IT infrastructure given by the Solution Architect",
      "Monitored deployed cloud-based instances performance ",
      "Installed, configured, and maintained OS and apps on cloud servers",
      "Constructed a checklist rundown related to building infrastructure in the cloud",
      "Performed User Acceptance Testing and Load Testing",
      "Implemented in respond to Request for Change (RFC) documents if needed",
    ],
    location: "Remote",
    date: "Nov – Dec 22",
    content: (
      <img src="/experience-logo-elitery.svg" alt="Elitery Logo" className="w-auto h-auto" />
    ),
  },
  {
    title: "AWS Elite Cloud Engineer Bootcamp - DTS",
    description:
      "",
    extras: "",    
    points: [
      "Performed simulations as a Solutions Architect, DevOps Engineer, and SRE",
      "Assessed potential customer’s using Assessment form and Request for Proposal",
      "Created solution in form of cloud architecture topology for potential customer",
      "Created cloud infrastructure based on the created solutions",
      "Performed User Acceptance Testing (UAT) and Load Testing",
      "Monitored deployed infrastructure",
      "Prepared and presented knowledge transfer", 
      "Responded, reviewed, and fixed existing bugs or errors"
    ],
    location: "Jakarta, Indonesia",
    date: "Aug - Oct 22",
    content: (
      <img src="/experience-logo-aws.svg" alt="AWS Logo" className="w-auto h-auto" />
    ),
  },
  {
    title: "Universitas Gadjah Mada",
    description:
      "Bachelor of Computer Science, CGPA 3.98/4.00",
    extras: "Relevant Coursework: Machine Learning, Calculus, Cloud Computing, UI/UX, Big Data Analytics, Web Development, Databases, Programming",
    location: "Yogyakarta, Indonesia",
    date: "Sep 20 - Jan 24",
    content: (
      <img src="/experience-logo-ugm.svg" alt="UGM Logo" className="w-auto h-auto" />
    ),
  },
  {
    title: "University of Tokyo",
    description:
      "University-wide Student Exchange Program, CGPA 4.08/4.30",
    extras: "Relevant Coursework:  Data Analytics, Macroeconomics, Energy Innovation & Policy",
    location: "Tokyo, Japan",
    date: "Apr - Aug 2023",
    content: (
      <img src="/experience-logo-utokyo.svg" alt="UTokyo Logo" className="w-auto h-auto" />
    ),
  },
];

export function Experiences() {
  return (
   <div className="bg-[#08090A] min-h-screen flex flex-col relative overflow-clip">
      <Header/>
      <div className="p-6">
        <StickyScroll content={experiencesData} />
      </div>
    </div>
  );
};

export default Experiences;
