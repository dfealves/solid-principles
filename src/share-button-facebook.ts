import AbstractLinkSharedButton from "./Abstract-link-share-button";
import EventHandler from "./event-handler";
export default class ShareButtonFacebook extends AbstractLinkSharedButton {
    constructor(eventHandler: EventHandler,className: string, url: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }

}