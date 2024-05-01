import AbstractShareButton from "./abstract-share-button";

export default class ShareButtonLinkedin extends AbstractShareButton {
    constructor(className: string, url: string) {
        super(className, url)
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`
    }
}