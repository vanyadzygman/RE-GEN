# RE-GEN: Resume generator
Laboratory documentation

## How laboratory work was implemented:

### Laboratory work 1 — Generators and Iterators
**File:** `src/core/generator.ts`

**Usage:**
- Each time the user adds a new work experience or education block, the generator produces a unique ID for that block (`block-1`, `block-2`, etc.)
- This ID is used to identify and manage dynamic blocks on the page
  
### Laboratory work 2 — Library and Modules
**File:** `src/core/package.json`, `src/core/index.ts`

**Usage:**
- The `src/core` folder is structured as a separate local package `core`
- It is connected to the main project via `package.json` as a local dependency: `"core": "file:./src/core"`
- `index.ts` exports only the functions needed by `main.ts`

### Laboratory work 3 — Memoization Function
**File:** `src/core/memoize.ts`

**Usage:**
- The `memoize` function wraps the resume generation function
- When the user clicks "Generate" with the same form data, the result is returned from cache instead of rebuilding the HTML
- Cache key is built from the function arguments using `JSON.stringify`

### Laboratory work 4 — Bi-Directional Priority Queue
**File:** `src/core/queue.ts`

**Usage:**
- A `PriorityQueue` class manages the order of resume sections
- Each section is added with a priority: personal data (1), experience (2), education (3), biography (4)
- Sections are dequeued from highest to lowest priority and logged to the console before rendering

### Laboratory work 5 — Async Array Functions
**File:** `src/core/asyncFind.ts`

**Usage:**
- A `findCallback` function validates the form before resume generation
- It iterates through required fields and finds the first empty one
- If an empty field is found — an alert is shown and generation is cancelled
- If all fields are filled — resume generation proceeds

### Laboratory work 6

### Laboratory work 7 - Reactive Communication with EventEmitter
**File:** `src/core/eventEmitter.ts`

**Usage:**
- A custom EventEmitter connects the form and the preview panel
- When the user clicks "Generate", the button emits a `resume:generate` event with form data
- The preview panel listens to this event and renders the resume template with the provided data

### Laboratory work 8 — Authentication Proxy

**File:** `src/core/formProxy.ts`

**Usage:**
- A `Proxy` intercepts access to resume form data
- Each time the template reads a field (name, position, email, etc.), the proxy logs it to the console
- This allows tracking which fields are accessed during resume generation

### Laboratory work 9 — Logging Decorator
**File:** `src/core/logger.ts`

**Usage:**
- A `log` decorator wraps the `getClassicTemplate` function
- Each time the user clicks "Generate", the logger records the function name, arguments, and execution time to the console
- If an error occurs during generation, the logger catches and displays it
