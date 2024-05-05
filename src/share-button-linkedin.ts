import AbstractLinkSharedButton from "./Abstract-link-share-button";
import EventHandler from "./event-handler";
export default class ShareButtonLinkedin extends AbstractLinkSharedButton {
    constructor(eventHandler: EventHandler,className: string, url: string) {
        super(eventHandler, className, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`
    }
}