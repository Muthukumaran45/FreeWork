import { Link } from "react-router-dom";
import { HashLink as Lin } from "react-router-hash-link";


// icons link
import { BsLaptop, BsVectorPen, BsDatabaseAdd, BsGraphUpArrow } from "react-icons/bs";
import { BiMobileAlt, BiMessageDetail } from "react-icons/bi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GiArtificialIntelligence, GiBookshelf } from "react-icons/gi";
import { MdOutlineScience, MdOutlineProductionQuantityLimits, MdOutlineLocalShipping, MdOutlineCleaningServices } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";







export default function BrowseJob() {


  return (
    <>
      <h1 id="browseHeading" className="text-center my-5">Browse your favourite job here..</h1>

      <section className="container" id="browseContent">

        <div className="row mb-3">

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <div>
              <Lin className="btn border-0" to="#bjc1"><h5><BsLaptop size="3rem" color="orange" /> Websites, IT and Software</h5></Lin>
              <p className="px-3 text-secondary">PHP, HTML, JavaScript, Software Architectur, WordPress...</p>
            </div>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc2"><h5><BiMobileAlt size="3rem" color="orange" /> Mobile and Computing</h5></Lin>
            <p className="px-3 text-secondary">
              Mobile App Development, Android, iPhone, iPad, Amazon Kindle..
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc3"><h5><BsVectorPen size="3rem" color="orange" /> Writing and Content</h5></Lin>
            <p className="px-3 text-secondary">
              Content Writing, Article Writing, CopyWriting, Research Writing,
              Ghostwriting...
            </p>
          </div>
        </div>



        <div className="row mb-3">

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc4"> <h5><HiOutlinePaintBrush size="3rem" color="orange" /> Design and Media</h5></Lin>
            <p className="px-3 text-secondary">
              Graphic Design, Website Design, Photoshop, Logo Design,
              Illustrator...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc5"><h5><BsDatabaseAdd size="3rem" color="orange" /> Data Entry and Admin</h5></Lin>
            <p className="px-3 text-secondary">
              Excel, Data Entry, Data Processing, Web Search, Customer
              Support...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc6"> <h5><GiArtificialIntelligence size="3rem" color="orange" /> Artificial Intelligence</h5></Lin>
            <p className="px-3 text-secondary">
              ChatGPT AI Integration, LLM Prompt Engineering, Bot Development,
              ChatGPT-3,5...
            </p>
          </div>

        </div>

        <div className="row mb-3">

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc7"><h5><MdOutlineScience size="3rem" color="orange" /> Engineeering and Science</h5></Lin>
            <p className="px-3 text-secondary">
              AutoCAD, Electrical Engineering, Engineering, CAD/CAM,
              Electronics...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc8"><h5><MdOutlineProductionQuantityLimits size="3rem" color="orange" /> Product and Manufacturing</h5></Lin>
            <p className="px-3 text-secondary">
              Product Design, 3D Printing, Product Sourcing, Supplier Sourcing,
              Process Automation...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc9"><h5><BsGraphUpArrow size="3rem" color="orange" /> Sales and Marketing</h5></Lin>
            <p className="px-3 text-secondary">
              Internet Marketing, Marketingm Social Media Marketing, Facebook
              Marketing, sales...
            </p>
          </div>

        </div>


        <div className="row mb-3">

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc10"> <h5><MdOutlineLocalShipping size="3rem" color="orange" />Shipping and transportation</h5></Lin>
            <p className="px-3 text-secondary">
              Dropshipping, Car Driving, Cargo Freignt, Containerizarion,
              Import/Ecport...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc11"><h5><GiBookshelf size="3rem" color="orange" /> Education</h5></Lin>
            <p className="px-3 text-secondary">
              English Teaching, Spanish Tutoring, English Tutoring, Chemistry
              Tutoring, Coding Lesson...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc12"><h5><IoBusinessOutline size="3rem" color="orange" /> Business, Accounting, HR</h5></Lin>
            <p className="px-3 text-secondary">
              Business Analysis, Accounting, Legal, Finance, Project
              Management...
            </p>
          </div>

        </div>



        <div className="row mb-3">

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc13"><h5><BiMessageDetail size="3rem" color="orange" /> Translation Languages</h5></Lin>
            <p className="px-3 text-secondary">
              English (US) Translator, English (UK) Translator,English
              Grammar...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc14"><h5><MdOutlineCleaningServices size="3rem" color="orange" /> Trades and Services</h5></Lin>
            <p className="px-3 text-secondary">
              Drafting, Teaching/Lecturing, Cooking and Recipes, Financial
              Plannig, General Labor...
            </p>
          </div>

          <div className="col-md-4 themed-grid-col mb-4" id="job_btn">
            <Lin className="btn border-0" to="#bjc15"><h5><GoPeople size="3rem" color="orange" /> Jobs for Anyone</h5></Lin>
            <p className="px-3 text-secondary">
              Virtual Assistant, Local Job, Travel Ready, Freelance, Odd Jobs...
            </p>
          </div>

        </div>


      </section>








      <section className="bg-light">

        <div className="container mt-5" id="bjc1">

          <h2 className="text-center my-5 pt-5" data-aos="zoom-in" data-aos-duration="2000">Websites, IT and Software</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Php Developer</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Php </span><span> HTML </span> <span> CSS </span> <span> JavaScript </span><span>  Web</span></p>
                  <div className="d-flex justify-content-between"  data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 6,000 Avg bid</p>
                    <Link className="btn btn-success">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">React Developer</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>React js</span> <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Bootstrap</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 10,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">.Net Developer</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>.Net</span> <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Bootstrap</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 15,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">MERN</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>MongoDB</span> <span>Node.js</span> <span>Express.js</span> <span>React.js</span> <span>Web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc2">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Mobile Phones and Computing</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Java Software Developer</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>Android</span> <span>Mobile App Development</span> <span>Software</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 16,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Mobile App Developer Needed</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Android</span> <span>iphone</span> <span>Php</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">E-commerce Moile app Development</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Android</span> <span>iphone</span> <span>Php</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 7,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Android Restaurant Billing App</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Android</span> <span>Java</span> <span>Php</span> <span>Mobile App</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc3">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Writing and Content</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">UK AI Content Cretor</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Article Rewriting</span> <span>content Writing</span> <span>Ghostwriting</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 7274 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Writers wanted</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Blog</span> <span>Article Rewriting</span> <span>Content Writing</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 541/hr Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Engaging Blog Writer Needed</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Article</span> <span>Blog</span> <span>copywriting</span> <span>Content Writing</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Tech Blog post Creator</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Blog</span> <span>Content Writing</span> <span>research Writing </span> <span>Technical Writing</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 1505 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5 py-5" id="bjc4">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Design, Media and Architecture</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Animators for Explainer Video's</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>2D Animation</span> <span>3D Animation</span> <span>Animation</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 14,130 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000" >Recruiting multiple purchasing agents</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Branding</span> <span>Graphic Design </span> <span>Logo Design</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 27,495 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Modern Interior Designer for Medium space</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>3D Modelling</span> <span>3D Rendering Home Design</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 7,353 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Eclectic Residential Interior Design</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>3D Modelling</span> <span>3D Rendering</span><span>Interior Design</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc5">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Data Entry and Admin</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Data Entry specialist for Copyrighting</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Data Entry</span> <span>Data Minig</span> <span>Excel</span> <span>web Search</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 20,456 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Daily Excel to Interactive PDF/Word</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Data Processing</span> <span>Excel</span> <span>Visual Basic</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 6536 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">copy Typing in Sheet</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>Copy Typing</span> <span>Data Entry</span> <span>Excel</span> <span>Word</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 1532 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Job of data typing(listing)</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>copy typing</span> <span>Pdf</span> <span>Virtual Assistant</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 6,942 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc6">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Artificial Intelligence</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Video Editor for African Tales</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>3D Animatiion</span> <span>After Effects</span> <span>video Editing</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 8,445 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Ai Social Media Manager Needed</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>AI Content Creation</span> <span>AI Design</span> <span>Photoshop</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 74,239 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">PHP Integration OpenAI for Blog Creation</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>ChatGPT-4</span> <span>MySQL</span> <span>OpenAI</span> <span>PHP</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 1505 / hr Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Photo Distortion Removal</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>AI Image Editing</span> <span>Python</span> <span>Video Processing</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 5769 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc7">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Engineeering and Science</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc8">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Product Sourcing and Manufacturing</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc9">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Sales and Marketing</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc10">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Freight, Shipping and transportation</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc11">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Education</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc12">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Business, Accounting, HR</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc13">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Translation Languages</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc14">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Trades and Services</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5" id="bjc15">
          <h2 className="text-center py-5" data-aos="zoom-in" data-aos-duration="2000">Jobs for Anyone</h2>

          <div className="row">

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" data-aos="zoom-in" data-aos-duration="2000">Special title treatment</h5>
                  <p className="card-text text-secondary pt-3" data-aos="zoom-in" data-aos-duration="2000">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde quaerat placeat culpa odio. Non, magnam. Quo accusantium veniam eos molestias, esse illo maxime cupiditate sapiente, eum dignissimos exercitationem atque.</p>
                  <p className="text-primary" data-aos="zoom-in" data-aos-duration="2000"><span>java</span> <span>python</span> <span>.net</span> <span>web</span></p>
                  <div className="d-flex justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <p>$ 36,000 Avg bid</p>
                    <Link className="btn btn-success align-items-">Bind Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
