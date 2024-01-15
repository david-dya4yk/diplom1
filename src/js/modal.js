const defaultParams = {
    visibleClassName: 'visible',
    modalSelector: '.modal-callback',
    overlaySelector: '.modal-overlay',
}

export class Modal {
    constructor(params = defaultParams) {
        this.modal = document.querySelector(params.modalSelector);
        this.overlay = document.querySelector(params.overlaySelector);
        this.visibleClassName = params.visibleClassName

        if (!this.modal || !this.overlay) {
            throw new Error("Unable to find modal")
        }
    }

    open() {
        this.modal.classList.add(this.visibleClassName)
        this.overlay.classList.add(this.visibleClassName)
    }

    close() {
        this.modal.classList.remove(this.visibleClassName)
        this.overlay.classList.remove(this.visibleClassName)
    }
}



