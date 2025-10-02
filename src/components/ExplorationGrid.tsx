"use client";

import React from "react";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { Section } from "@/components/Section";
import { NavigationCompass } from "@/components/navigation/NavigationCompass";
import { MiniMap } from "@/components/navigation/MiniMap";
import { KeyboardHint } from "@/components/navigation/KeyboardHint";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

import { HeroSection } from "@/components/sections/HeroSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { UnderwaterSection } from "@/components/sections/UnderwaterSection";
import { AerialSection } from "@/components/sections/AerialSection";
import { TechDetailsSection } from "@/components/sections/TechDetailsSection";
import { WhitepaperSection } from "@/components/sections/WhitepaperSection";
import { EEATSection } from "@/components/sections/EEATSection";
import { ContactSection } from "@/components/sections/ContactSection";

import type { GridSection } from "@/types/navigation";

const gridSections: GridSection[] = [
  {
    id: "hero",
    position: { row: 0, col: 0 },
    title: "Adam Drone - Hero",
    component: HeroSection,
    description: "Introduction to Adam dual-mode drone",
  },
  {
    id: "specs",
    position: { row: 0, col: 1 },
    title: "Technical Specifications",
    component: SpecsSection,
    description: "Detailed technical specifications",
  },
  {
    id: "capabilities",
    position: { row: 0, col: 2 },
    title: "Advanced Capabilities",
    component: CapabilitiesSection,
    description: "Feature overview and mode comparison",
  },
  {
    id: "underwater",
    position: { row: 1, col: 0 },
    title: "Underwater Mode",
    component: UnderwaterSection,
    description: "Marine and submarine capabilities",
  },
  {
    id: "aerial",
    position: { row: 1, col: 1 },
    title: "Aerial Mode",
    component: AerialSection,
    description: "Flight and aerial capabilities",
  },
  {
    id: "tech-details",
    position: { row: 1, col: 2 },
    title: "Engineering Details",
    component: TechDetailsSection,
    description: "In-depth engineering information",
  },
  {
    id: "whitepaper",
    position: { row: 2, col: 0 },
    title: "Technical Whitepaper",
    component: WhitepaperSection,
    description: "Comprehensive technical documentation",
  },
  {
    id: "eeat",
    position: { row: 2, col: 1 },
    title: "Trust & Authority",
    component: EEATSection,
    description: "Experience, Expertise, Authoritativeness, Trustworthiness",
  },
  {
    id: "contact",
    position: { row: 2, col: 2 },
    title: "Contact & Demo",
    component: ContactSection,
    description: "Get in touch and request a demo",
  },
];

function GridContent() {
  useKeyboardNavigation();

  return (
    <>
      {gridSections.map((section) => {
        const Component = section.component;
        return (
          <Section key={section.id} position={section.position}>
            <Component />
          </Section>
        );
      })}

      <KeyboardHint />
      <MiniMap sections={gridSections} />
      <NavigationCompass />
    </>
  );
}

export function ExplorationGrid() {
  return (
    <NavigationProvider
      sections={gridSections}
      gridSize={{ rows: 3, cols: 3 }}
      initialPosition={{ row: 0, col: 0 }}
    >
      <GridContent />
    </NavigationProvider>
  );
}
