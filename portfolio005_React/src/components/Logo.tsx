export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Simply Furniture"
      role="img"
    >
      {/* "S" monogram rounded square */}
      <rect width="40" height="40" rx="10" y="2" fill="currentColor" />
      <text
        x="20"
        y="28"
        textAnchor="middle"
        fill="white"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fontStyle="italic"
      >
        S
      </text>

      {/* Wordmark */}
      <text
        x="52"
        y="18"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2"
      >
        SIMPLY
      </text>
      <text
        x="52"
        y="34"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        fontWeight="400"
        letterSpacing="4"
      >
        FURNITURE
      </text>
    </svg>
  );
}
