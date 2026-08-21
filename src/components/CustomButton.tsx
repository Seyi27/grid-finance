"use client";

import React from "react";
import { TailSpin } from "react-loader-spinner";
import { CustomButtonProps } from "../types/types";

const CustomButton = ({
  width,
  height,
  textColor,
  bgColor,
  label,
  icon,
  fontSize,
  fontWeight,
  borderColor,
  borderWidth,
  borderRadius,
  loader,
  loaderColor,
  onClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: width || "92px",
        height: height || "37px",
        backgroundColor: disabled ? "#8E8E8E" : bgColor,
        borderRadius: borderRadius || "10px",
        fontSize: fontSize || "12px",
        fontWeight: fontWeight || 400,
        color: textColor,
        outline: "none",
        borderStyle: "solid",
        borderColor: borderColor || "",
        borderWidth: borderWidth || "0px",
        cursor: disabled ? "" : "pointer",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {loader ? (
        <TailSpin
          visible={true}
          height={loaderColor ? "25" : "30"}
          width={loaderColor ? "25" : "30"}
          color={loaderColor ? "#084C3F" : "#ffffff"}
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <span>{label}</span>
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
