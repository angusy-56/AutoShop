'use client';

import { useState } from 'react';
import { CheckCircle, Upload, X } from 'lucide-react';

const services = [
  'General Repair',
  'Diagnostics',
  'Brakes',
  'Suspension',
  'Performance Tuning',
  'Oil & Maintenance',
  'Transmission',
  'Engine Work',
  'Electrical',
  'Other'
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    licensePlate: '',
    vin: '',
    preferredDate: '',
    preferredTime: '',
    servicesNeeded: [] as string[],
    description: '',
    honeypot: '' // Spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = 'Vehicle year is required';
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (formData.servicesNeeded.length === 0) newErrors.servicesNeeded = 'Please select at least one service';
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setConfirmationNumber(result.confirmationNumber);
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('There was an error submitting your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="section-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-ink mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your quote request. We'll review your information and get back to you within 24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Confirmation Number:</p>
                <p className="text-xl font-mono font-bold text-accent">
                  {confirmationNumber}
                </p>
              </div>
              <p className="text-gray-600">
                Questions? Call us at{' '}
                <a href="tel:+1234567890" className="text-accent hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="section-wrapper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-ink mb-4">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your vehicle and service needs, and we'll get back to you with a detailed quote
            </p>
          </div>

          <div className="card p-8">
            <form onSubmit={handleSubmit} className="modern-form">
              {/* Honeypot field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.name ? 'error' : ''
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.email ? 'error' : ''
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="form-label">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.phone ? 'error' : ''
                      }`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="form-label">
                      Year *
                    </label>
                    <input
                      type="text"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.vehicleYear ? 'error' : ''
                      }`}
                      placeholder="2020"
                    />
                    {errors.vehicleYear && <p className="error-message">{errors.vehicleYear}</p>}
                  </div>
                  <div>
                    <label className="form-label">
                      Make *
                    </label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.vehicleMake ? 'error' : ''
                      }`}
                      placeholder="Honda"
                    />
                    {errors.vehicleMake && <p className="error-message">{errors.vehicleMake}</p>}
                  </div>
                  <div>
                    <label className="form-label">
                      Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.vehicleModel ? 'error' : ''
                      }`}
                      placeholder="Civic"
                    />
                    {errors.vehicleModel && <p className="error-message">{errors.vehicleModel}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">
                      License Plate (Optional)
                    </label>
                    <input
                      type="text"
                      name="licensePlate"
                      value={formData.licensePlate}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="ABC123"
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      VIN (Optional)
                    </label>
                    <input
                      type="text"
                      name="vin"
                      value={formData.vin}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="1HGBH41JXMN109186"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date/Time */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferred Date & Time</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a time</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Services Needed */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Services Needed *</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`service-tag ${
                        formData.servicesNeeded.includes(service)
                          ? 'selected'
                          : ''
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.servicesNeeded && <p className="error-message mt-2">{errors.servicesNeeded}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="form-label">
                  Description of Issue/Service Needed *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`form-textarea ${
                    errors.description ? 'error' : ''
                  }`}
                  placeholder="Please describe the issue you're experiencing or the service you need..."
                />
                {errors.description && <p className="error-message">{errors.description}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}