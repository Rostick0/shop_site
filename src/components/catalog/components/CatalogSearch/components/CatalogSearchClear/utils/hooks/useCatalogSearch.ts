import { useState } from 'react'

export const useCatalogSearch = () => {
    const [active, setActive] = useState<boolean>(false);
    const [search, setSeach] = useState<string>("");

    function checkInput(value: string): void {
        if (value) {
            setActive(prev => prev = true);

            return;
        }

        setActive(prev => prev = false);
    }

    function setInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const value = e.target.value;
        setSeach(prev => prev = value);

        checkInput(value);
    }

    function clear() {
        setSeach(prev => prev = "");
        setActive(prev => prev = false);
    }

    return {
        active,
        search,
        setInput,
        clear
    }
}