import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card p-12">
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-ink mb-4">
              Payment Cancelled
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your payment was cancelled. No charges have been made to your account.
              You can try again or contact us if you need assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pay"
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Try Again</span>
              </Link>
              <Link
                href="/"
                className="btn btn-secondary inline-flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need help? Contact us at{' '}
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