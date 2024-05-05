import EventHandler from "./event-handler";

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;
    url: string
    constructor(eventHandler: EventHandler, classname: string) {
        this.className = classname;
        this.eventHandler = eventHandler; 
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action)
    }
}