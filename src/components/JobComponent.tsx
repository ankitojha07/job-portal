import { PiBagSimple } from "react-icons/pi";

interface jobCard {
  image: string;
  role: string;
  company: string;
  ctc: string;
  location: string;
  employementType: string;
  experience: string;
  category: string;
  techSkills: string;
}

const JobComponent = ({
  image,
  role,
  company,
  ctc,
  location,
  employementType,
  experience,
  category,
  techSkills,
}: jobCard) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 rounded-md border border-zinc-400 px-2 py-4">
      <img
        src={image}
        alt=""
        className="rounded-full w-20 h-20 hidden lg:block"
      />
      <div className="flex flex-col justify-start items-start gap-2">
        <div>
          <p className="font-bold text-xl">{role}</p>
          <p className="font-bold text-xs text-zinc-400">{company}</p>
        </div>
        {/* 3 info below  */}
        <div className="flex justify-start items-center gap-3 flex-wrap">
          <div className="flex justify-center items-center gap-1">
            <PiBagSimple />
            <p>{ctc}</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <PiBagSimple />
            <p>{location}</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <PiBagSimple />
            <p>{employementType}</p>
          </div>
        </div>
        <hr />
        {/* category and experience  */}
        <div className="flex justify-start items-center gap-4 flex-wrap">
          <p>
            YOE: <span className="font-bold">{experience}</span>{" "}
          </p>
          <p>
            Category: <span className="font-bold">{category}</span>
          </p>
        </div>
        <p>
          Technical Skills: <span className="font-bold">{techSkills}</span>
        </p>
      </div>
    </div>
  );
};

export default JobComponent;
