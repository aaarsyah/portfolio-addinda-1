import { Code, Palette, PenTool, Smartphone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What I Offer</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional services tailored to your needs with a focus on quality and attention to detail.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <Card className="animate-fade-in animate-delay-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Palette className="h-12 w-12 text-primary mb-2" />
              <CardTitle>UI/UX Design</CardTitle>
              <CardDescription>
                Custom websites built with modern technologies that are fast, responsive, and user-friendly. User-centered design that enhances user experience and drives engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>User Interface Design</li>
                <li>User Experience (UX) Research & Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-in animate-delay-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Smartphone className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Mobile Development</CardTitle>
              <CardDescription>
                Building high-performance mobile applications with seamless user experiences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Mobile Application Development</li>
                <li>API Integration & Backend Connectivity</li>
                <li>MVVM Architecture & Clean Code</li>
                <li>Push Notifications & Firebase Services</li>
                <li>Applied Machine Learning Model in Mobile Apps</li>
                <li>Performance Optimization & Testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

