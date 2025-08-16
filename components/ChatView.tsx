// components/ChatView.tsx
"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { OperatorCard, OperatorData } from "./chat/OperatorCard";

const mockMessages = [
  {
    type: "user",
    text: "I want to place a multi-bet with the second half being the highest scoring in the Lions vs Australia rugby test, Scottie Scheffler to win the Masters, and England to win the cricket test against India this weekend. Who has the best odds?",
  },
  {
    type: "ai",
    text: "Solid betslip - bold moves across three sports. I like it! I've scanned the top bookies - here are your options.",
    oddsData: [
      {
        name: "Playa Bets",
        bannerImageUrl: "/operator-banner/playa-bets-banner.png",
        displayOdds: 22.63,
        stake: 100,
      },
      {
        name: "Betway",
        bannerImageUrl: "/operator-banner/betway-banner.jpg",
        displayOdds: 22.2,
        stake: 100,
      },
      {
        name: "Hollywoodbets",
        bannerImageUrl: "/operator-banner/hollywoodbets-banner.jpg",
        displayOdds: 21.93,
        stake: 100,
      },
    ],
  },
  // Adding more messages to demonstrate scrolling
  {
    type: "user",
    text: "Thanks! Can you show me the payout for a R250 stake?",
  },
  {
    type: "ai",
    text: "Of course, I've updated the potential payouts for a R250 stake on each of the bookmakers.",
    oddsData: [
      {
        name: "Playa Bets",
        bannerImageUrl: "/operator-banner/playa-bets-banner.png",
        displayOdds: 22.63,
        stake: 250,
      },
      {
        name: "Betway",
        bannerImageUrl: "/operator-banner/betway-banner.jpg",
        displayOdds: 22.2,
        stake: 250,
      },
      {
        name: "Hollywoodbets",
        bannerImageUrl: "/operator-banner/hollywoodbets-banner.jpg",
        displayOdds: 21.93,
        stake: 250,
      },
    ],
  },
];

export function ChatView() {
  const handleOperatorSelect = (operator: OperatorData) => {
    console.log("Selected Operator:", operator.name);
    alert(
      `You selected ${operator.name}. The next step would be to show the betslip.`
    );
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header is unchanged - it will be sticky */}
      <header className="flex items-center justify-between p-4 border-b shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
            <span className="text-2xl font-bold text-white">P</span>
          </div>
          <h1 className="text-xl font-bold">Punter.</h1>
        </div>
      </header>

      {/* THE ONLY CHANGE IS HERE: We add min-h-0 to the ScrollArea */}
      <ScrollArea className="flex-1 p-4 min-h-0">
        <div className="text-center text-xs text-muted-foreground mb-4">
          Punter V1.0.2
        </div>
        <div className="flex flex-col gap-6">
          {mockMessages.map((msg, index) => (
            <div key={index}>
              {msg.type === "user" && (
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-blue-600 text-white p-4 rounded-2xl rounded-br-lg">
                    <p className="leading-snug">{msg.text}</p>
                  </div>
                </div>
              )}
              {msg.type === "ai" && (
                <div className="relative">
                  <div className="flex flex-col w-full gap-2">
                    <div className="bg-slate-100 text-foreground p-4 rounded-2xl rounded-bl-lg max-w-[80%] flex gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 shrink-0">
                        <span className="text-sm text-white text-semibold">
                          P
                        </span>
                      </div>
                      <p className="leading-snug">{msg.text}</p>
                    </div>
                    <div className="flex gap-3 pb-2 overflow-x-auto">
                      {msg.oddsData?.map((operator) => (
                        <OperatorCard
                          key={operator.name}
                          operator={operator}
                          onSelect={handleOperatorSelect}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Chat Area - it will be sticky */}
      <footer className="p-4 border-t bg-background shrink-0">
        <div className="flex items-center w-full px-2 border rounded-xl bg-slate-100">
          <Input
            placeholder="Message"
            className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
