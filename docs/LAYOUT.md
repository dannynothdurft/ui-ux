# LAYOUT SYSTEM SCSS

Dieses Layout-System bietet flexible Mixins und CSS Custom Properties für Container, Grid, Flexbox, Positioning, Visibility, Aspect Ratio und Z-Index. Die Dokumentation erklärt, wie man die Mixins nutzt und welche Vorteile sie bringen.

---

## Inhaltsverzeichnis

1. [Container](#container)
2. [Grid](#grid)
3. [Flexbox](#flexbox)
4. [Position](#position)
5. [Visibility Utilities](#visibility-utilities)
6. [Aspect Ratio](#aspect-ratio)
7. [Z-Index](#z-index)
8. [CSS Custom Properties](#css-custom-properties)

---

## Container

**Mixin:** `@include container($max-width, $padding);`

- `$max-width` (optional) – Standard: `$container-max-width`
- `$padding` (optional) – Standard: `$container-padding`

**Beispiel:**
```scss
.my-container {
  @include container();
}
```

Dies erstellt einen Container mit max. Breite und automatisch zentriertem Inhalt.

---

## Grid

**Mixin:** `@include grid($columns, $gap);`

- `$columns` (optional) – Standard: `$grid-columns`
- `$gap` (optional) – Standard: `$grid-gap`

**Beispiel:**
```scss
.my-grid {
  @include grid(12, $spacing-lg);
}
```

Erstellt ein CSS Grid mit 12 Spalten und einem Abstand von `$spacing-lg`.

---

## Flexbox

**Mixin:** `@include flex($direction, $justify, $align, $wrap);`

- `$direction` – `row` oder `column` (default `row`)
- `$justify` – `flex-start`, `center`, etc. (default `flex-start`)
- `$align` – `stretch`, `center`, etc. (default `stretch`)
- `$wrap` – `nowrap`, `wrap` (default `nowrap`)

**Beispiel:**
```scss
.my-flex {
  @include flex(row, center, center, wrap);
}
```

---

## Position

**Mixin:** `@include position($position, $top, $right, $bottom, $left);`

**Beispiel:**
```scss
.my-absolute {
  @include position(absolute, 10px, null, null, 20px);
}
```

---

## Visibility Utilities

**Mixin:** `@include visually-hidden;` oder `@include sr-only;`

- Versteckt Elemente für visuelle Darstellung, bleibt aber für Screenreader verfügbar.

**Beispiel:**
```scss
.hidden-element {
  @include visually-hidden;
}
```

---

## Aspect Ratio

**Mixin:** `@include aspect-ratio($width, $height);`

- Erstellt ein Container-Element mit einem bestimmten Seitenverhältnis.

**Beispiel:**
```scss
.video-wrapper {
  @include aspect-ratio(16, 9);
}
```

---

## Z-Index

- `$z-index-dropdown`, `$z-index-sticky`, `$z-index-fixed`, `$z-index-modal-backdrop`, `$z-index-modal`, `$z-index-popover`, `$z-index-tooltip`, `$z-index-toast`
- Werte sind als CSS Custom Properties verfügbar.

**Beispiel:**
```scss
.my-modal {
  z-index: var(--z-index-modal);
}
```

---

## CSS Custom Properties

Alle Layout-Variablen sind als CSS Custom Properties verfügbar:

- Container: `--container-max-width`, `--container-padding`
- Grid: `--grid-columns`, `--grid-gap`
- Z-Index: `--z-index-dropdown`, `--z-index-sticky`, `--z-index-fixed`, `--z-index-modal-backdrop`, `--z-index-modal`, `--z-index-popover`, `--z-index-tooltip`, `--z-index-toast`

**Beispiel:**
```scss
.my-grid {
  gap: var(--grid-gap);
}
```

---

## Empfehlung

- Nutze die Mixins für alle Layout-Anforderungen, um ein konsistentes und responsive Design zu gewährleisten.
- Alle Werte sind über CSS Custom Properties dynamisch verfügbar und können im Theme leicht angepasst werden.

