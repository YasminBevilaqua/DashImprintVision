# Dashboard de Produção - Inspeção por Visão

Dashboard de monitoramento de produção industrial com inspeção por visão computacional.

## Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (estilização)
- **shadcn/ui** (componentes)
- **Recharts** (gráficos)
- **Lucide React** (ícones)

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run test     # Executar testes
```

## Identidade Visual

| Elemento | HEX | Uso |
|----------|-----|-----|
| Fundo da tela | `#121826` | Background principal |
| Cards | `#1A2030` | Containers, KPIs, gráficos |
| Texto principal | `#E8EBF0` | Títulos, valores |
| Texto secundário | `#7A8599` | Subtítulos, labels |
| Azul primário | `#2A8BD6` | Ícones, links, destaques |
| Verde sucesso | `#2A9966` | Status OK, eficiência |
| Laranja aviso | `#F59E0B` | Alertas, atenção |
| Vermelho erro | `#DC2626` | Erros, crítico |

## Fontes

- **Inter** (300, 400, 500, 600, 700, 800) - Texto principal
- **JetBrains Mono** (400, 500) - Números, relógio

## Estrutura

```
src/
├── components/
│   ├── dashboard/     # Componentes do dashboard
│   └── ui/            # Componentes shadcn/ui
├── pages/             # Páginas da aplicação
├── test/              # Configuração de testes
└── index.css          # Variáveis CSS e estilos globais
```

## Deploy

O projeto está configurado para deploy automático. Push na branch `main` dispara o build.
