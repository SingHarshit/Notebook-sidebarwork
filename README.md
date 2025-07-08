This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

💡 Assumptions
The app is primarily intended for personal note organization with a simple UI.

It assumes a single-user, local usage scenario (no authentication or multi-user system).

Notes are either mock data or stored in local memory — persistent database is not yet integrated.

🐞 Known Issues / Enhancements
🚩 Known Issues
No backend storage — notes are lost on refresh if not connected to an API.

No markdown or rich text support yet.

✨ Planned Enhancements
Integrate persistent storage (e.g., MongoDB or SQLite).

Add authentication for multi-user support.

Enhance the UI with drag-and-drop note rearrangement.

Support markdown preview.

## 🚀 Working Code (Run locally)

```bash
git clone https://github.com/yourgithub/Notebook-sidebarwork.git
cd Notebook-sidebarwork
npm install
npm run dev
```

📸 Screenshots
![Screenshot 2025-07-08 150405](https://github.com/user-attachments/assets/54c6e0c3-50a3-4c1a-b068-5136264db466)

![Screenshot 2025-07-08 150545](https://github.com/user-attachments/assets/4fdcea18-78ee-4820-9035-950ba8b97b79)

![Screenshot 2025-07-08 150558](https://github.com/user-attachments/assets/7d00e887-1c0e-4fa4-94be-0add71246805)

![Screenshot 2025-07-08 150606](https://github.com/user-attachments/assets/5bcf9c4e-f172-4a77-b091-0188af1762f9)

![Screenshot 2025-07-08 150645](https://github.com/user-attachments/assets/acfc48ff-22ab-40bc-b219-ab2b55c6e136)


✍️ License
MIT License.
Feel free to fork and modify for your own use!

yaml
Copy
Edit

---

✅ **How to add the screenshots**

1. Place your screenshots in your project, for example in a `screenshots/` folder:






The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
