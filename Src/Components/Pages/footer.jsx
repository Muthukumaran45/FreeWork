import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5">
        <footer className="pt-5 px-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Freelancer</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="browsejob" className="nav-link p-0 text-light">
                    Browse JOb
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="postjob" className="nav-link p-0 text-light">
                    Post Job
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="message" className="nav-link p-0 text-light">
                    Message
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>About</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    About us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Security
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Team
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Awards
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Terms</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    copyright Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Code of Conduct
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-light">
                    Fees and Charges
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form action="mailto:muthukumaran19032003@gmail.com" method="post" enctype="text/plain">
                <h5>Contact us</h5>
                <p>We are here 24/7 for you send your Queries.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                  />
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
            <p>&copy; 2024 FreeWork, All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <span>
                <img src="../img/instagram.png" width="40px" alt="" />
              </span>
              <span>
                <img className="mx-3" src="../img/facebook.png" width="40px" alt="" />
              </span>
              <span>
                <img className="mx-1" src="../img/twitter.png" width="40px" alt="" />
              </span>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
