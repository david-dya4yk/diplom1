export class Accordion {
    constructor(options) {
        this.block = document.querySelector(options.block);
        this.items = this.block.querySelectorAll(options.items);
        this.itemText = options.itemText
    }

    deactivateItems() {
        this.items.forEach((item) => {
            item.classList.remove('active')
            const el = item.querySelector(this.itemText);
            if(el === null) {
                throw new Error("block with text not found");
            }
            el.style.display = 'none';
        })
    }

    activationElement(item) {
        this.deactivateItems()
        item.classList.add('active')
        item.querySelector(this.itemText).style.display = 'block'
    }
}
