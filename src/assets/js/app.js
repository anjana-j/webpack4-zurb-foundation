import "../scss/app.scss";
// import React from 'react';

// export const App = () => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <p>Testing Rendering</p>
//         </div>
//     )
// }

// jQuery for page scrolling feature - requires jQuery Easing plugin
// to top right away
if (window.location.hash) scroll(0, 0);
// void some browsers issue
setTimeout(function() {
  scroll(0, 0);
}, 1);

// any position
$(function() {
  // your current click function
  $(".page-scroll").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px"
      },
      1000,
      "swing"
    );
  });
  // *only* if we have anchor on the url
  if (window.location.hash) {
    // smooth scroll to the anchor id
    $("html, body").animate(
      {
        scrollTop: $(window.location.hash).offset().top + "px"
      },
      1000,
      "swing"
    );
  }
});
