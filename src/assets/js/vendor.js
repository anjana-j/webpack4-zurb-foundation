// import React from 'react';
// import ReactDOM from 'react-dom';

// import {App} from './app';

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

import "../scss/common/core.scss";

$(document).foundation();

$("#main-menu")
  .on("sticky.zf.stuckto:top", function() {
    $(this).addClass("shrink");
    //$("#main-menu").css("width","100%");
    $(".full-logo")
      .css("display", "none")
      .fadeOut(500);
    $(".icon-logo")
      .css("display", "block")
      .hide()
      .fadeIn("1000");
    // $("button").css("background", "#6d832f");
  })
  .on("sticky.zf.unstuckfrom:top", function() {
    $(this).removeClass("shrink");
    //$("#main-menu").css("width","90%");
    $(".full-logo")
      .css("display", "block")
      .hide()
      .fadeIn();
    $(".icon-logo")
      .css("display", "none")
      .fadeOut(500);
    // $("button").css("background", "#89A035");
  });
