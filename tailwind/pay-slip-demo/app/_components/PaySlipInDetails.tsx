


"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PayslipPDF from "./generate_pdf/PayslipPDF";


const data = {
  employeeName: "Md Nuruzzaman",
  designation: "Software Engineer",
  employeeId: "12345",
  dateOfJoining: "2025-02-01",
  department: "ICT Department",
  payPeriod: "April 2025",
  payDate: "2025-05-10",
  netPay: 23000,
  paidDays: 30,
  lopDays: 0,
  salaryBreakdown: {
    basic: 12500,
    houseRentAllowance: 5000,
    transportAllowance: 3900,
    medicalAllowance: 1000,
    mobileAllowance: 600,

  },
  deductions: {
    pf: 0,
    tax: 0,
    others: 0,
  },
};

const PaySlipInDetails = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [payslipData, setPayslipData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(payslipData);

  useEffect(() => {
    if (selectedDate) {
      const fetchPayslip = async () => {
        try {
          setIsLoading(true);
          //   const response = await axiosInstance.get(`/payslip`, {
          //     params: {
          //       month: moment(selectedDate).format("YYYY-MM")
          //     }
          //   });

          setPayslipData(data);
          setError("");
        } catch (err) {
          console.log(err);
          
          setError("No payslip available for selected month");
          setPayslipData(null);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPayslip();
    }
  }, [selectedDate]);

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Download Payslip</h1>

      <div className="mb-6 w-fit">
        <label className="block text-sm font-medium mb-2">Select Month</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          className=" p-2 border rounded-md"
          placeholderText="Select a month"
        />
      </div>

      {isLoading && <p className="text-blue-600">Loading payslip data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {payslipData && (
        <div className="mt-6">
          <PDFDownloadLink
            document={<PayslipPDF data={payslipData} />}
            fileName={`payslip-${moment(selectedDate).format("YYYY-MM")}.pdf`}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {({ loading }) =>
              loading ? "Generating PDF..." : "Download Payslip PDF"
            }
          </PDFDownloadLink>
          <PDFViewer width="100%" height={1000} className="mt-4 border rounded">
            <PayslipPDF data={payslipData} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default PaySlipInDetails;
