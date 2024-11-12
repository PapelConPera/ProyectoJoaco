// Simulación de las aulas en una "base de datos"
const aulas = [
    { id: 101, nombre: "Aula101" },
    { id: 102, nombre: "Aula 102" },
    { id: 103, nombre: "Aula 103" },
    { id: 104, nombre: "Aula 104" },
    { id: 105, nombre: "Aula 105" },
    { id: 111, nombre: "Aula 111" },
    { id: 112, nombre: "Aula 112" },
    { id: 113, nombre: "Aula 113" },
    { id: 114, nombre: "Aula 114" },
    { id: 115, nombre: "Aula 115" },
    { id: 201, nombre: "Aula 201" },
    { id: 202, nombre: "Aula 202" },
    { id: 203, nombre: "Aula 203" },
    { id: 204, nombre: "Aula 204" },
    { id: 205, nombre: "Aula 205" },
    { id: 211, nombre: "Aula 211" },
    { id: 212, nombre: "Aula 212" },
    { id: 213, nombre: "Aula 213" },
    { id: 214, nombre: "Aula 214" },
    { id: 215, nombre: "Aula 215" },
    { id: 301, nombre: "Aula 301" },
    { id: 302, nombre: "Aula 302" },
    { id: 303, nombre: "Aula 303" },
    { id: 304, nombre: "Aula 304" },
    { id: 305, nombre: "Aula 305" },
    { id: 311, nombre: "Aula 311" },
    { id: 312, nombre: "Aula 312" },
    { id: 313, nombre: "Aula 313" },
    { id: 314, nombre: "Aula 314" },
    { id: 315, nombre: "Aula 315" },
  ];
  
  // Función para buscar aulas por nombre
  function searchAulas() {
    const nameQuery = document.getElementById("search-name").value.toLowerCase();
    const results = aulas.filter(aula => aula.nombre.toLowerCase().includes(nameQuery));
  
    displayResults(results);
  }
  
  // Función para mostrar los resultados
  function displayResults(results) {
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ''; // Limpiar resultados previos
  
    if (results.length > 0) {
      results.forEach(aula => {
        const listItem = document.createElement("li");
        listItem.textContent = `Aula ${aula.id}: ${aula.nombre}`;
        resultsList.appendChild(listItem);
      });
    } else {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "No se encontraron aulas que coincidan con el nombre.";
      resultsList.appendChild(noResultsItem);
    }
  }
  