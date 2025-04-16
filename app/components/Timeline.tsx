import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const TimelineData = [
    {
      companyImg: "/trycle.PNG",
      jobTitle: "Frontend Engineer",
      company: "Trycle",
      jobType: "Full Time",
      duration: "Nov 2024 - March 2025",
      stuffIDid: [
        "Developed modular and reusable front-end components using React.js and Next.js",
        "Built responsive UIs with Tailwind CSS and DaisyUI, ensuring seamless API integrations",
        "Translated high-fidelity Figma designs into fully functional web applications",
        "Led development of an HR request approval system enabling dynamic multi-level approvals and real-time tracking",
        "Implemented state management with Zustand and integrated RESTful APIs",
        "Deployed application using Vercel and maintained CI/CD pipelines",
      ],
    },
    {
      companyImg: "/kitaab.PNG",
      jobTitle: "Software Engineer",
      company: "kitaab.ai",
      jobType: "Full Time",
      duration: "July 2023 - Dec 2023",
      stuffIDid: [
        "Designed and maintained web components using Next.js, TypeScript, and Material-UI",
        "Identified and resolved frontend bugs to ensure a seamless user experience",
        "Enhanced website performance through responsive design and code optimization",
        "Contributed to the fintech website enhancement, resolving frontend issues and optimizing UI components",
      ],
    },
    {
      companyImg: "/cloudvandana.PNG",
      jobTitle: "Associate Software Engineer",
      company: "CloudVandana Solutions",
      jobType: "Full Time",
      duration: "July 2021 - Dec 2022",
      stuffIDid: [
        "Integrated Microsoft OneDrive and Amazon S3 into a Salesforce Lightning Web Component (LWC) application",
        "Developed test cases achieving over 90% code coverage and implemented debugging strategies for performance improvements",
        "Collaborated with cross-functional teams in an Agile development environment",
        "Developed secure authentication and efficient data transfer mechanisms for file management",
      ],
    },
    {
      companyImg: "/espl.PNG",
      jobTitle: "Internship Trainee",
      company: "Exlygenze Senseworks Private Limited ",
      jobType: "Intership",
      duration: "Jan 2021 - April 2021",
      stuffIDid: [
        "Integrated Microsoft OneDrive and Amazon S3 into a Salesforce Lightning Web Component (LWC) application",
        "Developed test cases achieving over 90% code coverage and implemented debugging strategies for performance improvements",
        "Collaborated with cross-functional teams in an Agile development environment",
        "Developed secure authentication and efficient data transfer mechanisms for file management",
      ],
    },
  ];

  return (
    <section className="m-10 md:m-[110px] ">
      <h1> Work experience</h1>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
