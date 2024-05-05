import AbstractShareButton from "./abstract-share-button";
import EventHandler from "./event-handler";

export default abstract class AbstractLinkSharedButton extends AbstractShareButton {
    url: string;

    constructor(eventHandler: EventHandler, className: string, url: string) {
        super(eventHandler, className);
        this.url = url
    }

    abstract createLink(): string;
    createAction(): any {
        const link = this.createLink();
        return () => window.open(link)
    }
}