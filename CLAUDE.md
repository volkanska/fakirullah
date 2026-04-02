# Muhammed Fakirullah - Web Sitesi Projesi

## Proje Bilgisi
- **Site:** Tasavvuf şeyhi Muhammed Fakirullah Hocaefendi'nin kişisel web sitesi
- **Mevcut site:** www.muhammedfakirullah.com
- **Yeni site:** fakirullah.platox.net
- **Yapı:** 3 dosya — index.html, style.css, script.js (vanilla, framework yok)
- **MP3 kaynağı:** https://www.muhammedfakirullah.com/mp3/
- **Görseller:** https://www.muhammedfakirullah.com/resimler/

## Tasarım Kuralları
- Bu bir tasavvuf dergahı şeyhinin sitesidir, müridler ve takipçiler ziyaret eder
- Manevi derinlik, huzur, saygı ve vakar hissi vermeli — "Kutsal Gece" (Sacred Night) konsepti
- Placeholder kullanma, gerçek URL'ler kullan
- Tüm değişiklikler 3 dosya kısıtlaması içinde kalmalı
- AI ile görsel oluşturulabilir veya mevcut siteden görseller alınıp modern tasarıma uyarlanabilir

## İçerik
- 40 ilahi (3 albüm + şiirler + single)
- 19 YouTube videosu
- 8 bölüm: Hero, Hakkında, İlahiler, Albümler, Videolar, Sohbetler, Özlü Sözler, Footer
- Sosyal medya: YouTube, Facebook, Instagram, Twitter

## Kullanılabilir Görseller (mevcut siteden)
- resimler/slider/249082522922728301551resm.jpg (şeyh fotoğrafı — hero bg için)
- resimler/slider/26023243803041328096gelsinbumeydana.png
- resimler/slider/20833232012477521795yetisyanebi.png
- resimler/slider/29122294173009326559esmaulhusnakapak.png
- Albüm kapakları (3 adet, zaten kullanılıyor)

---

## BİRLEŞİK TASARIM ROADMAP (2026-04-02)

3 skill konsültasyonu sonrası (web-design-guidelines + ui-ux-pro-max + frontend-design) birleştirilmiş implementasyon planı.

### Konsept: "Kutsal Gece" (Sacred Night)
Bir tasavvuf dergahına gece vakti adım atmak — loş ışıkta altın yaldızlı süslemeler, derin lacivert kubbe, huzurlu sessizlik ve manevi ağırlık.

### YENİ RENK PALETİ
```
--color-night: #0F1923         Gece mavisi (hero, player, sözler bg)
--color-night-deep: #0A1118    Derin gece (navbar, footer)
--color-emerald: #1a3a2a       İslami yeşil (ikincil koyu bölümler)
--color-gold: #C9A84C          Altın (CTA, vurgu, süsleme)
--color-gold-light: #D4B965    Açık altın (hover, gradient)
--color-burgundy: #7A2332      Osmanlı bordosu (accent hover)
--color-cream: #FAF7F2         Sıcak krem (açık bölüm bg)
--color-parchment: #F0E9DD     Parşömen (kart alternatif)
--color-ink: #1C1410           Mürekkep (ana metin)
```

### YENİ FONT SİSTEMİ
```
--font-display: 'Cormorant Garamond', Georgia, serif   (başlıklar — editorial/spiritual)
--font-body: 'Lato', 'Segoe UI', sans-serif            (gövde — ciddi, temiz)
--font-arabic: 'Amiri', 'Scheherazade New', serif       (Arapça — hat sanatı estetiği)
```

### İMPLEMENTASYON FAZLARI

#### FAZ 1 — Temel Altyapı (CSS Variables + Font)
- [ ] CSS custom properties güncelle (renk, font, spacing 8dp system)
- [ ] Yeni font import'ları ekle (Cormorant Garamond, Lato, Amiri)
- [ ] 8dp spacing system: 8, 16, 24, 32, 48, 64, 96, 128px
- [ ] Easing tokens: --ease-out, --ease-spring, --duration-fast/normal/slow

#### FAZ 2 — Hero Dönüşümü
- [ ] Hero'ya gerçek fotoğraf ekle (bg image + object-fit: cover)
- [ ] Koyu lacivert gradient overlay
- [ ] İslami geometrik SVG pattern (8-köşeli yıldız, opacity: 0.04)
- [ ] Besmele'yi büyüt (clamp 2.2rem-4rem) + ornament süsleme (altın çizgiler)
- [ ] Altın parçacık efekti (CSS box-shadow ile)
- [ ] lang="ar" dir="rtl" Besmele'ye ekle

#### FAZ 3 — İslami Motifler
- [ ] SVG 8-köşeli yıldız pattern (hero + player + sözler arka planı)
- [ ] Arabesque SVG section divider (bölümler arası)
- [ ] Fotoğraf çerçevesi: yuvarlak → kemer (arch) formu
- [ ] Özlü sözler: Arapça dekoratif glyph (﴿) büyük arka plan elementi
- [ ] Section header ornament'ları güçlendir

#### FAZ 4 — Erişilebilirlik (Kritik)
- [ ] Skip link ekle (body ilk element)
- [ ] Tüm icon butonlara aria-label ekle
- [ ] :focus-visible stilleri ekle (3px solid gold, offset: 2px)
- [ ] Arama inputuna label + aria-label
- [ ] Player durum bildirimi: aria-live="polite" region
- [ ] .sr-only utility class
- [ ] img etiketlerine width/height

#### FAZ 5 — Performans & Animasyon
- [ ] transition: all → spesifik property'lere dönüştür (15+ yer)
- [ ] prefers-reduced-motion media query ekle
- [ ] Vinyl spin: will-change: transform
- [ ] Easing: ease → cubic-bezier(0.4, 0, 0.2, 1)
- [ ] Stagger reveal: grid kartlar 80ms arayla
- [ ] Exit animasyonlar enter'ın %60-70'i

#### FAZ 6 — Mobil UX
- [ ] touch-action: manipulation global
- [ ] Mini player (sticky bottom bar) — scroll çıkınca görünsün
- [ ] Progress bar touch alanı genişlet (padding: 12px 0)
- [ ] Mobil navbar: sosyal ikonları hamburger içine taşı
- [ ] Modal: overscroll-behavior: contain
- [ ] env(safe-area-inset-bottom) footer/sticky için

#### FAZ 7 — Visual Polish
- [ ] Koyu-açık bölüm ritmi (nefes alma hissi)
- [ ] Altın glow hover efektleri kartlara
- [ ] Albüm kapağı crossfade animasyonu
- [ ] Footer: subtle İslami pattern + küçük dua/ayet
- [ ] og:url düzelt (platox.net → muhammedfakirullah.com)
- [ ] Copyright yılını güncelle

#### FAZ 8 — Görsel İyileştirme
- [ ] Mevcut siteden görselleri modern tasarıma uyarla
- [ ] AI ile İslami dekoratif görseller oluştur (SVG pattern, ornament)
- [ ] Hero fotoğrafını filter/overlay ile tasarıma entegre et
