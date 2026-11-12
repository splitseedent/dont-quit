/* =====================================================================
   DON'T QUIT — Touch My Soul Ministry care companion (v1 demo)
   - No login. Language first; choice persists in localStorage.
   - All requests are saved to a localStorage queue ON THIS DEVICE ONLY
     (demo). The live deploy step adds a server endpoint so requests
     reach Pastor's phone in real time — see README.md.
   - Prayer text is composed client-side in English (the pattern from
     the ministry's Pray With Me Now page); Pastor's voice speaks
     English, so the spoken prayer is English in every UI language.
     The UI frame around it is fully translated.
   ===================================================================== */
"use strict";

/* ---------------- Translations ----------------
   Every student-facing string, in all six languages. Sentences are kept
   short and warm on purpose (low-literacy friendly). Ministry-specific
   phrases are translated for meaning, not word-for-word. */
const I18N = {
en: {
  tagline: "Your pastor and your people, one tap away — so you finish what you started.",
  chooseLang: "Choose your language",
  talk: "Talk to Pastor",
  talkSub: "Share what you're carrying. Hear a prayer in Pastor's voice, and he will follow up with you himself.",
  dq: "Don't Quit",
  dqSub: "Something about to stop you from finishing? Tell us what it is. We will help you face it.",
  forStaff: "For staff",
  staffOn: "Staff door — your request will be marked as staff.",
  dailyWord: "Today's word",
  offeredBy: "Offered by Touch My Soul Ministry for students and staff of Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · Sundays 11:30 AM · Whisper Theater, Garnet Waterfront Hotel",
  crisisFooter: "In crisis? Call or text 988 — free, day or night (US).",
  careLink: "Care Team",
  privacyLink: "Your privacy",
  privacyTitle: "Your privacy",
  privacyH1: "What we collect",
  privacyP1: "Only what you type when you ask for help: your name if you give it, your phone number, and your message. Browsing the prayer and the daily word collects nothing about you.",
  privacyH2: "Who sees it",
  privacyP2: "Pastor and his care team at Touch My Soul Ministry — no one else. The inbox can only be opened with the ministry's own login. Your school receives counts only — how many requests of each kind — never your name, your number, or your words.",
  privacyH3: "What we never do",
  privacyP3: "We never sell your information or share it with advertisers. The alert that buzzes Pastor's phone carries no name, no number, and none of your words — only the kind of request. What you share does not affect your classes, your grades, or your standing at school.",
  privacyH4: "How long we keep it",
  privacyP4: "Until your request is answered and followed up. After that it is cleared from the active inbox. To have a request removed sooner, text Pastor at 317-956-4120 and ask.",
  privacyH5: "How we count visits",
  privacyP5: "We count anonymous visits so we can report how many people the app is reaching — counts of visits and taps only. We never store who visited, where you are, or what you read or wrote.",
  back: "← Back",
  carrying: "What are you carrying?",
  carryingPh: "Write it in your own words. One honest line is enough.",
  nameOpt: "Your name (optional)",
  phoneOpt: "Phone",
  reachNote: "Your prayer is always free — no number needed to pray. But if you want Pastor to reach back to you, leave your phone number: he can only respond if you do. Pastor reads every request himself and replies personally within one business day.",
  prayBtn: "Pray with me",
  needErr: "Please write a few words about what you're carrying, so we can pray with you.",
  phoneErr: "Please add your phone number — Pastor can only respond if you leave a number he can reach.",
  sendNote: "Want Pastor to reach out to you himself? Add your phone number and tap Send — he can only respond if you leave a number. Your prayer above is yours either way.",
  sendBtn: "Send to Pastor",
  prayerFor: "A prayer for you",
  hearVoice: "🔊 Hear it in Pastor's voice",
  voiceWait: "Loading Pastor's voice…",
  voiceFail: "Pastor's voice could not load just now. Your prayer is above — please read it slowly, out loud if you can.",
  savedCounsel: "Your request is saved. Pastor will reach out to you himself.",
  crisisTitle: "You matter. Please reach out right now.",
  crisisBody: "If you may act on these thoughts, please call or text 988 right now — free, private, day or night. Trained counselors in the US will listen and help. Your request has also been saved, and Pastor will follow up.",
  crisisCall: "📞 Call 988",
  crisisText: "💬 Text 988",
  dqQ: "What is about to stop you?",
  dqPick: "Tap the one that fits best. There is no wrong answer.",
  b_childcare: "Childcare", b_ride: "A ride", b_money: "Money", b_work: "My work schedule",
  b_family: "Family", b_behind: "I'm falling behind", b_talk: "I just need to talk",
  r_childcare: "Caring for a child is never a reason to feel ashamed — it is a reason to ask for help carrying both.",
  n_childcare: "Tell the care team your class times below. We will pray with you and work on a childcare plan together.",
  r_ride: "A broken ride should never be the end of a diploma. You got this far — let us help with the rest of the way.",
  n_ride: "Tell us where you are coming from. Our care team will work on a ride plan with you.",
  r_money: "Money pressure is real, and it is loud. But this finish line is worth more than this hard month.",
  n_money: "Tell the care team what is pressing hardest. We will pray, and look at options together — one step at a time.",
  r_work: "Working and studying at the same time is a heavy load. The fact that you are doing both says something about you.",
  n_work: "Tell us your new schedule. We will help you think through your options so work and school can both stand.",
  r_family: "Family storms hit students hard. You do not have to carry home and homework alone.",
  n_family: "Tell us what is happening at home, only as much as you are comfortable sharing. Pastor and the care team will walk with you.",
  r_behind: "Falling behind is not the same as failing. Most finishers felt behind at some point — they just did not stop there.",
  n_behind: "Tell us which class or subject. We will help you form a simple plan to catch up, and cheer you on while you work it.",
  r_talk: "Sometimes the bravest step is saying, “I just need to talk.” You just took it.",
  n_talk: "Share your name and phone so we can reach you. Pastor or a care team member will reach out to listen — not to judge.",
  sosReach: "Your phone number is required here — it is the only way the care team can reach you back. Someone will reach out as soon as we can.",
  sosSend: "Send — I need help",
  sosConfirmTitle: "We got it. Don't quit.",
  sosConfirmBody: "Your message is with Pastor's care team now. Someone will reach out. Until then, hold on to this:",
  againBtn: "Back to the start",
  carePinTitle: "Care Team",
  carePinPrompt: "Enter the care team PIN.",
  careWrong: "That PIN doesn't match. Try again.",
  careEnter: "Enter",
  careDemo: "Demo note: everything here is stored on THIS device only. In the live version, requests go to Pastor's phone in real time.",
  queueTitle: "Requests on this device",
  queueEmpty: "No requests yet on this device.",
  exportBtn: "Export queue (JSON)",
  presentationTitle: "Presentation tools",
  presentationNote: "For a walk-through: load clean sample requests, or clear this device before you present.",
  sampleBtn: "Load presentation samples",
  clearBtn: "Clear demo data",
  sampleConfirm: "Replace what is on this device with clean presentation samples?",
  clearConfirm: "Clear all demo requests and counters from this device?",
  liveQueueTitle: "Requests in the live inbox",
  liveNote: "Live inbox: real requests sent to the ministry. Only the care account can see names and needs.",
  careLoginTitle: "Care Team login",
  careLoginBody: "We email a one-time login link to the ministry inbox. Only that inbox can open this view.",
  careSendLink: "Email me a login link",
  careLinkSent: "Login link sent. Open it from the ministry inbox on this device to enter.",
  careLogout: "Sign out",
  careRefresh: "Refresh",
  careLoadErr: "Could not load requests. Check the connection, then tap Refresh.",
  cPrayers: "Prayers composed", cCounsel: "Counseling requests", cSos: "Don't Quit alerts",
  cStaff: "Staff requests", cCrisis: "Crisis flags",
  markDone: "Mark done", doneTag: "Done", staffTag: "STAFF", crisisTag: "CRISIS — FIRST",
  typeCounsel: "Talk to Pastor", typeSos: "Don't Quit", barrierLabel: "Barrier", needLabel: "Need",
  "growTitle": "Grow",
  "growSub": "Tools for your next step: a job, an interview, a diploma.",
  "doorResume": "Build My Resume",
  "doorInterview": "Interview Prep",
  "doorDec1": "December 1 Guide",
  "doorSteps": "My Next Steps",
  "doorHelp": "Help Near You",
  "doorStudy": "Study Buddy",
  "resIntro": "Answer a few questions. The app builds a clean, professional resume from your own words. It only uses what you type. It never makes anything up.",
  "resPrivacy": "Your resume stays on your phone unless you send it to Pastor. It never goes to the school.",
  "resAboutYou": "About you",
  "resName": "Full name",
  "resCity": "City",
  "resEmail": "Email (optional)",
  "resTarget": "Job or training you want",
  "resSummaryH": "Your story in short",
  "resSummaryHelp": "Answer any of these three. The app turns your answers into a short summary.",
  "resSum1": "What kind of work do you want?",
  "resSum2": "What are you good at?",
  "resSum3": "What should an employer know about you?",
  "resJobsH": "Work history",
  "resJobsHelp": "Add up to three jobs. Leave a job blank if you do not need it.",
  "resJobN": "Job {n}",
  "resJobTitle": "Job title",
  "resEmployer": "Employer",
  "resJobCity": "City",
  "resStart": "Start (month and year)",
  "resEnd": "End (month and year)",
  "resCurrent": "I work here now",
  "resDuties": "What did you do there?",
  "resVolH": "Volunteer and community work",
  "resVol": "Church, school, family care, and community work count as real experience. Tell us what you did.",
  "resSkillsH": "Skills",
  "resSkillsHelp": "Tap the skills you have. You can add your own below.",
  "resSkillsFree": "Your skills, separated by commas",
  "resEduH": "Education and more",
  "resSchool": "School name",
  "resDiploma": "Diploma or HSE status",
  "resDipNone": "Choose one",
  "resDipDone": "Diploma or HSE earned",
  "resDipWorking": "Working on my HSE now",
  "resDipSome": "Some high school",
  "resDipCollege": "Some college or a degree",
  "resCerts": "Certifications, separated by commas",
  "resLangs": "Languages you speak, separated by commas",
  "resErr": "Please add at least your name so the resume has a name on it.",
  "resBuild": "Build my resume",
  "resPrint": "Print or save as PDF",
  "resCopy": "Copy text",
  "resCopied": "Resume text copied.",
  "resSend": "Send to Pastor for review",
  "resSendErr": "To send your resume to Pastor, the form needs your name and a phone number he can reach, ten digits or more.",
  "resSent": "Your resume is on its way to Pastor. He will reach out to you himself.",
  "resEdit": "Keep editing",
  "resClear": "Clear my resume data",
  "resClearConfirm": "Clear the resume saved on this phone?",
  "resSecSummary": "Summary",
  "resSecWork": "Work Experience",
  "resSecVol": "Volunteer and Community Experience",
  "resSecSkills": "Skills",
  "resSecEdu": "Education",
  "resSecCerts": "Certifications",
  "resSecLangs": "Languages",
  "trk_pharmacy": "Pharmacy Technician",
  "trk_ccma": "CCMA (Medical Assistant)",
  "trk_sterile": "Sterile Processing",
  "trk_hvac": "HVAC",
  "trk_electrical": "Electrical",
  "trk_cdl": "CDL (Truck Driving)",
  "trk_cda": "CDA (Child Development)",
  "trk_entrepreneur": "Entrepreneurship",
  "trk_other": "Another job",
  "trk_notsure": "Not sure yet",
  "trk_general": "General",
  "intTitle": "Walk In Ready",
  "intIntro": "Practice real interview questions before the big day. Pick your training, read each question, and write what you would say. Your answers stay on this phone.",
  "intEnNote": "For now, the questions and coaching are in English and Spanish. The rest of the app speaks your language.",
  "intPick": "Pick your training",
  "intTip": "What they want to hear:",
  "intAnswered": "Answered {a} of {b}",
  "intErr": "Write a short answer for every question first. Even one honest line counts.",
  "intFinish": "Finish practice",
  "intDoneTitle": "You did the work. Now walk in ready.",
  "intDoneBody": "You practiced every question. Read your answers once more before the interview, and bring your resume with you.",
  "decTitle": "Career Training: Apply by December 1",
  "decClosed": "Applications for Spring 2027 have closed. Ask Pastor about the next round.",
  "decFacts": "Career Training is for ages 18 and older. Classes start February 1, 2027.",
  "decDays": "{n} days left to apply",
  "decDay1": "1 day left to apply",
  "decToday": "Today is the last day to apply",
  "decReadyH": "Have these ready",
  "decItem1": "Your diploma or HSE, or start the free HSE classes now",
  "decItem2": "An Indiana ID",
  "decItem3": "Your Social Security card",
  "decItem4": "Your work authorization",
  "decItem5": "A phone number and an email Wayne can reach",
  "decApplyBtn": "Apply at adulted.info/career",
  "decTellH": "Already applied?",
  "decTellBody": "Tell Pastor. He sends each applicant's name to Wayne for their interview, so your name reaches the right desk.",
  "decErr": "Please add your name and a phone number Pastor can reach, ten digits or more.",
  "decTellBtn": "I applied, tell Pastor",
  "decSent": "Got it. Pastor has your name and will send it to Wayne for your interview.",
  "stepsTitle": "My Next Steps",
  "stepsIntro": "Your ladder, one step at a time. Check off each step as you finish it.",
  "stepsPrivacy": "This list lives only on your phone. Nothing leaves this device.",
  "step1": "My diploma or HSE",
  "step2": "Applied for Career Training",
  "step3": "Started my training",
  "step4": "Built my resume",
  "step5": "Ready for my interview",
  "step6": "Got the job",
  "stepsCount": "{a} of {b} steps done",
  "cheerStart": "Every finish started with one step. Take the first one today.",
  "cheerGoing": "You are moving. One step at a time is how people finish.",
  "cheerHalf": "Look at that climb. Keep going, you are closer than you think.",
  "cheerAlmost": "Almost there. One more push and this ladder is yours.",
  "cheerDone": "You climbed the whole ladder. We are proud of you. Tell Pastor so we can celebrate with you.",
  "helpTitle": "Help Near You",
  "helpIntro": "Real doors, close to home. Call first when you can, so you know what to bring.",
  "helpCall": "Call",
  "helpMore": "More doors from Wayne's own resource list will be added here when the team shares it.",
  "hNote211": "Free community help line. Food, housing, utilities, and more.",
  "hNoteWayne": "The Wayne Adult Education office at Ben Davis University. Classes, Career Training, and Pastor's hub.",
  "hNoteTrustee": "The township trustee helps neighbors with essentials like rent, utilities, and food.",
  "hNoteExcel": "Free adult education with coaches who help with school, work, and next steps.",
  "hNoteGleaners": "Food help for families across Indianapolis.",
  "studyTitle": "Study Buddy",
  "studyIntro": "A short practice set for today. Eight questions, no grades, no pressure. New questions every day.",
  "studyMath": "Math",
  "studyReading": "Reading",
  "studyScience": "Science",
  "studySocial": "Social Studies",
  "studyRight": "Right.",
  "studyWrong": "Not quite.",
  "studyScore": "You got {a} of {b} right. Come back tomorrow for a new set.",
  "studyVocabH": "Words for your trade",
  "studyVocabHelp": "Pick your training, then tap the card to see what the word means.",
  "studyTap": "Tap to flip",
  "studyPrev": "Back",
  "studyNext": "Next word",
  "flashCount": "Word {a} of {b}",
  "reportTitle": "Wayne Report",
  "reportNote": "A counts only summary for the Wayne team. No names, no numbers, no message text.",
  "reportBtn": "Build the Wayne Report",
  "reportCopy": "Copy report",
  "reportCopied": "Report copied."
},
es: {
  tagline: "Tu pastor y tu gente, a un toque de distancia, para que termines lo que empezaste.",
  chooseLang: "Elige tu idioma",
  talk: "Habla con el Pastor",
  talkSub: "Comparte lo que llevas en el corazón. Escucha una oración en la voz del Pastor, y él mismo te responderá.",
  dq: "No te rindas",
  dqSub: "¿Algo está a punto de detenerte? Cuéntanos qué es. Te ayudaremos a enfrentarlo.",
  forStaff: "Para el personal",
  staffOn: "Puerta del personal: tu solicitud se marcará como personal.",
  dailyWord: "Palabra de hoy",
  offeredBy: "Ofrecido por Touch My Soul Ministry para estudiantes y personal de Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · Domingos 11:30 AM · Whisper Theater, Garnet Waterfront Hotel",
  crisisFooter: "¿En crisis? Llama o envía un mensaje al 988 — gratis, día y noche (EE. UU.).",
  careLink: "Equipo de cuidado",
  privacyLink: "Tu privacidad",
  privacyTitle: "Tu privacidad",
  privacyH1: "Qué recopilamos",
  privacyP1: "Solo lo que escribes cuando pides ayuda: tu nombre si lo das, tu número de teléfono y tu mensaje. Leer la oración y la palabra del día no recopila nada sobre ti.",
  privacyH2: "Quién lo ve",
  privacyP2: "El Pastor y su equipo de cuidado en Touch My Soul Ministry — nadie más. La bandeja solo se puede abrir con la cuenta del ministerio. Tu escuela recibe solo cantidades — cuántas solicitudes de cada tipo — nunca tu nombre, tu número ni tus palabras.",
  privacyH3: "Lo que nunca hacemos",
  privacyP3: "Nunca vendemos tu información ni la compartimos con anunciantes. La alerta que suena en el teléfono del Pastor no lleva nombre, ni número, ni ninguna de tus palabras — solo el tipo de solicitud. Lo que compartes no afecta tus clases, tus notas ni tu situación en la escuela.",
  privacyH4: "Cuánto tiempo lo guardamos",
  privacyP4: "Hasta que tu solicitud sea respondida y se le dé seguimiento. Después se retira de la bandeja activa. Para pedir que se elimine antes, escribe al Pastor al 317-956-4120.",
  privacyH5: "Cómo contamos las visitas",
  privacyP5: "Contamos visitas anónimas para poder informar a cuántas personas llega la aplicación — solo cantidades de visitas y toques. Nunca guardamos quién visitó, dónde estás, ni lo que leíste o escribiste.",
  back: "← Atrás",
  carrying: "¿Qué llevas en el corazón?",
  carryingPh: "Escríbelo con tus palabras. Una línea sincera es suficiente.",
  nameOpt: "Tu nombre (opcional)",
  phoneOpt: "Teléfono",
  reachNote: "Tu oración siempre es gratuita: no necesitas un número para orar. Pero si quieres que el Pastor te responda, deja tu número de teléfono: solo puede responder si lo dejas. El Pastor lee cada solicitud personalmente y responde en un día laborable.",
  prayBtn: "Ora conmigo",
  needErr: "Escribe unas palabras sobre lo que llevas, para que podamos orar contigo.",
  phoneErr: "Agrega tu número de teléfono: el Pastor solo puede responder si dejas un número donde localizarte.",
  sendNote: "¿Quieres que el Pastor se comunique contigo personalmente? Agrega tu número de teléfono y toca Enviar: solo puede responder si dejas un número. Tu oración de arriba es tuya de todos modos.",
  sendBtn: "Enviar al Pastor",
  prayerFor: "Una oración para ti",
  hearVoice: "🔊 Escúchala en la voz del Pastor",
  voiceWait: "Cargando la voz del Pastor…",
  voiceFail: "La voz del Pastor no pudo cargar ahora. Tu oración está arriba; léela despacio, en voz alta si puedes.",
  savedCounsel: "Tu solicitud está guardada. El Pastor se comunicará contigo personalmente.",
  crisisTitle: "Tu vida importa. Busca ayuda ahora mismo.",
  crisisBody: "Si crees que podrías actuar según estos pensamientos, llama o envía un mensaje al 988 ahora mismo: es gratis, privado, día y noche. Consejeros capacitados en EE. UU. te escucharán y te ayudarán. Tu solicitud también quedó guardada y el Pastor te dará seguimiento.",
  crisisCall: "📞 Llamar al 988",
  crisisText: "💬 Mensaje al 988",
  dqQ: "¿Qué está a punto de detenerte?",
  dqPick: "Toca la opción que más se acerca. No hay respuestas incorrectas.",
  b_childcare: "El cuidado de mis hijos", b_ride: "El transporte", b_money: "El dinero", b_work: "Mi horario de trabajo",
  b_family: "La familia", b_behind: "Estoy atrasado en clase", b_talk: "Solo necesito hablar",
  r_childcare: "Cuidar a un hijo nunca es motivo de vergüenza; es un motivo para pedir ayuda para cargar con todo.",
  n_childcare: "Cuéntale al equipo tus horarios de clase abajo. Oraremos contigo y buscaremos juntos un plan para el cuidado de tus hijos.",
  r_ride: "Un problema de transporte nunca debería ser el fin de un diploma. Llegaste hasta aquí; déjanos ayudarte con el resto del camino.",
  n_ride: "Cuéntanos de dónde vienes. Nuestro equipo trabajará contigo en un plan de transporte.",
  r_money: "La presión del dinero es real y hace mucho ruido. Pero esta meta vale más que este mes difícil.",
  n_money: "Cuéntale al equipo qué es lo más urgente. Oraremos y buscaremos opciones juntos, un paso a la vez.",
  r_work: "Trabajar y estudiar a la vez es una carga pesada. El hecho de que hagas las dos cosas dice mucho de ti.",
  n_work: "Cuéntanos tu nuevo horario. Te ayudaremos a pensar tus opciones para que el trabajo y la escuela puedan seguir.",
  r_family: "Las tormentas familiares golpean fuerte a los estudiantes. No tienes que cargar con la casa y la tarea solo.",
  n_family: "Cuéntanos lo que pasa en casa, solo lo que te sientas cómodo compartiendo. El Pastor y el equipo caminarán contigo.",
  r_behind: "Ir atrasado no es lo mismo que fracasar. La mayoría de los que terminan se sintieron atrasados alguna vez; simplemente no se detuvieron.",
  n_behind: "Cuéntanos qué clase o materia es. Te ayudaremos a hacer un plan sencillo para ponerte al día.",
  r_talk: "A veces el paso más valiente es decir: «Solo necesito hablar». Acabas de darlo.",
  n_talk: "Comparte tu nombre y teléfono para que podamos contactarte. El Pastor o alguien del equipo te contactará para escucharte, sin juzgarte.",
  sosReach: "Tu número de teléfono es obligatorio aquí: es la única manera en que el equipo puede responderte. Alguien se comunicará contigo lo antes posible.",
  sosSend: "Enviar — necesito ayuda",
  sosConfirmTitle: "Lo recibimos. No te rindas.",
  sosConfirmBody: "Tu mensaje ya está con el equipo de cuidado del Pastor. Alguien se comunicará contigo. Mientras tanto, guarda esto en tu corazón:",
  againBtn: "Volver al inicio",
  carePinTitle: "Equipo de cuidado",
  carePinPrompt: "Ingresa el PIN del equipo de cuidado.",
  careWrong: "Ese PIN no coincide. Inténtalo de nuevo.",
  careEnter: "Entrar",
  careDemo: "Nota: en esta demostración todo se guarda SOLO en este dispositivo. En la versión en vivo, las solicitudes llegan al teléfono del Pastor en tiempo real.",
  queueTitle: "Solicitudes en este dispositivo",
  queueEmpty: "Aún no hay solicitudes en este dispositivo.",
  exportBtn: "Exportar (JSON)",
  presentationTitle: "Herramientas de presentación",
  presentationNote: "Para una demostración: carga solicitudes de ejemplo limpias o borra este dispositivo antes de presentar.",
  sampleBtn: "Cargar ejemplos de presentación",
  clearBtn: "Borrar datos de demostración",
  sampleConfirm: "¿Reemplazar lo que hay en este dispositivo con ejemplos limpios de presentación?",
  clearConfirm: "¿Borrar todas las solicitudes y contadores de demostración de este dispositivo?",
  liveQueueTitle: "Solicitudes en la bandeja en vivo",
  liveNote: "Bandeja en vivo: solicitudes reales enviadas al ministerio. Solo la cuenta de cuidado puede ver nombres y necesidades.",
  careLoginTitle: "Acceso del equipo de cuidado",
  careLoginBody: "Enviamos un enlace de acceso único al correo del ministerio. Solo ese correo puede abrir esta vista.",
  careSendLink: "Enviarme el enlace",
  careLinkSent: "Enlace enviado. Ábrelo desde el correo del ministerio en este dispositivo.",
  careLogout: "Cerrar sesión",
  careRefresh: "Actualizar",
  careLoadErr: "No se pudieron cargar las solicitudes. Revisa la conexión y toca Actualizar.",
  cPrayers: "Oraciones preparadas", cCounsel: "Solicitudes al Pastor", cSos: "Alertas «No te rindas»",
  cStaff: "Solicitudes del personal", cCrisis: "Alertas de crisis",
  markDone: "Marcar hecho", doneTag: "Hecho", staffTag: "PERSONAL", crisisTag: "CRISIS — PRIMERO",
  typeCounsel: "Habla con el Pastor", typeSos: "No te rindas", barrierLabel: "Obstáculo", needLabel: "Petición",
  "growTitle": "Crece",
  "growSub": "Herramientas para tu próximo paso: un empleo, una entrevista, un diploma.",
  "doorResume": "Crea mi currículum",
  "doorInterview": "Prepara tu entrevista",
  "doorDec1": "Guía del 1 de diciembre",
  "doorSteps": "Mis próximos pasos",
  "doorHelp": "Ayuda cerca de ti",
  "doorStudy": "Compañero de estudio",
  "resIntro": "Responde unas preguntas. La aplicación crea un currículum limpio y profesional con tus propias palabras. Solo usa lo que escribes. Nunca inventa nada.",
  "resPrivacy": "Tu currículum se queda en tu teléfono, a menos que lo envíes al Pastor. Nunca llega a la escuela.",
  "resAboutYou": "Sobre ti",
  "resName": "Nombre completo",
  "resCity": "Ciudad",
  "resEmail": "Correo (opcional)",
  "resTarget": "Empleo o capacitación que quieres",
  "resSummaryH": "Tu historia en breve",
  "resSummaryHelp": "Responde cualquiera de estas tres. La aplicación convierte tus respuestas en un resumen corto.",
  "resSum1": "¿Qué tipo de trabajo quieres?",
  "resSum2": "¿En qué eres bueno?",
  "resSum3": "¿Qué debe saber un empleador sobre ti?",
  "resJobsH": "Historial de trabajo",
  "resJobsHelp": "Agrega hasta tres empleos. Deja un empleo en blanco si no lo necesitas.",
  "resJobN": "Empleo {n}",
  "resJobTitle": "Puesto",
  "resEmployer": "Empleador",
  "resJobCity": "Ciudad",
  "resStart": "Inicio (mes y año)",
  "resEnd": "Fin (mes y año)",
  "resCurrent": "Trabajo aquí ahora",
  "resDuties": "¿Qué hacías allí?",
  "resVolH": "Trabajo voluntario y comunitario",
  "resVol": "La iglesia, la escuela, el cuidado de la familia y el trabajo en la comunidad cuentan como experiencia real. Cuéntanos qué hiciste.",
  "resSkillsH": "Habilidades",
  "resSkillsHelp": "Toca las habilidades que tienes. Puedes agregar las tuyas abajo.",
  "resSkillsFree": "Tus habilidades, separadas por comas",
  "resEduH": "Educación y más",
  "resSchool": "Nombre de la escuela",
  "resDiploma": "Estado del diploma o HSE",
  "resDipNone": "Elige uno",
  "resDipDone": "Diploma o HSE logrado",
  "resDipWorking": "Estoy trabajando en mi HSE ahora",
  "resDipSome": "Parte de la escuela secundaria",
  "resDipCollege": "Algo de universidad o un título",
  "resCerts": "Certificaciones, separadas por comas",
  "resLangs": "Idiomas que hablas, separados por comas",
  "resErr": "Agrega al menos tu nombre, para que el currículum tenga un nombre.",
  "resBuild": "Crear mi currículum",
  "resPrint": "Imprimir o guardar como PDF",
  "resCopy": "Copiar texto",
  "resCopied": "Texto del currículum copiado.",
  "resSend": "Enviar al Pastor para revisión",
  "resSendErr": "Para enviar tu currículum al Pastor, el formulario necesita tu nombre y un número de teléfono donde pueda llamarte, diez dígitos o más.",
  "resSent": "Tu currículum va en camino al Pastor. Él mismo te llamará.",
  "resEdit": "Seguir editando",
  "resClear": "Borrar los datos de mi currículum",
  "resClearConfirm": "¿Borrar el currículum guardado en este teléfono?",
  "resSecSummary": "Resumen",
  "resSecWork": "Experiencia laboral",
  "resSecVol": "Experiencia voluntaria y comunitaria",
  "resSecSkills": "Habilidades",
  "resSecEdu": "Educación",
  "resSecCerts": "Certificaciones",
  "resSecLangs": "Idiomas",
  "trk_pharmacy": "Técnico de farmacia",
  "trk_ccma": "CCMA (Asistente médico)",
  "trk_sterile": "Procesamiento estéril",
  "trk_hvac": "HVAC (Clima y calefacción)",
  "trk_electrical": "Electricidad",
  "trk_cdl": "CDL (Manejo de camiones)",
  "trk_cda": "CDA (Desarrollo infantil)",
  "trk_entrepreneur": "Emprendimiento",
  "trk_other": "Otro empleo",
  "trk_notsure": "Aún no lo sé",
  "trk_general": "General",
  "intTitle": "Entra listo",
  "intIntro": "Practica preguntas reales de entrevista antes del gran día. Elige tu capacitación, lee cada pregunta y escribe lo que dirías. Tus respuestas se quedan en este teléfono.",
  "intEnNote": "Por ahora, las preguntas y los consejos están en inglés y español. El resto de la aplicación habla tu idioma.",
  "intPick": "Elige tu capacitación",
  "intTip": "Lo que quieren escuchar:",
  "intAnswered": "Respondiste {a} de {b}",
  "intErr": "Escribe una respuesta corta para cada pregunta primero. Una sola línea honesta cuenta.",
  "intFinish": "Terminar la práctica",
  "intDoneTitle": "Hiciste el trabajo. Ahora entra listo.",
  "intDoneBody": "Practicaste cada pregunta. Lee tus respuestas una vez más antes de la entrevista, y lleva tu currículum contigo.",
  "decTitle": "Capacitación Laboral: aplica antes del 1 de diciembre",
  "decClosed": "Las aplicaciones para la primavera de 2027 ya cerraron. Pregunta al Pastor por la próxima ronda.",
  "decFacts": "La Capacitación Laboral es para mayores de 18 años. Las clases comienzan el 1 de febrero de 2027.",
  "decDays": "Quedan {n} días para aplicar",
  "decDay1": "Queda 1 día para aplicar",
  "decToday": "Hoy es el último día para aplicar",
  "decReadyH": "Ten esto listo",
  "decItem1": "Tu diploma o HSE, o comienza ahora las clases gratuitas de HSE",
  "decItem2": "Una identificación de Indiana",
  "decItem3": "Tu tarjeta del Seguro Social",
  "decItem4": "Tu permiso de trabajo",
  "decItem5": "Un número de teléfono y un correo que Wayne pueda usar",
  "decApplyBtn": "Aplica en adulted.info/career",
  "decTellH": "¿Ya aplicaste?",
  "decTellBody": "Díselo al Pastor. Él envía el nombre de cada solicitante a Wayne para su entrevista, para que tu nombre llegue al escritorio correcto.",
  "decErr": "Agrega tu nombre y un número de teléfono donde el Pastor pueda llamarte, diez dígitos o más.",
  "decTellBtn": "Ya apliqué, avisa al Pastor",
  "decSent": "Entendido. El Pastor tiene tu nombre y lo enviará a Wayne para tu entrevista.",
  "stepsTitle": "Mis próximos pasos",
  "stepsIntro": "Tu escalera, un paso a la vez. Marca cada paso cuando lo termines.",
  "stepsPrivacy": "Esta lista vive solo en tu teléfono. Nada sale de este dispositivo.",
  "step1": "Mi diploma o HSE",
  "step2": "Apliqué a la Capacitación Laboral",
  "step3": "Comencé mi capacitación",
  "step4": "Creé mi currículum",
  "step5": "Listo para mi entrevista",
  "step6": "Conseguí el empleo",
  "stepsCount": "{a} de {b} pasos listos",
  "cheerStart": "Todo logro empezó con un paso. Da el primero hoy.",
  "cheerGoing": "Estás avanzando. Paso a paso es como la gente termina.",
  "cheerHalf": "Mira cuánto has subido. Sigue, estás más cerca de lo que crees.",
  "cheerAlmost": "Casi llegas. Un empujón más y esta escalera es tuya.",
  "cheerDone": "Subiste toda la escalera. Estamos orgullosos de ti. Díselo al Pastor para celebrar contigo.",
  "helpTitle": "Ayuda cerca de ti",
  "helpIntro": "Puertas reales, cerca de casa. Llama primero cuando puedas, para saber qué llevar.",
  "helpCall": "Llamar",
  "helpMore": "Se agregarán más puertas de la lista de recursos de Wayne cuando el equipo la comparta.",
  "hNote211": "Línea gratuita de ayuda comunitaria. Alimentos, vivienda, servicios básicos y más.",
  "hNoteWayne": "La oficina de Educación para Adultos de Wayne en Ben Davis University. Clases, Capacitación Laboral y el centro del Pastor.",
  "hNoteTrustee": "El fideicomisario del municipio ayuda a los vecinos con gastos esenciales como renta, servicios y alimentos.",
  "hNoteExcel": "Educación gratuita para adultos con consejeros que ayudan con la escuela, el trabajo y los próximos pasos.",
  "hNoteGleaners": "Ayuda con alimentos para familias en todo Indianápolis.",
  "studyTitle": "Compañero de estudio",
  "studyIntro": "Un juego corto de práctica para hoy. Ocho preguntas, sin calificaciones, sin presión. Preguntas nuevas cada día.",
  "studyMath": "Matemáticas",
  "studyReading": "Lectura",
  "studyScience": "Ciencias",
  "studySocial": "Estudios sociales",
  "studyRight": "Correcto.",
  "studyWrong": "No exactamente.",
  "studyScore": "Acertaste {a} de {b}. Vuelve mañana por un juego nuevo.",
  "studyVocabH": "Palabras para tu oficio",
  "studyVocabHelp": "Elige tu capacitación, luego toca la tarjeta para ver qué significa la palabra.",
  "studyTap": "Toca para voltear",
  "studyPrev": "Atrás",
  "studyNext": "Palabra siguiente",
  "flashCount": "Palabra {a} de {b}",
  "reportTitle": "Reporte para Wayne",
  "reportNote": "Un resumen de solo conteos para el equipo de Wayne. Sin nombres, sin números, sin textos.",
  "reportBtn": "Crear el reporte para Wayne",
  "reportCopy": "Copiar reporte",
  "reportCopied": "Reporte copiado."
},
fr: {
  tagline: "Votre pasteur et votre famille de foi, à portée de main — pour que vous terminiez ce que vous avez commencé.",
  chooseLang: "Choisissez votre langue",
  talk: "Parler au Pasteur",
  talkSub: "Partagez ce que vous portez. Écoutez une prière dans la voix du Pasteur, et il vous répondra lui-même.",
  dq: "N'abandonne pas",
  dqSub: "Quelque chose est sur le point de vous arrêter ? Dites-nous ce que c'est. Nous vous aiderons à y faire face.",
  forStaff: "Pour le personnel",
  staffOn: "Entrée du personnel — votre demande sera marquée « personnel ».",
  dailyWord: "Parole du jour",
  offeredBy: "Offert par Touch My Soul Ministry aux étudiants et au personnel de Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · Dimanches 11h30 · Whisper Theater, Garnet Waterfront Hotel",
  crisisFooter: "En crise ? Appelez ou écrivez au 988 — gratuit, jour et nuit (É.-U.).",
  careLink: "Équipe d'accompagnement",
  privacyLink: "Votre vie privée",
  privacyTitle: "Votre vie privée",
  privacyH1: "Ce que nous recueillons",
  privacyP1: "Uniquement ce que vous écrivez quand vous demandez de l'aide : votre nom si vous le donnez, votre numéro de téléphone et votre message. Lire la prière et la parole du jour ne recueille rien sur vous.",
  privacyH2: "Qui le voit",
  privacyP2: "Le Pasteur et son équipe de soins à Touch My Soul Ministry — personne d'autre. La boîte de réception ne s'ouvre qu'avec le compte du ministère. Votre école reçoit seulement des chiffres — combien de demandes de chaque type — jamais votre nom, votre numéro ni vos paroles.",
  privacyH3: "Ce que nous ne faisons jamais",
  privacyP3: "Nous ne vendons jamais vos informations et ne les partageons jamais avec des annonceurs. L'alerte qui fait vibrer le téléphone du Pasteur ne contient ni nom, ni numéro, ni aucune de vos paroles — seulement le type de demande. Ce que vous partagez n'affecte ni vos cours, ni vos notes, ni votre situation à l'école.",
  privacyH4: "Combien de temps nous le gardons",
  privacyP4: "Jusqu'à ce que votre demande soit traitée et suivie. Ensuite, elle est retirée de la boîte active. Pour la faire retirer plus tôt, écrivez au Pasteur au 317-956-4120.",
  privacyH5: "Comment nous comptons les visites",
  privacyP5: "Nous comptons les visites de façon anonyme pour pouvoir dire combien de personnes l'application atteint — seulement des nombres de visites et de touchers. Nous ne gardons jamais qui a visité, où vous êtes, ni ce que vous avez lu ou écrit.",
  back: "← Retour",
  carrying: "Qu'est-ce que vous portez ?",
  carryingPh: "Écrivez-le avec vos mots. Une phrase honnête suffit.",
  nameOpt: "Votre nom (facultatif)",
  phoneOpt: "Téléphone",
  reachNote: "Votre prière est toujours gratuite — aucun numéro n'est nécessaire pour prier. Mais si vous voulez que le Pasteur vous réponde, laissez votre numéro : il ne peut répondre que si vous le laissez. Le Pasteur lit chaque demande lui-même et répond personnellement sous un jour ouvrable.",
  prayBtn: "Priez avec moi",
  needErr: "Écrivez quelques mots sur ce que vous portez, pour que nous puissions prier avec vous.",
  phoneErr: "Ajoutez votre numéro de téléphone — le Pasteur ne peut répondre que si vous laissez un numéro où vous joindre.",
  sendNote: "Vous voulez que le Pasteur vous contacte lui-même ? Ajoutez votre numéro et touchez Envoyer — il ne peut répondre que si vous laissez un numéro. Votre prière ci-dessus est à vous dans tous les cas.",
  sendBtn: "Envoyer au Pasteur",
  prayerFor: "Une prière pour vous",
  hearVoice: "🔊 Écouter dans la voix du Pasteur",
  voiceWait: "Chargement de la voix du Pasteur…",
  voiceFail: "La voix du Pasteur n'a pas pu se charger. Votre prière est ci-dessus — lisez-la doucement, à voix haute si vous pouvez.",
  savedCounsel: "Votre demande est enregistrée. Le Pasteur vous contactera lui-même.",
  crisisTitle: "Votre vie compte. Demandez de l'aide maintenant.",
  crisisBody: "Si vous risquez de passer à l'acte, appelez ou écrivez au 988 dès maintenant — gratuit, confidentiel, jour et nuit. Des conseillers formés aux États-Unis vous écouteront et vous aideront. Votre demande a aussi été enregistrée, et le Pasteur vous suivra.",
  crisisCall: "📞 Appeler le 988",
  crisisText: "💬 Écrire au 988",
  dqQ: "Qu'est-ce qui est sur le point de vous arrêter ?",
  dqPick: "Touchez ce qui correspond le mieux. Il n'y a pas de mauvaise réponse.",
  b_childcare: "La garde des enfants", b_ride: "Le transport", b_money: "L'argent", b_work: "Mon horaire de travail",
  b_family: "La famille", b_behind: "Je suis en retard en classe", b_talk: "J'ai juste besoin de parler",
  r_childcare: "S'occuper d'un enfant n'est jamais une honte — c'est une raison de demander de l'aide pour tout porter.",
  n_childcare: "Dites vos horaires de classe à l'équipe ci-dessous. Nous prierons avec vous et chercherons ensemble une solution de garde.",
  r_ride: "Un problème de transport ne devrait jamais mettre fin à un diplôme. Vous êtes arrivé jusqu'ici — laissez-nous aider pour la suite du chemin.",
  n_ride: "Dites-nous d'où vous partez. Notre équipe cherchera un plan de transport avec vous.",
  r_money: "La pression de l'argent est réelle, et elle fait beaucoup de bruit. Mais cette ligne d'arrivée vaut plus que ce mois difficile.",
  n_money: "Dites à l'équipe ce qui presse le plus. Nous prierons et chercherons des options ensemble, un pas à la fois.",
  r_work: "Travailler et étudier en même temps est un lourd fardeau. Le fait de faire les deux en dit long sur vous.",
  n_work: "Dites-nous votre nouvel horaire. Nous vous aiderons à réfléchir à vos options pour que le travail et l'école tiennent ensemble.",
  r_family: "Les tempêtes familiales frappent durement les étudiants. Vous n'avez pas à porter la maison et les devoirs tout seul.",
  n_family: "Dites-nous ce qui se passe à la maison, seulement ce que vous êtes à l'aise de partager. Le Pasteur et l'équipe marcheront avec vous.",
  r_behind: "Être en retard n'est pas échouer. La plupart de ceux qui finissent se sont sentis en retard un jour — ils ne se sont simplement pas arrêtés.",
  n_behind: "Dites-nous la classe ou la matière. Nous vous aiderons à faire un plan simple pour rattraper.",
  r_talk: "Parfois, l'étape la plus courageuse est de dire : « J'ai juste besoin de parler. » Vous venez de la franchir.",
  n_talk: "Partagez votre nom et votre numéro pour que nous puissions vous joindre. Le Pasteur ou un membre de l'équipe vous contactera pour écouter — sans juger.",
  sosReach: "Votre numéro est obligatoire ici — c'est le seul moyen pour l'équipe de vous recontacter. Quelqu'un vous contactera dès que possible.",
  sosSend: "Envoyer — j'ai besoin d'aide",
  sosConfirmTitle: "Bien reçu. N'abandonne pas.",
  sosConfirmBody: "Votre message est maintenant entre les mains de l'équipe du Pasteur. Quelqu'un vous contactera. En attendant, gardez ceci dans votre cœur :",
  againBtn: "Retour au début",
  carePinTitle: "Équipe d'accompagnement",
  carePinPrompt: "Entrez le code PIN de l'équipe.",
  careWrong: "Ce code ne correspond pas. Réessayez.",
  careEnter: "Entrer",
  careDemo: "Note démo : tout est conservé sur CET appareil seulement. Dans la version réelle, les demandes arrivent sur le téléphone du Pasteur en temps réel.",
  queueTitle: "Demandes sur cet appareil",
  queueEmpty: "Aucune demande sur cet appareil pour le moment.",
  exportBtn: "Exporter (JSON)",
  presentationTitle: "Outils de présentation",
  presentationNote: "Pour une démonstration : chargez des demandes d'exemple propres ou effacez cet appareil avant de présenter.",
  sampleBtn: "Charger les exemples",
  clearBtn: "Effacer les données démo",
  sampleConfirm: "Remplacer le contenu de cet appareil par des exemples propres ?",
  clearConfirm: "Effacer toutes les demandes et tous les compteurs de démonstration de cet appareil ?",
  liveQueueTitle: "Demandes dans la boîte en direct",
  liveNote: "Boîte en direct : vraies demandes envoyées au ministère. Seul le compte d'accompagnement peut voir les noms et les besoins.",
  careLoginTitle: "Connexion de l'équipe",
  careLoginBody: "Nous envoyons un lien de connexion unique à la boîte du ministère. Seule cette boîte peut ouvrir cette vue.",
  careSendLink: "M'envoyer le lien",
  careLinkSent: "Lien envoyé. Ouvrez-le depuis la boîte du ministère sur cet appareil.",
  careLogout: "Se déconnecter",
  careRefresh: "Actualiser",
  careLoadErr: "Impossible de charger les demandes. Vérifiez la connexion, puis touchez Actualiser.",
  cPrayers: "Prières composées", cCounsel: "Demandes au Pasteur", cSos: "Alertes « N'abandonne pas »",
  cStaff: "Demandes du personnel", cCrisis: "Alertes de crise",
  markDone: "Marquer fait", doneTag: "Fait", staffTag: "PERSONNEL", crisisTag: "CRISE — EN PREMIER",
  typeCounsel: "Parler au Pasteur", typeSos: "N'abandonne pas", barrierLabel: "Obstacle", needLabel: "Demande",
  "growTitle": "Grandir",
  "growSub": "Des outils pour ta prochaine étape : un emploi, un entretien, un diplôme.",
  "doorResume": "Créer mon CV",
  "doorInterview": "Préparer l'entretien",
  "doorDec1": "Guide du 1er décembre",
  "doorSteps": "Mes prochaines étapes",
  "doorHelp": "Aide près de chez toi",
  "doorStudy": "Compagnon d'étude",
  "resIntro": "Réponds à quelques questions. L'application crée un CV propre et professionnel avec tes propres mots. Elle utilise seulement ce que tu écris. Elle n'invente jamais rien.",
  "resPrivacy": "Ton CV reste sur ton téléphone, sauf si tu l'envoies au Pasteur. Il ne va jamais à l'école.",
  "resAboutYou": "À propos de toi",
  "resName": "Nom complet",
  "resCity": "Ville",
  "resEmail": "Courriel (au choix)",
  "resTarget": "Emploi ou formation que tu veux",
  "resSummaryH": "Ton histoire en bref",
  "resSummaryHelp": "Réponds à l'une de ces trois questions. L'application transforme tes réponses en un court résumé.",
  "resSum1": "Quel genre de travail veux tu ?",
  "resSum2": "En quoi es tu doué ?",
  "resSum3": "Que doit savoir un employeur sur toi ?",
  "resJobsH": "Expérience de travail",
  "resJobsHelp": "Ajoute jusqu'à trois emplois. Laisse un emploi vide si tu n'en as pas besoin.",
  "resJobN": "Emploi {n}",
  "resJobTitle": "Titre du poste",
  "resEmployer": "Employeur",
  "resJobCity": "Ville",
  "resStart": "Début (mois et année)",
  "resEnd": "Fin (mois et année)",
  "resCurrent": "Je travaille ici maintenant",
  "resDuties": "Que faisais tu là bas ?",
  "resVolH": "Bénévolat et travail communautaire",
  "resVol": "L'église, l'école, les soins à la famille et le travail dans la communauté comptent comme une vraie expérience. Raconte nous ce que tu as fait.",
  "resSkillsH": "Compétences",
  "resSkillsHelp": "Touche les compétences que tu as. Tu peux ajouter les tiennes plus bas.",
  "resSkillsFree": "Tes compétences, séparées par des virgules",
  "resEduH": "Éducation et plus",
  "resSchool": "Nom de l'école",
  "resDiploma": "État du diplôme ou du HSE",
  "resDipNone": "Choisis une réponse",
  "resDipDone": "Diplôme ou HSE obtenu",
  "resDipWorking": "Je travaille sur mon HSE en ce moment",
  "resDipSome": "Une partie du secondaire",
  "resDipCollege": "Un peu d'université ou un diplôme",
  "resCerts": "Certifications, séparées par des virgules",
  "resLangs": "Langues que tu parles, séparées par des virgules",
  "resErr": "Ajoute au moins ton nom, pour que le CV porte un nom.",
  "resBuild": "Créer mon CV",
  "resPrint": "Imprimer ou garder en PDF",
  "resCopy": "Copier le texte",
  "resCopied": "Texte du CV copié.",
  "resSend": "Envoyer au Pasteur pour relecture",
  "resSendErr": "Pour envoyer ton CV au Pasteur, le formulaire a besoin de ton nom et d'un numéro de téléphone où il peut te joindre, dix chiffres ou plus.",
  "resSent": "Ton CV est en route vers le Pasteur. Il te contactera lui même.",
  "resEdit": "Continuer à modifier",
  "resClear": "Effacer les données de mon CV",
  "resClearConfirm": "Effacer le CV gardé sur ce téléphone ?",
  "resSecSummary": "Résumé",
  "resSecWork": "Expérience de travail",
  "resSecVol": "Expérience bénévole et communautaire",
  "resSecSkills": "Compétences",
  "resSecEdu": "Éducation",
  "resSecCerts": "Certifications",
  "resSecLangs": "Langues",
  "trk_pharmacy": "Technicien en pharmacie",
  "trk_ccma": "CCMA (Assistant médical)",
  "trk_sterile": "Traitement stérile",
  "trk_hvac": "HVAC (Chauffage et climatisation)",
  "trk_electrical": "Électricité",
  "trk_cdl": "CDL (Conduite de camions)",
  "trk_cda": "CDA (Développement de l'enfant)",
  "trk_entrepreneur": "Entrepreneuriat",
  "trk_other": "Un autre emploi",
  "trk_notsure": "Pas encore sûr",
  "trk_general": "Général",
  "intTitle": "Entre prêt",
  "intIntro": "Entraîne toi sur de vraies questions d'entretien avant le grand jour. Choisis ta formation, lis chaque question, et écris ce que tu dirais. Tes réponses restent sur ce téléphone.",
  "intEnNote": "Pour le moment, les questions et les conseils sont en anglais et en espagnol. Le reste de l'application parle ta langue.",
  "intPick": "Choisis ta formation",
  "intTip": "Ce qu'ils veulent entendre :",
  "intAnswered": "Tu as répondu à {a} sur {b}",
  "intErr": "Écris d'abord une courte réponse à chaque question. Une seule ligne honnête compte.",
  "intFinish": "Terminer l'entraînement",
  "intDoneTitle": "Tu as fait le travail. Maintenant, entre prêt.",
  "intDoneBody": "Tu t'es entraîné sur chaque question. Relis tes réponses une fois de plus avant l'entretien, et apporte ton CV avec toi.",
  "decTitle": "Formation professionnelle : inscris toi avant le 1er décembre",
  "decClosed": "Les inscriptions pour le printemps 2027 sont fermées. Demande au Pasteur pour la prochaine session.",
  "decFacts": "La formation professionnelle est pour les 18 ans et plus. Les cours commencent le 1er février 2027.",
  "decDays": "Il reste {n} jours pour s'inscrire",
  "decDay1": "Il reste 1 jour pour s'inscrire",
  "decToday": "Aujourd'hui est le dernier jour pour s'inscrire",
  "decReadyH": "Prépare ces choses",
  "decItem1": "Ton diplôme ou ton HSE, ou commence maintenant les cours HSE gratuits",
  "decItem2": "Une pièce d'identité de l'Indiana",
  "decItem3": "Ta carte de sécurité sociale",
  "decItem4": "Ton autorisation de travail",
  "decItem5": "Un numéro de téléphone et un courriel que Wayne peut utiliser",
  "decApplyBtn": "Inscris toi sur adulted.info/career",
  "decTellH": "Tu t'es déjà inscrit ?",
  "decTellBody": "Dis le au Pasteur. Il envoie le nom de chaque candidat à Wayne pour l'entretien, pour que ton nom arrive au bon bureau.",
  "decErr": "Ajoute ton nom et un numéro de téléphone où le Pasteur peut te joindre, dix chiffres ou plus.",
  "decTellBtn": "Je me suis inscrit, préviens le Pasteur",
  "decSent": "Bien reçu. Le Pasteur a ton nom et l'enverra à Wayne pour ton entretien.",
  "stepsTitle": "Mes prochaines étapes",
  "stepsIntro": "Ton échelle, une étape à la fois. Coche chaque étape quand tu la termines.",
  "stepsPrivacy": "Cette liste vit seulement sur ton téléphone. Rien ne quitte cet appareil.",
  "step1": "Mon diplôme ou mon HSE",
  "step2": "Inscrit à la formation professionnelle",
  "step3": "J'ai commencé ma formation",
  "step4": "J'ai créé mon CV",
  "step5": "Prêt pour mon entretien",
  "step6": "J'ai eu le poste",
  "stepsCount": "{a} étapes sur {b} terminées",
  "cheerStart": "Chaque arrivée a commencé par un pas. Fais le premier aujourd'hui.",
  "cheerGoing": "Tu avances. Pas à pas, c'est ainsi que les gens finissent.",
  "cheerHalf": "Regarde cette montée. Continue, tu es plus près que tu ne le penses.",
  "cheerAlmost": "Presque là. Un effort de plus et cette échelle est à toi.",
  "cheerDone": "Tu as monté toute l'échelle. Nous sommes fiers de toi. Dis le au Pasteur pour que nous célébrions avec toi.",
  "helpTitle": "Aide près de chez toi",
  "helpIntro": "De vraies portes, près de chez toi. Appelle d'abord quand tu peux, pour savoir quoi apporter.",
  "helpCall": "Appeler",
  "helpMore": "D'autres portes de la liste de ressources de Wayne seront ajoutées ici quand l'équipe la partagera.",
  "hNote211": "Ligne d'aide communautaire gratuite. Nourriture, logement, services essentiels et plus.",
  "hNoteWayne": "Le bureau d'éducation des adultes de Wayne à Ben Davis University. Cours, formation professionnelle et le centre du Pasteur.",
  "hNoteTrustee": "L'administrateur du canton aide les voisins avec les besoins essentiels comme le loyer, les services et la nourriture.",
  "hNoteExcel": "Éducation gratuite pour adultes, avec des conseillers qui aident pour l'école, le travail et les prochaines étapes.",
  "hNoteGleaners": "Aide alimentaire pour les familles dans tout Indianapolis.",
  "studyTitle": "Compagnon d'étude",
  "studyIntro": "Un petit jeu d'entraînement pour aujourd'hui. Huit questions, sans notes, sans pression. De nouvelles questions chaque jour.",
  "studyMath": "Mathématiques",
  "studyReading": "Lecture",
  "studyScience": "Sciences",
  "studySocial": "Études sociales",
  "studyRight": "Bonne réponse.",
  "studyWrong": "Pas tout à fait.",
  "studyScore": "Tu as eu {a} bonnes réponses sur {b}. Reviens demain pour un nouveau jeu.",
  "studyVocabH": "Des mots pour ton métier",
  "studyVocabHelp": "Choisis ta formation, puis touche la carte pour voir ce que le mot veut dire.",
  "studyTap": "Touche pour retourner",
  "studyPrev": "Retour",
  "studyNext": "Mot suivant",
  "flashCount": "Mot {a} sur {b}",
  "reportTitle": "Rapport Wayne",
  "reportNote": "Un résumé en chiffres seulement pour l'équipe de Wayne. Aucun nom, aucun numéro, aucun texte de message.",
  "reportBtn": "Créer le rapport Wayne",
  "reportCopy": "Copier le rapport",
  "reportCopied": "Rapport copié."
},
ht: {
  tagline: "Pastè w ak moun ou yo, yon sèl touch lwen — pou w ka fini sa w te kòmanse a.",
  chooseLang: "Chwazi lang ou",
  talk: "Pale ak Pastè a",
  talkSub: "Pataje sa w ap pote a. Koute yon lapriyè nan vwa Pastè a, epi li menm l ap reponn ou.",
  dq: "Pa lage",
  dqSub: "Gen yon bagay ki prèt pou rete w? Di nou sa l ye. N ap ede w fè fas ak li.",
  forStaff: "Pou anplwaye yo",
  staffOn: "Pòt anplwaye yo — demann ou an ap make kòm anplwaye.",
  dailyWord: "Pawòl pou jodi a",
  offeredBy: "Touch My Soul Ministry ofri l bay elèv ak anplwaye Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · Dimanch 11:30 AM · Whisper Theater, Garnet Waterfront Hotel",
  crisisFooter: "Nan kriz? Rele oswa ekri 988 — gratis, lajounen kou lannuit (Etazini).",
  careLink: "Ekip swen",
  privacyLink: "Vi prive w",
  privacyTitle: "Vi prive w",
  privacyH1: "Sa nou kolekte",
  privacyP1: "Se sèlman sa w ekri lè w mande èd: non w si w bay li, nimewo telefòn ou, ak mesaj ou. Lekti lapriyè a ak pawòl pou jodi a pa kolekte anyen sou ou.",
  privacyH2: "Ki moun ki wè li",
  privacyP2: "Pastè a ak ekip swen li nan Touch My Soul Ministry — pèsonn lòt. Bwat resepsyon an louvri sèlman ak kont ministè a. Lekòl ou resevwa sèlman kantite — konbyen demann nan chak kalite — janm non w, nimewo w, ni pawòl ou.",
  privacyH3: "Sa nou pa janm fè",
  privacyP3: "Nou pa janm vann enfòmasyon w ni pataje li ak piblisite. Alèt ki fè telefòn Pastè a vibre pa pote non, ni nimewo, ni okenn nan pawòl ou yo — sèlman kalite demann nan. Sa w pataje pa afekte klas ou, nòt ou, ni pozisyon w nan lekòl la.",
  privacyH4: "Konbyen tan nou kenbe li",
  privacyP4: "Jiskaske yo reponn demann ou epi yo fè swivi. Apre sa, yo retire li nan bwat aktif la. Pou w mande yo retire li pi bonè, voye yon tèks bay Pastè a nan 317-956-4120.",
  privacyH5: "Kijan nou konte vizit yo",
  privacyP5: "Nou konte vizit yo san non pou nou ka di konbyen moun aplikasyon an rive jwenn — sèlman kantite vizit ak tape. Nou pa janm sere ki moun ki vizite, kote w ye, ni sa w li oswa w ekri.",
  back: "← Retounen",
  carrying: "Kisa w ap pote?",
  carryingPh: "Ekri l ak pwòp mo w. Yon sèl fraz onèt sifi.",
  nameOpt: "Non w (si w vle)",
  phoneOpt: "Telefòn",
  reachNote: "Lapriyè w toujou gratis — ou pa bezwen nimewo pou w priye. Men si w vle Pastè a kontakte w, kite nimewo telefòn ou: li ka reponn sèlman si w kite l. Pastè a li chak demann li menm, epi li reponn an pèsòn nan yon jou travay.",
  prayBtn: "Priye ak mwen",
  needErr: "Tanpri ekri kèk mo sou sa w ap pote a, pou nou ka priye ak ou.",
  phoneErr: "Tanpri ajoute nimewo telefòn ou — Pastè a ka reponn sèlman si w kite yon nimewo li ka jwenn ou.",
  sendNote: "Ou vle Pastè a kontakte w li menm? Ajoute nimewo telefòn ou epi touche Voye — li ka reponn sèlman si w kite yon nimewo. Lapriyè w la anwo a se pou ou kanmenm.",
  sendBtn: "Voye bay Pastè a",
  prayerFor: "Yon lapriyè pou ou",
  hearVoice: "🔊 Koute l nan vwa Pastè a",
  voiceWait: "N ap chaje vwa Pastè a…",
  voiceFail: "Vwa Pastè a pa t ka chaje kounye a. Lapriyè w la anwo a — li l dousman, byen fò si w kapab.",
  savedCounsel: "Demann ou an anrejistre. Pastè a ap kontakte w li menm.",
  crisisTitle: "Lavi w enpòtan. Chèche èd kounye a menm.",
  crisisBody: "Si w santi w ka aji sou panse sa yo, tanpri rele oswa ekri 988 kounye a menm — gratis, prive, lajounen kou lannuit. Konseye ki fòme Ozetazini ap koute w epi ede w. Demann ou an anrejistre tou, epi Pastè a ap fè swivi.",
  crisisCall: "📞 Rele 988",
  crisisText: "💬 Ekri 988",
  dqQ: "Ki bagay ki prèt pou rete w?",
  dqPick: "Touche sa ki pi sanble ak sitiyasyon w. Pa gen move repons.",
  b_childcare: "Gad timoun", b_ride: "Transpò", b_money: "Lajan", b_work: "Orè travay mwen",
  b_family: "Fanmi", b_behind: "Mwen anreta nan klas", b_talk: "Mwen jis bezwen pale",
  r_childcare: "Pran swen yon timoun pa janm yon wont — se yon rezon pou mande èd pou w pote tout bagay.",
  n_childcare: "Di ekip la orè klas ou yo anba a. N ap priye ak ou epi n ap chèche yon plan pou gad timoun ansanm.",
  r_ride: "Yon pwoblèm transpò pa ta dwe janm fini yon diplòm. Ou rive jis isit la — kite nou ede w ak rès wout la.",
  n_ride: "Di nou kote w ap soti. Ekip nou an ap travay sou yon plan transpò ak ou.",
  r_money: "Presyon lajan se vre, epi li fè anpil bri. Men liy fini sa a vo plis pase mwa difisil sa a.",
  n_money: "Di ekip la sa k ap peze w plis. N ap priye, epi n ap chèche opsyon ansanm, yon pa alafwa.",
  r_work: "Travay epi etidye an menm tan se yon chay lou. Lefèt ou fè toude a pale anpil sou ou.",
  n_work: "Di nou nouvo orè w la. N ap ede w reflechi sou opsyon w yo pou travay ak lekòl ka kenbe ansanm.",
  r_family: "Tanpèt nan fanmi frape elèv yo di. Ou pa oblije pote kay la ak devwa yo pou kont ou.",
  n_family: "Di nou sa k ap pase lakay, sèlman sa w alèz pou pataje. Pastè a ak ekip la ap mache ak ou.",
  r_behind: "Pran reta se pa menm bagay ak echwe. Pifò moun ki fini te santi yo anreta yon lè — yo jis pa t rete la.",
  n_behind: "Di nou ki klas oswa ki matyè. N ap ede w fè yon plan senp pou w ratrape.",
  r_talk: "Pafwa etap ki pi kouraje a se di: « Mwen jis bezwen pale. » Ou fenk fè l.",
  n_talk: "Pataje non w ak telefòn ou pou nou ka jwenn ou. Pastè a oswa yon moun nan ekip la ap kontakte w pou koute w — san jije w.",
  sosReach: "Nimewo telefòn ou obligatwa isit la — se sèl fason ekip la ka kontakte w. Yon moun ap kontakte w osito posib.",
  sosSend: "Voye — mwen bezwen èd",
  sosConfirmTitle: "Nou resevwa l. Pa lage.",
  sosConfirmBody: "Mesaj ou a nan men ekip swen Pastè a kounye a. Yon moun ap kontakte w. Antretan, kenbe sa nan kè w:",
  againBtn: "Retounen nan kòmansman",
  carePinTitle: "Ekip swen",
  carePinPrompt: "Antre PIN ekip swen an.",
  careWrong: "PIN sa a pa kòrèk. Eseye ankò.",
  careEnter: "Antre",
  careDemo: "Nòt demonstrasyon: tout bagay rete sou aparèy SA A sèlman. Nan vèsyon reyèl la, demann yo rive sou telefòn Pastè a an tan reyèl.",
  queueTitle: "Demann sou aparèy sa a",
  queueEmpty: "Pa gen demann sou aparèy sa a ankò.",
  exportBtn: "Ekspòte (JSON)",
  presentationTitle: "Zouti prezantasyon",
  presentationNote: "Pou yon demonstrasyon: chaje demann egzanp ki pwòp, oswa efase aparèy sa a anvan w prezante.",
  sampleBtn: "Chaje egzanp prezantasyon",
  clearBtn: "Efase done demonstrasyon",
  sampleConfirm: "Ranplase sa ki sou aparèy sa a ak egzanp prezantasyon ki pwòp?",
  clearConfirm: "Efase tout demann ak kontè demonstrasyon ki sou aparèy sa a?",
  liveQueueTitle: "Demann nan bwat an dirèk la",
  liveNote: "Bwat an dirèk: vrè demann yo voye bay ministè a. Se sèl kont swen an ki ka wè non ak bezwen yo.",
  careLoginTitle: "Koneksyon ekip swen",
  careLoginBody: "Nou voye yon lyen koneksyon yon sèl fwa nan bwat ministè a. Se sèl bwat sa a ki ka louvri paj sa a.",
  careSendLink: "Voye lyen an ban mwen",
  careLinkSent: "Lyen an voye. Louvri l nan bwat ministè a sou aparèy sa a.",
  careLogout: "Dekonekte",
  careRefresh: "Aktyalize",
  careLoadErr: "Nou pa t ka chaje demann yo. Tcheke koneksyon an, epi touche Aktyalize.",
  cPrayers: "Lapriyè ki konpoze", cCounsel: "Demann bay Pastè a", cSos: "Alèt « Pa lage »",
  cStaff: "Demann anplwaye", cCrisis: "Alèt kriz",
  markDone: "Make fini", doneTag: "Fini", staffTag: "ANPLWAYE", crisisTag: "KRIZ — AN PREMYE",
  typeCounsel: "Pale ak Pastè a", typeSos: "Pa lage", barrierLabel: "Obstak", needLabel: "Demann",
  "growTitle": "Grandi",
  "growSub": "Zouti pou pwochen pa w: yon travay, yon entèvyou, yon diplòm.",
  "doorResume": "Fè CV mwen",
  "doorInterview": "Prepare entèvyou",
  "doorDec1": "Gid 1ye desanm",
  "doorSteps": "Pwochen pa m yo",
  "doorHelp": "Èd tou pre w",
  "doorStudy": "Zanmi etid",
  "resIntro": "Reponn kèk kesyon. Aplikasyon an fè yon CV pwòp e pwofesyonèl ak pawòl ou yo. Li sèvi sèlman ak sa w ekri. Li pa janm envante anyen.",
  "resPrivacy": "CV w rete sou telefòn ou, sof si w voye l bay Pastè a. Li pa janm ale lekòl.",
  "resAboutYou": "Sou ou menm",
  "resName": "Non konplè",
  "resCity": "Vil",
  "resEmail": "Imèl (ou pa oblije)",
  "resTarget": "Travay oswa fòmasyon ou vle",
  "resSummaryH": "Istwa w an kout",
  "resSummaryHelp": "Reponn nenpòt nan twa sa yo. Aplikasyon an vire repons ou yo an yon ti rezime kout.",
  "resSum1": "Ki kalite travay ou vle?",
  "resSum2": "Nan kisa ou fò?",
  "resSum3": "Kisa yon patwon dwe konnen sou ou?",
  "resJobsH": "Istwa travay",
  "resJobsHelp": "Mete jiska twa travay. Kite yon travay vid si w pa bezwen l.",
  "resJobN": "Travay {n}",
  "resJobTitle": "Tit travay la",
  "resEmployer": "Patwon",
  "resJobCity": "Vil",
  "resStart": "Kòmansman (mwa ak ane)",
  "resEnd": "Fen (mwa ak ane)",
  "resCurrent": "Mwen travay la kounye a",
  "resDuties": "Kisa w te konn fè la?",
  "resVolH": "Travay volontè ak kominote",
  "resVol": "Legliz, lekòl, swen pou fanmi, ak travay nan kominote a konte kòm vrè eksperyans. Di nou kisa w te fè.",
  "resSkillsH": "Konpetans",
  "resSkillsHelp": "Peze konpetans ou genyen yo. Ou ka ajoute pa w anba a.",
  "resSkillsFree": "Konpetans ou yo, separe ak vigil",
  "resEduH": "Edikasyon ak plis",
  "resSchool": "Non lekòl la",
  "resDiploma": "Eta diplòm oswa HSE",
  "resDipNone": "Chwazi youn",
  "resDipDone": "Mwen gen diplòm oswa HSE",
  "resDipWorking": "M ap travay sou HSE mwen kounye a",
  "resDipSome": "Yon pati nan lekòl segondè",
  "resDipCollege": "Yon ti inivèsite oswa yon diplòm",
  "resCerts": "Sètifikasyon, separe ak vigil",
  "resLangs": "Lang ou pale, separe ak vigil",
  "resErr": "Tanpri mete omwen non w, pou CV a gen yon non ladan l.",
  "resBuild": "Fè CV mwen",
  "resPrint": "Enprime oswa sove kòm PDF",
  "resCopy": "Kopye tèks la",
  "resCopied": "Tèks CV a kopye.",
  "resSend": "Voye bay Pastè pou l gade l",
  "resSendErr": "Pou w voye CV w bay Pastè a, fòm nan bezwen non w ak yon nimewo telefòn kote l ka jwenn ou, dis chif oswa plis.",
  "resSent": "CV w sou wout pou Pastè a. L ap kontakte w li menm.",
  "resEdit": "Kontinye modifye",
  "resClear": "Efase done CV mwen",
  "resClearConfirm": "Efase CV ki sove sou telefòn sa a?",
  "resSecSummary": "Rezime",
  "resSecWork": "Eksperyans travay",
  "resSecVol": "Eksperyans volontè ak kominote",
  "resSecSkills": "Konpetans",
  "resSecEdu": "Edikasyon",
  "resSecCerts": "Sètifikasyon",
  "resSecLangs": "Lang",
  "trk_pharmacy": "Teknisyen famasi",
  "trk_ccma": "CCMA (Asistan medikal)",
  "trk_sterile": "Tretman esteril",
  "trk_hvac": "HVAC (Chofaj ak klimatizasyon)",
  "trk_electrical": "Elektrisite",
  "trk_cdl": "CDL (Kondwi kamyon)",
  "trk_cda": "CDA (Devlopman timoun)",
  "trk_entrepreneur": "Antreprenarya",
  "trk_other": "Yon lòt travay",
  "trk_notsure": "Mwen poko fin sèten",
  "trk_general": "Jeneral",
  "intTitle": "Antre pare",
  "intIntro": "Pratike vrè kesyon entèvyou anvan gran jou a. Chwazi fòmasyon w, li chak kesyon, epi ekri sa w ta di. Repons ou yo rete sou telefòn sa a.",
  "intEnNote": "Pou kounye a, kesyon yo ak konsèy yo an Angle ak Panyòl. Rès aplikasyon an pale lang ou.",
  "intPick": "Chwazi fòmasyon w",
  "intTip": "Sa yo vle tande:",
  "intAnswered": "Ou reponn {a} sou {b}",
  "intErr": "Ekri yon ti repons kout pou chak kesyon anvan. Yon sèl liy onèt ase.",
  "intFinish": "Fin pratike",
  "intDoneTitle": "Ou fè travay la. Kounye a antre pare.",
  "intDoneBody": "Ou pratike chak kesyon. Li repons ou yo yon fwa ankò anvan entèvyou a, epi pote CV w avè w.",
  "decTitle": "Fòmasyon Pwofesyonèl: enskri anvan 1ye desanm",
  "decClosed": "Enskripsyon pou prentan 2027 fèmen deja. Mande Pastè a pou pwochen tou a.",
  "decFacts": "Fòmasyon Pwofesyonèl la se pou moun 18 an ak plis. Klas yo kòmanse 1ye fevriye 2027.",
  "decDays": "Ou rete {n} jou pou w enskri",
  "decDay1": "Ou rete 1 jou pou w enskri",
  "decToday": "Jodi a se dènye jou pou w enskri",
  "decReadyH": "Prepare bagay sa yo",
  "decItem1": "Diplòm ou oswa HSE w, oswa kòmanse klas HSE gratis yo kounye a",
  "decItem2": "Yon pyès idantite Indiana",
  "decItem3": "Kat Sekirite Sosyal ou",
  "decItem4": "Otorizasyon travay ou",
  "decItem5": "Yon nimewo telefòn ak yon imèl Wayne ka itilize",
  "decApplyBtn": "Enskri nan adulted.info/career",
  "decTellH": "Ou enskri deja?",
  "decTellBody": "Di Pastè a. Li voye non chak kandida bay Wayne pou entèvyou yo, pou non w rive nan bon biwo a.",
  "decErr": "Tanpri mete non w ak yon nimewo telefòn kote Pastè a ka jwenn ou, dis chif oswa plis.",
  "decTellBtn": "Mwen enskri, di Pastè a",
  "decSent": "Nou resevwa l. Pastè a gen non w epi l ap voye l bay Wayne pou entèvyou w.",
  "stepsTitle": "Pwochen pa m yo",
  "stepsIntro": "Echèl ou a, yon pa alafwa. Koche chak pa lè w fin fè l.",
  "stepsPrivacy": "Lis sa a rete sèlman sou telefòn ou. Anyen pa kite aparèy sa a.",
  "step1": "Diplòm mwen oswa HSE mwen",
  "step2": "Mwen enskri nan Fòmasyon Pwofesyonèl",
  "step3": "Mwen kòmanse fòmasyon mwen",
  "step4": "Mwen fè CV mwen",
  "step5": "Mwen pare pou entèvyou mwen",
  "step6": "Mwen jwenn travay la",
  "stepsCount": "{a} sou {b} pa fini",
  "cheerStart": "Chak fini kòmanse ak yon pa. Fè premye a jodi a.",
  "cheerGoing": "W ap avanse. Yon pa alafwa, se konsa moun fini.",
  "cheerHalf": "Gade jan w monte. Kontinye, ou pi pre pase w panse.",
  "cheerAlmost": "Ou prèt pou rive. Yon dènye pouse epi echèl sa a pou ou.",
  "cheerDone": "Ou monte tout echèl la. Nou fyè de ou. Di Pastè a pou nou ka selebre avè w.",
  "helpTitle": "Èd tou pre w",
  "helpIntro": "Vrè pòt, tou pre lakay ou. Rele anvan lè w kapab, pou w konnen kisa pou w pote.",
  "helpCall": "Rele",
  "helpMore": "Yap ajoute plis pòt ki soti nan lis resous Wayne la isit la lè ekip la pataje l.",
  "hNote211": "Liy èd kominote gratis. Manje, lojman, sèvis debaz, ak plis.",
  "hNoteWayne": "Biwo Edikasyon pou Granmoun Wayne nan Ben Davis University. Klas, Fòmasyon Pwofesyonèl, ak sant Pastè a.",
  "hNoteTrustee": "Administratè minisipalite a ede vwazen ak bezwen esansyèl tankou lwaye, sèvis, ak manje.",
  "hNoteExcel": "Edikasyon gratis pou granmoun, ak konseye ki ede ak lekòl, travay, ak pwochen pa yo.",
  "hNoteGleaners": "Èd manje pou fanmi nan tout Indianapolis.",
  "studyTitle": "Zanmi etid",
  "studyIntro": "Yon ti seri pratik pou jodi a. Uit kesyon, san nòt, san presyon. Nouvo kesyon chak jou.",
  "studyMath": "Matematik",
  "studyReading": "Lekti",
  "studyScience": "Syans",
  "studySocial": "Syans sosyal",
  "studyRight": "Bon repons.",
  "studyWrong": "Pa fin kòrèk.",
  "studyScore": "Ou jwenn {a} sou {b}. Retounen demen pou yon nouvo seri.",
  "studyVocabH": "Mo pou metye w",
  "studyVocabHelp": "Chwazi fòmasyon w, apresa peze kat la pou w wè kisa mo a vle di.",
  "studyTap": "Peze pou vire l",
  "studyPrev": "Tounen",
  "studyNext": "Mo suivan",
  "flashCount": "Mo {a} sou {b}",
  "reportTitle": "Rapò Wayne",
  "reportNote": "Yon rezime an chif sèlman pou ekip Wayne la. San non, san nimewo, san tèks mesaj.",
  "reportBtn": "Fè rapò Wayne la",
  "reportCopy": "Kopye rapò a",
  "reportCopied": "Rapò a kopye."
},
pt: {
  tagline: "Seu pastor e sua gente, a um toque de distância — para você terminar o que começou.",
  chooseLang: "Escolha seu idioma",
  talk: "Fale com o Pastor",
  talkSub: "Compartilhe o que você está carregando. Ouça uma oração na voz do Pastor, e ele mesmo responderá a você.",
  dq: "Não desista",
  dqSub: "Algo está prestes a fazer você parar? Conte para nós o que é. Vamos ajudar você a enfrentar.",
  forStaff: "Para a equipe",
  staffOn: "Porta da equipe — seu pedido será marcado como equipe.",
  dailyWord: "Palavra de hoje",
  offeredBy: "Oferecido por Touch My Soul Ministry a alunos e funcionários da Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · Domingos 11:30 · Whisper Theater, Garnet Waterfront Hotel",
  crisisFooter: "Em crise? Ligue ou envie mensagem para 988 — grátis, dia e noite (EUA).",
  careLink: "Equipe de cuidado",
  privacyLink: "Sua privacidade",
  privacyTitle: "Sua privacidade",
  privacyH1: "O que coletamos",
  privacyP1: "Somente o que você digita quando pede ajuda: seu nome, se você o der, seu número de telefone e sua mensagem. Ler a oração e a palavra do dia não coleta nada sobre você.",
  privacyH2: "Quem vê",
  privacyP2: "O Pastor e sua equipe de cuidado na Touch My Soul Ministry — mais ninguém. A caixa de entrada só pode ser aberta com a conta do ministério. Sua escola recebe apenas números — quantos pedidos de cada tipo — nunca seu nome, seu número ou suas palavras.",
  privacyH3: "O que nunca fazemos",
  privacyP3: "Nunca vendemos suas informações nem as compartilhamos com anunciantes. O alerta que toca no telefone do Pastor não leva nome, número nem nenhuma das suas palavras — apenas o tipo de pedido. O que você compartilha não afeta suas aulas, suas notas nem sua situação na escola.",
  privacyH4: "Por quanto tempo guardamos",
  privacyP4: "Até que seu pedido seja respondido e acompanhado. Depois, ele é retirado da caixa ativa. Para pedir a remoção antes, envie uma mensagem ao Pastor no 317-956-4120.",
  privacyH5: "Como contamos as visitas",
  privacyP5: "Contamos visitas anônimas para podermos dizer quantas pessoas o aplicativo está alcançando — apenas números de visitas e toques. Nunca guardamos quem visitou, onde você está, nem o que você leu ou escreveu.",
  back: "← Voltar",
  carrying: "O que você está carregando?",
  carryingPh: "Escreva com suas palavras. Uma frase honesta é suficiente.",
  nameOpt: "Seu nome (opcional)",
  phoneOpt: "Telefone",
  reachNote: "Sua oração é sempre gratuita — não precisa de número para orar. Mas se você quer que o Pastor responda, deixe seu telefone: ele só pode responder se você deixar. O Pastor lê cada pedido pessoalmente e responde em um dia útil.",
  prayBtn: "Ore comigo",
  needErr: "Escreva algumas palavras sobre o que você carrega, para podermos orar com você.",
  phoneErr: "Adicione seu número de telefone — o Pastor só pode responder se você deixar um número onde ele possa te encontrar.",
  sendNote: "Quer que o Pastor fale com você pessoalmente? Adicione seu telefone e toque em Enviar — ele só pode responder se você deixar um número. Sua oração acima é sua de qualquer forma.",
  sendBtn: "Enviar ao Pastor",
  prayerFor: "Uma oração para você",
  hearVoice: "🔊 Ouça na voz do Pastor",
  voiceWait: "Carregando a voz do Pastor…",
  voiceFail: "A voz do Pastor não carregou agora. Sua oração está acima — leia devagar, em voz alta se puder.",
  savedCounsel: "Seu pedido foi salvo. O Pastor entrará em contato pessoalmente.",
  crisisTitle: "Sua vida importa. Busque ajuda agora mesmo.",
  crisisBody: "Se você pode agir de acordo com esses pensamentos, ligue ou envie mensagem para 988 agora — grátis, privado, dia e noite. Conselheiros treinados nos EUA vão ouvir e ajudar. Seu pedido também foi salvo, e o Pastor fará acompanhamento.",
  crisisCall: "📞 Ligar 988",
  crisisText: "💬 Mensagem 988",
  dqQ: "O que está prestes a fazer você parar?",
  dqPick: "Toque na opção que mais combina. Não há resposta errada.",
  b_childcare: "Cuidado com os filhos", b_ride: "Transporte", b_money: "Dinheiro", b_work: "Meu horário de trabalho",
  b_family: "Família", b_behind: "Estou atrasado nas aulas", b_talk: "Só preciso conversar",
  r_childcare: "Cuidar de um filho nunca é motivo de vergonha — é motivo para pedir ajuda para carregar tudo.",
  n_childcare: "Conte à equipe seus horários de aula abaixo. Vamos orar com você e buscar juntos um plano de cuidado para as crianças.",
  r_ride: "Um problema de transporte nunca deveria acabar com um diploma. Você chegou até aqui — deixe-nos ajudar no resto do caminho.",
  n_ride: "Conte de onde você vem. Nossa equipe vai trabalhar em um plano de transporte com você.",
  r_money: "A pressão do dinheiro é real e faz muito barulho. Mas esta linha de chegada vale mais que este mês difícil.",
  n_money: "Conte à equipe o que mais aperta. Vamos orar e buscar opções juntos, um passo de cada vez.",
  r_work: "Trabalhar e estudar ao mesmo tempo é um peso grande. O fato de você fazer os dois diz muito sobre você.",
  n_work: "Conte seu novo horário. Vamos ajudar você a pensar nas opções para que trabalho e escola continuem de pé.",
  r_family: "Tempestades na família atingem os alunos com força. Você não precisa carregar a casa e os estudos sozinho.",
  n_family: "Conte o que está acontecendo em casa, só o que você se sentir à vontade. O Pastor e a equipe vão caminhar com você.",
  r_behind: "Estar atrasado não é o mesmo que fracassar. A maioria dos que terminam já se sentiu atrasada — só não parou ali.",
  n_behind: "Conte qual é a aula ou matéria. Vamos ajudar você a montar um plano simples para recuperar.",
  r_talk: "Às vezes o passo mais corajoso é dizer: «Só preciso conversar.» Você acabou de dá-lo.",
  n_talk: "Compartilhe seu nome e telefone para podermos te procurar. O Pastor ou alguém da equipe vai procurar você para ouvir — sem julgar.",
  sosReach: "Seu número de telefone é obrigatório aqui — é a única maneira de a equipe responder a você. Alguém entrará em contato assim que possível.",
  sosSend: "Enviar — preciso de ajuda",
  sosConfirmTitle: "Recebemos. Não desista.",
  sosConfirmBody: "Sua mensagem já está com a equipe de cuidado do Pastor. Alguém vai te procurar. Enquanto isso, guarde isto no coração:",
  againBtn: "Voltar ao início",
  carePinTitle: "Equipe de cuidado",
  carePinPrompt: "Digite o PIN da equipe de cuidado.",
  careWrong: "Esse PIN não confere. Tente de novo.",
  careEnter: "Entrar",
  careDemo: "Nota da demonstração: tudo fica armazenado SOMENTE neste aparelho. Na versão oficial, os pedidos chegam ao telefone do Pastor em tempo real.",
  queueTitle: "Pedidos neste aparelho",
  queueEmpty: "Ainda não há pedidos neste aparelho.",
  exportBtn: "Exportar (JSON)",
  presentationTitle: "Ferramentas de apresentação",
  presentationNote: "Para uma demonstração: carregue pedidos de exemplo limpos ou limpe este aparelho antes de apresentar.",
  sampleBtn: "Carregar exemplos",
  clearBtn: "Limpar dados de demonstração",
  sampleConfirm: "Substituir o que está neste aparelho por exemplos limpos de apresentação?",
  clearConfirm: "Limpar todos os pedidos e contadores de demonstração deste aparelho?",
  liveQueueTitle: "Pedidos na caixa ao vivo",
  liveNote: "Caixa ao vivo: pedidos reais enviados ao ministério. Só a conta de cuidado pode ver nomes e necessidades.",
  careLoginTitle: "Acesso da equipe de cuidado",
  careLoginBody: "Enviamos um link de acesso único para o e-mail do ministério. Só esse e-mail pode abrir esta página.",
  careSendLink: "Enviar meu link",
  careLinkSent: "Link enviado. Abra-o no e-mail do ministério neste aparelho.",
  careLogout: "Sair",
  careRefresh: "Atualizar",
  careLoadErr: "Não foi possível carregar os pedidos. Verifique a conexão e toque em Atualizar.",
  cPrayers: "Orações compostas", cCounsel: "Pedidos ao Pastor", cSos: "Alertas «Não desista»",
  cStaff: "Pedidos da equipe", cCrisis: "Alertas de crise",
  markDone: "Marcar feito", doneTag: "Feito", staffTag: "EQUIPE", crisisTag: "CRISE — PRIMEIRO",
  typeCounsel: "Fale com o Pastor", typeSos: "Não desista", barrierLabel: "Obstáculo", needLabel: "Pedido",
  "growTitle": "Crescer",
  "growSub": "Ferramentas para o seu próximo passo: um emprego, uma entrevista, um diploma.",
  "doorResume": "Criar meu currículo",
  "doorInterview": "Preparar a entrevista",
  "doorDec1": "Guia de 1 de dezembro",
  "doorSteps": "Meus próximos passos",
  "doorHelp": "Ajuda perto de você",
  "doorStudy": "Companheiro de estudos",
  "resIntro": "Responda a algumas perguntas. O aplicativo cria um currículo limpo e profissional com as suas próprias palavras. Ele usa apenas o que você escreve. Ele nunca inventa nada.",
  "resPrivacy": "Seu currículo fica no seu telefone, a menos que você o envie ao Pastor. Ele nunca vai para a escola.",
  "resAboutYou": "Sobre você",
  "resName": "Nome completo",
  "resCity": "Cidade",
  "resEmail": "E-mail (opcional)",
  "resTarget": "Emprego ou treinamento que você quer",
  "resSummaryH": "Sua história em resumo",
  "resSummaryHelp": "Responda a qualquer uma destas três. O aplicativo transforma suas respostas em um resumo curto.",
  "resSum1": "Que tipo de trabalho você quer?",
  "resSum2": "No que você é bom?",
  "resSum3": "O que um empregador deve saber sobre você?",
  "resJobsH": "Histórico de trabalho",
  "resJobsHelp": "Adicione até três empregos. Deixe um emprego em branco se não precisar dele.",
  "resJobN": "Emprego {n}",
  "resJobTitle": "Cargo",
  "resEmployer": "Empregador",
  "resJobCity": "Cidade",
  "resStart": "Início (mês e ano)",
  "resEnd": "Fim (mês e ano)",
  "resCurrent": "Trabalho aqui agora",
  "resDuties": "O que você fazia lá?",
  "resVolH": "Trabalho voluntário e comunitário",
  "resVol": "Igreja, escola, cuidado da família e trabalho na comunidade contam como experiência de verdade. Conte para nós o que você fez.",
  "resSkillsH": "Habilidades",
  "resSkillsHelp": "Toque nas habilidades que você tem. Você pode adicionar as suas abaixo.",
  "resSkillsFree": "Suas habilidades, separadas por vírgulas",
  "resEduH": "Educação e mais",
  "resSchool": "Nome da escola",
  "resDiploma": "Situação do diploma ou HSE",
  "resDipNone": "Escolha um",
  "resDipDone": "Diploma ou HSE conquistado",
  "resDipWorking": "Estou trabalhando no meu HSE agora",
  "resDipSome": "Parte do ensino médio",
  "resDipCollege": "Um pouco de faculdade ou um título",
  "resCerts": "Certificações, separadas por vírgulas",
  "resLangs": "Idiomas que você fala, separados por vírgulas",
  "resErr": "Adicione pelo menos o seu nome, para o currículo ter um nome.",
  "resBuild": "Criar meu currículo",
  "resPrint": "Imprimir ou salvar como PDF",
  "resCopy": "Copiar texto",
  "resCopied": "Texto do currículo copiado.",
  "resSend": "Enviar ao Pastor para revisão",
  "resSendErr": "Para enviar seu currículo ao Pastor, o formulário precisa do seu nome e de um número de telefone onde ele possa falar com você, dez dígitos ou mais.",
  "resSent": "Seu currículo está a caminho do Pastor. Ele mesmo entrará em contato.",
  "resEdit": "Continuar editando",
  "resClear": "Apagar os dados do meu currículo",
  "resClearConfirm": "Apagar o currículo salvo neste telefone?",
  "resSecSummary": "Resumo",
  "resSecWork": "Experiência de trabalho",
  "resSecVol": "Experiência voluntária e comunitária",
  "resSecSkills": "Habilidades",
  "resSecEdu": "Educação",
  "resSecCerts": "Certificações",
  "resSecLangs": "Idiomas",
  "trk_pharmacy": "Técnico de farmácia",
  "trk_ccma": "CCMA (Assistente médico)",
  "trk_sterile": "Processamento estéril",
  "trk_hvac": "HVAC (Clima e aquecimento)",
  "trk_electrical": "Eletricidade",
  "trk_cdl": "CDL (Dirigir caminhões)",
  "trk_cda": "CDA (Desenvolvimento infantil)",
  "trk_entrepreneur": "Empreendedorismo",
  "trk_other": "Outro emprego",
  "trk_notsure": "Ainda não sei",
  "trk_general": "Geral",
  "intTitle": "Entre pronto",
  "intIntro": "Pratique perguntas reais de entrevista antes do grande dia. Escolha seu treinamento, leia cada pergunta e escreva o que você diria. Suas respostas ficam neste telefone.",
  "intEnNote": "Por enquanto, as perguntas e as dicas estão em inglês e espanhol. O resto do aplicativo fala o seu idioma.",
  "intPick": "Escolha seu treinamento",
  "intTip": "O que eles querem ouvir:",
  "intAnswered": "Você respondeu {a} de {b}",
  "intErr": "Escreva primeiro uma resposta curta para cada pergunta. Uma linha honesta já conta.",
  "intFinish": "Terminar a prática",
  "intDoneTitle": "Você fez o trabalho. Agora entre pronto.",
  "intDoneBody": "Você praticou cada pergunta. Leia suas respostas mais uma vez antes da entrevista e leve seu currículo com você.",
  "decTitle": "Treinamento de Carreira: inscreva se até 1 de dezembro",
  "decClosed": "As inscrições para a primavera de 2027 já fecharam. Pergunte ao Pastor sobre a próxima rodada.",
  "decFacts": "O Treinamento de Carreira é para maiores de 18 anos. As aulas começam em 1 de fevereiro de 2027.",
  "decDays": "Faltam {n} dias para se inscrever",
  "decDay1": "Falta 1 dia para se inscrever",
  "decToday": "Hoje é o último dia para se inscrever",
  "decReadyH": "Tenha isto pronto",
  "decItem1": "Seu diploma ou HSE, ou comece agora as aulas gratuitas de HSE",
  "decItem2": "Um documento de identidade de Indiana",
  "decItem3": "Seu cartão do Seguro Social",
  "decItem4": "Sua autorização de trabalho",
  "decItem5": "Um número de telefone e um e-mail que a Wayne possa usar",
  "decApplyBtn": "Inscreva se em adulted.info/career",
  "decTellH": "Já se inscreveu?",
  "decTellBody": "Conte ao Pastor. Ele envia o nome de cada candidato para a Wayne para a entrevista, para que seu nome chegue à mesa certa.",
  "decErr": "Adicione seu nome e um número de telefone onde o Pastor possa falar com você, dez dígitos ou mais.",
  "decTellBtn": "Já me inscrevi, avise o Pastor",
  "decSent": "Recebido. O Pastor tem o seu nome e o enviará para a Wayne para a sua entrevista.",
  "stepsTitle": "Meus próximos passos",
  "stepsIntro": "Sua escada, um passo de cada vez. Marque cada passo quando terminar.",
  "stepsPrivacy": "Esta lista vive apenas no seu telefone. Nada sai deste aparelho.",
  "step1": "Meu diploma ou HSE",
  "step2": "Inscrevi me no Treinamento de Carreira",
  "step3": "Comecei meu treinamento",
  "step4": "Criei meu currículo",
  "step5": "Pronto para minha entrevista",
  "step6": "Consegui o emprego",
  "stepsCount": "{a} de {b} passos prontos",
  "cheerStart": "Todo fim começou com um passo. Dê o primeiro hoje.",
  "cheerGoing": "Você está andando. Um passo de cada vez é como as pessoas terminam.",
  "cheerHalf": "Olhe essa subida. Continue, você está mais perto do que pensa.",
  "cheerAlmost": "Quase lá. Mais um empurrão e esta escada é sua.",
  "cheerDone": "Você subiu a escada inteira. Estamos orgulhosos de você. Conte ao Pastor para celebrarmos com você.",
  "helpTitle": "Ajuda perto de você",
  "helpIntro": "Portas de verdade, perto de casa. Ligue antes quando puder, para saber o que levar.",
  "helpCall": "Ligar",
  "helpMore": "Mais portas da lista de recursos da Wayne serão adicionadas aqui quando a equipe a compartilhar.",
  "hNote211": "Linha gratuita de ajuda da comunidade. Comida, moradia, serviços básicos e mais.",
  "hNoteWayne": "O escritório de Educação de Adultos da Wayne na Ben Davis University. Aulas, Treinamento de Carreira e o centro do Pastor.",
  "hNoteTrustee": "O administrador do distrito ajuda os vizinhos com necessidades essenciais como aluguel, serviços e comida.",
  "hNoteExcel": "Educação gratuita para adultos, com orientadores que ajudam com escola, trabalho e próximos passos.",
  "hNoteGleaners": "Ajuda com alimentos para famílias em toda Indianápolis.",
  "studyTitle": "Companheiro de estudos",
  "studyIntro": "Um conjunto curto de prática para hoje. Oito perguntas, sem notas, sem pressão. Perguntas novas todos os dias.",
  "studyMath": "Matemática",
  "studyReading": "Leitura",
  "studyScience": "Ciências",
  "studySocial": "Estudos sociais",
  "studyRight": "Certo.",
  "studyWrong": "Não bem assim.",
  "studyScore": "Você acertou {a} de {b}. Volte amanhã para um conjunto novo.",
  "studyVocabH": "Palavras para o seu ofício",
  "studyVocabHelp": "Escolha seu treinamento e toque no cartão para ver o que a palavra significa.",
  "studyTap": "Toque para virar",
  "studyPrev": "Voltar",
  "studyNext": "Próxima palavra",
  "flashCount": "Palavra {a} de {b}",
  "reportTitle": "Relatório Wayne",
  "reportNote": "Um resumo só de contagens para a equipe da Wayne. Sem nomes, sem números, sem textos de mensagens.",
  "reportBtn": "Criar o relatório Wayne",
  "reportCopy": "Copiar relatório",
  "reportCopied": "Relatório copiado."
},
ar: {
  tagline: "راعيك وناسك على بُعد لمسة واحدة — حتى تُكمل ما بدأته.",
  chooseLang: "اختر لغتك",
  talk: "تحدث إلى الراعي",
  talkSub: "شارك ما تحمله في قلبك. استمع إلى صلاة بصوت الراعي، وسيتابع معك بنفسه.",
  dq: "لا تستسلم",
  dqSub: "هل هناك ما يكاد يوقفك عن الإكمال؟ أخبرنا ما هو، وسنساعدك على مواجهته.",
  forStaff: "للموظفين",
  staffOn: "بوابة الموظفين — سيتم تمييز طلبك كطلب موظف.",
  dailyWord: "كلمة اليوم",
  offeredBy: "تقدّمه Touch My Soul Ministry لطلاب وموظفي Wayne Township Adult Education.",
  serviceLine: "Touch My Soul Ministry · الأحد 11:30 صباحًا · Whisper Theater، فندق Garnet Waterfront",
  crisisFooter: "في أزمة؟ اتصل أو أرسل رسالة إلى 988 — مجانًا، ليلًا ونهارًا (أمريكا).",
  careLink: "فريق الرعاية",
  privacyLink: "خصوصيتك",
  privacyTitle: "خصوصيتك",
  privacyH1: "ما الذي نجمعه",
  privacyP1: "فقط ما تكتبه عندما تطلب المساعدة: اسمك إن قدمته، ورقم هاتفك، ورسالتك. تصفح الصلاة وكلمة اليوم لا يجمع أي شيء عنك.",
  privacyH2: "من يراه",
  privacyP2: "القس وفريق الرعاية التابع له في Touch My Soul Ministry — ولا أحد غيرهم. لا يمكن فتح صندوق الوارد إلا بحساب الكنيسة. تتلقى مدرستك أعدادًا فقط — كم طلبًا من كل نوع — ولا تتلقى أبدًا اسمك أو رقمك أو كلماتك.",
  privacyH3: "ما لا نفعله أبدًا",
  privacyP3: "لا نبيع معلوماتك أبدًا ولا نشاركها مع المعلنين. التنبيه الذي يرن على هاتف القس لا يحمل اسمًا ولا رقمًا ولا أيًا من كلماتك — فقط نوع الطلب. ما تشاركه لا يؤثر على دروسك أو درجاتك أو وضعك في المدرسة.",
  privacyH4: "كم من الوقت نحتفظ به",
  privacyP4: "حتى يتم الرد على طلبك ومتابعته. بعد ذلك تتم إزالته من صندوق الوارد النشط. لطلب إزالته في وقت أقرب، راسل القس على الرقم 317-956-4120.",
  privacyH5: "كيف نعد الزيارات",
  privacyP5: "نعد الزيارات دون أسماء حتى نتمكن من الإبلاغ عن عدد الأشخاص الذين يصلهم التطبيق — أعداد الزيارات والنقرات فقط. لا نخزن أبدًا من زار، أو أين أنت، أو ما قرأته أو كتبته.",
  back: "رجوع",
  carrying: "ما الذي تحمله في قلبك؟",
  carryingPh: "اكتبه بكلماتك. جملة واحدة صادقة تكفي.",
  nameOpt: "اسمك (اختياري)",
  phoneOpt: "الهاتف",
  reachNote: "صلاتك دائمًا مجانية — لا تحتاج إلى رقم لتصلّي. لكن إذا أردت أن يردّ عليك الراعي، اترك رقم هاتفك: لا يستطيع الرد إلا إذا تركته. الراعي يقرأ كل طلب بنفسه ويرد شخصيًا خلال يوم عمل واحد.",
  prayBtn: "صلِّ معي",
  needErr: "من فضلك اكتب بضع كلمات عما تحمله، حتى نصلّي معك.",
  phoneErr: "من فضلك أضف رقم هاتفك — لا يستطيع الراعي الرد إلا إذا تركت رقمًا يمكنه الوصول إليك به.",
  sendNote: "هل تريد أن يتواصل معك الراعي بنفسه؟ أضف رقم هاتفك واضغط إرسال — لا يستطيع الرد إلا إذا تركت رقمًا. صلاتك في الأعلى لك في كل الأحوال.",
  sendBtn: "أرسل إلى الراعي",
  prayerFor: "صلاة من أجلك",
  hearVoice: "🔊 استمع إليها بصوت الراعي",
  voiceWait: "جارٍ تحميل صوت الراعي…",
  voiceFail: "تعذّر تحميل صوت الراعي الآن. صلاتك في الأعلى — اقرأها ببطء، وبصوت مرتفع إن استطعت.",
  savedCounsel: "تم حفظ طلبك. سيتواصل معك الراعي بنفسه.",
  crisisTitle: "حياتك مهمة. اطلب المساعدة الآن.",
  crisisBody: "إذا كنت قد تتصرف بناءً على هذه الأفكار، من فضلك اتصل أو أرسل رسالة إلى 988 الآن — مجانًا وبسرية، ليلًا ونهارًا. مستشارون مدرَّبون في أمريكا سيستمعون إليك ويساعدونك. تم حفظ طلبك أيضًا، وسيتابع الراعي معك.",
  crisisCall: "📞 اتصل بـ 988",
  crisisText: "💬 أرسل رسالة إلى 988",
  dqQ: "ما الذي يكاد يوقفك؟",
  dqPick: "اضغط الخيار الأقرب إليك. لا توجد إجابة خاطئة.",
  b_childcare: "رعاية الأطفال", b_ride: "المواصلات", b_money: "المال", b_work: "جدول عملي",
  b_family: "العائلة", b_behind: "تأخرت في الدراسة", b_talk: "أحتاج فقط أن أتحدث",
  r_childcare: "رعاية طفل ليست أبدًا سببًا للخجل — بل هي سبب لطلب المساعدة لحمل كل شيء.",
  n_childcare: "أخبر الفريق بمواعيد حصصك في الأسفل. سنصلّي معك ونعمل معًا على خطة لرعاية الأطفال.",
  r_ride: "مشكلة في المواصلات يجب ألا تنهي حلم الشهادة أبدًا. لقد وصلت إلى هنا — دعنا نساعدك في بقية الطريق.",
  n_ride: "أخبرنا من أين تأتي. سيعمل فريقنا معك على خطة للمواصلات.",
  r_money: "ضغط المال حقيقي وصوته عالٍ. لكن خط النهاية هذا يستحق أكثر من هذا الشهر الصعب.",
  n_money: "أخبر الفريق بما يضغط عليك أكثر. سنصلّي ونبحث عن خيارات معًا، خطوة بخطوة.",
  r_work: "العمل والدراسة معًا حمل ثقيل. وكونك تقوم بالأمرين معًا يقول الكثير عنك.",
  n_work: "أخبرنا بجدولك الجديد. سنساعدك على التفكير في خياراتك حتى يقف العمل والدراسة معًا.",
  r_family: "عواصف العائلة تضرب الطلاب بشدة. لست مضطرًا لحمل البيت والدراسة وحدك.",
  n_family: "أخبرنا بما يحدث في البيت، فقط ما ترتاح لمشاركته. الراعي والفريق سيسيرون معك.",
  r_behind: "التأخر ليس فشلًا. معظم من أكملوا شعروا بالتأخر في وقت ما — لكنهم لم يتوقفوا هناك.",
  n_behind: "أخبرنا بالمادة أو الحصة. سنساعدك على وضع خطة بسيطة للحاق بالركب.",
  r_talk: "أحيانًا تكون أشجع خطوة أن تقول: «أحتاج فقط أن أتحدث». وقد خطوتها للتو.",
  n_talk: "شارك اسمك وهاتفك حتى نتمكن من الوصول إليك. سيتواصل معك الراعي أو أحد أعضاء الفريق للاستماع — دون حكم.",
  sosReach: "رقم هاتفك مطلوب هنا — إنه الطريقة الوحيدة التي يستطيع بها الفريق الرد عليك. سيتواصل معك أحدنا في أقرب وقت ممكن.",
  sosSend: "أرسل — أحتاج إلى مساعدة",
  sosConfirmTitle: "وصلنا طلبك. لا تستسلم.",
  sosConfirmBody: "رسالتك الآن مع فريق رعاية الراعي. سيتواصل معك أحدنا. وحتى ذلك الحين، احفظ هذا في قلبك:",
  againBtn: "العودة إلى البداية",
  carePinTitle: "فريق الرعاية",
  carePinPrompt: "أدخل الرقم السري لفريق الرعاية.",
  careWrong: "الرقم غير صحيح. حاول مرة أخرى.",
  careEnter: "دخول",
  careDemo: "ملاحظة تجريبية: كل شيء محفوظ على هذا الجهاز فقط. في النسخة الحقيقية، تصل الطلبات إلى هاتف الراعي فورًا.",
  queueTitle: "الطلبات على هذا الجهاز",
  queueEmpty: "لا توجد طلبات على هذا الجهاز بعد.",
  exportBtn: "تصدير (JSON)",
  presentationTitle: "أدوات العرض",
  presentationNote: "للعرض التوضيحي: حمّل طلبات نموذجية نظيفة، أو امسح هذا الجهاز قبل التقديم.",
  sampleBtn: "تحميل نماذج العرض",
  clearBtn: "مسح بيانات العرض",
  sampleConfirm: "استبدال ما على هذا الجهاز بنماذج عرض نظيفة؟",
  clearConfirm: "مسح كل طلبات وعدادات العرض من هذا الجهاز؟",
  liveQueueTitle: "الطلبات في البريد المباشر",
  liveNote: "البريد المباشر: طلبات حقيقية أُرسلت إلى الخدمة. حساب الرعاية فقط يمكنه رؤية الأسماء والاحتياجات.",
  careLoginTitle: "دخول فريق الرعاية",
  careLoginBody: "نرسل رابط دخول لمرة واحدة إلى بريد الخدمة. هذا البريد فقط يمكنه فتح هذه الصفحة.",
  careSendLink: "أرسل رابط الدخول",
  careLinkSent: "تم إرسال الرابط. افتحه من بريد الخدمة على هذا الجهاز.",
  careLogout: "تسجيل الخروج",
  careRefresh: "تحديث",
  careLoadErr: "تعذر تحميل الطلبات. تحقق من الاتصال ثم اضغط تحديث.",
  cPrayers: "صلوات مُعدّة", cCounsel: "طلبات إلى الراعي", cSos: "تنبيهات «لا تستسلم»",
  cStaff: "طلبات الموظفين", cCrisis: "تنبيهات أزمة",
  markDone: "تم — إغلاق", doneTag: "تم", staffTag: "موظف", crisisTag: "أزمة — أولًا",
  typeCounsel: "تحدث إلى الراعي", typeSos: "لا تستسلم", barrierLabel: "العائق", needLabel: "الطلب",
  "growTitle": "تقدم",
  "growSub": "أدوات لخطوتك التالية: عمل، ومقابلة، وشهادة.",
  "doorResume": "اصنع سيرتي الذاتية",
  "doorInterview": "استعد للمقابلة",
  "doorDec1": "دليل 1 ديسمبر",
  "doorSteps": "خطواتي التالية",
  "doorHelp": "مساعدة قريبة منك",
  "doorStudy": "رفيق الدراسة",
  "resIntro": "أجب عن بعض الأسئلة. يبني التطبيق سيرة ذاتية نظيفة ومحترفة من كلماتك أنت. يستخدم فقط ما تكتبه. ولا يخترع شيئا أبدا.",
  "resPrivacy": "تبقى سيرتك الذاتية على هاتفك ما لم ترسلها إلى القس. وهي لا تذهب إلى المدرسة أبدا.",
  "resAboutYou": "عنك",
  "resName": "الاسم الكامل",
  "resCity": "المدينة",
  "resEmail": "البريد الإلكتروني (اختياري)",
  "resTarget": "العمل أو التدريب الذي تريده",
  "resSummaryH": "قصتك باختصار",
  "resSummaryHelp": "أجب عن أي واحدة من هذه الثلاث. يحول التطبيق إجاباتك إلى ملخص قصير.",
  "resSum1": "ما نوع العمل الذي تريده؟",
  "resSum2": "ما الذي تجيده؟",
  "resSum3": "ما الذي يجب أن يعرفه صاحب العمل عنك؟",
  "resJobsH": "تاريخ العمل",
  "resJobsHelp": "أضف حتى ثلاث وظائف. اترك الوظيفة فارغة إن لم تحتجها.",
  "resJobN": "وظيفة {n}",
  "resJobTitle": "المسمى الوظيفي",
  "resEmployer": "صاحب العمل",
  "resJobCity": "المدينة",
  "resStart": "البداية (الشهر والسنة)",
  "resEnd": "النهاية (الشهر والسنة)",
  "resCurrent": "أعمل هنا الآن",
  "resDuties": "ماذا كنت تفعل هناك؟",
  "resVolH": "العمل التطوعي والمجتمعي",
  "resVol": "الكنيسة والمدرسة ورعاية الأسرة والعمل في المجتمع كلها خبرة حقيقية. أخبرنا بما فعلته.",
  "resSkillsH": "المهارات",
  "resSkillsHelp": "المس المهارات التي لديك. ويمكنك إضافة مهاراتك في الأسفل.",
  "resSkillsFree": "مهاراتك، مفصولة بفواصل",
  "resEduH": "التعليم وأكثر",
  "resSchool": "اسم المدرسة",
  "resDiploma": "حالة الشهادة أو HSE",
  "resDipNone": "اختر واحدا",
  "resDipDone": "حصلت على الشهادة أو HSE",
  "resDipWorking": "أعمل على HSE الآن",
  "resDipSome": "جزء من المدرسة الثانوية",
  "resDipCollege": "بعض الدراسة الجامعية أو شهادة جامعية",
  "resCerts": "الشهادات المهنية، مفصولة بفواصل",
  "resLangs": "اللغات التي تتكلمها، مفصولة بفواصل",
  "resErr": "أضف اسمك على الأقل، حتى تحمل السيرة اسما.",
  "resBuild": "اصنع سيرتي الذاتية",
  "resPrint": "اطبع أو احفظ بصيغة PDF",
  "resCopy": "انسخ النص",
  "resCopied": "تم نسخ نص السيرة.",
  "resSend": "أرسل إلى القس للمراجعة",
  "resSendErr": "لإرسال سيرتك إلى القس، يحتاج النموذج إلى اسمك ورقم هاتف يصله، عشرة أرقام أو أكثر.",
  "resSent": "سيرتك في طريقها إلى القس. سيتواصل معك بنفسه.",
  "resEdit": "تابع التعديل",
  "resClear": "امسح بيانات سيرتي",
  "resClearConfirm": "مسح السيرة المحفوظة على هذا الهاتف؟",
  "resSecSummary": "الملخص",
  "resSecWork": "خبرة العمل",
  "resSecVol": "الخبرة التطوعية والمجتمعية",
  "resSecSkills": "المهارات",
  "resSecEdu": "التعليم",
  "resSecCerts": "الشهادات المهنية",
  "resSecLangs": "اللغات",
  "trk_pharmacy": "فني صيدلة",
  "trk_ccma": "CCMA (مساعد طبي)",
  "trk_sterile": "التعقيم الطبي",
  "trk_hvac": "HVAC (التدفئة والتبريد)",
  "trk_electrical": "الكهرباء",
  "trk_cdl": "CDL (قيادة الشاحنات)",
  "trk_cda": "CDA (تنمية الطفل)",
  "trk_entrepreneur": "ريادة الأعمال",
  "trk_other": "عمل آخر",
  "trk_notsure": "لست متأكدا بعد",
  "trk_general": "عام",
  "intTitle": "ادخل مستعدا",
  "intIntro": "تدرب على أسئلة مقابلة حقيقية قبل اليوم الكبير. اختر تدريبك، واقرأ كل سؤال، واكتب ما ستقوله. تبقى إجاباتك على هذا الهاتف.",
  "intEnNote": "في الوقت الحالي، الأسئلة والنصائح بالإنجليزية والإسبانية. وبقية التطبيق يتكلم لغتك.",
  "intPick": "اختر تدريبك",
  "intTip": "ما يريدون سماعه:",
  "intAnswered": "أجبت عن {a} من {b}",
  "intErr": "اكتب أولا إجابة قصيرة لكل سؤال. سطر واحد صادق يكفي.",
  "intFinish": "أنه التدرب",
  "intDoneTitle": "لقد قمت بالعمل. الآن ادخل مستعدا.",
  "intDoneBody": "تدربت على كل سؤال. اقرأ إجاباتك مرة أخرى قبل المقابلة، واحمل سيرتك معك.",
  "decTitle": "التدريب المهني: قدم قبل 1 ديسمبر",
  "decClosed": "أغلق التقديم لربيع 2027. اسأل القس عن الجولة التالية.",
  "decFacts": "التدريب المهني لمن هم في سن 18 فأكثر. تبدأ الفصول في 1 فبراير 2027.",
  "decDays": "تبقى {n} يوما للتقديم",
  "decDay1": "تبقى يوم واحد للتقديم",
  "decToday": "اليوم هو آخر يوم للتقديم",
  "decReadyH": "جهز هذه الأشياء",
  "decItem1": "شهادتك أو HSE، أو ابدأ فصول HSE المجانية الآن",
  "decItem2": "بطاقة هوية من إنديانا",
  "decItem3": "بطاقة الضمان الاجتماعي",
  "decItem4": "تصريح العمل الخاص بك",
  "decItem5": "رقم هاتف وبريد إلكتروني يمكن لواين الوصول إليك بهما",
  "decApplyBtn": "قدم في adulted.info/career",
  "decTellH": "هل قدمت بالفعل؟",
  "decTellBody": "أخبر القس. يرسل اسم كل متقدم إلى واين من أجل مقابلته، لكي يصل اسمك إلى المكتب الصحيح.",
  "decErr": "أضف اسمك ورقم هاتف يمكن للقس الوصول إليك به، عشرة أرقام أو أكثر.",
  "decTellBtn": "لقد قدمت، أخبر القس",
  "decSent": "وصلنا. القس لديه اسمك وسيرسله إلى واين من أجل مقابلتك.",
  "stepsTitle": "خطواتي التالية",
  "stepsIntro": "سلمك، خطوة بخطوة. ضع علامة على كل خطوة عند إنهائها.",
  "stepsPrivacy": "تعيش هذه القائمة على هاتفك فقط. لا يغادر شيء هذا الجهاز.",
  "step1": "شهادتي أو HSE",
  "step2": "قدمت للتدريب المهني",
  "step3": "بدأت تدريبي",
  "step4": "بنيت سيرتي الذاتية",
  "step5": "مستعد لمقابلتي",
  "step6": "حصلت على العمل",
  "stepsCount": "أنجزت {a} من {b} خطوات",
  "cheerStart": "كل نهاية بدأت بخطوة واحدة. خذ الأولى اليوم.",
  "cheerGoing": "أنت تتحرك. خطوة بخطوة، هكذا ينهي الناس.",
  "cheerHalf": "انظر إلى صعودك. تابع، أنت أقرب مما تظن.",
  "cheerAlmost": "اقتربت جدا. دفعة واحدة أخرى وهذا السلم لك.",
  "cheerDone": "صعدت السلم كله. نحن فخورون بك. أخبر القس حتى نحتفل معك.",
  "helpTitle": "مساعدة قريبة منك",
  "helpIntro": "أبواب حقيقية، قريبة من البيت. اتصل أولا عندما تستطيع، لتعرف ما تحضره.",
  "helpCall": "اتصل",
  "helpMore": "ستضاف هنا أبواب أخرى من قائمة موارد واين عندما يشاركها الفريق.",
  "hNote211": "خط مساعدة مجتمعي مجاني. طعام وسكن وخدمات أساسية وأكثر.",
  "hNoteWayne": "مكتب تعليم الكبار في واين في جامعة بن ديفيس. فصول، وتدريب مهني، ومركز القس.",
  "hNoteTrustee": "يساعد مسؤول البلدة الجيران في الأساسيات مثل الإيجار والخدمات والطعام.",
  "hNoteExcel": "تعليم مجاني للكبار مع مرشدين يساعدون في المدرسة والعمل والخطوات التالية.",
  "hNoteGleaners": "مساعدة غذائية للعائلات في كل إنديانابوليس.",
  "studyTitle": "رفيق الدراسة",
  "studyIntro": "مجموعة تدريب قصيرة لليوم. ثمانية أسئلة، بلا درجات، بلا ضغط. أسئلة جديدة كل يوم.",
  "studyMath": "الرياضيات",
  "studyReading": "القراءة",
  "studyScience": "العلوم",
  "studySocial": "الدراسات الاجتماعية",
  "studyRight": "إجابة صحيحة.",
  "studyWrong": "ليست صحيحة تماما.",
  "studyScore": "أصبت {a} من {b}. عد غدا لمجموعة جديدة.",
  "studyVocabH": "كلمات لمهنتك",
  "studyVocabHelp": "اختر تدريبك، ثم المس البطاقة لترى معنى الكلمة.",
  "studyTap": "المس للقلب",
  "studyPrev": "السابق",
  "studyNext": "الكلمة التالية",
  "flashCount": "كلمة {a} من {b}",
  "reportTitle": "تقرير واين",
  "reportNote": "ملخص بالأعداد فقط لفريق واين. بلا أسماء، بلا أرقام هواتف، بلا نصوص رسائل.",
  "reportBtn": "اصنع تقرير واين",
  "reportCopy": "انسخ التقرير",
  "reportCopied": "تم نسخ التقرير."
}
};

