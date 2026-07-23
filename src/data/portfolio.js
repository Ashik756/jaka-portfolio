import {
  Network, ShieldCheck, Server, Cloud, Activity, Cpu, Router, Lock,
  Terminal, Wifi, Gauge, Briefcase, GraduationCap,
} from "lucide-react";

export const TITLES = [
  "IT & Network Infrastructure Specialist",
  "MikroTik Certified Engineer",
  "ISP Backbone Architect",
];

export const HERO_STATS = [
  { n: 6, s: "+", l: "Years exp." },
  { n: 120, s: "+", l: "Projects" },
  { n: 80, s: "+", l: "Clients" },
  { n: 5, s: "+", l: "Countries" },
];

export const SKILL_GROUPS = [
  { title: "Networking", icon: Network, items: [
    { name: "MikroTik RouterOS", level: 95 }, { name: "BGP", level: 90 },
    { name: "OSPF", level: 92 }, { name: "MPLS", level: 85 },
    { name: "VLAN / STP", level: 90 }, { name: "VPN / Routing / QoS", level: 88 },
  ]},
  { title: "Security", icon: ShieldCheck, items: [
    { name: "Firewall Configuration", level: 92 }, { name: "VPN Security", level: 90 },
    { name: "Access Control", level: 85 }, { name: "IDS / IPS", level: 80 },
  ]},
  { title: "Servers", icon: Server, items: [
    { name: "Linux Administration", level: 88 }, { name: "Windows Server", level: 82 },
    { name: "DNS / DHCP", level: 90 }, { name: "Web Hosting", level: 80 },
  ]},
  { title: "Cloud", icon: Cloud, items: [
    { name: "AWS Basics", level: 70 }, { name: "Azure Basics", level: 65 }, { name: "Cloud Networking", level: 78 },
  ]},
  { title: "Monitoring", icon: Activity, items: [
    { name: "Zabbix", level: 88 }, { name: "Grafana", level: 82 },
    { name: "The Dude / Winbox", level: 92 }, { name: "Wireshark / PRTG", level: 80 },
  ]},
  { title: "Soft Skills", icon: Cpu, items: [
    { name: "Problem Solving", level: 95 }, { name: "Communication", level: 90 },
    { name: "Project Management", level: 85 }, { name: "Client Support", level: 92 },
  ]},
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
    role: "Senior Network Engineer",
    org: "ABC Internet Services Ltd.",
    period: "2023 — Present",
    icon: Briefcase,
    bullets: ["MikroTik router configuration & ISP deployment", "OSPF, BGP, MPLS, VPN setup", "Traffic optimization & troubleshooting"],
  },
  {
    role: "Network Support Engineer",
    org: "NextWave Communications",
    period: "2021 — 2023",
    icon: Briefcase,
    bullets: ["Customer network support & router config", "Wireless deployment & monitoring", "Firewall configuration"],
  },
];

export const EDUCATION = [
  { title: "B.Sc. in Computer Science", org: "University of Technology", period: "2017 — 2021", note: "Networks · OS · Cyber Security · Network Admin", icon: GraduationCap },
  { title: "MikroTik Certified Network Associate (MTCNA)", org: "MikroTik Academy", period: "2022", note: "Routing, wireless, firewall, QoS", icon: GraduationCap },
  { title: "Cisco Certified Network Associate (CCNA)", org: "Cisco Networking Academy", period: "2023", note: "Enterprise routing & switching", icon: GraduationCap },
];

export const TESTIMONIALS = [
  { quote: "Tokay-Dendy provided outstanding MikroTik configuration and significantly improved our ISP network stability.", author: "Regional ISP", role: "CTO" },
  { quote: "Delivered a rock-solid multi-branch VPN with clear documentation. Uptime jumped and support tickets dropped.", author: "Finance Group", role: "Head of IT" },
  { quote: "Deep BGP and MPLS expertise. Migration went ahead of schedule with zero customer downtime.", author: "Metro Carrier", role: "Network Ops Lead" },
];

export const CERTS = [
  { name: "MikroTik MTCNA", org: "MikroTik" },
  { name: "Cisco CCNA", org: "Cisco Networking Academy" },
  { name: "Linux Essentials", org: "Linux Professional Institute" },
  { name: "AWS Cloud Practitioner", org: "Amazon Web Services" },
  { name: "Fortinet NSE Level 1", org: "Fortinet" },
];
