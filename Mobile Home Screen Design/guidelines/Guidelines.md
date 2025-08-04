# CareerCurve Mobile App - UX Design Guidelines

## Overview
CareerCurve is a mobile-first career development and mentoring platform designed to help users grow their professional skills through 1-on-1 sessions, mock interviews, and personalized career guidance.

## Core UX Principles

### 1. Mobile-First Design
- Design for thumb navigation and one-handed use
- Optimize for 375px-414px screen widths primarily
- Ensure touch targets are minimum 44px × 44px
- Keep primary actions within thumb reach (bottom 2/3 of screen)

### 2. Progressive Disclosure
- Show only essential information on first view
- Use expandable sections for detailed content
- Implement step-by-step flows for complex tasks
- Provide clear entry and exit points

### 3. Immediate Value
- Surface user progress and achievements prominently
- Show next recommended actions based on user goals
- Provide quick access to frequently used features
- Display upcoming sessions and deadlines clearly

### 4. Trust and Safety
- Use clear, professional language throughout
- Show mentor credentials and ratings
- Provide transparent pricing and booking policies
- Include user reviews and testimonials

## Design System Guidelines

### Typography
- **Primary Font Size**: 16px (default for better readability)
- **Headers**: Use font weights 600-700 for emphasis
- **Body Text**: Use font weight 400, line-height 1.5
- **Helper Text**: 14px, muted foreground color
- **Accessibility**: Minimum 14px for all text, 16px for form inputs

### Color Palette
- **Primary**: Dark theme (#030213) for trust and professionalism
- **Success**: Green variants for completed actions and achievements
- **Warning**: Orange variants for pending/upcoming items
- **Destructive**: Red variants for errors and critical actions
- **Muted**: Gray variants for secondary information

### Spacing System
- **Base Unit**: 4px (0.25rem)
- **Component Padding**: 16px (1rem) standard
- **Section Spacing**: 24px (1.5rem) between major sections
- **Card Spacing**: 12px (0.75rem) between cards
- **Icon Spacing**: 8px (0.5rem) from text

### Component Guidelines

#### Cards
- Use subtle borders and shadows for depth
- Maintain consistent 16px internal padding
- Include hover states for interactive cards
- Apply 8px border radius for modern appearance

#### Buttons
- **Primary**: Full-width for main actions
- **Secondary**: Outlined style for alternative actions
- **Ghost**: Text-only for less important actions
- **Icon Buttons**: 40px × 40px minimum touch target

#### Navigation
- **Bottom Navigation**: Maximum 5 items
- **Tab Bar**: Use icons with labels for clarity
- **Back Navigation**: Always provide clear exit paths
- **Breadcrumbs**: For multi-step processes

## Interaction Patterns

### Loading States
- Use skeleton screens for content loading
- Show progress indicators for multi-step processes
- Provide immediate feedback for user actions
- Display estimated wait times when known

### Gestures
- **Pull to Refresh**: For updating feeds and lists
- **Swipe Actions**: For quick actions on list items
- **Long Press**: For context menus and shortcuts
- **Pinch to Zoom**: For images and detailed content

### Feedback
- **Success States**: Green checkmarks and positive messaging
- **Error States**: Clear error messages with suggested actions
- **Empty States**: Helpful illustrations with next steps
- **Offline States**: Clear indication and offline capabilities

## Accessibility Guidelines

### WCAG 2.1 Compliance
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Support for screen readers with proper ARIA labels
- Keyboard navigation support for all interactive elements

### Inclusive Design
- Support for various screen sizes and orientations
- Consider users with motor impairments (larger touch targets)
- Provide alternative text for all images
- Use clear, simple language throughout

## User Flow Principles

### Onboarding
- Keep initial setup to 3 steps maximum
- Allow users to skip non-essential information
- Provide clear value proposition upfront
- Enable quick wins within first session

### Core Flows
- **Booking a Session**: Maximum 3 taps from home screen
- **Viewing Progress**: Always visible on home screen
- **Finding Mentors**: Powerful search with smart filters
- **Managing Schedule**: Integrated calendar view

### Error Prevention
- Use inline validation for forms
- Provide clear format examples
- Confirm destructive actions
- Save user progress automatically

## Content Guidelines

### Voice and Tone
- **Professional but Approachable**: Use "you" language
- **Encouraging**: Focus on growth and possibilities
- **Clear and Direct**: Avoid jargon and complex terms
- **Supportive**: Acknowledge challenges and celebrate wins

### Microcopy
- **CTAs**: Use action verbs ("Book Session", "Start Learning")
- **Error Messages**: Be specific and helpful
- **Success Messages**: Be celebratory but brief
- **Helper Text**: Provide context without overwhelming

## Performance Guidelines

### Loading Performance
- Target 2 seconds or less for initial page load
- Use progressive loading for images and content
- Implement efficient caching strategies
- Optimize for 3G network conditions

### Animation Performance
- Use CSS transforms and opacity for smooth animations
- Keep animations under 300ms for micro-interactions
- Provide reduced motion preferences
- Use appropriate easing curves (ease-out for entrances)

## Platform-Specific Considerations

### iOS Guidelines
- Follow Human Interface Guidelines for navigation
- Use native iOS icons and interaction patterns
- Support iOS accessibility features
- Consider Dynamic Type support

### Android Guidelines
- Follow Material Design principles where appropriate
- Support Android accessibility services
- Use appropriate navigation patterns (bottom nav, drawer)
- Consider gesture navigation compatibility

## Quality Assurance

### Testing Requirements
- Test on minimum 3 different screen sizes
- Verify accessibility with screen readers
- Test all interactive states (hover, focus, active)
- Validate form handling and error states

### Review Process
- Conduct usability testing with target users
- Review designs with development team for feasibility
- Validate against brand guidelines
- Check compliance with accessibility standards
