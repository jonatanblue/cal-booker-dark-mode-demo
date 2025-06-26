'use client';

import '@calcom/atoms/globals.min.css';
import { CalProvider, Booker } from '@calcom/atoms';

const CAL_CLIENT_ID = process.env.NEXT_PUBLIC_CAL_CLIENT_ID!;
const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME!;
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG!;

if (!CAL_CLIENT_ID || !CAL_USERNAME || !CAL_EVENT_SLUG) {
  throw new Error(`Missing environment variables for Cal.com Booker component: CAL_CLIENT_ID=${CAL_CLIENT_ID}, CAL_USERNAME=${CAL_USERNAME}, CAL_EVENT_SLUG=${CAL_EVENT_SLUG}`);
}

const CAL_API_URL="https://api.cal.com/v2";

export default function BookerDemo() {
  return (
    <CalProvider
      clientId={CAL_CLIENT_ID}
      options={{
        apiUrl: CAL_API_URL,
      }}
    >
      <Booker
        username={CAL_USERNAME}
        eventSlug={CAL_EVENT_SLUG}
        defaultFormValues={{
          name: 'John Doe',
          email: 'john@example.com',
        }}
      />
    </CalProvider>
  );
}
