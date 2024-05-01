import EventHandler from "./event-handler";

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;
    url: string
    constructor(classname: string, url: string) {
        this.className = classname;
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    abstract createLink(): string;

    bind() {
        const link = this.createLink()
        this.eventHandler.addEventListenerToClass(this.className, 'click', () => window.open(link))
    }
}