import Link from "next/link";
import { Wrench, Phone, Mail, MapPin, Heart } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technicians", href: "/technicians" },
  { label: "Registration", href: "/registration" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <span>Fix It Now</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for quick, reliable home repairs and technician services. Fix anything, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+1 (555) 019-2834</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>support@fixitnow.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Austin, TX 78701</span>
              </li>
            </ul>
          </div>

          {/* Call to Action Box */}
          <div className="p-5 bg-slate-800/60 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="text-sm font-semibold text-white">Need Quick Repairs?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book certified technicians near you in under two minutes.
            </p>
            <Link
              href="/services"
              className="inline-block w-full text-center text-xs font-semibold py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors"
            >
              Book a Service
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Fix It Now. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for quick solutions.
          </div>
        </div>
      </div>
    </footer>
  );
}