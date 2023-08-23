"use client";
import { ViewComponentManagementChange } from "@/Redux/Slice/PageProductComponentManagement/ComponentManagementSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type InputProps = {
  id: string;
  numComp: 0 | 1 | 2;
  DefaultChecked?: string;
  name?: string;
};
function Input({ id, numComp, DefaultChecked, name }: InputProps) {
  const countPage = useSelector(
    (state: {
      ComponentManagement: {
        ViewComponentManagement: number;
      };
    }) => state.ComponentManagement.ViewComponentManagement
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let all = document.querySelectorAll("input[type='radio']");
    all?.forEach((ele) => {
      if (ele.classList.contains("Primar") && ele instanceof HTMLInputElement) {
        //ele.
        //console.log(ele);
      }
    });
  }, []);

  return (
    <input
      type="radio"
      name="SelectSection"
      
      id={id}
      className={name}
      value={id}
      onClick={() => {
        dispatch(ViewComponentManagementChange(numComp));
      }}
    />
  );
}

export default Input;
