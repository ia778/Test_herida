/* Contenido basado en "Las cinco heridas que impiden ser uno mismo" — Lise Bourbeau.
   Adaptado con tono cálido y cercano para la app de Vibrando en Dorado. */

window.OPCIONES = [
  { label: "Nada",     valor: 0 },
  { label: "Un poco",  valor: 1 },
  { label: "Bastante", valor: 2 },
  { label: "Mucho",    valor: 3 },
];

window.HERIDAS = {
  rechazo: {
    id: "rechazo",
    nombre: "Rechazo",
    mascara: "Huidizo",
    color: "#9c7836",
    despierta: "Desde la concepción hasta el primer año, con el progenitor del mismo sexo.",
    esencia: "El miedo a no tener derecho a existir.",
    descripcion:
      "La herida de rechazo despierta de las primeras. Quien la vive llegó a sentir que no tenía lugar en este mundo, que sobraba. Para no sentir ese dolor aprendiste a huir: del cuerpo, de las situaciones y a veces de ti mismo/a. Te vuelves experto/a en pasar desapercibido/a, en refugiarte en tu mundo interior y en desaparecer cuando algo te duele.",
    mascaraTexto:
      "La máscara del huidizo busca volverse invisible. Te alejas, te aíslas, te exiges la perfección para sentir que mereces estar. Bajo esa coraza late el deseo profundo de ser visto/a y querido/a tal como eres.",
    fortalezas: [
      "Gran capacidad para crear, inventar e imaginar.",
      "Sabes trabajar solo/a y disfrutar de tu propia compañía.",
      "Eres eficaz y atiendes los detalles que otros no ven.",
      "En una urgencia mantienes la calma y sabes qué hacer.",
    ],
  },
  abandono: {
    id: "abandono",
    nombre: "Abandono",
    mascara: "Dependiente",
    color: "#b15c3c",
    despierta: "Entre el primer y el tercer año, con el progenitor del sexo opuesto.",
    esencia: "El miedo profundo a quedarse solo/a.",
    descripcion:
      "La herida de abandono nace cuando sentiste que el alimento afectivo no alcanzaba. Desde entonces buscas presencia, compañía y apoyo para sostenerte. Te cuesta estar solo/a y a veces te aferras a quienes amas por temor a perderlos.",
    mascaraTexto:
      "La máscara del dependiente busca a alguien que lo sostenga. Pides apoyo, atención y cariño constante, y puedes dramatizar tu dolor para no sentirte solo/a. Debajo vive un corazón leal con una enorme capacidad de amar.",
    fortalezas: [
      "Sabes lo que deseas: eres tenaz y perseverante.",
      "Tienes un don natural para captar la atención y emocionar.",
      "Eres alegre, sociable y contagias tus ganas de vivir.",
      "Eres empático/a: sientes de verdad lo que le pasa al otro.",
    ],
  },
  humillacion: {
    id: "humillacion",
    nombre: "Humillación",
    mascara: "Masoquista",
    color: "#8a6a3a",
    despierta: "Entre el primer y el tercer año, ligada a la madre o a quien cuidó tu desarrollo físico.",
    esencia: "La vergüenza y el sentirse indigno/a.",
    descripcion:
      "La herida de humillación se forma alrededor del cuerpo, el placer y las necesidades. Aprendiste a sentir vergüenza y a ponerte al servicio de los demás, cargando lo que no te corresponde para sentirte digno/a de amor. Te cuesta recibir; te sientes mejor dando.",
    mascaraTexto:
      "La máscara del masoquista se olvida de sí para atender a todos. Asumes culpas ajenas, te restas placer y te exiges sacrificio. Debajo hay una persona generosa que merece recibir tanto como da.",
    fortalezas: [
      "Eres audaz y sabes desenvolverte en muchos ámbitos.",
      "Eres buen mediador/a: concilias y ves con objetividad.",
      "Eres generoso/a, servicial y haces sentir cómodos a los demás.",
      "Cuando sanas, conoces tus necesidades y las respetas con dignidad.",
    ],
  },
  traicion: {
    id: "traicion",
    nombre: "Traición",
    mascara: "Controlador",
    color: "#a8753f",
    despierta: "Entre los dos y los cuatro años, con el progenitor del sexo opuesto.",
    esencia: "La desconfianza tras una promesa rota.",
    descripcion:
      "La herida de traición despierta alrededor de la confianza. Sentiste que rompieron un compromiso contigo y aprendiste a controlar, a ser fuerte y a no mostrar tu vulnerabilidad para no volver a sufrir. Te cuesta delegar y soltar.",
    mascaraTexto:
      "La máscara del controlador necesita tenerlo todo bajo control. Te muestras fuerte, impaciente y exiges que se cumpla lo prometido. Debajo hay un corazón que solo quiere confiar y descansar en alguien.",
    fortalezas: [
      "Tienes cualidades de líder: das seguridad y proteges.",
      "Eres talentoso/a, sociable y con buen sentido del humor.",
      "Decides sin titubear y logras grandes cosas.",
      "Reconoces el talento de los demás y los ayudas a confiar en sí mismos.",
    ],
  },
  injusticia: {
    id: "injusticia",
    nombre: "Injusticia",
    mascara: "Rígido",
    color: "#7e6235",
    despierta: "Entre los cuatro y los seis años, con el progenitor del mismo sexo.",
    esencia: "La exigencia y la búsqueda de perfección.",
    descripcion:
      "La herida de injusticia se desarrolla en torno a lo justo y lo correcto. Aprendiste a controlarte, a buscar la perfección y a reprimir lo que sientes para que todo esté bien. Te cuesta conectar con tus emociones y permitirte el error.",
    mascaraTexto:
      "La máscara del rígido se exige perfección y orden. Dices «estoy bien» aunque por dentro no lo estés, y te cuesta recibir. Debajo hay una persona sensible y luminosa que merece soltarse y sentir.",
    fortalezas: [
      "Eres creativo/a, dinámico/a y con gran capacidad de trabajo.",
      "Eres ordenado/a y excelente en tareas que exigen precisión.",
      "Sabes explicar con claridad y enseñar lo que dominas.",
      "Eres muy sensible y afrontas con entereza las situaciones difíciles.",
    ],
  },
};

