# Strata Frontend Dev Exercise

First off we would like to thank you for your interest in joining the strata team! We are excited to have you apply and as part of the application process we have this small exercise to assess if you are a good fit for the team.

As a strata frontend dev, you will mainly be working with the following tech stack:
  - Typescript
  - Nextjs / React
  - Tailwindcss
  - Vercel

This exercise is a simple task where you can show us your proficiency in our environment. We are looking for well typed code, good state management, and familiarity with react best practices (hooks, memoized calls, etc). It should take around 2-3 hours to complete.

---

## The Exercise

Imagine we are building a competition for our users where we have a leaderboard and can view each users profiles. A visitor to the website can also like a user's profile, which will only be recorded for the current website visit. Your task is to complete the frontend code for two pages for a mock competition website. The two pages are outlines as the following:

**1. Leaderboard:**
- The leaderboard shows a list or grid view of the current user rankings.

**2. User Profile:**
- A user profile page will show the profile picture of a user and their user name.

### Provided to you:
There are several resources provided to you:
- Most importantly, there is an API to get the current leaderborad. You can query it at: `api/leaderboard`. You can view how it works and it's type signatures at `pages/api/leaderboard/index.tsx`. It will return a new leaderboard order each time it is called.
- The empty files for you to fill in at `pages/leaderboard/index.tsx` and `pages/user/[username].tsx`

---

## Key Considerations

While there are many ways to complete this task, we hope to learn how you approach such problems within a larger codebase and in a collaborative enviornment.

There are some key aspects that we would like you to keep in mind:
- Code should be clean, readable and type-safe.
- Separation of concerns between views and models, and reusable model code that leverages modern React.
- Reusable view code and React component composition using data-bound components in the right places.

---

## Requirements
**Leaderboard**:
- This page should request the latest leaderboard rankings around every 20 seconds and update the leaderboard list.
- Each leaderboard entry should display the user's profile picture and username.
- Each leaderboard entry should show if we have liked the user's profile or not.

**User Profile**
- This page should show the user's name and profile picture.
- It should have a button/icon that allows a visitor to "like" the user's profile.
- There should be a back button to return to the leaderboard.

- You may add any additional functionality and pages you see fit if you complete the main assignment.

**NOTES**:
- User profile images are located in the public resource folder at `users/[username].png`.
- "Likes" do not have to persist beyond a local session (i.e. no need to save in any database. Can just use react state management)


### Project Installation, Setup, Submission
1. Create a fork of this repo.
2. Install dependencies with
>`yarn install`

or
>`npm install`

3. Complete `pages/leaderboard/index.tsx` and `pages/user/[username].tsx` pages. 
4. Create pull request
5. Notify strata team!

Feel free to contract us with any questions you have at `jobs@strata.gallery`
