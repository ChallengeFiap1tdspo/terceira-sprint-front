import React from "react";

interface ContactIconProps {
  icon: React.ReactNode;  
  title: string;
  description: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-center w-10 h-10 text-[#005b96]">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#005b96] mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ContactIcon;