window.ORDEN_HERIDAS = ["rechazo", "abandono", "humillacion", "traicion", "injusticia"];

/* 10 afirmaciones por herida. Se responden en escala 0–3 (Nada → Mucho). */
window.PREGUNTAS = [
  // RECHAZO — Huidizo
  { h: "rechazo", t: "¿Sientes a menudo que no tienes derecho a existir o que tu presencia molesta a los demás?" },
  { h: "rechazo", t: "¿Prefieres la soledad porque el contacto social prolongado te hace sentir asfixiado/a?" },
  { h: "rechazo", t: "¿Buscas la perfección absoluta en lo que haces por miedo a ser juzgado/a y rechazado/a?" },
  { h: "rechazo", t: "¿Tu primera reacción ante un conflicto es desaparecer, huir o quedarte con la mente en blanco?" },
  { h: "rechazo", t: "¿Te cuesta creer que alguien pueda amarte de verdad por quién eres y no por tus logros?" },
  { h: "rechazo", t: "¿Usas con frecuencia palabras como «nulo», «nada», «inexistente» o «borrar»?" },
  { h: "rechazo", t: "¿Te sientes a menudo fuera de lugar, como un/a «turista» en grupos sociales o familiares?" },
  { h: "rechazo", t: "¿Dudas de tus capacidades incluso cuando recibes elogios constantes?" },
  { h: "rechazo", t: "¿Tiendes a desapegarte de lo material para poder «huir» rápido si hiciera falta?" },
  { h: "rechazo", t: "¿Sientes pánico ante la idea de ser el centro de atención o recibir demasiada mirada ajena?" },

  // ABANDONO — Dependiente
  { h: "abandono", t: "¿Sientes con frecuencia una tristeza profunda y un vacío interior que no se llena nunca?" },
  { h: "abandono", t: "¿Te cuesta mucho desprenderte de personas o cosas, y acumulas objetos innecesarios?" },
  { h: "abandono", t: "¿Tienes celos o berrinches cuando sientes que alguien decide no estar contigo?" },
  { h: "abandono", t: "¿Sueles dramatizar situaciones o enfermarte para llamar la atención y recibir apoyo?" },
  { h: "abandono", t: "¿Te resulta muy difícil tomar decisiones por ti mismo/a sin pedir opinión o aprobación?" },
  { h: "abandono", t: "¿Tienes un miedo profundo a la soledad y buscas compañía a cualquier precio?" },
  { h: "abandono", t: "¿Aceptas situaciones o relaciones poco sanas solo por miedo a que te dejen?" },
  { h: "abandono", t: "¿Pides constantemente que las personas te reafirmen su amor y su permanencia a tu lado?" },
  { h: "abandono", t: "¿Sientes que no puedes lograr nada solo/a y que necesitas a alguien que te «sostenga»?" },
  { h: "abandono", t: "¿Usas con frecuencia palabras como «solo», «ausente», «no soporto» o «devoro»?" },

  // HUMILLACIÓN — Masoquista
  { h: "humillacion", t: "¿Te sientes a menudo responsable de la felicidad de los demás y cargas con sus problemas?" },
  { h: "humillacion", t: "¿Te avergüenzas de tu propio cuerpo o de tus acciones y te criticas constantemente?" },
  { h: "humillacion", t: "¿Haces bromas sobre ti mismo/a para que otros rían, aunque te duela?" },
  { h: "humillacion", t: "¿Te cuesta mucho atender tus propias necesidades de salud, alimentación o descanso?" },
  { h: "humillacion", t: "¿Sientes que la sexualidad es un tema tabú o que el placer es algo «sucio» o vergonzoso?" },
  { h: "humillacion", t: "¿Tiendes a comer en exceso (sobre todo grasas o dulces) como recompensa o castigo?" },
  { h: "humillacion", t: "¿Usas muchos diminutivos al hablar (por ejemplo «un minutito», «una pequeña idea»)?" },
  { h: "humillacion", t: "¿Te pones siempre en último lugar, priorizando las expectativas de quienes te rodean?" },
  { h: "humillacion", t: "¿Sientes que das mucho a los demás pero terminan abusando de tu generosidad?" },
  { h: "humillacion", t: "¿Tienes un miedo intenso a la libertad total porque crees que no sabrás controlarte?" },

  // TRAICIÓN — Controlador
  { h: "traicion", t: "¿Sientes que no puedes confiar en nadie y que todos son culpables hasta demostrar lo contrario?" },
  { h: "traicion", t: "¿Necesitas tener el control total de las situaciones y de las personas a tu alrededor?" },
  { h: "traicion", t: "¿Tienes pensamientos recurrentes sobre que te van a engañar o mentir?" },
  { h: "traicion", t: "¿Te enfureces o impacientas rápido cuando las cosas no salen a tu ritmo o según lo previsto?" },
  { h: "traicion", t: "¿Te importa mucho tu reputación y proyectar una imagen de persona fuerte y responsable?" },
  { h: "traicion", t: "¿Te cuesta mucho mostrar tu vulnerabilidad o recibir ayuda de otros?" },
  { h: "traicion", t: "¿Usas la seducción para influir en situaciones o para sentirte especial e importante?" },
  { h: "traicion", t: "¿Te aterroriza que te mientan, aunque a veces deformes la verdad para justificarte?" },
  { h: "traicion", t: "¿Te cuesta delegar tareas porque crees que nadie las hará tan bien como tú?" },
  { h: "traicion", t: "¿Tu mayor temor es la separación o la ruptura en tus relaciones?" },

  // INJUSTICIA — Rígido
  { h: "injusticia", t: "¿Sueles ver la realidad en «blanco o negro» y te cuesta aceptar matices o puntos medios?" },
  { h: "injusticia", t: "¿Te consideras perfeccionista extremo/a y te criticas con dureza si cometes un error?" },
  { h: "injusticia", t: "¿Te cuesta mucho permitirte sentir o mostrar sensibilidad ante los demás?" },
  { h: "injusticia", t: "¿Usas con frecuencia palabras como «siempre», «nunca», «exactamente» o «justamente»?" },
  { h: "injusticia", t: "¿Te sientes culpable si te relajas o diviertes sin haber «merecido» ese descanso?" },
  { h: "injusticia", t: "¿Te cuesta recibir regalos porque te sientes en deuda de inmediato?" },
  { h: "injusticia", t: "¿Te exiges tanto que a menudo llegas al agotamiento físico o profesional?" },
  { h: "injusticia", t: "¿Tiendes a negar tus problemas diciendo que «todo está súper bien» para no mostrar debilidad?" },
  { h: "injusticia", t: "¿Sientes que la vida ha sido injusta contigo y eres muy sensible al trato desigual?" },
  { h: "injusticia", t: "¿Tu cuerpo tiende a estar rígido, con movimientos secos y una postura muy derecha?" },
];

