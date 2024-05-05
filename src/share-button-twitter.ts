import AbstractLinkSharedButton from "./Abstract-link-share-button";
import EventHandler from "./event-handler";
export default class ShareButtonTwitter extends AbstractLinkSharedButton {
    constructor(eventHandler: EventHandler,className: string, url: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`
    }

}