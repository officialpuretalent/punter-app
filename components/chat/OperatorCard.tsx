
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
        className="flex-shrink-0 w-36 overflow-hidden border rounded-2xl bg-card shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        >
        {/* Top section with background image and white square */}
        <div
            style={{ backgroundImage: `url(${operator.bannerImageUrl})` }}
            className="relative flex items-center justify-center h-20 bg-cover bg-center"
        >
        </div>

        {/* Bottom white section with odds */}
        <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">Odds</p>
            <p className="text-2xl font-bold text-foreground">{operator.displayOdds.toFixed(2)}</p>
            <p className="mt-3 text-sm text-muted-foreground">Bet</p>
            <p className="text-lg font-semibold text-foreground">R{operator.stake.toFixed(2)}</p>
        </div>
        </div>
    );
}