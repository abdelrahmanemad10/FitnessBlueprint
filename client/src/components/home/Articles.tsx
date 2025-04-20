import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/lib/workouts";
import { Star, StarHalf } from "lucide-react";

export function Articles() {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="fill-current" />}
      </div>
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            READ OUR <span className="text-primary">ARTICLES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Insights and education to help you maximize your fitness journey.
            Learn from our experience and avoid common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-display text-2xl mb-3 text-primary">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-sm text-foreground">{article.author.name}</div>
                      <div className="text-xs text-muted-foreground">{article.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {renderRating(article.rating)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
