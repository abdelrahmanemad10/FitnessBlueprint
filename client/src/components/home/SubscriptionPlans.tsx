import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { subscriptionPlans } from "@/lib/workouts";

export function SubscriptionPlans() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            CHOOSE YOUR <span className="text-primary">PLAN</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Select the membership option that best fits your goals and commitment level.
            All plans include access to the full training program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.isPopular
                  ? "bg-background border-2 border-primary rounded-lg overflow-hidden transform md:-translate-y-4 relative z-10 shadow-xl shadow-primary/20"
                  : "bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 font-display tracking-wider text-sm">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="font-display text-4xl text-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.included.map((feature, i) => (
                    <li key={`included-${i}`} className="flex items-center">
                      <Check className="text-primary h-4 w-4 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.features.excluded.map((feature, i) => (
                    <li key={`excluded-${i}`} className="flex items-center text-muted-foreground/50">
                      <X className="h-4 w-4 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    plan.isPopular
                      ? "w-full py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider"
                      : "w-full py-3 border border-primary text-primary hover:bg-primary/10 font-display tracking-wider"
                  }
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
