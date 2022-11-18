import React from "react";
import { LargeButton, MedButton } from "../components/buttons/buttons";

import InfoBox from "../components/InfoBox";

const ClientHome = () => {
  return (
    <div>
      <div className="row d-flex  text-align-center justify-content-between m-2">
        <InfoBox number={20} title="Total Request" />
        <InfoBox number={20} title="Pending Request" />
        <InfoBox number={20} title="Successful Request" />
      </div>
    </div>
  );
};

export default ClientHome;
