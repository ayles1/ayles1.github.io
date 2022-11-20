function modal() {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal");
  modalWindow.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-overlay">
    <div class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Добавлено в корзину!</span><span class="modal-close">&times;</span>
      </div>
      <div class="modal-main">
        <p></p>
        <p></p>
      </div>
      <div class="modal-footer">
      <button class='modal-ok'>Ок</button>
      <button class='modal-cart'>Открыть корзину</button>
      </div>
    </div>
  </div>`
  );
  document.body.insertAdjacentElement("afterbegin", modalWindow);
  const options = {
    open() {
      modalWindow.classList.add("open");
      const buttonOk = document.querySelector(".modal-ok");
      const buttonCart = document.querySelector(".modal-cart");
      buttonOk.addEventListener("click", () => {
        options.close();
        options.destroy();
      });
      buttonCart.addEventListener("click", () => {
        options.close();
        options.destroy();
        window.location.href = "cart.html";
      });
    },

    close() {
      modalWindow.classList.remove("open");
    },
    destroy() {
      modalWindow.removeEventListener("click", close);
      modalWindow.remove();
    },
  };
  function close(event) {
    if (event.target.closest(".modal-close")) {
      options.close();
      options.destroy();
    }
    if (!event.target.closest(".modal-window")) {
      options.close();
      options.destroy();
    }
  }
  document.addEventListener("click", () => {
    if (modalWindow.classList.contains("open")) {
      document.addEventListener("click", close);
    }
  });

  return options;
}

export { modal };
