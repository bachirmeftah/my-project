// تهيئة تأثير الخلفية باستخدام tsparticles
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#1f242d" // نفس لون الخلفية في CSS
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse" // تفاعل عند تمرير الماوس
      },
      onClick: {
        enable: true,
        mode: "push" // إضافة جسيمات عند النقر
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        quantity: 4
      }
    }
  },
  particles: {
    color: { value: "#00e5ff" }, // لون الجسيمات
    links: {
      color: "#00e5ff", // لون الخطوط
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "out" }
    },
    number: {
      value: 90,
      density: { enable: true, area: 800 }
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});


// ===============================================
// ## إضافة: كود تأثير الكتابة (Typewriter Effect)
// ===============================================

// الانتظار حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
    
    const typedTextSpan = document.getElementById("typed-text");
    
    // تأكد من أن العنصر موجود
    if (typedTextSpan) {
        // ## يمكنك تغيير النصوص هنا ##
        const textArray = [
            "Artificial Intelligence and Data Science", 
            "Data Scientist",
            "AI Engineer",
            "Python Developer"
        ]; 
        
        const typingDelay = 100; // سرعة الكتابة (بالمللي ثانية)
        const erasingDelay = 50;  // سرعة الحذف
        const newTextDelay = 2000; // مدة الانتظار بعد اكتمال الكلمة
        
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                // أضف " student" إذا كانت الكلمة لا تحتويها
                if(charIndex === 0) typedTextSpan.textContent = '';
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                // انتظر بعد اكتمال الكلمة
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                // انتقل للكلمة التالية
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                // انتظر قليلاً قبل كتابة الكلمة الجديدة
                setTimeout(type, typingDelay + 500);
            }
        }

        // ابدأ الأنيميشن
        if (textArray.length) {
            setTimeout(type, newTextDelay - 1000); // ابدأ بسرعة أكبر في المرة الأولى
        }
    }
});