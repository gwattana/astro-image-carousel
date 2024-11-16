# Image Carousel

A responsive and accessible image carousel component built with **Astro**, **Tailwind CSS**, and minimal JavaScript. This carousel allows users to navigate through images horizontally with smooth transitions, responsive design, and accessible navigation features.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Horizontal Scrolling**: Allows users to scroll through images with smooth transitions.
- **Navigation**: Includes next/previous buttons for manual navigation and clickable indicators (dots).
- **Autoplay**: Automatically cycles through images every 3 seconds with pause/resume functionality on hover.
- **Accessibility**: Fully accessible with ARIA labels for screen readers.
- **Lazy Loading**: Images load lazily for better performance.

## Demo

View the demo of the carousel here: https://astro-image-carousel.vercel.app/

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/image-carousel.git
    cd image-carousel
    ```

2. **Install dependencies**:
    Install the required dependencies using npm or yarn.
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Run the project**:
    Start the development server.
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

4. **Open the project**:
    Navigate to `http://localhost:4321` to view the carousel in your browser.

## Design Decisions

- **Tailwind CSS** was chosen for utility-first styling, ensuring a clean and maintainable CSS structure.
- The carousel uses **CSS scroll-snap** for smooth horizontal scrolling, reducing the need for JavaScript animations.
- **Autoplay** is handled via a lightweight JavaScript function that updates the current slide at regular intervals.
- **JavaScript light**: We minimized JavaScript usage by relying on Tailwind’s utility classes and CSS features where possible.

## Performance Considerations

- **Lazy loading** of images to reduce initial page load time.
- **Autoplay pause on hover**: Stops autoplay when users hover over the carousel, improving interaction.
- **Minimal JavaScript**: Only essential logic for image navigation and autoplay, ensuring the page remains fast and responsive.

## Browser Compatibility

This carousel should work across modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge

Older browsers (e.g., Internet Explorer) may not support some CSS features like `scroll-snap`, so it is recommended to use a more modern browser.

## Assumptions

- The carousel is designed to handle a fixed number of images, but the number can be easily adjusted.
- **Tailwind CSS** is set up with the default configuration, but you can modify the configuration as needed for custom themes or breakpoints.

## Improvements and Next Steps

- Add support for swipe gestures on mobile devices.
- Allow the user to customize the autoplay interval and disable it if desired.
- Enhance performance further by preloading images in the background.

## License

This project is licensed under the MIT License.
