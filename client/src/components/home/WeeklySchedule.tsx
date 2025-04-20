import { useState } from "react";
import { weeklySchedule } from "@/lib/workouts";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function WeeklySchedule() {
  const [schedule, setSchedule] = useState(weeklySchedule);

  const toggleActiveDay = (index: number) => {
    const updatedSchedule = schedule.map((day, i) => {
      if (i === index) {
        return { ...day, isActive: !day.isActive };
      }
      return day;
    });
    setSchedule(updatedSchedule);
  };

  return (
    <section id="schedule" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            AI <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            AI-optimized weekly training plan for maximum results. This carefully balanced schedule
            alternates between upper and lower body training with strategic rest days.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {/* Days of the week */}
            {schedule.map((day) => (
              <div
                key={day.day}
                className="text-center font-display tracking-wide py-2"
              >
                {day.day}
              </div>
            ))}

            {/* Calendar boxes */}
            {schedule.map((day, index) => (
              <div
                key={`day-${index}`}
                className={`calendar-day p-3 md:p-6 border border-border rounded-lg text-center bg-card ${
                  day.isActive ? "active" : ""
                }`}
                onClick={() => toggleActiveDay(index)}
              >
                <div
                  className={`font-display text-lg mb-1 ${
                    day.isRest ? "text-muted-foreground" : "text-primary"
                  }`}
                >
                  {day.workout}
                </div>
                <div
                  className={`text-xs ${
                    day.isRest ? "text-muted-foreground" : "text-muted-foreground"
                  }`}
                >
                  {day.focus}
                </div>
                <div
                  className={`mt-2 text-xs px-2 py-1 ${
                    day.isRest
                      ? "bg-muted rounded-full inline-block text-muted-foreground"
                      : "bg-primary/20 rounded-full inline-block text-primary"
                  }`}
                >
                  {day.duration}
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-12 bg-background p-6 border-border">
            <h3 className="font-display text-2xl mb-4">
              AI <span className="text-primary">TIPS</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Maintain at least 48 hours of rest between training the same muscle groups
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Prioritize sleep (7-9 hours) for optimal recovery and muscle growth
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Adjust training volume based on your recovery capacity and energy levels
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Track your workouts to ensure progressive overload over time
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
