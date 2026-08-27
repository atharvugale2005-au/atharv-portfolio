export const personalInfo = {
  name: "Atharv Ugale",
  title: "Electronics & Telecommunication Engineering Student | Embedded Systems & AI/ML",
  tagline: "Building embedded systems and AI-powered hardware — from PCBs to intelligent automation.",
  about: "Student of Electronics & Telecommunication Engineering with practical exposure to embedded system design, IoT, PCB designing, and programming. Competent in developing projects using STM32, ESP32, and Raspberry Pi — including smart voice assistants and automation applications. Passionate about electronics and artificial intelligence.",
  phone: "+91-9130324426",
  email: "atharvugale2005@gmail.com",
  linkedin: "https://linkedin.com/in/atharv-ugale",
  linkedinHandle: "linkedin.com/in/atharv-ugale",
  location: "Pune / Satara, Maharashtra, India",
  status: "Available for Internships & Core Engineering Roles",
  stats: [
    { label: "Hardware & AI Projects", value: "5+", target: 5, suffix: "+" },
    { label: "Industry Internships", value: "2", target: 2, suffix: "" },
    { label: "Diploma Distinction", value: "84.76%", target: 84.76, suffix: "%", decimals: 2 },
    { label: "B.Tech CGPA", value: "7.95", target: 7.95, suffix: "/10", decimals: 2 }
  ],
  pillars: [
    {
      title: "Embedded System Design",
      description: "Hands-on firmware engineering in C/C++ on STM32, ESP32, and Raspberry Pi with custom peripheral interfacing."
    },
    {
      title: "Edge AI & Computer Vision",
      description: "Deploying optimized YOLO and OpenCV vision pipelines onto resource-constrained embedded targets (NCNN/ONNX)."
    },
    {
      title: "PCB & Hardware Prototyping",
      description: "End-to-end circuit design, sensor integration, CAN bus networking, and precision 3D-printed mechanical enclosures."
    }
  ]
};

export const experiences = [
  {
    company: "Krishigati Pvt. Ltd.",
    role: "AI-ML & Embedded Intern",
    period: "June 2026 – Present",
    location: "Pune, India",
    type: "Internship",
    description: [
      "Contributed to hardware and application development involving embedded systems and AI/ML techniques.",
      "Assisted in real-time data analysis, sensor calibration, hardware testing, and collaborative engineering tasks.",
      "Gained hands-on experience integrating software intelligence with embedded hardware on automated field rover platforms."
    ],
    tools: ["Machine Learning", "AI", "Raspberry Pi", "Sensor Integration", "Embedded Hardware"]
  },
  {
    company: "Edunet Foundation",
    role: "AI & Cloud Intern",
    period: "June 2025 – July 2025",
    location: "Remote / Hybrid",
    type: "Internship",
    description: [
      "Worked on machine learning models and autonomous AI agents deployed on IBM Cloud infrastructure.",
      "Gained practical knowledge of cloud service architectures, AI workflows, and emerging intelligent tech.",
      "Implemented data preprocessing pipelines and evaluated model prediction metrics."
    ],
    tools: ["IBM Cloud", "Machine Learning", "AI", "Python", "Cloud Architecture"]
  }
];

