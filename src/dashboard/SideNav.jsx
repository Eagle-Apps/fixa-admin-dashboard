import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FixaLogo } from "../components/custom-icon";

function SideNav(props) {
  const [isActive, setActive] = React.useState("dashboard");

  console.log(window.Helpers);

  const handleSetActive = (e) => {
    let menu = window.Helpers.getMenu();
    console.log(menu);
  };
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <RouterNavLink to="/dashboard" className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            <FixaLogo />
          </span>
        </RouterNavLink>
        <a
          href="false"
          className=" menu-link text-large ms-auto d-block d-xl-none"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <ul className="menu-inner py-1">
        {/* Dashboard */}

        <li
          className={
            isActive === "dashboard" ? `menu-item active` : `menu-item`
          }
        >
          <RouterNavLink
            to="/dashboard"
            className="menu-link"
            onClick={() => {
              handleSetActive();
            }}
          >
            <i
              className="menu-icon tf-icons bx bx-home-circle"
              onClick={(e) => {
                setActive("dashboard");
              }}
            />
            <div
              onClick={(e) => {
                setActive("dashboard");
              }}
            >
              Dashboard
            </div>
          </RouterNavLink>
        </li>
        <li
          className={isActive === "profile" ? `menu-item active` : `menu-item`}
          name="profile"
          onClick={(e) => setActive("profile")}
        >
          <RouterNavLink to={`my-account`} className="menu-link">
            <i
              className="menu-icon tf-icons bx bx-user"
              onClick={(e) => setActive("profile")}
            />
            <div onClick={(e) => setActive("profile")}>Profile</div>
          </RouterNavLink>
        </li>

        {/*--- client---- */}

        <li
          className={isActive === "client" ? `menu-item active` : `menu-item`}
        >
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-group" />
            <div data-i18n="Layouts">Client Management</div>
          </a>
          <ul className="menu-sub">
            <li
              className={
                isActive === "client" ? `menu-item active` : `menu-item`
              }
            >
              <RouterNavLink
                to=""
                className="menu-link"
                onClick={(e) => setActive("client")}
              >
                <div onClick={(e) => setActive("client")}>Clients</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>
        {/* ----Technician----- */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-hard-hat" />
            <div data-i18n="Layouts">Technician Management</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Profile</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>
        {/* -----fault------ */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-task-x" />
            <div data-i18n="Layouts">Fault Management</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item active">
              <RouterNavLink to="services" className="menu-link">
                <div data-i18n="Without menu">Services</div>
              </RouterNavLink>
            </li>
            <li className="menu-item">
              <RouterNavLink to="subscription" className="menu-link">
                <div data-i18n="Without menu">Subscription</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>

        {/* ----Staff----- */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bxs-user-plus" />
            <div data-i18n="Layouts">Staff Management</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="staff-list" className="menu-link">
                <div data-i18n="Without menu">Staff List</div>
              </RouterNavLink>
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Add Staff</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>

        {/* ----goals----- */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bxs-user-plus" />
            <div data-i18n="Layouts">Goals Management</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Staff List</div>
              </RouterNavLink>
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Add Staff</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>

        {/* ----warehouse----- */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bxs-user-plus" />
            <div data-i18n="Layouts">Warehouse Management</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Staff List</div>
              </RouterNavLink>
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Add Staff</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideNav;
