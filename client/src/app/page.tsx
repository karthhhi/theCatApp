"use client"
import React, { useState, useEffect, use } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './home.module.scss';
import Card from '@components/Card';
import Input from '@components/Input';
import Select from '@components/Select';
import Pagination from '@components/Pagination';
import Loader from '@components/Loader';
import { getAllCats } from '@services/cat-api';

export default function Home() {
    const [allCats, setAllCats] = useState([]);
    const [name, setName] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const search = searchParams ? searchParams.get('breed') : '';

    useEffect(() => {
        // Reset page number when breed changes
        setCurrentPage(1);
    }, [search]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async (name: string) => {
            const queryObj = {
                ...(name ? { 'name': name } : {}),
                ...(search ? { 'breed': search } : {}),
                page: currentPage,
                limit: 10,
                ...(sortValue ? { 'sortBy': sortValue, 'sortOrder': sortOrder } : {}),
            }
            const { cats, totalPages } = await getAllCats(queryObj);
            setLoading(false);
            setTotalPages(totalPages);
            setAllCats(cats as []);
        }
        fetchData(name);
    }, [name, search, currentPage, sortValue, sortOrder]);

    const {
        home__container,
        home__itemContainer,
        home__dataItem,
        home__filterBar,
        home__actionContainer,
        home__filterContainer,
        home__sortContainer,
        home__notFound
    } = styles;

    return (
        <div className={home__container}>
            <div className={home__filterBar}>
                <h4>Breed: {search || 'All'}</h4>
                <div className={home__actionContainer}>
                    <div className={home__filterContainer}>
                        <Input type="search" label="Filter By Name" onChange={setName} />
                    </div>
                    <div className={home__sortContainer}>
                        <Select
                            label="Sort By"
                            onChange={(val) => { setSortValue(val) }}
                            options={[
                                { value: 'name', label: 'Name' },
                                { value: 'weight', label: 'Weight' }
                            ]}
                        />
                        <Select
                            onChange={(val) => { setSortOrder(val) }}
                            hasNullValue={false}
                            options={[
                                { value: 'asc', label: 'ASC' },
                                { value: 'desc', label: 'DESC' }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className={home__itemContainer}>
                {allCats.length === 0 && (
                    <div className={home__notFound}>
                        {loading ? <Loader /> : <>No cats found!</>}
                    </div>
                )}
                {allCats.map(({ name, weight, breed }) => (
                    <Card
                        title={name}
                        description={
                            <>
                                <div className={home__dataItem}>Breed: {breed}</div>
                                <div className={home__dataItem}>Weight: {weight}</div>
                            </>
                        }
                    />))
                }
            </div>
            {totalPages > 0 &&
                (<Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePrevPage={() => setCurrentPage(currentPage - 1)}
                    handleNextPage={() => setCurrentPage(currentPage + 1)}
                />)}
        </div>);
}
