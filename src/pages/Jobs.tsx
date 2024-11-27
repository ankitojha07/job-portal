import React, { useState } from "react";
import JobComponent from "../components/JobComponent";
import { IoIosArrowDown, IoMdOptions } from "react-icons/io"; // Filter icon (IoMdOptions)

const Jobs = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State to toggle filter visibility

  const jobData = [
    {
      image: "public/images/profile/ankit-ojha.png",
      role: "Frontend Developer",
      company: "HappyLocate",
      ctc: "8 LPA - 17 LPA",
      location: "Bengaluru, Karnataka, India",
      employementType: "Full Time",
      experience: "3-6 Years",
      category: "Frontend Developer",
      techSkills: "React.js, Redux, Javascript",
    },
    {
      image: "public/images/profile/ankit-ojha.png",
      role: "Frontend Developer",
      company: "HappyLocate",
      ctc: "8 LPA - 17 LPA",
      location: "Bengaluru, Karnataka, India",
      employementType: "Full Time",
      experience: "3-6 Years",
      category: "Frontend Developer",
      techSkills: "React.js, Redux, Javascript",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header with Active Jobs and Filter Icon */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">Active Jobs</p>
        {/* Filter Icon (visible below lg) */}
        <button
          className="block lg:hidden text-2xl p-2"
          onClick={() => setIsFilterVisible((prev) => !prev)}
        >
          <IoMdOptions />
        </button>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Job List */}
        <div className="flex flex-col gap-2 mt-4">
          {jobData.map((data, key) => (
            <JobComponent
              key={key}
              image={data.image}
              role={data.role}
              company={data.company}
              ctc={data.ctc}
              location={data.location}
              employementType={data.employementType}
              experience={data.experience}
              category={data.category}
              techSkills={data.techSkills}
            />
          ))}
        </div>

        {/* Filters Section */}
        <div
          className={`ml-12 w-7/12 flex flex-col gap-12 ${
            isFilterVisible ? "block" : "hidden"
          } md:block`}
        >
          {/* Filters Header */}
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold tracking-wider">Filters</p>
            <button
              className="border px-2 py-1 rounded-lg text-sm"
              onClick={() => setIsFilterVisible(false)} // Hide filters when clearing
            >
              Clear All
            </button>
          </div>

          {/* Filter Options */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p>Type of Employement</p>
              <IoIosArrowDown />
            </div>
            <hr className="border-zinc-600" />
            <div className="flex justify-between items-center">
              <p>List of Skillset</p>
              <IoIosArrowDown />
            </div>
            <hr className="border-zinc-600" />
            <div className="flex justify-between items-center">
              <p>Engineer Category</p>
              <IoIosArrowDown />
            </div>
            <hr className="border-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
