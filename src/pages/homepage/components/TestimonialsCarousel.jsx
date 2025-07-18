import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Facility Manager",
      company: "Metro Office Complex",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: `AutoFireSafe transformed our building's fire safety infrastructure completely. Their team conducted a thorough assessment and implemented a comprehensive solution that exceeded all compliance requirements. The 24/7 monitoring system gives us peace of mind, and their response time during our recent false alarm was impressive.`,
      project: "Complete Fire Safety Overhaul",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Safety Director",
      company: "Industrial Manufacturing Corp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: `Working with AutoFireSafe has been exceptional. They understand industrial fire safety requirements and delivered a customized solution for our manufacturing facility. The sprinkler system installation was completed ahead of schedule, and their maintenance program keeps everything running perfectly.`,
      project: "Industrial Sprinkler System",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Property Owner",
      company: "Residential Complex",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: `I couldn't be happier with the fire safety upgrades AutoFireSafe provided for my apartment building. They handled everything from permits to installation, and the wireless smoke detection system they installed is state-of-the-art. Tenants feel much safer now.`,
      project: "Residential Fire Safety Upgrade",
      date: "October 2024"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Downtown Bistro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: `The kitchen fire suppression system AutoFireSafe installed has been flawless. Their team understood the unique challenges of restaurant fire safety and provided a solution that meets all health department requirements. The monthly maintenance service is thorough and professional.`,
      project: "Kitchen Fire Suppression",
      date: "September 2024"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "School Administrator",
      company: "Riverside Elementary",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: `AutoFireSafe's comprehensive fire safety assessment and upgrades for our school were outstanding. They worked around our schedule to minimize disruption to classes, and the new emergency lighting and alarm systems are exactly what we needed for student safety.`,
      project: "School Fire Safety Upgrade",
      date: "August 2024"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Customer Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what property owners, facility managers, 
            and business owners say about our fire safety solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar and Info */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonials[currentIndex].rating}.0
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed mb-4">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Project Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Briefcase" size={14} className="mr-1" />
                    {testimonials[currentIndex].project}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {testimonials[currentIndex].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full shadow-soft"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-10 h-10 rounded-full shadow-soft"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;