/* ---------------- Daily verses ----------------
   Short public-domain excerpts only. EN = King James Version.
   ES = Reina-Valera (public-domain wording). FR = Louis Segond tradition.
   PT = Almeida (public-domain wording). HT = Bib La tradition.
   AR = Van Dyke Arabic Bible. Each language rotates through its own
   pool; pools are shorter where fewer excerpts are included on purpose. */
const VERSES = {
en: [
  { t: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", r: "Isaiah 40:31 · KJV" },
  { t: "I can do all things through Christ which strengtheneth me.", r: "Philippians 4:13 · KJV" },
  { t: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", r: "Joshua 1:9 · KJV" },
  { t: "God is our refuge and strength, a very present help in trouble.", r: "Psalm 46:1 · KJV" },
  { t: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", r: "2 Timothy 1:7 · KJV" },
  { t: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", r: "Galatians 6:9 · KJV" },
  { t: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.", r: "Isaiah 41:10 · KJV" },
  { t: "His compassions fail not. They are new every morning: great is thy faithfulness.", r: "Lamentations 3:22–23 · KJV" },
  { t: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", r: "Proverbs 3:5 · KJV" },
  { t: "For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.", r: "Hebrews 10:36 · KJV" },
  { t: "For the joy of the LORD is your strength.", r: "Nehemiah 8:10 · KJV" },
  { t: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", r: "Psalm 34:18 · KJV" },
  { t: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", r: "Matthew 11:28 · KJV" },
  { t: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.", r: "Philippians 1:6 · KJV" }
],
es: [
  { t: "Mas los que esperan á Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", r: "Isaías 40:31 · RVR" },
  { t: "Todo lo puedo en Cristo que me fortalece.", r: "Filipenses 4:13 · RVR" },
  { t: "Mira que te mando que te esfuerces y seas valiente: no temas ni desmayes, porque Jehová tu Dios será contigo en dondequiera que fueres.", r: "Josué 1:9 · RVR" },
  { t: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", r: "Salmos 46:1 · RVR" },
  { t: "Porque no nos ha dado Dios el espíritu de temor, sino el de fortaleza, y de amor, y de templanza.", r: "2 Timoteo 1:7 · RVR" },
  { t: "No nos cansemos, pues, de hacer bien; que á su tiempo segaremos, si no hubiéremos desmayado.", r: "Gálatas 6:9 · RVR" },
  { t: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo: siempre te ayudaré.", r: "Isaías 41:10 · RVR" },
  { t: "Venid á mí todos los que estáis trabajados y cargados, que yo os haré descansar.", r: "Mateo 11:28 · RVR" }
],
fr: [
  { t: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; ils courent, et ne se lassent point; ils marchent, et ne se fatiguent point.", r: "Ésaïe 40:31 · Segond" },
  { t: "Je puis tout par celui qui me fortifie.", r: "Philippiens 4:13 · Segond" },
  { t: "Fortifie-toi et prends courage; ne t'effraie point, car l'Éternel, ton Dieu, est avec toi partout où tu iras.", r: "Josué 1:9 · Segond" },
  { t: "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.", r: "Psaume 46:1 · Segond" },
  { t: "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse.", r: "2 Timothée 1:7 · Segond" },
  { t: "Ne nous lassons pas de faire le bien; car nous moissonnerons au temps convenable, si nous ne nous relâchons pas.", r: "Galates 6:9 · Segond" },
  { t: "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours.", r: "Ésaïe 41:10 · Segond" }
],
pt: [
  { t: "Mas os que esperam no SENHOR renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.", r: "Isaías 40:31 · Almeida" },
  { t: "Posso todas as coisas naquele que me fortalece.", r: "Filipenses 4:13 · Almeida" },
  { t: "Esforça-te e tem bom ânimo; não pasmes, nem te espantes, porque o SENHOR, teu Deus, é contigo, por onde quer que andares.", r: "Josué 1:9 · Almeida" },
  { t: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", r: "Salmos 46:1 · Almeida" },
  { t: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.", r: "2 Timóteo 1:7 · Almeida" },
  { t: "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.", r: "Gálatas 6:9 · Almeida" },
  { t: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", r: "Mateus 11:28 · Almeida" }
],
ht: [
  { t: "Mwen gen fòs pou m fè tout bagay, grasa Kris la k ap ban m fòs.", r: "Filip 4:13 · Bib La" },
  { t: "Nou pa bezwen pè, mwen la avèk nou. Se mwen menm ki Bondye nou. M ap ban nou fòs, m ap ede nou.", r: "Izayi 41:10 · Bib La" },
  { t: "Vin jwenn mwen, nou tout ki bouke, ki anba chay lou. M ap ban nou repo.", r: "Matye 11:28 · Bib La" },
  { t: "Bondye, se abri nou, se fòs nou. Li toujou pare pou l ede nou lè nou nan traka.", r: "Sòm 46:1 · Bib La" }
],
ar: [
  { t: "وَأَمَّا مُنْتَظِرُو الرَّبِّ فَيُجَدِّدُونَ قُوَّةً. يَرْفَعُونَ أَجْنِحَةً كَالنُّسُورِ. يَرْكُضُونَ وَلاَ يَتْعَبُونَ. يَمْشُونَ وَلاَ يُعْيُونَ.", r: "إشعياء 40:31" },
  { t: "أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.", r: "فيلبي 4:13" },
  { t: "اَللهُ لَنَا مَلْجَأٌ وَقُوَّةٌ. عَوْنًا فِي الضِّيْقَاتِ وُجِدَ شَدِيدًا.", r: "مزمور 46:1" },
  { t: "تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ، وَأَنَا أُرِيحُكُمْ.", r: "متى 11:28" }
]
};

/* ---------------- Prayer composition ----------------
   Same approach as the ministry's Pray With Me Now page: written prayer
   templates matched to the words shared, with a fitting KJV scripture.
   NOTE: composed prayer text is ENGLISH — Pastor's voice speaks English —
   in every UI language. The frame around it is translated. */
const PASTOR_VOICE_URL = "https://bibleai.praykin.com/api/pray/speak";
const CLOSINGS = [
  "We leave this in Your hands tonight, trusting that You hear, You care, and You are already at work. In Jesus' name we pray. Amen.",
  "Thank You for never leaving us to carry this alone. We rest in Your promise tonight. In the mighty name of Jesus. Amen.",
  "Lord, we hand You what we cannot fix, and we receive the peace that only You can give. In Jesus' name. Amen."
];
const THEMES = [
  { id: "weary", keywords: ["tired", "exhausted", "give up", "giving up", "weary", "burned out", "burnout", "no strength", "can't go on", "can't do this", "quit", "worn out"],
    verse: { text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", ref: "Isaiah 40:31 · KJV" },
    prayer: "Father, we come to You worn down to almost nothing. You see how long {who} has been carrying this: {need}. Lord, we are not asking You to just explain it — we are asking You to renew strength the way Your Word promises. Breathe fresh wind into tired lungs. Where quitting looks like the only option, put one more reason to hold on in front of us. Remind this heart of every time You came through before. You didn't bring us this far to leave us here. Lift us, carry us, and set us back on our feet — we wait on You, and we will rise again." },
  { id: "fear", keywords: ["afraid", "scared", "fear", "terrified", "frightened", "danger", "unsafe", "threat", "worried", "anxious", "anxiety", "panic", "nervous"],
    verse: { text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", ref: "2 Timothy 1:7 · KJV" },
    prayer: "Mighty God, fear is knocking loud tonight, so we are answering the door with prayer. You know what {who} is up against: {need}. Your Word says fear is not from You — so we refuse to let it run this house. Give power where there is trembling, love where there is panic, and a sound mind where thoughts are spinning. Be a wall of fire around this life and a light in every dark corner of it. We don't know how this turns out, but we know who holds the outcome — and we choose trust over terror." },
  { id: "lonely", keywords: ["lonely", "alone", "forgotten", "nobody cares", "no one cares", "isolated", "abandoned", "invisible", "no friends"],
    verse: { text: "And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.", ref: "Deuteronomy 31:8 · KJV" },
    prayer: "Lord, You promised You would never leave us nor forsake us — and tonight {who} needs to feel that promise, not just know it. You see the loneliness: {need}. Father, come close. In the silence of this room, be louder than the emptiness. Remind this heart that being unseen by people is not the same as being unseen by You. Send the right people — one real friend, one real connection — in Your time. And until then, let Your presence be company enough: a Father at the table, a friend in the dark, a God who stays." },
  { id: "guidance", keywords: ["decision", "decide", "direction", "guidance", "should i", "confused", "choice", "path", "next step", "opportunity", "test", "exam", "class", "school", "study"],
    verse: { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", ref: "Proverbs 3:5–6 · KJV" },
    prayer: "Lord, we stand at a crossroads and we refuse to guess our way through it. You know the decision in front of {who}: {need}. Father, we trade our understanding for Your wisdom. Open the right door so clearly that there's no mistaking it, and close the wrong ones with mercy. Speak through Your Word, through wise counsel, and through the quiet conviction of Your Spirit. Give patience to wait when You say wait, and courage to move when You say move. We'd rather go slow with You than fast without You — direct these paths, Lord." },
  { id: "gratitude", keywords: ["thank", "grateful", "gratitude", "blessed", "praise", "thankful", "good news", "answered", "came through", "celebrate", "passed"],
    verse: { text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", ref: "1 Thessalonians 5:18 · KJV" },
    prayer: "Father, before we ask You for one more thing, we just want to say thank You. You have been good — better than we deserved — and {who} comes tonight with a grateful heart: {need}. Thank You for the doors You opened and the ones You closed to protect us. Thank You for carrying us through seasons we didn't think we'd survive. Thank You for family, for breath, for mercy that was new again this morning. Let this gratitude turn into a life that points back to You. We praise You not just for what You've done, but for who You are — and who You are never changes." },
  { id: "general", keywords: [],
    verse: { text: "God is our refuge and strength, a very present help in trouble.", ref: "Psalm 46:1 · KJV" },
    prayer: "Father God, we come to You just as we are, with hearts wide open. You already know every detail of what {who} is facing: {need}. Lord, You are our refuge — the place we run when life gets loud — and our strength when ours runs out. Meet us in this exact moment. Fight the battles we can't see. Heal what we can't reach. Provide what we can't produce. And give us the faith to trust You in the middle, before we ever see the end. You have never failed us yet, and we believe You won't start now." }
];

/* Crisis check runs BEFORE anything else is shown. English + Spanish lists. */
const CRISIS_WORDS = [
  "kill myself", "suicide", "suicidal", "end my life", "hurt myself", "harm myself",
  "no reason to live", "want to die", "end it all", "self harm", "self-harm",
  "quiero morir", "suicidio", "matarme", "quitarme la vida", "no quiero vivir",
  "hacerme daño", "acabar con mi vida"
];
function isCrisis(text) {
  const s = " " + (text || "").toLowerCase() + " ";
  return CRISIS_WORDS.some(w => s.includes(w));
}
function cleanNeed(raw) {
  let s = raw.replace(/\s+/g, " ").trim().replace(/[.!\s]+$/, "");
  if (s.length > 140) s = s.slice(0, 140).replace(/\s+\S*$/, "") + "…";
  if (s) s = s.charAt(0).toLowerCase() + s.slice(1);
  return s;
}
function pickTheme(need) {
  const text = " " + need.toLowerCase() + " ";
  let best = null, bestScore = 0;
  THEMES.forEach(t => {
    let score = 0;
    t.keywords.forEach(k => { if (text.includes(k)) score += k.length >= 6 ? 2 : 1; });
    if (score > bestScore) { bestScore = score; best = t; }
  });
  return best || THEMES[THEMES.length - 1];
}
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
function composePrayer(name, rawNeed) {
  const need = cleanNeed(rawNeed);
  const theme = pickTheme(need);
  const who = name ? name : "this heart";
  let body = theme.prayer.split("{who}").join(who).split("{need}").join(need);
  let prayer = body + "\n\n" + CLOSINGS[hashStr(need + name) % CLOSINGS.length];
  if (prayer.length > 1150) { // voice endpoint contract: keep under 1200 chars
    const cut = prayer.slice(0, 1150);
    prayer = cut.slice(0, Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(".\n")) + 1) + " In Jesus' name. Amen.";
  }
  return { prayer, verse: theme.verse };
}

/* ---------------- State & storage ---------------- */
const CARE_PIN = "4120"; // demo PIN — see README.md
const LS = { lang: "dq_lang", queue: "dq_queue", counters: "dq_counters" };
/* ---------------- Live backend (Supabase) ----------------
   Fill DQ_CONFIG once the Supabase project exists (see live/LIVE_SETUP.md).
   Empty config = local demo mode: everything stays on this device, the
   Care Team opens with the demo PIN, and presentation tools are shown.
   Live mode: the public (anon) key may only INSERT a request — Row Level
   Security in the database does the guarding. Reading the inbox requires
   the care account's emailed one-time login link. */
const DQ_CONFIG = { supabaseUrl: "https://vscgolqarfgqfpgljlkm.supabase.co", supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzY2dvbHFhcmZncWZwZ2xqbGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5MzY1MjAsImV4cCI6MjEwOTUxMjUyMH0.PpFmtgnCIFrIFPDotGoEUQzSg92nz0AKBt0ZfFfKvLQ", careEmail: "touchmysoulministry@gmail.com", pushUrl: "https://ntfy.sh/dq-tmsm-c8b58335b074df57" };
const LIVE = !!(DQ_CONFIG.supabaseUrl && DQ_CONFIG.supabaseAnonKey);
const LS_SESSION = "dq_session";
let remoteItems = null;

function sbHeaders(token) {
  return { "apikey": DQ_CONFIG.supabaseAnonKey,
           "Authorization": "Bearer " + (token || DQ_CONFIG.supabaseAnonKey),
           "Content-Type": "application/json" };
}
async function submitRemote(item) {
  const res = await fetch(DQ_CONFIG.supabaseUrl + "/rest/v1/requests", {
    method: "POST",
    headers: Object.assign(sbHeaders(), { "Prefer": "return=minimal" }),
    body: JSON.stringify({ type: item.type, barrier: item.barrier, need: item.need,
      name: item.name, phone: item.phone, language: item.language,
      staff: item.staff, crisis: item.crisis })
  });
  return res.ok;
}
async function deliver(item) {
  if (LIVE) {
    try { if (await submitRemote(item)) { await sendPushAlert(item); return; } } catch (e) { /* fall through: save on this device */ }
  }
  const q = loadQueue(); q.push(item); saveQueue(q);
}

// Content-free push alert to Pastor's phone (ntfy): kind and flags only. The
// student's name, words, and phone number NEVER travel in an alert; they stay
// in the secure inbox.
async function sendPushAlert(item) {
  if (!DQ_CONFIG.pushUrl) return;
  const kind = item.type === "sos" ? "SOS request" + (item.barrier ? " (" + item.barrier + ")" : "") : "Prayer / counseling request";
  try {
    await fetch(DQ_CONFIG.pushUrl, {
      method: "POST", keepalive: true,
      headers: {
        Title: (item.crisis ? "URGENT - Crisis flag - " : "") + "Don't Quit: new " + kind,
        Priority: item.crisis ? "urgent" : "high",
        Tags: item.type === "sos" ? "sos" : "pray"
      },
      body: "A new request just arrived in the Don't Quit inbox. Open Don't Quit, tap Care Team, and sign in to read it."
    });
  } catch { /* an alert must never block a student's request */ }
}
function getSession() {
  try { const s = JSON.parse(localStorage.getItem(LS_SESSION));
        if (s && s.access_token && s.exp > Date.now() / 1000) return s; } catch (e) {}
  return null;
}
function setSession(s) {
  if (s) localStorage.setItem(LS_SESSION, JSON.stringify(s));
  else localStorage.removeItem(LS_SESSION);
}
function captureSessionFromHash() {
  if (!location.hash || location.hash.indexOf("access_token") < 0) return;
  const params = new URLSearchParams(location.hash.slice(1));
  const tok = params.get("access_token");
  const expIn = parseInt(params.get("expires_in") || "3600", 10);
  if (tok) {
    setSession({ access_token: tok, exp: Math.floor(Date.now() / 1000) + expIn });
    history.replaceState(null, "", location.pathname + location.search);
  }
}

let lang = localStorage.getItem(LS.lang) || null;
let staffMode = sessionStorage.getItem("dq_staff") === "1";
let selectedBarrier = null;
let currentPrayer = null;

function loadQueue() { try { return JSON.parse(localStorage.getItem(LS.queue)) || []; } catch (e) { return []; } }
function saveQueue(q) { localStorage.setItem(LS.queue, JSON.stringify(q)); }
function loadCounters() {
  try { return JSON.parse(localStorage.getItem(LS.counters)) || { prayers: 0, counsel: 0, sos: 0, staff: 0, crisis: 0 }; }
  catch (e) { return { prayers: 0, counsel: 0, sos: 0, staff: 0, crisis: 0 }; }
}
function bump(key) { const c = loadCounters(); c[key] = (c[key] || 0) + 1; localStorage.setItem(LS.counters, JSON.stringify(c)); }
function saveCounters(c) { localStorage.setItem(LS.counters, JSON.stringify(c)); }
function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }

/* Anonymous visit counting (counts only): app + event name + page path +
   referrer HOST. Never names, numbers, typed words, locations, or content.
   The server stores no raw addresses — only a daily one-way visitor code. */
const DQ_TRACK_URL = "https://bibleai.praykin.com/api/track";
function dqTrack(event) {
  try {
    const payload = JSON.stringify({ app: "dontquit", event: event,
      path: window.location.pathname, ref: document.referrer || "" });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(DQ_TRACK_URL, new Blob([payload], { type: "application/json" }));
    } else {
      fetch(DQ_TRACK_URL, { method: "POST", headers: { "Content-Type": "application/json" },
        body: payload, keepalive: true }).catch(() => {});
    }
  } catch (e) { /* counting must never break the app */ }
}

/* ---------------- Screens & language ---------------- */
const SCREENS = ["lang", "home", "talk", "sos", "care", "privacy"];
function show(id) {
  SCREENS.forEach(s => { document.getElementById("screen-" + s).hidden = s !== id; });
  window.scrollTo({ top: 0 });
}
function applyLang() {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n-ph")];
    if (v) el.setAttribute("placeholder", v);
  });
  renderDaily();
  renderStaff();
}
function setLang(l) { lang = l; localStorage.setItem(LS.lang, l); applyLang(); show("home"); }
function dayOfYear() {
  const now = new Date();
  return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
}
function dailyVerse() {
  const pool = VERSES[lang] || VERSES.en;
  return pool[dayOfYear() % pool.length];
}
function renderDaily() {
  const el = document.getElementById("dailyText");
  if (!el || !lang) return;
  const v = dailyVerse();
  el.textContent = "“" + v.t + "”";
  document.getElementById("dailyRef").textContent = v.r;
}
function renderStaff() {
  document.getElementById("staffBanner").hidden = !staffMode;
  document.getElementById("staffToggle").classList.toggle("on", staffMode);
}

/* ---------------- Navigation ---------------- */
document.querySelectorAll(".lang-btn").forEach(b =>
  b.addEventListener("click", () => setLang(b.getAttribute("data-lang"))));
document.getElementById("globeBtn").addEventListener("click", () => show("lang"));
document.querySelectorAll("[data-back]").forEach(b =>
  b.addEventListener("click", () => show("home")));
document.getElementById("doorTalk").addEventListener("click", () => {
  document.getElementById("talkForm").reset(); // shared-device privacy: never carry inputs forward
  document.getElementById("needErr").hidden = true;
  document.getElementById("prayerResult").hidden = true;
  document.getElementById("crisisPanel").hidden = true;
  show("talk");
});
document.getElementById("doorDq").addEventListener("click", () => {
  document.getElementById("sosForm").reset();
  document.getElementById("sosConfirm").hidden = true;
  document.getElementById("sosForm").hidden = true;
  document.querySelectorAll(".barrier").forEach(x => x.classList.remove("selected"));
  selectedBarrier = null;
  show("sos");
});
document.getElementById("staffToggle").addEventListener("click", () => {
  staffMode = !staffMode;
  sessionStorage.setItem("dq_staff", staffMode ? "1" : "0");
  renderStaff();
});
document.getElementById("careLink").addEventListener("click", openCare);

/* ---------------- Talk to Pastor ---------------- */
let voiceAudio = null;
function speakFallback() {
  const note = document.getElementById("voiceNote");
  if ("speechSynthesis" in window && currentPrayer) {
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(currentPrayer.prayer);
      u.lang = "en-US"; u.rate = 0.97;
      window.speechSynthesis.speak(u);
      note.hidden = true;
      return;
    } catch (e) { /* fall through to the kind message */ }
  }
  note.textContent = t("voiceFail");
  note.hidden = false;
}
async function playPastorVoice(btn) {
  if (!currentPrayer) return;
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = t("voiceWait");
  try {
    const res = await fetch(PASTOR_VOICE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: currentPrayer.prayer })
    });
    if (!res.ok) throw new Error("voice " + res.status);
    const blob = await res.blob();
    if (!blob || blob.size < 200) throw new Error("empty audio");
    if (voiceAudio) { voiceAudio.pause(); URL.revokeObjectURL(voiceAudio.src); }
    voiceAudio = new Audio(URL.createObjectURL(blob));
    await voiceAudio.play();
    document.getElementById("voiceNote").hidden = true;
  } catch (e) {
    speakFallback();
  } finally {
    btn.disabled = false;
    btn.innerHTML = original;
  }
}
document.getElementById("voiceBtn").addEventListener("click", e => playPastorVoice(e.currentTarget));

/* A request to Pastor or the care team only travels with a phone number on
   it: without one, there is no way back to the person (the Nov 8 gap — a real
   request arrived with no number and could not be answered). Prayer itself is
   never gated: the prayer is composed and shown before any request is sent. */
function validPhone(v) { return String(v || "").replace(/\D/g, "").length >= 10; }
let pendingTalk = null;

document.getElementById("talkForm").addEventListener("submit", e => {
  e.preventDefault();
  const rawNeed = document.getElementById("needInput").value.trim();
  const err = document.getElementById("needErr");
  if (!rawNeed) { err.hidden = false; document.getElementById("needInput").focus(); return; }
  err.hidden = true;
  const name = document.getElementById("talkName").value.replace(/\s+/g, " ").trim().slice(0, 40);
  const phone = document.getElementById("talkPhone").value.replace(/\s+/g, " ").trim().slice(0, 30);
  const crisis = isCrisis(rawNeed);

  /* Crisis panel comes FIRST and stays above everything else. */
  document.getElementById("crisisPanel").hidden = !crisis;

  currentPrayer = composePrayer(name, rawNeed);
  bump("prayers");
  dqTrack("prayer_shown");
  document.getElementById("prayerText").textContent = currentPrayer.prayer;
  document.getElementById("prayerVerse").textContent = "“" + currentPrayer.verse.text + "”";
  document.getElementById("prayerRef").textContent = currentPrayer.verse.ref;
  document.getElementById("voiceNote").hidden = true;
  document.getElementById("prayerResult").hidden = false;

  const item = { id: Date.now(), type: "counseling", barrier: null, need: rawNeed, name, phone,
           language: lang, staff: staffMode, crisis, done: false, ts: new Date().toISOString() };
  /* Crisis requests always travel immediately, number or not — the crisis
     panel has already promised this person that their request was saved and
     Pastor will follow up, and Pastor must see it. Every other request
     travels only with a reachable phone number; until then the prayer above
     is theirs and the send block below it asks for the number. */
  if (crisis || validPhone(phone)) {
    deliver(item);
    bump("counsel");
    dqTrack("counseling_sent");
    if (staffMode) bump("staff");
    if (crisis) bump("crisis");
    pendingTalk = null;
    document.getElementById("sendBlock").hidden = true;
    document.getElementById("savedNote").hidden = false;
  } else {
    pendingTalk = item;
    document.getElementById("resultPhone").value = phone;
    document.getElementById("resultPhoneErr").hidden = true;
    document.getElementById("savedNote").hidden = true;
    document.getElementById("sendBlock").hidden = false;
  }
  document.getElementById("prayerResult").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("sendReqBtn").addEventListener("click", () => {
  if (!pendingTalk) return;
  const v = document.getElementById("resultPhone").value.replace(/\s+/g, " ").trim().slice(0, 30);
  const perr = document.getElementById("resultPhoneErr");
  if (!validPhone(v)) { perr.hidden = false; document.getElementById("resultPhone").focus(); return; }
  perr.hidden = true;
  pendingTalk.phone = v;
  deliver(pendingTalk);
  bump("counsel");
  dqTrack("counseling_sent");
  if (staffMode) bump("staff");
  pendingTalk = null;
  document.getElementById("sendBlock").hidden = true;
  document.getElementById("savedNote").hidden = false;
});

/* ---------------- Don't Quit (SOS) ---------------- */
document.querySelectorAll(".barrier").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".barrier").forEach(x => x.classList.remove("selected"));
  b.classList.add("selected");
  selectedBarrier = b.getAttribute("data-barrier");
  document.getElementById("sosResponse").textContent = t("r_" + selectedBarrier);
  document.getElementById("sosNext").textContent = t("n_" + selectedBarrier);
  const form = document.getElementById("sosForm");
  form.hidden = false;
  document.getElementById("sosConfirm").hidden = true;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}));
document.getElementById("sosForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!selectedBarrier) return;
  const name = document.getElementById("sosName").value.replace(/\s+/g, " ").trim().slice(0, 40);
  const phoneRaw = document.getElementById("sosPhone").value;
  const perr = document.getElementById("sosPhoneErr");
  if (!validPhone(phoneRaw)) { perr.hidden = false; document.getElementById("sosPhone").focus(); return; }
  perr.hidden = true;
  const phone = phoneRaw.replace(/\s+/g, " ").trim().slice(0, 30);
  const item = { id: Date.now(), type: "sos", barrier: selectedBarrier, need: "", name, phone,
           language: lang, staff: staffMode, crisis: false, done: false, ts: new Date().toISOString() };
  deliver(item);
  bump("sos");
  dqTrack("sos_sent");
  if (staffMode) bump("staff");
  const v = dailyVerse();
  document.getElementById("sosVerse").textContent = "“" + v.t + "”";
  document.getElementById("sosRef").textContent = v.r;
  document.getElementById("sosForm").hidden = true;
  document.getElementById("sosConfirm").hidden = false;
  document.getElementById("sosConfirm").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------------- Care view ---------------- */
document.getElementById("pinForm").addEventListener("submit", e => {
  e.preventDefault();
  const v = document.getElementById("pinInput").value.trim();
  if (v !== CARE_PIN) { document.getElementById("pinErr").hidden = false; return; }
  document.getElementById("pinErr").hidden = true;
  document.getElementById("pinForm").hidden = true;
  document.getElementById("careDash").hidden = false;
  renderCare();
});
function drawCare(q, c) {
  const rows = [
    [c.prayers, t("cPrayers")], [c.counsel, t("cCounsel")], [c.sos, t("cSos")],
    [c.staff, t("cStaff")], [c.crisis, t("cCrisis")]
  ];
  document.getElementById("counters").innerHTML = rows.map(r =>
    '<div class="counter"><strong>' + (r[0] || 0) + "</strong><span>" + r[1] + "</span></div>").join("");
  const list = document.getElementById("queueList");
  document.getElementById("queueEmpty").hidden = q.length > 0;
  list.innerHTML = "";
  q.forEach(item => {
    const div = document.createElement("div");
    div.className = "q-item" + (item.crisis ? " crisis" : "") + (item.done ? " done" : "");
    const when = new Date(item.ts).toLocaleString();
    let html = '<div class="q-head"><span class="q-type">' +
      (item.type === "sos" ? t("typeSos") : t("typeCounsel")) + "</span><span>" + when + "</span></div>";
    html += "<div>";
    if (item.crisis) html += '<span class="q-tag crisis">' + t("crisisTag") + "</span> ";
    if (item.staff) html += '<span class="q-tag staff">' + t("staffTag") + "</span> ";
    if (item.done) html += '<span class="q-tag done">' + t("doneTag") + "</span>";
    html += "</div>";
    if (item.type === "sos") {
      const bdict = I18N[item.language] || I18N.en;
      html += '<p class="q-need"><strong>' + t("barrierLabel") + ":</strong> " +
        (bdict["b_" + item.barrier] || item.barrier) + "</p>";
    } else {
      html += '<p class="q-need">' + escapeHtml(item.need) + "</p>";
    }
    if (item.name) html += '<p class="q-meta">' + escapeHtml(item.name) + "</p>";
    if (item.phone) html += '<p class="q-meta">📞 ' + escapeHtml(item.phone) + "</p>";
    html += '<p class="q-meta">' + (item.language || "en").toUpperCase() + "</p>";
    if (!item.done) html += '<button type="button" class="q-done-btn" data-done="' + item.id + '">' + t("markDone") + "</button>";
    div.innerHTML = html;
    list.appendChild(div);
  });
  list.querySelectorAll("[data-done]").forEach(btn => btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-done");
    if (LIVE) { await markDoneRemote(id); return; }
    const queue = loadQueue();
    const it = queue.find(x => String(x.id) === id);
    if (it) { it.done = true; saveQueue(queue); renderCare(); }
  }));
}
function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, ch =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
function sortQueue(q) {
  return q.slice().sort((a, b) =>
    (a.done - b.done) || ((b.crisis ? 1 : 0) - (a.crisis ? 1 : 0)) || (b.ts < a.ts ? -1 : 1));
}
function renderCare() {
  if (LIVE) { if (getSession()) renderRemote(); else openCare(); return; }
  drawCare(sortQueue(loadQueue()), loadCounters());
}
function computeCounters(items) {
  const c = { prayers: 0, counsel: 0, sos: 0, staff: 0, crisis: 0 };
  items.forEach(it => {
    if (it.type === "counseling") { c.prayers++; c.counsel++; }
    if (it.type === "sos") c.sos++;
    if (it.staff) c.staff++;
    if (it.crisis) c.crisis++;
  });
  return c;
}
async function renderRemote() {
  const s = getSession(); if (!s) { openCare(); return; }
  try {
    const res = await fetch(DQ_CONFIG.supabaseUrl +
      "/rest/v1/requests?select=*&order=created_at.desc&limit=200",
      { headers: sbHeaders(s.access_token) });
    if (res.status === 401) { setSession(null); openCare(); return; }
    if (!res.ok) throw new Error("load " + res.status);
    const rows = await res.json();
    remoteItems = rows.map(r => ({ id: r.id, type: r.type, barrier: r.barrier,
      need: r.need, name: r.name, phone: r.phone, language: r.language,
      staff: r.staff, crisis: r.crisis, done: r.done, ts: r.created_at }));
    drawCare(sortQueue(remoteItems), computeCounters(remoteItems));
  } catch (e) {
    document.getElementById("queueList").innerHTML =
      '<p class="form-err">' + escapeHtml(t("careLoadErr")) + "</p>";
  }
}
async function markDoneRemote(id) {
  const s = getSession(); if (!s) { openCare(); return; }
  try {
    const res = await fetch(DQ_CONFIG.supabaseUrl +
      "/rest/v1/requests?id=eq." + encodeURIComponent(id), {
        method: "PATCH",
        headers: Object.assign(sbHeaders(s.access_token), { "Prefer": "return=minimal" }),
        body: JSON.stringify({ done: true })
      });
    if (res.status === 401) { setSession(null); openCare(); return; }
  } catch (e) { /* leave the item as-is; Refresh shows the truth */ }
  renderRemote();
}
function openCare() {
  show("care");
  if (!LIVE) {
    document.getElementById("liveLogin").hidden = true;
    document.getElementById("careDash").hidden = true;
    document.getElementById("pinForm").hidden = false;
    return;
  }
  document.getElementById("pinForm").hidden = true;
  const s = getSession();
  document.getElementById("liveLogin").hidden = !!s;
  document.getElementById("careDash").hidden = !s;
  if (s) {
    document.getElementById("careDemoNote").hidden = true;
    document.getElementById("presTools").hidden = true;
    document.getElementById("liveNote").hidden = false;
    document.getElementById("liveActions").hidden = false;
    document.getElementById("queueTitle").textContent = t("liveQueueTitle");
    renderRemote();
  }
}
document.getElementById("sendLinkBtn").addEventListener("click", async () => {
  const note = document.getElementById("linkNote");
  try {
    const res = await fetch(DQ_CONFIG.supabaseUrl + "/auth/v1/otp?redirect_to=" +
      encodeURIComponent("https://splitseedent.github.io/dont-quit/"), {
      method: "POST", headers: sbHeaders(),
      body: JSON.stringify({ email: DQ_CONFIG.careEmail, create_user: false })
    });
    if (!res.ok) throw new Error("otp " + res.status);
    note.textContent = t("careLinkSent");
  } catch (e) {
    note.textContent = t("careLoadErr");
  }
  note.hidden = false;
});
document.getElementById("refreshBtn").addEventListener("click", () => renderRemote());
document.getElementById("logoutBtn").addEventListener("click", () => { setSession(null); openCare(); });
document.getElementById("sampleBtn").addEventListener("click", () => {
  if (!window.confirm(t("sampleConfirm"))) return;
  const baseTs = Date.now();
  const at = mins => new Date(baseTs - mins * 60000).toISOString();
  const samples = [
    { id: baseTs + 1, type: "counseling", barrier: null,
      need: "Sample crisis request: in the live flow, 988 appears first.",
      name: "Sample student", phone: "", language: "en", staff: false,
      crisis: true, done: false, ts: at(0) },
    { id: baseTs + 2, type: "sos", barrier: "ride", need: "",
      name: "Sample student", phone: "", language: "en", staff: false,
      crisis: false, done: false, ts: at(7) },
    { id: baseTs + 3, type: "counseling", barrier: null,
      need: "Sample request: I am tired and feel like giving up on school.",
      name: "Sample student", phone: "", language: "en", staff: false,
      crisis: false, done: false, ts: at(14) },
    { id: baseTs + 4, type: "sos", barrier: "talk", need: "",
      name: "Sample staff member", phone: "", language: "en", staff: true,
      crisis: false, done: false, ts: at(21) }
  ];
  saveQueue(samples);
  saveCounters({ prayers: 2, counsel: 2, sos: 2, staff: 1, crisis: 1 });
  renderCare();
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (!window.confirm(t("clearConfirm"))) return;
  localStorage.removeItem(LS.queue);
  localStorage.removeItem(LS.counters);
  renderCare();
});
document.getElementById("exportBtn").addEventListener("click", () => {
  const payload = (LIVE && remoteItems)
    ? { exportedAt: new Date().toISOString(), counters: computeCounters(remoteItems), queue: remoteItems }
    : { exportedAt: new Date().toISOString(), counters: loadCounters(), queue: loadQueue() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dont-quit-queue.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
});

document.getElementById("privacyLink").addEventListener("click", () => show("privacy"));

/* ---------------- Boot ---------------- */
captureSessionFromHash();
dqTrack("pageview");
if (lang && I18N[lang]) { applyLang(); show("home"); }
else { lang = "en"; show("lang"); }

/* =====================================================================
   DON'T QUIT v3: Grow features (LOCAL BUILD, not yet published)
   Resume, Interview Prep, December 1 Guide, My Next Steps,
   Help Near You, Study Buddy, Wayne Report.
   Rules held: resume content comes only from what the student typed;
   resume and steps data live only in this device's localStorage;
   submissions reuse deliver() and the existing tracker.
   ===================================================================== */

/* ---------------- Shared track + skills data ---------------- */
const DQ_TRACKS = ["pharmacy", "ccma", "sterile", "hvac", "electrical", "cdl", "cda", "entrepreneur"];
const DQ_SKILL_IDEAS = {
  pharmacy: ["Medication safety", "Counting and labeling prescriptions", "Customer service", "Cash register", "Inventory counts", "HIPAA privacy"],
  ccma: ["Taking vital signs", "Patient check in", "Medical records", "Phlebotomy basics", "EKG basics", "Appointment scheduling"],
  sterile: ["Sterilization equipment", "Instrument trays", "Safety checks", "Attention to detail", "Following procedures", "Team communication"],
  hvac: ["Hand and power tools", "Measuring and cutting", "Safety procedures", "Reading gauges", "Problem solving", "Customer service"],
  electrical: ["Hand and power tools", "Wire and conduit basics", "Safety procedures", "Reading diagrams", "Measuring", "Problem solving"],
  cdl: ["Safe driving", "Vehicle inspection", "Route planning", "Trip logs", "Backing and parking", "Customer delivery"],
  cda: ["Child supervision", "Lesson activities", "Patience and care", "Parent communication", "Classroom safety", "First aid basics"],
  entrepreneur: ["Customer service", "Sales", "Money handling", "Scheduling", "Social media basics", "Problem solving"],
  other: ["Reliability", "Teamwork", "Communication", "Cash handling", "Cleaning and sanitation", "Standing and lifting"],
  notsure: ["Reliability", "Teamwork", "Communication", "Cash handling", "Cleaning and sanitation", "Standing and lifting"],
  general: ["Reliability", "Teamwork", "Communication", "Cash handling", "Cleaning and sanitation", "Standing and lifting"]
};

/* ---------------- Interview question decks (EN + ES) ---------------- */
const INT_GENERAL = [
  { q: { en: "Tell me about yourself.", es: "Hábleme de usted." },
    tip: { en: "Keep it short and work focused: where you are now, what you are training for, and one strength. About thirty seconds is enough.",
           es: "Que sea corto y enfocado en el trabajo: dónde está ahora, para qué se está capacitando, y una fortaleza. Unos treinta segundos bastan." } },
  { q: { en: "Why do you want this job?", es: "¿Por qué quiere este empleo?" },
    tip: { en: "Name something real about this workplace and connect it to your training and your goals.",
           es: "Nombre algo real de este lugar de trabajo y conéctelo con su capacitación y sus metas." } },
  { q: { en: "What is one of your strengths?", es: "¿Cuál es una de sus fortalezas?" },
    tip: { en: "Pick a strength you can prove with a small story: a day you showed up, helped, or finished something hard.",
           es: "Elija una fortaleza que pueda probar con una historia pequeña: un día en que llegó, ayudó, o terminó algo difícil." } },
  { q: { en: "What is one weakness you are working on?", es: "¿Cuál es una debilidad en la que está trabajando?" },
    tip: { en: "Be honest and name the step you are taking. School, practice, and asking questions are strong steps.",
           es: "Sea honesto y nombre el paso que está dando. La escuela, la práctica y hacer preguntas son pasos fuertes." } },
  { q: { en: "How do you handle a hard day or a difficult person?", es: "¿Cómo maneja un día difícil o una persona difícil?" },
    tip: { en: "Stay calm, listen first, and solve the problem in front of you. Never blame the last job or a coworker.",
           es: "Mantenga la calma, escuche primero y resuelva el problema que tiene enfrente. Nunca culpe al empleo anterior ni a un compañero." } },
  { q: { en: "Where do you see yourself in two years?", es: "¿Dónde se ve en dos años?" },
    tip: { en: "Show you plan to stay and grow: finishing training, earning the certificate, and doing the work well.",
           es: "Muestre que planea quedarse y crecer: terminar la capacitación, lograr el certificado y hacer bien el trabajo." } }
];
const INT_GENERAL_EXTRA = [
  { q: { en: "Why should we hire you?", es: "¿Por qué deberíamos contratarle?" },
    tip: { en: "Match your strengths to their needs. Training, reliability, and a good attitude are real answers.",
           es: "Una sus fortalezas con las necesidades de ellos. La capacitación, la responsabilidad y una buena actitud son respuestas reales." } },
  { q: { en: "Tell me about a time you solved a problem.", es: "Cuénteme de una vez en que resolvió un problema." },
    tip: { en: "Use a simple order: what happened, what you did, and how it ended. Home and family problems count too.",
           es: "Use un orden simple: qué pasó, qué hizo usted, y cómo terminó. Los problemas de la casa y la familia también cuentan." } },
  { q: { en: "What hours can you work?", es: "¿Qué horarios puede trabajar?" },
    tip: { en: "Be clear and honest. If childcare or a ride shapes your hours, say what you can truly do, not what sounds good.",
           es: "Sea claro y honesto. Si el cuidado de los niños o el transporte afectan su horario, diga lo que de verdad puede hacer." } },
  { q: { en: "Do you have any questions for us?", es: "¿Tiene alguna pregunta para nosotros?" },
    tip: { en: "Always ask one. Good ones: What does training look like? Who would I report to? When do you hope to fill the job?",
           es: "Pregunte siempre algo. Buenas opciones: ¿Cómo es la capacitación? ¿A quién le reportaría? ¿Cuándo esperan cubrir el puesto?" } }
];
const INT_TRACK_QS = {
  pharmacy: [
    { q: { en: "A customer is upset about a long wait. What do you do?", es: "Un cliente está molesto por una espera larga. ¿Qué hace usted?" },
      tip: { en: "Stay kind, explain the wait honestly, and check with the pharmacist. Accuracy matters more than speed with medicine.",
             es: "Sea amable, explique la espera con honestidad y consulte al farmacéutico. Con los medicamentos, la exactitud importa más que la rapidez." } },
    { q: { en: "How do you keep patient information private?", es: "¿Cómo mantiene privada la información del paciente?" },
      tip: { en: "Talk quietly, never share names or medicines with others, and follow HIPAA rules every time.",
             es: "Hable en voz baja, nunca comparta nombres ni medicamentos con otros, y siga las reglas de HIPAA siempre." } },
    { q: { en: "What would you do if you were not sure how to read a prescription?", es: "¿Qué haría si no estuviera seguro de cómo leer una receta?" },
      tip: { en: "Never guess with medicine. Ask the pharmacist. That answer shows safety, and safety is the job.",
             es: "Nunca adivine con los medicamentos. Pregunte al farmacéutico. Esa respuesta muestra seguridad, y la seguridad es el trabajo." } },
    { q: { en: "How do you stay accurate when the counter gets busy?", es: "¿Cómo mantiene la exactitud cuando el mostrador se llena?" },
      tip: { en: "One order at a time, read labels twice, and count carefully. Slow and right beats fast and wrong.",
             es: "Una orden a la vez, lea las etiquetas dos veces y cuente con cuidado. Lento y correcto gana a rápido y equivocado." } }
  ],
  ccma: [
    { q: { en: "A patient is nervous about having blood drawn. What do you say?", es: "Un paciente está nervioso por una extracción de sangre. ¿Qué le dice?" },
      tip: { en: "Use a calm voice, explain each step before you do it, and tell them they can ask you to pause.",
             es: "Use una voz tranquila, explique cada paso antes de hacerlo, y dígale que puede pedirle una pausa." } },
    { q: { en: "How do you take vital signs the right way?", es: "¿Cómo toma los signos vitales de la manera correcta?" },
      tip: { en: "Name the order you learned: greet the patient, wash hands, check the equipment, measure, and record right away.",
             es: "Nombre el orden que aprendió: salude al paciente, lávese las manos, revise el equipo, mida y anote enseguida." } },
    { q: { en: "What do you do if a patient's numbers look wrong?", es: "¿Qué hace si los números de un paciente se ven mal?" },
      tip: { en: "Check again, then tell the nurse or provider right away. Never hide a number and never guess.",
             es: "Revise de nuevo y avise enseguida a la enfermera o al médico. Nunca esconda un número ni adivine." } },
    { q: { en: "How do you keep a patient's information private here?", es: "¿Cómo mantiene privada la información de un paciente aquí?" },
      tip: { en: "Charts stay closed, screens stay locked, and patient talk stays in the room. Privacy is part of care.",
             es: "Los expedientes quedan cerrados, las pantallas bloqueadas, y las conversaciones con pacientes se quedan en el cuarto. La privacidad es parte del cuidado." } }
  ],
  sterile: [
    { q: { en: "Why does sterile processing matter so much?", es: "¿Por qué importa tanto el procesamiento estéril?" },
      tip: { en: "Say the heart of it: clean, sterile tools keep patients safe from infection. Every tray protects a person.",
             es: "Diga lo esencial: los instrumentos limpios y estériles protegen a los pacientes de infecciones. Cada bandeja protege a una persona." } },
    { q: { en: "What do you do if a pack is torn or wet?", es: "¿Qué hace si un paquete está roto o mojado?" },
      tip: { en: "It does not go out. Set it aside, tell the lead, and process it again. No shortcuts, ever.",
             es: "No sale. Apártelo, avise al encargado y procéselo de nuevo. Sin atajos, nunca." } },
    { q: { en: "How do you handle a tray that is missing an instrument?", es: "¿Cómo maneja una bandeja a la que le falta un instrumento?" },
      tip: { en: "Check the count sheet, find the instrument or rebuild the tray, and document it. The OR team trusts your count.",
             es: "Revise la hoja de conteo, encuentre el instrumento o vuelva a armar la bandeja, y anótelo. El equipo de quirófano confía en su conteo." } },
    { q: { en: "This work is detailed and repetitive. How do you stay sharp?", es: "Este trabajo es detallado y repetitivo. ¿Cómo se mantiene atento?" },
      tip: { en: "Talk about routine: same careful order every time, checklists, and treating every tray like it is for your own family.",
             es: "Hable de la rutina: el mismo orden cuidadoso siempre, listas de control, y tratar cada bandeja como si fuera para su propia familia." } }
  ],
  hvac: [
    { q: { en: "A homeowner says their furnace stopped on the coldest night. What is your first move?", es: "Un cliente dice que su calefacción se detuvo en la noche más fría. ¿Cuál es su primer paso?" },
      tip: { en: "Stay calm and follow the order: safety first, then the simple checks like power, thermostat, and filter, before deeper tests.",
             es: "Mantenga la calma y siga el orden: seguridad primero, luego las revisiones simples como energía, termostato y filtro, antes de pruebas más profundas." } },
    { q: { en: "How do you stay safe working with gas and electricity?", es: "¿Cómo se mantiene seguro trabajando con gas y electricidad?" },
      tip: { en: "Name real habits: shut off power, test before touching, wear your gear, and never rush a safety step.",
             es: "Nombre hábitos reales: corte la energía, pruebe antes de tocar, use su equipo y nunca apure un paso de seguridad." } },
    { q: { en: "Tell me about a time you fixed something with your hands.", es: "Cuénteme de una vez en que arregló algo con sus manos." },
      tip: { en: "Any honest story counts: a car, a house repair, an appliance. Show how you think through a problem step by step.",
             es: "Cualquier historia honesta cuenta: un auto, una reparación en casa, un aparato. Muestre cómo piensa un problema paso a paso." } },
    { q: { en: "A customer is angry about the repair bill. What do you do?", es: "Un cliente está enojado por la cuenta de la reparación. ¿Qué hace usted?" },
      tip: { en: "Listen fully, explain the work in plain words, and never argue. Kind and clear wins the day.",
             es: "Escuche completo, explique el trabajo con palabras simples y nunca discuta. La amabilidad y la claridad ganan el día." } }
  ],
  electrical: [
    { q: { en: "What is the first rule of electrical work?", es: "¿Cuál es la primera regla del trabajo eléctrico?" },
      tip: { en: "Treat every wire like it is live until you test it yourself. Then lock it out and test again.",
             es: "Trate cada cable como si tuviera corriente hasta probarlo usted mismo. Luego bloquéelo y pruebe de nuevo." } },
    { q: { en: "How do you read a wiring diagram?", es: "¿Cómo lee un diagrama de cableado?" },
      tip: { en: "Start at the power source, follow the path of each wire, and name the symbols as you go. Slow reading prevents wrong work.",
             es: "Empiece en la fuente de energía, siga el camino de cada cable y nombre los símbolos al avanzar. Leer despacio evita trabajo equivocado." } },
    { q: { en: "Your lead asks you to do a step you have never done. What do you say?", es: "Su encargado le pide un paso que usted nunca ha hecho. ¿Qué dice?" },
      tip: { en: "Say you want to learn it right and ask them to show you once. Asking is strength in this trade, not weakness.",
             es: "Diga que quiere aprenderlo bien y pida que se lo muestren una vez. Preguntar es fuerza en este oficio, no debilidad." } },
    { q: { en: "Why do neat, labeled panels matter?", es: "¿Por qué importan los paneles ordenados y etiquetados?" },
      tip: { en: "The next person who opens that panel could be you at midnight. Neat work is safe work and kind work.",
             es: "La próxima persona que abra ese panel podría ser usted a medianoche. El trabajo ordenado es trabajo seguro y amable." } }
  ],
  cdl: [
    { q: { en: "Walk me through your pre trip inspection.", es: "Cuénteme su inspección antes del viaje." },
      tip: { en: "Name the order: engine, lights, tires, brakes, coupling, and paperwork. A full inspection, every trip, no skipping.",
             es: "Nombre el orden: motor, luces, llantas, frenos, acople y documentos. Una inspección completa, cada viaje, sin saltar pasos." } },
    { q: { en: "You are tired and dispatch wants the load there tonight. What do you do?", es: "Usted está cansado y despacho quiere la carga esta noche. ¿Qué hace?" },
      tip: { en: "Safety law is the answer: hours are hours. A safe driver says so clearly and early, before it becomes a crisis.",
             es: "La ley de seguridad es la respuesta: las horas son las horas. Un conductor seguro lo dice claro y temprano, antes de que se vuelva una crisis." } },
    { q: { en: "How do you handle a delivery where the customer is upset about a late load?", es: "¿Cómo maneja una entrega donde el cliente está molesto por un retraso?" },
      tip: { en: "Stay professional, explain what you know, and call dispatch. You represent the whole company at that door.",
             es: "Manténgase profesional, explique lo que sabe y llame a despacho. Usted representa a toda la empresa en esa puerta." } },
    { q: { en: "What does defensive driving mean to you?", es: "¿Qué significa para usted manejar a la defensiva?" },
      tip: { en: "Watch far ahead, leave space, expect other drivers to make mistakes, and plan your exit. Space is safety.",
             es: "Mire lejos, deje espacio, espere errores de otros conductores y planee su salida. El espacio es seguridad." } }
  ],
  cda: [
    { q: { en: "A toddler is crying and will not stop. What do you do first?", es: "Un niño pequeño llora y no se detiene. ¿Qué hace primero?" },
      tip: { en: "Get down at their level, use a soft voice, and check the basics: hurt, hungry, tired, or missing home. Comfort comes before correction.",
             es: "Baje a su nivel, use una voz suave y revise lo básico: dolor, hambre, sueño o extrañar su casa. El consuelo va antes que la corrección." } },
    { q: { en: "How do you keep a classroom safe?", es: "¿Cómo mantiene seguro un salón de clases?" },
      tip: { en: "Eyes up and counting heads, clean floors, safe toys, and knowing every child's allergies and pickup list.",
             es: "Ojos atentos contando cabezas, pisos limpios, juguetes seguros, y conocer las alergias y la lista de recogida de cada niño." } },
    { q: { en: "A parent is worried about their child's day. How do you talk with them?", es: "Un padre está preocupado por el día de su hijo. ¿Cómo habla con él?" },
      tip: { en: "Listen first, share something good and true about the child, then talk about the hard part with a plan.",
             es: "Escuche primero, comparta algo bueno y verdadero del niño, y luego hable de lo difícil con un plan." } },
    { q: { en: "Why do you want to work with young children?", es: "¿Por qué quiere trabajar con niños pequeños?" },
      tip: { en: "Let your real reason show. These years shape a whole life, and patient, loving teachers change that story.",
             es: "Deje ver su razón verdadera. Estos años forman una vida entera, y los maestros pacientes y amorosos cambian esa historia." } }
  ],
  entrepreneur: [
    { q: { en: "Tell me about the business you want to build.", es: "Hábleme del negocio que quiere construir." },
      tip: { en: "One clear sentence: who you serve, what you offer, and why it matters. Practice that sentence until it feels easy.",
             es: "Una frase clara: a quién sirve, qué ofrece, y por qué importa. Practique esa frase hasta que le salga fácil." } },
    { q: { en: "How will your first customers find you?", es: "¿Cómo le encontrarán sus primeros clientes?" },
      tip: { en: "Name real steps: people you know, social media, church and community, and fair prices while you build a name.",
             es: "Nombre pasos reales: gente que conoce, redes sociales, la iglesia y la comunidad, y precios justos mientras construye su nombre." } },
    { q: { en: "How do you handle money for the business?", es: "¿Cómo maneja el dinero del negocio?" },
      tip: { en: "Business money and home money stay separate. Track every dollar in and out, even in a simple notebook.",
             es: "El dinero del negocio y el de la casa van separados. Anote cada dólar que entra y sale, aunque sea en un cuaderno simple." } },
    { q: { en: "What will you do in the first hard month?", es: "¿Qué hará en el primer mes difícil?" },
      tip: { en: "Show a plan, not just hope: lower costs, ask mentors, serve the customers you have extra well, and do not quit early.",
             es: "Muestre un plan, no solo esperanza: baje costos, pida consejo a mentores, sirva muy bien a los clientes que tiene, y no se rinda temprano." } }
  ]
};

/* ---------------- Study Buddy: practice pool (simple English) ---------------- */
const STUDY_POOL = [
  { s: "math", q: "What is 7 x 8?", c: ["54", "56", "64"], a: 1, why: "7 x 8 = 56. Think of 7 x 8 as 7 groups of 8." },
  { s: "math", q: "A class has 24 students. They split into groups of 6. How many groups?", c: ["3", "4", "6"], a: 1, why: "24 divided by 6 is 4 groups." },
  { s: "math", q: "What is 15 percent of 100?", c: ["15", "25", "50"], a: 0, why: "15 percent of 100 is 15. Percent means out of 100." },
  { s: "math", q: "You buy items for $3.50 and $2.25. What is the total?", c: ["$5.25", "$5.75", "$6.25"], a: 1, why: "$3.50 + $2.25 = $5.75." },
  { s: "math", q: "What is half of 3/4?", c: ["3/8", "1/2", "3/2"], a: 0, why: "Half of 3/4 is 3/8. Multiply 3/4 by 1/2." },
  { s: "math", q: "A bus leaves at 9:40 AM and the ride takes 35 minutes. When does it arrive?", c: ["10:05 AM", "10:15 AM", "10:25 AM"], a: 1, why: "9:40 plus 35 minutes is 10:15 AM." },
  { s: "reading", q: "Read: 'Maria takes the bus to class every morning. She studies on the ride.' What does Maria do on the bus?", c: ["She sleeps", "She studies", "She drives"], a: 1, why: "The text says she studies on the ride." },
  { s: "reading", q: "What is the main idea of a paragraph?", c: ["The last word", "What it is mostly about", "The longest sentence"], a: 1, why: "The main idea is what the paragraph is mostly about." },
  { s: "reading", q: "A sign says: 'No food or drink in the lab.' What must you do?", c: ["Eat quickly", "Leave food outside the lab", "Share your drink"], a: 1, why: "The sign means food and drink stay outside the lab." },
  { s: "reading", q: "Which word means almost the same as 'begin'?", c: ["Start", "Stop", "End"], a: 0, why: "Start means begin." },
  { s: "reading", q: "Read: 'The store opens at 8. On Sundays it opens at 10.' When does it open on Sunday?", c: ["At 8", "At 10", "It is closed"], a: 1, why: "The text says Sundays it opens at 10." },
  { s: "reading", q: "In a story, the 'setting' is:", c: ["The main person", "Where and when it happens", "The ending"], a: 1, why: "The setting is where and when a story happens." },
  { s: "science", q: "What do plants need to make food?", c: ["Sunlight, water, and air", "Rocks and sand", "Darkness"], a: 0, why: "Plants use sunlight, water, and air to make food." },
  { s: "science", q: "Water turns to ice when it:", c: ["Heats up", "Freezes at 0 degrees C", "Evaporates"], a: 1, why: "Water freezes at 0 degrees Celsius and becomes ice." },
  { s: "science", q: "Which organ pumps blood through the body?", c: ["The liver", "The lung", "The heart"], a: 2, why: "The heart pumps blood through the whole body." },
  { s: "science", q: "The Earth moves around:", c: ["The Moon", "The Sun", "Mars"], a: 1, why: "The Earth orbits the Sun. That trip takes one year." },
  { s: "science", q: "What force pulls objects toward the Earth?", c: ["Friction", "Gravity", "Magnetism"], a: 1, why: "Gravity pulls objects toward the Earth." },
  { s: "science", q: "Which is a learned behavior in dogs?", c: ["Barking", "Shedding fur", "Fetching on command"], a: 2, why: "Fetching on command is taught. It is learned, not born." },
  { s: "social", q: "Who is the head of the United States government as President?", c: ["The Governor", "The President leads the country", "The Mayor"], a: 1, why: "The President is the head of the United States government." },
  { s: "social", q: "What ocean is on the east coast of the United States?", c: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], a: 1, why: "The Atlantic Ocean is on the east coast." },
  { s: "social", q: "The first ten amendments to the Constitution are called:", c: ["The Preamble", "The Bill of Rights", "The Articles"], a: 1, why: "The first ten amendments are the Bill of Rights." },
  { s: "social", q: "What is the capital of Indiana?", c: ["Fort Wayne", "Indianapolis", "Evansville"], a: 1, why: "Indianapolis is the capital of Indiana." },
  { s: "social", q: "Citizens vote in elections to:", c: ["Choose leaders", "Pay taxes", "Get a license"], a: 0, why: "Voting is how citizens choose their leaders." },
  { s: "social", q: "Which war was between the North and the South in the United States?", c: ["World War I", "The Civil War", "The Revolutionary War"], a: 1, why: "The Civil War was fought between the North and the South." }
];

/* ---------------- Study Buddy: trade vocabulary ---------------- */
const VOCAB = {
  pharmacy: [
    { w: "Prescription", def: "A doctor's written order for medicine.", es: "Receta" },
    { w: "Dose", def: "How much medicine to take at one time.", es: "Dosis" },
    { w: "Refill", def: "More medicine after the first supply runs out.", es: "Resurtido" },
    { w: "Pharmacist", def: "The licensed expert in charge of the pharmacy.", es: "Farmacéutico" },
    { w: "Label", def: "The printed paper on the bottle that tells how to use the medicine.", es: "Etiqueta" },
    { w: "Insurance", def: "A plan that helps pay for medicine and care.", es: "Seguro" }
  ],
  ccma: [
    { w: "Vital signs", def: "Basic body measures like pulse, temperature, and blood pressure.", es: "Signos vitales" },
    { w: "Chart", def: "The patient's health record.", es: "Expediente" },
    { w: "Intake", def: "The first questions and checks when a patient arrives.", es: "Admisión" },
    { w: "Symptom", def: "A sign of sickness a patient feels or reports.", es: "Síntoma" },
    { w: "Blood pressure", def: "How hard the blood pushes inside the body.", es: "Presión arterial" },
    { w: "Appointment", def: "A set time to see the doctor or nurse.", es: "Cita" }
  ],
  sterile: [
    { w: "Sterile", def: "Fully clean, with no germs living on it.", es: "Estéril" },
    { w: "Instrument", def: "A tool used in surgery or care.", es: "Instrumento" },
    { w: "Tray", def: "A flat set of tools prepared for one procedure.", es: "Bandeja" },
    { w: "Autoclave", def: "The machine that sterilizes tools with hot steam.", es: "Autoclave" },
    { w: "Contaminated", def: "Dirty with germs. Not safe to use.", es: "Contaminado" },
    { w: "Wrapper", def: "The cover that keeps a sterile pack closed and clean.", es: "Envoltura" }
  ],
  hvac: [
    { w: "Thermostat", def: "The wall control that sets the temperature.", es: "Termostato" },
    { w: "Furnace", def: "The unit that heats the air in a building.", es: "Calentador" },
    { w: "Filter", def: "The screen that catches dust from the air.", es: "Filtro" },
    { w: "Vent", def: "An opening where heated or cooled air comes out.", es: "Rejilla de aire" },
    { w: "Refrigerant", def: "The fluid that carries heat in a cooling system.", es: "Refrigerante" },
    { w: "Duct", def: "The metal path that carries air through a building.", es: "Conducto" }
  ],
  electrical: [
    { w: "Circuit", def: "The full path electricity travels and returns on.", es: "Circuito" },
    { w: "Breaker", def: "The switch that cuts power when there is a problem.", es: "Interruptor" },
    { w: "Voltage", def: "The force that pushes electricity through a wire.", es: "Voltaje" },
    { w: "Ground", def: "A safe path for stray electricity to leave.", es: "Tierra" },
    { w: "Conduit", def: "The pipe that protects wires.", es: "Tubo conduit" },
    { w: "Outlet", def: "The wall socket where things plug in.", es: "Tomacorriente" }
  ],
  cdl: [
    { w: "Pre trip inspection", def: "The full check of the truck before driving.", es: "Inspección previa al viaje" },
    { w: "Cargo", def: "The load the truck carries.", es: "Carga" },
    { w: "Dispatch", def: "The office that assigns loads and routes.", es: "Despacho" },
    { w: "Log book", def: "The record of driving and rest hours.", es: "Libro de registro" },
    { w: "Coupling", def: "Connecting the truck and trailer together.", es: "Acople" },
    { w: "Blind spot", def: "An area around the truck the driver cannot see.", es: "Punto ciego" }
  ],
  cda: [
    { w: "Supervision", def: "Watching children closely to keep them safe.", es: "Supervisión" },
    { w: "Routine", def: "The regular order of the day that children can count on.", es: "Rutina" },
    { w: "Milestone", def: "A new skill a child reaches as they grow.", es: "Hito del desarrollo" },
    { w: "Allergy", def: "A food or thing that can make a child sick.", es: "Alergia" },
    { w: "Pickup list", def: "The names of adults allowed to take a child home.", es: "Lista de recogida" },
    { w: "Play based learning", def: "Children learning through guided play.", es: "Aprendizaje basado en el juego" }
  ],
  entrepreneur: [
    { w: "Profit", def: "Money left after all costs are paid.", es: "Ganancia" },
    { w: "Customer", def: "A person who buys from your business.", es: "Cliente" },
    { w: "Marketing", def: "How people learn about your business.", es: "Mercadeo" },
    { w: "Budget", def: "A plan for how money will be used.", es: "Presupuesto" },
    { w: "Invoice", def: "A bill that asks a customer to pay.", es: "Factura" },
    { w: "Brand", def: "The name and feeling people connect with your business.", es: "Marca" }
  ]
};

/* ---------------- Help Near You cards ---------------- */
const HELP_CARDS = [
  { title: "Indiana 211", addr: [], phone: "211", tel: "211", noteKey: "hNote211" },
  { title: "Wayne Adult Education office", addr: ["Ben Davis University, 1155 S High School Rd, Door #2, Indianapolis, IN 46241"], phone: "317-988-7975", tel: "+13179887975", noteKey: "hNoteWayne" },
  { title: "Washington Township Trustee", addr: ["5401 W Washington St, Indianapolis, IN"], phone: "", tel: "", noteKey: "hNoteTrustee" },
  { title: "Goodwill Excel Center", addr: [], phone: "", tel: "", noteKey: "hNoteExcel" },
  { title: "Gleaners Food Bank of Indiana", addr: [], phone: "", tel: "", noteKey: "hNoteGleaners" }
];

/* ---------------- v3: screen registry + language hook ---------------- */
SCREENS.push("resume", "interview", "dec1", "steps", "help", "study");
const DQ_RESUME_KEY = "dq_resume_v3";
const DQ_STEPS_KEY = "dq_steps_v3";
function fillTrackSelect(el, extras) {
  if (!el) return;
  const cur = el.value;
  el.innerHTML = "";
  DQ_TRACKS.concat(extras || []).forEach(k => {
    const o = document.createElement("option");
    o.value = k;
    o.textContent = t("trk_" + k);
    el.appendChild(o);
  });
  if (cur && (DQ_TRACKS.includes(cur) || (extras || []).includes(cur))) el.value = cur;
}
const _applyLangV3 = applyLang;
applyLang = function () {
  _applyLangV3();
  v3RenderAll();
};
function v3RenderAll() {
  if (!lang) return;
  fillTrackSelect(document.getElementById("resTarget"), ["other", "notsure"]);
  fillTrackSelect(document.getElementById("decTrack"), ["other", "notsure"]);
  fillTrackSelect(document.getElementById("intTrack"), ["general"]);
  fillTrackSelect(document.getElementById("studyTrack"), []);
  renderSkillChips();
  renderSteps();
  renderHelp();
  renderInterview();
  renderDec();
  renderStudy();
  renderFlash();
}

/* ---------------- v3: door buttons ---------------- */
document.getElementById("doorResume").addEventListener("click", () => show("resume"));
document.getElementById("doorInterview").addEventListener("click", () => show("interview"));
document.getElementById("doorDec1").addEventListener("click", () => show("dec1"));
document.getElementById("doorSteps").addEventListener("click", () => show("steps"));
document.getElementById("doorHelp").addEventListener("click", () => show("help"));
document.getElementById("doorStudy").addEventListener("click", () => show("study"));

/* ================= 1. BUILD MY RESUME ================= */
function buildJobBlocks() {
  const wrap = document.getElementById("resJobs");
  wrap.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.className = "job-block";
    div.innerHTML =
      '<p class="field-label">' + escapeHtml(t("resJobN").replace("{n}", i + 1)) + "</p>" +
      '<label class="field-label" for="resJobTitle' + i + '">' + escapeHtml(t("resJobTitle")) + "</label>" +
      '<input type="text" id="resJobTitle' + i + '" />' +
      '<label class="field-label" for="resJobEmp' + i + '">' + escapeHtml(t("resEmployer")) + "</label>" +
      '<input type="text" id="resJobEmp' + i + '" />' +
      '<label class="field-label" for="resJobCity' + i + '">' + escapeHtml(t("resJobCity")) + "</label>" +
      '<input type="text" id="resJobCity' + i + '" />' +
      '<label class="field-label" for="resJobStart' + i + '">' + escapeHtml(t("resStart")) + "</label>" +
      '<input type="text" id="resJobStart' + i + '" />' +
      '<label class="field-label" for="resJobEnd' + i + '">' + escapeHtml(t("resEnd")) + "</label>" +
      '<input type="text" id="resJobEnd' + i + '" />' +
      '<label class="step-row"><input type="checkbox" id="resJobCur' + i + '" /><span>' + escapeHtml(t("resCurrent")) + "</span></label>" +
      '<label class="field-label" for="resJobDuties' + i + '">' + escapeHtml(t("resDuties")) + "</label>" +
      '<textarea id="resJobDuties' + i + '" rows="3"></textarea>';
    wrap.appendChild(div);
  }
}
function resumeTarget() { return document.getElementById("resTarget").value || "notsure"; }
let pickedSkills = [];
function renderSkillChips() {
  const wrap = document.getElementById("resSkillChips");
  if (!wrap) return;
  const ideas = DQ_SKILL_IDEAS[resumeTarget()] || DQ_SKILL_IDEAS.general;
  wrap.innerHTML = "";
  ideas.forEach(s => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "skill-chip" + (pickedSkills.includes(s) ? " on" : "");
    b.textContent = s;
    b.addEventListener("click", () => {
      if (pickedSkills.includes(s)) pickedSkills = pickedSkills.filter(x => x !== s);
      else pickedSkills.push(s);
      renderSkillChips();
      saveResumeForm();
    });
    wrap.appendChild(b);
  });
}
function val(id) { const el = document.getElementById(id); return el ? el.value.replace(/\s+/g, " ").trim() : ""; }
function collectResume() {
  const jobs = [];
  for (let i = 0; i < 3; i++) {
    jobs.push({
      title: val("resJobTitle" + i), emp: val("resJobEmp" + i), city: val("resJobCity" + i),
      start: val("resJobStart" + i), end: val("resJobEnd" + i),
      current: !!document.getElementById("resJobCur" + i).checked,
      duties: document.getElementById("resJobDuties" + i).value.trim()
    });
  }
  return {
    name: val("resName"), phone: val("resPhone"), city: val("resCity"), email: val("resEmail"),
    target: resumeTarget(),
    sum1: val("resSum1"), sum2: val("resSum2"), sum3: val("resSum3"),
    jobs: jobs, vol: document.getElementById("resVol").value.trim(),
    skills: pickedSkills.slice(),
    skillsFree: val("resSkillsFree"),
    school: val("resSchool"), diploma: document.getElementById("resDiploma").value,
    certs: val("resCerts"), langs: val("resLangs")
  };
}
function saveResumeForm() {
  try { localStorage.setItem(DQ_RESUME_KEY, JSON.stringify(collectResume())); } catch (e) { /* storage full or blocked */ }
}
function setVal(id, v) { const el = document.getElementById(id); if (el && v) el.value = v; }
function loadResumeForm() {
  let d = null;
  try { d = JSON.parse(localStorage.getItem(DQ_RESUME_KEY)); } catch (e) { d = null; }
  if (!d) return;
  setVal("resName", d.name); setVal("resPhone", d.phone); setVal("resCity", d.city); setVal("resEmail", d.email);
  if (d.target) document.getElementById("resTarget").value = d.target;
  setVal("resSum1", d.sum1); setVal("resSum2", d.sum2); setVal("resSum3", d.sum3);
  (d.jobs || []).forEach((j, i) => {
    if (i > 2) return;
    setVal("resJobTitle" + i, j.title); setVal("resJobEmp" + i, j.emp); setVal("resJobCity" + i, j.city);
    setVal("resJobStart" + i, j.start); setVal("resJobEnd" + i, j.end);
    document.getElementById("resJobCur" + i).checked = !!j.current;
    if (j.duties) document.getElementById("resJobDuties" + i).value = j.duties;
  });
  if (d.vol) document.getElementById("resVol").value = d.vol;
  pickedSkills = Array.isArray(d.skills) ? d.skills : [];
  setVal("resSkillsFree", d.skillsFree);
  setVal("resSchool", d.school);
  if (d.diploma) document.getElementById("resDiploma").value = d.diploma;
  setVal("resCerts", d.certs); setVal("resLangs", d.langs);
}
function splitList(s) {
  return String(s || "").split(",").map(x => x.trim()).filter(Boolean);
}
function resumeSummary(d) {
  const parts = [d.sum1, d.sum2, d.sum3].filter(Boolean).map(s =>
    /[.!?]$/.test(s) ? s : s + ".");
  return parts.join(" ");
}
const DOC_DIPLOMA = { dip_done: "High School Diploma or HSE", dip_working: "Currently completing the HSE",
  dip_some: "Some high school completed", dip_college: "Some college or a college degree" };
const DOC_TARGET = { other: "Employment", notsure: "" };
function resumeSkillsList(d) {
  const out = [];
  d.skills.concat(splitList(d.skillsFree)).forEach(s => { if (!out.includes(s)) out.push(s); });
  return out;
}
function resumePlainText(d) {
  const en = I18N.en;
  const lines = [];
  lines.push(d.name);
  const contact = [d.city, d.phone, d.email].filter(Boolean).join(" | ");
  if (contact) lines.push(contact);
  const tgt = DOC_TARGET[d.target] !== undefined ? DOC_TARGET[d.target] : en["trk_" + d.target];
  if (tgt) lines.push("Goal: " + tgt);
  const sum = resumeSummary(d);
  if (sum) { lines.push("", en.resSecSummary.toUpperCase(), sum); }
  const jobs = d.jobs.filter(j => j.title || j.emp || j.duties);
  if (jobs.length) {
    lines.push("", en.resSecWork.toUpperCase());
    jobs.forEach(j => {
      const head = [j.title, j.emp].filter(Boolean).join(", ");
      const meta = [j.city, [j.start, j.current ? "Present" : j.end].filter(Boolean).join(" to ")].filter(Boolean).join(" | ");
      lines.push(head + (meta ? " (" + meta + ")" : ""));
      j.duties.split(/\n|,/).map(x => x.trim()).filter(Boolean)
        .forEach(duty => lines.push("  - " + duty));
    });
  }
  if (d.vol) { lines.push("", en.resSecVol.toUpperCase(), d.vol); }
  const skills = resumeSkillsList(d);
  if (skills.length) { lines.push("", en.resSecSkills.toUpperCase(), skills.join(", ")); }
  const edu = [d.school, DOC_DIPLOMA[d.diploma] || ""].filter(Boolean);
  if (edu.length) { lines.push("", en.resSecEdu.toUpperCase(), edu.join(" | ")); }
  const certs = splitList(d.certs);
  if (certs.length) { lines.push("", en.resSecCerts.toUpperCase(), certs.join(", ")); }
  const langs = splitList(d.langs);
  if (langs.length) { lines.push("", en.resSecLangs.toUpperCase(), langs.join(", ")); }
  return lines.join("\n");
}
function renderResumeDoc(d) {
  const en = I18N.en;
  let h = "<h1>" + escapeHtml(d.name) + "</h1>";
  const contact = [d.city, d.phone, d.email].filter(Boolean).join(" | ");
  if (contact) h += '<p class="r-contact">' + escapeHtml(contact) + "</p>";
  const tgt = DOC_TARGET[d.target] !== undefined ? DOC_TARGET[d.target] : en["trk_" + d.target];
  if (tgt) h += '<p class="r-target">Goal: ' + escapeHtml(tgt) + "</p>";
  const sum = resumeSummary(d);
  if (sum) h += "<h2>" + escapeHtml(en.resSecSummary) + "</h2><p>" + escapeHtml(sum) + "</p>";
  const jobs = d.jobs.filter(j => j.title || j.emp || j.duties);
  if (jobs.length) {
    h += "<h2>" + escapeHtml(en.resSecWork) + "</h2>";
    jobs.forEach(j => {
      const head = [j.title, j.emp].filter(Boolean).join(", ");
      const meta = [j.city, [j.start, j.current ? "Present" : j.end].filter(Boolean).join(" to ")].filter(Boolean).join(" | ");
      h += '<p><span class="r-job-title">' + escapeHtml(head) + "</span>";
      if (meta) h += '<br /><span class="r-job-meta">' + escapeHtml(meta) + "</span>";
      h += "</p>";
      if (j.duties) {
        const duties = j.duties.split(/\n|,/).map(x => x.trim()).filter(Boolean);
        if (duties.length > 1) h += "<ul>" + duties.map(x => "<li>" + escapeHtml(x) + "</li>").join("") + "</ul>";
        else h += "<p>" + escapeHtml(j.duties) + "</p>";
      }
    });
  }
  if (d.vol) h += "<h2>" + escapeHtml(en.resSecVol) + "</h2><p>" + escapeHtml(d.vol) + "</p>";
  const skills = resumeSkillsList(d);
  if (skills.length) h += "<h2>" + escapeHtml(en.resSecSkills) + "</h2><p>" + escapeHtml(skills.join(", ")) + "</p>";
  const edu = [d.school, DOC_DIPLOMA[d.diploma] || ""].filter(Boolean);
  if (edu.length) h += "<h2>" + escapeHtml(en.resSecEdu) + "</h2><p>" + escapeHtml(edu.join(" | ")) + "</p>";
  const certs = splitList(d.certs);
  if (certs.length) h += "<h2>" + escapeHtml(en.resSecCerts) + "</h2><p>" + escapeHtml(certs.join(", ")) + "</p>";
  const langs = splitList(d.langs);
  if (langs.length) h += "<h2>" + escapeHtml(en.resSecLangs) + "</h2><p>" + escapeHtml(langs.join(", ")) + "</p>";
  document.getElementById("resumeDoc").innerHTML = h;
}
let lastResumeText = "";
document.getElementById("resumeForm").addEventListener("input", saveResumeForm);
document.getElementById("resTarget").addEventListener("change", () => { renderSkillChips(); saveResumeForm(); });
document.getElementById("resumeForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = collectResume();
  const err = document.getElementById("resErr");
  if (!d.name) { err.hidden = false; document.getElementById("resName").focus(); return; }
  err.hidden = true;
  saveResumeForm();
  renderResumeDoc(d);
  lastResumeText = resumePlainText(d);
  document.getElementById("resumeResult").hidden = false;
  document.getElementById("resSentNote").hidden = true;
  document.getElementById("resSendErr").hidden = true;
  dqTrack("resume_done");
  document.getElementById("resumeResult").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("resPrintBtn").addEventListener("click", () => window.print());
document.getElementById("resCopyBtn").addEventListener("click", async () => {
  const note = document.getElementById("resCopyNote");
  try { await navigator.clipboard.writeText(lastResumeText); note.hidden = false; }
  catch (e) {
    const ta = document.createElement("textarea");
    ta.value = lastResumeText; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); note.hidden = false; } catch (e2) { /* clipboard blocked */ }
    ta.remove();
  }
});
document.getElementById("resSendBtn").addEventListener("click", () => {
  const d = collectResume();
  const errEl = document.getElementById("resSendErr");
  if (!d.name || !validPhone(d.phone)) { errEl.hidden = false; return; }
  errEl.hidden = true;
  const text = lastResumeText || resumePlainText(d);
  const need = ("Resume review: " + text).slice(0, 2000);
  const item = { id: Date.now(), type: "counseling", barrier: null, need: need, name: d.name,
    phone: d.phone, language: lang, staff: staffMode, crisis: false, done: false, ts: new Date().toISOString() };
  deliver(item);
  bump("counsel");
  dqTrack("counseling_sent");
  if (staffMode) bump("staff");
  document.getElementById("resSentNote").hidden = false;
});
document.getElementById("resEditBtn").addEventListener("click", () => {
  document.getElementById("resumeForm").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("resClearBtn").addEventListener("click", () => {
  if (!window.confirm(t("resClearConfirm"))) return;
  localStorage.removeItem(DQ_RESUME_KEY);
  document.getElementById("resumeForm").reset();
  pickedSkills = [];
  renderSkillChips();
  document.getElementById("resumeResult").hidden = true;
  lastResumeText = "";
});

/* ================= 2. INTERVIEW PREP ================= */
let intTrackSel = "general";
let intAnswers = {};
let intDoneFired = false;
function intDeckFor(track) {
  if (track === "general") return INT_GENERAL.concat(INT_GENERAL_EXTRA);
  return (INT_TRACK_QS[track] || []).concat(INT_GENERAL);
}
function intQLang() { return lang === "es" ? "es" : "en"; }
function renderInterview() {
  const deckEl = document.getElementById("intDeck");
  if (!deckEl) return;
  const sel = document.getElementById("intTrack");
  if (sel.value) intTrackSel = sel.value;
  const deck = intDeckFor(intTrackSel);
  const ql = intQLang();
  document.getElementById("intLangNote").hidden = (lang === "en" || lang === "es");
  deckEl.innerHTML = "";
  deck.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card int-q";
    card.innerHTML =
      '<p class="q-text">' + (i + 1) + ". " + escapeHtml(item.q[ql]) + "</p>" +
      '<p class="q-tip"><strong>' + escapeHtml(t("intTip")) + "</strong> " + escapeHtml(item.tip[ql]) + "</p>";
    const ta = document.createElement("textarea");
    ta.rows = 3;
    ta.value = intAnswers[intTrackSel + ":" + i] || "";
    ta.addEventListener("input", () => {
      intAnswers[intTrackSel + ":" + i] = ta.value;
      updateIntProgress();
    });
    card.appendChild(ta);
    deckEl.appendChild(card);
  });
  updateIntProgress();
}
function updateIntProgress() {
  const deck = intDeckFor(intTrackSel);
  let answered = 0;
  deck.forEach((_, i) => { if ((intAnswers[intTrackSel + ":" + i] || "").trim()) answered++; });
  const el = document.getElementById("intProgress");
  if (el) el.textContent = t("intAnswered").replace("{a}", answered).replace("{b}", deck.length);
  return { answered: answered, total: deck.length };
}
document.getElementById("intTrack").addEventListener("change", () => {
  intTrackSel = document.getElementById("intTrack").value;
  intDoneFired = false;
  document.getElementById("intDone").hidden = true;
  renderInterview();
});
document.getElementById("intFinishBtn").addEventListener("click", () => {
  const p = updateIntProgress();
  const err = document.getElementById("intErr");
  if (p.answered < p.total) { err.hidden = false; return; }
  err.hidden = true;
  document.getElementById("intDone").hidden = false;
  if (!intDoneFired) { dqTrack("interview_done"); intDoneFired = true; }
  document.getElementById("intDone").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ================= 3. DECEMBER 1 GUIDE ================= */
function renderDec() {
  const el = document.getElementById("decCountdown");
  if (!el) return;
  const now = new Date();
  const deadline = new Date(2026, 11, 1, 23, 59, 59);
  const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startDeadline = new Date(2026, 11, 1);
  const days = Math.round((startDeadline - startToday) / 86400000);
  const closedEl = document.getElementById("decClosed");
  if (now > deadline) {
    el.hidden = true;
    closedEl.hidden = false;
  } else {
    closedEl.hidden = true;
    el.hidden = false;
    el.textContent = days > 1 ? t("decDays").replace("{n}", days)
      : days === 1 ? t("decDay1") : t("decToday");
  }
}
document.getElementById("decForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("decName").value.replace(/\s+/g, " ").trim().slice(0, 40);
  const phoneRaw = document.getElementById("decPhone").value;
  const err = document.getElementById("decErr");
  if (!name || !validPhone(phoneRaw)) { err.hidden = false; return; }
  err.hidden = true;
  const phone = phoneRaw.replace(/\s+/g, " ").trim().slice(0, 30);
  const trackKey = document.getElementById("decTrack").value || "notsure";
  const item = { id: Date.now(), type: "counseling", barrier: null,
    need: "Career Training application sent: " + t("trk_" + trackKey),
    name: name, phone: phone, language: lang, staff: staffMode, crisis: false,
    done: false, ts: new Date().toISOString() };
  deliver(item);
  bump("counsel");
  dqTrack("counseling_sent");
  dqTrack("ct_applied");
  if (staffMode) bump("staff");
  document.getElementById("decSent").hidden = false;
});

/* ================= 4. MY NEXT STEPS ================= */
function loadSteps() {
  try { return JSON.parse(localStorage.getItem(DQ_STEPS_KEY)) || {}; } catch (e) { return {}; }
}
function renderSteps() {
  const list = document.getElementById("stepsList");
  if (!list) return;
  const state = loadSteps();
  list.innerHTML = "";
  let done = 0;
  for (let i = 1; i <= 6; i++) {
    const key = "s" + i;
    const row = document.createElement("label");
    row.className = "step-row" + (state[key] ? " done" : "");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!state[key];
    cb.addEventListener("change", () => {
      const s = loadSteps();
      s[key] = cb.checked;
      try { localStorage.setItem(DQ_STEPS_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
      renderSteps();
    });
    const span = document.createElement("span");
    span.textContent = t("step" + i);
    row.appendChild(cb);
    row.appendChild(span);
    list.appendChild(row);
    if (state[key]) done++;
  }
  document.getElementById("stepsBar").style.width = Math.round(done / 6 * 100) + "%";
  document.getElementById("stepsCount").textContent =
    t("stepsCount").replace("{a}", done).replace("{b}", 6);
  const cheer = document.getElementById("stepsCheer");
  cheer.textContent = done === 0 ? t("cheerStart")
    : done <= 2 ? t("cheerGoing")
    : done <= 4 ? t("cheerHalf")
    : done === 5 ? t("cheerAlmost") : t("cheerDone");
}

/* ================= 5. HELP NEAR YOU ================= */
function renderHelp() {
  const wrap = document.getElementById("helpList");
  if (!wrap) return;
  wrap.innerHTML = "";
  HELP_CARDS.forEach(c => {
    const div = document.createElement("div");
    div.className = "card help-card";
    let h = "<h2>" + escapeHtml(c.title) + "</h2>";
    c.addr.forEach(a => { h += '<p class="h-addr">' + escapeHtml(a) + "</p>"; });
    h += '<p class="h-note">' + escapeHtml(t(c.noteKey)) + "</p>";
    if (c.phone) h += '<a class="help-call" href="tel:' + escapeHtml(c.tel) + '">' +
      escapeHtml(t("helpCall")) + " " + escapeHtml(c.phone) + "</a>";
    div.innerHTML = h;
    wrap.appendChild(div);
  });
}

/* ================= 6. STUDY BUDDY ================= */
let studyState = { answered: {}, fired: false };
let studySetCache = null;
function todayStudySet() {
  const start = (dayOfYear() * 8) % STUDY_POOL.length;
  const set = [];
  for (let i = 0; i < 8; i++) set.push(STUDY_POOL[(start + i) % STUDY_POOL.length]);
  return set;
}
function renderStudy() {
  const wrap = document.getElementById("studySet");
  if (!wrap) return;
  if (!studySetCache) studySetCache = todayStudySet();
  const set = studySetCache;
  wrap.innerHTML = "";
  set.forEach((item, qi) => {
    const card = document.createElement("div");
    card.className = "card study-q";
    const subjKey = item.s === "math" ? "studyMath" : item.s === "reading" ? "studyReading"
      : item.s === "science" ? "studyScience" : "studySocial";
    let h = '<span class="s-subj">' + escapeHtml(t(subjKey)) + "</span>" +
            '<p class="s-text">' + (qi + 1) + ". " + escapeHtml(item.q) + "</p>";
    card.innerHTML = h;
    const chosen = studyState.answered[qi];
    item.c.forEach((choice, ci) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "choice-btn";
      b.textContent = choice;
      if (chosen !== undefined) {
        b.disabled = true;
        if (ci === item.a) b.classList.add("right");
        else if (ci === chosen) b.classList.add("wrong");
      }
      b.addEventListener("click", () => {
        if (studyState.answered[qi] !== undefined) return;
        studyState.answered[qi] = ci;
        renderStudy();
      });
      card.appendChild(b);
    });
    if (chosen !== undefined) {
      const why = document.createElement("p");
      why.className = "s-why";
      why.textContent = (chosen === item.a ? t("studyRight") : t("studyWrong")) + " " + item.why;
      card.appendChild(why);
    }
    wrap.appendChild(card);
  });
  const answeredCount = Object.keys(studyState.answered).length;
  const scoreEl = document.getElementById("studyScore");
  if (answeredCount === set.length) {
    let right = 0;
    set.forEach((item, qi) => { if (studyState.answered[qi] === item.a) right++; });
    scoreEl.textContent = t("studyScore").replace("{a}", right).replace("{b}", set.length);
    scoreEl.hidden = false;
    if (!studyState.fired) { dqTrack("study_done"); studyState.fired = true; }
  } else {
    scoreEl.hidden = true;
  }
}
let flashTrack = "pharmacy";
let flashIdx = 0;
let flashFlipped = false;
function renderFlash() {
  const wordEl = document.getElementById("flashWord");
  if (!wordEl) return;
  const sel = document.getElementById("studyTrack");
  if (sel.value) flashTrack = sel.value;
  const words = VOCAB[flashTrack] || [];
  if (!words.length) return;
  if (flashIdx >= words.length) flashIdx = 0;
  const entry = words[flashIdx];
  wordEl.textContent = entry.w;
  const defEl = document.getElementById("flashDef");
  defEl.textContent = entry.def + " (" + entry.es + ")";
  defEl.hidden = !flashFlipped;
  document.getElementById("flashCount").textContent =
    t("flashCount").replace("{a}", flashIdx + 1).replace("{b}", words.length);
}
document.getElementById("flashCard").addEventListener("click", () => {
  flashFlipped = !flashFlipped;
  renderFlash();
});
document.getElementById("flashNext").addEventListener("click", () => {
  const words = VOCAB[flashTrack] || [];
  flashIdx = (flashIdx + 1) % words.length;
  flashFlipped = false;
  renderFlash();
});
document.getElementById("flashPrev").addEventListener("click", () => {
  const words = VOCAB[flashTrack] || [];
  flashIdx = (flashIdx - 1 + words.length) % words.length;
  flashFlipped = false;
  renderFlash();
});
document.getElementById("studyTrack").addEventListener("change", () => {
  flashTrack = document.getElementById("studyTrack").value;
  flashIdx = 0;
  flashFlipped = false;
  renderFlash();
});

/* ================= 7. WAYNE REPORT (Care Team, signed in only) ================= */
function reportCounts(items) {
  const c = { counsel: 0, sos: 0, staff: 0, crisis: 0, open: 0, done: 0 };
  items.forEach(it => {
    if (it.type === "counseling") c.counsel++;
    if (it.type === "sos") c.sos++;
    if (it.staff) c.staff++;
    if (it.crisis) c.crisis++;
    if (it.done) c.done++; else c.open++;
  });
  return c;
}
function buildWayneReport() {
  const items = Array.isArray(remoteItems) ? remoteItems : [];
  const now = new Date();
  const monthKey = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");
  const monthLabel = now.toLocaleString("en-US", { month: "long", year: "numeric" });
  const monthItems = items.filter(it => String(it.ts || "").slice(0, 7) === monthKey);
  const m = reportCounts(monthItems);
  const a = reportCounts(items);
  const fmt = c => "Counseling: " + c.counsel + ". Don't Quit SOS: " + c.sos +
    ". Staff: " + c.staff + ". Crisis flags: " + c.crisis +
    ". Open: " + c.open + ". Completed: " + c.done + ".";
  return "Don't Quit, counts only report\n" +
    "Period: " + monthLabel + " (this month) and all time\n\n" +
    "This month: " + fmt(m) + "\n" +
    "All time: " + fmt(a) + "\n\n" +
    "Visit counts come from the app counter and are added to the monthly report. No names or message content are included.";
}
const _renderRemoteV3 = renderRemote;
renderRemote = async function () {
  await _renderRemoteV3();
  const box = document.getElementById("wayneReportBox");
  if (box) box.hidden = !(LIVE && getSession() && Array.isArray(remoteItems));
};
const _openCareV3 = openCare;
openCare = function () {
  _openCareV3();
  const box = document.getElementById("wayneReportBox");
  if (box && !(LIVE && getSession())) box.hidden = true;
};
document.getElementById("reportBtn").addEventListener("click", () => {
  const ta = document.getElementById("reportText");
  ta.value = buildWayneReport();
  ta.hidden = false;
  document.getElementById("reportCopyBtn").hidden = false;
  document.getElementById("reportCopiedNote").hidden = true;
});
document.getElementById("reportCopyBtn").addEventListener("click", async () => {
  const ta = document.getElementById("reportText");
  const note = document.getElementById("reportCopiedNote");
  try { await navigator.clipboard.writeText(ta.value); note.hidden = false; }
  catch (e) {
    ta.hidden = false; ta.select();
    try { document.execCommand("copy"); note.hidden = false; } catch (e2) { /* clipboard blocked */ }
  }
});

/* ---------------- v3 init ---------------- */
buildJobBlocks();
fillTrackSelect(document.getElementById("resTarget"), ["other", "notsure"]);
fillTrackSelect(document.getElementById("decTrack"), ["other", "notsure"]);
fillTrackSelect(document.getElementById("intTrack"), ["general"]);
document.getElementById("intTrack").value = "general";
fillTrackSelect(document.getElementById("studyTrack"), []);
loadResumeForm();
renderSkillChips();
renderSteps();
renderHelp();
renderInterview();
renderDec();
renderStudy();
renderFlash();
