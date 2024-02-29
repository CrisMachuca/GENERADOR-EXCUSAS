window.onload = () => {
    // objeto para almacenar las imagenes
    const images = {
      "The dog":
        "https://pbs.twimg.com/profile_images/993148468318343173/eUEvdN4x_400x400.jpg",
      "My grandma":
        "https://t1.uc.ltmcdn.com/es/posts/5/5/8/como_disfrazarse_de_abuela_29855_600_square.jpg",
      "His turtle":
        "https://www.tiendanimal.es/articulos/wp-content/uploads/2012/03/tortuga-tierra-casa-1-1200x675.jpg",
      "My bird": "https://cdnb.20m.es/cronicaverde/files/Ibis5.jpg"
    };
    // función para generar nueva excusa
    const newExcuse = () => {
      const who = ["The dog", "My grandma", "His turtle", "My bird"];
      const action = ["ate", "peed", "crushed", "broke"];
      const what = ["my homework", "the keys", "the car"];
      const when = [
        "before the class",
        "right on time",
        "when I finished",
        "during my lunch",
        "while I was praying"
      ];
      const whoNew = Math.floor(Math.random() * who.length);
      const actionNew = Math.floor(Math.random() * action.length);
      const whatNew = Math.floor(Math.random() * what.length);
      const whenNew = Math.floor(Math.random() * when.length);
  
      return {
        who: who[whoNew],
        action: action[actionNew],
        what: what[whatNew],
        when: when[whenNew]
      };
    };
    // función para actualizar el contenido de la excusa incluyendo las imagenes
    const updateExcuse = () => {
      const excuse = newExcuse();
      const excuseText = `${excuse.who} ${excuse.action} ${excuse.what} ${excuse.when}`;
      const excuseImageURL = images[excuse.who];
  
      document.getElementById("excuse").textContent = excuseText;
  
      // Encuentra el contenedor de las imágenes o crea uno si no existe
      let imageContainer = document.getElementById("img-container");
      if (!imageContainer) {
        imageContainer = document.createElement("div");
        imageContainer.id = "img-container";
        document.body.appendChild(imageContainer);
      } else {
        // Vacía el contenedor antes de agregar la nueva imagen
        imageContainer.innerHTML = "";
      }
  
      // Crea un elemento de imagen para la excusa actual
      const imageElement = document.createElement("img");
      imageElement.src = excuseImageURL;
      imageElement.alt = excuse.who;
      imageElement.style.width = "100%";
      imageElement.style.height = "100%";
  
      // Agrega la imagen al contenedor
      imageContainer.appendChild(imageElement);
    };
  
    // genera una excusa automáticamente cada n segundos
    const intervaloSegundos = 5;
    setInterval(updateExcuse, intervaloSegundos * 1000);
  
    // Genera y muestra una excusa inmediatamente al cargar la página
    updateExcuse();
  
    // Asigna el evento mouseup al botón para generar nuevas excusas
    document.getElementById("btn").addEventListener("mouseup", () => {
      updateExcuse();
      // Restablece el estado original del botón
      document.getElementById("btn").blur();
    });
  };
  