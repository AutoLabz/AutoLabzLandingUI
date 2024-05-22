export const GA_TRACKING_ID = 'G-GKP5HR0WP9'; // Replace with your actual Google Analytics Tracking ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};