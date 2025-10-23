import React, { useState, useRef } from "react";
import {
  Sparkles,
  Heart,
  Music,
  Users,
  BookOpen,
  Lightbulb,
  Megaphone,
  Palette,
  HandHeart,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Share2,
  Download,
  ChevronRight,
  Award,
} from "lucide-react";
import html2canvas from "html2canvas";

const DonesApp = () => {
  const [currentStep, setCurrentStep] = useState("welcome");
  const [userName, setUserName] = useState("");
  const [completedModules, setCompletedModules] = useState([]);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);
  const certificadoRef = useRef(null);
  const [puntos, setPuntos] = useState(0);
  const [badges, setBadges] = useState([]);
  const [mostrarBadge, setMostrarBadge] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const todosLosBadges = [
    {
      id: "bienvenida",
      nombre: "Primer Paso",
      descripcion: "¡Iniciaste tu viaje de descubrimiento!",
      icono: "👋",
      color: "bg-blue-500",
      puntos: 10,
    },
    {
      id: "modulo1",
      nombre: "Estudiante de la Palabra",
      descripcion: "Completaste: Introducción a los Dones",
      icono: "📖",
      color: "bg-green-500",
      puntos: 50,
    },
    {
      id: "modulo2",
      nombre: "Explorador de Talentos",
      descripcion: "Completaste: Tipos de Inteligencia",
      icono: "🧠",
      color: "bg-purple-500",
      puntos: 50,
    },
    {
      id: "modulo3",
      nombre: "Buscador de Propósito",
      descripcion: "Completaste: Cómo Descubrir tus Dones",
      icono: "🎯",
      color: "bg-orange-500",
      puntos: 50,
    },
    {
      id: "mitad_test",
      nombre: "A Mitad de Camino",
      descripcion: "Respondiste la mitad del test",
      icono: "⭐",
      color: "bg-yellow-500",
      puntos: 25,
    },
    {
      id: "test_completo",
      nombre: "Descubridor de Dones",
      descripcion: "¡Completaste el test completo!",
      icono: "🏆",
      color: "bg-gold-500",
      puntos: 100,
    },
    {
      id: "compartir",
      nombre: "Embajador del Reino",
      descripcion: "Compartiste tus resultados",
      icono: "📣",
      color: "bg-pink-500",
      puntos: 30,
    },
    {
      id: "certificado",
      nombre: "Graduado Oficial",
      descripcion: "Descargaste tu certificado",
      icono: "🎓",
      color: "bg-indigo-500",
      puntos: 50,
    },
  ];

  const otorgarBadge = (badgeId) => {
    if (!badges.includes(badgeId)) {
      const badge = todosLosBadges.find((b) => b.id === badgeId);
      if (badge) {
        setBadges([...badges, badgeId]);
        setPuntos(puntos + badge.puntos);
        setMostrarBadge(badge);
        setTimeout(() => setMostrarBadge(null), 3000);
      }
    }
  };

  const donesEspirituales = [
    {
      id: "profecia",
      nombre: "Profecía",
      icon: Megaphone,
      color: "bg-purple-600",
      colorLight: "bg-purple-100",
      textColor: "text-purple-700",
      descripcion:
        "Capacidad para proclamar la verdad de Dios con autoridad y claridad",
      versiculo: "Romanos 12:6",
      ministerios: ["Predicación", "Consejería profética", "Intercesión"],
      caracteristicas: [
        "Hablas con convicción",
        "Denuncias la injusticia",
        "Llamas al arrepentimiento",
      ],
    },
    {
      id: "servicio",
      nombre: "Servicio",
      icon: HandHeart,
      color: "bg-green-600",
      colorLight: "bg-green-100",
      textColor: "text-green-700",
      descripcion:
        "Disposición natural para ayudar y cubrir necesidades prácticas",
      versiculo: "Romanos 12:7",
      ministerios: ["Logística", "Hospitalidad", "Mantenimiento", "Ujieres"],
      caracteristicas: [
        "Detectas necesidades",
        "Te gusta ayudar",
        "Trabajas detrás de escena",
      ],
    },
    {
      id: "ensenanza",
      nombre: "Enseñanza",
      icon: BookOpen,
      color: "bg-blue-600",
      colorLight: "bg-blue-100",
      textColor: "text-blue-700",
      descripcion:
        "Habilidad para explicar la Palabra de Dios de manera clara y aplicable",
      versiculo: "Romanos 12:7",
      ministerios: ["Escuela Dominical", "Discipulado", "Grupos pequeños"],
      caracteristicas: [
        "Explicas bien conceptos",
        "Te gusta estudiar",
        "Ayudas a entender la Biblia",
      ],
    },
    {
      id: "exhortacion",
      nombre: "Exhortación",
      icon: Heart,
      color: "bg-rose-600",
      colorLight: "bg-rose-100",
      textColor: "text-rose-700",
      descripcion: "Don para animar, consolar y fortalecer a otros",
      versiculo: "Romanos 12:8",
      ministerios: ["Consejería", "Mentoría", "Visitación"],
      caracteristicas: [
        "Animas a otros",
        "Das palabras oportunas",
        "Restauras esperanza",
      ],
    },
    {
      id: "dar",
      nombre: "Don de Dar",
      icon: Award,
      color: "bg-yellow-600",
      colorLight: "bg-yellow-100",
      textColor: "text-yellow-700",
      descripcion: "Generosidad especial para dar recursos con alegría",
      versiculo: "Romanos 12:8",
      ministerios: ["Sostenimiento", "Proyectos", "Ayuda social"],
      caracteristicas: [
        "Eres generoso",
        "Buscas suplir necesidades",
        "Das con alegría",
      ],
    },
    {
      id: "liderazgo",
      nombre: "Liderazgo",
      icon: Users,
      color: "bg-indigo-600",
      colorLight: "bg-indigo-100",
      textColor: "text-indigo-700",
      descripcion: "Capacidad para dirigir, organizar y motivar a otros",
      versiculo: "Romanos 12:8",
      ministerios: [
        "Coordinación",
        "Líderes de célula",
        "Dirección de ministerios",
      ],
      caracteristicas: [
        "Organizas bien",
        "Motivas equipos",
        "Tomas iniciativa",
      ],
    },
    {
      id: "misericordia",
      nombre: "Misericordia",
      icon: Heart,
      color: "bg-pink-600",
      colorLight: "bg-pink-100",
      textColor: "text-pink-700",
      descripcion: "Compasión profunda hacia los que sufren",
      versiculo: "Romanos 12:8",
      ministerios: [
        "Visitas hospitalarias",
        "Ayuda social",
        "Cuidado pastoral",
      ],
      caracteristicas: [
        "Gran empatía",
        "Sientes el dolor ajeno",
        "Consuelas efectivamente",
      ],
    },
    {
      id: "sabiduria",
      nombre: "Palabra de Sabiduría",
      icon: Lightbulb,
      color: "bg-amber-600",
      colorLight: "bg-amber-100",
      textColor: "text-amber-700",
      descripcion:
        "Habilidad para aplicar conocimiento divino a situaciones específicas",
      versiculo: "1 Corintios 12:8",
      ministerios: [
        "Consejería",
        "Resolución de conflictos",
        "Toma de decisiones",
      ],
      caracteristicas: [
        "Das buenos consejos",
        "Ves soluciones",
        "Disciernes situaciones",
      ],
    },
    {
      id: "conocimiento",
      nombre: "Palabra de Conocimiento",
      icon: BookOpen,
      color: "bg-cyan-600",
      colorLight: "bg-cyan-100",
      textColor: "text-cyan-700",
      descripcion: "Revelación sobrenatural de información para edificación",
      versiculo: "1 Corintios 12:8",
      ministerios: ["Oración", "Consejería", "Intercesión"],
      caracteristicas: [
        "Percibes situaciones",
        "Dios te revela cosas",
        "Confirmas palabras",
      ],
    },
    {
      id: "fe",
      nombre: "Fe",
      icon: Sparkles,
      color: "bg-violet-600",
      colorLight: "bg-violet-100",
      textColor: "text-violet-700",
      descripcion: "Confianza extraordinaria en Dios para lo imposible",
      versiculo: "1 Corintios 12:9",
      ministerios: ["Oración", "Proyectos de fe", "Misiones"],
      caracteristicas: [
        "Crees firmemente",
        "Inspiras confianza",
        "Ves milagros",
      ],
    },
    {
      id: "sanidad",
      nombre: "Sanidades",
      icon: Heart,
      color: "bg-red-600",
      colorLight: "bg-red-100",
      textColor: "text-red-700",
      descripcion: "Instrumento de Dios para restaurar salud",
      versiculo: "1 Corintios 12:9",
      ministerios: ["Oración por enfermos", "Ministerio de sanidad"],
      caracteristicas: [
        "Oras por sanidad",
        "Ves restauración",
        "Fe para milagros",
      ],
    },
    {
      id: "milagros",
      nombre: "Hacer Milagros",
      icon: Sparkles,
      color: "bg-fuchsia-600",
      colorLight: "bg-fuchsia-100",
      textColor: "text-fuchsia-700",
      descripcion: "Realizar obras sobrenaturales que glorifican a Dios",
      versiculo: "1 Corintios 12:10",
      ministerios: ["Evangelismo", "Oración", "Campañas"],
      caracteristicas: [
        "Fe extraordinaria",
        "Ves lo imposible",
        "Dios te usa poderosamente",
      ],
    },
    {
      id: "discernimiento",
      nombre: "Discernimiento de Espíritus",
      icon: Lightbulb,
      color: "bg-orange-600",
      colorLight: "bg-orange-100",
      textColor: "text-orange-700",
      descripcion:
        "Capacidad para distinguir entre lo divino, humano y demoníaco",
      versiculo: "1 Corintios 12:10",
      ministerios: ["Consejería", "Liberación", "Protección espiritual"],
      caracteristicas: [
        "Identificas origen espiritual",
        "Proteges al rebaño",
        "Detectas engaño",
      ],
    },
    {
      id: "musica",
      nombre: "Música y Adoración",
      icon: Music,
      color: "bg-emerald-600",
      colorLight: "bg-emerald-100",
      textColor: "text-emerald-700",
      descripcion:
        "Talento para llevar a otros a la presencia de Dios mediante la música",
      versiculo: "Salmos 150",
      ministerios: ["Alabanza", "Coro", "Instrumentos", "Producción"],
      caracteristicas: [
        "Te apasiona la música",
        "Adoras genuinamente",
        "Ministras con canciones",
      ],
    },
    {
      id: "creatividad",
      nombre: "Creatividad Artística",
      icon: Palette,
      color: "bg-teal-600",
      colorLight: "bg-teal-100",
      textColor: "text-teal-700",
      descripcion:
        "Habilidad para crear expresiones artísticas que glorifican a Dios",
      versiculo: "Éxodo 31:3-5",
      ministerios: ["Diseño", "Medios", "Drama", "Decoración"],
      caracteristicas: [
        "Eres creativo",
        "Expresas visualmente",
        "Comunicas con arte",
      ],
    },
    {
      id: "evangelismo",
      nombre: "Evangelismo",
      icon: Megaphone,
      color: "bg-red-500",
      colorLight: "bg-red-100",
      textColor: "text-red-700",
      descripcion: "Pasión especial por compartir el evangelio y ganar almas",
      versiculo: "Efesios 4:11",
      ministerios: ["Alcance", "Evangelismo", "Testimonio", "Misiones"],
      caracteristicas: [
        "Compartes tu fe naturalmente",
        "Ves conversiones",
        "Te apasionan los perdidos",
      ],
    },
  ];

  const modulos = [
    {
      id: "modulo1",
      titulo: "Introducción a los Dones",
      icono: BookOpen,
      color: "bg-blue-500",
      contenido: {
        versiculo:
          '"Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios" - 1 Pedro 4:10',
        puntos: [
          "Todo ser humano, creyente o no, tiene al menos un talento para desarrollar",
          "Los dones espirituales son repartidos solo a los hijos de Dios",
          "Hay tres listas principales de dones en la Biblia: Romanos 12:6-8, 1 Corintios 12:4-11, 1 Corintios 12:28",
          "Los dones son para edificación del cuerpo de Cristo, no para gloria personal",
        ],
      },
    },
    {
      id: "modulo2",
      titulo: "Tipos de Inteligencia",
      icono: Lightbulb,
      color: "bg-purple-500",
      contenido: {
        titulo: "Las 8 Inteligencias Múltiples de Howard Gardner",
        tipos: [
          {
            nombre: "Inteligencia Corporal",
            descripcion:
              "Dominio del cuerpo en forma inicial. Deportistas, bailarines, cirujanos",
            habilidad: "Coordinación y composición",
          },
          {
            nombre: "Inteligencia Lógico-Matemática",
            descripcion: "Capacidad para analizar problemas matemáticamente",
            habilidad: "Utilizan el método científico",
          },
          {
            nombre: "Inteligencia Musical",
            descripcion: "Componer y apreciar música. Compositores, músicos",
            habilidad: "Componen y componen",
          },
          {
            nombre: "Inteligencia Lingüística",
            descripcion: "Muy bueno uso del lenguaje. Escritores, oradores",
            habilidad: "Utilizan el lenguaje para alcanzar metas",
          },
          {
            nombre: "Inteligencia Interpersonal",
            descripcion:
              "Habilidades para comprender y dirigir personas. Está relacionado a la empatía",
            habilidad: "Liderazgo",
          },
          {
            nombre: "Inteligencia Intrapersonal",
            descripcion:
              "Capacidad para comprender las interacciones. Conocer sus fortalezas y debilidades",
            habilidad: "Autoconocimiento",
          },
          {
            nombre: "Inteligencia Naturalista",
            descripcion:
              "Se fija en los detalles y agregar. Se agrupa a los distintos ámbitos",
            habilidad: "Observación",
          },
          {
            nombre: "Inteligencia Espacial",
            descripcion:
              "Esta inteligencia está relacionada con crear mentalmente. Piensa en tres dimensiones",
            habilidad: "Visualización y pensamiento 3D",
          },
        ],
      },
    },
    {
      id: "modulo3",
      titulo: "Cómo Descubrir tus Dones",
      icono: Sparkles,
      color: "bg-green-500",
      contenido: {
        pasos: [
          {
            numero: 1,
            titulo: "Preséntate",
            texto:
              "En primer lugar, debes seguir el consejo de Pablo al joven Timoteo",
            versiculo:
              '"Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad" - 2 Timoteo 2:15',
          },
          {
            numero: 2,
            titulo: "Congrégarte",
            texto:
              "Debes congregarte, ya que los dones son para edificación del cuerpo de Cristo. Los diversos ministerios que tiene tu iglesia son los espacios para el desarrollo de los dones",
            versiculo: "Ora para que Dios te dé oportunidades de servicio",
          },
          {
            numero: 3,
            titulo: "Estar dispuesto",
            texto:
              "Es probable que lleve mucho tiempo descubrir tus dones, porque Dios se irá revelando en forma progresiva. Esta primera etapa será exploratoria para ti, deberás ponerte a prueba en distintas áreas",
            versiculo:
              '"Así que, si alguno se limpia de estas cosas será un vaso para honra, consagrado y útil para el Señor, preparado para toda buena obra" - 2 Timoteo 2:21',
          },
          {
            numero: 4,
            titulo: "Escucha la confirmación",
            texto:
              'Con el ejercicio de ciertas tareas irás teniendo confirmación de parte de la iglesia y de parte de Dios en tu ser interior. Las personas manifestarán haber sido bendecidas y Dios te dirá: "buen siervo y fiel"',
            versiculo:
              'Dios te asignará nuevos desafíos, progresivamente. Juan 15:2 dice: "...toda rama que está llevando fruto, la limpia para que lleve más fruto"',
          },
        ],
      },
    },
  ];

  const preguntasTest = [
    {
      id: 1,
      pregunta: "¿Qué prefieres hacer en tu tiempo libre en la iglesia?",
      opciones: [
        {
          texto: "Estudiar la Biblia profundamente y compartir lo que aprendo",
          dones: ["ensenanza", "conocimiento"],
        },
        {
          texto: "Orar por otros y ver a Dios obrar milagros",
          dones: ["fe", "sanidad", "milagros"],
        },
        {
          texto: "Organizar eventos y coordinar equipos",
          dones: ["liderazgo", "servicio"],
        },
        {
          texto:
            "Animar y consolar a personas que están pasando momentos difíciles",
          dones: ["exhortacion", "misericordia"],
        },
        {
          texto: "Crear contenido, música o arte para glorificar a Dios",
          dones: ["musica", "creatividad"],
        },
        {
          texto: "Compartir el evangelio con personas que no conocen a Jesús",
          dones: ["evangelismo", "profecia"],
        },
      ],
    },
    {
      id: 2,
      pregunta:
        "Cuando ves una necesidad en la iglesia o comunidad, tu primera reacción es:",
      opciones: [
        {
          texto: "Buscar en la Biblia qué dice Dios sobre esa situación",
          dones: ["ensenanza", "sabiduria"],
        },
        {
          texto:
            "Orar fervientemente para que Dios intervenga sobrenaturalmente",
          dones: ["fe", "milagros"],
        },
        {
          texto: "Organizar un plan de acción y movilizar personas",
          dones: ["liderazgo", "exhortacion"],
        },
        {
          texto: "Acercarme personalmente a ayudar de forma práctica",
          dones: ["servicio", "misericordia"],
        },
        {
          texto: "Identificar si hay algo espiritual detrás de la situación",
          dones: ["discernimiento", "sabiduria"],
        },
        {
          texto: "Compartir cómo Dios puede transformar esa situación",
          dones: ["evangelismo", "profecia"],
        },
      ],
    },
    {
      id: 3,
      pregunta: "¿Qué actividad te genera más satisfacción espiritual?",
      opciones: [
        {
          texto: "Ver a alguien entender una verdad bíblica que le expliqué",
          dones: ["ensenanza"],
        },
        {
          texto: "Presenciar un milagro o sanidad en respuesta a la oración",
          dones: ["fe", "sanidad", "milagros"],
        },
        {
          texto: "Ver un proyecto o ministerio funcionar exitosamente",
          dones: ["liderazgo", "dar"],
        },
        {
          texto: "Ver a alguien recuperar su esperanza y fortaleza",
          dones: ["exhortacion", "misericordia"],
        },
        {
          texto: "Adorar a Dios y ver a otros entrar en Su presencia",
          dones: ["musica"],
        },
        {
          texto: "Ver a alguien entregar su vida a Cristo",
          dones: ["evangelismo"],
        },
      ],
    },
    {
      id: 4,
      pregunta: "Las personas generalmente acuden a ti cuando necesitan:",
      opciones: [
        {
          texto: "Entender un pasaje bíblico o doctrina",
          dones: ["ensenanza", "conocimiento"],
        },
        { texto: "Oración por sanidad o milagros", dones: ["fe", "sanidad"] },
        {
          texto: "Que organices o lideres algo importante",
          dones: ["liderazgo"],
        },
        {
          texto: "Consuelo, ánimo o un abrazo comprensivo",
          dones: ["misericordia", "exhortacion"],
        },
        {
          texto: "Consejo sabio para tomar decisiones",
          dones: ["sabiduria", "discernimiento"],
        },
        {
          texto: "Ayuda práctica con tareas o necesidades",
          dones: ["servicio", "dar"],
        },
      ],
    },
    {
      id: 5,
      pregunta: "¿Cuál de estas afirmaciones te describe mejor?",
      opciones: [
        {
          texto: "Me encanta estudiar y profundizar en las Escrituras",
          dones: ["ensenanza", "conocimiento"],
        },
        {
          texto: "Creo firmemente que nada es imposible para Dios",
          dones: ["fe", "milagros"],
        },
        {
          texto: "Tengo facilidad para ver el panorama completo y dirigir",
          dones: ["liderazgo", "sabiduria"],
        },
        {
          texto: "Siento profundamente el dolor de otros como si fuera mío",
          dones: ["misericordia"],
        },
        {
          texto: "Me gusta confrontar el pecado y llamar al arrepentimiento",
          dones: ["profecia", "discernimiento"],
        },
        {
          texto: "Busco constantemente oportunidades para compartir mi fe",
          dones: ["evangelismo"],
        },
      ],
    },
    {
      id: 6,
      pregunta: "En un culto o reunión, te sientes más usado por Dios cuando:",
      opciones: [
        {
          texto: "Enseño o explico la Palabra durante el estudio",
          dones: ["ensenanza"],
        },
        {
          texto: "Oro por los enfermos o necesitados",
          dones: ["sanidad", "fe"],
        },
        {
          texto: "Dirijo la adoración o toco un instrumento",
          dones: ["musica"],
        },
        {
          texto: "Sirvo detrás de escena asegurando que todo funcione",
          dones: ["servicio"],
        },
        {
          texto: "Doy una palabra profética o de ánimo",
          dones: ["profecia", "exhortacion"],
        },
        {
          texto: "Percibo cuando algo no está bien espiritualmente",
          dones: ["discernimiento"],
        },
      ],
    },
    {
      id: 7,
      pregunta: "Tu mayor frustración en el ministerio sería:",
      opciones: [
        {
          texto: "Que la gente no entienda o aplique la verdad bíblica",
          dones: ["ensenanza"],
        },
        {
          texto: "La falta de fe para ver milagros y sanidades",
          dones: ["fe", "milagros"],
        },
        {
          texto: "El desorden y la falta de planificación",
          dones: ["liderazgo", "servicio"],
        },
        {
          texto: "Ver personas sufriendo sin que nadie las consuele",
          dones: ["misericordia", "exhortacion"],
        },
        {
          texto: "Que la iglesia no salga a evangelizar",
          dones: ["evangelismo"],
        },
        {
          texto: "Que no se discierna el pecado o el engaño",
          dones: ["profecia", "discernimiento"],
        },
      ],
    },
    {
      id: 8,
      pregunta: "¿Qué te gustaría que Dios dijera de ti al final de tu vida?",
      opciones: [
        { texto: "Enseñaste fielmente mi Palabra", dones: ["ensenanza"] },
        {
          texto: "Creíste en mí para lo imposible",
          dones: ["fe", "milagros", "sanidad"],
        },
        { texto: "Lideraste mi pueblo con integridad", dones: ["liderazgo"] },
        {
          texto: "Fuiste mis manos y pies para los que sufrían",
          dones: ["misericordia", "servicio"],
        },
        {
          texto: "Llevaste a muchos al arrepentimiento",
          dones: ["profecia", "evangelismo"],
        },
        { texto: "Protegiste mi rebaño del engaño", dones: ["discernimiento"] },
      ],
    },
  ];

  const calcularResultadosTest = () => {
    const puntajes = {};
    donesEspirituales.forEach((don) => (puntajes[don.id] = 0));

    Object.values(answers).forEach((answer) => {
      answer.dones.forEach((don) => {
        puntajes[don] = (puntajes[don] || 0) + 1;
      });
    });

    const topDones = Object.entries(puntajes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([donId]) => donesEspirituales.find((d) => d.id === donId))
      .filter((don) => don !== undefined);

    setResults(topDones);
    setCurrentStep("results");
  };

  const handleAnswerTest = (preguntaId, opcion, opcionIndex) => {
    // Marcar visualmente la opción seleccionada
    setSelectedOption(opcionIndex);

    // Guardar la respuesta
    setAnswers({ ...answers, [preguntaId]: opcion });

    // Badge por llegar a la mitad
    if (preguntaId === 4) {
      otorgarBadge("mitad_test");
    }

    // Esperar un momento para que se vea la selección antes de cambiar de pregunta
    setTimeout(() => {
      const siguientePregunta =
        preguntasTest.findIndex((p) => p.id === preguntaId) + 1;
      if (siguientePregunta < preguntasTest.length) {
        setCurrentStep(`test-${siguientePregunta + 1}`);
        // Resetear la selección visual para la siguiente pregunta
        setSelectedOption(null);
      } else {
        calcularResultadosTest();
        otorgarBadge("test_completo");
        setSelectedOption(null);
      }
    }, 300); // 300ms para dar feedback visual
  };

  const compartirResultados = () => {
    const texto = `¡Descubrí mis dones espirituales! 🎁✨\n\nMis principales dones son:\n${results
      .map((d, i) => `${i + 1}. ${d.nombre}`)
      .join("\n")}\n\n🎯 Puntos obtenidos: ${puntos}\n🏆 Badges: ${
      badges.length
    }/${todosLosBadges.length}\n\n¿Quieres descubrir los tuyos?`;

    if (navigator.share) {
      navigator
        .share({
          title: "Mis Dones Espirituales",
          text: texto,
        })
        .then(() => {
          otorgarBadge("compartir");
        })
        .catch(() => {
          // Si cancela el share, no pasa nada
        });
    } else {
      navigator.clipboard.writeText(texto);
      otorgarBadge("compartir");
      alert("✅ ¡Texto copiado! Pégalo en tus redes sociales");
    }
  };

  const descargarCertificado = async () => {
    try {
      // Mostrar el certificado temporalmente
      const originalStep = currentStep;
      setCurrentStep("certificado");

      // Esperar a que se renderice completamente
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const elemento = certificadoRef.current;
      if (!elemento) {
        throw new Error("No se pudo encontrar el certificado");
      }

      // Capturar el certificado como imagen de alta calidad para WhatsApp
      const canvas = await html2canvas(elemento, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Convertir a imagen PNG
      const imgData = canvas.toDataURL("image/png", 1.0);

      // Crear un enlace temporal para descargar la imagen
      const link = document.createElement("a");
      link.download = `Mis_Dones_Espirituales_${userName.replace(/\s+/g, "_")}.png`;
      link.href = imgData;
      link.click();

      // Otorgar badge
      otorgarBadge("certificado");

      // Volver a resultados
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCurrentStep(originalStep);

      alert("✅ ¡Imagen descargada! Ahora puedes compartirla en WhatsApp 📲");
    } catch (error) {
      console.error("Error al generar certificado:", error);
      alert(
        "❌ Hubo un error al generar la imagen. Por favor, intenta de nuevo."
      );
      setCurrentStep("results");
    }
  };

  // Componente de puntos y badges (barra superior)
  const BarraSuperior = () => (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-lg">{puntos} pts</span>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Award className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-lg">
              {badges.length}/{todosLosBadges.length}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Hola,</p>
          <p className="font-bold text-gray-800">{userName || "Invitado"}</p>
        </div>
      </div>
    </div>
  );

  // Notificación de badge
  const NotificacionBadge = () => {
    if (!mostrarBadge) return null;

    return (
      <div className="fixed top-24 right-4 z-50 animate-bounce">
        <div
          className={`${mostrarBadge.color} text-white rounded-2xl shadow-2xl p-6 max-w-sm`}
        >
          <div className="flex items-start gap-4">
            <div className="text-6xl">{mostrarBadge.icono}</div>
            <div>
              <h3 className="font-bold text-xl mb-1">¡Nuevo Badge!</h3>
              <p className="font-semibold mb-1">{mostrarBadge.nombre}</p>
              <p className="text-sm opacity-90">{mostrarBadge.descripcion}</p>
              <p className="text-lg font-bold mt-2">
                +{mostrarBadge.puntos} puntos
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // PANTALLA DE BIENVENIDA
  if (currentStep === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <Sparkles className="w-24 h-24 mx-auto mb-6 text-yellow-400 animate-pulse" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Descubre tus Dones Espirituales
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Un viaje de autodescubrimiento para servir mejor en el Reino de Dios
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 mb-8 text-left rounded-lg">
            <p className="text-sm text-gray-700 italic">
              <strong className="text-purple-700">Versículo clave:</strong> "Cada
              uno según el don que ha recibido, minístrelo a los otros, como
              buenos administradores de la multiforme gracia de Dios" - 1 Pedro
              4:10
            </p>
          </div>

          <div className="mb-8">
            <label className="block text-left text-gray-700 font-semibold mb-2">
              ¿Cómo te llamas? 👋
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Escribe tu nombre"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
            />
          </div>

          <button
            onClick={() => {
              setCurrentStep("intro");
              otorgarBadge("bienvenida");
            }}
            disabled={!userName.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Comenzar mi Ruta 🚀
          </button>
        </div>
      </div>
    );
  }

  // PANTALLA DE INTRODUCCIÓN
  if (currentStep === "intro") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 py-12">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Hola {userName}! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bienvenido a tu ruta de descubrimiento. Este viaje tiene 3 módulos
            de aprendizaje y un test final.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {modulos.map((modulo, index) => {
              const IconoModulo = modulo.icono;
              const completado = completedModules.includes(modulo.id);

              return (
                <div
                  key={modulo.id}
                  className={`${
                    completado
                      ? "bg-green-50 border-green-500"
                      : "bg-gray-50 border-gray-300"
                  } border-2 rounded-xl p-4 text-center relative`}
                >
                  {completado && (
                    <CheckCircle className="absolute top-2 right-2 w-6 h-6 text-green-600" />
                  )}
                  <div
                    className={`${modulo.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <IconoModulo className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Módulo {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600">{modulo.titulo}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-gray-700">
              <strong>📚 Lo que aprenderás:</strong> Fundamentos bíblicos, tipos
              de inteligencia, cómo descubrir tus dones, y finalmente un test
              personalizado.
            </p>
          </div>

          <button
            onClick={() => setCurrentStep("modulo1")}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            Comenzar Módulo 1
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// MÓDULO 1 - Introducción a los Dones
if (currentStep === "modulo1") {
  const modulo = modulos[0];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500 p-4 py-12">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm text-blue-600 font-semibold">
                MÓDULO 1
              </span>
              <h1 className="text-3xl font-bold text-gray-800">
                {modulo.titulo}
              </h1>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <p className="text-gray-700 italic text-lg">
              {modulo.contenido.versiculo}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Lo que debes saber:
            </h2>
            {modulo.contenido.puntos.map((punto, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{punto}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Reflexión
            </h3>
            <p className="text-gray-700">
              Los dones espirituales NO son para tu beneficio personal, sino
              para edificar el cuerpo de Cristo. Dios te los dio con un
              propósito específico.
            </p>
          </div>

          <button
            onClick={() => {
              setCompletedModules([...completedModules, "modulo1"]);
              otorgarBadge("modulo1");
              setCurrentStep("modulo2");
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            Siguiente: Tipos de Inteligencia
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// MÓDULO 2 - Tipos de Inteligencia
if (currentStep === "modulo2") {
  const modulo = modulos[1];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 p-4 py-12">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="max-w-5xl mx-auto mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm text-purple-600 font-semibold">
                MÓDULO 2
              </span>
              <h1 className="text-3xl font-bold text-gray-800">
                {modulo.titulo}
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-6">
            {modulo.contenido.titulo}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {modulo.contenido.tipos.map((tipo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {tipo.nombre}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{tipo.descripcion}</p>
                <div className="bg-white rounded-lg px-3 py-2 mt-2">
                  <span className="text-xs text-purple-700 font-semibold">
                    Habilidad:
                  </span>
                  <span className="text-xs text-gray-700 ml-2">
                    {tipo.habilidad}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-2">
              💡 ¿Por qué es importante?
            </h3>
            <p className="text-gray-700">
              Reconocer tu tipo de inteligencia te ayuda a entender cómo Dios te
              diseñó. Cada inteligencia puede ser usada para el Reino de
              diferentes maneras.
            </p>
          </div>

          <button
            onClick={() => {
              setCompletedModules([...completedModules, "modulo2"]);
              otorgarBadge("modulo2");
              setCurrentStep("modulo3");
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            Siguiente: Cómo Descubrir tus Dones
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// MÓDULO 3 - Cómo Descubrir tus Dones
if (currentStep === "modulo3") {
  const modulo = modulos[2];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-teal-500 p-4 py-12">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm text-green-600 font-semibold">
                MÓDULO 3
              </span>
              <h1 className="text-3xl font-bold text-gray-800">
                {modulo.titulo}
              </h1>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Estos son los 4 pasos prácticos para descubrir tus dones
            espirituales:
          </p>

          <div className="space-y-6 mb-8">
            {modulo.contenido.pasos.map((paso, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    {paso.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {paso.titulo}
                    </h3>
                    <p className="text-gray-700 mb-3">{paso.texto}</p>
                    {paso.versiculo && (
                      <div className="bg-white border-l-4 border-green-500 p-3 rounded">
                        <p className="text-sm text-gray-600 italic">
                          {paso.versiculo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-yellow-800 mb-3 text-xl flex items-center gap-2">
              <Award className="w-6 h-6" />
              Un propósito divino
            </h3>
            <p className="text-gray-700 mb-3">
              "Porque somos hechura de Dios, creados en Cristo Jesús para hacer
              las buenas obras que Dios preparó de antemano para que
              anduviésemos en ellas" - Efesios 2:10
            </p>
            <p className="text-gray-600 text-sm">
              Si Dios te diseñó con determinados talentos y puso en ti ciertos
              dones, es con un propósito. Todo tu potencial puesto en manos de
              Dios te llevará a lugares donde ni siquiera puedes imaginar.
            </p>
          </div>

          <button
            onClick={() => {
              setCompletedModules([...completedModules, "modulo3"]);
              otorgarBadge("modulo3");
              setCurrentStep("pre-test");
            }}
            className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            ¡Listo para el Test! 🎯
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// PANTALLA PRE-TEST
if (currentStep === "pre-test") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center mt-20">
        <div className="bg-gradient-to-br from-orange-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-12 h-12 text-orange-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Felicidades {userName}! 🎉
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Has completado los 3 módulos de aprendizaje. Ahora es momento de
          descubrir tus dones específicos.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {modulos.map((modulo, index) => {
            const IconoModulo = modulo.icono;
            return (
              <div
                key={modulo.id}
                className="bg-green-50 border-2 border-green-500 rounded-xl p-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">
                  Módulo {index + 1}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500 p-6 mb-8 text-left rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">📋 Sobre el test:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>Son 8 preguntas basadas en situaciones reales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>
                Responde con sinceridad, no hay respuestas correctas o
                incorrectas
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>Al final descubrirás tus 3 dones principales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>Podrás compartir tus resultados en redes sociales</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setCurrentStep("test-1")}
          className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-xl"
        >
          Comenzar el Test 🚀
        </button>
      </div>
    </div>
  );
}

// PREGUNTAS DEL TEST
if (currentStep.startsWith("test-")) {
  const testIndex = parseInt(currentStep.split("-")[1]) - 1;
  const pregunta = preguntasTest[testIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full mt-20">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-indigo-600">
              Pregunta {testIndex + 1} de {preguntasTest.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((testIndex + 1) / preguntasTest.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${((testIndex + 1) / preguntasTest.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {pregunta.pregunta}
        </h2>

        <div className="space-y-3">
          {pregunta.opciones.map((opcion, index) => {
            const isSelected = selectedOption === index;
            return (
              <button
                key={index}
                onClick={() => handleAnswerTest(pregunta.id, opcion, index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover:scale-102 group ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-100 scale-102"
                    : "border-gray-200 hover:border-indigo-500 hover:bg-indigo-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold transition-colors ${
                      isSelected
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-100 group-hover:bg-indigo-500 text-gray-600 group-hover:text-white"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span
                    className={`font-semibold pt-1 ${
                      isSelected
                        ? "text-indigo-700"
                        : "text-gray-700 group-hover:text-indigo-700"
                    }`}
                  >
                    {opcion.texto}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// RESULTADOS
if (currentStep === "results") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-4 py-12">
      <BarraSuperior />
      <NotificacionBadge />
      <div className="max-w-5xl mx-auto mt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 text-center">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ¡{userName}, estos son tus Dones! 🎁
          </h1>

          <p className="text-gray-600 mb-2">
            Dios te ha equipado de manera única para servir en Su Reino
          </p>

          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full">
            <p className="text-sm text-blue-800 font-semibold">
              Basado en tus respuestas, estos son tus dones principales
            </p>
          </div>
        </div>

        {/* Panel de Logros */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-7 h-7 text-yellow-500" />
            Tus Logros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {todosLosBadges.map((badge) => {
              const obtenido = badges.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`${
                    obtenido ? badge.color : "bg-gray-200"
                  } rounded-xl p-4 text-center transition-all ${
                    obtenido ? "scale-100" : "scale-95 opacity-50"
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icono}</div>
                  <p
                    className={`text-sm font-bold ${
                      obtenido ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {badge.nombre}
                  </p>
                  <p
                    className={`text-xs ${
                      obtenido ? "text-white" : "text-gray-400"
                    } mt-1`}
                  >
                    {badge.puntos} pts
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-full">
              <p className="text-lg">
                <span className="font-bold text-orange-700">
                  Total de Puntos: {puntos}
                </span>
                <span className="text-gray-600 ml-2">
                  | Badges: {badges.length}/{todosLosBadges.length}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {results.map((don, index) => {
            const Icon = don.icon;
            return (
              <div
                key={don.id}
                className="bg-white rounded-2xl shadow-xl p-6 hover:scale-102 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className={`${don.color} rounded-2xl p-4 flex-shrink-0`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`${don.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                      >
                        #{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {don.nombre}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-3 text-lg">
                      {don.descripcion}
                    </p>

                    <div
                      className={`${
                        don.colorLight
                      } border-l-4 ${don.color.replace(
                        "bg-",
                        "border-"
                      )} p-3 rounded mb-4`}
                    >
                      <p className={`text-sm font-semibold ${don.textColor}`}>
                        📖 Base bíblica: {don.versiculo}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        ✨ Características:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {don.caracteristicas.map((car, idx) => (
                          <span
                            key={idx}
                            className={`${don.colorLight} ${don.textColor} px-3 py-1 rounded-lg text-sm`}
                          >
                            {car}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        🎯 ¿Dónde puedes servir?
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {don.ministerios.map((ministerio, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {ministerio}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-7 h-7 text-green-600" />
            Próximos Pasos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
              <p className="font-semibold text-blue-800 mb-2">
                1. Ora por confirmación
              </p>
              <p className="text-sm text-gray-700">
                Pídele a Dios que confirme estos dones en tu corazón y te
                muestre cómo usarlos
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl">
              <p className="font-semibold text-green-800 mb-2">
                2. Habla con tus líderes
              </p>
              <p className="text-sm text-gray-700">
                Comparte tus resultados con tus líderes espirituales para
                recibir guía
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl">
              <p className="font-semibold text-orange-800 mb-2">
                3. Comienza a servir
              </p>
              <p className="text-sm text-gray-700">
                Busca oportunidades pequeñas para practicar y desarrollar tus
                dones
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl">
              <p className="font-semibold text-pink-800 mb-2">
                4. Pide retroalimentación
              </p>
              <p className="text-sm text-gray-700">
                Pregunta a personas de confianza si ven estos dones manifestados
                en ti
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-6 mb-6">
          <p className="text-center text-lg text-gray-700 italic">
            "Los sueños de Dios para ti son mucho más altos que tus propios
            sueños"
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <button
            onClick={descargarCertificado}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Descargar Imagen
          </button>

          <button
            onClick={compartirResultados}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Compartir
          </button>

          <button
            onClick={() => {
              setCurrentStep("welcome");
              setAnswers({});
              setResults([]);
              setCompletedModules([]);
              setUserName("");
              setPuntos(0);
              setBadges([]);
            }}
            className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

// CERTIFICADO (oculto, solo para generar imagen)
if (currentStep === "certificado") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div
        ref={certificadoRef}
        className="w-[1080px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-8 border-purple-600 rounded-2xl shadow-2xl p-8 relative overflow-hidden"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-200 rounded-full opacity-20 -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200 rounded-full opacity-10"></div>

        {/* Contenido del certificado */}
        <div className="relative z-10 text-center">
          {/* Header */}
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Mis Dones Espirituales
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          </div>

          {/* Nombre */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-purple-700 mb-2 border-b-4 border-purple-300 pb-2 inline-block px-8">
              {userName}
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              🎯 {puntos} puntos • 🏆 {badges.length} insignias
            </p>
          </div>

          {/* Dones Principales */}
          <div className="bg-white rounded-xl p-6 shadow-xl mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Mis 3 Dones Principales:
            </h3>
            <div className="space-y-3">
              {results.map((don, index) => {
                const Icon = don.icon;
                return (
                  <div
                    key={don.id}
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl"
                  >
                    <div className={`${don.color} rounded-lg p-2`}>
                      <Icon
                        className="w-7 h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-xl font-bold text-gray-800">
                        {index + 1}. {don.nombre}
                      </p>
                      <p className="text-sm text-gray-600">{don.versiculo}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Versículo */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 mb-4">
            <div className="flex justify-center gap-2 items-center">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <p className="text-base text-gray-700 italic font-medium">
                "Cada uno según el don que ha recibido, minístrelo a los otros" - 1 Pedro 4:10
              </p>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }

  // Si no coincide con ningún paso, mostrar pantalla de bienvenida por defecto
  return null;
};

export default DonesApp;
