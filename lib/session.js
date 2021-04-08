import Cookies from "universal-cookie";

export function selectSpaceId(account) {
  const cookies = new Cookies();
  const data = account[1];
  const cloudId = data.savedcloud;
  const allCookies = cookies.getAll();
  const accList = allCookies.accList || [];
  for (const [key, value] of Object.entries(data)) {
    cookies.set(key, value, {
      path: "/",
      maxAge: 2592000,
      domain: ".samespace.com",
    });
  }
  const domainIndex = accList.indexOf(cloudId);
  if (domainIndex !== -1) {
    accList.splice(domainIndex, 1);
  }
  accList.push(cloudId);
  cookies.set("accList", JSON.stringify(accList), {
    path: "/",
    maxAge: 2592000,
    domain: ".samespace.com",
  });
  cookies.set("BASE_URL", data.BASE_URL, {
    path: "/",
    maxAge: 2592000,
    domain: ".samespace.com",
  });
  if (data.admin === "true" || data.insights === "true") {
    window.location.href =
      data.BASE_URL +
      (data.newAnalytics === "true" ? "/analytics" : "/insights/summary");
  } else {
    window.location.href = data.BASE_URL + "/manage/teams";
  }
}
