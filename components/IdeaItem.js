import Link from "next/link";

export default function PostItem({ username, title, content, createdAt, id }) {
  return (
    <div className="card bg-background shadow-md m-2">
      <div className="card-body">
        <h2 className="card-title bg-comment rounded-md w-fit px-3 py-2 text-foreground">
          {title}
        </h2>
        <p className="text-foreground ">{content}</p>
        <div className="card-actions justify-end">
          <button className="group relative justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm font-medium text-background hover:bg-darkergreen ">
            <Link href={`/${username}/${id}`} className="font-bold">
              View more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
