const { useState, useEffect, useRef } = React;

/* ---------- Iconos ---------- */
const I = {
  home: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/></svg>),
  spark: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M18 18l-2.5-2.5M18 6l-2.5 2.5M6 18l2.5-2.5"/><circle cx="12" cy="12" r="2.4"/></svg>),
  heart: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20s-7-4.5-9.2-9C1.3 8 2.8 5 5.8 5c1.9 0 3.2 1.2 3.9 2.4l.3.5.3-.5C11 6.2 12.3 5 14.2 5c3 0 4.5 3 3 6-2.2 4.5-9.2 9-9.2 9Z"/></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>),
  back: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 5l-7 7 7 7"/></svg>),
  arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  phone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h4l1.5 5-2.3 1.3a13 13 0 0 0 5.5 5.5L15 13.5 20 15v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>),
  ig: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>),
  fb: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 8.5V7c0-.8.5-1 1-1h1.5V3H14c-2.2 0-3.5 1.4-3.5 3.7V8.5H8V11h2.5v10H14V11h2.3l.4-2.5H14Z"/></svg>),
  wa: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.6 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.2.1.4.2.5.3.1.2.1.7-.1 1.3Z"/></svg>),
  tk: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M16.5 3c.3 2 1.5 3.6 3.5 3.9v2.7c-1.3 0-2.5-.4-3.5-1v5.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V3h2.7Z"/></svg>),
  share: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>),
  close: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>),
  link: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 15l6-6M10.5 6.5l1-1a4 4 0 0 1 5.7 5.7l-2 2a4 4 0 0 1-5.7 0M13.5 17.5l-1 1a4 4 0 0 1-5.7-5.7l2-2a4 4 0 0 1 5.7 0"/></svg>),
  check: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12.5l4.5 4.5L19 6.5"/></svg>),
};

const heridaColor = (id) => window.HERIDAS[id].color;

/* ---------- Guardado del progreso (localStorage) ---------- */
const STORE_KEY = "t5h_answers";
const RESULT_KEY = "t5h_result";

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const arr = JSON.parse(raw);
    if (Array.isArray(arr) && arr.length === window.PREGUNTAS.length) return arr;
  } catch (e) {}
  return null;
}
function saveAnswers(a) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(a)); } catch (e) {}
}
function saveResult(obj) {
  try { localStorage.setItem(RESULT_KEY, JSON.stringify(obj)); } catch (e) {}
}

/* Mensajes de aliento que aparecen al alcanzar ciertas preguntas. */
const ALIENTO = {
  10: "Vas muy bien 🌿 Seguí con honestidad.",
  20: "Mitad del camino. Respirá y continúa.",
  30: "Tu sinceridad te acerca a ti. ✨",
  40: "Casi llegas. Las últimas con calma.",
};

/* Compartir el resultado (Web Share API con respaldo a WhatsApp). */
async function compartirResultado(h) {
  const c = window.CONTACTO;
  const texto = `Hice el Test de las 5 Heridas y descubrí mi herida de la infancia: ${h.nombre}. Te invito a descubrir la tuya 🌿`;
  const url = (c && c.appUrl) || window.location.href;
  const datos = { title: "Test de las 5 Heridas", text: texto, url };
  try {
    if (navigator.share && (!navigator.canShare || navigator.canShare(datos))) {
      await navigator.share(datos);
      return;
    }
  } catch (e) {
    // Si la persona cancela, no hacemos nada (no es un error real).
    if (e && e.name === "AbortError") return;
    // Cualquier otro fallo → seguimos al respaldo de WhatsApp.
  }
  try {
    window.open("https://wa.me/?text=" + encodeURIComponent(texto + " " + url), "_blank", "noopener");
  } catch (e2) {
    window.location.href = "https://wa.me/?text=" + encodeURIComponent(texto + " " + url);
  }
}

