import { xai } from "@ai-sdk/xai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    // Extract the messages from the body of the request
    const { messages } = await req.json()

    // Call Grok model
    const result = streamText({
      model: xai("grok-2"),
      messages,
      system:
        "You are a helpful assistant for Nexus Solutions, a company that provides cloud solutions and AI services to help businesses transform their customer experience. Be professional, knowledgeable, and helpful. Keep responses concise and relevant to business technology, cloud solutions, and AI services.",
    })

    // Respond with the stream
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
