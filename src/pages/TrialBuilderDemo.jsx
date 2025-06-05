import React from "react";

export default function TrialBuilderDemo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Trial Builder (Demo)</h2>
      <p className="mb-4">
        This is a simulated preview of the trial creation process. In the full
        platform, employers can select roles, customize requirements, and invite
        candidates with just a few clicks.
      </p>
      <div className="space-y-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Select Job Role
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Set Trial Duration
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Invite Candidate
        </button>
      </div>
    </div>
  );
}

