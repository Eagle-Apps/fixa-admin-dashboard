import React from "react";
import { LargeButton, MedButton } from "../../components/buttons/buttons";
import RequestStatCard from "./RequestStatCard";
import Revenue from "./Revenue";
import Transaction from "./Transaction";

import InfoBox from "../../components/InfoBox";

const ClientHome = () => {
  return (
    <div>
      <div className="row d-flex  text-align-center justify-content-between m-2">
        <InfoBox number={20} title="Total Request" />
        <InfoBox number={20} title="Pending Request" />
        <InfoBox number={20} title="Successful Request" />
      </div>
      <div className="row">
        <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
          <RequestStatCard />
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
          <Transaction />
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
