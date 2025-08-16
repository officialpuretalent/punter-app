export interface OperatorData {
  name: string;
  bannerImageUrl: string;
  displayOdds: number;
  stake: number;
}

interface OperatorCardProps {
  operator: OperatorData;
  onSelect: (operator: OperatorData) => void;
}

export function OperatorCard({ operator, onSelect }: OperatorCardProps) {
  return (
    <div
      onClick={() => onSelect(operator)}
      className="flex-shrink-0 w-32 sm:w-36 overflow-hidden border rounded-2xl bg-card shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      {/* Top section with background image */}
      <div
        style={{ backgroundImage: `url(${operator.bannerImageUrl})` }}
        // We can make the banner a little shorter on small screens
        className="relative flex items-center justify-center h-16 sm:h-20 bg-cover bg-center"
      ></div>

      {/* Bottom section with odds */}
      {/* Use less padding on mobile, and more on larger screens */}
      <div className="p-3 sm:p-4 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">Odds</p>
        {/* Make the odds font size adaptive */}
        <p className="text-xl sm:text-2xl font-bold text-foreground">
          {operator.displayOdds.toFixed(2)}
        </p>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
          Bet
        </p>
        {/* Make the stake font size adaptive */}
        <p className="text-base sm:text-lg font-semibold text-foreground">
          R{operator.stake.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
