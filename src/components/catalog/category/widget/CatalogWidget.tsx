import { FC, lazy, memo } from "react";
import { Container } from "@/UI/Container";
import { CatalogSearch } from "@/components/catalog/components/CatalogSearch";
import { useRouter } from "next/router";
import { CatalogAside } from "./../components/CatalogAside";

const CategoryWidget: FC = memo(
    (): JSX.Element => {
        const router = useRouter();
        const { category } = router.query;

        return (
            <>
                <Container>
                    <CatalogAside></CatalogAside>
                </Container>

                {/* <div className="category">
                    <div className="container">
                        <div className="category__container">
                            {category}
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
);

export default CategoryWidget;