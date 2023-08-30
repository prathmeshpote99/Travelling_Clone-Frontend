import React from "react";
import "./Navbar.css";
import Team1 from "../Photos/team1.jpg";
import Team2 from "../Photos/team2.jpg";
import Team3 from "../Photos/team3.jpg";
import Team4 from "../Photos/team4.jpg";
import testi1 from "../Photos/testi1.jpg";
import testi2 from "../Photos/testi2.jpg";
import testi3 from "../Photos/testi3.jpg";

const Team = () => {
  return (
    <>
      <div className="container team_div">
        <h1 className="team_heading">Our Wonderful Team</h1>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="row">
          <div className="col-md-3 teams">
            <img className="team" src={Team1} alt="t1" />
            <h5>Chris Tina</h5>
            <p>Tour Guide</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
          </div>
          <div className="col-md-3 teams">
            <img className="team" src={Team2} alt="t2" />
            <h5>Diego Morata</h5>
            <p>Tour Consultant</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
          </div>
          <div className="col-md-3 teams">
            <img className="team" src={Team3} alt="t3" />
            <h5>Anton Brown</h5>
            <p>Travel Agent</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
          </div>
          <div className="col-md-3 teams">
            <img className="team" src={Team4} alt="t4" />
            <h5>Nwoye Akachi</h5>
            <p>Agency Director</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
          </div>
        </div>
      </div>
      <div className=" container ">
        <div className="row">
          <h1 className="team_heading">Clients Says</h1>
          <div className="col-md-4 Says">
            <p className="per">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium,t quasi beatae vitae dicta sunt
              explicabo.
            </p>
            <h6 className="heading3">Cha Jiun</h6>
            <p className="p3">Regular Client</p>
            <img src={testi1} alt="1" className="testi1" />
          </div>
          <div className="col-md-4 Says">
            <p className="per">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, t quasi beatae vitae dicta sunt
              explicabo.
            </p>
            <h6 className="heading3">Henry Itondo</h6>
            <p className="p3">Regular Client</p>
            <img src={testi2} alt="1" className="testi1" />
          </div>
          <div className="col-md-4 Says">
            <p className="per">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, t quasi beatae vitae dicta sunt
              explicabo.
            </p>
            <h6 className="heading3">Fua Lamba</h6>
            <p className="p3">Regular Client</p>
            <img src={testi3} alt="1" className="testi1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
