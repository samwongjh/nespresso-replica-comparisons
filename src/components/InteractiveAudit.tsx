import { useState } from 'react';
import { Check, Coffee, Plus, Truck } from 'lucide-react';
import {
  BUNDLE_IDENTITIES,
  CAPSULE_UPSELLS,
  EXTRACTION_SIZES,
  GENERATED_IMAGES,
} from '../data/closersData';
import { ResilientImage } from './ResilientImage';

type AuditTab = 'identity' | 'convenience' | 'stickiness';

export function InteractiveAudit() {
  const [activeTab, setActiveTab] = useState<AuditTab>('identity');
  const [selectedIdentityId, setSelectedIdentityId] = useState<
    'first-timers' | 'casual-drinkers' | 'connoisseurs'
  >('connoisseurs');
  const [selectedCupId, setSelectedCupId] = useState<string>('espresso');
  const [bagSleeves, setBagSleeves] = useState<Record<string, number>>({
    arpeggio: 2,
    ristretto: 1,
    volluto: 0,
  });

  const activeIdentity =
    BUNDLE_IDENTITIES.find((b) => b.id === selectedIdentityId) ?? BUNDLE_IDENTITIES[2];
  const activeCup = EXTRACTION_SIZES.find((c) => c.id === selectedCupId) ?? EXTRACTION_SIZES[0];

  const bagSubtotal = CAPSULE_UPSELLS.reduce(
    (sum, item) => sum + (bagSleeves[item.id] || 0) * item.priceSgd,
    0
  );
  const freeShippingThreshold = 80;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - bagSubtotal);
  const shippingProgress = Math.min(100, Math.round((bagSubtotal / freeShippingThreshold) * 100));

  const incrementSleeve = (id: string) => {
    setBagSleeves((prev) => ({ ...prev, [id]: Math.min(10, (prev[id] || 0) + 1) }));
  };

  const resetSleeves = () => {
    setBagSleeves({ arpeggio: 2, ristretto: 1, volluto: 0 });
  };

  return (
    <section
      id="interactive-audit"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-20 border-t border-[#E7E4DF]"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E7E4DF]">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs tracking-[0.14em] uppercase text-[#7A746E]">
            03. Interactive Micro-Flow Sandbox
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B1918] [text-wrap:balance]">
            Test the Rebuild&apos;s Behavioral Mechanics
          </h2>
          <p className="text-sm text-[#57524E] leading-relaxed">
            Compare how static corporate patterns behave against interactive CLOSERS controls
            across identity matching, extraction clarity, and capsule replenishment.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Interactive audit flows"
          className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] rounded-sm shrink-0 self-start lg:self-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'identity'}
            onClick={() => setActiveTab('identity')}
            className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              activeTab === 'identity'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            O · Own Identity
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'convenience'}
            onClick={() => setActiveTab('convenience')}
            className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              activeTab === 'convenience'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            C · Extraction Guide
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'stickiness'}
            onClick={() => setActiveTab('stickiness')}
            className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
              activeTab === 'stickiness'
                ? 'bg-white text-[#1B1918] shadow-xs'
                : 'text-[#57524E] hover:text-[#1B1918]'
            }`}
          >
            S · Cart Stickiness
          </button>
        </div>
      </div>

      {/* Flow 1: Own Identity */}
      {activeTab === 'identity' && (
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-sm p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                Original Page · One-Size Copy
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                Static Hardware Listing
              </h3>
              <p className="text-sm text-[#57524E] leading-relaxed">
                Every visitor—whether buying their very first capsule machine or collecting a
                limited Swarovski edition—reads the same generic specification paragraph.
              </p>
              <div className="p-4 bg-white border border-[#E5E5E5] rounded-sm space-y-2 text-xs text-[#555]">
                <div className="font-semibold text-[#111]">CitiZ Platinum Shine Bundle</div>
                <p>
                  &ldquo;Compact metal machine with 4 beverage selections and hot water option.
                  Includes travel mug, cups, and ornament.&rdquo;
                </p>
                <div className="text-[#888]">No coffee profile filter · No beginner vs connoisseur guidance</div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#ECECEC] text-xs text-[#6B6560]">
              Result: First-time buyers hesitate over capsule compatibility, while connoisseurs miss
              collector storytelling.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#C9A97E] rounded-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2C4C3E]">
                  CLOSERS Rebuild · Self-Segmented Bundles
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1B1918] mt-0.5">
                  Choose Your Coffee Identity
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 flex-wrap">
                {BUNDLE_IDENTITIES.map((profile) => {
                  const selected = profile.id === selectedIdentityId;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => setSelectedIdentityId(profile.id)}
                      className={`px-3 py-1.5 text-xs rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                        selected
                          ? 'bg-[#1B1918] text-[#FAF9F6] border-[#1B1918] font-semibold'
                          : 'bg-[#FAF9F6] text-[#4A4642] border-[#DDD8D0] hover:border-[#1B1918]'
                      }`}
                    >
                      {profile.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 bg-[#FAF9F6] border border-[#E7E4DF] rounded-sm p-5">
              <div className="sm:col-span-5 aspect-[4/3] overflow-hidden rounded-sm bg-[#1B1918]">
                <ResilientImage
                  src={
                    selectedIdentityId === 'connoisseurs'
                      ? GENERATED_IMAGES.heroBundle
                      : selectedIdentityId === 'casual-drinkers'
                      ? GENERATED_IMAGES.machineDetail
                      : GENERATED_IMAGES.capsuleRitual
                  }
                  alt={activeIdentity.bundleName}
                  fallbackTitle={activeIdentity.bundleName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-[#9E7B4F] font-medium">
                    {activeIdentity.label} · {activeIdentity.tagline} · {activeIdentity.line} Line
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#1B1918]">
                    {activeIdentity.bundleName}
                  </h4>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-lg font-semibold text-[#1B1918] tabular-nums">
                      SGD {activeIdentity.priceSgd}.00
                    </span>
                    <span className="text-xs text-[#8E8882] line-through tabular-nums">
                      SGD {activeIdentity.compareAtSgd}.00
                    </span>
                    <span className="text-xs font-semibold text-[#2C4C3E] tabular-nums">
                      Save SGD {activeIdentity.compareAtSgd - activeIdentity.priceSgd}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {activeIdentity.includes.map((inc) => (
                      <li key={inc} className="text-xs text-[#4A4642] flex items-start gap-2">
                        <Check
                          className="w-3.5 h-3.5 text-[#2C4C3E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-[#6B6560] pt-3 border-t border-[#E7E4DF]">
                  {activeIdentity.whyItWorks}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flow 2: Convenience & Extraction Guide */}
      {activeTab === 'convenience' && (
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-sm p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                Original Page · Unstructured Spec Text
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                Plain Feature Bullet List
              </h3>
              <p className="text-sm text-[#57524E] leading-relaxed">
                The original page lists beverage options as raw text without clarifying cup
                volume in millilitres, extraction duration, or brew temperature.
              </p>
              <ul className="p-4 bg-white border border-[#E5E5E5] rounded-sm space-y-2 text-xs text-[#555] list-disc list-inside">
                <li>4 coffee selections: Espresso, Lungo, Americano, Americano XL</li>
                <li>Dedicated hot water function</li>
                <li>19-bar high pressure pump</li>
                <li>Fast heat-up in 25 seconds</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-[#ECECEC] text-xs text-[#6B6560]">
              Result: Shoppers cannot visualize portion sizes or compare Original vs Vertuo brew
              times without opening external manuals.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#C9A97E] rounded-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2C4C3E]">
                  CLOSERS Rebuild · Interactive Extraction Explorer
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1B1918] mt-0.5">
                  Select Cup Format to Inspect Telemetry
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 flex-wrap">
                {EXTRACTION_SIZES.map((cup) => {
                  const selected = cup.id === selectedCupId;
                  return (
                    <button
                      key={cup.id}
                      type="button"
                      onClick={() => setSelectedCupId(cup.id)}
                      className={`px-3 py-1.5 text-xs rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                        selected
                          ? 'bg-[#1B1918] text-[#FAF9F6] border-[#1B1918] font-semibold'
                          : 'bg-[#FAF9F6] text-[#4A4642] border-[#DDD8D0] hover:border-[#1B1918]'
                      }`}
                    >
                      {cup.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E7E4DF] rounded-sm p-6 space-y-5">
              <div className="flex items-center justify-between gap-4 border-b border-[#E7E4DF] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1B1918] text-[#C9A97E] flex items-center justify-center shrink-0">
                    <Coffee className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-serif text-xl font-medium text-[#1B1918]">
                      {activeCup.label}
                    </div>
                    <div className="text-xs text-[#6B6560]">{activeCup.profile}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#9E7B4F] shrink-0">19 Bar · 25s Warmup</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-[#E7E4DF] rounded-sm p-4">
                  <div className="text-xs text-[#7A746E]">Cup Volume</div>
                  <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums mt-1">
                    {activeCup.volumeMl} ml
                  </div>
                </div>
                <div className="bg-white border border-[#E7E4DF] rounded-sm p-4">
                  <div className="text-xs text-[#7A746E]">Brew Time</div>
                  <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums mt-1">
                    {activeCup.brewTimeSec} sec
                  </div>
                </div>
                <div className="bg-white border border-[#E7E4DF] rounded-sm p-4">
                  <div className="text-xs text-[#7A746E]">Extraction Temp</div>
                  <div className="font-mono text-2xl font-semibold text-[#1B1918] tabular-nums mt-1">
                    {activeCup.temperatureC} °C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flow 3: Stickiness & Cart Loop */}
      {activeTab === 'stickiness' && (
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-sm p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C3A2B]">
                Original Page · Isolated Bag Add
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B1918]">
                Dead-End Basket Confirmation
              </h3>
              <p className="text-sm text-[#57524E] leading-relaxed">
                On the legacy page, adding sleeves or accessories requires leaving the machine PDP
                and manually hunting through the capsules directory.
              </p>
              <div className="p-4 bg-white border border-[#E5E5E5] rounded-sm space-y-2 text-xs text-[#555]">
                <div className="font-semibold text-[#111]">Basket Summary</div>
                <div className="flex justify-between py-2 border-y border-[#ECECEC]">
                  <span>Swarovski Shine Bundle</span>
                  <span className="font-mono tabular-nums">SGD 499.00</span>
                </div>
                <div className="text-[#888]">
                  No free-shipping meter · No Original-line sleeve pairings shown
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#ECECEC] text-xs text-[#6B6560]">
              Result: Lower sleeve attach rate and missed recurring capsule replenishment habits.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#C9A97E] rounded-sm p-6 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2C4C3E]">
                  CLOSERS Rebuild · Free Delivery Loop &amp; Compatible Pairings
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1B1918] mt-0.5">
                  Simulate Capsule Basket Threshold (SGD 80)
                </h3>
              </div>
              <button
                type="button"
                onClick={resetSleeves}
                className="text-xs font-semibold uppercase tracking-wider text-[#9E7B4F] hover:text-[#1B1918] cursor-pointer"
              >
                Reset Sleeves
              </button>
            </div>

            {/* Live SGD 80 Progress Bar */}
            <div className="bg-[#FAF9F6] border border-[#E7E4DF] rounded-sm p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="inline-flex items-center gap-2 font-medium text-[#1B1918]">
                  <Truck className="w-4 h-4 text-[#9E7B4F]" aria-hidden="true" />
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-[#2C4C3E] font-semibold">
                      Complimentary Singapore Delivery Unlocked
                    </span>
                  ) : (
                    <span className="tabular-nums">
                      Add{' '}
                      <strong className="font-semibold">
                        SGD {remainingForFreeShipping.toFixed(2)}
                      </strong>{' '}
                      more in capsules for Free SG Delivery
                    </span>
                  )}
                </span>
                <span className="font-mono text-[#57524E] tabular-nums">
                  SGD {bagSubtotal.toFixed(2)} / SGD 80.00
                </span>
              </div>
              <div className="h-2 w-full bg-[#E7E4DF] rounded-sm overflow-hidden">
                <div
                  className={`h-full transition-all duration-200 ${
                    remainingForFreeShipping === 0 ? 'bg-[#2C4C3E]' : 'bg-[#9E7B4F]'
                  }`}
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* 1-Click Compatible Original Sleeves */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CAPSULE_UPSELLS.map((sleeve) => {
                const count = bagSleeves[sleeve.id] || 0;
                return (
                  <div
                    key={sleeve.id}
                    className="border border-[#E7E4DF] rounded-sm p-4 flex flex-col justify-between gap-3 bg-white"
                  >
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-[#9E7B4F] tabular-nums">
                        Intensity {sleeve.intensity} / 13
                      </div>
                      <div className="text-sm font-semibold text-[#1B1918] leading-snug">
                        {sleeve.name}
                      </div>
                      <div className="text-xs text-[#6B6560]">{sleeve.notes}</div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#F0EDE7]">
                      <span className="text-xs font-semibold text-[#1B1918] tabular-nums">
                        SGD {sleeve.priceSgd.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementSleeve(sleeve.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#1B1918] hover:bg-[#9E7B4F] text-white text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" aria-hidden="true" />
                        <span className="tabular-nums">Add ({count})</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
