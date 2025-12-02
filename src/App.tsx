import './App.css';
import { Navbar, Footer } from '@/Navigation';
import { Hero } from '@/Hero';
import { Banner1 } from '@/Banners';
import { Features } from '@/Content';
import { Newsletter } from '@/Forms';
import { BlogCard } from '@/Cards';
import { Button } from '@/components/ui';
import { Grid, Section } from '@/Layout';

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Banner1 />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="PMSI Component Library"
        subtitle="Built with ShadCN + Relume"
        description="A fully-featured React component library with Client-First naming conventions and Webflow DevLink integration."
        ctaButtons={
          <>
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Docs</Button>
          </>
        }
      />

      {/* Features Section */}
      <Features
        tagline="Features"
        heading="What's Included"
        description="Everything you need to build beautiful, consistent UIs."
        columns={3}
        features={[
          {
            title: "ShadCN Primitives",
            description: "Button, Input, Card, Badge, and more - all fully typed and customizable."
          },
          {
            title: "Client-First Naming",
            description: "Follows Webflow's Client-First methodology for consistent, scalable CSS."
          },
          {
            title: "Webflow DevLink",
            description: "Export components directly to Webflow Designer with proper prop mapping."
          },
          {
            title: "React 19 Ready",
            description: "Built for the latest React with full TypeScript support."
          },
          {
            title: "Relume Design Tokens",
            description: "Uses Relume's Tailwind preset for consistent spacing, typography, and colors."
          },
          {
            title: "Git Workflow",
            description: "Includes contributing guide, PR templates, and AI agent prompts."
          }
        ]}
      />

      {/* Blog Cards Section */}
      <Section padding="medium">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Blog</p>
          <h2 className="heading-style-h2 mb-4">Latest Articles</h2>
        </div>
        <Grid columns={3} gap="medium">
          <BlogCard
            title="Getting Started with PMSI Components"
            excerpt="Learn how to set up and use the component library in your projects."
            category="Tutorial"
            date="Dec 2, 2024"
          />
          <BlogCard
            title="Client-First CSS Naming Convention"
            excerpt="Understanding the naming patterns that make your CSS scalable."
            category="Best Practices"
            date="Dec 1, 2024"
          />
          <BlogCard
            title="Webflow DevLink Integration"
            excerpt="How to export your React components to Webflow Designer."
            category="Integration"
            date="Nov 30, 2024"
          />
        </Grid>
      </Section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
