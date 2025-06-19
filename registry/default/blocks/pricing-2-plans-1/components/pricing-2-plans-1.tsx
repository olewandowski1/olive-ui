import { Check, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/registry/default/lib/utils';
import { Badge } from '@/registry/default/ui/badge';
import { Button } from '@/registry/default/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/registry/default/ui/card';

import { MaxWidthWrapper } from './max-width-wrapper';

type PricingPlan = {
  name: string;
  price: string;
  pricePeriod: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
};

type Pricing2Plans1Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  pricingPlans?: PricingPlan[];
  pricingCaption?: string;
};

export default function Pricing2Plans1({
  badgeText = 'Pricing Plans',
  headingText = 'Choose the Perfect Plan for Your Needs',
  sectionDescription = 'Select from our flexible pricing options designed to scale with your business. All plans include our core features with varying levels of support and resources.',
  pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      pricePeriod: '/month',
      description:
        'Perfect for individuals and small teams getting started with essential features.',
      features: [
        'Up to 10 projects',
        '25 GB storage',
        'Email support',
        'Standard templates',
        'Mobile app access',
        'Basic analytics',
      ],
      ctaText: 'Get Started',
      ctaLink: '#',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      pricePeriod: '/month',
      description:
        'Ideal for growing teams and businesses that need advanced features and priority support.',
      features: [
        'Unlimited projects',
        '100 GB storage',
        'Priority support',
        'Advanced templates',
        'Mobile app access',
        'Team collaboration tools',
        'Advanced analytics',
        'Custom integrations',
      ],
      ctaText: 'Get Started',
      ctaLink: '#',
      popular: true,
    },
  ],
  pricingCaption = 'All plans include a 7-day free trial. No credit card required.',
}: Pricing2Plans1Props) {
  return (
    <section aria-labelledby='pricing-heading' role='region'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='pricing-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md mx-auto text-center text-base/7 text-pretty text-foreground/80'>
            {sectionDescription}
          </p>

          <div className='grid w-full max-w-4xl gap-6 mt-12 md:grid-cols-2 md:gap-8'>
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn('relative flex flex-col', {
                  'border-primary shadow-lg lg:scale-105 bg-gradient-to-br from-primary/1 via-primary/3 to-primary/1':
                    plan.popular,
                  'border-border': !plan.popular,
                })}
              >
                {plan.popular && (
                  <div className='absolute -translate-x-1/2 -top-3 left-1/2'>
                    <Badge className='flex items-center gap-1 shadow-lg bg-primary text-primary-foreground'>
                      <Star
                        className='w-3 h-3 fill-current'
                        aria-hidden='true'
                      />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className='space-y-2 text-start sm:text-center sm:pb-4'>
                  <CardTitle className='text-xl font-bold tracking-tighter text-pretty sm:text-2xl'>
                    {plan.name}
                  </CardTitle>
                  <CardDescription className='text-sm text-pretty text-foreground/80'>
                    {plan.description}
                  </CardDescription>
                  <div className='md:mt-2'>
                    <span className='text-4xl font-bold tracking-tighter sm:text-5xl'>
                      {plan.price}
                    </span>
                    <span className='text-xs sm:text-sm text-muted-foreground'>
                      {plan.pricePeriod}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className='flex-grow space-y-4'>
                  <ul className='space-y-3'>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-center gap-2 text-sm text-foreground/80'
                      >
                        <Check
                          className='flex-shrink-0 w-4 h-4 text-primary'
                          aria-hidden='true'
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    size='lg'
                    className={cn('w-full', {
                      'bg-primary hover:bg-primary/90': plan.popular,
                    })}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={plan.ctaLink}>
                      {plan.ctaText}
                      <ChevronRight
                        className='-ms-1 opacity-60'
                        size={16}
                        aria-hidden='true'
                      />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className='mt-4 text-sm text-center text-foreground/80'>
            {pricingCaption}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
