# 🤖 Angular 19 PWA - Detección de Objetos con IA

[![Angular](https://img.shields.io/badge/Angular-19.1.5-red?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow.js-4.22.0-orange?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/js)
[![PWA](https://img.shields.io/badge/PWA-Ready-green?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Material Design](https://img.shields.io/badge/Material%20Design-Rose%20Red-pink?style=for-the-badge&logo=material-design&logoColor=white)](https://material.io/)

> **Autor:** Juan Jesús Martín Melero  
> **Proyecto del curso:** Angular 19 PWA con Machine Learning

Una Progressive Web App de última generación construida con Angular 19 que utiliza TensorFlow.js y el modelo MobileNet para detectar objetos en imágenes directamente en el navegador, sin necesidad de backend.

---

## 📋 Tabla de Contenidos

- [🎯 Características Principales](#-características-principales)
- [⚙️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [🧠 Funcionalidades de IA](#-funcionalidades-de-ia)
- [📱 Características PWA](#-características-pwa)
- [⚡ Angular 19 Features](#-angular-19-features)
- [🧪 Testing y Calidad](#-testing-y-calidad)
- [📦 Deploy y Producción](#-deploy-y-producción)
- [🔧 Configuración Avanzada](#-configuración-avanzada)
- [📚 API Reference](#-api-reference)
- [🤝 Contribución](#-contribución)

---

## 🎯 Características Principales

### 🤖 **Detección de Objetos con IA**
- **Modelo:** MobileNet v2 pre-entrenado
- **Procesamiento:** 100% en el navegador con TensorFlow.js
- **Clasificación:** En tiempo real con probabilidades
- **Sin Backend:** Todo el procesamiento en cliente

### 📱 **Progressive Web App Completa**
- **Service Worker:** Caching inteligente con ngsw-config.json
- **Web App Manifest:** Instalable como app nativa
- **Offline First:** Funcionamiento sin conexión
- **Actualizaciones Automáticas:** Sistema de detección y activación

### ⚡ **Angular 19 de Última Generación**
- **Standalone Components:** Sin NgModules tradicionales
- **Signals:** Estado reactivo moderno
- **OnPush Change Detection:** Rendimiento optimizado
- **Zone.js Optimizado:** Event coalescing mejorado

### 🎨 **Material Design Profesional**
- **Tema:** Rose Red prebuilt de Angular Material
- **Componentes:** Cards, Toolbars, Buttons, Icons
- **Responsive:** Adaptado a todos los dispositivos
- **Accesibilidad:** Cumple con estándares WCAG

---

## ⚙️ Stack Tecnológico

### **Frontend Core**
```json
{
  "framework": "Angular 19.1.5",
  "language": "TypeScript 5.7.3",
  "styling": "SCSS + Angular Material",
  "architecture": "Standalone Components"
}
```

### **Machine Learning**
```json
{
  "library": "TensorFlow.js 4.22.0",
  "model": "MobileNet v2.1.1",
  "processing": "Client-side only",
  "capabilities": "Object detection & classification"
}
```

### **PWA Technologies**
```json
{
  "service_worker": "Angular Service Worker",
  "manifest": "Web App Manifest",
  "caching": "ngsw-config.json",
  "installable": "Standalone mode"
}
```

### **Development Tools**
```json
{
  "testing": "Jasmine + Karma",
  "linting": "ESLint + Angular ESLint",
  "bundler": "Angular CLI + Webpack",
  "optimization": "AOT compilation + Tree shaking"
}
```

---

## 🏗️ Arquitectura del Proyecto

```
midudev-pwa/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/
│   │   │   └── 📁 shared/
│   │   │       ├── 📄 check-update.component.ts
│   │   │       └── 📄 header.component.ts
│   │   ├── 📁 pages/
│   │   │   └── 📁 object-detection/
│   │   │       ├── 📄 object-detection.component.ts
│   │   │       ├── 📄 object-detection.service.ts
│   │   │       ├── 📁 upload-card/
│   │   │       ├── 📁 prediction-list/
│   │   │       └── 📁 models/
│   │   │           └── 📄 prediction.interface.ts
│   │   ├── 📄 app.component.ts
│   │   └── 📄 app.config.ts
│   ├── 📄 main.ts
│   └── 📄 styles.scss
├── 📁 public/
│   ├── 📄 manifest.webmanifest
│   └── 📁 icons/
│       ├── 🖼️ icon-72x72.png
│       ├── 🖼️ icon-96x96.png
│       ├── 🖼️ icon-192x192.png
│       └── 🖼️ icon-512x512.png
├── 📄 ngsw-config.json
├── 📄 angular.json
├── 📄 package.json
└── 📄 tsconfig.json
```

### **Path Aliases Configurados**
```typescript
{
  "@components/*": "./src/app/components/*",
  "@pages/*": "./src/app/pages/*"
}
```

---

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- **Node.js:** >= 18.0.0
- **npm:** >= 8.0.0
- **Angular CLI:** >= 19.1.6

### **Instalación**
```bash
# Clonar el repositorio
git clone <repository-url>
cd pwa-angular-19

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### **Comandos Disponibles**
```bash
# 🚀 Desarrollo
npm start              # Iniciar servidor dev (http://localhost:4200)
ng serve               # Alternativa con Angular CLI

# 🔨 Build
npm run build          # Build de producción
npm run watch          # Build con watch mode

# 🧪 Testing
npm test               # Ejecutar tests unitarios
ng test                # Alternativa con Angular CLI

# 🔍 Linting
npm run lint           # Ejecutar ESLint
ng lint                # Alternativa con Angular CLI
```

---

## 🧠 Funcionalidades de IA

### **Modelo MobileNet v2**
```typescript
// Configuración del modelo
const modelConfig = {
  version: 2,        // MobileNet v2
  alpha: 1.0,        // Anchura del modelo (1.0 = estándar)
  inputRange: [0, 1] // Rango de entrada normalizado
};
```

### **Proceso de Detección**
1. **Carga del Modelo:** Asíncrona con indicador de progreso
2. **Procesamiento de Imagen:** Conversión a tensor compatible
3. **Clasificación:** Predicción con probabilidades
4. **Resultados:** Array de predicciones ordenadas

### **Interface de Predicción**
```typescript
interface Prediction {
  className: string;    // Nombre del objeto detectado
  probability: number;  // Confianza (0-1)
}
```

### **Servicio de Detección**
```typescript
@Injectable({ providedIn: 'root' })
export class ObjectDetectionService {
  isPredicting = signal<boolean>(false);
  
  async loadModel(): Promise<void> {
    // Carga asíncrona del modelo MobileNet
  }
  
  async predict(image: HTMLImageElement): Promise<Prediction[]> {
    // Clasificación de imagen con TensorFlow.js
  }
}
```

---

## 📱 Características PWA

### **Service Worker Configuration**
```json
{
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/**/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ]
      }
    }
  ]
}
```

### **Web App Manifest**
```json
{
  "name": "midudev-pwa",
  "short_name": "midudev-pwa",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "./",
  "start_url": "./",
  "icons": [
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
}
```

### **Sistema de Actualizaciones**
```typescript
@Component({
  selector: 'app-check-update',
  template: `
    @if(updateAvailable()) {
      <div class="update-banner">
        <span>{{ newVersionAvailable }}</span>
        <button mat-flat-button (click)="activateUpdate()">
          <mat-icon>refresh</mat-icon>
          {{ updateNow }}
        </button>
      </div>
    }
  `
})
export class CheckUpdateComponent {
  updateAvailable = signal(false);
  
  async activateUpdate(): Promise<void> {
    await this._swUpdate.activateUpdate();
    document.location.reload();
  }
}
```

---

## ⚡ Angular 19 Features

### **Standalone Components**
```typescript
@Component({
  selector: 'app-object-detection',
  standalone: true,  // 🆕 Sin NgModules
  imports: [UploadCardComponent, PredictionListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectDetectionComponent {
  // Componente moderno sin NgModules
}
```

### **Signals para Estado Reactivo**
```typescript
export class ObjectDetectionComponent {
  predictions = signal<Prediction[]>([]);  // 🆕 Estado reactivo
  file = signal<File | undefined>(undefined);
  isPredicting = this._objectDetector.isPredicting;
  
  handleImageUpload(file: File): void {
    this.file.set(file);  // Actualización reactiva
  }
}
```

### **Inyección Moderna**
```typescript
export class ObjectDetectionComponent {
  private readonly _objectDetector = inject(ObjectDetectionService);  // 🆕 inject()
  isPredicting = this._objectDetector.isPredicting;  // Signals del servicio
}
```

### **Zone.js Optimizado**
```json
{
  "polyfills": ["zone.js"],
  "zone.js": {
    "eventCoalescing": true,  // 🆕 Optimización de eventos
    "runOutsideAngular": true
  }
}
```

---

## 🧪 Testing y Calidad

### **Configuración de Tests**
```json
{
  "testRunner": "Karma",
  "framework": "Jasmine",
  "coverage": "Istanbul",
  "reporters": ["progress", "kjhtml"]
}
```

### **Estructura de Tests**
```typescript
describe('ObjectDetectionComponent', () => {
  let component: ObjectDetectionComponent;
  let fixture: ComponentFixture<ObjectDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectDetectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### **Linting con ESLint**
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "angular-eslint"
  ],
  "rules": {
    "@angular-eslint/directive-selector": ["error", { "type": "attribute" }],
    "@angular-eslint/component-selector": ["error", { "type": "element" }]
  }
}
```

---

## 📦 Deploy y Producción

### **Build Optimizado**
```bash
# Build de producción con AOT
ng build --configuration production

# Resultados:
# 📁 dist/midudev-pwa/
# ├── 📄 index.html
# ├── 📄 main.[hash].js
# ├── 📄 polyfills.[hash].js
# ├── 📄 styles.[hash].css
# ├── 📄 ngsw.json (Service Worker)
# └── 📄 manifest.webmanifest
```

### **Budgets Configurados**
```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kB",
      "maximumError": "1MB"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kB",
      "maximumError": "4kB"
    }
  ]
}
```

### **Optimizaciones Habilitadas**
- ✅ **AOT Compilation:** Ahead-of-Time
- ✅ **Tree Shaking:** Eliminación de código muerto
- ✅ **Minification:** Compresión de JS/CSS
- ✅ **Bundle Splitting:** División de chunks
- ✅ **Service Worker:** Caching inteligente
- ✅ **Compression:** Gzip/Brotli

---

## 🔧 Configuración Avanzada

### **TypeScript Estricto**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### **Angular Material Configuration**
```typescript
// tema Rose Red
import '@angular/material/prebuilt-themes/rose-red.css';

// Path aliases en tsconfig
{
  "paths": {
    "@components/*": ["./src/app/components/*"],
    "@pages/*": ["./src/app/pages/*"]
  }
}
```

### **TensorFlow.js Optimizations**
```json
{
  "allowedCommonJsDependencies": [
    "seedrandom",
    "node-fetch",
    "string_decoder",
    "long",
    "@tensorflow/tfjs",
    "@tensorflow-models/mobilenet"
  ]
}
```

---

## 📚 API Reference

### **ObjectDetectionService**
```typescript
@Injectable({ providedIn: 'root' })
export class ObjectDetectionService {
  // 🔄 Signals
  isPredicting = signal<boolean>(false);
  
  // 📥 Métodos
  async loadModel(): Promise<void> {
    // Carga el modelo MobileNet v2
  }
  
  async predict(image: HTMLImageElement): Promise<Prediction[]> {
    // Clasifica la imagen y retorna predicciones
  }
}
```

### **Prediction Interface**
```typescript
export interface Prediction {
  className: string;    // 🏷️ Nombre del objeto
  probability: number;  // 📊 Confianza (0.0 - 1.0)
}
```

### **Componentes Principales**
```typescript
// 🧠 Componente principal de detección
@Component({
  selector: 'app-object-detection',
  standalone: true,
  imports: [UploadCardComponent, PredictionListComponent]
})
export class ObjectDetectionComponent {
  predictions = signal<Prediction[]>([]);
  file = signal<File | undefined>(undefined);
}

// 📤 Componente de subida
@Component({
  selector: 'app-upload-card',
  standalone: true
})
export class UploadCardComponent {
  @Output() fileSelected = new EventEmitter<File>();
}

// 📋 Componente de resultados
@Component({
  selector: 'app-prediction-list',
  standalone: true
})
export class PredictionListComponent {
  @Input() predictions: Prediction[] = [];
}
```

---

## 🤝 Contribución

### **Guía de Desarrollo**
1. **Fork** el repositorio
2. **Crear** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** cambios: `git commit -m 'Add amazing feature'`
4. **Push** al branch: `git push origin feature/amazing-feature`
5. **Abrir** Pull Request

### **Code Style**
- **TypeScript:** Modo estricto
- **Angular:** Standalone components
- **Naming:** kebab-case para archivos, PascalCase para clases
- **Commits:** Conventional Commits

### **Flujo de Trabajo**
```bash
# 1. Actualizar dependencias
npm update

# 2. Ejecutar tests
npm test

# 3. Linting
npm run lint

# 4. Build de prueba
npm run build

# 5. Commit y push
git add .
git commit -m "feat: add new feature"
git push
```

---

## 📄 Licencia y Autor

### **👨‍💻 Autor**
**Juan Jesús Martín Melero**
- 📧 Email: [tu-email@ejemplo.com]
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)
- 💼 LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)

### **📚 Proyecto Educativo**
Este proyecto fue desarrollado como parte del curso **"Angular 19 PWA con Machine Learning"**, demostrando las capacidades más avanzadas de:

- ✅ Progressive Web Apps
- ✅ Machine Learning en el navegador
- ✅ Angular 19 features modernas
- ✅ Arquitectura escalable

### **📜 Licencia**
```
MIT License

Copyright (c) 2025 Juan Jesús Martín Melero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🎯 Características Implementadas

| Característica | Estado | Descripción |
|:---|:---:|:---|
| 🤖 **Detección de IA** | ✅ **Completo** | Detección de objetos con TensorFlow.js y MobileNet |
| 📱 **PWA** | ✅ **Completo** | Service Worker y manifest funcionales |
| 🎨 **UI/UX** | ✅ **Completo** | Material Design implementado |
| ⚡ **Angular 19** | ✅ **Completo** | Standalone components y signals |
| 🧪 **Tests** | ✅ **Completo** | Tests unitarios funcionales |
| 📦 **Build** | ✅ **Completo** | Optimización y budgets configurados |

---

<div align="center">

**🤖 ¡Gracias por visitar mi proyecto Angular 19 PWA! 🤖**

*Desarrollado con ❤️ por Juan Jesús Martín Melero*

[⭐ Star](../../stargazers) • [🐛 Report Issue](../../issues) • [📝 Ver Código](../../)

</div>