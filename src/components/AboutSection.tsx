import React from 'react';
import { Camera, Shield, HeartHandshake, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0e17] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111622] border border-slate-800 text-xs font-semibold text-blue-400">
              <Camera className="w-3.5 h-3.5" />
              <span>About Gadget Zone Delhi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
              A Dedicated Hub for Photographers, Cinematographers &amp; Creators
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded by <strong className="text-white font-semibold">Ayush Jain</strong> and <strong className="text-white font-semibold">Vaibhav</strong>, <strong className="text-white font-semibold">Gadget Zone Delhi (DSLR CAMERA HUB Delhi)</strong> was built around a straightforward principle: camera equipment and professional cinema optics should be experienced, tested, and understood before purchase at the best rates in the market.
              </p>
              <p>
                Whether you are stepping up to your first full-frame mirrorless system, searching for a fast f/1.4 prime lens for wedding portraits, or assembling a complete creator studio with wireless microphones and stabilizers, our Delhi store offers direct founder guidance and honest deals.
              </p>
              <p>
                We do not believe in pushy sales tactics or locked-case display restrictions. You are always welcome to mount lenses, take test photos with your own memory card, and check optical sharpness right here in our store. We also offer secure express prepaid delivery across India for outstation cinematographers.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#0f141f] border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Verified Condition</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every camera sensor and lens element is physically inspected and cleaned before being presented.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0f141f] border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Respectful Guidance</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We recommend gear that solves your practical shooting challenges without forcing unnecessary upgrades.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: In-Store Experience Flow Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0f141f] border border-slate-800 p-6 sm:p-7 space-y-5">
              
              <div className="border-b border-slate-800 pb-3.5">
                <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                  The Store Process
                </span>
                <h3 className="text-base font-bold text-white font-display mt-0.5">
                  How In-Store Verification Works
                </h3>
              </div>

              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">
                      Inquire or Walk In
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Check availability on WhatsApp beforehand or drop by during store hours (10:30 AM – 8:30 PM).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">
                      Hands-On Mounting &amp; Testing
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Mount the lens onto your body or test our camera bodies with your own SD card. Test auto-focus and eye tracking.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">
                      Clear Deal &amp; Direct Handover
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Transparent pricing with instant receipt and continuous post-purchase WhatsApp assistance.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent("Hi Gadget Zone Delhi, I would like to plan a visit to your store to check gear.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Plan Store Visit on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
