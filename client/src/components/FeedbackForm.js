import React, { useState, useEffect } from "react";
import "./FeedbackForm.css";

function FeedbackForm({ onSubmit, initialData, isEditing, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim() ||
      !formData.rating
    ) {
      alert("All fields are required.");
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      if (!isEditing) {
        setFormData({
          name: "",
          email: "",
          message: "",
          rating: 5,
        });
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
    setIsSubmitting(false);
  };
  return (
    <div className="feedback-form-container">
      <h2>{isEditing ? "Edit Feedback" : "Submit Feedback"}</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {isSubmitting ? "Submitting..." : isEditing ? "Update" : "Submit"}
          </button>
          {isEditing && (
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
