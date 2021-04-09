import {
  PhoneIcon,
  ChatIcon,
  DevelopersIcon,
  InsightsIcon,
  IntegrationsIcon,
  ServerIcon,
  SamespaceAIIcon,
} from "@/components/Icons";

const pricingStructure = [
  {
    id: 1,
    sectionTitle: "Phone",
    sectionIcon: <PhoneIcon />,
    features: [
      {
        name: "Call Queues with Automatic callback.",
        growth: true,
        enterprise: true,
      },
      {
        name: "Skill based Routing",
        growth: true,
        enterprise: true,
      },
      {
        name: "Call Recording - Stereo",
        growth: true,
        enterprise: true,
        description:
          "Dual channel call recording  identities  Caller and Callee for transcription and sentiment analysis.",
      },
      {
        name: "Preview & Progressive Dialer",
        growth: true,
        enterprise: true,
      },
      {
        name: "Predictive Dialer",
        growth: false,
        enterprise: true,
      },
      {
        name: "Auto Voicemail Drop",
        growth: true,
        enterprise: true,
        description: "Pre recorded voicemail to save agent time.",
      },
      {
        name: "Drag & Drop IVR",
        growth: true,
        enterprise: true,
      },
      {
        name: "Multiparty Conference",
        growth: true,
        enterprise: true,
      },
      {
        name: "Click-to-Call",
        growth: true,
        enterprise: true,
      },
      {
        name: "Webcall",
        growth: true,
        enterprise: true,
        description:
          "Website visitors can make Internet calls bypassing toll charges.",
      },
      {
        name: "CSAT Surveys",
        growth: true,
        enterprise: true,
      },
      {
        name: "Smart Caller ID & Phone Number Masking",
        growth: true,
        enterprise: true,
        description:
          "Set caller IDs based on the called destinations. Mask phone numbers from agent for security and privacy reasons",
      },
      {
        name: "Do-Not-Call",
        growth: true,
        enterprise: true,
      },
      {
        name: "SIP & WebRTC Endpoints",
        growth: true,
        enterprise: true,
        description: "Agents can use Deskphones or call directly from the web",
      },
      {
        name: "Integrated Global VoIP",
        growth: true,
        enterprise: true,
        description:
          "High quality global phone network with local phone numbers in 100+ Countries",
      },
    ],
  },
  {
    id: 2,
    sectionTitle: "Chat & Messaging",
    sectionIcon: <ChatIcon />,
    features: [
      {
        name: "Origin & URL based Routing",
        growth: true,
        enterprise: true,
        description:
          "Restrict chat widget to certain geographies and route to  different teams based on the webpage",
      },
      {
        name: "Rich Media & Gallery",
        growth: true,
        enterprise: true,
      },
      {
        name: "Custom Theme & Appearance",
        growth: true,
        enterprise: true,
      },
      {
        name: "Customer Feedback",
        growth: true,
        enterprise: true,
      },
      {
        name: "Twitter",
        growth: false,
        enterprise: true,
      },
      {
        name: "WhatsApp",
        growth: false,
        enterprise: true,
      },
      {
        name: "Facebook Messenger",
        growth: false,
        enterprise: true,
      },
    ],
  },
  {
    id: 3,
    sectionTitle: "AI",
    sectionIcon: <SamespaceAIIcon />,
    features: [
      {
        name: "Voicebot",
        growth: "$0.02/min",
        enterprise: "Contact Sales",
        description: "A virtual Agent that can talk like live agents.",
        clickable: true,
      },
      {
        name: "Chatbot",
        growth: "$0.005/message",
        enterprise: "Contact Sales",
        description: "A virtual Agent that can chat like live agent.",
        clickable: true,
      },
      {
        name: "Custom AI Training",
        growth: false,
        enterprise: true,
        description:
          "Custom AI Models built on  your dataset to get maximum performance and accuracy",
      },
      {
        name: "Transcription & Sentiment Analysis",
        growth: false,
        enterprise: true,
        description: "Transcription, sentiments and keyword extraction.",
      },
      {
        name: "AI Assistance for live agents",
        growth: false,
        enterprise: true,
        description:
          "Help live agents in real time with tips and suggestions based on the detected context",
      },
      {
        name: "Voicebot Predictive Dialer",
        growth: false,
        enterprise: true,
        description: "Automate call workflow to save live agent time",
      },
      {
        name: "Third party contact center integration",
        growth: false,
        enterprise: true,
        description:
          "Works with third party solutions like Genesys, Cisco and Avaya etc",
      },
    ],
  },

  {
    id: 4,
    sectionTitle: "Insights & Analytics",
    sectionIcon: <InsightsIcon />,
    features: [
      {
        name: "Real time Monitoring & Training",
        growth: true,
        enterprise: true,
      },
      {
        name: "Custom Dashboards & Reporting",
        growth: true,
        enterprise: true,
      },
      {
        name: "Third party data connectors",
        growth: false,
        enterprise: true,
      },
    ],
  },

  {
    id: 5,
    sectionTitle: "Developers",
    sectionIcon: <DevelopersIcon />,
    features: [
      {
        name: "Call Control API",
        growth: true,
        enterprise: true,
      },
      {
        name: "Webhooks",
        growth: true,
        enterprise: true,
      },
      {
        name: "Serverless Functions",
        growth: false,
        enterprise: true,
      },
      {
        name: "Speech Recognition & Synthesis",
        growth: false,
        enterprise: true,
        description: "Speech-to-Text and Text-to-Speech APIs",
      },
      {
        name: "Phone & Chat SDK",
        growth: false,
        enterprise: true,
        description: "Integrate Webcall and Chat on custom web pages",
      },
    ],
  },
  {
    id: 6,
    sectionTitle: "Integrations",
    sectionIcon: <IntegrationsIcon />,
    features: [
      {
        name: "Salesforce (Native)",
        growth: true,
        enterprise: true,
        description:
          "Omnichannel Samespace Agent App  tightly integrated within Salesforce",
      },
      {
        name: "Hubspot (Native)",
        growth: true,
        enterprise: true,
        description:
          "Omnichannel Samespace Agent App  tightly integrated within Hubspot",
      },
      {
        name: "Zendesk",
        growth: true,
        enterprise: true,
      },
      {
        name: "Service Now",
        growth: true,
        enterprise: true,
      },
      {
        name: "Pipedrive",
        growth: true,
        enterprise: true,
      },
      {
        name: "Microsoft Dynamics",
        growth: true,
        enterprise: true,
      },

      {
        name: "Zapier",
        growth: true,
        enterprise: true,
      },

      {
        name: "Slack",
        growth: true,
        enterprise: true,
      },
      {
        name: "Email & SMS",
        growth: true,
        enterprise: true,
      },

      {
        name: "SSO (Single Sign On)",
        growth: false,
        enterprise: true,
      },
      {
        name: "Custom URL",
        growth: false,
        enterprise: true,
      },
      {
        name: "G Suite",
        growth: false,
        enterprise: true,
      },
      {
        name: "Microsoft Active Directory",
        growth: false,
        enterprise: true,
      },
      {
        name: "Custom Integrations",
        growth: false,
        enterprise: true,
      },
    ],
  },

  {
    id: 7,
    sectionTitle: "Deployment, Onboarding & Support",
    sectionIcon: <ServerIcon />,
    features: [
      {
        name: "Cloud Deployment",
        growth: true,
        enterprise: true,
      },
      {
        name: "On-Prem Deployment",
        growth: false,
        enterprise: true,
      },
      {
        name: "Personalized Onboarding",
        growth: true,
        enterprise: true,
      },
      {
        name: "Dedicated Account Manager",
        growth: true,
        enterprise: true,
      },
      {
        name: "24/7 Email, Chat, Phone Support",
        growth: true,
        enterprise: true,
      },

      {
        name: "99.999% guaranteed uptime SLA",
        growth: false,
        enterprise: true,
      },
    ],
  },
];

export default pricingStructure;
