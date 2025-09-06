# Deployment Guide - GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

## Configuración Inicial

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**

### 2. Configurar Permisos

1. Ve a **Settings** → **Actions** → **General**
2. En **Workflow permissions**, selecciona **Read and write permissions**
3. Marca la casilla **Allow GitHub Actions to create and approve pull requests**

## Cómo Funciona

### GitHub Action

El archivo `.github/workflows/deploy.yml` contiene la configuración que:

1. **Se ejecuta automáticamente** cuando haces push a la branch `main`
2. **Instala las dependencias** usando `npm ci`
3. **Construye el proyecto** usando `npm run build`
4. **Despliega automáticamente** a GitHub Pages

### Configuración de Vite

El archivo `vite.config.ts` está configurado con:
- `base: '/Aprendo-mas/'` - Para que funcione correctamente en GitHub Pages

## URLs

Una vez configurado, tu aplicación estará disponible en:
- **URL de GitHub Pages**: `https://[tu-usuario].github.io/Aprendo-mas/`

## Comandos Útiles

### Desarrollo Local
```bash
npm run dev
```

### Build Local
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

## Troubleshooting

### Si la página no carga correctamente:

1. **Verifica la configuración de base**: Asegúrate de que `base: '/Aprendo-mas/'` en `vite.config.ts` coincida con el nombre de tu repositorio
2. **Revisa los logs de GitHub Actions**: Ve a la pestaña **Actions** en tu repositorio para ver si hay errores
3. **Verifica los permisos**: Asegúrate de que GitHub Pages esté habilitado y configurado correctamente

### Si los assets no cargan:

1. **Verifica la configuración de base** en `vite.config.ts`
2. **Limpia el cache del navegador**
3. **Espera unos minutos** después del deploy para que los cambios se propaguen

## Estructura del Proyecto

```
.github/
  workflows/
    deploy.yml          # GitHub Action para deploy automático
vite.config.ts          # Configuración de Vite con base path
package.json            # Scripts y dependencias
```

## Notas Importantes

- El deploy se ejecuta automáticamente en cada push a `main`
- Los cambios pueden tardar unos minutos en aparecer en GitHub Pages
- Asegúrate de que el nombre del repositorio coincida con la configuración de `base` en Vite
