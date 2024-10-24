import React, { useState } from 'react';

const RegisterCustomers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    consent: false
  });

  const financialServices = [
    'Tax Services', 'Pension and Retirement Services', 'Home loans', 'Business loans',
    'Student loans', 'Health insurance', 'Car insurance', 'Liability insurance',
    'Disability insurance', 'Electricity Bill Reduction'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prevState => ({
      ...prevState,
      services: prevState.services.includes(service)
        ? prevState.services.filter(s => s !== service)
        : [...prevState.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registered Customer:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name (Full Name):</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Interested Financial Services:</label>
        {financialServices.map(service => (
          <div key={service} className="flex items-center">
            <input
              type="checkbox"
              id={service}
              checked={formData.services.includes(service)}
              onChange={() => handleServiceChange(service)}
              className="mr-2"
            />
            <label htmlFor={service}>{service}</label>
          </div>
        ))}
      </div>
      <div>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label>
          I consent to being contacted by Financial Coach regarding the financial services I've opted for via phone, email, or SMS.
        </label>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterCustomers;