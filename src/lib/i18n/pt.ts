export const pt = {
    nav: {
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        experience: "Experiência",
        contact: "Contato",
    },
    hero: {
        greeting: "Olá, eu sou",
        role: "Desenvolvedor Front-end",
        description: "Desenvolvo experiências digitais acessíveis, perfeitas, performáticas e encantadoras.",
        contactBtn: "Entre em Contato",
        downloadBtn: "Baixar CV",
    },
    about: {
        title: "Sobre Mim",
        description: "Sou um desenvolvedor apaixonado por criar interfaces de usuário intuitivas e dinâmicas. Com formação em ciência da computação e amor pelo design, eu uno estética e funcionalidade. Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo de construir coisas que façam a diferença.",
    },
    skills: {
        title: "Habilidades",
        description: "As tecnologias e ferramentas que uso para dar vida às ideias.",
    },
    projects: {
        title: "Projetos em Destaque",
        description: "Uma seleção de projetos que mostram minhas habilidades e paixão pelo desenvolvimento.",
        viewProject: "Ver Projeto",
        list: [
            {
                title: "Meu Portfólio",
                description: "Meu site de portfólio pessoal construído com tecnologias modernas para mostrar meu trabalho e habilidades.",
                image: "/assets/images/projects/portfolio.png",
                tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "i18n"],
                github: "https://github.com/Maiterney/portfolio-maiterney",
                demo: "",
            },
            {
                title: "Urbana Garantidora",
                description: "Site refatorado do zero focando em performance e usabilidade, utilizando Next.js e design patterns para componentes altamente reutilizáveis.",
                image: "/assets/images/projects/urbana.png",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Design Patterns", "Performance"],
                github: "",
                demo: "https://www.urbanagarantidora.com.br/",
            },
            {
                title: "Auau Petshop",
                description: "Prova técnica desenvolvida para um processo seletivo, focada em gestão de petshop e boas práticas de desenvolvimento.",
                image: "/assets/images/projects/auau_petshop.png",
                tags: ["React", "TypeScript", "Tailwind CSS", "Technical Test"],
                github: "https://github.com/Maiterney/prova_jet",
                demo: "",
            },
        ]
    },
    experience: {
        title: "Experiência Profissional",
        description: "Minha jornada profissional e destaques da carreira.",
        jobs: [
            {
                role: "Desenvolvedor Front-end",
                company: "Woltz",
                period: "Ago 2022 - Atual",
                location: "Belo Horizonte, Brasil (Remoto)",
                description: "Desenvolvimento de projetos complexos, incluindo um ERP empresarial e sistemas de gestão de landing pages automáticas e dinâmicas. Implementação de interfaces modernas com Next.js e Tailwind CSS, garantindo performance e responsividade. Aplicação de design patterns para estruturar soluções escaláveis e de fácil manutenção. Criação de layouts personalizados e componentes reutilizáveis, alinhados à identidade visual e experiência do usuário. Colaboração em projetos estratégicos que exigem inovação e uso de tecnologias de ponta."
            },
            {
                role: "Desenvolvedor Mobile (Flutter)",
                company: "IZi bank",
                period: "Jun 2024 - Dez 2024",
                location: "Belo Horizonte, Brasil (Remoto)",
                description: "Atuação no desenvolvimento de aplicativos móveis utilizando Flutter, com foco em performance, escalabilidade e experiência do usuário. Iniciei como apoio técnico e, em apenas um mês, assumi a posição de desenvolvedor principal em três projetos estratégicos. Responsável por todo o ciclo de desenvolvimento, desde a arquitetura até a publicação e atualização nas lojas.",
                highlights: [
                    "Aplicativo bancário: implementação de funcionalidades seguras e escaláveis para operações financeiras.",
                    "Aplicativo de delivery para clientes: desenvolvimento de interface intuitiva e responsiva, garantindo usabilidade e eficiência.",
                    "Aplicativo para entregadores: criação de soluções voltadas à logística e otimização de rotas."
                ]
            },
            {
                role: "Desenvolvedor Front-end",
                company: "Mayersoft",
                period: "Mar 2021 - Dez 2024",
                location: "Belo Horizonte, Brasil",
                description: "Desenvolvimento de aplicações web com Next.js, WordPress e Laravel (PHP). Criação de layouts e templates customizados, alinhados às necessidades dos clientes. Implementação de soluções front-end integradas a sistemas back-end. Foco em usabilidade, acessibilidade e performance em projetos corporativos."
            },
            {
                role: "Desenvolvedor Front-end",
                company: "SQUADevops",
                period: "Nov 2017 - Dez 2022",
                location: "Belo Horizonte, Brasil",
                description: "Construção de páginas e sistemas web com WordPress, Angular e Next.js. Desenvolvimento de templates e componentes reutilizáveis para diferentes projetos. Participação em equipe multidisciplinar, contribuindo para soluções ágeis e escaláveis. Experiência em projetos diversos, atendendo diferentes segmentos de mercado."
            },
            {
                role: "Desenvolvedor Front-end",
                company: "Open Agência Digital",
                period: "Mar 2020 - Abr 2021",
                location: "Belo Horizonte, Brasil",
                description: "Criação de interfaces modernas e responsivas para websites institucionais e e-commerces. Desenvolvimento de layouts personalizados com foco em identidade visual e experiência do usuário. Integração de soluções front-end com plataformas digitais. Colaboração em projetos de marketing digital e presença online de marcas."
            }
        ]
    },
    contact: {
        title: "Entre em Contato",
        description: "Tem um projeto em mente ou apenas quer dar um oi? Sinta-se à vontade para entrar em contato!",
        cardTitle: "Contate-me",
        cardDesc: "Preencha o formulário abaixo ou me envie um email.",
        nameLabel: "Nome",
        emailLabel: "Email",
        messageLabel: "Mensagem",
        sendBtn: "Enviar Mensagem",
        sendNewMsgBtn: "Enviar Nova Mensagem",
        successMsg: "Mensagem enviada com sucesso!",
        successDesc: "Entraremos em contato em breve.",
        errors: {
            required: "Este campo é obrigatório",
            email: "Email inválido",
            minLen: "A mensagem deve ter pelo menos 10 caracteres",
        },
    },
    footer: {
        copyright: "© 2026 Maiterney Vilela. Todos os direitos reservados.",
    }
}
