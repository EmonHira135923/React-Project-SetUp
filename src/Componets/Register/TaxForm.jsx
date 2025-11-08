import React, { useState } from "react";
import { subYears } from "date-fns";
import { useNavigate } from "react-router";

const TaxForm = () => {
  const [taxType, setTaxType] = useState("Personal");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  // Generate last 4 years using date-fns
  const years = Array.from({ length: 4 }, (_, i) =>
    subYears(new Date(), i).getFullYear()
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-lg font-semibold mb-4">New Jobs</h2>
        <p className="mb-4 text-sm">
          Do you need to file your personal taxes or your business taxes?
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              taxType === "Personal" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTaxType("Personal")}
          >
            Personal Taxes
          </button>
          <button
            className={`px-4 py-2 rounded ${
              taxType === "Business" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTaxType("Business")}
          >
            Business Taxes
          </button>
        </div>

        <p className="mb-4 text-sm">
          Are you planning to file your tax return for any other year apart from
          the current year?
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {years.map((year) => (
            <button
              key={year}
              className={`px-3 py-1 rounded ${
                selectedYear === year ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
