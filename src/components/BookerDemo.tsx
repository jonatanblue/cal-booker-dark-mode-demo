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
  const customClassNames = {
    // Whole component wrapper
    bookerContainer: "bg-gray-900 text-white",

    // Event meta section
    eventMetaCustomClassNames: {
      eventMetaContainer: "bg-gray-800 text-white",
      eventMetaTitle: "text-white",
      eventMetaTimezoneSelect: "bg-gray-700 text-white border border-gray-600",
    },

    // Date picker section
    datePickerCustomClassNames: {
      datePickerContainer: "bg-gray-800 text-white",
      datePickerTitle: "text-white",
      datePickerDays: "text-gray-300",
      datePickerDate: "bg-gray-700 text-white border border-gray-600 hover:bg-gray-600",
      datePickerDatesActive: "bg-purple-700 text-white",
      datePickerToggle: "text-white hover:text-purple-400",
    },

    // Available time slots section
    availableTimeSlotsCustomClassNames: {
      availableTimeSlotsContainer: "bg-gray-800 text-white",
      availableTimeSlotsHeaderContainer: "bg-gray-800 text-white",
      availableTimeSlotsTitle: "text-white",
      availableTimeSlotsTimeFormatToggle: "bg-gray-700 text-white border border-gray-600",
      availableTimes: "bg-gray-700 text-white border border-gray-600 hover:bg-gray-600",
    },

    // Confirmation buttons
    confirmStep: {
      confirmButton: "bg-purple-700 text-white hover:bg-purple-600",
      backButton: "text-purple-400 hover:bg-gray-700 hover:text-white",
    },
  };


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
        customClassNames={customClassNames}
      />
    </CalProvider>
  );
}
