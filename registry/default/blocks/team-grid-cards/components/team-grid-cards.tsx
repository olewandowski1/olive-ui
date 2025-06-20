import { Github, Linkedin, Twitter } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';
import { Button } from '@/registry/default/ui/button';
import { Card, CardContent } from '@/registry/default/ui/card';

import { MaxWidthWrapper } from './max-width-wrapper';

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  featured?: boolean;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

type TeamGridCardsProps = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  teamMembers?: TeamMember[];
};

export default function TeamGridCards({
  badgeText = 'Our Team',
  headingText = 'Meet the People Behind the Project',
  sectionDescription = 'We are a diverse group of professionals dedicated to delivering the best experience for our users. Our team combines expertise in design, development, and customer support to ensure your success.',
  teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      imageUrl: '',
      bio: 'Former VP of Engineering at TechCorp with 15+ years building scalable products.',
      socialLinks: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      imageUrl: '',
      bio: 'Full-stack architect passionate about developer experience and clean code.',
      socialLinks: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      imageUrl: '',
      bio: 'Design systems expert focused on accessibility and user-centered design.',
      socialLinks: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      imageUrl: '',
      bio: 'Open source contributor with expertise in React, TypeScript, and performance.',
      socialLinks: { linkedin: '#', github: '#' },
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager',
      imageUrl: '',
      bio: 'Product strategist with a track record of launching successful B2B platforms.',
      socialLinks: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Alex Johnson',
      role: 'Marketing Director',
      imageUrl: '',
      bio: 'Growth marketing specialist helping developer tools reach their audience.',
      socialLinks: { twitter: '#', linkedin: '#' },
    },
  ],
}: TeamGridCardsProps) {
  return (
    <section aria-labelledby='team-grid-cards-heading' role='region'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 text-center'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='team-grid-cards-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md text-base/7 text-foreground/80'>
            {sectionDescription}
          </p>

          <ul
            role='list'
            className='grid max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'
          >
            {teamMembers.map((member) => (
              <li key={member.name} role='listitem'>
                <Card className='overflow-hidden shadow-md'>
                  <CardContent>
                    <div className='flex flex-col items-center space-y-4'>
                      <Avatar className='size-20'>
                        <AvatarImage
                          src={
                            member.imageUrl || 'https://github.com/shadcn.png'
                          }
                          alt={member.name}
                        />
                        <AvatarFallback>
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className='space-y-2 text-center'>
                        <h3 className='text-lg font-semibold'>{member.name}</h3>
                        <p className='text-sm font-medium text-foreground/80'>
                          {member.role}
                        </p>
                        {member.bio && (
                          <p className='text-sm leading-relaxed text-foreground/80 line-clamp-2'>
                            {member.bio}
                          </p>
                        )}
                      </div>

                      <div className='flex space-x-2'>
                        {member.socialLinks?.twitter && (
                          <Button
                            asChild
                            variant='ghost'
                            size='icon'
                            className='size-8'
                          >
                            <a
                              href={member.socialLinks.twitter}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} Twitter`}
                            >
                              <Twitter className='size-4' aria-hidden='true' />
                            </a>
                          </Button>
                        )}
                        {member.socialLinks?.linkedin && (
                          <Button
                            asChild
                            variant='ghost'
                            size='icon'
                            className='size-8'
                          >
                            <a
                              href={member.socialLinks.linkedin}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <Linkedin className='size-4' aria-hidden='true' />
                            </a>
                          </Button>
                        )}
                        {member.socialLinks?.github && (
                          <Button
                            asChild
                            variant='ghost'
                            size='icon'
                            className='size-8'
                          >
                            <a
                              href={member.socialLinks.github}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} GitHub`}
                            >
                              <Github className='size-4' aria-hidden='true' />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
