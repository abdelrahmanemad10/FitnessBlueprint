export function Stats() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="font-display text-4xl text-primary mb-2">120+</div>
            <div className="text-muted-foreground">Members Trained</div>
          </div>
          <div className="p-6">
            <div className="font-display text-4xl text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="font-display text-4xl text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Custom Programs</div>
          </div>
          <div className="p-6">
            <div className="font-display text-4xl text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
