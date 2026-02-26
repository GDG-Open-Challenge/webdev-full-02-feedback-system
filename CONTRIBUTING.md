# 🤝 Contributing to Feedback Submission System

Thank you for your interest in contributing! This project is a **debugging challenge** — your goal is to find and fix the 5 intentional bugs hidden in the codebase. Here's how to get started.

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the **Fork** button in the top-right corner of the GitHub repo page. This creates your own copy of the project under your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/webdev-full-02-feedback-system.git
cd webdev-full-02-feedback-system
```

### 3. Add the Upstream Remote

Keep your fork synced with the original repo:

```bash
git remote add upstream https://github.com/GDG-Open-Challenge/webdev-full-02-feedback-system.git
git fetch upstream
```

---

## 🔀 Branching Strategy

Create a **separate branch** for each bug fix. Use this naming convention:

```
fix/issue-<number>-<short-description>
```

**Examples:**

```bash
git checkout -b fix/issue-1-submit-button-disabled
git checkout -b fix/issue-2-data-structure-mismatch
git checkout -b fix/issue-5-input-validation
```

> [!IMPORTANT]
> Always branch off from the latest `main` branch:
> ```bash
> git checkout main
> git pull upstream main
> git checkout -b fix/issue-<number>-<description>
> ```

---

## 🛠 Making Changes

1. **Pick an issue** from the GitHub Issues tab
2. **Comment on the issue** to let others know you're working on it
3. **Read the full description** — understand the bug behavior, root cause, and affected file
4. **Fix the bug** in the relevant file(s)
5. **Test your fix** by opening `index.html` in a browser and verifying the correct behavior

### Testing Locally

1. **Setup the Backend:**
```bash
cd server
npm install
# Start MongoDB first (mongod)
npm start
```

2. **Setup the Frontend (in a new terminal):**
```bash
cd client
npm install
npm start
```

The application will open at `http://localhost:3000` with the API running on `http://localhost:5000`

---

## 📝 Commit Message Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:
form): disable submit button during feedback submission (#1)"
git commit -m "fix(api): standardize feedback field names between frontend and backend (#2)"
git commit -m "fix(validation): add required field validation to feedback form (#5)"
```

> [!NOTE]
> Scope should be the affected area: `form`, `api`, `database`, `styling`, `validation`, `sorting
```bash
git commit -m "fix(cart): resolve total string concatenation by using numeric accumulator (#1)"
git commit -m "fix(search): add case-insensitive comparison for product filtering (#4)"
git commit -m "fix(css): replace fixed pixel widths with responsive units in product grid (#3)"
```

> [!NOTE]
> Scope should be the affected area: `cart`, `search`, `modal`, `css`, `data`, `a11y`, etc.

---

## 🚀 Submitting a Pull Request

### 1. Push Your Branch

```bashdev-full-02-feedback-system
git push origin fix/issue-<number>-<description>
```

### 2. Open a Pull Request

- Go to your fork on GitHub
- Click **"Compare & pull request"**
- Set the base repository to `GDG-Open-Challenge/web-dev-challenge-1` and base branch to `main`
- **You MUST follow the PR format below** — PRs that do not follow this format will be requested to revise

---

## 📋 Required Pull Request Format

Every pull request **must** follow this exact structure. Copy this template and fill in every section. Incomplete submissions will not be reviewed.

```markdown
## 🐛 Bug Fix: Issue #<number> — <Issue Title>

### 📌 Summary

| Field             | Details                                      |
|-------------------|----------------------------------------------|
| **Issue**         | #<number>                                    |
| **Title**         | <Issue title>                                |
| **Severity**      | 🟢 Low / 🟡 Medium / 🔴 High               |
| **Category**      | Bug / UX / Data Handling / Validation        |
| **File(s)**       | `<file path>`                                |
| **Function(s)**   | `<function name(s)>`                         |

---

### 🔍 Bug Description

<Explain what the bug does in your own words. Describe the incorrect behavior
that a user would experience. Be specific — include what you observe vs. what
is expected.>

**Steps to Reproduce:**
1. <Step 1>
2. <Step 2>
3. <Step 3>

**Expected Behavior:** <What should happen>

**Actual Behavior:** <What currently happens>

---

### 🔬 Root Cause Analysis

<Explain WHY the bug occurs at a technical level. Identify the exact code pattern,
JavaScript behavior, state management issue, or data handling error that causes
the issue. This is the most important section — demonstrate that you understand
the underlying cause, not just the symptom.>

---

### ✅ Fix Applied

<Explain your fix and WHY it resolves the root cause. Don't just say "I changed X
to Y" — explain the reasoning behind your approach and why it's the correct solution.>

---

### 📄 Code Changes

#### Before (Buggy Code)

```js
// File: <file path>
// Line(s): <line number(s)>
<paste the exact original buggy code here>
```

#### After (Fixed Code)

```js
// File: <file path>
// Line(s): <line number(s)>
<paste your corrected code here>
```

> If your fix spans multiple files, include a Before/After block for each file.

---

### 🧪 Testing & Verification

Describe how you tested your fix:

- [ ] Verified the fix resolves the described bug
- [ ] Confirmed no regressions — other features still work correctly
- [ ] Tested on Chrome
- [ ] Tested on Firefox or Safari
- [ ] Tested form validation and submission flows
- [ ] Tested with various inputs and edge cases

**Test Evidence:**
<Describe what you tested and what the results were. Screenshots are encouraged
but not required.>

---

### 📚 Additional Notes (Optional)

<Any other context, related issues you noticed, alternative approaches considered,
or references to documentation/articles that helped you understand the bug.>
```

---

## ⚠️ PR Review Criteria

Your pull request will be evaluated on:

| Criterion | What We Look For |
|-----------|-----------------|
| **Correctness** | Does the fix actually resolve the bug without introducing new issues? |
| **Root Cause Understanding** | Did you identify WHY the bug occurs, not just WHAT to change? |
| **Code Quality** | Is the fix minimal, clean, and focused on the bug? |
| **Before/After Clarity** | Are the code changes clearly documented with exact line references? |
| **Testing** | Did you verify the fix across browsers and edge cases? |
| **Format Compliance** | Did you follow the required PR template completely? |

> [!CAUTION]
> PRs that skip sections, leave placeholders unfilled, or bundle multiple bug fixes will be sent back for revision.

---

## ✅ Contribution Rules

| Rule | Details |
|------|---------|
| **One bug per PR** | Don't bundle multiple fixes in a single pull request |
| **React + Express stack** | Keep it to React (client), Express/Node.js (server), and MongoDB — no additional frameworks |
| **Don't reformat code** | Fix only the bug; don't restructure, rename, or beautify the surrounding code |
| **Don't add dependencies** | No new npm packages unless absolutely necessary and pre-approved |
| **Test before submitting** | Start both server and client, test the fix in the browser |
| **Follow the PR template** | Every section must be filled out completely |
| **Don't modify the bugs document** | Do not update ERRORS_DOCUMENT.md or README.md |

---


## 💬 Need Help?

- Comment on the issue you're working on so others know it's in progress
- Ask questions in the issue thread if you're stuck
- Review other contributors' PRs to learn different approaches

---

## 📜 Code of Conduct

- Be respectful and constructive in all interactions
- Help other contributors when possible
- Give credit where credit is due
- Have fun debugging! 🐛
