import React from "react";
import Input from "./Input";
const BasicInfo = ({ BasicInfo, setBasicInfo }) => {
  const handleChange = (index, field, value) => {
    const updatedBasicInfo = [...BasicInfo];
    updatedBasicInfo[index][field] = value;
    setBasicInfo(updatedBasicInfo);
  };
  return (
    <>
      <div className="w-full">
        {BasicInfo?.map((exp, index) => (
          <div key={index}>
            <Input
              label="Name"
              value={exp.company}
              onChange={(e) => handleChange(index, "Name", e.target.value)}
            />
            <Input
              label="Position"
              value={exp.position}
              onChange={(e) => handleChange(index, "position", e.target.value)}
            />
          </div>
        ))
        }
      </div>
    </>
  );
};

export default BasicInfo;
