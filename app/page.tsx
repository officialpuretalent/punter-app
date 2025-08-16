// app/page.tsx
import { ChatView } from "@/components/ChatView";

export default function Home() {
  return (
    // We use bg-slate-50 to match the chat area background for a seamless look
    <main className="flex justify-center w-full bg-slate-50">
      <div className="w-full max-w-[512px] h-dvh bg-background shadow-lg">
        <ChatView />
      </div>
    </main>
  );
}