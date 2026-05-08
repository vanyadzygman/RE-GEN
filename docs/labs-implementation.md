# RE-GEN: Resume generator
Laboratory documentation

## How laboratory work was implemented:

### Laboratory work 1 — Generators and Iterators
**File:** `src/core/generator.ts`

**Usage:**
- Each time the user adds a new work experience or education block, the generator produces a unique ID for that block (`block-1`, `block-2`, etc.)
- This ID is used to identify and manage dynamic blocks on the page
  
### Laboratory work 2

### Laboratory work 3

### Laboratory work 4

### Laboratory work 5

### Laboratory work 6

### Laboratory work 7 - Reactive Communication with EventEmitter
**File:** `src/core/eventEmitter.ts`

**Usage:**
- A custom EventEmitter connects the form and the preview panel
- When the user clicks "Generate", the button emits a `resume:generate` event with form data
- The preview panel listens to this event and renders the resume template with the provided data

### Laboratory work 8

### Laboratory work 9 — Logging Decorator
**File:** `src/core/logger.ts`

**Usage:**
- A `log` decorator wraps the `getClassicTemplate` function
- Each time the user clicks "Generate", the logger records the function name, arguments, and execution time to the console
- If an error occurs during generation, the logger catches and displays it
