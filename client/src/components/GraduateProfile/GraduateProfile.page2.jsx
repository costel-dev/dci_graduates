import React from "react";
// ## DESIGN PART
import './profile.css';
import './fadeIn.css';

class GraduateProfilePage extends React.Component {
  render() {
    return (
      <div className="container border shadow rounded p-3 bg-light">
        <div className="profile-header ml-2 rounded mx-auto">
          <div className="profile-img">
            <img src="./profile.jpg" width={200} alt="Profile Image" />
          </div>
          <div className="profile-nav-info ">
            <h3 className="user-name">Kristof Meyer</h3>
            <div className="address">
              <p id="state" className="state">
                Duisburg,
              </p>
              <span id="country" className="country">
                GERMANY.
              </span>
            </div>
            <h5 className>Frontend Developer/ Web Designer</h5>
          </div>
          <div className="profile-option">
            <div className="notification">
              <i className="fa fa-heart" />
            </div>
          </div>
        </div>
        <div className="main-bd">
          <div className="left-side" id="fadeIn">
            <div className="profile-side rounded">
              {}
              <div className="user-bio">
                {}
                <div className="row justify-content-center d-flex mt-3">
                  {/* Links just a variable */}
                  <a to="#" className="fa fa-facebook social-icons" />
                  <a to="#" className="fa fa-twitter social-icons" />
                  <a to="#" className="fa fa-google social-icons" />
                  <a to="#" className="fa fa-linkedin social-icons" />
                  <a to="#" className="fa fa-github social-icons" />
                </div>
                <h5>[only short desription of student]</h5>
                {}
                <div className="containerp-3 p-3">
                  <span className="badge badge-info mt-1">HTML</span>
                  <span className="badge badge-info mt-1">CSS</span>
                  <span className="badge badge-info mt-1">REACT</span>
                  <span className="badge badge-info mt-1">NODE</span>
                  <span className="badge badge-info mt-1">BOOTSTRAP</span>
                </div>
              </div>
              <div className="profile-btn dropdown">
                <button className="chatbtn text-small" id="chatBtn">
                  <i className="fa fa-comment" />
                  Contact
                </button>
                <button className="createbtn" id="view-CV">
                  <i className="fa fa-plus" /> View CV
                </button>
              </div>
            </div>
          </div>
          <div className="right-side mr-4 justify-content-center">
            <div className="nav">
              <ul className="rounded ml-3">
                <li className="user-review">Bio</li>
                <li className="user-setting"> Projects</li>
              </ul>
            </div>
            <div
              className="profile-body border shadow rounded bg-light ml-3"
              id="fadeIn2"
            >
              <div className="profile-posts tab">
                {}
                <a
                  className="bg-dark"
                  data-container="h1"
                  data-toggle="tooltip"
                  data-html="true"
                  data-placement="right"
                  title="COMPONENT GOES HERE LOADED BY Clicking"
                >
                  {}
                  <h1 id="bio">Bio</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa quia sunt itaque ut libero cupiditate ullam qui velit
                    laborum placeat doloribus, non tempore nisi ratione error
                    rem minima ducimus. Accusamus adipisci quasi at itaque
                    repellat sed magni eius magnam repellendus. Quidem inventore
                    repudiandae sunt odit. Aliquid facilis fugiat earum ex
                    officia eveniet, nisi, similique ad ullam repudiandae
                    molestias aspernatur qui autem, nam? Cupiditate ut quasi
                    iste, eos perspiciatis maiores molestiae.
                  </p>
                </a>
              </div>
              <div className="profile-reviews tab">
                <h1 id="contact">Projects</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam pariatur officia, aperiam quidem quasi, tenetur
                  molestiae. Architecto mollitia laborum possimus iste esse.
                  Perferendis tempora consectetur, quae qui nihil voluptas.
                  Maiores debitis repellendus excepturi quisquam temporibus quam
                  nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime
                  provident, distinctio animi commodi nemo, eveniet fugit porro
                  quos nesciunt quidem a, corporis nisi dolorum minus sit eaque
                  error sequi ullam. Quidem ut fugiat, praesentium velit
                  aliquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GraduateProfilePage;
