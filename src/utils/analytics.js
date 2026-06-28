import ReactGA from 'react-ga4'

/**
 * Initializes Google Analytics with the given Measurement ID.
 */
export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId)
}

/**
 * Logs a page view event.
 */
export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path || window.location.pathname })
}

/**
 * Tracks when a recruiter or user downloads the Resume.
 */
export const trackResumeDownload = () => {
  ReactGA.event('resume_download')
}

/**
 * Tracks when a project details modal is opened.
 * @param {string} projectName 
 */
export const trackProjectOpen = (projectName) => {
  ReactGA.event('project_open', { project_name: projectName })
}

/**
 * Tracks when a live demo link is clicked.
 * @param {string} projectName 
 */
export const trackLiveDemoClick = (projectName) => {
  ReactGA.event('live_demo_click', { project_name: projectName })
}

/**
 * Tracks when a user clicks the email address to contact.
 */
export const trackEmailClick = () => {
  ReactGA.event('email_click')
}

/**
 * Tracks when a user clicks the WhatsApp button to contact.
 */
export const trackWhatsAppClick = () => {
  ReactGA.event('whatsapp_click')
}

/**
 * Tracks when GitHub links are clicked.
 */
export const trackGitHubClick = (label) => {
  ReactGA.event('github_click', { label })
}

/**
 * Tracks when LinkedIn links are clicked.
 */
export const trackLinkedInClick = (label) => {
  ReactGA.event('linkedin_click', { label })
}

/**
 * Tracks a generic click event.
 */
export const logClick = (action, label = '') => {
  ReactGA.event('click', { action, label })
}
