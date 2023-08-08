import React from "react";
interface props {
  title: string;
  content: string;
}
const CompanyInfoCard = (props: props) => {
  return (
    <div className={"flex flex-col mb-2 text-white"}>
      <strong>{props.title} :</strong>
      <p className={"text-dimWhite"}>{props.content}</p>
    </div>
  );
};

export default CompanyInfoCard;
