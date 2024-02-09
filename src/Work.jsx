import Layout from "./Layout";

const Work = () => {
  return (
    <Layout>
      <section className="flex flex-col font-light ">
        <h1 className="text-2xl font-medium my-5 text-neutral-700">my work</h1>
        <div className="porse text-neutral-600">
          <p>
            On a mission to changing career, developing my skills along the way.
            Here's my work so far.
          </p>
          <hr className="border-[#D3D3D3] my-6" />
          <h2 className="text-2xl font-medium mb-1 text-neutral-700">
            generation thailand
          </h2>
          <p className="mb-5 text-sm">
            Junior Software Developer, November 2023 - Febuary 2024
          </p>
          <p className="my-5">
            i joined generation thailand junior software developer bootscamp. they taught me about role of junior
            software developer, software development, management cycle and basic stuff.
          </p>
          <ul className="list-disc px-6 my-5">
            <li>learned HTML, CSS, JavaSctipt, ReactJS, NodeJS,
              expressJS, NoSQL(MongoDB) and SQL.</li>
            <li>
              developed Project called "HiFine". it is social media like web application for exercises community.It allows users to track and share exercise data and photos with their friends.
            </li>
            <li>used Figma to design frontend, backend and database, including diagram, such as vertical slice, ER diagrams and schema for database.</li>
            <li>learned how to work with team, communicate effectively, and provide project update and challenges.</li>
            <li>trained in professionalism and nessessary soft skills for improve software development.</li>
          </ul>
          <p>since joining, i have improved soft skills such as teamwork and communication. while my technical skills were initially lacking, i have progress to the point where i can now develop refined and simple web applications using tools i've learned</p>
          <hr className="border-[#D3D3D3] my-6" />
          <h2 className="text-2xl font-medium mb-1 text-neutral-700">
            total water engineering, ltd
          </h2>
          <p className="mb-5 text-sm">
            Leakage Technician, Febuary 2020 - August 2021
          </p>
          <p className="my-5">
            total water engineering is a contracting company. Finding leakage
            for Chiang Rai Provincial Waterworks Authority. I worked as leakage
            technician. I mornitor water flow and pressure. During nighttime
            conducting step test to narrow down the search area, then traversed
            around chiang rai to find leaking pipes.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
