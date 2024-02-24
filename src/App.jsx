import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <section className="flex flex-col font-light text-neutral-600 w-full">
        <h1 className="flex text-2xl font-medium my-6 text-neutral-700">
          hi, I'm james!
          <p className="text-2xl animate-wiggle-more animate-infinite">👋</p>
        </h1>
        <p className="my-6">
          I'm a junior software developer. I used to be leakage technician
          before swapping my toolkit for keyboard. I'm also psychology students.
          It quite funny how life leads you down unexpected paths, but i'm
          loving every minute of new adventure.
        </p>
        <div className="flex justify-center gap-3 my-6">
          <div className="w-1/3">
            <img src="./profile.jpg" className="rounded-lg" alt="profile" />
          </div>
        </div>
        <div>
          <p className="my-6">
            at generation thailand, i learned about being software developer,
            software development life cycle. i was trained technical skills
            included HTML, CSS, Javascript, ReactJS, node.js, express.js,
            mongoDB and SQL, as well as soft skills such communication, teamwork
            and developer mindsets.
          </p>
          <hr className="border-[#D3D3D3] my-6" />
          <h2 className="text-2xl font-medium mb-1 text-neutral-700">skill</h2>
          <div className="flex gap-3 justify-between my-6 flex-wrap">
            <img src="html.png" title="HTML" />
            <img src="css.png" title="CSS" />
            <img src="javascript.png" title="JavaScript" />
            <img
              src="react.png"
              title="React.js"
              className="animate-spin animate-infinite animate-duration-[7500ms]"
            />
            <img src="nodejs.png" title="node.js" />
            <img src="expressjs.png" title="express.js" />
            <img src="mongodb.png" title="mongoDB" />
          </div>
          <hr className="border-[#D3D3D3] my-6" />
        </div>
      </section>
    </Layout>
  );
};
export default App;
