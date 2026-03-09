// Product data derived from inventario_productos.csv
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
}

// Category mapping derived from categorias_productos.csv
export const CATEGORIES = {
  EPP: "Equipo de Protección Personal",
  SENALIZACION: "Señalización y Delimitación",
  ACCESORIOS: "Accesorios de Seguridad",
  HERRAMIENTAS: "Herramientas y Equipos",
} as const;

export const SUBCATEGORIES: Record<string, string[]> = {
  EPP: [
    "Protección de Cabeza",
    "Protección Ocular/Facial",
    "Protección Respiratoria",
    "Protección Auditiva",
    "Protección de Manos",
    "Calzado Industrial",
    "Ropa de Trabajo",
    "Alta Visibilidad",
    "Seguridad en Alturas",
  ],
  SENALIZACION: ["Cintas", "Mallas", "Señalamientos"],
  ACCESORIOS: ["Soportes", "Complementos"],
  HERRAMIENTAS: ["Cuerdas", "Equipos Diversos"],
};

// Helper function to categorize products based on name
function categorizeProduct(name: string): { category: string; subcategory: string } {
  const nameLower = name.toLowerCase();
  
  // Seguridad en Alturas
  if (nameLower.includes("arnes") || nameLower.includes("arnés") || nameLower.includes("linea de vida")) {
    return { category: "EPP", subcategory: "Seguridad en Alturas" };
  }
  
  // Protección de Cabeza
  if (nameLower.includes("casco") || nameLower.includes("barbiquejo") || nameLower.includes("barboquejo") || nameLower.includes("cubre nuca")) {
    return { category: "EPP", subcategory: "Protección de Cabeza" };
  }
  
  // Protección Ocular/Facial
  if (nameLower.includes("lente") || nameLower.includes("careta") || nameLower.includes("goggle")) {
    return { category: "EPP", subcategory: "Protección Ocular/Facial" };
  }
  
  // Protección Respiratoria
  if (nameLower.includes("mascarilla") || nameLower.includes("respirador")) {
    return { category: "EPP", subcategory: "Protección Respiratoria" };
  }
  
  // Protección Auditiva
  if (nameLower.includes("orejera") || nameLower.includes("tapon")) {
    return { category: "EPP", subcategory: "Protección Auditiva" };
  }
  
  // Protección de Manos
  if (nameLower.includes("guante")) {
    return { category: "EPP", subcategory: "Protección de Manos" };
  }
  
  // Calzado Industrial
  if (nameLower.includes("bota") || nameLower.includes("calzado")) {
    return { category: "EPP", subcategory: "Calzado Industrial" };
  }
  
  // Ropa de Trabajo
  if (nameLower.includes("overol") || nameLower.includes("blusa") || 
      nameLower.includes("camisa") || nameLower.includes("pantalon") || 
      nameLower.includes("pantalón") || nameLower.includes("impermeable")) {
    return { category: "EPP", subcategory: "Ropa de Trabajo" };
  }
  
  // Alta Visibilidad
  if (nameLower.includes("chaleco")) {
    return { category: "EPP", subcategory: "Alta Visibilidad" };
  }
  
  // Señalización
  if (nameLower.includes("cinta") || nameLower.includes("malla")) {
    return { category: "SENALIZACION", subcategory: "Cintas" };
  }
  
  // Accesorios
  if (nameLower.includes("faja") || nameLower.includes("rodillera") || 
      nameLower.includes("peto") || nameLower.includes("mandil")) {
    return { category: "ACCESORIOS", subcategory: "Complementos" };
  }
  
  // Herramientas
  if (nameLower.includes("cuerda")) {
    return { category: "HERRAMIENTAS", subcategory: "Cuerdas" };
  }
  
  // Default to EPP
  return { category: "EPP", subcategory: "Protección de Manos" };
}

