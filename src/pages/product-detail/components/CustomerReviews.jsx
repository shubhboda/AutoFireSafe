import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' }
  ];

  const ratingFilters = [
    { value: 'all', label: 'All Ratings' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      distribution[review.rating]++;
    });
    return distribution;
  };

  const ratingDistribution = getRatingDistribution();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="bg-muted/30 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold text-foreground font-mono">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center md:justify-start space-x-1 mt-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Based on {totalReviews} reviews
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = ratingDistribution[rating];
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                
                return (
                  <div key={rating} className="flex items-center space-x-2 text-sm">
                    <span className="w-8 text-muted-foreground">{rating}★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-warning h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-muted-foreground text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-md text-sm bg-card"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-3 py-2 border border-border rounded-md text-sm bg-card"
          >
            {ratingFilters.map(filter => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <Button variant="outline" size="sm" iconName="PenTool" iconPosition="left">
          Write a Review
        </Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-foreground">{review.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(review.date)}
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                {renderStars(review.rating)}
              </div>
            </div>

            <div className="mb-3">
              <h4 className="font-medium text-foreground mb-1">{review.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>
            </div>

            {review.verified && (
              <div className="flex items-center space-x-1 text-xs text-success">
                <Icon name="CheckCircle" size={14} />
                <span>Verified Purchase</span>
              </div>
            )}

            {review.helpful > 0 && (
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground transition-smooth">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="text-xs text-muted-foreground hover:text-foreground transition-smooth">
                    Report
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        <Button variant="outline" iconName="ChevronDown" iconPosition="right">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CustomerReviews;