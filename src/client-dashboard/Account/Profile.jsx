import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jsonData from "../../data/data.json";
import "./profile.css";

function Profile(props) {
  const [profile, setProfile] = React.useState(jsonData.Profile);

  const dispatch = useDispatch();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="user-profile-header-banner">
              <img
                src="../assets/img/profile-banner.png"
                alt="Banner"
                className="rounded-top"
              />
            </div>

            <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
              <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                <img
                  src={
                    profile?.profileImage
                      ? profile?.profileImage
                      : profile?.gender === "male"
                      ? "../assets/img/avatars/male-avatar.jpg"
                      : "../assets/img/avatars/female-avatar.jpg"
                  }
                  alt="user"
                  style={{ maxHeight: "120px", maxWidth: "120px" }}
                  className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"
                />
                <span className="select-display m-0 border-0">
                  <button className="btn btn-outline-primary btn-xs">
                    Change image
                  </button>
                </span>
              </div>

              <div className="flex-grow-1 mt-3 mt-sm-5">
                <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                  <div className="user-profile-info">
                    <h4>{profile.name}</h4>
                  </div>
                  {/* <button className="btn btn-primary text-nowrap">
                    <i className="bx bx-user-check" /> Edit Profile
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Header */}
      {/* Navbar pills */}
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-pills flex-column flex-sm-row mb-4">
            <li className="nav-item">
              <a className="nav-link" href="#iuei">
                <i className="bx bx-user" /> Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*/ Navbar pills */}
      {/* User Profile Content */}
      <div className="row">
        <div className="col-xl-6 col-lg-5 col-md-5">
          {/* About User */}
          <div className="card mb-4">
            <div className="card-body">
              <small className="text-muted text-uppercase">About</small>
              <ul className="list-unstyled mb-4 mt-3">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">Full Name:</span>{" "}
                  <span>{profile?.name}</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">Date of Birth:</span>{" "}
                  <span>{profile.birthDate}</span>
                </li>
              </ul>
              <small className="text-muted text-uppercase">Contacts</small>
              <ul className="list-unstyled mb-4 mt-3">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-phone" />
                  <span className="fw-semibold mx-2">Mobile Number:</span>{" "}
                  <span>{profile.phone}</span>
                </li>

                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-envelope" />
                  <span className="fw-semibold mx-2">Email:</span>{" "}
                  <span>{profile.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
