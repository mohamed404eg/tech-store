"use client";
import { ViewComponentManagementChange } from "@/Redux/Slice/PageProductComponentManagement/ComponentManagementSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type InputProps = {
  id: string;
  numComp: 0 | 1 | 2;
  DefaultChecked?: string;
};
function Input({ id, numComp, DefaultChecked }: InputProps) {
  const countPage = useSelector(
    (state: {
      ComponentManagement: {
        ViewComponentManagement: number;
      };
    }) => state.ComponentManagement.ViewComponentManagement
  );
  const dispatch = useDispatch();

  return (
    <input
      type="radio"
      name="SelectSection"
      id={id}
      value={id}
      onClick={() => {
        dispatch(ViewComponentManagementChange(numComp));
      }}
      onLoad={(eve)=> eve.currentTarget}
    />
  );
}

export default Input;
