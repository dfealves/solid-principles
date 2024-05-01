import AbstractShareButton from "./abstract-share-button";

export default class ShareButtonFacebook extends AbstractShareButton {
    constructor(className: string, url: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`
    }

}