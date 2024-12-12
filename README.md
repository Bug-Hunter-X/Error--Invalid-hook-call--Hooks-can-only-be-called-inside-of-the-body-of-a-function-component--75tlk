# Next.js 15 Hook Error

This repository demonstrates a common error encountered when upgrading to Next.js 15:  the use of React Hooks inside class components.

## Problem

React Hooks (like `useState`, `useEffect`) are designed for functional components.  Attempting to use them within a class component results in the error `Invalid hook call. Hooks can only be called inside of the body of a function component`. 

## Solution

Convert the class component into a functional component.  This allows the proper use of React Hooks.

## Setup

1. Clone this repository.
2. Run `npm install`
3. Run `npm run dev`

Navigate to the `bug.js` and `bugSolution.js` files to see the problematic and corrected code, respectively.