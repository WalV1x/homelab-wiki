const translations = {
  fr: {
    page_title: "Portfolio Homelab - Liandro Gameiro da Silva",
    nav_arch: "Architecture",
    nav_overview: "Vue d'ensemble",
    nav_services: "Services",
    nav_dns: "Filtrage DNS",
    nav_security: "Sécurité",
    nav_monitoring: "Supervision",
    nav_future: "Projets futurs",
    hero_eyebrow: "Portfolio · Projet Personnel",
    hero_title: "Mon Homelab<br>Proxmox.",
    hero_lead: "Un environnement que j'ai monté de A à Z pour expérimenter la virtualisation, l’administration système et la sécurité réseau par la pratique.",
    hero_btn: "Consulter mon profil LinkedIn",
    hero_status: "Homelab actif · documentation en évolution",
    footer_linkedin: "LinkedIn",
    footer_github: "GitHub",
    overview_eyebrow: "En un coup d'œil",
    overview_title: "Un laboratoire pensé pour apprendre.",
    overview_desc: "Une infrastructure personnelle où chaque service répond à un objectif concret : héberger, sécuriser, sauvegarder et observer.",
    overview_stat_services: "services hébergés",
    overview_stat_virtualization: "conteneurs virtualisés",
    overview_stat_monitoring: "supervision active",
    overview_stack_label: "Stack principale",
    arch_eyebrow: "Conception & Hyperviseur",
    arch_title: "Architecture logique.",
    arch_lead: "Ma démarche pour isoler le réseau privé et sécuriser l'exposition de certains services sur internet.",
    svg_public_access: "Accès public",
    svg_proxy_res: "Résolution proxy",
    svg_lxc: "Conteneurs LXC",
    svg_hosted_services: "Mes services hébergés",
    svg_physical_server: "SERVEUR PHYSIQUE",
    svg_encrypted_access: "Mon accès chiffré",
    svg_access_policy_title: "Politique d'accès",
    svg_access_policy_desc: "Jeux : Publics | Administration : VPN",
    pve_hw_alt: "Nœud physique Proxmox - Mini PC AMD Ryzen 7",
    pve_hw_caption: "Nœud physique Proxmox : Mini PC AMD Ryzen 7 5700U (8c/16t, 32 Go RAM, 1 To SSD NVMe), compact et économe pour une virtualisation 24/7.",
    pve_alt: "Tableau de bord de gestion Proxmox VE",
    pve_caption: "L'interface centrale de mon hyperviseur Proxmox VE : vue synthétique des ressources de l'hôte et orchestration des conteneurs LXC isolés.",
    services_eyebrow: "Administration système & Réseau",
    services_title: "Les services que j'héberge.",
    services_desc: "J'ai fait le choix de virtualiser chaque outil dans des conteneurs LXC indépendants afin de compartimenter les pannes et d'optimiser les ressources de mon serveur.",
    tag_public: "Exposé publiquement",
    tag_vpn: "Protégé par VPN",
    tag_lan: "Réseau local & VPN",
    pelican_panel_desc: "Interface d'administration de mon infrastructure de serveurs de jeux Minecraft et Satisfactory.",
    pelican_wings_desc: "Agent d'exécution qui lance et gère les serveurs de jeux pilotés depuis Pelican Panel.",
    npm_desc: "Gestionnaire de routage. Il sécurise mes connexions externes, configure mes hôtes virtuels et gère automatiquement mes certificats SSL Let's Encrypt.",
    beszel_desc: "Outil de supervision utilisé pour suivre la santé du serveur, ses ressources et son activité réseau.",
    pbs_desc: "Ma solution de sauvegarde. Je l'ai configurée pour effectuer des sauvegardes incrémentales et dédupliquées de mes machines virtuelles.",
    immich_desc: "Une alternative à Google Photos que j'auto-héberge. Cela me permet de tester la gestion de stockage intensif et le traitement d'images par IA locale.",
    filebrowser_desc: "Une interface web allégée et ultra-rapide pour la gestion, le partage et la navigation dans mes fichiers distants en toute sécurité.",
    speedtest_desc: "Un outil automatisé que j'ai mis en place pour générer un historique constant de la stabilité et du débit de ma connexion internet.",
    npm_caption: "Configuration de Nginx Proxy Manager : gestion du routage DNS et génération automatisée de certificats SSL Let's Encrypt.",
    dns_eyebrow: "Réseau & Confidentialité",
    dns_title: "Filtrage DNS du réseau.",
    dns_lead: "Un serveur DNS maison qui bloque publicités, trackers et domaines malveillants pour tous les appareils du foyer, sans rien installer sur chacun d'eux.",
    svg_dns_devices: "Appareils du réseau",
    svg_dns_devices_sub: "PC, mobiles, TV",
    svg_dns_filter_sub: "Filtrage + DHCP",
    svg_dns_resolver_sub: "Résolveur DNSSEC",
    svg_dns_internet_sub: "DNS racine",
    svg_dns_remote: "Appareils nomades",
    svg_dns_remote_sub: "Via Tailscale",
    dns_adguard_desc: "Serveur DNS et DHCP de mon réseau. Il bloque publicités, trackers, télémétrie et domaines malveillants pour tous mes appareils, et attribue des adresses fixes à mes services grâce aux baux statiques.",
    dns_unbound_desc: "Résolveur récursif local avec validation DNSSEC : mes requêtes ne dépendent d'aucun DNS public tiers.",
    dns_lists_title: "Listes de blocage HaGeZi",
    dns_lists_desc: "Listes maintenues par la communauté (publicités, trackers, menaces), mises à jour automatiquement. Les faux positifs sont corrigés avec une liste d'autorisation.",
    dns_ts_title: "Filtrage en déplacement",
    dns_ts_desc: "Mes appareils nomades utilisent ce DNS à travers Tailscale, avec une politique d'accès (ACL) qui n'autorise que le port DNS vers le serveur.",
    dns_hw_title: "Matériel sobre",
    dns_hw_desc: "Le tout tourne sur un Orange Pi Zero 3 d'1 Go de RAM : environ 150 Mo pour AdGuard Home avec environ 500 000 règles chargées.",
    dns_adguard_alt: "Tableau de bord AdGuard Home en production",
    dns_adguard_caption: "Tableau de bord AdGuard Home sur l'Orange Pi Zero 3 (192.168.1.60) : requêtes DNS locales, filtrage actif et Unbound (127.0.0.1:5335) configuré en amont.",
    dns_opi_alt: "Nœud Réseau physique - Orange Pi Zero 3",
    dns_opi_caption: "Nœud Réseau physique : Orange Pi Zero 3 (Allwinner H618, 1 Go RAM) sous Armbian 26.11, assurant le filtrage DNS et le routage Tailscale 24/7.",
    dns_filter_alt: "Listes de blocage HaGeZi dans AdGuard Home",
    dns_filter_caption: "Listes de blocage HaGeZi actives dans AdGuard Home : Pro++, TIF Mini (calibrée pour la contrainte de 1 Go de RAM), Apple Tracker et LG webOS (~483 000 règles).",
    dns_audit_eyebrow: "Validation & Efficacité",
    dns_audit_title: "Résultats des tests de protection.",
    dns_audit_desc: "Mesures d'efficacité du filtrage DNS effectuées via les bancs d'essai de référence Adblock Test et What I Block.",
    dns_score_alt: "Banc d'essai Adblock Test - Score 89%",
    dns_score_caption: "Banc d'essai Adblock Test : score de protection global de 89% avec 444 requêtes bloquées sur 482 points de contrôle.",
    dns_whatiblock_alt: "Audit What I Block par catégorie",
    dns_whatiblock_caption: "Audit What I Block : blocage à 100% des traceurs d'analyse et erreurs, 99% de la télémétrie constructeurs OEM et 98% des régies publicitaires.",
    sec_eyebrow: "Bonnes pratiques",
    sec_title: "Mes mesures de sécurité.",
    sec_lead: "Gérer un serveur connecté à internet implique des risques. Voici les règles que je m'impose.",
    sec_zt_title: "Réseau Zero-Trust (Tailscale)",
    sec_zt_desc: "Je n'ouvre aucun port d'administration (SSH, Proxmox) sur ma box internet. Tout accès distant nécessite une connexion à mon tunnel VPN WireGuard.",
    sec_f2b_title: "Prévention d'intrusions (Fail2ban)",
    sec_f2b_desc: "J'ai configuré Fail2ban pour bannir automatiquement les adresses IP qui tenteraient de forcer l'accès (brute-force) à mes services exposés.",
    sec_mfa_title: "MFA & Gestion des accès",
    sec_mfa_desc: "J'impose une double authentification (TOTP) sur tous mes panneaux de contrôle et l'accès Root par mot de passe est désactivé au profit de clés SSH privées.",
    sec_dns_title: "Durcissement du serveur DNS",
    sec_dns_desc: "Le serveur DNS n'est joignable que depuis mon réseau local et mon VPN grâce à un pare-feu UFW restrictif. La connexion SSH se fait uniquement par clé et les mises à jour de sécurité s'installent automatiquement.",
    mon_eyebrow: "Observabilité",
    mon_title: "Supervision du matériel.",
    mon_desc: "J'utilise l'API de Proxmox couplée à <strong>Beszel</strong> pour monitorer la santé de ma machine au quotidien (CPU, RAM, état des disques, températures).",
    mon_caption: "Surveillance en temps réel des charges système, du réseau et de l'espace disque via Beszel.",
    fut_eyebrow: "Mes prochains projets",
    fut_title: "Évolutions prévues.",
    fut_desc: "Mon infrastructure est mon terrain de jeu. Voici ce que je compte y intégrer prochainement :",
    fut_vps_title: "Serveur Relais (VPS)",
    fut_vps_desc: "Je souhaite acquérir un VPS distant qui fera office de bouclier, afin de masquer définitivement mon adresse IP résidentielle lorsque j'expose un service.",
    fut_nas_title: "NAS Personnel",
    fut_nas_desc: "Je compte installer TrueNAS et configurer une grappe RAID de 2 disques (4 To) pour mieux comprendre la redondance matérielle et sécuriser les données familiales.",
    fut_hw_title: "Mise à niveau matérielle",
    fut_hw_desc: "J'ai prévu de doubler la mémoire vive de mon serveur (passage à 64 Go) et d'ajouter des disques NVMe pour supporter la charge de mes futurs conteneurs.",
    fut_ai_title: "Infrastructure IA",
    fut_ai_desc: "Je m'intéresse de plus en plus à l'hébergement local de modèles de langage (LLM). Je souhaite dédier une partie de mes ressources pour expérimenter avec Ollama.",
    footer_text: "Conçu et administré par Liandro Gameiro da Silva — HEG-Genève"
  },
  en: {
    page_title: "Homelab Portfolio - Liandro Gameiro da Silva",
    nav_arch: "Architecture",
    nav_overview: "Overview",
    nav_services: "Services",
    nav_dns: "DNS Filtering",
    nav_security: "Security",
    nav_monitoring: "Monitoring",
    nav_future: "Future Projects",
    hero_eyebrow: "Portfolio · Personal Project",
    hero_title: "My Proxmox<br>Home Lab.",
    hero_lead: "An environment I built from scratch to experiment with virtualization, system administration, and network security through hands-on practice.",
    hero_btn: "View my LinkedIn Profile",
    hero_status: "Active homelab · documentation in progress",
    footer_linkedin: "LinkedIn",
    footer_github: "GitHub",
    overview_eyebrow: "At a glance",
    overview_title: "A lab built for learning.",
    overview_desc: "A personal infrastructure where every service has a clear purpose: hosting, securing, backing up, and observing.",
    overview_stat_services: "hosted services",
    overview_stat_virtualization: "virtualized containers",
    overview_stat_monitoring: "active monitoring",
    overview_stack_label: "Core stack",
    arch_eyebrow: "Design & Hypervisor",
    arch_title: "Logical Architecture.",
    arch_lead: "My strategy for isolating the private network while securely exposing select services to the internet.",
    svg_public_access: "Public Access",
    svg_proxy_res: "Proxy Resolution",
    svg_lxc: "LXC Containers",
    svg_hosted_services: "My Hosted Services",
    svg_physical_server: "PHYSICAL SERVER",
    svg_encrypted_access: "Encrypted Access",
    svg_access_policy_title: "Access Policy",
    svg_access_policy_desc: "Gaming: Public | Admin: VPN",
    pve_hw_alt: "Physical Proxmox node - Mini PC AMD Ryzen 7",
    pve_hw_caption: "Physical Proxmox node: Mini PC AMD Ryzen 7 5700U (8c/16t, 32GB RAM, 1TB NVMe SSD), compact and energy-efficient for 24/7 virtualization.",
    pve_alt: "Proxmox VE management dashboard",
    pve_caption: "Central dashboard of my Proxmox VE hypervisor: synthetic view of host resources and orchestration of isolated LXC containers.",
    services_eyebrow: "System & Network Administration",
    services_title: "Hosted Services.",
    services_desc: "I chose to virtualize each tool inside independent LXC containers to isolate faults and optimize overall server resources.",
    tag_public: "Publicly Exposed",
    tag_vpn: "VPN Protected",
    tag_lan: "LAN & VPN",
    pelican_panel_desc: "Administration interface for my Minecraft and Satisfactory game server infrastructure.",
    pelican_wings_desc: "Execution agent that runs and manages the game servers controlled from Pelican Panel.",
    npm_desc: "Routing manager. Secures incoming connections, manages virtual hosts, and automates Let's Encrypt SSL certificate renewals.",
    beszel_desc: "Monitoring tool used to track server health, resource usage, and network activity.",
    pbs_desc: "My backup solution. Configured to perform incremental and deduplicated backups of all virtual machines and LXC containers.",
    immich_desc: "Self-hosted Google Photos alternative. Used to experiment with high-volume storage management and local AI image processing.",
    filebrowser_desc: "A lightweight, high-performance web dashboard for securely browsing, sharing, and managing remote files.",
    speedtest_desc: "An automated tool deployed to track and analyze internet connection speed and stability over time.",
    npm_caption: "Nginx Proxy Manager configuration: DNS routing management and automated Let's Encrypt SSL generation.",
    dns_eyebrow: "Network & Privacy",
    dns_title: "Network DNS Filtering.",
    dns_lead: "A self-hosted DNS server that blocks ads, trackers, and malicious domains for every device in the household, with nothing to install on each one.",
    svg_dns_devices: "Network Devices",
    svg_dns_devices_sub: "PCs, phones, TV",
    svg_dns_filter_sub: "Filtering + DHCP",
    svg_dns_resolver_sub: "DNSSEC Resolver",
    svg_dns_internet_sub: "Root DNS",
    svg_dns_remote: "Mobile Devices",
    svg_dns_remote_sub: "Via Tailscale",
    dns_adguard_desc: "My network's DNS and DHCP server. It blocks ads, trackers, telemetry, and malicious domains for all my devices, and assigns fixed addresses to my services through static leases.",
    dns_unbound_desc: "Local recursive resolver with DNSSEC validation: my queries don't depend on any third-party public DNS.",
    dns_lists_title: "HaGeZi Blocklists",
    dns_lists_desc: "Community-maintained blocklists (ads, trackers, threats), updated automatically. False positives are handled with an allowlist.",
    dns_ts_title: "Filtering on the Go",
    dns_ts_desc: "My mobile devices use this DNS through Tailscale, with an access policy (ACL) that only allows the DNS port to the server.",
    dns_hw_title: "Lean Hardware",
    dns_hw_desc: "It all runs on a 1 GB RAM Orange Pi Zero 3: about 150 MB for AdGuard Home with about 500,000 rules loaded.",
    dns_adguard_alt: "AdGuard Home production dashboard",
    dns_adguard_caption: "AdGuard Home dashboard on Orange Pi Zero 3 (192.168.1.60): live DNS queries, active filtering, and local Unbound resolver (127.0.0.1:5335) as upstream.",
    dns_opi_alt: "Physical Network node - Orange Pi Zero 3",
    dns_opi_caption: "Physical Network node: Orange Pi Zero 3 (Allwinner H618, 1GB RAM) running Armbian 26.11, providing DNS filtering and Tailscale routing 24/7.",
    dns_filter_alt: "HaGeZi blocklists configured in AdGuard Home",
    dns_filter_caption: "Active HaGeZi blocklists in AdGuard Home: Pro++, TIF Mini (tuned for the 1GB RAM constraint), Apple Tracker, and LG webOS (~483,000 rules).",
    dns_audit_eyebrow: "Validation & Efficacy",
    dns_audit_title: "Protection Benchmark Results.",
    dns_audit_desc: "DNS filtering efficiency benchmarks conducted through industry-standard Adblock Test and What I Block test suites.",
    dns_score_alt: "Adblock Test benchmark - 89% score",
    dns_score_caption: "Adblock Test benchmark: 89% overall protection score with 444 ad/tracker requests blocked out of 482 checks.",
    dns_whatiblock_alt: "What I Block category audit",
    dns_whatiblock_caption: "What I Block audit: 100% block rate on analytics & error trackers, 99% on OEM vendor telemetry, and 98% on ad networks.",
    sec_eyebrow: "Best Practices",
    sec_title: "Security Hardening.",
    sec_lead: "Hosting services connected to the internet carries inherent risks. Here are the security policies I enforce.",
    sec_zt_title: "Zero-Trust Network (Tailscale)",
    sec_zt_desc: "No administration ports (SSH, Proxmox VE) are open on my router. All remote management requires an active WireGuard VPN session.",
    sec_f2b_title: "Intrusion Prevention (Fail2ban)",
    sec_f2b_desc: "Fail2ban is configured to automatically ban IP addresses exhibiting brute-force attempt patterns against exposed services.",
    sec_mfa_title: "MFA & Access Control",
    sec_mfa_desc: "Multi-Factor Authentication (TOTP) is enforced on all control panels. Password-based root SSH access is disabled in favor of private SSH keys.",
    sec_dns_title: "DNS Server Hardening",
    sec_dns_desc: "The DNS server is only reachable from my local network and my VPN thanks to a restrictive UFW firewall. SSH is key-only and security updates install automatically.",
    mon_eyebrow: "Observability",
    mon_title: "Hardware Monitoring.",
    mon_desc: "I leverage the Proxmox API integrated with <strong>Beszel</strong> to monitor server health daily (CPU, RAM, disk usage, temperatures).",
    mon_caption: "Real-time tracking of system load, network traffic, and disk storage metrics via Beszel.",
    fut_eyebrow: "Upcoming Projects",
    fut_title: "Planned Upgrades.",
    fut_desc: "My home lab serves as a continuous sandbox. Here is what I plan to implement next:",
    fut_vps_title: "Relay Server (VPS)",
    fut_vps_desc: "I plan to deploy a remote VPS acting as a public proxy shield, keeping my home IP address completely hidden when exposing services.",
    fut_nas_title: "Personal NAS",
    fut_nas_desc: "Installing TrueNAS with a 2-disk RAID array (4TB) to gain hands-on experience with hardware redundancy and secure family backups.",
    fut_hw_title: "Hardware Upgrade",
    fut_hw_desc: "Upgrading server RAM to 64GB and adding NVMe SSD storage to support heavier workloads and upcoming LXC containers.",
    fut_ai_title: "Local AI Infrastructure",
    fut_ai_desc: "Exploring self-hosted Large Language Models (LLMs) by allocating dedicated compute resources to experiment with Ollama.",
    footer_text: "Designed & Administered by Liandro Gameiro da Silva — HEG Geneva"
  }
};

