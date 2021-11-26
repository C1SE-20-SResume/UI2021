import React from "react";

function Over({ score, number }) {
  console.log("a");
  const refreshPage = () => window.location.reload();
  return (
    <div className="text-center">
      <h1 className="mt-16 text-5xl mb-4">Finish Question type 1</h1>
      <p className="text-2xl mb-12">
        You did {score} out of {number}!
      </p>
      <button
        className="block border border-[#616A94] rounded-2xl px-8 py-2 text-base outline-none select-none mt-4 cursor-pointer hover:bg-[#616A94] mx-auto"
        onClick={refreshPage}
      >
        Retry
      </button>
    </div>
  );
}

export default Over;
