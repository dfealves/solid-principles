import AbstractShareButton from "./abstract-share-button";

export default class ShareButtonTwitter extends AbstractShareButton {
    constructor(className: string, url: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`
    }

}