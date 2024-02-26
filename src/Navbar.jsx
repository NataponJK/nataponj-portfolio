const Navbar = () => {
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
          <button title="Resume" className="flex items-center">
            <li>
              <a
                href="https://docs.google.com/document/d/14wUDa6ORkdmREwkAbnIXltXQ4YCZ5yb1_WEhXCwMwo8/edit?usp=sharing"
                target="_blank"
              >
                <img
                  className="h-[30px] rounded animate-bounce animate-duration-[2500ms]"
                  src="resume.png"
                />
              </a>
            </li>
          </button>
        </ul>
        <p className="flex items-center">NataponJ@gmail.com</p>
      </div>
    </div>
  );
};
export default Navbar;
