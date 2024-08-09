import { Button, Input } from "antd";
import mailIconSVG from "../../../assets/svgs/mail.svg";
import phoneIconSVG from "../../../assets/svgs/phone.svg";
import MapIconSVG from "../../../assets/svgs/map.svg";
import InstagramIconSVG from "../../../assets/svgs/instagram.svg";
import LinkedIconSVG from "../../../assets/svgs/linked.svg";
import TwitterIconSVG from "../../../assets/svgs/twitter.svg";

const Contact = () => {
  return (
    <div className="container flex flex-row text-white p-10 justify-center">
      <div className="flex flex-col basis-1/2 gap-5">
        <div className="font-semibold text-2xl">
          Let’s Make Something new, different get together.
          <div className="bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5] text-transparent bg-clip-text capitalize font-bold">
            just say hello
          </div>
        </div>
        <div className="flex mt-10">
          <img
            className="mr-4"
            src={phoneIconSVG}
            alt="My SVG Icon"
            sizes="10"
          />
          +84 336 546 578
        </div>
        <div className="flex">
          <img className="mr-4" src={MapIconSVG} alt="My SVG Icon" sizes="10" />
          Da Nang City, Viet Nam
        </div>
        <div className="flex">
          <img
            className="mr-4"
            src={mailIconSVG}
            alt="My SVG Icon"
            sizes="10"
          />
          buixuanthien.0105@gmail.com
        </div>
        <div className="flex flex-row gap-4">
          <div className="border-2 border-white p-3 rounded-full  cursor-pointer">
            <img src={LinkedIconSVG} alt="My SVG Icon" sizes="10" />
          </div>
          <div className="border-2 border-white p-3 rounded-full items-center justify-center flex  cursor-pointer">
            <img src={TwitterIconSVG} alt="My SVG Icon" sizes="10" />
          </div>
          <div className="border-2 border-white p-3 rounded-full cursor-pointer">
            <img src={InstagramIconSVG} alt="My SVG Icon" sizes="10" />
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex-col bg-black bg-opacity-40 p-6 rounded-xl shadow-lg">
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" className="mt-4" />
        <Input.TextArea
          placeholder="Message"
          className="mt-4"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Button
          className="uppercase font-bold text-white rounded-2xl border-none mt-8 inline-block float-right"
          size="large"
          style={{
            background:
              "linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(239, 68, 68, 0.5))",
          }}
        >
          send now
        </Button>
      </div>
    </div>
  );
};

export default Contact;
