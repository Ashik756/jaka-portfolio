import {
  Network, ShieldCheck, Server, Cloud, Activity, Cpu, Router, Lock,
  Terminal, Wifi, Gauge, Briefcase, GraduationCap,
} from "lucide-react";

export const TITLES = [
  "IT & Network Infrastructure Specialist",
  "MikroTik Certified Routing Engineer",
  "ISP Backbone Architect",
];

export const HERO_STATS = [
  { n: 1, s: "+", l: "Years exp." },
  { n: 60, s: "+", l: "Projects" },
  { n: 20, s: "+", l: "Clients" },
  // { n: 2, s: "+", l: "Countries" },
];

export const SKILL_GROUPS = [
  {
    title: "Networking", icon: Network, items: [
      { name: "MikroTik RouterOS", level: 95 }, { name: "BGP", level: 90 },
      { name: "OSPF", level: 92 }, { name: "MPLS", level: 85 },
      { name: "VLAN / STP", level: 90 }, { name: "VPN / Routing / QoS", level: 88 },
    ]
  },
  {
    title: "Security", icon: ShieldCheck, items: [
      { name: "Firewall Configuration", level: 92 }, { name: "VPN Security", level: 90 },
      { name: "Access Control", level: 85 }, { name: "IDS / IPS", level: 80 },
    ]
  },
  {
    title: "Servers", icon: Server, items: [
      { name: "Linux Administration", level: 88 }, { name: "Windows Server", level: 82 },
      { name: "DNS / DHCP", level: 90 }, { name: "Web Hosting", level: 80 },
    ]
  },
  {
    title: "Cloud", icon: Cloud, items: [
      { name: "AWS Basics", level: 70 }, { name: "Azure Basics", level: 65 }, { name: "Cloud Networking", level: 78 },
    ]
  },
  {
    title: "Monitoring", icon: Activity, items: [
      { name: "Zabbix", level: 88 }, { name: "Grafana", level: 82 },
      { name: "The Dude / Winbox", level: 92 }, { name: "Wireshark / PRTG", level: 80 },
    ]
  },
  {
    title: "Soft Skills", icon: Cpu, items: [
      { name: "Problem Solving", level: 95 }, { name: "Communication", level: 90 },
      { name: "Project Management", level: 85 }, { name: "Client Support", level: 92 },
    ]
  },
];

export const SERVICES = [
  { icon: Router, title: "MikroTik Configuration", desc: "Professional RouterOS configuration and optimization for any scale." },
  { icon: Network, title: "ISP Network Setup", desc: "Complete ISP infrastructure deployment with backbone routing." },
  { icon: Lock, title: "VPN Configuration", desc: "Secure site-to-site and remote VPN solutions with strong encryption." },
  { icon: ShieldCheck, title: "Firewall Security", desc: "Advanced firewall policies, IPS and network protection." },
  { icon: Terminal, title: "Network Troubleshooting", desc: "Diagnosing and resolving complex routing and switching issues." },
  { icon: Server, title: "Server Administration", desc: "Linux and Windows server deployment, hardening and maintenance." },
  { icon: Wifi, title: "Wireless Network Design", desc: "Enterprise Wi-Fi planning, site surveys and optimization." },
  { icon: Gauge, title: "Network Monitoring", desc: "24/7 monitoring via Zabbix, Grafana, PRTG and The Dude." },
];

export const PROJECTS = [
  { tag: "ISP · BACKBONE", title: "National ISP Backbone Deployment", desc: "Scalable ISP backbone using MikroTik CCR with OSPF, BGP and MPLS for redundancy and performance.", metric: "99.99% uptime" },
  { tag: "ENTERPRISE · VPN", title: "Enterprise VPN Infrastructure", desc: "Secure multi-branch VPN connecting several office locations with centralized management.", metric: "12 sites secured" },
  { tag: "SECURITY", title: "Corporate Firewall Upgrade", desc: "Advanced firewall policies, intrusion prevention and bandwidth management for a large enterprise.", metric: "-64% incidents" },
  { tag: "WIRELESS · CAMPUS", title: "Wireless Campus Network", desc: "High-density enterprise Wi-Fi across a university campus with seamless roaming.", metric: "12k daily users" },
  { tag: "DATA CENTER", title: "Data Center Network Optimization", desc: "Improved routing efficiency, reduced latency and enhanced redundancy for a mid-size DC.", metric: "-38% latency" },
  { tag: "MONITORING", title: "Network Monitoring System", desc: "Centralized Zabbix + Grafana + The Dude stack with proactive alerts and dashboards.", metric: "24/7 coverage" },
];

export const EXPERIENCE = [
  {
    role: "Network Engineer",
    org: "---",
    period: "2026 — Present",
    icon: Briefcase,
    bullets: ["MikroTik router configuration & ISP deployment", "OSPF, BGP, MPLS, VPN setup", "Traffic optimization & troubleshooting"],
  },
  {
    role: "Social Media Moderator & Customer Support Executive",
    org: "Dot Internet",
    period: "2024 — 2026",
    icon: Briefcase,
    bullets: ["Customer network support & router config", "Internet Troubleshooting Support", "Facebook, WhatsApp, Instagram Message Handling", "Social Media Management"],
  },
];

export const EDUCATION = [
  {
    title: "B.Sc. in Computer Science",
    org: "  European University of Bangladesh",
    period: "2025 — 2028",
    note: "Networks · OS · Cyber Security · Network Admin",
    icon: GraduationCap
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "Dhaka Udyan Govt. College, Dhaka",
    period: "2023 - 2024",
    note: "Science",
    icon: GraduationCap
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Gobindaganj Government High School",
    period: "2021 - 2022",
    note: "Science",
    icon: GraduationCap
  },
];

export const TESTIMONIALS = [
  { quote: "Tokay-Dendy provided outstanding MikroTik configuration and significantly improved our ISP network stability.", author: "Regional ISP", role: "CTO" },
  { quote: "Delivered a rock-solid multi-branch VPN with clear documentation. Uptime jumped and support tickets dropped.", author: "Finance Group", role: "Head of IT" },
  { quote: "Deep BGP and MPLS expertise. Migration went ahead of schedule with zero customer downtime.", author: "Metro Carrier", role: "Network Ops Lead" },
];

export const CERTS = [
  {
    name: "Computer Office Application",
    org: "Microsoft",
    date: "19 April 2022",
    link: "https://i.ibb.co.com/wr2Mhcf3/Cartificate1-24-06-2026220437201.jpg"
  },
  {
    name: "MTCNA",
    org: "MikroTik Academy",
    date: "24 July 2026",
    link: "https://mikrotik.com/training/certificates/c750612c16285e2b8855"
  },
  {
    name: "MTCRE",
    org: "MikroTik Academy",
    date: "31 July 2026",
    link: "https://mikrotik.com/training/certificates/c752312c83c036fa0d49"
  },
  {
    name: "MTCSE",
    org: "MikroTik Academy",
    date: "Learning...",
    link: ""
  },
  {
    name: "CCNA",
    org: "Cisco Networking Academy",
    date: "Learning...",
    link: ""
  },
  {
    name: "Fortinet NSE Level 1",
    org: "Fortinet",
    date: "Learning...",
    link: ""
  },
];


export const GPIC=[
  {
    tag: "Hangout",
    image:"https://i.ibb.co.com/FQqcqY0/pic3.jpg"
  },
  {
    tag: "Meet up",
    image:"https://i.ibb.co.com/ksGM01ZM/pic1.jpg"
  },
  {
    tag: "Tour",
    image:"https://i.ibb.co.com/RZH7G1y/pic2.jpg"
  },
  
]