const storageKey = "preferredLanguage";
const readLanguage = () => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};
const saveLanguage = lang => {
  try {
    localStorage.setItem(storageKey, lang);
  } catch {
    // La page reste fonctionnelle si le stockage est désactivé.
  }
};

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : "fr";
  const dictionary = translations[selectedLanguage];
  if (!dictionary) return;

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.page_title;
  document.querySelectorAll(".lang-btn").forEach(button => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
  });
  saveLanguage(selectedLanguage);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const closeMenu = () => {
    if (!navigation || !menuToggle) return;
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });
    navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("click", event => {
      if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
  }

  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("active"));
  }

  const sections = [...document.querySelectorAll("main section")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const backToTop = document.querySelector(".back-to-top");
  const updateActiveLink = () => {
    const current = sections.reduce((activeId, section) => {
      return window.scrollY >= section.offsetTop - 250 ? section.id : activeId;
    }, "hero");
    navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${current}`));
  };
  let scrollFrame = null;
  const updateScrollState = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      updateActiveLink();
      if (backToTop) {
        backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight);
      }
      scrollFrame = null;
    });
  };
  updateActiveLink();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  const savedLanguage = readLanguage();
  setLanguage(savedLanguage === "en" ? "en" : "fr");
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Visionneuse interactive (Lightbox)
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox-modal";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Vue agrandie de l'image");
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" type="button" aria-label="Fermer la vue agrandie">&times;</button>
      <img class="lightbox-img" src="" alt="">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector(".lightbox-img");
  const lbCaption = lightbox.querySelector(".lightbox-caption");
  const lbClose = lightbox.querySelector(".lightbox-close");

  const closeLightbox = () => {
    lightbox.classList.remove("is-active");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".media-container img").forEach(img => {
    img.addEventListener("click", () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      const captionEl = img.parentElement.querySelector(".image-caption");
      lbCaption.textContent = captionEl ? captionEl.textContent : img.alt;
      lightbox.classList.add("is-active");
      document.body.style.overflow = "hidden";
    });
  });

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox.classList.contains("is-active")) {
      closeLightbox();
    }
  });
});
