import { Code2, Smartphone, TestTube2, Globe, Database, Cpu } from 'lucide-react';

export const services = [
  {
    id: 1,
    category: 'Servicios',
    icon: Globe,
    color: 'brand-green',
    items: [
      { label: 'Outsourcing de desarrollo', detail: 'Equipos dedicados que se integran como parte de tu organización' },
      { label: 'Desarrollo web a medida', detail: 'Aplicaciones web robustas, escalables y de alto rendimiento' },
      { label: 'Desarrollo mobile', detail: 'Apps nativas y multiplataforma para iOS y Android' },
      { label: 'Testing & QA', detail: 'Aseguramiento de calidad en cada fase del ciclo de desarrollo' },
    ],
  },
  {
    id: 2,
    category: 'Tecnologías',
    icon: Cpu,
    color: 'brand-teal',
    items: [
      { label: 'C#, ASP.NET, MVC, Web API', detail: 'Backend sólido con el ecosistema Microsoft' },
      { label: 'JavaScript, TypeScript, Angular, React', detail: 'Frontends modernos y de alta performance' },
      { label: 'Xamarin & Progressive Web Apps', detail: 'Experiencias mobile de calidad nativa' },
      { label: 'SQL Server & Firebase', detail: 'Bases de datos relacionales y NoSQL en la nube' },
    ],
  },
];
