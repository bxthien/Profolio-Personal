import { Button } from "antd";
import repo1 from "../../../assets/repo1.png";
import repo2 from "../../../assets/repo2.png";

const RecentWork = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-auto text-white mt-20">
      <div className="uppercase font-bold text-4xl">Recent work</div>
      <div className="flex space-x-2 mt-12 columns-2">
        <div className="flex flex-col space-y-2 ">
          <img className="aspect-video" src={repo1} />
          <img className="aspect-video" src={repo1} />
        </div>
        <div className="flex items-center">
          <img className="aspect-square" src={repo2} />
        </div>
      </div>
      <Button
        className="uppercase font-bold text-white rounded-xl border-none mt-8"
        size="large"
        style={{
          background:
            "linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(239, 68, 68, 0.5))",
        }}
      >
        See more
      </Button>
    </div>
  );
};

export default RecentWork;
