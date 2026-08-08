import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Need something fixed? Reach out to the <span className="font-semibold text-blue-600">Fix It Now</span> team—we’re here to help!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Phone Number
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-800">
                +1 (555) 019-2834
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Mon - Fri, 8am - 6pm
              </p>
            </div>
          </div>

          {/* Email / Website */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Online
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-800">
                support@fixitnow.com
              </p>
              <a
                href="https://www.fixitnow.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline mt-1 block"
              >
                www.fixitnow.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Location
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-800">
                123 Service Road, Suite 100
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Austin, TX 78701
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Business Hours
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-800">
                Mon - Sat: 8:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Sunday: Closed (Emergency Only)
              </p>
            </div>
          </div>
        </div>

        {/* Quick Call Out Banner */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center space-y-3">
          <h2 className="text-2xl font-bold">Have an urgent repair?</h2>
          <p className="text-blue-100 max-w-md mx-auto text-sm">
            Call our emergency line directly for immediate support from our technicians.
          </p>
          <a
            href="tel:+15550192834"
            className="inline-block mt-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
          >
            Call Now: +1 (555) 019-2834
          </a>
        </div>
      </div>
    </div>
  );
}