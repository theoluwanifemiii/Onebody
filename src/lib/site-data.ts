export const CHURCH_EMAIL = 'hello@onebodychurch.org';
export const CHURCH_ADDRESS = '20 Adebiyi Street, off Lawani Street, Akoka Yaba, Lagos';
export const CHURCH_ADDRESS_LINES = ['20 Adebiyi Street', 'off Lawani Street', 'Akoka Yaba, Lagos'];
export const CHURCH_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=20+Adebiyi+Street+off+Lawani+Street+Akoka+Yaba+Lagos';

export const FEATURED_VIDEO_ID = 'Tp8Qa_5WRpQ';
export const FEATURED_VIDEO_URL = `https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`;

export const YOUTUBE_CHANNEL_HANDLE = '@onebodychurchng';
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@onebodychurchng';
export const YOUTUBE_STREAMS_URL = 'https://www.youtube.com/@onebodychurchng/streams';

// Find this in YouTube Studio → Settings → Channel → Basic info. Starts with "UC".
export const YOUTUBE_CHANNEL_ID = 'REPLACE_WITH_YOUR_CHANNEL_ID';


export const SERVICE_SCHEDULE = [
  {
    name: 'Passion Service',
    day: 'Sunday Morning',
    time: '9:00 AM',
    accentClass: 'text-orange-500',
    icon: 'sun'
  },
  {
    name: 'Hope Nights',
    day: 'Wednesday Evening',
    time: '6:00 PM',
    accentClass: 'text-brand-500',
    icon: 'moon'
  }
] as const;
