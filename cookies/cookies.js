Cookies.set("Cookies", "true");

(() => {
    const getCookie = (name) => {
      const value = " " + document.cookie;
      console.log("value", `==${value}==`);
      const parts = value.split(" " + name + "=");
      return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };
  
    const setCookie = function (name, value, expiryDays, domain, path, secure) {
      const exdate = new Date();
      exdate.setHours(
        exdate.getHours() +
          (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
      );
      document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
    };
  
    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    const $cookiesBannerButton = $cookiesBanner.querySelector("button");
    const cookieName = "cookiesBanner";
    const hasCookie = getCookie(cookieName);
  
    if (!hasCookie) {
      $cookiesBanner.classList.remove("hidden");
    }
  
    $cookiesBannerButton.addEventListener("click", () => {
      setCookie(cookieName, "closed");
      $cookiesBanner.remove();
    });
  })();

  document.getElementById('cookiesLink').addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default action of the link
    var banner = document.getElementById('cookiesBanner');
    if (banner.classList.contains('hidden')) {
        banner.classList.remove('hidden'); // remove the 'hidden' class from the div
    } else {
        banner.classList.add('hidden'); // add the 'hidden' class back to the div
    }
});