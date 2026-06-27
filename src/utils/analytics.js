import ReactGA from 'react-ga4'

/**
 * Initializes Google Analytics with the given Measurement ID.
 * @param {string} measurementId 
 */
export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId)
}

/**
 * Logs a page view event.
 * @param {string} [path] Optional custom page path.
 */
export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path || window.location.pathname })
}

/**
 * Logs a custom event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} [label] 
 * @param {number} [value] 
 */
export const logEvent = (category, action, label = '', value = undefined) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  })
}

/**
 * Helper to log click events.
 * @param {string} elementId 
 * @param {string} [description] 
 */
export const logClick = (elementId, description = '') => {
  logEvent('Click', elementId, description)
}
