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
  back: "← Back",
  carrying: "What are you carrying?",
  carryingPh: "Write it in your own words. One honest line is enough.",
  nameOpt: "Your name (optional)",
  phoneOpt: "Phone (optional)",
  reachNote: "Only share your phone if you want Pastor to reach you. Pastor reads every request himself and replies personally within one business day.",
  prayBtn: "Pray with me",
  needErr: "Please write a few words about what you're carrying, so we can pray with you.",
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
  n_talk: "Share your name and phone if you can. Pastor or a care team member will reach out to listen — not to judge.",
  sosReach: "Only share your phone so the care team can reach you. Someone will reach out as soon as we can.",
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
  typeCounsel: "Talk to Pastor", typeSos: "Don't Quit", barrierLabel: "Barrier", needLabel: "Need"
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
  back: "← Atrás",
  carrying: "¿Qué llevas en el corazón?",
  carryingPh: "Escríbelo con tus palabras. Una línea sincera es suficiente.",
  nameOpt: "Tu nombre (opcional)",
  phoneOpt: "Teléfono (opcional)",
  reachNote: "Comparte tu teléfono solo si quieres que el Pastor te contacte. El Pastor lee cada solicitud personalmente y responde en un día laborable.",
  prayBtn: "Ora conmigo",
  needErr: "Escribe unas palabras sobre lo que llevas, para que podamos orar contigo.",
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
  n_talk: "Comparte tu nombre y teléfono si puedes. El Pastor o alguien del equipo te contactará para escucharte, sin juzgarte.",
  sosReach: "Comparte tu teléfono solo para que el equipo pueda contactarte. Alguien se comunicará contigo lo antes posible.",
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
  typeCounsel: "Habla con el Pastor", typeSos: "No te rindas", barrierLabel: "Obstáculo", needLabel: "Petición"
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
  back: "← Retour",
  carrying: "Qu'est-ce que vous portez ?",
  carryingPh: "Écrivez-le avec vos mots. Une phrase honnête suffit.",
  nameOpt: "Votre nom (facultatif)",
  phoneOpt: "Téléphone (facultatif)",
  reachNote: "Partagez votre numéro seulement si vous voulez que le Pasteur vous contacte. Le Pasteur lit chaque demande lui-même et répond personnellement sous un jour ouvrable.",
  prayBtn: "Priez avec moi",
  needErr: "Écrivez quelques mots sur ce que vous portez, pour que nous puissions prier avec vous.",
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
  n_talk: "Partagez votre nom et votre numéro si vous pouvez. Le Pasteur ou un membre de l'équipe vous contactera pour écouter — sans juger.",
  sosReach: "Partagez votre numéro seulement pour que l'équipe puisse vous joindre. Quelqu'un vous contactera dès que possible.",
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
  typeCounsel: "Parler au Pasteur", typeSos: "N'abandonne pas", barrierLabel: "Obstacle", needLabel: "Demande"
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
  back: "← Retounen",
  carrying: "Kisa w ap pote?",
  carryingPh: "Ekri l ak pwòp mo w. Yon sèl fraz onèt sifi.",
  nameOpt: "Non w (si w vle)",
  phoneOpt: "Telefòn (si w vle)",
  reachNote: "Pataje telefòn ou sèlman si w vle Pastè a kontakte w. Pastè a li chak demann li menm, epi li reponn an pèsòn nan yon jou travay.",
  prayBtn: "Priye ak mwen",
  needErr: "Tanpri ekri kèk mo sou sa w ap pote a, pou nou ka priye ak ou.",
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
  n_talk: "Pataje non w ak telefòn ou si w kapab. Pastè a oswa yon moun nan ekip la ap kontakte w pou koute w — san jije w.",
  sosReach: "Pataje telefòn ou sèlman pou ekip la ka jwenn ou. Yon moun ap kontakte w osito posib.",
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
  typeCounsel: "Pale ak Pastè a", typeSos: "Pa lage", barrierLabel: "Obstak", needLabel: "Demann"
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
  back: "← Voltar",
  carrying: "O que você está carregando?",
  carryingPh: "Escreva com suas palavras. Uma frase honesta é suficiente.",
  nameOpt: "Seu nome (opcional)",
  phoneOpt: "Telefone (opcional)",
  reachNote: "Compartilhe seu telefone só se quiser que o Pastor entre em contato. O Pastor lê cada pedido pessoalmente e responde em um dia útil.",
  prayBtn: "Ore comigo",
  needErr: "Escreva algumas palavras sobre o que você carrega, para podermos orar com você.",
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
  n_talk: "Compartilhe seu nome e telefone se puder. O Pastor ou alguém da equipe vai procurar você para ouvir — sem julgar.",
  sosReach: "Compartilhe seu telefone só para a equipe poder te procurar. Alguém entrará em contato assim que possível.",
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
  typeCounsel: "Fale com o Pastor", typeSos: "Não desista", barrierLabel: "Obstáculo", needLabel: "Pedido"
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
  back: "رجوع",
  carrying: "ما الذي تحمله في قلبك؟",
  carryingPh: "اكتبه بكلماتك. جملة واحدة صادقة تكفي.",
  nameOpt: "اسمك (اختياري)",
  phoneOpt: "الهاتف (اختياري)",
  reachNote: "شارك هاتفك فقط إذا أردت أن يتواصل معك الراعي. الراعي يقرأ كل طلب بنفسه ويرد شخصيًا خلال يوم عمل واحد.",
  prayBtn: "صلِّ معي",
  needErr: "من فضلك اكتب بضع كلمات عما تحمله، حتى نصلّي معك.",
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
  n_talk: "شارك اسمك وهاتفك إن استطعت. سيتواصل معك الراعي أو أحد أعضاء الفريق للاستماع — دون حكم.",
  sosReach: "شارك هاتفك فقط حتى يتمكن الفريق من الوصول إليك. سيتواصل معك أحدنا في أقرب وقت ممكن.",
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
  typeCounsel: "تحدث إلى الراعي", typeSos: "لا تستسلم", barrierLabel: "العائق", needLabel: "الطلب"
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