export const projects = [
  {
    id: "krishigati-rover",
    title: "AI Tomato Leaf Disease Detection & Precision Spray Rover",
    category: "AI & Computer Vision",
    subtitle: "B.Tech Final-Year Capstone Project",
    period: "Final Year B.Tech",
    teamSize: "Capstone Lead",
    summary: "Autonomous agricultural rover with YOLO-based real-time disease detection on a headless Raspberry Pi 5 and dual micro-valve precision sprayers.",
    tags: ["Raspberry Pi 5", "YOLO", "Computer Vision", "Robotics", "OpenSCAD", "NCNN/ONNX", "Python"],
    highlight: "Real-time edge inference with custom 3D-printed mounts & automated proportional spray valves.",
    details: {
      problem: "Traditional agricultural spraying causes massive pesticide wastage, soil degradation, and high operational costs due to non-targeted application.",
      solution: "Engineered an intelligent rover powered by a headless Raspberry Pi 5 running optimized YOLO object detection (NCNN/ONNX) to identify tomato leaf diseases in real time and trigger precision targeted micro-sprayers.",
      keyFeatures: [
        "YOLO-based real-time video inference on headless Raspberry Pi 5 using NCNN and ONNX runtime optimizations.",
        "Dual side-facing camera system paired with stepper-motor-actuated micro ball valves for proportional chemical spraying.",
        "Advanced vision pipeline: Per-disease HSV masking, CLAHE contrast enhancement, and temporal smoothing to eliminate false positives under varying natural sunlight.",
        "System health telemetry monitoring CPU core temperature and power constraints under continuous edge workload.",
        "Custom vibration-dampened 3D-printed camera mounts and chassis brackets designed from scratch in OpenSCAD."
      ],
      hardware: ["Raspberry Pi 5 (8GB)", "Dual HD Camera Modules", "Stepper Motor Actuators", "Micro Ball Valves", "Custom 3D-Printed Brackets (Bambu Lab)"],
      software: ["Python", "YOLOv8", "OpenCV", "ONNX Runtime", "NCNN", "OpenSCAD"]
    }
  },
  {
    id: "can-ids",
    title: "Intrusion Detection System for Controller Area Network (CAN)",
    category: "Embedded & IoT",
    subtitle: "In-Vehicle Automotive Cyber Defense",
    period: "Aug 2025 – Apr 2026",
    teamSize: "Team of 4",
    summary: "Real-time CAN bus cybersecurity IDS using Raspberry Pi to detect anomalous in-vehicle communication patterns and spoofing attacks.",
    tags: ["Raspberry Pi", "ESP32", "CAN Protocol", "Cybersecurity", "Embedded C", "Python"],
    highlight: "Monitored in-vehicle CAN bus traffic in real-time with ESP32-based attack injection testing.",
    details: {
      problem: "Modern vehicle CAN buses lack built-in authentication and encryption, making them susceptible to frame spoofing, replay attacks, and denial-of-service intrusions.",
      solution: "Developed an inline intrusion detection system where a Raspberry Pi acts as a traffic monitor and anomaly classifier, while an ESP32 simulates adversarial automotive cyberattacks to validate detection latency and accuracy.",
      keyFeatures: [
        "Real-time CAN frame packet inspection and timing interval anomaly classification.",
        "ESP32-based penetration testing unit configured to inject fuzzing, DoS, and unauthorized arbitration ID spoofing frames.",
        "Low-latency detection algorithm designed to flag cyber threats before vehicle subsystems are compromised.",
        "Statistical payload inspection identifying abnormal sensor telemetry variations."
      ],
      hardware: ["Raspberry Pi 4", "ESP32 DevKit", "MCP2515 CAN Transceiver Modules", "Automotive Test Bench"],
      software: ["Python", "SocketCAN", "Embedded C", "Linux Kernel CAN Utilities", "Matplotlib"]
    }
  },
  {
    id: "voice-assistant",
    title: "IoT-Based Smart Voice Assistant",
    category: "Hardware & Control",
    subtitle: "Custom PCB & Wireless Automation",
    period: "Oct 2024 – Apr 2025",
    teamSize: "Team of 4",
    summary: "Voice-controlled IoT assistant with speech recognition, wireless device automation, and custom engineered PCB hardware.",
    tags: ["ESP32", "IoT", "PCB Design", "Speech Recognition", "Embedded C", "Hardware Prototyping"],
    highlight: "Designed custom 2-layer PCB integrating microphone, audio amplifier, ESP32, and relay controls.",
    details: {
      problem: "Commercial smart home assistants are expensive, rely heavily on cloud privacy compromises, and lack direct low-level hardware customization.",
      solution: "Architected a voice-controlled IoT hub around the ESP32 microcontroller with a custom manufactured PCB, onboard audio processing, and Wi-Fi home automation relays.",
      keyFeatures: [
        "Engineered a dedicated 2-layer PCB integrating I2S digital microphone, audio amplifier, ESP32 SoC, and power regulation circuitry.",
        "Implemented local keyword listening and cloud speech-to-text processing for responsive appliance switching.",
        "Integrated dual wireless connectivity (Wi-Fi & Bluetooth) for local mesh control and remote dashboard access.",
        "Compact form factor with low thermal footprint and optimized quiescent current draw."
      ],
      hardware: ["ESP32-WROOM-32", "INMP441 I2S Microphone", "MAX98357A I2S Amplifier", "Custom PCB", "Optocoupler Relay Module"],
      software: ["Embedded C / C++", "ESP-IDF / Arduino", "KiCad PCB Designer", "MQTT Protocol"]
    }
  },
  {
    id: "attendance-opencv",
    title: "Automated Attendance System via Face Recognition",
    category: "AI & Computer Vision",
    subtitle: "Edge Vision & Database Integration",
    period: "Feb 2024 – May 2024",
    teamSize: "Team of 3",
    summary: "Contactless automated attendance tracking using Raspberry Pi and OpenCV with instant database record logging.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "Database Management", "Face Recognition"],
    highlight: "Automated face detection and matching pipeline with instantaneous SQL logging and export.",
    details: {
      problem: "Manual attendance logging and biometric fingerprint scanners are time-consuming, prone to proxy entries, and unhygienic.",
      solution: "Created a standalone vision system using a Raspberry Pi and high-definition camera module running OpenCV face detection algorithms linked to a local database.",
      keyFeatures: [
        "Haar Cascades and LBPH face recognizer for fast, reliable facial verification.",
        "Automated timestamp and student ID logging into a relational database to prevent duplicate entries within the same session.",
        "Real-time visual bounding box UI and verification status indicators.",
        "Automated attendance report generation with export to CSV/Excel formats for administrative staff."
      ],
      hardware: ["Raspberry Pi", "5MP Camera Module", "LCD Verification Display"],
      software: ["Python 3", "OpenCV", "SQLite", "Tkinter GUI", "Pandas"]
    }
  },
  {
    id: "lift-control-stm32",
    title: "Automatic Multi-Floor Lift Control System",
    category: "Hardware & Control",
    subtitle: "Real-Time Embedded Firmware Logic",
    period: "Jan 2025 – Jul 2025",
    teamSize: "Team of 3",
    summary: "Microcontroller-based elevator control architecture managing floor selection, priority dispatch, door operations, and safety interlocks.",
    tags: ["STM32", "Embedded Systems", "Embedded C", "ARM Cortex-M", "State Machines", "Hardware Design"],
    highlight: "Real-time state machine programmed in Embedded C on STM32 ARM Cortex microcontroller.",
    details: {
      problem: "Elevator systems require strictly deterministic, fail-safe control logic where latency or unhandled edge cases can create severe safety hazards.",
      solution: "Implemented a complete multi-floor elevator controller utilizing an STM32 ARM Cortex microcontroller with deterministic finite-state-machine (FSM) firmware.",
      keyFeatures: [
        "Deterministic Embedded C firmware executing floor scheduling algorithms and request queueing.",
        "Comprehensive safety interlock monitoring: emergency brake triggers, door obstacle sensors, and overload detection.",
        "Stepper motor speed profile ramping (acceleration/deceleration) for smooth cabin transit between floors.",
        "7-segment display status multiplexing and cabin interior/hall call button debounce logic."
      ],
      hardware: ["STM32F4 / STM32F1 Microcontroller", "Stepper Motor & Driver", "Limit Switches", "IR Proximity Sensors", "7-Segment Displays"],
      software: ["Embedded C", "STM32CubeIDE", "STM32CubeMX", "Keil uVision"]
    }
  }
];

