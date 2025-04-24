"use client"

import type React from "react"

import { useState } from "react"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SearchResult {
  id: string
  name: string
  description: string
  features: string[]
  score: number
  reason: string
}

export default function IntelligentSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setIsSearching(true)

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          onClick={() => setIsOpen(true)}
        >
          <Search className="h-4 w-4" />
          <span>Search Solutions</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Intelligent Search</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSearch} className="flex gap-2 my-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for solutions, features, or ask a question..."
            className="flex-1"
          />
          <Button type="submit" disabled={isSearching || !query.trim()} className="bg-[#0066cc] hover:bg-[#0052a3]">
            {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          </Button>
        </form>

        {isSearching ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-[#0066cc]" />
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result) => (
              <Card key={result.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{result.name}</CardTitle>
                    <Badge variant="outline" className="bg-[#0066cc]/10">
                      Match: {result.score}%
                    </Badge>
                  </div>
                  <CardDescription>{result.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 italic">{result.reason}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {result.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : query.trim() !== "" && !isSearching ? (
          <div className="text-center py-8 text-gray-500">No results found. Try a different search term.</div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
