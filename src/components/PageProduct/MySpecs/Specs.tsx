import React from "react";

import "./Specs.scss";
import ComponentManagementResult from "../ComponentManagementResult/ComponentManagementResult";
import { ComponentManagementProps } from "../ComponentManagement/ComponentManagement";
function Specs({ data }: ComponentManagementProps) {
  return (
    <div>
      <ComponentManagementResult>
        <div className="SpecsTable">
          <div>
            <span>CPU</span>
            <span>{data.attributes.CPU}</span>
          </div>
          <div>
            <span>Featured</span>
            <span>{data.attributes.Featured}</span>
          </div>
          <div>
            <span>I/O Ports</span>
            <span>{data.attributes.I_O_Ports}</span>
          </div>
        </div>
      </ComponentManagementResult>
    </div>
  );
}

export default Specs;
