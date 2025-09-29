import React from "react";

interface ContactIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:bg-gray-50 transition">
      <div className="flex-shrink-0 text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-[#005b96] text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContactIcon;
