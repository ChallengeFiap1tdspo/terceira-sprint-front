import React from "react";

interface ContactIconProps {
  icon: React.ReactNode;  
  title: string;
  description: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-6 h-6 text-gray-600">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ContactIcon;