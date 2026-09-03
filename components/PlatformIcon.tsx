type Props = { platform: string; className?: string };

export function PlatformIcon({ platform, className = "h-5 w-5" }: Props) {
  switch (platform) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.14V9.9H7.5V13h2.76v8h3.24Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16.1 3h-2.7v12.1a2.4 2.4 0 1 1-1.9-2.35V9.9a5.4 5.4 0 1 0 4.6 5.34V9.1a6.3 6.3 0 0 0 3.6 1.14V7.5a3.6 3.6 0 0 1-3.6-3.6V3Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M17.2 3h3.1l-6.8 7.8L21.6 21h-6.2l-4.4-5.7L5.9 21H2.8l7.3-8.3L2.6 3h6.3l4 5.3L17.2 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l10 14.3Z" />
        </svg>
      );
  }
}
