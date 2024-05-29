import React from "react";

interface SidebarTabProps {
    href: string;
    label: string;
}
const SidebarTab = () => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <span className="ms-3">Dashboard</span>
      </a>
    </li>
  );
};

export default SidebarTab;
