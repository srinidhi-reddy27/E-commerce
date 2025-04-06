// src/components/ReviewAccordion.js
import React, { useState } from 'react';
import './ReviewAccordion.css'; // We will update this CSS file

// Helper function to generate star icons
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // Or floor/ceil depending on preference
    const emptyStars = totalStars - filledStars;

    return (
        <span className="star-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(filledStars)].map((_, i) => (
                <span key={`filled-${i}`} className="star filled">★</span>
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`} className="star empty">☆</span>
            ))}
        </span>
    );
};


function ReviewAccordion({ reviews }) {
    const [activeIndex, setActiveIndex] = useState(null); // Track which review is open

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle or close if already open
    };

    if (!reviews || reviews.length === 0) {
        return <div className="no-reviews">Be the first to review this product!</div>;
    }

    return (
        <div className="review-accordion-enhanced">
            <h3 className="reviews-main-title">Customer Reviews ({reviews.length})</h3>
            {reviews.map((review, index) => (
                <div key={index} className="accordion-item-enhanced">
                    <button
                        className={`accordion-title-enhanced ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`review-content-${index}`} // Accessibility improvement
                    >
                        <div className="review-summary">
                             <span className="review-user">Reviewed by {review.user}</span>
                             <StarRating rating={review.rating} />
                        </div>
                        <span className="accordion-icon-enhanced">{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    <div
                        id={`review-content-${index}`} // Accessibility improvement
                        role="region" // Accessibility improvement
                        aria-labelledby={`review-title-${index}`} // Needs ID on button span if used
                        className={`accordion-content-enhanced ${activeIndex === index ? 'open' : ''}`}
                        aria-hidden={activeIndex !== index}
                    >
                        <p className="review-comment">{review.comment}</p>
                        {/* Optional: Add review date if available */}
                         {/* <p className="review-date">Reviewed on: {review.date || 'N/A'}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewAccordion;