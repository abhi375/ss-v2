export function insertHubspotTracker() {
  const script = document.createElement("script");

  script.type = "text/javascript";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = "//js.hs-scripts.com/8401088.js";

  document.body.appendChild(script);

  var _hsq = (window._hsq = window._hsq || []);
  _hsq.push(["setPath", "/"]);
  _hsq.push(["trackPageView"]);
}

export function insertZoomInfoTracker() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://ws.zoominfo.com/pixel/EbTLESic3bwcDCPeCoFZ";

  var scriptTag = document.getElementsByTagName("script")[0];
  scriptTag.parentNode.insertBefore(script, scriptTag);

  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = "1";
  img.width = "1";
  img.style = "display: none";
  img.alt = "ZoomInfo Insight";
  img.src = "https://ws.zoominfo.com/pixel/EbTLESic3bwcDCPeCoFZ";
  noscript.appendChild(img);
}

export function insertGoogleTracker() {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-TC2PGJM");

  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.height = "0";
  iframe.width = "0";
  iframe.style = "display:none;visibility:hidden";
  iframe.alt = "Google Insight";
  iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TC2PGJM";
  noscript.appendChild(iframe);
}

// export function insertLinkedInTracker() {
//   const script = document.createElement('script')
//   script.type = 'text/javascript'
//   const _linkedin_partner_id = '2733513'
//   window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
//   window._linkedin_data_partner_ids.push(_linkedin_partner_id)
//   var s = document.getElementsByTagName('script')[0]
//   var b = document.createElement('script')
//   b.type = 'text/javascript'
//   b.async = true
//   b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
//   s.parentNode.insertBefore(b, s)

//   const noscript = document.createElement('noscript')
//   const img = document.createElement('img')
//   img.height = '1'
//   img.width = '1'
//   img.style = 'display: none'
//   img.alt = 'LinkedIn Insight'
//   img.src = 'https://px.ads.linkedin.com/collect/?pid=2733513&fmt=gif'
//   noscript.appendChild(img)
// }
