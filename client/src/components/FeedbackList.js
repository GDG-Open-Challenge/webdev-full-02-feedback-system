import React from 'react';
import './FeedbackList.css';

function FeedbackList({ feedbacks, onEdit, onDelete }) {
  return (
    <div className="feedback-list-container">
      <h2>All Feedback ({feedbacks.length})</h2>
      <div className="feedback-list">
        {feedbacks && feedbacks.length > 0 ? (
          feedbacks.map(feedback => (
            <div key={feedback._id} className="feedback-item">
              <div className="feedback-header">
                <h3>{feedback.userName}</h3>
                <span className="rating">★ {feedback.userRating}/5</span>
              </div>
              <p className="email">{feedback.userEmail}</p>
              <p className="message">{feedback.userFeedback}</p>
              <p className="timestamp">
                {new Date(feedback.createdAt).toLocaleDateString()}
              </p>
              <div className="feedback-actions">
                <button
                  className="btn-edit"
                  onClick={() => onEdit(feedback)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(feedback._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-feedback">No feedback yet</p>
        )}
      </div>
    </div>
  );
}

export default FeedbackList;
