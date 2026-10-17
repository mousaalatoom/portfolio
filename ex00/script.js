// --- Translations Data ---
const translations = {
  en: {
    status: "● Information Security & Networks",
    name: "Mousa Mohammad Al-Atoum",
    title: "Information Security & Networks | Al-Balqa Applied University ",
    bio: " Information Security and Networks practitione focused on network fundamentals, Active Directory administration, and Linux system defense. Applied experience in implementing administrative and technical controls for secure environments.",
    emailBtn: "Email Me",
    waBtn: "WhatsApp",
    skillsTitle: "Skills & Knowledge Base",
    skill1Name: "Python Basics & Automation",
    skill1Level: "Certified Coursework",
    skill2Name: "Active Directory Fundamentals",
    skill2Level: "Hands-on Lab Practice",
    skill3Name: "Network Security Fundamentals",
    skill3Level: "Academic & Lab Focus",
    skill4Name: "Linux Systems (Kali Linux)",
    skill4Level: "Basic Commands & Tools",
    skill5Name: "Git & GitHub",
    skill5Level: "Version Control Basics",
    skill6Name: "Web Basics (HTML/CSS/JS)",
    skill6Level: "Front-end Building",
    eduTitle: "Education & Courses",
    degreeTitle: "Associate Degree in Information Security & Networks",
    uniName: "Al-Balqa Applied University",
    degreeDesc: "Gained theoretical and foundational knowledge in network architecture, system administration, and cyber security principles.",
    courseTitle: "Python Programming Course",
    courseCompany: "Al-Raja Company",
    courseDesc: "Completed coursework covering Python programming fundamentals, basic scripting, and logical problem-solving.",
    projectsTitle: "Hands-on Labs & Projects",
    lab1Title: "Virtual Home Lab Setup (Active Directory & Kali Linux)",
    lab1Desc: "Configured a basic virtual lab environment using VirtualBox to practice Active Directory domain configuration, basic user policies, and network scanning fundamentals.",
    lab2Title: "Personal Portfolio Website",
    lab2Desc: "Designed and built a clean, responsive web interface using HTML, CSS, and JavaScript, version-controlled with Git/GitHub.",
    footerCopy: "© Mousa Mohammad Al-Atoum · Amman , Jordan",
    langButtonText: "العربية"
  },
  ar: {
    status: "● أمن المعلومات والشبكات",
    name: "موسى محمد العتوم",
    title: "أمن المعلومات والشبكات | جامعة البلقاء التطبيقية",
    bio: "متخصص وممارس في مجال أمن المعلومات والشبكات، يُركّز على أساسيات الشبكات، إدارة Active Directory، والدفاع عن أنظمة لينكس. خبرة تطبيقية في تنفيذ عناصر التحكم الفنية والإدارية لحماية البيئات التقنية.",
    emailBtn: "تواصل عبر الإيميل",
    waBtn: "واتساب",
    skillsTitle: "المهارات والأساسيات التقنية",
    skill1Name: "أساسيات بايثون والأتمتة",
    skill1Level: "دورة معتمدة",
    skill2Name: "أساسيات Active Directory",
    skill2Level: "تطبيق عملي بالمختبر",
    skill3Name: "أساسيات أمن الشبكات",
    skill3Level: "تركيز أكاديمي وعملي",
    skill4Name: "أنظمة لينكس (Kali Linux)",
    skill4Level: "أوامر وأدوات أساسية",
    skill5Name: "Git & GitHub",
    skill5Level: "أساسيات إدارة الإصدارات",
    skill6Name: "أساسيات الويب (HTML/CSS/JS)",
    skill6Level: "بناء واجهات بسيطة",
    eduTitle: "التعليم والدورات",
    degreeTitle: "أمن المعلومات والشبكات",
    uniName: "جامعة البلقاء التطبيقية",
    degreeDesc: "دراسة المفاهيم الأساسية والنظرية لمعمارية الشبكات، إدارة الأنظمة، ومبادئ الأمن السيبراني.",
    courseTitle: "دورة برمجة بايثون",
    courseCompany: "شركة الرجا",
    courseDesc: "إتمام دورة تدريبية تناولت أساسيات برمجة بايثون، كتابة السكربتات البسيطة، والمنطق البرمجي.",
    projectsTitle: "المختبرات والتطبيقات العملية",
    lab1Title: "إعداد مختبر افتراضي (Active Directory & Kali Linux)",
    lab1Desc: "بناء بيئة افتراضية باستخدام VirtualBox للتدريب على إعداد نطاق Active Directory، سياسات المستخدمين، وفحص الشبكات الأساسي.",
    lab2Title: "موقع البورتفوليو الشخصي",
    lab2Desc: "تصميم وتطوير واجهة موقع شخصي منظمة باستعمال HTML وCSS وJavaScript مع رفع المشروع على GitHub.",
    footerCopy: "© موسى محمد العتوم · عمان ، الأردن",
    langButtonText: "English"
  }
};

// --- Language Toggle functionality ---
const langToggleBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  const keys = document.querySelectorAll('[data-key]');
  keys.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  langText.textContent = translations[lang].langButtonText;
  localStorage.setItem('lang', lang);
}

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyLanguage(currentLang);
});

// Initial application
applyLanguage(currentLang);


// --- Theme Toggle functionality ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.textContent = '☀️';
  themeText.textContent = 'Light';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.textContent = '🌙';
  themeText.textContent = 'Dark';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = 'light';

  if (currentTheme === 'light') {
    newTheme = 'dark';
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
  }

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
