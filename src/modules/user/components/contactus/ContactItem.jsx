import React from 'react';

const ContactItem = ({ Icon, label, content }) => (
  <div className="flex items-start w-full space-x-4 mb-8">
    <div>
      <div className="w-10  h-10 bg-teal-100 rounded-full flex justify-center items-center">
        {Icon && <Icon className="w-6 h-6 text-teal-500" />}
      </div>
    </div>
    <div>
      <p>{label}</p>
      <p className="font-semibold">{content}</p>
    </div>
  </div>
);

export default ContactItem;
