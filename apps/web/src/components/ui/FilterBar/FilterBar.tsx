'use client'

import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import styles from './FilterBar.module.scss';

interface Destination {
    id: number,
    label: string
}

interface FilterPills {
    label: string
}

interface Props {
    destinationObj: Destination[],
    filterPillObj: FilterPills[]
}

const FilterBar = ({ destinationObj, filterPillObj }: Props ) => {
    return (
        <div className={styles.filterBarContainer}>
            <div className={styles.searchBarContainer}>
                <Autocomplete
                    disablePortal
                    options={destinationObj}
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
                    filterPillObj.map((pill, index) => (
                        <>
                            <div className={styles.filterPill} key={index}>
                                <span>{pill.label}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterBar;
