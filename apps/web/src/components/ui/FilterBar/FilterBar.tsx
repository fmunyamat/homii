'use client'
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import styles from './FilterBar.module.scss';

interface DestinationFilter {
    id: number,
    label: string
}

interface FilterPills {
    label: string
}

interface Props {
    destinationArray: DestinationFilter[],
    filterPillArray: FilterPills[]
}

const FilterBar = ({ destinationArray, filterPillArray }: Props ) => {
    return (
        <div className={styles.filterBarContainer}>
            <div className={styles.searchBarContainer}>
                <Autocomplete
                    disablePortal
                    options={destinationArray}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search Destinations" />}
                />
            </div>
            <div className={styles.filterPillContainer}>
                <div className={styles.allFilterPill}>
                    <FilterAltIcon style={{color: '#31383f'}} />
                    <span>All Filters</span>
                    <KeyboardArrowDownIcon style={{color: '#31383f'}} />
                </div>
                {
                    filterPillArray.map((pill, index) => (
                        <React.Fragment key={index}>
                            <div className={styles.filterPill}>
                                <span>{pill.label}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterBar;
