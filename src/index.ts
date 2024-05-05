import AbstractShareButton from "./abstract-share-button";
import DomEventHandler from "./dom-event-handler";
import ShareButtonFacebook from "./share-button-facebook";
import ShareButtonLinkedin from "./share-button-linkedin";
import ShareButtonTwitter from "./share-button-twitter";
import ShareButtonPrint from "./shared-button-print";

const eventHandler = new DomEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "http://www.youtube.com/dfealves");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "http://www.youtube.com/dfealves")
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, ".btn-linkedin", "http://www.youtube.com/dfealves")
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print")
print.bind();