import { getArticlesData } from "../../../lib/articles";
import Image from "next/image";

const Article = async ({ params }) => {
    const { slug } = await params

    const articleData = await getArticlesData(slug)

    return (
        <section className="mx-auto container pt-32 flex flex-col gap-8">

            <h1 className="text-[clamp(2.5rem,5vw,6rem)] tracking-tight font-bold capitalize leading-none text-darkp">
                {articleData.h1 || articleData.title}
            </h1>

            {articleData.image && (
                <div className="mt-16 w-full">
                    <Image 
                        src={articleData.image} 
                        alt={articleData.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg object-cover object-top aspect-video"
                    />
                </div>
            )}

            <article 
                className="mt-16 article max-w-3xl mx-auto" 
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
            />
        </section>
    )
}

export default Article