export const skills = [
  {
    category: "Hardware & Embedded",
    description: "Microcontrollers, custom PCB layout, hardware debugging, and automotive protocols.",
    icon: "Cpu",
    items: [
      { name: "STM32", level: "Advanced", desc: "ARM Cortex-M, STM32CubeIDE, Bare-metal & HAL", pct: 90 },
      { name: "ESP32", level: "Advanced", desc: "Wi-Fi/BLE, ESP-IDF, FreeRTOS, IoT nodes", pct: 92 },
      { name: "Raspberry Pi", level: "Advanced", desc: "Linux SBCs, Headless RPi 5, GPIO control", pct: 95 },
      { name: "PCB Design", level: "Proficient", desc: "Schematic capture, routing, KiCad", pct: 85 },
      { name: "CAN Protocol", level: "Proficient", desc: "Automotive bus, frame analysis, MCP2515", pct: 82 }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Computer vision pipelines, deep learning edge deployment, and cloud AI services.",
    icon: "Brain",
    items: [
      { name: "Machine Learning", level: "Proficient", desc: "Model training, evaluation, feature engineering", pct: 84 },
      { name: "Computer Vision", level: "Advanced", desc: "Real-time video analysis, tracking, segmentation", pct: 92 },
      { name: "OpenCV", level: "Advanced", desc: "Image filtering, CLAHE, HSV masking, contour detection", pct: 90 },
      { name: "YOLO (v8/NCNN)", level: "Advanced", desc: "Edge object detection, model quantization, ONNX", pct: 88 },
      { name: "IBM Cloud AI", level: "Intermediate", desc: "Cloud AI models, agentic workflows, API integration", pct: 78 }
    ]
  },
  {
    category: "Programming Languages",
    description: "Firmware and software development across systems and application layers.",
    icon: "Code",
    items: [
      { name: "Python", level: "Advanced", desc: "Data analysis, OpenCV, PyTorch/YOLO, backend automation", pct: 94 },
      { name: "Embedded C", level: "Advanced", desc: "Low-level registers, DMA, timers, interrupts, I2C/SPI/UART", pct: 90 }
    ]
  },
  {
    category: "Cloud & Platforms",
    description: "Cloud infrastructure, simulation environments, and tooling platforms.",
    icon: "Cloud",
    items: [
      { name: "AWS", level: "Intermediate", desc: "EC2, S3, IoT Core, CloudWatch", pct: 75 },
      { name: "IBM Cloud", level: "Proficient", desc: "AI services, Cloud Foundry, Watson Assistant", pct: 82 },
      { name: "MATLAB", level: "Proficient", desc: "Signal processing, control systems, mathematical modeling", pct: 80 }
    ]
  },
  {
    category: "Design & Fabrication",
    description: "Parametric mechanical CAD modeling and additive manufacturing.",
    icon: "Box",
    items: [
      { name: "OpenSCAD", level: "Advanced", desc: "Parametric 3D CAD modeling via procedural code", pct: 90 },
      { name: "3D Printing (Bambu Lab)", level: "Advanced", desc: "Rapid prototyping, slicing, tolerance optimization", pct: 92 }
    ]
  }
];

export const education = [
  {
    institution: "MIT Academy of Engineering, Pune",
    degree: "B.Tech in Electronics & Telecommunication Engineering",
    period: "2024 – 2027",
    score: "CGPA: 7.95 / 10",
    status: "Currently Pursuing",
    highlights: "Focusing on Embedded Systems, Edge AI, Robotics, and IoT systems. Active member of technical innovation teams."
  },
  {
    institution: "Government Polytechnic Karad",
    degree: "Diploma in Electronics & Telecommunication Engineering",
    period: "2021 – 2024",
    score: "84.76% (Distinction)",
    status: "Completed",
    highlights: "Served as Technical Head of the Electronics & Telecommunication Student Association (ETSA). Awarded 1st Prize in ElectroDuel."
  },
  {
    institution: "Annasaheb Kalyani Vidyalaya, Satara",
    degree: "Secondary School Certificate (SSC 10th - MSBSHSE)",
    period: "2021",
    score: "86.40%",
    status: "Completed",
    highlights: "Excellence in mathematics and sciences with active participation in athletic sports competitions."
  }
];

export const achievements = [
  {
    title: "1st Prize — ElectroDuel Competition",
    issuer: "Dept. of Electrical Engineering, Government Polytechnic Karad",
    icon: "Trophy",
    type: "Award",
    description: "Secured first place in the technical hardware & circuit troubleshooting competition competing against regional engineering teams."
  },
  {
    title: "Media Excellence Award",
    issuer: "Dept. of Electronics & Telecommunication Engineering, Government Polytechnic Karad",
    icon: "Award",
    type: "Honour",
    description: "Recognized for exceptional contribution to technical media coverage, department documentation, and event organization."
  }
];

export const extracurriculars = [
  {
    title: "1st Prize in Kho-Kho",
    category: "Athletics & Sports",
    icon: "Medal",
    description: "Led and participated in championship victories at inter-college sports tournaments, demonstrating leadership, endurance, and team strategy."
  },
  {
    title: "Active NSS Volunteer",
    category: "Social Impact & Leadership",
    icon: "HeartHandshake",
    description: "National Service Scheme active member contributing to community outreach, literacy drives, and rural development camps."
  },
  {
    title: "Technical Head — ETSA",
    category: "Student Leadership",
    icon: "Users",
    description: "Served as Technical Head of the Electronics & Telecommunication Student Association during diploma studies, organizing workshops and hackathons."
  }
];
