import { useRouter } from "next/router";
import { DefaultLayout } from '@/modules/layout/default';
import { Container } from "@/UI/Container";
import { CatalogSearch } from "@/modules/catalog/components/CatalogSearch";

export default function PageCatalogCaregory() {
    const router = useRouter();
    const { category } = router.query;

    return (
        <DefaultLayout>
            <Container>
                <CatalogSearch></CatalogSearch>
            </Container>

            <div className="category">
                <div className="container">
                    <div className="category__container">
                        {category}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}