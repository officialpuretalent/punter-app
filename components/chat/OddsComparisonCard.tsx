import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export interface OperatorOdds {
  name: string;
  logoUrl: string;
  displayOdds: number;
  stake: number;
}

interface OddsComparisonCardProps {
  operators: OperatorOdds[];
  onOperatorSelect: (operator: OperatorOdds) => void;
}

export function OddsComparisonCard({ operators, onOperatorSelect }: OddsComparisonCardProps) {
  return (
    <Card className="w-full max-w-sm border-border">
      <CardContent className="p-0">
        {operators.map((operator, index) => (
          <div
            key={operator.name}
            onClick={() => onOperatorSelect(operator)}
            className={`flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
              index < operators.length - 1 ? "border-b" : ""
            }`}
          >
            <Image src={operator.logoUrl} alt={`${operator.name} logo`} width={80} height={24} className="object-contain" />
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                Odds <span className="font-bold text-foreground">{operator.displayOdds.toFixed(2)}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Bet <span className="font-bold text-foreground">R{operator.stake.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}