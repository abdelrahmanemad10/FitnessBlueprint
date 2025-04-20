import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl mb-4 leading-tight">
          <span className="text-primary">STRONGER</span> EVERY DAY <br />
          <span className="text-primary">FITTER</span> FOREVER
        </h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground">
          Where fitness meets inspiration. Join us on a transformative journey to unleash your true potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider text-lg"
          >
            <a href="#program">START TRAINING</a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 font-display tracking-wider text-lg"
          >
            <a href="#contact">CONTACT US</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
