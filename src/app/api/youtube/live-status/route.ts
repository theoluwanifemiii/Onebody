import { NextResponse } from 'next/server';

export const revalidate = 300; // 5-minute server cache

// Service windows in Lagos time (WAT = UTC+1, no DST)
// Buffer: 30 min before start, 90 min after scheduled end
const SERVICE_WINDOWS = [
  { day: 0, startHour: 9,  startMin: 0,  endHour: 12, endMin: 0  }, // Sunday   9:00 AM – 12:00 PM
  { day: 3, startHour: 17, startMin: 30, endHour: 20, endMin: 30 }, // Wednesday 5:30 PM –  8:30 PM
];

function isWithinServiceWindow(): boolean {
  // Convert current UTC time to WAT (UTC+1)
  const now = new Date();
  const watOffset = 60; // minutes
  const wat = new Date(now.getTime() + watOffset * 60 * 1000);

  const day = wat.getUTCDay();
  const hour = wat.getUTCHours();
  const min = wat.getUTCMinutes();
  const totalMin = hour * 60 + min;

  return SERVICE_WINDOWS.some((w) => {
    if (w.day !== day) return false;
    const windowStart = w.startHour * 60 + w.startMin;
    const windowEnd = w.endHour * 60 + w.endMin;
    return totalMin >= windowStart && totalMin <= windowEnd;
  });
}

export async function GET() {
  // Outside service windows: return offline immediately, no API call
  if (!isWithinServiceWindow()) {
    return NextResponse.json({ live: false, videoId: null });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json({ live: false, videoId: null });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return NextResponse.json({ live: false, videoId: null });
    }

    const data = await res.json();
    const videoId: string | null = data.items?.[0]?.id?.videoId ?? null;
    return NextResponse.json({ live: !!videoId, videoId });
  } catch {
    return NextResponse.json({ live: false, videoId: null });
  }
}
