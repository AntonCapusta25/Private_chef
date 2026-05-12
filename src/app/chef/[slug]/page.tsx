import { chefs } from "@/lib/data";
import { notFound } from "next/navigation";
import ChefProfile from "@/components/chef/ChefProfile";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return chefs.map((chef) => ({
        slug: chef.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const chef = chefs.find((c) => c.slug === slug);

    if (!chef) return { title: "Chef Not Found" };

    return {
        title: `${chef.name} - Private Chef Experience`,
        description: chef.description,
    };
}

export default async function ChefPage({ params }: Props) {
    const { slug } = await params;
    const chef = chefs.find((c) => c.slug === slug);

    if (!chef) {
        notFound();
    }

    return <ChefProfile chef={chef} />;
}
