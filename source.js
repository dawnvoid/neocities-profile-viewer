/* This bookmarklet will redirect you from a neocities page to the corresponding neocities profile. */
/* Doesn't work with custom domain urls. */
/* Assumes you are using https. */
/* To install: Make a new bookmark on your browser. Replace the bookmark's url with the contents of 'bookmarklet.js'. It will be formatted weird, but it should work. */
/* To use: Click the bookmark while on a neocities page. */

javascript: (() => {
    
    let url = window.location.href;

    if (url.includes(".neocities.org")) {

        let end_idx = url.indexOf(".neocities.org");
        let start_idx = 8;
        let site = url.substring(start_idx, end_idx);

        let profile = "https://neocities.org/site/" + site;
        window.open(profile, "_blank");

    } else {

        window.alert("This isn't a neocities site!");
    }
})();