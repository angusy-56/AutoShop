import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-ink mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your payment. Your transaction has been processed successfully.
              A receipt has been sent to your email address.
            </p>
            <div className="space-y-4">
              <Link
                href="/"
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
              <p className="text-sm text-gray-500">
                Questions? Contact us at{' '}
                <a href="tel:+1234567890" className="text-accent hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}