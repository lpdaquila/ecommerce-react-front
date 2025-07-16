import { Box, CheckboxGroup, Separator, Slider, Text } from "@radix-ui/themes";
import { APIGetProducts, Product } from "../../app/types/products";
import { Fragment, useEffect, useState } from "react";

type ProductFilterProps = {
    products: Product[];
    onFilterChange: (filter: {
        priceRange: [number, number];
        subVars: Record<string, string[]>;
    }) => void;
}

export function ProductFilterHandler({ products, onFilterChange }: ProductFilterProps) {
    const maxPrice = Math.max(
        ...((products ?? []).map(product => product.sale_price))
    )

    const [filters, setFilters] = useState({
        priceRange: [0, 10000],
        subVars: {} as Record<string, string[]>,
    });

    const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice ?? 0])

    const allFilters: Record<string, Set<string>> = {};

    products.forEach((product) => {
        const subVars = product.sub_vars;
        if (!subVars) return;

        Object.entries(subVars).forEach(([varType, options]) => {
            if (!allFilters[varType]) {
                allFilters[varType] = new Set();
            }
            (Array.isArray(options)
                ? options
                : Object.values(options)).forEach((opt) =>
                    allFilters[varType].add(opt));
        });
    });

    const groupedFilters: Record<string, string[]> = {};
    Object.entries(allFilters).forEach(([varType, opts]) => {
        groupedFilters[varType] = Array.from(opts);
    })

    const handlePriceChange = (newRange: [number, number]) => {
        setFilters(prev => {
            const newFilters = {
                ...prev, priceRange: newRange,
                subVars: prev.subVars as Record<string, string[]>
            }
            setPriceRange(newRange)
            onFilterChange(newFilters)
            return newFilters;
        })
    }

    const handleCheckboxChange = (varType: string, option: string) => {
        setFilters(prev => {
            const current = prev.subVars[varType] || [];

            const updated = current.includes(option)
                ? current.filter(item => item !== option)
                : [...current, option];

            const newSubVars = {
                ...prev.subVars,
                [varType]: updated.length > 0 ? updated : [],
            };

            // Ensure priceRange is [number, number]
            const newFilters = { ...prev, subVars: newSubVars, priceRange: prev.priceRange as [number, number] };
            onFilterChange(newFilters);
            return newFilters
        })
    }

    return (
        <>
            <Text>Price</Text>
            <Text as="span">${priceRange[0]} - ${priceRange[1]}</Text>
            <Slider
                defaultValue={[maxPrice]}
                min={0}
                max={maxPrice}
                value={priceRange}
                step={10}
                onValueChange={(value: [number, number]) => handlePriceChange(value)}
            />
            {Object.entries(groupedFilters).map(([varType, options]) => (
                <Fragment key={varType}>
                    <Text>{varType}</Text>
                    <Separator size="4" />
                    <CheckboxGroup.Root>
                        {Array.isArray(options) && options.map((option) => (
                            <CheckboxGroup.Item
                                key={`${varType}-${option}`}
                                value={option}
                                onClick={() => handleCheckboxChange(varType, option)}
                            >
                                {option}
                            </CheckboxGroup.Item>
                        ))}
                    </CheckboxGroup.Root>
                </Fragment>
            ))}
        </>
    )
}