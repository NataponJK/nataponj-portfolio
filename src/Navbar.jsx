import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center gap-3 mb-10 font-light">
      <div>
        <a href="/" className="hover:underline px-1 py-2">
          home
        </a>
        <a href="/work" className="hover:underline px-1 py-2">
          work
        </a>
      </div>
      <div className="flex sm:flex-row flex-col">
        <ul className="flex gap-3 sm:justify-start justify-center m-2">
          <a
            href="https://www.linkedin.com/in/natapon-jaikam/"
            title="LinkedIn"
            target="_blank"
          >
            <li>
              <img className="h-[30px] rounded" src="linkedin.png" />
            </li>
          </a>
          <a href="https://github.com/NataponJK" title="github" target="_blank">
            <li>
              <img className="h-[30px] rounded" src="github.png" />
            </li>
          </a>
          <button
            title="Resume"
            className="flex items-center"
            onClick={() => setOpen(true)}
          >
            <li>
              <img
                className="h-[30px] rounded animate-bounce animate-duration-[2500ms]"
                src="resume.png"
              />
            </li>
          </button>
        </ul>
        <p className="flex items-center">NataponJ@gmail.com</p>
      </div>
      {open && (
        <div className="animate-fade animate-ease-out fixed top-0 left-0 w-full h-dvh z-10">
          <div className="flex justify-around mx-3 mt-3 mb-2">
            <div className="w-[30px] h-[30px]"></div>
            <div>
              <a href="https://drive.google.com/file/d/1eiewyEHoE8YRtQPLjhLssC6b0pEOAFpH/view?usp=sharing">
                <img
                  className="w-[30px] h-[30px]"
                  src="download.png"
                  title="Download"
                />
              </a>
            </div>
            <button onClick={() => setOpen(false)} className="px-6">
              <img
                className="w-[30px] h-[30px]"
                src="close.png"
                alt="close"
                title="Close"
              />
              <div></div>
            </button>
          </div>
          <div className="w-full h-full item-center overflow-scroll">
            <img
              className="w-auto mx-auto px-6"
              src="resume.jpg"
              alt="resume"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
