export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border" role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-6 py-6">
        <a href="#hero" className="text-3xl md:text-4xl font-display font-bold">
          <span className="hidden md:inline">access+</span>
          <span className="md:hidden">a+</span>
        </a>
      </div>
    </nav>
  );
};
