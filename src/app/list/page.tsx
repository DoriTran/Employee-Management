"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { EmployeeCard, ListHeader } from "@/components";
import { getEmployees } from "@/actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import styles from "./page.module.scss";

const ListPage = () => {
  const [searchString, setSearchString] = useState<string>("");
  // const [totalPage, setTotalPage] = useState<number>(0);

  const fetchEmployees = async ({ pageParam = 1 }) => {
    const response = await getEmployees(searchString, pageParam, 10);
    return response;
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["ListPage"],
    queryFn: fetchEmployees,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.totalPages;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPages ? nextPage : undefined;
    },
  });

  useEffect(() => {
    // Function to fetch employees data
    const handleScroll = () => {
      if (isFetching || isFetchingNextPage || !hasNextPage) return;

      const isBottom =
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight;

      if (isBottom && hasNextPage) fetchNextPage();
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNextPage]);

  return (
    <div className={styles.pageContainer}>
      <ListHeader searchString={searchString} setSearchString={setSearchString} onSearch={() => {}} />
      <div className={styles.listEmployee}>
        {data?.pages?.map((pageItems: any) =>
          pageItems.pageItems.map((employee: any) => <EmployeeCard key={employee.id} employee={employee} />),
        )}
        {(isFetching || isFetchingNextPage) &&
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton animation="wave" key={index} variant="rectangular" width={300} height={370} />
          ))}
      </div>
    </div>
  );
};

export default ListPage;
