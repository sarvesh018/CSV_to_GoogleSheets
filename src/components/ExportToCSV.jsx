import React from "react";
import Papa from "papaparse";
import download from "../assets/download.png";

function ExportToCSV({ data, selectColumn }) {
  const exportToCSV = () => {
    // We will not download file if data is not available
    if (data.length !== 0 && selectColumn !== 0) {
      // Filter data based on slected columns using
      const filterData = data.map((row) =>
        selectColumn.reduce((acc, column) => {
          acc[column] = row[column];
          return acc;
        }, {})
      );

      // Convert the filtered data into CSV format file
      const csvData = Papa.unparse(filterData);

      // Create a Blob which supports files from users system
      const blob = new Blob([csvData], { type: "text/csv" });

      // Download csv file with selected columns
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "updated_file.csv";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="mt-8 flex justify-center items-center">
      <button
        className="bg-[#8ec5ff] hover:bg-[#68aef9] flex justify-center items-center"
        onClick={exportToCSV}
      >
        <img src={download} alt="" className="w-10 h-10" />
        Export Selected Columns to CSV
      </button>
    </div>
  );
}

export default ExportToCSV;
