import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import portfolio from "../../assets/portfolio/Portfolio.png";
import Ostad from "../../assets/portfolio/Ostad.png";
import Lead from "../../assets/portfolio/LeadEdocare.png";
import Zayan from "../../assets/portfolio/Zayan-Shop.png";
import { themeContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {

  const navigate = useNavigate();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const PValue = [
    {
        image: portfolio,
        title:  "Frontend",
        description:  "Building engaging user interfaces with React, Next.js, and JavaScript.",
    },
    {
        image: Ostad,
        title:  "Backend",
        description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
    },
    {
        image: Lead,
        title:  "MERN Full Stack",
        description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
    },
    {
        image: Zayan,
        title:  "Backend",
        description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
    },
]

  return (
    <section id="portfolio" class="portfolio-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center mb-4">
            <span class="subtitle">My Complete Project</span>
            <h2>My Latest Project</h2>
            <p>There are many variations of Lorem ipsum available, <br class="d-none d-md-block" />
              but the majority have suffered alteration.</p>
          </div>
        </div>
        <div class="row">
        {PValue?.map((p, i)=>(
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card p-0"  onClick={() => navigate('/portfolio/details')}>
            <span style={{ backgroundImage: `url(${p.image})` }}></span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import { themeContext } from "../../Context";

// const Portfolio = () => {

//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   const PValue = [
//     {
//         image: Sidebar,
//         title:  "Frontend",
//         description:  "Building engaging user interfaces with React, Next.js, and JavaScript.",
//     },
//     {
//         image: Ecommerce,
//         title:  "Backend",
//         description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
//     },
//     {
//         image: HOC,
//         title:  "MERN Full Stack",
//         description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//     },
//     {
//         image: Ecommerce,
//         title:  "Backend",
//         description: "Developing server-side applications with Node.js, Express.js, and MongoDB.",
//     },
//     {
//         image: HOC,
//         title:  "MERN Full Stack",
//         description:  "Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
//     },
// ]

//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{color: darkMode?'white': ''}} className="subtitle">Recent Projects</span>
//       <h2>Portfolio</h2>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         {PValue?.map((p, i)=> (
//         <SwiperSlide>
//           <img src={Sidebar} alt=""  data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
//         </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;
