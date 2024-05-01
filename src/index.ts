import ShareButtonFacebook from "./share-button-facebook";
import ShareButtonLinkedin from "./share-button-linkedin";
import ShareButtonTwitter from "./share-button-twitter";

const twitter = new ShareButtonTwitter(".btn-twitter", "http://www.youtube.com/dfealves");
twitter.bind()
const facebook = new ShareButtonFacebook(".btn-facebook", "http://www.youtube.com/dfealves")
facebook.bind();
const linkedin = new ShareButtonLinkedin(".btn-linkedin", "http://www.youtube.com/dfealves")
linkedin.bind()