"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

interface PayslipData {
  employeeName: string;
  employeeEmail: string;
  employeeId: string;
  employeeContact: string;
  designation: string;
  department: string;
  bankName: string;
  accountNumber: string;
  totalDays: number;
  absentDays: number;
  paidDays: number;
}

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<PayslipData>({
    employeeName: '',
    employeeEmail: '',
    employeeId: '',
    employeeContact: '',
    designation: '',
    department: '',
    bankName: '',
    accountNumber: '',
    totalDays: 28,
    absentDays: 0,
    paidDays: 28
  });

  // Define the type for jsPDF with autoTable
  // Move the interface outside the component
  interface jsPDFWithAutoTable extends jsPDF {
    autoTable: typeof autoTable;
    lastAutoTable: any;
    previousAutoTable: any;
  }

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      }) as unknown as jsPDFWithAutoTable;

      // Company Header
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Dream Group", doc.internal.pageSize.getWidth() / 2, 35, { align: "center" });
      doc.setFontSize(16);
      // doc.text("LET BUSINESS BE GLOBAL", doc.internal.pageSize.getWidth() / 2, 25, { align: "center" });
      
      // Company details
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("website: www.dreamgroup-bd.com", doc.internal.pageSize.getWidth() - 60, 20);
      doc.text("Email: sirajganjdairy2017@gmail.com", doc.internal.pageSize.getWidth() - 60, 25);
      // doc.text("E-Trade License: TRAD/DSCC/059860/2020", doc.internal.pageSize.getWidth() - 60, 25);

      // Company Address
      doc.text("House-56, Road-12,", doc.internal.pageSize.getWidth() / 2, 45, { align: "center" });
      doc.text("Sector-14, Uttara, Dhaka 1230", doc.internal.pageSize.getWidth() / 2, 50, { align: "center" });

      // Payslip Header
      doc.setFillColor(240, 240, 240);
      doc.rect(10, 55, doc.internal.pageSize.getWidth() - 20, 8, 'F');
      doc.setFont("helvetica", "bold");
      doc.text("Salary Slip for the Month of: Feb 2025", doc.internal.pageSize.getWidth() / 2, 60, { align: "center" });

      // Employee Details Table
      const startY = 70;
      autoTable(doc as any, {
        startY: startY,
        head: [],
        body: [
          ['Employee Name', 'MD Nuruzzaman', 'Total Days', formData.totalDays, 'Total Days', formData.totalDays],
          ['Employee Email', 'nur.mnzaman@gmail.com', 'Absent Days', '0', 'Gross Salary', '23000'],
          ['Employee ID', 'EMP-18', 'Paid Days', formData.paidDays, '', ''],
          ['Employee Contact', '01681797855', 'Bank name', 'N/A', '', ''],
          ['Designation', 'Software Engineer', 'A/c no.', 'N/A', '', ''],
          ['Department', 'ICT Department', '', '', '', '']
        ],
        theme: 'plain',
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { fontStyle: 'bold' },
          2: { fontStyle: 'bold' },
          4: { fontStyle: 'bold' }
        }
      });

      // Earnings & Deductions Table
      autoTable(doc as any, {
        startY: (doc as any).lastAutoTable.finalY + 10,
        head: [['Earnings', 'Actual Salary', 'Earnings', 'Deductions', 'Amount']],
        body: [
          ['Basic Salary', '12500', '12500', 'Life Insurance', ''],
          ['House Rent Allowances', '5000', '5000', 'Health Insurance', ''],
          ['Transport Allowances', '3900', '3900', 'Professional Tax', ''],
          ['Medical Allowances', '1000', '1000', '', ''],
          ['Mobile Allowances', '600', '600', '', ''],
          ['Total Earnings', '23000', '23000', 'Total Deductions', '']
        ],
        theme: 'grid',
        styles: { fontSize: 9 },
        headStyles: { fillColor: [200, 200, 200], textColor: 0 },
        columnStyles: {
          0: { fontStyle: 'bold' },
          3: { fontStyle: 'bold' }
        }
      });

      // Net Payable
      const netY = (doc as any).lastAutoTable.finalY + 10;
      doc.setFillColor(240, 240, 240);
      doc.rect(20, netY, doc.internal.pageSize.getWidth() - 40, 8, 'F');
      doc.setFont("helvetica", "bold");
      doc.text("Net Payable", 30, netY + 5);
      doc.text("29000", doc.internal.pageSize.getWidth() - 40, netY + 5);

      // Payment Method
      const methodY = netY + 15;
      doc.setFont("helvetica", "normal");
      doc.text("Bank payment : N/A", 30, methodY);
      doc.text("Cash payment : Yes", doc.internal.pageSize.getWidth() - 60, methodY);

      // Signatures
      const signY = methodY + 20;
      doc.text("Authorized Signatory", 30, signY);
      doc.text("Employee Signature", doc.internal.pageSize.getWidth() - 60, signY);

      doc.save(`payslip-Feb-2025-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-4 py-2.5",
              "bg-blue-600 text-white shadow-sm",
              "hover:bg-blue-700 dark:hover:bg-blue-500",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              "transition-colors duration-200",
              "text-sm font-semibold",
              isGenerating && "opacity-50 cursor-not-allowed"
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Download Payslip'}
          </button>
        </div>

        {/* Preview */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Dream Group</h1>
            {/* <p className="text-sm text-gray-600">LET BUSINESS BE GLOBAL</p> */}
            <div className="text-right text-sm mt-2">
              <p>website: www.dreamgroup-bd.com</p>
              <p>Email: sirajganjdairy2017@gmail.com</p>
            </div>
            <p className="mt-4 text-sm">House-56, Road-12, </p>
            <p className="text-sm">Sector-14, Uttara, Dhaka 1230 </p>
          </div>

          <div className="bg-gray-100 text-center py-2 my-4">
            <h2 className="font-semibold">Salary Slip for the Month of: Feb 2025</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p><span className="font-semibold">Employee Name:</span> MD Nuruzzaman</p>
              <p><span className="font-semibold">Employee Email:</span> nur.mnzaman@gmail.com</p>
              <p><span className="font-semibold">Employee ID:</span> EMP-18</p>
              <p><span className="font-semibold">Employee Contact:</span> 01681797855</p>
              <p><span className="font-semibold">Designation:</span> Software Engineer</p>
              <p><span className="font-semibold">Department:</span>  ICT Department</p>
            </div>
            <div>
              <p><span className="font-semibold">Total Days:</span> {formData.totalDays}</p>
              <p><span className="font-semibold">Absent Days:</span> 0</p>
              <p><span className="font-semibold">Paid Days:</span> {formData.totalDays}</p>
              <p><span className="font-semibold">Bank name:</span> N/A</p>
              <p><span className="font-semibold">A/c no.:</span> N/A</p>
            </div>
            <div>
              <p><span className="font-semibold">Total Days:</span> {formData.totalDays}</p>
              <p><span className="font-semibold">Gross Salary:</span> 23000</p>
            </div>
          </div>

          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Earnings</th>
                <th className="border p-2 text-right">Actual Salary</th>
                <th className="border p-2 text-right">Earnings</th>
                <th className="border p-2 text-left">Deductions</th>
                <th className="border p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Basic Wage</td>
                <td className="border p-2 text-right">12500</td>
                <td className="border p-2 text-right">12500</td>
                <td className="border p-2">Life Insurance</td>
                <td className="border p-2 text-right"></td>
              </tr>
              <tr>
                <td className="border p-2">House Rent Allowances</td>
                <td className="border p-2 text-right">5000</td>
                <td className="border p-2 text-right">5000</td>
                <td className="border p-2">Health Insurance</td>
                <td className="border p-2 text-right"></td>
              </tr>
              <tr>
                <td className="border p-2">Transport Allowances</td>
                <td className="border p-2 text-right">3900</td>
                <td className="border p-2 text-right">3900</td>
                <td className="border p-2">Professional Tax</td>
                <td className="border p-2 text-right"></td>
              </tr>
              <tr>
                <td className="border p-2">Medical Allowances</td>
                <td className="border p-2 text-right">1000</td>
                <td className="border p-2 text-right">1000</td>
                <td className="border p-2"></td>
                <td className="border p-2 text-right"></td>
              </tr>
              <tr>
                <td className="border p-2">Mobile Allowances</td>
                <td className="border p-2 text-right">600</td>
                <td className="border p-2 text-right">600</td>
                <td className="border p-2"></td>
                <td className="border p-2 text-right"></td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border p-2">Total Earnings</td>
                <td className="border p-2 text-right">23000</td>
                <td className="border p-2 text-right">23000</td>
                <td className="border p-2">Total Deductions</td>
                <td className="border p-2 text-right"></td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-2 mb-4 flex justify-between">
            <span className="font-semibold">Net Payable</span>
            <span className="font-semibold">23000</span>
          </div>

          <div className="flex justify-between mb-8">
            <span>Bank payment : N/A</span>
            <span>Cash payment : Yes</span>
          </div>

          <div className="flex justify-between mt-12 pt-8">
            <div className="text-center">
              <div className="border-t border-black w-32 mx-auto"></div>
              <p className="mt-2">Authorized Signatory</p>
            </div>
            <div className="text-center">
              <div className="border-t border-black w-32 mx-auto"></div>
              <p className="mt-2">Employee Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
