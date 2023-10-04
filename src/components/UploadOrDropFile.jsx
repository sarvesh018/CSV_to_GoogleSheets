import React, { useState } from "react";
import Papa from "papaparse";
import PrintData from "./PrintData";
import ExportToCSV from "./ExportToCSV";
// import AppendToGoogleSheets from "./AppendToGoogleSheets";

function UploadOrDropFile() {
  const [data, setData] = useState([]);

  // Selected columns will be stored in the selectColumns
  const [selectColumn, setSelectColumn] = useState([]);

  // Handling changes in file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  return (
    <div className="bg-[#f5f2f2] shadow-2xl px-10 py-20 rounded-lg">
      <div className="font font-mono font-extrabold text-3xl mb-[4rem]">
        <p className="border-black border-2 py-2 shadow-2xl">
          NowStackIt Challenge
        </p>
      </div>
      <div className="font-bold  text-white text-2xl gap-5 bg-[#2c45ea] pl-[2rem] py-6 flex justify-center items-center rounded-3xl shadow-lg">
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>
      <div className="font-serif py-6 w-full">
        <h2 className="font-bold text-xl">Select Columns to Print</h2>
        {data.length > 0 && (
          <ul className="flex gap-4 flex-wrap text-lg py-2">
            {Object.keys(data[0]).map((column) => (
              <li key={column}>
                <label>
                  <input
                    className="enabled:hover:border-gray-400 disabled:opacity-75"
                    type="checkbox"
                    value={column}
                    onChange={(e) => {
                      const columnName = e.target.value;
                      if (e.target.checked) {
                        // If the column is selected than data is stored
                        setSelectColumn([...selectColumn, columnName]);
                      } else {
                        // Else the not selected column will be filtered out
                        setSelectColumn(
                          selectColumn.filter((col) => col !== columnName)
                        );
                      }
                    }}
                  />
                  {column}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Passing data and selectColumn as props to PrintData Component and printing data with the help of table */}
      <PrintData data={data} selectColumn={selectColumn} />
      <ExportToCSV data={data} selectColumn={selectColumn} />
      {/* <AppendToGoogleSheets data={data} selectColumn={selectColumn} /> */}
    </div>
  );
}

export default UploadOrDropFile;
