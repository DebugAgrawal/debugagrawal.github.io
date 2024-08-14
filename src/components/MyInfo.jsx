import React from "react";

const MyInfo = () => {
  const HelloWorld = {
    _id: "127.0.0.1",
    name: "Deepak Agrawal",
    nickName:"debugagrawal",
    designation: "Frontend Engineer",
    yearsOfExperience: "~3",
    primaryToolset: ["JavaScript", "ReactJS", "Redux", "Jest", "..."],
    interests: ["Fintech", "Leadership", "Entrepreneurship", "..."],

  };

  return (
    <div className="relative p-4 rounded-lg bg-custom">
      <div className="absolute top-6 left-12 blinking-rectangle"></div>
      <pre className="font-mono text-sm text-gray-400 md:text-lg">
        <span className="text-yellow-300">const WhoAmI = </span>
        {`{\n  `}
        <span className="text-green-300">"_id": </span>
        <span className="text-white">"{HelloWorld._id}",</span>
        {`\n  `}
        <span className="text-green-300">"name": </span>
        <span className="text-white">"{HelloWorld.name}",</span>
        {`\n  `}
        <span className="text-green-300">"nickName": </span>
        <span className="text-white">"{HelloWorld.nickName}",</span>
        {`\n  `}
        <span className="text-green-300">"yearsOfExperience": </span>
        <span className="text-white">"{HelloWorld.yearsOfExperience}",</span>
        {`\n  `}        
        <span className="text-green-300">"designation": </span>
        <span className="text-yellow-300">
          {HelloWorld.designation.toString()},
        </span>
        {`\n  `}
        <span className="text-green-300">"primaryToolset": </span>
        <span className="flex lg:inline-block">
          <span className="text-white">[</span>
          {HelloWorld.primaryToolset.map((tech, index) => (
            <span key={index} className="text-white">
              "{tech}"{index === HelloWorld.primaryToolset.length - 1 ? "" : ","}
            </span>
          ))}
          <span className="text-white">],</span>
        </span>
        <span className="hidden lg:inline">{`\n`}</span>
        <span>{`  `}</span>
        <span className="text-green-300">"interests": </span>
        <span className="flex lg:inline-block">
          <span className="text-white">[</span>
          {HelloWorld.interests.map((interest, index) => (
            <span key={index} className="text-white">
              "{interest}"
              {index === HelloWorld.interests.length - 1 ? "" : ","}
            </span>
          ))}
          <span className="text-white">],</span>
        </span>
        <span className="hidden lg:inline">{`\n`}</span>
        <span>{`  `}</span>
        
        <span>{`}`}</span>
      </pre>
    </div>
  );
};

export default MyInfo;
