import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      sender: 'agent',
      name: 'Sarah',
      role: 'Fire Safety Specialist',
      content: `Hello! I'm Sarah, your fire safety specialist. I'm here to help you with any questions about our fire safety equipment, services, or emergency procedures.\n\nHow can I assist you today?`,
      timestamp: new Date(),
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate agent responses
  const agentResponses = [
    "I\'d be happy to help you with that! Let me get you the information you need.",
    "That's a great question about fire safety. Our certified technicians can provide detailed guidance on this.",
    "For emergency situations, please call 911 immediately. For non-emergency fire safety questions, I'm here to help!",
    "We offer comprehensive fire safety solutions including equipment, installation, and maintenance services.",
    "I can connect you with one of our fire safety experts for a detailed consultation. Would you like me to schedule that?",
    "Our team is available 24/7 for emergency services. For regular inquiries, we typically respond within 15 minutes."
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        sender: 'agent',
        name: 'Sarah',
        role: 'Fire Safety Specialist',
        content: agentResponses[Math.floor(Math.random() * agentResponses.length)],
        timestamp: new Date(),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Get a quote", icon: "Calculator" },
    { text: "Emergency services", icon: "Phone" },
    { text: "Schedule inspection", icon: "Calendar" },
    { text: "Product information", icon: "Package" }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-medium animate-pulse">
              1
            </div>
          )}
          
          <Button
            variant="default"
            size="lg"
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full shadow-elevated bg-primary hover:bg-primary/90"
          >
            <Icon name={isOpen ? "X" : "MessageCircle"} size={24} />
          </Button>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card border border-border rounded-lg shadow-elevated z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
              </div>
              <div>
                <div className="font-medium text-sm">Fire Safety Support</div>
                <div className="text-xs opacity-80">
                  {isOnline ? 'Online now' : 'Offline'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  {message.sender === 'agent' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img
                          src={message.avatar}
                          alt={message.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {message.name} • {message.role}
                      </div>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      message.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-border">
              <div className="text-xs text-muted-foreground mb-2">Quick actions:</div>
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setNewMessage(action.text)}
                    className="text-xs bg-muted hover:bg-muted/80 rounded-full px-3 py-1 flex items-center space-x-1 transition-colors"
                  >
                    <Icon name={action.icon} size={12} />
                    <span>{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm"
              />
              <Button
                variant="default"
                size="sm"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;