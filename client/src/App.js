import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch("/api/feedback");
      const data = await response.json();
      setFeedbacks(data.feedbacks);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        fetchFeedbacks();
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleEdit = (feedback) => {
    setEditingId(feedback._id);
    setEditingData({
      name: feedback.userName,
      email: feedback.userEmail,
      message: feedback.userMessage,
      rating: feedback.userRating,
    });
  };

  const handleUpdateSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/feedback/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setEditingId(null);
        setEditingData(null);
        fetchFeedbacks();
      }
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/feedback/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        fetchFeedbacks();
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Feedback System</h1>
      </header>
      <main className="App-main">
        <FeedbackForm
          onSubmit={editingId ? handleUpdateSubmit : handleSubmit}
          initialData={editingData}
          isEditing={editingId !== null}
          onCancel={() => {
            setEditingId(null);
            setEditingData(null);
          }}
        />
        <FeedbackList
          feedbacks={feedbacks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
