import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <section className="flex flex-col font-light text-neutral-600">
        <h1 className="flex text-2xl font-medium my-6 text-neutral-700">
          hi, I'm james!<p className="text-2xl animate-wiggle-more animate-infinite">👋</p>
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
            Generation Thailand is where learned about being
            software developer.
          </p>
          <hr className="border-[#D3D3D3] my-6" />
          <h2 className="text-2xl font-medium mb-1 text-neutral-700">skill</h2>
          <div className="flex gap-3 sm:justify-between my-6">
            <img src='html.png' title='HTML'/>
            <img src='css.png'title='CSS'/>
            <img src='javascript.png'title='JavaScript'/>
            <img src='react.png'title='React.js' className="animate-spin animate-infinite animate-duration-[7500ms]"/>
            <img src='nodejs.png' title='node.js'/>
            <img src='expressjs.png' title= 'express.js'/>
            <img src='mongodb.png' title='mongoDB'/>
          </div>
          <hr className="border-[#D3D3D3] my-6" />
          {/* <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 my-6">
            <div className="grid-cols-1">
              <img src="./kun-a.jpg" className="rounded-lg" alt="kun a" />
            </div>
            <div className="grid-cols-1">
              <img
                src="./ta-kun-kan.jpg"
                className="rounded-lg"
                alt="ta kun kan"
              />
            </div>
            <div className="grid-cols-1">
              <img src="./kun-nun.jpg" className="rounded-lg" alt="kun nan" />
            </div>
            <div className="grid-cols-1">
              <img src="./kun-nut.jpg" className="rounded-lg" alt="kun nut" />
            </div>
            <div className="grid-cols-1">
              <img src="./kun-fai.jpg" className="rounded-lg" alt="kun fai" />
            </div>
            <div className="grid-cols-1">
              <img
                src="./cohort-leader-kun-karn.jpg"
                className="rounded-lg"
                alt="cohort leader kun karn"
              />
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};
export default App;
