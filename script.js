const enfermedades = [
    {
      nombre: "Mildiu",
      sintomas: "Manchas amarillas en hojas, luego se vuelven marrones.",
      solucion: "Eliminar hojas afectadas, usar fungicida de cobre."
    },
    {
      nombre: "Oidio",
      sintomas: "Polvo blanco en hojas.",
      solucion: "Mejorar ventilación, aplicar fungicida natural."
    },
    {
      nombre: "Araña Roja",
      sintomas: "Hojas con puntitos amarillos y telarañas.",
      solucion: "Rociar con agua jabonosa o insecticida natural."
    },
    {
      nombre: "Botritis",
      sintomas: "Moho grisáceo en flores y hojas.",
      solucion: "Retirar partes afectadas, mejorar ventilación."
    }
  ];
  
  const input = document.getElementById("buscador");
  const resultados = document.getElementById("resultados");
  
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    resultados.innerHTML = "";
  
    const filtradas = enfermedades.filter(e =>
      e.nombre.toLowerCase().includes(query) ||
      e.sintomas.toLowerCase().includes(query)
    );
  
    if (filtradas.length === 0) {
      resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
      filtradas.forEach(enfermedad => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${enfermedad.nombre}</h3>
          <p><strong>Síntomas:</strong> ${enfermedad.sintomas}</p>
          <p><strong>Solución:</strong> ${enfermedad.solucion}</p>
        `;
        resultados.appendChild(card);
      });
    }
  });
  