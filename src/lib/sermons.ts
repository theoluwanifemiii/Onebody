export type Sermon = {
  title: string;
  speaker: string;
  date: string;
  series: string;
  youtubeId: string;
};

export function extractYouTubeId(input: string): string {
  if (!input) return '';
  const m1 = input.match(/[?&]v=([^&]+)/);
  if (m1) return m1[1];
  const m2 = input.match(/\/(?:live|embed|shorts|v)\/([^?&/]+)/);
  if (m2) return m2[1];
  return input;
}

export function getAllSermons(): Sermon[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('../../public/data/sermons.json') as Sermon[];
}
