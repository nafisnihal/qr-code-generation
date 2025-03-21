# QR Code Subscription Form

A **React/Next.js** subscription form where users enter their phone number and receive a **QR code** for confirmation. The QR code redirects to a confirmation link upon scanning.

## 🚀 Features

- 📱 **Phone Number Input** with validation  
- ✅ **Validation** powered by `react-hook-form` and `zod`  
- 🔄 **Loading State** while generating the QR code  
- 📷 **QR Code Generation** using `qrcode.react`  
- 🎨 **Fully Responsive** with `Tailwind CSS` and `shadcn/ui`  


## 🌐 Live Preview
Check out the live preview here: **[Live Demo](https://rizz-pharma-nn.vercel.app/)**

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/nafisnihal/qr-code-generation.git
   ```
2. Navigate to the project directory:
   ```sh
   cd qr-code-generation
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. There maybe some issues with peer dependency, for that case:
   ```sh
   npm install --force
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```