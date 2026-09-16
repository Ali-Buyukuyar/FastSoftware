// Bu dosya, ileride admin panelinden yönetilecek tüm site metinlerini
// tek bir yerde toplar. Şimdilik statik veri; Supabase entegrasyonunda
// bu obje `site_settings` tablosundan gelecek şekilde değiştirilecek.

export const siteContent = {
  siteName: "AB | Ali BUYUKUYAR",
  brandName: "AB-FastSoftware",
  tagline: "Kişisel yazılım projelerim, geliştirmelerim ve dijital çalışmalarım.",

  hero: {
    title: "AB | Ali BUYUKUYAR",
    subtitle: "AB-FastSoftware",
    description:
      "Fikirleri, kodları ve süreçleri gerçek çalışan yazılımlara dönüştürüyorum.",
  },

  about: {
    name: "Ali Büyükuyar",
    role: "Üretim Planlama Mühendisi & Yazılım Geliştirici",
    bio: "Üretim planlama, kalite kontrol ve depo yönetimi süreçlerinin içinde çalışırken, bu süreçleri kolaylaştıran yazılımları da kendim geliştiriyorum. Excel VBA'dan Node.js ve C#'a uzanan bir araç setiyle, sahadaki gerçek problemleri çözen uygulamalar üretiyorum.",
    interests: [
      "Üretim süreç otomasyonu",
      "ERP entegrasyonları",
      "Lojistik yazılımları",
      "Masaüstü ve web uygulama mimarisi",
    ],
    technologies: [
      "C#",
      "SQL",
      "Node.js / Express",
      "Electron",
      "Excel VBA",
      "IFS-ERP",
      "Netinox-ERP",
    ],
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:iletisim@example.com",
    },
  },

  contact: {
    email: "iletisim@example.com",
    description:
      "Bir proje fikri, iş birliği teklifi veya teknik bir soru için benimle iletişime geçebilirsiniz.",
  },

  footer: {
    text: `© ${new Date().getFullYear()} AB-FastSoftware. Tüm hakları saklıdır.`,
  },
};
