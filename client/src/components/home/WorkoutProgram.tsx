import { useState } from "react";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { workoutTabs } from "@/lib/workouts";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function WorkoutProgram() {
  const [activeTab, setActiveTab] = useState("upper");

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            YOUR <span className="text-primary">TRAINING PLAN</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Customized training programs designed to transform your body and elevate your fitness level.
            Select your workout focus below:
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-card rounded-lg">
            {workoutTabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-display tracking-wide text-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent hover:text-primary"
                }`}
              >
                {tab.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        <div className="tab-content">
          {workoutTabs.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.exercises.map((exercise, index) => (
                  <ExerciseCard key={index} {...exercise} />
                ))}

                {/* Personal Progress Photo */}
                <div className="md:col-span-2 lg:col-span-3 mt-8">
                  <div className="bg-card p-8 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent z-10"></div>
                    <div className="relative z-20 max-w-xl">
                      <h3 className="font-display text-3xl mb-4">
                        <span className="text-primary">{tab.progressPhoto.title}</span>
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {tab.progressPhoto.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 text-primary hover:text-primary/80 transition-colors"
                        asChild
                      >
                        <a href="#gallery" className="flex items-center">
                          View all progress photos <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <img
                      src={tab.progressPhoto.image}
                      alt={`Personal ${tab.id} Body Progress`}
                      className="absolute right-0 top-0 h-full w-2/3 object-cover object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
