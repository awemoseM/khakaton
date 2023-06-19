


const data = [
    {
      title: "Fist",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Second",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Three",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Four",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Fist",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Second",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
    {
      title: "Three",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias..`,
    },
    {
      title: "Four",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, molestias.`,
    },
  ];
  
  function razdelitel(arr) {
    const dlina = arr.length;
    const seredina = Math.ceil(dlina / 2);
  
    const polovina1 = arr.slice(0, seredina);
    const polovina2 = arr.slice(seredina);
  
    return [polovina1, polovina2];
  }
  const [first, second] = razdelitel(data);
  
  const accordion = document.querySelector(".accordion");
  const row = document.querySelector(".output");
  
  const renderCol = (arr) => {
    const col1 = document.createElement("div");
  
    arr.forEach((el) => {
      const accordion__wrap = document.createElement("div");
      const accordion__name = document.createElement("div");
      const accordion__content = document.createElement("div");
      const title = document.createElement("p");
      const text = document.createElement("p");
      const img = document.createElement("img");
  
      accordion__wrap.className = "accordion__wrap";
      accordion__name.className = "accordion__name";
      accordion__content.className = "accordion__content";
      img.className = "plus";
      text.className = "text__acc"
  
      title.textContent = el.title;
      text.textContent = el.text;
      img.src = "./img/plus.png";
  
      accordion__content.append(text);
      accordion__name.append(title, img);
      accordion__wrap.append(accordion__name, accordion__content);
      col1.append(accordion__wrap);
    });
  
    col1.className = "col-6";
  
    row.append(col1);
  };
  renderCol(first);
  renderCol(second);
  
  const accordion__wraps = document.querySelectorAll(".accordion__wrap");
  const accordion__content = document.querySelectorAll(".accordion__content");
  
  accordion__content.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
  
  
  const activeButton1 = () => {
    accordion__wraps.forEach((el, parentIndex) => {
      el.addEventListener("click", () => {
        accordion__wraps.forEach((item, childIndex) => {
          if (parentIndex === childIndex) {
            item.classList.toggle("accordion__active");
          } else if (parentIndex !== childIndex) {
            item.classList.remove("accordion__active");
          }
        });
      });
    });
  };
  activeButton1();
