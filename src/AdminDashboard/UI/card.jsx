// card.jsx
import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b p-2">{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-2 ${className}`}>{children}</div>
);
