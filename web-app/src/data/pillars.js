import { ShieldCheck, RefreshCw, Layers, Users } from 'lucide-react';

export const PILLARS = [
  {
    id: 1,
    title: "Auditoría y Mejora de Código",
    description:
      "Entendemos el estado real de tus sistemas. Analizamos la calidad, arquitectura y riesgos de tus aplicaciones combinando herramientas avanzadas y análisis asistido por inteligencia artificial.",
    icon: ShieldCheck,
    color: "brand-green",
    actions: [
      "Análisis de código (SonarQube)",
      "Detección de vulnerabilidades",
      "Evaluación de arquitectura",
      "Identificación de deuda técnica",
    ],
    aiBoost: "Análisis más profundo en menos tiempo, detección de patrones ocultos, mayor cobertura de revisión.",
    result: "Claridad para tomar decisiones con menor riesgo.",
  },
  {
    id: 2,
    title: "Modernización de Sistemas Legacy",
    description:
      "Mejoramos y modernizamos tus sistemas existentes. Evolucionamos aplicaciones legacy utilizando IA para acelerar refactoring y la comprensión de sistemas complejos.",
    icon: RefreshCw,
    color: "brand-teal",
    actions: [
      "Refactoring",
      "Upgrades tecnológicos (.NET, frameworks)",
      "Migraciones complejas (ej: COBOL → APIs modernas)",
    ],
    aiBoost: "Comprensión acelerada de código legacy, generación de documentación automática, reducción de tiempos de migración.",
    result: "Sistemas más escalables y sostenibles.",
  },
  {
    id: 3,
    title: "Desarrollo de Nuevos Sistemas",
    description:
      "Construimos software preparado para crecer desde el inicio. Diseñamos y desarrollamos nuevos sistemas aplicando buenas prácticas y utilizando IA para mejorar calidad y velocidad de entrega.",
    icon: Layers,
    color: "brand-green",
    actions: [
      "Diseño de arquitectura",
      "Desarrollo backend/frontend",
      "Integración con sistemas existentes",
    ],
    aiBoost: "Generación asistida de código, aceleración del desarrollo, mejora en testing y calidad.",
    result: "Soluciones robustas desde el primer día.",
  },
  {
    id: 4,
    title: "Equipos Potenciados por IA",
    description:
      "Equipos que trabajan como parte de tu organización. Asignamos profesionales que se integran a tu equipo, potenciados por herramientas de IA para mejorar productividad y calidad.",
    icon: Users,
    color: "brand-teal",
    actions: [
      "Integración real con el cliente",
      "Foco en calidad y arquitectura",
      "Uso intensivo de IA en el ciclo de desarrollo",
    ],
    aiBoost: "Amplificación de las capacidades del equipo, reducción de errores y adopción de mejores prácticas en tiempo real.",
    result: "Mayor velocidad de entrega sin perder calidad.",
  },
];
