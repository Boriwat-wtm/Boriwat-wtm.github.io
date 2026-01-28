// Translations Dictionary
const translations = {
    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับฉัน",
        nav_projects: "ผลงาน",
        nav_contact: "ติดต่อ",
        hero_greeting: "สวัสดีครับ, ผมชื่อ",
        hero_title: "Creative Developer",
        hero_subtitle: "สร้างสรรค์เว็บไซต์ที่ทันสมัยและใช้งานง่าย",
        btn_projects: "ดูผลงาน",
        btn_contact: "ติดต่อสอบถาม",
        about_title: "เกี่ยวกับ",
        about_title_accent: "ฉัน",
        about_desc1: "ผมเป็นนักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างสรรค์ประสบการณ์ดิจิทัลที่น่าทึ่ง ผมเชี่ยวชาญในการออกแบบและพัฒนาเว็บไซต์ที่ตอบโจทย์ทั้งความสวยงามและการใช้งาน",
        about_desc2: "ด้วยความรู้ทั้งด้าน Design และ Coding ทำให้ผมสามารถเชื่อมโยงจินตนาการให้เกิดขึ้นจริงได้",
        skills_title: "Technical Skills",
        projects_title: "ผลงาน",
        projects_title_accent: "ล่าสุด",
        proj1_title: "Interactive Live Display",
        proj1_desc: "ระบบจอแสดงผลแบบโต้ตอบสด ที่ข้อความจากผู้ชมจะขึ้นบนหน้าจอทันทีผ่าน Socket.IO ผมทำระบบ Dashboard ให้แอดมินตรวจสอบข้อความก่อนขึ้นจอ และมี Cron Job คอยล้างข้อมูลเก่า พร้อมฟีเจอร์วงล้อวัดดวงเพิ่มความสนุก",
        proj2_title: "Desktop Automation Tool",
        proj2_desc: "โปรแกรมบอทบนคอมพิวเตอร์ช่วยเล่นเกมอัตโนมัติ ใช้ OpenCV จับภาพหน้าจอเพื่อวิเคราะห์ไอเทมต่างๆ แทนการคลิกเมาส์มั่วๆ แพ็คเป็นไฟล์ .exe ติดตั้งง่าย ใช้งานได้ทุกเครื่องโดยไม่ต้องลง Python",
        proj3_title: "Serverless Time Attendance",
        proj3_desc: "เว็บแอปพลิเคชันตอกบัตรพนักงานบนมือถือ ทำงานแบบ Serverless บน Google Cloud ข้อมูลจะถูกบันทึกลง Google Sheets ทันที แถมคำนวณชั่วโมงทำงานให้อัตโนมัติ ช่วยลดงาน HR",
        contact_title: "ร่วมงานกับ<span class='text-accent'>ผม</span>",
        contact_desc: "สนใจจ้างงาน หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้ทางช่องทางด้านล่างนี้",
        btn_email: "ส่งอีเมลหาผม"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_title: "Creative Developer",
        hero_subtitle: "Building modern & intuitive digital experiences",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",
        about_title: "About",
        about_title_accent: "Me",
        about_desc1: "I am a passionate web developer dedicated to creating amazing digital experiences. I specialize in designing and developing websites that are both beautiful and functional.",
        about_desc2: "With skills in both Design and Coding, I bridge the gap between imagination and reality.",
        skills_title: "Technical Skills",
        projects_title: "Featured",
        projects_title_accent: "Projects",
        proj1_title: "Interactive Live Display",
        proj1_desc: "Built a real-time messaging platform for events using Socket.IO. Includes an Admin Dashboard for moderation and a background Cron Job for cleanup. Also features gamification elements like a Lucky Wheel.",
        proj2_title: "Desktop Automation Tool",
        proj2_desc: "A Windows desktop automation bot using Python. Utilizes OpenCV for image recognition to intelligently interact with game elements instead of blind clicking. Packaged as a standalone .exe.",
        proj3_title: "Serverless Time Attendance",
        proj3_desc: "A mobile-first time attendance app running endlessly on Google Cloud (Serverless). Logs data directly to Google Sheets in real-time and automatically calculates work hours.",
        contact_title: "Work with <span class='text-accent'>Me</span>",
        contact_desc: "Interested in hiring me or have any questions? Feel free to reach out via the channels below.",
        btn_email: "Email Me"
    }
};

let currentLang = 'th';

function changeLanguage(lang) {
    currentLang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if content contains HTML tags (like <span class='text-accent'>)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage') || 'th';
    changeLanguage(savedLang);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 4. Smooth scrolling setup is handled by CSS (html { scroll-behavior: smooth; })
});
