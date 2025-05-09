import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div className="fixed-centered text-xl w-full max-w-[500px] flex flex-col items-center gap-2">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link className="self-stretch" to="/home">
        <button
          className="mt-2 w-full bg-[var(--theme-color)] text-white rounded-md py-1 cursor-pointer text-lg font-semibold hover:bg-[var(--theme-color)]/90"
          type="submit"
        >
          Go back to home page
        </button>
      </Link>
    </div>
  );
}
