FEEDBACK SYSTEM - IDENTIFIED ERRORS DOCUMENT

This document lists 5 intentional bugs introduced in the feedback submission system.
No solutions are provided. Debug and fix these issues yourself.

========================================

ISSUE #1: Button Not Disabled During Submission
Location: client/src/components/FeedbackForm.js
Description: The submit button shows "Submitting..." but remains clickable during form submission. 
This allows users to click the submit button multiple times, causing duplicate feedback submissions.

Impact: Multiple feedback submissions with identical data possible if user clicks rapidly.

========================================

ISSUE #2: Mismatched Data Structure Between API and Frontend
Location: server/server.js (GET endpoint) vs client/src/components/FeedbackList.js
Description: The GET /api/feedback endpoint returns feedback objects with transformed field names 
(userName, userEmail, userFeedback, userRating) but the FeedbackList component tries to 
access the original field names through the edit handler (feedback.name, feedback.email, feedback.message, feedback.rating).

Impact: When editing feedback from the list, all form fields appear empty because the properties are undefined.
The App.js handleEdit function tries to access feedback.name but the API returns feedback.userName.

========================================

ISSUE #3: Incorrect Sorting Order in Feedback List
Location: server/server.js GET /api/feedback endpoint
Description: Feedbacks are sorted by createdAt: 1 (ascending - oldest first) when they should be 
sorted by createdAt: -1 (descending - newest first) to display newest feedback at the top.

Impact: User sees oldest feedback first instead of most recent, making the interface less intuitive.
Latest submissions appear at the bottom of the list.

========================================

ISSUE #4: Edit API Endpoint Runtime Error
Location: server/server.js PUT /api/feedback/:id endpoint
Description: The PUT endpoint contains a call to a non-existent method 'nonExistentMethod()' 
which will cause a runtime error (ReferenceError) when attempting to update feedback.

Impact: Editing any feedback will fail with a 500 error and the feedback will not be updated.
The error message will indicate "nonExistentMethod is not defined".

========================================

ISSUE #5: No Input Validation or Error Handling for Failed Requests
Location: client/src/components/FeedbackForm.js and client/src/App.js
Description: The form submission has no validation for required fields before sending to the server.
The handleSubmit function doesn't catch or display errors if the API request fails.
Missing form validation means invalid data could be sent to the server.

Impact: Server receives empty or invalid form submissions silently. 
If the API fails, users have no feedback about the failure - the form just resets without any error message.
No validation prevents submission of forms with empty fields even though they are marked 'required'.

========================================
