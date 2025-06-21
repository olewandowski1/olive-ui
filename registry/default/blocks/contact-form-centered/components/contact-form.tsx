'use client';

import { CircleAlert, CircleCheck, Loader2 } from 'lucide-react';
import { useActionState } from 'react';

import { cn } from '@/registry/default/lib/utils';
import { Button } from '@/registry/default/ui/button';
import { Checkbox } from '@/registry/default/ui/checkbox';
import { Input } from '@/registry/default/ui/input';
import { Label } from '@/registry/default/ui/label';
import { Textarea } from '@/registry/default/ui/textarea';

import { PolicyModal } from './policy-modal';

export function ContactForm() {
  const [state, action, isPending] = useActionState(
    async () => {
      // Simulate a server action
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate a success or failure response
      // In a real application, you would handle form submission here
      if (Math.random() < 0.5) {
        return {
          success: false,
          message: 'An error occurred. Please try again.',
        };
      }

      // Simulate successful form submission
      // You would typically send the form data to a server here
      return { success: true, message: 'Form submitted successfully!' };
    },
    // Initial state for the action
    { success: false, message: '' }
  );

  return (
    <form
      action={action}
      className='w-full max-w-lg mx-auto space-y-6'
      autoComplete='on'
      noValidate
    >
      {state.message && (
        <div
          role='alert'
          aria-live='assertive'
          className={cn('w-full rounded-lg border p-4 shadow-sm', {
            'border-emerald-500 bg-emerald-500/5': state.success,
            'border-destructive bg-destructive/5': !state.success,
          })}
        >
          <div className='flex items-start gap-2'>
            {state.success ? (
              <CircleCheck
                size={20}
                strokeWidth={2}
                className='text-emerald-500'
                aria-hidden='true'
              />
            ) : (
              <CircleAlert
                size={20}
                strokeWidth={2}
                className='text-destructive'
                aria-hidden='true'
              />
            )}
            <p
              className={cn('text-sm', {
                'text-emerald-500': state.success,
                'text-destructive': !state.success,
              })}
            >
              {state.message}
            </p>
          </div>
        </div>
      )}

      <div className='space-y-4'>
        <div className='space-y-1'>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name'
            required
            disabled={isPending || state.success}
          />
        </div>

        <div className='space-y-1'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            required
            disabled={isPending || state.success}
          />
        </div>

        <div className='space-y-1'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Enter your message'
            className='min-h-[120px] resize-none'
            required
            disabled={isPending || state.success}
          />
        </div>

        <div className='flex items-center gap-2'>
          <Checkbox
            id='acceptPolicy'
            name='acceptPolicy'
            required
            disabled={isPending || state.success}
          />
          <Label
            htmlFor='acceptPolicy'
            className='flex items-center gap-0 text-sm font-normal text-foreground/80'
          >
            By sending a message, you agree to our
            <PolicyModal>
              <span className='ml-1 underline hover:text-foreground'>
                Privacy Policy
              </span>
            </PolicyModal>
            .
          </Label>
        </div>

        <Button
          type='submit'
          className='w-full'
          disabled={isPending || state.success}
        >
          {isPending ? (
            <>
              <Loader2
                size={16}
                strokeWidth={2}
                className='mr-2 animate-spin'
                aria-hidden='true'
              />
              <span>Submitting…</span>
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );
}
