import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Writing Tools",
    description:
      "Craft your thoughts with a smooth editor supporting markdown, formatting, and structure.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Receive thoughtful prompts that help you reflect deeply and write more consistently.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Every word stays protected with strong, privacy-focused architecture.",
  },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">

      {/* NIGHTOWL — main heading, slightly bigger */}
<h2 className="gradient-title text-6xl md:text-7xl lg:text-8xl mb-2 underline decoration-blue-600 decoration-2 underline-offset-8">
  NightOwl
</h2>


{/* SUBTITLE — slightly smaller */}
<h1 className="gradient-title text-4xl md:text-5xl lg:text-6xl mb-6">
  Write in Peace. <br /> Reflect with Ease.
</h1>


        {/* SUBTEXT */}
        <p className="hidden md:block text-base md:text-lg text-blue-900 mb-8">
  Write freely, explore your emotions, and understand your journey through a clean and calming journal space.
</p>


        <div className="relative">
          {/* SUBTLE TOP FADE */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none z-10" />

          {/* PREVIEW CARD */}
          <div className="bg-white rounded-2xl p-4 max-full mx-auto shadow-lg border border-blue-100">
            <div className="border-b border-blue-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-800" />
                <span className="text-blue-900 font-medium">
                  Today&rsquo;s Entry
                </span>
              </div>

              {/* DOTS */}
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-200" />
                <div className="h-3 w-3 rounded-full bg-blue-300" />
                <div className="h-3 w-3 rounded-full bg-blue-400" />
              </div>
            </div>

            {/* content area */}
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                {advice ? advice : "My Thoughts Today"}
              </h3>
              <Skeleton className="h-4 bg-blue-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-blue-100 rounded w-full" />
              <Skeleton className="h-4 bg-blue-100 rounded w-2/3" />
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-blue-900 text-blue-900 hover:bg-blue-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg border border-blue-100">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-semibold text-xl text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-800">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">
              Rich Writing Tools
            </h3>
            <p className="text-lg text-blue-800">
              Express yourself fully with our refined and distraction-free editor:
            </p>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Add links and structure</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-blue-100"></div>
              <div className="h-8 w-8 rounded bg-blue-100"></div>
              <div className="h-8 w-8 rounded bg-blue-100"></div>
            </div>

            <div className="h-4 bg-blue-50 rounded w-3/4"></div>
            <div className="h-4 bg-blue-50 rounded w-full"></div>
            <div className="h-4 bg-blue-50 rounded w-2/3"></div>
            <div className="h-4 bg-blue-50 rounded w-1/3"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
          <div className="space-y-6 md:order-2">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">
              Mood Analytics
            </h3>
            <p className="text-lg text-blue-800">
              Track your emotional journey with insightful analytics:
            </p>

            <ul className="space-y-3 text-blue-800">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Visualize mood trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Understand emotional patterns</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-blue-100 md:order-1">
            <div className="h-40 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg"></div>

            <div className="flex justify-between">
              <div className="h-4 w-16 bg-blue-100 rounded"></div>
              <div className="h-4 w-16 bg-blue-100 rounded"></div>
              <div className="h-4 w-16 bg-blue-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-blue-900 text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-blue-800">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="mt-24">
        <Card className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-xl border border-blue-100">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Begin Your Journaling Journey Today
            </h2>

            <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who&rsquo;ve found clarity, peace, and creativity through journaling.
            </p>

            {/* UPDATED BUTTON - Changed from simple Button to Link */}
            <Link href="/sign-in?redirect_url=/dashboard">
              <Button 
                size="lg" 
                variant="journal" 
                className="animate-bounce bg-blue-700 hover:bg-blue-800 text-white"
              >
                Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
