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
