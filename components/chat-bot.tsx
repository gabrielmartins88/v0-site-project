"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Oi! Tudo bem? Eu sou o Agente X, da Nexus Solutions, e estou aqui pra ajudar seu WhatsApp a trabalhar mais para você! Me conta, o que mais te toma tempo no atendimento hoje?",
      },
    ],
  })

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 p-0 shadow-lg bg-[#0066cc] hover:bg-[#0052a3]"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden z-50 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        {/* Chat header */}
        <div className="bg-[#0a192f] text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <h3 className="font-medium">Agente X</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full hover:bg-[#0066cc]/20 text-white"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat messages */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex flex-col max-w-[80%] rounded-lg p-3",
                message.role === "user" ? "bg-[#0066cc] text-white ml-auto" : "bg-gray-100 text-gray-800",
              )}
            >
              <span className="text-sm">{message.content}</span>
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-100 text-gray-800 max-w-[80%] rounded-lg p-3">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          )}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="bg-[#0066cc] hover:bg-[#0052a3]"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
