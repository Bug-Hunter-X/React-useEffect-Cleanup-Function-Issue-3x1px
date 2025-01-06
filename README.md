# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook: the cleanup function not being called when the component unmounts. This can lead to memory leaks or unexpected behavior, particularly when dealing with asynchronous operations.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The original code uses useEffect to log messages on mount and unmount, but the cleanup function is not always called due to improper handling of unmount scenarios, such as rapid component changes.

## Solution
The solution ensures that the cleanup function is always called before unmounting by properly managing asynchronous operations and component lifecycle.