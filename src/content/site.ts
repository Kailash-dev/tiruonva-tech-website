export const site = {
  name: "Tirunova Technologies",
  shortName: "Tirunova",
  tagline: "Innovate • Integrate • Elevate",
  taglinePlain: "Innovate | Integrate | Elevate",
  descriptor:
    "Innovating World-Class Technology. Securing Businesses. Empowering Growth.",
  positioning:
    "Your single technology partner for IT, security, software and solar solutions.",
  founded: "7 June 2024",
  founder: {
    name: "Deependra Gadwal",
    title: "Founder & Director",
  },
  url: "https://tirunovatechnologies.co.in",
  email: "tirunovainfo@gmail.com",
  phones: [
    { display: "+91 77409 96909", href: "tel:+917740996909", raw: "7740996909" },
    { display: "+91 86197 71383", href: "tel:+918619771383", raw: "8619771383" },
  ],
  whatsapp: "917740996909",
  address: {
    line1: "G-27, Govindam Tower, Kalwar Road",
    line2: "Kardhani, Jaipur – 302012",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    full: "G-27, Govindam Tower, Kalwar Road, Kardhani, Jaipur – 302012, Rajasthan, India",
  },
  mapEmbed:
    "https://maps.google.com/maps?q=Govindam%20Tower%20Kalwar%20Road%20Kardhani%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions", childrenKey: "solutions" as const },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const values = [
  "Innovation",
  "Quality",
  "Integrity",
  "Customer Satisfaction",
  "Professional Service",
  "Security",
  "Long-Term Relationships",
] as const;

export const processSteps = [
  { number: "01", title: "Consultation", description: "Understand your requirements." },
  {
    number: "02",
    title: "Site Survey",
    description: "Analyse the existing infrastructure and requirements.",
  },
  {
    number: "03",
    title: "Solution Design",
    description: "Prepare the appropriate technical solution.",
  },
  {
    number: "04",
    title: "Quotation",
    description: "Provide a transparent commercial proposal.",
  },
  {
    number: "05",
    title: "Installation",
    description: "Professional implementation by our technical team.",
  },
  {
    number: "06",
    title: "Configuration",
    description: "Configure and test the complete system.",
  },
  {
    number: "07",
    title: "Handover",
    description: "System demonstration and customer handover.",
  },
  {
    number: "08",
    title: "Support",
    description: "Continued technical assistance and AMC.",
  },
] as const;

export const whyChoose = [
  {
    title: "One Technology Partner",
    description: "IT + Networking + Security + Software + Cloud + Solar.",
  },
  {
    title: "Professional Team",
    description:
      "Experienced technical support for installation, configuration and maintenance.",
  },
  {
    title: "Quality Products",
    description:
      "Solutions selected according to customer requirements, performance and budget.",
  },
  {
    title: "Customized Solutions",
    description: "We don't believe in one-size-fits-all technology.",
  },
  {
    title: "End-to-End Support",
    description:
      "From consultation and installation to maintenance and technical support.",
  },
  {
    title: "Business-Focused Approach",
    description:
      "Solutions designed around reliability, security, scalability and business continuity.",
  },
] as const;

export const benefits = [
  {
    title: "Reliable Technology",
    description: "Solutions designed for dependable performance.",
  },
  {
    title: "Secure Infrastructure",
    description: "Security-focused technology implementation.",
  },
  {
    title: "Scalable Solutions",
    description: "Infrastructure that can grow with your business.",
  },
  {
    title: "Professional Installation",
    description: "Proper installation and configuration.",
  },
  {
    title: "After-Sales Support",
    description: "Technical assistance even after project completion.",
  },
] as const;

export const industries = [
  { name: "Homes & Residences", description: "Smart, secure and connected living." },
  { name: "Corporate Offices", description: "Reliable networks, security and workplace IT." },
  { name: "Hotels & Resorts", description: "Guest Wi-Fi, surveillance and operations technology." },
  { name: "Hospitals & Healthcare", description: "Secure connectivity and monitored facilities." },
  { name: "Schools & Institutions", description: "Campus networking, CCTV and digital systems." },
  { name: "Industries & Manufacturing", description: "Plant connectivity, security and solar." },
  { name: "Retail & Showrooms", description: "Surveillance, billing and store networking." },
  { name: "Residential Projects", description: "Society-level security, intercom and Wi-Fi." },
  { name: "Construction Projects", description: "Temporary and permanent site technology." },
  { name: "Commercial Buildings", description: "Integrated infrastructure for multi-tenant sites." },
] as const;

export const oemPartners = [
  "Cisco",
  "Dell Technologies",
  "Microsoft",
  "Fortinet",
  "Aruba",
  "Hikvision",
  "Dahua",
  "UNV",
  "CP Plus",
  "D-Link",
  "TP-Link",
  "APC",
  "Tenda",
  "Lenovo",
] as const;

export const solarBrands = ["TATA Solar", "Adani Solar", "Waaree", "INA"] as const;

export const approach = [
  "Consultation",
  "Design",
  "Supply",
  "Installation",
  "Configuration",
  "Support",
  "AMC",
] as const;

export const projectCategories = [
  "CCTV Projects",
  "Networking Projects",
  "WiFi Projects",
  "Server Projects",
  "Cybersecurity Projects",
  "Solar Projects",
  "Access Control",
  "EPABX Projects",
  "Software Projects",
  "Website & Application Projects",
] as const;
