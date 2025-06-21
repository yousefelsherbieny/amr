"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const studentId = params.studentId;
  const studentName = searchParams.get("name") || `Student #${studentId}`;
  const [messages, setMessages] = useState([
    { from: "teacher", text: "👩‍🏫 Hello, how can I help you today?" },
    { from: "student", text: "🧑‍🎓 I need help with the math assignment." },
  ]);
  const [input, setInput] = useState("");

  const replies = [
    "Sure, let me explain that topic.",
    "Can you be more specific?",
    "Please check the assignment sheet again.",
    "I'll send you extra material shortly.",
    "Let's schedule a 1-on-1 session.",
    "That’s a great question!",
    "Try solving it step-by-step.",
    "Focus on the formula we used in class.",
    "Do you remember the example we discussed?",
    "I’ll record a voice note for you later.",
    "Keep practicing, you're improving!",
    "Let me rephrase that part for you.",
    "Check the second slide in the lecture.",
    "Great effort, just revise this step.",
    "Almost correct — review the last part.",
    "Can you try it again using a diagram?",
    "Did you check the homework solution file?",
    "I appreciate your enthusiasm.",
    "Take a short break then try again.",
    "Let me know if the video helped.",
    "Try reading the chapter summary.",
    "We’ll revise this together tomorrow.",
    "Don’t worry — mistakes are part of learning.",
    "Use a calculator for this one.",
    "Do you want to schedule office hours?",
    "This is a common misunderstanding, don’t stress.",
    "That part is a bit tricky — I’ll simplify it.",
    "Remember to label your final answer.",
    "You can ask your groupmates too.",
    "Excellent! Now try the next one.",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "student", text: `🧑‍🎓 ${input}` }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prev) => [...prev, { from: "teacher", text: `👩‍🏫 ${randomReply}` }]);
    }, 700);
  };

  return (
    <div className="p-6 w-full space-y-6">
      <h1 className="text-2xl font-bold">Chat with {studentName}</h1>

      <div className="space-y-3 bg-gray-50 border rounded p-4 max-h-[500px] overflow-y-auto w-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded max-w-[80%] ${
              msg.from === "student"
                ? "bg-blue-100 text-right ml-auto"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend} className="bg-purple-600 text-white hover:bg-purple-700">
          Send
        </Button>
      </div>
    </div>
  );
}
