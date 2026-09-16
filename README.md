# AB | Ali BUYUKUYAR — AB-FastSoftware

Kişisel yazılım portföyü. React + TypeScript + Vite + Tailwind CSS v4 + React Three Fiber (3D hero) + GSAP.

Bu **Faz 1** teslimatıdır: statik, GitHub Pages'e doğrudan atılabilir bir frontend.
Admin paneli, dosya yükleme, gerçek ziyaretçi sayacı ve kimlik doğrulama **Faz 2**'de
Supabase ile eklenecek (aşağıda "Faz 2" bölümüne bakın) — şu an bunlar yok, bunlar
varmış gibi davranan sahte bir arayüz de yok.

## Proje yapısı

```
src/
  components/
    Layout/      Navbar, Footer
    Hero/        3D hero sahnesi (React Three Fiber) + başlık animasyonu (GSAP)
    About/       Hakkımda bölümü
    Projects/    Proje kartları + detay paneli (modal)
    Contact/     İletişim bölümü
  data/
    siteContent.ts   Tüm site metinleri TEK YERDE (ileride admin panelinin/DB'nin
                      dolduracağı alan — component'lere hardcode edilmedi)
    projects.ts       Örnek proje verisi (ileride Supabase `projects` tablosu)
  types/
    project.ts         Project tipi — Supabase şemasıyla birebir eşleşecek şekilde tasarlandı
  hooks/
    useReducedMotion.ts
  styles/
    index.css          Tailwind v4 + tasarım token'ları (@theme)
```

## Yerel geliştirme

```bash
npm install
npm run dev
```

`npm run build` üretim derlemesini `dist/` altına çıkarır.
`npm run preview` üretim derlemesini yerelde test eder.

## GitHub Pages'e yayınlama

1. Bu klasörü bir GitHub reposuna push edin (repo adı ne olursa olsun).
2. `vite.config.ts` içindeki `base` değerini repo adınızla eşleştirin:
   ```ts
   base: '/REPO-ADINIZ/',
   ```
   Eğer `kullaniciadi.github.io` adında bir "user page" reposu kullanıyorsanız
   `base: '/'` bırakın.
3. GitHub reponuzda **Settings → Pages → Build and deployment → Source** kısmını
   **GitHub Actions** olarak ayarlayın.
4. `main` branch'e push ettiğinizde `.github/workflows/deploy.yml` otomatik olarak
   build alıp yayınlayacak. İlk deploy birkaç dakika sürebilir.
5. Site `https://kullaniciadi.github.io/REPO-ADINIZ/` adresinde yayında olacak.

## İçerik ve proje verilerini düzenleme (Faz 1 — kod üzerinden)

Şu an bir admin paneli olmadığı için içerikler iki dosyadan düzenlenir:

- `src/data/siteContent.ts` → başlıklar, hakkımda metni, teknolojiler, iletişim bilgileri
- `src/data/projects.ts` → proje kartları ve detayları

Her iki dosya da düz TypeScript objeleri; bir alan ekleyip kaydettiğinizde
`npm run dev` anında yansıtır.

Görseller için: `featuredImage` / `images` alanlarına `public/` klasörüne
koyacağınız dosyaların yolunu (`/projeler/proje1.png` gibi) yazmanız yeterli —
şu an placeholder olarak boş bırakıldı.

## Tasarım sistemi

Renk, tipografi ve grid token'ları `src/styles/index.css` içinde `@theme` bloğunda
tanımlı (Tailwind v4 CSS-first config). Yeni bir bileşen yazarken buradaki
`--color-*` ve `--font-*` değişkenlerini kullanın; renkleri component içine
hardcode etmeyin.

- `--color-paper` / `--color-graphite`: açık/koyu zemin
- `--color-blueprint`: ana vurgu (teknik çizim mavisi)
- `--color-brass`: durum etiketleri için kısıtlı vurgu
- `--font-display`: başlıklar (Space Grotesk)
- `--font-body`: gövde metni (Inter)
- `--font-mono`: teknik veri / etiketler / kod (JetBrains Mono)

## Faz 2 — Supabase backend (henüz kurulmadı)

Aşağıdaki adımlar, dokümanınızda istenen admin paneli + dosya yükleme +
gerçek ziyaretçi sayacı için önerilen yol haritasıdır. Şu an kodda karşılığı yok;
istediğinizde bu fazı birlikte uygularız.

1. **Supabase projesi oluşturma**
   - [supabase.com](https://supabase.com) üzerinden ücretsiz hesap açın, yeni proje kurun.
   - Proje ayarlarından `Project URL` ve `anon public key` değerlerini alıp
     `.env` dosyasına (`.env.example`'ı kopyalayarak) yazacaksınız.

2. **Veritabanı şeması**
   Dokümanınızdaki tablo tasarımı (`projects`, `project_images`, `project_files`,
   `code_files`, `site_settings`, `visitor_stats`, `admin_users`) Supabase SQL
   editöründe oluşturulacak. `src/types/project.ts` bu şemayla birebir
   eşleşecek şekilde zaten hazırlandı.

3. **Auth**
   Supabase Auth ile tek admin kullanıcı (email/şifre) — admin panel route'ları
   oturum kontrolüyle korunacak.

4. **Storage**
   Proje görselleri ve dosyaları için Supabase Storage bucket'ı; boyut/tip
   kontrolü backend (Supabase Row Level Security + Edge Function) tarafında.

5. **Ziyaretçi sayacı**
   `visitor_stats` tablosuna yazan hafif bir Edge Function; aynı ziyaretçinin
   sayacı spam'lemesini önlemek için IP/hash bazlı basit rate limiting.

6. **Admin paneli**
   `/admin` altında ayrı bir route grubu; dashboard, proje CRUD formu, site
   içerik yönetimi, dosya yönetimi, ziyaretçi istatistikleri ekranları.

Bu fazı başlatmaya hazır olduğunuzda Supabase proje URL/anon key'inizi
paylaşmanız yeterli; şema kurulumunu ve admin panelini birlikte ilerletiriz.

## Erişilebilirlik ve performans notları

- `prefers-reduced-motion` tespit edilirse GSAP giriş animasyonu ve 3D sahnenin
  otomatik dönüşü devre dışı kalır.
- 3D sahne `dpr={[1, 1.75]}` ile sınırlandırılarak yüksek DPI ekranlarda GPU
  yükü kontrol altında tutuldu.
- Tüm etkileşimli öğelerde görünür klavye odak halkası var.
- Üretim derlemesinde three.js kaynaklı ana JS paketi ~330 kB (gzip) civarında;
  ileride `React.lazy` ile Hero3D bileşenini code-split etmek isterseniz bunu
  birlikte yapabiliriz.
