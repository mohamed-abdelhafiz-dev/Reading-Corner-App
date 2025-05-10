# Reading Corner App

The **Reading Corner App** is a sleek, modern web application that helps users discover and manage their favorite books. Powered by the Google Books API and built with React, TypeScript, and Redux Toolkit, the app offers a fast, intuitive, and fully responsive reading discovery experience.

---

## Preview

![Reading Corner App Screenshot](public/assets/screenshot.png)

---

## Features

- **Search Books**: Search for books by title, author, publisher, or ISBN using the Google Books API.
- **Book Details**: View detailed information about a book, including its title, authors, description, and preview link.
- **Favorites Management**: Add or remove books from your favorites list, with data persistence using `localStorage`.
- **Pagination**: Navigate through search results with a user-friendly pagination system.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.

---

## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **API Integration**: [Google Books API](https://developers.google.com/books)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/) with TypeScript and React rules

---

## Project Structure

```
├── public/
│   ├── assets/                # Static images and files
├── src/
│   ├── components/            # Reusable UI components (e.g., BookCard, SearchBar)
│   ├── constants/             # Application-wide constants and enums
│   ├── pages/                 # Page-level components (Home.tsx, Favorites.tsx)
│   ├── redux/
│   │   ├── store.ts           # Redux store configuration
│   │   ├── slices/            # Redux slices (booksSlice.ts, favoritesSlice.ts)
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
```

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamed-abdelhafiz-dev/Reading-Corner-App.git
   cd Reading-Corner-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Environment Variables

This project uses the Google Books API. To use the app, ensure you have a valid API key. Replace the placeholder API key in the `fetchBooks` function in `src/redux/slices/booksSlice.ts`:

```ts
const res = await axios.get(
  `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=YOUR_API_KEY`
);
```

> ⚠️ **Note:** Do not expose your API key publicly. Use environment variables or a `.env.local` file for security.

---

## Deployment

The app is configured for deployment on **Vercel**. To deploy the app:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Google Books API](https://developers.google.com/books)
- [TailwindCSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
