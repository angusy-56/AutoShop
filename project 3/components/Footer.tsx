import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-muted mt-20">
      <div className="section-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MSP</span>
              </div>
              <span className="font-bold text-lg">Mean Streets Performance</span>
            </div>
            <p className="text-sm text-gray-600">
              Performance-grade repairs. Neighborhood-level care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/quote" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                Request Quote
              </Link>
              <Link href="/pay" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                Pay Invoice
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Hours
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8am - 6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9am - 3pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </a>
              <a
                href="mailto:info@meanstreetsperformance.com"
                className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@meanstreetsperformance.com
              </a>
              <div className="flex items-start text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>
                  123 Main Street<br />
                  Anytown, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Mean Streets Performance. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">Secured by Stripe</span>
            <span className="text-xs text-gray-500">SSL Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}