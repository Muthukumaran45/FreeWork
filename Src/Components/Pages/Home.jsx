import { Link } from "react-router-dom";
import Footer from "./footer";
import Props from "../props";
import SwiperContent from "../swiper";
// import { HashLink as Lin } from "react-router-hash-link";




// icons link
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart, SiPaytm, SiZoho, SiTcs, SiApple } from "react-icons/si";

// icons
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FaMoneyCheck, FaHandsHelping } from "react-icons/fa";


export default function Home() {


  const data = [
    {
      font: <BsPersonWorkspace size="2rem" color="orange" />,
      title: "Post a job",
      para: "It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality. Even managing your needed",
    },

    {
      font: <FaUserTie size="2rem" color="orange" />,
      title: "Choose freelancers",
      para: "No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.",
    },
    {
      font: <FaMoneyCheck size="2rem" color="orange" />,
      title: "Pay safely",
      para: "Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.",
    },
    {
      font: <FaHandsHelping size="2rem" color="orange" />,
      title: "We're here to help",
      para: " Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.",
    }
  ];

  return (
    <>
      {/* --------------Carousel start----------------------------- */}

      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/swiper_img3.jpg" width="100%" height="100%" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="text-light">START YOUR WORK</h1>
                <p className="opacity-75"> Hire the best Freelancer for any job, pay only when you're 100% happy</p>
                <Link className="btn btn-lg btn-success" to='/signup'>Sign up today</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../img/swiper_img2.jpg" width="100%" height="100%" alt="" />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text-light">CHOOSE YOUR PROJECT</h1>
                <p>Get work done in over 2700 different categories</p>
                <Link className="btn btn-lg btn-success" to="/browsejob">Learn more...</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../img/swiper_img.jpg" width="100%" height="100%" alt="" />
            <div classNames="container">
              <div className="carousel-caption text-end">
                <h1 className="text-light">POST YOUR NEEDS</h1>
                <p>Need to hire a freelancer for a job?</p>
                <Link className="btn btn-lg btn-success" to="./postjob">Way to go</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* --------------Carousel end------------------------------------------------------- */}

      <div className="container pt-2 bg-light d-flex justify-content-center">
        <div className="row flex-nowrap"> {/* Added flex-nowrap class to prevent wrapping */}
          <div className="col"><FaAmazon size="2rem" id="company_icon1" /></div>
          <div className="col"><SiFlipkart size="2rem" id="company_icon2" /></div>
          <div className="col"><SiPaytm size="2rem" id="company_icon3" /></div>
          <div className="col"><SiZoho size="2rem" id="company_icon4" /></div>
          <div className="col"><SiTcs size="2rem" id="company_icon5" /></div>
          <div className="col"> <SiApple size="2rem" id="company_icon6" /></div>
        </div>
      </div>


      {/* -----------------------home content 1--------------------------- */}

      <div className="bg-ligh" id="home_content1">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 py-3" data-aos="fade-right" data-aos-duration="2000">
              <h1 className="">Power your organisation's competitive advantage</h1>
              <p>With Freelancer's talent pool of over 60 million professionals at your fingertips.</p>
            </div>

            <div className="col-md-6 col-sm-12 ">
              <img src="../img/home_content_img.jpg" width="500px" className="img-fluid rounded" alt="" data-aos="zoom-out-left" data-aos-duration="2000" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------home content 2-------------------------------- */}

      <div id="home_content2">
        <div className="container mt-5 gidence" id="payment_content">
          <div className="mb-5 pb-2" data-aos="zoom-in-down" data-aos-duration="1500" >
            <h2 className="text-center text-light">Need something done?</h2>
            <p className="text-light text-center">Most viewed and all-time top-selling services</p>
          </div>

          <div className="row mt-5">
            {data.map((values) => {
              return (
                <>
                  <Props
                    font={values.font}
                    title={values.title}
                    para={values.para}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----------------------------------------home content 3-------------------------------- */}

      <div className="container" id="home_content3">

        <div className="container " id="business_content">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <h1 className="text-center">GET YOUR BUSINESS</h1>
            <h3 className="text-center">ready for AI</h3>
          </div>

          <div className="row featurette " id="business_content1">
            <div className="col-md-9 text-light rounded px-4" id="business1">
              <h2 className="featurette-heading fw-normal lh-1 mt-3" data-aos="zoom-in-up" data-aos-duration="2000" > Top AI specialists </h2>
              <p className="text-light mt-4" data-aos="zoom-in-up" data-aos-duration="2000"> Unlock access to thousands of AI specialists across every technology. Ensure your business thrives in the new AI-powered world. Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.Building a world-class gen-AI product? Tap into our global workforce for expert advice, help training models and much more.Building a world-class gen-AI product? Tap into our global workforce for expert advice, help training models and much more. </p>
            </div>

            <div className="col-md-3 ">
              <img className="mx-auto rounded" src="../img/g_img1.jpeg" width="350" height="350" alt="" />
            </div>
          </div>

          <div className="row featurette " id="business_content2">
            <div className="col-lg-8 order-md-2 text-light rounded px-4" id="business1">
              <h2 className="featurette-heading fw-normal lh-1 mt-3" data-aos="zoom-in-up" data-aos-duration="2000" > Get better results </h2>
              <p className="text-light mt-4" data-aos="zoom-in-up" data-aos-duration="2000" > Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.Unlock access to thousands of AI specialists across every technology. Ensure your business thrives in the new AI-powered world. Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.Building a world-class gen-AI product? Tap into our global workforce for expert advice, help training models and much more. </p>
            </div>

            <div className="col-lg-4 order-md-1">
              <img className="mx-auto rounded" src="../img/g_img2.jpeg" width="350" height="350" alt="" />
            </div>
          </div>

          <div className="row featurette " id="business_content2">
            <div className="col-lg-9 text-light rounded px-4" id="business1">
              <h2 className="featurette-heading fw-normal lh-1 mt-3 " data-aos="zoom-in-up" data-aos-duration="2000"> Build & train your own </h2>
              <p className="text-light mt-4" data-aos="zoom-in-up" data-aos-duration="2000"> Building a world-class gen-AI product? Tap into our global workforce for expert advice, help training models and much more.Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.Unlock access to thousands of AI specialists across every technology. Ensure your business thrives in the new AI-powered world. Our freelancers are supercharging their workflows with AI.</p>
            </div>

            <div className="col-lg-3">
              <img className="mx-auto rounded" src="../img/g_img3.jpeg" width="350" height="350" alt="" />
            </div>
          </div>

          <div className="row featurette " id="business_content2">
            <div className="col-lg-8 order-md-2 text-light rounded px-4" id="business1">
              <h2 className="featurette-heading fw-normal lh-1 mt-3" data-aos="zoom-in-up" data-aos-duration="2000"> AI makes it easy </h2>
              <p className="text-light mt-4" data-aos="zoom-in-up" data-aos-duration="2000" > Attracting top talent has never been so easy. Just tell us what you need done and our advanced AI will help guide you through the process. Building a world-class gen-AI product? Tap into our global workforce for expert advice, help training models and much more.Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.Unlock access to thousands of AI specialists across every technology.</p>
            </div>

            <div className="col-lg-4 order-md-1">
              <img className="mx-auto rounded" src="../img/g_img4.jpeg" width="350" height="350" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------home content 4-------------------------------- */}

      <div id="home_content4">
        <div className="container">
          <h1 className="text-center pb-5 mb-3">MOST TALENTED FREELANACER</h1>
          <div className="row ">
            <div className="col-md-4 text-center py-5">
              <img src="../img/cus1.jpeg" width="140px" height="140px" className=" rounded-circle" alt="" />
              <h2 className="fw-normal pt-4 pb-1" data-aos="zoom-in-up" data-aos-duration="1500"> Tesa </h2>
              <p data-aos="zoom-in-up" data-aos-duration="1500"> Some representative placeholder content for the three columns of text below the carousel. This is the first column. </p>
              <p data-aos="zoom-in-up" data-aos-duration="1500">
                <Link className="btn btn-success ">View details &raquo;</Link>
              </p>
            </div>

            <div className="col-md-4 text-center py-5">
              <img src="../img/cus2.jpeg" width="140px" height="140px" className=" rounded-circle" alt="" />
              <h2 className="fw-normal pt-4 pb-1" data-aos="zoom-in-up" data-aos-duration="1500"> Michin </h2>
              <p data-aos="zoom-in-up" data-aos-duration="1500"> Another exciting bit of representative placeholder content. This time, we've moved on to the second column. </p>
              <p data-aos="zoom-in-up" data-aos-duration="1500">
                <Link className="btn btn-success">View details &raquo;</Link>
              </p>
            </div>

            <div className="col-md-4 text-center py-5">
              <img src="../img/cus3.jpeg" width="140px" height="140px" className=" rounded-circle" alt="" />
              <h2 className="fw-normal pt-4 pb-1" data-aos="zoom-in-up" data-aos-duration="1500"> Kevin </h2>
              <p data-aos="zoom-in-up" data-aos-duration="1500"> And lastly this, the third column of representative content placeholder content. This is the first Container column.</p>
              <p data-aos="zoom-in-up" data-aos-duration="1500">
                <Link className="btn btn-success" href="#">
                  View details &raquo;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <SwiperContent />
      <Footer />
    </>
  );
}
