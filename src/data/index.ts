export type Global = {
    title: string;
    description: string;
}

export type Company = {
    name: string;
    logo: string;
    url: string;
}

export type Tag = {
    name: string;
    color: string;
}

export type Technology = {
    name: string;
    icon: string;
    color: string;
    url: string;
}

export type Job = {
    slug: string;
    title: string;
    company: Company;
    location: string;
    date_from: Date;
    date_to?: Date;
    content: string;
    projects?: Project[];
    created_date: Date;
    updated_date: Date;
}

export type Project = {
    slug: string;
    title: string;
    content: string;
    github_url?: string;
    website_url?: string;
    images: string[];
    tags: (Tag|Technology)[];
    created_date: Date;
    updated_date: Date;
}

export const global: Global = {
    title: "Vlad Zaharia",
    description: "Software Engineer & Tech Enthusiast"
};

export const companies: Company[] = [
    {
        name: "Microsoft",
        logo: "/images/companies/microsoft.png",
        url: "https://microsoft.com"
    },
    {
        name: "Amazon",
        logo: "/images/companies/amazon.png",
        url: "https://amazon.com"
    }
];

export const technologies: Technology[] = [
    {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        color: "#3178C6",
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "React",
        icon: "devicon-react-original",
        color: "#61DAFB",
        url: "https://reactjs.org/"
    },
    {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        color: "#339933",
        url: "https://nodejs.org/"
    }
];

export const tags: Tag[] = [
    {
        name: "Frontend",
        color: "#61DAFB"
    },
    {
        name: "Backend",
        color: "#339933"
    },
    {
        name: "Full Stack",
        color: "#764ABC"
    }
];

export const jobs: Job[] = [
    {
        slug: "swe-microsoft",
        title: "Software Engineer",
        company: companies[0],
        location: "Redmond, WA",
        date_from: new Date("2023-01-01"),
        content: "Working on exciting projects at Microsoft",
        created_date: new Date("2023-01-01"),
        updated_date: new Date("2023-01-01")
    },
    {
        slug: "sde-amazon",
        title: "Software Development Engineer",
        company: companies[1],
        location: "Seattle, WA",
        date_from: new Date("2021-01-01"),
        date_to: new Date("2022-12-31"),
        content: "Developed scalable solutions at Amazon",
        created_date: new Date("2021-01-01"),
        updated_date: new Date("2022-12-31")
    }
];

export const projects: Project[] = [
    {
        slug: "personal-website",
        title: "Personal Website",
        content: "My personal website built with Astro and TypeScript",
        github_url: "https://github.com/vladgg/website",
        website_url: "https://vlad.gg",
        images: ["/images/projects/website.png"],
        tags: [technologies[0], technologies[1], tags[0]],
        created_date: new Date("2024-01-01"),
        updated_date: new Date("2024-01-01")
    },
    {
        slug: "awesome-project",
        title: "Awesome Project",
        content: "A full-stack application built with modern technologies",
        github_url: "https://github.com/vladgg/awesome-project",
        images: ["/images/projects/awesome.png"],
        tags: [technologies[0], technologies[2], tags[2]],
        created_date: new Date("2023-06-01"),
        updated_date: new Date("2023-12-01")
    }
];
