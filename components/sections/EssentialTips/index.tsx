import { Search, Play, ArrowRight, Calendar, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function EssentialTips() {
  const videoCards = [
    { id: 1},
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Essential tips to kick off and continue growing
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Explore our library of how-to videos, tutorials, and case studies. Learn step by step everything you need to
            know about running the platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input type="text" placeholder="Search" className="pl-10 bg-primary-50 border-border" />
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((card) => (
            <Card key={card.id} className="overflow-hidden border-border bg-card">
              <div className="relative">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
                  <img src="/vid.png" alt="Video thumbnail" className="w-full h-full object-cover" />

                  {/* YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 rounded-lg p-3 shadow-lg">
                      <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Sign up and onboarding</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Evidence-based study methods that can help you learn more effectively and retain information longer.
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 12, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                </div>

                {/* Watch Video Link */}
                <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <span>Watch video</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
