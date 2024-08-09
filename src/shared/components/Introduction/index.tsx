import { Button, Image } from "antd";
import humanDev from "../../../assets/human.png";

interface Prop {
  title: string;
  color: string;
}

const titles: Prop[] = [
  { title: "ReactJS", color: "#FEC28E" },
  { title: "Ant Design", color: "#00873E" },
  { title: "TailwindCSS", color: "#CE9AD3" },
  { title: "ViteJS", color: "#8EB6ED" },
  { title: "HTML", color: "#603030" },
  { title: "CSS", color: "#00873E" },
  { title: "Javascript", color: "#CE9AD3" },
  { title: "Typescript", color: "#8EB6ED" },
];

const Introduction = () => {
  const getPositionStyle = (index: number, total: number) => {
    const positions = total + 2;
    const adjustedIndex = index >= total / 2 ? index + 2 : index + 1;
    const angle = (adjustedIndex / positions) * 2 * Math.PI - Math.PI / 2;
    const radius = 240;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      position: "absolute" as const,
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="flex flex-row h-screen pt-10">
      <div className="basis-2/4 p-12 flex justify-center items-center text-white">
        <div className="text-8xl font-semibold">
          <div className="">I'm a</div>
          <div className="bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5] text-transparent bg-clip-text">
            Front-end Developer
          </div>
          <div className="text-base font-normal mt-4">
            Hi, I'm Thien Bui Xuan, I have 1+ year of experience as a Website
            Frontend in website and 1+ year as Blockchain Developer for Smart
            Contract.
          </div>

          <Button
            className="uppercase font-bold text-white rounded-xl border-none mt-8"
            size="large"
            style={{
              background:
                "linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(239, 68, 68, 0.5))",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="basis-2/4 flex items-center justify-center p-10">
        <div
          className="flex justify-center items-center rounded-full w-[520px] h-[520px]"
          style={{
            background:
              "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(239, 68, 68, 0.2))",
          }}
        >
          <div
            className="flex justify-center items-center rounded-full w-[450px] h-[450px] bg-opacity-65"
            style={{
              background:
                "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(239, 68, 68, 0.2))",
            }}
          >
            <Image src={humanDev} preview={false} width={300} />
            {titles.map((item, index) => (
              <div
                key={index}
                style={getPositionStyle(index, titles.length)}
                className="flex rounded-md p-2 bg-white shadow-md"
              >
                {item.title}
                <div
                  className={`flex relative items-center justify-center left-[15px] top-2 rounded-full h-3 w-3`}
                  style={{
                    background: item.color,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
