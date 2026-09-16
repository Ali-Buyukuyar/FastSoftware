import type { Project } from "../types/project";

// Yer tutucu veri. Faz 2'de bu dizi Supabase `projects` tablosundan
// çekilecek; şimdilik bileşenlerin gerçek veriyle çalıştığını
// göstermek için örnek projeler tanımlı.

export const projects: Project[] = [
  {
    id: "1",
    slug: "is-takip-sistemi",
    title: "İş Takip Sistemi",
    shortDescription:
      "Üretim atölyesi için iş emri ve görev takip platformu.",
    description:
      "Node.js/Express üzerine kurulu, atölye içi iş emirlerinin oluşturulmasını, atanmasını ve takibini sağlayan self-hosted bir sistem. Whitelabel yapıya kavuşturularak farklı işletmelere uyarlanabilir hale getirildi.",
    purpose:
      "Kağıt üzerinde takip edilen iş emirlerini dijitalleştirip, üretim hattındaki gecikmeleri gerçek zamanlı görünür kılmak.",
    category: "Web Application",
    technologies: ["Node.js", "Express", "SQL", "REST API"],
    status: "Yayında",
    featuredImage: "",
    features: [
      "Gerçek zamanlı iş emri durumu",
      "Rol bazlı yetkilendirme",
      "Self-hosted kurulum",
      "Whitelabel marka desteği",
    ],
    sortOrder: 1,
    isPublished: true,
  },
  {
    id: "2",
    slug: "fimak-vba-uretim-planlama",
    title: "Üretim Planlama Sistemi",
    shortDescription: "AtikER verisi üzerinden çalışan Excel VBA planlama motoru.",
    description:
      "Üretim verilerini işleyerek kapasite planlaması ve iş sırası önceliklendirmesi yapan, Excel VBA tabanlı bir planlama sistemi.",
    purpose:
      "Manuel Excel tablolarıyla yapılan planlamayı otomatikleştirip hata payını azaltmak.",
    category: "Excel VBA",
    technologies: ["Excel VBA", "SQL"],
    status: "Yayında",
    featuredImage: "",
    features: [
      "Otomatik kapasite hesaplama",
      "Öncelik bazlı sıralama",
      "AtikER veri entegrasyonu",
    ],
    sortOrder: 2,
    isPublished: true,
  },
  {
    id: "3",
    slug: "fimak-depo-satinalma",
    title: "Depo & Satınalma Programı",
    shortDescription: "Depo stok ve satınalma süreçlerini yöneten masaüstü uygulaması.",
    description:
      "C# WinForms ile geliştirilmiş, depo giriş-çıkış işlemlerini ve satınalma taleplerini tek noktadan yöneten bir masaüstü uygulaması.",
    purpose: "Depo ve satınalma arasındaki koordinasyon eksikliğini gidermek.",
    category: "C# / .NET",
    technologies: ["C#", "WinForms", "SQL"],
    status: "Geliştiriliyor",
    featuredImage: "",
    features: [
      "Stok giriş-çıkış takibi",
      "Satınalma talep formu",
      "Raporlama modülü",
    ],
    sortOrder: 3,
    isPublished: true,
  },
  {
    id: "4",
    slug: "logab-one",
    title: "LogAB One",
    shortDescription: "Uluslararası pazarlara yönelik lojistik yönetim platformu.",
    description:
      "AB Software bünyesinde geliştirilen, uluslararası lojistik operasyonlarını yönetmeyi hedefleyen bir SaaS platformu.",
    purpose: "Küçük ve orta ölçekli lojistik firmalarına erişilebilir bir yönetim aracı sunmak.",
    category: "Web Application",
    technologies: ["Node.js", "SQL", "REST API"],
    status: "Geliştiriliyor",
    featuredImage: "",
    features: [
      "Sevkiyat takibi",
      "Çoklu para birimi desteği",
      "Uluslararası kullanıcı yönetimi",
    ],
    sortOrder: 4,
    isPublished: true,
  },
];
