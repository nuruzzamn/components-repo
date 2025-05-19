import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { toWords } from "number-to-words";

const styles = StyleSheet.create({
  page: { padding: 24, fontSize: 10, paddingTop: 40 },
  logo: {
    fontSize: 24,
    fontWeight: 800,
    color: "#0099CC",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 2,
    textAlign: "center",
  },

  subtitle: { fontSize: 10, marginBottom: 8, textAlign: "center" },

  text: { fontSize: 10, textTransform: "capitalize" },

  tableRow: {
    flexDirection: "row",
  },

  tableHeader: {
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#000",
    fontWeight: 900,
  },

  tableCell: {
    borderLeftWidth: 1,
    borderBottom: 1,
    borderColor: "#000",
    padding: 4,
    textAlign: "center",
    fontSize: 9,
    flex: 1,
  },
  tableLastCell: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottom: 1,
    borderColor: "#000",
    padding: 4,
    textAlign: "center",
    fontSize: 9,
    flex: 1,
  },

  headerCell: {
    backgroundColor: "#e4e4e4",
    fontWeight: "bold",
  },
});

interface PayslipData {
  // Define the structure of the data prop here
  employeeName: string;
  designation: string;
  employeeId: string;
  dateOfJoining: string;
  payPeriod: string;
  payDate: string;
  netPay: number;
  paidDays: number;
  lopDays: number;
  earnings: { name: string; amount: number }[];
  deductions: { pf: number; tax: number; others: number };
  salaryBreakdown: {
    basic: number;
    houseRentAllowance: number;
    transportAllowance: number;
    medicalAllowance: number;
    mobileAllowance: number;
  };
}

