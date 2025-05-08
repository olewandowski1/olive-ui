import { Component } from 'lucide-react';

import CenteredHeroBlock from '@/registry/default/blocks/centered-hero-block/components/centered-hero-block';

export default function HomePage() {
  return (
    <div className='animate-appear'>
      <CenteredHeroBlock
        badgeIcon={Component}
        badgeText='Accelerate Your Landing Page Development'
        headingText='Build Landing Pages Faster with Olive UI.'
        headingTextHighliged='Pre-built Components. Shadcn UI-based.'
        descriptionTextStart='Improve your landing page development speed'
        descriptionTextHighlighted='by leveraging Olive UI'
        descriptionTextEnd='– a collection of pre-built blocks based on Shadcn UI.'
        listItems={[
          'Pre-built, extendable blocks for a faster development process.',
          'Built on top of Shadcn UI for a modern design system.',
          'Customizable, compliant with the WCAG 2.1 AA standard.',
        ]}
        ctaButtonText='Get Started Now'
      />
    </div>
  );
}
