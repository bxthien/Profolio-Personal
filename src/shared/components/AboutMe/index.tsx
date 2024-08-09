import { Avatar, Progress, ProgressProps } from "antd";
import avatar from "../../../assets/avatar.jpg";
import { specializations } from "../../utils/constants";
import "./index.css";

const AboutMe = () => {
  const conicColors: ProgressProps["strokeColor"] = {
    "0%": "#7B3CA0",
    "100%": "#213982",
  };

  return (
    <div className="flex flex-row h-auto text-white">
      <div className="basis-1/2 flex items-center justify-center ">
        <Avatar src={avatar} size={400} />
      </div>
      <div className="flex flex-col items-start justify-center basis-2/4 float-left">
        <div className="uppercase font-bold text-3xl">About me</div>
        <div className="mt-5">
          Hi, I'm Thien Bui Xuan, I have 1+ year of experience as a Website
          Frontend in website and 1+ year as Blockchain Developer for Smart
          Contract.
        </div>
        <div className="flex flex-row w-full mt-4 ">
          <ul className="list-disc list-inside basis-1/3">
            {specializations.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="basis-1/2">
            <div>HTML + CSS + JS</div>
            <Progress
              percent={90}
              strokeColor={conicColors}
              className="custom-progress"
              size={[400, 10]}
            />
            <div>REACTJS</div>
            <Progress
              percent={80}
              strokeColor={conicColors}
              size={[400, 10]}
              className="custom-progress"
            />
            <div>BLOCKCHAIN RESEARCH</div>
            <Progress
              percent={80}
              strokeColor={conicColors}
              size={[400, 10]}
              className="custom-progress"
            />
            <div>UI/UX DESIGN</div>
            <Progress
              percent={90}
              strokeColor={conicColors}
              className="custom-progress"
              size={[400, 10]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
