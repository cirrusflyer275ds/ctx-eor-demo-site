import React from "react";

export default function Pricing() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
      <p className="mb-2">
        We offer simple, transparent pricing that scales with your hiring needs.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Flat rate per trial employee</li>
        <li>Optional recruiting add-ons</li>
        <li>Employer of Record (EOR) compliance included</li>
        <li>Custom enterprise pricing available</li>
      </ul>
      <p className="mt-4 font-semibold">Contact us for a detailed quote.</p>
    </div>
  );
}

