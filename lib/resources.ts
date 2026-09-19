export type Resource = {
  slug: string;
  title: string;
  blurb: string;
  body: string;
  image?: string;
};

export const resources: Resource[] = [
  {
    slug: "master-phd-samples",
    title: "Master & PhD Samples",
    blurb: "Check out Master & PhD Samples",
    body: "Sample statements of purpose, personal statements, research proposals and CVs from applicants we have worked with. Content coming soon — contact us in the meantime and we will share relevant samples for your target program.",
  },
  {
    slug: "deadlines",
    title: "Deadlines",
    blurb: "View Important Deadlines",
    body: "A running calendar of application and scholarship deadlines for the intakes we cover. Content coming soon — get in touch for the deadlines that apply to your intake.",
    image: "/media/site/deadlines.jpg",
  },
  {
    slug: "css-books-recommended",
    title: "CSS books (Recommended)",
    blurb: "View Important CSS books",
    body: "Recommended reading for compulsory and optional CSS papers, assembled by our CSS mentors. Content coming soon — ask us for the current list for your subject combination.",
  },
];

export const getResource = (slug: string) =>
  resources.find((r) => r.slug === slug);
