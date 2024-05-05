import AbstractShareButton from "./abstract-share-button";
import EventHandler from "./event-handler";

export default class ShareButtonPrint extends AbstractShareButton {
    constructor(eventHandler: EventHandler,className: string) {
        super(eventHandler, className)
    }

    createAction() {
        return () => window.print()
    }

}