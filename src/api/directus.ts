import { createDirectus, rest, } from '@directus/sdk';

type Global = {
    title: string;
    description: string;
}

type Company = {
    name: string;
    logo: string;
    url: string;
}

type Tag = {
    name: string;
    color: string;
}

type Technology = {
    name: string;
    icon: string;
    color: string;
    url: string;
}

type Job = {
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

type Project = {
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

type Schema = {
    global: Global;

    companies: Company[];
    jobs: Job[];
    projects: Project[];
    tags: Tag[];
    technologies: Technology[];
}

const directus = createDirectus<Schema>('https://api.vlad.gg').with(rest());

export default directus;