"use client";
import React from "react";
import PaySlipDemoSimple from "./_components/PaySlipDemoSimple";
import PaySlipInDetails from "./_components/PaySlipInDetails";
import { ElementPaySlip } from "./_components/elements_pay_slip/ElementPaySlip";

export default function Home() {

  return (
    <>
        {/* <PaySlipDemoSimple />  */}
        {/* <PaySlipInDetails /> */}
        <ElementPaySlip/>
    </>
  );
};
