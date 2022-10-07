import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Example Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  /*
   * Regular Stimulus lifecycle methods
   * Learn more at: https://stimulus.hotwired.dev/reference/lifecycle-callbacks
   *
   * If you intend to use this controller as a regular stimulus controller as well,
   * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
   *
   * Important:
   * By default, StimulusReflex overrides the -connect- method so make sure you
   * call super if you intend to do anything else when this controller connects.
  */

  connect () {
    super.connect()
    // add your code here, if applicable
  }

  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Example#dance" data-controller="example">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Example#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   id - a UUID4 or developer-provided unique identifier for each Reflex
   */


  // beforeDance(element, reflex, noop, id) {
  //  console.log("before dance", element, reflex, id)
  // }

  // danceQueued(element, reflex, noop, id) {
  //   console.log("dance queued", element, reflex, id)
  // }

  // danceDelivered(element, reflex, noop, id) {
  //   console.log("dance delivered", element, reflex, id)
  // }

  // danceSuccess(element, reflex, noop, id) {
  //   console.log("dance success", element, reflex, id)
  // }

  // danceError(element, reflex, error, id) {
  //   console.error("dance error", element, reflex, error, id)
  // }

  // danceHalted(element, reflex, noop, id) {
  //   console.warn("dance halted", element, reflex, id)
  // }

  // danceForbidden(element, reflex, noop, id) {
  //   console.warn("dance forbidden", element, reflex, id)
  // }

  // afterDance(element, reflex, noop, id) {
  //   console.log("after dance", element, reflex, id)
  // }

  // finalizeDance(element, reflex, noop, id) {
  //   console.log("finalize dance", element, reflex, id)
  // }
}
