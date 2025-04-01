export default function About() {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">SOBRE</h1>
          <div className="max-w-3xl mx-auto border-2 border-blue-900 rounded-lg p-8 bg-white shadow-lg">
            <p className="text-lg">
              Nossa empresa é especializada em desenvolvimento de soluções web inovadoras utilizando as mais recentes
              tecnologias. Com foco em performance e experiência do usuário, criamos aplicações que transformam negócios e
              encantam clientes.
            </p>
            <p className="text-lg mt-4">
              Fundada em 2018, já atendemos mais de 200 clientes em diversos segmentos, sempre com o compromisso de
              entregar produtos de alta qualidade e suporte excepcional.
            </p>
          </div>
        </div>
  
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Missão</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <div key={mission.title} className="border-2 border-blue-900 rounded-lg p-6 bg-white shadow-md">
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p>{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="border-2 border-blue-900 rounded-lg overflow-hidden bg-white shadow-md">
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  const missions = [
    {
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias e abordagens para oferecer soluções diferenciadas.",
    },
    {
      title: "Qualidade",
      description: "Comprometidos com a excelência em cada linha de código e em cada interação com o cliente.",
    },
    {
      title: "Resultados",
      description: "Focados em entregar soluções que geram valor real e impacto positivo para os negócios.",
    },
  ]
  
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      bio: "Com mais de 15 anos de experiência em tecnologia, Ana lidera nossa equipe com visão estratégica e paixão por inovação.",
      skills: ["Liderança", "Estratégia", "Inovação"],
    },
    {
      name: "Carlos Mendes",
      role: "CTO",
      bio: "Especialista em arquitetura de software e novas tecnologias, Carlos garante a excelência técnica em todos os projetos.",
      skills: ["Arquitetura", "Cloud", "DevOps"],
    },
    {
      name: "Juliana Costa",
      role: "Lead Designer",
      bio: "Com olhar apurado para detalhes e experiência do usuário, Juliana cria interfaces intuitivas e visualmente atraentes.",
      skills: ["UI/UX", "Design Systems", "Figma"],
    },
    {
      name: "Rafael Oliveira",
      role: "Desenvolvedor Full Stack",
      bio: "Apaixonado por código limpo e performance, Rafael transforma conceitos em aplicações robustas e escaláveis.",
      skills: ["React", "Node.js", "Next.js"],
    },
    {
      name: "Mariana Santos",
      role: "Gerente de Projetos",
      bio: "Organizada e focada em resultados, Mariana garante que todos os projetos sejam entregues no prazo e com qualidade.",
      skills: ["Scrum", "Kanban", "Gestão"],
    },
    {
      name: "Lucas Ferreira",
      role: "Especialista em QA",
      bio: "Meticuloso e detalhista, Lucas assegura que todas as soluções atendam aos mais altos padrões de qualidade.",
      skills: ["Testes", "Automação", "CI/CD"],
    },
  ]
  
  