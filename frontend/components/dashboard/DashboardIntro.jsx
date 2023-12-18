import React from "react";

function DashboardIntro() {
  return (
    <section className="p-4">
      <div className="flex gap-8">
        <div className="max-w-[350px] w-full border-1 p-2.5 flex flex-col gap-3 bg-white rounded-lg">
          <h2 className="text-xl font-semibold">Quizzes</h2>
          <p className="text-lg font-semibold text-gray-600">21</p>
        </div>
        <div className="max-w-[350px] w-full border-1 p-2.5 flex flex-col gap-3 bg-white rounded-lg"></div>
        <div className="max-w-[350px] w-full border-1 p-2.5 flex flex-col gap-3 bg-white rounded-lg"></div>
      </div>
    </section>
  );
}

export default DashboardIntro;