/* ---------- Menú de compartir reutilizable ---------- */
function ShareSheet({ open, onClose, title, subtitle, texto, url }) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;
  const full = texto + " " + url;
  const waHref = "https://wa.me/?text=" + encodeURIComponent(full);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(full);
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = full; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch (_) {}
      document.body.removeChild(ta);
    }
  };
  const nativeShare = async () => {
    onClose();
    try { if (navigator.share) await navigator.share({ title, text: texto, url }); } catch (e) {}
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-text">{subtitle}</p>
        <div className="share-options">
          <a className="share-opt" href={waHref} target="_blank" rel="noopener" onClick={onClose}>
            <span className="share-ico wa">{I.wa({style:{width:22,height:22}})}</span>
            <span>WhatsApp</span>
          </a>
          <button className="share-opt" onClick={copiar}>
            <span className="share-ico">{copied ? I.check({style:{width:22,height:22}}) : I.link({style:{width:22,height:22}})}</span>
            <span>{copied ? "¡Enlace copiado!" : "Copiar enlace"}</span>
          </button>
          {typeof navigator !== "undefined" && navigator.share && (
            <button className="share-opt" onClick={nativeShare}>
              <span className="share-ico">{I.share({style:{width:20,height:20}})}</span>
              <span>Más opciones…</span>
            </button>
          )}
        </div>
        <button className="btn btn-ghost btn-block" style={{marginTop:"16px"}} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

/* ---------- INICIO ---------- */
function Home({ go, hasProgress, resultReady, answered, total, onContinue, onViewResult, onStartFresh }) {
  const c = window.CONTACTO;
  const [showInvite, setShowInvite] = useState(false);
  const inviteTexto = "Te invito a hacer el Test de las 5 Heridas para descubrir tu herida de la infancia y empezar a sanar 🌿";
  const inviteUrl = (c && c.appUrl) || window.location.href;
  return (
    <div className="screen has-nav fade">
      <div className="home-hero pad-top">
        <div className="brand-mark" role="img" aria-label="Vibrando en Dorado"></div>
        <div className="wordmark">Vibrando en Dorado</div>
        <div className="rule"><span className="dot"></span></div>
        <p className="eyebrow center">Test de las 5 heridas</p>
        <h1 className="display">Un viaje a<br/><span className="ink">tu niñ@</span><br/>herid@</h1>
        <p className="lead" style={{marginTop: "18px"}}>
          Todos cargamos una herida que nació en la infancia y moldeó la forma en que nos protegemos.
          Reconocerla es el primer paso para sanar y volver a ti.
        </p>
        <div className="home-cta">
          {hasProgress ? (
            <React.Fragment>
              <p className="home-progress-note">Tienes el test a medio camino · {answered}/{total}</p>
              <button className="btn btn-primary btn-block" onClick={onContinue}>
                Continuar el test {I.arrow({style:{width:18,height:18}})}
              </button>
              <button className="btn btn-ghost btn-block" onClick={onStartFresh}>Empezar de nuevo</button>
            </React.Fragment>
          ) : resultReady ? (
            <React.Fragment>
              <button className="btn btn-primary btn-block" onClick={onViewResult}>
                Ver mi resultado {I.arrow({style:{width:18,height:18}})}
              </button>
              <button className="btn btn-ghost btn-block" onClick={onStartFresh}>Hacer el test otra vez</button>
            </React.Fragment>
          ) : (
            <button className="btn btn-primary btn-block" onClick={() => go("test-intro")}>
              Comenzar el test {I.arrow({style:{width:18,height:18}})}
            </button>
          )}
        </div>
      </div>

      <div className="therapist" style={{marginTop:"28px"}}>
        <img className="photo" src="assets/src-viviana.png" alt="Viviana Blasco"/>
        <div>
          <div className="t-name">{c.nombre}</div>
          <div className="t-role">{c.rol}</div>
        </div>
      </div>

      <div className="home-tiles">
        <button className="tile" onClick={() => go("heridas")}>
          <div className="tile-k">Las 5 heridas</div>
          <div className="tile-s">Conócelas una a una</div>
        </button>
        <button className="tile" onClick={() => go("contacto")}>
          <div className="tile-k">Contáctame</div>
          <div className="tile-s">Escríbeme directamente</div>
        </button>
      </div>

      <button className="btn btn-ghost btn-block" style={{marginTop:"12px"}} onClick={() => setShowInvite(true)}>
        {I.share({style:{width:18,height:18}})} Invitar a un amigo
      </button>

      <p style={{textAlign:"center", fontSize:"0.72rem", color:"var(--ink-faint)", margin:"22px 0 6px", lineHeight:1.5}}>
        Inspirado en <em>«Las 5 heridas que impiden ser uno mismo»</em><br/>de Lise Bourbeau
      </p>

      <ShareSheet open={showInvite} onClose={() => setShowInvite(false)} title="Invitar a un amigo" subtitle="Comparte el test y acompaña a alguien a conocerse mejor." texto={inviteTexto} url={inviteUrl}/>
    </div>
  );
}

/* ---------- SOBRE LAS HERIDAS ---------- */
function Heridas({ go }) {
  return (
    <div className="screen has-nav fade">
      <div className="head">
        <p className="eyebrow">Para conocerte mejor</p>
        <h2 className="title">Las cinco heridas</h2>
        <p className="lead" style={{marginTop:"12px"}}>
          Según Lise Bourbeau, todo nuestro sufrimiento puede resumirse en cinco heridas.
          Cada una crea una «máscara» que usamos para protegernos.
        </p>
      </div>
      <div className="wound-list">
        {window.ORDEN_HERIDAS.map((id) => {
          const h = window.HERIDAS[id];
          return (
            <div className="card wound-card" key={id}>
              <div className="wc-top">
                <span className="wc-name" style={{color:h.color}}>{h.nombre}</span>
                <span className="wc-mask" style={{background:h.color}}>{h.mascara}</span>
              </div>
              <div className="wc-essence">{h.esencia}</div>
              <p className="wc-desc">{h.descripcion}</p>
              <div className="wc-when"><span>🕊</span><span><b>Despierta:</b> {h.despierta}</span></div>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:"22px"}}>
        <button className="btn btn-gold btn-block" onClick={() => go("test-intro")}>
          Descubrir mi herida {I.arrow({style:{width:18,height:18}})}
        </button>
      </div>
    </div>
  );
}

/* ---------- TEST: intro ---------- */
function TestIntro({ go, start }) {
  return (
    <div className="screen fade" style={{display:"flex", flexDirection:"column"}}>
      <div className="head" style={{marginBottom:0}}>
        <button className="link-back" onClick={() => go("home")}>{I.back({style:{width:18,height:18}})} Inicio</button>
      </div>
      <div style={{flex:1, display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", paddingBottom:"30px"}}>
        <div className="brand-mark" style={{width:90, height:90}}></div>
        <p className="eyebrow center" style={{marginTop:"6px"}}>50 afirmaciones · 5 minutos</p>
        <h2 className="display" style={{fontSize:"2.7rem"}}>¿Lista para<br/><span className="ink">mirarte</span>?</h2>
        <p className="lead" style={{marginTop:"16px"}}>
          Lee cada frase y responde con honestidad cuánto resuena contigo hoy.
          No hay respuestas buenas ni malas: solo tu verdad.
        </p>
        <div className="closing" style={{marginTop:"24px", textAlign:"left", background:"var(--paper-warm)"}}>
          <p className="r-text" style={{fontSize:"0.88rem"}}>
            Responde desde el corazón, sin pensarlo demasiado. La primera reacción suele ser la más sincera.
          </p>
        </div>
      </div>
      <div style={{paddingBottom:"calc(20px + env(safe-area-inset-bottom))"}}>
        <button className="btn btn-primary btn-block" onClick={start}>Empezar ahora</button>
      </div>
    </div>
  );
}

/* ---------- TEST: en curso ---------- */
function TestRun({ answers, setAnswers, onFinish, onExit, onQuit }) {
  const [i, setI] = useState(() => {
    const first = answers.findIndex((a) => a === null);
    return first === -1 ? 0 : first;
  });
  const [showExit, setShowExit] = useState(false);
  const total = window.PREGUNTAS.length;
  const q = window.PREGUNTAS[i];
  const advTimer = useRef(null);

  useEffect(() => () => clearTimeout(advTimer.current), []);

  const choose = (val) => {
    const next = answers.slice();
    next[i] = val;
    setAnswers(next);
    clearTimeout(advTimer.current);
    advTimer.current = setTimeout(() => {
      if (i + 1 >= total) {
        if (next.every((a) => a !== null)) onFinish(next);
        else setI(next.findIndex((a) => a === null));
      } else {
        setI(i + 1);
      }
    }, 240);
  };

  const goBack = () => { if (i > 0) setI(i - 1); else onExit(); };
  const pct = Math.round(((i) / total) * 100);

  return (
    <div className="screen" style={{display:"flex", flexDirection:"column", paddingBottom:"calc(18px + env(safe-area-inset-bottom))"}}>
      <div className="quiz-top">
        <div className="progress-row">
          <button className="link-back" style={{padding:"4px 6px 4px 0"}} onClick={goBack}>{I.back({style:{width:20,height:20}})}</button>
          <div className="progress-track"><div className="progress-fill" style={{width: pct + "%"}}></div></div>
          <span className="progress-count">{i + 1}/{total}</span>
          <button className="quiz-exit" onClick={() => setShowExit(true)} aria-label="Salir del test">{I.close({style:{width:20,height:20}})}</button>
        </div>
      </div>

      <div className="quiz-body">
        <div className="q-anim" key={i} style={{display:"flex", flexDirection:"column", flex:1}}>
          {ALIENTO[i + 1] && (
            <div className="encourage">{I.heart({style:{width:18,height:18,flex:"none"}})}<span>{ALIENTO[i + 1]}</span></div>
          )}
          <div className="q-index">Afirmación {i + 1}</div>
          <h3 className="q-text">{q.t}</h3>
          <p className="q-hint">¿Cuánto resuena contigo?</p>
          <div className="q-options">
            {window.OPCIONES.map((o) => (
              <button
                key={o.valor}
                className={"opt" + (answers[i] === o.valor ? " sel" : "")}
                onClick={() => choose(o.valor)}
              >
                <span className="dotpip"></span>{o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="quiz-foot">
        <button className="link-back" onClick={goBack}>
          {I.back({style:{width:18,height:18}})} {i > 0 ? "Anterior" : "Salir"}
        </button>
      </div>

      {showExit && (
        <div className="modal-overlay" onClick={() => setShowExit(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">¿Querés abandonar el test?</h3>
            <p className="modal-text">No te preocupes: tu progreso queda guardado y podrás continuar más tarde donde lo dejaste.</p>
            <div className="modal-actions">
              <button className="btn btn-primary btn-block" onClick={() => setShowExit(false)}>Seguir respondiendo</button>
              <button className="btn btn-ghost btn-block" onClick={onQuit}>Sí, salir del test</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- PRÁCTICAS: contención y respiración ---------- */
function BreathingExercise() {
  const phases = [
    { label: "Inhala…", dur: 4000, scale: 1.0 },
    { label: "Sostén",  dur: 3000, scale: 1.0 },
    { label: "Exhala…", dur: 6000, scale: 0.58 },
  ];
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(null);
  const [cycles, setCycles] = useState(0);
  const timer = useRef(null);
  const idxRef = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const tick = () => {
    const i = idxRef.current;
    setPhase(i);
    timer.current = setTimeout(() => {
      const next = (i + 1) % phases.length;
      if (next === 0) setCycles((c) => c + 1);
      idxRef.current = next;
      tick();
    }, phases[i].dur);
  };
  const start = () => { idxRef.current = 0; setCycles(0); setRunning(true); tick(); };
  const stop = () => { clearTimeout(timer.current); setRunning(false); setPhase(null); };

  const cur = phase !== null ? phases[phase] : null;
  const scale = cur ? cur.scale : 0.58;
  const dur = cur ? cur.dur : 1000;
  const cue = cur ? cur.label : "Cuando estés\nlista/o";

  return (
    <div className="breath-stage">
      <div className="breath-ring" style={{ transform: `scale(${scale})`, transitionDuration: dur + "ms" }}>
        <span className="breath-cue">{cue.split("\n").map((l, k) => (<React.Fragment key={k}>{l}<br/></React.Fragment>))}</span>
      </div>
      <div className="breath-controls">
        <button className={"breath-btn" + (running ? " run" : "")} onClick={running ? stop : start}>
          {running ? "Detener" : "Respirar conmigo"}
        </button>
        {running && <span className="breath-cycles">Ronda {cycles + 1}</span>}
      </div>
    </div>
  );
}

function Practica() {
  return (
    <React.Fragment>
      <div className="practica-intro">
        <div className="pi-label">Para tu niñ@ interior</div>
        <div className="pi-title">Dos prácticas para sostenerte</div>
      </div>

      <div className="card exercise">
        <div className="ex-head"><div className="ex-num">1</div><div className="ex-title">Respira conmigo</div></div>
        <p className="ex-sub">Calma tu sistema nervioso. Sigue el círculo: inhala mientras crece, sostén, y exhala mientras se achica.</p>
        <BreathingExercise/>
      </div>

      <div className="card exercise">
        <div className="ex-head"><div className="ex-num">2</div><div className="ex-title">Abrazo de contención</div></div>
        <p className="ex-sub">Un gesto sencillo para abrazar a tu niñ@ herid@ desde tu presencia adulta.</p>
        <ol className="ex-steps">
          <li>Lleva una mano a tu pecho y la otra a tu vientre. Siente el calor de tu propio contacto.</li>
          <li>Cierra los ojos e imagina al niñ@ que fuiste, a la edad en que sentiste esa herida.</li>
          <li>Respira hondo y, en silencio o en voz muy baja, repítele con ternura las palabras de abajo.</li>
        </ol>
        <p className="ex-phrase">«Estoy aquí contigo. Ya no estás solo/a. Yo te cuido ahora.»</p>
      </div>
    </React.Fragment>
  );
}

/* ---------- RESULTADO ---------- */
function computeScores(answers) {
  const sums = {}; const counts = {};
  window.ORDEN_HERIDAS.forEach((id) => { sums[id] = 0; counts[id] = 0; });
  window.PREGUNTAS.forEach((q, idx) => {
    const v = answers[idx] || 0;
    sums[q.h] += v; counts[q.h] += 1;
  });
  const rows = window.ORDEN_HERIDAS.map((id) => ({
    id, pct: Math.round((sums[id] / (counts[id] * 3)) * 100), raw: sums[id],
  }));
  rows.sort((a, b) => b.pct - a.pct || b.raw - a.raw);
  return rows;
}

function WoundDonut({ rows, anim }) {
  const R = 52, CX = 70, CY = 70;
  const C = 2 * Math.PI * R;
  const totalRaw = rows.reduce((s, r) => s + r.raw, 0) || 1;
  const data = rows.map((r) => ({
    ...r,
    frac: r.raw / totalRaw,
    share: Math.round((r.raw / totalRaw) * 100),
  }));
  // Ajuste de redondeo: que la suma de los % sea exactamente 100.
  const sumShares = data.reduce((s, r) => s + r.share, 0);
  if (data.length && sumShares !== 100) data[0].share += 100 - sumShares;
  const top = data[0];
  const topH = window.HERIDAS[top.id];
  let acc = 0;

  return (
    <div className="donut-wrap">
      <div className="donut">
        <svg viewBox="0 0 140 140" role="img" aria-label="Distribución de tus heridas">
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--sand-deep)" strokeWidth="17"/>
          <g transform={`rotate(-90 ${CX} ${CY})`}>
            {data.map((r) => {
              const hh = window.HERIDAS[r.id];
              const len = r.frac * C;
              const seg = (
                <circle
                  key={r.id}
                  cx={CX} cy={CY} r={R} fill="none"
                  stroke={hh.color} strokeWidth="17" strokeLinecap="butt"
                  strokeDasharray={`${anim ? Math.max(len - 1.5, 0) : 0} ${C}`}
                  strokeDashoffset={-acc}
                  style={{ transition: "stroke-dasharray 1s cubic-bezier(.2,.7,.3,1)" }}
                />
              );
              acc += len;
              return seg;
            })}
          </g>
        </svg>
        <div className="donut-center">
          <span className="dc-pct" style={{ color: topH.color }}>{top.share}%</span>
          <span className="dc-name">{topH.nombre}</span>
        </div>
      </div>
      <ul className="legend">
        {data.map((r) => {
          const hh = window.HERIDAS[r.id];
          return (
            <li className="legend-item" key={r.id}>
              <span className="legend-dot" style={{ background: hh.color }}></span>
              <span className="legend-name">{hh.nombre}</span>
              <span className="legend-pct">{r.share}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TallerCard() {
  const t = window.TALLER;
  return (
    <div className="card taller-card">
      <p className="taller-kicker">Da el siguiente paso</p>
      <h3 className="taller-title">{t.titulo}</h3>
      <p className="taller-sub">{t.subtitulo}</p>
      <p className="r-text" style={{textAlign:"center", marginTop:"10px"}}>{t.descripcion}</p>
      <a className="btn btn-gold btn-block" style={{marginTop:"18px"}} href={t.formUrl} target="_blank" rel="noopener">
        Quiero participar {I.arrow({style:{width:18,height:18}})}
      </a>
      <a className="taller-link" href={t.landingUrl} target="_blank" rel="noopener">Ver más sobre el taller</a>
    </div>
  );
}

function Result({ answers, go, restart }) {
  const rows = computeScores(answers);
  const top = rows[0];
  const h = window.HERIDAS[top.id];
  const [anim, setAnim] = useState(false);
  const [showShare, setShowShare] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnim(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { saveResult({ id: top.id, nombre: h.nombre, fecha: Date.now() }); }, [top.id]);

  const textoShare = `Hice el Test de las 5 Heridas y descubrí mi herida de la infancia: ${h.nombre}. Te invito a descubrir la tuya 🌿`;
  const urlShare = (window.CONTACTO && window.CONTACTO.appUrl) || window.location.href;

  return (
    <div className="screen has-nav fade">
      <div className="result-hero">
        <div className="result-badge"><div className="mini-mandala"></div></div>
        <p className="eyebrow center">Tu herida predominante</p>
        <div className="result-name" style={{color:h.color}}>{h.nombre}</div>
        <div className="result-mask">Máscara · {h.mascara}</div>
        <p className="serif-quote" style={{marginTop:"14px", fontSize:"1.15rem"}}>{h.esencia}</p>
      </div>

      <div className="rule"><span className="dot"></span></div>

      <WoundDonut rows={rows} anim={anim}/>

      <div className="card" style={{marginTop:"22px"}}>
        <p className="r-section-label">Lo que vive en ti</p>
        <p className="r-text">{h.descripcion}</p>
      </div>

      <div className="card" style={{marginTop:"14px"}}>
        <p className="r-section-label">La máscara del {h.mascara.toLowerCase()}</p>
        <p className="r-text">{h.mascaraTexto}</p>
      </div>

      <div className="card" style={{marginTop:"14px"}}>
        <p className="r-section-label">Tu fuerza escondida</p>
        <p className="r-text" style={{marginBottom:"14px"}}>Detrás de cada herida hay un don. Cuando sanas, de ti emerge:</p>
        <ul className="strength-list">
          {h.fortalezas.map((f, k) => (<li key={k}><span className="gp"></span><span>{f}</span></li>))}
        </ul>
      </div>

      <div className="closing" style={{marginTop:"22px"}}>
        <p className="q">«No eres tu herida.<br/>Eres un ser luminoso<br/>viviendo una experiencia.»</p>
        <p className="src">Reconocerla es el comienzo de tu sanación.</p>
      </div>

      <div className="rule" style={{marginTop:"26px"}}><span className="dot"></span></div>
      <Practica/>

      <TallerCard/>

      <div style={{marginTop:"20px", display:"flex", flexDirection:"column", gap:"12px"}}>
        <button className="btn btn-primary btn-block" onClick={() => setShowShare(true)}>
          {I.share({style:{width:18,height:18}})} Compartir mi resultado
        </button>
        <button className="btn btn-ghost btn-block" onClick={restart}>Repetir el test</button>
      </div>

      {showShare && (
        <ShareSheet open={showShare} onClose={() => setShowShare(false)} title="Compartir mi resultado" subtitle="Comparte tu herida y anima a otras personas a descubrir la suya." texto={textoShare} url={urlShare}/>
      )}
    </div>
  );
}

/* ---------- CONTACTO ---------- */
function Contacto() {
  const c = window.CONTACTO;
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const mailtoHref = () => {
    const subject = encodeURIComponent("Contacto desde la app · " + (nombre || "Visitante"));
    const body = encodeURIComponent(`Nombre: ${nombre}\n\nComentario:\n${comentario}\n\n— Enviado desde la app Test de las 5 Heridas · Vibrando en Dorado`);
    return `mailto:${c.email}?subject=${subject}&body=${body}`;
  };

  const enviar = async (e) => {
    e.preventDefault();
    // Sin clave configurada → respaldo: abre la app de correo del visitante.
    if (!c.web3formsKey) {
      window.location.href = mailtoHref();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: c.web3formsKey,
          subject: "Nuevo mensaje desde la app · " + (nombre || "Visitante"),
          from_name: "App Test de las 5 Heridas",
          name: nombre,
          email: c.email,
          replyto: c.email,
          message: comentario,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data && data.success) {
        setStatus("success");
        setNombre(""); setComentario("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="screen has-nav fade">
      <div className="head">
        <p className="eyebrow">Vibrando en Dorado</p>
        <h2 className="title">Escríbeme</h2>
        <p className="lead" style={{marginTop:"12px"}}>
          Si algo de tu herida resonó contigo y deseas acompañamiento, déjame tu nombre y un mensaje.
          Te leeré con cariño.
        </p>
      </div>

      {status === "success" ? (
        <div className="card form-thanks">
          <div className="thanks-mark">{I.heart({style:{width:30,height:30}})}</div>
          <h3 className="thanks-title">¡Gracias por escribirme!</h3>
          <p className="r-text" style={{textAlign:"center"}}>Recibí tu mensaje con cariño. Te responderé pronto. 🌿</p>
          <button className="btn btn-ghost" style={{marginTop:"6px"}} onClick={() => setStatus("idle")}>Enviar otro mensaje</button>
        </div>
      ) : (
        <form className="card" onSubmit={enviar}>
          <div className="field">
            <label htmlFor="n">Tu nombre</label>
            <input id="n" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="¿Cómo te llamas?" required/>
          </div>
          <div className="field" style={{marginBottom:"18px"}}>
            <label htmlFor="m">Tu comentario</label>
            <textarea id="m" value={comentario} onChange={(e)=>setComentario(e.target.value)} placeholder="Cuéntame qué necesitas o cómo te sientes…" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={status==="sending"}>
            {status === "sending" ? "Enviando…" : (<React.Fragment>{I.mail({style:{width:18,height:18}})} Enviar mensaje</React.Fragment>)}
          </button>
          {status === "error" && (
            <p className="form-error">
              No pudimos enviarlo ahora. Probá de nuevo o <a href={mailtoHref()}>escribime por correo</a>.
            </p>
          )}
        </form>
      )}

      <p className="eyebrow" style={{marginTop:"26px"}}>Sígueme</p>
      <div className="socials">
        <a className="soc" href={c.instagramUrl} target="_blank" rel="noopener">{I.ig()}<span>Instagram</span></a>
        <a className="soc" href={c.facebookUrl} target="_blank" rel="noopener">{I.fb()}<span>Facebook</span></a>
        <a className="soc" href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener">{I.wa()}<span>WhatsApp</span></a>
        <a className="soc" href={c.tiktokUrl} target="_blank" rel="noopener">{I.tk()}<span>TikTok</span></a>
      </div>

      <div className="card" style={{marginTop:"16px"}}>
        <a className="contact-line" href={`mailto:${c.email}`} style={{textDecoration:"none"}}>{I.mail()}<span>{c.email}</span></a>
        <a className="contact-line" href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener" style={{textDecoration:"none"}}>{I.phone()}<span>{c.tel}</span></a>
      </div>

      <div className="therapist" style={{marginTop:"18px"}}>
        <img className="photo" src="assets/src-viviana.png" alt="Viviana Blasco"/>
        <div>
          <div className="t-name">{c.nombre}</div>
          <div className="t-role">{c.rol}</div>
        </div>
      </div>

      <a className="privacy-link" href="privacidad.html" target="_blank" rel="noopener">Política de privacidad</a>
    </div>
  );
}

/* ---------- App ---------- */
function App() {
  const [view, setView] = useState("home");
  const [answers, setAnswers] = useState(() => loadAnswers() || Array(window.PREGUNTAS.length).fill(null));
  const scrollRef = useRef(null);

  const go = (v) => { setView(v); };
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [view]);
  useEffect(() => { saveAnswers(answers); }, [answers]);

  const answered = answers.filter((a) => a !== null).length;
  const total = answers.length;
  const resultReady = answered === total;
  const hasProgress = answered > 0 && !resultReady;

  const startFresh = () => {
    setAnswers(Array(window.PREGUNTAS.length).fill(null));
    setView("test-run");
  };
  const continueTest = () => setView("test-run");

  const tabFor = view === "test-intro" || view === "test-run" || view === "test-result" ? "test" : view;
  const showTabs = view !== "test-run" && view !== "test-intro";

  const tabs = [
    { id: "home", label: "Inicio", icon: I.home },
    { id: "test-intro", key: "test", label: "Test", icon: I.spark },
    { id: "heridas", label: "Heridas", icon: I.heart },
    { id: "contacto", label: "Contacto", icon: I.mail },
  ];

  // Al tocar la pestaña "Test": si ya está completo, muestra el resultado;
  // si hay progreso, continúa; si no, va a la intro.
  const goTab = (id) => {
    if (id === "test-intro") {
      if (resultReady) return setView("test-result");
      if (hasProgress) return setView("test-run");
      return setView("test-intro");
    }
    setView(id);
  };

  let content;
  if (view === "home") content = <Home go={go} hasProgress={hasProgress} resultReady={resultReady} answered={answered} total={total} onContinue={continueTest} onViewResult={() => setView("test-result")} onStartFresh={startFresh}/>;
  else if (view === "heridas") content = <Heridas go={go}/>;
  else if (view === "contacto") content = <Contacto/>;
  else if (view === "test-intro") content = <TestIntro go={go} start={startFresh}/>;
  else if (view === "test-run") content = <TestRun answers={answers} setAnswers={setAnswers} onFinish={() => setView("test-result")} onExit={() => setView("test-intro")} onQuit={() => setView("home")}/>;
  else if (view === "test-result") content = <Result answers={answers} go={go} restart={startFresh}/>;

  return (
    <div className="app" ref={scrollRef}>
      <React.Fragment key={view}>{content}</React.Fragment>
      {showTabs && (
        <nav className="tabbar">
          {tabs.map((t) => {
            const active = (t.key || t.id) === tabFor || (t.id === "home" && view === "home");
            return (
              <button key={t.id} className={"tab" + (active ? " active" : "")} onClick={() => goTab(t.id)}>
                {t.icon({})}
                <span>{t.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
