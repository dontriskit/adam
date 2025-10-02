import React from "react";

export function ContactSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-neutral-100 mb-6">
            Begin Your Expedition
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready to explore the possibilities with Adam? Connect with our team
            to discuss your mission requirements and deployment scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-neutral-300"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-200 mb-2">Email</h3>
            <p className="text-neutral-400 text-sm">sales@adam-drone.tech</p>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-neutral-300"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-200 mb-2">Phone</h3>
            <p className="text-neutral-400 text-sm">+1 (555) 123-ADAM</p>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-neutral-300"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-200 mb-2">Location</h3>
            <p className="text-neutral-400 text-sm">Boston, MA</p>
          </div>
        </div>

        {/* CTA Form Placeholder */}
        <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-neutral-100 mb-6">
            Request a Demo
          </h3>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 text-left">
              <label className="block text-sm font-mono text-neutral-500 mb-2">
                FULL NAME
              </label>
              <div className="text-neutral-400 italic">
                [Form input placeholder]
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 text-left">
              <label className="block text-sm font-mono text-neutral-500 mb-2">
                EMAIL ADDRESS
              </label>
              <div className="text-neutral-400 italic">
                [Form input placeholder]
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 text-left">
              <label className="block text-sm font-mono text-neutral-500 mb-2">
                ORGANIZATION
              </label>
              <div className="text-neutral-400 italic">
                [Form input placeholder]
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 text-left">
              <label className="block text-sm font-mono text-neutral-500 mb-2">
                USE CASE
              </label>
              <div className="text-neutral-400 italic">
                [Textarea placeholder]
              </div>
            </div>
            <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-semibold py-4 px-6 rounded-lg transition-colors">
              Submit Request
            </button>
          </div>
        </div>

        <div className="mt-12 text-sm text-neutral-500">
          <p>
            Exploration progress: You've discovered all sections of the Adam
            drone system.
          </p>
        </div>
      </div>
    </div>
  );
}
