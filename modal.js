(function () {
  let adf_modal_info = document.querySelector("#adf-modal-info");
  adf_modal_info.innerHTML = `
 <div>

      
    </div>`;

  let bindEvent = (eventNames, selector, handler) => {
    eventNames.split(" ").forEach((eventName) => {
      document.addEventListener(
        eventName,
        function (event) {
          if (event.target.matches(selector + ", " + selector + " *")) {
            handler.apply(event.target.closest(selector), arguments);
          }
        },
        false
      );
    });
  };

  bindEvent("click", "#adf-info-handler", function (e) {
    e.preventDefault();
    adf_modal_info.style.display = "block";
    add_class(adf_modal_info, "bgcolor");
    remove_class(adf_modal_info, "bgcolorRemove");
    add_class(adf_modal_info, "showZoomIn");
    remove_class(adf_modal_info, "hideZoomOut");
  });

  bindEvent("click", ".adf-close", function (e) {
    // console.log(this);
    e.preventDefault();
    var adf_classess = Array.from(
      document.querySelectorAll('[class^="adf_"]')
    );

    for (adf_class in adf_classess) {
      add_class(adf_classess[adf_class], "hideZoomOut");
    }
  });

  bindEvent("click", ".adf-modal-info__close", function (e) {
    remove_class(adf_modal_info, "bgcolor");
    add_class(adf_modal_info, "bgcolorRemove");
    setTimeout(function () {
      adf_modal_info.style.display = "none";
    }, 500);
  });

  /*add and remove class function*/
  function remove_class(element, classname) {
    element.className = element.className.replace(classname, "");
  }

  function add_class(element, classname) {
    element.classList
      ? element.classList.add(classname)
      : (element.className += " " + classname);
  }
})();