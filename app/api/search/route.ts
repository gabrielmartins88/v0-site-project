import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

export const maxDuration = 30

// Mock database of product/service information
const productInfo = [
  {
    id: "cloud-platform",
    name: "Cloud Platform",
    description: "Our unified cloud platform helps businesses manage customer interactions across all channels.",
    features: ["Multi-channel support", "Real-time analytics", "Automated workflows", "Custom integrations"],
  },
  {
    id: "ai-solutions",
    name: "AI Solutions",
    description:
      "Leverage the power of artificial intelligence to enhance customer experiences and automate processes.",
    features: ["Predictive analytics", "Natural language processing", "Sentiment analysis", "Automated responses"],
  },
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    description: "Gain deep insights into customer behavior and preferences with our advanced analytics tools.",
    features: ["Customer journey mapping", "Behavior tracking", "Conversion optimization", "Personalization"],
  },
  {
    id: "integration-services",
    name: "Integration Services",
    description: "Seamlessly connect our solutions with your existing systems and third-party applications.",
    features: ["API connectivity", "Custom development", "Legacy system integration", "Data migration"],
  },
  {
    id: "support-services",
    name: "Support Services",
    description: "24/7 technical support and consulting to ensure your systems run smoothly.",
    features: ["24/7 technical support", "Implementation consulting", "Training programs", "Dedicated account manager"],
  },
]

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query || query.trim() === "") {
      return new Response(JSON.stringify({ results: [] }), {
        headers: { "Content-Type": "application/json" },
      })
    }

    // Convert product info to a string for context
    const productContext = productInfo
      .map(
        (product) =>
          `${product.id}: ${product.name} - ${product.description} - Features: ${product.features.join(", ")}`,
      )
      .join("\n\n")

    // Use Grok to find relevant products
    const { text } = await generateText({
      model: xai("grok-2"),
      prompt: `Given the following query: "${query}" and these products/services:
      
${productContext}

Return a JSON array of the most relevant product IDs, with a relevance score (0-100) and a brief explanation of why it's relevant. Format:
[
  {"id": "product-id", "score": 95, "reason": "Brief explanation of relevance"},
  {"id": "another-product-id", "score": 80, "reason": "Brief explanation of relevance"}
]

Only include products with a relevance score above 50. Return valid JSON only.`,
    })

    // Parse the response
    let relevantProducts = []
    try {
      // Extract JSON from the response (in case there's any extra text)
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        relevantProducts = JSON.parse(jsonMatch[0])
      } else {
        relevantProducts = JSON.parse(text)
      }
    } catch (error) {
      console.error("Error parsing Grok response:", error)
      console.log("Raw response:", text)
      return new Response(JSON.stringify({ error: "Failed to parse search results" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Get the full product details for the relevant products
    const results = relevantProducts.map((relevantProduct) => {
      const product = productInfo.find((p) => p.id === relevantProduct.id)
      return {
        ...product,
        score: relevantProduct.score,
        reason: relevantProduct.reason,
      }
    })

    return new Response(JSON.stringify({ results }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in search API:", error)
    return new Response(JSON.stringify({ error: "Failed to process search request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
