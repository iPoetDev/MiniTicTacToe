// eslint-disable-next-line vue/html-self-closing
/* jshint esversion: 6 */
// noinspection AnonymousFunctionJS

// noinspection AnonymousFunctionJS,InnerHTMLJS

/**
 * Opens a modal when the help button is clicked and adds event listeners to close the modal.
 * @function helpButton
 * @return {void}
 */

function helpButton() { // jshint ignore:line
    /** @type {HTMLElement} **/
    const modal = document.getElementById('myModal');
    /** @type {HTMLElement} **/
    const btn = document.getElementById('modalBtn');
    /** @type {HTMLElement} **/
    const closeButton = document.getElementById('closeBtn');
    /** @type {HTMLElement} **/
    const lowerButton = document.getElementById('lowerCloseBtn');
    const openDelay = 500
    /**
     * Displays the modal by removing the 'hidden' class from the modal element.
     * @function openModal
     * @return {void}
     */
    const openModal = () => {
        modal.classList.remove('hidden');
    };

    /**
     * Closes the modal by adding the 'hidden' class to it.
     * @function closeModal
     * @return {void}
     */
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    btn.addEventListener('click', function() {
        setTimeout(() => {
            openModal();
        }, openDelay); // Delay 0.5 second
    });

    closeButton.addEventListener('click', closeModal);
    lowerButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}
