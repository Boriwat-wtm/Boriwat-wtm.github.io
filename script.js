// Translations Dictionary
const translations = {
    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับฉัน",
        nav_projects: "ผลงาน",
        nav_contact: "ติดต่อ",
        hero_greeting: "สวัสดีครับ, ผมชื่อ",
        hero_title: "บริวัฒน์ วงค์ต๊ะมา",
        hero_subtitle: "นักศึกษา CS ปี 3 | Backend Dev",
        btn_projects: "ดูผลงาน",
        btn_resume: "ดาวน์โหลด Resume",
        btn_contact: "ติดต่อสอบถาม",
        about_title: "เกี่ยวกับ",
        about_title_accent: "ฉัน",
        about_desc1: "ผมเป็นนักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ที่หลงใหลในการพัฒนา Backend ผมสนุกกับการแก้ปัญหาเชิงตรรกะและการทำให้ระบบทำงานอัตโนมัติเพื่อเพิ่มประสิทธิภาพ",
        about_desc2: "ผลงานของผมครอบคลุมทั้งแอปพลิเคชันเดสก์ท็อปแบบ GUI และระบบเว็บแบบ Real-time ตอนนี้กำลังมองหาตำแหน่ง Software Developer Internship เพื่อพัฒนาทักษะและประสบการณ์จริงในสายงาน",
        passion_title: "แรง",
        passion_title_accent: "บันดาลใจ",
        passion_desc: "นิสัยส่วนตัวผมคือเวลาทำงานอะไร ชอบตั้งคำถามกับตัวเองเสมอว่า 'ทำยังไงให้มันเสร็จเร็วกว่านี้?' ผมจึงชอบเขียนโค้ดเพื่อสร้างเครื่องมือมาช่วยลดขั้นตอนการทำงานซ้ำซากครับ เพราะผมเชื่อว่ายิ่งเราให้คอมพิวเตอร์ช่วยทำงานจุกจิกได้มากเท่าไหร่ เราก็ยิ่งมีเวลาไปโฟกัสกับเรื่องที่สำคัญกว่าได้มากขึ้นเท่านั้น",
        goal_title: "เป้า",
        goal_title_accent: "หมาย",
        goal_desc: "เป้าหมายตอนนี้ของผม คือการได้เข้าไปฝึกงานในตำแหน่ง Software Developer กับทีมที่เปิดโอกาสให้ได้ลงมือทำจริงครับ ผมอยากเอาทักษะที่มีไปช่วยแก้ปัญหาให้ทีม และพร้อมจะเรียนรู้เทคนิคใหม่ๆ จากพี่ๆ มืออาชีพ เพื่อพัฒนาตัวเองจากนักศึกษาให้กลายเป็นนักพัฒนาที่ทำงานได้จริงครับ",
        skills_title: "Technical ",
        education_title: "ประวัติการ",
        education_title_accent: "ศึกษา",
        edu_uni_degree: "ปริญญาตรี วิทยาศาสตร์บัณฑิต",
        edu_uni_major: "สาขาวิทยาการคอมพิวเตอร์",
        edu_uni_faculty: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
        edu_uni_school: "มหาวิทยาลัยพะเยา",
        edu_uni_date: "2566 - ปัจจุบัน",
        edu_hs_degree: "มัธยมศึกษาตอนปลาย",
        edu_hs_program: "สายญี่ปุ่น-อังกฤษ",
        edu_hs_school: "โรงเรียนลำปางกัลยาณี",
        edu_hs_date: "2563 - 2566",
        gpa_label: "เกรดเฉลี่ยสะสม:",
        projects_title: "ผลงาน",
        projects_title_accent: "ล่าสุด",
        proj1_title: "CMES - Content Management System",
        proj1_desc: "ระบบจัดการลูกค้าและการมีส่วนร่วมแบบ Real-time สำหรับร้านสถานบันเทิง ที่ช่วยให้ลูกค้าสามารถส่งข้อความ รูปภาพ และของขวัญผ่านระบบ พร้อมแสดงผลบนจอดิจิทัลแบบ Live ด้วย OBS Overlay",
        proj2_title: "Desktop Automation Tool (Bot)",
        proj2_desc: "โปรแกรมช่วยเล่นเกมอัตโนมัติบน PC ที่ทำงานด้วยระบบ Image Recognition (OpenCV) สามารถวิเคราะห์ไอเทมและสถานะบนหน้าจอเพื่อตัดสินใจคลิกได้อย่างแม่นยำ (Smart Detection) แตกต่างจากมาโครทั่วไปที่คลิกตามตำแหน่งเดิมๆ ช่วยลดภาระการเฝ้าหน้าจอและลดเวลาในการทำภารกิจซ้ำๆ ได้อย่างมีประสิทธิภาพ",
        proj3_title: "Serverless Time Attendance",
        proj3_desc: "เว็บแอปพลิเคชันตอกบัตรพนักงานบนมือถือ ทำงานแบบ Serverless บน Google Cloud ข้อมูลจะถูกบันทึกลง Google Sheets ทันที แถมคำนวณชั่วโมงทำงานให้อัตโนมัติ ช่วยลดงาน HR",
        contact_title: "ร่วมงานกับ<span class='text-accent'>ผม</span>",
        contact_desc: "สนใจจ้างงาน หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้ทางช่องทางด้านล่างนี้",
        btn_email: "อีเมลติดต่อ",
        btn_view_all_projects: "ดูผลงานทั้งหมด"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_title: "Boriwat Wongtama",
        hero_subtitle: "3rd Year CS Student | Backend Dev",
        btn_projects: "View Projects",
        btn_resume: "Download Resume",
        btn_contact: "Contact Me",
        about_title: "About",
        about_title_accent: "Me",
        about_desc1: "I'm a third-year Computer Science student passionate about Backend Development I love tackling logic puzzles and building systems that work smarter, not harder.",
        about_desc2: "My portfolio features desktop GUI apps and real-time web systems. Currently seeking a Software Developer Internship to level up my skills and gain hands-on experience in the industry.",
        passion_title: "The",
        passion_title_accent: "Passion",
        passion_desc: "My personal habit whenever I work on something is to always ask myself, 'How can I finish this faster?' That's why I love writing code to build tools that automate repetitive tasks. I believe the more we let computers handle the tedious stuff, the more time we have to focus on what truly matters.",
        goal_title: "The",
        goal_title_accent: "Goal",
        goal_desc: "My current goal is to land a Software Developer internship with a team that gives me real hands-on opportunities. I want to use my skills to help solve real problems and learn new techniques from experienced professionals, evolving from a student into a developer who can actually deliver in the real world.",
        skills_title: "Technical ",
        education_title: "Educational",
        education_title_accent: "Background",
        edu_uni_degree: "Bachelor of Science",
        edu_uni_major: "Computer Science",
        edu_uni_faculty: "Faculty of Information Technology and Communication",
        edu_uni_school: "University of Phayao",
        edu_uni_date: "2023 - Present",
        edu_hs_degree: "High School Diploma",
        edu_hs_program: "Japanese-English Program",
        edu_hs_school: "Lampang Kanlayanee School",
        edu_hs_date: "2020 - 2023",
        gpa_label: "GPA:",
        projects_title: "Featured",
        projects_title_accent: "Projects",
        proj1_title: "CMES - Content Management System",
        proj1_desc: "An interactive engagement platform for nightlife venues, enabling real-time display of customer messages, photos, and gifts on digital signage using seamless OBS Overlay integration.",
        proj2_title: "Desktop Automation Tool (Bot)",
        proj2_desc: "A smart desktop automation tool designed to handle repetitive in-game tasks. Unlike basic clickers, it utilizes Computer Vision (OpenCV) to intelligently analyze screen elements and detect items in real-time, allowing the bot to react dynamically and freeing up the player from hours of manual grinding.",
        proj3_title: "Serverless Time Attendance",
        proj3_desc: "A mobile-first time attendance app running endlessly on Google Cloud (Serverless). Logs data directly to Google Sheets in real-time and automatically calculates work hours.",
        contact_title: "Work with <span class='text-accent'>Me</span>",
        contact_desc: "Interested in hiring me or have any questions? Feel free to reach out via the channels below.",
        btn_email: "Email Me",
        btn_view_all_projects: "View All Projects"
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

    // 4. Custom Smooth Scroll (Better than CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            // Get target position with offset for fixed header
            const headerHeight = 80; // match --header-height
            const extraOffset = 20; // extra spacing
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset;

            // Smooth scroll with custom easing
            smoothScrollTo(targetPosition, 800); // 800ms duration
        });
    });
});

// Custom Smooth Scroll Function with Easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function (easeInOutCubic)
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + (distance * ease));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}
