import React from "react";

interface ContactIconProps {
  icon: React.ReactNode;  
  title: string;
  description: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:bg-gray-50 transition">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-[#005b96]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ContactIcon;
