import Link from "next/link";

const ArticleItemList = ({ category, articles }) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl">
                {category}
            </h2>
            <div className="flex flex-col gap-2.5 text-lg">
                {articles.map((article, index) => (
                    <Link href={`/${article.id}`} key={index} className="text-neutral-900 hover:text-amber-700 transition duration-150">
                        {article.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList