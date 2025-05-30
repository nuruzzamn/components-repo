"use client";
import React, { useState } from 'react';
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

export const ElementPaySlip = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  // Define the type for jsPDF with autoTable
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

      // Company Header - Updated to match the preview layout
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 150, 136); // Teal color for ELEMENTS
      doc.text("ELEMENTS", 20, 20);
      
      // Contact details - Updated to match the preview layout with two columns
      doc.setTextColor(0, 0, 0); // Reset to black
      doc.setFontSize(10);
      
      // First column - labels
      doc.setFont("helvetica", "bold");
      doc.text("Contact:", doc.internal.pageSize.getWidth() - 80, 15);
      doc.text("Email:", doc.internal.pageSize.getWidth() - 80, 30);
      
      // Second column - values
      doc.setFont("helvetica", "bold"); // Keep bold for the values as in preview
      doc.text("01722732557", doc.internal.pageSize.getWidth() - 60, 15);
      doc.text("01776462847", doc.internal.pageSize.getWidth() - 60, 20);
      doc.text("elementsdharmondl@gmail.com", doc.internal.pageSize.getWidth() - 60, 30);

      // Bill To Section - Updated to match the preview layout with two columns
      doc.setFont("helvetica", "bold");
      doc.text("Bill To", 20, 45);
      
      // First column - labels
      doc.setFont("helvetica", "medium");
      doc.setFontSize(11);
      doc.text("Invoice No:", 60, 45);
      doc.text("Receiver Name:", 60, 50);
      doc.text("Address:", 60, 55);
      doc.text("Mobile No:", 60, 60);
      doc.text("Date:", 60, 65);
      
      // Second column - values
      doc.text("ELE130325035", 100, 45);
      doc.text("Samina Quasem", 100, 50);
      doc.text("Rd#7, H# 15, dynasty apts, apt-C/3, gulshan-1", 100, 55);
      doc.text("01711-541069", 100, 60);
      doc.text("13-Mar-25", 100, 65);

      // Invoice Table
      autoTable(doc, {
        startY: 75,
        head: [['Sl. No.', 'Picture', 'Description', 'Size', 'Quantity', 'Unit Price', 'Total Amount (Tk)']],
        body: [
          [
            '1', 
            '', // Picture placeholder
            'Product Material: Resin + Linen Lamp Shade\nProduct Color: Antique White/ Retro Gold\nLumen: 3000k', 
            'Diameter 11.8 inch*\nHeight 23.62 inch', 
            '2', 
            '41,000', 
            '82,000.00'
          ],
          [
            '2', 
            '', // Picture placeholder
            'Product Material: Steel + Solid Wood\nColor: Antique\nProduct Size: Lumen: 3000k/3500k/4000k\nLight: E14\nLight Pcs:1pc', 
            'Diameter 8.66 inch*\nHeight 17.71 inch', 
            '4', 
            '12,000', 
            '48,000.00'
          ],
          [
            '3', 
            '', // Picture placeholder
            'American retro French designer chandelier\nMaterial: Wood + Wrought metal\nColor: Antique,\nLumen: 2700K\n4 head', 
            'D17.7 inch,H21.6 inch', 
            '1', 
            '73,000', 
            '73,000.00'
          ]
        ],
        theme: 'grid',
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { halign: 'center', cellWidth: 10 },
          1: { cellWidth: 25 }, // Picture column
          4: { halign: 'center' },
          5: { halign: 'right' },
          6: { halign: 'right' }
        },
        didDrawCell: (data) => {
          // Add placeholder for images
          if (data.column.index === 1 && data.cell.section === 'body') {
            // This would be where you'd add images if they were available
            // For now, we'll just add a placeholder text
            const x = data.cell.x + 2;
            const y = data.cell.y + 5;
            doc.setFontSize(7);
            doc.text("[Product Image]", x, y);
          }
        }
      });

      // Total Section - Updated to match the preview layout with two columns
      const finalY = (doc as any).lastAutoTable.finalY + 10;
      
      // Create a two-column layout for totals
      const leftCol = doc.internal.pageSize.getWidth() - 80;
      const rightCol = doc.internal.pageSize.getWidth() - 20;
      
      // Total Amount
      doc.setFont("helvetica", "bold"); // Keep bold for all items as in preview
      doc.text("Total Amount", leftCol, finalY);
      doc.text("2,03,000.00", rightCol, finalY, { align: 'right' });
      
      // 15% Discount
      doc.text("15% Discount", leftCol, finalY + 6);
      doc.text("30,450.00", rightCol, finalY + 6, { align: 'right' });
      
      // Final Amount
      doc.text("Final Amount (Tk)", leftCol, finalY + 12);
      doc.text("1,72,550.00", rightCol, finalY + 12, { align: 'right' });
      
      // 40% advance
      doc.text("40% advance", leftCol, finalY + 18);
      doc.text("69,000.00", rightCol, finalY + 18, { align: 'right' });
      
      // Balance 60%
      doc.setTextColor(255, 0, 0); // Red color
      doc.text("Balance 60% After delivery", leftCol, finalY + 24);
      doc.text("1,03,550.00", rightCol, finalY + 24, { align: 'right' });

      // Note Section
      doc.setTextColor(0, 0, 0); // Reset to black
      const noteY = finalY + 34;
      doc.setFont("helvetica", "bold");
      doc.text("*Note:", 20, noteY);
      doc.setFont("helvetica", "normal");
      doc.text("Lead time: 25-30 days after advance payment.", 20, noteY + 5);

      // Bank Information
      doc.setFont("helvetica", "bold");
      doc.text("Bank Information :", 20, noteY + 15);
      
      // Two-column layout for bank information
      doc.setFont("helvetica", "bold");
      doc.text("Beneficiary Name:", 20, noteY + 20);
      doc.setFont("helvetica", "normal");
      doc.text("ELEMENTS", 70, noteY + 20);
      
      doc.setFont("helvetica", "bold");
      doc.text("Beneficiary account number:", 20, noteY + 25);
      doc.setFont("helvetica", "normal");
      doc.text("10810700022892", 70, noteY + 25);
      
      doc.setFont("helvetica", "bold");
      doc.text("Country/Region:", 20, noteY + 30);
      doc.setFont("helvetica", "normal");
      doc.text("Sat Masjid Road", 70, noteY + 30);
      
      doc.setFont("helvetica", "bold");
      doc.text("Beneficiary Address:", 20, noteY + 35);
      doc.setFont("helvetica", "normal");
      doc.text("House: 65, Road: 8/A, Dhanmondi, Dhaka", 70, noteY + 35);
      
      doc.setFont("helvetica", "bold");
      doc.text("Beneficiary Bank:", 20, noteY + 40);
      doc.setFont("helvetica", "normal");
      doc.text("Eastern Bank Limited", 70, noteY + 40);

      // Footer
      const footerY = noteY + 50;
      doc.setFontSize(8);
      doc.text("Address: House #45, Road # 8/A, Dhanmondi, Dhaka, Bangladesh", doc.internal.pageSize.getWidth() / 2, footerY, { align: 'center' });
      doc.text("Email: elementsdharmondl@gmail.com", doc.internal.pageSize.getWidth() / 2, footerY + 4, { align: 'center' });

      doc.save(`elements-invoice-${Date.now()}.pdf`);
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
              "bg-teal-600 text-white shadow-sm",
              "hover:bg-teal-700 dark:hover:bg-teal-500",
              "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",
              "transition-colors duration-200",
              "text-sm font-semibold",
              isGenerating && "opacity-50 cursor-not-allowed"
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Download Invoice'}
          </button>
        </div>

        {/* Preview */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-teal-500">ELEMENTS</h1>
            </div>
            <div className="flex gap-16">
                <div className=''>
                    <div className="font-semibold">Contact:</div>
                    <br/>
                    <div className="font-semibold">Email:</div>
                    
                </div>

                <div>
                    <div>
                        <p className="font-semibold">01722732557</p>
                        <p className="font-semibold">01776462847</p>
                    </div>
                    <div>
                        <p className="font-semibold">elementsdharmondl@gmail.com</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Bill To Section */}
          <div className="flex gap-16 mb-6">
            <div>
              <p className="font-semibold">Bill To</p>
            </div>
            <div className='flex gap-16'>
                <div>
                    <p className="text-lg font-medium">Invoice No:</p>
                    <p className="text-lg font-medium">Receiver Name:</p>
                    <p className="text-lg font-medium">Address:</p>
                    <p className="text-lg font-medium">Mobile No:</p>
                    <p className="text-lg font-medium">Date:</p>
                </div>

                <div>
                    <p className="text-lg font-medium">ELE130325035</p>
                    <p className="text-lg font-medium">Samina Quasem</p>
                    <p className="text-lg font-medium">Rd#7, H# 15, dynasty apts, apt-C/3, gulshan-1</p>
                    <p className="text-lg font-medium">01711-541069</p>
                    <p className="text-lg font-medium">13-Mar-25</p>
                </div>

            </div>
            
          </div>

          {/* Invoice Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left whitespace-nowrap">Sl. No.</th>
                  <th className="border p-2 text-left whitespace-nowrap">Picture</th>
                  <th className="border p-2 text-left whitespace-nowrap">Description</th>
                  <th className="border p-2 text-left whitespace-nowrap">Size</th>
                  <th className="border p-2 text-center whitespace-nowrap">Quantity</th>
                  <th className="border p-2 text-right whitespace-nowrap">Unit Price</th>
                  <th className="border p-2 text-right whitespace-nowrap">Total Amount (Tk)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-center">[Product Image]</td>
                  <td className="border p-2">
                    <p>Product Material: Resin + Linen Lamp Shade</p>
                    <p>Product Color: Antique White/ Retro Gold</p>
                    <p>Lumen: 3000k</p>
                  </td>
                  <td className="border p-2">
                    <p>Diameter 11.8 inch*</p>
                    <p>Height 23.62 inch</p>
                  </td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-right">41,000</td>
                  <td className="border p-2 text-right">82,000.00</td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">[Product Image]</td>
                  <td className="border p-2">
                    <p>Product Material: Steel + Solid Wood</p>
                    <p>Color: Antique</p>
                    <p>Product Size: Lumen: 3000k/3500k/4000k</p>
                    <p>Light: E14</p>
                    <p>Light Pcs:1pc</p>
                  </td>
                  <td className="border p-2">
                    <p>Diameter 8.66 inch*</p>
                    <p>Height 17.71 inch</p>
                  </td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-right">12,000</td>
                  <td className="border p-2 text-right">48,000.00</td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2 text-center">[Product Image]</td>
                  <td className="border p-2">
                    <p>American retro French designer chandelier</p>
                    <p>Material: Wood + Wrought metal</p>
                    <p>Color: Antique,</p>
                    <p>Lumen: 2700K</p>
                    <p>4 head</p>
                  </td>
                  <td className="border p-2">
                    <p>D17.7 inch,H21.6 inch</p>
                  </td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-right">73,000</td>
                  <td className="border p-2 text-right">73,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Section */}
          <div className="grid grid-cols-2 space-y-2 mb-6">

            <div></div>

            <div className='flex justify-between pr-6'>
                <div className='text-right'>
                    <p className="font-semibold p-2">Total Amount</p>
                    <p className="font-semibold p-2">15% Discount</p>
                    <p className="font-semibold p-2">Final Amount (Tk)</p>
                    <p className="font-semibold p-2">40% advance</p>
                    <p className="font-semibold p-2">Balance 60% After delivery</p>
                </div>

                <div className='text-right'>
                    <p className="font-semibold p-2">2,03,000.00</p>
                    <p className="font-semibold p-2">30,450.00</p>
                    <p className="font-semibold p-2">1,72,550.00</p>
                    <p className="font-semibold p-2">69,000.00</p>
                    <p className="font-semibold p-2">1,03,550.00</p>
                </div>
            </div>  
          </div>

          {/* Note Section */}
          <div className="mt-8 border-t pt-4">
            <p className="font-semibold">*Note:</p>
            <p>Lead time: 25-30 days after advance payment.</p>
          </div>

          {/* Bank Information */}
          <div className="mt-4">
            <p className="font-semibold">Bank Information :</p>
            <div className="grid grid-cols-2 gap-2">
              <p><span className="font-semibold">Beneficiary Name:</span> ELEMENTS</p>
              <p><span className="font-semibold">Beneficiary account number:</span> 10810700022892</p>
              <p><span className="font-semibold">Country/Region:</span> Sat Masjid Road</p>
              <p><span className="font-semibold">Beneficiary Address:</span> House: 65, Road: 8/A, Dhanmondi, Dhaka</p>
              <p><span className="font-semibold">Beneficiary Bank:</span> Eastern Bank Limited</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm">
            <p>Address: House #45, Road # 8/A, Dhanmondi, Dhaka, Bangladesh</p>
            <p>Email: elementsdharmondl@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}