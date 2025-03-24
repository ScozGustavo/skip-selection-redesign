# Skip Selection UI Redesign

A modern, component-based React application for selecting waste collection skips. This project demonstrates best practices in React architecture, code organization, and UI/UX design principles with meticulous attention to REM Waste Management brand consistency and customer experience.

## Project Overview

The Skip Selection UI allows users to select an appropriate skip size for waste collection based on their needs. Designed with careful consideration of the company's brand identity, the interface leverages the company's signature black, orange, and white color palette throughout the user journey.

The application provides customers with enhanced product information and marketing elements that improve decision-making, including:

- Detailed skip sizes and dimensions with usage recommendations
- Transparent pricing structure with clear VAT breakdowns
- Comprehensive hire period information
- Feature-rich comparison points between skip options
- Clear placement restrictions (road vs. private property)
- Educational content about waste types and skip suitability

By combining technical excellence with brand-aligned design and customer-focused content, this application not only facilitates skip selection but also strengthens brand perception and improves conversion rates.

## Architecture & Design Approach

This project was built with a strong focus on:
## Architecture & Design Approach

This project was built with a strong focus on:

### 1. Component-Based Architecture

The UI is broken down into small, reusable components following the Single Responsibility Principle. Each component is responsible for a specific part of the interface:

### 2. State Management

- Context API (`SkipContext.jsx`) for global state management
- Clean separation of UI and data logic
- Hooks-based approach for component state

### 3. Custom Hooks

- `useSkips`: Dedicated hook for data fetching and management
- Separation of data fetching concerns from UI components
- Proper error and loading state handling

### 4. Utility Functions

- `calculations.js`: Pure functions for price calculations
- `formatters.js`: Data formatting utilities
- `skipFeatures.js`: Configuration for skip descriptions and features

### 5. Responsive Design

- Mobile-first approach
- Adaptive layouts for different screen sizes
- Careful consideration of tap targets and user interaction patterns

## Best Practices Implemented

- **SOLID Principles**: Each component has a single responsibility
- **Clean Code**: Meaningful variable names, consistent formatting
- **Separation of Concerns**: UI, state management, and data fetching are cleanly separated
- **Performance Optimization**: Memoization with React.memo and useCallback
- **Accessibility**: Proper heading structure, color contrast, and keyboard navigation
- **Responsive Design**: Works on all device sizes
- **Error Handling**: Graceful error states and recovery options

## Key Features

- Interactive skip selection with visual feedback
- Real-time price calculation with VAT
- Multi-step progress indicator
- Detailed skip specifications
- Responsive design for all devices
- Loading and error states
- Selection confirmation footer

## Technology Stack

- React (Hooks, Context API)
- Modern JavaScript (ES6+)
- CSS
- Fetch API for data retrieval

## Installation and Setup

1. Clone the repository:
git clone https://github.com/yourusername/skip-selection-redesign.git
cd skip-selection-redesign

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Open [http://localhost:3000](http://localhost:3000) to view the application