const PayslipPDF = ({ data }: { data: PayslipData }) => {
  const words = toWords(data.netPay);

  console.log("payslipdata", data);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: 2,
            borderBottomColor: "#b3b3b3",
            paddingBottom: 10,
          }}
        >
          <Text style={styles.logo}>DREAM GROUP</Text>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: "#808080", letterSpacing: 2 }}>
              Payslip For The Month
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 800 }}>
              {data.payPeriod}
            </Text>
          </View>
        </View>

        {/* employee informaitin part  */}
        <View
          style={{
            marginBottom: 30,
            marginTop: 10,
            flexDirection: "row",
            borderBottom: 2,
            borderBottomColor: "#b3b3b3",
            paddingBottom: 20,
            padding: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#6C6C6C", fontWeight: 600 }}>
              EMPLOYEE SUMMARY
            </Text>

            <View
              style={{ flexDirection: "row", marginTop: 10, fontWeight: 600 }}
            >
              <View style={{ flex: 1, color: "#808080", gap: 3 }}>
                <Text>Employee Name</Text>
                <Text>Designation</Text>
                <Text>Employee ID</Text>
                <Text>Date of Joining</Text>
                <Text>Pay Period</Text>
                <Text>Pay Date</Text>
              </View>
              <View style={{ flex: 2, gap: 3, color: "#393939" }}>
                <Text>: {data.employeeName}</Text>
                <Text>: {data.designation}</Text>
                <Text>: {data.employeeId}</Text>
                <Text>: {data.dateOfJoining}</Text>
                <Text>: {data.payPeriod}</Text>
                <Text>: {data.payDate}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              borderWidth: 1,
              borderRadius: 6,
              borderBottomWidth: 3,
              borderColor: "#b3b3b3",
            }}
          >
            <View
              style={{
                backgroundColor: "#d8f7d2",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                padding: 15,
              }}
            >
              <View
                style={{
                  borderLeft: 3,
                  borderColor: "#62D16B",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  TK {data.netPay}
                </Text>
                <Text style={{ color: "#808080", fontSize: 8 }}>
                  Employee Net Pay
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 15,
              }}
            >
              <View
                style={{ flex: 1, color: "#808080", fontWeight: 600, gap: 5 }}
              >
                <Text>Paid Days</Text>
                <Text>LOP Days</Text>
              </View>
              <View
                style={{ flex: 1, gap: 5, color: "#393939", fontWeight: 600 }}
              >
                <Text>: {data.paidDays}</Text>
                <Text>: {data.lopDays}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* salary informaitin part  */}
        {/* Table  */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#b3b3b3",
            borderRadius: 5,
          }}
        >
          {/* Header  */}
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "#b3b3b3",
              paddingBottom: 8,
              fontSize: 9,
              fontWeight: 600,
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <Text style={{ flex: 1 }}>EARNINGS</Text>
            <Text style={{ flex: 1 }}>AMOUNT</Text>

            <Text style={{ flex: 1, textAlign: "right" }}>DEDUCTIONS</Text>
            <Text style={{ flex: 1, textAlign: "right" }}>AMOUNT</Text>
          </View>

          {/* row */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              paddingHorizontal: 10,
            }}
          >
            {/* colmun 1 */}
            <View
              style={{
                fontSize: 9,
                fontWeight: 500,
                gap: 10,
                flex: 1,
              }}
            >
              <Text>Basic Salary</Text>
              <Text>House Rent Allowance</Text>
              <Text>Transport Allowance</Text>
              <Text>Medical Allowance</Text>
              <Text>Mobile Allowance</Text>
            </View>
            {/* colmun 2 */}
            <View
              style={{
                fontSize: 9,
                fontWeight: 700,
                gap: 10,
                flex: 1,
              }}
            >
              <Text>{data.salaryBreakdown.basic}</Text>
              <Text>{data.salaryBreakdown.houseRentAllowance}</Text>
              <Text>{data.salaryBreakdown.transportAllowance}</Text>
              <Text>{data.salaryBreakdown.medicalAllowance}</Text>
              <Text>{data.salaryBreakdown.mobileAllowance}</Text>
            </View>

            {/* colmun 3 */}
            <View
              style={{
                fontSize: 9,
                fontWeight: 500,
                gap: 10,
                flex: 1,
              }}
            >
              <Text style={{ flex: 1, textAlign: "right" }}>Other</Text>
            </View>

            {/* colmun 4 */}
            <View
              style={{
                fontSize: 9,
                fontWeight: 700,
                gap: 10,
                flex: 1,
              }}
            >
              <Text style={{ textAlign: "right" }}>{data.deductions.others}</Text>
            </View>
          </View>

          {/* Footer  */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              fontSize: 9,
              fontWeight: 600,
              backgroundColor: "#F8F8FB",
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ flex: 1 }}>Gross Earnings</Text>
            <Text style={{ flex: 1 }}>{data.netPay}</Text>

            <Text style={{ flex: 1, textAlign: "right" }}>
              Total Deductions
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>{data.deductions.others}</Text>
          </View>
        </View>

        {/* net payable container */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#b3b3b3",
            borderRadius: 5,
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <View style={{ flex: 1, padding: 7, gap: 2 }}>
            <Text style={{ fontWeight: 900 }}>TOTAL NET PAYABLE</Text>
            <Text style={{ color: "#808080", fontWeight: 500 }}>
              Gross Earnings - Total Deductions
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#d8f7d2",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Text>{data.netPay - data.deductions.others} TK</Text>
          </View>
        </View>

        {/* amout in word  */}
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            gap: 2,
            justifyContent: "flex-end",
            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
            paddingBottom: 10,
          }}
        >
          <Text style={{ fontWeight: 500, fontSize: 8 }}>
            Amount In Words:{" "}
          </Text>
          <Text style={{ fontWeight: 600, fontSize: 8 }}> {words} </Text>
          <Text style={{ fontWeight: 500, fontSize: 8 }}>TK Only</Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 7,
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
          }}
        >
          --This document has been automatically generated by Dream Group
          Payroll; Therefore, a singnature is not required, --
        </Text>
      </Page>
    </Document>
  );
};

export default PayslipPDF;
