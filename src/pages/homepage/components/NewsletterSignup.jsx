import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email address is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: "Bell",
      title: "Safety Alerts",
      description: "Get notified about fire safety recalls and important updates"
    },
    {
      icon: "BookOpen",
      title: "Expert Tips",
      description: "Monthly fire safety tips and best practices from our experts"
    },
    {
      icon: "Tag",
      title: "Exclusive Offers",
      description: "Special discounts on equipment and services for subscribers"
    },
    {
      icon: "Calendar",
      title: "Maintenance Reminders",
      description: "Automated reminders for equipment inspections and maintenance"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to Our Fire Safety Community!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for subscribing to our newsletter. You'll receive your first fire safety 
              tips and updates within the next 24 hours.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-primary mr-2" />
                  <span>Check your email for confirmation</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Gift" size={16} className="text-primary mr-2" />
                  <span>Receive your welcome discount code</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="text-primary mr-2" />
                  <span>Get monthly safety tips</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Bell" size={16} className="text-primary mr-2" />
                  <span>Stay updated on safety alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Icon name="Mail" size={16} className="mr-2" />
              Stay Informed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Fire Safety Newsletter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the latest fire safety tips, equipment updates, and exclusive offers delivered 
              straight to your inbox. Stay protected with expert insights.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  loading={isLoading}
                  iconName="Send"
                  iconPosition="right"
                  className="sm:w-auto"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Users" size={16} className="mr-2 text-primary" />
                <span>5,000+ Subscribers</span>
              </div>
              <div className="flex items-center">
                <Icon name="Star" size={16} className="mr-2 text-yellow-400" />
                <span>4.9/5 Content Rating</span>
              </div>
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-2 text-green-500" />
                <span>No Spam Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;