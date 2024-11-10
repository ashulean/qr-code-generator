# qr-code-generator
AI Generate app to create QR codes for quick wifi sharing.

# Local Install Instructions.

# First, create a new Next.js project
npx create-next-app@latest wifi-qr-generator --typescript --tailwind --eslint
cd wifi-qr-generator

# Install required dependencies
npm install lucide-react @radix-ui/react-select @radix-ui/react-label @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# Install shadcn/ui CLI tool
npx shadcn-ui@latest init

# When prompted, select these options:
# - Would you like to use TypeScript (recommended)? Yes
# - Which style would you like to use? Default
# - Which color would you like to use as base color? Slate
# - Where is your global CSS file? app/globals.css
# - Do you want to use CSS variables for colors? Yes
# - Where is your tailwind.config.js located? tailwind.config.js
# - Configure the import alias for components: @/components
# - Configure the import alias for utilities: @/lib/utils
# - Are you using React Server Components? Yes

# Install required shadcn/ui components
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add button
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
