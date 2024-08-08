import { useState } from 'react';

import { postQuery } from '../helpers/postQuery';


export const usePostQuery = () => {
    const [isPosting, setIsPosting] = useState(false);

    const addQuery = async (queryData) => {
        setIsPosting(true);

        try {
            return await postQuery(queryData);
        } finally {
            setIsPosting(false);
        }
    };

    return {
        isPosting,
        addQuery,
    };
};