// Raw product data from CSV
export const PRODUCTS: Product[] = [
  { id: "1", name: "Arnés de Seguridad", description: "ARNÉS DE SEGURIDAD DE 3 AROS" },
  { id: "2", name: "Línea de Vida", description: "LÍNEA DE VIDA TEJIDA" },
  { id: "3", name: "Casco de Seguridad", description: "CASCO AP CACHUCHA BLANCO SUSP/PUNTOS" },
  { id: "4", name: "Chaleco", description: "CHALECO REPORTERO POLIÉSTER VERDE MANZANA" },
  { id: "5", name: "Careta", description: "CARETA PARA SOLDADOR ADAPTABLE A CASCO MSA TIPO CACHUCHA" },
  { id: "6", name: "Overol", description: "OVEROL 100% ALGODÓN RETARDANTE AL FUEGO, COLOR CONTRASTANTE AL MAR, PARA CONTRATISTAS ES EL COLOR NARANJA CON CINTAS REFLEJANTES (NRF-006-PEMEX-2011 CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA Y EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 TALLA 40" },
  { id: "7", name: "Arnés de Seguridad V-Form", description: "ARNÉS V-FORM RACEFORM PECHO, TALLA ESTÁNDAR, 1 ARGOLLA D (EN ESPALDA), AJUSTE RÁPIDO EN PIERNAS MSA" },
  { id: "8", name: "Barbiquejo", description: "BARBIQUEJO PARA CASCO DE SEGURIDAD" },
  { id: "9", name: "Blusa", description: "BLUSA AZUL CON LOGO DE ESEASA OFFSHORE CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018 TALLA MEDIANA" },
  { id: "10", name: "Blusa Casual", description: "BLUSA: CASUAL DE GABARDINA OXFORD 100% ALGODÓN COLOR BLANCA MODELO: BLCSML0A2978D TALLA XCH" },
  { id: "11", name: "Blusa Ejecutiva", description: "BLUSA: EJECUTIVA CUADRITOS CHEKERS MODELO: BLEJSMLE0732D" },
  { id: "12", name: "Bota de Seguridad Ropper", description: "BOTA DE CASQUILLO TIPO ROPPER DE SEGURIDAD TIPO II. MODELO 802-B No. 32" },
  { id: "13", name: "Bota de Seguridad con Casquillo", description: "BOTA DE SEGURIDAD CON CASQUILLO #28.5" },
  { id: "14", name: "Bota Red Wing", description: "BOTA DE SEGURIDAD MCA. RED WING SHOES MODELO 8241 TALLA 39" },
  { id: "15", name: "Bota Tipo Petrolero", description: "BOTA DE SEGURIDAD TIPO PETROLERO #8" },
  { id: "16", name: "Bota Petrolera", description: "BOTA TIPO PETROLERA TALLA 9" },
  { id: "17", name: "Camisa de Mezclilla", description: "CAMISA DE MEZCLILLA DE 13.5 ONZAS COLOR AZUL MANDA LARGA Y PANTALÓN DE MEZCLILLA CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018. TALLA 42" },
  { id: "18", name: "Calzado Borceguí", description: "CALZADO BORCEGUÍ DE SEGURIDAD TIPO II (PP) MODELO: 072 No 22" },
  { id: "19", name: "Camisa Azul Celeste", description: "CAMISA COLOR AZUL CELESTE MANGA LARGA CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018. TALLA 44" },
  { id: "20", name: "Camisa Vigilancia", description: "CAMISA COLOR AZUL MARINO MANGA LARGA CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 ADEMÁS DE LA IMAGEN DE LA PALABRA DEL ÁREA DONDE SE DESEMPEÑA EN ESTE CASO VIGILANCIA, EN EL BRAZO IZQUIERDO DEBERÁ LLEVAR BORDADA LA IMAGEN DE LA BANDERA DE MÉXICO TALLA 42" },
  { id: "21", name: "Camisa Azul Marino", description: "CAMISA COLOR AZUL MARINO TALLA 34" },
  { id: "22", name: "Camisa Personalizada", description: "CAMISA DE ALGODÓN COLOR AZUL CLARO CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA Y EN LA PARTE FRONTAL DERECHA DEBERÁ ESTAR BORDADO EL NOMBRE COMPLETO DEL TRABAJADOR. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018. TALLA 34" },
  { id: "23", name: "Camisa Algodón", description: "CAMISA ALGODÓN AZUL MARINO TALLA 36" },
  { id: "24", name: "Camisa y Pantalón Mezclilla", description: "CAMISA DE MEZCLILLA DE 13.5 ONZAS COLOR AZUL MANDA LARGA Y PANTALÓN DE MEZCLILLA CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018. TALLA 32" },
  { id: "25", name: "Camisa Mezclilla 7.5oz", description: "CAMISA DE MEZCLILLA DE 7.5 ONZAS COLOR AZUL MANDA LARGA CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA. EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015 E ISO 45001:2018. TALLA 28" },
  { id: "26", name: "Camisa Mezclilla Grande", description: "CAMISA MEZCLILLA TALLA 46" },
  { id: "27", name: "Casco MSA Clase E Blanco", description: "CASCO CLASE E TIPO 1 MCA. MSA COLOR BLANCO, ALA ANCHA" },
  { id: "28", name: "Casco Amarillo", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR AMARILLO, ALA ANCHA, MSA" },
  { id: "29", name: "Casco Anaranjado", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR ANARANJADO, ALA ANCHA, MSA" },
  { id: "30", name: "Casco Azul con Matraca", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR AZUL, ALA ANCHA, MSA, CON MATRACA" },
  { id: "31", name: "Casco Azul Claro", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR AZUL CLARO, ALA ANCHA, MSA" },
  { id: "32", name: "Casco Azul Fuerte Matraca", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR AZUL FUERTE, ALA ANCHA, MSA CON MATRACA" },
  { id: "33", name: "Casco Azul Cachucha", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR AZUL FUERTE, TIPO CACHUCHA, MSA" },
  { id: "34", name: "Casco Blanco Estándar", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR BLANCO, ALA ANCHA, MSA" },
  { id: "35", name: "Casco Rojo", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR ROJO, ALA ANCHA, MSA" },
  { id: "36", name: "Casco Naranja Ala Ancha", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR ANARANJADO ALA ANCHA, MSA" },
  { id: "37", name: "Casco Rojo Matraca", description: "CASCO DE SEGURIDAD, CLASE E, TIPO 1, COLOR ROJO ALA ANCHA, MSA, CON MATRACA" },
  { id: "38", name: "Chaleco Azul", description: "CHALECO COLOR AZUL" },
  { id: "39", name: "Chaleco Repsol", description: "CHALECO SEGURIDAD COLOR NARANJA CON LOGO REPSOL EN LA PARTE TRASERA" },
  { id: "40", name: "Chaleco Reflejante", description: "CHALECO REFLEJANTE NARANJA" },
  { id: "41", name: "Chaleco Rescatista", description: "CHALECO ROJO TIPO RESCATISTA CON CINTA REFLEJANTE UNITALLA" },
  { id: "42", name: "Chaleco Brigadista Beige", description: "CHALECO TIPO BRIGADISTA COLOR BEIGE" },
  { id: "43", name: "Chaleco Brigadista Verde", description: "CHALECO TIPO BRIGADISTA COLOR VERDE" },
  { id: "44", name: "Chaleco Brigadista Verde Limón", description: "CHALECO TIPO BRIGADISTA COLOR VERDE LIMÓN" },
  { id: "45", name: "Faja Lumbar", description: "FAJA SOPORTE LUMBAR Y ABDOMINAL CON CINTURÓN EXTRA" },
  { id: "46", name: "Guante Alto Impacto", description: "GUANTE DE ALTO IMPACTO GRADO 5 TALLA L" },
  { id: "47", name: "Guante Nitrilo", description: "GUANTE DE NITRILO ANSELL" },
  { id: "48", name: "Guante Soldador Largo", description: "GUANTES LARGOS PARA SOLDADOR REFORZADOS" },
  { id: "49", name: "Guante Argonero", description: "GUANTES PARA ARGONERO" },
  { id: "50", name: "Guante Látex", description: "GUANTES RECUBIERTOS DE LÁTEX MCA. ULINE SUPER GRIPTION® MOD. S-15332" },
  { id: "51", name: "Impermeable", description: "IMPERMEABLE TIPO GABARDINA EXTRA GRANDE" },
  { id: "52", name: "Lente Claro", description: "LENTE SEGURIDAD CLARO" },
  { id: "53", name: "Lente Kleenguard", description: "LENTES CLAROS DE SEGURIDAD KLEENGUARD 25679 / MSA COOPER" },
  { id: "54", name: "Lente Oscuro", description: "LENTES OBSCUROS DE SEGURIDAD" },
  { id: "55", name: "Orejera", description: "OREJERAS DE SEGURIDAD" },
  { id: "56", name: "Overol FR 38", description: "OVEROL 100% ALGODÓN RETARDANTE AL FUEGO, COLOR CONTRASTANTE AL MAR, PARA CONTRATISTAS ES EL COLOR NARANJA CON CINTAS REFLEJANTES (NRF-006-PEMEX-2011 CON EL LOGOTIPO DE LA EMPRESA BORDADO EN LA PARTE FRONTAL IZQUIERDA Y EN LA MANGA DERECHA DEBERÁ LLEVAR BORDADO LA ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 TALLA 38" },
  { id: "57", name: "Overol Grande", description: "OVEROL TALLA 50" },
  { id: "58", name: "Pantalón Mezclilla", description: "PANTALÓN MEZCLILLA TALLA 32" },
  { id: "59", name: "Pantalón Gabardina", description: "PANTALÓN: GABARDINA COLOR AZUL MODELO: PACSCREU0110D" },
  { id: "60", name: "Peto de Carnaza", description: "PETO DE CARNAZA" },
  { id: "61", name: "Rodilleras", description: "RODILLERAS" },
  { id: "62", name: "Guante Anticorte Nitrilo", description: "GUANTE ANTI-CORTE DE NITRILO, TALLA M, TRUPER COD. 15266" },
  { id: "63", name: "Guante Anticorte PU", description: "GUANTE ANTI-CORTE DE POLIUTERANO, TALLA M TRUPER COD. 15267" },
  { id: "64", name: "Guante de Tela", description: "GUANTES DE TELA" },
  { id: "65", name: "Lente Oscuro Standard", description: "LENTES DE SEGURIDAD OSCUROS" },
  { id: "66", name: "Lente Claro Standard", description: "LENTES DE SEGURIDAD CLAROS" },
  { id: "67", name: "Guante Carnaza", description: "GUANTE DE CARNAZA, MARCA PRETUL" },
  { id: "68", name: "Faja Sacrolumbar", description: "FAJA SACROLUMBAR, TALLA M y G" },
  { id: "69", name: "Cubre Nuca", description: "CUBRE NUCA" },
  { id: "70", name: "Arnés Standard", description: "ARNÉS DE SEGURIDAD" },
  { id: "71", name: "Cinta Amarilla Precaución", description: "CINTA DELIMITADORA (AMARILLA DE PRECAUCIÓN)" },
  { id: "72", name: "Línea de Vida Standard", description: "LÍNEA DE VIDA" },
  { id: "73", name: "Malla Naranja", description: "MALLA NARANJA DE SEGURIDAD" },
  { id: "74", name: "Cinta Adherible", description: "CINTA ADHERIBLE (AMARILLA C/NEGRO)" },
  { id: "75", name: "Cascos Standard", description: "CASCOS DE SEGURIDAD" },
  { id: "76", name: "Cuerda 3/4", description: 'CUERDA 3/4"' },
  { id: "77", name: "Chaleco Standard", description: "CHALECO DE SEGURIDAD" },
  { id: "78", name: "Barbiquejo Standard", description: "BARBIQUEJOS" },
  { id: "79", name: "Cinta Roja Peligro", description: "CINTA DELIMITADORA (ROJA DE PELIGRO)" },
  { id: "80", name: "Mascarilla", description: "MASCARILLAS" },
  { id: "81", name: "Rodilleras Soldador", description: "RODILLERAS PARA SOLDADORES" },
  { id: "82", name: "Mandil", description: "MANDILES TALLA M" },
  { id: "83", name: "Bota Hule 7", description: "BOTAS DE HULE TALLA 7" },
  { id: "84", name: "Bota Hule 9", description: "BOTAS DE HULE TALLA 9" },
  { id: "85", name: "Careta Standard", description: "CARETA" },
  { id: "86", name: "Tapones Auditivos", description: "TAPONES AUDITIVOS" },
].map(product => ({
  ...product,
  ...categorizeProduct(product.name),
}));

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return PRODUCTS.filter(p => p.subcategory === subcategory);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}
