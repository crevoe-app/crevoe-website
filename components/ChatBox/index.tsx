"use client"

import { useState, useRef, useEffect } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Minimize2, Maximize2 } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ""

      const assistantMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessageObj])

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        if (chunk) {
          assistantMessage += chunk
          setMessages((prev) =>
            prev.map((msg) => (msg.id === assistantMessageObj.id ? { ...msg, content: assistantMessage } : msg)),
          )
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-[#0092DF] hover:bg-[#0082CF] shadow-lg z-50 p-0 flex items-center justify-center"
          aria-label="Open chat"
        >
          <Image src="/chatbox.svg" alt="Chat" width={24} height={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed inset-0 sm:inset-4 md:bottom-4 md:right-4 md:top-auto md:left-auto md:w-80 md:h-[32rem] lg:w-96 lg:h-[36rem] shadow-2xl z-50 flex flex-col overflow-hidden rounded-none sm:rounded-lg md:rounded-lg bg-background border">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-[#0092DF] text-white flex-shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <Image src="/chatbox.svg" alt="Chat" width={20} height={20} className="flex-shrink-0" />
              <h3 className="font-semibold text-sm sm:text-base truncate">Crevoe Support</h3>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20 hidden md:flex"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X size={16} />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed break-words hyphens-auto ${
                          message.role === "user" ? "bg-[#0092DF] text-white" : "bg-muted text-foreground"
                        }`}
                        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input */}
              <div className="p-3 sm:p-4 bg-white border-t flex-shrink-0 bg-background">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 min-w-0 text-sm sm:text-base"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="bg-[#0092DF] hover:bg-[#0082CF] flex-shrink-0 h-10 w-10 p-0"
                  >
                    <Send size={16} />
                  </Button>
                </form>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  )
}