/* ---------------- Screens & language ---------------- */
const SCREENS = ["lang", "home", "talk", "sos", "care"];
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
  document.getElementById("prayerText").textContent = currentPrayer.prayer;
  document.getElementById("prayerVerse").textContent = "“" + currentPrayer.verse.text + "”";
  document.getElementById("prayerRef").textContent = currentPrayer.verse.ref;
  document.getElementById("voiceNote").hidden = true;
  document.getElementById("prayerResult").hidden = false;

  const item = { id: Date.now(), type: "counseling", barrier: null, need: rawNeed, name, phone,
           language: lang, staff: staffMode, crisis, done: false, ts: new Date().toISOString() };
  deliver(item);
  bump("counsel");
  if (staffMode) bump("staff");
  if (crisis) bump("crisis");
  document.getElementById("savedNote").hidden = false;
  document.getElementById("prayerResult").scrollIntoView({ behavior: "smooth", block: "start" });
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
  const phone = document.getElementById("sosPhone").value.replace(/\s+/g, " ").trim().slice(0, 30);
  const item = { id: Date.now(), type: "sos", barrier: selectedBarrier, need: "", name, phone,
           language: lang, staff: staffMode, crisis: false, done: false, ts: new Date().toISOString() };
  deliver(item);
  bump("sos");
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
    const res = await fetch(DQ_CONFIG.supabaseUrl + "/auth/v1/otp", {
      method: "POST", headers: sbHeaders(),
      body: JSON.stringify({ email: DQ_CONFIG.careEmail, create_user: false,
        options: { emailRedirectTo: "https://splitseedent.github.io/dont-quit/" } })
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

/* ---------------- Boot ---------------- */
captureSessionFromHash();
if (lang && I18N[lang]) { applyLang(); show("home"); }
else { lang = "en"; show("lang"); }
