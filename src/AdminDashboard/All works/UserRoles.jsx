import React from "react";

const UserRoles = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full">
      <h2 className="text-xl font-semibold mb-3">User Roles</h2>

      {data && data.length > 0 ? (
        <ul className="space-y-2">
          {data.map((role, index) => (
            <li 
              key={index} 
              className="flex justify-between border-b pb-2 text-gray-700"
            >
              <span>{role.roleName}</span>
              <span className="font-bold">{role.count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p classname="text-gray-500">No user roles to display</p>
      )}
    </div>
  );
};

export default UserRoles;
