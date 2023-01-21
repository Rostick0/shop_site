import { useRouter } from "next/router";
import DefaultLayout from '@/layout/default/DefaultLayout';

export default function PageCatalogCaregory() {
    const router = useRouter();
    const { category } = router.query;

    return (
        <DefaultLayout>
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