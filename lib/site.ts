export const site = {
  name: "edunki",
  title: "edunki | education consultancy service",
  description:
    "edunki is an education consultancy platform that provides all the services from career counselling to admission guidance.",
  email: "eedunki@gmail.com",
  /** Where every "book a consultation" call to action points. */
  consultationPath: "/consultation",
  instagram:
    "https://www.instagram.com/edunkiofficial?igsh=M2cweDY3MXVrZGk2&utm_source=qr",
  linkedin:
    "https://www.linkedin.com/in/edunki-education-and-consultancy-37b898301/",
  credit: "Powered by Valfirst AI",
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Community Service", href: "/#community" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
] as const;

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "8+", label: "Expert Consultants" },
  { value: "100+", label: "Satisfied Students" },
  { value: "100%", label: "Success Rate" },
] as const;
