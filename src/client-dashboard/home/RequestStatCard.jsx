import React from "react";

function RequestStatCard() {
  return (
    <div className="card h-100">
      <div className="card-header d-flex align-items-center justify-content-between pb-0">
        <div className="card-title mb-0">
          <h5 className="m-0 me-2">Request Statistics</h5>
        </div>
        <div className="dropdown">
          <button
            className="btn p-0"
            type="button"
            id="orederStatistics"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bx bx-dots-vertical-rounded" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="orederStatistics"
          >
            <a className="dropdown-item" href="javascript:void(0);">
              Select All
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              Refresh
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              Share
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex flex-column align-items-center gap-1">
            <h2 className="mb-2">8,258</h2>
            <span>Total Orders</span>
          </div>
          <div id="orderStatisticsChart" />
        </div>
        <ul className="p-0 m-0">
          <li className="d-flex mb-4 pb-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-primary">
                <i className="bx bx-mobile-alt" />
              </span>
            </div>
            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
              <div className="me-2">
                <h6 className="mb-0">Electrical</h6>
              </div>
              <div className="user-progress">
                <small className="fw-semibold">82.5k</small>
              </div>
            </div>
          </li>
          <li className="d-flex mb-4 pb-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-success">
                <i className="bx bx-hard-hat" />
              </span>
            </div>
            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
              <div className="me-2">
                <h6 className="mb-0">Construction</h6>
              </div>
              <div className="user-progress">
                <small className="fw-semibold">23.8k</small>
              </div>
            </div>
          </li>
          <li className="d-flex mb-4 pb-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-info">
                <i className="bx bx-home-alt" />
              </span>
            </div>
            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
              <div className="me-2">
                <h6 className="mb-0">Plumbing</h6>
              </div>
              <div className="user-progress">
                <small className="fw-semibold">849k</small>
              </div>
            </div>
          </li>
          <li className="d-flex">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-secondary">
                <i className="bx bxs-home-smile"></i>
              </span>
            </div>
            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
              <div className="me-2">
                <h6 className="mb-0">Painting</h6>
              </div>
              <div className="user-progress">
                <small className="fw-semibold">99</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RequestStatCard;
