export const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and tagline */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">access+</h3>
            <p className="text-muted-foreground max-w-md">
              Votre agence d'audit et de conseil en accessibilité numérique en Île-de-France
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>123 Avenue de la République</p>
              <p>75011 Paris, France</p>
              <p className="mt-4">
                <a href="mailto:contact@accessplus.fr" className="hover:text-foreground transition-colors">
                  contact@accessplus.fr
                </a>
              </p>
              <p>
                <a href="tel:+33123456789" className="hover:text-foreground transition-colors">
                  +33 1 23 45 67 89
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-left">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} access+ • Accessibilité Numérique • Île-de-France • Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
};