window.CONTACTO = {
  nombre: "Viviana Blasco",
  rol: "Terapeuta en Bioneuroemoción · PNL · Hipnosis · Constelaciones Sistémicas",
  email: "biovibconsultorio@gmail.com",
  // ── Para recibir los comentarios en tu email automáticamente ──
  // 1) Entra a https://web3forms.com  2) Escribe tu email biovibconsultorio@gmail.com
  // 3) Te llega una "Access Key" por correo  4) Pégala aquí entre las comillas.
  // Si lo dejas vacío, el botón abre la app de correo del visitante (modo respaldo).
  web3formsKey: "",
  tel: "+5492664588715",
  whatsapp: "5492664588715",
  instagram: "vibrandoendorado",
  instagramUrl: "https://www.instagram.com/vibrandoendorado/",
  facebook: "Vibrando en Dorado",
  facebookUrl: "https://www.facebook.com/profile.php?id=61566475604495",
  tiktok: "vibrando_en_dorado",
  tiktokUrl: "https://www.tiktok.com/@vibrando_en_dorado",
  // URL pública de la app (para el botón "Compartir mi resultado").
  // Cuando publiques en GitHub Pages, reemplázala por tu dirección real.
  appUrl: "https://vibrandoendorado.github.io/heridas_de_la_infancia/",
};

/* Datos del taller presencial — se muestran en el resultado del test. */
window.TALLER = {
  titulo: "Integrar para ser",
  subtitulo: "Un viaje vivencial a tu niñ@ herid@",
  descripcion:
    "Si tu herida resonó contigo, te invito a transitarla en un espacio presencial y amoroso, desde las Constelaciones Familiares. Reservá tu lugar.",
  // Formulario de inscripción (Google Forms).
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfv4GD9Gs_G6ls_3YVy2Ye3Khqf5Lou8NFynjAWTrT3HvywFQ/viewform?usp=header",
  // Página del taller (más información).
  landingUrl: "https://vibrandoendorado.github.io/heridasdelainfancia/",
};
