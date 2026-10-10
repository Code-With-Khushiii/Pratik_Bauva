import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Menu, Linkedin, X, MapPin, ClipboardList, Network, ShieldCheck, Server, Cloud, Database, Users, Award, ArrowUpRight, GraduationCap, Rocket } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Technical Program Manager with 10+ years of experience leading enterprise implementations across SaaS, cloud-integrated platforms, AV systems, networking, security, and IT infrastructure. Drives end-to-end programs from requirements gathering, scope definition, risk management, and technical readiness through deployment, go-live, customer adoption, and transition to operations while aligning engineering, product, sales, security, and executive stakeholders. Trained 1,200+ enterprise users and improved technical issue resolution time by 40%, combining cross-functional leadership, stakeholder management, escalation management, and customer success to deliver production-ready enterprise solutions.";

  const experience = [
    {
      company: "Laerdal Medical",
      role: "Technical Project Implementation Engineer",
      location: "New York, USA",
      dates: "2020 – Present",
      highlights: [
        "Direct end-to-end enterprise implementation programs across healthcare environments, owning requirements discovery, scope definition, project planning, technical readiness, deployment, go-live, escalation resolution, and operational handoff.",
        "Orchestrate cross-functional delivery across 7+ stakeholder groups, including customer IT, networking, security, audiovisual, engineering, product, sales, and training teams, aligning technical requirements, ownership, milestones, dependencies, and acceptance criteria.",
        "Govern concurrent enterprise deployments through project plans, schedules, milestones, and RAID tracking, maintaining technical documentation and stakeholder communication to ensure delivery readiness and accountability.",
        "Translate business and technical requirements into implementation plans spanning 6+ infrastructure domains, including servers, networking, security, audiovisual systems, software platforms, and identity and access management.",
        "Architect deployment requirements across VLANs, network topology, firewall configurations, access controls, security policies, and SimCapture environments to enable secure, production-ready enterprise implementations.",
        "Execute installation, configuration, integration testing, validation, and go-live readiness across 4+ technology layers, including AV hardware, servers, enterprise networks, and SaaS/software platforms.",
        "Diagnose and resolve Tier 2/3 issues across applications, databases, storage, connectivity, access permissions, servers, and network infrastructure, driving escalations through root-cause analysis and coordinated remediation.",
        "Administer enterprise identity and infrastructure environments across 8+ technologies, including Active Directory, LDAP, Exchange, DNS, DHCP, Windows Server, Group Policy, and server roles and privileges.",
        "Coordinate vulnerability remediation, security patching, firewall requirements, access controls, and infrastructure hardening with customer and internal technical teams to strengthen deployment security and operational readiness.",
        "Track implementation health, risks, issues, dependencies, escalations, and executive-level status across Jira, Zendesk, Salesforce, Microsoft Teams, and Excel, driving timely decisions and corrective actions across concurrent deployments."
      ]
    },
    {
      company: "Laerdal Medical",
      role: "Technical Implementation Engineer",
      location: "New York, USA",
      dates: "2016 – 2020",
      highlights: [
        "Managed end-to-end enterprise customer implementations from technical discovery and requirements validation through installation, integration, troubleshooting, go-live, and transition to operational support.",
        "Partnered with Sales, customer IT teams, and internal technical stakeholders to evaluate solution viability, define implementation scope, validate infrastructure requirements, identify integration dependencies, and mitigate deployment risks.",
        "Coordinated deployment activities across 4+ stakeholder functions, including IT, networking, security, and end-user teams, resolving technical blockers and maintaining implementation readiness throughout the customer lifecycle.",
        "Trained 1,200+ enterprise users on deployed software and technology solutions, strengthening user adoption, operational readiness, platform utilization, and post-implementation customer success.",
        "Resolved Tier 2/3 technical incidents across APIs, databases, servers, enterprise software, and system integrations, owning root-cause analysis, escalation management, stakeholder communication, and issue resolution through closure."
      ]
    },
    {
      company: "Boards of Cooperative Educational Services",
      role: "Network Technician",
      location: "Rochester, NY",
      dates: "2015",
      highlights: [
        "Reduced incident resolution time by 40% by diagnosing and resolving Tier 2/3 issues across Windows Server, endpoints, user accounts, Outlook, storage, backups, and enterprise network environments.",
        "Administered SCCM, Active Directory, Group Policy, endpoint management, patching, Cisco switches, routers, and enterprise network services, maintaining secure and stable infrastructure operations.",
        "Troubleshot TCP/IP connectivity, access permissions, server availability, endpoint configuration, storage, and network infrastructure issues, restoring service availability and minimizing operational disruption."
      ]
    }
  ];

  const impactAreas = [
    {
      category: "Program Leadership",
      title: "End-to-End Enterprise Implementations",
      metric: "7+",
      metricLabel: "Stakeholder groups aligned",
      description: "Owns healthcare implementation programs from requirements discovery and scope through go-live and operational handoff, aligning IT, networking, security, AV, engineering, product, sales, and training."
    },
    {
      category: "Delivery Governance",
      title: "Concurrent Deployment Oversight",
      metric: "RAID",
      metricLabel: "Risk, assumption, issue & dependency tracking",
      description: "Governs concurrent deployments through project plans, milestones, and executive-level status across Jira, Zendesk, Salesforce, Microsoft Teams, and Excel."
    },
    {
      category: "Solution Architecture",
      title: "Secure, Production-Ready Deployments",
      metric: "6+",
      metricLabel: "Infrastructure domains",
      description: "Translates requirements into implementation plans across servers, networking, security, AV systems, software platforms, and IAM — including VLANs, firewalls, and SimCapture environments."
    },
    {
      category: "Customer Success",
      title: "Enterprise User Enablement",
      metric: "1,200+",
      metricLabel: "Enterprise users trained",
      description: "Trained users on deployed software and technology solutions, strengthening adoption, operational readiness, and post-implementation customer success."
    },
    {
      category: "Escalation Management",
      title: "Tier 2/3 Issue Resolution",
      metric: "−40%",
      metricLabel: "Incident resolution time",
      description: "Drives root-cause analysis and coordinated remediation across applications, databases, storage, connectivity, servers, and network infrastructure."
    },
    {
      category: "Infrastructure & Identity",
      title: "Enterprise Environment Administration",
      metric: "8+",
      metricLabel: "Identity & infra technologies",
      description: "Administers Active Directory, LDAP, Exchange, DNS, DHCP, Windows Server, and Group Policy, while coordinating patching, vulnerability remediation, and hardening."
    }
  ];

  const skillCategories = [
    {
      icon: ClipboardList,
      title: 'Program & Implementation Management',
      skills: ['Technical Program Management', 'Technical Account Management', 'Enterprise Implementations', 'Program Planning', 'Requirements Gathering', 'Scope Management', 'Risk & Issue Management', 'RAID Management', 'Vendor Management', 'Escalation Management', 'Go-Live Readiness', 'Agile', 'Scrum']
    },
    {
      icon: Users,
      title: 'Program & Customer Platforms',
      skills: ['Jira', 'Zendesk', 'Salesforce', 'Microsoft Teams', 'Microsoft Excel', 'SimCapture']
    },
    {
      icon: Cloud,
      title: 'Cloud, SaaS & Integrations',
      skills: ['SaaS Platforms', 'Enterprise Integrations', 'APIs', 'Databases', 'Oracle Cloud Infrastructure (OCI)', 'Amazon Web Services (AWS)']
    },
    {
      icon: Server,
      title: 'Infrastructure & Identity',
      skills: ['Windows Server 2008–2020', 'Active Directory', 'LDAP', 'Microsoft Exchange', 'DNS', 'DHCP', 'Group Policy', 'SCCM', 'Endpoint Management']
    },
    {
      icon: ShieldCheck,
      title: 'Networking & Security',
      skills: ['TCP/IP', 'IPv4/IPv6', 'VLANs', 'VPNs', 'Firewalls', 'Access Control Lists (ACLs)', 'IDS/IPS', 'Encryption', 'Wireshark', 'Cisco Switches', 'Cisco Routers']
    },
    {
      icon: Database,
      title: 'Data & Development',
      skills: ['SQL', 'MySQL', 'C#', 'Java', '.NET', 'MATLAB', 'Visual Studio']
    }
  ];

  const certifications = [
    { title: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", status: "Certified" },
    { title: "Oracle Cloud Infrastructure Foundations Certified Associate", issuer: "Oracle", status: "Certified" },
    { title: "Extron AV Associate", issuer: "Extron", status: "Certified" },
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services", status: "In Progress" }
  ];

  const education = [
    {
      school: "Rochester Institute of Technology",
      degree: "Master of Science (M.S.) in Telecommunications Engineering Technology",
      location: "Rochester, NY"
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering (B.E.) in Electronics Engineering",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden font-display text-black tracking-widest text-sm">PRATIK BAUVA</div>
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              {photoFailed ? (
                <div className="w-36 h-36 rounded-full mx-auto mb-6 bg-black text-white flex items-center justify-center border-4 border-brown/30 shadow-lg">
                  <span className="text-5xl font-display tracking-wide">PB</span>
                </div>
              ) : (
                <img
                  src="images/image.png"
                  alt="Pratik Bauva"
                  onError={() => setPhotoFailed(true)}
                  className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
                />
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              PRATIK BAUVA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Technical Program Manager · Enterprise Implementations
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Ashburn, VA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mt-6 mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 text-center">
            {[
              { label: 'EXPERIENCE', value: '10+ Yrs', detail: 'Enterprise Implementations' },
              { label: 'USERS TRAINED', value: '1,200+', detail: 'Enterprise End Users' },
              { label: 'RESOLUTION TIME', value: '−40%', detail: 'Faster Issue Resolution' },
              { label: 'STAKEHOLDERS', value: '7+', detail: 'Groups Aligned per Program' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Taking complex enterprise programs from requirements to go-live — and making sure they stay production-ready after handoff.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Rocket,
                title: 'Program Delivery',
                detail: 'Leads implementations end to end — requirements, scope, risk, and technical readiness through deployment, go-live, and transition to operations.'
              },
              {
                icon: Network,
                title: 'Technical Depth',
                detail: 'Hands-on across networking, security, identity, servers, AV systems, and SaaS platforms, backed by CCNA and OCI certifications and an M.S. from RIT.'
              },
              {
                icon: Users,
                title: 'Stakeholder Alignment',
                detail: 'Aligns engineering, product, sales, security, and executive stakeholders, trained 1,200+ enterprise users, and drives escalations through to closure.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              A decade of enterprise implementation, program delivery, and infrastructure experience.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">IMPACT AREAS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Where program leadership meets hands-on technical delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-sm border border-brown/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="mb-6">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {area.category}
                  </span>
                </div>
                <div className="text-3xl font-display text-black mb-1">{area.metric}</div>
                <div className="text-xs tracking-widest text-brown/70 uppercase mb-6">{area.metricLabel}</div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {area.title}
                </h3>
                <p className="text-brown leading-relaxed font-light text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Program management, enterprise platforms, and infrastructure expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm shadow-sm border border-brown/10 flex items-start gap-5">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-black tracking-wide leading-snug mb-1">{cert.title}</h3>
                  <p className="text-brown font-light text-sm">
                    {cert.issuer} · <span className="font-medium">{cert.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10 flex items-start gap-6">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0 md:ml-6 flex-shrink-0">
                    {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's talk about technical program management, enterprise implementations, or customer-facing delivery roles.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+12027664736"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (202) 766-4736
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:bauva.pratik8980@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors break-all"
              >
                bauva.pratik8980@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/pratikbauva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors inline-flex items-center"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">Ashburn, VA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © {new Date().getFullYear()} Pratik Bauva · Technical Program Management & Enterprise Implementations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
