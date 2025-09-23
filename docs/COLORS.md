# 🎨 Colors – Entwickler-Dokumentation (SCSS Library)

Diese Dokumentation beschreibt das **Farb-System** deiner UI/UX-Library inkl. **Shades, neutrale Farben, semantische Variablen**, Dark Mode-Unterstützung und **SCSS-Mixins**. Die Struktur orientiert sich an der Breakpoints-Dokumentation, mit Fokus auf **Mixins und Funktionen**, die die Nutzung vereinfachen.

---

## 🧭 Übersicht

* Farbpalletten (Primary, Secondary, Accent, Support, Neutral)
* CSS Custom Properties (semantische Shortcuts)
* SCSS-Funktionen zur Farbwahl
* Mixins für Background, Text und Border Colors
* Dark Mode Unterstützung
* Praxisbeispiele

---

## 🎨 Paletten & Neutrale Farben

### Primary

* Shades 50–900 (Standard: 500)
* CSS-Variablen: `--color-primary-50` … `--color-primary-900`
* Shortcut: `--color-primary` → `var(--color-primary-500)`

### Secondary

* Shades 50–900 (Standard: 500)
* Shortcut: `--color-secondary` → `var(--color-secondary-500)`

### Accent

* Shades 50–900 (Standard: 500)
* Shortcut: `--color-accent` → `var(--color-accent-500)`

### Support-Farben

* Success: `--color-success-500`
* Warning: `--color-warning-500`
* Error: `--color-error-500`
* Info: `--color-info-500`

### Neutrale Graustufen

* `--color-gray-50` … `--color-gray-900`
* Nutzung: Text, Backgrounds, Borders

### Weiß & Schwarz

* `--color-white`, `--color-black`

---

## 🔧 Funktionen (SCSS)

* `palette($palette-or-name, $shade)` – gibt Farbe aus Palette zurück
* `color($name, $shade: 500)` – Shortcut für Palette
* `gray($shade)` – Shortcut für Graustufen
* `color-with-alpha($value, $alpha)` – RGBA-Farbe
* `palette-opacity($palette-or-name, $shade, $alpha)` – RGBA aus Palette

**Beispiel: Farbwert direkt aus Palette**

```scss
$primaryColor: color('primary', 500);
$gray700: gray(700);
```

---

## 🛠 SCSS Mixins

### Background-Farbe

```scss
@include bg-color('primary', 500);
```

Setzt die Hintergrundfarbe auf die gewählte Palette + Shade.

### Textfarbe

```scss
@include text-color('gray', 900);
```

Setzt die Textfarbe auf die gewählte Palette + Shade.

### Border-Farbe

```scss
@include border-color('gray', 300);
```

Setzt die Rahmenfarbe (border-color) auf Palette + Shade.

### Auto-Contrast (Background + Text)

```scss
@include color-variant(palette('accent', 500));
```

Setzt Background und automatisch kontrastierende Textfarbe. Optional kann ein Border-Wert angegeben werden.

### Farb-Transition

```scss
@include color-transition(all, 0.3s);
```

Fügt sanfte Übergänge für Farbeigenschaften hinzu.

---

## 🌙 Dark Mode Unterstützung

Automatisch via `prefers-color-scheme: dark`. Alle semantischen Variablen werden überschrieben:

```scss
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: var(--color-gray-100);
    --color-text-secondary: var(--color-gray-300);
    --color-background-primary: var(--color-gray-900);
    --color-background-secondary: var(--color-gray-800);
    --color-background-tertiary: var(--color-gray-700);
    --color-border-primary: var(--color-gray-700);
  }
}
```

---

## 💡 Best Practices

* **Immer Mixins nutzen**, keine direkten CSS-Variablen im SCSS.
* Verwende **semantische Variablen** (`--color-*`) in Templates.
* Neue Farben in `$palettes` ergänzen → automatisch CSS-Variablen generiert.
* `gray()` für neutrale Elemente, Text, Hintergrund, Border.
* Dark Mode wird automatisch berücksichtigt.

---

## 🖥 Praxisbeispiele

```scss
.button-primary {
  @include bg-color('primary', 500);
  @include text-color('primary', 50);
  @include color-transition(all, 0.2s);
}

.card {
  @include bg-color('gray', 50);
  @include border-color('gray', 300);
  @include text-color('gray', 900);
}

.alert-success {
  @include color-variant(palette('success', 500));
}
```
