import React from "react";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function StaffTable({ staffs }) {
  const handleActions = (e, id, actionType) => {
    e.preventDefault();

    // if (actionType === "delete") dispatch(deleteRegistrant(id));
    // if (actionType === "profile") navigate(`/dashboard/profile/${id}`);
  };
  return (
    <div className="card">
      <h2 className="card-header">Staff Table</h2>

      <div
        className="table-responsive text-nowrap"
        style={{ minHeight: "50vh" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Staff Id</th>
              <th>Email</th>
              <th>Position</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="table-border-bottom-0">
            {staffs?.map((user, i) => (
              <tr key={user.staffId + i}>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title={user.name}
                    >
                      <img
                        src={
                          user.profileImage
                            ? user.profileImage
                            : user.gender === "male"
                            ? "../assets/img/avatars/male-avatar.jpg"
                            : "../assets/img/avatars/female-avatar.jpg"
                        }
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li className="ml-2">
                      {" "}
                      <strong>{user.name}</strong>
                    </li>
                  </ul>
                </td>
                <td>{user.staffId}</td>
                <td>{user.personalEmail}</td>
                <td>
                  <small className="text-muted">{user.currentPosition}</small>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">Active</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        href="true"
                        onClick={(e) => handleActions(e, user._id, "profile")}
                      >
                        <i className="bx bx-user me-1"></i> view profile
                      </a>

                      <a
                        className="dropdown-item"
                        href="true"
                        onClick={(e) => handleActions(e, user._id, "delete")}
                      >
                        <i className="bx bx-trash me-1" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

            {staffs.length < 1 && (
              <div className="m-4">
                {" "}
                <h2>No Staff Yet</h2>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffTable;
