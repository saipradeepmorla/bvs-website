import React from 'react'
import { FaStar } from 'react-icons/fa';


const ReviewCard = ({ review }) => {
    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ));
    };
  
    return (
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg flex items-start transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="hidden sm:block mr-4 sm:mr-6">
          {review.image ? (
            <img src={review.image} alt={review.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold text-xl sm:text-2xl overflow-hidden">
              <span className="inline-block w-full h-full flex items-center justify-center">
                {review.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{review.title}</h3>
          <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
          <div className="flex items-center">
            <div className="flex mr-2">{renderStars(review.stars)}</div>
            <p className="text-sm font-medium">{review.name}</p>
          </div>
        </div>
      </div>
    );
  };

export default ReviewCard
