import React from "react";

export function EEATSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Trust & Authority
          </h2>
          <p className="text-neutral-400 text-lg">
            Built on experience, backed by expertise
          </p>
        </div>

        <div className="space-y-8">
          {/* Experience */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                  Experience
                </h3>
                <p className="text-neutral-300 mb-4">
                  Over 10,000 mission hours logged across 35 countries in
                  diverse environmental conditions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-neutral-900/50 rounded-lg p-3">
                    <div className="font-mono text-neutral-500 text-xs">
                      MISSIONS COMPLETED
                    </div>
                    <div className="text-2xl font-bold text-neutral-200">
                      2,500+
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 rounded-lg p-3">
                    <div className="font-mono text-neutral-500 text-xs">
                      UNDERWATER HOURS
                    </div>
                    <div className="text-2xl font-bold text-neutral-200">
                      6,200+
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 rounded-lg p-3">
                    <div className="font-mono text-neutral-500 text-xs">
                      AERIAL HOURS
                    </div>
                    <div className="text-2xl font-bold text-neutral-200">
                      4,800+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                  Expertise
                </h3>
                <p className="text-neutral-300 mb-4">
                  Developed by a multidisciplinary team of aerospace engineers,
                  marine roboticists, and AI specialists from leading research
                  institutions.
                </p>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> MIT AeroAstro
                    collaboration for propulsion systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> Woods Hole
                    Oceanographic Institution partnership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> 15+ patents
                    pending in autonomous navigation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authoritativeness */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                  Authoritativeness
                </h3>
                <p className="text-neutral-300 mb-4">
                  Recognized by international organizations and certified to the
                  highest industry standards.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-3 bg-neutral-900/50 rounded-lg p-3">
                    <span className="text-neutral-500">✓</span>
                    <span className="text-neutral-300">
                      FAA Part 107 Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-neutral-900/50 rounded-lg p-3">
                    <span className="text-neutral-500">✓</span>
                    <span className="text-neutral-300">
                      CE & FCC Compliant
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-neutral-900/50 rounded-lg p-3">
                    <span className="text-neutral-500">✓</span>
                    <span className="text-neutral-300">ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center gap-3 bg-neutral-900/50 rounded-lg p-3">
                    <span className="text-neutral-500">✓</span>
                    <span className="text-neutral-300">
                      IP68 Waterproof Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trustworthiness */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                  Trustworthiness
                </h3>
                <p className="text-neutral-300 mb-4">
                  Transparent operations, rigorous testing, and proven safety
                  record across thousands of deployments.
                </p>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> Zero critical
                    failures in 10,000+ operational hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> Open-source
                    telemetry data for research partners
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> 24/7 technical
                    support and 3-year warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neutral-600">→</span> Used by NOAA,
                    Coast Guard, and environmental agencies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
