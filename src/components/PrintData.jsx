import React from "react";

function PrintData({ data, selectColumn }) {
  return (
    <div className="bg-[#fff] px-2 py-2 rounded-xl">
      {/* Filtering out data and printing selected columns */}
      <h2 className="text-2xl font-serif underline underline-offset-2 py-4">
        Selected Columns
      </h2>
      <table className="flex justify-center items-center flex-col">
        <thead>
          <tr>
            {selectColumn.map((column) => (
              <th className="px-4" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Limiting data upto 5 columns otherwise for the large dataset data will be overflowed*/}
          {data.slice(0, 5).map((row, index) => (
            <tr key={index}>
              {selectColumn.map((column) => (
                <td className="px-4" key={column}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrintData;
