# 📖 Breakpoints – Dokumentation

Diese Datei beschreibt die Breakpoints, Mixins und Utilities, die in der SCSS-Library verfügbar sind.  
Die Library ist **mobile-first** aufgebaut: Styles beginnen bei kleinen Viewports und erweitern sich nach oben.

---

## 📐 Breakpoint Übersicht

| Name  | Pixelwert | Beschreibung                          |
|-------|-----------|---------------------------------------|
| `xs`  | `320px`   | Kleine Smartphones                    |
| `sm`  | `480px`   | Standard Smartphones                  |
| `md`  | `768px`   | Tablets (Portrait)                    |
| `lg`  | `1024px`  | Tablets (Landscape) / kleine Desktops |
| `xl`  | `1300px`  | Große Laptops / Desktops              |
| `xxl` | `1440px`  | Full-HD & Widescreen                  |

---

## 🛠 Verfügbare Mixins

### 1. Mindest-Breakpoint (`min-breakpoint`)
Definiert Styles **ab** einem bestimmten Breakpoint.

```scss
@include min-breakpoint('md') {
  font-size: 18px;
}
```

➡️ Wirkt ab `768px` (Tablet Portrait).

---

### 2. Maximal-Breakpoint (`max-breakpoint`)
Definiert Styles **bis** zu einem Breakpoint.

```scss
@include max-breakpoint('lg') {
  font-size: 14px;
}
```

➡️ Wirkt bis `1024px` (kleine Desktops).

---

### 3. Bereich zwischen Breakpoints (`between-breakpoints`)
Definiert Styles für einen **klar abgegrenzten Bereich**.

```scss
@include between-breakpoints('sm', 'lg') {
  background: yellow;
}
```

➡️ Wirkt zwischen `480px` und `1024px`.

---

## 🎛 Responsive Utilities

### Responsive Property
Definiert eine CSS-Eigenschaft, die sich an Breakpoints anpasst.

```scss
@include responsive-property(
  font-size,
  14px, // Default-Wert
  (
    'sm': 16px,
    'md': 18px,
    'lg': 20px
  )
);
```

➡️ Ändert die Schriftgröße automatisch bei größeren Breakpoints.

---

### Elemente verstecken (`hide-on`)
Blendet ein Element ab einem bestimmten Breakpoint aus.

```scss
.my-element {
  @include hide-on('lg');
}
```

➡️ Versteckt das Element ab `1024px`.

---

### Elemente nur auf bestimmten Breakpoints anzeigen (`show-only-on`)
Zeigt ein Element **nur ab** einem bestimmten Breakpoint.

```scss
.my-element {
  @include show-only-on('md');
}
```

➡️ Wird nur **ab 768px** sichtbar, sonst `display: none`.

---

## 🧪 Debugging

Das `breakpoint-debug`-Mixin blendet den **aktuellen Breakpoint** oben rechts auf der Seite ein.  
Sehr nützlich während der Entwicklung.

```scss
@include breakpoint-debug;
```

➡️ Beispiel: `screen SM`, `screen LG`, etc.

---

## 🚀 Best Practices

1. **Mobile First** – Beginne mit dem kleinstmöglichen Layout (`xs`) und erweitere nach oben.  
2. **So wenig Breakpoints wie möglich** – Nur einsetzen, wenn Layout wirklich angepasst werden muss.  
3. **Utility-Mixins nutzen** – z. B. `responsive-property`, um redundanten Code zu vermeiden.  
4. **Debugging aktivieren** – während der Entwicklung `@include breakpoint-debug;` nutzen.  

---

# 📖 Usage Examples – Breakpoints in Aktion

Diese Datei zeigt **praktische Beispiele**, wie die Breakpoint-Mixins und Utilities in SCSS verwendet werden können.  
Die Beispiele decken **Buttons, Layouts und Typografie** ab, wie man sie in echten Projekten nutzt.

---

## 🎨 Buttons

### Beispiel: Button-Größe anpassen

```scss
.button {
  padding: 0.5rem 1rem;
  font-size: 14px;

  @include min-breakpoint('sm') {
    font-size: 16px;
  }

  @include min-breakpoint('md') {
    font-size: 18px;
    padding: 0.75rem 1.25rem;
  }
}
```

➡️ Button wächst mit dem Viewport und bleibt gut bedienbar.

---

## 📐 Layouts

### Beispiel: Grid-System

```scss
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @include min-breakpoint('md') {
    grid-template-columns: 1fr 1fr;
  }

  @include min-breakpoint('lg') {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

➡️ 1-spaltig auf Mobil, 2-spaltig auf Tablet, 3-spaltig auf Desktop.

---

## ✍️ Typografie

### Beispiel: Responsive Font-Size

```scss
h1 {
  @include responsive-property(
    font-size,
    24px, // Default Wert
    (
      'sm': 28px,
      'md': 32px,
      'lg': 36px,
      'xl': 40px
    )
  );
}
```

➡️ Die Überschrift passt sich automatisch an die Bildschirmgröße an.

---

## 🎛 Sichtbarkeit von Elementen

### Beispiel: Mobile Navigation

```scss
.nav-desktop {
  @include hide-on('md'); // Versteckt auf kleineren Geräten
}

.nav-mobile {
  @include show-only-on('md'); // Zeigt nur auf kleinen Geräten
}
```

➡️ Mobile Navigation für Smartphones, Desktop-Menü für große Screens.

---

## 🧪 Debugging in Projekten

```scss
@include breakpoint-debug;
```

➡️ Zeigt oben rechts auf der Seite den **aktuellen Breakpoint** (`screen SM`, `screen MD`, etc.).

---

## 🚀 Best Practices bei der Anwendung

1. **Start Small** – Schreibe Standard-Styles für `xs`, erweitere mit `@include min-breakpoint(...)`.  
2. **Verwende `responsive-property`** für Eigenschaften wie `font-size`, `margin`, `padding`.  
3. **Layout-Grid** mit `between-breakpoints` einschränken, wenn z. B. 2-Spalten nur auf Tablets aktiv sein sollen.  
4. **Debugging aktivieren**, während du Layouts baust.  

---

Mit diesen Beispielen bist du in der Lage, **komplette responsive Layouts** nur mit den Breakpoint-Mixins dieser Library umzusetzen.

----

## ✅ Vorteile dieser Breakpoints-Library

- Einheitliche Breakpoints für alle Projekte  
- Lesbare Mixins statt komplexer Media Queries  
- Flexibel erweiterbar  
- Mobile-First Philosophie  
