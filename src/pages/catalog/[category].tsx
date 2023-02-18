import { useRouter } from "next/router";
import { DefaultLayout } from '@/components/layout/default';
import { Container } from "@/UI/Container";
import { CatalogSearch } from "@/components/catalog";
import { CategoryWidget } from "@/components/catalog/category";

export default function PageCatalogCaregory() {
    const router = useRouter();
    const { category } = router.query;

    return (
        <DefaultLayout>
            <Container>
                <CatalogSearch></CatalogSearch>
            </Container>

            <CategoryWidget></CategoryWidget>
        </DefaultLayout>
    )
}