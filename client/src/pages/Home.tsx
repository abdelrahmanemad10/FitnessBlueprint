import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WorkoutProgram } from "@/components/home/WorkoutProgram";
import { WeeklySchedule } from "@/components/home/WeeklySchedule";
import { Gallery } from "@/components/home/Gallery";
import { SubscriptionPlans } from "@/components/home/SubscriptionPlans";
import { Articles } from "@/components/home/Articles";
import { ContactForm } from "@/components/home/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header>
        <Hero />
      </Header>
      <Stats />
      <WorkoutProgram />
      <WeeklySchedule />
      <Gallery />
      <SubscriptionPlans />
      <Articles />
      <ContactForm />
      <Footer />
    </div>
  );
}
