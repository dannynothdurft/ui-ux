# SPACING SYSTEM (SCSS)

Dieses Dokument beschreibt das **Spacing-System** deines SCSS-Frameworks.

---

## 1. Übersicht
Das Spacing-System stellt konsistente Abstände zwischen Elementen sicher. Es umfasst:
- Eine **Abstands-Skala** von `xxs` bis `9xl`
- **Responsive Abstände** für Container und Sektionen
- **Mixins** für Padding, Margin und Layout-Abstände
- **CSS Custom Properties** und **Utility-Klassen**

Alle Werte basieren auf der Basis-Einheit: `1rem = 16px`.

---

## 2. Abstands-Skala
| Schlüssel | Wert |
|-----------|-----|
| 0         | 0   |
| xxs       | 0.125rem (2px) |
| xs        | 0.25rem (4px) |
| sm        | 0.5rem (8px) |
| md        | 0.75rem (12px) |
| lg        | 1rem (16px) |
| xl        | 1.5rem (24px) |
| xxl       | 2rem (32px) |
| 3xl       | 2.5rem (40px) |
| 4xl       | 3rem (48px) |
| 5xl       | 4rem (64px) |
| 6xl       | 5rem (80px) |
| 7xl       | 6rem (96px) |
| 8xl       | 8rem (128px) |
| 9xl       | 10rem (160px) |
| container | 1.5rem |
| section   | 4rem |

---

## 3. Funktionen
### 3.1 Spacing-Wert abrufen
```scss
padding: spacing('md'); // 0.75rem
```

### 3.2 Responsive Spacing
```scss
margin-bottom: spacing-responsive('section', 'lg');
```

### 3.3 Pixel zu REM
```scss
width: px-to-rem(32px); // 2rem
```

---

## 4. Mixins
### 4.1 Padding
```scss
@include padding(spacing('sm'), spacing('md')); // shorthand für padding-top/right/bottom/left
```

### 4.2 Margin
```scss
@include margin(spacing('lg')); // gleiches Prinzip wie padding
```

### 4.3 Layout-Spacing
```scss
@include layout-spacing('section');   // margin-bottom mit responsive Werten
@include layout-spacing('container'); // padding-left & padding-right mit responsive Werten
```

### 4.4 Responsive Spacing Mixin
```scss
@include responsive-spacing('padding-left', spacing('container'), (
  'sm': spacing-responsive('container','sm'),
  'md': spacing-responsive('container','md'),
  'lg': spacing-responsive('container','lg'),
  'xl': spacing-responsive('container','xl')
));
```

---

## 5. CSS Custom Properties
Alle Werte sind als CSS-Variablen verfügbar:
```scss
:root {
  --spacing-md: 0.75rem;
  --spacing-lg: 1rem;
  --spacing-container: 1.5rem;
  --spacing-section: 4rem;
}
```

---

## 6. Utility-Klassen
Schnelle Anwendung ohne SCSS-Mixins:
```scss
<p class="p-md">Padding Medium</p>
<div class="m-lg">Margin Large</div>
<div class="gap-sm">Flex/Grids Gap Small</div>
```
Alle Schlüssel der Skala (`xxs` bis `9xl`) werden unterstützt.

---

## 7. Hinweise
- Verwende Mixins in SCSS, wenn du dynamische Werte oder responsive Abstände benötigst.
- Utility-Klassen sind ideal für schnelle prototypische Anpassungen.
- Responsive Breakpoints sind standardmäßig `sm`, `md`, `lg`, `xl`. Du kannst die Werte in `$spacing-responsive` anpassen.

---

**Ende der Dokumentation**

