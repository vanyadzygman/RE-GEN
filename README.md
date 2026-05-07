# RE-GEN: Resume generator
Coursework in the form of a resume generation site for the courses:
- "Programming Fundamentals";
- "Software Engineering Components".

### Author:
- **name**: Ivan Dzygman
- **e-mail**: vanyadzygman@gmail.com
- **telegram**: @vanyadzygman

## Project structure:
```
RE-GEN/
├── src/
│   ├── components/          ← UI components
│   │   ├── form/            ← form sections
│   │   ├── main/            ← header, preview
│   │   └── templates/       ← resume templates
│   ├── core/                ← core logic modules
│   │   ├── eventEmitter.ts
│   │   ├── generator.ts
│   │   ├── block.ts
│   │   └── resume.ts
│   ├── styles/              ← scss styles
│   └── main.ts              ← entry point
└── docs/                    ← documentation
```

## Program installation:
```bash
git clone https://github.com/vanyadzygman/RE-GEN.git
cd RE-GEN
npm install
npm run dev
```
