import { Link } from 'react-router-dom';



export default function NavbarBelow() {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-dark d-flex justify-content-center" data-bs-theme="dark">
          <div className="row flex-nowrap">
            <Link className="nav-link text-light col" to="/" id="belowNav">Home</Link>
            <Link className="nav-link text-light col" to="/BrowseJob" id="belowNav">BrowseJob</Link>
            <Link className="nav-link text-light col" to="/postJob" id="belowNav">PostJob</Link>
            <Link className="nav-link text-light col" to="/message" id="belowNav">Message</Link>
          </div>
        </nav>
      </header>


    </>
  );
}
